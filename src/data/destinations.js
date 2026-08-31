import { images } from "./travelData";

/**
 * Core destination registry for SKY Taxi Service & Tours.
 *
 * MILESTONE 2 — CORE TOURISM DATA ARCHITECTURE
 *
 * Every destination below is backed by real, existing content already in
 * this project — a dedicated SEO page (e.g. EllaTaxiService.jsx), a real
 * OneDayTours/RoundTours itinerary entry, or repeated, descriptive mentions
 * across travelData.js (destinationShowcase, tourCategories, tours,
 * popularTours). Nothing here is invented.
 *
 * Fields deliberately OMITTED because no source data exists for them
 * anywhere in the project: province, coordinates, opening hours, ratings,
 * reviews, providers, travel times/distances. Do not add these fields with
 * guessed values — leave them out until a real source exists.
 *
 * `region` is only set where the site's own copy already uses that regional
 * label (e.g. "Cultural Triangle", "South Coast", "East Coast", "Hill
 * Country", "North"). Where no such label exists in the source content
 * (Bentota, Negombo, Yala, Colombo, Sinharaja), region is left undefined
 * rather than guessed.
 *
 * `availableServices` values map to real, existing SKY offerings:
 *   "taxi"             — has a dedicated *TaxiService.jsx SEO page
 *   "airport-transfer" — has a dedicated AirportToXTaxi.jsx SEO page
 *   "day-tour"         — appears as a real product in OneDayTours.jsx
 *   "round-tour"       — appears in a RoundTours.jsx package itinerary
 *   "safari-transfer"  — has a dedicated YalaSafariTransfer.jsx SEO page
 *
 * `relatedDestinations` are only populated where two destinations already
 * co-occur in the same tour itinerary or are explicitly cross-linked on the
 * same SEO page (e.g. GalleTaxiService.jsx explicitly lists Unawatuna,
 * Weligama, Mirissa as nearby routes).
 *
 * `image`/`alt` (added in Milestone 3) are only set where a verified image
 * already represents this exact destination elsewhere in the project — the
 * dedicated SEO page's own PageHero image for the 13 Tier-1 destinations, or
 * a matching OneDayTours/RoundTours entry's image for Colombo/Sinharaja/
 * Dambulla. `alt` text is reused verbatim from travelData.js's own
 * place-framed captions (destinationShowcase/tours/galleryImages), not
 * rewritten. Trincomalee, Polonnaruwa, Anuradhapura, and Jaffna have no
 * `image` — the only images referencing them represent a whole multi-stop
 * tour package, not that specific place, so attributing one would misstate
 * what the image shows.
 */

export const destinations = [
  {
    id: "ella",
    name: "Ella",
    image: images.nineArchBridge,
    alt: "Nine Arch Bridge surrounded by Ella hill country",
    country: "Sri Lanka",
    region: "Hill Country",
    categories: ["mountains", "nature", "adventure", "tea"],
    description:
      "Hill country town known for Nine Arch Bridge, Little Adam's Peak, tea views, and waterfalls.",
    popularFor: ["Nine Arch Bridge", "Little Adam's Peak", "Tea Country Views", "Train Ride"],
    availableServices: ["taxi", "airport-transfer", "day-tour", "round-tour"],
    relatedDestinations: ["kandy", "nuwara-eliya", "sigiriya", "yala", "galle"],
    seoSlug: "/ella-taxi-service",
  },
  {
    id: "kandy",
    name: "Kandy",
    image: images.kandyTemple,
    alt: "Temple of the Tooth in Kandy",
    country: "Sri Lanka",
    region: "Hill Country",
    categories: ["culture", "heritage", "mountains"],
    description:
      "Hill country cultural city home to the Temple of the Sacred Tooth Relic, Kandy Lake, and botanical gardens.",
    popularFor: ["Temple of the Tooth", "Kandy Lake", "Botanical Gardens", "Cultural Viewpoints"],
    availableServices: ["taxi", "airport-transfer", "day-tour", "round-tour"],
    relatedDestinations: ["ella", "nuwara-eliya", "sigiriya", "dambulla"],
    seoSlug: "/kandy-taxi-service",
  },
  {
    id: "galle",
    name: "Galle",
    image: images.galleFort,
    alt: "Galle Fort lighthouse and colonial walls",
    country: "Sri Lanka",
    region: "South Coast",
    categories: ["culture", "heritage", "beach"],
    description:
      "South coast fort city with Galle Fort, lighthouse viewpoints, Dutch colonial streets, and nearby beaches.",
    popularFor: ["Galle Fort", "Lighthouse", "Unawatuna", "Jungle Beach"],
    availableServices: ["taxi", "airport-transfer", "round-tour"],
    relatedDestinations: ["unawatuna", "mirissa", "weligama", "bentota"],
    seoSlug: "/galle-taxi-service",
  },
  {
    id: "sigiriya",
    name: "Sigiriya",
    image: images.sigiriya,
    alt: "Sigiriya Rock Fortress in Sri Lanka",
    country: "Sri Lanka",
    region: "Cultural Triangle",
    categories: ["culture", "heritage", "adventure"],
    description:
      "Cultural Triangle site centered on the Sigiriya Rock Fortress, with Dambulla Cave Temple and Pidurangala nearby.",
    popularFor: ["Sigiriya Rock Fortress", "Dambulla Cave Temple", "Pidurangala"],
    availableServices: ["taxi", "airport-transfer", "round-tour"],
    relatedDestinations: ["dambulla", "kandy", "polonnaruwa", "anuradhapura"],
    seoSlug: "/sigiriya-taxi-service",
  },
  {
    id: "mirissa",
    name: "Mirissa",
    image: images.whaleWatching,
    alt: "Whale watching boat tour near Mirissa",
    country: "Sri Lanka",
    region: "South Coast",
    categories: ["beach", "wildlife"],
    description:
      "South coast beach town known for whale watching, Coconut Tree Hill, and Weligama coast access.",
    popularFor: ["Whale Watching", "Coconut Tree Hill", "Beaches"],
    availableServices: ["taxi", "airport-transfer"],
    relatedDestinations: ["weligama", "galle", "unawatuna", "hiriketiya"],
    seoSlug: "/mirissa-taxi-service",
  },
  {
    id: "unawatuna",
    name: "Unawatuna",
    image: images.jungleBeach,
    alt: "Jungle Beach near Unawatuna",
    country: "Sri Lanka",
    region: "South Coast",
    categories: ["beach", "family"],
    description:
      "South coast beach base near Galle Fort, Dalawella, and Jungle Beach.",
    popularFor: ["Unawatuna Beach", "Dalawella", "Jungle Beach"],
    availableServices: ["taxi", "airport-transfer", "round-tour"],
    relatedDestinations: ["galle", "mirissa", "hiriketiya", "weligama"],
    seoSlug: "/unawatuna-taxi-service",
  },
  {
    id: "weligama",
    name: "Weligama",
    image: images.surfing,
    alt: "Surfing on a Sri Lanka beach",
    country: "Sri Lanka",
    region: "South Coast",
    categories: ["beach", "surfing"],
    description: "South coast surf beach town between Mirissa and Galle, popular for surf schools.",
    popularFor: ["Surf Beach", "Surf Schools"],
    availableServices: ["taxi", "airport-transfer"],
    relatedDestinations: ["mirissa", "galle", "unawatuna", "hiriketiya"],
    seoSlug: "/weligama-taxi-service",
  },
  {
    id: "hiriketiya",
    name: "Hiriketiya",
    image: images.hiriketiyaBeach,
    alt: "Hiriketiya Beach in Sri Lanka",
    country: "Sri Lanka",
    region: "South Coast",
    categories: ["beach", "surfing"],
    description: "South coast surf bay near Dickwella and Tangalle, known for its horseshoe-shaped beach.",
    popularFor: ["Surf Bay", "Beach Cafes"],
    availableServices: ["taxi", "airport-transfer"],
    relatedDestinations: ["mirissa", "weligama", "unawatuna", "yala"],
    seoSlug: "/hiriketiya-taxi-service",
  },
  {
    id: "nuwara-eliya",
    name: "Nuwara Eliya",
    image: images.trainRide,
    alt: "Sri Lanka scenic train ride through hill country",
    country: "Sri Lanka",
    region: "Hill Country",
    categories: ["mountains", "tea", "nature"],
    description: "Hill country tea town with tea plantations, Gregory Lake, and a cool colonial-era climate.",
    popularFor: ["Tea Plantations", "Gregory Lake", "Tea Factories"],
    availableServices: ["taxi", "airport-transfer", "round-tour"],
    relatedDestinations: ["ella", "kandy"],
    seoSlug: "/nuwara-eliya-taxi-service",
  },
  {
    id: "bentota",
    name: "Bentota",
    image: images.blueBeach,
    alt: "Blue beach on the Sri Lanka south coast",
    country: "Sri Lanka",
    categories: ["beach"],
    description: "Beach resort town on the south-west coast, known for the Bentota River and beach hotels.",
    popularFor: ["Bentota River", "Beach Resorts"],
    availableServices: ["taxi", "airport-transfer"],
    relatedDestinations: ["galle", "unawatuna"],
    seoSlug: "/bentota-taxi-service",
  },
  {
    id: "negombo",
    name: "Negombo",
    image: images.beach,
    alt: "Beach in Sri Lanka",
    country: "Sri Lanka",
    categories: ["beach", "city"],
    description: "Coastal city near Bandaranaike International Airport, known for its beach and lagoon.",
    popularFor: ["Negombo Beach", "Negombo Lagoon", "Dutch Fort"],
    availableServices: ["taxi", "airport-transfer", "round-tour"],
    relatedDestinations: ["colombo", "kandy", "sigiriya", "galle"],
    seoSlug: "/negombo-taxi-service",
  },
  {
    id: "arugam-bay",
    name: "Arugam Bay",
    image: images.surfing,
    alt: "Surfing on a Sri Lanka beach",
    country: "Sri Lanka",
    region: "East Coast",
    categories: ["beach", "surfing", "adventure"],
    description: "East coast surf town popular with surfers, with access to nearby national parks.",
    popularFor: ["Surf Points", "East Coast Beaches"],
    availableServices: ["taxi", "airport-transfer"],
    relatedDestinations: ["ella", "yala"],
    seoSlug: "/arugam-bay-taxi-service",
  },
  {
    id: "yala",
    name: "Yala",
    image: images.safari,
    alt: "Wildlife safari route in Sri Lanka",
    country: "Sri Lanka",
    categories: ["wildlife", "nature", "adventure"],
    description: "National park region on the south-east coast known for safaris, elephants, and leopards.",
    popularFor: ["Yala National Park Safari", "Elephants", "Leopards"],
    availableServices: ["safari-transfer", "round-tour"],
    relatedDestinations: ["hiriketiya", "arugam-bay", "ella"],
    seoSlug: "/yala-safari-transfer",
  },
  {
    id: "colombo",
    name: "Colombo",
    image: images.colomboCulture,
    alt: "Colombo culture and city route",
    country: "Sri Lanka",
    categories: ["city", "culture"],
    description:
      "Sri Lanka's capital city, with temples, museums, markets, Galle Face, and the Lotus Tower.",
    popularFor: ["Gangaramaya Temple", "Galle Face Green", "Pettah Market", "Lotus Tower"],
    availableServices: ["day-tour"],
    relatedDestinations: ["negombo", "kandy"],
    seoSlug: "/colombo",
  },
  {
    id: "sinharaja",
    name: "Sinharaja",
    image: images.monkey,
    alt: "Monkey in Sri Lanka",
    country: "Sri Lanka",
    categories: ["nature", "wildlife"],
    description: "Rainforest reserve known for birdwatching, waterfalls, and tea plantation views.",
    popularFor: ["Sinharaja Forest Reserve", "Birdwatching", "Waterfalls"],
    availableServices: ["day-tour"],
    relatedDestinations: [],
    seoSlug: "/sinharaja",
  },
  {
    id: "dambulla",
    name: "Dambulla",
    image: images.dambulla,
    alt: "Dambulla Cave Temple in Sri Lanka",
    country: "Sri Lanka",
    region: "Cultural Triangle",
    categories: ["culture", "heritage"],
    description: "Cultural Triangle town known for the Dambulla Cave Temple's Buddhist murals and statues.",
    popularFor: ["Dambulla Cave Temple"],
    availableServices: ["taxi", "airport-transfer", "round-tour"],
    relatedDestinations: ["sigiriya", "kandy"],
    seoSlug: "/dambulla-taxi-service",
  },
  {
    id: "trincomalee",
    name: "Trincomalee",
    country: "Sri Lanka",
    region: "East Coast",
    categories: ["beach", "culture", "history"],
    description: "East coast city with Fort Frederick, Koneswaram Temple, and Nilaveli Beach nearby.",
    popularFor: ["Fort Frederick", "Koneswaram Temple", "Nilaveli Beach", "Pigeon Island National Park"],
    availableServices: ["round-tour"],
    relatedDestinations: ["jaffna", "polonnaruwa", "sigiriya"],
    seoSlug: undefined,
  },
  {
    id: "polonnaruwa",
    name: "Polonnaruwa",
    country: "Sri Lanka",
    region: "Cultural Triangle",
    categories: ["history", "heritage", "culture"],
    description: "Ancient royal capital with the Royal Palace, Sacred Quadrangle, and Gal Vihara rock carvings.",
    popularFor: ["Royal Palace of King Parakramabahu", "Sacred Quadrangle", "Gal Vihara"],
    availableServices: ["round-tour"],
    relatedDestinations: ["anuradhapura", "sigiriya", "dambulla", "trincomalee"],
    seoSlug: undefined,
  },
  {
    id: "anuradhapura",
    name: "Anuradhapura",
    country: "Sri Lanka",
    region: "Cultural Triangle",
    categories: ["history", "heritage", "culture"],
    description: "Ancient capital city and Cultural Triangle site, historically paired with Polonnaruwa and Sigiriya.",
    popularFor: ["Ancient Ruins"],
    availableServices: ["round-tour"],
    relatedDestinations: ["polonnaruwa", "sigiriya"],
    seoSlug: undefined,
  },
  {
    id: "jaffna",
    name: "Jaffna",
    country: "Sri Lanka",
    region: "North",
    categories: ["culture", "history", "heritage"],
    description: "Northern peninsula city with Jaffna Fort, Nallur Kandaswamy Kovil, and nearby island beaches.",
    popularFor: ["Jaffna Fort", "Nallur Kandaswamy Kovil", "Casuarina Beach"],
    availableServices: ["round-tour"],
    relatedDestinations: ["trincomalee"],
    seoSlug: undefined,
  },
];

export function findDestination(id) {
  return destinations.find((destination) => destination.id === id);
}

export function findDestinationsByCategory(category) {
  return destinations.filter((destination) => destination.categories.includes(category));
}

/**
 * MILESTONE 5. `service` is one of the values already used in
 * `availableServices` below ("taxi", "airport-transfer", "day-tour",
 * "round-tour", "safari-transfer") — a small, already-consistent vocabulary
 * (verified: no typos or stray values exist across all 20 destinations as of
 * this milestone). No separate services.js registry was created for this —
 * see Milestone 5 report for why a 5-value literal set didn't justify one.
 */
export function findDestinationsByService(service) {
  return destinations.filter((destination) => destination.availableServices.includes(service));
}

/**
 * Resolves a destination's relatedDestinations ID list into full destination
 * records, silently skipping any ID that doesn't resolve (defensive against
 * a future bad edit — never throws, never invents a placeholder record).
 */
export function findRelatedDestinations(destinationId) {
  const destination = findDestination(destinationId);
  if (!destination) return [];
  return destination.relatedDestinations
    .map((id) => findDestination(id))
    .filter(Boolean);
}
