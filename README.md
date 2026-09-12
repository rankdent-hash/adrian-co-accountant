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

Real page copy was migrated verbatim from `Adrian-Co-Website-Content_1.xlsx`
(38 pages scraped from the live WordPress site's sitemap). No new marketing
claims, stats, or copy were invented. A handful of items are still open:

- **Main navigation** — now matches the real site's menu breadth (`src/lib/
  site.ts` → `mainNav`): About, Services, Accounting, Auditing, Taxation,
  Advisory, Pensions, Contact — each of Accounting/Taxation/Advisory as its
  own mega-menu. The real site's own structural bugs were fixed rather than
  copied: About Us/Contact Us were nested under "Home" (now top-level);
  Accounting sub-services were duplicated under both "Services" and
  "Accounting" (now only under "Accounting"); "Auditing" and "Pensions"
  each had a single child identical to the parent (now plain links); two
  contact pages existed (the theme-junk `/contact-us/` was already cut);
  "Business Start-up and Advise" corrected to "...and Advice". The desktop
  nav switches in at the `2xl` (1536px) breakpoint rather than `xl`, since
  8 top-level items need the extra room — verified with no overflow down to
  that width, with the hamburger menu below it.
- **Tax / Other Taxes & Tax Planning** — the source page's specific rates
  and thresholds (Corporation Tax "20%, reducing to 19% in 2017/18",
  personal allowance "£11,000", SDLT/ATED bands from 2014-2016) are years
  out of date. The evergreen explanatory text was kept; the stale figures
  were deliberately dropped rather than republished as current — flagged
  with a `ContentPlaceholder` on that page. Needs current rates supplied by
  Adrian & Co before publishing.
- **FAQs** — the content export only captured the 25 answers, not the
  original question text (the export didn't reach whatever accordion
  element held it — two questions survived verbatim and are used as-is).
  The other question labels in `src/app/faqs/page.tsx` are inferred from
  the answer content and flagged with a `ContentPlaceholder` — please
  confirm or correct the exact original wording before launch.
- **Resources / Insights** — confirmed the old page really was a stale
  ~2015 list of third-party software links (VT Cashbook, old Dropbox
  referral, etc.) — kept the build spec's recommendation to launch this as
  an empty Insights hub rather than port it. Open decision per build spec
  §5.3: seed with 1–2 articles, or omit entirely for v1.
- **Testimonials** — known gap per build spec §1: no real testimonials,
  logos, or case studies exist in the source content. None have been added
  or fabricated.
- **Contact form** — `src/app/api/contact/route.ts` is a stub. It validates
  input but returns `501 not_configured`; the UI shows a clear fallback
  (call/email) rather than faking a success message. Needs a real email
  service (e.g. Resend) wired up before launch — confirm the destination
  inbox too (`info@adrianco.com` is what the source content itself lists).
- **Imagery** — no office/team photography supplied yet; the hero uses an
  abstract line-art graphic in the interim.

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
