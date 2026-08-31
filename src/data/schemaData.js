import { destinationExplorerPages } from "./seo/destinationExplorer";
import { comparisonPages } from "./seo/comparisons";
import { cityToCityRoutes } from "./seo/cityRoutes";
import { nearbyPlacesPages } from "./seo/nearbyPlaces";
import { themeHubPages } from "./seo/themeHubs";
import { schemaPageLabels } from "./schemaLabels";

// Re-exported so every existing `import { schemaPageLabels } from
// "./schemaData"` / "../data/schemaData" keeps working unchanged — only
// Breadcrumbs.jsx (the eager, always-mounted consumer) was switched to
// import directly from schemaLabels.js, to keep it out of this file's
// now-lazy chunk. See schemaLabels.js for why.
export { schemaPageLabels };

export const schemaEnabledPages = Object.keys(schemaPageLabels);

/**
 * Pages that are editorial/planning content, not a transport-service
 * listing — SeoSchema.jsx emits Article schema for these instead of
 * TaxiService, since claiming @type: TaxiService on a comparison or
 * question-guide page would be the "misleading schema" the SEO brief
 * explicitly warns against. Every other schemaEnabledPages entry keeps its
 * existing TaxiService schema unchanged (not re-audited this phase).
 * `galle-to-ella` is deliberately NOT in this list — it genuinely describes
 * a private-transfer route, the same intent as the airport-to-X pages.
 */
export const articleSchemaPages = [
  "how-many-days-in-sri-lanka",
  "is-a-private-driver-worth-it",
  "ella-vs-nuwara-eliya",
  "best-beaches-near-galle",
  "colombo",
  "sinharaja",
  "things-to-do-in-galle",
  "things-to-do-in-unawatuna",
  "things-to-do-in-ella",
  "things-to-do-in-kandy",
  "things-to-do-in-sigiriya",
  "unawatuna-vs-mirissa",
  "galle-vs-colombo",
  "sigiriya-vs-ella",
  "best-places-to-visit-from-ella",
  "best-places-to-visit-from-kandy",
  "sri-lanka-beaches",
  "sri-lanka-hill-country",
  "sri-lanka-culture-ancient-cities",
  "sri-lanka-surfing",
  "south-coast-vs-east-coast",
  "private-driver-vs-rental-car",
  "sri-lanka-honeymoon",
  "sri-lanka-family-travel",
  "sri-lanka-budget-travel",
  "how-to-travel-around-sri-lanka",
  "how-much-does-a-sri-lanka-trip-cost",
  "best-places-to-visit-in-sri-lanka",
  "best-time-to-visit-sri-lanka",
  "first-time-visitor-sri-lanka",
  "train-vs-private-car-sri-lanka",
  "ella-vs-kandy",
  "is-sri-lanka-safe-for-tourists",
  "can-i-travel-sri-lanka-without-a-car",
];

export const schemaFaqs = {
  wildlife: [
    {
      question: "What wildlife can be seen in Sri Lanka?",
      answer:
        "Sri Lanka's national parks and wetlands are home to leopards, elephants, sloth bears, crocodiles, jackals, and a wide range of birdlife, among many other species.",
    },
    {
      question: "Is wildlife photography on this page from real sightings?",
      answer: "Yes. Every wildlife photograph on this page is a real sighting, not a stock image or an AI-generated photo.",
    },
    {
      question: "Can SKY Taxi Service & Tours arrange a safari transfer?",
      answer:
        "Yes. A private transfer to the Yala safari gate can be arranged with early pickup planning. Send your dates on WhatsApp for a fair quote.",
    },
  ],
  experiences: [
    {
      question: "What kinds of Sri Lanka experiences can be combined into one trip?",
      answer:
        "Wildlife safaris, ancient kingdoms, tea country, coastal south, local life, and adventure viewpoints can all be combined into one private route, depending on your travel dates.",
    },
    {
      question: "How is a Sri Lanka experience route priced?",
      answer:
        "The final price depends on route, dates, vehicle type, and number of days, and is confirmed on WhatsApp before travel.",
    },
  ],
  "travel-guide": [
    {
      question: "When is the best time to visit Sri Lanka?",
      answer:
        "It depends on the coast. The west and south coasts and hill country are generally driest from around December to March, while the east coast is generally driest from around May to September.",
    },
    {
      question: "Is a private driver necessary in Sri Lanka?",
      answer:
        "It is not required, but most visitors find a private driver easier than self-driving, since it avoids adjusting to left-hand traffic and mixed-use roads outside main highways.",
    },
    {
      question: "How long should a Sri Lanka trip be?",
      answer:
        "It depends on how many regions you want to cover. SKY Taxi Service & Tours currently arranges real itineraries from one-day trips up to 10-day round tours.",
    },
  ],
  "colombo-airport-taxi": [
    {
      question: "How do I book a Colombo Airport taxi?",
      answer:
        "Send your flight number, arrival time, pickup date, destination, passenger count, and luggage details on WhatsApp. We will confirm the vehicle and fair price before pickup.",
    },
    {
      question: "Can I book airport transfers to Ella, Kandy, or Galle?",
      answer:
        "Yes. SKY Taxi Service & Tours offers private airport transfers from Colombo Airport to Ella, Kandy, Galle, Unawatuna, Mirissa, Sigiriya, and many other Sri Lanka destinations.",
    },
    {
      question: "Are airport taxis available 24/7?",
      answer: "Yes. Colombo Airport taxi pickups can be arranged day or night, including early morning and late night arrivals.",
    },
    {
      question: "Is the final airport taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on route, pickup time, passengers, luggage, vehicle type, waiting time, and highway tickets.",
    },
  ],
  "airport-to-ella": [
    {
      question: "How long does a Colombo Airport to Ella taxi take?",
      answer:
        "A Colombo Airport to Ella taxi usually takes around 5.5 to 7 hours depending on traffic, weather, comfort stops, pickup time, and the exact Ella hotel location.",
    },
    {
      question: "Can I book an airport to Ella taxi after a late flight?",
      answer:
        "Yes. SKY Taxi Service & Tours can arrange Ella airport transfer service for day or night arrivals with flight-time checking and WhatsApp confirmation.",
    },
    {
      question: "Can we stop on the scenic route to Ella?",
      answer:
        "Yes. Your taxi from Colombo airport to Ella can include flexible stops for tea country views, waterfalls, food breaks, photos, and rest stops depending on time and route.",
    },
    {
      question: "What vehicles are available for a private transfer to Ella?",
      answer:
        "You can request a private car, SUV, or van depending on passengers, luggage, comfort needs, and availability. The final vehicle and price are confirmed on WhatsApp.",
    },
    {
      question: "Is the Colombo Airport to Ella taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
    },
  ],
  "airport-to-galle": [
    {
      question: "How long does a Colombo Airport to Galle taxi take?",
      answer:
        "A Colombo Airport to Galle taxi usually takes around 2 to 2.5 hours by Southern Expressway depending on traffic, pickup time, comfort stops, and the exact Galle hotel location.",
    },
    {
      question: "Can I book an airport to Galle taxi after a late flight?",
      answer:
        "Yes. SKY Taxi Service & Tours can arrange Galle airport transfer service for day or night arrivals with flight-time checking and WhatsApp confirmation.",
    },
    {
      question: "Does the taxi use the Southern Expressway?",
      answer:
        "Yes. Most private transfers from Colombo Airport to Galle use the Southern Expressway for a faster coastal route, with highway ticket costs confirmed in your WhatsApp quote.",
    },
    {
      question: "Can I continue from Galle to beach destinations?",
      answer:
        "Yes. Your private transfer to Galle can continue to Galle Fort, Unawatuna, Jungle Beach, Ahangama, Weligama, Mirissa, or nearby south coast hotels.",
    },
    {
      question: "Is the Colombo Airport to Galle taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
    },
  ],
  "airport-to-hiriketiya": [
    {
      question: "How long does a Colombo Airport to Hiriketiya taxi take?",
      answer:
        "A Colombo Airport to Hiriketiya taxi usually takes around 3 to 4 hours by Southern Expressway depending on traffic, pickup time, comfort stops, and the exact Hiriketiya hotel location.",
    },
    {
      question: "Can I book an airport to Hiriketiya taxi after a late flight?",
      answer:
        "Yes. SKY Taxi Service & Tours can arrange Hiriketiya airport transfer service for day or night arrivals with flight-time checking and WhatsApp confirmation.",
    },
    {
      question: "Does the taxi use the Southern Expressway?",
      answer:
        "Yes. Most private transfers from Colombo Airport to Hiriketiya use the Southern Expressway for a faster surf beach transfer, with highway ticket costs confirmed in your WhatsApp quote.",
    },
    {
      question: "Can I continue from Hiriketiya to Dickwella or Tangalle?",
      answer:
        "Yes. Your private transfer to Hiriketiya can continue to Dickwella, Tangalle, Kudawella, Nilwella, Mirissa, Weligama, or nearby south coast hotels.",
    },
    {
      question: "Is the Colombo Airport to Hiriketiya taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, surfboards, and special requests.",
    },
  ],
  "airport-to-kandy": [
    {
      question: "How long does a Colombo Airport to Kandy taxi take?",
      answer:
        "A Colombo Airport to Kandy taxi usually takes around 3 to 4.5 hours depending on traffic, pickup time, comfort stops, and the exact Kandy hotel location.",
    },
    {
      question: "Can I book an airport to Kandy taxi after a late flight?",
      answer:
        "Yes. SKY Taxi Service & Tours can arrange Kandy airport transfer service for day or night arrivals with flight-time checking and WhatsApp confirmation.",
    },
    {
      question: "Can we stop at Temple of the Tooth or hill country viewpoints?",
      answer:
        "Yes. Your taxi from Colombo airport to Kandy can include flexible stops for Temple of the Tooth, Peradeniya Botanical Gardens, viewpoints, food breaks, and rest stops depending on time and route.",
    },
    {
      question: "What vehicles are available for a private transfer to Kandy?",
      answer:
        "You can request a private car, SUV, or van depending on passengers, luggage, comfort needs, and availability. The final vehicle and price are confirmed on WhatsApp.",
    },
    {
      question: "Is the Colombo Airport to Kandy taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
    },
  ],
  "airport-to-mirissa": [
    {
      question: "How long does a Colombo Airport to Mirissa taxi take?",
      answer:
        "A Colombo Airport to Mirissa taxi usually takes around 2.5 to 3.5 hours by Southern Expressway depending on traffic, pickup time, comfort stops, and the exact Mirissa hotel location.",
    },
    {
      question: "Can I book an airport to Mirissa taxi after a late flight?",
      answer:
        "Yes. SKY Taxi Service & Tours can arrange Mirissa airport transfer service for day or night arrivals with flight-time checking and WhatsApp confirmation.",
    },
    {
      question: "Does the taxi use the Southern Expressway?",
      answer:
        "Yes. Most private transfers from Colombo Airport to Mirissa use the Southern Expressway for a faster beach transfer, with highway ticket costs confirmed in your WhatsApp quote.",
    },
    {
      question: "Can I book a whale watching transfer Mirissa pickup?",
      answer:
        "Yes. We can arrange early morning whale watching transfer Mirissa support, harbor drop-off, hotel pickup, and return travel depending on your schedule.",
    },
    {
      question: "Is the Colombo Airport to Mirissa taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
    },
  ],
  "airport-to-sigiriya": [
    {
      question: "How long does a Colombo Airport to Sigiriya taxi take?",
      answer:
        "A Colombo Airport to Sigiriya taxi usually takes around 3.5 to 4.5 hours depending on traffic, pickup time, comfort stops, and the exact Sigiriya hotel location.",
    },
    {
      question: "Can I book an airport to Sigiriya taxi after a late flight?",
      answer:
        "Yes. SKY Taxi Service & Tours can arrange Sigiriya airport transfer service for day or night arrivals with flight-time checking and WhatsApp confirmation.",
    },
    {
      question: "Can the taxi stop at Dambulla or Pidurangala?",
      answer:
        "Yes. Your taxi from Colombo airport to Sigiriya can include flexible stops for Dambulla Cave Temple, Pidurangala, Habarana, food breaks, and rest stops depending on time and route.",
    },
    {
      question: "Can I continue to other Cultural Triangle destinations?",
      answer:
        "Yes. Your private transfer to Sigiriya can continue to Dambulla, Habarana, Polonnaruwa, Anuradhapura, Kandy, or nearby Cultural Triangle hotels.",
    },
    {
      question: "Is the Colombo Airport to Sigiriya taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
    },
  ],
  "airport-to-unawatuna": [
    {
      question: "How long does a Colombo Airport to Unawatuna taxi take?",
      answer:
        "A Colombo Airport to Unawatuna taxi usually takes around 2 to 2.5 hours by Southern Expressway depending on traffic, pickup time, comfort stops, and the exact Unawatuna hotel location.",
    },
    {
      question: "Can I book an airport to Unawatuna taxi after a late flight?",
      answer:
        "Yes. SKY Taxi Service & Tours can arrange Unawatuna airport transfer service for day or night arrivals with flight-time checking and WhatsApp confirmation.",
    },
    {
      question: "Does the taxi use the Southern Expressway?",
      answer:
        "Yes. Most private transfers from Colombo Airport to Unawatuna use the Southern Expressway for a faster beach transfer, with highway ticket costs confirmed in your WhatsApp quote.",
    },
    {
      question: "Can I continue from Unawatuna to Dalawella, Jungle Beach, or Galle Fort?",
      answer:
        "Yes. Your private transfer to Unawatuna can continue to Dalawella, Jungle Beach, Mihiripenna, Galle Fort, or nearby south coast hotels.",
    },
    {
      question: "Is the Colombo Airport to Unawatuna taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
    },
  ],
  "airport-to-weligama": [
    {
      question: "How long does a Colombo Airport to Weligama taxi take?",
      answer:
        "A Colombo Airport to Weligama taxi usually takes around 2.5 to 3 hours by Southern Expressway depending on traffic, pickup time, comfort stops, and the exact Weligama hotel location.",
    },
    {
      question: "Can I book an airport to Weligama taxi after a late flight?",
      answer:
        "Yes. SKY Taxi Service & Tours can arrange Weligama airport transfer service for day or night arrivals with flight-time checking and WhatsApp confirmation.",
    },
    {
      question: "Does the taxi use the Southern Expressway?",
      answer:
        "Yes. Most private transfers from Colombo Airport to Weligama use the Southern Expressway for a faster surf beach transfer, with highway ticket costs confirmed in your WhatsApp quote.",
    },
    {
      question: "Can I continue from Weligama to Mirissa, Ahangama, or Galle?",
      answer:
        "Yes. Your private transfer to Weligama can continue to Mirissa, Ahangama, Midigama, Galle, Unawatuna, or nearby south coast hotels.",
    },
    {
      question: "Is the Colombo Airport to Weligama taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, surfboards, and special requests.",
    },
  ],
  "airport-transfer-sri-lanka": [
    {
      question: "How do I book an airport transfer in Sri Lanka?",
      answer:
        "Send your flight number, arrival date and time, destination, passenger count, and luggage details on WhatsApp. We will confirm the vehicle and price before pickup.",
    },
    {
      question: "Can I book transfers from Colombo Airport to Ella, Kandy, Galle, Unawatuna, Mirissa, or Sigiriya?",
      answer:
        "Yes. SKY Taxi Service & Tours provides private airport transfers from Colombo Airport to Ella, Kandy, Galle, Unawatuna, Mirissa, Sigiriya, and many other destinations across Sri Lanka.",
    },
    {
      question: "Are airport transfers available 24/7?",
      answer: "Yes. Airport transfer service is available for day and night arrivals, including early morning and late night flights.",
    },
    {
      question: "Do you provide private drivers and clean vehicles?",
      answer: "Yes. You can book a private driver with a clean car, SUV, or van depending on your route, passenger count, and luggage.",
    },
    {
      question: "How is the final airport transfer price confirmed?",
      answer:
        "The final price is confirmed on WhatsApp depending on route, pickup time, vehicle type, passengers, luggage, highway tickets, waiting time, and special requests.",
    },
  ],
  "ella-taxi-service": [
    {
      question: "How do I book an Ella taxi?",
      answer:
        "Send your pickup location, Ella hotel or drop-off place, date, time, passenger count, and luggage details on WhatsApp. We will confirm the vehicle and route price before travel.",
    },
    {
      question: "Can I book a Colombo airport to Ella taxi?",
      answer:
        "Yes. SKY Taxi Service & Tours provides private Colombo airport to Ella taxi service with flight-time checking, clean vehicles, and friendly local drivers.",
    },
    {
      question: "Can we stop on the scenic route to Ella?",
      answer:
        "Yes. Your taxi to Ella can include flexible stops for tea country views, waterfalls, viewpoints, food breaks, and photos depending on time and route.",
    },
    {
      question: "Do you provide a private driver Ella service?",
      answer: "Yes. You can book a private driver Ella service for airport transfers, local sightseeing, day tours, and round tours around Sri Lanka.",
    },
    {
      question: "Is the Ella taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on pickup place, drop-off place, travel date, vehicle type, waiting time, highway tickets, and special requests.",
    },
  ],
  "kandy-taxi-service": [
    {
      question: "How do I book a Kandy taxi?",
      answer:
        "Send your pickup location, Kandy hotel or drop-off place, date, time, passenger count, and luggage details on WhatsApp. We will confirm the vehicle and route price before travel.",
    },
    {
      question: "Can I book a Colombo airport to Kandy taxi?",
      answer:
        "Yes. SKY Taxi Service & Tours provides private Colombo airport to Kandy taxi service with flight-time checking, clean vehicles, and friendly local drivers.",
    },
    {
      question: "Can the taxi stop at Temple of the Tooth or hill country viewpoints?",
      answer:
        "Yes. Your taxi to Kandy can include flexible stops such as Temple of the Tooth, Kandy Lake, Peradeniya Botanical Gardens, tea viewpoints, and photo stops depending on time and route.",
    },
    {
      question: "Do you provide a private driver Kandy service?",
      answer:
        "Yes. You can book a private driver Kandy service for airport transfers, local sightseeing, hotel pickups, day trips, and Sri Lanka round tours.",
    },
    {
      question: "Is the Kandy taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on pickup place, drop-off place, travel date, vehicle type, waiting time, highway tickets, luggage, and special requests.",
    },
  ],
  "galle-taxi-service": [
    {
      question: "How do I book a Galle taxi?",
      answer:
        "Send your pickup location, Galle hotel or drop-off place, date, time, passenger count, and luggage details on WhatsApp. We will confirm the vehicle and route price before travel.",
    },
    {
      question: "Can I book a Colombo airport to Galle taxi?",
      answer:
        "Yes. SKY Taxi Service & Tours provides private Colombo airport to Galle taxi service with flight-time checking, clean vehicles, and friendly local drivers.",
    },
    {
      question: "Can the taxi stop at Galle Fort or south coast beaches?",
      answer:
        "Yes. Your taxi to Galle can include flexible stops such as Galle Fort, Unawatuna, Jungle Beach, turtle hatchery, Ahangama, Weligama, Mirissa, and photo stops depending on time and route.",
    },
    {
      question: "Do you provide a private driver Galle service?",
      answer:
        "Yes. You can book a private driver Galle service for airport transfers, Galle Fort sightseeing, hotel pickups, south coast beach routes, day trips, and Sri Lanka round tours.",
    },
    {
      question: "Is the Galle taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on pickup place, drop-off place, travel date, vehicle type, waiting time, highway tickets, luggage, and special requests.",
    },
  ],
  "sigiriya-taxi-service": [
    {
      question: "How do I book a Sigiriya taxi?",
      answer:
        "Send your pickup location, Sigiriya hotel or drop-off place, date, time, passenger count, and luggage details on WhatsApp. We will confirm the vehicle and route price before travel.",
    },
    {
      question: "Can I book a Colombo airport to Sigiriya taxi?",
      answer:
        "Yes. SKY Taxi Service & Tours provides private Colombo airport to Sigiriya taxi service with flight-time checking, clean vehicles, and friendly local drivers.",
    },
    {
      question: "Can the taxi stop at Dambulla or Pidurangala?",
      answer:
        "Yes. Your taxi to Sigiriya can include flexible stops such as Dambulla Cave Temple, Pidurangala, Habarana, village areas, and photo stops depending on time and route.",
    },
    {
      question: "Do you provide a private driver Sigiriya service?",
      answer:
        "Yes. You can book a private driver Sigiriya service for airport transfers, local sightseeing, hotel pickups, day trips, and Sri Lanka round tours.",
    },
    {
      question: "Is the Sigiriya taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on pickup place, drop-off place, travel date, vehicle type, waiting time, highway tickets, luggage, and special requests.",
    },
  ],
  "mirissa-taxi-service": [
    {
      question: "How do I book a Mirissa taxi?",
      answer:
        "Send your pickup location, Mirissa hotel or drop-off place, date, time, passenger count, and luggage details on WhatsApp. We will confirm the vehicle and route price before travel.",
    },
    {
      question: "Can I book a Colombo airport to Mirissa taxi?",
      answer:
        "Yes. SKY Taxi Service & Tours provides private Colombo airport to Mirissa taxi service with flight-time checking, clean vehicles, and friendly local drivers.",
    },
    {
      question: "Can I book a whale watching transfer Mirissa pickup?",
      answer:
        "Yes. We can arrange early morning hotel pickup for whale watching transfer Mirissa trips, harbor drop-off, and return travel depending on your schedule.",
    },
    {
      question: "Do you provide a private driver Mirissa service?",
      answer:
        "Yes. You can book a private driver Mirissa service for airport transfers, beach routes, whale watching transfers, hotel pickups, day trips, and Sri Lanka round tours.",
    },
    {
      question: "Is the Mirissa taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on pickup place, drop-off place, travel date, vehicle type, waiting time, highway tickets, luggage, and special requests.",
    },
  ],
  "private-driver-sri-lanka": [
    {
      question: "How do I hire a private driver in Sri Lanka?",
      answer:
        "Send your pickup location, travel dates, places you want to visit, number of passengers, luggage, and vehicle preference on WhatsApp. We will confirm a fair quote and driver details before travel.",
    },
    {
      question: "Can I book a private driver for airport pickup?",
      answer:
        "Yes. SKY Taxi Service & Tours provides airport pickup with private driver support from Colombo Airport to hotels, beach areas, hill country routes, and island-wide destinations.",
    },
    {
      question: "Can I book day tours with driver?",
      answer:
        "Yes. You can book day tours with driver for Galle, Ella, Kandy, Sigiriya, Mirissa, Yala, beaches, temples, viewpoints, and custom Sri Lanka day trips.",
    },
    {
      question: "What if I want one driver for my whole multi-day trip?",
      answer:
        "This page is for flexible, day-by-day hire — a single day, a few days, or point-to-point transfers with no fixed itinerary. If you want one dedicated driver for a continuous multi-day island tour, see Sri Lanka Tour Driver instead.",
    },
    {
      question: "Is the private driver price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on route, dates, vehicle type, number of days, passengers, luggage, waiting time, tickets, hotel needs, and special requests.",
    },
  ],
  "5-day-sri-lanka-tour": [
    {
      question: "Is $368 the final price?",
      answer:
        "It's the confirmed starting price for the entire private vehicle. The final price is confirmed on WhatsApp based on your exact dates, vehicle choice, hotel needs, entrance tickets, and whether you add a specialist guide.",
    },
    {
      question: "Can I change the route or number of days?",
      answer:
        "Yes. This is one real example route — tell us your interests or send a message to SKY AI, and we can adjust stops, add or remove days, or swap this for a different existing tour package.",
    },
    {
      question: "Is a guide included?",
      answer:
        "Not by default. Your driver handles transportation, timing, and route knowledge. A specialist licensed local guide can be arranged separately for the Cultural Triangle or Kandy stops — see Driver + Guide.",
    },
  ],
  "driver-guide-sri-lanka": [
    {
      question: "Is my driver also a tour guide?",
      answer:
        "Your driver helps with routes, timing, comfort stops, and local travel support, but is not automatically a licensed tour guide. If you want a specialist guide at specific sites, choose Driver + Guide instead.",
    },
    {
      question: "Is a guide available for my whole trip?",
      answer:
        "A specialist licensed guide can be arranged for specific sites or days where deeper explanation is useful, subject to availability. Tell us which stops matter most and we'll confirm what's possible on WhatsApp.",
    },
    {
      question: "Is the price fixed online?",
      answer:
        "No. The final price is confirmed on WhatsApp depending on route, dates, vehicle type, number of days, and whether a guide is arranged.",
    },
  ],
  "sri-lanka-tour-driver": [
    {
      question: "How do I hire a Sri Lanka tour driver?",
      answer:
        "Send your travel dates, pickup location, places you want to visit, number of passengers, luggage, hotel needs, and budget on WhatsApp. We will help plan a flexible route and confirm the driver.",
    },
    {
      question: "Can I book airport pickup with a tour driver?",
      answer:
        "Yes. SKY Taxi Service & Tours can arrange Colombo Airport pickup with a Sri Lanka tour driver so your private tour starts directly after arrival.",
    },
    {
      question: "Can I book a multi-day private chauffeur tour?",
      answer: "Yes. You can book private chauffeur tours for cultural sites, hill country, beaches, wildlife routes, and full island travel with flexible itineraries.",
    },
    {
      question: "Is this a Sri Lanka driver guide service?",
      answer:
        "Your driver helps with routes, timing, comfort stops, luggage, and local travel support. Specialist licensed site guides can be arranged separately where needed.",
    },
    {
      question: "What if I only need a driver for one day?",
      answer:
        "This page is for a continuous multi-day chauffeur tour with the same driver throughout. For a single day or a point-to-point transfer with no fixed itinerary, see Private Driver Sri Lanka instead.",
    },
    {
      question: "Is the Sri Lanka tour driver price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on travel dates, route, vehicle type, number of days, passengers, luggage, hotel needs, tickets, and special requests.",
    },
  ],
  "sri-lanka-private-tours": [
    {
      question: "How do I book Sri Lanka private tours?",
      answer:
        "Send your travel dates, pickup location, places you want to visit, number of passengers, luggage, hotel needs, and budget on WhatsApp. We will help create a flexible private tour plan.",
    },
    {
      question: "Can I customize my Sri Lanka private tour?",
      answer:
        "Yes. SKY Taxi Service & Tours can help with Sri Lanka custom tours for day trips, round tours, airport pickup, beach routes, cultural sites, wildlife, and hill country travel.",
    },
    {
      question: "Do you offer Sri Lanka round tours?",
      answer: "Yes. You can book multi-day Sri Lanka round tours with a private driver, clean vehicle, flexible itinerary, hotel stops, and WhatsApp support.",
    },
    {
      question: "Can private tours start from Colombo Airport?",
      answer: "Yes. Airport pickup for tours is available, so your Sri Lanka private tours can begin directly after arrival with flight-time checking and luggage support.",
    },
    {
      question: "Is the private tour price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on route, dates, vehicle type, passengers, luggage, hotels, entrance tickets, waiting time, and special requests.",
    },
  ],
  "sri-lanka-round-tours": [
    {
      question: "How do I book Sri Lanka round tours?",
      answer:
        "Send your travel dates, pickup location, places you want to visit, number of people, luggage, hotel needs, and budget on WhatsApp. We will help plan a private driver round trip.",
    },
    {
      question: "Can I customize my Sri Lanka round trip?",
      answer: "Yes. SKY Taxi Service & Tours can create a Sri Lanka itinerary with driver around your dates, places, hotels, budget, and travel style.",
    },
    {
      question: "Do round tours include airport pickup?",
      answer: "Yes. Your Sri Lanka round tours can start from Colombo Airport with flight-time checking, luggage support, and private driver pickup.",
    },
    {
      question: "Can I book a Sri Lanka tour package with driver for 3, 5, or 7 days?",
      answer: "Yes. You can book 3-day, 5-day, 7-day, or longer private round tour Sri Lanka routes with clean vehicles and flexible stops.",
    },
    {
      question: "Is the final Sri Lanka round tour price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on route, dates, vehicle type, number of days, passengers, hotels, entrance tickets, safari plans, train tickets, and special requests.",
    },
  ],
  "unawatuna-taxi-service": [
    {
      question: "How do I book Unawatuna taxi service?",
      answer:
        "Send your pickup location, drop-off location, date, time, number of passengers, and luggage details on WhatsApp. We will confirm the vehicle and fair route price before travel.",
    },
    {
      question: "Do you provide Colombo airport to Unawatuna taxi service?",
      answer:
        "Yes. SKY Taxi Service & Tours provides private Colombo airport to Unawatuna taxi service with flight-time checking, luggage support, and WhatsApp confirmation.",
    },
    {
      question: "Can I book taxi in Unawatuna for Galle, Mirissa, Ella, Yala, or Kandy?",
      answer:
        "Yes. You can book private taxi routes from Unawatuna to Galle, Mirissa, Ella, Yala, Kandy, Colombo Airport, and other destinations across Sri Lanka.",
    },
    {
      question: "Do you offer beach transfers from Unawatuna?",
      answer:
        "Yes. We arrange beach transfers from Unawatuna to Jungle Beach, Dalawella, Ahangama, Weligama, Mirissa, Hiriketiya, Tangalle, and south coast hotels.",
    },
    {
      question: "Is the Unawatuna airport transfer price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on pickup location, route, date, pickup time, vehicle type, passengers, luggage, highway tickets, waiting time, and special requests.",
    },
  ],
  "weligama-taxi-service": [
    {
      question: "How do I book Weligama taxi service?",
      answer:
        "Send your pickup location, drop-off location, date, time, number of passengers, and luggage details on WhatsApp. We will confirm the vehicle and fair route price before travel.",
    },
    {
      question: "Do you provide Colombo airport to Weligama taxi service?",
      answer:
        "Yes. SKY Taxi Service & Tours provides private Colombo airport to Weligama taxi service with flight-time checking, luggage support, and WhatsApp confirmation.",
    },
    {
      question: "Can I book taxi in Weligama for Mirissa, Galle, Unawatuna, Ella, or Yala?",
      answer:
        "Yes. You can book private taxi routes from Weligama to Mirissa, Galle, Unawatuna, Ella, Yala, Colombo Airport, and other destinations across Sri Lanka.",
    },
    {
      question: "Do you offer surf beach transfers from Weligama?",
      answer:
        "Yes. We arrange surf beach transfers from Weligama to Mirissa, Ahangama, Midigama, Unawatuna, Hiriketiya, Tangalle, and south coast hotels.",
    },
    {
      question: "Is the Weligama airport transfer price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on pickup location, route, date, pickup time, vehicle type, passengers, luggage, highway tickets, waiting time, surf gear, and special requests.",
    },
  ],
  "hiriketiya-taxi-service": [
    {
      question: "How do I book Hiriketiya taxi service?",
      answer:
        "Send your pickup location, drop-off location, date, time, number of passengers, and luggage details on WhatsApp. We will confirm the vehicle and fair route price before travel.",
    },
    {
      question: "Do you provide Colombo airport to Hiriketiya taxi service?",
      answer:
        "Yes. SKY Taxi Service & Tours provides private Colombo airport to Hiriketiya taxi service with flight-time checking, luggage support, and WhatsApp confirmation.",
    },
    {
      question: "Can I book taxi in Hiriketiya for Mirissa, Weligama, Galle, Ella, Yala, or Unawatuna?",
      answer:
        "Yes. You can book private taxi routes from Hiriketiya to Mirissa, Weligama, Galle, Ella, Yala, Unawatuna, Colombo Airport, and other destinations across Sri Lanka.",
    },
    {
      question: "Do you offer surf beach transfers from Hiriketiya?",
      answer:
        "Yes. We arrange surf beach transfers from Hiriketiya to Weligama, Mirissa, Ahangama, Midigama, Unawatuna, Tangalle, and south coast hotels.",
    },
    {
      question: "Is the Hiriketiya airport transfer price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on pickup location, route, date, pickup time, vehicle type, passengers, luggage, highway tickets, waiting time, surf gear, and special requests.",
    },
  ],
  "nuwara-eliya-taxi-service": [
    {
      question: "How do I book Nuwara Eliya taxi service?",
      answer:
        "Send your pickup location, drop-off location, date, time, number of passengers, and luggage details on WhatsApp. We will confirm the vehicle and fair route price before travel.",
    },
    {
      question: "Do you provide Colombo airport to Nuwara Eliya taxi service?",
      answer:
        "Yes. SKY Taxi Service & Tours provides private Colombo airport to Nuwara Eliya taxi service with flight-time checking, luggage support, and WhatsApp confirmation.",
    },
    {
      question: "Can I book taxi in Nuwara Eliya for Ella, Kandy, Galle, Mirissa, or Yala?",
      answer:
        "Yes. You can book private taxi routes from Nuwara Eliya to Ella, Kandy, Galle, Mirissa, Yala, Colombo Airport, and other destinations across Sri Lanka.",
    },
    {
      question: "Do you offer tea country and hill country transfers?",
      answer:
        "Yes. We arrange transfers for tea plantations, tea factories, waterfalls, viewpoints, Gregory Lake, hill country hotels, and scenic mountain routes.",
    },
    {
      question: "Is the Nuwara Eliya airport transfer price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on pickup location, route, date, pickup time, vehicle type, passengers, luggage, highway tickets, waiting time, mountain route conditions, and special requests.",
    },
  ],
  "bentota-taxi-service": [
    {
      question: "How do I book Bentota taxi service?",
      answer:
        "Send your pickup location, drop-off location, date, time, number of passengers, and luggage details on WhatsApp. We will confirm the vehicle and fair route price before travel.",
    },
    {
      question: "Do you provide Colombo airport to Bentota taxi service?",
      answer:
        "Yes. SKY Taxi Service & Tours provides private Colombo airport to Bentota taxi service with flight-time checking, luggage support, and WhatsApp confirmation.",
    },
    {
      question: "Can I book taxi in Bentota for Galle, Mirissa, Unawatuna, Ella, or Yala?",
      answer:
        "Yes. You can book private taxi routes from Bentota to Galle, Mirissa, Unawatuna, Ella, Yala, Colombo Airport, and other destinations across Sri Lanka.",
    },
    {
      question: "Do you offer beach transfers from Bentota?",
      answer:
        "Yes. We arrange beach transfers from Bentota to Hikkaduwa, Galle, Unawatuna, Weligama, Mirissa, Hiriketiya, Tangalle, and south coast hotels.",
    },
    {
      question: "Is the Bentota airport transfer price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on pickup location, route, date, pickup time, vehicle type, passengers, luggage, highway tickets, waiting time, and special requests.",
    },
  ],
  "negombo-taxi-service": [
    {
      question: "How do I book Negombo taxi service?",
      answer:
        "Send your pickup location, drop-off location, date, time, number of passengers, and luggage details on WhatsApp. We will confirm the vehicle and fair route price before travel.",
    },
    {
      question: "Do you provide Colombo airport to Negombo taxi service?",
      answer:
        "Yes. SKY Taxi Service & Tours provides private Colombo airport to Negombo taxi service with flight-time checking, luggage support, and WhatsApp confirmation.",
    },
    {
      question: "Can I book taxi in Negombo for Colombo, Galle, Kandy, Ella, Sigiriya, or Mirissa?",
      answer:
        "Yes. You can book private taxi routes from Negombo to Colombo, Galle, Kandy, Ella, Sigiriya, Mirissa, Colombo Airport, and other destinations across Sri Lanka.",
    },
    {
      question: "Do you offer airport pickup and beach transfers from Negombo?",
      answer:
        "Yes. We arrange Negombo airport transfer service, beach hotel pickups, lagoon transfers, airport hotel rides, and longer private routes around Sri Lanka.",
    },
    {
      question: "Is the Negombo airport transfer price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on pickup location, route, date, pickup time, vehicle type, passengers, luggage, highway tickets, waiting time, and special requests.",
    },
  ],
  "arugam-bay-taxi-service": [
    {
      question: "How do I book Arugam Bay taxi service?",
      answer:
        "Send your pickup location, drop-off location, date, time, number of passengers, and luggage details on WhatsApp. We will confirm the vehicle and fair route price before travel.",
    },
    {
      question: "Do you provide Colombo airport to Arugam Bay taxi service?",
      answer:
        "Yes. SKY Taxi Service & Tours provides private Colombo airport to Arugam Bay taxi service with flight-time checking, luggage support, and WhatsApp confirmation.",
    },
    {
      question: "Can I book taxi in Arugam Bay for Ella, Yala, Kandy, Mirissa, or Galle?",
      answer:
        "Yes. You can book private taxi routes from Arugam Bay to Ella, Yala, Kandy, Mirissa, Galle, Colombo Airport, and other destinations across Sri Lanka.",
    },
    {
      question: "Do you offer surf beach transfers from Arugam Bay?",
      answer:
        "Yes. We arrange surf beach transfers from Arugam Bay to nearby surf points, Pottuvil, east coast stays, Ella, Yala, and custom island routes.",
    },
    {
      question: "Is the Arugam Bay airport transfer price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on pickup location, route, date, pickup time, vehicle type, passengers, luggage, highway tickets, waiting time, surf gear, and special requests.",
    },
  ],
  "dambulla-taxi-service": [
    {
      question: "How do I book a Dambulla taxi?",
      answer:
        "Send your pickup location, Dambulla hotel or drop-off place, date, time, passenger count, and luggage details on WhatsApp. We will confirm the vehicle and route price before travel.",
    },
    {
      question: "Can I book a Colombo airport to Dambulla taxi?",
      answer:
        "Yes. SKY Taxi Service & Tours provides private Colombo airport to Dambulla taxi service with flight-time checking, clean vehicles, and friendly local drivers.",
    },
    {
      question: "Can the taxi stop at Sigiriya or Pidurangala?",
      answer:
        "Yes. Your taxi to Dambulla can include flexible stops such as Sigiriya Rock Fortress, Pidurangala, Habarana, and village areas depending on time and route.",
    },
    {
      question: "Do you provide a private driver Dambulla service?",
      answer:
        "Yes. You can book a private driver Dambulla service for airport transfers, local sightseeing, day tours, and round tours around Sri Lanka.",
    },
    {
      question: "Is the Dambulla taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on pickup place, drop-off place, travel date, vehicle type, waiting time, highway tickets, and special requests.",
    },
  ],
  "sri-lanka-taxi-service": [
    {
      question: "How do I book a Sri Lanka taxi service?",
      answer:
        "Send your pickup location, drop-off location, date, time, passenger count, and luggage details on WhatsApp. SKY Taxi Service & Tours will confirm the vehicle and route-based price before travel.",
    },
    {
      question: "Do you provide Sri Lanka airport taxi pickup?",
      answer:
        "Yes. We provide Colombo Airport pickup with private vehicles, flight-time checking, luggage support, and WhatsApp confirmation before pickup.",
    },
    {
      question: "Can I book a long distance taxi Sri Lanka route?",
      answer:
        "Yes. You can book long-distance taxi routes to Ella, Kandy, Galle, Sigiriya, Mirissa, Unawatuna, Nuwara Eliya, and many other destinations around Sri Lanka.",
    },
    {
      question: "Is this a private taxi Sri Lanka service?",
      answer:
        "Yes. Your taxi is private for your group, with a clean vehicle and friendly local driver. You do not share the vehicle with other travelers.",
    },
    {
      question: "Is the final taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, highway tickets, waiting time, and special requests.",
    },
  ],
  "budget-taxi-sri-lanka": [
    {
      question: "How do I book a budget taxi in Sri Lanka?",
      answer:
        "Send your pickup location, drop-off location, date, time, passenger count, and luggage details on WhatsApp. We will confirm the vehicle and fair route price before travel.",
    },
    {
      question: "Do you offer cheap taxi Sri Lanka airport transfers?",
      answer:
        "Yes. SKY Taxi Service & Tours offers budget airport transfer Sri Lanka options with clean vehicles, private drivers, and route-based WhatsApp quotes.",
    },
    {
      question: "How can I get the best affordable taxi Sri Lanka price?",
      answer:
        "Send accurate pickup and drop-off locations, travel date, time, passenger count, and luggage details. This helps us give the best fair price taxi Sri Lanka quote.",
    },
    {
      question: "Are budget taxis still private vehicles?",
      answer:
        "Yes. Budget taxi Sri Lanka service uses private vehicles with friendly local drivers. You do not share the vehicle with other travelers.",
    },
    {
      question: "Is the final budget taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on route, date, vehicle type, waiting time, highway tickets, luggage, pickup time, and special requests.",
    },
  ],
  "day-tours-sri-lanka": [
    {
      question: "How do I book day tours Sri Lanka with SKY Taxi Service & Tours?",
      answer:
        "Send your pickup location, date, places you want to visit, number of people, luggage, and budget on WhatsApp. We will help plan a private one-day route and confirm the vehicle.",
    },
    {
      question: "Can I customize a private day tour Sri Lanka route?",
      answer:
        "Yes. You can customize your route for Ella, Kandy, Galle, Sigiriya, Mirissa, Yala, beaches, temples, viewpoints, wildlife, and local stops.",
    },
    {
      question: "Can day tours start with airport pickup?",
      answer:
        "Yes. Sri Lanka day trips can start from Colombo Airport or your hotel, depending on route distance, arrival time, luggage, and vehicle availability.",
    },
    {
      question: "Do you provide Sri Lanka day tours with driver?",
      answer:
        "Yes. Each private day tour includes a clean vehicle and friendly local driver support. Specialist licensed site guides can be arranged separately where needed.",
    },
    {
      question: "Is the day tour price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on pickup place, route, date, vehicle type, passengers, waiting time, entrance tickets, safari needs, and special requests.",
    },
  ],
  "yala-safari-transfer": [
    {
      question: "How do I book a Yala safari transfer?",
      answer:
        "Send your pickup location, drop-off location, date, time, number of passengers, luggage, and safari plan on WhatsApp. We will confirm the private vehicle and fair route price.",
    },
    {
      question: "Can I book a taxi to Yala National Park from Colombo Airport?",
      answer:
        "Yes. SKY Taxi Service & Tours provides Colombo airport to Yala taxi service with private vehicles, flight-time checking, luggage support, and WhatsApp confirmation.",
    },
    {
      question: "Do you arrange safari transport Sri Lanka hotel pickup?",
      answer:
        "Yes. We can arrange private transfer support from hotels in Galle, Mirissa, Unawatuna, Ella, Colombo, Airport, Tangalle, Hiriketiya, and nearby areas.",
    },
    {
      question: "Is the safari jeep included with Yala taxi service?",
      answer:
        "This page is for private taxi and transfer service to Yala. Safari jeep hire and park entrance fees can be discussed separately on WhatsApp if needed.",
    },
    {
      question: "Is the Yala safari transfer price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on pickup location, route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
    },
  ],
  "airport-to-negombo": [
    {
      question: "How long does a Colombo Airport to Negombo taxi take?",
      answer:
        "A Colombo Airport to Negombo taxi usually takes around 15 to 30 minutes depending on traffic, pickup time, and the exact Negombo hotel location.",
    },
    {
      question: "Can I book an airport to Negombo taxi after a late flight?",
      answer:
        "Yes. SKY Taxi Service & Tours can arrange Negombo airport transfer service for day or night arrivals with flight-time checking and WhatsApp confirmation.",
    },
    {
      question: "Is Negombo a good first stop after landing?",
      answer:
        "Many travelers choose Negombo as a first or last night stop because of the short distance from Bandaranaike International Airport, which is useful for early morning departures or late night arrivals.",
    },
    {
      question: "Can I continue from Negombo to other destinations?",
      answer:
        "Yes. Your private transfer to Negombo can continue toward Colombo, Kandy, Sigiriya, or south coast destinations on a later date.",
    },
    {
      question: "Is the Colombo Airport to Negombo taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, and special requests.",
    },
  ],
  "airport-to-bentota": [
    {
      question: "How long does a Colombo Airport to Bentota taxi take?",
      answer:
        "A Colombo Airport to Bentota taxi usually takes around 1.5 to 2 hours by Southern Expressway depending on traffic, pickup time, comfort stops, and the exact Bentota hotel location.",
    },
    {
      question: "Can I book an airport to Bentota taxi after a late flight?",
      answer:
        "Yes. SKY Taxi Service & Tours can arrange Bentota airport transfer service for day or night arrivals with flight-time checking and WhatsApp confirmation.",
    },
    {
      question: "Does the taxi use the Southern Expressway?",
      answer:
        "Yes. Most private transfers from Colombo Airport to Bentota use the Southern Expressway for a faster coastal route, with highway ticket costs confirmed in your WhatsApp quote.",
    },
    {
      question: "Can I continue from Bentota to other beach destinations?",
      answer:
        "Yes. Your private transfer to Bentota can continue to Hikkaduwa, Galle, Unawatuna, or nearby south coast hotels.",
    },
    {
      question: "Is the Colombo Airport to Bentota taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
    },
  ],
  "airport-to-nuwara-eliya": [
    {
      question: "How long does a Colombo Airport to Nuwara Eliya taxi take?",
      answer:
        "A Colombo Airport to Nuwara Eliya taxi usually takes around 5 to 6 hours depending on traffic, pickup time, comfort stops, and the exact Nuwara Eliya hotel location.",
    },
    {
      question: "Can I book an airport to Nuwara Eliya taxi after a late flight?",
      answer:
        "Yes. SKY Taxi Service & Tours can arrange Nuwara Eliya airport transfer service for day or night arrivals with flight-time checking and WhatsApp confirmation.",
    },
    {
      question: "Can we stop at tea estates or viewpoints on the way?",
      answer:
        "Yes. Your taxi from Colombo airport to Nuwara Eliya can include flexible stops for tea plantations, tea factories, waterfalls, and viewpoints depending on time and route.",
    },
    {
      question: "Can I continue from Nuwara Eliya to Ella or Kandy?",
      answer:
        "Yes. Your private transfer to Nuwara Eliya can continue to Ella, Kandy, Galle, or other Sri Lanka destinations on a later date.",
    },
    {
      question: "Is the Colombo Airport to Nuwara Eliya taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
    },
  ],
  "airport-to-arugam-bay": [
    {
      question: "How long does a Colombo Airport to Arugam Bay taxi take?",
      answer:
        "A Colombo Airport to Arugam Bay taxi usually takes around 7 to 8 hours depending on traffic, pickup time, comfort stops, and the exact Arugam Bay guesthouse location.",
    },
    {
      question: "Can I book an airport to Arugam Bay taxi after a late flight?",
      answer:
        "Yes. SKY Taxi Service & Tours can arrange Arugam Bay airport transfer service for day or night arrivals with flight-time checking and WhatsApp confirmation.",
    },
    {
      question: "Is there space for surfboards?",
      answer:
        "Yes. Let us know if you are traveling with surfboards so we can suggest a vehicle with enough space for your board bags and luggage.",
    },
    {
      question: "Can we stop along the way to Arugam Bay?",
      answer: "Yes. Your taxi from Colombo airport to Arugam Bay can include flexible food and rest stops depending on time and route.",
    },
    {
      question: "Is the Colombo Airport to Arugam Bay taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
    },
  ],
  "airport-to-dambulla": [
    {
      question: "How long does a Colombo Airport to Dambulla taxi take?",
      answer:
        "A Colombo Airport to Dambulla taxi usually takes around 3.5 to 4.5 hours depending on traffic, pickup time, comfort stops, and the exact Dambulla hotel location.",
    },
    {
      question: "Can I book an airport to Dambulla taxi after a late flight?",
      answer:
        "Yes. SKY Taxi Service & Tours can arrange Dambulla airport transfer service for day or night arrivals with flight-time checking and WhatsApp confirmation.",
    },
    {
      question: "Can the taxi stop at Sigiriya or Pidurangala?",
      answer:
        "Yes. Your taxi from Colombo airport to Dambulla can include flexible stops for Sigiriya Rock Fortress, Pidurangala, Habarana, and village areas depending on time and route.",
    },
    {
      question: "Can I continue to other Cultural Triangle destinations?",
      answer: "Yes. Your private transfer to Dambulla can continue to Sigiriya, Habarana, Polonnaruwa, Anuradhapura, or Kandy.",
    },
    {
      question: "Is the Colombo Airport to Dambulla taxi price fixed online?",
      answer:
        "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
    },
  ],
  "ai-trip-planner": [
    {
      question: "Is SKY AI a real, working trip planner?",
      answer: "Yes. SKY AI is a live AI trip planner at ai.skytaxisrilanka.com that generates a Sri Lanka route from what you tell it.",
    },
    {
      question: "Does the AI book my trip automatically?",
      answer:
        "No. SKY AI drafts a recommended route and itinerary. Your actual private driver, vehicle, and final price are confirmed separately by SKY Taxi Service & Tours on WhatsApp.",
    },
    {
      question: "Does the AI show real prices or availability?",
      answer:
        "The AI focuses on route and itinerary planning, not live pricing or availability. Final pricing and vehicle availability are always confirmed on WhatsApp before travel.",
    },
    {
      question: "Who is the AI trip planner for?",
      answer:
        "Anyone planning a private Sri Lanka trip who isn't sure how to sequence their days — it works well whether you already know a few destinations or are starting from scratch.",
    },
    {
      question: "Do I still need to contact SKY after using the AI planner?",
      answer:
        "Yes. The AI route is a starting point. Send it to SKY Taxi Service & Tours on WhatsApp so a real driver, vehicle, and route price can be confirmed before you travel.",
    },
  ],
  "how-many-days-in-sri-lanka": [
    {
      question: "How many days do I need in Sri Lanka?",
      answer:
        "It depends on how many regions you want to cover. A single day is enough for one destination like Kandy or Colombo. 2 to 3 days suits the hill country alone. 5 days can combine the east coast, Cultural Triangle, hill country, and a safari. 7 to 10 days allows a fuller route across the north, east, cultural sites, hill country, and south coast.",
    },
    {
      question: "Is 5 days enough for Sri Lanka?",
      answer:
        "5 days is enough for a real, priced multi-region route — SKY's 5-day tour covers Trincomalee, the Cultural Triangle, hill country, and a wildlife safari in one continuous trip. It won't cover the whole island, but it covers several distinct regions without feeling rushed.",
    },
    {
      question: "What if I only have 2 or 3 days?",
      answer:
        "SKY has real 2-day and 3-day private tour routes built around the hill country and Cultural Triangle — both are priced, existing itineraries, not a shortened version of a longer trip.",
    },
    {
      question: "Can I customize the number of days?",
      answer:
        "Yes. These are starting itineraries. Send your travel dates and interests on WhatsApp, or ask SKY AI, and days, stops, or pace can be adjusted.",
    },
  ],
  "is-a-private-driver-worth-it": [
    {
      question: "Is a private driver worth it in Sri Lanka?",
      answer:
        "For most visitors, yes — it removes the learning curve of left-hand traffic and mixed-use roads shared with tuk-tuks, buses, and pedestrians, and keeps a multi-stop day flexible without needing to rebook anything for a changed plan.",
    },
    {
      question: "Is it safe to self-drive in Sri Lanka?",
      answer:
        "Self-driving is possible, but it means adjusting to left-hand traffic and road conditions that vary a lot outside main highways, with no local knowledge of routes or timing to fall back on.",
    },
    {
      question: "How much does a private driver cost?",
      answer:
        "There is no fixed online price — final pricing depends on route, vehicle type, and passenger count, confirmed directly on WhatsApp before travel.",
    },
    {
      question: "Do I need a driver and a guide, or just a driver?",
      answer:
        "A driver alone handles transportation, timing, and route knowledge. A specialist licensed guide is a separate addition for deeper historical or cultural insight at specific stops — see Driver + Guide for the difference.",
    },
  ],
  "ella-vs-nuwara-eliya": [
    {
      question: "Ella or Nuwara Eliya — which should I visit?",
      answer:
        "Ella suits travelers who want hiking, viewpoints like Little Adam's Peak, the Nine Arch Bridge, and a livelier small-town base. Nuwara Eliya suits travelers who want tea plantations, Gregory Lake, and a cooler colonial-era hill town with a quieter pace.",
    },
    {
      question: "Can I visit both Ella and Nuwara Eliya?",
      answer:
        "Yes — they're close enough that SKY's real 2-day private tour already combines Kandy, Nuwara Eliya, and Ella in one continuous route.",
    },
    {
      question: "Which is better for hiking?",
      answer:
        "Ella has the stronger hiking draw, with Little Adam's Peak and nearby viewpoints. Nuwara Eliya is more about tea estate walks and Gregory Lake than dedicated hiking trails.",
    },
    {
      question: "Which is cooler, Ella or Nuwara Eliya?",
      answer:
        "Nuwara Eliya sits higher and has the cooler, more distinctly colonial-era climate of the two. Ella is still hill country and noticeably cooler than the coast, but milder than Nuwara Eliya.",
    },
  ],
  "best-beaches-near-galle": [
    {
      question: "What are the best beaches near Galle?",
      answer:
        "Unawatuna, Mirissa, Weligama, and Bentota are the real, nearby south coast beaches SKY regularly drives to from Galle, each with a different character — Unawatuna for a calm family-friendly beach, Mirissa for whale watching, Weligama for surfing, and Bentota further north for beach resorts.",
    },
    {
      question: "Which beach near Galle is best for swimming?",
      answer:
        "Unawatuna is generally the calmer, more swim-friendly option of the group, which is part of why it's tagged as family-friendly.",
    },
    {
      question: "Which beach near Galle is best for surfing?",
      answer:
        "Weligama is the south coast's main surf-school beach, with Hiriketiya (a little further along the coast) also known for its horseshoe-shaped surf bay.",
    },
    {
      question: "Can a private driver combine Galle with these beaches in one day?",
      answer:
        "Yes — a private route from Galle can include flexible stops at any of these beaches depending on your time and interests. Send your plan on WhatsApp for a route-based quote.",
    },
  ],
  "galle-to-ella": [
    {
      question: "How do I get from Galle to Ella?",
      answer:
        "By private driver is the most direct option — one continuous journey from the south coast up into the hill country, with flexible stops along the way. Exact duration depends on your pickup point, road conditions, and any stops, and is confirmed on WhatsApp before travel.",
    },
    {
      question: "How long does the Galle to Ella journey take?",
      answer:
        "There's no single fixed time — it depends on your exact pickup location, stops, and road conditions on the day. Send your travel date and pickup point on WhatsApp for a realistic estimate before booking.",
    },
    {
      question: "Can the driver stop along the way from Galle to Ella?",
      answer:
        "Yes — a private route can include flexible stops for viewpoints, food, or photos between the south coast and hill country, unlike a fixed-schedule public transport option.",
    },
    {
      question: "Is there a direct train or bus from Galle to Ella?",
      answer:
        "Public transport between the south coast and hill country typically involves a transfer rather than a single direct route. A private driver avoids that transfer and keeps the journey to one continuous trip.",
    },
  ],
  // The entries below are pulled directly from each page's own SEO data
  // file (destinationExplorer/comparisons/cityRoutes/nearbyPlaces/themeHubs)
  // rather than retyped here, so the JSON-LD can never drift from what the
  // page actually renders — both read the exact same `faqs` array.
  colombo: destinationExplorerPages.colombo.faqs,
  sinharaja: destinationExplorerPages.sinharaja.faqs,
  "things-to-do-in-galle": destinationExplorerPages["things-to-do-in-galle"].faqs,
  "things-to-do-in-unawatuna": destinationExplorerPages["things-to-do-in-unawatuna"].faqs,
  "things-to-do-in-ella": destinationExplorerPages["things-to-do-in-ella"].faqs,
  "things-to-do-in-kandy": destinationExplorerPages["things-to-do-in-kandy"].faqs,
  "things-to-do-in-sigiriya": destinationExplorerPages["things-to-do-in-sigiriya"].faqs,
  "unawatuna-vs-mirissa": comparisonPages["unawatuna-vs-mirissa"].faqs,
  "galle-vs-colombo": comparisonPages["galle-vs-colombo"].faqs,
  "sigiriya-vs-ella": comparisonPages["sigiriya-vs-ella"].faqs,
  "ella-to-kandy": cityToCityRoutes["ella-to-kandy"].faqs,
  "kandy-to-sigiriya": cityToCityRoutes["kandy-to-sigiriya"].faqs,
  "sigiriya-to-yala": cityToCityRoutes["sigiriya-to-yala"].faqs,
  "galle-to-mirissa": cityToCityRoutes["galle-to-mirissa"].faqs,
  "mirissa-to-ella": cityToCityRoutes["mirissa-to-ella"].faqs,
  "best-places-to-visit-from-ella": nearbyPlacesPages["best-places-to-visit-from-ella"].faqs,
  "best-places-to-visit-from-kandy": nearbyPlacesPages["best-places-to-visit-from-kandy"].faqs,
  "sri-lanka-beaches": themeHubPages["sri-lanka-beaches"].faqs,
  "sri-lanka-hill-country": themeHubPages["sri-lanka-hill-country"].faqs,
  "sri-lanka-culture-ancient-cities": themeHubPages["sri-lanka-culture-ancient-cities"].faqs,
  "sri-lanka-surfing": themeHubPages["sri-lanka-surfing"].faqs,
  // Duration-tour pages (DurationTourPage.jsx) render the same two FAQ
  // questions on every duration, with the tour's own real price
  // interpolated into the first question — matched verbatim here.
  "2-days-in-sri-lanka": [
    { question: "Is $180 the final price?", answer: "It's the confirmed starting price for the entire private vehicle. The final price is confirmed on WhatsApp based on your exact dates, vehicle choice, hotel needs, entrance tickets, and whether you add a specialist guide." },
    { question: "Can I change the route or number of days?", answer: "Yes. This is one real example route — tell us your interests or send a message to SKY AI, and we can adjust stops, add or remove days, or swap this for a different existing tour package." },
  ],
  "3-days-in-sri-lanka": [
    { question: "Is $250 the final price?", answer: "It's the confirmed starting price for the entire private vehicle. The final price is confirmed on WhatsApp based on your exact dates, vehicle choice, hotel needs, entrance tickets, and whether you add a specialist guide." },
    { question: "Can I change the route or number of days?", answer: "Yes. This is one real example route — tell us your interests or send a message to SKY AI, and we can adjust stops, add or remove days, or swap this for a different existing tour package." },
  ],
  "7-days-in-sri-lanka": [
    { question: "Is $514 the final price?", answer: "It's the confirmed starting price for the entire private vehicle. The final price is confirmed on WhatsApp based on your exact dates, vehicle choice, hotel needs, entrance tickets, and whether you add a specialist guide." },
    { question: "Can I change the route or number of days?", answer: "Yes. This is one real example route — tell us your interests or send a message to SKY AI, and we can adjust stops, add or remove days, or swap this for a different existing tour package." },
  ],
  "10-days-in-sri-lanka": [
    { question: "Is $734 the final price?", answer: "It's the confirmed starting price for the entire private vehicle. The final price is confirmed on WhatsApp based on your exact dates, vehicle choice, hotel needs, entrance tickets, and whether you add a specialist guide." },
    { question: "Can I change the route or number of days?", answer: "Yes. This is one real example route — tell us your interests or send a message to SKY AI, and we can adjust stops, add or remove days, or swap this for a different existing tour package." },
  ],
  "south-coast-vs-east-coast": [
    { question: "I'm traveling December to March — which coast?", answer: "The south and west coasts are generally driest in this window, making Galle, Unawatuna, Mirissa, Weligama, and Hiriketiya a reasonable focus." },
    { question: "I'm traveling May to September — which coast?", answer: "The east coast, including Arugam Bay, tends to be driest in this window — a reasonable time to prioritize the east over the south." },
    { question: "Can I visit both coasts on one trip?", answer: "Yes, on a longer route — SKY's real 10-day tour combines the east coast, hill country, and south coast in one continuous private trip." },
  ],
  "sri-lanka-honeymoon": [
    { question: "Does SKY offer a honeymoon package?", answer: "Not as a separate product — SKY's private driver and round tour services already offer the flexibility a couples trip needs. Tell us your interests and we'll suggest a real route." },
    { question: "Is Sri Lanka good for a honeymoon?", answer: "Many couples combine hill country scenery with south coast beaches on one private route — SKY's real multi-day tours already cover both in a single continuous trip." },
    { question: "Can we customize a route just for two people?", answer: "Yes — a private vehicle and driver work the same whether it's two passengers or a larger group; pricing depends on route and vehicle, confirmed on WhatsApp." },
  ],
  "sri-lanka-family-travel": [
    { question: "Do you have larger vehicles for families?", answer: "Yes — SKY's fleet includes SUVs and vans suited to families needing more passenger and luggage space; mention your group size when booking." },
    { question: "Which beach is best for children?", answer: "Unawatuna is the destination specifically noted for calmer swimming conditions in SKY's data, making it a reasonable starting point." },
    { question: "Can we take breaks more often with a private driver?", answer: "Yes — a private route isn't locked to a fixed schedule, so stops for food, rest, or a change of plan can be added as needed." },
  ],
  "sri-lanka-budget-travel": [
    { question: "Are prices per person or per vehicle?", answer: "Per vehicle — the price shown covers the whole private tour or transfer, not each traveler individually, which makes group and family trips more cost-effective." },
    { question: "Is there a cheaper way to see multiple destinations?", answer: "One-day tours are the lower-cost option per destination; a multi-day round tour costs more overall but covers several regions in one continuous booking. See How Many Days Do You Need in Sri Lanka? to compare." },
  ],
  "how-much-does-a-sri-lanka-trip-cost": [
    { question: "What isn't included in these prices?", answer: "Entrance tickets, meals, and hotel stays are not included in the tour prices above — see the individual tour pages for a full breakdown of what's included." },
    { question: "Does a specialist guide cost extra?", answer: "Yes — a driver alone is included in the base price; a specialist licensed guide is an optional add-on, confirmed on WhatsApp." },
    { question: "Are airport transfers priced separately?", answer: "Yes — airport transfers have their own per-vehicle pricing, separate from tour packages. See Airport Transfer Sri Lanka for details." },
  ],
  "best-time-to-visit-sri-lanka": [
    { question: "Is there a single best month to visit Sri Lanka?", answer: "Not really — it depends which coast you're prioritizing. December to March suits the south and west; May to September suits the east coast." },
    { question: "Can I visit both coasts on one trip regardless of season?", answer: "Yes, but see South Coast vs East Coast for how to think about timing if you want to prioritize good weather on both." },
    { question: "What if it rains during my trip?", answer: "Rain in Sri Lanka is often short and localized rather than an all-day washout — a private driver can adjust the day's plan around it more easily than a fixed-schedule tour." },
  ],
  "first-time-visitor-sri-lanka": [
    { question: "How many days should a first trip be?", answer: "See How Many Days Do You Need in Sri Lanka? for a full breakdown by real, priced route length." },
    { question: "Should I self-drive on my first trip?", answer: "Most first-time visitors use a private driver rather than self-driving — see Is a Private Driver Worth It in Sri Lanka? for the full comparison." },
  ],
  // PHASE 3: added — /taxi previously had zero FAQ content despite already
  // showing real per-km pricing on the page. Matches the visible FAQ
  // section added to TaxiService.jsx.
  taxi: [
    { question: "How much is a taxi in Sri Lanka?", answer: "SKY's standard rate is Rs. 150 / km for one-way trips and Rs. 100 / km for round trips, without waiting charges or highway tickets. Send your exact pickup and drop-off on WhatsApp for a fair, route-based quote." },
    { question: "Can I book a private driver from any city?", answer: "Yes — SKY's taxi and private driver network covers Colombo, the south coast, hill country, and the Cultural Triangle. See Private Driver Sri Lanka for the flexible, multi-stop hire option." },
    { question: "Is the per-km rate the final price?", answer: "It's the standard starting rate. Waiting time, highway tickets, and route specifics are confirmed on WhatsApp before travel." },
  ],
  // PHASE 3 additions
  "ella-vs-kandy": comparisonPages["ella-vs-kandy"].faqs,
  "galle-to-yala": cityToCityRoutes["galle-to-yala"].faqs,
  "unawatuna-to-ella": cityToCityRoutes["unawatuna-to-ella"].faqs,
  "is-sri-lanka-safe-for-tourists": [
    { question: "Should I check official travel advisories?", answer: "Yes — your own government's foreign travel advisory (updated regularly by official sources) is the right place for current, authoritative safety guidance, not a tour operator's website." },
    { question: "Is it safe to travel around Sri Lanka at night?", answer: "A private driver with a confirmed pickup time removes much of the uncertainty of unfamiliar late-night transport — see Is a Private Driver Worth It? for the fuller comparison against self-drive or public transport." },
  ],
  "can-i-travel-sri-lanka-without-a-car": [
    { question: "Do I need to rent a car to see multiple destinations?", answer: "No — a private driver covers multi-stop, multi-region routes without you needing to rent or drive anything yourself. See How to Travel Around Sri Lanka for the full comparison of options." },
    { question: "Is a private driver more expensive than a rental car?", answer: "There's no fixed online price for either — see How Much Does a Sri Lanka Trip Cost? for real figures from SKY's own catalog, and Private Driver vs Rental Car for the fuller comparison." },
  ],
};
