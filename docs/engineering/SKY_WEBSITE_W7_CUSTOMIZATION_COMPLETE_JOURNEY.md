# W7 — SKY Customization + Complete Journey

## Verified starting state and audit (recorded before implementation)

Repository: `travel-website`, branch `main`, accepted W6 HEAD `b556e2ad3075436ea13c70a8e4e57a462196a555`. Tracked files were clean; pre-existing `.claude/`, `nul`, and 24 untracked travel JPGs remain user work. W1–W6 engineering notes and the relevant source were read. Baseline W1–W5 tests: 32/32; W6 browser QA: 84 checks; runner build: 2,116 modules. Normal Windows build fails at the known Vite config-loader access step before application compilation. SEO baseline: one existing registry mismatch, 37 long titles, 98 sitemap URLs, zero static broken links. Production-preview checks of `/booking`, `/contact`, `/tours`, and `/ai-trip-planner` at 390/1280 px showed one H1, a self-canonical, no horizontal overflow, and no runtime errors on each.

| Existing surface | W7 classification | Finding |
| --- | --- | --- |
| `/booking` + `BookingForm` | Leave alone; unsuitable to extend | Existing booking lead goes to Supabase best effort and opens WhatsApp. Name, phone, pickup, and drop-off are required; trip type defaults to Airport transfer. This would force guesses and mix a loose journey inquiry with booking semantics. |
| `bookingContext`, `buildBookingMessage`, `bookingSubmission` | Leave alone | Useful for existing booking requests, but neither a source of journey truth nor a safe W7 persistence layer. |
| `/contact` + `ContactForm` | Link/leave alone; unsuitable to replace | General contact needs name, contact method, and message. Contact cards prefill the existing booking form. Replacing it would damage a general-purpose path; adding another full form there would create competing requests. |
| W6 Home final CTA | Extend with one restrained W7 link | Existing W2 general inquiry and booking-form buttons remain. Add a route for a multi-stop customer who does not know the product yet. |
| `/ai-trip-planner` + external SKY AI | Link | AI drafts route ideas, with no price/availability/booking authority. A small link can offer a human journey request without a data handoff. |
| W2 `COMPLETE_JOURNEY` | Reuse and minimally extend | Existing message has Dates, Travelers, Route, optional notes, and optional Private Driver/Chauffeur Guide/Help Me Choose preference. It lacks duration, endpoints, vehicle preference, airport need, and existing-itinerary context. Other W2 intents stay intact. |
| W2 `GENERAL` | Leave alone | Suitable for open questions; too unstructured for a multi-stop journey request. |
| W3 Airport quote | Leave alone | Direction, pickup option, and class pricing are specialist transfer details. W7 only asks whether airport pickup is part of the larger trip. |
| W4 Private Driver quote | Leave alone | Already supports daily transport-specific dates, days, route, and class preference. W7 may record it as a nonbinding preference. |
| W5 Chauffeur Guide quote | Leave alone | Already handles the distinct guided product and normal five-plus-day context. W7 must not infer it from duration or claim guiding credentials. |
| `/tours`, `/one-day-tours`, `/round-tours` | Link/leave alone | Existing catalog, modal, `TOUR`, and `CUSTOMIZE_TOUR` messages remain useful. A restrained entry point from tour discovery can lead to the broader cross-service request. |
| `/5-day-sri-lanka-tour` | Link | Existing itinerary and request/AI actions stay; one optional route to W7 can pass only this known itinerary identity. |
| Destination selection UI / Google Places | Do not recreate | Booking uses Places for pickup/drop-off. W7 needs a simple unvalidated route textarea, no map, geocoding, or inferred travel calculation. |

## Architecture decision (recorded before implementation)

Create exactly one dedicated route, `/custom-journey`, for one lightweight structured WhatsApp inquiry. It will use local React state, a short single-page form, a visible review summary, and the existing W2 `COMPLETE_JOURNEY` message/link builder. It will not use Supabase, create a trip record, or treat WhatsApp opening as submission success. This route has a distinct cross-service inquiry purpose from `/booking`, tour catalogs, product quote pages, Contact, and SKY AI. The route will be a CORE conversion page with a self-canonical and targeted prerender snapshot; no keyword cluster or competing product Offer schema is needed. The name describes the request, not a priced “Complete Journey” product. This is the website inquiry bridge, not the separate Travel OS Journey Layer.

## Product boundary and customer flow

`/custom-journey` is a request for human review, not a booking, price quote, confirmed itinerary, saved trip, account, CRM record, or Travel OS Journey Layer. A customer enters from Home, Tours, the five-day itinerary, or the AI Planner information page; supplies whatever they know; reviews the exact WhatsApp message; and opens WhatsApp to ask SKY for suitable options and a current quote. SKY discusses the service and the customer confirms later. Existing product quotes and `/booking` remain available through links. The page has one form, no stepper, no persistence, no provider matching, and no payment or availability state.

## Field model and uncertainty

Only **one meaningful journey detail overall** is required. The default service preference alone does not count. The form does not require a date, route, service, or vehicle. Blank dates, travelers, and route appear as editable `___` in the W2 message; other blank optional fields are omitted. Values are customer requests or preferences, never verified inventory or assignments.

| Field | Quoting purpose | Required / unknown | Validation |
| --- | --- | --- | --- |
| Requested start date | Timing context | Optional; blank stays unknown | If supplied, a real ISO calendar date; no availability or future-date inference |
| Requested duration (days) | Trip length | Optional; blank omitted | Positive whole number if supplied |
| Travelers | Group size | Optional; blank remains `___` | Positive whole number if supplied; no capacity mapping |
| Starting location | Pickup/route context | Optional; blank omitted | Free text, 120 characters in UI |
| Places / route idea | Approximate destinations | Optional; blank remains `___` | Free text, 500 characters in UI; no geocoding or distance calculation |
| Ending location | Drop-off/route context | Optional; blank omitted | Free text, 120 characters in UI |
| SKY itinerary idea | Existing tour context or customer reference | Optional; blank omitted | Free text, 160 characters in UI; only the known five-day slug is accepted from the URL |
| Main service preference | Helps the human route inquiry | Defaults to **Help Me Choose**; can remain uncertain | One of Help Me Choose, Airport Transfer, Private Driver, Chauffeur Guide, Tour / Itinerary |
| Vehicle preference | Customer's preferred class | Optional blank means not sure | Existing W1/W4 names only: Sedan, Mini Van, KDH Van |
| Airport pickup needed | High-level airport need alongside a wider trip | Optional blank means not sure | Yes or No if supplied |
| Notes / requested changes | Constraints, pace, or tour edits | Optional; blank omitted | Free text, 500 characters in UI |

A journey can contain airport pickup plus a Private Driver preference, but this is one inquiry, not a bundle or cart. Neither duration nor traveler count selects a service, guide, vehicle, or availability. Place names remain unverified text. The date is requested, not available. Airport Yes does not trigger W3 pricing, meeting-point selection, or an airport booking. No maps, Places API, route optimization, or mileage calculation were added.

## Existing itinerary and related products

The existing five-day itinerary links to `/custom-journey?itinerary=5-day-sri-lanka-tour`; only that allowlisted slug preloads its title. Customers can state requested changes in Notes. Unknown or forged itinerary query values are ignored. There is no itinerary editor, saved state, or automatic repricing. `/tours` links to the broader request while its catalog and `TOUR`/`CUSTOMIZE_TOUR` paths remain. W3 Airport, W4 Private Driver, and W5 Chauffeur Guide retain their specialist quote forms, existing pricing/caveats, and service identities. The W7 page links to all three; its service choice is explicitly a **preference**, not the final service. The W6 Home service chooser and final CTA remain; only a small link in the final CTA adds this path. The AI Planner page links to W7 without importing an AI output or claiming that an AI route is confirmed. The external SKY AI link and authority boundary remain intact.

## Commercial truth and message architecture

W1 is the commercial data source. W7 displays **no** Complete Journey starting price, package total, days-times-rate formula, currency conversion, or >150 km rate. It does not display W1 product starting prices on the new page. Human review determines current suitability and quote; itinerary changes have no claimed price effect.

W7 converts the validated draft to the existing W2 `COMPLETE_JOURNEY` intent through `toCompleteJourneyQuote` and `buildWhatsAppMessage`; `buildQuoteWhatsAppLink` supplies the WhatsApp URL. W2's existing required message headings (Dates, Travelers, Route) stay, with `___` for unknowns. Only that intent gained optional Duration, Starting location, Ending location, SKY itinerary idea, extended known service choices, known vehicle preference, airport Yes/No, and a human-review closing sentence. No second message formatter, WhatsApp number, or quote channel was created. The message is visible before handoff. Opening WhatsApp is an external handoff, not proof it was sent or accepted; a fallback link remains when a popup is blocked. No real message was sent in QA.

Deterministic examples from the test model (all details synthetic):

**1. Early planner**

```text
Hi SKY 👋
I'd like a quote for my complete Sri Lanka journey.
Dates: ___
Travelers: 2
Route: Sigiriya, Kandy, Ella, Mirissa
Duration: 7 days
Service preference: Help Me Choose
Airport pickup needed: Yes
Please review my journey and let me know suitable options and a current quote.
```

**2. Private Driver preference**

```text
Hi SKY 👋
I'd like a quote for my complete Sri Lanka journey.
Dates: ___
Travelers: 2
Route: Sigiriya → Kandy → Ella → Galle
Duration: 8 days
Starting location: CMB / Colombo Airport
Service preference: Private Driver
Vehicle preference: Sedan
Please review my journey and let me know suitable options and a current quote.
```

**3. Chauffeur Guide preference**

```text
Hi SKY 👋
I'd like a quote for my complete Sri Lanka journey.
Dates: ___
Travelers: ___
Route: Cultural Triangle → Kandy → Hill Country → Yala → South Coast
Duration: 10 days
Service preference: Chauffeur Guide
Vehicle preference: Mini Van
Please review my journey and let me know suitable options and a current quote.
```

**4. Existing itinerary customization**

```text
Hi SKY 👋
I'd like a quote for my complete Sri Lanka journey.
Dates: ___
Travelers: ___
Route: ___
SKY itinerary idea: 5-Day Trincomalee, Cultural Triangle, Hill Country & Wildlife Tour
Service preference: Help Me Choose
Notes: Add Yala and remove Nuwara Eliya
Please review my journey and let me know suitable options and a current quote.
```

**5. Minimal uncertain customer**

```text
Hi SKY 👋
I'd like a quote for my complete Sri Lanka journey.
Dates: ___
Travelers: ___
Route: Ella and South Coast
Service preference: Help Me Choose
Please review my journey and let me know suitable options and a current quote.
```

## Booking, privacy, analytics, and AI boundaries

`/booking`, `BookingForm`, `bookingContext`, and `bookingSubmission` were not changed. Their required booking fields, default trip type, existing best-effort Supabase lead flow, and WhatsApp behavior retain their original meaning. W7 collects no name, phone, email, account, location permission, or tracking identifier. Its draft stays in React memory until the customer leaves or refreshes; only a known itinerary identifier can arrive in the URL. Journey details are put into the customer-visible WhatsApp link only on a valid submit. W7 adds no Supabase write, database table, analytics event, PII tracking, or AI data transfer. Existing site-level analytics architecture was not modified.

## Design, localization, accessibility, and performance

The page reuses SKY's `PageHero`, image, typography, form controls, button, color, animation, and section conventions with scoped CSS. Header, navbar, footer, Home hierarchy, and other page structures are untouched. English W7 copy lives under `journey` translation keys and the existing seven-language fallback continues; the other six languages currently show English W7 strings where untranslated. Arabic RTL layout was checked at 390 px; free-text inputs use `dir="auto"`. This translation debt is explicit.

The single form uses native labels, fieldsets/legends, date and number inputs, textareas, bounded lengths, `aria-invalid`/described errors, a live validation gate, visible message review, and keyboard-focus movement to invalid fields. The page has one H1. It lazy-loads through the existing route architecture, imports no dependency, adds no network fetch, and prerenders the one new route for direct-load metadata. Focus, popup fallback, and mobile date/textarea usability were browser tested.

## SEO, routing, and snapshots

One new CORE route `/custom-journey` was added with unique title/description, self-canonical, index/follow, breadcrumb label, sitemap inclusion, and truthful `WebPage` JSON-LD alongside existing LocalBusiness and BreadcrumbList. It has a recorded distinct-intent relationship to booking, tour catalogs, service products, and AI planning. It is not a `TaxiService` Offer or a duplicate product landing page. Existing URL paths, titles, metadata, canonicals, robots, navbar, and footer were not changed. The sitemap moved from **98 to 99 URLs**. Targeted prerender snapshots were produced for the new route and only the four existing routes with new W7 links (Home, Tours, AI Planner, five-day tour); both flat and nested snapshots were updated where the existing architecture requires them. No broad SEO rewrite or mass prerender was done.

## Verification evidence

At the accepted baseline: 32/32 W1–W5 unit tests, 84 W6 browser checks, runner build 2,116 modules, 98 sitemap URLs, zero static broken links. The normal `npm.cmd run build` reproduces the existing Windows Vite config-loader access error before app compilation; the runner loader succeeds. After W7: **41/41 unit tests** (32 existing plus nine W7), **84/84 W6 browser checks**, **149/149 W7 browser checks**, runner build **2,119 modules**, **99 sitemap URLs**, **zero static broken links**. SEO audit still reports the one pre-existing registry mismatch for privacy/terms/account-deletion/support and the same 37 long-title warnings; no new blocker or warning. The new flat/nested public and built snapshots match, and the Home prerender source matches built `index.html`.

Browser QA covered `/custom-journey` at **390, 768, and 1280 px**, Arabic RTL at 390 px, plus Home, Booking, Airport, Private Driver, Chauffeur Guide, Tours, five-day tour, and AI Planner at mobile width. It checked direct load, refresh, canonical, title, H1, JSON-LD, links, review text, generated WhatsApp href, invalid/empty state, selection state, keyboard focus, popup fallback, textarea/date input, no horizontal overflow, and no page errors. Screenshots were visually inspected at mobile and desktop widths. No real WhatsApp send or production action occurred.

The W5 responsive regression suite also passed after W7 across Chauffeur Guide, Private Driver, Driver + Guide, Round Tours, and Airport to Unawatuna at 390/768/1280 px, including Arabic RTL. It reported no failures.

| Commercial persona | Result |
| --- | --- |
| 1. First-time couple | Route, seven days, two travelers, and Help Me Choose yield a request without a forced service. |
| 2. Airport plus full trip | Airport Yes and an eight-day route coexist without W3 price or availability claims. |
| 3. Private Driver | W4 preference and Sedan are included as preferences, with no multiplied fare. |
| 4. Chauffeur Guide | W5 preference and ten days are included with no guide qualification or availability claim. |
| 5. Tour customizer | Known itinerary title and requested stop changes travel together without repricing. |
| 6. Early planner | Date can be blank and appears as `___`. |
| 7. Family | Traveler count does not choose KDH Van or assert seat capacity. |
| 8. Possible >150 km route | Route text triggers no mileage threshold or invented charge. |
| 9. AI user | AI page offers human inquiry with no AI authority or implicit data transfer. |
| 10. Booking-form user | Existing `/booking` and its Supabase-backed semantics remain available. |
| 11. Mobile user | Form, review, date control, CTA, and fallback work at 390 px without overflow. |
| 12. Privacy-conscious user | No contact identity is required on site; no journey details go to analytics or database. |

## Deferred facts and next milestone

Six non-English W7 translations remain to be authored and reviewed. Capacity mappings, availability, exact package pricing, >150 km rates, and any exchange-rate policy remain unasserted. A deeper AI plan handoff requires a separately designed and consented integration. W8 trust/reviews/cross-selling, W9 analytics/Ads, and W10 broad SEO/performance/launch are outside W7. The next milestone is **W8 — SKY Trust + Reviews + Cross-Selling** only.
