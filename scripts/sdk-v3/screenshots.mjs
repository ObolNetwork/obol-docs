#!/usr/bin/env node
// Screenshots of the SDK v3 reference in light and dark mode, desktop and
// phone width, from a running site (preview build served statically).
//
//   node scripts/sdk-v3/screenshots.mjs --base http://127.0.0.1:3100 --out <dir> [--prefix /next]
//
// Playwright is not a dependency of this repo: it is resolved from
// PLAYWRIGHT_FROM (a directory with node_modules/playwright), by default
// /workspace/repos/dv-launchpad.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const arg = (k, d) => {
  const i = process.argv.indexOf(`--${k}`);
  return i > 0 ? process.argv[i + 1] : d;
};
const base = arg('base', 'http://127.0.0.1:3100');
const prefix = arg('prefix', '');
const out = path.resolve(arg('out', 'sdk-v3-screenshots'));
const only = arg('only', null);
const from = process.env.PLAYWRIGHT_FROM ?? '/workspace/repos/dv-launchpad';
const { chromium } = createRequire(path.join(from, 'package.json'))('playwright');

const SHOTS = [
  { name: 'landing', path: '/sdk/v3' },
  { name: 'lifecycle', path: '/sdk/v3/lifecycle' },
  { name: 'namespace-ovm', path: '/sdk/v3/reference/ovm' },
  { name: 'method-prepareWithdraw', path: '/sdk/v3/reference/ovm', anchor: 'prepareWithdraw' },
  { name: 'method-send', path: '/sdk/v3/reference/send', anchor: 'send' },
  { name: 'errors', path: '/sdk/v3/errors', anchor: 'DEPOSIT_CONFLICT' },
  { name: 'warnings', path: '/sdk/v3/warnings' },
  { name: 'types-ovm', path: '/sdk/v3/reference/types/ovm', anchor: 'PrepareWithdrawInput' },
  { name: 'reference-index', path: '/sdk/v3/reference' },
  { name: 'migration', path: '/sdk/v3/migration' },
  { name: 'for-agents', path: '/sdk/v3/for-agents' },
];
const VIEWPORTS = [
  { name: '1440', width: 1440, height: 1000 },
  { name: '390', width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 },
];

fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
const problems = [];
for (const theme of ['light', 'dark']) {
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: vp.deviceScaleFactor ?? 1,
      isMobile: !!vp.isMobile,
      colorScheme: theme,
    });
    await ctx.addInitScript(t => {
      try {
        localStorage.setItem('theme', t);
      } catch {}
    }, theme);
    const page = await ctx.newPage();
    page.on('console', msg => {
      if (msg.type() === 'error') problems.push(`${theme}/${vp.name}: console error: ${msg.text().slice(0, 200)}`);
    });
    for (const s of SHOTS) {
      if (only && !s.name.includes(only)) continue;
      const url = `${base}${prefix}${s.path}${s.anchor ? '#' + s.anchor : ''}`;
      await page.goto(url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(400);
      let clip = null;
      if (s.anchor) {
        // Clip a viewport-sized region of the full page starting at the anchor
        // (scroll restoration after hydration makes scrolling unreliable).
        const top = await page.evaluate(a => {
          const el = document.getElementById(a);
          return el ? el.getBoundingClientRect().top + window.scrollY - 70 : 0;
        }, s.anchor);
        clip = { x: 0, y: Math.max(0, top), width: vp.width, height: vp.height };
      }
      // Horizontal overflow of the page (not of scrollable code blocks / tables).
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      if (overflow > 1) problems.push(`${s.name} ${theme}/${vp.name}: page scrolls horizontally by ${overflow}px`);
      await page.screenshot({ path: path.join(out, `${s.name}-${vp.name}-${theme}.png`), ...(clip ? { fullPage: true, clip } : {}) });
    }
    await ctx.close();
  }
}
await browser.close();
console.log(`screenshots in ${out}`);
if (problems.length) console.log(problems.join('\n'));
