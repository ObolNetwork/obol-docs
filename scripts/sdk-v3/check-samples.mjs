#!/usr/bin/env node
// Type-checks the SDK v3 documentation samples against an SDK source tree,
// without building it:
//  - every ```ts / ```typescript block in docs/sdk-v3/** (signature blocks,
//    marked `sdk-signature`, are declarations and are skipped; tsx is skipped
//    and counted),
//  - every example file in scripts/sdk-v3/examples/.
//
//   node scripts/sdk-v3/check-samples.mjs --sdk <path-to-sdk-copy>
//
// Each block becomes its own module in a temp directory, with the globals of
// examples/_prelude.d.ts in scope and `@obolnetwork/obol-sdk[/*]` mapped to
// the SDK's src/. Nothing is written to the SDK checkout.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.resolve(here, '../..');
const i = process.argv.indexOf('--sdk');
const sdkDir = path.resolve(i > 0 ? process.argv[i + 1] : '');
if (!fs.existsSync(path.join(sdkDir, 'src/index.ts'))) {
  console.error('usage: check-samples.mjs --sdk <path to an obol-sdk v3 checkout>');
  process.exit(2);
}
const ts = createRequire(path.join(sdkDir, 'package.json'))('typescript');

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sdk-v3-samples-'));
fs.symlinkSync(path.join(sdkDir, 'node_modules'), path.join(tmp, 'node_modules'), 'dir');
fs.copyFileSync(path.join(here, 'examples/_prelude.d.ts'), path.join(tmp, 'prelude.d.ts'));

const blocks = []; // { file, origin }
const skipped = { tsx: 0, other: 0, signature: 0, spec: 0 };
/**
 * Why a fenced block is not type-checked, from its info string (`ts sdk-signature`):
 * a key of `skipped`, `'none'` for a block without a language (not counted),
 * or null for a sample to check.
 */
function skipReason(info) {
  const [lang, ...meta] = info.trim().split(/\s+/);
  if (meta.includes('sdk-signature')) return 'signature';
  if (meta.includes('sdk-spec')) return 'spec';
  if (lang === 'tsx') return 'tsx';
  if (lang === 'ts' || lang === 'typescript') return null;
  return lang ? 'other' : 'none';
}
/** Writes every TypeScript sample of one Markdown file to the temp directory. */
function collectBlocks(file) {
  const text = fs.readFileSync(file, 'utf8');
  for (const m of text.matchAll(/^```([^\n]*)\n([\s\S]*?)^```/gm)) {
    const reason = skipReason(m[1]);
    if (reason === null) {
      const line = text.slice(0, m.index).split('\n').length;
      const name = `block-${String(blocks.length).padStart(3, '0')}.ts`;
      fs.writeFileSync(path.join(tmp, name), `${m[2]}\nexport {};\n`);
      blocks.push({ file: name, origin: `${path.relative(siteDir, file)}:${line}` });
    } else if (reason !== 'none') {
      skipped[reason]++;
    }
  }
}
const walk = dir => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.mdx?$/.test(e.name)) collectBlocks(p);
  }
};
walk(path.join(siteDir, 'docs/sdk-v3'));
// The example files themselves (their regions feed the reference pages).
for (const f of fs.readdirSync(path.join(here, 'examples'))) {
  if (!f.endsWith('.ts') || f.startsWith('_')) continue;
  fs.copyFileSync(path.join(here, 'examples', f), path.join(tmp, `example-${f}`));
  blocks.push({ file: `example-${f}`, origin: `scripts/sdk-v3/examples/${f}` });
}

const options = {
  strict: true,
  noEmit: true,
  skipLibCheck: true,
  target: ts.ScriptTarget.ES2022,
  module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  lib: ['lib.es2022.d.ts', 'lib.dom.d.ts'],
  types: ['node'], // samples are for browsers and Node; README ones call process.exit
  baseUrl: tmp,
  paths: {
    '@obolnetwork/obol-sdk': [path.join(sdkDir, 'src/index.ts')],
    '@obolnetwork/obol-sdk/*': [path.join(sdkDir, 'src/*/index.ts')],
  },
  noUnusedLocals: false,
  allowUnreachableCode: true,
};
const roots = [path.join(tmp, 'prelude.d.ts'), ...blocks.map(b => path.join(tmp, b.file))];
const program = ts.createProgram({ rootNames: roots, options });
const diags = ts.getPreEmitDiagnostics(program).filter(d => d.file?.fileName.startsWith(tmp) && !d.file.fileName.includes('node_modules'));
const byFile = new Map();
for (const d of diags) {
  const f = path.basename(d.file.fileName);
  const { line } = d.file.getLineAndCharacterOfPosition(d.start ?? 0);
  if (!byFile.has(f)) byFile.set(f, []);
  byFile.get(f).push(`  line ${line + 1}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n    ')}`);
}
let failed = 0;
for (const b of blocks) {
  const errs = byFile.get(b.file);
  if (errs) {
    failed++;
    console.log(`FAIL ${b.origin}\n${errs.join('\n')}`);
  }
}
const preludeErrs = byFile.get('prelude.d.ts');
if (preludeErrs) console.log(`FAIL prelude\n${preludeErrs.join('\n')}`);
console.log(
  `[samples] ${blocks.length - failed}/${blocks.length} compile (${blocks.filter(b => b.file.startsWith('block')).length} fenced blocks, ${blocks.filter(b => b.file.startsWith('example')).length} example files); skipped: ${skipped.tsx} tsx, ${skipped.signature} signature blocks, ${skipped.spec} pseudo-TS blocks quoted from spec/, ${skipped.other} non-TS blocks`,
);
fs.rmSync(tmp, { recursive: true, force: true });
process.exit(failed || preludeErrs ? 1 : 0);
