// Generates the static website from src/content.js.
// Usage:  node build.mjs      (no dependencies, Node 18+)
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { solutions, services, legal } from './src/content.js';
import { site } from './src/site.js';
import { detailPage } from './src/templates.js';
import * as P from './src/pages.js';

const out = dirname(fileURLToPath(import.meta.url));
const files = {};

files['index.html'] = P.homePage();
files['about.html'] = P.aboutPage();
files['industries.html'] = P.industriesPage();
files['contact.html'] = P.contactPage();
files['404.html'] = P.notFoundPage();
for (const s of solutions) files[s.file] = detailPage(s, 'solution');
for (const s of services) files[s.file] = detailPage(s, 'service');
for (const l of legal) files[l.file] = P.legalPage(l);

for (const [f, html] of Object.entries(files)) {
  const p = join(out, f);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, html);
}

// sitemap + robots
const urls = Object.keys(files).filter(f => f !== '404.html');
writeFileSync(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${site.url}/${u === 'index.html' ? '' : u}</loc></url>`).join('\n')}\n</urlset>\n`);
writeFileSync(join(out, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`);
console.log(`Built ${Object.keys(files).length} pages.`);
