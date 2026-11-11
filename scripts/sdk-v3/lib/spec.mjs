// Parsers for the SDK's spec/ Markdown and MIGRATION.md. They read tables and
// sections by heading, so wording changes in the SDK flow through on the next
// generation; structural changes (a renamed heading) are reported, not fatal.
import fs from 'node:fs';
import path from 'node:path';

/** Splits a Markdown table row into cells (handles `\|` and pipes inside code spans). */
export function splitRow(line) {
  const cells = [];
  let cur = '';
  let inCode = false;
  const s = line.trim().replace(/^\|/, '').replace(/\|$/, '');
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '\\' && s[i + 1] === '|') {
      cur += '|';
      i++;
      continue;
    }
    if (ch === '`') inCode = !inCode;
    if (ch === '|' && !inCode) {
      cells.push(cur.trim());
      cur = '';
      continue;
    }
    cur += ch;
  }
  cells.push(cur.trim());
  return cells;
}

/** Every table in a Markdown text, with the heading path it sits under. */
export function tables(md) {
  const lines = md.split('\n');
  const out = [];
  const headings = [];
  let inFence = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^```/.test(line)) inFence = !inFence;
    if (inFence) continue;
    const h = /^(#{1,6})\s+(.*)$/.exec(line);
    if (h) {
      headings.length = h[1].length - 1;
      headings[h[1].length - 1] = h[2].trim();
      continue;
    }
    if (/^\|/.test(line) && /^\|[\s:|-]+\|?\s*$/.test(lines[i + 1] ?? '')) {
      const header = splitRow(line);
      const rows = [];
      let j = i + 2;
      while (j < lines.length && /^\|/.test(lines[j])) rows.push(splitRow(lines[j++]));
      out.push({ headings: headings.filter(Boolean), header, rows, line: i + 1 });
      i = j - 1;
    }
  }
  return out;
}

/** `### heading` sections of operations.md: heading → body (until the next ## / ###). */
export function sections(md, level = 3) {
  const lines = md.split('\n');
  const out = new Map();
  let cur = null;
  let parent = null;
  let inFence = false;
  for (const line of lines) {
    if (/^```/.test(line)) inFence = !inFence;
    const h = !inFence && /^(#{1,6})\s+(.*)$/.exec(line);
    if (h && h[1].length <= level) {
      if (h[1].length === level - 1) parent = h[2].trim();
      cur = h[1].length === level ? { heading: h[2].trim(), parent, body: [] } : null;
      if (cur) out.set(cur.heading, cur);
      continue;
    }
    if (cur) cur.body.push(line);
  }
  for (const s of out.values()) s.body = s.body.join('\n').trim();
  return out;
}

/** Reads the spec files the generator needs. */
export function loadSpec(sdkDir) {
  const read = f => fs.readFileSync(path.join(sdkDir, f), 'utf8');
  const errorsMd = read('spec/errors.md');
  const operationsMd = read('spec/operations.md');
  const migrationMd = read('MIGRATION.md');
  const readmeMd = read('README.md');
  return {
    errorsMd,
    operationsMd,
    migrationMd,
    readmeMd,
    errorTables: tables(errorsMd),
    operations: sections(operationsMd, 3),
    operationGroups: sections(operationsMd, 2),
    migrationTables: tables(migrationMd),
  };
}

/** The `Tag:` of an operations.md section (`pure`, `chain`, `api`, `api+chain`, wallet …). */
export function tagOf(body) {
  const m = /^Tag:\s*([^.]*?)(?:\.|$)/m.exec(body ?? '');
  if (!m) return null;
  return m[1].replace(/`/g, '').trim();
}

/** The backticked identifiers in a table cell. */
export function codeTokens(cell) {
  return [...cell.matchAll(/`([^`]+)`/g)].map(m => m[1]);
}
