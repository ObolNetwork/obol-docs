/**
 * Docusaurus plugin that makes these docs first-class for AI agents:
 *
 *  - /llms.txt        — index of every page (title, URL, description),
 *                       mirroring the format GitBook served at docs.obol.org.
 *  - /llms-full.txt   — the full markdown content of the current version.
 *  - /<route>.md      — raw markdown for every doc route (like GitBook's
 *                       `.md` suffix URLs), so agents can fetch page source.
 *
 * Pages and their order are derived from the sidebars + doc frontmatter, so
 * this stays correct as docs are authored in this repo.
 */

const fs = require('fs');
const path = require('path');

function docsRoot(siteDir, version) {
  return version === 'next'
    ? path.join(siteDir, 'docs')
    : path.join(siteDir, 'versioned_docs', `version-${version}`);
}

/** Flatten a sidebar items array into ordered [{id, label}]. */
function flattenSidebar(items) {
  const out = [];
  for (const item of items ?? []) {
    if (item.type === 'doc' && item.id) {
      out.push({id: item.id, label: item.label});
    } else if (item.type === 'category') {
      if (item.link?.type === 'doc' && item.link.id) {
        out.push({id: item.link.id, label: item.label});
      }
      out.push(...flattenSidebar(item.items));
    }
    // 'html' section headers and external 'link' items carry no page
  }
  return out;
}

function loadSidebar(siteDir, version) {
  if (version === 'next') {
    // sidebars.js is ESM; Node >= 22 supports require(esm)
    // eslint-disable-next-line import/no-dynamic-require
    const mod = require(path.join(siteDir, 'sidebars.js'));
    return mod.default ?? mod;
  }
  return JSON.parse(
    fs.readFileSync(
      path.join(siteDir, 'versioned_sidebars', `version-${version}-sidebars.json`),
      'utf8',
    ),
  );
}

function readDoc(root, id) {
  for (const ext of ['.md', '.mdx']) {
    const p = path.join(root, id + ext);
    if (fs.existsSync(p)) return fs.readFileSync(p, 'utf8');
  }
  return null;
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return {fm: {}, body: raw};
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w[\w-]*):\s*(.*)$/);
    if (!kv) continue;
    let v = kv[2].trim();
    try {
      if (v.startsWith('"')) v = JSON.parse(v);
    } catch {
      /* keep raw */
    }
    fm[kv[1]] = v;
  }
  return {fm, body: raw.slice(m[0].length)};
}

/** Strip MDX imports; the rest is agent-friendly markdown. */
function cleanBody(body) {
  return body.replace(/^import\s.+from\s.+;?\s*$/gm, '').trim() + '\n';
}

module.exports = function llmsTxtPlugin(context) {
  return {
    name: 'obol-llms-txt',

    async postBuild({outDir, siteConfig}) {
      const {siteDir} = context;
      // e.g. https://docs.obol.org or https://obolnetwork.github.io/obol-docs
      const siteUrl = `${siteConfig.url}${siteConfig.baseUrl.replace(/\/$/, '')}`;
      const lastVersion = JSON.parse(
        fs.readFileSync(path.join(siteDir, 'versions.json'), 'utf8'),
      )[0];
      const versions = [
        {name: 'next', heading: 'Next', base: '/next'},
        {
          name: lastVersion,
          heading: `${lastVersion} (current)`,
          base: '',
          isCurrent: true,
        },
      ];

      const sections = [];
      const fullPages = [];

      for (const v of versions) {
        const root = docsRoot(siteDir, v.name);
        const sidebar = loadSidebar(siteDir, v.name);
        const pages = Object.values(sidebar).flatMap((items) =>
          flattenSidebar(items),
        );
        const lines = [];
        for (const page of pages) {
          const raw = readDoc(root, page.id);
          if (raw === null) continue;
          const {fm, body} = parseFrontmatter(raw);
          const slug = (fm.slug ?? `/${page.id}`).replace(/^\//, '');
          const route = `${v.base}/${slug}`;
          const title = fm.title ?? page.label ?? fm.sidebar_label ?? page.id;
          const desc = fm.description ? `: ${fm.description}` : '';
          lines.push(`- [${title}](${siteUrl}${route}.md)${desc}`);

          const md = cleanBody(body);
          const mdOut = path.join(outDir, `${route.replace(/^\//, '')}.md`);
          fs.mkdirSync(path.dirname(mdOut), {recursive: true});
          fs.writeFileSync(mdOut, md);
          if (v.isCurrent) {
            fullPages.push(`# ${title}\n\nURL: ${siteUrl}${route}\n\n${md}`);
          }
        }
        sections.push(`## ${v.heading}\n\n${lines.join('\n')}`);
      }

      const header = [
        `# ${siteConfig.title}`,
        '',
        `> ${siteConfig.tagline}`,
        '',
        'Obol builds Distributed Validator Technology (DVT) for Ethereum and the',
        'Obol Stack, an agent-operated blockchain infrastructure harness.',
        '',
        'Every documentation page is also available as raw markdown by appending',
        '`.md` to its URL. The full current-version corpus is in',
        `${siteUrl}/llms-full.txt. A wider index of Obol assets lives at`,
        'https://obol.org/llms.txt.',
        '',
      ].join('\n');

      fs.writeFileSync(
        path.join(outDir, 'llms.txt'),
        `${header}\n${sections.join('\n\n')}\n`,
      );
      fs.writeFileSync(
        path.join(outDir, 'llms-full.txt'),
        fullPages.join('\n\n---\n\n') + '\n',
      );
      console.log(
        '[obol-llms-txt] wrote llms.txt, llms-full.txt and per-page markdown',
      );
    },
  };
};
