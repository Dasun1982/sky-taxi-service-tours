import { images } from "../travelData";

/**
 * Data for the shared ThemeHubPage template
 * (src/components/seo/ThemeHubPage.jsx). Each hub aggregates real
 * destinations.js entries sharing a category tag — see that field on each
 * destination record. Deliberately NOT built as separate pages: "Sri
 * Lanka Mountains" (near-duplicate of Hill Country — same 3 destinations),
 * "Sri Lanka Tea Country" (near-duplicate of Nuwara Eliya's own page),
 * "Sri Lanka Adventure" (already a section of /experiences), "Sri Lanka
 * Wildlife"/"Safari"/"Wildlife Tours" (already covered in depth by the
 * existing /wildlife page — a second page would duplicate it). See
 * seoOpportunities.js for the full reasoning.
 */
export const themeHubPages = {
  "sri-lanka-beaches": {
    destinationIds: ["galle", "mirissa", "unawatuna", "weligama", "hiriketiya", "bentota", "negombo", "arugam-bay"],
    heroEyebrow: "Sri Lanka beaches",
    heroTitle: "Sri Lanka Beaches",
    heroDescription: "Every real beach destination SKY covers — south coast, east coast, and near-Colombo — compared honestly, not a generic top-10 list.",
    heroImage: images.blueBeach,
    heroAlt: "Blue beach on the Sri Lanka south coast",
    introTitle: "South coast, east coast, and near-Colombo beaches",
    introText:
      "Sri Lanka's beaches split roughly into three groups: the south coast (Galle, Unawatuna, Mirissa, Weligama, Hiriketiya, Bentota), the east coast (Arugam Bay), and Negombo near the airport. Each has a real, dedicated SKY transport page — this hub links to all of them rather than repeating their content.",
    gridTitle: "Real beach destinations",
    faqs: [
      { question: "Which Sri Lanka beach is best for swimming?", answer: "Unawatuna is generally the calmer, more swim-friendly option on the south coast. See Best Beaches Near Galle for a closer comparison." },
      { question: "Which Sri Lanka beach is best for surfing?", answer: "Weligama, Hiriketiya, and Arugam Bay are all real surf destinations — see Sri Lanka Surfing for a dedicated comparison." },
      { question: "Are south coast and east coast beaches good at the same time of year?", answer: "Not usually — see What Is the Best Time to Visit Sri Lanka? for how the two coasts' seasons differ." },
    ],
  },
  "sri-lanka-hill-country": {
    destinationIds: ["ella", "kandy", "nuwara-eliya"],
    heroEyebrow: "Sri Lanka hill country",
    heroTitle: "Sri Lanka Hill Country",
    heroDescription: "Ella, Kandy, and Nuwara Eliya — the three real hill country towns SKY covers, compared for hiking, culture, and tea country.",
    heroImage: images.nineArchBridge,
    heroAlt: "Nine Arch Bridge surrounded by Ella hill country",
    introTitle: "Three towns, three different hill country experiences",
    introText:
      "Ella, Kandy, and Nuwara Eliya are all in Sri Lanka's hill country region but offer genuinely different experiences — hiking and viewpoints in Ella, culture and the Temple of the Tooth in Kandy, and tea plantations in Nuwara Eliya.",
    gridTitle: "Real hill country destinations",
    faqs: [
      { question: "Can I visit all three hill country towns?", answer: "Yes — SKY's real 2-day tour already combines Kandy, Nuwara Eliya, and Ella in one continuous route." },
      { question: "Which hill country town should I pick if I only have one day?", answer: "See Ella vs Nuwara Eliya for a direct comparison, or Things to Do in Kandy if culture is your main interest." },
    ],
  },
  "sri-lanka-culture-ancient-cities": {
    destinationIds: ["kandy", "sigiriya", "dambulla", "galle"],
    heroEyebrow: "Sri Lanka culture & ancient cities",
    heroTitle: "Sri Lanka Culture & Ancient Cities",
    heroDescription: "Kandy, Sigiriya, Dambulla, and Galle — the real culture and heritage destinations SKY covers with dedicated pages today.",
    heroImage: images.sigiriya,
    heroAlt: "Sigiriya Rock Fortress in Sri Lanka",
    introTitle: "Temples, ancient sites, and colonial heritage",
    introText:
      "Sri Lanka's culture and history span the Cultural Triangle's ancient sites (Sigiriya, Dambulla), Kandy's Temple of the Tooth, and Galle's Dutch colonial fort. These four destinations already have dedicated SKY transport pages with real content.",
    gridTitle: "Real culture & heritage destinations",
    gapNote:
      "Anuradhapura and Polonnaruwa — the Cultural Triangle's other major ancient cities — appear in SKY's real multi-day tour itineraries but don't yet have dedicated pages of their own; ask on WhatsApp if you'd like to include them in a custom route.",
    faqs: [
      { question: "What's the difference between Sigiriya and Dambulla?", answer: "Sigiriya is the Rock Fortress and ancient palace ruins; Dambulla is a cave temple complex with Buddhist murals and statues — both are close together and commonly visited on the same day." },
      { question: "Can I combine Kandy with the Cultural Triangle?", answer: "Yes — see Kandy to Sigiriya for the route guide, or SKY's real 3-day tour that combines both." },
    ],
  },
  "sri-lanka-surfing": {
    destinationIds: ["weligama", "hiriketiya", "arugam-bay"],
    heroEyebrow: "Sri Lanka surfing",
    heroTitle: "Sri Lanka Surfing",
    heroDescription: "Weligama, Hiriketiya, and Arugam Bay — the three real surf destinations SKY covers, on the south and east coasts.",
    heroImage: images.surfing,
    heroAlt: "Surfing on a Sri Lanka beach",
    introTitle: "South coast surf schools and east coast surf points",
    introText:
      "Weligama is the south coast's main surf-school beach, Hiriketiya is known for its horseshoe-shaped surf bay nearby, and Arugam Bay is the east coast's dedicated surf town with its own established surf points.",
    gridTitle: "Real surf destinations",
    faqs: [
      { question: "Which is better for beginners, Weligama or Arugam Bay?", answer: "Weligama is generally considered more beginner-friendly with established surf schools; Arugam Bay has a bigger reputation among more experienced surfers, though both attract a range of levels." },
      { question: "Are south coast and east coast surf seasons the same?", answer: "No — the two coasts follow different monsoon patterns. See What Is the Best Time to Visit Sri Lanka? for the seasonal split." },
    ],
  },
};
