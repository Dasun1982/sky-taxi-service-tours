# SKY website W3: airport and transfer conversion

Audit date: 2026-10-04. Scope: existing `travel-website` only. This is a local conversion upgrade, with no publication.

## 1. Verified starting state

- Repository: `C:\Users\LOQ\Documents\Projects\sky-taxi-project\travel-website`; branch `main`; accepted starting HEAD `da9d5b1859ed3eb175147b9c4c80c405f830d2e6` (W2). W1 was `3a39a07fd045a5a4b890a85b4532f37deb2db937`.
- Tracked files were clean. Existing untracked `.claude/`, `nul`, and 24 travel JPGs were not modified or staged. No applicable `AGENTS.md` was present. W1 and W2 engineering notes were read.
- Baseline W1/W2 tests: 11/11. Normal build failed before application compilation in the known Windows Vite config loader (`Cannot read directory ../../../..: Access is denied`); `--configLoader runner` succeeded with 2,107 modules. Baseline SEO audit: one existing BLOCKED registry mismatch (`privacy`, `terms`, `account-deletion`, `support`), one existing WARNING (37 long titles), zero static broken links.
- Before edits, `/airport` and the four priority pages were loaded at 390, 768, and 1280 px. Mobile screenshots for all five and a desktop Galle screenshot were visually inspected. Existing route H1s, hero imagery, SKY cards, footer, and bottom control were established as the design baseline.

## 2. Airport architecture audit

- `/airport` is a bespoke multilingual hub (`AirportTransfers.jsx`) with hero, benefits, reverse-direction Unawatuna/Weligama-to-airport USD vehicle cards, custom transfer CTA, and airport destination links. The cards consume the older `airportTransferPricing` through `findAirportPricing` and fleet entries from `vehicles.js`.
- `/airport-to-galle`, `/airport-to-unawatuna`, `/airport-to-weligama`, and `/airport-to-mirissa` are four separate bespoke React pages. Each had a `PageHero`, route content, photographed fleet examples, a closing CTA, FAQ, and related routes. None previously displayed W1 outbound pickup/class prices. Galle had W2 airport-intent messages; the other three had bespoke one-line WhatsApp messages. Their existing metadata, JSON-LD, images, FAQs, H1s, and route slugs were preserved.
- Other CMB route pages use `AirportTransferLanding` or other direct components; they have no founder-authoritative W1 outbound rate and were not repriced.
- W1 `pricing.js` is the sole authority for the four outbound route groups, pickup definitions, vehicle classes, and calculations. W2 `whatsappQuote.js` and `whatsapp.js` remain the message and URL layers. The booking form/Supabase and AI planner remain separate.

## 3. Priority routes and 4. Route-to-commercial-data mapping

| Existing page | Bespoke component | W1 product ID | Starting price |
| --- | --- | --- | --- |
| `/airport-to-galle` | `AirportToGalleTaxi.jsx` | `cmb-galle-unawatuna` | LKR 14,000 |
| `/airport-to-unawatuna` | `AirportToUnawatunaTaxi.jsx` | `cmb-galle-unawatuna` | LKR 14,000 |
| `/airport-to-weligama` | `AirportToWeligamaTaxi.jsx` | `cmb-weligama-mirissa` | LKR 16,000 |
| `/airport-to-mirissa` | `AirportToMirissaTaxi.jsx` | `cmb-weligama-mirissa` | LKR 16,000 |

`airportConversion.js` explicitly maps existing page slugs to W1 destination IDs. It requires `commercialRoute.origin === "CMB"`, calls `getAirportTransferPrice` for all three classes and both pickup arrangements, then derives the minimum amount and its exact vehicle/pickup basis. Unknown, reverse, or unpriced slugs return `null`. No W1 amount is duplicated in route JSX.

## 5. Direction handling

The W1 offers are **CMB to destination** in LKR. `/airport`'s pre-existing USD cards are **Unawatuna/Weligama to airport**. The hub now places four clearly marked outbound discovery links before those cards and a direction note immediately above them. Their USD values and `findAirportPricing` source remain untouched. No price is converted across currencies or directions. Deterministic tests reject reverse slugs and assert representative original USD card amounts.

## 6. Hero and price architecture

Each existing `PageHero` retains its H1, copy, image, and route links. `AirportRouteHeroPrice` adds a compact “From LKR …” statement using the computed minimum, names the precise current basis (Sedan, Outside Meeting), and says the final quote is confirmed before booking. The hero's primary action now asks for a transfer quote. No new route or duplicate landing page was created.

## 7. Pickup option architecture

`AirportRouteOffer` shows two real, separately selectable arrangements. **Arrival Lobby** means the driver meets the guest inside arrivals with a name sign. **Outside Meeting** means the guest exits and meets the driver near the airport post office, approximately 50 metres from the exit. The latter has a lower price because the arrangement differs; no sale, promotion, strikethrough, or urgency language is used. Neither is selected by default. Semantic buttons expose `aria-pressed`; clicking a selected button again clears it. Only an explicit selection is passed to W2.

## 8. Vehicle presentation

The same shared offer displays Sedan, Mini Van, and KDH Van as three class cards. Each shows both pickup prices from W1. Galle and Unawatuna: Sedan 16,000/14,000; Mini Van 20,000/17,000; KDH Van 21,000/18,000 (Arrival Lobby/Outside Meeting, LKR). Weligama and Mirissa: Sedan 18,000/16,000; Mini Van 21,000/18,000; KDH Van 23,000/20,000. Honda Freed/Toyota Voxy and Toyota KDH are identified as types; the exact model is confirmed with SKY. A class selection is only a **vehicle preference** in WhatsApp, never a reservation. Existing photographed fleet cards remain as separate examples; unverifiable numeric passenger/luggage badges were removed from the four priority pages. Shuttle, Vezel, and other fleet examples do not inherit a W1 class price.

## 9. Inclusions and 10. How it works

The offer says “Included in your transfer”: private vehicle and driver for the defined CMB route, W1's “Transport operating costs for the defined transfer,” and the pickup arrangement eventually confirmed with SKY. Extra stops, waiting, and special requests are reviewed in the quote; accommodation, meals, and activities are separate. W1 does not break the outbound transfer cost into an authoritative fuel/highway/parking promise, so W3 does not independently promise those items. The existing Galle FAQ specifically says highway ticket costs are confirmed in the WhatsApp quote.

The five steps are send travel/flight/traveler/luggage/pickup details; receive the current quote; confirm the transfer with SKY; receive driver and vehicle details before confirmed pickup; meet according to the confirmed arrangement. Opening WhatsApp does not assign a driver or confirm a booking.

## 11. W2 quote integration and 12. CTA changes

The selection-linked CTA calls `buildQuoteWhatsAppLink` with the W2 `AIRPORT_TRANSFER` intent, known `pickup: Colombo Airport (CMB)`, the exact destination, and explicit optional pickup and vehicle selections. W2 gained one optional `Vehicle preference:` line for this intent; existing intents and general contact remain intact. Unknown date, time, flight number, arrival time, passengers, luggage, and unselected pickup remain editable `___` fields. No price or source metadata is added to customer messages. No automated QA opens or sends a WhatsApp message.

Existing hero, fleet, and closing WhatsApp actions on the three previously bespoke-message pages now use W2 airport intent with known route context. Galle's existing W2 calls now take context from the same offer mapping. Hero actions say “Get Transfer Quote to [destination]”; example fleet actions say “Ask About This Vehicle”; closing actions say “Get Transfer Quote.” The selection-linked shared CTA says “Get My Transfer Quote.” Closing text now puts quote and customer confirmation before driver details. The selection-linked CTA reuses `whatsapp_clicked` with only `page_source` and `service`; it indicates a click, not a sent lead, and contains no PII.

## 13. Cross-sell and 14. Mobile CTA decision

A restrained “Continue your journey” panel after the existing closing CTA links to the already-existing `/private-driver-sri-lanka` page. It neither states new daily terms nor modifies the private-driver product; W4 remains separate. The existing bottom WhatsApp/language/theme control remains the mobile floating action. A second sticky quote bar would stack controls, so none was added. The route-specific hero and in-page quote actions remain the conversion path.

## 15. I18N and 16. Accessibility

The seven-language `LanguageContext`, translations, local-storage preference, and Arabic `dir="rtl"` remain intact. New hub headings and explanatory copy use the existing `t(path, English fallback)` convention; no questionable bulk translations were invented. Bespoke route pages were already English-only, so new W3 commercial copy is English canonical while the global language/RTL shell still functions. A deliberate translation pass remains open. New CSS uses logical text alignment and list padding for RTL.

Pickup and vehicle choices are native buttons with readable selected text plus `aria-pressed`; the CTA is an anchor. Focus outlines are explicit, selection is not conveyed by color alone, and touch controls remain full-card or full-width. There are no nested buttons/links. The existing footer and bottom action bar were present in all 15 responsive checks.

## 17. SEO preservation

Existing URLs, route registry, titles, descriptions, canonicals, JSON-LD, sitemap inputs, robots, header/navbar, footer, home page, booking system, and AI planner were not edited. The normal build regenerated the same 97-URL sitemap content. H1 count remained one on every checked page. Static SEO audit remained at one pre-existing BLOCKED registry mismatch, one pre-existing WARNING for 37 long titles, and zero static broken links. Existing unresolved dynamic-link/orphan audit notices remain unverified, not new regressions. No availability, rating, validity, or price was added to structured data.

## 18. Tests and 19. Build evidence

- `node --test scripts/commercial-data.test.mjs scripts/whatsapp-quote.test.mjs scripts/airport-conversion.test.mjs`: 17/17 passing (W1 5, W2 6, W3 6). W3 covers all 24 route/class/pickup amounts, four starting prices and bases, exact direction mapping, both pickup descriptions, quote known/unknown context, explicit selection, optional vehicle preference, preserved reverse USD data, no duplicated JSX amounts, and forbidden authority/scarcity phrases.
- `npm.cmd run build`: same known Windows config-loader access error before compilation as baseline. Its sitemap generation produced the same 97 URLs.
- `node node_modules/vite/bin/vite.js build --configLoader runner`: successful production build, 2,110 modules (baseline 2,107). `node scripts/apply-prerendered-home.mjs` applied the existing home snapshot afterward. No dependency, runtime pricing API, or state library was added.
- `npm.cmd run seo-audit`: same one BLOCKED, one WARNING, zero static broken links as baseline.

## 20. Visual QA

`scripts/w3-responsive-qa.mjs` loaded `/airport` plus all four priority pages at 390, 768, and 1280 px (15 combinations), checking H1, meta description, self-canonical, JSON-LD presence, document overflow, runtime errors, footer, bottom control, correct price/offer structure, four hub links, preserved reverse USD price, route-specific W2 hrefs, no default choice, selected pickup/vehicle propagation, and visible mobile quote CTA. It also loaded the hub and Galle route in Arabic RTL at 390 px. All checks passed; measured document width was 15 px below viewport width, with no horizontal overflow or runtime errors. Before and after mobile heroes for all five pages, representative mobile offer/quote panels, and Galle vehicle grids at 768/1280 px were visually inspected. The new cards use the same white/navy/peach, round-corner, soft-shadow SKY language, without changing the site shell. QA reads links only and sends no WhatsApp message.

## 21. Commercial persona QA

1. CMB to Unawatuna solo/couple: exact route H1, LKR 14,000 basis, two pickups, three classes, and quote CTA appear before the existing narrative sections.
2. Easy arrival: Arrival Lobby explicitly says inside arrivals with a name sign, and its separate higher price is visible.
3. Price-sensitive arrival: Outside Meeting explicitly says post office about 50 metres from exit, and the lower price is explained by the different arrangement.
4. Family/group: Mini Van and KDH Van prices are visible without numeric capacity or luggage promises; traveler count remains a quote field.
5. CMB to Mirissa: its map resolves only to the Weligama/Mirissa W1 rate group, yielding LKR 16,000 starting price, not Galle's LKR 14,000.
6. Galle to CMB: it receives no W1 outbound offer; hub inbound USD cards remain separate, and no reverse Galle rate is invented.

## 22. Unresolved airport items

Reverse/inbound Unawatuna/Weligama USD prices remain the older published product pending a commercial review. No authoritative reverse Galle/Mirissa rate was provided. Other CMB destinations remain quote-led and unpriced by W1. Exact assignment of existing Shuttle/Vezel and several photographed fleet vehicles to W1 classes is unresolved. Detailed outbound inclusion treatment for fuel, highway tickets, parking, waiting, and extra stops requires founder confirmation. New W3 English copy still needs deliberate translations across the other six languages. Existing `/transport` and other broad airport claims were outside this exact-route milestone. Existing hub capacity badges were inherited and require a separate source audit; W3 added none.

## 23. Deferred W4+ and 24. Recommendation

No W4 private-driver rebuild, W5 chauffeur-guide product, W6 home rewrite, W7 journey builder, W8 trust system, W9 Ads/lead tracking, or W10 SEO launch work was implemented. Recommend **W4 — SKY Private Driver Product** as the next milestone, using the existing destination link and W1 daily-rate model while preserving W3's airport scope and direction boundaries.
