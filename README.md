# Aureon website

Static website (plain HTML/CSS/JS) generated from a few editable files. No dependencies; needs only Node 18+ to rebuild.

## Edit and rebuild
| What | Where |
|---|---|
| Company details (phone, email, address, hours, form endpoint) | `src/site.js` |
| All page text (home, services, solutions, about, FAQs…) | `src/content.js` |
| Page layouts | `src/pages.js`, `src/templates.js` |
| Hero illustrations | `src/scenes.js` |
| Colors, fonts, spacing | top of `assets/css/styles.css` (`:root` tokens) |

After any change run `node build.mjs`. This rewrites the `.html` files.

Preview locally: `node serve.mjs` then open http://localhost:5173

## Publish
Upload everything except `src/`, `build.mjs`, `serve.mjs`, `package.json` to any web host (Netlify, Cloudflare Pages, cPanel…). Make sure `www.aureon.sa` matches `url` in `src/site.js` (used for SEO tags and the sitemap).

## Contact / careers forms
Static sites cannot send email on their own. Create a free endpoint at Formspree (or similar), paste its URL into `formEndpoint` in `src/site.js`, and rebuild. Until then, submitting opens the visitor's email app with the message pre-filled.

## Before going live
- Replace the placeholder phone number and add the office address and working hours (`src/site.js`).
- Swap the logo in `src/templates.js` (`logo()`) for the official artwork if needed.
- Have the legal pages (`privacy`, `cookies`, `terms`) reviewed by a legal advisor.
- Add client logos, testimonials, case studies and partner names only with written permission.
