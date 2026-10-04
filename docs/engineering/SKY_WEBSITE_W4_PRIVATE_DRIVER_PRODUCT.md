# SKY website W4: Private Driver product

Audit date: 2026-10-04. Scope: existing `travel-website` only. Local implementation; no production publication.

## 1. Verified starting state

- Repository `C:\Users\LOQ\Documents\Projects\sky-taxi-project\travel-website`, branch `main`, accepted starting HEAD `01c20d30ff95dc5a1fec4055f82a07a9c7f317b4` (W3). W1 and W2 accepted predecessors remain present. Tracked files were clean; existing `.claude/`, `nul`, and 24 travel JPGs were left untracked and untouched. There was no applicable `AGENTS.md` in the website directory.
- W1/W2/W3 engineering notes and the W1 price model, W2 intents, W3 cross-sell, booking/navigation/SEO sources, and related driver pages were read before editing. Baseline tests: 17/17. Baseline runner build: 2,110 modules. Normal build: known Windows Vite config-loader access error before compilation. Baseline SEO audit: one existing BLOCKED registry mismatch, one warning for 37 long titles, 97 sitemap URLs, zero static broken links.
- Before edits, `/private-driver-sri-lanka` was rendered at 390, 768, and 1280 px, with mobile/desktop screenshots inspected. `/sri-lanka-tour-driver` and W3's `/airport-to-unawatuna` were also inspected. All had one H1, self-canonical, valid JSON-LD presence, and no horizontal overflow.

## 2. Private Driver surface audit and 3. Primary product decision

| Surface | W4 classification and finding |
| --- | --- |
| `/private-driver-sri-lanka` | **Primary Private Driver product.** Existing indexed, self-canonical URL and bespoke SKY page. Before W4, it emphasized single-day/point-to-point hire and sent multi-day travelers elsewhere. It is upgraded in place. |
| `/is-a-private-driver-worth-it`, `/private-driver-vs-rental-car` | Supporting decision/SEO pages, retained. |
| `/sri-lanka-tour-driver` | Separate, ambiguous overlap: continuous arrival-to-departure multi-day trip with one dedicated driver. Its content is Private Driver intent through W2, not the W5 guide product. Kept live and self-canonical; only misleading “single-day” references to the W4 page were corrected. |
| `/driver-guide-sri-lanka` | Existing Driver Only vs Driver + separately arranged specialist site guide comparison. It does not become W5's Chauffeur Guide product and was not rebuilt. |
| `/taxi`, `/airport`, city/airport route pages | Point-to-point taxi/transfer intent, not automatically daily Private Driver pricing. |
| `/tours`, `/round-tours`, tour detail pages | Itinerary/tour catalog intent, distinct from daily driver transport. |
| W3 priority airport pages | Existing “Continue your journey” link to `/private-driver-sri-lanka`; verified to reach the upgraded product. |
| Home and footer | Existing “Private Driver” links lead to `/sri-lanka-tour-driver`; audited, but left in place because W4 does not rewrite home/footer architecture. Their label/target alignment is part of the W10 overlap review. |

The existing `/private-driver-sri-lanka` is the W4 primary page because it targets the explicit Private Driver search intent and is already the W3 airport cross-sell destination. No replacement route, merge, redirect, or canonical change was made.

## 4. Private Driver vs Chauffeur Guide boundary

W4 defines a private vehicle plus driver for transportation, flexible stops, and customer-selected routes. Specialist historical/cultural guiding is separate and is not included in the W4 daily price. The existing `/driver-guide-sri-lanka` page describes an arranged specialist site guide; W1's USD Chauffeur Guide daily product and W2's separate Chauffeur Guide intent remain reserved for W5. No W5 USD rates or full guided-tour sections appear on W4.

## 5. Commercial data source and 6. Pricing architecture

`src/data/privateDriverOffer.js` reads W1 `privateDriverPricing` and `commercialVehicleClasses` without storing a second price object. The three daily starting rates are Sedan **LKR 25,000/day**, Mini Van **LKR 30,000/day**, and KDH Van **LKR 35,000/day**. The hero minimum is calculated from those class values, not hardcoded. `formatCommercialPrice` handles the LKR/day display. The prices are transparent starting points; W1 says the final quote depends on route, distance, and duration. No multi-day total or package price is calculated.

## 7. The 150 km/day basis and 8. Inclusions/exclusions

The hero, class introduction, and inclusion section read W1's `includedKmPerDay` and show “Up to 150 km/day included.” The page tells travelers to send a longer route for a current quote. There is no invented excess-kilometre rate, formula, or hard travel prohibition.

The included list identifies the private vehicle and driver plus W1's fuel, highway charges, parking, driver's meals, and driver's accommodation. The page separately says guest accommodation/meals, entrance/safari/activity tickets, train tickets/flights/third-party services, personal expenses, and specialist site guides are not included unless arranged. The route quote confirms the exact details. This does not imply the guest's holiday costs are paid by the driver rate.

## 9. Vehicle architecture and 10. Quote architecture

The existing photographed vehicle-card pattern now shows the three founder-priced classes. A Prius, Honda Freed, and KDH photo are explicitly tagged as **example vehicle types**, with exact model confirmed by SKY. The priced entity is the class, not the pictured model. Shuttle/Vezel do not receive a W1 price; no numeric passenger or luggage capacities are published. Native buttons toggle one preferred class, expose `aria-pressed`, visible selected wording, and focus. The choice can be cleared.

All primary-page quote links use W2 `buildQuoteWhatsAppLink` with `PRIVATE_DRIVER`. The page supplies no fabricated dates, days, traveler count, starting location, or destinations. The hero, route cards, class-area CTA, and closing CTA all gain `Vehicle preference:` only after selection; it is never an assignment/reservation. W2's editable prompts are the small quote assist. No pre-WhatsApp form, multi-step builder, payment, account, API, or W7 journey system was introduced.

## 11. Example journey and 12. How It Works

The explicitly illustrative route is **Airport / Colombo → Sigiriya → Kandy → Ella → South Coast → Galle**. It reuses existing destination concepts. The page calls it an example, not a fixed tour, guaranteed itinerary, or quoted total.

The five steps are share dates/days/start/destinations; choose a preferred class or ask for help; receive SKY's route-specific quote; confirm after review; receive driver/vehicle arrangements before the confirmed service. Opening WhatsApp never confirms a booking or assigns a driver.

## 13. W3 cross-sell continuity and 14. Tour Driver overlap

W3's airport “Continue your journey” link still points to `/private-driver-sri-lanka`; QA followed it and found the W4 price/product hero. The airport pages and their outbound/reverse pricing were not edited. `/sri-lanka-tour-driver` remains for a continuous arrival-to-departure journey with one dedicated driver. It uses the same W2 Private Driver intent, so keyword/product overlap is real now that W4 also covers multi-day custom routes. W4 corrects only its “Private Driver (single-day)” link and related FAQ/intro wording. The SEO registry marks this pair as **potential overlap for W10 review**, without changing either URL or canonical.

## 15. I18N and 16. Accessibility

The seven-language context and Arabic RTL shell remain. The primary page was already English-only; new commercial copy follows that convention while deliberate translations remain staged. Arabic RTL was loaded locally at 390 px with no overflow and all three class cards present. Scoped CSS uses logical inline positioning/padding. Vehicle controls are keyboard-operable buttons with `aria-pressed`, visible selection text, and focus; links have visible focus. There are no nested controls. Mobile cards stack and retain usable tap targets. The existing bottom control remains; W4 adds no second sticky bar.

## 17. Analytics boundary and 18. SEO preservation

W4 adds no new analytics event or PII payload. Existing guarded analytics elsewhere remain. W9 should later distinguish quote-link clicks from messages sent and confirmed leads, using non-PII signals.

No URL, title, meta description, H1, canonical, sitemap, robots, navbar, footer, home structure, booking/Supabase, AI planner, or deployment setting changed. The existing Private Driver description remains truthful for daily hire, even though it does not advertise the new multi-day use case. Existing FAQ JSON-LD answers were aligned with the corrected visible Private Driver/Tour Driver FAQs; no price, availability, rating, or review offer was added to schema. The SEO registry's planning-only cannibalization note was changed from “resolved different intent” to “potential overlap pending W10.” Tour Driver metadata remains unchanged. The sitemap still has 97 URLs. The two routes' committed `public/` prerender snapshots still contain the older body/FAQ copy; W4 did not regenerate or republish SEO snapshots under the milestone rule. Reconcile those snapshots in the W10 launch gate before deployment.

## 19. Tests and 20. Build evidence

- `node --test scripts/commercial-data.test.mjs scripts/whatsapp-quote.test.mjs scripts/airport-conversion.test.mjs scripts/private-driver-product.test.mjs`: **24/24 passing** (W1 5, W2 6, W3 6, W4 7). W4 checks three prices and derived minimum, 150 km/day, five W1 inclusions, no excess-rate formula, class separation, Guide/USD separation, W2 unknown/demo route/preference semantics, JSX truth boundaries, W3 cross-sell, and Tour Driver continuity.
- Normal `npm.cmd run build`: same pre-existing Windows Vite config-loader access failure before application compilation; its sitemap generation reports 97 URLs. `node node_modules/vite/bin/vite.js build --configLoader runner` succeeded with **2,112 modules** versus W3 baseline 2,110; the pre-existing large-chunk warning remains. Existing prerendered home snapshot was applied to local `dist` afterward. No dependency or runtime pricing service was added.
- `npm.cmd run seo-audit`: unchanged one BLOCKED registry mismatch and one WARNING for 37 long titles, zero static broken links. The advisory static-inbound list fell from 20 to 19 because the W4 page now contains a literal `/airport` link; this is not a new issue. W3's responsive QA also passed after W4.

## 21. Visual QA

Before screenshots of the Private Driver hero were taken at 390/768/1280 px and inspected at mobile/desktop. After screenshots of the hero, vehicle cards, inclusion cards, example journey, and process were inspected at 390/768/1280 px. `scripts/w4-responsive-qa.mjs` checked `/private-driver-sri-lanka`, `/sri-lanka-tour-driver`, `/airport-to-unawatuna`, and unaffected `/taxi` at all three widths: 12 combinations. It checked H1, meta description, self-canonical, parseable JSON-LD, W1 amounts/inclusions, example/process counts, footer/bottom control, overflow, runtime errors, default and selected W2 hrefs, keyboard selection/clearing, W3 cross-sell navigation, and Arabic RTL. All passed with no overflow or runtime errors. QA inspected hrefs only; no WhatsApp message was sent.

## 22. Commercial persona QA

1. Couple with a seven-day route: multi-day transport, daily minimum, route customization, 150 km/day, and quote path are explicit.
2. Family/group: Mini Van and KDH daily rates are clear without an unverified capacity promise.
3. Custom Sigiriya → Kandy → Ella → Mirissa → Galle route: example makes custom stops understandable; W2 Destinations prompt accepts their own route.
4. Day beyond 150 km: wording requests SKY route review, with no invented extra-km rate.
5. Historical/cultural guiding: Private Driver excludes specialist guiding; the existing Driver + Guide page remains the separate route.
6. Airport traveler: W3's Unawatuna cross-sell opens the W4 multi-day product at its derived daily price.
7. Price-conscious traveler: real W1 class prices are visible without a fake discount or availability claim.

## 23. Unresolved items and 24. W5 recommendation

No founder rate exists for distance above 150 km/day. Exact vehicle assignment, some fleet-class mappings, and numeric capacities remain unverified. New English W4 copy needs deliberate translation. The Private Driver/Tour Driver SEO overlap, older prerendered body/FAQ snapshots, and existing home/footer “Private Driver” links to the Tour Driver page require W10 evidence-based review; no consolidation or snapshot regeneration was performed. The W1 Chauffeur Guide USD product and separate W2 intent remain for **W5 — SKY Chauffeur Guide Product**. No W5–W10 implementation was included in W4.
