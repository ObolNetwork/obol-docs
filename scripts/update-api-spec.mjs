#!/usr/bin/env node
// Refreshes the vendored Obol API OpenAPI spec used by Redocusaurus (/api).
// Usage: node scripts/update-api-spec.mjs
const res = await fetch('https://api.obol.tech/docs-json');
if (!res.ok) {
  console.error(`Failed to fetch spec: ${res.status} ${res.statusText}`);
  process.exit(1);
}
const spec = await res.json();
const {writeFileSync} = await import('node:fs');
writeFileSync(
  new URL('../static/openapi/obol-api.json', import.meta.url),
  JSON.stringify(spec, null, 2),
);
console.log(`✔ static/openapi/obol-api.json updated (${Object.keys(spec.paths).length} paths)`);
