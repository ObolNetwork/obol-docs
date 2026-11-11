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
import { pathToFileURL, fileURLToPath } from 'node:url';
import { loadSource } from './lib/source.mjs';
import { loadSpec, tagOf, codeTokens, headingOf, isTableStart, tableEnd } from './lib/spec.mjs';
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
const esc = s => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const cell = s => String(s ?? '').replace(/\r?\n+/g, ' ').replaceAll('|', String.raw`\|`).trim();
/** `text` up to its first `(`: `prepareDeposit(input)` -> `prepareDeposit`. */
const beforeParen = text => {
  const i = text.indexOf('(');
  return i < 0 ? text : text.slice(0, i);
};
/** `text` without the newlines at its end. */
const stripTrailingNewlines = text => {
  let end = text.length;
  while (end > 0 && text[end - 1] === '\n') end--;
  return text.slice(0, end);
};

/**
 * What `{@link X}` or `{@link X | label}` shows, given the text between
 * `{@link` and `}`: the label when there is one, else the target. Null when
 * the tag is not in one of those two forms.
 */
function linkTagLabel(inner) {
  const target = /^\s+([^\s|]+)/.exec(inner);
  if (!target) return null;
  const rest = inner.slice(target[0].length).trimStart();
  if (rest === '') return target[1];
  if (!rest.startsWith('|') || rest.length === 1) return null;
  const label = rest.slice(1);
  return label.trimStart() || label.at(-1);
}

/** Turns every `{@link X}` / `{@link X | label}` into a code span, in one pass. */
function replaceLinkTags(text) {
  const OPEN = '{@link';
  let out = '';
  let pos = 0;
  let start = text.indexOf(OPEN);
  while (start >= 0) {
    const end = text.indexOf('}', start);
    if (end < 0) break;
    const label = linkTagLabel(text.slice(start + OPEN.length, end));
    if (label !== null) {
      out += text.slice(pos, start) + '`' + label + '`';
      pos = end + 1;
    }
    start = text.indexOf(OPEN, label === null ? start + OPEN.length : pos);
  }
  return out + text.slice(pos);
}

/**
 * Makes imported prose (TSDoc, spec) safe for CommonMark pages: escapes `<`
 * that would open a raw HTML tag outside code, and turns `{@link X}` into `X`.
 */
function prose(text) {
  if (!text) return '';
  const s = replaceLinkTags(text);
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

/** The first backticked name of a table cell, without a call's parentheses. */
const firstCodeName = c => {
  const token = codeTokens(c)[0];
  return token && beforeParen(token);
};
const renamesRc12 = new Map(); // new qualified -> old
for (const t of spec.migrationTables) {
  if (t.headings.some(h => /Renames/.test(h)) && t.headings.some(h => /rc\.11 to rc\.12/.test(h))) {
    for (const r of t.rows) {
      const [oldName, newName] = [r[0], r[1]].map(firstCodeName);
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
/** A bound member's TSDoc: its own, else its `typeof fn` target's, else the namespace export's. */
function memberDoc(mem, fn) {
  if (mem.doc.text) return { doc: mem.doc.text, docSource: 'member' };
  if (mem.typeofDoc?.text) return { doc: mem.typeofDoc.text, docSource: 'function' };
  if (fn?.doc?.text) return { doc: fn.doc.text, docSource: 'namespace export' };
  return { doc: '', docSource: null };
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
        ...memberDoc(mem, fn),
        tags: [...(mem.doc.tags ?? []), ...(mem.typeofDoc?.tags ?? []), ...(fn?.doc?.tags ?? [])],
        pure: !!fn && fn.kind === 'function',
        file: mem.file,
        line: mem.line,
      });
    }
    for (const extra of Object.values(page.extraModules ?? {})) {
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
        const mem = src.moduleMembers(src.resolve(src.checker.getExportsOfModule(src.checker.getSymbolAtLocation(src.program.getSourceFile(path.join(sdkDir, 'src/index.ts')))).find(s => s.getName() === 'ObolClient')));
        const bound = mem.find(m => m.name === 'send');
        if (bound) {
          sigs = bound.signatures;
          access = 'obol.send';
          doc = [d.doc.text, bound.doc.text].filter(Boolean).join('\n\n');
        }
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
  const candidates = new Set([m.qualified, `${page.namespace}.${m.name}`, m.name]);
  for (const [heading, s] of opSections) {
    // "cluster.create / cluster.accept (signing)" names two operations.
    const parts = heading.split('/').map(p => beforeParen(p).trim());
    if (parts.some(p => candidates.has(p))) return { heading, ...s, own: parts.length === 1 };
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
/** The methods a backticked token of a "Thrown by" cell names (`ovm.*`, `prepareDeposit(…)`, `obol.send`). */
function tokenMethods(token, contextNs) {
  const t = beforeParen(token).replace(/^obol\./, '');
  if (t.endsWith('.*')) {
    const ns = t.slice(0, -2);
    return methods.filter(m => m.page.namespace === ns);
  }
  const qualified = t.includes('.');
  const last = t.split('.').pop();
  const list = methodIndex.get(t) ?? (qualified ? methodIndex.get(last) : null) ?? [];
  return list.filter(m => !qualified || !contextNs || m.qualified === t || m.qualified.endsWith('.' + last));
}
// Wording of a "Thrown by" cell that names a group of methods instead of one.
const THROWN_BY_PHRASES = [
  [/ovm writes/, m => m.page.id === 'ovm' && m.name.startsWith('prepare')],
  [/role-gated writes/, m => m.page.id === 'ovm' && /prepare(Grant|Revoke|Renounce|Set|Sweep|Recover|WithdrawPull)/.test(m.name)],
  [/writes that read status/, m => ['prepareDeposit', 'prepareWithdraw', 'prepareConsolidate', 'prepareEoaWithdraw'].includes(m.name)],
  [/reads inside/, m => m.name.startsWith('prepare')],
  [/`api` operations/, m => m.tag === 'api' || m.tag === 'api (+ wallet)'],
  [/every signing operation/, m => ['cluster.create', 'cluster.accept', 'terms.accept'].includes(m.qualified)],
];
function resolveTokens(text, contextNs) {
  const hits = new Set();
  const addWhere = matches => {
    for (const m of methods) if (matches(m)) hits.add(m);
  };
  for (const tok of codeTokens(text)) for (const m of tokenMethods(tok, contextNs)) hits.add(m);
  const lower = text.toLowerCase();
  for (const [phrase, matches] of THROWN_BY_PHRASES) if (phrase.test(lower)) addWhere(matches);
  if (/^`?wait`?$|`wait`/.test(text)) addWhere(m => m.name === 'send');
  return hits;
}
const SECTION_TITLES = new Map();
for (const t of spec.errorTables) {
  const head = t.header.map(h => h.toLowerCase());
  const iCode = head.indexOf('code');
  if (iCode < 0) continue;
  const section = t.headings.at(-1);
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
    const h = headingOf(line);
    if (h?.level === 3) {
      cur = h.text;
      errorSectionIntro.set(cur, []);
      continue;
    }
    if (/^##\s/.test(line)) cur = null;
    if (cur && !line.startsWith('|')) errorSectionIntro.get(cur).push(line);
  }
  for (const [k, v] of errorSectionIntro) errorSectionIntro.set(k, v.join('\n').trim());
}

/**
 * In "`DEPOSIT_CONFLICT` by `prepareDeposit`", the operation named after the
 * code (`rest` is the text that follows the code), or null.
 */
function attributedOperation(rest) {
  let s = (rest.startsWith('`') ? rest.slice(1) : rest).trimStart();
  if (s.startsWith(')')) s = s.slice(1).trimStart();
  const word = ['by', 'from', 'in'].find(w => s.startsWith(w));
  if (!word) return null;
  return /^\s+`([\w.]+)`/.exec(s.slice(word.length))?.[1] ?? null;
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
      const other = attributedOperation(m.spec.body.slice(match.index + match[0].length));
      if (other && other.split('.').pop() !== m.name) continue;
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
    const raw = stripTrailingNewlines(r[2]);
    const indent = Math.min(...raw.split('\n').filter(l => l.trim()).map(l => /^ */.exec(l)[0].length));
    const body = raw.split('\n').map(l => l.slice(indent)).join('\n');
    // Keep only the imports the snippet uses, so each example stands alone.
    const used = prelude
      .split('\n')
      .filter(l => l.startsWith('import'))
      .map(l => {
        const mm = /^import (type )?\{([^}]*)\} from (.*)$/.exec(l);
        if (!mm) return null;
        const names = mm[2].split(',').map(s => s.trim()).filter(Boolean).filter(n => new RegExp(String.raw`\b${n.replace(/^type /, '')}\b`).test(body));
        return names.length ? `import ${mm[1] ?? ''}{ ${names.join(', ')} } from ${mm[3]}` : null;
      })
      .filter(Boolean);
    examples.set(r[1], (used.length ? used.join('\n') + '\n\n' : '') + body);
  }
}

// ---------------------------------------------------------------- rendering
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
/** Markdown table rows from arrays of cells. */
const mdRows = rows => rows.map(r => `| ${r.join(' | ')} |`).join('\n');
/** A two-column table without a header: label, value. */
const kvTable = rows => `| | |\n|---|---|\n${mdRows(rows.map(r => [r[0], cell(r[1])]))}\n`;
const optMark = x => (x.optional ? '?' : '');

/** A type expression as HTML code with the SDK's types linked. */
function typeHtml(text, fromFile) {
  const parts = String(text).replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '').split(/([A-Za-z_$][\w$]*)/);
  let html = '';
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    // Identifiers are the odd parts; `a.Name` and `'Name'` are not type names.
    const before = parts[i - 1] ?? '';
    if (i % 2 === 1 && typeHome.has(p) && !before.endsWith('.') && !before.endsWith("'")) {
      const h = typeHome.get(p);
      html += `<a href="${rel(fromFile, h.page, h.id)}">${esc(p)}</a>`;
    } else html += esc(p);
  }
  // A <span>, not <code>: the site renders a <code> with element children (the
  // links) as a code block.
  return `<span class="sdk-type">${html.replaceAll('|', '&#124;').replace(/\n\s*/g, ' ')}</span>`;
}

function codeChip(code, fromFile, mode = 'error') {
  if (mode === 'error' && ERROR_CODES.has(code) && errorInfo.has(code)) {
    const since = errorInfo.get(code).since;
    const sinceHtml = since ? `<span class="sdk-chip__since">${since}</span>` : '';
    return `<a class="sdk-chip sdk-chip--error" href="${rel(fromFile, 'errors.md', code)}">${code}${sinceHtml}</a>`;
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
/** `ns.name` of a method, with `legacyNs` as the namespace of the legacy group. */
function displayName(m, legacyNs) {
  if (m.group === 'legacy') return `${legacyNs}.${m.name}`;
  return m.page.namespace ? `${m.page.namespace}.${m.name}` : m.name;
}
const warningCount = m => m.findings.filter(c => FINDINGS[c]?.severity === 'warning').length;

/**
 * The Markdown link `[text](href)` that starts at the `[` at `i`: `end` is the
 * index after it, or -1 when there is none; then no `[` before `retryFrom`
 * starts a link either, so the scan stays linear.
 */
function linkAt(text, i) {
  const close = text.indexOf(']', i + 1);
  if (close < 0) return { end: -1, retryFrom: text.length };
  if (text[close + 1] !== '(') return { end: -1, retryFrom: close };
  const paren = text.indexOf(')', close + 2);
  return paren < 0 ? { end: -1, retryFrom: text.length } : { end: paren + 1, retryFrom: i };
}
/** The index after the one-line code span that starts at the backtick at `i`, or -1. */
function codeSpanEnd(text, i) {
  let j = i + 1;
  while (j < text.length && text[j] !== '`' && text[j] !== '\n') j++;
  return j > i + 1 && text[j] === '`' ? j + 1 : -1;
}
/** [start, end) of every one-line code span of `text` that is not inside a Markdown link. */
function* codeSpans(text) {
  let i = 0;
  let noLinkBefore = 0;
  while (i < text.length) {
    let end = -1;
    if (text[i] === '`') {
      end = codeSpanEnd(text, i);
      if (end > 0) yield [i, end];
    } else if (text[i] === '[' && i >= noLinkBefore) {
      const link = linkAt(text, i);
      end = link.end;
      noLinkBefore = link.retryFrom;
    }
    i = end > 0 ? end : i + 1;
  }
}
/** Replaces each code span outside a link with `replace(code)`, unless that is null. */
function mapCodeSpans(text, replace) {
  let out = '';
  let pos = 0;
  for (const [start, end] of codeSpans(text)) {
    const replacement = replace(text.slice(start + 1, end - 1));
    if (replacement === null) continue;
    out += text.slice(pos, start) + replacement;
    pos = end;
  }
  return out + text.slice(pos);
}

/** The one method a code span names (`cluster.create`, `obol.send(...)`, a root function), or null. */
function methodNamed(code) {
  const t = code.replace(/^obol\./, '').replace(/^experimental\.(?=legacy\.)/, '');
  const mm = /^([A-Za-z]+(?:\.[A-Za-z]+)?)(\(.*\))?$/.exec(t);
  if (!mm) return null;
  const name = mm[1];
  const target = (methodIndex.get(name) ?? []).filter(x => x.qualified === name || x.aliases?.includes(name) || (!name.includes('.') && x.page.module == null));
  return target.length === 1 ? target[0] : null;
}
/** Where a code span links to: an error code, a finding code, a method or a type; else null. */
function codeSpanHref(code, fromFile, selfMethod) {
  if (ERROR_CODES.has(code) && errorInfo.has(code) && fromFile !== 'errors.md#self') return mdRel(fromFile, 'errors.md', code);
  if (FINDING_CODES.has(code)) return mdRel(fromFile, 'warnings.md', code);
  const target = methodNamed(code);
  if (target && target !== selfMethod) return mdRel(fromFile, target.page.file, methodAnchor(target));
  const h = typeHome.get(code);
  return h ? mdRel(fromFile, h.page, h.id) : null;
}
/** Links inline code spans that name an error / finding code or a method. */
function linkify(text, fromFile, selfMethod) {
  const linkSpan = code => {
    const href = codeSpanHref(code, fromFile, selfMethod);
    return href === null ? null : `[\`${code}\`](${href})`;
  };
  return prose(text)
    .split(/(```[\s\S]*?```)/)
    .map((chunk, ci) => (ci % 2 ? chunk : mapCodeSpans(chunk, linkSpan)))
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
  ['transactions', 'Transactions', m => m.kinds?.length > 0 || m.name.startsWith('preview')],
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
  const prefix = m.access.slice(0, -m.name.length);
  const blocks = await Promise.all(
    m.signatures.map(async s => {
      const tp = s.typeParams.length ? `<${s.typeParams.join(', ')}>` : '';
      const params = s.params.map(p => `${p.rest ? '...' : ''}${p.name}${optMark(p)}: ${p.type}`).join(', ');
      const code = await prettierSig(`declare function ${m.name}${tp}(${params}): ${s.returns};`);
      return code.trim().replace(/^declare function /, prefix).replace(/;$/, '');
    }),
  );
  return blocks.length ? '```ts sdk-signature\n' + blocks.join('\n\n') + '\n```\n' : '';
}

// Signatures and type declarations go through prettier, which is async: format
// them all up front so the page renderers below are plain synchronous code.
const signatureBlock = new Map(await Promise.all(methods.map(async m => [m, await renderSignature(m)])));
const allTypes = [...PAGES, corePage].flatMap(p => p.types);
const declarationBlock = new Map(
  await Promise.all(
    allTypes
      .filter(t => t.declaration && t.declaration.length < 2400)
      .map(async t => [t, '```ts sdk-signature\n' + (await prettierSig(t.declaration)).trim() + '\n```\n']),
  ),
);

/** The row of one field of an object parameter. */
function paramFieldRow(p, f, file) {
  const inherited = f.declaredIn && f.declaredIn !== p.type.replace(/<.*/, '');
  const from = inherited ? ` <span class="sdk-from">from ${typeHtml(f.declaredIn, file)}</span>` : '';
  return [`<code>${esc(p.name)}.${esc(f.name)}${optMark(f)}</code>`, typeHtml(f.type, file), cell(linkify(f.doc, file)) + from];
}
function paramTable(m, file) {
  const s = m.signatures[0];
  if (!s?.params.length) return '';
  const rows = [];
  for (const p of s.params) {
    const pname = `${p.rest ? '...' : ''}${p.name}${optMark(p)}`;
    rows.push([`<code>${esc(pname)}</code>`, typeHtml(p.type, file), cell(linkify(p.doc, file))]);
    const showFields = p.fields && (s.params.length === 1 || p.fields.length <= 25);
    if (showFields) rows.push(...p.fields.map(f => paramFieldRow(p, f, file)));
  }
  return `| Parameter | Type | Description |\n|---|---|---|\n${mdRows(rows)}\n`;
}

function returnsLine(m, file) {
  const s = m.signatures[0];
  if (!s) return '';
  let line = `**Returns** ${typeHtml(s.returns, file)}`;
  const rtag = s.tags.find(t => t.name === 'returns');
  if (rtag?.text) line += ` ${linkify(rtag.text, file)}`;
  if (m.kinds.length) {
    const k = m.kinds[0];
    const preview = typeHtml(`PreviewByKind['${k}']`, file);
    line += `: a \`Prepared\` of kind \`'${k}'\`, preview ${preview}. Send it with [\`obol.send\`](${mdRel(file, 'reference/send.md', 'send')}) or your wallet layer.`;
  } else if (m.name.startsWith('preview')) {
    line += ': `{ preview, checks, blockNumber }`, never a transaction.';
  }
  return line + '\n';
}

function methodBadges(m, file) {
  const badges = [];
  if (m.tag) badges.push(`<span class="sdk-badge sdk-badge--tag" title="Where it reads from (spec tag)">${esc(m.tag)}</span>`);
  if (m.bound === false) badges.push(`<span class="sdk-badge sdk-badge--pure" title="Exported from the namespace, not bound on the client">namespace only</span>`);
  if (m.throws.length) badges.push(`<span class="sdk-badge sdk-badge--throws">throws ${m.throws.length}</span>`);
  const warns = warningCount(m);
  if (warns) badges.push(`<span class="sdk-badge sdk-badge--warning">${warns} warning${warns > 1 ? 's' : ''}</span>`);
  const renamed = renamesRc12.get(m.qualified) ?? renamesRc12.get(m.name);
  if (renamed) badges.push(`<span class="sdk-badge sdk-badge--since" title="Renamed in 3.0.0-rc.12">rc.12: was ${esc(renamed)}</span>`);
  const stage = m.page.stages?.[m.name];
  if (stage) badges.push(stageBadge(stage, file));
  return badges.length ? [`<div class="sdk-badges">${badges.join(' ')}</div>\n`] : [];
}

/** TSDoc summary, remarks and deprecation of a method. */
function methodDoc(m, file) {
  const out = [];
  if (m.doc) out.push(linkify(m.doc, file, m) + '\n');
  else {
    const access = m.kind === 'constant' ? m.access : `${m.access}()`;
    report.noDoc.push(m.qualified);
    out.push(`<p class="sdk-nodoc">No TSDoc on <code>${esc(access)}</code> yet; the behaviour below is the spec's.</p>\n`);
  }
  for (const t of m.tags.filter(t => t.name === 'remarks')) out.push(linkify(t.text, file, m) + '\n');
  const dep = m.tags.find(t => t.name === 'deprecated');
  if (dep) out.push(`:::warning[Deprecated]\n\n${linkify(dep.text || 'Deprecated.', file, m)}\n\n:::\n`);
  return out;
}

/** Signature, parameters and return value (or the type of a constant). */
function methodShape(m, file) {
  if (m.kind === 'constant') return ['```ts sdk-signature\n' + `${m.access}: ${m.constType}` + '\n```\n'];
  const pt = paramTable(m, file);
  return [signatureBlock.get(m), ...(pt ? [pt] : []), returnsLine(m, file)];
}

/** The codes a method throws and the findings it reports. */
function methodCodes(m, file) {
  const out = [];
  if (m.throws.length) {
    const chips = m.throws.map(c => codeChip(c, file)).join(' ');
    out.push(`**Throws** <span class="sdk-muted">(per spec)</span> ${chips} <span class="sdk-muted">plus the [checks every operation runs](${mdRel(file, 'errors.md', 'checks-every-operation-runs')})</span>\n`);
  }
  if (m.findings.length) {
    const label = m.kinds.length || m.name === 'simulate' ? 'Can report' : 'Reports';
    out.push(`**${label}** ${m.findings.map(c => codeChip(c, file, 'finding')).join(' ')}\n`);
  }
  return out;
}

/** The example of a method: its region in examples/, else its TSDoc `@example`. */
function methodExample(m) {
  const exKey = displayName(m, 'legacy');
  const tsdocExample = m.tags.find(t => t.name === 'example')?.text;
  if (examples.has(exKey)) {
    report.examples.with++;
    return ['**Example**\n\n```ts\n' + examples.get(exKey) + '\n```\n'];
  }
  if (tsdocExample) {
    report.examples.with++;
    return ['**Example**\n\n' + (tsdocExample.includes('```') ? tsdocExample : '```ts\n' + tsdocExample + '\n```') + '\n'];
  }
  if (m.kind === 'function') report.examples.without.push(exKey);
  return [];
}

/** The method's section of spec/operations.md, folded. */
function methodSpec(m, file) {
  if (!m.spec) return [];
  // spec/ code blocks are notation, not samples: tag them so the sample check skips them.
  const body = linkify(fixSdkLinks(m.spec.body, 'spec', 'spec/operations.md'), file, m)
    .replace(/^(#{1,4})\s/gm, '#### ')
    .replace(/^```(ts|typescript)\s*$/gm, '```ts sdk-spec');
  const shared = m.spec.own ? '' : ' (shared section)';
  return [`<details class="sdk-spec">\n<summary>Specification: ${esc(m.spec.heading)}${shared}</summary>\n\n${body}\n\n<p class="sdk-muted">From <a href="${GH}/spec/operations.md">spec/operations.md</a>.</p>\n\n</details>\n`];
}

const ghAnchor = h => h.toLowerCase().replace(/[^a-z0-9 -]/g, '').replaceAll(' ', '-');
/** A `@see` tag as a "See also" entry, or null when it names the section already linked. */
function seeTagEntry(t, m) {
  const sp = /spec\s*\/\s*operations\.md\s+"([^"]+)"/.exec(t.text);
  if (!sp) return esc(t.text.replaceAll('`', ''));
  if (sp[1] === m.spec?.heading) return null; // the same section, linked above
  return `[spec: ${sp[1]}](${GH}/spec/operations.md#${ghAnchor(sp[1])})`;
}
/** A "See also" entry as HTML: a Markdown link becomes an anchor, other text stays. */
const seeEntryHtml = s => s.replace(/^\[(.*)\]\((.*)\)$/, (_, text, href) => `<a href="${href}">${text.replaceAll('`', '')}</a>`);
function methodSeeAlso(m) {
  const see = [];
  if (m.spec) see.push(`[spec/operations.md](${GH}/spec/operations.md#${ghAnchor(m.spec.heading)})`);
  for (const t of m.tags.filter(t => t.name === 'see')) {
    const entry = seeTagEntry(t, m);
    if (entry !== null) see.push(entry);
  }
  const schemaNs = m.group === 'legacy' ? 'legacy' : m.page.namespace ?? '';
  const schemaName = `${schemaNs}.${m.name}`;
  if (fs.existsSync(path.join(sdkDir, 'spec/schemas', `${schemaName}.json`))) see.push(`[input JSON Schema](${GH}/spec/schemas/${schemaName}.json)`);
  see.push(`[source](${GH}/${m.file}#L${m.line})`);
  return `<p class="sdk-see">See also: ${see.map(seeEntryHtml).join(' · ')}</p>\n`;
}

function renderMethod(m, file) {
  return [
    `### ${displayName(m, 'experimental.legacy')} {#${methodAnchor(m)}}\n`,
    ...methodBadges(m, file),
    ...methodDoc(m, file),
    ...methodShape(m, file),
    ...methodCodes(m, file),
    ...methodExample(m),
    ...methodSpec(m, file),
    methodSeeAlso(m),
  ].join('\n');
}

function frontmatter(o) {
  return '---\n' + Object.entries(o).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n') + '\n---\n\n';
}
const GENERATED = `<!-- GENERATED by scripts/sdk-v3/generate.mjs from @obolnetwork/obol-sdk ${VERSION}. Do not edit; re-run scripts/generate-sdk-v3-reference.sh. -->\n\n`;

/** The strip under a namespace page's intro: access, import path, lifecycle stage, types. */
function pageFacts(page, file) {
  const fact = (k, html) => `<span class="sdk-fact"><span class="sdk-fact__k">${k}</span> ${html}</span>`;
  const facts = [fact('Access', `<code>${esc(page.access)}</code>`), fact('Import', `<code>${esc(page.subpath)}</code>`)];
  if (page.lifecycle === 'all') facts.push(fact('Lifecycle', `<a class="sdk-badge sdk-badge--stage" href="${rel(file, 'lifecycle.mdx')}">every stage</a>`));
  else if (page.lifecycle) facts.push(fact('Lifecycle', stageBadge(page.lifecycle, file)));
  if (page.types.length) facts.push(fact('Types', `<a href="${rel(file, page.typesFile)}">${page.types.length} on the types page</a>`));
  return `<div class="sdk-facts">${facts.join('')}</div>\n`;
}

/** The method / first sentence table at the top of a namespace page. */
function summaryTable(page, file) {
  const rows = page.methods.map(m => {
    const first = (m.doc || '').split(/\n\n|(?<=\.)\s/)[0].replaceAll('\n', ' ');
    const sum = first ? cell(linkify(first, file, m)) : '<span class="sdk-muted">no TSDoc</span>';
    const prefix = m.group === 'legacy' ? 'legacy.' : '';
    return `| [\`${prefix}${m.name}\`](#${methodAnchor(m)}) | ${sum} |`;
  });
  return '| Method | Summary |\n|---|---|\n' + rows.join('\n') + '\n';
}

/** The per-module entry points: createObolContext + create<Module>Module. */
function moduleEntryPoints(file) {
  const rows = [];
  for (const p of PAGES.filter(p => p.module && p.namespace)) {
    const factories = [p.namespace, ...Object.values(p.extraModules ?? {}).map(e => e.namespace)]
      .flatMap(ns => [...(nsExports[ns] ?? new Map()).keys()].filter(n => /^create[A-Z]\w*Module$/.test(n)).map(n => [ns, n]));
    for (const [ns, n] of factories) {
      const entry = ns === 'legacy' ? '@obolnetwork/obol-sdk/experimental' : p.subpath;
      rows.push(`| <code id="${n}">${n}</code> | \`${entry}\` | [${p.title}](${mdRel(file, p.file)}) |`);
    }
  }
  return [
    '## Module entry points {#module-entry-points}\n',
    'Each module is its own entry point. Bind one module to a context instead of building the whole client, so a page loads only that module\'s code (an `ovm` reads-only import has no BLS or SSZ code):\n',
    examples.get('createObolContext') ? '```ts\n' + examples.get('createObolContext') + '\n```\n' : '',
    '| Factory | Entry | Bound methods |\n|---|---|---|\n' + rows.join('\n') + '\n',
  ];
}

function pageSeeAlso(page, file) {
  const links = page.seeAlso.map(id => {
    const p = PAGES.find(x => x.id === id);
    return p ? `- [${p.title}](${mdRel(file, p.file)})` : '';
  });
  const types = page.types.length ? `\n- [Types used on this page](${mdRel(file, page.typesFile)})` : '';
  return ['## See also {#see-also}\n', links.join('\n') + types + `\n- [Error codes](${mdRel(file, 'errors.md')}) · [Warnings and findings](${mdRel(file, 'warnings.md')})\n`];
}

function renderPage(page, position) {
  const file = page.file;
  const out = [
    frontmatter({
      title: page.title,
      sidebar_label: page.sidebarLabel ?? page.title,
      sidebar_position: position,
      slug: `/sdk/v3/reference/${page.id}`,
      description: page.purpose.replaceAll('`', '').slice(0, 300),
      toc_max_heading_level: 3,
    }),
    GENERATED,
    `# ${page.title}\n\n`,
    banner('../'),
    linkify(page.purpose, file) + '\n',
    pageFacts(page, file),
  ];
  const groups = new Map();
  for (const m of page.methods) {
    const g = groupOf(m);
    if (!groups.has(g[0])) groups.set(g[0], { title: g[1], items: [] });
    groups.get(g[0]).items.push(m);
  }
  const ordered = (page.groupOrder ?? ['reads', 'signing', 'transactions', 'checks', 'simulate', 'legacy', 'helpers', 'constants']).filter(k => groups.has(k));
  out.push(summaryTable(page, file));
  for (const k of ordered) {
    const g = groups.get(k);
    const id = k === 'legacy' ? 'legacy' : `group-${k}`;
    out.push(`## ${g.title} {#${id}}\n`, ...g.items.map(m => renderMethod(m, file)));
  }
  if (page.id === 'client') out.push(...moduleEntryPoints(file));
  if (page.seeAlso?.length) out.push(...pageSeeAlso(page, file));
  return out.join('\n');
}

/** The intro line of a types page: where its types are exported from. */
function typesIntro(page, file) {
  if (page.id === 'core') return 'Types exported from the package root that more than one module uses, and the error classes. Error codes: [Errors](../../errors.md).\n';
  const ns = page.namespace;
  const where = ns ? `the \`${ns}\` namespace (\`import { ${ns} } from '@obolnetwork/obol-sdk'\`, then \`${ns}.TypeName\`) and the \`${page.subpath}\` entry` : `\`${page.subpath}\``;
  return `Types exported by ${where}. Methods: [${page.title}](${mdRel(file, page.file)}).\n`;
}

function renderType(t, file) {
  const qual = t.ns ? `${t.ns}.${t.name}` : t.name;
  const out = [`### ${t.name} {#${t.name}}\n`, `<div class="sdk-badges"><span class="sdk-badge sdk-badge--tag">${t.kind}</span> <code class="sdk-qual">${esc(qual)}</code></div>\n`];
  if (t.doc.text) out.push(linkify(t.doc.text, file) + '\n');
  if (declarationBlock.has(t)) out.push(declarationBlock.get(t));
  if (t.fields?.length) {
    const rows = t.fields.map(f => [`<code>${f.readonly ? 'readonly ' : ''}${esc(f.name)}${optMark(f)}</code>`, typeHtml(f.type, file), cell(linkify(f.doc, file))]);
    out.push(`| Field | Type | Description |\n|---|---|---|\n${mdRows(rows)}\n`);
  }
  out.push(`<p class="sdk-see"><a href="${GH}/${t.file}#L${t.line}">source</a></p>\n`);
  return out;
}

function renderTypesPage(page, position) {
  const file = page.typesFile;
  const core = page.id === 'core';
  const title = core ? 'Shared types and errors' : `${page.title} types`;
  const summary = page.types.map(t => `| [\`${t.name}\`](#${t.name}) | ${t.kind} | ${cell(linkify((t.doc.text || '').split(/\n\n/)[0], file))} |`);
  return [
    frontmatter({ title, sidebar_label: core ? 'Shared types' : (page.sidebarLabel ?? page.title), sidebar_position: position, slug: `/sdk/v3/reference/types/${page.id}`, toc_max_heading_level: 3 }),
    GENERATED,
    `# ${title}\n\n`,
    banner('../../'),
    typesIntro(page, file),
    '| Type | Kind | Summary |\n|---|---|---|\n' + summary.join('\n') + '\n',
    ...page.types.flatMap(t => renderType(t, file)),
  ].join('\n');
}

// --- errors page
const ERRORS_SAMPLE = `\`\`\`ts
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
`;

/** Who throws an error code: the methods found for it, with the spec's wording when that names a group. */
function thrownByCell(e, ms, file) {
  if (!ms.length) return linkify(e.thrownBy, file);
  const namesGroup = e.thrownBy && /G\d|every|`api`|signing|writes/.test(e.thrownBy);
  return ms.map(m => methodLink(m, file)).join(', ') + (namesGroup ? ` (spec: ${linkify(e.thrownBy, file)})` : '');
}

function renderError(e, file, detailsByCode) {
  const out = [`### ${e.code} {#${e.code}}\n`];
  const b = [];
  if (e.since) b.push(`<span class="sdk-badge sdk-badge--since">since ${e.since}</span>`);
  if (GROUP_CODES[e.code]) b.push(`<span class="sdk-badge sdk-badge--tag">${GROUP_CODES[e.code]}: every operation</span>`);
  if (b.length) out.push(`<div class="sdk-badges">${b.join(' ')}</div>\n`);
  out.push(linkify(e.meaning, file) + '\n');
  const rows = [];
  const ms = codeMethods.get(e.code) ?? [];
  if (e.thrownBy || ms.length) rows.push(['Thrown by', thrownByCell(e, ms, file)]);
  if (e.apiTable) rows.push(['Thrown by', 'any operation that calls the Obol API (G4)']);
  if (e.should) rows.push(['Caller should', linkify(e.should, file)]);
  const det = detailsByCode.get(e.code);
  if (det) rows.push(['`details`', typeHtml(det, file)]);
  if (e.legacy) rows.push([e.legacyLabel === '2.15' ? 'In 2.x' : `In ${e.legacyLabel}`, linkify(e.legacy, file)]);
  out.push(kvTable(rows));
  return out;
}

function renderErrors() {
  const file = 'errors.md';
  const intro = spec.errorsMd.split(/\n## Errors\n/)[0].replace(/^# .*\n/, '');
  const out = [
    frontmatter({ title: 'Error codes', sidebar_label: 'Error codes', sidebar_position: 4, slug: '/sdk/v3/errors', description: 'Every ObolError code of @obolnetwork/obol-sdk v3: meaning, which operations throw it, what the caller should do, and its details fields.', toc_max_heading_level: 3 }),
    GENERATED,
    '# Error codes\n\n',
    banner(),
    linkify(fixSdkLinks(intro, 'spec', 'spec/errors.md'), file) + '\n',
    ERRORS_SAMPLE,
  ];
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
    const chips = list.map(e => `<a class="sdk-chip sdk-chip--error" href="#${e.code}">${e.code}</a>`);
    out.push(`**${section}**: ${chips.join(' ')}\n`);
  }
  const detailsIface = rootExports.get('ObolErrorDetails');
  const detailsByCode = new Map((detailsIface?.fields ?? []).map(f => [f.name, f.type]));
  for (const [section, list] of bySection) {
    const slug = 'section-' + section.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
    out.push(`## ${section} {#${slug}}\n`);
    const sectionIntro = errorSectionIntro.get(section);
    if (sectionIntro) out.push(linkify(fixSdkLinks(sectionIntro, 'spec', 'spec/errors.md'), file) + '\n');
    out.push(...list.flatMap(e => renderError(e, file, detailsByCode)));
  }
  const classPage = name => typeHome.get(name)?.page ?? 'reference/types/core.md';
  out.push(
    '## The error classes {#classes}\n',
    `[\`ObolError\`](${mdRel(file, classPage('ObolError'), 'ObolError')}) has \`code\`, \`message\` (not normative), \`hint\`, \`details\` and \`cause\`; [\`ObolApiError\`](${mdRel(file, classPage('ObolApiError'), 'ObolApiError')}) adds the HTTP fields. Prefer [\`isObolError\`](${mdRel(file, 'reference/checks.md', 'isObolError')}) to \`instanceof\`: it recognises an error from any copy of the SDK.\n`,
  );
  return out.join('\n');
}

// --- warnings / findings page
const FINDING_GROUP_TITLES = { risk: 'Risks: the transaction may not do what you intend', unchecked: 'Unchecked: a safety check could not run', note: 'Notes: for the record (info)', claim: 'Incentive claim issues' };
const FINDING_GROUP_INTROS = { risk: '', unchecked: `These are the codes in \`UNCHECKED_WARNING_CODES\`: nothing is known to be wrong, and nothing was shown to be right.`, note: '`info` findings never need acknowledging.', claim: 'Issues of `incentives.preflight` and `INCENTIVES_PREFLIGHT_FAILED.details.issues`; never on a `Prepared`.' };

/** Matrix: code × `Prepared` kind. */
function findingsMatrix() {
  const kindsWith = Object.keys(BY_KIND).filter(k => BY_KIND[k].length);
  const codes = Object.keys(FINDINGS).filter(c => FINDINGS[c].group !== 'claim');
  const head = kindsWith.map(k => `<th><span>${k}</span></th>`).join('');
  const body = codes.map(c => {
    const cells = kindsWith.map(k => `<td>${BY_KIND[k].includes(c) ? '●' : ''}</td>`).join('');
    return `<tr><th><a href="#${c}" class="sdk-chip sdk-chip--${FINDINGS[c].severity}">${c}</a></th>${cells}</tr>`;
  });
  return `<div class="sdk-matrix-wrap"><table class="sdk-matrix"><thead><tr><th>Code</th>${head}</tr></thead><tbody>${body.join('')}</tbody></table></div>\n`;
}

function renderFinding(code, f, file, keyDocs) {
  const out = [`### ${code} {#${code}}\n`];
  const b = [`<span class="sdk-badge sdk-badge--${f.severity}">${f.severity}</span>`];
  if (UNCHECKED.has(code)) b.push('<span class="sdk-badge sdk-badge--tag">UNCHECKED_WARNING_CODES</span>');
  const fi = findingInfo.get(code);
  if (fi?.since) b.push(`<span class="sdk-badge sdk-badge--since">since ${fi.since}</span>`);
  if (ERROR_CODES.has(code)) b.push(`<a class="sdk-badge sdk-badge--throws" href="${rel(file, 'errors.md', code)}">also an error code</a>`);
  out.push(`<div class="sdk-badges">${b.join(' ')}</div>\n`, `**${linkify(f.meaning, file)}**\n`);
  if (keyDocs[code] && keyDocs[code] !== f.meaning) out.push(linkify(keyDocs[code].replace(/^[A-Z][a-z]+\.\s/, ''), file) + '\n');
  const rows = [[f.severity === 'warning' ? 'Before you acknowledge' : 'What to do', linkify(f.guidance, file)]];
  const ms = codeMethods.get(code) ?? [];
  if (ms.length) rows.push(['Reported by', ms.map(m => methodLink(m, file)).join(', ')]);
  const ks = Object.entries(BY_KIND).filter(([, cs]) => cs.includes(code)).map(([k]) => k);
  if (ks.length) rows.push(['`Prepared` kinds', ks.map(k => `\`${k}\``).join(', ')]);
  if (fi?.should) rows.push(['Caller should', linkify(fi.should, file)]);
  out.push(kvTable(rows));
  return out;
}

function renderWarnings() {
  const file = 'warnings.md';
  const keyDocs = src.constantKeyDocs('src/findings.ts', 'FINDINGS');
  const out = [
    frontmatter({ title: 'Warnings and findings', sidebar_label: 'Warnings & findings', sidebar_position: 5, slug: '/sdk/v3/warnings', description: 'Every finding code a prepared transaction or simulation can carry, its severity, what it means and what acknowledging it accepts.', toc_max_heading_level: 3 }),
    GENERATED,
    '# Warnings and findings\n\n',
    banner(),
  ];
  const ack = /### Acknowledging warnings\n([\s\S]*?)\n\*\*1\./.exec(spec.readmeMd);
  if (ack) out.push(linkify(fixSdkLinks(ack[1].trim(), '', 'README.md'), file) + '\n');
  out.push(`The helpers are on [send and acknowledgements](${mdRel(file, 'reference/send.md')}); how an agent should use them: [For AI agents](${mdRel(file, 'for-agents.md')}).\n`);
  const patterns = /(\*\*1\. A confirmation dialog[\s\S]*?)\nEvery warning `send` can refuse/.exec(spec.readmeMd);
  if (patterns) out.push('## Three ways to acknowledge {#patterns}\n\nFrom the SDK README.\n\n' + linkify(fixSdkLinks(patterns[1].trim(), '', 'README.md'), file) + '\n');
  out.push(
    '## Which transaction can carry which warning {#matrix}\n',
    'Rows are the codes `send` can refuse (severity `warning`) and the `info` notes; columns are the `Prepared` kinds (`FINDING_CODES_BY_KIND`). Simulation codes come from `experimental.simulate` on any kind.\n',
    findingsMatrix(),
  );
  for (const group of ['risk', 'unchecked', 'note', 'claim']) {
    const list = Object.entries(FINDINGS).filter(([, f]) => f.group === group);
    if (!list.length) continue;
    out.push(`## ${FINDING_GROUP_TITLES[group]} {#group-${group}}\n`);
    if (FINDING_GROUP_INTROS[group]) out.push(linkify(FINDING_GROUP_INTROS[group], file) + '\n');
    out.push(...list.flatMap(([code, f]) => renderFinding(code, f, file, keyDocs)));
  }
  return out.join('\n');
}

// --- migration page
function renderMigration() {
  const file = 'migration.md';
  const out = [
    frontmatter({ title: '2.x to 3.x', sidebar_label: '2.x → 3.x map', sidebar_position: 6, slug: '/sdk/v3/migration', description: 'Every 2.x method and export of @obolnetwork/obol-sdk and its v3 replacement, plus the rc.12 renames.', toc_max_heading_level: 2 }),
    GENERATED,
    '# 2.x to 3.x\n\n',
    banner(),
  ];
  const changes = /### What changes everywhere\n([\s\S]*?)\n### /.exec(spec.migrationMd);
  if (changes) out.push('## What changes everywhere {#everywhere}\n\n' + linkify(fixSdkLinks(changes[1].trim(), '', 'MIGRATION.md'), file) + '\n');
  const pick = re => spec.migrationTables.find(t => t.headings.some(h => re.test(h)));
  const tbl = (t, heads) => `| ${heads.join(' | ')} |\n|${heads.map(() => '---').join('|')}|\n` + mdRows(t.rows.map(r => r.map(c => cell(linkify(fixSdkLinks(c, '', 'MIGRATION.md'), file))))) + '\n';
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
  const stageOf = p => (p.lifecycle === 'all' ? 'every stage' : STAGE_BY_ID[p.lifecycle]?.title ?? '');
  const namespaces = PAGES.map(p => [`[${p.title}](${mdRel(file, p.file)})`, stageOf(p), cell(linkify(p.purpose.split(/(?<=\.)\s/)[0], file))]);
  const operations = methods
    .filter(m => m.kind === 'function')
    .map(m => {
      const tag = m.tag ? `\`${m.tag}\`` : '';
      const returns = m.signatures[0] ? typeHtml(m.signatures[0].returns, file) : '';
      return [methodLink(m, file), tag, returns, m.throws.length || '', warningCount(m) || ''];
    });
  return [
    frontmatter({ title: 'API reference', sidebar_label: 'Overview', sidebar_position: 0, slug: '/sdk/v3/reference', description: 'Every namespace and method of @obolnetwork/obol-sdk v3, generated from the source.' }),
    GENERATED,
    '# API reference\n\n',
    banner('../'),
    'Generated from the SDK source (signatures, TSDoc, types) and its spec (checks, error codes, findings). Grouped as the client exposes it: `obol.<namespace>.<method>`.\n',
    '| Namespace | Lifecycle | What it is for |\n|---|---|---|\n' + mdRows(namespaces) + '\n',
    '## Every operation {#all}\n',
    '| Operation | Tag | Returns | Throws | Warnings |\n|---|---|---|---|---|\n' + mdRows(operations) + '\n',
  ].join('\n');
}

// ---------------------------------------------------------------- write
fs.rmSync(refDir, { recursive: true, force: true });
fs.mkdirSync(path.join(refDir, 'types'), { recursive: true });
fs.mkdirSync(genDir, { recursive: true });
/** The modifier class of a table's wrapper, from its header row. */
function tableClass(header) {
  // Parameter and field tables keep names on one line on wide screens.
  if (/^\| (Parameter|Field) \|/.test(header)) return ' sdk-table--fields';
  return header === '| | |' ? ' sdk-table--kv' : '';
}
// Wraps every Markdown table in <div class="sdk-table"> so it scrolls on its
// own at phone width instead of widening the page (the site sets tables to
// display: table).
function wrapTables(md) {
  const lines = md.split('\n');
  const out = [];
  let inFence = false;
  let i = 0;
  while (i < lines.length) {
    const l = lines[i];
    if (/^\s*```/.test(l)) inFence = !inFence;
    if (inFence || !isTableStart(lines, i)) {
      out.push(l);
      i++;
      continue;
    }
    const end = tableEnd(lines, i);
    out.push(`<div class="sdk-table${tableClass(l)}">`, '', ...lines.slice(i, end), '', '</div>', '');
    i = end;
  }
  return out.join('\n');
}
const write = (f, s) => fs.writeFileSync(path.join(outDir, f), wrapTables(s).replace(/\n{3,}/g, '\n\n'));
write('reference/index.md', renderRefIndex());
for (const [i, page] of PAGES.entries()) {
  write(page.file, renderPage(page, i + 1));
  if (page.types.length) write(page.typesFile, renderTypesPage(page, i + 1));
}
write(corePage.typesFile, renderTypesPage(corePage, 0));
write('errors.md', renderErrors());
write('warnings.md', renderWarnings());
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
function lifecycleKind(name) {
  if (name.startsWith('prepare')) return 'tx';
  if (/^(verify|isValid|assert)/.test(name)) return 'check';
  if (['create', 'accept'].includes(name)) return 'sign';
  return name.startsWith('create') ? 'client' : 'read';
}
const lifecycle = STAGES.map((s, i) => ({
  ...s,
  n: i + 1,
  methods: methods
    .filter(m => m.page.stages?.[m.name] === s.id)
    .map(m => ({ label: m.access.replace(/^obol\./, ''), href: `reference/${m.page.id}#${methodAnchor(m)}`, kind: lifecycleKind(m.name), warnings: warningCount(m) })),
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
