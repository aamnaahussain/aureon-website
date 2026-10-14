import { site, companyLinks } from './site.js';
import { icon } from './icons.js';
import { scenes } from './scenes.js';
import { solutions, services } from './content.js';

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// content strings may contain & and <em>; keep <em>, escape bare &
const rich = (s) => String(s).replace(/&(?!amp;|lt;|gt;|quot;)/g, '&amp;');

export function logo(cls = 'logo') {
  return `<svg class="${cls}" viewBox="0 0 176 62" role="img" aria-label="Aureon Ventures & Technologies" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="sw" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#1b7f3f"/><stop offset="1" stop-color="#7bd35a"/></linearGradient></defs>
  <path d="M104 15C124 3 150 -1 172 3 150 5 128 12 112 27z" fill="url(#sw)"/>
  <text x="0" y="41" font-family="'Exo 2',sans-serif" font-weight="800" font-size="43" fill="currentColor" textLength="170" lengthAdjust="spacingAndGlyphs">aurEON</text>
  <text x="2" y="58" font-family="'Exo 2',sans-serif" font-weight="600" font-size="10.4" fill="#2a8f4a" textLength="166" lengthAdjust="spacing" letter-spacing="2">VENTURES &amp; TECHNOLOGIES</text></svg>`;
}

const link = (root, href) => (/^(#|https?:|mailto:|tel:)/.test(href) ? href : root + href);

// ── Header / Footer ──────────────────────────────────────────
function header(root, active) {
  const a = (k) => (active === k ? ' is-active' : '');
  return `<header class="site-header" id="top">
  <div class="container nav">
    <a href="${root}index.html" class="brand" aria-label="Aureon home">${logo()}</a>
    <nav class="menu" id="menu" aria-label="Main">
      <a class="top-link${a('home')}" href="${root}index.html">Home</a>
      <div class="has-sub${a('services')}"><button class="sub-toggle" aria-expanded="false">Services ${icon('chevron', 'ic chev', 16)}</button>
        <div class="sub sub-narrow">${services.map(s => `<a href="${root}${s.file}"><span class="sub-ic">${icon(s.icon, 'ic', 20)}</span><span><b>${esc(s.nav)}</b><small>${esc(s.card)}</small></span></a>`).join('')}</div></div>
      <div class="has-sub${a('solutions')}"><button class="sub-toggle" aria-expanded="false">Solutions ${icon('chevron', 'ic chev', 16)}</button>
        <div class="sub sub-wide">${solutions.map(s => `<a href="${root}${s.file}"><span class="sub-ic">${icon(s.icon, 'ic', 20)}</span><span><b>${esc(s.nav)}</b></span></a>`).join('')}</div></div>
      <a class="top-link${a('industries')}" href="${root}industries.html">Industries</a>
      <a class="top-link${a('about')}" href="${root}about.html">About</a>
      <a class="btn btn-primary btn-sm menu-cta" href="${root}contact.html">Talk to an engineer ${icon('arrow', 'ic', 16)}</a>
    </nav>
    <button class="burger" aria-label="Open menu" aria-controls="menu" aria-expanded="false">${icon('menu', 'ic open', 26)}${icon('close', 'ic shut', 26)}</button>
  </div>
</header>`;
}

function footer(root) {
  return `<footer class="site-footer">
  <div class="container">
    <div class="foot-top">
      <div class="foot-brand">
        ${logo('logo logo-light')}
        <p>Aureon Ventures &amp; Technologies is a Saudi IT solutions company providing infrastructure, cybersecurity, AI, software, CCTV and cabling services to organizations across the Kingdom.</p>
        <div class="social">
          <a href="${site.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon('linkedin', 'ic', 20)}</a>
          <a href="${site.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon('whatsapp', 'ic', 20)}</a>
          <a href="mailto:${site.email}" aria-label="Email">${icon('mail', 'ic', 20)}</a>
        </div>
      </div>
      <div><h4>Solutions</h4><ul>${solutions.map(s => `<li><a href="${root}${s.file}">${esc(s.nav)}</a></li>`).join('')}</ul></div>
      <div><h4>Services</h4><ul>${services.map(s => `<li><a href="${root}${s.file}">${esc(s.nav)}</a></li>`).join('')}</ul>
        <h4 class="mt">Company</h4><ul><li><a href="${root}index.html">Home</a></li><li><a href="${root}industries.html">Industries</a></li>${companyLinks.map(l => `<li><a href="${root}${l.href}">${esc(l.t)}</a></li>`).join('')}</ul></div>
      <div><h4>Get in touch</h4>
        <ul class="contact-list">
          <li>${icon('phone', 'ic', 18)}<a href="tel:+${site.phoneRaw}">${site.phone}</a></li>
          <li>${icon('mail', 'ic', 18)}<a href="mailto:${site.email}">${site.email}</a></li>
          <li>${icon('globe', 'ic', 18)}<a href="${site.url}">${site.domain}</a></li>
          <li>${icon('pin', 'ic', 18)}<span>${esc(site.address)}</span></li>
        </ul>
        <a class="btn btn-primary btn-sm" href="${root}contact.html">Book a free consultation</a>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© ${site.year} Aureon Ventures &amp; Technologies. All rights reserved.</span>
      <span class="foot-legal"><a href="${root}privacy.html">Privacy Policy</a><a href="${root}cookies.html">Cookie Policy</a><a href="${root}terms.html">Terms &amp; Conditions</a></span>
    </div>
  </div>
</footer>
<a class="wa-float" href="${site.whatsapp}" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp" title="Chat with us on WhatsApp">${icon('whatsapp', 'ic', 28)}</a>
<div class="cookie" id="cookie" hidden>
  <p>We use cookies to keep this site working and to understand how it is used. You can accept all cookies or reject the non-essential ones. <a href="${root}cookies.html">Cookie Policy</a></p>
  <div class="cookie-btns"><button class="btn btn-primary btn-sm" data-cookie="all">Accept all</button><button class="btn btn-ghost btn-sm" data-cookie="essential">Reject non-essential</button></div>
</div>`;
}

// ── Page shell ───────────────────────────────────────────────
export function page({ root = '', file, seo, active, body, ld }) {
  const [title, desc] = seo;
  const canon = `${site.url}/${file}`;
  return `<!doctype html>
<html lang="en" dir="ltr" data-endpoint="${esc(site.formEndpoint)}" data-mailto="${esc(site.email)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="theme-color" content="#0b2a1b">
<link rel="canonical" href="${canon}">
<meta property="og:type" content="website"><meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${canon}">
<link rel="icon" type="image/svg+xml" href="${root}assets/img/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@500;600;700;800&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${root}assets/css/styles.css">
<script>document.documentElement.classList.add('js')</script>
${ld ? `<script type="application/ld+json">${JSON.stringify(ld)}</script>` : ''}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${header(root, active)}
<main id="main">
${body}
</main>
${footer(root)}
<script src="${root}assets/js/main.js" defer></script>
</body>
</html>`;
}

// ── Building blocks ──────────────────────────────────────────
// balanced grid: 3 columns where a short last row is stretched to fill the width
export const g3 = (n) => `cols3 r${n % 3}`;
export const cta = (root, c, href = 'contact.html') => `<section class="cta-band"><div class="container cta-inner reveal">
  <div><h2>${rich(c.h)}</h2><p>${rich(c.p)}</p></div>
  <div class="cta-actions"><a class="btn btn-light btn-lg" href="${link(root, href)}">${rich(c.b)} ${icon('arrow', 'ic', 18)}</a><a class="btn btn-outline-light btn-lg" href="tel:+${site.phoneRaw}">${icon('phone', 'ic', 18)} ${site.phone}</a></div>
</div></section>`;

export const head = (eyebrow, h, p, cls = '') => `<div class="sec-head ${cls} reveal">${eyebrow ? `<span class="eyebrow">${rich(eyebrow)}</span>` : ''}<h2>${rich(h)}</h2>${p ? `<p>${rich(p)}</p>` : ''}</div>`;

export function pageHero(root, { crumbs, kicker, h, p, cta: c, scene = 'globe', secondary }) {
  const paras = Array.isArray(p) ? p : [p];
  return `<section class="hero hero-inner"><div class="hero-bg" aria-hidden="true"></div>
  <div class="container hero-grid">
    <div class="hero-copy">
      <nav class="crumbs" aria-label="Breadcrumb"><a href="${root}index.html">Home</a>${crumbs.map(c => ` <span>/</span> ${c}`).join('')}</nav>
      ${kicker ? `<span class="eyebrow eyebrow-light">${esc(kicker)}</span>` : ''}
      <h1>${rich(h)}</h1>
      ${paras.map(t => `<p class="lead">${rich(t)}</p>`).join('')}
      ${c ? `<div class="hero-actions"><a class="btn btn-primary btn-lg" href="${link(root, c[1])}">${rich(c[0])} ${icon('arrow', 'ic', 18)}</a>${secondary === false ? '' : `<a class="btn btn-outline-light btn-lg" href="tel:+${site.phoneRaw}">${icon('phone', 'ic', 18)} ${site.phone}</a>`}</div>` : ''}
    </div>
    <div class="hero-visual">${scenes[scene]()}</div>
  </div>
</section>`;
}

const whyBlock = (w) => `<section class="section section-alt"><div class="container">
  ${head('Benefits', w.h)}
  <div class="benefit-grid ${w.items.length === 4 ? '' : g3(w.items.length)}">${w.items.map(([t, d], i) => `<div class="benefit reveal" style="--d:${i * 70}ms"><span class="tick">${icon('check', 'ic', 18)}</span><h3>${rich(t)}</h3><p>${rich(d)}</p></div>`).join('')}</div>
</div></section>`;

const serviceCards = (s, kicker) => `<section class="section"><div class="container">
  ${head(kicker || 'What we deliver', s.h)}
  <div class="svc-grid ${g3(s.items.length)}">${s.items.map(([ic, t, d], i) => `<article class="svc reveal" style="--d:${(i % 3) * 70}ms"><span class="ic-box">${icon(ic, 'ic', 26)}</span><h3>${rich(t)}</h3><p>${rich(d)}</p></article>`).join('')}</div>
</div></section>`;

const groupBlock = (g) => `<section class="section"><div class="container">
  ${head('What we deliver', g.h)}
  <div class="group-grid ${g3(g.items.length)}">${g.items.map(([ic, t, list], i) => `<article class="group reveal" style="--d:${(i % 3) * 70}ms"><header><span class="ic-box">${icon(ic, 'ic', 24)}</span><h3>${rich(t)}</h3></header><ul>${list.map(x => `<li>${icon('check', 'ic', 16)}<span>${rich(x)}</span></li>`).join('')}</ul></article>`).join('')}</div>
</div></section>`;

const noteBlock = (n) => `<section class="section section-alt"><div class="container note-grid">
  <div class="reveal"><span class="eyebrow">Good to know</span><h2>${rich(n.h)}</h2></div>
  <div class="note-copy reveal">${n.p.map(t => `<p>${rich(t)}</p>`).join('')}</div>
</div></section>`;

const processBlock = (p) => `<section class="section section-dark"><div class="container">
  ${head('How we work', p.h, '', 'on-dark')}
  <ol class="steps steps-${p.steps.length}">${p.steps.map(([t, d], i) => `<li class="step reveal" style="--d:${i * 90}ms"><span class="num">${String(i + 1).padStart(2, '0')}</span><h3>${rich(t)}</h3><p>${rich(d)}</p></li>`).join('')}</ol>
</div></section>`;

const whyAureonBlock = (w) => `<section class="section"><div class="container why-split">
  <div class="reveal"><span class="eyebrow">Why Aureon</span><h2>${rich(w.h)}</h2></div>
  <div class="why-list">${w.items.map(([t, d], i) => `<div class="why-row reveal" style="--d:${i * 70}ms"><span class="tick">${icon('check', 'ic', 18)}</span><div><h3>${rich(t)}</h3><p>${rich(d)}</p></div></div>`).join('')}</div>
</div></section>`;

const tableBlock = (t) => `<section class="section section-alt"><div class="container">
  ${head('By sector', t.h)}
  <div class="rows reveal">${t.rows.map(([a, b]) => `<div class="row"><b>${rich(a)}</b><span>${rich(b)}</span></div>`).join('')}</div>
  ${t.foot ? `<p class="foot-note">${rich(t.foot)}</p>` : ''}
</div></section>`;

const faqBlock = (f, note) => `<section class="section"><div class="container faq-split">
  <div class="reveal"><span class="eyebrow">FAQ</span><h2>Common questions</h2>${note ? `<p class="foot-note">${rich(note)}</p>` : ''}</div>
  <div class="faqs">${f.map(([q, a], i) => `<details class="faq reveal" style="--d:${i * 50}ms"><summary>${rich(q)}${icon('plus', 'ic plus', 20)}</summary><p>${rich(a)}</p></details>`).join('')}</div>
</div></section>`;

const plansBlock = (p) => `<section class="section section-alt"><div class="container">
  ${head('Plans', p.h, p.note)}
  <div class="plans reveal">
    <div class="plan-head"><span></span>${p.cols.map((c, i) => `<div class="${i === p.featured ? 'feat' : ''}">${i === p.featured ? '<em>Recommended</em>' : ''}<b>${esc(c)}</b></div>`).join('')}</div>
    ${p.rows.map(r => `<div class="plan-row"><span class="plan-label">${esc(r[0])}</span>${r.slice(1).map((c, i) => `<div class="${i === p.featured ? 'feat' : ''}" data-label="${esc(p.cols[i])}">${esc(c)}</div>`).join('')}</div>`).join('')}
  </div>
</div></section>`;

const complianceBlock = (c) => `<section class="section"><div class="container">
  ${head('Compliance', c.h, c.p)}
  <div class="comp-grid">${c.items.map(([t, d], i) => `<div class="comp reveal" style="--d:${i * 70}ms"><span class="badge">${esc(t)}</span><p>${rich(d)}</p></div>`).join('')}</div>
  <p class="foot-note">${rich(c.foot)}</p>
</div></section>`;

// ── Solution / service detail page ───────────────────────────
export function detailPage(item, kind) {
  const root = '../';
  const parts = [pageHero(root, { crumbs: [kind === 'solution' ? 'Solutions' : 'Services', esc(item.nav)], kicker: item.nav, h: item.hero.h, p: item.hero.p, cta: item.hero.cta, scene: item.scene })];
  if (item.why) parts.push(whyBlock(item.why));
  if (item.note && kind === 'solution' && item.slug === 'cybersecurity') parts.push(noteBlock(item.note));
  if (item.groups) parts.push(groupBlock(item.groups));
  if (item.services) parts.push(serviceCards(item.services));
  if (item.note && item.slug !== 'cybersecurity') parts.push(noteBlock(item.note));
  if (item.plans) parts.push(plansBlock(item.plans));
  if (item.process) parts.push(processBlock(item.process));
  if (item.compliance) parts.push(complianceBlock(item.compliance));
  if (item.whyAureon) parts.push(whyAureonBlock(item.whyAureon));
  if (item.sectors) parts.push(tableBlock(item.sectors));
  if (item.faqs) parts.push(faqBlock(item.faqs, item.faqNote));
  parts.push(cta(root, item.cta));
  const ld = { '@context': 'https://schema.org', '@type': 'Service', name: item.nav, provider: { '@type': 'Organization', name: site.name, url: site.url }, areaServed: 'SA', description: item.seo[1] };
  return page({ root, file: item.file, seo: item.seo, active: kind === 'solution' ? 'solutions' : 'services', body: parts.join('\n'), ld });
}

export { whyBlock, serviceCards, processBlock, whyAureonBlock, faqBlock, noteBlock, link, rich };
