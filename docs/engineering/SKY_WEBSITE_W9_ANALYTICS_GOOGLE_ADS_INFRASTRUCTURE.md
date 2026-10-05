# W9 — SKY Analytics + Google Ads Conversion Infrastructure

Date: 2026-10-05. Scope: the existing `travel-website` on `main`, local only. W9 establishes truthful, privacy-filtered lead measurement and dormant Google Ads wiring. No Ads campaign, production activation, push, deploy, or publication occurred.

## 1. Verified starting state

Repository root `C:\Users\LOQ\Documents\Projects\sky-taxi-project\travel-website`, branch `main`, accepted W8 HEAD `c6cfcc74567729ac33aba14b43ec4cd8359a4866`. Tracked files were clean. Pre-existing `.claude/`, `nul`, and 24 untracked travel JPGs were left untouched. No applicable `AGENTS.md` was found. W1–W8 engineering notes and current code were read. Baseline W1–W5/W7/W8 unit suite: 46/46. Baseline runner build: 2,118 modules. Baseline SEO: one existing registry mismatch, 37 long-title warnings, 99 sitemap URLs, zero static broken links.

## 2. Analytics and provider audit

| Mechanism | Before W9 | Classification and action |
| --- | --- | --- |
| GA4 Google tag | `index.html` and 207 public prerender HTML files loaded `G-Y0R4ZZVG67` on every host. Initial `gtag('config')` sent an automatic page view. | **Active, privacy-risky, partial.** Existing ID retained in code for later reuse; loading is now explicitly gated by `VITE_GA_ENABLED=true` on the production host. All 207 old static inline copies were removed. Default build has no Google request. |
| SPA page views | App uses History API and hash/popstate routing. No explicit GA route event. GA enhanced measurement configuration in its account is unknown. | **Unknown/partial.** No new page-view emitter; avoids accidental initial/route duplication. Later activation must audit GA enhanced measurement and route counts. |
| `src/utils/analytics.js` | `trackEvent` forwarded arbitrary names/params to `gtag`; `trackAcquisitionCta` forwarded destination URLs. | **Active, privacy-risky.** Replaced with one canonical registry, enum allowlists, guarded adapters, and sanitized owner-facing acquisition actions. |
| Existing event calls | `whatsapp_clicked`, `ai_planner_opened`, `booking_submitted`, `booking_save_failed`, `service_selected`, `booking_started`, `tour_clicked`, `destination_clicked`, `transport_clicked` across Home, SEO templates, Tours, Transport, Airport, Booking, and acquisition pages. | **Partial/duplicated/misleading.** Legacy WhatsApp/AI/destination/tour/transport names now no-op. Home service selection and booking-start calls map to canonical engagement/intent enums. The premature Booking submit event was removed; resolved save outcome is authoritative. |
| GTM container | None found. `googletagmanager.com/gtag/js` was the Google tag loader, not a GTM container. | **Absent; left absent.** |
| Google Ads | No AW ID, conversion label, or Ads event found. | **Absent.** Dormant adapter added, with no IDs or labels configured. |
| Vercel Analytics / other pixels | No package, script, or event implementation found. | **Absent; left absent.** |
| Error logging | `bookingSubmission.js` logs failures to local console and returns a reason; no external telemetry found. | **Present but not analytics.** W9 never forwards raw backend reasons. |
| Cookies/consent | No cookie banner or consent state found. GA's own cookie behavior was previously live through the tag. | **No verified consent control.** W9 disables Google load by default; legal/consent review remains a production activation prerequisite. |
| Storage / attribution | Theme and language in `localStorage`; `bookingContext` uses one-time `sessionStorage`. W7 reads known itinerary query input. No UTM/gclid/gbraid/wbraid store or marketing identifier. | **Safe to leave alone.** W9 adds no persistent ID, query capture, or attribution store. |
| CSP / Vercel | `vercel.json` contains an SPA rewrite only. No CSP/security-header policy or Vercel Analytics wiring found. | **Leave alone.** No speculative Google CSP allowance. |
| Privacy notice | `/privacy` is a clearly marked technical draft pending legal review; it does not supply a consent mechanism. | **Existing draft; left alone.** Review before any Google reactivation. |

The root React entry is `src/main.jsx`; `src/App.jsx` holds the handwritten route map and SEO head update. Public prerender HTML preserves initial content, then React renders afresh. Static snapshots previously copied the old tag independently, so gating only `index.html` would have left most routes transmitting to Google in preview.

## 3. Architecture and rejected alternatives

UI actions call `trackEvent` or use one capture-phase native anchor observer in `main.jsx`. Both enter `eventRegistry`/`normalizeEvent`, which accept only registered names and fixed enum values. Adapters run independently and swallow failures. The local preview test sink records canonical events without network traffic. The existing GA tag is the optional analytics destination after review; the Ads adapter can use that same tag after separate explicit configuration. There is no dependency, GTM, second event bus, custom visitor ID, click-ID database, server-side attribution, or source URL forwarding. The observer does not prevent default navigation or change href, target, rel, focus, keyboard, or modifier behavior.

The rejected alternative was to wrap every one of the hundreds of W2 WhatsApp anchors. One delegated observer covers the common W2 `wa.me` handoff without changing customer messages, and the three programmatic `window.open` forms (Booking, Contact, Custom Journey) emit explicitly after validation. Legacy event calls remain harmless no-ops unless narrowly mapped, avoiding a broad W1–W8 page rewrite.

## 4. Canonical registry and funnel

All event names and their property keys live in `src/utils/analytics.js`. Every property value must match a fixed enum; unknown keys and values are discarded. `locale` is limited to the seven supported language codes. Current external destination is **none by default**. With reviewed `VITE_GA_ENABLED=true` on the production host, the event goes once to existing GA4 with a pathname-only `page_location`. Only the two rows marked primary candidate can reach Ads when all Ads settings are also valid.

| Event | Exact trigger and observed meaning | Tier | Allowed properties | Future Ads | Deduplication |
| --- | --- | ---: | --- | --- | --- |
| `service_interest` | Home service chooser link activated; interest in a fixed service, no lead. | 0 | service, source_surface, locale | No | Home legacy call maps once; delegated observer ignores ordinary service links. |
| `quote_start` | Existing booking-entry handler or Contact path moves toward Booking; no form success. | 1 | service, source_surface, locale | Secondary observation only | Existing `booking_started` maps once; tour/destination click calls are discarded. |
| `custom_journey_start` | First edit of W7 form in one component mount; user began drafting. | 1 | service, source_surface, locale | Secondary observation only | Ref fires once even after many field changes. |
| `ai_planner_open` | User activates the external SKY AI planner anchor; not an AI output or booking. | 0 | source_surface, locale | Secondary observation only | Delegated link observer fires once; old `ai_planner_opened` no-ops. |
| `cross_sell_follow` | One of the documented W8 related-service links is activated; product navigation only. | 0 | source_product, destination_product, locale | No | Fixed source/destination path pairs; one observer event per click. |
| `whatsapp_handoff` | Intentional canonical `wa.me` anchor activation or valid programmatic form `window.open` attempt; **message receipt is unknown**. | 2 | service, source_surface, locale | Primary lead candidate except Booking form fallback | Anchor observer or form, never both; old `whatsapp_clicked` no-ops. |
| `contact_action` | Native phone or email anchor activation; call/email completion is unknown. | 2 | channel, source_surface, locale | Secondary, if later approved | One observer event; actual number/address omitted. |
| `booking_request_success` | Existing `submitBookingLead` promise resolves with `saved === true` after Supabase insert. A website request was stored, **not confirmed or paid**. | 3 | service, source_surface, locale | Primary lead candidate | Existing synchronous submit ref prevents rapid double submit; one resolved result maps to one event. |
| `booking_request_error` | Existing `submitBookingLead` resolves without saved success. Generic failure only. | 1 | service, source_surface, locale | No | One resolved result, no raw reason/error. |
| `acquisition_action` | Existing owner-facing Acquire/Valuation CTA activated, with fixed CTA enum. | 0 | cta, source_surface, locale | No | Existing handler maps once; destination URL omitted. |

Tier 0 is engagement, Tier 1 is intent/friction, Tier 2 is a lead handoff, Tier 3 is an authoritative request save. There is no booking-confirmed, payment, revenue, completed-journey, or message-sent event. All rows forbid names, phone/email values, addresses, pickup/dropoff, route/destinations, flight, dates/duration, traveler/luggage counts, notes, WhatsApp text or URL, AI prompts or output, booking IDs, full URLs/query/referrers, click IDs, product prices, value, and currency. A public tour key could be safe in principle; W9 deliberately does not send one. Source surfaces are coarse fixed categories, not arbitrary page slugs or user text.

## 5. Commercial surface decisions

- **WhatsApp:** W2 still constructs every message and URL. Anchor observation covers Home, Airport hub/route pages, W4 Private Driver, W5 Chauffeur Guide, Tours, one-day/round tours, Contact, footer, and the bottom action bar. The `WhatsAppButton` component exists but is not mounted in `App`; its class is supported if later mounted. Booking/Contact/W7 forms use explicit events because their handoffs are programmatic. A second click on W7's fallback link is a second user handoff action.
- **Booking/Supabase:** Form validation and immediate WhatsApp fallback remain. `bookingResultEvent(result)` reads only `saved`; success is emitted after the promise resolves. A failed/unconfigured insert emits generic error and never success. Booking's WhatsApp fallback is excluded from the future Ads WhatsApp mapping, so a successful form action will not count as two primary Ads conversions. Failed Booking may still create a real WhatsApp conversation, but Ads conservatively does not count it through this path.
- **Custom Journey:** One start on first edit, one handoff after valid submit. No date, duration, travelers, stops, route, selected vehicle, or notes enter analytics. The W7 message and visible review are unchanged.
- **Airport:** The fixed service is `airport`; route text, meeting choice, flight/date/passengers/luggage and encoded WhatsApp text are excluded. Airport hub and fixed route surfaces are distinguished only by safe enums.
- **Private Driver / Chauffeur Guide:** Fixed services are distinct. No duration, requested route, selected vehicle, LKR 25,000 starting price, USD 69 starting price, or inferred booking value is sent.
- **Tours:** `tour` and coarse `tours`/`one_day_tours`/`round_tours` surfaces only. Public catalog context stays in W2 customer messages and existing Booking context; customized itinerary text stays out of analytics.
- **AI Planner:** Only outbound open is observed. No prompt, generated itinerary, AI app instrumentation, or automatic booking authority.
- **W8 cross-sell:** Airport (including W3 route) → Private Driver, Private Driver → Chauffeur Guide, Chauffeur Guide → Custom Journey, Round Tours → Custom Journey use one event name and fixed pair. This remains Tier 0 navigation, never a lead.
- **Contact:** Native `tel:`/`mailto:` clicks emit channel only. Contact form emits a general WhatsApp handoff after its validation. Contact inquiry choice emits `quote_start` when moving to Booking. The acquisition/valuation mailto CTAs stay in the separate owner-facing event.

## 6. Privacy, failure, and environment behavior

There is no arbitrary property forwarding, user text validation heuristic, persistent analytics ID, fingerprint, UTM/click-ID store, or new cookie. Enum normalization drops every unregistered field and value. The internal local sink receives that same normalized object. `trackEvent`, link observation, GA setup, and each adapter catch failures so navigation, form submission, and WhatsApp still proceed. Ads and GA are **disabled by default**, including local/dev/preview; `index.html` and all 207 tracked public snapshots no longer contain a live Google tag. The Vite client settings are public flags/tag identifiers only; no Google API secret, OAuth token, service account, Ads developer token, or Supabase service-role key is expected.

No UTM parsing or persistence was added. No `gclid`, `gbraid`, or `wbraid` collection, WhatsApp attachment, Supabase enrichment, enhanced conversion, offline upload, or server attribution was added. Query strings may still be read by existing W7 form prefilling, but the event model never forwards them. If GA is later enabled, initial `page_location` and custom-event `page_location` use origin plus pathname only; `page_referrer` is blank in config and W9 event calls. GA enhanced measurement, especially outbound-link URL capture and SPA page-view behavior, must be audited in the real GA property before activation. W9 does not claim a complete consent or legal compliance solution.

The existing privacy page remains a draft pending legal review. Consent architecture, Google cookie disclosure, GA enhanced measurement settings, production host behavior, and any CSP changes must be decided in the later activation review. No CSP/security header was weakened. The optional loader uses one async script only after explicit GA enablement on the production host. No Ads script is loaded separately. The default build's main JS changed from 529.36 kB / 150.62 kB gzip to 536.67 kB / 152.79 kB gzip; transformed modules remain 2,118. No render-blocking tag was added.

## 7. Google Ads readiness and activation boundary

The optional Ads adapter accepts only `whatsapp_handoff` outside Booking and `booking_request_success`. It requires `VITE_GA_ENABLED=true`, `VITE_GOOGLE_ADS_ENABLED=true`, a syntactically valid `VITE_GOOGLE_ADS_ID`, and both `VITE_GOOGLE_ADS_WHATSAPP_LABEL` and `VITE_GOOGLE_ADS_BOOKING_LABEL`. Invalid/missing values make it inert. These are future **public tag identifiers**, not secrets. There are no values in the repository and no current Ads requests. It reuses the existing GA Google tag, registers the AW destination without a page view, then emits `conversion` with `send_to` and a pathname-only page location. No arbitrary event, value, currency, transaction ID, or customer data is mapped.

Recommended future primary lead conversions: successful stored Booking request and intentional WhatsApp inquiry handoff (excluding the Booking form's duplicate fallback). They are lead signals, never bookings or sales. Quote start, Custom Journey start, AI open, and phone/email action are possible secondary observations only after review; cross-sell and service interest should remain analytics-only. Starting prices are not revenue or lead value. Mixed LKR/USD products do not justify a universal currency or exchange-rate conversion. Ads conversion value and currency are deliberately omitted.

Post-W10 activation checklist: (1) founder reviews the real GA/Ads accounts and privacy/consent requirements; (2) approve exact lead definitions and consent behavior; (3) inspect/disable GA enhanced outbound URL capture and verify SPA page-view policy; (4) create real Ads conversion actions and obtain their ID/labels; (5) set the public production flags/labels through the normal release process; (6) review CSP only if actually required; (7) inspect browser/tag diagnostics and prove one action → one Ads conversion, including Booking fallback dedup; (8) inspect payloads for PII, query strings, and accidental value/currency; (9) mark primary versus secondary correctly in Ads; (10) only then consider campaigns. No part of this checklist was activated in W9.

## 8. Required scenario evidence

| Scenario | Evidence and result |
| --- | --- |
| 1. Airport WhatsApp | Browser and unit: one `whatsapp_handoff`, `airport` and `airport_route` enums, same W2 href, no flight/route/text/value. |
| 2. Private Driver | Browser and unit: `private_driver` handoff, no duration/route/LKR 25,000 conversion value. |
| 3. Chauffeur Guide | Browser and unit: `chauffeur_guide` handoff, no USD 69 conversion value. |
| 4. Custom Journey | Browser Arabic RTL: filled 8 days, 2 travelers, Sigiriya/Kandy/Ella and notes; one start and one handoff. W2 URL kept details; event payload kept none of them. |
| 5. Booking success | Intercepted local Supabase HTTP 201: one post-save `booking_request_success`, one WhatsApp fallback, no ID/form values. No real insert. |
| 6. Booking failure | Intercepted local HTTP 500 and normal unconfigured preview: no success, one generic error, WhatsApp still opens, no form values. |
| 7. AI Planner | Browser: one coarse `ai_planner_open`, unchanged external new-tab link; no prompt/output. |
| 8. W8 cross-sell | Browser: Airport → Private Driver and four other fixed pairs produce one Tier 0 event; real internal navigation verified. |
| 9. Phone | Browser: one `contact_action` with `channel=phone`; number omitted. |
| 10. Analytics blocked | Unit adapter throws and later adapter still receives event; browser CTA/navigation remain native. |

## 9. Verification and static artifacts

`scripts/w9-analytics.test.mjs` has 12 tests covering registry, unknown names, enum filtering, PII/free text, all core services, Booking resolved-result semantics, AI/contact/cross-sell, one-click dedup, adapter failure, inert/malformed/local Ads, two approved Ads mappings, no monetary values/currency, and static Google tag removal. `scripts/w9-interaction-qa.mjs` passed 363 browser checks across 13 routes and three widths (390/768/1280), including runtime/overflow/H1/canonical checks, local capture, zero Google requests, the persistent WhatsApp control, links, W7 Arabic RTL, and Booking fallback. `scripts/w9-booking-success-qa.mjs` passed 14 checks with HTTP 201/500 responses intercepted at a temporary local-only Supabase URL. The normal build was restored afterward and checked for absence of that test URL/key. No real WhatsApp message was sent.

Final W1–W5/W7/W8/W9 combined unit suite: **58/58**. W6 browser suite: **84/84**; W7: **149/149**; W8: **301/301** on rerun. The final W9 browser suite: **363/363**. The normal Windows `npm.cmd run build` still stops before compilation at the inherited Vite config-loader access error; runner production build succeeds with **2,118 modules**. Final SEO audit remains at one inherited registry mismatch, 37 long-title warnings, 99 sitemap URLs, and zero static broken links. The analytics-only static change removes exactly the same old inline GA block from 207 `public/**/*.html` snapshots, including `prerendered-home.html`; it does not regenerate routes, metadata, canonical tags, body copy, JSON-LD, or the full prerender corpus. `index.html` has the same removal. The normal build copies those snapshots, and `apply-prerendered-home` restores the home snapshot into `dist/index.html`. `git diff --check` passes.

## 10. Founder requirements and W10 boundary

FOUNDER REQUIREMENTS FOR W9: NONE

FOUNDER REQUIREMENTS FOR FUTURE GOOGLE ADS ACTIVATION: DEFERRED UNTIL AFTER W10 / PRODUCTION ACTIVATION

W9 asks for no IDs, credentials, billing, campaign details, or legal signoff today. W10 is **SKY SEO + Performance + Mobile + Final Launch**. It owns the wider SEO/schema/performance/mobile and launch review, including inherited review evidence, claims, localization, vehicle/pricing/policy gaps, the normal Windows Vite loader issue, and the known SEO registry mismatch. W9 did not implement W10, create campaigns, push, deploy, or publish.
