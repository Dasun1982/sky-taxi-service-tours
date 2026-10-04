# SKY website W5: Chauffeur Guide product

Audit date: 2026-10-04. Scope: existing `travel-website` repository. Local implementation only; no production publication.

## 1. Verified starting state

Repository `C:\Users\LOQ\Documents\Projects\sky-taxi-project\travel-website`, branch `main`, accepted W4 HEAD `2317218fac99ce19708658dd2e63860e209992f3`. W1–W4 commits and engineering records were verified. Tracked files were clean; existing `.claude/`, `nul`, and 24 travel JPGs were untracked and untouched. No applicable `AGENTS.md` was found. Baseline W1–W4 tests: 24/24. Baseline normal build: known Windows Vite config-loader access error before compilation. Runner build: 2,112 modules. Baseline SEO: one pre-existing BLOCKED registry mismatch, one warning for 37 long titles, 97 sitemap URLs, zero static broken links.

## 2. Guide-related surface audit

| Surface | Classification and observed meaning |
| --- | --- |
| `/private-driver-sri-lanka` | Private Driver. W4-priced LKR daily vehicle and driver, transport-first, including custom multi-day routes; explicitly excludes specialist guiding. |
| `/sri-lanka-tour-driver` | Private Driver / ambiguous keyword overlap. One dedicated driver across an arrival-to-departure trip; W2 Private Driver intent, no W1 Chauffeur Guide USD prices or guiding promise. |
| `/driver-guide-sri-lanka` and service data | Driver + separate guide arrangement. Driver Only or driver plus a specialist local guide arranged at sites, subject to availability. Existing page mentions licensed specialist guides; this claim was not expanded or transferred to W5. |
| `/tours`, `/round-tours`, `/5-day-sri-lanka-tour`, duration tour pages | General tour discovery, guided-tour/package or itinerary reference depending on page. Catalog prices and inclusions are their own offers; none is the W1 daily Chauffeur Guide product. |
| `/sri-lanka-private-tours`, `/sri-lanka-round-tours` | Supporting/discovery pages with existing canonicals to hubs; not a Chauffeur Guide product. |
| Home, footer, tour cards/modals, supporting SEO pages | Existing acquisition and itinerary links. No product-specific W1 USD Chauffeur Guide surface was present. |

Before editing, local production-preview screenshots of Private Driver, Tour Driver, Driver + Guide, Tours, Round Tours, and the 5-day tour were captured at 390 and 1280 px. They each had one H1, expected canonical, and no horizontal overflow.

## 3. W5 page strategy and 4. One new route decision

No existing indexed route accurately represents W1's guided private multi-day daily product. Recasting `/driver-guide-sri-lanka` would erase its separate specialist-guide arrangement. Recasting Private Driver or Tour Driver would silently add guiding to transport-first services. Recasting a tour catalog/detail page would confuse its existing itinerary/package price with W1 daily prices. W5 therefore creates exactly one new route: `/chauffeur-guide-sri-lanka`. It follows existing lazy route, metadata, SEO registry, schema, sitemap, and SKY visual conventions. No existing URL, redirect, or canonical was changed.

## 5. Product definition, 6. Private Driver distinction, and 7. Driver + Guide distinction

W5 is private multi-day vehicle travel with driving and guiding-oriented support for destinations along a flexible route. It is normally best suited to five or more days, with shorter inquiries still possible. W4 Private Driver is flexible transport without specialist guiding and remains priced in LKR. Existing Driver + Guide means a private driver with a separately arranged specialist site guide where requested. W5 does not claim the same regulatory credentials or a separate site guide automatically.

## 8. Commercial source, 9. Pricing, and 10. Currency separation

`src/data/chauffeurGuideOffer.js` derives from W1 `chauffeurGuidePricing`, `commercialVehicleClasses`, and `tourCustomizationPolicy`; no second numeric price table is stored. Sedan **$69/day**, Mini Van **$79/day**, KDH Van **$89/day**; the hero minimum **From $69/day** is calculated. W4 remains **LKR 25,000/30,000/35,000 per day**. No FX conversion, multiplied package total, fake discount, scarcity, or guaranteed availability was introduced.

## 11. Five-day context and 12. The 150 km/day basis

The page derives normal duration from `normallyMinDays` and says five days or more is normally ideal, while explicitly inviting another-duration inquiries. No technical minimum or blocked quote path exists. W1's up-to-150-km/day inclusion appears in hero, vehicle pricing context, and inclusions. Longer days are sent to SKY for a current quote; no extra-km rate or hard travel ceiling was invented.

## 13. Inclusions and exclusions

The product includes private vehicle and chauffeur-guide service plus W1 guide meals, guide accommodation, fuel, highway charges, parking, and up to 150 km/day. Guest accommodation/meals, attraction/safari/activity tickets, train/flights/third-party services, and personal expenses are outside the displayed daily rate unless separately arranged. The page explicitly says the rate does not pay for all guest holiday costs.

## 14. Customization and no-fee semantics

W1 says itinerary changes have no separate customization/design fee. W5 explains this while saying the final travel quote can change with route, distance, duration, vehicle class, and service requirements. It does not promise unlimited price-neutral changes.

## 15. Vehicle architecture and 16. W2 quote architecture

The three founder-priced classes reuse W4's accessible card pattern. Prius, Freed, and KDH imagery is labelled as example type; SKY confirms the exact vehicle. Shuttle/Vezel have no assigned class price. No new capacity numbers were asserted. One optional, clearable choice is sent as `Vehicle preference:` through W2 `CHAUFFEUR_GUIDE`; it is a request, not a reservation. W2 leaves arrival date, days, travelers, and places as editable prompts until supplied. No new message engine or pre-WhatsApp form was created.

## 17. Existing itinerary integration, 18. Example journey, and 19. How It Works

The page links to the real `/5-day-sri-lanka-tour` and `/round-tours` as planning references. An optional W2 note names the 5-day itinerary as a starting point, without inheriting that tour's price. The illustrative W5 route is Colombo / Airport → Sigiriya → Kandy → Nuwara Eliya → Ella → Yala → South Coast → Galle. It is not a fixed package, guaranteed duration, or total. Six process steps cover itinerary choice, vehicle preference, route customization, route-specific quote, customer confirmation, and travel details. Opening WhatsApp never confirms a booking.

## 20. Credential and language truth boundaries

W5 asserts no guide licence, certification, government approval, specific guide language, professional historian status, or attraction-entry guiding promise. Existing Driver + Guide copy does mention licensed specialist local guides for that separate service; W5 does not adopt the claim. Verification of W5 provider credentials/languages remains open.

## 21. I18N and 22. Accessibility

The seven-language shell and Arabic RTL remain. New page product copy is English, following the existing English fallback convention; deliberate translations are staged. RTL at 390 px had no overflow. Vehicle selectors are native buttons with `aria-pressed`, visible selected text, keyboard activation/clear, focus styles, and usable touch targets. Links and heading order remain semantic; no nested controls or second sticky CTA were introduced.

## 23. SEO/routing preservation and 24. Analytics boundary

One new route, page title/description, registry entry, breadcrumb label, truthful `Service` JSON-LD, and generated sitemap URL were added. This schema carries no price, Offer availability, rating, review, inventory, or licence claim. Existing URLs, metadata, canonicals, JSON-LD, navbar, footer, homepage structure, robots, and deployment settings remain unchanged. The new registry entry flags potential keyword overlap with Tour Driver and Driver + Guide for W10 review. The committed `public/` prerender snapshot convention was not regenerated under the no-republication rule; this new route uses the site's existing SPA fallback and should be reviewed at the W10 launch gate. Existing analytics remain; W9 can later measure W5 quote clicks without sending dates, destinations, or message text to analytics.

## 25. Tests and 26. Build evidence

- `node --test scripts/commercial-data.test.mjs scripts/whatsapp-quote.test.mjs scripts/airport-conversion.test.mjs scripts/private-driver-product.test.mjs scripts/chauffeur-guide-product.test.mjs`: **32/32 passing** (W1 5, W2 6, W3 6, W4 7, W5 8). W5 tests cover exact prices/derived minimum, USD/LKR separation, normal duration, distance/inclusions, customization truth, product/vehicle/credential separation, W2 default and selected quotes, itinerary references, routing, and authority language. W4 test was narrowly updated to permit the new W5 discovery link while still barring W5 prices/credentials from W4.
- Normal `npm.cmd run build`: same pre-existing Windows Vite config-loader access error before app compilation; sitemap phase produced **98 URLs** from 109 registry entries. Runner `vite build --configLoader runner`: succeeded with **2,115 modules**, versus W4 baseline 2,112. Existing large-chunk warning remains. Existing home prerender snapshot was applied to local `dist` afterward.
- SEO audit after W5: one existing BLOCKED mismatch (privacy, terms, account-deletion, support), one warning (37 long titles), 98 sitemap URLs, zero static broken links. This is the baseline result plus exactly one registered W5 route/metadata/sitemap URL.

## 27. Visual QA

`scripts/w5-responsive-qa.mjs` verified Chauffeur Guide, Private Driver, Driver + Guide, Round Tours, and the W3 Unawatuna airport route at 390/768/1280 px: 15 page-width combinations. It checked H1, metadata, canonical, valid JSON-LD, footer/bottom control, no overflow/runtime errors, W1 content, W2 links, keyboard vehicle choice/clear, W4 LKR preservation, Driver + Guide semantics, W3 airport path, internal W4→W5 navigation, refresh, and Arabic RTL. The QA only inspected WhatsApp hrefs. Hero, vehicles, inclusions, itinerary, example journey, process, and RTL screenshots were captured and visually inspected. The new hero uses the existing photographic SKY design. No real WhatsApp message was sent.

## 28. Nine commercial personas

1. Seven-day couple: understands guided private journey, $69/day starting point, 150 km/day, customization, and quote path.
2. Family/larger vehicle: can compare $79 Mini Van and $89 KDH without unverified capacity.
3. Existing-itinerary traveler: can open the real 5-day itinerary and ask about using it as a W5 starting point, without inheriting its package price.
4. Custom-route traveler: can send Sigiriya → Kandy → Nuwara Eliya → Ella → Yala → Galle; no separate design fee, route-specific travel quote.
5. Three-day traveler: can inquire despite the normal five-plus-day positioning.
6. Over-150-km traveler: is told to send the route for review; no invented excess rate.
7. Private Driver customer: sees that W4 is transport-focused and priced separately.
8. Credential-conscious customer: sees no unsupported W5 licence or language claim.
9. Price-conscious customer: sees all three W1 USD daily rates without false discount framing.

## 29. Unresolved items and 30. W6 recommendation

There is no supplied rate above 150 km/day; W5 guide credentials and languages need business verification; exact fleet assignment/class mapping and numeric capacities remain unverified; English copy needs deliberate translation. W10 should examine keyword overlap, existing Driver + Guide licensed claims, and prerender/SEO delivery before launch. The W5 daily product is separate from existing tour catalog prices. No W6–W10 work was implemented. **Next milestone: W6 — SKY Homepage Commercial Upgrade.**
