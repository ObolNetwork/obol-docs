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

/**
 * An ATX heading line (`## Title`): its level (1 to 6) and trimmed text, or
 * null. A plain scan, so a long line costs one pass.
 */
export function headingOf(line) {
  let level = 0;
  while (line[level] === '#') level++;
  if (level < 1 || level > 6 || !/\s/.test(line.charAt(level))) return null;
  return { level, text: line.slice(level).trim() };
}

/** Per line: its heading, or null for other lines and for lines inside a code fence. */
function headingsByLine(lines) {
  let inFence = false;
  return lines.map(line => {
    if (line.startsWith('```')) inFence = !inFence;
    return inFence ? null : { heading: headingOf(line) };
  });
}

/** True for the `|---|:--|` line under a table header. */
export function isTableSeparator(line) {
  return /^\|[\s:|-]+$/.test(line ?? '');
}

/** True when `lines[i]` is a table header row (a `|` row followed by a separator). */
export function isTableStart(lines, i) {
  return lines[i].startsWith('|') && isTableSeparator(lines[i + 1]);
}

/** Index of the first line at or after `from` that is not a `|` row. */
export function tableEnd(lines, from) {
  let end = from;
  while (end < lines.length && lines[end].startsWith('|')) end++;
  return end;
}

/** Every table in a Markdown text, with the heading path it sits under. */
export function tables(md) {
  const lines = md.split('\n');
  const out = [];
  const headings = [];
  const outside = headingsByLine(lines); // null inside a code fence
  let i = 0;
  while (i < lines.length) {
    const h = outside[i]?.heading;
    let next = i + 1;
    if (h) {
      headings.length = h.level - 1;
      headings[h.level - 1] = h.text;
    } else if (outside[i] && isTableStart(lines, i)) {
      next = tableEnd(lines, i + 2);
      out.push({ headings: headings.filter(Boolean), header: splitRow(lines[i]), rows: lines.slice(i + 2, next).map(splitRow), line: i + 1 });
    }
    i = next;
  }
  return out;
}

/** `### heading` sections of operations.md: heading → body (until the next ## / ###). */
export function sections(md, level = 3) {
  const lines = md.split('\n');
  const out = new Map();
  let cur = null;
  let parent = null;
  const outside = headingsByLine(lines);
  for (const [i, line] of lines.entries()) {
    const h = outside[i]?.heading;
    if (!h || h.level > level) {
      cur?.body.push(line);
      continue;
    }
    if (h.level === level - 1) parent = h.text;
    cur = h.level === level ? { heading: h.text, parent, body: [] } : null;
    if (cur) out.set(cur.heading, cur);
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
  const text = body ?? '';
  const start = /^Tag:/m.exec(text);
  if (!start) return null;
  // The value runs to the first full stop or the end of its line.
  const rest = text.slice(start.index + 'Tag:'.length).trimStart();
  const end = rest.search(/[.\n\r\u2028\u2029]/);
  return (end < 0 ? rest : rest.slice(0, end)).replaceAll('`', '').trim();
}

/** The backticked identifiers in a table cell. */
export function codeTokens(cell) {
  return [...cell.matchAll(/`([^`]+)`/g)].map(m => m[1]);
}
