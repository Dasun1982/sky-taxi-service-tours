/**
 * Data for the shared DurationTourPage template
 * (src/components/seo/DurationTourPage.jsx). Same pattern the original
 * 5-day page established (see FiveDaySriLankaTour.jsx): each entry
 * re-presents a real, priced RoundTours.jsx package with duration-specific
 * framing. Only durations with a real product are here — see
 * seoOpportunities.js tripLengthOpportunities for the durations (4, 6, 8,
 * 9, 12, 14, 21 days) deliberately left out because no real tour backs
 * them.
 */
export const durationTourPages = {
  "2-days-in-sri-lanka": {
    tourId: "kandy-nuwara-eliya-ella-2-day-tour",
    alternateTourId: "ella-2-day-tour",
    heroEyebrow: "2 Days in Sri Lanka",
    heroTitle: "2 Days in Sri Lanka: Kandy, Nuwara Eliya & Ella",
    heroDescription: "A real, priced 2-day private tour covering hill country culture, tea country, and Ella's highlights — enough for a short, focused escape.",
    whoForTitle: "2 days, one region, no rushing",
    whoForText: "It's built for travelers with a short window who want a real taste of the hill country — Kandy's culture, Nuwara Eliya's tea country, and Ella's viewpoints — without trying to cover the whole island.",
    whoFor: [
      "Travelers with a short window who still want a real multi-stop route, not just one city",
      "Anyone who wants Kandy, Nuwara Eliya, and Ella covered without booking three separate transfers",
      "A weekend-style hill country escape from a longer coastal stay",
    ],
    destinationIds: ["kandy", "nuwara-eliya", "ella"],
    relatedRoutesDestinationId: "kandy",
  },
  "3-days-in-sri-lanka": {
    tourId: "sigiriya-kandy-nuwara-eliya-ella-3-day-tour",
    heroEyebrow: "3 Days in Sri Lanka",
    heroTitle: "3 Days in Sri Lanka: Sigiriya, Kandy, Nuwara Eliya & Ella",
    heroDescription: "A real, priced 3-day private tour adding the Cultural Triangle to a hill country route — ancient sites, tea country, and train scenery.",
    whoForTitle: "3 days, culture and hill country together",
    whoForText: "It's built for travelers who want to add Sigiriya's ancient sites to a hill country route without needing a longer trip.",
    whoFor: [
      "First-time visitors who want one cultural landmark alongside hill country scenery",
      "Travelers extending a 2-day hill country plan with a Cultural Triangle stop",
      "Couples or small groups wanting one continuous private-driver trip",
    ],
    destinationIds: ["sigiriya", "dambulla", "kandy", "ella"],
    relatedRoutesDestinationId: "sigiriya",
  },
  "7-days-in-sri-lanka": {
    tourId: "cultural-heritage-hill-country-wildlife-7-day-tour",
    heroEyebrow: "7 Days in Sri Lanka",
    heroTitle: "7 Days in Sri Lanka: Cultural Heritage, Hill Country & Wildlife",
    heroDescription: "A real, priced 7-day private tour adding the ancient cities of Polonnaruwa and Anuradhapura to a hill-country-and-wildlife route.",
    whoForTitle: "7 days, a fuller route with more time at each stop",
    whoForText: "It's built for travelers who want the Cultural Triangle's ancient cities alongside hill country and a wildlife safari, with more breathing room than the shorter routes.",
    whoFor: [
      "Travelers who want the full Cultural Triangle (not just Sigiriya) alongside hill country",
      "Anyone who wants a wildlife safari built into a longer, single continuous trip",
      "First-time visitors who have a full week and want fewer rushed transitions between regions",
    ],
    destinationIds: ["kandy", "ella"],
    relatedRoutesDestinationId: "kandy",
  },
  "10-days-in-sri-lanka": {
    tourId: "north-east-cultural-heritage-hill-country-wildlife-10-day-tour",
    heroEyebrow: "10 Days in Sri Lanka",
    heroTitle: "10 Days in Sri Lanka: North, East, Culture, Hill Country & Wildlife",
    heroDescription: "A real, priced 10-day private tour covering the north, east coast, Cultural Triangle, hill country, wildlife, and south coast — close to a full-island route.",
    whoForTitle: "10 days, close to a full-island route",
    whoForText: "It's built for travelers with enough time to genuinely see most of the island's major regions in one continuous private trip.",
    whoFor: [
      "Travelers who want to see the north (Jaffna), east coast, culture, hill country, wildlife, and south coast in one trip",
      "Repeat or longer-stay visitors who've already done a shorter first-timer route",
      "Anyone who prefers one continuous booking over stitching together several shorter trips",
    ],
    destinationIds: ["kandy", "yala", "galle"],
    relatedRoutesDestinationId: "galle",
  },
};
