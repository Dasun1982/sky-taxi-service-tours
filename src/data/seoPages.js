/**
 * Canonical SEO page registry for SKY Taxi Service & Tours.
 *
 * PHASE 6 — SEO ARCHITECTURE FOUNDATION
 *
 * This is a CLASSIFICATION layer, not a content store. It deliberately does
 * NOT duplicate title/description/H1/canonical — those already have one
 * real source each:
 *   - title/description  -> travelData.js `pageMeta`
 *   - canonical           -> App.jsx `canonicalOverrides` (+ SITE_URL)
 *   - schema/FAQ          -> schemaData.js `schemaPageLabels`/`schemaFaqs`
 *   - sitemap presence    -> public/sitemap.xml
 * Re-storing those here would create the exact kind of silent-drift bug
 * this project has hit repeatedly (translations.js overriding JSX defaults).
 * What's missing — and what this file adds — is the TAXONOMY layer: what
 * kind of page each URL is, what intent it targets, how it relates to real
 * destinations/routes/tours, and its cannibalization status against every
 * other page. This is the "one canonical source of SEO page truth" for
 * PLANNING, so a future page proposal can be checked against what already
 * exists before it gets built.
 *
 * Every slug below is a REAL, already-live route (see App.jsx `pages`).
 * This file does not create any new page.
 */

/**
 * Controlled page-type vocabulary. A future page must be one of these
 * types — if it doesn't fit, that's a signal to reconsider the page, not
 * to add an arbitrary new type.
 */
export const pageTypes = {
  // Transport family
  CITY_TAXI: "city-taxi", // "<City> Taxi Service" — general local taxi intent for one destination
  AIRPORT_TO_CITY: "airport-to-city", // "Colombo Airport to <City>" — directional transfer intent
  AIRPORT_TRANSFER_HUB: "airport-transfer", // island-wide airport transfer intent, not city-specific
  TAXI_HUB: "taxi-hub", // general Sri Lanka taxi intent, not city-specific
  BUDGET_TAXI: "budget-taxi", // price-sensitive modifier intent ("cheap/affordable taxi Sri Lanka")
  PRIVATE_DRIVER: "private-driver", // flexible day-by-day hire, no fixed itinerary, no guide claim
  MULTI_DAY_CHAUFFEUR: "multi-day-chauffeur", // one dedicated driver for a continuous multi-day trip, no guide claim
  DRIVER_GUIDE: "driver-guide", // driver + specialist local guide intent
  TRANSPORT_HUB: "transport-hub", // compares all transport options against each other
  SAFARI_TRANSFER: "safari-transfer", // safari-park-specific transfer intent

  // Tour family
  TOURS_HUB: "tours-hub", // browse/compare tour types
  ONE_DAY_TOUR: "one-day-tour", // day-tour catalog + itinerary detail
  MULTI_DAY_TOUR: "multi-day-tour", // round-tour catalog + itinerary detail
  DURATION_TOUR: "duration-tour", // duration-anchored landing page re-presenting one real catalog tour

  // Destination family
  DESTINATIONS_HUB: "destinations-hub", // directory of all real destinations, one page

  // AI family
  AI_PLANNER: "ai-trip-planner",

  // PHASE 1 (comprehensive SEO architecture) — new intent families beyond
  // the original transport/tours/destinations set. Each type here answers
  // a distinct axis of real search intent (a decision, a question, a
  // location+experience combo) rather than a new destination or service.
  COMPARISON: "comparison", // "X vs Y" — only for pairs with real, distinct data on both sides
  QUESTION_GUIDE: "question-guide", // answers one real, specific planning question
  LOCATION_EXPERIENCE: "location-experience", // "<experience> near <destination>" — built from verified relatedDestinations data only
  CITY_TO_CITY_ROUTE: "city-to-city-route", // a specific named route between two real, live destinations (not airport-anchored)

  // PHASE 2 (comprehensive coverage expansion) — new intent families.
  DESTINATION_OVERVIEW: "destination-overview", // a real destination with no existing dedicated page, only built with a verified image
  EXPERIENCE_HUB: "experience-hub", // aggregates several real destinations sharing a theme (beaches, hill country, culture, surfing)
  TRAVELER_INTENT: "traveler-intent", // honeymoon/family/budget — real content only, never a stereotyped or fabricated claim

  // Core / utility (not acquisition-intent SEO pages, but real indexable pages)
  CORE: "core",

  // Explicitly excluded from the public index
  INVESTOR_NOINDEX: "investor-noindex",
  SOFT_DEINDEXED: "soft-deindexed",
  NOT_FOUND: "not-found",
};

/**
 * Cannibalization status vocabulary, per STEP 4 of the Phase 6 brief.
 * `resolved` entries already have a real fix in App.jsx's canonicalOverrides
 * (non-destructive: page stays live, canonical tag points elsewhere).
 * `flagged` entries are NEW findings from this phase's audit — reported,
 * not auto-fixed, per "do not automatically canonicalize without evidence."
 */
export const cannibalization = {
  SAFE: "safe",
  DIFFERENT_INTENT: "different-intent",
  POTENTIAL: "potential-cannibalization",
  DUPLICATE: "duplicate",
};

/**
 * The real, current page inventory. `destinationId` matches destinations.js
 * ids where relevant; `routeSlug` matches routes.js slugs. `cannibalNote`
 * is only present where this phase's audit found something worth flagging.
 */
export const seoPages = [
  // ---- CORE ----
  { slug: "home", pageType: pageTypes.CORE, intentFamily: "core" },
  { slug: "booking", pageType: pageTypes.CORE, intentFamily: "core" },
  { slug: "contact", pageType: pageTypes.CORE, intentFamily: "core" },
  { slug: "about", pageType: pageTypes.CORE, intentFamily: "core" },
  { slug: "gallery", pageType: pageTypes.CORE, intentFamily: "core" },
  { slug: "testimonials", pageType: pageTypes.CORE, intentFamily: "core" },
  { slug: "packages", pageType: pageTypes.CORE, intentFamily: "core" },
  { slug: "experiences", pageType: pageTypes.CORE, intentFamily: "core" },
  { slug: "wildlife", pageType: pageTypes.CORE, intentFamily: "core" },
  { slug: "travel-guide", pageType: pageTypes.CORE, intentFamily: "core" },

  // ---- AI ----
  { slug: "ai-trip-planner", pageType: pageTypes.AI_PLANNER, intentFamily: "ai" },

  // ---- DESTINATIONS ----
  { slug: "destinations", pageType: pageTypes.DESTINATIONS_HUB, intentFamily: "destinations" },

  // ---- TRANSPORT: hubs ----
  { slug: "transport", pageType: pageTypes.TRANSPORT_HUB, intentFamily: "transport" },
  { slug: "taxi", pageType: pageTypes.TAXI_HUB, intentFamily: "transport", primaryKeyword: "Sri Lanka taxi service" },
  { slug: "airport", pageType: pageTypes.AIRPORT_TRANSFER_HUB, intentFamily: "transport", primaryKeyword: "Sri Lanka airport transfer" },
  { slug: "colombo-airport-taxi", pageType: pageTypes.AIRPORT_TRANSFER_HUB, intentFamily: "transport", primaryKeyword: "Colombo airport taxi" },
  { slug: "budget-taxi-sri-lanka", pageType: pageTypes.BUDGET_TAXI, intentFamily: "transport", primaryKeyword: "budget taxi Sri Lanka" },
  { slug: "yala-safari-transfer", pageType: pageTypes.SAFARI_TRANSFER, intentFamily: "transport", destinationId: "yala", primaryKeyword: "Yala safari transfer" },

  // ---- TRANSPORT: driver / guide ----
  // Phase 7: this cluster was flagged POTENTIAL cannibalization in Phase 6.
  // Resolved by genuine content differentiation (not a title-only tweak):
  // private-driver-sri-lanka is now single-day/flexible hire with no fixed
  // itinerary; sri-lanka-tour-driver is now one dedicated driver for a
  // continuous multi-day trip. Each page now explicitly cross-links to the
  // other for the case it doesn't fit. sri-lanka-private-tours (the third
  // page in the original cluster) had no real pricing anywhere on it and
  // couldn't be genuinely differentiated from /tours (which does), so it
  // was canonicalized instead — see the DUPLICATE entry below.
  {
    slug: "private-driver-sri-lanka",
    pageType: pageTypes.PRIVATE_DRIVER,
    intentFamily: "transport",
    primaryKeyword: "private driver Sri Lanka",
    cannibalNote: { status: cannibalization.DIFFERENT_INTENT, against: ["sri-lanka-tour-driver"], resolved: true, fix: "Phase 7 content differentiation: single-day/flexible hire vs. continuous multi-day chauffeur." },
  },
  {
    slug: "sri-lanka-tour-driver",
    pageType: pageTypes.MULTI_DAY_CHAUFFEUR,
    intentFamily: "transport",
    primaryKeyword: "Sri Lanka tour driver",
    cannibalNote: { status: cannibalization.DIFFERENT_INTENT, against: ["private-driver-sri-lanka"], resolved: true, fix: "Phase 7 content differentiation: single-day/flexible hire vs. continuous multi-day chauffeur." },
  },
  { slug: "driver-guide-sri-lanka", pageType: pageTypes.DRIVER_GUIDE, intentFamily: "transport", primaryKeyword: "driver and guide Sri Lanka" },

  // ---- TRANSPORT: city taxi (destination-anchored) ----
  { slug: "ella-taxi-service", pageType: pageTypes.CITY_TAXI, intentFamily: "transport", destinationId: "ella" },
  { slug: "kandy-taxi-service", pageType: pageTypes.CITY_TAXI, intentFamily: "transport", destinationId: "kandy" },
  { slug: "galle-taxi-service", pageType: pageTypes.CITY_TAXI, intentFamily: "transport", destinationId: "galle" },
  { slug: "sigiriya-taxi-service", pageType: pageTypes.CITY_TAXI, intentFamily: "transport", destinationId: "sigiriya" },
  { slug: "mirissa-taxi-service", pageType: pageTypes.CITY_TAXI, intentFamily: "transport", destinationId: "mirissa" },
  { slug: "unawatuna-taxi-service", pageType: pageTypes.CITY_TAXI, intentFamily: "transport", destinationId: "unawatuna" },
  { slug: "weligama-taxi-service", pageType: pageTypes.CITY_TAXI, intentFamily: "transport", destinationId: "weligama" },
  { slug: "hiriketiya-taxi-service", pageType: pageTypes.CITY_TAXI, intentFamily: "transport", destinationId: "hiriketiya" },
  { slug: "nuwara-eliya-taxi-service", pageType: pageTypes.CITY_TAXI, intentFamily: "transport", destinationId: "nuwara-eliya" },
  { slug: "bentota-taxi-service", pageType: pageTypes.CITY_TAXI, intentFamily: "transport", destinationId: "bentota" },
  { slug: "negombo-taxi-service", pageType: pageTypes.CITY_TAXI, intentFamily: "transport", destinationId: "negombo" },
  { slug: "arugam-bay-taxi-service", pageType: pageTypes.CITY_TAXI, intentFamily: "transport", destinationId: "arugam-bay" },
  { slug: "dambulla-taxi-service", pageType: pageTypes.CITY_TAXI, intentFamily: "transport", destinationId: "dambulla" },

  // ---- TRANSPORT: airport-to-city (route-anchored) ----
  { slug: "airport-to-ella", pageType: pageTypes.AIRPORT_TO_CITY, intentFamily: "transport", routeSlug: "airport-to-ella", destinationId: "ella" },
  { slug: "airport-to-kandy", pageType: pageTypes.AIRPORT_TO_CITY, intentFamily: "transport", routeSlug: "airport-to-kandy", destinationId: "kandy" },
  { slug: "airport-to-galle", pageType: pageTypes.AIRPORT_TO_CITY, intentFamily: "transport", routeSlug: "airport-to-galle", destinationId: "galle" },
  { slug: "airport-to-sigiriya", pageType: pageTypes.AIRPORT_TO_CITY, intentFamily: "transport", routeSlug: "airport-to-sigiriya", destinationId: "sigiriya" },
  { slug: "airport-to-mirissa", pageType: pageTypes.AIRPORT_TO_CITY, intentFamily: "transport", routeSlug: "airport-to-mirissa", destinationId: "mirissa" },
  { slug: "airport-to-unawatuna", pageType: pageTypes.AIRPORT_TO_CITY, intentFamily: "transport", routeSlug: "airport-to-unawatuna", destinationId: "unawatuna" },
  { slug: "airport-to-weligama", pageType: pageTypes.AIRPORT_TO_CITY, intentFamily: "transport", routeSlug: "airport-to-weligama", destinationId: "weligama" },
  { slug: "airport-to-hiriketiya", pageType: pageTypes.AIRPORT_TO_CITY, intentFamily: "transport", routeSlug: "airport-to-hiriketiya", destinationId: "hiriketiya" },
  { slug: "airport-to-nuwara-eliya", pageType: pageTypes.AIRPORT_TO_CITY, intentFamily: "transport", routeSlug: "airport-to-nuwara-eliya", destinationId: "nuwara-eliya" },
  { slug: "airport-to-bentota", pageType: pageTypes.AIRPORT_TO_CITY, intentFamily: "transport", routeSlug: "airport-to-bentota", destinationId: "bentota" },
  { slug: "airport-to-negombo", pageType: pageTypes.AIRPORT_TO_CITY, intentFamily: "transport", routeSlug: "airport-to-negombo", destinationId: "negombo" },
  { slug: "airport-to-arugam-bay", pageType: pageTypes.AIRPORT_TO_CITY, intentFamily: "transport", routeSlug: "airport-to-arugam-bay", destinationId: "arugam-bay" },
  { slug: "airport-to-dambulla", pageType: pageTypes.AIRPORT_TO_CITY, intentFamily: "transport", routeSlug: "airport-to-dambulla", destinationId: "dambulla" },

  // ---- TOURS ----
  { slug: "tours", pageType: pageTypes.TOURS_HUB, intentFamily: "tours" },
  { slug: "one-day-tours", pageType: pageTypes.ONE_DAY_TOUR, intentFamily: "tours" },
  { slug: "round-tours", pageType: pageTypes.MULTI_DAY_TOUR, intentFamily: "tours" },
  {
    slug: "5-day-sri-lanka-tour",
    pageType: pageTypes.DURATION_TOUR,
    intentFamily: "tours",
    primaryKeyword: "5 day Sri Lanka tour",
    destinationId: "kandy",
    note: "Phase 7 — first page built from the duration-anchored candidate identified in Phase 6. Re-presents the real trincomalee-cultural-triangle-hill-country-wildlife-5-day-tour catalog entry (roundTourPackages, exported from RoundTours.jsx) with duration-specific framing, not a second product.",
  },
  // ---- TRANSPORT/TOURS: already-resolved cannibalization (canonicalOverrides in App.jsx) ----
  { slug: "sri-lanka-taxi-service", pageType: pageTypes.TAXI_HUB, intentFamily: "transport", cannibalNote: { status: cannibalization.DUPLICATE, against: ["taxi"], resolved: true, fix: "canonicalOverrides -> taxi" } },
  { slug: "airport-transfer-sri-lanka", pageType: pageTypes.AIRPORT_TRANSFER_HUB, intentFamily: "transport", cannibalNote: { status: cannibalization.DUPLICATE, against: ["airport"], resolved: true, fix: "canonicalOverrides -> airport" } },
  { slug: "sri-lanka-round-tours", pageType: pageTypes.MULTI_DAY_TOUR, intentFamily: "tours", cannibalNote: { status: cannibalization.DUPLICATE, against: ["round-tours"], resolved: true, fix: "canonicalOverrides -> round-tours" } },
  { slug: "day-tours-sri-lanka", pageType: pageTypes.ONE_DAY_TOUR, intentFamily: "tours", cannibalNote: { status: cannibalization.DUPLICATE, against: ["one-day-tours"], resolved: true, fix: "canonicalOverrides -> one-day-tours" } },
  {
    slug: "sri-lanka-private-tours",
    pageType: pageTypes.TOURS_HUB,
    intentFamily: "tours",
    primaryKeyword: "Sri Lanka private tours",
    cannibalNote: {
      status: cannibalization.DUPLICATE,
      against: ["tours"],
      resolved: true,
      fix: "canonicalOverrides -> tours (Phase 7: no real pricing anywhere on the page, unlike /tours — couldn't be genuinely differentiated, so canonicalized rather than content-differentiated).",
    },
  },

  // ---- PHASE 1 (comprehensive SEO architecture): question / comparison /
  // location+experience / city-to-city route pages. Each was checked
  // against futurePageCriteria in seoOpportunities.js before being built —
  // real data backs every claim, none invent pricing, times, or ratings.
  { slug: "how-many-days-in-sri-lanka", pageType: pageTypes.QUESTION_GUIDE, intentFamily: "planning", primaryKeyword: "how many days do I need in Sri Lanka" },
  { slug: "is-a-private-driver-worth-it", pageType: pageTypes.QUESTION_GUIDE, intentFamily: "planning", primaryKeyword: "is a private driver worth it in Sri Lanka" },
  { slug: "ella-vs-nuwara-eliya", pageType: pageTypes.COMPARISON, intentFamily: "planning", primaryKeyword: "Ella vs Nuwara Eliya", destinationId: "ella" },
  { slug: "best-beaches-near-galle", pageType: pageTypes.LOCATION_EXPERIENCE, intentFamily: "planning", primaryKeyword: "best beaches near Galle", destinationId: "galle" },
  { slug: "galle-to-ella", pageType: pageTypes.CITY_TO_CITY_ROUTE, intentFamily: "transport", primaryKeyword: "Galle to Ella" },

  // ---- PHASE 2 (comprehensive coverage expansion) ----
  { slug: "colombo", pageType: pageTypes.DESTINATION_OVERVIEW, intentFamily: "destinations", destinationId: "colombo" },
  { slug: "sinharaja", pageType: pageTypes.DESTINATION_OVERVIEW, intentFamily: "destinations", destinationId: "sinharaja" },
  { slug: "things-to-do-in-galle", pageType: pageTypes.LOCATION_EXPERIENCE, intentFamily: "planning", destinationId: "galle" },
  { slug: "things-to-do-in-unawatuna", pageType: pageTypes.LOCATION_EXPERIENCE, intentFamily: "planning", destinationId: "unawatuna" },
  { slug: "things-to-do-in-ella", pageType: pageTypes.LOCATION_EXPERIENCE, intentFamily: "planning", destinationId: "ella" },
  { slug: "things-to-do-in-kandy", pageType: pageTypes.LOCATION_EXPERIENCE, intentFamily: "planning", destinationId: "kandy" },
  { slug: "things-to-do-in-sigiriya", pageType: pageTypes.LOCATION_EXPERIENCE, intentFamily: "planning", destinationId: "sigiriya" },
  { slug: "2-days-in-sri-lanka", pageType: pageTypes.DURATION_TOUR, intentFamily: "tours", primaryKeyword: "2 days in Sri Lanka" },
  { slug: "3-days-in-sri-lanka", pageType: pageTypes.DURATION_TOUR, intentFamily: "tours", primaryKeyword: "3 days in Sri Lanka" },
  { slug: "7-days-in-sri-lanka", pageType: pageTypes.DURATION_TOUR, intentFamily: "tours", primaryKeyword: "7 days in Sri Lanka" },
  { slug: "10-days-in-sri-lanka", pageType: pageTypes.DURATION_TOUR, intentFamily: "tours", primaryKeyword: "10 days in Sri Lanka" },
  { slug: "unawatuna-vs-mirissa", pageType: pageTypes.COMPARISON, intentFamily: "planning", destinationId: "unawatuna" },
  { slug: "galle-vs-colombo", pageType: pageTypes.COMPARISON, intentFamily: "planning", destinationId: "galle" },
  { slug: "sigiriya-vs-ella", pageType: pageTypes.COMPARISON, intentFamily: "planning", destinationId: "sigiriya" },
  { slug: "ella-to-kandy", pageType: pageTypes.CITY_TO_CITY_ROUTE, intentFamily: "transport", primaryKeyword: "Ella to Kandy" },
  { slug: "kandy-to-sigiriya", pageType: pageTypes.CITY_TO_CITY_ROUTE, intentFamily: "transport", primaryKeyword: "Kandy to Sigiriya" },
  { slug: "sigiriya-to-yala", pageType: pageTypes.CITY_TO_CITY_ROUTE, intentFamily: "transport", primaryKeyword: "Sigiriya to Yala" },
  { slug: "galle-to-mirissa", pageType: pageTypes.CITY_TO_CITY_ROUTE, intentFamily: "transport", primaryKeyword: "Galle to Mirissa" },
  { slug: "mirissa-to-ella", pageType: pageTypes.CITY_TO_CITY_ROUTE, intentFamily: "transport", primaryKeyword: "Mirissa to Ella" },
  { slug: "best-places-to-visit-from-ella", pageType: pageTypes.LOCATION_EXPERIENCE, intentFamily: "planning", destinationId: "ella" },
  { slug: "best-places-to-visit-from-kandy", pageType: pageTypes.LOCATION_EXPERIENCE, intentFamily: "planning", destinationId: "kandy" },
  { slug: "sri-lanka-beaches", pageType: pageTypes.EXPERIENCE_HUB, intentFamily: "experiences" },
  { slug: "sri-lanka-hill-country", pageType: pageTypes.EXPERIENCE_HUB, intentFamily: "experiences" },
  { slug: "sri-lanka-culture-ancient-cities", pageType: pageTypes.EXPERIENCE_HUB, intentFamily: "experiences" },
  { slug: "sri-lanka-surfing", pageType: pageTypes.EXPERIENCE_HUB, intentFamily: "experiences" },
  { slug: "south-coast-vs-east-coast", pageType: pageTypes.COMPARISON, intentFamily: "planning" },
  { slug: "private-driver-vs-rental-car", pageType: pageTypes.COMPARISON, intentFamily: "planning" },
  { slug: "sri-lanka-honeymoon", pageType: pageTypes.TRAVELER_INTENT, intentFamily: "planning" },
  { slug: "sri-lanka-family-travel", pageType: pageTypes.TRAVELER_INTENT, intentFamily: "planning" },
  { slug: "sri-lanka-budget-travel", pageType: pageTypes.TRAVELER_INTENT, intentFamily: "planning" },
  { slug: "how-to-travel-around-sri-lanka", pageType: pageTypes.QUESTION_GUIDE, intentFamily: "planning", primaryKeyword: "how to travel around Sri Lanka" },
  { slug: "how-much-does-a-sri-lanka-trip-cost", pageType: pageTypes.QUESTION_GUIDE, intentFamily: "planning", primaryKeyword: "how much does a Sri Lanka trip cost" },
  { slug: "best-places-to-visit-in-sri-lanka", pageType: pageTypes.QUESTION_GUIDE, intentFamily: "planning", primaryKeyword: "best places to visit in Sri Lanka" },
  { slug: "best-time-to-visit-sri-lanka", pageType: pageTypes.QUESTION_GUIDE, intentFamily: "planning", primaryKeyword: "best time to visit Sri Lanka" },
  { slug: "first-time-visitor-sri-lanka", pageType: pageTypes.QUESTION_GUIDE, intentFamily: "planning", primaryKeyword: "is Sri Lanka good for a first-time visitor" },
  { slug: "train-vs-private-car-sri-lanka", pageType: pageTypes.QUESTION_GUIDE, intentFamily: "planning", primaryKeyword: "Sri Lanka train vs private car" },

  // ---- PHASE 3 (search-intent domination) ----
  { slug: "ella-vs-kandy", pageType: pageTypes.COMPARISON, intentFamily: "planning", destinationId: "ella" },
  { slug: "galle-to-yala", pageType: pageTypes.CITY_TO_CITY_ROUTE, intentFamily: "transport", primaryKeyword: "Galle to Yala" },
  { slug: "unawatuna-to-ella", pageType: pageTypes.CITY_TO_CITY_ROUTE, intentFamily: "transport", primaryKeyword: "Unawatuna to Ella" },
  { slug: "is-sri-lanka-safe-for-tourists", pageType: pageTypes.QUESTION_GUIDE, intentFamily: "planning", primaryKeyword: "is Sri Lanka safe for tourists" },
  { slug: "can-i-travel-sri-lanka-without-a-car", pageType: pageTypes.QUESTION_GUIDE, intentFamily: "planning", primaryKeyword: "can I travel Sri Lanka without a car" },

  // ---- EXCLUDED FROM PUBLIC INDEX ----
  { slug: "vehicle-rentals", pageType: pageTypes.SOFT_DEINDEXED, intentFamily: "excluded", note: "Kept live for existing backlinks; removed from sitemap, nav, and schema in Phase 2. Still emits robots: index,follow by default (only not-found gets noindex) — see NEXT PHASE." },
  { slug: "acquire", pageType: pageTypes.INVESTOR_NOINDEX, intentFamily: "excluded" },
  { slug: "acquisition-overview", pageType: pageTypes.INVESTOR_NOINDEX, intentFamily: "excluded" },
  { slug: "ai-system", pageType: pageTypes.INVESTOR_NOINDEX, intentFamily: "excluded" },
  { slug: "valuation", pageType: pageTypes.INVESTOR_NOINDEX, intentFamily: "excluded" },
  { slug: "not-found", pageType: pageTypes.NOT_FOUND, intentFamily: "excluded" },
];

export function findSeoPage(slug) {
  return seoPages.find((page) => page.slug === slug);
}

export function findSeoPagesByType(pageType) {
  return seoPages.filter((page) => page.pageType === pageType);
}

export function findSeoPagesByDestination(destinationId) {
  return seoPages.filter((page) => page.destinationId === destinationId);
}

/** Every entry with an unresolved cannibalNote — the live worklist for a future canonicalization decision. */
export function findFlaggedCannibalization() {
  return seoPages.filter((page) => page.cannibalNote && !page.cannibalNote.resolved);
}

/**
 * FUTURE PAGE EVALUATION CRITERIA (STEP 7 of the Phase 6 brief).
 * Not a scoring algorithm — a checklist a human (or a future phase) runs
 * against a *specific proposed page* before building it. A page should not
 * proceed unless it can honestly answer yes to all six, with real data
 * backing the answer (never "yes, we'll figure out the content later").
 */
export const futurePageCriteria = [
  { key: "searchIntent", question: "Is someone realistically searching this exact phrase, not just a keyword-combination guess?" },
  { key: "businessValue", question: "Can the person searching this actually become a transport/tour customer of SKY specifically?" },
  { key: "uniqueness", question: "Does this page say something a sibling page (same city, same route type) doesn't already say?" },
  { key: "dataAvailability", question: "Do we have real destinations.js/routes.js/pricing.js/tours.js data to back every claim on the page — no invented times, prices, or attractions?" },
  { key: "internalLinkValue", question: "Can it link to and from real existing destinations/routes/tours via RelatedRoutes/RelatedTours/RelatedDestinations — no orphan page?" },
  { key: "conversionPath", question: "Does it have a clear, honest path to the AI planner, a booking request, or WhatsApp?" },
];

/**
 * Candidate future page types, NOT built in this phase. Each is a page
 * TYPE (reusing pageTypes above), not a list of URLs to generate — the
 * actual slug list is decided per-candidate against futurePageCriteria in
 * a later phase, destination by destination, not as a blanket sweep.
 *
 *   PRIVATE_DRIVER / MULTI_DAY_CHAUFFEUR (destination-anchored) —
 *     "Private Driver in <City>" — distinct from CITY_TAXI (point-to-point)
 *     because it's about a dedicated driver for that destination as a base.
 *     The island-wide cannibalization cluster this once depended on was
 *     resolved in Phase 7 (genuine content differentiation, not just a
 *     canonical), so a destination-anchored variant is no longer blocked —
 *     reasonable next candidate, but only for the split that already has a
 *     real single-day-vs-multi-day distinction, not a fresh idea.
 *   MULTI_DAY_TOUR (duration-anchored) — "5-Day Sri Lanka Tour" etc.
 *     Real gap: round-tours.js already HAS 2/3/5/7/10-day packages with
 *     real prices; a duration-anchored landing page could exist without
 *     inventing anything, just re-presenting real catalog data filtered by
 *     duration. Reasonable next candidate.
 *   DESTINATION (per-destination dedicated page, distinct from the taxi
 *     page) — NOT recommended: would directly cannibalize the existing
 *     X-taxi-service pages, which already carry real destination content
 *     (attractions, routes, FAQ) alongside the transport angle.
 */
export const futurePageTypeCandidates = ["multi-day-tour (duration-anchored)", "private-driver / multi-day-chauffeur (destination-anchored)"];
