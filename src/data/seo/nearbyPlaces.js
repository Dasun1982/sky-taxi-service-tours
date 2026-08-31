/**
 * Data for the shared NearbyPlacesPage template
 * (src/components/seo/NearbyPlacesPage.jsx). Built entirely from each
 * destination's own verified relatedDestinations list — no invented
 * itinerary or relationship.
 */
export const nearbyPlacesPages = {
  "best-places-to-visit-from-ella": {
    destinationId: "ella",
    heroEyebrow: "From Ella",
    heroTitle: "Best Places to Visit from Ella",
    heroDescription: "Real nearby destinations within private-driver reach of Ella — hill country, culture, and wildlife.",
    introTitle: "Five real destinations within reach of Ella",
    introText: "Ella's real relatedDestinations span hill country, culture, and wildlife — each already has its own dedicated SKY transport page.",
    faqs: [
      { question: "Can I visit more than one of these from Ella?", answer: "Yes — a private multi-day route from Ella can combine several of these, or send your interests on WhatsApp for a suggested sequence." },
      { question: "Which is closest to Ella?", answer: "Nuwara Eliya and Kandy are both within the same hill country region as Ella — see each destination's taxi service page for route details." },
    ],
    ctaPage: "ella-taxi-service",
    ctaButtonLabel: "View Ella Taxi Service",
  },
  "best-places-to-visit-from-kandy": {
    destinationId: "kandy",
    heroEyebrow: "From Kandy",
    heroTitle: "Best Places to Visit from Kandy",
    heroDescription: "Real nearby destinations within private-driver reach of Kandy — hill country and the Cultural Triangle.",
    introTitle: "Four real destinations within reach of Kandy",
    introText: "Kandy's real relatedDestinations connect hill country towns with the Cultural Triangle — each already has its own dedicated SKY transport page.",
    faqs: [
      { question: "Can I combine Kandy with the Cultural Triangle?", answer: "Yes — Sigiriya and Dambulla are both real nearby stops, and appear together with Kandy in SKY's real multi-day tours." },
      { question: "Which is closest to Kandy?", answer: "Nuwara Eliya and Ella are both in the same hill country region as Kandy — see each destination's taxi service page for route details." },
    ],
    ctaPage: "kandy-taxi-service",
    ctaButtonLabel: "View Kandy Taxi Service",
  },
};
