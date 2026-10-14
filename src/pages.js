import { site } from './site.js';
import { icon } from './icons.js';
import { scenes } from './scenes.js';
import * as C from './content.js';
import { page, pageHero, head, cta, esc, rich, link, whyAureonBlock, processBlock, g3 } from './templates.js';

const R = ''; // root prefix for top-level pages

// ── Home ─────────────────────────────────────────────────────
export function homePage() {
  const h = C.home;
  const slider = `<section class="hero hero-home" aria-roledescription="carousel" aria-label="Highlights"><div class="hero-bg" aria-hidden="true"></div>
  <div class="container">
    <div class="slides" id="slides">
    ${h.slides.map((s, i) => `<div class="slide${i === 0 ? ' is-on' : ''}" role="group" aria-label="${i + 1} of ${h.slides.length}">
      <div class="hero-copy">
        <span class="eyebrow eyebrow-light">${esc(s.tag)}</span>
        <h1>${rich(s.h)}</h1>
        <p class="lead">${rich(s.p)}</p>
        <div class="hero-actions"><a class="btn btn-primary btn-lg" href="${link(R, s.a[1])}">${rich(s.a[0])} ${icon('arrow', 'ic', 18)}</a>${s.b ? `<a class="btn btn-outline-light btn-lg" href="${link(R, s.b[1])}">${rich(s.b[0])}</a>` : ''}</div>
      </div>
      <div class="hero-visual">${scenes[s.scene]()}</div>
    </div>`).join('')}
    </div>
    <div class="slider-ctrl">
      <div class="dots" role="tablist" aria-label="Choose slide">${h.slides.map((s, i) => `<button role="tab" aria-label="${esc(s.tag)}" class="${i === 0 ? 'is-on' : ''}"><span>${esc(s.tag)}</span></button>`).join('')}</div>
      <div class="arrows"><button class="prev" aria-label="Previous slide">${icon('arrow', 'ic flip', 20)}</button><button class="next" aria-label="Next slide">${icon('arrow', 'ic', 20)}</button></div>
    </div>
  </div></section>`;

  const marquee = `<section class="marquee" aria-label="Technologies and standards we work with"><div class="marquee-label">Technologies &amp; standards we work with</div><div class="marquee-track"><div>${[...h.marquee, ...h.marquee].map(m => `<span>${esc(m)}</span>`).join('')}</div></div></section>`;

  const who = `<section class="section"><div class="container who">
    <div class="reveal"><span class="eyebrow">Who we are</span><h2>${rich(h.who.h)}</h2>${h.who.p.map(t => `<p class="body-lg">${rich(t)}</p>`).join('')}<a class="btn btn-dark" href="about.html">More about us ${icon('arrow', 'ic', 18)}</a></div>
    <div class="facts reveal">${h.who.facts.map(([n, t]) => `<div class="fact"><b>${esc(n)}</b><span>${rich(t)}</span></div>`).join('')}</div>
  </div></section>`;

  const all = [...C.solutions];
  const what = `<section class="section section-alt" id="solutions"><div class="container">
    ${head('What we do', 'Seven areas, one team.', 'Pick one service or run the whole stack with us. Either way you get the same engineers, the same standards and the same documentation.')}
    <div class="card-grid">
      ${all.map((s, i) => `<a class="card reveal" style="--d:${(i % 4) * 70}ms" href="${s.file}"><span class="ic-box">${icon(s.icon, 'ic', 28)}</span><h3>${esc(s.nav)}</h3><p>${rich(s.card)}</p><span class="more">Learn more ${icon('arrow', 'ic', 16)}</span></a>`).join('')}
      <div class="card card-cta reveal" style="--d:210ms"><h3>Not sure where to start?</h3><p>Tell us the problem. We will point you to the right first step.</p><a class="btn btn-light" href="contact.html">Talk to an engineer ${icon('arrow', 'ic', 16)}</a></div>
    </div>
    <div class="svc-strip reveal">
      ${C.services.map(s => `<a href="${s.file}"><span class="ic-box ic-box-dark">${icon(s.icon, 'ic', 24)}</span><span><b>${esc(s.nav)}</b><small>${rich(s.card)}</small></span>${icon('arrow', 'ic', 20)}</a>`).join('')}
    </div>
  </div></section>`;

  const why = `<section class="section"><div class="container why-split">
    <div class="reveal sticky"><span class="eyebrow">Why Aureon</span><h2>${rich(h.why.h)}</h2><div class="why-visual">${scenes.pro()}</div></div>
    <div class="why-list">${h.why.items.map(([ic, t, d], i) => `<div class="why-row reveal" style="--d:${i * 70}ms"><span class="ic-box">${icon(ic, 'ic', 24)}</span><div><h3>${rich(t)}</h3><p>${rich(d)}</p></div></div>`).join('')}</div>
  </div></section>`;

  const process = processBlock(h.process);

  const inds = `<section class="section"><div class="container">
    ${head('Industries', 'Sectors we work in.', 'Every sector has its own pressures. We adapt designs, documentation and ways of working to each.')}
    <div class="ind-grid">${C.industries.list.map(([ic, t], i) => `<a class="ind reveal" style="--d:${(i % 4) * 60}ms" href="industries.html#${t.toLowerCase().replace(/[^a-z]+/g, '-')}"><span class="ic-box">${icon(ic, 'ic', 24)}</span><b>${esc(t)}</b></a>`).join('')}</div>
  </div></section>`;

  const vision = `<section class="vision"><div class="container vision-grid">
    <div class="reveal"><span class="eyebrow eyebrow-light">Vision 2030</span><h2>${rich(h.vision.h)}</h2>${h.vision.p.map(t => `<p>${rich(t)}</p>`).join('')}</div>
    <div class="vision-visual reveal">${scenes.globe()}</div>
  </div></section>`;

  const ld = { '@context': 'https://schema.org', '@type': 'Organization', name: site.name, url: site.url, email: site.email, telephone: site.phone, sameAs: [site.linkedin], areaServed: 'SA', slogan: site.tagline };
  return page({ root: R, file: 'index.html', seo: h.seo, active: 'home', ld, body: [slider, marquee, who, what, why, process, inds, vision, cta(R, h.cta)].join('\n') });
}

// ── About ────────────────────────────────────────────────────
export function aboutPage() {
  const a = C.about;
  const body = [
    pageHero(R, { crumbs: ['About'], kicker: 'About Aureon', h: a.hero.h, p: a.hero.p, scene: 'globe', cta: ['Contact us', 'contact.html'] }),
    `<section class="section"><div class="container story">
      <div class="reveal"><span class="eyebrow">Our story</span><h2>${rich(a.story.h)}</h2>${a.story.p.map(t => `<p class="body-lg">${rich(t)}</p>`).join('')}</div>
      <div class="mv"><div class="mv-card reveal"><span class="ic-box">${icon('target', 'ic', 26)}</span><h3>Our mission</h3><p>${rich(a.mission)}</p></div><div class="mv-card reveal" style="--d:90ms"><span class="ic-box">${icon('eye', 'ic', 26)}</span><h3>Our vision</h3><p>${rich(a.vision)}</p></div></div>
    </div></section>`,
    `<section class="section section-alt"><div class="container">${head('Values', 'What we hold ourselves to.')}
      <div class="val-grid">${a.values.map(([ic, t, d], i) => `<div class="val reveal" style="--d:${i * 60}ms"><span class="ic-box">${icon(ic, 'ic', 24)}</span><h3>${esc(t)}</h3><p>${rich(d)}</p></div>`).join('')}</div></div></section>`,
    `<section class="section"><div class="container expertise">
      <div class="reveal"><span class="eyebrow">Expertise</span><h2>What we do.</h2><p class="body-lg">Seven solution areas, delivered as projects or as ongoing managed services.</p></div>
      <div class="chips reveal">${C.solutions.map(s => `<a href="${s.file}">${icon(s.icon, 'ic', 18)} ${esc(s.nav)}</a>`).join('')}</div></div></section>`,
    `<section class="section section-alt"><div class="container two-col">
      <div class="panel reveal"><span class="ic-box">${icon('rocket', 'ic', 26)}</span><h3>${rich(a.starting.h)}</h3>${a.starting.p.map(t => `<p>${rich(t)}</p>`).join('')}</div>
      <div class="panel reveal" style="--d:90ms"><span class="ic-box">${icon('users', 'ic', 26)}</span><h3>${rich(a.people.h)}</h3>${a.people.p.map(t => `<p>${rich(t)}</p>`).join('')}</div>
    </div></section>`,
    `<section class="vision"><div class="container vision-grid"><div class="reveal"><span class="eyebrow eyebrow-light">Vision 2030</span><h2>${rich(a.v2030.h)}</h2>${a.v2030.p.map(t => `<p>${rich(t)}</p>`).join('')}</div><div class="vision-visual reveal">${scenes.globe()}</div></div></section>`,
    `<section class="section"><div class="container sustain reveal"><span class="ic-box">${icon('leaf', 'ic', 26)}</span><div><h2>${rich(a.sustain.h)}</h2>${a.sustain.p.map(t => `<p class="body-lg">${rich(t)}</p>`).join('')}</div></div></section>`,
    `<section class="section section-alt" id="partners"><div class="container">${head('Technology partners', C.partners.hero.h, C.partners.hero.p)}
      <div class="benefit-grid grid-4">${C.partners.approach.items.map(([ic, t, d], i) => `<div class="benefit reveal" style="--d:${i * 70}ms"><span class="ic-box">${icon(ic, 'ic', 24)}</span><h3>${esc(t)}</h3><p>${rich(d)}</p></div>`).join('')}</div>
      <div class="chips reveal" style="margin-top:36px">${C.partners.areas.items.map(([ic, t]) => `<span class="chip-static">${icon(ic, 'ic', 18)} ${esc(t)}</span>`).join('')}</div>
      <p class="foot-note">${esc(C.partners.areas.foot)} Vendors and distributors who would like to work with us can <a class="link" href="contact.html">get in touch</a>.</p></div></section>`,
    `<section class="section" id="customers"><div class="container">${head('Our customers', C.customers.hero.h, C.customers.hero.p)}
      <div class="ind-grid">${C.industries.list.map(([ic, t], i) => `<a class="ind reveal" style="--d:${(i % 4) * 60}ms" href="industries.html#${t.toLowerCase().replace(/[^a-z]+/g, '-')}"><span class="ic-box">${icon(ic, 'ic', 24)}</span><b>${esc(t)}</b></a>`).join('')}</div>
      <p class="foot-note">${esc(C.customers.sectors.p)}</p></div></section>`,
    cta(R, a.cta),
  ].join('\n');
  return page({ root: R, file: 'about.html', seo: a.seo, active: 'about', body });
}

// ── Industries ───────────────────────────────────────────────
export function industriesPage() {
  const d = C.industries;
  const slug = (t) => t.toLowerCase().replace(/[^a-z]+/g, '-');
  const body = [
    pageHero(R, { crumbs: ['Industries'], kicker: 'Industries', h: d.hero.h, p: d.hero.p, scene: 'globe', secondary: false, cta: ['Talk to an engineer', 'contact.html'] }),
    `<section class="section"><div class="container"><div class="ind-detail">${d.list.map(([ic, t, p, tags], i) => `<article class="ind-card reveal" id="${slug(t)}" style="--d:${(i % 2) * 80}ms"><span class="ic-box">${icon(ic, 'ic', 28)}</span><h3>${esc(t)}</h3><p>${rich(p)}</p><div class="tags">${tags.map(x => `<span>${esc(x)}</span>`).join('')}</div></article>`).join('')}</div></div></section>`,
    cta(R, d.cta),
  ].join('\n');
  return page({ root: R, file: 'industries.html', seo: d.seo, active: 'industries', body });
}

// ── Forms ────────────────────────────────────────────────────
const field = (id, label, type = 'text', req = true, extra = '') => `<label class="field"><span>${label}${req ? '' : ' <i>(optional)</i>'}</span><input id="${id}" name="${id}" type="${type}" ${req ? 'required' : ''} ${extra}></label>`;

// ── Contact ──────────────────────────────────────────────────
export function contactPage() {
  const c = C.contact;
  const opts = [
    ['phone', 'Call', site.phone, `tel:+${site.phoneRaw}`],
    ['whatsapp', 'WhatsApp', site.phone, site.whatsapp],
    ['mail', 'Email', site.email, `mailto:${site.email}`],
    ['globe', 'Website', site.domain, site.url],
    ['pin', 'Office', site.address, ''],
    ['clock', 'Working hours', site.hours, ''],
  ];
  const body = [
    pageHero(R, { crumbs: ['Contact'], kicker: 'Contact us', h: c.hero.h, p: c.hero.p, scene: 'globe', secondary: false, cta: ['Send a message', '#form'] }),
    `<section class="section"><div class="container">${head('Contact options', 'Reach us the way you prefer.')}
      <div class="opt-grid">${opts.map(([ic, t, v, h], i) => { const inner = `<span class="ic-box">${icon(ic, 'ic', 24)}</span><span><small>${t}</small><b>${esc(v)}</b></span>`; return h ? `<a class="opt reveal" style="--d:${(i % 3) * 60}ms" href="${h}"${h.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${inner}</a>` : `<div class="opt reveal" style="--d:${(i % 3) * 60}ms">${inner}</div>`; }).join('')}</div></div></section>`,
    `<section class="section section-alt" id="form"><div class="container form-wrap">
      <div class="reveal"><span class="eyebrow">Send us a message</span><h2>How can we help?</h2><p class="body-lg">A few lines are enough. For example: number of users, number of sites, and what you would like to achieve.</p>
        <div class="quick">${c.quick.map(([ic, t, d]) => `<button type="button" class="quick-btn" data-interest="${esc(t)}"><span class="ic-box">${icon(ic, 'ic', 20)}</span><span><b>${esc(t)}</b><small>${esc(d)}</small></span></button>`).join('')}</div></div>
      <form class="form reveal" data-form="contact" data-subject="Website enquiry" novalidate>
        <div class="grid-2">${field('name', 'Full name')}${field('company', 'Company')}</div>
        <div class="grid-2">${field('email', 'Work email', 'email')}${field('mobile', 'Mobile number', 'tel')}</div>
        <div class="grid-2">${field('city', 'City')}
          <label class="field"><span>I am interested in</span><select id="interest" name="interest" required><option value="">Select…</option>${c.interests.map(i => `<option>${esc(i)}</option>`).join('')}</select></label></div>
        <label class="field"><span>How can we help?</span><textarea id="message" name="message" rows="5" required></textarea></label>
        <label class="check"><input type="checkbox" name="consent" required><span>I agree that Aureon may use my details to respond to this enquiry, as described in the <a href="privacy.html">Privacy Policy</a>.</span></label>
        <button class="btn btn-primary btn-lg" type="submit">Send message ${icon('arrow', 'ic', 18)}</button>
        <p class="form-msg ok" hidden>Thank you. Your message has reached us, and one of our engineers will contact you within one working day.</p>
        <p class="form-msg err" hidden>Sorry, something went wrong and your message was not sent. Please try again, or call us on ${site.phone}.</p>
      </form></div></section>`,
  ].join('\n');
  return page({ root: R, file: 'contact.html', seo: c.seo, active: '', body });
}

// ── 404 + legal ──────────────────────────────────────────────
export function notFoundPage() {
  const body = `<section class="hero hero-inner nf"><div class="hero-bg" aria-hidden="true"></div><div class="container center"><span class="eyebrow eyebrow-light">Error 404</span><h1>This page seems <em>to be offline.</em></h1><p class="lead">The page you are looking for has moved or no longer exists. The rest of the site is working normally.</p><div class="hero-actions" style="justify-content:center"><a class="btn btn-primary btn-lg" href="index.html">Back to home</a><a class="btn btn-outline-light btn-lg" href="contact.html">Contact us</a></div></div></section>`;
  return page({ root: R, file: '404.html', seo: ['Page not found | Aureon', 'This page could not be found.'], active: '', body });
}

export function legalPage(l) {
  const body = `<section class="hero hero-inner hero-small"><div class="hero-bg" aria-hidden="true"></div><div class="container"><nav class="crumbs"><a href="index.html">Home</a> <span>/</span> ${esc(l.title)}</nav><h1>${esc(l.title)}</h1></div></section>
  <section class="section"><div class="container legal">
    <p class="draft">Draft text: please have this reviewed by a legal advisor before publishing, particularly for PDPL compliance.</p>
    ${l.sections.map(([h, p]) => `<h2>${esc(h)}</h2><p>${rich(p)}</p>`).join('')}
    <p class="foot-note">Questions? Email <a href="mailto:${site.email}">${site.email}</a>.</p></div></section>`;
  return page({ root: R, file: l.file, seo: l.seo, active: '', body });
}
