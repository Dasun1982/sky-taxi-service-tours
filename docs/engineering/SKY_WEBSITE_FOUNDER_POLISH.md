# SKY Website — Founder Visual Correction Pass (post-W10)

Starting point: W10 commit `d1cd1aac8d6be272d9f68b3f1a480a85df576fbf`, clean tracked tree. Targeted corrections from the founder's localhost review; W1–W10 architecture, prices, URLs, SEO registry, and W9 analytics are unchanged.

## Route discovery
Home's "Popular Sri Lanka Taxi Routes" was a CSS marquee (`overflow: hidden`, 58 s auto-slide, no controls). With the OS "reduce motion" setting the global reduced-motion rule froze it on the first three cards with no way to reach the rest. Replaced by `RouteRail.jsx`: a manual scroll-snap rail (arrow buttons with `aria-controls`, focusable labelled region, touch/trackpad swipe, no auto-motion, reduced-motion aware, RTL-aware). It shows 17 real route pages: the 9 existing cards plus the 8 remaining Colombo Airport routes from `src/data/routes.js`, each with its published travel time and existing destination copy. Nearby-route and nearby-destination sections (curated sets of four) keep their grids and gain one "See all routes" / "View all destinations" continuation.

## FAQ system
58 files hand-rendered FAQ cards (78 blocks). `FaqList.jsx` now provides one WAI-ARIA accordion (`h3 > button[aria-expanded][aria-controls]`, `role="region"` panel). Answers are always rendered; collapsed panels are visually closed and `inert`, so every answer stays in the prerendered HTML. FAQ schema visibility: 287/287 (282 from W10 plus 5 new Chauffeur Guide answers). Layout: one centred ~880 px column, compact rows, hover lift/tilt disabled for accordion items. Section titles read "<Service> FAQs" (keywords kept). Nine keyword-stuffed questions ("Can I book taxi in…") were corrected in page and schema together.

Chauffeur Guide had no FAQ; `chauffeurGuideFaqs` (in `chauffeurGuideOffer.js`, prices generated from W1 pricing) now feeds both the visible accordion and FAQPage schema.

## Home value messaging
The service chooser no longer shows "From LKR 25,000/day" / "From $69/day"; each card now says what the service is, who it is best for, and how to continue. The W8 reassurance cards were reframed from price-first to verified capabilities (private travel, your route/stops/pace, island-wide routes, airport meeting choices, direct WhatsApp with "today's best available price", clear confirmation). Dedicated pages keep every W3/W4/W5 price.

## Current-price wording
Used once per surface, never as a discount: Home reassurance, airport route quote panel, Private Driver closing CTA ("Want to adjust the route or number of days? Ask us for a tailored quote."), Tours CTA, Chauffeur Guide FAQ. Tests ban % off, sale, "was" prices, limited-time, today-only, guaranteed-lowest, and scarcity wording.

## Tests and build
New: `scripts/founder-polish.test.mjs` (5 unit tests) and `scripts/founder-polish-qa.mjs` (259 browser checks: rail, reduced motion, accordion keyboard/ARIA, Home without prices, dedicated prices at 320–1280 px, no fake offers). Updated intentionally: W6 Home chooser assertions (78 checks; price equality checks replaced by "best for" plus no-price checks) and two W8 Home-reassurance assertions. Build: 2,120 modules (+FaqList, +RouteRail). Main JS 550.79 kB / gzip 156.80 kB (W10: 536.52 / 152.88) because Home now imports the route and destination registry for the rail; CSS 297.58 / 41.64 kB.

Open founder gates are unchanged: JRDY Films and Sri Lanka Tourism video rights; qualified review of Privacy, Terms, and Account Deletion.
