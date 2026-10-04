# W6 — SKY Homepage Commercial Upgrade

## Starting state and scope

The repository was `travel-website` on `main` at accepted W5 commit `3ac207ccd24a1bb26442d9a1fb2ef387bbaa56af`. Tracked files were clean. Pre-existing untracked `.claude/`, `nul`, and 24 travel JPGs were left untouched. W1–W5 documentation, Home, shared navigation/footer, business data, quote builder, SEO configuration, and the production preview were inspected before editing. W6 changes only the homepage presentation, English translation fallback data, a scoped CSS file, one browser QA script, and the home-only static snapshot. No W7–W10 product work, new route, dependency, deployment, or publication was performed.

## Before audit and section decisions

The old mobile hero ended near 843 px at 390 px width. The six equally prominent service cards then occupied about 3,316 px; Private Driver was fifth, mapped to the separate `/sri-lanka-tour-driver` route, and Chauffeur Guide was absent. Airport, Taxi, Private Tours, One-Day Tours, Private Driver, and Travel Support were mixed as peer cards. The redundant choice strip followed the cards, and the AI promotion began near 4,718 px. SEO route links, destination imagery, tour content, videos, gallery, reassurance, and contact material were useful and retained. Home had reassurance cards, but no genuine review block to expand.

| Before order | Section | Decision | Reason and retained value |
| --- | --- | --- | --- |
| 1 | Branded hero | Refine | Keep H1, gradient, motion, and trust pills; clarify the broader offer and route first to service choice. |
| 2 | Six service cards | Refine | Make four primary product paths concise; retain Taxi, One-Day Tours, Tour Driver, Driver + Guide, and Travel Help as secondary links. |
| 3 | Driver/guide/tour/AI choice strip | Merge into service chooser | Its links and purpose overlap the new chooser; keep useful product paths without another full section. |
| 4 | AI promo | Refine | Preserve external AI and internal explanation; describe route drafting followed by a real SKY quote. |
| 5 | AI sample route | Keep | Clearly marked example, useful to undecided travelers. |
| 6 | Popular tours | Keep | Existing tour discovery and booking-form quote path. |
| 7 | Taxi SEO route carousel | Keep | Valuable internal links to airport, taxi, and round-tour pages. |
| 8 | Destination showcase | Keep | Photography and destination-to-tour discovery. |
| 9 | Explore Sri Lanka regions | Keep | Destination links and regional travel inspiration. |
| 10 | Wild Sri Lanka | Keep | Genuine travel imagery and wildlife discovery. |
| 11 | Cinematic feature | Keep | Existing video and visual identity. |
| 12 | Featured experiences | Keep | Connects activities to route ideas. |
| 13 | Coastal story | Keep | Existing local visual narrative. |
| 14 | Gallery preview | Keep | Existing imagery and gallery route. |
| 15 | Why SKY | Refine one phrase | Keep six existing reassurance cards; clarify WhatsApp as inquiry rather than confirmation. |
| 16 | Trip flow | Refine | Show request, quote review, customer confirmation, then travel. |
| 17 | Final booking CTA | Refine | Make W2 general quote inquiry primary and preserve the existing booking form as secondary. |
| 18 | Contact | Refine inquiry links | Keep address, map, phone, email, and layout; route direct WhatsApp actions through W2. |

The resulting section order is hero → four-product chooser with secondary links → AI promo → AI example → popular tours → taxi routes → destination showcase → regional destinations → wildlife → video → experiences → coast → gallery → Why SKY → trip flow → final quote CTA → contact. This removes only the redundant full choice-strip section; it does not delete its useful routes or move the inspiration sections for visual novelty.

## Commercial implementation

The hero retains the existing single H1 (`SKY Taxi Service & Tours Sri Lanka`) and SKY styling. Its short subtitle now mentions airport transfers, private drivers, chauffeur-guided journeys, tours, and local help. The two hero actions are **Explore services** and **Plan with SKY AI**. A restrained W2 WhatsApp text link remains. The four compact chooser cards provide crawlable links to `/airport`, `/private-driver-sri-lanka`, `/chauffeur-guide-sri-lanka`, and `/tours`, while ordinary clicks retain in-app navigation. Secondary links preserve Taxi, One-Day Tours, Tour Driver, Driver + Guide, and Travel Help. Existing navbar/footer architecture was not changed. Rentals remain on the site but are not promoted as a primary home product; their route is already intentionally deindexed.

Private Driver and Chauffeur Guide card rates come from `getPrivateDriverOffer()` and `getChauffeurGuideOffer()`, which derive from W1 pricing. The homepage formats the derived minima as **From LKR 25,000/day** and **From $69/day**, and derives the guide's normal five-day context from W1. It stores no independent price number or multi-day package total. Airport uses **See route-specific prices** because W3's LKR minimum applies to a particular outbound direction and meeting option while reverse-direction offerings use USD. Tours have no invented starting rate. Each card is discovery; final pricing remains a route-specific SKY quote.

The AI promo now says the tool drafts a route idea that the customer can bring to SKY for a real service quote. It explicitly separates AI planning from booking and confirmed price. The external AI destination and `/ai-trip-planner` explanation remain. The final CTA, hero WhatsApp link, and two contact WhatsApp links use `buildQuoteWhatsAppLink({ intent: whatsappIntents.GENERAL, sourcePage: "home" })`. Product cards lead to their own product pages, where their W2 contextual intent is available. No direct home inquiry bypasses W2. The booking form remains reachable; a request is not described as an accepted booking. The five-step flow now reads Discover → Plan → Ask SKY → Confirm → Travel.

## Preservation, language, accessibility, and SEO

The new styles are scoped to `.home-page` and reuse the existing cards, imagery, gradients, buttons, and responsive conventions. At 1280 px the chooser is four columns; at 768 px it is two; at 390 px it is a compact vertical set with side thumbnails. Its measured mobile section height fell from roughly 3,316 px to 1,461 px. Images remain lazy loaded. No new dependency, animation system, sticky CTA, form, payment flow, schema Offer, review claim, urgency, or number was added.

New strings use the existing `home.commercial` translation path and English fallback. The other six languages continue to load and Arabic RTL remains structurally usable; deliberate translations of W6 copy remain open. The cards use H3 headings under the section H2, native buttons for SPA routes, named links for secondary routes, a labelled nav region, and visible focus styles. The Arabic mobile layout mirrors the card and remains within the viewport. Home title, meta description, canonical, JSON-LD, robots, existing route names, header, footer, and sitemap count were preserved.

`public/prerendered-home.html` was regenerated **for Home only** after the production build using `scripts/prerender-home-only.mjs` against the local preview. This is necessary because the build copies that HTML into `dist/index.html`; leaving the old snapshot would make non-JavaScript crawlers see the old six-card homepage. The script verifies the current W1-derived rates, single H1, existing JSON-LD, and crawlable W4/W5 links before writing. No other prerendered route snapshot was regenerated. The final `dist/index.html` matched the updated public snapshot byte-for-byte and contained all four W6 service labels and both derived starting prices.

## Verification

- Baseline W1–W5 unit suite: **32/32 passing** before and after W6.
- `scripts/w6-homepage-qa.mjs`: **84 checks passing** on the production preview. It verifies 390/768/1280 layout, H1/title/canonical/three JSON-LD scripts, no horizontal overflow or runtime errors, four chooser labels/crawlable URLs, high-contrast link text, W1-derived rate text, W2 content for all four direct home WhatsApp links, retained SEO/destination links, and responsive columns. Arabic RTL and Russian LTR were checked at 390 px. Card clicks were followed to all four destinations and each settled on its own title, single H1, and canonical.
- W5 responsive regression script: successful for Chauffeur Guide, Private Driver, Driver + Guide, Round Tours, and the W3 Unawatuna airport route at 390/768/1280 px; no horizontal overflow or runtime errors reported.
- Runner build: **2,116 modules transformed**, successful; existing large-chunk warning remains. Normal `npm.cmd run build` had the same known Windows Vite config-loader access failure before application compilation in the baseline audit. The runner build plus targeted snapshot application verified the W6 artifact.
- SEO audit: same **1 pre-existing BLOCKED** registry mismatch (`privacy`, `terms`, `account-deletion`, `support`), **1 warning** for 37 long titles, **98 sitemap URLs**, and **0 static broken links**. The audit's static possible-orphan count changed from 19 to 18 because the new home secondary links improve inbound discovery; its dynamic-link limitation remains.
- Before and after production-preview screenshots were captured at 390/768/1280 px and the 390 px Arabic RTL view; hero and chooser images were visually inspected. At mobile, the unchanged branded H1 and primary action remain prominent, and the four paths appear immediately after the hero. No new horizontal scroll or oversized card was observed.

## Open items and boundary

W6 English copy awaits deliberate translation into the other six languages. Existing route metadata on some W3/W4 pages still contains older “24/7 WhatsApp booking” wording; W6 did not rewrite those products or metadata. The baseline registry mismatch and title-length warning remain. W8 is reserved for deeper review/trust proof; no new testimonial or rating was created. W10 should review keyword overlap, the existing deindexed rentals route, and broader prerender delivery before launch. W6 did not implement W7's Complete Journey builder or a cross-service quote form.

**Next milestone only:** W7 — SKY Customization + Complete Journey.
