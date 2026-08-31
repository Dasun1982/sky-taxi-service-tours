/**
 * SEO opportunity map for SKY Taxi Service & Tours.
 *
 * PHASE 1 — COMPREHENSIVE SEO ARCHITECTURE
 *
 * This is a PLANNING registry, not a page store — it does not render
 * anything and no page reads from it directly. Its job is to give every
 * future SEO decision one place to check "has this already been evaluated,
 * and what did we decide" before a new page gets proposed, so the same
 * candidate is never silently re-evaluated twice or built as an accidental
 * near-duplicate of something already live.
 *
 * Every opportunity is tagged with:
 *   dimension — which of the search-intent axes it belongs to (see
 *     opportunityDimensions below): a real tourist can reach SKY by
 *     searching a destination, an experience, a traveler-type modifier, a
 *     trip length, a transport need, a tour type, a question, a comparison,
 *     a location+experience combination, a season, or a specific route.
 *   status — see opportunityStatus. LIVE means a real page already serves
 *     this intent (linked via `slug`). TIER_1/2/3 means NOT built yet,
 *     ranked by how directly it can be answered with real, existing data
 *     (destinations.js, routes.js, tours.js, pricing.js) without inventing
 *     anything. BLOCKED means the honest answer is "we don't have the
 *     underlying data yet" — these are listed so a future phase doesn't
 *     waste time re-discovering the same gap, not so they get built anyway.
 *
 * Adding a new LIVE entry here does not create a page — see seoPages.js for
 * the actual page-inventory registry (title/description/canonical/schema
 * still live in travelData.js/App.jsx/schemaData.js, per that file's own
 * header comment). This file exists one layer up: it is where a page idea
 * gets evaluated against futurePageCriteria (seoPages.js) before it
 * graduates into a real seoPages.js entry and a real route.
 */

export const opportunityDimensions = {
  DESTINATION: "destination",
  EXPERIENCE: "experience",
  TRAVELER_INTENT: "traveler-intent",
  TRIP_LENGTH: "trip-length",
  TRANSPORT: "transport",
  TOUR_INTENT: "tour-intent",
  QUESTION: "question",
  COMPARISON: "comparison",
  LOCATION_EXPERIENCE: "location-experience",
  SEASONAL: "seasonal",
  ORIGIN_DESTINATION_ROUTE: "origin-destination-route",
  LONG_TAIL: "long-tail",
};

export const opportunityStatus = {
  LIVE: "live",
  TIER_1: "tier-1", // highest-value, real data already backs every claim — build first
  TIER_2: "tier-2", // strong long-tail value, real data exists but page doesn't justify itself alone yet
  TIER_3: "tier-3", // only build if real demand/content value emerges — do not build speculatively
  BLOCKED: "blocked", // cannot be built honestly yet — no real source data (never fabricate to unblock)
};

/**
 * ---- DESTINATIONS ----
 * Coverage against destinations.js (20 real destinations). A destination
 * only reaches LIVE once it has both a verified `image` AND a dedicated
 * page — matching the same bar destinations.js itself already applies via
 * `browsableDestinations = destinations.filter(d => d.image && d.seoSlug)`.
 */
export const destinationOpportunities = [
  { id: "ella", dimension: opportunityDimensions.DESTINATION, query: "Ella Sri Lanka", status: opportunityStatus.LIVE, slug: "ella-taxi-service" },
  { id: "kandy", dimension: opportunityDimensions.DESTINATION, query: "Kandy Sri Lanka", status: opportunityStatus.LIVE, slug: "kandy-taxi-service" },
  { id: "galle", dimension: opportunityDimensions.DESTINATION, query: "Galle Sri Lanka", status: opportunityStatus.LIVE, slug: "galle-taxi-service" },
  { id: "galle-fort", dimension: opportunityDimensions.DESTINATION, query: "Galle Fort", status: opportunityStatus.TIER_2, note: "Currently a section of galle-taxi-service, not a standalone page. Real content exists (popularFor, images) but a split page would need to earn its place against the existing Galle page rather than thin it out — see futurePageCriteria's uniqueness test." },
  { id: "unawatuna", dimension: opportunityDimensions.DESTINATION, query: "Unawatuna Sri Lanka", status: opportunityStatus.LIVE, slug: "unawatuna-taxi-service" },
  { id: "dalawella", dimension: opportunityDimensions.DESTINATION, query: "Dalawella beach", status: opportunityStatus.BLOCKED, note: "Mentioned only as a Unawatuna sub-area in copy, no destinations.js entry, no image, no independent data — would need real content first." },
  { id: "jungle-beach", dimension: opportunityDimensions.DESTINATION, query: "Jungle Beach Unawatuna", status: opportunityStatus.BLOCKED, note: "Same gap as Dalawella — real place, mentioned in copy and imagery (images.jungleBeach), but no standalone data record." },
  { id: "koggala", dimension: opportunityDimensions.DESTINATION, query: "Koggala Sri Lanka", status: opportunityStatus.BLOCKED, note: "Not in destinations.js at all. Needs real destination data (popularFor, categories, at minimum a verified image) before any page can be built without inventing content." },
  { id: "habaraduwa", dimension: opportunityDimensions.DESTINATION, query: "Habaraduwa Sri Lanka", status: opportunityStatus.BLOCKED, note: "Not in destinations.js. Same gap as Koggala." },
  { id: "weligama", dimension: opportunityDimensions.DESTINATION, query: "Weligama Sri Lanka", status: opportunityStatus.LIVE, slug: "weligama-taxi-service" },
  { id: "mirissa", dimension: opportunityDimensions.DESTINATION, query: "Mirissa Sri Lanka", status: opportunityStatus.LIVE, slug: "mirissa-taxi-service" },
  { id: "matara", dimension: opportunityDimensions.DESTINATION, query: "Matara Sri Lanka", status: opportunityStatus.BLOCKED, note: "Not in destinations.js." },
  { id: "hiriketiya", dimension: opportunityDimensions.DESTINATION, query: "Hiriketiya Sri Lanka", status: opportunityStatus.LIVE, slug: "hiriketiya-taxi-service" },
  { id: "tangalle", dimension: opportunityDimensions.DESTINATION, query: "Tangalle Sri Lanka", status: opportunityStatus.BLOCKED, note: "Not in destinations.js." },
  { id: "sigiriya", dimension: opportunityDimensions.DESTINATION, query: "Sigiriya Sri Lanka", status: opportunityStatus.LIVE, slug: "sigiriya-taxi-service" },
  { id: "nuwara-eliya", dimension: opportunityDimensions.DESTINATION, query: "Nuwara Eliya Sri Lanka", status: opportunityStatus.LIVE, slug: "nuwara-eliya-taxi-service" },
  { id: "yala", dimension: opportunityDimensions.DESTINATION, query: "Yala National Park", status: opportunityStatus.LIVE, slug: "yala-safari-transfer" },
  { id: "udawalawe", dimension: opportunityDimensions.DESTINATION, query: "Udawalawe National Park", status: opportunityStatus.BLOCKED, note: "Not in destinations.js — no safari-transfer product for it exists yet the way Yala has one. Building this page would require a real product decision first, not just content." },
  { id: "sinharaja", dimension: opportunityDimensions.DESTINATION, query: "Sinharaja Sri Lanka", status: opportunityStatus.LIVE, slug: "sinharaja", note: "PHASE 2: built, framed around the real one-day-tour product rather than the taxi-page template." },
  { id: "bentota", dimension: opportunityDimensions.DESTINATION, query: "Bentota Sri Lanka", status: opportunityStatus.LIVE, slug: "bentota-taxi-service" },
  { id: "hikkaduwa", dimension: opportunityDimensions.DESTINATION, query: "Hikkaduwa Sri Lanka", status: opportunityStatus.BLOCKED, note: "Not in destinations.js." },
  { id: "arugam-bay", dimension: opportunityDimensions.DESTINATION, query: "Arugam Bay Sri Lanka", status: opportunityStatus.LIVE, slug: "arugam-bay-taxi-service" },
  { id: "trincomalee", dimension: opportunityDimensions.DESTINATION, query: "Trincomalee Sri Lanka", status: opportunityStatus.TIER_2, note: "Has destinations.js data, appears in two real round-tour itineraries, but no image and no seoSlug." },
  { id: "jaffna", dimension: opportunityDimensions.DESTINATION, query: "Jaffna Sri Lanka", status: opportunityStatus.TIER_2, note: "Has destinations.js data, appears in the 10-day tour itinerary, but no image and no seoSlug." },
  { id: "anuradhapura", dimension: opportunityDimensions.DESTINATION, query: "Anuradhapura Sri Lanka", status: opportunityStatus.TIER_2, note: "Has destinations.js data, appears in one real tour itinerary, but no image and no seoSlug." },
  { id: "polonnaruwa", dimension: opportunityDimensions.DESTINATION, query: "Polonnaruwa Sri Lanka", status: opportunityStatus.TIER_2, note: "Has destinations.js data, appears in one real tour itinerary, but no image and no seoSlug." },
  { id: "dambulla", dimension: opportunityDimensions.DESTINATION, query: "Dambulla Sri Lanka", status: opportunityStatus.LIVE, slug: "dambulla-taxi-service" },
  { id: "kitulgala", dimension: opportunityDimensions.DESTINATION, query: "Kitulgala Sri Lanka", status: opportunityStatus.BLOCKED, note: "Not in destinations.js, no whitewater/adventure product exists on the site yet." },
  { id: "colombo", dimension: opportunityDimensions.DESTINATION, query: "Colombo Sri Lanka", status: opportunityStatus.LIVE, slug: "colombo", note: "PHASE 2: built. destinations.js seoSlug now set to /colombo, so it also appears automatically in the Destinations.jsx grid and negombo's RelatedDestinations." },
];

/**
 * ---- EXPERIENCES ----
 * `/experiences` and `/wildlife` already exist as hubs. Wildlife/safari is
 * genuinely deep (16 real photographed species + a real transfer product).
 * Everything else on the user's requested experience list is currently
 * only a paragraph inside `/experiences`, not a dedicated page — flagged
 * TIER_2/3 rather than TIER_1, because a dedicated page for e.g. "Sri Lanka
 * hiking" would need real hike-specific content (which trails, which
 * destinations) that doesn't exist as structured data yet; building it as
 * a thin rewrite of the existing paragraph would be exactly the "keyword
 * variation with identical content" the brief prohibits.
 */
export const experienceOpportunities = [
  { id: "wildlife-safari", dimension: opportunityDimensions.EXPERIENCE, query: "Sri Lanka wildlife / safari", status: opportunityStatus.LIVE, slug: "wildlife" },
  { id: "beaches", dimension: opportunityDimensions.EXPERIENCE, query: "Sri Lanka beaches", status: opportunityStatus.LIVE, slug: "sri-lanka-beaches", note: "PHASE 2: built as an 8-destination hub (south coast, east coast, near-Colombo)." },
  { id: "tea-plantations", dimension: opportunityDimensions.EXPERIENCE, query: "Sri Lanka tea plantations", status: opportunityStatus.TIER_2, note: "Nuwara Eliya's real popularFor already covers this; a dedicated page would need to differentiate from nuwara-eliya-taxi-service, not restate it." },
  { id: "train-journeys", dimension: opportunityDimensions.EXPERIENCE, query: "Sri Lanka train journeys", status: opportunityStatus.TIER_2, note: "Referenced across Ella/travel-guide copy (images.trainRide) but never as a standalone page with real timetable/route content." },
  { id: "hiking", dimension: opportunityDimensions.EXPERIENCE, query: "Sri Lanka hiking", status: opportunityStatus.TIER_2, note: "Real hooks exist (Little Adam's Peak in Ella's popularFor, Pidurangala in experiences.jsx) but no structured trail-level data yet." },
  { id: "waterfalls", dimension: opportunityDimensions.EXPERIENCE, query: "Sri Lanka waterfalls", status: opportunityStatus.BLOCKED, note: "Mentioned generically (\"waterfalls\" in Ella's description, Sinharaja's popularFor) with no named, verifiable waterfall data — building this page today would mean inventing specifics." },
  { id: "surfing", dimension: opportunityDimensions.EXPERIENCE, query: "Sri Lanka surfing", status: opportunityStatus.LIVE, slug: "sri-lanka-surfing", note: "PHASE 2: built as a 3-destination hub (Weligama, Hiriketiya, Arugam Bay)." },
  { id: "snorkeling-diving", dimension: opportunityDimensions.EXPERIENCE, query: "Sri Lanka snorkeling / diving", status: opportunityStatus.BLOCKED, note: "No destination in destinations.js is tagged for this, no dive-site data exists." },
  { id: "whale-watching", dimension: opportunityDimensions.EXPERIENCE, query: "Sri Lanka whale watching", status: opportunityStatus.TIER_2, note: "Real, specific data exists (Mirissa's popularFor lists Whale Watching, images.whaleWatching is a real photo) — currently only a bullet on the Mirissa page, not deep enough for a standalone yet." },
  { id: "mountains-hill-country", dimension: opportunityDimensions.EXPERIENCE, query: "Sri Lanka mountains / hill country", status: opportunityStatus.LIVE, slug: "sri-lanka-hill-country", note: "PHASE 2: built (Ella, Kandy, Nuwara Eliya). \"Sri Lanka Mountains\" was deliberately not built as a second page — same 3 destinations, would be a near-duplicate." },
  { id: "rainforest", dimension: opportunityDimensions.EXPERIENCE, query: "Sri Lanka rainforest", status: opportunityStatus.TIER_2, note: "Sinharaja is real (rainforest reserve, real popularFor) but has no seoSlug yet — this experience page and the Sinharaja destination page are really the same underlying gap." },
  { id: "culture-temples-history", dimension: opportunityDimensions.EXPERIENCE, query: "Sri Lanka culture / temples / history", status: opportunityStatus.LIVE, slug: "sri-lanka-culture-ancient-cities", note: "PHASE 2: built (Kandy, Sigiriya, Dambulla, Galle), merging the brief's three near-identical requests (\"Culture\", \"Ancient Cities\", \"Temples and Heritage\") into one substantive page rather than three thin ones drawing from the same 4 destinations. Names an honest gap note for Anuradhapura/Polonnaruwa (real tour data, no dedicated page)." },
  { id: "food", dimension: opportunityDimensions.EXPERIENCE, query: "Sri Lanka food", status: opportunityStatus.BLOCKED, note: "No structured food/cuisine data exists anywhere in the project — would be pure invention today." },
  { id: "photography", dimension: opportunityDimensions.EXPERIENCE, query: "Sri Lanka photography", status: opportunityStatus.BLOCKED, note: "No dedicated content angle exists beyond the fact the site's own photos are real (already stated on /wildlife) — not enough for a standalone page without filler." },
  { id: "scenic-drives", dimension: opportunityDimensions.EXPERIENCE, query: "Sri Lanka scenic drives", status: opportunityStatus.TIER_3, note: "Would overlap heavily with /transport and /travel-guide's existing \"why a private driver\" content — only worth building if it can say something genuinely new." },
  { id: "adventure", dimension: opportunityDimensions.EXPERIENCE, query: "Sri Lanka adventure", status: opportunityStatus.TIER_3, note: "Already one of the six /experiences sections — a standalone page would need new material beyond what's already there to avoid duplicating it." },
  { id: "honeymoon-romantic", dimension: opportunityDimensions.EXPERIENCE, query: "Sri Lanka honeymoon / romantic experiences", status: opportunityStatus.LIVE, slug: "sri-lanka-honeymoon", note: "PHASE 2: built — see travelerIntentOpportunities for the matching entry." },
  { id: "family-activities", dimension: opportunityDimensions.EXPERIENCE, query: "Sri Lanka family activities", status: opportunityStatus.LIVE, slug: "sri-lanka-family-travel", note: "PHASE 2: built around Unawatuna's real \"family\" tag — see travelerIntentOpportunities." },
  { id: "local-experiences", dimension: opportunityDimensions.EXPERIENCE, query: "Sri Lanka local experiences", status: opportunityStatus.LIVE, note: "Already covered as the \"Local Life\" section of /experiences (stilt fishermen, markets, food stops)." },
];

/**
 * ---- TRAVELER INTENT ----
 * Deliberately framed around what the traveler needs (pace, budget,
 * privacy, group size), never a demographic assumption — matching the
 * brief's explicit instruction not to stereotype.
 */
export const travelerIntentOpportunities = [
  { id: "honeymoon-couples", dimension: opportunityDimensions.TRAVELER_INTENT, query: "Sri Lanka honeymoon / romantic places", status: opportunityStatus.LIVE, slug: "sri-lanka-honeymoon", note: "PHASE 2: built from real quiet-beach + hill-country data (Hiriketiya, Unawatuna, Ella, Nuwara Eliya) and the real private-driver flexibility angle — no invented \"couples package\"." },
  { id: "family-travel", dimension: opportunityDimensions.TRAVELER_INTENT, query: "Sri Lanka with children / family-friendly", status: opportunityStatus.LIVE, slug: "sri-lanka-family-travel", note: "PHASE 2: built around Unawatuna's real \"family\" tag plus vehicle-sizing content." },
  { id: "solo-travel", dimension: opportunityDimensions.TRAVELER_INTENT, query: "Solo Sri Lanka travel", status: opportunityStatus.TIER_2, note: "No real safety-specific data exists to cite — would need to stay general (private driver reduces logistics/safety unknowns) rather than make unverifiable safety claims." },
  { id: "luxury-travel", dimension: opportunityDimensions.TRAVELER_INTENT, query: "Luxury Sri Lanka / private luxury tour", status: opportunityStatus.BLOCKED, note: "No luxury-tier vehicle, hotel, or pricing data exists in vehicles.js/pricing.js — building this page today would mean implying a product tier SKY doesn't document anywhere." },
  { id: "budget-travel", dimension: opportunityDimensions.TRAVELER_INTENT, query: "Budget Sri Lanka / affordable itinerary", status: opportunityStatus.LIVE, slug: "sri-lanka-budget-travel", note: "PHASE 2: the broader guide is now also built (beyond budget-taxi-sri-lanka's taxi-only angle), using real one-day-tour pricing." },
  { id: "adventure-travelers", dimension: opportunityDimensions.TRAVELER_INTENT, query: "Adventure Sri Lanka", status: opportunityStatus.TIER_3, note: "Overlaps the EXPERIENCE \"adventure\" entry above — same gap, same recommendation." },
];

/**
 * ---- TRIP LENGTH ----
 * The only durations that can honestly get a dedicated page are the ones
 * with a REAL priced product in tours.js/pricing.js. Building a page for
 * every number the brief lists (3/4/6/8/9/12/14/21 days) would mean
 * inventing an itinerary that doesn't exist as a bookable product — the
 * exact "duplicate itinerary page" / "fake availability" spam pattern the
 * brief prohibits. Durations with no real tour are BLOCKED, not TIER_3.
 */
export const tripLengthOpportunities = [
  { id: "2-days", dimension: opportunityDimensions.TRIP_LENGTH, query: "Sri Lanka 2 days", status: opportunityStatus.LIVE, slug: "2-days-in-sri-lanka", note: "PHASE 2: built around kandy-nuwara-eliya-ella-2-day-tour, with ella-2-day-tour shown as a real alternate option." },
  { id: "3-days", dimension: opportunityDimensions.TRIP_LENGTH, query: "Sri Lanka 3 days", status: opportunityStatus.LIVE, slug: "3-days-in-sri-lanka", note: "PHASE 2: built around sigiriya-kandy-nuwara-eliya-ella-3-day-tour." },
  { id: "4-days", dimension: opportunityDimensions.TRIP_LENGTH, query: "Sri Lanka 4 days", status: opportunityStatus.BLOCKED, note: "No 4-day product exists in tours.js/pricing.js." },
  { id: "5-days", dimension: opportunityDimensions.TRIP_LENGTH, query: "Sri Lanka 5 days", status: opportunityStatus.LIVE, slug: "5-day-sri-lanka-tour" },
  { id: "6-days", dimension: opportunityDimensions.TRIP_LENGTH, query: "Sri Lanka 6 days", status: opportunityStatus.BLOCKED, note: "No 6-day product exists." },
  { id: "7-days", dimension: opportunityDimensions.TRIP_LENGTH, query: "Sri Lanka 7 days", status: opportunityStatus.LIVE, slug: "7-days-in-sri-lanka", note: "PHASE 2: built around cultural-heritage-hill-country-wildlife-7-day-tour." },
  { id: "8-days", dimension: opportunityDimensions.TRIP_LENGTH, query: "Sri Lanka 8 days", status: opportunityStatus.BLOCKED, note: "No 8-day product exists." },
  { id: "9-days", dimension: opportunityDimensions.TRIP_LENGTH, query: "Sri Lanka 9 days", status: opportunityStatus.BLOCKED, note: "No 9-day product exists." },
  { id: "10-days", dimension: opportunityDimensions.TRIP_LENGTH, query: "Sri Lanka 10 days", status: opportunityStatus.LIVE, slug: "10-days-in-sri-lanka", note: "PHASE 2: built around north-east-cultural-heritage-hill-country-wildlife-10-day-tour." },
  { id: "12-days", dimension: opportunityDimensions.TRIP_LENGTH, query: "Sri Lanka 12 days", status: opportunityStatus.BLOCKED, note: "No 12-day product exists." },
  { id: "14-days", dimension: opportunityDimensions.TRIP_LENGTH, query: "Sri Lanka 14 days / 2 weeks", status: opportunityStatus.BLOCKED, note: "No 14-day product exists." },
  { id: "21-days", dimension: opportunityDimensions.TRIP_LENGTH, query: "Sri Lanka 3 weeks", status: opportunityStatus.BLOCKED, note: "No 21-day product exists." },
  { id: "how-many-days-question", dimension: opportunityDimensions.QUESTION, query: "How many days do I need in Sri Lanka?", status: opportunityStatus.TIER_1, note: "Doesn't need a specific product — answerable honestly today by comparing the real duration options that DO exist (Full day / 2 / 3 / 5 / 7 / 10 days) and what each realistically covers." },
];

/**
 * ---- TRANSPORT ----
 * The transport/service family is already the site's deepest, most mature
 * SEO cluster (13 CITY_TAXI pages, 13 AIRPORT_TO_CITY pages, 2 hubs, 3
 * driver-type pages). Remaining gaps are specific named CITY-TO-CITY routes
 * (not airport-anchored), which the brief explicitly says not to expand
 * into "thousands of route pages" — only the highest-demand ones are
 * flagged, and only where at least the two endpoints are real, live
 * destinations (never a route between two places with no page at all).
 */
export const transportOpportunities = [
  { id: "colombo-galle", dimension: opportunityDimensions.ORIGIN_DESTINATION_ROUTE, query: "Colombo to Galle", status: opportunityStatus.LIVE, slug: "airport-to-galle", note: "Colombo in this context is almost always the airport transfer intent, already served." },
  { id: "galle-ella", dimension: opportunityDimensions.ORIGIN_DESTINATION_ROUTE, query: "Galle to Ella", status: opportunityStatus.TIER_1, note: "Both real destinations with real pages; no verified travel-time source exists for this specific city-to-city leg (only airport-anchored times exist in routes.js) — buildable honestly using the same 'confirmed on WhatsApp' fallback routes.js already uses for unverified times, without a fabricated hour figure." },
  { id: "ella-kandy", dimension: opportunityDimensions.ORIGIN_DESTINATION_ROUTE, query: "Ella to Kandy", status: opportunityStatus.LIVE, slug: "ella-to-kandy", note: "PHASE 2: built using the same honest \"confirmed on WhatsApp\" fallback as Galle-Ella — no fabricated time." },
  { id: "kandy-sigiriya", dimension: opportunityDimensions.ORIGIN_DESTINATION_ROUTE, query: "Kandy to Sigiriya", status: opportunityStatus.LIVE, slug: "kandy-to-sigiriya", note: "PHASE 2: built, same honest time-fallback pattern." },
  { id: "sigiriya-yala", dimension: opportunityDimensions.ORIGIN_DESTINATION_ROUTE, query: "Sigiriya to Yala", status: opportunityStatus.LIVE, slug: "sigiriya-to-yala", note: "PHASE 2: built — real touristic demand evidenced by the 7-day and 10-day tours combining culture with wildlife, even though destinations.js's relatedDestinations graph doesn't directly link the two." },
  { id: "galle-mirissa", dimension: opportunityDimensions.ORIGIN_DESTINATION_ROUTE, query: "Galle to Mirissa", status: opportunityStatus.LIVE, slug: "galle-to-mirissa", note: "PHASE 2: built." },
  { id: "mirissa-ella", dimension: opportunityDimensions.ORIGIN_DESTINATION_ROUTE, query: "Mirissa to Ella", status: opportunityStatus.LIVE, slug: "mirissa-to-ella", note: "PHASE 2: built." },
  { id: "galle-yala", dimension: opportunityDimensions.ORIGIN_DESTINATION_ROUTE, query: "Galle to Yala", status: opportunityStatus.LIVE, slug: "galle-to-yala", note: "PHASE 3: built — real demand evidenced by the 10-day tour combining Galle and Yala." },
  { id: "unawatuna-ella", dimension: opportunityDimensions.ORIGIN_DESTINATION_ROUTE, query: "Unawatuna to Ella", status: opportunityStatus.LIVE, slug: "unawatuna-to-ella", note: "PHASE 3: built as an alternate south-coast starting point alongside the existing Galle-to-Ella and Mirissa-to-Ella guides." },
  { id: "unawatuna-mirissa", dimension: opportunityDimensions.ORIGIN_DESTINATION_ROUTE, query: "Unawatuna to Mirissa", status: opportunityStatus.TIER_3, note: "Short, already-adjacent south-coast hop, already cross-linked — low incremental value over the existing destination pages." },
  { id: "private-driver-worth-it", dimension: opportunityDimensions.QUESTION, query: "Is a private driver worth it in Sri Lanka?", status: opportunityStatus.LIVE, slug: "is-a-private-driver-worth-it" },
  { id: "private-driver-vs-rental-car", dimension: opportunityDimensions.COMPARISON, query: "Private driver vs rental car Sri Lanka", status: opportunityStatus.LIVE, slug: "private-driver-vs-rental-car", note: "PHASE 2: built as a dedicated comparison table, genuinely structured differently from the is-a-private-driver-worth-it question page." },
  { id: "train-vs-private-car", dimension: opportunityDimensions.COMPARISON, query: "Sri Lanka train vs private car", status: opportunityStatus.LIVE, slug: "train-vs-private-car-sri-lanka", note: "PHASE 2: built honestly without specific train fares/timetables — qualitative comparison only (scenery, schedule, door-to-door), consistent with the site's no-fabrication rule." },
  { id: "how-to-travel-around", dimension: opportunityDimensions.QUESTION, query: "How do I travel around Sri Lanka? / How to get around Sri Lanka", status: opportunityStatus.LIVE, slug: "how-to-travel-around-sri-lanka", note: "PHASE 2: built (merged two near-identical brief phrasings into one page)." },
  { id: "trip-cost", dimension: opportunityDimensions.QUESTION, query: "How much does a Sri Lanka trip cost?", status: opportunityStatus.LIVE, slug: "how-much-does-a-sri-lanka-trip-cost", note: "PHASE 2: built entirely from real pricing.js figures — no invented averages." },
  { id: "best-places-question", dimension: opportunityDimensions.QUESTION, query: "What are the best places to visit in Sri Lanka? / Where should I go?", status: opportunityStatus.LIVE, slug: "best-places-to-visit-in-sri-lanka", note: "PHASE 2: built as a curated region-by-region narrative, distinct from the full Destinations.jsx grid." },
  { id: "first-time-visitor", dimension: opportunityDimensions.QUESTION, query: "Is Sri Lanka good for a first-time visitor?", status: opportunityStatus.LIVE, slug: "first-time-visitor-sri-lanka", note: "PHASE 2: built." },
  { id: "is-sri-lanka-expensive", dimension: opportunityDimensions.QUESTION, query: "Is Sri Lanka expensive?", status: opportunityStatus.LIVE, slug: "how-much-does-a-sri-lanka-trip-cost", note: "PHASE 3 evaluation: CONSOLIDATE, not a new page — this is the same underlying query as \"how much does a Sri Lanka trip cost\", already answered with real pricing.js figures. A second page would be a near-duplicate over the same data." },
  { id: "how-much-is-a-taxi", dimension: opportunityDimensions.QUESTION, query: "How much is a taxi in Sri Lanka?", status: opportunityStatus.LIVE, slug: "taxi", note: "PHASE 3 evaluation: CONSOLIDATE — /taxi already shows real per-km pricing (taxiRatePerKm) but had zero FAQ content; added a matching visible+schema FAQ section rather than building a new page." },
  { id: "how-much-is-a-private-driver", dimension: opportunityDimensions.QUESTION, query: "How much does a private driver cost?", status: opportunityStatus.LIVE, slug: "how-much-does-a-sri-lanka-trip-cost", note: "PHASE 3 evaluation: CONSOLIDATE — already covered between is-a-private-driver-worth-it (no fixed price, confirmed on WhatsApp) and the real pricing table on how-much-does-a-sri-lanka-trip-cost. A dedicated page would restate one of the two." },
  { id: "safe-for-tourists", dimension: opportunityDimensions.QUESTION, query: "Is Sri Lanka safe for tourists?", status: opportunityStatus.LIVE, slug: "is-sri-lanka-safe-for-tourists", note: "PHASE 3: built with deliberately no invented safety statistics or ratings — general guidance only, explicitly directing readers to official government travel advisories for authoritative safety information." },
  { id: "travel-without-a-car", dimension: opportunityDimensions.QUESTION, query: "Can I travel Sri Lanka without a car?", status: opportunityStatus.LIVE, slug: "can-i-travel-sri-lanka-without-a-car", note: "PHASE 3: built." },
  { id: "itinerary-first-time", dimension: opportunityDimensions.QUESTION, query: "Sri Lanka itinerary for first-time visitors", status: opportunityStatus.LIVE, slug: "first-time-visitor-sri-lanka", note: "PHASE 3 evaluation: CONSOLIDATE — same intent as first-time-visitor-sri-lanka + how-many-days-in-sri-lanka combined; a dedicated \"itinerary\" page would restate both." },
];

/**
 * ---- TOUR INTENT ----
 * /tours, /one-day-tours, /round-tours, /driver-guide-sri-lanka,
 * /private-driver-sri-lanka, /sri-lanka-tour-driver already cover most of
 * the phrasing variants the brief lists (customized/tailor-made/guided/
 * driver/round/day/multi-day/sightseeing). The remaining named intents are
 * THEME-anchored (wildlife tours, cultural tours, beach tours, honeymoon
 * tours) rather than a new structural page type — these are the same
 * "experience" and "traveler intent" gaps already listed above, viewed
 * through a commercial-tour lens, not a separate build.
 */
export const tourIntentOpportunities = [
  { id: "general-tour-phrasing", dimension: opportunityDimensions.TOUR_INTENT, query: "private / customized / tailor-made / guided / round / day / multi-day / sightseeing tours", status: opportunityStatus.LIVE, note: "Covered across /tours, /one-day-tours, /round-tours, /driver-guide-sri-lanka, /private-driver-sri-lanka, /sri-lanka-tour-driver." },
  { id: "wildlife-tours", dimension: opportunityDimensions.TOUR_INTENT, query: "Sri Lanka wildlife tours", status: opportunityStatus.LIVE, slug: "wildlife", note: "Served by /wildlife plus the real Yala safari transfer product." },
  { id: "cultural-tours", dimension: opportunityDimensions.TOUR_INTENT, query: "Sri Lanka cultural tours", status: opportunityStatus.TIER_2, note: "Same gap as the EXPERIENCE culture/temples/history entry." },
  { id: "beach-tours", dimension: opportunityDimensions.TOUR_INTENT, query: "Sri Lanka beach tours", status: opportunityStatus.TIER_1, note: "Same underlying content as the EXPERIENCE beaches entry — one page can honestly serve both the experience search and the commercial tour search." },
  { id: "honeymoon-tours", dimension: opportunityDimensions.TOUR_INTENT, query: "Sri Lanka honeymoon tours", status: opportunityStatus.TIER_2, note: "Same underlying content as the TRAVELER_INTENT honeymoon entry — build the traveler-intent page first, this can link to it rather than duplicate it." },
];

/**
 * ---- COMPARISONS ----
 * Only pairs where BOTH sides already have real, substantive destinations.js
 * content are listed — a comparison with an invented side would be worse
 * than no page at all.
 */
export const comparisonOpportunities = [
  { id: "ella-vs-nuwara-eliya", dimension: opportunityDimensions.COMPARISON, query: "Ella vs Nuwara Eliya", status: opportunityStatus.TIER_1, note: "Both destinations have rich, distinct real content (Ella: hiking/adventure/train; Nuwara Eliya: tea plantations/colonial climate) and a real combined tour (kandy-nuwara-eliya-ella-2-day-tour) proving they're a genuine decision point for real travelers." },
  { id: "unawatuna-vs-mirissa", dimension: opportunityDimensions.COMPARISON, query: "Unawatuna vs Mirissa", status: opportunityStatus.LIVE, slug: "unawatuna-vs-mirissa", note: "PHASE 2: built." },
  { id: "galle-vs-colombo", dimension: opportunityDimensions.COMPARISON, query: "Galle vs Colombo", status: opportunityStatus.LIVE, slug: "galle-vs-colombo", note: "PHASE 2: built now that the Colombo destination page exists." },
  { id: "yala-vs-udawalawe", dimension: opportunityDimensions.COMPARISON, query: "Yala vs Udawalawe", status: opportunityStatus.BLOCKED, note: "Udawalawe has no destinations.js entry and no product — cannot honestly compare against a place with no verified data." },
  { id: "sigiriya-vs-ella", dimension: opportunityDimensions.COMPARISON, query: "Sigiriya vs Ella", status: opportunityStatus.LIVE, slug: "sigiriya-vs-ella", note: "PHASE 2: built, framed honestly around the real trip-stage sequencing (culture first, then hill country) rather than a forced either/or, with the real 3-day tour offered as the \"don't choose\" option." },
  { id: "south-vs-east-coast", dimension: opportunityDimensions.COMPARISON, query: "South Coast vs East Coast", status: opportunityStatus.LIVE, slug: "south-coast-vs-east-coast", note: "PHASE 2: built, honestly noting the East Coast side is thin (Arugam Bay only; Trincomalee flagged as a real gap)." },
  { id: "ella-vs-kandy", dimension: opportunityDimensions.COMPARISON, query: "Ella vs Kandy", status: opportunityStatus.LIVE, slug: "ella-vs-kandy", note: "PHASE 3: built — both real, distinct data (hiking vs. culture), and the real 3-day tour combines both." },
  { id: "sri-lanka-vs-maldives", dimension: opportunityDimensions.COMPARISON, query: "Sri Lanka vs Maldives", status: opportunityStatus.BLOCKED, note: "PHASE 3 evaluation: deliberately NOT built. SKY has zero first-party data about Maldives anywhere in the project (no destinations, no pricing, no product) — any comparative claim (cost, logistics, scale) would have to be invented. A travel-driver business also has no legitimate first-party basis to publish claims about a competing country. If this is genuinely wanted, it would need externally-sourced, cited data, which is out of scope for this project's own content." },
];

/**
 * ---- LOCATION + EXPERIENCE COMBINATIONS ----
 * The highest-leverage dimension: real relatedDestinations relationships
 * already exist for every major hub, so "X near Y" pages can be built
 * entirely from data that's already verified and already live elsewhere,
 * just not yet packaged as its own answer to that specific search phrase.
 */
export const locationExperienceOpportunities = [
  { id: "beaches-near-galle", dimension: opportunityDimensions.LOCATION_EXPERIENCE, query: "Best beaches near Galle", status: opportunityStatus.TIER_1, note: "Galle's real relatedDestinations (Unawatuna, Mirissa, Weligama, Bentota) are all beach-categorized with real images/pages — a genuine, non-invented round-up." },
  { id: "things-to-do-in-galle", dimension: opportunityDimensions.LOCATION_EXPERIENCE, query: "Things to do in Galle", status: opportunityStatus.LIVE, slug: "things-to-do-in-galle", note: "PHASE 2: built — activity-focused framing (Galle's own popularFor), deliberately distinct from the transport-focused galle-taxi-service page." },
  { id: "things-to-do-in-unawatuna", dimension: opportunityDimensions.LOCATION_EXPERIENCE, query: "Things to do in Unawatuna", status: opportunityStatus.LIVE, slug: "things-to-do-in-unawatuna", note: "PHASE 2: built." },
  { id: "things-to-do-in-ella", dimension: opportunityDimensions.LOCATION_EXPERIENCE, query: "Things to do in Ella", status: opportunityStatus.LIVE, slug: "things-to-do-in-ella", note: "PHASE 2: built." },
  { id: "things-to-do-in-kandy", dimension: opportunityDimensions.LOCATION_EXPERIENCE, query: "Things to do in Kandy", status: opportunityStatus.LIVE, slug: "things-to-do-in-kandy", note: "PHASE 2: built." },
  { id: "things-to-do-in-sigiriya", dimension: opportunityDimensions.LOCATION_EXPERIENCE, query: "Things to do in Sigiriya", status: opportunityStatus.LIVE, slug: "things-to-do-in-sigiriya", note: "PHASE 2: built." },
  { id: "day-trips-from-galle", dimension: opportunityDimensions.LOCATION_EXPERIENCE, query: "Day trips from Galle", status: opportunityStatus.TIER_3, note: "Deliberately NOT built as a separate page — the answer set (Unawatuna, Mirissa, Weligama, Bentota) is identical to best-beaches-near-galle; a second page over the same data would be the \"duplicate page, different keyword\" pattern the brief prohibits." },
  { id: "best-places-to-visit-from-ella", dimension: opportunityDimensions.LOCATION_EXPERIENCE, query: "Day trips from Ella / best places to visit from Ella", status: opportunityStatus.LIVE, slug: "best-places-to-visit-from-ella", note: "PHASE 2: built (Kandy, Nuwara Eliya, Sigiriya, Yala, Galle) — genuinely broader than the existing ella-vs-nuwara-eliya single comparison." },
  { id: "best-places-to-visit-from-kandy", dimension: opportunityDimensions.LOCATION_EXPERIENCE, query: "Best places to visit from Kandy", status: opportunityStatus.LIVE, slug: "best-places-to-visit-from-kandy", note: "PHASE 2: built (Ella, Nuwara Eliya, Sigiriya, Dambulla)." },
  { id: "day-trips-from-colombo", dimension: opportunityDimensions.LOCATION_EXPERIENCE, query: "Day trips from Colombo", status: opportunityStatus.TIER_2, note: "Colombo's destination page now exists, but its own relatedDestinations list (negombo, kandy) is thin — a dedicated day-trips page would add little over the new colombo page itself today." },
  { id: "waterfalls-near-ella", dimension: opportunityDimensions.LOCATION_EXPERIENCE, query: "Waterfalls near Ella", status: opportunityStatus.BLOCKED, note: "No named, verified waterfall data exists — same gap as the EXPERIENCE waterfalls entry." },
  { id: "wildlife-near-galle", dimension: opportunityDimensions.LOCATION_EXPERIENCE, query: "Wildlife near Galle", status: opportunityStatus.BLOCKED, note: "No safari/wildlife product is geographically anchored near Galle in real data (Yala is the only real safari product, and it's not Galle-adjacent in relatedDestinations)." },
];

/**
 * ---- SEASONAL ----
 * travel-guide.jsx already covers the two-monsoon-system framing
 * (west/south/hill country driest Dec-Mar, east coast driest May-Sep).
 * Twelve separate month pages built from that same one paragraph, reworded
 * twelve times, is the textbook "keyword variations with identical
 * content" pattern the brief prohibits — flagged BLOCKED as a set, not
 * because the topic is unimportant but because today's real seasonal data
 * is one honest paragraph, not twelve months of distinct content.
 */
export const seasonalOpportunities = [
  { id: "month-by-month-pages", dimension: opportunityDimensions.SEASONAL, query: "Sri Lanka in January .. December (12 separate pages)", status: opportunityStatus.BLOCKED, note: "Real content today is one two-season paragraph (travel-guide.jsx chapter 01), not twelve months of distinct, month-specific detail. Building 12 pages from it would be near-duplicate content, not genuine coverage — the topic needs real month-level data before it can honestly split this way." },
  { id: "rainy-vs-dry-season-guide", dimension: opportunityDimensions.SEASONAL, query: "Sri Lanka rainy season / dry season / best time to visit", status: opportunityStatus.LIVE, slug: "best-time-to-visit-sri-lanka", note: "PHASE 2: built as ONE consolidated two-season guide (west/south/hill country vs. east coast), deliberately not split into separate \"dry season\" and \"rainy season\" pages — the real underlying content is one seasonal split, and two pages over it would be near-duplicates." },
];

/**
 * All opportunity arrays combined, for a future page-proposal tool or
 * report generator to query as one list.
 */
export const allOpportunities = [
  ...destinationOpportunities,
  ...experienceOpportunities,
  ...travelerIntentOpportunities,
  ...tripLengthOpportunities,
  ...transportOpportunities,
  ...tourIntentOpportunities,
  ...comparisonOpportunities,
  ...locationExperienceOpportunities,
  ...seasonalOpportunities,
];

export function findOpportunitiesByStatus(status) {
  return allOpportunities.filter((item) => item.status === status);
}

export function findOpportunitiesByDimension(dimension) {
  return allOpportunities.filter((item) => item.dimension === dimension);
}
