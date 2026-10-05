# SKY website W8: trust, reviews, and journey cross-selling

Audit date: 2026-10-05. Scope: the existing `travel-website` repository only. No production publication.

## 1. Verified starting state

Repository `C:\Users\LOQ\Documents\Projects\sky-taxi-project\travel-website`, branch `main`, starting HEAD `2edaa9582b11e30e1a7df2e6f9b214937fdeb375` (accepted W7). W1–W7 engineering notes and commits were present. No applicable `AGENTS.md` was found in this repository. Tracked files were clean. `.claude/`, `nul`, and 24 travel JPGs were pre-existing untracked user files and were left alone. Baseline W1–W5/W7 unit tests: 41/41; W6 browser QA: 84/84; W7 browser QA: 149/149. Baseline runner build: 2,119 modules. Normal Windows build failed before compilation at the known Vite config-loader directory access error. SEO audit: one existing registry mismatch for privacy/terms/account-deletion/support, 37 long-title warnings, 99 sitemap URLs, zero static broken links.

## 2. Complete trust and review audit; 3. evidence classification

Classes: **A** repository-backed and safe to describe as implemented; **B** plausible but real-world provenance unclear; **C** unsupported marketing claim; **D** factual product/process reassurance from W1–W7; **E** potentially outdated; **F** contradiction; **G** duplicate; **H** unsafe to amplify. Repository evidence proves an implementation or founder-supplied commercial statement, not an independent real-world event.

| Source | Evidence and class | W8 decision |
| --- | --- | --- |
| `src/data/travelData.js` three `testimonials` stories | No original review, customer identity, date, source, rating, or trip record. B/H. | Removed from active data; no quote retained. |
| `src/data/translations.js` English/Russian review stories | Translated/paraphrased versions of the same unverified stories. G/H. Other languages inherited English. | Removed both unused blocks; no translated quote published. |
| `TestimonialsSlider.jsx` and `/testimonials` | Five decorative stars, 5-star accessibility label, auto-rotation, repeat grid, generic traveler labels. C/G/H. | Removed slider, stars, cards, rotation, and labels; kept route with an explicit evidence note and factual service links. |
| Customer portraits | None tied to the three stories. A (absence). | No avatar or stock/AI face added. Existing page hero travel image is not represented as a customer. |
| External review links | Footer Google Maps **search** link and Contact Google Maps embed identify a map query, not a review source. B for business-listing identity; no direct review permalink. No TripAdvisor or Booking.com review URL found. | No review source attribution or live rating added. |
| Review/aggregate schema | No `Review`, `AggregateRating`, `reviewCount`, or `ratingValue` JSON-LD found. A (absence). | None added. `/testimonials` now uses `WebPage` rather than a misleading `TaxiService` schema. |
| LocalBusiness JSON-LD | Name, phone, email, address, Sri Lanka area, logo, and `priceRange: "$$"`. Contact values match repository config, but `$$` has no documented basis. A for contact implementation; C for priceRange. | Kept shared schema stable; flag `$$` for W10 evidence review. No new LocalBusiness claims. |
| W1 `pricing.js`, W3 airport offers, W4/W5 offer adapters | Founder-supplied route/class/direction values and product inclusions; W1–W5 tests verify use. A/D for website commercial truth; not a promise of live availability. | Reused, never copied into a new rate table. |
| W2 quote engine and W7 custom request | Canonical WhatsApp number, editable unknowns, human quote request, no booking authority. A/D. | Preserved. |
| Home six reassurance cards | Prior "Fair Prices", "Safe Travel", implied easy booking and driver/fleet quality lacked independent support. C/H; six-card layout itself is A. | Reworded all six around observable price context, options, preferences, inquiry, planning, and confirmation. |
| Airport hub hero badges/benefits | "Flight-time checking", "quick confirmation", "pickup ready", and "best fair price" implied operational certainty absent from W3. C/H. | Replaced rendered wording with pickup review, route prices, vehicle needs, direct inquiry, and quote discussion. W3 route offers themselves stayed authoritative. |
| W3 airport route offer | Direction-sensitive W1 price, lobby/outside meeting distinction, class preference, operating inclusion/exclusion, quote steps. A/D. | Preserved. Existing W3 route-to-W4 link retained. |
| W4 Private Driver | LKR daily starting rates, 150 km/day, operating costs, guest exclusions, preference/assignment distinction, quote steps. A/D. | Preserved; late secondary CTA now points to the relevant guiding product. |
| W5 Chauffeur Guide | USD daily starting rates, normal 5+ day context, 150 km/day, operating costs, guest exclusions, quote steps, no licence claim. A/D. | Preserved; added one late route-inquiry fallback. |
| W7 Custom Journey | Optional/approximate details, WhatsApp draft, explicit no-booking handoff, human quote. A/D. | Preserved unchanged. |
| Tours, one-day tours, round tours, 5-day tour | Existing catalog/itinerary context; Tours and 5-day W7 links already present. A/D for published offers; some old marketing claims are C. | One Round Tours W7 link added; no price or package rewrite. |
| Driver + Guide, Tour Driver, service data | Repeated "licensed specialist guide" and guide-arrangement statements without a licence record. B/C/G/H. Distinct from W5. | Not extended to Chauffeur Guide; W10 audit remains required. |
| About, Contact, Booking | About adjectives and 24/7 metadata are C; Contact email/address/phone are repository-consistent A/B; Booking form has distinct Supabase flow A/D. | No new credential, safety, payment, or booking claim; Booking unchanged. |
| Fleet, vehicle capacity, imagery | Existing vehicle examples and numeric capacity copy are B without independent fleet/assignment evidence; real travel imagery has source assertions in repository but no review-photo identity. | No capacity, exact model, customer portrait, or fleet guarantee added. |
| FAQ/SEO copy across older route pages | Frequent "24/7", "safe", "fair", "best", quick/guaranteed language; some Airport schema FAQs mention flight-time checking. C/E/G/H. | Recorded for W10; no mass rewrite of historical landing pages or schema. |
| Awards, years, customer/trip counts, insurance, background checks, payment security, refund policy | No supporting business records or specific policy found. A (absence); any future assertion without evidence would be H. | None introduced. |

## 4. Review provenance and 5. reviews used

The three former story titles were “Smooth airport pickup,” “Flexible private day tour,” and “Helpful local planning.” Their displayed labels were categories (“Airport transfer guest,” “South coast family trip,” “Round-trip traveler”), not names. No exact source wording, customer consent, review URL, platform, date, rating, or photo association was present. The source page called them “feedback themes,” but the star UI made them look like rated reviews. **Reviews used: zero. Reviews added: zero.** Source text was removed from live data and English/Russian translation blocks, not rewritten into purported quotes. Git history retains the prior implementation for audit. No external site was scraped or queried.

## 6. Unsupported claims and factual corrections

Corrected on W8-rendered surfaces: Home “Safe Travel,” “Fair Prices,” easy-booking implications and several unverified quality claims in six cards; Airport hub flight-time checking, ready/quick confirmation, best-price implications; unsupported five-star visual/review presentation; testimonial page metadata and schema type. Existing review route remains reachable with a transparent note. Other pre-existing claims remain documented rather than silently endorsed: 24/7 support/booking and “safe” across historical pages and metadata, Driver + Guide licensing, exact capacities, some fleet/cleanliness claims, LocalBusiness `$$`, informal “best/fair” wording, and tour/FAQ availability implications. No W8 claim asserts award, certification, insurer, payment protection, cancellation, refund, guaranteed driver, or emergency service.

## 7. Business trust strategy

The repository uses one SKY name and canonical WhatsApp contact. Contact displays the configured phone, email, and street address; Home and Footer repeat the address consistently. This is repository consistency, not independent verification of physical premises. The `/testimonials` route now states why it lacks published individual reviews and sends readers to checkable service and quote details. Google Maps search/embed is a location affordance, not review proof.

## 8. Product trust strategy

W3 supplies meeting/vehicle options and transfer inclusions; W4 and W5 supply distinct daily rates, 150 km/day, included operating costs, and separate guest expenses. In all three, a preference stays a request and SKY supplies the current route-specific quote. The main quote buttons remain more prominent than related-service links. W7 retains approximate inputs and explicitly says opening WhatsApp does not send a message or confirm a journey.

## 9. Journey trust strategy and 10. what happens next

General flow: choose a service or describe a route → send the request → SKY reviews it → discuss current quote and details → customer decides and confirms → SKY supplies travel arrangements. W3 adds confirmed meeting choice and pickup details; W4/W5 add preferred class and distance/duration review. W7 remains journey idea → human review → suitable option/current quote → customer choice. There is no instant booking, automatic assignment, inventory assertion, or bundled total.

## 11. Home trust; 12. Airport trust; 13. Private Driver trust; 14. Chauffeur Guide trust; 15. Custom Journey trust; 16. Tours trust

- **Home:** Same W6 six-card section and service chooser. Only card/icon/header copy changed; no new service grid, no review panel, no new Home cross-sell.
- **Airport:** W3 priced route pages untouched. `/airport` hub reassurance was made narrower and now offers one late Private Driver next step after price sections. Direction-sensitive inbound/outbound prices remain separate.
- **Private Driver:** W4 rates and boundaries untouched. Its final secondary CTA now offers Chauffeur Guide, after the W4 primary quote CTA and product details. The early informational link to Airport remains.
- **Chauffeur Guide:** W5 rate and credential boundaries untouched. Its final CTA retains the primary quote and Private Driver comparison; a single text link offers W7 when the route is unsettled.
- **Custom Journey:** W7 form, WhatsApp handoff, and specialist informational links were already sufficient; no edit.
- **Tours:** Tours hub, AI Planner, and 5-day itinerary already link to W7. Round Tours gained one late link from its existing customization panel. One-day tours and general SEO pages were not mass-edited.

## 17. Cross-sell matrix and 18. implemented/rejected actions

| Source | Primary job | Candidate; decision and reason |
| --- | --- | --- |
| Home | Discover four main services | No new link; W6 chooser already routes travelers. |
| Airport hub | Choose transfer/price | **Added** `/private-driver-sri-lanka` after pricing for onward private travel. |
| W3 route offers | Quote a specific CMB transfer | Existing Private Driver continuation retained; no duplicate. |
| Private Driver | Flexible daily transport | **Changed final secondary CTA** to `/chauffeur-guide-sri-lanka` for guiding-oriented travel; no upgrade price. |
| Chauffeur Guide | Guiding-oriented multi-day quote | **Added** `/custom-journey` text link for uncertain routes. Existing itinerary and Private Driver comparison retained. |
| Tours hub | Discover existing itineraries | Existing W7 route retained; no new grid. |
| Round Tours | Compare multi-day packages | **Added** `/custom-journey` from its customization panel for multi-stop requests. |
| 5-day itinerary | Request/adapt a specific route | Existing `/custom-journey?itinerary=5-day-sri-lanka-tour` retained. |
| AI Planner | Route planning | Existing W7 human handoff retained; no AI booking authority. |
| Custom Journey | One human-reviewed inquiry | Existing specialist details retained; no additional service links. |
| Booking | Existing form/submission | None; distinct Supabase semantics preserved. |
| Reviews route | Explain evidence limit and verify service detail | Three checkable paths to Airport, Private Driver, and Custom Journey, not an upsell wall or priced bundle. |

New cross-sell actions: Airport → Private Driver → “Explore Private Driver”; Private Driver → Chauffeur Guide → “Explore Chauffeur Guide”; Chauffeur Guide → Custom Journey → “Still deciding your route? Tell SKY about your journey”; Round Tours → Custom Journey → “Have several stops in mind? Describe your journey to SKY.” The reviews route’s three new service-detail links are trust navigation. Rejected: airport-plus-driver cart/bundle, LKR-to-USD “upgrade” differential, extra Home grid, Booking cross-sell, AI-generated booking, automatic itinerary-to-product assignment, and repetitive links across every SEO tour page. No product page gained more than one new related-service action.

## 19. CTA semantics; 20. commercial and price truth; 21. all-included boundary

Primary actions request a quote, open an editable WhatsApp draft, or lead to the pre-existing Booking form. The Airport hub wording now says “Request a Transfer” and “Request transfer quote.” The reviews page says a request begins a conversation. W1 is still the numeric rate source; no discount, FX conversion, upgrade delta, bundle total, >150-km formula, or availability rate was added. W3 defines transport operating inclusion for the transfer; W4/W5 list fuel/highway/parking and relevant driver/guide operating costs within 150 km/day. Guest accommodation, meals, attraction/safari/activity tickets, train/flights, and personal expenses remain separate unless discussed. W7 makes no automatic price inference.

## 22. Review/rating schema; 23. LocalBusiness schema

No Review or AggregateRating schema existed or was added. `/testimonials` changed from an inaccurate TaxiService type to a truthful WebPage type, with its updated visible metadata. Shared LocalBusiness name/contact/address stayed as before; the unsubstantiated `priceRange: "$$"` is explicitly deferred because altering shared schema would require a wider static snapshot review beyond W8.

## 24. Privacy and analytics; 25. i18n and RTL; 26. accessibility; 27. performance

No journey fields, review text, customer identity, or WhatsApp message content were added to analytics. No new event taxonomy or external review script was added. The seven-language context remains; W8 Home uses a new English translation key and English fallback in other languages. Airport and reviews copy use the established `t()` English fallback. Former English/Russian pseudo-review translation blocks were deleted; no translated quotation was represented as an original review. Deliberate W8 translations remain debt. Arabic RTL and Russian LTR at 390 px passed render/overflow checks. New actions are native anchors with meaningful text and keyboard focus; no clickable div, rotating carousel, fake star aria-label, or review trap remains. No package, new image, or external request was added. Runner build transforms 2,118 modules, one fewer than W7 after deleting the slider; the existing large-chunk warning remains.

## 28. SEO/routing and 29. design preservation

No route, slug, canonical, sitemap, robots, navbar, footer, global style, homepage architecture, or deployment config changed. One existing title/description changed for `/testimonials` to match the new content; its JSON-LD type changed to WebPage. No other title/meta or schema values were changed. The sitemap stays at 99. The review route remains linked from the unchanged Footer. Existing W6 design tokens, responsive cards, page photography, animation conventions, and primary CTA hierarchy were reused.

## 30. Tests and regression evidence

Baseline and final W1–W5/W7 suite: **41/41**. Added `scripts/w8-trust.test.mjs`: **5/5** for removed unverified review UI/data, claim wording, Airport semantics, related links/limits, W1 price and W7 authority boundaries. Combined suite: **46/46**. W6 browser suite: **84/84** before and after. W7 browser suite: **149/149** before and after. W8 production-preview suite: **301/301** checks over 11 routes at 390, 768, and 1280 px; English plus Arabic RTL and Russian LTR on Home/Airport/reviews; no runtime errors/overflow; one H1/self-canonical; price and primary CTA preservation; review schema and stars absent; booking form retained; all seven new service/trust paths followed to their destinations and focused with keyboard-capable anchors. No real WhatsApp message was sent.

## 31. Build and SEO evidence

Normal `npm.cmd run build` still stops at the known Windows Vite config-loader access error before compilation, both before and after W8. Runner `vite build --configLoader runner` succeeds with **2,118 transformed modules** (W7: 2,119); `apply-prerendered-home` succeeds. SEO before/after: same one registry mismatch, same 37 long-title warnings, zero static broken links, 99 sitemap URLs. `git diff --check` passes. The SEO audit exits nonzero because of its existing registry mismatch, not a new W8 issue.

## 32. Visual QA; 33. navigation QA

Production screenshots at 390/768/1280 px were inspected for Home reassurance, Airport next step, and reviews detail cards. Additional 390/1280 screenshots were inspected for Private Driver, Chauffeur Guide, and Round Tours final panels. Cards remain legible and the primary quote action visually leads each product panel. Mobile shows one column without horizontal overflow; desktop keeps the established panel/card proportions. The existing mobile floating control can overlay long sections while scrolling, a pre-existing layout trait; no W8 fixed control was added. Browser navigation followed all four new related-service links and all three reviews-route trust links to the correct existing URL and H1. The targeted snapshots each contain one H1, and flat/nested pairs match byte for byte.

## 34. Fifteen commercial personas

| Persona | W8 check |
| --- | --- |
| 1. First-time airport customer | Sees route prices/pickup distinction and quote before confirmation. |
| 2. Airport customer with eight-day trip | Finds Private Driver after transfer pricing; no combined price. |
| 3. Private Driver shopper | Sees LKR/day, 150 km, exclusions, primary quote, optional guiding route. |
| 4. Chauffeur Guide shopper | Sees USD/day, normal 5+ days, 150 km, no licence promise. |
| 5. Tour shopper | Tours and Round Tours provide W7 when an itinerary needs adapting. |
| 6. Custom Journey customer | Can submit an approximate route for human review; no booking. |
| 7. Review-skeptical customer | Told plainly that individual reviews are not verified; sees no stars or named quotes. |
| 8. Price-skeptical customer | Can compare W1 starting context and guest exclusions before asking. |
| 9. Privacy-conscious customer | No PII in new analytics or public review content. |
| 10. Mobile customer | 390 px cards/links fit; primary action remains visually dominant. |
| 11. Returning taxi customer | Existing taxi/Booking paths remain; no forced cross-sell. |
| 12. AI Planner customer | Existing W7 human quote path remains; AI shows no live booking authority. |
| 13. Family | Vehicle class is a preference; exact model/capacity is not promised by W8. |
| 14. Credential-conscious traveler | W5 makes no licence claim; legacy Driver + Guide claim flagged for evidence review. |
| 15. Customer ready to confirm | Inquiry and quote precede explicit customer agreement; W7 does not send or confirm automatically. |

## 35. Files and static artifacts

Source: `src/pages/Home.jsx`, `AirportTransfers.jsx`, `PrivateDriverSriLanka.jsx`, `ChauffeurGuideSriLanka.jsx`, `RoundTours.jsx`, `Testimonials.jsx`; `src/data/travelData.js`, `translations.js`; `src/components/SeoSchema.jsx`; deleted `TestimonialsSlider.jsx`. Scripts: `w8-trust.test.mjs`, `w8-responsive-qa.mjs`, `prerender-w8-touched.mjs`. This engineering note is new. Exactly **11** public artifacts were written: `prerendered-home.html`, and flat plus nested HTML for `airport`, `private-driver-sri-lanka`, `chauffeur-guide-sri-lanka`, `round-tours`, and `testimonials`. The Chauffeur Guide pair was absent before W8 and was generated because this touched page now needs a synchronized snapshot. No full corpus regeneration was performed.

## 36. Unresolved/deferred items

No trustworthy review text, attribution, rating, customer portrait, or source URL is available. Existing 24/7, safe/best/fair, quick confirmation, licensed specialist guide, fleet capacity/model, exact vehicle, shared LocalBusiness `$$`, older localized copy, and historical metadata/FAQ assertions need evidence-led review. Also unresolved: rates above 150 km/day, current availability, cancellation/refund policy, payment policy/security, and legal/business registration details. W8 did not guess any of these. W9 owns analytics/Google Ads conversion infrastructure; W10 owns broad SEO/schema/performance/mobile/prerender launch review. The normal Windows Vite loader issue and existing SEO registry mismatch remain.

## 37. Git and deployment boundary; 38. next milestone

One local commit is intended after final diff review. Pre-existing untracked user files remain untouched. No push, deploy, publish, review scrape, external message, or real WhatsApp send. Next milestone only: **W9 — SKY Analytics + Google Ads Conversion Infrastructure**.
