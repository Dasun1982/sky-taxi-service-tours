# SKY website W2: universal WhatsApp and quote engine

Audit date: 2026-10-04. Scope: existing public `travel-website` only. Local work, no publication.

## Starting checkpoint and baseline

- Root: `C:\Users\LOQ\Documents\Projects\sky-taxi-project\travel-website`; branch `main`; accepted W1 HEAD `3a39a07fd045a5a4b890a85b4532f37deb2db937` exactly matched.
- Tracked files were clean. `.claude/launch.json`, `nul`, and 24 travel images were already untracked and remain untouched. No applicable repository `AGENTS.md` was found.
- Read the W1 engineering audit, commercial data model and tests. Founder outbound airport and daily service rates stay in `src/data/pricing.js`. No W2 message asserts a price, so none is duplicated in the message engine.
- Baseline: five W1 tests pass; normal `npm.cmd run build` stops before application compilation at the known Windows Vite config-loader access error; `vite build --configLoader runner` succeeds with 2,105 modules. SEO audit: one BLOCKED result (privacy, terms, account-deletion, support absent from SEO registry), one WARNING (37 long titles), zero static broken links.

## Architecture before W2 and entry-point inventory

Before W2, `src/utils/whatsapp.js` already built encoded `wa.me` URLs from `travelData.contactInfo.whatsapp`. It accepted arbitrary page-specific message strings or no message. There was no shared commercial message model. The source scan found 86 files and 332 occurrences of `buildWhatsAppLink`/`openWhatsApp`; the only literal `wa.me` base URL in `src` was in the helper. `business.js` re-exported the same contact. Booking form and contact form also use WhatsApp but retain their own submission semantics. The bottom action bar and floating `WhatsAppButton` are general contact controls with existing accessible labels and responsive styling. Some page links already emit guarded `whatsapp_clicked` events; others do not.

| Class | Existing examples and W2 decision |
| --- | --- |
| General contact / support | `WhatsAppButton`, `BottomActionBar`, footer, contact page, homepage general links, support/legal pages. Retained generic behavior. |
| Transfer quote | Shared `CityToCityRoutePage` uses truthful city endpoints. Standalone city taxi pages have page-specific messages and remain for later review. |
| Airport transfer quote | `/airport`, `/airport-to-galle`, shared `AirportTransferLanding` for Bentota, Negombo, Dambulla, Nuwara Eliya, Arugam Bay. Other direct airport route pages remain page-specific for W3 review. |
| Private Driver quote | `/private-driver-sri-lanka` and `/sri-lanka-tour-driver` are clear driver inquiries. Both now use the distinct Driver intent. |
| Chauffeur Guide quote | The new premium Chauffeur Guide intent exists for future use. `/driver-guide-sri-lanka` currently means a driver plus an arranged specialist site guide; it must not silently become the Chauffeur Guide product. |
| Tour quote | `/one-day-tours` and `/round-tours` cards and modals now retain known tour names in the new English message. Other tour pages retain their existing context until page-specific review. |
| Tour customization | Custom actions on `/one-day-tours` and `/round-tours` now use the request intent in English. Known-tour customization is supported by the engine. |
| Complete journey quote | Engine supports it. Homepage general contact, AI planner and booking form are not recast as a W7 journey builder. |
| Rental / other | `/vehicle-rentals`, safari and other specialty pages retain existing truthful messages and prices from their established data. |
| Ambiguous | `/transport` compares services; `/driver-guide-sri-lanka` has a distinct combined offering; destination/editorial/support links vary. No inferred product or mass replacement. |

## W2 architecture and contact truth

- `src/data/contact.js` holds the exact existing `contactInfo` object. `travelData.js` re-exports it so old imports keep working; `business.js` remains compatible. The sole canonical display and `wa.me` values are `+94 77 929 1073` and `94779291073`.
- `src/utils/whatsappQuote.js` defines eight intent templates and `buildWhatsAppMessage`. It normalizes strings, finite numbers and arrays into single-line text; empty/object values become editable `___` prompts rather than `undefined`, `null` or object text. Known values replace prompts. Unknown flight, date, passenger, luggage and pickup-choice values are never inferred. Pickup options map only from explicit `arrivalLobby`/`outsidePostOffice` selections. A service choice appears only when explicitly supplied from the supported choices.
- `src/utils/whatsapp.js` remains the single URL encoder. `buildQuoteWhatsAppLink` composes the message builder with that URL helper. Existing string callers and no-message contact callers still work. `encodeURIComponent` runs once on the final message, preserving Unicode, emoji, punctuation and line breaks.
- The quote argument can carry `sourcePage` and other context, but no technical source field or free-text message is sent to analytics. Source metadata is not printed in the customer message. A known city, vehicle interest or tour name is customer context, not hidden attribution.
- No message implies that opening WhatsApp sends an inquiry, secures a quote, reserves a driver, confirms a booking or takes payment. No message contains pricing. The W1 pricing source remains authoritative and unresolved W1 values remain unresolved.

## Actual integrations and CTA wording

| Component/page | Prior message | W2 message and wording |
| --- | --- | --- |
| `AirportTransfers.jsx` (`/airport`) | i18n lookup for one-line inbound airport templates | English locale uses structured airport inquiry with truthful **destination CMB** and optional vehicle interest. Other languages keep their existing translation/fallback lookup. Visible labels stay as before. Published inbound USD cards stay unchanged. |
| `AirportToGalleTaxi.jsx` | Per-page “I want to book” template | Structured CMB-to-Galle airport inquiry. Hero and final action say **Get Transfer Quote**; vehicle action says **Ask About This Vehicle**. |
| `AirportTransferLanding.jsx` | Per-town “I want to book” template | Structured CMB-to-known-town airport inquiry across the five shared route pages. Same quote and vehicle label changes. |
| `CityToCityRoutePage.jsx` | One-line transfer template | Transfer intent with known origin and destination; **Ask Route Price** label and existing click tracking remain. |
| `PrivateDriverSriLanka.jsx` | Per-page “I want to book” template | Private Driver inquiry with editable travel details; hero/final action say **Get My Driver Quote**, vehicle action **Ask About This Vehicle**. |
| `SriLankaTourDriver.jsx` | Per-page hire template | Private Driver inquiry, preserving specific card topic as optional note. Labels remain. |
| `OneDayTours.jsx` | i18n page templates | English tour-card/modal inquiries include known tour name; English custom action uses a customization request. Other languages retain their established translation/fallback lookup; labels stay on the existing i18n path. |
| `RoundTours.jsx` | i18n page templates | Same pattern for known round-tour name and customization request. |

These are existing links and button positions. No new CTA system, sticky bar, form, route, pricing card or design system was added. There was no blind site-wide replacement of “WhatsApp”. The existing global floating and bottom controls keep their appearance, placement, animation and general-contact role. A new sticky commercial control would collide with the existing floating UX, so it is deferred.

## Language, accessibility and analytics

The site retains its seven-language context and Arabic RTL behavior. Where pages already use i18n message lookup (`/airport`, one-day and round tours), W2 switches only the English locale to the new English builder and retains existing translation/fallback behavior for six other locales. The Arabic `/airport` message currently falls back to the existing English text; W2 does not silently invent an Arabic translation. Existing visible labels remain on their i18n path. Pages that had English-only copy retain that convention. The engine's English templates are ready for a deliberate later translation pass. Arabic RTL was checked in local preview.

Changed CTAs remain semantic anchors with visible text, keyboard access, `target="_blank"`, existing `rel="noreferrer"` and established focus behavior. Vehicle links' accessible labels now describe inquiry intent. No icon-only or nested interactive control was introduced.

Existing guarded analytics calls continue. In particular, the city-to-city shared page still emits `whatsapp_clicked` with its existing page source; W2 adds no new event, payload, PII or message text to Google Analytics. W9 owns a consistent non-PII conversion taxonomy. The application must distinguish **WhatsApp opened** from **inquiry sent**.

## Verification and preservation

- W1 commercial tests: 5 passing after updating their contact assertion to read the relocated canonical module. W2 tests: 6 passing, covering all eight intents, known/unknown values, product separation, forbidden authority language, service selection, generic contact regression, canonical phone and URL encoding with apostrophes, emoji, Arabic, accents, ampersands, punctuation and newlines. Total: 11 passing.
- Normal `npm.cmd run build` has the same Windows config-loader access failure as baseline. Runner build succeeds after W2 with 2,107 modules. Existing large-chunk warning remains; two additional tiny modules are the contact and quote engine modules. No dependency was added.
- SEO audit remains one BLOCKED (same four registry-only routes), one WARNING (same 37 titles), zero static broken links. No route, title, description, canonical, schema, sitemap/robots, H1 or indexability edit was made. No SEO page was generated or republished.
- `scripts/w2-responsive-qa.mjs` checks `/`, `/airport`, `/airport-to-galle`, `/airport-to-arugam-bay`, one-day tours, round tours, private driver and `/ella-to-kandy` at 390, 768 and 1280 px (24 combinations). It inspects page errors, H1, horizontal overflow, canonical WhatsApp target and encoded text without opening WhatsApp. It also checks Arabic RTL and the existing message fallback at 390 px. Representative screenshots were visually inspected for mobile, tablet and desktop. The navbar, cards and floating control retain their existing layout; changed labels fit and no new overflow or CTA collision was seen.
- Existing booking/Supabase submission and separate AI planner were not modified. No Travel OS, checkout, account, CRM, payment, backend or deployment change was made.

## Deferred and next milestone

W3 should review all direct airport route pages, preserve the inbound/outbound direction distinction, then add the airport pickup-choice UI where product and page context warrant it. Direct city taxi pages, `/transport`, `/driver-guide-sri-lanka`, rental, safari and editorial WhatsApp messages remain individually authored until their product intent can be confirmed. Complete journey capture belongs to W7; analytics conversion design belongs to W9. W1 unresolved rates, vehicle class mappings and reverse directions remain open.

**Next milestone: W3 — SKY Airport + Transfer Conversion System.**
