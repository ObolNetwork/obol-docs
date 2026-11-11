#!/usr/bin/env node
// Generates the @obolnetwork/obol-sdk v3 reference under docs/sdk-v3/ from an
// SDK checkout (source, spec/, MIGRATION.md). Read-only on the SDK side.
//
//   node scripts/sdk-v3/generate.mjs --sdk <path-to-sdk-copy> [--label <text>]
//
// Writes (and wipes first) docs/sdk-v3/reference/, plus docs/sdk-v3/errors.md,
// warnings.md, migration.md, docs/sdk-v3/_generated/*.json and
// sidebars-sdk-v3.mjs. Hand-written pages in docs/sdk-v3/ are not touched.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { loadSource } from './lib/source.mjs';
import { loadSpec, tagOf, codeTokens } from './lib/spec.mjs';
import { PAGES, STAGES } from './namespaces.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.resolve(here, '../..');
const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, all) => {
    if (a.startsWith('--')) acc.push([a.slice(2), all[i + 1]?.startsWith('--') || all[i + 1] === undefined ? true : all[i + 1]]);
    return acc;
  }, []),
);
const sdkDir = path.resolve(args.sdk ?? '');
if (!fs.existsSync(path.join(sdkDir, 'spec/operations.md'))) {
  console.error('usage: generate.mjs --sdk <path to an obol-sdk v3 checkout>');
  process.exit(2);
}
const GITHUB_REF = process.env.SDK_GITHUB_REF ?? 'feat/sdk-v3-package';
const GH = `https://github.com/ObolNetwork/obol-sdk/blob/${GITHUB_REF}`;
const outDir = path.join(siteDir, 'docs/sdk-v3');
const refDir = path.join(outDir, 'reference');
const genDir = path.join(outDir, '_generated');
const examplesDir = path.join(here, 'examples');
const pkg = JSON.parse(fs.readFileSync(path.join(sdkDir, 'package.json'), 'utf8'));
const VERSION = pkg.version;
const previewLabel = typeof args.label === 'string' ? args.label : null;
const report = { missingSpec: [], missingListed: [], unplacedExports: [], unmatchedThrownBy: [], examples: { with: 0, without: [] }, noDoc: [] };

// ---------------------------------------------------------------- runtime data
// FINDINGS, FINDING_CODES_BY_KIND and OBOL_ERROR_CODES as values: bundle the
// two source files with the SDK's esbuild into a temp dir and import them.
async function loadRuntime() {
  const require = createRequire(path.join(sdkDir, 'package.json'));
  const esbuild = require('esbuild');
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sdk-v3-docs-'));
  const entry = path.join(tmp, 'entry.ts');
  fs.writeFileSync(
    entry,
    `export * from ${JSON.stringify(path.join(sdkDir, 'src/findings.ts'))};\n` +
      `export { OBOL_ERROR_CODES } from ${JSON.stringify(path.join(sdkDir, 'src/codes.ts'))};\n`,
  );
  const outfile = path.join(tmp, 'runtime.mjs');
  await esbuild.build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', outfile, logLevel: 'error', absWorkingDir: sdkDir });
  const mod = await import(pathToFileURL(outfile).href);
  fs.rmSync(tmp, { recursive: true, force: true });
  return mod;
}

// ---------------------------------------------------------------- helpers
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const cell = s => String(s ?? '').replace(/\r?\n+/g, ' ').replace(/\|/g, '\\|').trim();

/**
 * Makes imported prose (TSDoc, spec) safe for CommonMark pages: escapes `<`
 * that would open a raw HTML tag outside code, and turns `{@link X}` into `X`.
 */
function prose(text) {
  if (!text) return '';
  let s = text.replace(/\{@link\s+([^}\s|]+)(?:\s*\|\s*([^}]+))?\s*\}/g, (_, a, b) => '`' + (b ?? a) + '`');
  const out = [];
  let inFence = false;
  for (const line of s.split('\n')) {
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      out.push(line);
      continue;
    }
    if (inFence) {
      out.push(line);
      continue;
    }
    out.push(
      line
        .split(/(`[^`]*`)/)
        .map((part, i) => (i % 2 ? part : part.replace(/<(?=[A-Za-z/!])/g, '&lt;')))
        .join(''),
    );
  }
  return out.join('\n');
}

function prettierSig(code) {
  const require = createRequire(path.join(sdkDir, 'package.json'));
  try {
    const prettier = require('prettier/standalone');
    const ts = require('prettier/plugins/typescript');
    const estree = require('prettier/plugins/estree');
    return prettier.format(code, { parser: 'typescript', plugins: [ts, estree], printWidth: 62, singleQuote: true, trailingComma: 'all' });
  } catch {
    return Promise.resolve(code);
  }
}

// ---------------------------------------------------------------- model
const src = loadSource(sdkDir, ['src/index.ts', 'src/blst/index.ts']);
const spec = loadSpec(sdkDir);
const runtime = await loadRuntime();
const rootExports = src.exportsOf('src/index.ts');
const blstExports = src.exportsOf('src/blst/index.ts');
const nsExports = {};
const nsSymbols = {};
for (const [name, d] of rootExports) {
  if (d.kind === 'namespace') {
    nsSymbols[name] = d.symbol;
    nsExports[name] = src.exportsOf(d.symbol);
  }
}
nsSymbols.legacy = nsExports.experimental.get('legacy')?.symbol;
if (nsSymbols.legacy) nsExports.legacy = src.exportsOf(nsSymbols.legacy);

const ERROR_CODES = new Set(runtime.OBOL_ERROR_CODES);
const FINDINGS = runtime.FINDINGS;
const FINDING_CODES = new Set(Object.keys(FINDINGS));
const BY_KIND = runtime.FINDING_CODES_BY_KIND;
const UNCHECKED = new Set(runtime.UNCHECKED_WARNING_CODES);

// --- type homes: every exported interface / type alias / class gets one page anchor.
const typeHome = new Map(); // name -> { page, id }
const declKey = d => `${d.file}:${d.line}`;
const placedDecls = new Map();
function homeType(name, d, pageFile) {
  if (!['interface', 'type', 'class'].includes(d.kind)) return false;
  const k = declKey(d);
  if (placedDecls.has(k)) return false;
  placedDecls.set(k, pageFile);
  if (!typeHome.has(name)) typeHome.set(name, { page: pageFile, id: name });
  return true;
}

// --- methods
const methods = []; // every documented callable / constant, with its page and anchor
const methodIndex = new Map(); // 'ns.name' and bare 'name' -> [method]
function addMethod(m) {
  methods.push(m);
  for (const key of [m.qualified, m.name, ...(m.aliases ?? [])]) {
    if (!methodIndex.has(key)) methodIndex.set(key, []);
    methodIndex.get(key).push(m);
  }
}

function moduleSymbol(ns, iface) {
  const sym = nsSymbols[ns];
  if (iface === 'ExperimentalModule') return src.checker.getExportsOfModule(nsSymbols.experimental).find(s => s.getName() === iface);
  return sym && src.checker.getExportsOfModule(sym).find(s => s.getName() === iface);
}

const renamesRc12 = new Map(); // new qualified -> old
for (const t of spec.migrationTables) {
  if (t.headings.some(h => /Renames/.test(h)) && t.headings.some(h => /rc\.11 to rc\.12/.test(h))) {
    for (const r of t.rows) {
      const oldName = codeTokens(r[0])[0]?.replace(/\(.*$/, '');
      const newName = codeTokens(r[1])[0]?.replace(/\(.*$/, '');
      if (oldName && newName) renamesRc12.set(newName, oldName);
    }
  }
}

// Root types listed on a page are homed first, so a namespace that re-exports
// them (cluster re-exports BlsBackend) does not claim them.
for (const page of PAGES) {
  page.typesFile = `reference/types/${page.id}.md`;
  page.types = [];
  const exp = page.entry === 'src/blst/index.ts' ? blstExports : rootExports;
  for (const name of page.rootTypes ?? []) {
    const d = exp.get(name);
    if (!d) {
      report.missingListed.push(`${page.id}: type ${name}`);
      continue;
    }
    if (homeType(name, d, page.typesFile)) page.types.push({ ...d, ns: null });
  }
}
for (const page of PAGES) {
  page.file = `reference/${page.id}.md`;
  page.methods = [];
  const ns = page.namespace;
  const seen = new Set();
  const push = m => {
    seen.add(m.name);
    page.methods.push(m);
    addMethod(m);
  };
  if (page.module) {
    const modSym = moduleSymbol(ns, page.module);
    const members = modSym ? src.moduleMembers(modSym) : [];
    const exp = nsExports[ns] ?? new Map();
    for (const mem of members) {
      if (page.extraModules?.[mem.name]) continue; // rendered below as its own group
      const fn = exp.get(mem.name);
      push({
        page,
        name: mem.name,
        qualified: `${ns}.${mem.name}`,
        access: `${page.access}.${mem.name}`,
        bound: true,
        kind: mem.kind,
        signatures: mem.signatures,
        constType: mem.typeNode,
        doc: mem.doc.text || mem.typeofDoc?.text || (fn?.doc?.text ?? ''),
        docSource: mem.doc.text ? 'member' : mem.typeofDoc?.text ? 'function' : fn?.doc?.text ? 'namespace export' : null,
        tags: [...(mem.doc.tags ?? []), ...(mem.typeofDoc?.tags ?? []), ...(fn?.doc?.tags ?? [])],
        pure: !!fn && fn.kind === 'function',
        file: mem.file,
        line: mem.line,
      });
    }
    for (const [key, extra] of Object.entries(page.extraModules ?? {})) {
      const sym = src.checker.getExportsOfModule(nsSymbols[extra.namespace]).find(s => s.getName() === extra.module);
      for (const mem of sym ? src.moduleMembers(sym) : []) {
        push({
          page,
          name: mem.name,
          qualified: `${extra.namespace}.${mem.name}`,
          aliases: [`experimental.${extra.namespace}.${mem.name}`],
          access: `${extra.access}.${mem.name}`,
          bound: true,
          kind: mem.kind,
          signatures: mem.signatures,
          doc: mem.doc.text,
          docSource: mem.doc.text ? 'member' : null,
          tags: mem.doc.tags,
          file: mem.file,
          line: mem.line,
          group: 'legacy',
        });
      }
      for (const [name, d] of nsExports[extra.namespace] ?? []) {
        if (homeType(name, d, page.typesFile)) page.types.push({ ...d, ns: extra.namespace });
      }
    }
    // Namespace exports that are not on the bound module: pure helpers and constants.
    for (const [name, d] of exp) {
      if (seen.has(name)) continue;
      if (['function', 'constant'].includes(d.kind) && !/^create[A-Z].*Module$/.test(name) && name !== 'createObolContext') {
        if (rootExports.has(name) && declKey(rootExports.get(name)) === declKey(d)) continue; // re-exported root function
        push({
          page,
          name,
          qualified: `${ns}.${name}`,
          access: `${ns}.${name}`,
          bound: false,
          kind: d.kind,
          signatures: d.signatures ?? [],
          constType: d.type,
          doc: d.doc.text,
          docSource: d.doc.text ? 'namespace export' : null,
          tags: d.doc.tags,
          pure: true,
          file: d.file,
          line: d.line,
        });
      }
    }
    for (const [name, d] of exp) if (homeType(name, d, page.typesFile)) page.types.push({ ...d, ns });
  } else {
    const exp = page.entry === 'src/blst/index.ts' ? blstExports : rootExports;
    for (const name of [...(page.rootFunctions ?? []), ...(page.rootConstants ?? [])]) {
      const d = exp.get(name);
      if (!d) {
        report.missingListed.push(`${page.id}: ${name}`);
        continue;
      }
      let sigs = d.signatures ?? [];
      let access = name;
      let doc = d.doc.text;
      // `send` is exported as send(ctx, prepared, options); document the bound obol.send.
      if (name === 'send') {
        const client = rootExports.get('ObolClient');
        const mem = src.moduleMembers(src.resolve(src.checker.getExportsOfModule(src.checker.getSymbolAtLocation(src.program.getSourceFile(path.join(sdkDir, 'src/index.ts')))).find(s => s.getName() === 'ObolClient')));
        const bound = mem.find(m => m.name === 'send');
        if (bound) {
          sigs = bound.signatures;
          access = 'obol.send';
          doc = [d.doc.text, bound.doc.text].filter(Boolean).join('\n\n');
        }
        void client;
      }
      push({
        page,
        name,
        qualified: name,
        aliases: name === 'send' ? ['obol.send'] : [],
        access,
        bound: name === 'send',
        kind: d.kind === 'function' ? 'function' : 'constant',
        signatures: sigs,
        constType: d.type,
        doc,
        docSource: doc ? 'export' : null,
        tags: d.doc.tags,
        pure: true,
        file: d.file,
        line: d.line,
      });
    }
  }
  // Order: curated order first, then source order.
  if (page.order) {
    const rank = new Map(page.order.map((n, i) => [n, i]));
    for (const n of page.order) if (!page.methods.some(m => m.name === n) && !page.extraModules?.[n]) report.missingListed.push(`${page.id}: ${n}`);
    page.methods.sort((a, b) => (rank.get(a.name) ?? 1e3) - (rank.get(b.name) ?? 1e3));
  }
}

// Root exports that no page placed (errors, shared types) go to the core types page.
const corePage = { id: 'core', title: 'Shared types and errors', file: 'reference/types/core.md', typesFile: 'reference/types/core.md', types: [] };
for (const [name, d] of rootExports) {
  if (d.kind === 'namespace') continue;
  if (['interface', 'type', 'class'].includes(d.kind)) {
    if (homeType(name, d, corePage.typesFile)) corePage.types.push({ ...d, ns: null });
  } else if (!methodIndex.has(name) && !['OBOL_ERROR_CODES'].includes(name)) {
    report.unplacedExports.push(name);
  }
}

// --- spec sections per method
const opSections = spec.operations;
function specSectionFor(m) {
  const page = m.page;
  const custom = page.specSections?.[m.name];
  if (custom && opSections.has(custom)) return { heading: custom, ...opSections.get(custom), own: true };
  for (const [heading, names] of Object.entries(page.specGroups ?? {})) {
    if (names.includes(m.name)) {
      const h = opSections.has(heading) ? heading : [...opSections.keys()].find(k => k.startsWith(heading));
      if (h) return { heading: h, ...opSections.get(h), own: heading === `${m.qualified}` };
    }
  }
  const candidates = [m.qualified, `${page.namespace}.${m.name}`, m.name];
  for (const [heading, s] of opSections) {
    const parts = heading.split(/\s*\/\s*/).map(p => p.replace(/\s*\(.*$/, '').trim());
    if (parts.some(p => candidates.includes(p))) return { heading, ...s, own: parts.length === 1 };
  }
  return null;
}
for (const m of methods) {
  m.spec = specSectionFor(m);
  if (!m.spec && m.kind === 'function') report.missingSpec.push(m.qualified);
  m.tag = m.spec ? tagOf(m.spec.body) : null;
}

// --- codes per method from spec/errors.md
const errorInfo = new Map(); // code -> { section, meaning, thrownBy, should, legacy, since }
const findingInfo = new Map();
function resolveTokens(text, contextNs) {
  const hits = new Set();
  for (const tok of codeTokens(text)) {
    const t = tok.replace(/\(.*$/, '').replace(/^obol\./, '');
    if (/\.\*$/.test(t)) {
      const ns = t.slice(0, -2);
      for (const m of methods) if (m.page.namespace === ns) hits.add(m);
      continue;
    }
    const list = methodIndex.get(t) ?? (t.includes('.') ? methodIndex.get(t.split('.').pop()) : null);
    if (list) for (const m of list) if (!t.includes('.') || m.qualified === t || m.qualified.endsWith('.' + t.split('.').pop()) || !contextNs) hits.add(m);
  }
  const lower = text.toLowerCase();
  const all = pred => methods.filter(pred).forEach(m => hits.add(m));
  if (/ovm writes/.test(lower)) all(m => m.page.id === 'ovm' && m.name.startsWith('prepare'));
  if (/role-gated writes/.test(lower)) all(m => m.page.id === 'ovm' && /prepare(Grant|Revoke|Renounce|Set|Sweep|Recover|WithdrawPull)/.test(m.name));
  if (/writes that read status/.test(lower)) all(m => ['prepareDeposit', 'prepareWithdraw', 'prepareConsolidate', 'prepareEoaWithdraw'].includes(m.name));
  if (/reads inside/.test(lower)) all(m => m.name.startsWith('prepare'));
  if (/`api` operations/.test(lower)) all(m => m.tag === 'api' || m.tag === 'api (+ wallet)');
  if (/every signing operation/.test(lower)) all(m => ['cluster.create', 'cluster.accept', 'terms.accept'].includes(m.qualified));
  if (/^`?wait`?$|`wait`/.test(text)) all(m => m.name === 'send');
  return hits;
}
const SECTION_TITLES = new Map();
for (const t of spec.errorTables) {
  const head = t.header.map(h => h.toLowerCase());
  const iCode = head.indexOf('code');
  if (iCode < 0) continue;
  const section = t.headings[t.headings.length - 1];
  const top = t.headings[1] ?? t.headings[0];
  const iMeaning = head.indexOf('meaning');
  const iBy = head.findIndex(h => h === 'thrown by' || h === 'emitted by');
  const iShould = head.indexOf('caller should');
  const iLegacy = head.findIndex(h => /^2\.1[56]/.test(h));
  let prevBy = '';
  for (const r of t.rows) {
    const raw = r[iCode];
    const code = (/`([A-Z0-9_]+)`/.exec(raw) ?? [])[1];
    if (!code) continue;
    let by = iBy >= 0 ? r[iBy] : '';
    if (/^same\b/i.test(by)) by = prevBy + by.replace(/^same/i, '');
    prevBy = by;
    const severity = (/\[(warning|info)\]/.exec(raw) ?? [])[1] ?? null;
    const meaning = r[iMeaning] ?? '';
    const entry = {
      code,
      section,
      top,
      meaning,
      thrownBy: by,
      should: iShould >= 0 ? r[iShould] : '',
      legacy: iLegacy >= 0 ? r[iLegacy] : '',
      legacyLabel: iLegacy >= 0 ? t.header[iLegacy] : '',
      since: /[Ss]ince 3\.0\.0-(rc\.\d+)/.exec(meaning)?.[1] ?? null,
      apiTable: /Obol API/.test(section),
    };
    entry.methods = by ? resolveTokens(by) : new Set();
    if (by && !entry.methods.size && !/every operation|G\d/.test(by)) report.unmatchedThrownBy.push(`${code}: ${by}`);
    if (top === 'Findings' || severity) {
      findingInfo.set(code, { ...entry, severity });
    } else {
      errorInfo.set(code, entry);
      SECTION_TITLES.set(section, (SECTION_TITLES.get(section) ?? 0) + 1);
    }
  }
}
// Section intros (paragraphs between a ### heading and its table).
const errorSectionIntro = new Map();
{
  // Prose between a ### heading and its table, and after the table (notes).
  const lines = spec.errorsMd.split('\n');
  let cur = null;
  for (const line of lines) {
    const h = /^###\s+(.*)$/.exec(line);
    if (h) {
      cur = h[1].trim();
      errorSectionIntro.set(cur, []);
      continue;
    }
    if (/^##\s/.test(line)) cur = null;
    if (cur && !/^\|/.test(line)) errorSectionIntro.get(cur).push(line);
  }
  for (const [k, v] of errorSectionIntro) errorSectionIntro.set(k, v.join('\n').trim());
}

const GROUP_CODES = { PAYLOAD_INVALID: 'G1', UNSUPPORTED_CHAIN: 'G2', CHAIN_MISMATCH: 'G3', WALLET_REQUIRED: 'G3', API_DISABLED: 'G4' };
for (const m of methods) {
  // Findings: from the Prepared kind, plus the findings table's "Emitted by".
  const kinds = new Set();
  for (const s of m.signatures ?? []) for (const k of s.returns.matchAll(/Prepared<'([a-zA-Z]+)'>/g)) kinds.add(k[1]);
  m.kinds = [...kinds];
  const f = new Set();
  for (const k of kinds) for (const c of BY_KIND[k] ?? []) f.add(c);
  for (const [code, e] of findingInfo) if (e.methods.has(m)) f.add(code);
  if (m.name === 'simulate') for (const c of runtime.SIMULATION_FINDING_CODES) f.add(c);
  m.findings = [...f];
  // Throws: errors.md "Thrown by", plus error codes named in the method's own
  // operations.md section (except codes it reports as a finding there).
  const throws = new Map();
  for (const [code, e] of errorInfo) if (e.methods.has(m)) throws.set(code, 'errors.md');
  if (m.spec?.own) {
    for (const match of m.spec.body.matchAll(/(Finding\s+)?`([A-Z][A-Z0-9_]{3,})`/g)) {
      const c = match[2];
      if (match[1] || f.has(c) || FINDING_CODES.has(c) || c.startsWith('API_')) continue; // findings; API_* are G4
      // "`DEPOSIT_CONFLICT` by `prepareDeposit`": a code another operation throws.
      const after = /^`?\s*\)?\s*(?:by|from|in)\s+`([\w.]+)`/.exec(m.spec.body.slice(match.index + match[0].length));
      if (after && after[1].split('.').pop() !== m.name) continue;
      if (ERROR_CODES.has(c) && !throws.has(c)) throws.set(c, 'operations.md');
    }
  }
  // @throws in the source's TSDoc.
  for (const t of (m.tags ?? []).filter(t => t.name === 'throws')) {
    for (const c of t.text.match(/\b[A-Z][A-Z0-9_]{3,}\b/g) ?? []) if (ERROR_CODES.has(c) && !throws.has(c)) throws.set(c, 'tsdoc');
  }
  for (const c of Object.keys(GROUP_CODES)) throws.delete(c);
  m.throws = [...throws.keys()];
}
// Reverse map for the error / warning pages.
const codeMethods = new Map();
for (const m of methods) for (const c of [...m.throws, ...m.findings]) {
  if (!codeMethods.has(c)) codeMethods.set(c, []);
  if (!codeMethods.get(c).includes(m)) codeMethods.get(c).push(m);
}

// --- examples: regions in scripts/sdk-v3/examples/*.ts
const examples = new Map();
for (const f of fs.existsSync(examplesDir) ? fs.readdirSync(examplesDir) : []) {
  if (!f.endsWith('.ts') || f.startsWith('_')) continue;
  const text = fs.readFileSync(path.join(examplesDir, f), 'utf8');
  const prelude = (/^\/\/ #region imports\n([\s\S]*?)^\/\/ #endregion/m.exec(text) ?? [])[1] ?? '';
  for (const r of text.matchAll(/^[ \t]*\/\/ #region ([\w.]+)\n([\s\S]*?)^[ \t]*\/\/ #endregion/gm)) {
    if (r[1] === 'imports') continue;
    const raw = r[2].replace(/\n+$/, '');
    const indent = Math.min(...raw.split('\n').filter(l => l.trim()).map(l => /^ */.exec(l)[0].length));
    const body = raw.split('\n').map(l => l.slice(indent)).join('\n');
    // Keep only the imports the snippet uses, so each example stands alone.
    const used = prelude
      .split('\n')
      .filter(l => /^import/.test(l))
      .map(l => {
        const mm = /^import (type )?\{([^}]*)\} from (.*)$/.exec(l);
        if (!mm) return null;
        const names = mm[2].split(',').map(s => s.trim()).filter(Boolean).filter(n => new RegExp(`\\b${n.replace(/^type /, '')}\\b`).test(body));
        return names.length ? `import ${mm[1] ?? ''}{ ${names.join(', ')} } from ${mm[3]}` : null;
      })
      .filter(Boolean);
    examples.set(r[1], (used.length ? used.join('\n') + '\n\n' : '') + body);
  }
}

// ---------------------------------------------------------------- rendering
const pageDepth = file => file.split('/').length - 1; // from docs/sdk-v3
// Route of a generated file relative to docs/sdk-v3 (index files are their folder).
const route = f => '/' + f.replace(/\.mdx?$/, '').replace(/(^|\/)index$/, '');
function rel(fromFile, toFile, anchor) {
  // URL-relative path between two doc routes, for raw HTML links.
  const from = route(fromFile);
  const to = route(toFile);
  if (from === to) return anchor ? `#${anchor}` : './';
  let r = path.posix.relative(path.posix.dirname(from), to);
  if (r === '') r = './';
  else if (!r.startsWith('.')) r = './' + r;
  return anchor ? `${r}#${anchor}` : r;
}
function mdRel(fromFile, toFile, anchor) {
  let r = path.posix.relative(path.posix.dirname(fromFile), toFile);
  if (!r.startsWith('.')) r = './' + r;
  return anchor ? `${r}#${anchor}` : r;
}

/** A type expression as HTML code with the SDK's types linked. */
function typeHtml(text, fromFile) {
  const parts = String(text).replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '').split(/([A-Za-z_$][\w$]*)/);
  let html = '';
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    if (i % 2 === 1 && typeHome.has(p) && parts[i - 1]?.slice(-1) !== '.' && parts[i - 1]?.slice(-1) !== "'") {
      const h = typeHome.get(p);
      html += `<a href="${rel(fromFile, h.page, h.id)}">${esc(p)}</a>`;
    } else html += esc(p);
  }
  // A <span>, not <code>: the site renders a <code> with element children (the
  // links) as a code block.
  return `<span class="sdk-type">${html.replace(/\|/g, '&#124;').replace(/\n\s*/g, ' ')}</span>`;
}

function codeChip(code, fromFile, mode = 'error') {
  if (mode === 'error' && ERROR_CODES.has(code) && errorInfo.has(code)) {
    const since = errorInfo.get(code).since;
    return `<a class="sdk-chip sdk-chip--error" href="${rel(fromFile, 'errors.md', code)}">${code}${since ? `<span class="sdk-chip__since">${since}</span>` : ''}</a>`;
  }
  if (FINDING_CODES.has(code)) {
    const sev = FINDINGS[code].severity;
    return `<a class="sdk-chip sdk-chip--${sev}" href="${rel(fromFile, 'warnings.md', code)}" title="${sev}">${code}</a>`;
  }
  return `<code>${code}</code>`;
}

function methodAnchor(m) {
  return m.page.extraModules && m.group === 'legacy' ? `legacy-${m.name}` : m.name;
}
function methodLink(m, fromFile, label) {
  return `[\`${label ?? m.access}\`](${mdRel(fromFile, m.page.file, methodAnchor(m))})`;
}

/** Links inline code spans that name an error / finding code or a method. */
function linkify(text, fromFile, selfMethod) {
  return prose(text)
    .split(/(```[\s\S]*?```)/)
    .map((chunk, ci) =>
      ci % 2
        ? chunk
        : chunk.replace(/(\[[^\]]*\]\([^)]*\))|`([^`\n]+)`/g, (whole, link, code) => {
            if (link || !code) return whole;
            if (ERROR_CODES.has(code) && errorInfo.has(code) && fromFile !== 'errors.md#self') return `[\`${code}\`](${mdRel(fromFile, 'errors.md', code)})`;
            if (FINDING_CODES.has(code)) return `[\`${code}\`](${mdRel(fromFile, 'warnings.md', code)})`;
            const t = code.replace(/^obol\./, '').replace(/^experimental\.(?=legacy\.)/, '');
            const mm = /^([A-Za-z]+(?:\.[A-Za-z]+)?)(\(.*\))?$/.exec(t);
            if (mm) {
              const target = (methodIndex.get(mm[1]) ?? []).filter(x => x.qualified === mm[1] || x.aliases?.includes(mm[1]) || (!mm[1].includes('.') && (x.page.module == null)));
              if (target.length === 1 && target[0] !== selfMethod) return `[\`${code}\`](${mdRel(fromFile, target[0].page.file, methodAnchor(target[0]))})`;
            }
            if (typeHome.has(code)) {
              const h = typeHome.get(code);
              return `[\`${code}\`](${mdRel(fromFile, h.page, h.id)})`;
            }
            return whole;
          }),
    )
    .join('');
}

/** Rewrites relative links of SDK Markdown (spec/, README) to GitHub. */
function fixSdkLinks(text, base, selfFile) {
  // `base` is the folder of the source file, `selfFile` its path (for #anchors).
  return text
    .replace(/\]\((?!https?:|#|mailto:)([^)\s]+)\)/g, (_, href) => `](${GH}/${path.posix.normalize(path.posix.join(base, href))})`)
    .replace(/\]\(#([^)]+)\)/g, (_, a) => `](${GH}/${selfFile}#${a})`);
}

function banner(extra = '') {
  const label = previewLabel ? `\n\n**${previewLabel}**` : '';
  return `:::caution[v3 release candidate, unreleased]

This is the reference for \`@obolnetwork/obol-sdk@${VERSION}\`, generated from its source and spec. Names and shapes may still change before 3.0.0, and it is not on npm \`latest\`. For the released SDK see the [2.x reference](${extra}../sdk/index.md).${label}

:::
`;
}

const STAGE_BY_ID = Object.fromEntries(STAGES.map((s, i) => [s.id, { ...s, n: i + 1 }]));
function stageBadge(stageId, fromFile) {
  const s = STAGE_BY_ID[stageId];
  if (!s) return '';
  return `<a class="sdk-badge sdk-badge--stage" href="${rel(fromFile, 'lifecycle.mdx', s.id)}">${s.n}. ${esc(s.title)}</a>`;
}

const GROUPS = [
  ['legacy', 'experimental.legacy', m => m.group === 'legacy'], // heading id: #legacy
  ['reads', 'Reads', m => /^(get|status|watch|preflight|isClaimed|hasAccepted)/.test(m.name) && m.bound],
  ['transactions', 'Transactions', m => m.kinds?.length > 0 || /^preview/.test(m.name)],
  ['checks', 'Checks', m => /^(verify|isValid|assert)/.test(m.name)],
  ['signing', 'Signing and API writes', m => ['create', 'accept'].includes(m.name) && m.bound],
  ['simulate', 'Simulation', m => m.name === 'simulate'],
  ['helpers', 'Pure helpers', m => m.kind === 'function'],
  ['constants', 'Constants', () => true],
];
const groupOf = m => {
  const forced = m.page.groupOf?.[m.name];
  const g = forced ? GROUPS.find(x => x[0] === forced) : GROUPS.find(x => x[2](m));
  return [g[0], m.page.groupTitles?.[g[0]] ?? g[1]];
};

async function renderSignature(m) {
  const blocks = [];
  for (const s of m.signatures) {
    const tp = s.typeParams.length ? `<${s.typeParams.join(', ')}>` : '';
    const params = s.params.map(p => `${p.rest ? '...' : ''}${p.name}${p.optional ? '?' : ''}: ${p.type}`).join(', ');
    let code = `declare function ${m.name}${tp}(${params}): ${s.returns};`;
    code = (await prettierSig(code)).trim();
    const prefix = m.access.slice(0, -m.name.length);
    code = code.replace(/^declare function /, prefix).replace(/;$/, '');
    blocks.push(code);
  }
  return blocks.length ? '```ts sdk-signature\n' + blocks.join('\n\n') + '\n```\n' : '';
}

function paramTable(m, file) {
  const s = m.signatures[0];
  if (!s || !s.params.length) return '';
  const rows = [];
  for (const p of s.params) {
    const pname = `${p.rest ? '...' : ''}${p.name}${p.optional ? '?' : ''}`;
    rows.push([`<code>${esc(pname)}</code>`, typeHtml(p.type, file), cell(linkify(p.doc, file))]);
    if (p.fields && (s.params.length === 1 || p.fields.length <= 25)) {
      for (const f of p.fields) {
        rows.push([`<code>${esc(p.name)}.${esc(f.name)}${f.optional ? '?' : ''}</code>`, typeHtml(f.type, file), cell(linkify(f.doc, file)) + (f.declaredIn && f.declaredIn !== p.type.replace(/<.*/, '') ? ` <span class="sdk-from">from ${typeHtml(f.declaredIn, file)}</span>` : '')]);
      }
    }
  }
  return `| Parameter | Type | Description |\n|---|---|---|\n${rows.map(r => `| ${r.join(' | ')} |`).join('\n')}\n`;
}

function returnsLine(m, file) {
  const s = m.signatures[0];
  if (!s) return '';
  let line = `**Returns** ${typeHtml(s.returns, file)}`;
  const rtag = s.tags.find(t => t.name === 'returns');
  if (rtag?.text) line += ` ${linkify(rtag.text, file)}`;
  if (m.kinds.length) {
    const k = m.kinds[0];
    line += `: a \`Prepared\` of kind \`'${k}'\`, preview ${typeHtml(`PreviewByKind['${k}']`, file)}. Send it with [\`obol.send\`](${mdRel(file, 'reference/send.md', 'send')}) or your wallet layer.`;
  } else if (/^preview/.test(m.name)) {
    line += ': `{ preview, checks, blockNumber }`, never a transaction.';
  }
  return line + '\n';
}

async function renderMethod(m, file) {
  const out = [];
  const anchor = methodAnchor(m);
  const title = m.group === 'legacy' ? `experimental.legacy.${m.name}` : m.page.namespace ? `${m.page.namespace}.${m.name}` : m.name;
  out.push(`### ${title} {#${anchor}}\n`);
  const badges = [];
  if (m.tag) badges.push(`<span class="sdk-badge sdk-badge--tag" title="Where it reads from (spec tag)">${esc(m.tag)}</span>`);
  if (m.bound === false) badges.push(`<span class="sdk-badge sdk-badge--pure" title="Exported from the namespace, not bound on the client">namespace only</span>`);
  if (m.throws.length) badges.push(`<span class="sdk-badge sdk-badge--throws">throws ${m.throws.length}</span>`);
  const warns = m.findings.filter(c => FINDINGS[c]?.severity === 'warning');
  if (warns.length) badges.push(`<span class="sdk-badge sdk-badge--warning">${warns.length} warning${warns.length > 1 ? 's' : ''}</span>`);
  const renamed = renamesRc12.get(m.qualified) ?? renamesRc12.get(m.name);
  if (renamed) badges.push(`<span class="sdk-badge sdk-badge--since" title="Renamed in 3.0.0-rc.12">rc.12: was ${esc(renamed)}</span>`);
  const stage = m.page.stages?.[m.name];
  if (stage) badges.push(stageBadge(stage, file));
  if (badges.length) out.push(`<div class="sdk-badges">${badges.join(' ')}</div>\n`);

  const access = m.kind === 'constant' ? m.access : `${m.access}()`;
  if (m.doc) out.push(linkify(m.doc, file, m) + '\n');
  else {
    report.noDoc.push(m.qualified);
    out.push(`<p class="sdk-nodoc">No TSDoc on <code>${esc(access)}</code> yet; the behaviour below is the spec's.</p>\n`);
  }
  for (const t of m.tags.filter(t => t.name === 'remarks')) out.push(linkify(t.text, file, m) + '\n');
  const dep = m.tags.find(t => t.name === 'deprecated');
  if (dep) out.push(`:::warning[Deprecated]\n\n${linkify(dep.text || 'Deprecated.', file, m)}\n\n:::\n`);
  if (m.kind === 'constant') {
    out.push('```ts sdk-signature\n' + `${m.access}: ${m.constType}` + '\n```\n');
  } else {
    out.push(await renderSignature(m));
    const pt = paramTable(m, file);
    if (pt) out.push(pt);
    out.push(returnsLine(m, file));
  }
  if (m.throws.length) {
    out.push(`**Throws** <span class="sdk-muted">(per spec)</span> ${m.throws.map(c => codeChip(c, file)).join(' ')} <span class="sdk-muted">plus the [checks every operation runs](${mdRel(file, 'errors.md', 'checks-every-operation-runs')})</span>\n`);
  }
  if (m.findings.length) {
    const label = m.kinds.length || m.name === 'simulate' ? 'Can report' : 'Reports';
    out.push(`**${label}** ${m.findings.map(c => codeChip(c, file, 'finding')).join(' ')}\n`);
  }
  const exKey = m.group === 'legacy' ? `legacy.${m.name}` : m.page.namespace ? `${m.page.namespace}.${m.name}` : m.name;
  const tsdocExample = m.tags.find(t => t.name === 'example')?.text;
  if (examples.has(exKey)) {
    report.examples.with++;
    out.push('**Example**\n\n```ts\n' + examples.get(exKey) + '\n```\n');
  } else if (tsdocExample) {
    report.examples.with++;
    out.push('**Example**\n\n' + (tsdocExample.includes('```') ? tsdocExample : '```ts\n' + tsdocExample + '\n```') + '\n');
  } else if (m.kind === 'function') report.examples.without.push(exKey);
  if (m.spec) {
    // spec/ code blocks are notation, not samples: tag them so the sample check skips them.
    const body = linkify(fixSdkLinks(m.spec.body, 'spec', 'spec/operations.md'), file, m)
      .replace(/^(#{1,4})\s/gm, '#### ')
      .replace(/^```(ts|typescript)\s*$/gm, '```ts sdk-spec');
    const shared = m.spec.own ? '' : ' (shared section)';
    out.push(`<details class="sdk-spec">\n<summary>Specification: ${esc(m.spec.heading)}${shared}</summary>\n\n${body}\n\n<p class="sdk-muted">From <a href="${GH}/spec/operations.md">spec/operations.md</a>.</p>\n\n</details>\n`);
  }
  const ghAnchor = h => h.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/ /g, '-');
  const see = [];
  if (m.spec) see.push(`[spec/operations.md](${GH}/spec/operations.md#${ghAnchor(m.spec.heading)})`);
  for (const t of m.tags.filter(t => t.name === 'see')) {
    const sp = /spec\s*\/\s*operations\.md\s+"([^"]+)"/.exec(t.text);
    if (sp && m.spec && sp[1] === m.spec.heading) continue; // the same section, linked above
    if (sp) see.push(`[spec: ${sp[1]}](${GH}/spec/operations.md#${ghAnchor(sp[1])})`);
    else see.push(esc(t.text.replace(/`/g, '')));
  }
  const schemaName = `${m.group === 'legacy' ? 'legacy' : m.page.namespace ?? ''}.${m.name}`;
  if (fs.existsSync(path.join(sdkDir, 'spec/schemas', `${schemaName}.json`))) see.push(`[input JSON Schema](${GH}/spec/schemas/${schemaName}.json)`);
  see.push(`[source](${GH}/${m.file}#L${m.line})`);
  out.push(`<p class="sdk-see">See also: ${see.map(s => s.replace(/^\[(.*)\]\((.*)\)$/, (_, a, b) => `<a href="${b.startsWith('http') ? b : b}">${a.replace(/`/g, '')}</a>`)).join(' · ')}</p>\n`);
  return out.join('\n');
}

function frontmatter(o) {
  return '---\n' + Object.entries(o).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n') + '\n---\n\n';
}
const GENERATED = `<!-- GENERATED by scripts/sdk-v3/generate.mjs from @obolnetwork/obol-sdk ${VERSION}. Do not edit; re-run scripts/generate-sdk-v3-reference.sh. -->\n\n`;

async function renderPage(page, position) {
  const file = page.file;
  const out = [];
  out.push(frontmatter({
    title: page.title,
    sidebar_label: page.sidebarLabel ?? page.title,
    sidebar_position: position,
    slug: `/sdk/v3/reference/${page.id}`,
    description: page.purpose.replace(/`/g, '').slice(0, 300),
    toc_max_heading_level: 3,
  }));
  out.push(GENERATED);
  out.push(`# ${page.title}\n\n`);
  out.push(banner('../'));
  out.push(linkify(page.purpose, file) + '\n');
  const facts = [];
  facts.push(`<span class="sdk-fact"><span class="sdk-fact__k">Access</span> <code>${esc(page.access)}</code></span>`);
  facts.push(`<span class="sdk-fact"><span class="sdk-fact__k">Import</span> <code>${esc(page.subpath)}</code></span>`);
  if (page.lifecycle && page.lifecycle !== 'all') facts.push(`<span class="sdk-fact"><span class="sdk-fact__k">Lifecycle</span> ${stageBadge(page.lifecycle, file)}</span>`);
  else if (page.lifecycle === 'all') facts.push(`<span class="sdk-fact"><span class="sdk-fact__k">Lifecycle</span> <a class="sdk-badge sdk-badge--stage" href="${rel(file, 'lifecycle.mdx')}">every stage</a></span>`);
  if (page.types.length) facts.push(`<span class="sdk-fact"><span class="sdk-fact__k">Types</span> <a href="${rel(file, page.typesFile)}">${page.types.length} on the types page</a></span>`);
  out.push(`<div class="sdk-facts">${facts.join('')}</div>\n`);
  // Summary table.
  const groups = new Map();
  for (const m of page.methods) {
    const g = groupOf(m);
    if (!groups.has(g[0])) groups.set(g[0], { title: g[1], items: [] });
    groups.get(g[0]).items.push(m);
  }
  const ordered = (page.groupOrder ?? ['reads', 'signing', 'transactions', 'checks', 'simulate', 'legacy', 'helpers', 'constants']).filter(k => groups.has(k));
  out.push('| Method | Summary |\n|---|---|\n' + page.methods.map(m => {
    const first = (m.doc || '').split(/\n\n|(?<=\.)\s/)[0].replace(/\n/g, ' ');
    const sum = first ? cell(linkify(first, file, m)) : '<span class="sdk-muted">no TSDoc</span>';
    return `| [\`${m.group === 'legacy' ? 'legacy.' : ''}${m.name}\`](#${methodAnchor(m)}) | ${sum} |`;
  }).join('\n') + '\n');
  for (const k of ordered) {
    const g = groups.get(k);
    out.push(`## ${g.title} {#${k === 'legacy' ? 'legacy' : `group-${k}`}}\n`);
    for (const m of g.items) out.push(await renderMethod(m, file));
  }
  if (page.id === 'client') {
    // The per-module entry points: createObolContext + create<Module>Module.
    const rows = [];
    for (const p of PAGES.filter(p => p.module && p.namespace)) {
      const factories = [p.namespace, ...Object.values(p.extraModules ?? {}).map(e => e.namespace)]
        .flatMap(ns => [...(nsExports[ns] ?? new Map()).keys()].filter(n => /^create[A-Z]\w*Module$/.test(n)).map(n => [ns, n]));
      for (const [ns, n] of factories) rows.push(`| <code id="${n}">${n}</code> | \`${ns === 'legacy' ? '@obolnetwork/obol-sdk/experimental' : p.subpath}\` | [${p.title}](${mdRel(file, p.file)}) |`);
    }
    out.push('## Module entry points {#module-entry-points}\n');
    out.push('Each module is its own entry point. Bind one module to a context instead of building the whole client, so a page loads only that module\'s code (an `ovm` reads-only import has no BLS or SSZ code):\n');
    out.push((examples.get('createObolContext') ? '```ts\n' + examples.get('createObolContext') + '\n```\n' : ''));
    out.push('| Factory | Entry | Bound methods |\n|---|---|---|\n' + rows.join('\n') + '\n');
  }
  if (page.seeAlso?.length) {
    out.push('## See also {#see-also}\n');
    out.push(page.seeAlso.map(id => {
      const p = PAGES.find(x => x.id === id);
      return p ? `- [${p.title}](${mdRel(file, p.file)})` : '';
    }).join('\n') + (page.types.length ? `\n- [Types used on this page](${mdRel(file, page.typesFile)})` : '') + `\n- [Error codes](${mdRel(file, 'errors.md')}) · [Warnings and findings](${mdRel(file, 'warnings.md')})\n`);
  }
  return out.join('\n');
}

async function renderTypesPage(page, position) {
  const file = page.typesFile;
  const out = [];
  const title = page.id === 'core' ? 'Shared types and errors' : `${page.title} types`;
  out.push(frontmatter({ title, sidebar_label: page.id === 'core' ? 'Shared types' : (page.sidebarLabel ?? page.title), sidebar_position: position, slug: `/sdk/v3/reference/types/${page.id}`, toc_max_heading_level: 3 }));
  out.push(GENERATED);
  out.push(`# ${title}\n\n`);
  out.push(banner('../../'));
  if (page.id !== 'core') out.push(`Types exported by ${page.namespace ? `the \`${page.namespace}\` namespace (\`import { ${page.namespace} } from '@obolnetwork/obol-sdk'\`, then \`${page.namespace}.TypeName\`) and the \`${page.subpath}\` entry` : `\`${page.subpath}\``}. Methods: [${page.title}](${mdRel(file, page.file)}).\n`);
  else out.push('Types exported from the package root that more than one module uses, and the error classes. Error codes: [Errors](../../errors.md).\n');
  out.push('| Type | Kind | Summary |\n|---|---|---|\n' + page.types.map(t => `| [\`${t.name}\`](#${t.name}) | ${t.kind} | ${cell(linkify((t.doc.text || '').split(/\n\n/)[0], file))} |`).join('\n') + '\n');
  for (const t of page.types) {
    out.push(`### ${t.name} {#${t.name}}\n`);
    const qual = t.ns ? `${t.ns}.${t.name}` : t.name;
    out.push(`<div class="sdk-badges"><span class="sdk-badge sdk-badge--tag">${t.kind}</span> <code class="sdk-qual">${esc(qual)}</code></div>\n`);
    if (t.doc.text) out.push(linkify(t.doc.text, file) + '\n');
    if (t.declaration && t.declaration.length < 2400) {
      const code = (await prettierSig(t.declaration)).trim();
      out.push('```ts sdk-signature\n' + code + '\n```\n');
    }
    if (t.fields?.length) {
      out.push(`| Field | Type | Description |\n|---|---|---|\n${t.fields.map(f => `| <code>${f.readonly ? 'readonly ' : ''}${esc(f.name)}${f.optional ? '?' : ''}</code> | ${typeHtml(f.type, file)} | ${cell(linkify(f.doc, file))} |`).join('\n')}\n`);
    }
    out.push(`<p class="sdk-see"><a href="${GH}/${t.file}#L${t.line}">source</a></p>\n`);
  }
  return out.join('\n');
}

// --- errors page
async function renderErrors() {
  const file = 'errors.md';
  const out = [];
  out.push(frontmatter({ title: 'Error codes', sidebar_label: 'Error codes', sidebar_position: 4, slug: '/sdk/v3/errors', description: 'Every ObolError code of @obolnetwork/obol-sdk v3: meaning, which operations throw it, what the caller should do, and its details fields.', toc_max_heading_level: 3 }));
  out.push(GENERATED);
  out.push('# Error codes\n\n');
  out.push(banner());
  const intro = spec.errorsMd.split(/\n## Errors\n/)[0].replace(/^# .*\n/, '');
  out.push(linkify(fixSdkLinks(intro, 'spec', 'spec/errors.md'), file) + '\n');
  out.push(`\`\`\`ts
import { isObolError } from '@obolnetwork/obol-sdk';

declare const run: () => Promise<unknown>;
try {
  await run();
} catch (error) {
  if (isObolError(error, 'DEPOSIT_AMOUNT_REQUIRED')) {
    console.log(error.details.available); // typed per code
  } else if (isObolError(error)) {
    console.log(error.code, error.hint);
  } else throw error;
}
\`\`\`
`);
  // G rules
  const g = /### Checks every operation runs\n([\s\S]*?)\n## /.exec(spec.operationsMd);
  if (g) out.push('## Checks every operation runs {#checks-every-operation-runs}\n\n' + linkify(fixSdkLinks(g[1].trim(), 'spec', 'spec/operations.md'), file) + '\n');
  const bySection = new Map();
  for (const e of errorInfo.values()) {
    if (!bySection.has(e.section)) bySection.set(e.section, []);
    bySection.get(e.section).push(e);
  }
  // Summary index.
  out.push('## All codes {#all-codes}\n');
  for (const [section, list] of bySection) {
    out.push(`**${section}**: ${list.map(e => `<a class="sdk-chip sdk-chip--error" href="#${e.code}">${e.code}</a>`).join(' ')}\n`);
  }
  const detailsIface = rootExports.get('ObolErrorDetails');
  const detailsByCode = new Map((detailsIface?.fields ?? []).map(f => [f.name, f.type]));
  for (const [section, list] of bySection) {
    const slug = 'section-' + section.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
    out.push(`## ${section} {#${slug}}\n`);
    const intro = errorSectionIntro.get(section);
    if (intro) out.push(linkify(fixSdkLinks(intro, 'spec', 'spec/errors.md'), file) + '\n');
    for (const e of list) {
      out.push(`### ${e.code} {#${e.code}}\n`);
      const b = [];
      if (e.since) b.push(`<span class="sdk-badge sdk-badge--since">since ${e.since}</span>`);
      if (GROUP_CODES[e.code]) b.push(`<span class="sdk-badge sdk-badge--tag">${GROUP_CODES[e.code]}: every operation</span>`);
      if (b.length) out.push(`<div class="sdk-badges">${b.join(' ')}</div>\n`);
      out.push(linkify(e.meaning, file) + '\n');
      const rows = [];
      const ms = codeMethods.get(e.code) ?? [];
      if (e.thrownBy || ms.length) rows.push(['Thrown by', ms.length ? ms.map(m => methodLink(m, file)).join(', ') + (e.thrownBy && /G\d|every|`api`|signing|writes/.test(e.thrownBy) ? ` (spec: ${linkify(e.thrownBy, file)})` : '') : linkify(e.thrownBy, file)]);
      if (e.apiTable) rows.push(['Thrown by', 'any operation that calls the Obol API (G4)']);
      if (e.should) rows.push(['Caller should', linkify(e.should, file)]);
      const det = detailsByCode.get(e.code);
      if (det) rows.push(['`details`', typeHtml(det, file)]);
      if (e.legacy) rows.push([e.legacyLabel === '2.15' ? 'In 2.x' : `In ${e.legacyLabel}`, linkify(e.legacy, file)]);
      out.push(`| | |\n|---|---|\n${rows.map(r => `| ${r[0]} | ${cell(r[1])} |`).join('\n')}\n`);
    }
  }
  const tail = /\n(All exit errors were[\s\S]*?)\n### Sending/.exec(spec.errorsMd);
  void tail;
  out.push('## The error classes {#classes}\n');
  out.push(`[\`ObolError\`](${mdRel(file, typeHome.get('ObolError')?.page ?? 'reference/types/core.md', 'ObolError')}) has \`code\`, \`message\` (not normative), \`hint\`, \`details\` and \`cause\`; [\`ObolApiError\`](${mdRel(file, typeHome.get('ObolApiError')?.page ?? 'reference/types/core.md', 'ObolApiError')}) adds the HTTP fields. Prefer [\`isObolError\`](${mdRel(file, 'reference/checks.md', 'isObolError')}) to \`instanceof\`: it recognises an error from any copy of the SDK.\n`);
  return out.join('\n');
}

// --- warnings / findings page
async function renderWarnings() {
  const file = 'warnings.md';
  const keyDocs = src.constantKeyDocs('src/findings.ts', 'FINDINGS');
  const out = [];
  out.push(frontmatter({ title: 'Warnings and findings', sidebar_label: 'Warnings & findings', sidebar_position: 5, slug: '/sdk/v3/warnings', description: 'Every finding code a prepared transaction or simulation can carry, its severity, what it means and what acknowledging it accepts.', toc_max_heading_level: 3 }));
  out.push(GENERATED);
  out.push('# Warnings and findings\n\n');
  out.push(banner());
  const ack = /### Acknowledging warnings\n([\s\S]*?)\n\*\*1\./.exec(spec.readmeMd);
  if (ack) out.push(linkify(fixSdkLinks(ack[1].trim(), '', 'README.md'), file) + '\n');
  out.push(`The helpers are on [send and acknowledgements](${mdRel(file, 'reference/send.md')}); how an agent should use them: [For AI agents](${mdRel(file, 'for-agents.md')}).\n`);
  const patterns = /(\*\*1\. A confirmation dialog[\s\S]*?)\nEvery warning `send` can refuse/.exec(spec.readmeMd);
  if (patterns) out.push('## Three ways to acknowledge {#patterns}\n\nFrom the SDK README.\n\n' + linkify(fixSdkLinks(patterns[1].trim(), '', 'README.md'), file) + '\n');
  const groupTitles = { risk: 'Risks: the transaction may not do what you intend', unchecked: 'Unchecked: a safety check could not run', note: 'Notes: for the record (info)', claim: 'Incentive claim issues' };
  const groupDesc = { risk: '', unchecked: `These are the codes in \`UNCHECKED_WARNING_CODES\`: nothing is known to be wrong, and nothing was shown to be right.`, note: '`info` findings never need acknowledging.', claim: 'Issues of `incentives.preflight` and `INCENTIVES_PREFLIGHT_FAILED.details.issues`; never on a `Prepared`.' };
  const kindsOf = code => Object.entries(BY_KIND).filter(([, cs]) => cs.includes(code)).map(([k]) => k);
  // Matrix: code × kind.
  const kinds = Object.keys(BY_KIND);
  out.push('## Which transaction can carry which warning {#matrix}\n');
  out.push('Rows are the codes `send` can refuse (severity `warning`) and the `info` notes; columns are the `Prepared` kinds (`FINDING_CODES_BY_KIND`). Simulation codes come from `experimental.simulate` on any kind.\n');
  const kindsWith = kinds.filter(k => BY_KIND[k].length);
  const codes = Object.keys(FINDINGS).filter(c => FINDINGS[c].group !== 'claim');
  out.push(`<div class="sdk-matrix-wrap"><table class="sdk-matrix"><thead><tr><th>Code</th>${kindsWith.map(k => `<th><span>${k}</span></th>`).join('')}</tr></thead><tbody>${codes.map(c => `<tr><th><a href="#${c}" class="sdk-chip sdk-chip--${FINDINGS[c].severity}">${c}</a></th>${kindsWith.map(k => `<td>${BY_KIND[k].includes(c) ? '●' : ''}</td>`).join('')}</tr>`).join('')}</tbody></table></div>\n`);
  for (const group of ['risk', 'unchecked', 'note', 'claim']) {
    const list = Object.entries(FINDINGS).filter(([, f]) => f.group === group);
    if (!list.length) continue;
    out.push(`## ${groupTitles[group]} {#group-${group}}\n`);
    if (groupDesc[group]) out.push(linkify(groupDesc[group], file) + '\n');
    for (const [code, f] of list) {
      out.push(`### ${code} {#${code}}\n`);
      const b = [`<span class="sdk-badge sdk-badge--${f.severity}">${f.severity}</span>`];
      if (UNCHECKED.has(code)) b.push('<span class="sdk-badge sdk-badge--tag">UNCHECKED_WARNING_CODES</span>');
      const fi = findingInfo.get(code);
      if (fi?.since) b.push(`<span class="sdk-badge sdk-badge--since">since ${fi.since}</span>`);
      if (ERROR_CODES.has(code)) b.push(`<a class="sdk-badge sdk-badge--throws" href="${rel(file, 'errors.md', code)}">also an error code</a>`);
      out.push(`<div class="sdk-badges">${b.join(' ')}</div>\n`);
      out.push(`**${linkify(f.meaning, file)}**\n`);
      if (keyDocs[code] && keyDocs[code] !== f.meaning) out.push(linkify(keyDocs[code].replace(/^[A-Z][a-z]+\.\s/, ''), file) + '\n');
      const rows = [];
      rows.push([f.severity === 'warning' ? 'Before you acknowledge' : 'What to do', linkify(f.guidance, file)]);
      const ms = codeMethods.get(code) ?? [];
      if (ms.length) rows.push(['Reported by', ms.map(m => methodLink(m, file)).join(', ')]);
      const ks = kindsOf(code);
      if (ks.length) rows.push(['`Prepared` kinds', ks.map(k => `\`${k}\``).join(', ')]);
      if (fi?.should) rows.push(['Caller should', linkify(fi.should, file)]);
      out.push(`| | |\n|---|---|\n${rows.map(r => `| ${r[0]} | ${cell(r[1])} |`).join('\n')}\n`);
    }
  }
  return out.join('\n');
}

// --- migration page
function renderMigration() {
  const file = 'migration.md';
  const out = [];
  out.push(frontmatter({ title: '2.x to 3.x', sidebar_label: '2.x → 3.x map', sidebar_position: 6, slug: '/sdk/v3/migration', description: 'Every 2.x method and export of @obolnetwork/obol-sdk and its v3 replacement, plus the rc.12 renames.', toc_max_heading_level: 2 }));
  out.push(GENERATED);
  out.push('# 2.x to 3.x\n\n');
  out.push(banner());
  const changes = /### What changes everywhere\n([\s\S]*?)\n### /.exec(spec.migrationMd);
  if (changes) out.push('## What changes everywhere {#everywhere}\n\n' + linkify(fixSdkLinks(changes[1].trim(), '', 'MIGRATION.md'), file) + '\n');
  const pick = re => spec.migrationTables.find(t => t.headings.some(h => re.test(h)));
  const tbl = (t, heads) => `| ${heads.join(' | ')} |\n|${heads.map(() => '---').join('|')}|\n` + t.rows.map(r => `| ${r.map(c => cell(linkify(fixSdkLinks(c, '', 'MIGRATION.md'), file))).join(' | ')} |`).join('\n') + '\n';
  const methodsT = pick(/^Every 2\.x method$/);
  if (methodsT) out.push('## Every 2.x method {#methods}\n\n' + tbl(methodsT, ['2.x', '3.x']));
  const exportsT = pick(/^Every other 2\.x export$/);
  if (exportsT) out.push('## Every other 2.x export {#exports}\n\n' + tbl(exportsT, ['2.x', '3.x']));
  const ren = spec.migrationTables.find(t => t.headings.some(h => /Renames/.test(h)) && t.headings.some(h => /rc\.11 to rc\.12/.test(h)));
  if (ren) out.push('## Renamed in 3.0.0-rc.12 {#rc12-renames}\n\nFor code written against an earlier release candidate. No aliases are kept.\n\n' + tbl(ren, ren.header));
  out.push(`The full guide, with every breaking change between the release candidates: [MIGRATION.md](${GH}/MIGRATION.md).\n`);
  return out.join('\n');
}

// --- reference index
function renderRefIndex() {
  const file = 'reference/index.md';
  const out = [];
  out.push(frontmatter({ title: 'API reference', sidebar_label: 'Overview', sidebar_position: 0, slug: '/sdk/v3/reference', description: 'Every namespace and method of @obolnetwork/obol-sdk v3, generated from the source.' }));
  out.push(GENERATED);
  out.push('# API reference\n\n');
  out.push(banner('../'));
  out.push('Generated from the SDK source (signatures, TSDoc, types) and its spec (checks, error codes, findings). Grouped as the client exposes it: `obol.<namespace>.<method>`.\n');
  out.push('| Namespace | Lifecycle | What it is for |\n|---|---|---|\n' + PAGES.map(p => `| [${p.title}](${mdRel(file, p.file)}) | ${p.lifecycle === 'all' ? 'every stage' : STAGE_BY_ID[p.lifecycle]?.title ?? ''} | ${cell(linkify(p.purpose.split(/(?<=\.)\s/)[0], file))} |`).join('\n') + '\n');
  out.push('## Every operation {#all}\n');
  out.push('| Operation | Tag | Returns | Throws | Warnings |\n|---|---|---|---|---|\n' + methods.filter(m => m.kind === 'function').map(m => `| ${methodLink(m, file)} | ${m.tag ? `\`${m.tag}\`` : ''} | ${m.signatures[0] ? typeHtml(m.signatures[0].returns, file) : ''} | ${m.throws.length || ''} | ${m.findings.filter(c => FINDINGS[c]?.severity === 'warning').length || ''} |`).join('\n') + '\n');
  return out.join('\n');
}

// ---------------------------------------------------------------- write
fs.rmSync(refDir, { recursive: true, force: true });
fs.mkdirSync(path.join(refDir, 'types'), { recursive: true });
fs.mkdirSync(genDir, { recursive: true });
// Wraps every Markdown table in <div class="sdk-table"> so it scrolls on its
// own at phone width instead of widening the page (the site sets tables to
// display: table).
function wrapTables(md) {
  const lines = md.split('\n');
  const out = [];
  let inFence = false;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (/^\s*```/.test(l)) inFence = !inFence;
    if (!inFence && /^\|/.test(l) && /^\|[\s:|-]+\|?\s*$/.test(lines[i + 1] ?? '')) {
      // Parameter and field tables keep names on one line on wide screens.
      const fields = /^\| (Parameter|Field) \|/.test(l) ? ' sdk-table--fields' : /^\| \| \|$/.test(l) ? ' sdk-table--kv' : '';
      out.push(`<div class="sdk-table${fields}">`, '');
      while (i < lines.length && /^\|/.test(lines[i])) out.push(lines[i++]);
      out.push('', '</div>', '');
      i--;
      continue;
    }
    out.push(l);
  }
  return out.join('\n');
}
const write = (f, s) => fs.writeFileSync(path.join(outDir, f), wrapTables(s).replace(/\n{3,}/g, '\n\n'));
write('reference/index.md', renderRefIndex());
let pos = 1;
for (const page of PAGES) {
  write(page.file, await renderPage(page, pos));
  if (page.types.length) write(page.typesFile, await renderTypesPage(page, pos));
  pos++;
}
write(corePage.typesFile, await renderTypesPage(corePage, 0));
write('errors.md', await renderErrors());
write('warnings.md', await renderWarnings());
write('migration.md', renderMigration());

// Partials the hand-written pages import, cut from the SDK README so they
// follow its wording: the naming rule and the acknowledgement patterns.
{
  const naming = /## Naming\n([\s\S]*?)\n## /.exec(spec.readmeMd);
  if (naming) fs.writeFileSync(path.join(genDir, 'naming.md'), GENERATED + linkify(fixSdkLinks(naming[1].trim(), '', 'README.md'), '_generated/naming.md') + '\n');

  // spec/lifecycles.md: the states, demoted one level (the page owns the h1/h2).
  const lc = fs.readFileSync(path.join(sdkDir, 'spec/lifecycles.md'), 'utf8').replace(/^# .*\n+/, '');
  fs.writeFileSync(
    path.join(genDir, 'lifecycles.md'),
    GENERATED + linkify(fixSdkLinks(lc, 'spec', 'spec/lifecycles.md'), '_generated/lifecycles.md').replace(/^## (.*)$/gm, (_, h) => `### ${h} {#states-${h.toLowerCase().replace(/[^a-z0-9]+/g, '-')}}`) + '\n',
  );
  if (!naming) console.log('[sdk-v3] README section "Naming" not found; partial not updated');
}

// Lifecycle data for the hand-written lifecycle page.
const lifecycle = STAGES.map((s, i) => ({
  ...s,
  n: i + 1,
  methods: methods
    .filter(m => m.page.stages?.[m.name] === s.id)
    .map(m => ({ label: m.access.replace(/^obol\./, ''), href: `reference/${m.page.id}#${methodAnchor(m)}`, kind: /^prepare/.test(m.name) ? 'tx' : /^(verify|isValid|assert)/.test(m.name) ? 'check' : ['create', 'accept'].includes(m.name) ? 'sign' : /^create/.test(m.name) ? 'client' : 'read', warnings: m.findings.filter(c => FINDINGS[c]?.severity === 'warning').length })),
}));
fs.writeFileSync(path.join(genDir, 'lifecycle.json'), JSON.stringify({ version: VERSION, stages: lifecycle }, null, 2) + '\n');
fs.writeFileSync(path.join(genDir, 'meta.json'), JSON.stringify({ version: VERSION, findings: Object.keys(FINDINGS).length, errors: errorInfo.size, operations: methods.filter(m => m.kind === 'function').length, label: previewLabel }, null, 2) + '\n');

// Sidebar.
const doc = id => ({ type: 'doc', id: `sdk-v3/${id}` });
const sidebar = [
  { ...doc('index'), label: 'v3 at a glance' },
  { ...doc('lifecycle'), label: 'Lifecycle map' },
  {
    type: 'category',
    label: 'API reference',
    collapsed: false,
    link: { type: 'doc', id: 'sdk-v3/reference/index' },
    items: PAGES.map(p => ({ ...doc(p.file.replace(/\.md$/, '')), label: p.sidebarLabel ?? p.title })),
  },
  {
    type: 'category',
    label: 'Types',
    collapsed: true,
    items: [{ ...doc('reference/types/core'), label: 'Shared types & errors' }, ...PAGES.filter(p => p.types.length).map(p => ({ ...doc(p.typesFile.replace(/\.md$/, '')), label: p.sidebarLabel ?? p.title }))],
  },
  { ...doc('errors'), label: 'Error codes' },
  { ...doc('warnings'), label: 'Warnings & findings' },
  { ...doc('migration'), label: '2.x → 3.x map' },
  { ...doc('for-agents'), label: 'For AI agents' },
];
fs.writeFileSync(
  path.join(siteDir, 'sidebars-sdk-v3.mjs'),
  `// GENERATED by scripts/sdk-v3/generate.mjs (@obolnetwork/obol-sdk ${VERSION}). Do not edit.\n// The SDK v3 reference sidebar; sidebars.js imports it as \`sdkV3\`.\nexport default /** @type {import('@docusaurus/plugin-content-docs').SidebarConfig} */ (${JSON.stringify(sidebar, null, 2)});\n`,
);

// Report.
const tsdoc = methods.filter(m => m.kind === 'function');
const summary = {
  version: VERSION,
  operations: tsdoc.length,
  withTsdoc: tsdoc.filter(m => m.doc).length,
  withExample: report.examples.with,
  types: placedDecls.size,
  errorCodes: errorInfo.size,
  findingCodes: FINDING_CODES.size,
  ...report,
};
fs.writeFileSync(path.join(os.tmpdir(), 'sdk-v3-docs-report.json'), JSON.stringify(summary, null, 2));
console.log(`[sdk-v3] ${VERSION}: ${tsdoc.length} operations (${summary.withTsdoc} with TSDoc, ${summary.withExample} with an example), ${placedDecls.size} types, ${errorInfo.size} error codes, ${FINDING_CODES.size} finding codes`);
if (report.missingListed.length) console.log('[sdk-v3] listed in namespaces.mjs but not in the source:', report.missingListed.join(', '));
if (report.missingSpec.length) console.log('[sdk-v3] no spec/operations.md section:', report.missingSpec.join(', '));
if (report.unplacedExports.length) console.log('[sdk-v3] root exports on no page:', report.unplacedExports.join(', '));
if (report.unmatchedThrownBy.length) console.log('[sdk-v3] errors.md "Thrown by" naming no known method:', report.unmatchedThrownBy.join(' | '));
console.log(`[sdk-v3] full report: ${path.join(os.tmpdir(), 'sdk-v3-docs-report.json')}`);
void execFileSync;
void pageDepth;
