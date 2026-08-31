/**
 * Canonical transportation/tour product model for SKY Taxi Service & Tours.
 *
 * This does NOT duplicate pricing — every `pricingBasis` is wording only,
 * pointing back to pricing.js/tours.js as the real source. `bookingTripType`
 * must match one of BookingForm.jsx's real `tripTypeValues` exactly, so
 * setBookingContext() always hands off to a trip type the form actually
 * understands.
 *
 * `included`/`notIncluded` for the two private-tour entries are copied
 * verbatim from RoundTours.jsx's own real, already-published lists — not
 * rewritten. The one guide-related claim used everywhere ("a specialist
 * licensed local guide can be arranged") is the same honest phrasing
 * already live in SriLankaTourDriver.jsx's FAQ — never upgraded to imply
 * every driver is a licensed guide, and never given invented credentials,
 * names, or availability guarantees.
 */

export const services = [
  {
    id: "driver-only",
    name: "Driver Only",
    shortDescription: "You already know where you want to go. SKY provides the private vehicle and driver.",
    detailedDescription:
      "A private driver and clean vehicle for airport transfers, city-to-city travel, or a full multi-day route you've already planned. Your driver handles the road, timing, and stops — the itinerary is yours.",
    suitableFor: [
      "Travelers who already have their itinerary",
      "Airport transfers and point-to-point travel",
      "Multi-day transportation between hotels",
      "Repeat visitors who know Sri Lanka",
    ],
    included: ["Private air-conditioned vehicle", "Experienced local driver", "Flexible daily stops on your route"],
    notIncluded: ["Site commentary or historical explanation", "Entrance fees", "Meals and accommodation, can be arranged upon request"],
    pricingBasis: "Price on request — confirmed on WhatsApp based on route, vehicle, and number of days.",
    bookingTripType: "Driver only",
    seoIntent: ["private driver Sri Lanka", "hire a driver in Sri Lanka", "Sri Lanka tour driver"],
    faq: [
      {
        question: "Is my driver also a tour guide?",
        answer:
          "Your driver helps with routes, timing, comfort stops, and local travel support, but is not automatically a licensed tour guide. If you want a specialist guide at specific sites, choose Driver + Guide instead.",
      },
    ],
  },
  {
    id: "driver-guide",
    name: "Driver + Guide",
    shortDescription: "Travel with a private driver and arrange a specialist local guide when you want deeper insight.",
    detailedDescription:
      "The same private driver and vehicle as Driver Only, with a specialist licensed local guide arranged for the sites where cultural or historical context adds the most — temples, ancient cities, and heritage stops.",
    suitableFor: [
      "First-time visitors to Sri Lanka",
      "Travelers interested in culture and history",
      "Families and couples wanting deeper context at key sites",
      "Cultural Triangle and heritage-focused routes",
    ],
    included: ["Private air-conditioned vehicle", "Experienced local driver", "Specialist licensed guide arranged for the sites you choose"],
    notIncluded: ["Entrance fees", "Meals and accommodation, can be arranged upon request", "Guide coverage for the full trip unless requested"],
    pricingBasis: "Price on request — guide availability and cost confirmed on WhatsApp for your chosen sites and dates.",
    bookingTripType: "Driver + Guide",
    seoIntent: ["driver and guide Sri Lanka", "private driver guide Sri Lanka", "Sri Lanka driver with guide"],
    faq: [
      {
        question: "Is a guide available for my whole trip?",
        answer:
          "A specialist licensed guide can be arranged for specific sites or days where deeper explanation is useful, subject to availability. Tell us which stops matter most and we'll confirm what's possible on WhatsApp.",
      },
    ],
  },
  {
    id: "private-tour",
    name: "Private Tour",
    shortDescription: "Your route, transportation, and travel plan arranged together as one trip.",
    detailedDescription:
      "A ready-made or custom day tour or multi-day round tour, with the vehicle, driver, and itinerary organized around your dates and interests. See the full tour catalog with real prices in Tours.",
    suitableFor: ["Travelers who want the planning done for them", "Short one-day trips from a hotel base", "Multi-day island routes"],
    included: ["Private air-conditioned vehicle", "Experienced local driver", "All fuel and parking charges", "Hotel pick-up and drop-off", "Fully customizable itinerary"],
    notIncluded: [
      "Entrance fees",
      "Meals and accommodation, can be arranged upon request",
      "Train tickets, can be arranged upon request",
      "Safari jeep hire and park entrance fees, can be arranged upon request",
      "Specialist local guide — can be arranged separately, see Driver + Guide",
    ],
    pricingBasis: "Real published prices per tour — see the tour catalog.",
    bookingTripType: "Private tour",
    seoIntent: ["Sri Lanka private tours", "Sri Lanka day tours", "Sri Lanka round tours"],
    faq: [],
  },
  {
    id: "private-tour-guide",
    name: "Private Tour with Driver + Guide",
    shortDescription: "A private tour with a specialist local guide arranged for deeper cultural or historical sites.",
    detailedDescription:
      "The same private tour structure as above, with a specialist licensed guide arranged for cultural, heritage, or wildlife sites on your route where local expertise adds the most value.",
    suitableFor: ["Culture and history-focused itineraries", "First-time visitors wanting more context", "Cultural Triangle and heritage routes"],
    included: [
      "Private air-conditioned vehicle",
      "Experienced local driver",
      "Specialist licensed guide arranged for chosen sites",
      "All fuel and parking charges",
      "Hotel pick-up and drop-off",
    ],
    notIncluded: [
      "Entrance fees",
      "Meals and accommodation, can be arranged upon request",
      "Guide coverage for stops not requested",
    ],
    pricingBasis: "Tour price from the catalog, plus guide cost confirmed on WhatsApp for your chosen sites.",
    bookingTripType: "Private tour",
    seoIntent: ["private tour driver guide Sri Lanka", "guided Sri Lanka tour"],
    faq: [],
  },
];

export function findService(id) {
  return services.find((service) => service.id === id);
}
