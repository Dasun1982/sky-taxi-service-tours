/**
 * Data for the shared DestinationExplorer template
 * (src/components/seo/DestinationExplorer.jsx). Two intents:
 *   "overview" pages — a real destinations.js entry with no dedicated page
 *     yet (Colombo, Sinharaja). Only built where a verified image exists —
 *     see destinations.js's own header comment on why Trincomalee, Jaffna,
 *     Anuradhapura, and Polonnaruwa are NOT here: no verified image exists
 *     for any of them, and this template (like every other page on the
 *     site) uses a real place-specific hero image, never a stand-in.
 *   "things-to-do" pages — a destination that already has a transport-
 *     focused *TaxiService.jsx page; this targets the separate activity
 *     search intent instead of duplicating that page's content.
 * Every fact below comes from the matching destinations.js record
 * (popularFor, categories, region) — nothing here invents an attraction.
 */
export const destinationExplorerPages = {
  colombo: {
    destinationId: "colombo",
    heroEyebrow: "Sri Lanka's capital",
    heroTitle: "Colombo, Sri Lanka",
    heroDescription: "Sri Lanka's capital city, with temples, museums, markets, Galle Face, and the Lotus Tower — usually a first or last stop on a Sri Lanka trip.",
    introTitle: "A capital-city stop, not the main event",
    introText:
      "Colombo is Sri Lanka's capital and largest city, home to Gangaramaya Temple, Galle Face Green, Pettah Market, and the Lotus Tower. Most visitors treat it as a short first or last stop rather than the focus of a trip, using it to see a temple and a market before heading to the coast or hill country.",
    secondParagraph:
      "SKY currently offers Colombo as a real, priced one-day tour rather than a dedicated taxi-service page — most travelers arriving at Bandaranaike International Airport head straight to their first destination and add a Colombo day later in the trip, or on the way back.",
    whoItSuits: "Travelers with a spare day at the start or end of their trip who want a quick taste of city life, markets, and one or two landmark stops.",
    thingsToDoTitle: "What Colombo is known for",
    practicalInfo:
      "Colombo is well connected by private driver to the rest of the island — most SKY tours and transfers either start or pass near it. There is no dedicated Colombo taxi-service page yet; the one-day tour below is the real, bookable way to see the city with SKY.",
    faqs: [
      { question: "Is one day enough for Colombo?", answer: "For most first-time visitors, yes — a one-day tour covering a temple, Galle Face, a market, and the Lotus Tower gives a real sense of the city without needing a multi-day stay." },
      { question: "Should I stay in Colombo or head straight to the coast?", answer: "Many visitors skip an overnight stay and use Colombo as a day-trip stop instead, heading to the south coast or hill country the same day or the next." },
      { question: "Can a private driver combine Colombo with the airport?", answer: "Yes — SKY's Colombo day tour and airport transfers use the same private driver network, so a Colombo stop can be added before or after your airport pickup." },
    ],
    ctaHeading: "See Colombo on a real, priced day tour",
    ctaText: "SKY's Colombo one-day tour is a real bookable itinerary — send your dates on WhatsApp or browse the full tour.",
    ctaPage: "one-day-tours",
    ctaButtonLabel: "View One-Day Tours",
    whatsappTopic: "I'd like to know more about the Colombo day tour.",
    relatedLinks: [
      { href: "/galle-vs-colombo", label: "Galle vs Colombo" },
      { href: "/destinations", label: "All Destinations" },
    ],
  },
  sinharaja: {
    destinationId: "sinharaja",
    heroEyebrow: "Rainforest reserve",
    heroTitle: "Sinharaja, Sri Lanka",
    heroDescription: "A UNESCO-listed rainforest reserve known for birdwatching, waterfalls, and tea plantation views — reached from SKY's real one-day tour.",
    introTitle: "Sri Lanka's last major rainforest reserve",
    introText:
      "Sinharaja is a rainforest reserve known for birdwatching, waterfalls, and tea plantation views along its edges. It's a genuinely different kind of stop from the beach and Cultural Triangle routes most itineraries focus on.",
    secondParagraph:
      "SKY runs a real, priced one-day trip to Sinharaja — there is no dedicated taxi-service page for it yet, since it's a single-destination nature trip rather than a multi-stop transport route.",
    whoItSuits: "Travelers interested in birdwatching, rainforest walks, and nature over beaches or historical sites — best added as a dedicated day rather than a quick stop.",
    thingsToDoTitle: "What Sinharaja is known for",
    practicalInfo:
      "Sinharaja is currently reached through SKY's one-day tour product rather than a standalone transfer service. It does not yet appear in any multi-day round-tour itinerary in SKY's catalog, so it's best planned as its own day.",
    faqs: [
      { question: "What can I see in Sinharaja in one day?", answer: "SKY's real one-day trip to Sinharaja focuses on the reserve itself — birdwatching, forest walks, and waterfalls along the trail." },
      { question: "Is Sinharaja good for non-birdwatchers?", answer: "Yes — the rainforest walk and waterfalls are worthwhile even without a specific interest in birdwatching, though birdwatchers get the most out of it." },
      { question: "Can Sinharaja be combined with a multi-day tour?", answer: "Not currently in SKY's existing round-tour packages — it's available as its own one-day trip. Ask on WhatsApp if you'd like to discuss adding it to a custom route." },
    ],
    ctaHeading: "Book the Sinharaja day trip",
    ctaText: "A real, priced one-day trip to Sinharaja — send your dates on WhatsApp or browse the full tour.",
    ctaPage: "one-day-tours",
    ctaButtonLabel: "View One-Day Tours",
    whatsappTopic: "I'd like to know more about the Sinharaja day trip.",
    relatedLinks: [{ href: "/wildlife", label: "Sri Lanka Wildlife" }],
  },
  "things-to-do-in-galle": {
    destinationId: "galle",
    heroEyebrow: "Inside Galle",
    heroTitle: "Things to Do in Galle",
    heroDescription: "What to actually see and do inside Galle Fort and the wider town — beyond just booking a taxi there.",
    introTitle: "Galle Fort, and what's around it",
    introText:
      "Galle is a south coast fort city — Galle Fort's colonial streets, lighthouse viewpoints, and Dutch-era architecture are the main draw, with beach access at Unawatuna and Jungle Beach just outside town.",
    whoItSuits: "Travelers who want a half-day to full day of walking, photography, and coastal city atmosphere, easily paired with a nearby beach.",
    thingsToDoTitle: "Inside Galle",
    practicalInfo:
      "Galle Fort is best explored on foot once you arrive — a private driver handles getting you there and back, and can wait or continue on to a nearby beach afterward. See Galle Taxi Service for booking a private transfer.",
    faqs: [
      { question: "How much time do I need in Galle?", answer: "A half day is enough to walk Galle Fort's streets and lighthouse area; a full day allows time to add a nearby beach like Unawatuna." },
      { question: "Is Galle walkable?", answer: "Yes — Galle Fort itself is compact and best explored on foot once your driver drops you at the entrance." },
      { question: "What's the easiest way to combine Galle with a beach?", answer: "Unawatuna is the closest beach to Galle Fort — see Best Beaches Near Galle for the full comparison." },
    ],
    ctaHeading: "Plan your Galle visit with a private driver",
    ctaText: "Book a private transfer to Galle, with flexible time at the Fort and nearby stops.",
    ctaPage: "galle-taxi-service",
    ctaButtonLabel: "View Galle Taxi Service",
    whatsappTopic: "I'd like a private driver for a day around Galle Fort.",
    relatedLinks: [
      { href: "/sri-lanka-culture-ancient-cities", label: "Sri Lanka Culture & Ancient Cities" },
      { href: "/best-beaches-near-galle", label: "Best Beaches Near Galle" },
    ],
  },
  "things-to-do-in-unawatuna": {
    destinationId: "unawatuna",
    heroEyebrow: "Inside Unawatuna",
    heroTitle: "Things to Do in Unawatuna",
    heroDescription: "Unawatuna Beach, Dalawella, and Jungle Beach — what to actually do once you're based here.",
    introTitle: "A calm beach base near Galle Fort",
    introText:
      "Unawatuna is a south coast beach town known for its calm, family-friendly main beach, with Dalawella and Jungle Beach both within easy reach and Galle Fort a short drive away.",
    whoItSuits: "Travelers who want a relaxed beach base with easy day trips, including families given the calmer swimming conditions here.",
    thingsToDoTitle: "In and around Unawatuna",
    practicalInfo:
      "Unawatuna works well as a base for exploring the wider south coast — Galle Fort, Jungle Beach, and Mirissa are all realistic day trips by private driver. See Unawatuna Taxi Service for booking transport.",
    faqs: [
      { question: "Is Unawatuna good for families?", answer: "Yes — it's tagged as one of the calmer, more family-friendly beaches on the south coast." },
      { question: "How far is Jungle Beach from Unawatuna?", answer: "Jungle Beach is a short local trip from Unawatuna's main beach, commonly combined in the same day." },
      { question: "Can I visit Galle Fort from Unawatuna?", answer: "Yes — Galle Fort is a short private-driver trip from Unawatuna, easily combined in a half day." },
    ],
    ctaHeading: "Base yourself in Unawatuna",
    ctaText: "Book a private transfer to Unawatuna, with flexible stops at Jungle Beach or Galle Fort along the way.",
    ctaPage: "unawatuna-taxi-service",
    ctaButtonLabel: "View Unawatuna Taxi Service",
    whatsappTopic: "I'd like a private driver based around Unawatuna.",
    relatedLinks: [
      { href: "/sri-lanka-beaches", label: "Sri Lanka Beaches" },
      { href: "/unawatuna-vs-mirissa", label: "Unawatuna vs Mirissa" },
    ],
  },
  "things-to-do-in-ella": {
    destinationId: "ella",
    heroEyebrow: "Inside Ella",
    heroTitle: "Things to Do in Ella",
    heroDescription: "Nine Arch Bridge, Little Adam's Peak, and tea country views — what to actually do once you're in Ella.",
    introTitle: "Hiking, viewpoints, and the hill country rail line",
    introText:
      "Ella is a hill country town built around hiking and viewpoints — the Nine Arch Bridge, Little Adam's Peak, and tea country views are the main draws, plus one of the world's most scenic train routes running through town.",
    whoItSuits: "Travelers who want an active day or two — hiking, viewpoints, and photography — rather than a purely relaxed stop.",
    thingsToDoTitle: "In and around Ella",
    practicalInfo:
      "Most of Ella's attractions are close enough to combine in one or two days. A private driver handles getting you between the trailheads and viewpoints without needing to arrange local transport for each stop. See Ella Taxi Service for booking.",
    faqs: [
      { question: "How long does Little Adam's Peak take?", answer: "It's a shorter, easier hike than Sri Lanka's other named peaks — a popular half-day or sunrise/sunset activity while based in Ella." },
      { question: "Do I need to book the train in advance?", answer: "SKY doesn't sell train tickets directly — ask on WhatsApp if you'd like help thinking through your Ella plans alongside the scenic rail line." },
      { question: "Can I combine Ella with Nuwara Eliya?", answer: "Yes — see Ella vs Nuwara Eliya for how they compare, and SKY's real 2-day tour that covers both." },
    ],
    ctaHeading: "Base yourself in Ella",
    ctaText: "Book a private transfer to Ella, with flexible time for the Nine Arch Bridge and Little Adam's Peak.",
    ctaPage: "ella-taxi-service",
    ctaButtonLabel: "View Ella Taxi Service",
    whatsappTopic: "I'd like a private driver based around Ella.",
    relatedLinks: [
      { href: "/sri-lanka-hill-country", label: "Sri Lanka Hill Country" },
      { href: "/ella-vs-nuwara-eliya", label: "Ella vs Nuwara Eliya" },
      { href: "/ella-vs-kandy", label: "Ella vs Kandy" },
    ],
  },
  "things-to-do-in-kandy": {
    destinationId: "kandy",
    heroEyebrow: "Inside Kandy",
    heroTitle: "Things to Do in Kandy",
    heroDescription: "Temple of the Tooth, Kandy Lake, and the botanical gardens — what to actually do in Sri Lanka's hill country cultural city.",
    introTitle: "A cultural city built around the Temple of the Tooth",
    introText:
      "Kandy is a hill country cultural city centered on the Temple of the Sacred Tooth Relic, with Kandy Lake and the Royal Botanical Gardens both within easy reach.",
    whoItSuits: "Travelers interested in culture and heritage, or anyone breaking up a longer hill country route with a cultural stop.",
    thingsToDoTitle: "In and around Kandy",
    practicalInfo:
      "Kandy is a common stop on the way between the Cultural Triangle and the rest of the hill country — a private driver can build the Temple, the lake, and the gardens into a single flexible day. See Kandy Taxi Service for booking.",
    faqs: [
      { question: "How much time do I need at the Temple of the Tooth?", answer: "An hour or two is typical for a respectful visit, longer if you want to explore the surrounding grounds and museum." },
      { question: "Are the botanical gardens worth a visit?", answer: "Yes — the Royal Botanical Gardens are a popular, easy addition to a Kandy day for anyone interested in plants or a quieter walk." },
      { question: "Can Kandy be combined with Sigiriya?", answer: "Yes — Kandy and Sigiriya are commonly combined on multi-day routes; see Kandy to Sigiriya for the route guide." },
    ],
    ctaHeading: "Base yourself in Kandy",
    ctaText: "Book a private transfer to Kandy, with flexible time for the Temple of the Tooth and botanical gardens.",
    ctaPage: "kandy-taxi-service",
    ctaButtonLabel: "View Kandy Taxi Service",
    whatsappTopic: "I'd like a private driver based around Kandy.",
    relatedLinks: [
      { href: "/sri-lanka-hill-country", label: "Sri Lanka Hill Country" },
      { href: "/sri-lanka-culture-ancient-cities", label: "Sri Lanka Culture & Ancient Cities" },
      { href: "/ella-vs-kandy", label: "Ella vs Kandy" },
    ],
  },
  "things-to-do-in-sigiriya": {
    destinationId: "sigiriya",
    heroEyebrow: "Inside Sigiriya",
    heroTitle: "Things to Do in Sigiriya",
    heroDescription: "Sigiriya Rock Fortress, Dambulla Cave Temple, and Pidurangala — what to actually do in the Cultural Triangle.",
    introTitle: "The Cultural Triangle's best-known landmark",
    introText:
      "Sigiriya is a Cultural Triangle site centered on the Sigiriya Rock Fortress, with the Dambulla Cave Temple and the Pidurangala viewpoint both close by.",
    whoItSuits: "Travelers interested in history and adventure — the Rock Fortress climb and Pidurangala sunrise hike both reward an early start.",
    thingsToDoTitle: "In and around Sigiriya",
    practicalInfo:
      "Sigiriya and Dambulla are close enough to combine in one day with a private driver, and Pidurangala is a short additional stop for those wanting a rock-fortress view from outside. See Sigiriya Taxi Service for booking.",
    faqs: [
      { question: "Should I climb Sigiriya Rock or Pidurangala?", answer: "Sigiriya Rock is the main historical site with the ancient palace ruins at the top; Pidurangala is a separate, less-developed climb that offers a view of Sigiriya Rock itself — some travelers do both." },
      { question: "Can I combine Sigiriya with Dambulla in one day?", answer: "Yes — they're close enough that a private driver can build both into a single day." },
      { question: "Is Sigiriya better in the morning?", answer: "An early start is generally recommended to avoid the midday heat during the rock climb." },
    ],
    ctaHeading: "Base yourself in Sigiriya",
    ctaText: "Book a private transfer to Sigiriya, with flexible time for the Rock Fortress and Dambulla Cave Temple.",
    ctaPage: "sigiriya-taxi-service",
    ctaButtonLabel: "View Sigiriya Taxi Service",
    whatsappTopic: "I'd like a private driver based around Sigiriya.",
    relatedLinks: [
      { href: "/sri-lanka-culture-ancient-cities", label: "Sri Lanka Culture & Ancient Cities" },
      { href: "/sigiriya-vs-ella", label: "Sigiriya vs Ella" },
    ],
  },
};
