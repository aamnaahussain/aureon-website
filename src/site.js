// ─────────────────────────────────────────────────────────────
//  SITE SETTINGS  —  edit company details here, then run:  node build.mjs
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'Aureon Ventures & Technologies',
  short: 'Aureon',
  domain: 'www.aureon.sa',
  url: 'https://www.aureon.sa',
  tagline: 'People · Technology · Possibilities',
  phone: '+966 50 123 4567',
  phoneRaw: '966501234567',
  email: 'hussnain@aureon.sa',
  salesEmail: 'hussnain@aureon.sa',
  linkedin: 'https://www.linkedin.com/in/hussnain-raza',
  whatsapp: 'https://wa.me/966501234567?text=Hello%20Aureon%2C%20I%20would%20like%20to%20ask%20about%20your%20services.',
  address: 'Saudi Arabia',                  // TODO: full office address
  hours: 'Sunday – Thursday, 8:00 am – 5:00 pm', // TODO: confirm
  // Contact forms: paste a Formspree / Getform / Basin endpoint URL here to receive
  // submissions by email. Leave empty to fall back to opening the visitor's email app.
  formEndpoint: '',
  year: 2026,
};

// Navigation. `solutions` and `services` are filled from pages.js
export const companyLinks = [
  { t: 'About Aureon', href: 'about.html' },
];
