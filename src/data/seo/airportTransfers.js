import { images } from "../travelData";

// Data for the "Colombo Airport to X" landing page template
// (src/components/seo/AirportTransferLanding.jsx). Each entry mirrors the
// hand-written airport-to-X pages (see src/pages/AirportToGalleTaxi.jsx)
// but is expressed as data so new towns don't need a new ~250-line JSX
// file. Travel-time ranges are well-established public knowledge about
// Sri Lanka's road network (same style already used on the hand-written
// pages), never a specific promised time — the exact price/time is always
// deferred to a WhatsApp quote, matching every other page on this site.
export const airportTransferTowns = {
  negombo: {
    slug: "airport-to-negombo",
    townName: "Negombo",
    heroImage: images.beach,
    heroAlt: "Colombo Airport to Negombo taxi private transfer Sri Lanka",
    heroTitle: "Colombo Airport to Negombo Taxi",
    heroDescription:
      "Book a private taxi from Colombo Airport to Negombo with a quick near-airport transfer, clean vehicles, local drivers, and 24/7 WhatsApp booking.",
    introEyebrow: "Colombo Airport to Negombo transfer",
    introTitle: "Private airport to Negombo taxi for a quick near-airport transfer",
    introText:
      "SKY Taxi Service & Tours helps travelers book a private Colombo Airport to Negombo taxi before arrival. Negombo is one of the closest towns to Bandaranaike International Airport, so it is a common first or last stop for a Sri Lanka trip.",
    travelTimeText:
      "The airport to Negombo taxi route usually takes around 15 to 30 minutes depending on traffic, pickup time, and hotel location.",
    badgeText: "15–30 min route",
    summaryIcon: "plane",
    summaryStops: [
      {
        title: "Quick airport transfer",
        text: "One of the shortest airport transfer routes in Sri Lanka, useful for late arrivals or early departures.",
        icon: "plane",
      },
      {
        title: "Beach and lagoon area",
        text: "Arrive near Negombo's beach hotels, lagoon area, or fish market with easy WhatsApp coordination.",
        icon: "mapPinned",
      },
      {
        title: "Onward travel support",
        text: "Use the same private transfer to continue toward Colombo, Kandy, or south coast destinations.",
        icon: "route",
      },
    ],
    routeDetails: [
      {
        title: "Colombo Airport to Negombo taxi",
        text: "Private transfer from Bandaranaike International Airport to Negombo with flight-time checking, luggage support, and WhatsApp driver confirmation.",
        image: images.airportWelcome,
      },
      {
        title: "Route details and travel time",
        text: "The airport to Negombo taxi route usually takes around 15 to 30 minutes depending on traffic, pickup time, and hotel location.",
        image: images.airportTransfer,
      },
      {
        title: "Negombo beach and lagoon",
        text: "Travel to Negombo's beach hotels, lagoon area, and fish market with a clean private vehicle and fair route-based pricing confirmed on WhatsApp.",
        image: images.beach,
      },
      {
        title: "Onward Sri Lanka travel",
        text: "Continue directly from Negombo toward Colombo, Kandy, Sigiriya, or south coast destinations on a later date.",
        image: images.boatTour,
      },
    ],
    vehicleBlurbs: [
      "Affordable private car for a smooth Colombo Airport to Negombo taxi transfer.",
      "Clean wagon option for airport to Negombo taxi rides with extra room for bags.",
      "Comfortable SUV for couples, families, and near-airport transfers.",
      "Spacious van for families and groups booking a private transfer to Negombo.",
    ],
    relatedLinks: [
      { label: "Colombo Airport Taxi", href: "/colombo-airport-taxi" },
      { label: "Airport Transfer Sri Lanka", href: "/airport-transfer-sri-lanka" },
      { label: "Negombo Taxi Service", href: "/negombo-taxi-service" },
      { label: "Airport to Bentota Taxi", href: "/airport-to-bentota" },
    ],
    faqs: [
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
  },
  bentota: {
    slug: "airport-to-bentota",
    townName: "Bentota",
    heroImage: images.blueBeach,
    heroAlt: "Colombo Airport to Bentota taxi private transfer Sri Lanka",
    heroTitle: "Colombo Airport to Bentota Taxi",
    heroDescription:
      "Book a private taxi from Colombo Airport to Bentota with a safe beach transfer, clean vehicles, local drivers, and 24/7 WhatsApp booking.",
    introEyebrow: "Colombo Airport to Bentota transfer",
    introTitle: "Private airport to Bentota taxi with safe beach transfer",
    introText:
      "SKY Taxi Service & Tours helps travelers book a private Colombo Airport to Bentota taxi before arrival. Your driver can meet you at the airport, help with luggage, and take you safely to Bentota's beach hotels and resorts.",
    travelTimeText:
      "The airport to Bentota taxi route usually takes around 1.5 to 2 hours by Southern Expressway depending on traffic, pickup time, and hotel location.",
    badgeText: "1.5–2 hr route",
    summaryIcon: "palmtree",
    summaryStops: [
      {
        title: "Southern Expressway route",
        text: "A faster coastal transfer route from Colombo Airport to Bentota with clean vehicles and safe local driver support.",
        icon: "route",
      },
      {
        title: "Beach resort arrival",
        text: "Arrive near Bentota's beach hotels, river, and resort area with easy WhatsApp coordination.",
        icon: "palmtree",
      },
      {
        title: "South coast support",
        text: "Use the same private transfer to reach Hikkaduwa, Galle, or nearby south coast hotels.",
        icon: "shieldCheck",
      },
    ],
    routeDetails: [
      {
        title: "Colombo Airport to Bentota taxi",
        text: "Private transfer from Bandaranaike International Airport to Bentota with flight-time checking, luggage support, and WhatsApp driver confirmation.",
        image: images.airportWelcome,
      },
      {
        title: "Route details and travel time",
        text: "The airport to Bentota taxi route usually takes around 1.5 to 2 hours by Southern Expressway depending on traffic, pickup time, and hotel location.",
        image: images.airportTransfer,
      },
      {
        title: "Southern Expressway transfer",
        text: "Travel safely on the Southern Expressway with a clean private vehicle, comfort breaks when needed, and fair route-based pricing confirmed on WhatsApp.",
        image: images.blueBeach,
      },
      {
        title: "Bentota beach and river",
        text: "Continue directly to Bentota's beach hotels, river safari area, or nearby Hikkaduwa and Galle.",
        image: images.beach,
      },
    ],
    vehicleBlurbs: [
      "Affordable private car for a smooth Colombo Airport to Bentota taxi transfer.",
      "Clean wagon option for airport to Bentota taxi rides with extra room for bags.",
      "Comfortable SUV for couples, families, and beach resort transfers.",
      "Spacious van for families and groups booking a private transfer to Bentota.",
    ],
    relatedLinks: [
      { label: "Colombo Airport Taxi", href: "/colombo-airport-taxi" },
      { label: "Airport Transfer Sri Lanka", href: "/airport-transfer-sri-lanka" },
      { label: "Bentota Taxi Service", href: "/bentota-taxi-service" },
      { label: "Airport to Galle Taxi", href: "/airport-to-galle" },
    ],
    faqs: [
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
  },
  "nuwara-eliya": {
    slug: "airport-to-nuwara-eliya",
    townName: "Nuwara Eliya",
    heroImage: images.trainRide,
    heroAlt: "Colombo Airport to Nuwara Eliya taxi private transfer Sri Lanka",
    heroTitle: "Colombo Airport to Nuwara Eliya Taxi",
    heroDescription:
      "Book a private taxi from Colombo Airport to Nuwara Eliya with a scenic hill country transfer, clean vehicles, local drivers, and 24/7 WhatsApp booking.",
    introEyebrow: "Colombo Airport to Nuwara Eliya transfer",
    introTitle: "Private airport to Nuwara Eliya taxi through scenic hill country",
    introText:
      "SKY Taxi Service & Tours helps travelers book a private Colombo Airport to Nuwara Eliya taxi before arrival. Your driver can meet you at the airport, help with luggage, and take you safely through hill country to Sri Lanka's tea country town.",
    travelTimeText:
      "The airport to Nuwara Eliya taxi route usually takes around 5 to 6 hours depending on traffic, pickup time, comfort stops, and hotel location.",
    badgeText: "5–6 hr route",
    summaryIcon: "mountain",
    summaryStops: [
      {
        title: "Hill country route",
        text: "A longer scenic transfer route from Colombo Airport to Nuwara Eliya with clean vehicles and safe local driver support.",
        icon: "route",
      },
      {
        title: "Tea country arrival",
        text: "Arrive near Nuwara Eliya's tea estates, Gregory Lake, and hill country hotels with easy WhatsApp coordination.",
        icon: "mountain",
      },
      {
        title: "Flexible comfort stops",
        text: "Add tea factory visits, waterfalls, or viewpoints along the route depending on time available.",
        icon: "shieldCheck",
      },
    ],
    routeDetails: [
      {
        title: "Colombo Airport to Nuwara Eliya taxi",
        text: "Private transfer from Bandaranaike International Airport to Nuwara Eliya with flight-time checking, luggage support, and WhatsApp driver confirmation.",
        image: images.airportWelcome,
      },
      {
        title: "Route details and travel time",
        text: "The airport to Nuwara Eliya taxi route usually takes around 5 to 6 hours depending on traffic, pickup time, and comfort stops.",
        image: images.airportTransfer,
      },
      {
        title: "Scenic hill country stops",
        text: "Travel through hill country with optional stops for tea estates, waterfalls, and viewpoints, with fair route-based pricing confirmed on WhatsApp.",
        image: images.trainRide,
      },
      {
        title: "Nuwara Eliya arrival",
        text: "Arrive at your hotel near Gregory Lake, tea plantations, or the town center, ready to continue exploring hill country.",
        image: images.kandy,
      },
    ],
    vehicleBlurbs: [
      "Affordable private car for a smooth Colombo Airport to Nuwara Eliya taxi transfer.",
      "Clean wagon option for airport to Nuwara Eliya taxi rides with extra room for bags.",
      "Comfortable SUV for couples, families, and hill country roads.",
      "Spacious van for families and groups booking a private transfer to Nuwara Eliya.",
    ],
    relatedLinks: [
      { label: "Colombo Airport Taxi", href: "/colombo-airport-taxi" },
      { label: "Airport Transfer Sri Lanka", href: "/airport-transfer-sri-lanka" },
      { label: "Nuwara Eliya Taxi Service", href: "/nuwara-eliya-taxi-service" },
      { label: "Airport to Kandy Taxi", href: "/airport-to-kandy" },
    ],
    faqs: [
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
  },
  "arugam-bay": {
    slug: "airport-to-arugam-bay",
    townName: "Arugam Bay",
    heroImage: images.surfing,
    heroAlt: "Colombo Airport to Arugam Bay taxi private transfer Sri Lanka",
    heroTitle: "Colombo Airport to Arugam Bay Taxi",
    heroDescription:
      "Book a private taxi from Colombo Airport to Arugam Bay with an east coast surf transfer, clean vehicles, local drivers, and 24/7 WhatsApp booking.",
    introEyebrow: "Colombo Airport to Arugam Bay transfer",
    introTitle: "Private airport to Arugam Bay taxi for the east coast",
    introText:
      "SKY Taxi Service & Tours helps travelers book a private Colombo Airport to Arugam Bay taxi before arrival. Your driver can meet you at the airport, help with luggage and surfboards, and take you safely across the island to the east coast.",
    travelTimeText:
      "The airport to Arugam Bay taxi route usually takes around 7 to 8 hours depending on traffic, pickup time, and comfort stops.",
    badgeText: "7–8 hr route",
    summaryIcon: "palmtree",
    summaryStops: [
      {
        title: "Long east coast route",
        text: "A full-day transfer route from Colombo Airport to Arugam Bay with clean vehicles and safe local driver support.",
        icon: "route",
      },
      {
        title: "Surf point arrival",
        text: "Arrive near Arugam Bay's surf points and beach guesthouses with easy WhatsApp coordination.",
        icon: "palmtree",
      },
      {
        title: "Luggage and surfboard space",
        text: "Vehicles are chosen with surfboard and luggage space in mind for the long east coast journey.",
        icon: "shieldCheck",
      },
    ],
    routeDetails: [
      {
        title: "Colombo Airport to Arugam Bay taxi",
        text: "Private transfer from Bandaranaike International Airport to Arugam Bay with flight-time checking, luggage support, and WhatsApp driver confirmation.",
        image: images.airportWelcome,
      },
      {
        title: "Route details and travel time",
        text: "The airport to Arugam Bay taxi route usually takes around 7 to 8 hours depending on traffic, pickup time, and comfort stops.",
        image: images.airportTransfer,
      },
      {
        title: "Comfort stops along the way",
        text: "Travel across the island with optional food and rest breaks, and fair route-based pricing confirmed on WhatsApp.",
        image: images.surfing,
      },
      {
        title: "Arugam Bay arrival",
        text: "Arrive at your guesthouse near Arugam Bay's main surf point, Pottuvil, or nearby east coast stays.",
        image: images.beach,
      },
    ],
    vehicleBlurbs: [
      "Affordable private car for a smooth Colombo Airport to Arugam Bay taxi transfer.",
      "Clean wagon option for airport to Arugam Bay taxi rides with extra room for bags and boards.",
      "Comfortable SUV for couples, families, and the long east coast drive.",
      "Spacious van for families, groups, and surf trips booking a private transfer to Arugam Bay.",
    ],
    relatedLinks: [
      { label: "Colombo Airport Taxi", href: "/colombo-airport-taxi" },
      { label: "Airport Transfer Sri Lanka", href: "/airport-transfer-sri-lanka" },
      { label: "Arugam Bay Taxi Service", href: "/arugam-bay-taxi-service" },
      { label: "Airport to Ella Taxi", href: "/airport-to-ella" },
    ],
    faqs: [
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
        answer:
          "Yes. Your taxi from Colombo airport to Arugam Bay can include flexible food and rest stops depending on time and route.",
      },
      {
        question: "Is the Colombo Airport to Arugam Bay taxi price fixed online?",
        answer:
          "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
      },
    ],
  },
  dambulla: {
    slug: "airport-to-dambulla",
    townName: "Dambulla",
    heroImage: images.dambulla,
    heroAlt: "Colombo Airport to Dambulla taxi private transfer Sri Lanka",
    heroTitle: "Colombo Airport to Dambulla Taxi",
    heroDescription:
      "Book a private taxi from Colombo Airport to Dambulla with a Cultural Triangle transfer, clean vehicles, local drivers, and 24/7 WhatsApp booking.",
    introEyebrow: "Colombo Airport to Dambulla transfer",
    introTitle: "Private airport to Dambulla taxi for the Cultural Triangle",
    introText:
      "SKY Taxi Service & Tours helps travelers book a private Colombo Airport to Dambulla taxi before arrival. Your driver can meet you at the airport, help with luggage, and take you safely to Dambulla and the Cultural Triangle.",
    travelTimeText:
      "The airport to Dambulla taxi route usually takes around 3.5 to 4.5 hours depending on traffic, pickup time, and comfort stops.",
    badgeText: "3.5–4.5 hr route",
    summaryIcon: "landmark",
    summaryStops: [
      {
        title: "Cultural Triangle route",
        text: "A direct transfer route from Colombo Airport to Dambulla with clean vehicles and safe local driver support.",
        icon: "route",
      },
      {
        title: "Cave Temple arrival",
        text: "Arrive near Dambulla Cave Temple, Sigiriya, and Cultural Triangle hotels with easy WhatsApp coordination.",
        icon: "landmark",
      },
      {
        title: "Onward Cultural Triangle stops",
        text: "Use the same private transfer to reach Sigiriya, Habarana, Polonnaruwa, or Kandy.",
        icon: "shieldCheck",
      },
    ],
    routeDetails: [
      {
        title: "Colombo Airport to Dambulla taxi",
        text: "Private transfer from Bandaranaike International Airport to Dambulla with flight-time checking, luggage support, and WhatsApp driver confirmation.",
        image: images.airportWelcome,
      },
      {
        title: "Route details and travel time",
        text: "The airport to Dambulla taxi route usually takes around 3.5 to 4.5 hours depending on traffic, pickup time, and hotel location.",
        image: images.airportTransfer,
      },
      {
        title: "Cultural Triangle transfer",
        text: "Travel safely toward the Cultural Triangle with a clean private vehicle, comfort breaks when needed, and fair route-based pricing confirmed on WhatsApp.",
        image: images.dambulla,
      },
      {
        title: "Sigiriya and nearby sites",
        text: "Continue directly from Dambulla to Sigiriya Rock Fortress, Pidurangala, Habarana, or Polonnaruwa.",
        image: images.sigiriya,
      },
    ],
    vehicleBlurbs: [
      "Affordable private car for a smooth Colombo Airport to Dambulla taxi transfer.",
      "Clean wagon option for airport to Dambulla taxi rides with extra room for bags.",
      "Comfortable SUV for couples, families, and Cultural Triangle sightseeing.",
      "Spacious van for families and groups booking a private transfer to Dambulla.",
    ],
    relatedLinks: [
      { label: "Colombo Airport Taxi", href: "/colombo-airport-taxi" },
      { label: "Airport Transfer Sri Lanka", href: "/airport-transfer-sri-lanka" },
      { label: "Dambulla Taxi Service", href: "/dambulla-taxi-service" },
      { label: "Airport to Sigiriya Taxi", href: "/airport-to-sigiriya" },
    ],
    faqs: [
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
        answer:
          "Yes. Your private transfer to Dambulla can continue to Sigiriya, Habarana, Polonnaruwa, Anuradhapura, or Kandy.",
      },
      {
        question: "Is the Colombo Airport to Dambulla taxi price fixed online?",
        answer:
          "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
      },
    ],
  },
};
