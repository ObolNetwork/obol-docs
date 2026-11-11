#!/usr/bin/env node
// Regenerates the vendored Obol SDK (2.x) reference under /sdk from an
// obol-sdk checkout, using the SDK's own TypeDoc setup (typedoc.json).
//
// Usage: node scripts/update-sdk-reference.mjs <path-to-obol-sdk-checkout>
//
//   git clone https://github.com/ObolNetwork/obol-sdk && cd obol-sdk
//   git checkout v2.16.1 && yarn install --frozen-lockfile --ignore-scripts
//   cd ../obol-docs && node scripts/update-sdk-reference.mjs ../obol-sdk
//
// The checkout should be the released commit (clean, tagged v<version>), as
// the "Defined in" links point at github.com/ObolNetwork/obol-sdk at its HEAD.
//
// What it does:
//   - runs TypeDoc in the checkout (output goes to a temp dir, not the checkout)
//   - writes docs/sdk/ and versioned_docs/version-<latest>/sdk/ (identical):
//     adds `sidebar_label` / `slug` front matter to every page (existing front
//     matter is kept), turns the merged README into the "Intro" page with a
//     `**SDK Version:**` line, and points README links at pages of this site
//   - deletes pages of exports that no longer exist
//   - rewrites the `items` of the SDK categories (Enumerations, Classes, ...)
//     in sidebars.js and versioned_sidebars/version-<latest>-sidebars.json,
//     sorted case-insensitively; nothing else in those files is touched
import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const SDK_REPO = 'https://github.com/ObolNetwork/obol-sdk';
// TypeDoc output directories, each backed by a sidebar category whose
// generated-index slug is /sdk/<dir>.
const KINDS = [
  'enumerations',
  'classes',
  'interfaces',
  'type-aliases',
  'variables',
  'functions',
];
// Absolute links in the SDK README that have a page on this site
// (targets are relative to sdk/index.md).
const README_LINKS = {
  'https://docs.obol.org/api': '../api/what-is-this-api.md',
  'https://docs.obol.org/docs/advanced/quickstart-sdk':
    '../advanced-and-troubleshooting/advanced/create-a-dv-using-the-sdk.mdx',
};
const DEFAULT_INDEX_FRONT_MATTER =
  '---\nsidebar_label: "Intro"\nslug: /sdk/index\n---\n';

const fail = (msg) => {
  console.error(`✖ ${msg}`);
  process.exit(1);
};

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sdkArg = process.argv[2];
if (!sdkArg || sdkArg.startsWith('-')) {
  fail('Usage: node scripts/update-sdk-reference.mjs <path-to-obol-sdk-checkout>');
}
const sdkDir = path.resolve(sdkArg);
const pkgPath = path.join(sdkDir, 'package.json');
if (!fs.existsSync(pkgPath)) fail(`No package.json in ${sdkDir}`);
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
if (pkg.name !== '@obolnetwork/obol-sdk') {
  fail(`${sdkDir} is ${pkg.name}, not @obolnetwork/obol-sdk`);
}
const typedocBin = path.join(sdkDir, 'node_modules', '.bin', 'typedoc');
if (!fs.existsSync(typedocBin)) {
  fail(`TypeDoc is not installed in ${sdkDir}: run \`yarn install --frozen-lockfile --ignore-scripts\` there`);
}

const git = (...args) =>
  execFileSync('git', ['-C', sdkDir, ...args], {encoding: 'utf8'}).trim();
const revision = git('rev-parse', 'HEAD');
if (git('status', '--porcelain', '--untracked-files=no')) {
  console.warn('⚠ the SDK checkout has uncommitted changes; source links may not match');
}
if (!git('tag', '--points-at', 'HEAD').split('\n').includes(`v${pkg.version}`)) {
  console.warn(`⚠ HEAD of the SDK checkout is not tagged v${pkg.version}`);
}

// 1. Run TypeDoc with the SDK's typedoc.json. The overrides only make the
// output independent of where the checkout lives and how git is set up.
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'obol-sdk-typedoc-'));
let raw;
try {
  execFileSync(
    typedocBin,
    [
      '--out', tmp,
      '--displayBasePath', path.join(sdkDir, 'src'),
      '--gitRevision', revision,
      '--sourceLinkTemplate', `${SDK_REPO}/blob/{gitRevision}/{path}#L{line}`,
    ],
    {cwd: sdkDir, stdio: 'inherit'},
  );
  raw = new Map(
    fs
      .readdirSync(tmp, {recursive: true, withFileTypes: true})
      .filter((e) => e.isFile())
      .map((e) => {
        const abs = path.join(e.parentPath, e.name);
        return [
          path.relative(tmp, abs).split(path.sep).join('/'),
          fs.readFileSync(abs, 'utf8'),
        ];
      }),
  );
} finally {
  fs.rmSync(tmp, {recursive: true, force: true});
}

// 2. Sanity-check the shape of the output.
if (!raw.has('index.md')) fail('TypeDoc produced no index.md');
for (const file of raw.keys()) {
  if (file === 'index.md') continue;
  const [dir, name, ...rest] = file.split('/');
  if (!KINDS.includes(dir) || rest.length || !name?.endsWith('.md')) {
    fail(`Unexpected TypeDoc output "${file}": teach KINDS and the sidebars about it`);
  }
}

// 3. Transform pages.
const frontMatterOf = (text) => /^---\n[\s\S]*?\n---\n/.exec(text)?.[0];
const existingFrontMatter = (file) => {
  const p = path.join(root, 'docs', 'sdk', file);
  return fs.existsSync(p) ? frontMatterOf(fs.readFileSync(p, 'utf8')) : undefined;
};
// Paths outside src/ (types inherited from dependencies) are shown relative
// to the checkout, wherever its node_modules really lives.
const tidySourcePaths = (text) =>
  text.replace(/(^|[\s|(])(?:[^\s|()[\]]+\/)?node\\_modules\//gm, '$1node\\_modules/');

const pages = new Map();
for (const [file, text] of raw) {
  if (file === 'index.md') continue;
  const [dir, base] = file.split('/');
  const name = base.slice(0, -'.md'.length);
  const frontMatter =
    existingFrontMatter(file) ??
    `---\nsidebar_label: "${name}"\nslug: /sdk/${dir}/${name.toLowerCase()}\n---\n`;
  pages.set(file, `${frontMatter}\n${tidySourcePaths(text)}`);
}

let index = tidySourcePaths(raw.get('index.md'));
// The README's centred HTML title becomes a section heading under "Intro".
index = index.replace(/^<h1[^>]*>(.*?)<\/h1>$/m, '## $1');
for (const [from, to] of Object.entries(README_LINKS)) {
  index = index.replaceAll(`](${from})`, `](${to})`);
}
pages.set(
  'index.md',
  `${existingFrontMatter('index.md') ?? DEFAULT_INDEX_FRONT_MATTER}\n# Intro\n\n**SDK Version:** v${pkg.version}\n\n${index}`,
);

// 4. Check what Docusaurus would not: relative links, slug collisions, leaks.
const problems = [];
const slugs = new Map();
for (const [file, text] of pages) {
  const slug = /^slug: (.+)$/m.exec(frontMatterOf(text) ?? '')?.[1];
  if (!slug) problems.push(`${file}: no slug in front matter`);
  else if (slugs.has(slug)) problems.push(`${file}: slug ${slug} also used by ${slugs.get(slug)}`);
  else slugs.set(slug, file);

  for (const [, target] of text.matchAll(/\]\(([^)\s]+)\)/g)) {
    if (/^(?:[a-z]+:|#)/i.test(target)) continue;
    const rel = target.split('#')[0];
    if (rel.startsWith('../') && file === 'index.md') {
      // README_LINKS targets: other docs of this site.
      if (!fs.existsSync(path.join(root, 'docs', 'sdk', rel))) {
        problems.push(`${file}: broken link ${target}`);
      }
      continue;
    }
    const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(file), rel));
    if (!pages.has(resolved)) problems.push(`${file}: broken link ${target}`);
  }
  if (text.includes(sdkDir) || text.includes(os.homedir())) {
    problems.push(`${file}: contains a local path`);
  }
}
if (problems.length) fail(`Generated pages have problems:\n  ${problems.join('\n  ')}`);

// 5. Write both copies and update both sidebars.
const latest = JSON.parse(fs.readFileSync(path.join(root, 'versions.json'), 'utf8'))[0];
const targets = [
  {
    docs: path.join(root, 'docs', 'sdk'),
    sidebar: path.join(root, 'sidebars.js'),
  },
  {
    docs: path.join(root, 'versioned_docs', `version-${latest}`, 'sdk'),
    sidebar: path.join(root, 'versioned_sidebars', `version-${latest}-sidebars.json`),
  },
];

const listPages = (dir) =>
  fs.existsSync(dir)
    ? fs
        .readdirSync(dir, {recursive: true})
        .map((f) => f.split(path.sep).join('/'))
        .filter((f) => f.endsWith('.md'))
    : [];
const byName = (a, b) => {
  const [x, y] = [a.toLowerCase(), b.toLowerCase()];
  return x < y ? -1 : x > y ? 1 : a < b ? -1 : a > b ? 1 : 0;
};

const updateSidebar = (file) => {
  let text = fs.readFileSync(file, 'utf8');
  for (const dir of KINDS) {
    const names = [...pages.keys()]
      .filter((f) => f.startsWith(`${dir}/`))
      .map((f) => f.slice(dir.length + 1, -'.md'.length))
      .sort(byName);
    // The category is found by its generated-index slug; its `items` array
    // (flat: one object per page) is the next one after that.
    const slugAt = text.indexOf(`"slug": "/sdk/${dir}"`);
    const open = /^( *)"items": \[\n/m.exec(text.slice(slugAt));
    if (slugAt < 0 || !open) fail(`${file}: no sidebar category with slug /sdk/${dir}`);
    if (!names.length) fail(`No ${dir} pages left: remove that category from ${file} by hand`);
    const indent = open[1];
    const start = slugAt + open.index + open[0].length;
    const end = text.indexOf(`\n${indent}]`, start);
    if (end < 0) fail(`${file}: unterminated items of /sdk/${dir}`);
    const items = names
      .map(
        (name) =>
          `${indent}  {\n` +
          `${indent}    "type": "doc",\n` +
          `${indent}    "id": "sdk/${dir}/${name}",\n` +
          `${indent}    "label": "${name}"\n` +
          `${indent}  }`,
      )
      .join(',\n');
    text = text.slice(0, start) + items + text.slice(end);
  }
  fs.writeFileSync(file, text);
};

const before = new Set(listPages(targets[0].docs));
for (const target of targets) {
  fs.rmSync(path.join(target.docs, 'index.md'), {force: true});
  for (const dir of KINDS) {
    fs.rmSync(path.join(target.docs, dir), {recursive: true, force: true});
  }
  for (const [file, text] of pages) {
    const out = path.join(target.docs, file);
    fs.mkdirSync(path.dirname(out), {recursive: true});
    fs.writeFileSync(out, text);
  }
  updateSidebar(target.sidebar);
}

const added = [...pages.keys()].filter((f) => !before.has(f)).sort(byName);
const removed = [...before].filter((f) => !pages.has(f)).sort(byName);
for (const f of added) console.log(`  + ${f}`);
for (const f of removed) console.log(`  - ${f}`);
console.log(
  `✔ SDK reference updated to v${pkg.version} (${revision.slice(0, 7)}): ${pages.size} pages, ` +
    `${added.length} added, ${removed.length} removed, in docs/sdk and versioned_docs/version-${latest}/sdk`,
);
