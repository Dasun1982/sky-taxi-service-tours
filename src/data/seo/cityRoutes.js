/**
 * Data for the shared CityToCityRoutePage template
 * (src/components/seo/CityToCityRoutePage.jsx). Real endpoints only — no
 * fabricated journey times (see routes.js's own rule on this). Routes were
 * selected for real touristic demand: each pair either appears together in
 * a real RoundTours.jsx multi-day itinerary, or is a well-established
 * adjacent-region crossing (hill country to Cultural Triangle, Cultural
 * Triangle to wildlife) that SKY's real tours already make.
 */
export const cityToCityRoutes = {
  "ella-to-kandy": {
    fromId: "ella",
    toId: "kandy",
    toPage: "kandy-taxi-service",
    heroEyebrow: "Hill country crossing",
    heroDescription: "A private-driver travel guide between Ella and Kandy — two hill country stops that appear together in SKY's real multi-day tours.",
    introHeadline: "Two hill country stops, one continuous trip",
    introText:
      "Ella to Kandy is a real route within Sri Lanka's hill country — both towns already appear together in SKY's real multi-day round tours, connecting Ella's hiking and viewpoints with Kandy's culture and the Temple of the Tooth.",
    relatedLinks: [
      { href: "/ella-taxi-service", label: "Ella Taxi Service" },
      { href: "/kandy-taxi-service", label: "Kandy Taxi Service" },
      { href: "/ella-vs-nuwara-eliya", label: "Ella vs Nuwara Eliya" },
    ],
    faqs: [
      { question: "Is there a direct train from Ella to Kandy?", answer: "Sri Lanka's scenic hill country rail line connects the region, but a private driver offers a direct door-to-door option without needing to plan around a train timetable." },
      { question: "Can I stop along the way?", answer: "Yes — tell your driver what you'd like to see, and stops can be added within reason without booking a separate trip." },
      { question: "How is the price worked out?", answer: "There's no fixed online price. Final pricing depends on your exact pickup point, vehicle type, and passenger count, confirmed on WhatsApp before travel." },
    ],
  },
  "kandy-to-sigiriya": {
    fromId: "kandy",
    toId: "sigiriya",
    toPage: "sigiriya-taxi-service",
    heroEyebrow: "Hill country to Cultural Triangle",
    heroDescription: "A private-driver travel guide from Kandy to Sigiriya — connecting hill country culture with the Cultural Triangle's ancient sites.",
    introHeadline: "From the Temple of the Tooth to the Rock Fortress",
    introText:
      "Kandy to Sigiriya is a real route SKY drivers cover — both destinations appear together in SKY's real multi-day round tours, linking Kandy's Temple of the Tooth with Sigiriya's Rock Fortress and Dambulla's Cave Temple nearby.",
    relatedLinks: [
      { href: "/kandy-taxi-service", label: "Kandy Taxi Service" },
      { href: "/sigiriya-taxi-service", label: "Sigiriya Taxi Service" },
      { href: "/sigiriya-vs-ella", label: "Sigiriya vs Ella" },
    ],
    faqs: [
      { question: "How long does Kandy to Sigiriya take?", answer: "There's no single fixed time — it depends on your exact pickup point, stops, and road conditions. Send your travel date on WhatsApp for a realistic estimate." },
      { question: "Can we stop at Dambulla on the way?", answer: "Yes — Dambulla Cave Temple sits between Kandy and Sigiriya and is a common stop on this route." },
    ],
  },
  "sigiriya-to-yala": {
    fromId: "sigiriya",
    toId: "yala",
    toPage: "yala-safari-transfer",
    heroEyebrow: "Culture to wildlife",
    heroDescription: "A private-driver travel guide from Sigiriya to Yala — connecting the Cultural Triangle with Sri Lanka's best-known safari destination.",
    introHeadline: "From ancient sites to a wildlife safari",
    introText:
      "Sigiriya to Yala is a longer south-bound crossing that appears in SKY's real multi-day round tours combining the Cultural Triangle with a wildlife safari — a genuine route for travelers building a full-island itinerary.",
    relatedLinks: [
      { href: "/sigiriya-taxi-service", label: "Sigiriya Taxi Service" },
      { href: "/yala-safari-transfer", label: "Yala Safari Transfer" },
      { href: "/wildlife", label: "Sri Lanka Wildlife" },
    ],
    faqs: [
      { question: "Is Sigiriya to Yala a long drive?", answer: "It's one of the longer city-to-city legs on the island, crossing from the Cultural Triangle down to the southern dry zone. Exact duration depends on your pickup point and stops — confirmed on WhatsApp." },
      { question: "Can we plan an early safari after this drive?", answer: "Yes — tell us your Yala safari timing and we'll help plan pickup and rest stops on the way from Sigiriya." },
    ],
  },
  "galle-to-mirissa": {
    fromId: "galle",
    toId: "mirissa",
    toPage: "mirissa-taxi-service",
    heroEyebrow: "South coast",
    heroDescription: "A private-driver travel guide from Galle to Mirissa — two south coast stops already cross-linked as nearby destinations.",
    introHeadline: "A short south coast hop",
    introText:
      "Galle to Mirissa is a short, well-traveled south coast route — Mirissa is already listed among Galle's nearby destinations, known for whale watching and Coconut Tree Hill.",
    relatedLinks: [
      { href: "/galle-taxi-service", label: "Galle Taxi Service" },
      { href: "/mirissa-taxi-service", label: "Mirissa Taxi Service" },
      { href: "/best-beaches-near-galle", label: "Best Beaches Near Galle" },
    ],
    faqs: [
      { question: "Is Galle to Mirissa a long drive?", answer: "It's one of the shorter south coast legs, though exact duration depends on your pickup point and any stops — confirmed on WhatsApp." },
      { question: "Can I stop at Unawatuna or Weligama on the way?", answer: "Yes — Unawatuna and Weligama both sit between Galle and Mirissa and are common flexible stops on this route." },
    ],
  },
  "mirissa-to-ella": {
    fromId: "mirissa",
    toId: "ella",
    toPage: "ella-taxi-service",
    heroEyebrow: "South coast to hill country",
    heroDescription: "A private-driver travel guide from Mirissa to Ella — south coast beach to hill country hiking in one continuous trip.",
    introHeadline: "From whale watching to hill country hiking",
    introText:
      "Mirissa to Ella takes you from the south coast up into the hill country — a genuine route for travelers combining a beach stay with Ella's hiking, viewpoints, and the Nine Arch Bridge.",
    relatedLinks: [
      { href: "/mirissa-taxi-service", label: "Mirissa Taxi Service" },
      { href: "/ella-taxi-service", label: "Ella Taxi Service" },
      { href: "/things-to-do-in-ella", label: "Things to Do in Ella" },
    ],
    faqs: [
      { question: "How do I get from Mirissa to Ella?", answer: "By private driver is the most direct option — one continuous journey from the south coast up into the hill country. Exact duration depends on your pickup point and is confirmed on WhatsApp before travel." },
      { question: "Can the driver stop along the way?", answer: "Yes — a private route can include flexible stops for viewpoints, food, or photos between the south coast and hill country." },
    ],
  },
  "galle-to-yala": {
    fromId: "galle",
    toId: "yala",
    toPage: "yala-safari-transfer",
    heroEyebrow: "South coast to safari",
    heroDescription: "A private-driver travel guide from Galle to Yala — south coast fort city to Sri Lanka's best-known safari destination.",
    introHeadline: "From Galle Fort to a wildlife safari",
    introText:
      "Galle to Yala is a real south-to-southeast route SKY drivers cover — both destinations appear together in SKY's real 10-day round tour, connecting Galle's fort city with a Yala National Park safari.",
    relatedLinks: [
      { href: "/galle-taxi-service", label: "Galle Taxi Service" },
      { href: "/yala-safari-transfer", label: "Yala Safari Transfer" },
      { href: "/wildlife", label: "Sri Lanka Wildlife" },
    ],
    faqs: [
      { question: "How long does Galle to Yala take?", answer: "There's no single fixed time — it depends on your exact pickup point, stops, and road conditions. Send your travel date on WhatsApp for a realistic estimate, especially if you're timing an early safari entry." },
      { question: "Can we plan an early safari after this drive?", answer: "Yes — tell us your Yala safari timing and we'll help plan pickup and rest stops on the way from Galle." },
    ],
  },
  "unawatuna-to-ella": {
    fromId: "unawatuna",
    toId: "ella",
    toPage: "ella-taxi-service",
    heroEyebrow: "South coast to hill country",
    heroDescription: "A private-driver travel guide from Unawatuna to Ella — south coast beach base to hill country hiking in one continuous trip.",
    introHeadline: "From a calm beach base to hill country hiking",
    introText:
      "Unawatuna to Ella takes you from the south coast up into the hill country — a genuine route for travelers combining a beach stay near Galle with Ella's hiking, viewpoints, and the Nine Arch Bridge.",
    relatedLinks: [
      { href: "/unawatuna-taxi-service", label: "Unawatuna Taxi Service" },
      { href: "/ella-taxi-service", label: "Ella Taxi Service" },
      { href: "/things-to-do-in-ella", label: "Things to Do in Ella" },
    ],
    faqs: [
      { question: "How do I get from Unawatuna to Ella?", answer: "By private driver is the most direct option — one continuous journey from the south coast up into the hill country. Exact duration depends on your pickup point and is confirmed on WhatsApp before travel." },
      { question: "Can the driver stop at Galle Fort on the way?", answer: "Yes — Galle Fort sits close to Unawatuna and is a common flexible stop before heading up to Ella." },
    ],
  },
};
