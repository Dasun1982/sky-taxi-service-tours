# SKY website W1: commercial data foundation

Audit date: 2026-10-04. Scope: the existing public `travel-website` repository only. No production publication.

## Verified starting state

- Root: `C:\Users\LOQ\Documents\Projects\sky-taxi-project\travel-website`; branch `main`, one commit ahead of `origin/main`; HEAD `79ceb075bf24c65f0fea69e6f84e683189ff8fb2`.
- Tracked files were clean. `.claude/`, `nul`, and 24 `src/assets/images-videos-travel/*.JPG` files were already untracked. They were left alone.
- No `AGENTS.md` was present in this repository; the root README is the stock Vite template and contains no project workflow rules.
- React 19, Vite 7, JavaScript ESM, hand-written path/hash routing, CSS, Vercel static deployment. `package.json` has `build`, `sitemap`, `seo-audit`, `prerender`, `sync-prerender`, `preview`, and `dev`; it has no test or lint script. `eslint.config.js` exists, but ESLint is not installed in this package.
- Baseline `npm.cmd run build`: sitemap generated 97 URLs, then Vite's default config loader failed with `Cannot read directory "../../../..": Access is denied` / `Could not resolve ...vite.config.js` in this Windows sandbox. Baseline `npm.cmd run seo-audit`: 1 BLOCKED (four legal/support routes absent from SEO registry), 1 WARNING (37 long titles), 0 static broken links. These findings predate W1.

## Existing architecture and preservation baseline

| Area | Existing implementation to preserve |
| --- | --- |
| Entry / router | `src/main.jsx`; `src/App.jsx` maps pathname or hash slug to lazy page components, with home eager. `/rentals` aliases `/vehicle-rentals`. |
| Layout / responsive | `Navbar`, `Footer`, `BottomActionBar`, shared `PageHero`, `Reveal`, cards, and `src/App.css` / `src/styles/theme.css`. White and navy `#25266f`, plum, pink, peach gradients; Inter/system font; rounded cards, shadows, motion, and mobile breakpoints at 360/390/520/640/768/820/900/1024px. |
| Data | `src/data/pricing.js`, `vehicles.js`, `services.js`, `routes.js`, `tours.js`, `destinations.js`, `travelData.js`, `business.js`, and SEO registries. |
| Booking | `BookingForm.jsx`, `bookingSubmission.js`, booking context, Supabase client. A request/message is not a confirmed booking. |
| WhatsApp | `src/utils/whatsapp.js` builds `wa.me` URLs from `travelData.contactInfo.whatsapp`; CTAs have page-specific messages. `business.js` re-exports the same contact. |
| AI planner | Existing `/ai-trip-planner` page and other CTAs link to `https://ai.skytaxisrilanka.com` through `business.js`. Separate application; no API or repository change here. |
| Analytics | Google tag in `index.html`; guarded event calls in `src/utils/analytics.js`. |
| Languages | `LanguageContext.jsx` selects English, Russian, Hindi, Spanish, Arabic (RTL), French or German from `translations.js`, with English fallback and local storage. Commercial numeric data is language-neutral. No new untranslated customer copy was added. |
| SEO | `pageMeta` in `travelData.js`; canonical overrides and head updates in `App.jsx`; JSON-LD in `SeoSchema.jsx` / `schemaData.js`; `seoPages.js` registry; sitemap generator and existing prerendered `public` pages; `robots.txt`. No `hreflang` implementation found in targeted audit. |
| Deployment | Vercel static output and SPA rewrite in `vercel.json`; build generates sitemap, builds Vite, applies prerendered home. No deployment setting changed. |

Preserve route slugs, titles/descriptions, H1s, canonicals, schema, sitemap/robots, existing links and translations. The existing five canonical overrides are deliberate. The 97 URL sitemap reflects 108 registry entries and existing exclusions.

## Commercial page inventory

Classifications are future review labels, not instructions to merge, delete, or regenerate any page. Routes below are existing route keys in `App.jsx`; path form is `/<key>` except home.

| Classification | Existing routes | W1 finding |
| --- | --- | --- |
| KEEP | `/`, `/taxi`, `/airport`, `/tours`, `/one-day-tours`, `/round-tours`, `/packages`, `/destinations`, `/vehicle-rentals`, `/booking`, `/contact` | Established acquisition, catalog, and booking pages. The `/airport` cards explicitly price **Unawatuna/Weligama → airport**, so outbound founder rates cannot be inserted there. |
| EDIT LATER | `/airport-to-galle`, `/airport-to-unawatuna`, `/airport-to-weligama`, `/airport-to-mirissa`, `/colombo-airport-taxi`, `/transport` | Existing URLs should receive outbound pricing/pickup conversion treatment in W3, in place. `/transport` currently has a `$49.99` airport starting claim tied to the existing published USD cards. |
| EDIT LATER | `/galle-taxi-service`, `/unawatuna-taxi-service`, `/weligama-taxi-service`, `/mirissa-taxi-service`, `/ella-taxi-service`, `/kandy-taxi-service`, `/sigiriya-taxi-service`, `/private-driver-sri-lanka`, `/sri-lanka-tour-driver`, `/driver-guide-sri-lanka` | Service/route pages have quote CTAs; later milestones can explain the distinct daily products and current terms. Existing Driver + Guide service means a driver plus a specialist site guide, not necessarily the new Chauffeur Guide product. |
| EDIT LATER | `/sri-lanka-private-tours`, `/day-tours-sri-lanka`, `/5-day-sri-lanka-tour`, `/2-days-in-sri-lanka`, `/3-days-in-sri-lanka`, `/7-days-in-sri-lanka`, `/10-days-in-sri-lanka` | Preserve content and URLs; later explain itinerary customization without claiming a free tour. Some already point canonically to catalog hubs. |
| MERGE CANDIDATE — DO NOT MERGE NOW | `/sri-lanka-taxi-service` → `/taxi`; `/airport-transfer-sri-lanka` → `/airport`; `/sri-lanka-round-tours` → `/round-tours`; `/day-tours-sri-lanka` → `/one-day-tours`; `/sri-lanka-private-tours` → `/tours` | Existing canonical overrides already express the chosen primary URL. No merge, redirect, deletion or canonical change in W1. |
| LATER | Other existing CMB routes: `/airport-to-ella`, `/airport-to-kandy`, `/airport-to-sigiriya`, `/airport-to-hiriketiya`, `/airport-to-nuwara-eliya`, `/airport-to-bentota`, `/airport-to-negombo`, `/airport-to-arugam-bay`, `/airport-to-dambulla`; city taxi pages for Hiriketiya, Nuwara Eliya, Bentota, Negombo, Arugam Bay, Dambulla; `/yala-safari-transfer`; `/rentals` alias | No founder rate for these exact journeys. Maintain quote-led pages. |
| LATER | `/colombo`, `/sinharaja`, `/things-to-do-in-galle`, `/things-to-do-in-unawatuna`, `/things-to-do-in-ella`, `/things-to-do-in-kandy`, `/things-to-do-in-sigiriya`, `/galle-to-ella`, `/ella-to-kandy`, `/kandy-to-sigiriya`, `/sigiriya-to-yala`, `/galle-to-mirissa`, `/mirissa-to-ella`, `/galle-to-yala`, `/unawatuna-to-ella`, `/wildlife`, `/experiences`, `/travel-guide` | Destination, planning, and city-route SEO assets; no W1 changes. |
| OBSOLETE CANDIDATE — DO NOT REMOVE NOW | None verified | No removal decision is supported by this audit. |

Additional comparison, question, beach/culture/surfing, support, and acquisition routes remain intact. The acquisition pages are excluded by the existing robots rules and are outside W1.

## Pricing and commercial audit

`pricing.js` already centralized taxi per-km, inbound airport-card, rental, one-day tour and round-tour prices; the corresponding catalog pages consume it. `vehicles.js` centralizes fleet descriptions/images and pre-existing capacity copy. `business.js` re-exports `travelData.js` contact and the canonical site/planner URLs. The primary WhatsApp number already resolves to `+94 77 929 1073` (`94779291073` for `wa.me`), so no contact refactor was needed.

The founder's **CMB outbound** class/pickup rates, Private Driver daily rates, Chauffeur Guide daily rates, and tour customization policy had no structured home. W1 adds them in the same `pricing.js`, rather than introducing a second pricing module. `getAirportTransferPrice(destination, class, pickup)` derives outside-meeting amounts. `formatCommercialPrice` formats LKR/USD without FX conversion. Vehicle-class mapping is limited to unambiguous fleet examples; no passenger/luggage capacity was added.

Existing hardcoded commercial copy still requiring later review: `Transport.jsx` has `From $49.99 per route` for the existing airport offer; `schemaData.js` repeats tour FAQ amounts `$180/$250/$368/$514/$734` and taxi `Rs. 150/100 per km`. Changing schema copy alone would alter SEO content, so W1 leaves it. `services.js` uses quote-on-request wording for Driver Only and Driver + Guide. No source occurrence of founder's new daily rates was found outside the new model.

### Authoritative CMB outbound airport transfer truth

All amounts LKR. Arrival lobby means inside meeting with a name sign; outside means meeting near the post office about 50 m from the airport exit. Outside is a different service arrangement, not a discount. These are transport prices for the defined transfer; they do not include an entire holiday or guarantee every custom itinerary's final quote.

| CMB → destinations | Class | Lobby | Outside |
| --- | --- | ---: | ---: |
| Galle / Unawatuna | Sedan | 16,000 | 14,000 |
| Galle / Unawatuna | Mini Van | 20,000 | 17,000 |
| Galle / Unawatuna | KDH Van | 21,000 | 18,000 |
| Weligama / Mirissa | Sedan | 18,000 | 16,000 |
| Weligama / Mirissa | Mini Van | 21,000 | 18,000 |
| Weligama / Mirissa | KDH Van | 23,000 | 20,000 |

Only Prius/Insight → Sedan, Freed → Mini Van, and KDH → Van are mapped as examples. Exact model is not guaranteed. Honda Shuttle wagon and Honda Vezel SUV have no founder-supplied class rate. The current `/airport` **inbound** USD prices remain separate and untouched.

### Daily products and customization

| Class | Private Driver (LKR/day) | Chauffeur Guide (USD/day) |
| --- | ---: | ---: |
| Sedan | 25,000 | 69 |
| Mini Van | 30,000 | 79 |
| KDH Van | 35,000 | 89 |

Both include up to 150 km/day, fuel, highway charges, parking, and the relevant driver/guide meals and accommodation. Private Driver supports a flexible route and final route/distance/duration quote. Chauffeur Guide is a separate premium product, generally 5+ days with a customizable itinerary. The existing Driver + Guide site-service model is not silently redefined as Chauffeur Guide. No excess-km rate or exact final quote was invented. Itinerary changes carry no separate customization fee, while the tour itself still has a route/service/vehicle/duration-dependent price.

### Values intentionally not changed / unresolved

1. **Inbound airport USD cards** in `pricing.js` and `/airport`: Prius/Shuttle/Insight `$49.99` Unawatuna and `$54.99` Weligama; Vezel/Freed `$59.99/$64.99`; KDH `$65.99/$69.99`. These are displayed as destination **to airport**, whereas founder rates are **from CMB**. Currency, age, all-in terms, and reverse-route validity need founder verification. `Transport.jsx` repeats the `$49.99` inbound starting claim.
2. **Taxi per-km** `Rs. 150` one way, `Rs. 100` round trip in `pricing.js`, `TaxiService.jsx` and `schemaData.js`: different product from the supplied fixed airport transfers; founder did not reconfirm it in W1.
3. **Self-drive rental** rates in `pricing.js`: scooters/bike `Rs. 2,000–2,500` one day / `Rs. 1,500–2,000` weekly; tuk-tuk `Rs. 5,000` one day / `Rs. 4,500` weekly; car/van entries request a custom price. Founder supplied no replacement, and the meaning of “weekly” needs confirmation.
4. **One-day tours** `$120/$84/$117/$84` and **round tours** `$180/$180/$250/$368/$514/$734` in `pricing.js`, with some values copied into `schemaData.js` questions. These are separate itineraries, not the new daily driver/guide products; inclusions and current validity need a separate commercial review.
5. **Unmapped vehicle types**: Honda Shuttle and Honda Vezel, and whether Toyota Voxy will be added to the actual fleet. No class price was guessed. No new capacity or luggage claims were created; older fleet copy is pre-existing and not newly verified.
6. **Excess distance** above 150 km/day and **reverse direction** airport pricing are not supplied. No rate was invented.

## Verification and preservation

- `node --test scripts/commercial-data.test.mjs`: 5 passing tests covering all 24 outbound route/class/pickup combinations, inbound price preservation, daily product separation, 150 km/day, formatting and canonical WhatsApp contact.
- After W1, `npm.cmd run build` retains the same sandbox config-loader error. Equivalent three build phases succeed using `node scripts/generate-sitemap.mjs`, `node node_modules/vite/bin/vite.js build --configLoader runner`, and `node scripts/apply-prerendered-home.mjs`. Vite transforms 2,105 modules; existing large-chunk warning remains.
- `npm.cmd run seo-audit` retains the baseline 1 BLOCKED registry mismatch and 1 WARNING long titles; no new SEO failure. ESLint cannot run because it is not installed; no lint script exists.
- Public `https://www.skytaxisrilanka.com/` was reachable during the audit and showed the expected home content, WhatsApp entry point, and external AI planner link. The browsing service could not read the live `/airport` route; responsive route QA below used the local production preview.
- Preview checked home, `/airport`, `/one-day-tours`, `/vehicle-rentals` at 390, 768, 1280 px with Puppeteer. No page errors or document-width overflow; existing titles/H1s and navigation present. After the direction correction, the inbound `/airport` cards continue to show their original USD amounts. Visual checks do not substitute for a full translation audit.
- URLs, titles, descriptions, H1s, canonicals, JSON-LD, sitemap/robots, internal links, i18n architecture, AI planner, booking, WhatsApp behavior, styling and page composition: **no intentional changes**. No fake discount, availability, capacity or booking confirmation was introduced.

## Changed files and future boundary

- `src/data/pricing.js`: extend existing model with founder outbound transfer, pickup, daily product and customization truth; preserve inbound published rates.
- `scripts/commercial-data.test.mjs`: focused dependency-free validation.
- This document: starting-state audit, inventory, ambiguities and verification record.

W2–W10 remain deferred: W2 universal WhatsApp and Quote Engine; W3 airport/transfer conversion; W4 Private Driver; W5 Chauffeur Guide; W6 homepage; W7 customization/journey; W8 trust/reviews/cross-sell; W9 analytics/ads; W10 SEO/performance/mobile launch review. **Next milestone: W2 — SKY Universal WhatsApp + Quote Engine.**
