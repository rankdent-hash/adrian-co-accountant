# Adrian & Co — website rebuild

Next.js 14 (App Router) + TypeScript + Tailwind CSS marketing site for
[Adrian & Co](https://adrianco.uk), a Norbury (South London) firm of
Chartered Certified Accountants. Rebuilt from the 40-page WordPress site
down to the consolidated information architecture in
`adrianco-website-build-spec.md`.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

## Structure

- `src/app/**` — one route per page in the consolidated IA (see the build
  spec's section 2 table for the old-URL → new-URL mapping).
- `src/components/layout` — `Header` (with services mega-menu), `Footer`,
  `PageHero`.
- `src/components/sections` — `Hero`, `TrustBar`, `ServiceGrid`/`ServiceCard`,
  `ProcessSteps`, `FaqAccordion`, `CtaBanner`, `ContactForm`.
- `src/lib/site.ts` — single source of truth for firm details, nav
  structure and the trust-bar/process-step copy that's already verified.
- `tailwind.config.ts` — the design system's colour palette and type scale
  as theme tokens (no hard-coded hex values in components).

## Content TODOs

This build shipped **before** `adrianco-content-archive.md` (the verbatim
copy pull from the live site) was available. Per the build brief, no new
marketing claims, stats, or copy were invented to fill the gap — every page
that needs real copy has a clearly marked amber **"Content placeholder"**
box instead. Search the codebase for `ContentPlaceholder` to find every
instance. Outstanding items:

- **About** — Our Story / Our Approach body copy (archive: ABOUT US, WHY
  WE'RE DIFFERENT, OUR BACKGROUND).
- **Why Outsource** — body copy under all 5 reasons (archive: WHY OUTSOURCE).
- **Total Back Office Support** — overview and key-benefits copy (archive:
  TOTAL OFFICE SUPPORT).
- **Regulatory Compliance** — body copy under all 4 topics (archive:
  REGULATORY COMPLIANCE).
- **Services / Accounting** — Bookkeeping & Accounting, Year-End Accounts,
  Management Accounts copy (archive: ACCOUNTING SERVICES, BOOKKEEPING AND
  ACCOUNTING, YEAR END ACCOUNTS, MANAGEMENT ACCOUNTS).
- **Services / Payroll** — services + process copy (archive: PAYROLL).
- **Services / Auditing** — all 4 sections (archive: AUDITING).
- **Services / Tax** — all 7 sub-sections (archive: CORPORATION TAX, TAX
  INVESTIGATION SERVICES, TAX RETURNS/SELF ASSESSMENT, VAT RETURNS, OTHER
  TAXES & TAX PLANNING, EIS, PARTNERSHIP RETURNS).
- **Services / Advisory** — all 7 sub-sections (archive: ADVISORY SERVICES).
- **Services / Pensions** — overview copy, and Alicja Chandze's role/contact
  details (archive: WORKPLACE PENSIONS).
- **FAQs** — all 25 real Q&As, grouped into the 4 categories (archive:
  FAQ'S). None have been invented.
- **Resources / Insights** — open decision per build spec §5.3: launch
  empty, seed with 1–2 articles, or omit entirely. Not yet decided.
- **Testimonials** — known gap per build spec §1: no real testimonials,
  logos, or case studies exist. None have been added or fabricated.
- **Contact form** — `src/app/api/contact/route.ts` is a stub. It validates
  input but returns `501 not_configured`; the UI shows a clear fallback
  (call/email) rather than faking a success message. Needs a real email
  service (e.g. Resend) wired up before launch, per build spec §5.4 —
  confirm the destination inbox too (`info@adrianco.com` is assumed pending
  confirmation, see `src/lib/site.ts`).
- **Imagery** — no office/team photography supplied yet (build spec §5.2);
  the hero uses an abstract line-art graphic in the interim. Favicon/app
  icon is still the Next.js default.
- **Palette** — gold accent is the default per build spec §3; the deep
  British-racing-green alternative was not requested.

## Accessibility & performance notes

- Type scale, spacing and colours are Tailwind theme tokens
  (`tailwind.config.ts`), not hard-coded values.
- Visible focus states (`:focus-visible`) and a skip-to-content link are in
  `globals.css` / `layout.tsx`.
- Gold is used for large text, icons and CTA buttons (gold background +
  ink text, or ink background + gold text) — never for small body copy on
  cream, per the build spec's contrast warning.
- `prefers-reduced-motion` is respected globally.
- Fonts (Fraunces, Inter) load via `next/font/google` — no external font
  CDN requests.

## Deployment

The repository is connected to Vercel. Pushing to `main` triggers a
production deployment; no server-only secrets are required to build. Once
a contact-form email service is chosen, its API key should be added as a
Vercel environment variable rather than committed.
