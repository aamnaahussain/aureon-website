(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const CONFIG = window.AUREON_CONFIG || {};

  // ── Sticky header shadow ──
  const header = $('.site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  onScroll(); addEventListener('scroll', onScroll, { passive: true });

  // ── Mobile menu + dropdowns ──
  const burger = $('.burger'), menu = $('#menu');
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
    document.body.classList.toggle('lock', open);
  });
  $$('.has-sub').forEach(h => {
    const b = $('.sub-toggle', h);
    b.addEventListener('click', e => {
      e.stopPropagation();
      const was = h.classList.contains('open');
      $$('.has-sub').forEach(x => { x.classList.remove('open'); $('.sub-toggle', x).setAttribute('aria-expanded', 'false'); });
      if (!was) { h.classList.add('open'); b.setAttribute('aria-expanded', 'true'); }
    });
  });
  document.addEventListener('click', () => $$('.has-sub').forEach(x => x.classList.remove('open')));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') $$('.has-sub').forEach(x => x.classList.remove('open')); });

  // ── Reveal on scroll ──
  const items = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12, rootMargin: '0px 0px -40px' });
    items.forEach(i => io.observe(i));
  } else items.forEach(i => i.classList.add('in'));

  // ── Hero slider ──
  const slides = $$('.slide');
  if (slides.length) {
    const dots = $$('.dots button');
    let cur = 0, timer;
    const go = n => {
      cur = (n + slides.length) % slides.length;
      slides.forEach((s, i) => { s.classList.toggle('is-on', i === cur); s.setAttribute('aria-hidden', i !== cur); });
      dots.forEach((d, i) => { d.classList.toggle('is-on', i === cur); d.setAttribute('aria-selected', i === cur); });
    };
    const play = () => { clearInterval(timer); if (!matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(() => go(cur + 1), 7000); };
    dots.forEach((d, i) => d.addEventListener('click', () => { go(i); play(); }));
    $('.prev').addEventListener('click', () => { go(cur - 1); play(); });
    $('.next').addEventListener('click', () => { go(cur + 1); play(); });
    const box = $('#slides'); box.addEventListener('mouseenter', () => clearInterval(timer)); box.addEventListener('mouseleave', play);
    go(0); play();
  }

  // ── Cookie notice ──
  const ck = $('#cookie');
  try { if (!localStorage.getItem('aureon-cookie')) ck.hidden = false; } catch { ck.hidden = false; }
  $$('[data-cookie]', ck).forEach(b => b.addEventListener('click', () => { try { localStorage.setItem('aureon-cookie', b.dataset.cookie); } catch {} ck.hidden = true; }));

  // ── Copy buttons ──
  $$('[data-copy]').forEach(b => b.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText($('#' + b.dataset.copy).textContent); const t = b.textContent; b.textContent = 'Copied'; setTimeout(() => b.textContent = t, 1600); } catch {}
  }));

  // ── Quick-action buttons pre-select the enquiry type ──
  $$('.quick-btn').forEach(b => b.addEventListener('click', () => {
    const msg = $('#message'); const f = $('#form');
    if (msg && !msg.value) msg.value = b.dataset.interest + ': ';
    f && f.scrollIntoView({ behavior: 'smooth', block: 'start' });
    msg && setTimeout(() => msg.focus(), 500);
  }));

  // ── Forms ──
  // Set the endpoint in src/site.js (formEndpoint) and rebuild. Without one, the visitor's
  // email app opens with the message pre-filled, so nothing is lost.
  const endpoint = document.documentElement.dataset.endpoint || '';
  const to = document.documentElement.dataset.mailto || '';
  $$('form[data-form]').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const ok = $('.ok', form), err = $('.err', form);
      ok.hidden = err.hidden = true;
      $$('.invalid', form).forEach(x => x.classList.remove('invalid'));
      let valid = true;
      $$('[required]', form).forEach(i => { const bad = i.type === 'checkbox' ? !i.checked : !i.value.trim() || !i.checkValidity(); if (bad) { valid = false; (i.closest('.field') || i.closest('.check')).classList.add('invalid'); } });
      if (!valid) { $('.invalid input, .invalid select, .invalid textarea', form)?.focus(); return; }
      const data = new FormData(form);
      const btn = $('button[type=submit]', form); btn.disabled = true;
      try {
        if (endpoint) {
          const r = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
          if (!r.ok) throw new Error('bad');
        } else {
          const lines = [...data.entries()].filter(([k, v]) => typeof v === 'string' && v && k !== 'consent').map(([k, v]) => `${k}: ${v}`);
          location.href = `mailto:${to}?subject=${encodeURIComponent(form.dataset.subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
        }
        ok.hidden = false; form.reset();
      } catch { err.hidden = false; }
      btn.disabled = false;
    });
  });
})();
