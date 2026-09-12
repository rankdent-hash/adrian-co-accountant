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

- **Main navigation** — the owner's real site menu (adrianco.uk) hasn't been
  supplied yet, and this environment cannot reach that domain directly
  (network policy blocks the fetch). `src/lib/site.ts` → `mainNav` only
  confirms "Services" as having a real submenu (per the build spec's IA
  table); the other items are single links pending the actual structure.
  `Header.tsx` renders any nav item with `children` as a mega-menu with
  icons, so adding the rest is a data change in `site.ts`, not a component
  rewrite — paste the real menu (or the content archive) to finish this.
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
- **Imagery** — no office/team photography supplied yet; the hero uses an
  abstract line-art graphic in the interim. Favicon/app icon is still the
  Next.js default (the new logo is used in the header; a matching favicon
  crop hasn't been generated).

## Brand & design system

Superseded the original gold/navy build-spec palette with the owner's
logo and a red/charcoal/ivory system:

| Role | Colour | Token |
|---|---|---|
| Ampersand, growth arrow, primary buttons | Deep red `#9E2532` | `gold` |
| Button hover | Dark red `#7D1D28` | `gold.light` |
| Logo lettering, headings, dark sections | Charcoal `#222629` | `ink` / `charcoal` |
| Body text | Slate grey `#555B61` | `slate` |
| Main background | Warm ivory `#F7F5F1` | `cream` |
| Cards, button text | White `#FFFFFF` | `paper` |
| Borders | Light grey `#E4E1DC` | `line` |

Token *names* are unchanged from the original build to avoid a
find-and-replace across every component (e.g. `gold` now means red), but
every hex value matches the new brand spec exactly — see
`tailwind.config.ts`.

Typography: **Libre Baskerville** (Regular 400) for H1/H2, **Inter**
(Semibold 600) for H3, Inter for everything else — both loaded via
`next/font/google`, no external font CDN calls. Line height is 1.2 for all
headings and 1.6 for body text, per spec.

The header uses the real logo image (`public/logo.png`, cropped tightly,
transparent background) on a light background — the logo's charcoal
lettering has no light-on-dark version, so the footer (which stays dark)
uses a text-based serif brand mark instead.

**Contrast note:** red-on-charcoal fails WCAG AA (~2:1) — the brand's own
palette table doesn't pair those two directly, but several inherited
component patterns (dark section headlines, icon badges, footer labels)
would have. Those were changed to use white/ivory text on dark
backgrounds instead, keeping red reserved for buttons (white text on red)
and for text/icons on light backgrounds only, where it passes AA
comfortably (~7:1).

## Accessibility & performance notes

- Type scale, spacing and colours are Tailwind theme tokens
  (`tailwind.config.ts`), not hard-coded values.
- Visible focus states (`:focus-visible`) and a skip-to-content link are in
  `globals.css` / `layout.tsx`.
- `prefers-reduced-motion` is respected globally.

## Deployment

The repository is connected to Vercel. Pushing to `main` triggers a
production deployment; no server-only secrets are required to build. Once
a contact-form email service is chosen, its API key should be added as a
Vercel environment variable rather than committed.
