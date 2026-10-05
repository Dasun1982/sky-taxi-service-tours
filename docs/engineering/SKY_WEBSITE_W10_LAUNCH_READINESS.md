# SKY Website W10 — Launch Readiness

## Starting state and recovery

Repository root `C:\Users\LOQ\Documents\Projects\sky-taxi-project\travel-website`, branch `main`, accepted W9 HEAD `dbc6a64d330a40efc081ba01bd1a55e182ce22c3`. A previous agent began W10 and stopped on a usage limit with an uncommitted tree (~258 tracked files plus 8 new utility snapshots and two W10 QA scripts). Nothing was reset, stashed, or discarded. Pre-existing untracked `.claude/launch.json`, `nul`, and 24 travel JPGs (dated before W10) were left untouched and are not committed.

Recovery audit of the interrupted work:

| Area | State found | Action |
|---|---|---|
| `--configLoader native` in `build`, direct-node Vite in `prerender.mjs` | Correct | Kept; verified (see build) |
| `UTILITY_NOINDEX` registry type for privacy/terms/account-deletion/support, sitemap exclusion, `noindex, follow` | Correct | Kept; locked by unit test |
| LocalBusiness `priceRange: "$$"` removed | Correct | Kept; not replaced |
| 24/7, guide-licensing, "flight-time checking", "safe" copy rewrites | Mostly correct, incomplete | Finished (below) |
| Late-flight FAQ rewrite | Inconsistent: schema changed, 8 visible page FAQs still said "day or night"; "a Ella / a Arugam Bay" grammar | Unified one answer across schema, data, and visible FAQ |
| `colombo-airport-taxi` description | Broken (`…and more. private taxi service.`) | Repaired |
| 4 shortened titles | Correct, intent kept | Kept |
| Static/prerender snapshots | Interrupted: four source files changed after capture began | Regenerated canonically |
| W5 unit test pinned the removed "licensed" wording | Stale test | Updated to pin the truthful wording |

## Design polish (preserve → polish, no redesign)

Single reviewable layer at the end of `src/App.css` (`W10 — launch polish`); same palette, components, routing, and layout.

- **Photo-hero eyebrow** (103 routes): brand red on dark photo shade was unreadable → warm peach `#ffd2b8` with soft shadow; light heroes (Booking, Contact, Vehicle Rentals) unchanged.
- **Invisible secondary hero button** (~60 routes, incl. "Plan with SKY AI" on every guide page and "<Town> Taxi Service" on priority airport routes): `.app a { color: inherit }` outranked `.button--light`, giving white text on a white fill. Scoped fix for light-button links in `.page-hero`; dark theme preserved.
- **Info chips that looked like buttons** (Home, AI card, Airport, Booking, every product hero): non-interactive spans stacked as full-width pills on phones → wrapped compact chips.
- **Related-page links** (13 full-width stacked pills on Private Driver, similar on SEO pages) → wrapped compact chips on phones.
- **Card fatigue on phones**: Home reassurance and Airport benefit cards → compact icon rows, single column (Airport benefits were two ~150px columns with one word per line).
- **Airport vehicle cards**: shorter photo, Unawatuna/Weligama prices side by side (~80px less per card × 6).
- **Booking**: three ~200px stacked photos before the form → one thumbnail row; form reached ~1,000px sooner.
- **Region photos** 4:3 → 16:10 on phones; **map** gets a brand placeholder instead of a blank white box; **footer** two link columns on phones; desktop nav labels no longer wrap ("Travel Guide").
- **Touch targets**: text-style actions, footer contact links, and region place links get ≥28–32px hit areas.
- **RTL**: arrows/chevrons mirror; Arabic gradient H1 descenders no longer clipped; English fallback copy uses `unicode-bidi: plaintext` (".travel help" → "travel help."); brand name truncates at its end.
- **Accessibility**: `/airport` heading outline completed with a visually hidden H2.

Phone page heights at 390px (before → after): Home 19,647 → 19,035; Airport 10,619 → 9,990; Private Driver 13,702 → 13,052; Booking 6,599 → 5,553; Airport→Galle 15,669 → 14,938.

## Trust and commercial truth

Unverified claims removed or neutralised everywhere they render (EN plus matching es/fr/ar/ru/hi strings): 24/7 availability/support, "licensed" guides, "flight-time checking", "safe/safely" transfer marketing, Booking "Fast reply" (now "Reply on WhatsApp"), Transport "Fixed route pricing" (now "Route-based quote") and "Metered by distance" (now "Priced per km"), and Support/Terms references to "published operating hours" that do not exist. Honest negations ("not a 24/7 emergency dispatch service") remain. No replacement superlatives were introduced. W3/W4/W5 prices, inclusions, and the inquiry ≠ booking boundary are unchanged.

## SEO and structured data

- Registry: 0 mismatches (was 1). Sitemap: 99 URLs. Static broken links: 0.
- Long titles: 37 reviewed → 19 changed (4 earlier + 15 in this pass: 8 route guides to `X to Y by Private Driver | SKY Taxi`, Sinharaja, 5 question guides with the brand cut mid-word, and the Driver + Guide title that repeated "Driver" four times) → 18 retained (airport-route family and titles that only lose the brand tail). Audit warning 37 → 18.
- FAQPage schema: 8 guide pages emitted FAQ schema for 28 questions that are not on the page (`wildlife`, `experiences`, `travel-guide`, `best-beaches-near-galle`, `ella-vs-nuwara-eliya`, `galle-to-ella`, `how-many-days-in-sri-lanka`, `is-a-private-driver-worth-it`). Those entries were removed (no new visible FAQs invented); `/taxi` answer aligned to its visible text. All 282 remaining FAQ answers appear verbatim in crawler-visible HTML.
- No Review/AggregateRating/priceRange schema anywhere.

## Build, static, performance

- Normal `npm run build` succeeds on Windows (exit 0, 2,118 modules). Vite's default `bundle` config loader writes a temporary compiled config under `node_modules/.vite-temp`; in the earlier restricted environment that write was denied. `--configLoader native` imports the plain-ESM `vite.config.js` directly (Vite ≥ 6.1; portable to Vercel's Linux build). Runner build also succeeds (2,118 modules).
- Static regenerated with the existing pipeline: `build → prerender (108/108) → sync-prerender (107 + home) → build`. All 215 snapshot files come from one generation.
- Bundle (W9 → W10): main JS 536.67 → 536.52 kB (gzip 152.79 → 152.88); CSS 289.27 → 292.51 kB (gzip 39.88 → 40.68); modules 2,118 → 2,118. Large-chunk warning remains (threshold not raised). `tuk-tuk-sri-lanka.jpg` 1,363 → 601 kB and `pinnawala-elephant.jpg` 1,583 → 744 kB (resized to 1920px wide, q82). Hero images get `fetchPriority="high"`. Videos remain click-to-load.

## Tests

`node --test scripts/*.test.mjs` 64/64 (58 + 6 new in `w10-launch.test.mjs`). W6 84/84, W7 149/149, W8 301/301, W9 363/363, intercepted Booking 14/14 (temporary build with `VITE_SUPABASE_URL=http://127.0.0.1:9999`). New: `w10-static-qa.mjs` 5,234 (snapshots, robots, sitemap, retired claims, FAQ visibility), `w10-final-qa.mjs` 1,176 (17 routes × 7 widths + ar/ru/de, hero contrast), `w10-journey-qa.mjs` 47 (journeys A–H). Browser suites expect `vite preview --host 127.0.0.1 --port 4173`.

## Documented debt

`translations.js` (230 kB raw, all locales) keeps the main chunk above 500 kB; per-locale lazy loading is the right next step but changes the language context, so it was not done at launch. Much W6–W8 English copy has no deliberate translation (English fallback). Legacy unrendered `airport.badges/benefits` translation keys still contain old wording. Seven pages take their runtime description from the translation layer rather than `pageMeta` (consistent in snapshots). `bike rider.png` (1.8 MB) not re-encoded. Third-party Google Maps embed on Home/Contact.

## Founder evidence required

Rights to the two embedded films credited to JRDY Films and Sri Lanka Tourism; legal review of the draft Privacy/Terms/Account-deletion pages (they describe app/provider flows and say legal review is pending); confirmation of guide credentials/languages before any "licensed" claim returns; numeric passenger/luggage capacities and exact vehicle models; any real operating hours or response-time commitment.
