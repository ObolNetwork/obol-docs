#!/usr/bin/env node
/**
 * migrate-gitbook.mjs
 *
 * One-shot importer that converts the Obol GitBook content repo
 * (https://github.com/ObolNetwork/obol-gitbook) into this Docusaurus site.
 *
 * It converts GitBook-flavoured markdown (hints, tabs, openapi blocks, card
 * tables, figures, explicit heading anchors) into Docusaurus markdown/MDX,
 * computes URL slugs that exactly match the live GitBook URL scheme so no
 * public link breaks, generates sidebars from SUMMARY.md, copies assets, and
 * emits route manifests consumed by the llms.txt plugin and redirect checks.
 *
 * Usage:
 *   node scripts/migrate-gitbook.mjs \
 *     --source /tmp/gb-main --version next \
 *     --llms /tmp/docs-llms.txt --llms-section "Next" \
 *     --out docs --sidebar sidebars.js
 *
 *   node scripts/migrate-gitbook.mjs \
 *     --source /tmp/gb-v110 --version v1.10 \
 *     --llms /tmp/docs-llms.txt --llms-section "v1.10 (current)" \
 *     --out versioned_docs/version-v1.10 \
 *     --sidebar versioned_sidebars/version-v1.10-sidebars.json
 */

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(__dirname, '..');
const STATIC_ASSETS = path.join(SITE_ROOT, 'static', 'img', 'gitbook');
const GENERATED_DIR = path.join(__dirname, 'generated');

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------
function arg(name, fallback = undefined) {
  const i = process.argv.indexOf(`--${name}`);
  if (i === -1) {
    if (fallback !== undefined) return fallback;
    throw new Error(`missing --${name}`);
  }
  return process.argv[i + 1];
}

const SOURCE = path.resolve(arg('source'));
const VERSION = arg('version'); // "next" | "v1.10"
const LLMS_FILE = arg('llms');
const LLMS_SECTION = arg('llms-section');
const OUT_DIR = path.resolve(SITE_ROOT, arg('out'));
const SIDEBAR_OUT = path.resolve(SITE_ROOT, arg('sidebar'));
const API_SPEC = arg('api-spec', '/tmp/api-spec.json');

// Assets from a non-primary version that differ from the primary version's
// copy get shelved into a subdirectory to avoid collisions.
const ASSET_SUBDIR = VERSION === 'next' ? '' : VERSION;

// ---------------------------------------------------------------------------
// SUMMARY.md parsing
// ---------------------------------------------------------------------------
/**
 * Returns [{title, items:[node]}] where node =
 *   {title, file|href, children:[node]}
 */
function parseSummary(text) {
  const groups = [];
  let group = null;
  // stack of {depth, node}
  let stack = [];
  for (const rawLine of text.split('\n')) {
    const gm = rawLine.match(/^##\s+(.*)$/);
    if (gm) {
      group = {title: gm[1].trim(), items: []};
      groups.push(group);
      stack = [];
      continue;
    }
    const im = rawLine.match(/^(\s*)\*\s+\[(.+?)\]\((.+?)\)\s*$/);
    if (!im || !group) continue;
    const depth = Math.floor(im[1].length / 2);
    const title = unescapeMd(im[2]);
    const target = im[3];
    const node = {title, children: []};
    if (/^https?:\/\//.test(target)) {
      node.href = target;
    } else {
      node.file = decodeURIComponent(target);
    }
    while (stack.length && stack[stack.length - 1].depth >= depth) stack.pop();
    if (stack.length === 0) {
      group.items.push(node);
    } else {
      stack[stack.length - 1].node.children.push(node);
    }
    stack.push({depth, node});
  }
  return groups;
}

function unescapeMd(s) {
  return s.replace(/\\([_*&[\]<>`~])/g, '$1');
}

// ---------------------------------------------------------------------------
// llms.txt parsing (authoritative live URL per page, in nav order)
// ---------------------------------------------------------------------------
function parseLlmsSection(text, sectionTitle) {
  const lines = text.split('\n');
  const start = lines.findIndex((l) => l.trim() === `## ${sectionTitle}`);
  if (start === -1) throw new Error(`llms section not found: ${sectionTitle}`);
  const entries = [];
  for (let i = start + 1; i < lines.length; i++) {
    const l = lines[i];
    if (/^##\s/.test(l)) break;
    const m = l.match(/^-\s+\[(.+?)\]\((https:\/\/docs\.obol\.org\/\S+?)\.md\)/);
    if (m) entries.push({title: unescapeMd(m[1]), url: m[2]});
  }
  return entries;
}

// ---------------------------------------------------------------------------
// GitBook slug computation (fallback for pages hidden from llms.txt)
// ---------------------------------------------------------------------------
function slugifyGroup(title) {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function pageSlug(file) {
  const base = path.basename(file).replace(/\.md$/, '');
  if (base.toLowerCase() === 'readme') {
    const dir = path.basename(path.dirname(file));
    return dir === '.' || dir === '' ? 'readme' : dir.toLowerCase();
  }
  return base.toLowerCase();
}

// ---------------------------------------------------------------------------
// Load inputs
// ---------------------------------------------------------------------------
const summary = parseSummary(
  fs.readFileSync(path.join(SOURCE, 'SUMMARY.md'), 'utf8'),
);
const llmsEntries = parseLlmsSection(
  fs.readFileSync(LLMS_FILE, 'utf8'),
  LLMS_SECTION,
);
const apiSpec = fs.existsSync(API_SPEC)
  ? JSON.parse(fs.readFileSync(API_SPEC, 'utf8'))
  : null;

// Flatten summary pages in nav order.
const flatPages = [];
(function flatten(items, parents, group) {
  for (const node of items) {
    if (node.file) flatPages.push({node, parents: [...parents], group});
    if (node.children.length) {
      flatten(node.children, node.file ? [...parents, node] : parents, group);
    }
  }
})(
  summary.flatMap((g) => g.items.map((n) => ({...n, __group: g.title}))),
  [],
  null,
);
// The flatten above loses group context for nested children; rebuild properly:
flatPages.length = 0;
for (const g of summary) {
  (function walk(items, parents) {
    for (const node of items) {
      if (node.file) flatPages.push({node, parents: [...parents], group: g});
      if (node.children.length) walk(node.children, [...parents, node]);
    }
  })(g.items, []);
}

// Assign live URL slug to every page.
// Primary source: llms.txt entries matched in order by title.
// Fallback: computed GitBook slug rules.
let li = 0;
const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '');
for (const page of flatPages) {
  let slug = null;
  if (li < llmsEntries.length && norm(llmsEntries[li].title) === norm(page.node.title)) {
    slug = llmsEntries[li].url.replace('https://docs.obol.org/', '');
    if (VERSION === 'next') slug = slug.replace(/^next\//, '');
    li++;
  } else {
    // Search a few entries ahead in case llms.txt has an extra entry.
    let found = -1;
    for (let j = li; j < Math.min(li + 3, llmsEntries.length); j++) {
      if (norm(llmsEntries[j].title) === norm(page.node.title)) {
        found = j;
        break;
      }
    }
    if (found !== -1) {
      slug = llmsEntries[found].url.replace('https://docs.obol.org/', '');
      if (VERSION === 'next') slug = slug.replace(/^next\//, '');
      li = found + 1;
    } else {
      // computed fallback
      const parentSlugs = page.parents.map((p) => pageSlug(p.file));
      slug = [slugifyGroup(page.group.title), ...parentSlugs, pageSlug(page.node.file)].join('/');
      console.warn(`  [fallback slug] ${page.node.file} -> /${slug}`);
    }
  }
  page.slug = slug.replace(/^\/+/, '');
}
if (li < llmsEntries.length) {
  console.warn(`  [warn] ${llmsEntries.length - li} llms.txt entries unmatched (of ${llmsEntries.length})`);
}

// file -> page map for link resolution
const byFile = new Map();
for (const p of flatPages) byFile.set(path.normalize(p.node.file), p);

// ---------------------------------------------------------------------------
// Asset handling
// ---------------------------------------------------------------------------
fs.mkdirSync(STATIC_ASSETS, {recursive: true});

function normalizeAssetName(name) {
  return decodeURIComponent(name)
    .replace(/[^\w.\-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/-+\./g, '.')
    .replace(/^-|-$/g, '');
}

/** Copy an asset from the source repo, return its site-absolute URL. */
function importAsset(srcRelPath) {
  // srcRelPath is relative to the SOURCE repo root, e.g. ".gitbook/assets/foo (1).png"
  const abs = path.join(SOURCE, srcRelPath);
  if (!fs.existsSync(abs)) return null;
  const rel = srcRelPath.replace(/^\.gitbook\/assets\//, '');
  const normalized = rel
    .split('/')
    .map(normalizeAssetName)
    .join('/');
  let destRel = normalized;
  const primaryDest = path.join(STATIC_ASSETS, normalized);
  if (fs.existsSync(primaryDest)) {
    const a = fs.readFileSync(abs);
    const b = fs.readFileSync(primaryDest);
    if (!a.equals(b)) {
      if (ASSET_SUBDIR) {
        destRel = path.join(ASSET_SUBDIR, normalized);
      } else {
        // same-version name collision after normalization: disambiguate
        const hash = crypto.createHash('md5').update(a).digest('hex').slice(0, 6);
        destRel = normalized.replace(/(\.\w+)$/, `-${hash}$1`);
      }
    }
  }
  const dest = path.join(STATIC_ASSETS, destRel);
  fs.mkdirSync(path.dirname(dest), {recursive: true});
  fs.copyFileSync(abs, dest);
  return `/img/gitbook/${destRel.split(path.sep).join('/')}`;
}

/** Resolve an asset reference found inside a doc into a site URL. */
function resolveAssetRef(ref, docDir) {
  let clean = ref.trim().replace(/^<|>$/g, '');
  try {
    clean = decodeURIComponent(clean);
  } catch {
    /* keep raw */
  }
  const idx = clean.indexOf('.gitbook/assets/');
  if (idx === -1) return null;
  const srcRel = clean.slice(idx);
  return importAsset(srcRel);
}

// ---------------------------------------------------------------------------
// Link resolution for raw-HTML contexts (cards) where Docusaurus does not
// resolve relative markdown-file links.
// ---------------------------------------------------------------------------
const versionBase = VERSION === 'next' ? '/next' : '';
function routeForFile(fileRel) {
  const page = byFile.get(path.normalize(fileRel));
  if (!page) return null;
  return `${versionBase}/${page.slug}`;
}

/**
 * Express a site-absolute URL relative to the page's route so the emitted
 * link works under any baseUrl (root deploy or sub-path preview).
 */
function relToPage(ctx, absUrl) {
  const pageRoute = `${versionBase}/${ctx.slug}`;
  const baseDir = path.posix.dirname(pageRoute);
  const [p, hash] = absUrl.split('#');
  let rel = path.posix.relative(baseDir, p.replace(/\/$/, '') || '/');
  if (!rel) rel = '.';
  if (absUrl.endsWith('/') && !rel.endsWith('/')) rel += '/';
  return hash ? `${rel}#${hash}` : rel;
}

function resolveHtmlHref(href, ctx) {
  if (/^(https?:|mailto:|#)/.test(href)) return href;
  if (href.includes('.gitbook/assets/')) {
    const assetUrl = resolveAssetRef(href, ctx.docDir);
    return assetUrl ? relToPage(ctx, assetUrl) : href;
  }
  const [filePart, hash] = href.split('#');
  const resolved = path.normalize(path.join(ctx.docDir, filePart));
  const route = routeForFile(resolved);
  if (route) return relToPage(ctx, hash ? `${route}#${hash}` : route);
  return href;
}

// ---------------------------------------------------------------------------
// Markdown transformation
// ---------------------------------------------------------------------------
const HINT_MAP = {
  info: 'info',
  warning: 'warning',
  danger: 'danger',
  success: 'tip',
};

// Known lowercase HTML tags we allow to pass through untouched in prose.
const KNOWN_TAGS = new Set([
  'a', 'abbr', 'b', 'br', 'blockquote', 'code', 'dd', 'details', 'div', 'dl',
  'dt', 'em', 'figcaption', 'figure', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'hr', 'i', 'iframe', 'img', 'kbd', 'li', 'mark', 'ol', 'p', 'pre', 's',
  'small', 'span', 'strong', 'sub', 'summary', 'sup', 'table', 'tbody', 'td',
  'th', 'thead', 'tr', 'u', 'ul', 'video', 'source',
]);

function apiOperation(specPath, method) {
  if (!apiSpec?.paths?.[specPath]?.[method]) return null;
  const op = apiSpec.paths[specPath][method];
  const tag = op.tags?.[0] ?? 'default';
  // Redoc "safe slugify": spaces -> dashes.
  const tagSlug = tag.replace(/\s+/g, '-');
  return {
    operationId: op.operationId,
    summary: op.summary ?? '',
    description: (op.description ?? '').split('\n')[0],
    deprecated: !!op.deprecated,
    href: `/api/#tag/${tagSlug}/operation/${op.operationId}`,
  };
}

/**
 * Split content into [{code:bool, text}] segments so transforms only touch
 * prose. Fenced code blocks are detected line-wise.
 */
function segment(content) {
  const segments = [];
  let cur = [];
  let inCode = false;
  let fence = null;
  for (const line of content.split('\n')) {
    const fm = line.match(/^\s*(```+|~~~+)/);
    if (!inCode && fm) {
      if (cur.length) segments.push({code: false, text: cur.join('\n')});
      cur = [line];
      inCode = true;
      fence = fm[1][0].repeat(3);
    } else if (inCode && fm && line.trim().startsWith(fence)) {
      cur.push(line);
      segments.push({code: true, text: cur.join('\n')});
      cur = [];
      inCode = false;
    } else {
      cur.push(line);
    }
  }
  if (cur.length) segments.push({code: inCode, text: cur.join('\n')});
  return segments;
}

/** Protect inline code spans while running a transform on the rest. */
function outsideInlineCode(text, fn) {
  const parts = text.split(/(`+[^`]*`+)/g);
  return parts
    .map((part, i) => (i % 2 === 1 ? part : fn(part)))
    .join('');
}

function transformDoc(raw, ctx) {
  let needsTabs = false;
  let needsApi = false;

  // --- frontmatter ---
  let body = raw;
  let fmTitle = null;
  let fmDescription = null;
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (fmMatch) {
    body = raw.slice(fmMatch[0].length);
    const fm = fmMatch[1];
    const t = fm.match(/^title:\s*(.+)$/m);
    if (t) fmTitle = t[1].trim().replace(/^['"]|['"]$/g, '');
    // description may be a folded block (>-) or inline
    const dBlock = fm.match(/^description:\s*>-?\n((?:[ \t]+.*\n?)+)/m);
    const dInline = fm.match(/^description:\s*(.+)$/m);
    if (dBlock) {
      fmDescription = dBlock[1]
        .split('\n')
        .map((l) => l.trim())
        .filter(Boolean)
        .join(' ');
    } else if (dInline && !/^>-?$/.test(dInline[1].trim())) {
      fmDescription = dInline[1].trim().replace(/^['"]|['"]$/g, '');
    }
  }

  // --- {% code title="x" %} ... {% endcode %} : hoist title into fence meta
  body = body.replace(
    /{%\s*code(?:\s+title="([^"]*)")?[^%]*%}\s*\n([\s\S]*?){%\s*endcode\s*%}/g,
    (m, title, inner) => {
      if (title) {
        inner = inner.replace(/^(\s*```[\w-]*)/m, `$1 title="${title}"`);
      }
      return inner.trimEnd();
    },
  );

  // --- segment-level transforms (skip code fences) ---
  const segs = segment(body);
  const out = [];
  for (const seg of segs) {
    if (seg.code) {
      out.push(seg.text);
      continue;
    }
    let t = seg.text;

    // drop HTML comments (invalid in MDX, invisible in CommonMark anyway)
    t = t.replace(/<!--[\s\S]*?-->/g, '');

    // hints -> admonitions
    t = t.replace(/{%\s*hint\s+style="(\w+)"\s*%}/g, (m, s) => `:::${HINT_MAP[s] ?? 'note'}`);
    t = t.replace(/{%\s*endhint\s*%}/g, ':::');

    // tabs -> <Tabs>
    if (/{%\s*tabs\s*%}/.test(t)) needsTabs = true;
    t = t.replace(/{%\s*tabs\s*%}/g, '<Tabs>');
    t = t.replace(/{%\s*endtabs\s*%}/g, '</Tabs>');
    t = t.replace(/{%\s*tab\s+title="([^"]*)"[^%]*%}/g, (m, title) => {
      const value = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return `<TabItem value="${value}" label="${title.replace(/"/g, '&quot;')}">`;
    });
    t = t.replace(/{%\s*endtab\s*%}/g, '</TabItem>');

    // openapi blocks -> ApiEndpoint cards
    t = t.replace(
      /{%\s*openapi[^%]*?path="([^"]+)"\s+method="(\w+)"[^%]*%}[\s\S]*?{%\s*endopenapi\s*%}/g,
      (m, p, method) => {
        needsApi = true;
        const op = apiOperation(p, method.toLowerCase());
        if (!op) {
          return `<ApiEndpoint method="${method.toLowerCase()}" path="${p}" href="/api/" />`;
        }
        const sum = op.summary.replace(/"/g, '&quot;');
        return `<ApiEndpoint method="${method.toLowerCase()}" path="${p}" summary="${sum}" href="${op.href}"${op.deprecated ? ' deprecated' : ''} />`;
      },
    );

    // embeds -> youtube iframe or plain link
    t = t.replace(/{%\s*embed\s+url="([^"]+)"[^%]*%}(?:[\s\S]*?{%\s*endembed\s*%})?/g, (m, url) => {
      const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
      if (yt) {
        return (
          `<iframe class="video-embed" src="https://www.youtube-nocookie.com/embed/${yt[1]}" ` +
          `title="YouTube video" frameBorder="0" ` +
          `allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ` +
          `allowFullScreen></iframe>`
        );
      }
      return `[${url}](${url})`;
    });

    // relative links to the API group root -> the rendered API reference,
    // expressed relative to this page so any baseUrl works
    t = t.replace(/(\]\()(?:\.\.\/)+api\/?([)#])/g, (m, open, close) => `${open}${relToPage(ctx, '/api/')}${close}`);

    // steppers/columns/content-ref -> flatten
    t = t.replace(/{%\s*(stepper|endstepper|step|endstep|columns|endcolumns|column|endcolumn)[^%]*%}\s*\n?/g, '');
    t = t.replace(/{%\s*content-ref[^%]*%}\s*\n?/g, '');
    t = t.replace(/{%\s*endcontent-ref\s*%}\s*\n?/g, '');

    // GitBook card tables -> card grid
    t = t.replace(/<table data-view="cards">[\s\S]*?<\/table>/g, (m) => convertCards(m, ctx));

    // plain data-view tables (non-card) : strip data attributes
    t = t.replace(/<(table|th|td|tr)([^>]*)>/g, (m, tag, attrs) => {
      const cleaned = attrs.replace(/\s+data-[\w-]+(="[^"]*")?/g, '');
      return `<${tag}${cleaned}>`;
    });

    // figures -> markdown images (+ caption)
    t = t.replace(
      /<figure>\s*<img\s+([^>]*?)\/?>\s*(?:<figcaption>(?:<p>)?([\s\S]*?)(?:<\/p>)?<\/figcaption>)?\s*<\/figure>/g,
      (m, attrs, caption) => {
        const src = (attrs.match(/src="([^"]*)"/) || [])[1] ?? '';
        const alt = (attrs.match(/alt="([^"]*)"/) || [])[1] ?? '';
        const url = src.includes('.gitbook/assets/')
          ? resolveAssetRef(src, ctx.docDir) ?? src
          : src;
        const cap = (caption ?? '').trim();
        let md = `![${alt.replace(/([\[\]])/g, '\\$1')}](${encodeUrlForMd(url)})`;
        if (cap) md += `\n<figcaption>${cap}</figcaption>`;
        return md;
      },
    );

    // stray inline <img> tags -> markdown images (but leave card-grid imgs,
    // which live inside raw HTML where markdown doesn't render)
    t = t.replace(/<img\s+([^>]*?)\/?>/g, (m, attrs) => {
      if (attrs.includes('gb-card-img')) return m;
      const src = (attrs.match(/src="([^"]*)"/) || [])[1] ?? '';
      const alt = (attrs.match(/alt="([^"]*)"/) || [])[1] ?? '';
      const url = src.includes('.gitbook/assets/')
        ? resolveAssetRef(src, ctx.docDir) ?? src
        : src;
      return `![${alt.replace(/([\[\]])/g, '\\$1')}](${encodeUrlForMd(url)})`;
    });

    // markdown image/link targets referencing .gitbook/assets — scan with
    // balanced parens so names like "image (50).png" survive
    t = rewriteMdAssetTargets(t, ctx.docDir);

    // headings with explicit gitbook anchors -> {#id}
    t = t.replace(
      /^(#{1,6})\s+(.*?)\s*<a\s+href="#[^"]*"\s+id="([^"]*)"><\/a>\s*$/gm,
      (m, hashes, text, id) => `${hashes} ${text} {#${id}}`,
    );

    // GitBook zero-width-space anchor links, heading form -> {#id}
    t = t.replace(
      /^(#{1,6})\s+(.*?)\s*\[\**[​﻿]+\**\]\(#([^)]+)\)\s*$/gm,
      (m, hashes, text, id) => `${hashes} ${text} {#${id}}`,
    );

    // ...and inline form -> explicit anchor element
    t = t.replace(/\[\**[​﻿]+\**\]\(#([^)]+)\)/g, '<a id="$1"></a>');

    // <br> normalize
    t = t.replace(/<br\s*>/g, '<br />');

    // escape angle-bracket placeholder tokens in prose (outside inline code)
    t = t
      .split('\n')
      .map((line) => {
        // skip our injected JSX / html lines
        if (/^\s*<\/?(Tabs|TabItem|ApiEndpoint|iframe|figcaption|div|table|thead|tbody|tr|td|th|details|summary|a\b)/.test(line)) {
          return line;
        }
        return outsideInlineCode(line, (s) =>
          s.replace(/<(\/?)([A-Za-z][\w-]*)/g, (m, slash, tag) => {
            if (KNOWN_TAGS.has(tag.toLowerCase()) && tag === tag.toLowerCase()) return m;
            return `\\<${slash}${tag}`;
          }),
        );
      })
      .join('\n');

    out.push(t);
  }
  body = out.join('\n');

  // --- imports for MDX files ---
  const isMdx = needsTabs || needsApi;
  const imports = [];
  if (needsTabs) {
    imports.push(
      `import Tabs from '@theme/Tabs';`,
      `import TabItem from '@theme/TabItem';`,
    );
  }
  if (needsApi) {
    imports.push(`import ApiEndpoint from '@site/src/components/ApiEndpoint';`);
  }

  // --- frontmatter out ---
  const fm = ['---'];
  if (fmTitle) fm.push(`title: ${JSON.stringify(fmTitle)}`);
  if (fmDescription) fm.push(`description: ${JSON.stringify(fmDescription)}`);
  fm.push(`sidebar_label: ${JSON.stringify(ctx.title)}`);
  fm.push(`slug: /${ctx.slug}`);
  if (ctx.unlisted) fm.push('unlisted: true');
  fm.push('---');

  const parts = [fm.join('\n')];
  if (imports.length) parts.push(imports.join('\n'));
  parts.push(body.trimStart());
  return {content: parts.join('\n\n'), isMdx, description: fmDescription, title: fmTitle};
}

/**
 * Rewrite markdown link/image destinations that point into .gitbook/assets.
 * Handles unencoded spaces and nested parentheses in filenames.
 */
function rewriteMdAssetTargets(text, docDir) {
  let out = '';
  let i = 0;
  while (i < text.length) {
    const idx = text.indexOf('](', i);
    if (idx === -1) {
      out += text.slice(i);
      break;
    }
    out += text.slice(i, idx + 2);
    let j = idx + 2;
    let depth = 1;
    let dest = '';
    while (j < text.length) {
      const ch = text[j];
      if (ch === '(') depth++;
      else if (ch === ')') {
        depth--;
        if (depth === 0) break;
      } else if (ch === '\n') break; // malformed link, bail out
      dest += ch;
      j++;
    }
    if (depth === 0 && dest.includes('.gitbook/assets/')) {
      const tm = dest.match(/^([\s\S]*?)(\s+"[^"]*")?$/);
      const url = resolveAssetRef(tm[1], docDir);
      out += url ? encodeUrlForMd(url) + (tm[2] ?? '') : dest;
    } else {
      out += dest;
    }
    i = j;
  }
  return out;
}

function encodeUrlForMd(url) {
  // markdown link targets cannot contain spaces/parens
  return url.replace(/ /g, '%20').replace(/\(/g, '%28').replace(/\)/g, '%29');
}

function convertCards(html, ctx) {
  const rows = [...html.matchAll(/<tr>([\s\S]*?)<\/tr>/g)]
    .map((m) => m[1])
    .filter((r) => r.includes('<td'));
  const cards = rows.map((row) => {
    const tds = [...row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((m) => m[1].trim());
    const title = (tds[0] ?? '').replace(/<\/?strong>/g, '').trim();
    const desc = (tds[1] ?? '').trim();
    const targetMatch = (tds[2] ?? '').match(/href="([^"]*)"/);
    const coverMatch = (tds[3] ?? '').match(/href="([^"]*)"/);
    const href = targetMatch ? resolveHtmlHref(targetMatch[1], ctx) : null;
    const cover = coverMatch ? resolveHtmlHref(coverMatch[1], ctx) : null;
    return {title, desc, href, cover};
  });
  const items = cards
    .map((c) => {
      const img = c.cover
        ? `<img class="gb-card-img" src="${c.cover}" alt="" loading="lazy" />`
        : '';
      const inner = `${img}<h3>${c.title}</h3><p>${c.desc}</p>`;
      return c.href
        ? `<a class="gb-card" href="${c.href}">${inner}</a>`
        : `<div class="gb-card">${inner}</div>`;
    })
    .join('\n');
  return `<div class="gb-cards">\n${items}\n</div>`;
}

// ---------------------------------------------------------------------------
// Write docs
// ---------------------------------------------------------------------------
fs.rmSync(OUT_DIR, {recursive: true, force: true});
fs.mkdirSync(OUT_DIR, {recursive: true});
fs.mkdirSync(GENERATED_DIR, {recursive: true});

const manifest = [];
let mdxCount = 0;

for (const page of flatPages) {
  const srcPath = path.join(SOURCE, page.node.file);
  if (!fs.existsSync(srcPath)) {
    console.warn(`  [missing] ${page.node.file}`);
    continue;
  }
  const raw = fs.readFileSync(srcPath, 'utf8');
  const ctx = {
    docDir: path.dirname(page.node.file),
    slug: page.slug,
    title: page.node.title,
  };
  const res = transformDoc(raw, ctx);
  const outRel = res.isMdx
    ? page.node.file.replace(/\.md$/, '.mdx')
    : page.node.file;
  if (res.isMdx) mdxCount++;
  const outPath = path.join(OUT_DIR, outRel);
  fs.mkdirSync(path.dirname(outPath), {recursive: true});
  fs.writeFileSync(outPath, res.content);
  page.docId = outRel.replace(/\.mdx?$/, '');
  manifest.push({
    id: page.docId,
    file: outRel,
    slug: page.slug,
    route: `${versionBase}/${page.slug}`,
    title: page.node.title,
    description: res.description ?? null,
    group: page.group.title,
  });
}

// ---------------------------------------------------------------------------
// Unlisted pages: files in the repo but not in SUMMARY.md. GitBook 404s
// these, but in-content links point at them (e.g. typedoc SDK pages), so we
// publish them as unlisted docs (no sidebar, noindex) to keep links working.
// ---------------------------------------------------------------------------
const EXCLUDE_EXTRA = /^(\.|CLAUDE\.md|SUMMARY\.md|node_modules)/;
const takenSlugs = new Set(flatPages.map((p) => p.slug));
let unlistedCount = 0;

function* walkMdFiles(dir, rel = '') {
  for (const e of fs.readdirSync(path.join(dir, rel), {withFileTypes: true})) {
    const r = rel ? `${rel}/${e.name}` : e.name;
    if (EXCLUDE_EXTRA.test(r)) continue;
    if (e.isDirectory()) yield* walkMdFiles(dir, r);
    else if (e.name.endsWith('.md')) yield r;
  }
}

for (const fileRel of walkMdFiles(SOURCE)) {
  if (byFile.has(path.normalize(fileRel))) continue;
  const dirs = path.dirname(fileRel);
  const slug = [
    ...(dirs === '.' ? [] : dirs.toLowerCase().split('/')),
    pageSlug(fileRel),
  ].join('/');
  if (takenSlugs.has(slug)) continue;
  takenSlugs.add(slug);
  const raw = fs.readFileSync(path.join(SOURCE, fileRel), 'utf8');
  const h1 = raw.match(/^#\s+(.+)$/m);
  const title = h1 ? unescapeMd(h1[1].trim()) : path.basename(fileRel, '.md');
  const ctx = {docDir: path.dirname(fileRel), slug, title, unlisted: true};
  const res = transformDoc(raw, ctx);
  const outRel = res.isMdx ? fileRel.replace(/\.md$/, '.mdx') : fileRel;
  const outPath = path.join(OUT_DIR, outRel);
  fs.mkdirSync(path.dirname(outPath), {recursive: true});
  fs.writeFileSync(outPath, res.content);
  unlistedCount++;
}

// ---------------------------------------------------------------------------
// Fix links that point at .md files we renamed to .mdx (tabs/openapi pages).
// Docusaurus resolves file-relative links by exact path, so the extension in
// the link must match the file on disk.
// ---------------------------------------------------------------------------
const outFiles = new Set();
(function collectOutFiles(dir, rel = '') {
  for (const e of fs.readdirSync(path.join(dir, rel), {withFileTypes: true})) {
    const r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) collectOutFiles(dir, r);
    else outFiles.add(r);
  }
})(OUT_DIR);

// Legacy-route redirect map lets us self-heal stale links in the imported
// content that still point at old obol-docs paths (e.g. ../../adv/...).
const redirectsPath = path.join(GENERATED_DIR, 'redirects.json');
const redirectMap = new Map(
  fs.existsSync(redirectsPath)
    ? JSON.parse(fs.readFileSync(redirectsPath, 'utf8')).map((r) => [r.from, r.to])
    : [],
);

(function fixLinks(dir, rel = '') {
  for (const e of fs.readdirSync(path.join(dir, rel), {withFileTypes: true})) {
    const r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) {
      fixLinks(dir, r);
      continue;
    }
    if (!/\.mdx?$/.test(e.name)) continue;
    const p = path.join(dir, r);
    const src = fs.readFileSync(p, 'utf8');
    const fixed = src.replace(
      /(\]\()([^)#\s]+\.mdx?)((?:#[^)]*)?)(\))/g,
      (m, open, target, hash, close) => {
        if (/^https?:/.test(target)) return m;
        const resolved = path
          .normalize(path.join(path.dirname(r), target))
          .split(path.sep)
          .join('/');
        if (outFiles.has(resolved)) return m;
        const alt = resolved.endsWith('.mdx')
          ? resolved.replace(/\.mdx$/, '.md')
          : resolved.replace(/\.md$/, '.mdx');
        if (outFiles.has(alt)) return `${open}${target.replace(/\.mdx?$/, '')}.${alt.split('.').pop()}${hash}${close}`;
        // dead file link: try the legacy redirect map
        const route = '/' + resolved.replace(/\.mdx?$/, '');
        const redirect = redirectMap.get(route);
        if (redirect) {
          // link to the target's source file (relative), so Docusaurus
          // resolves it properly under any baseUrl
          const entry = manifest.find((e) => e.route === `${versionBase}${redirect}`);
          if (entry) {
            let relFile = path.posix.relative(path.posix.dirname(r), entry.file);
            if (!relFile.startsWith('.')) relFile = `./${relFile}`;
            console.warn(`  [healed link] ${r}: ${target} -> ${relFile}`);
            return `${open}${relFile}${hash}${close}`;
          }
          console.warn(`  [healed link] ${r}: ${target} -> ${versionBase}${redirect}`);
          return `${open}${versionBase}${redirect}${hash}${close}`;
        }
        console.warn(`  [dead link] ${r}: ${target}`);
        return m;
      },
    );
    if (fixed !== src) fs.writeFileSync(p, fixed);
  }
})(OUT_DIR);

// ---------------------------------------------------------------------------
// Sidebars
// ---------------------------------------------------------------------------
function sidebarNode(node) {
  if (node.href) {
    return {type: 'link', label: node.title, href: node.href};
  }
  const page = byFile.get(path.normalize(node.file));
  const id = page?.docId ?? node.file.replace(/\.mdx?$/, '');
  if (node.children.length) {
    return {
      type: 'category',
      label: node.title,
      link: {type: 'doc', id},
      items: node.children.map(sidebarNode),
    };
  }
  return {type: 'doc', id, label: node.title};
}

const sidebar = [];
for (const g of summary) {
  sidebar.push({
    type: 'html',
    value: g.title,
    className: 'sidebar-section-title',
    defaultStyle: true,
  });
  for (const node of g.items) sidebar.push(sidebarNode(node));
}

const sidebarJson = {docs: sidebar};
fs.mkdirSync(path.dirname(SIDEBAR_OUT), {recursive: true});
if (SIDEBAR_OUT.endsWith('.js')) {
  fs.writeFileSync(
    SIDEBAR_OUT,
    `// @ts-check\n// GENERATED by scripts/migrate-gitbook.mjs — edit SUMMARY structure upstream or regenerate.\n\n/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */\nconst sidebars = ${JSON.stringify(sidebarJson, null, 2)};\n\nexport default sidebars;\n`,
  );
} else {
  fs.writeFileSync(SIDEBAR_OUT, JSON.stringify(sidebarJson, null, 2));
}

fs.writeFileSync(
  path.join(GENERATED_DIR, `routes-${VERSION}.json`),
  JSON.stringify(manifest, null, 2),
);

console.log(
  `✔ ${VERSION}: ${manifest.length} pages (${mdxCount} mdx) + ${unlistedCount} unlisted, sidebar -> ${path.relative(SITE_ROOT, SIDEBAR_OUT)}`,
);
