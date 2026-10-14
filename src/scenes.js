// Hero illustrations (inline SVG, drawn for dark backgrounds, brand-green palette)
const G = '#7bd35a';   // bright green
const G2 = '#2fa24f';  // mid green
const panel = 'fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.2)"';

const defs = (id) => `
<defs>
  <radialGradient id="glow${id}" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="${G}" stop-opacity=".35"/><stop offset="1" stop-color="${G}" stop-opacity="0"/></radialGradient>
  <linearGradient id="lg${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${G}"/><stop offset="1" stop-color="${G2}"/></linearGradient>
  <radialGradient id="sph${id}" cx="40%" cy="35%" r="70%"><stop offset="0" stop-color="#1f5a3a" stop-opacity=".95"/><stop offset="1" stop-color="#06150e" stop-opacity=".95"/></radialGradient>
</defs>`;

const wrap = (id, inner, label) => `<svg class="scene" viewBox="0 0 520 440" role="img" aria-label="${label}" xmlns="http://www.w3.org/2000/svg">${defs(id)}
<circle cx="260" cy="220" r="210" fill="url(#glow${id})"/>${inner}</svg>`;

// deterministic pseudo-random
function rng(seed) { let s = seed; return () => ((s = (s * 16807) % 2147483647) / 2147483647); }

export function globe() {
  const r = rng(7), cx = 260, cy = 220, R = 170;
  let dots = '';
  for (let y = -R; y <= R; y += 9) for (let x = -R; x <= R; x += 9) {
    if (x * x + y * y > (R - 6) ** 2) continue;
    const n = Math.sin(x * 0.045 + 1.2) * Math.cos(y * 0.05) + Math.sin((x + y) * 0.03) * 0.8 + Math.cos(x * 0.09 - y * 0.04) * 0.4;
    if (n > 0.35) dots += `<circle cx="${(cx + x + (r() - .5) * 2).toFixed(1)}" cy="${(cy + y + (r() - .5) * 2).toFixed(1)}" r="${(1 + r() * .9).toFixed(1)}" fill="${G}" opacity="${(.25 + r() * .55).toFixed(2)}"/>`;
  }
  const nodes = [[205, 150], [330, 185], [285, 270], [200, 300], [355, 120], [250, 215], [150, 230]];
  const arcs = [[0, 1], [1, 2], [2, 3], [0, 5], [5, 2], [1, 4], [3, 6], [6, 0]];
  const arcPath = ([a, b]) => { const A = nodes[a], B = nodes[b]; const mx = (A[0] + B[0]) / 2, my = (A[1] + B[1]) / 2 - 38; return `<path d="M${A} Q${mx} ${my} ${B}" fill="none" stroke="${G}" stroke-opacity=".7" stroke-width="1.3" stroke-dasharray="4 5" class="flow"/>`; };
  const inner = `
  <circle cx="${cx}" cy="${cy}" r="${R}" fill="url(#sph0)"/>
  <g fill="none" stroke="${G}" stroke-opacity=".18">
    <ellipse cx="${cx}" cy="${cy}" rx="${R}" ry="60"/><ellipse cx="${cx}" cy="${cy}" rx="${R}" ry="115"/>
    <ellipse cx="${cx}" cy="${cy}" rx="60" ry="${R}"/><ellipse cx="${cx}" cy="${cy}" rx="115" ry="${R}"/>
    <line x1="${cx - R}" y1="${cy}" x2="${cx + R}" y2="${cy}"/><line x1="${cx}" y1="${cy - R}" x2="${cx}" y2="${cy + R}"/>
  </g>
  ${dots}
  ${arcs.map(arcPath).join('')}
  ${nodes.map((n, i) => `<circle cx="${n[0]}" cy="${n[1]}" r="11" fill="${G}" opacity=".18" class="pulse" style="animation-delay:${i * .4}s"/><circle cx="${n[0]}" cy="${n[1]}" r="3.6" fill="#eaffd9"/>`).join('')}
  <circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${G}" stroke-opacity=".5" stroke-width="1.2"/>
  <circle cx="${cx}" cy="${cy}" r="${R + 22}" fill="none" stroke="${G}" stroke-opacity=".18" stroke-dasharray="2 8"/>
  <g class="float-a"><rect x="372" y="262" width="124" height="48" rx="12" ${panel}/><circle cx="394" cy="286" r="9" fill="url(#lg0)"/><path d="M390 286l3 3 6-6" stroke="#06150e" stroke-width="2" fill="none"/><rect x="410" y="277" width="70" height="6" rx="3" fill="#fff" opacity=".7"/><rect x="410" y="290" width="46" height="5" rx="2.5" fill="#fff" opacity=".35"/></g>
  <g class="float-b"><rect x="26" y="96" width="132" height="52" rx="12" ${panel}/><path d="M48 128l8-10 8 6 10-14 10 8" stroke="${G}" stroke-width="2.2" fill="none" stroke-linecap="round"/><rect x="98" y="108" width="44" height="6" rx="3" fill="#fff" opacity=".65"/><rect x="98" y="120" width="30" height="5" rx="2.5" fill="#fff" opacity=".3"/></g>`;
  return wrap(0, inner, 'Network connecting businesses across Saudi Arabia');
}

export function ai() {
  const doc = (x, y, o) => `<g opacity="${o}"><rect x="${x}" y="${y}" width="86" height="58" rx="10" ${panel}/><rect x="${x + 12}" y="${y + 14}" width="40" height="6" rx="3" fill="#fff" opacity=".6"/><rect x="${x + 12}" y="${y + 28}" width="60" height="5" rx="2.5" fill="#fff" opacity=".3"/><rect x="${x + 12}" y="${y + 39}" width="48" height="5" rx="2.5" fill="#fff" opacity=".3"/></g>`;
  const out = (y, t) => `<g><rect x="396" y="${y}" width="96" height="52" rx="10" ${panel}/><circle cx="420" cy="${y + 26}" r="10" fill="url(#lg1)"/><path d="M415.5 ${y + 26}l3 3 6-6" stroke="#06150e" stroke-width="2" fill="none"/><rect x="438" y="${y + 18}" width="40" height="6" rx="3" fill="#fff" opacity=".65"/><rect x="438" y="${y + 30}" width="26" height="5" rx="2.5" fill="#fff" opacity=".3"/></g>`;
  const inner = `
  ${doc(28, 96, 1)}${doc(28, 190, .85)}${doc(28, 284, .7)}
  <g fill="none" stroke="${G}" stroke-width="1.6" stroke-dasharray="5 6" class="flow">
    <path d="M114 125 C170 125 170 220 214 220"/><path d="M114 219 L214 220"/><path d="M114 313 C170 313 170 220 214 220"/>
    <path d="M306 220 C350 220 350 122 396 122"/><path d="M306 220 L396 220"/><path d="M306 220 C350 220 350 318 396 318"/>
  </g>
  <circle cx="260" cy="220" r="64" fill="${G}" opacity=".12" class="pulse"/>
  <rect x="214" y="174" width="92" height="92" rx="22" fill="#0b2a1b" stroke="${G}" stroke-width="1.6"/>
  <g stroke="${G}" stroke-width="2.2" stroke-linecap="round" fill="none"><path d="M236 156v18M260 156v18M284 156v18M236 266v18M260 266v18M284 266v18"/></g>
  <g transform="translate(232 192) scale(1.2)" fill="none" stroke="#eaffd9" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 15v-5l2 3 2-3v5M5 6h14v12H5z"/></g>
  <g class="float-a">${out(96)}</g><g>${out(194)}</g><g class="float-b">${out(292)}</g>
  <text x="260" y="332" fill="#fff" fill-opacity=".55" font-size="12" text-anchor="middle" font-family="Poppins,sans-serif" letter-spacing="2">AUTOMATE · ANALYSE · ASSIST</text>`;
  return wrap(1, inner, 'Documents flowing through an AI workflow into completed tasks');
}

export function cyber() {
  const inner = `
  <g fill="none" stroke="${G}" stroke-opacity=".22"><circle cx="260" cy="220" r="190" stroke-dasharray="3 9"/><circle cx="260" cy="220" r="150"/><circle cx="260" cy="220" r="110"/></g>
  <path d="M260 90l108 42v78c0 74-46 128-108 150-62-22-108-76-108-150v-78z" fill="rgba(11,42,27,.9)" stroke="${G}" stroke-width="2"/>
  <path d="M260 118l82 32v62c0 56-34 98-82 116-48-18-82-60-82-116v-62z" fill="url(#lg2)" opacity=".16"/>
  <path d="M222 226l28 28 52-56" fill="none" stroke="#eaffd9" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="120" y="168" width="110" height="3" fill="${G}" opacity=".7" class="scan"/>
  <g class="float-a"><rect x="372" y="112" width="112" height="44" rx="12" ${panel}/><g transform="translate(384 122) scale(.9)" fill="none" stroke="${G}" stroke-width="1.8"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></g><rect x="418" y="128" width="54" height="6" rx="3" fill="#fff" opacity=".6"/><rect x="418" y="140" width="34" height="5" rx="2.5" fill="#fff" opacity=".3"/></g>
  <g class="float-b"><rect x="30" y="278" width="128" height="46" rx="12" ${panel}/><circle cx="54" cy="301" r="6" fill="${G}"/><rect x="70" y="291" width="68" height="6" rx="3" fill="#fff" opacity=".6"/><rect x="70" y="304" width="44" height="5" rx="2.5" fill="#fff" opacity=".3"/></g>
  <g class="float-b"><rect x="366" y="300" width="118" height="44" rx="12" ${panel}/><path d="M386 328l8-9 7 6 9-12" fill="none" stroke="${G}" stroke-width="2.2" stroke-linecap="round"/><rect x="424" y="314" width="44" height="6" rx="3" fill="#fff" opacity=".55"/></g>`;
  return wrap(2, inner, 'Shield representing cybersecurity protection');
}

export function infra() {
  const rack = (x) => `<g><rect x="${x}" y="90" width="92" height="250" rx="10" ${panel}/>${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${x + 10}" y="${104 + i * 38}" width="72" height="28" rx="5" fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.14)"/><circle cx="${x + 22}" cy="${118 + i * 38}" r="3" fill="${i % 3 === 1 ? '#ffd166' : G}" class="blink" style="animation-delay:${i * .3}s"/><rect x="${x + 34}" y="${115 + i * 38}" width="38" height="5" rx="2.5" fill="#fff" opacity=".28"/>`).join('')}</g>`;
  const inner = `
  ${rack(40)}${rack(150)}
  <g fill="none" stroke="${G}" stroke-width="1.6" stroke-dasharray="5 6" class="flow"><path d="M242 215 H306"/><path d="M196 90 C196 50 330 50 354 90"/></g>
  <rect x="306" y="190" width="104" height="50" rx="12" fill="#0b2a1b" stroke="${G}" stroke-width="1.6"/>
  ${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${316 + i * 14}" y="205" width="9" height="9" rx="2" fill="${G}" opacity=".85"/><rect x="${316 + i * 14}" y="220" width="9" height="9" rx="2" fill="${G}" opacity=".4"/>`).join('')}
  <g fill="none" stroke="${G}" stroke-width="1.6" stroke-dasharray="5 6" class="flow"><path d="M410 215 H452"/><path d="M358 240 V300"/></g>
  <g fill="none" stroke="${G}" stroke-width="2.4" stroke-linecap="round"><path d="M442 168a30 30 0 0 1 36 0"/><path d="M450 180a18 18 0 0 1 20 0"/></g><circle cx="460" cy="194" r="4" fill="${G}"/>
  <rect x="438" y="214" width="44" height="30" rx="6" ${panel}/><path d="M446 250h28" stroke="#fff" stroke-opacity=".5" stroke-width="3" stroke-linecap="round"/>
  <g class="float-a"><rect x="300" y="290" width="124" height="48" rx="12" ${panel}/><circle cx="324" cy="314" r="8" fill="url(#lg3)"/><rect x="342" y="304" width="62" height="6" rx="3" fill="#fff" opacity=".6"/><rect x="342" y="316" width="40" height="5" rx="2.5" fill="#fff" opacity=".3"/></g>`;
  return wrap(3, inner, 'Server racks connected to network switch and Wi-Fi');
}

export function cloud() {
  const inner = `
  <path d="M370 210H162a52 52 0 1 1 10-103 78 78 0 0 1 150-14 62 62 0 0 1 48 117z" fill="rgba(11,42,27,.9)" stroke="${G}" stroke-width="2" transform="translate(0 -6)"/>
  <g transform="translate(228 110) scale(2.4)" fill="none" stroke="#eaffd9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17V8M12 17V5M19 17v-6"/></g>
  <g fill="none" stroke="${G}" stroke-width="1.6" stroke-dasharray="5 6" class="flow"><path d="M200 215V290"/><path d="M260 215V290"/><path d="M320 215V290"/></g>
  ${[140, 210, 280].map((x, i) => `<g class="${i === 1 ? 'float-b' : 'float-a'}"><rect x="${x}" y="290" width="68" height="64" rx="12" ${panel}/><rect x="${x + 12}" y="304" width="44" height="10" rx="3" fill="rgba(255,255,255,.1)"/><rect x="${x + 12}" y="320" width="44" height="10" rx="3" fill="rgba(255,255,255,.1)"/><circle cx="${x + 18}" cy="309" r="2.5" fill="${G}"/><circle cx="${x + 18}" cy="325" r="2.5" fill="${G}"/></g>`).join('')}
  <g class="float-b"><rect x="380" y="250" width="116" height="96" rx="14" ${panel}/><rect x="396" y="312" width="12" height="20" rx="3" fill="${G}" opacity=".5"/><rect x="416" y="296" width="12" height="36" rx="3" fill="${G}" opacity=".7"/><rect x="436" y="280" width="12" height="52" rx="3" fill="${G}"/><rect x="456" y="302" width="12" height="30" rx="3" fill="${G}" opacity=".6"/><rect x="396" y="262" width="50" height="6" rx="3" fill="#fff" opacity=".55"/></g>
  <g class="float-a"><rect x="24" y="246" width="96" height="48" rx="12" ${panel}/><g transform="translate(36 258) scale(.95)" fill="none" stroke="${G}" stroke-width="1.8"><path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6z"/></g><rect x="70" y="262" width="38" height="6" rx="3" fill="#fff" opacity=".6"/><rect x="70" y="274" width="26" height="5" rx="2.5" fill="#fff" opacity=".3"/></g>`;
  return wrap(4, inner, 'Cloud connected to servers and data dashboards');
}

export function web() {
  const inner = `
  <g class="float-a"><rect x="40" y="80" width="340" height="250" rx="16" fill="rgba(11,42,27,.92)" stroke="rgba(255,255,255,.22)"/>
  <path d="M40 118h340" stroke="rgba(255,255,255,.18)"/><circle cx="62" cy="99" r="5" fill="#ff6b6b" opacity=".8"/><circle cx="80" cy="99" r="5" fill="#ffd166" opacity=".8"/><circle cx="98" cy="99" r="5" fill="${G}"/>
  <rect x="124" y="91" width="180" height="16" rx="8" fill="rgba(255,255,255,.08)"/>
  <rect x="62" y="140" width="150" height="14" rx="4" fill="#fff" opacity=".8"/><rect x="62" y="164" width="120" height="14" rx="4" fill="#fff" opacity=".8"/>
  <rect x="62" y="192" width="170" height="6" rx="3" fill="#fff" opacity=".3"/><rect x="62" y="206" width="140" height="6" rx="3" fill="#fff" opacity=".3"/>
  <rect x="62" y="228" width="92" height="30" rx="15" fill="url(#lg5)"/>
  <rect x="250" y="138" width="106" height="120" rx="12" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.16)"/><path d="M268 232l24-30 20 18 18-26 16 38" fill="none" stroke="${G}" stroke-width="2.4" stroke-linejoin="round"/>
  ${[62, 168, 274].map(x => `<rect x="${x}" y="278" width="86" height="36" rx="8" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.14)"/>`).join('')}</g>
  <g class="float-b"><rect x="352" y="140" width="130" height="250" rx="22" fill="#08170f" stroke="${G}" stroke-width="1.6"/><rect x="396" y="150" width="42" height="6" rx="3" fill="rgba(255,255,255,.3)"/>
  <rect x="366" y="172" width="102" height="64" rx="10" fill="url(#lg5)" opacity=".85"/><rect x="366" y="246" width="70" height="8" rx="4" fill="#fff" opacity=".7"/><rect x="366" y="262" width="102" height="6" rx="3" fill="#fff" opacity=".3"/>
  <rect x="366" y="282" width="102" height="34" rx="9" fill="rgba(255,255,255,.07)"/><rect x="366" y="326" width="102" height="34" rx="9" fill="rgba(255,255,255,.07)"/><circle cx="381" cy="299" r="8" fill="${G}" opacity=".8"/><circle cx="381" cy="343" r="8" fill="${G}" opacity=".5"/></g>`;
  return wrap(5, inner, 'Website and mobile app interface');
}

export function cctv() {
  const tile = (x, y, rec, i) => `<g><rect x="${x}" y="${y}" width="108" height="78" rx="10" fill="rgba(11,42,27,.9)" stroke="rgba(255,255,255,.2)"/><path d="M${x + 8} ${y + 64}l22-24 16 14 20-28 26 38" fill="none" stroke="${G}" stroke-opacity=".45" stroke-width="1.6"/>${rec ? `<circle cx="${x + 14}" cy="${y + 14}" r="4" fill="#ff6b6b" class="blink" style="animation-delay:${i * .4}s"/>` : ''}<rect x="${x + 24}" y="${y + 11}" width="30" height="5" rx="2.5" fill="#fff" opacity=".45"/></g>`;
  const inner = `
  <g>${tile(250, 70, 1, 0)}${tile(370, 70, 1, 1)}${tile(250, 160, 1, 2)}${tile(370, 160, 0, 3)}</g>
  <g class="float-a"><path d="M70 170l120-34 14 46-120 34z" fill="rgba(11,42,27,.95)" stroke="${G}" stroke-width="1.8" stroke-linejoin="round"/><circle cx="190" cy="153" r="10" fill="#0b2a1b" stroke="${G}" stroke-width="1.6"/><circle cx="190" cy="153" r="3.5" fill="${G}"/><path d="M92 214l-14 38M64 262h46" stroke="rgba(255,255,255,.5)" stroke-width="3" stroke-linecap="round"/></g>
  <path d="M198 150L262 288 160 288Z" fill="url(#lg6)" opacity=".16"/><path d="M198 150L262 288M198 150L160 288" stroke="${G}" stroke-opacity=".5" stroke-dasharray="4 5"/>
  <g class="float-b"><rect x="250" y="270" width="228" height="86" rx="14" ${panel}/><g transform="translate(266 286)"><circle cx="16" cy="16" r="14" fill="none" stroke="${G}" stroke-width="2"/><circle cx="16" cy="12" r="4" fill="${G}"/><path d="M8 25c2-5 14-5 16 0" fill="${G}"/></g><rect x="312" y="288" width="100" height="7" rx="3.5" fill="#fff" opacity=".65"/><rect x="312" y="304" width="72" height="6" rx="3" fill="#fff" opacity=".3"/><rect x="312" y="320" width="48" height="16" rx="8" fill="url(#lg6)"/></g>`;
  return wrap(6, inner, 'CCTV camera and live video grid');
}

export function cabling() {
  const ports = (x, y, n) => Array.from({ length: n }, (_, i) => `<rect x="${x + i * 26}" y="${y}" width="18" height="18" rx="3" fill="#06150e" stroke="rgba(255,255,255,.35)"/><rect x="${x + i * 26 + 4}" y="${y + 4}" width="10" height="4" fill="${G}" opacity=".7"/>`).join('');
  const cab = (x1, y1, x2, y2, c, d = 0) => `<path d="M${x1} ${y1} C${x1} ${y1 + 80} ${x2} ${y2 - 80} ${x2} ${y2}" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round" opacity=".92"/><path d="M${x1} ${y1} C${x1} ${y1 + 80} ${x2} ${y2 - 80} ${x2} ${y2}" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="1.2" stroke-dasharray="3 10" class="flow" style="animation-delay:${d}s"/>`;
  const xs = [58, 84, 110, 136, 162, 188];
  const xs2 = [296, 322, 348, 374, 400, 426];
  const cols = ['#7bd35a', '#2fa24f', '#bfe9a8', '#4fbf6e', '#9be37b', '#1f7a3f'];
  const inner = `
  <rect x="40" y="76" width="220" height="64" rx="10" fill="rgba(11,42,27,.95)" stroke="rgba(255,255,255,.28)"/>${ports(52, 96, 6)}<rect x="52" y="84" width="40" height="4" rx="2" fill="#fff" opacity=".4"/>
  <rect x="278" y="300" width="200" height="64" rx="10" fill="rgba(11,42,27,.95)" stroke="rgba(255,255,255,.28)"/>${ports(290, 320, 6)}<rect x="290" y="308" width="40" height="4" rx="2" fill="#fff" opacity=".4"/>
  ${xs.map((x, i) => cab(x + 9 - 0, 140 + 0, xs2[i] + 9, 300, cols[i], i * .3)).join('')}
  <g class="float-b"><rect x="330" y="86" width="150" height="60" rx="12" ${panel}/><path d="M350 126h-10l8-16h-10M372 100h82M372 116h58" stroke="#fff" stroke-opacity=".55" stroke-width="5" stroke-linecap="round" fill="none"/></g>
  <g class="float-a"><rect x="30" y="300" width="190" height="62" rx="12" ${panel}/><g transform="translate(46 312)"><circle cx="14" cy="14" r="13" fill="none" stroke="${G}" stroke-width="2"/><path d="M8 14l4 4 8-8" fill="none" stroke="${G}" stroke-width="2.4"/></g><rect x="88" y="314" width="108" height="7" rx="3.5" fill="#fff" opacity=".65"/><rect x="88" y="330" width="76" height="6" rx="3" fill="#fff" opacity=".3"/></g>`;
  return wrap(7, inner, 'Structured cabling patch panels and certified links');
}

export function managed() {
  const row = (y, ok) => `<g><rect x="60" y="${y}" width="290" height="40" rx="9" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.14)"/><circle cx="82" cy="${y + 20}" r="8" fill="${ok ? G : '#ffd166'}" opacity=".9"/><path d="M${78} ${y + 20}l3 3 5-6" stroke="#06150e" stroke-width="2" fill="none"/><rect x="102" y="${y + 13}" width="110" height="6" rx="3" fill="#fff" opacity=".6"/><rect x="102" y="${y + 24}" width="70" height="5" rx="2.5" fill="#fff" opacity=".28"/><rect x="290" y="${y + 13}" width="44" height="14" rx="7" fill="${ok ? G : '#ffd166'}" opacity=".25"/></g>`;
  const inner = `
  <rect x="40" y="74" width="330" height="290" rx="18" fill="rgba(11,42,27,.92)" stroke="rgba(255,255,255,.22)"/>
  <rect x="60" y="92" width="120" height="8" rx="4" fill="#fff" opacity=".7"/>
  ${row(120, 1)}${row(168, 1)}${row(216, 0)}${row(264, 1)}
  <path d="M60 340l40-12 40 6 40-16 40 8 40-18 40 6" fill="none" stroke="${G}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  <g class="float-a"><circle cx="438" cy="150" r="52" fill="rgba(11,42,27,.92)" stroke="${G}" stroke-width="1.6"/><circle cx="438" cy="150" r="38" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="8"/><circle cx="438" cy="150" r="38" fill="none" stroke="${G}" stroke-width="8" stroke-linecap="round" stroke-dasharray="238" stroke-dashoffset="12" transform="rotate(-90 438 150)"/><text x="438" y="156" fill="#fff" font-size="16" font-weight="700" text-anchor="middle" font-family="Poppins,sans-serif">SLA</text></g>
  <g class="float-b"><rect x="388" y="236" width="104" height="88" rx="14" ${panel}/><g transform="translate(404 250) scale(1.6)" fill="none" stroke="${G}" stroke-width="1.5" stroke-linecap="round"><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14h3v5H5a1 1 0 0 1-1-1zM20 14h-3v5h2a1 1 0 0 0 1-1z"/></g></g>`;
  return wrap(8, inner, 'Managed IT monitoring dashboard');
}

export function pro() {
  const bar = (y, x, w, o) => `<rect x="${x}" y="${y}" width="${w}" height="16" rx="8" fill="url(#lg9)" opacity="${o}"/>`;
  const inner = `
  <rect x="40" y="74" width="440" height="290" rx="18" fill="rgba(11,42,27,.92)" stroke="rgba(255,255,255,.22)"/>
  ${['Survey', 'Design', 'Build', 'Test', 'Handover'].map((t, i) => `<text x="62" y="${130 + i * 48}" fill="#fff" fill-opacity=".7" font-size="12" font-family="Poppins,sans-serif">${t}</text><line x1="150" y1="${137 + i * 48}" x2="460" y2="${137 + i * 48}" stroke="rgba(255,255,255,.08)"/>`).join('')}
  ${bar(122, 150, 70, 1)}${bar(170, 205, 90, .95)}${bar(218, 270, 110, .9)}${bar(266, 345, 70, .85)}${bar(314, 395, 64, .8)}
  <g stroke="${G}" stroke-opacity=".55" stroke-dasharray="4 5" fill="none"><path d="M220 138V170M295 186V218M380 234V266M415 282V314"/></g>
  <g class="float-a"><rect x="352" y="54" width="130" height="46" rx="12" ${panel}/><g transform="translate(366 64) scale(.9)" fill="none" stroke="${G}" stroke-width="1.8" stroke-linecap="round"><path d="M5 12.5l4.5 4.5L19 7"/></g><rect x="396" y="68" width="68" height="6" rx="3" fill="#fff" opacity=".6"/><rect x="396" y="80" width="40" height="5" rx="2.5" fill="#fff" opacity=".3"/></g>`;
  return wrap(9, inner, 'Project roadmap from survey to handover');
}

export const scenes = { globe, ai, cyber, infra, cloud, web, cctv, cabling, managed, pro };
