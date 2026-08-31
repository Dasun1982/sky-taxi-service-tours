import { ArrowRight, MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { tours } from "../data/tours";
import { buildWhatsAppLink } from "../utils/whatsapp";

const durationLabels = [...new Set(tours.map((tour) => tour.duration))];

const chapters = [
  {
    number: "01",
    tag: "Best time to visit",
    title: "Two coasts, two seasons",
    image: images.blueBeach,
    alt: "Blue beach on the Sri Lanka south coast",
    paragraphs: [
      "Sri Lanka has two separate monsoon patterns, which is why it rarely has a single bad time to visit. The west and south coasts, and the hill country, are generally driest from around December to March. The east coast — Trincomalee, Arugam Bay — tends to be driest from around May to September.",
      "That split means a route combining both coasts can often be timed to avoid the wettest weeks in each region, though conditions vary year to year and are worth checking closer to your travel dates.",
    ],
    linkPage: "best-time-to-visit-sri-lanka",
    linkLabel: "Full seasonal breakdown by coast",
  },
  {
    number: "02",
    tag: "Wildlife seasons",
    title: "Dry months, easier sightings",
    image: images.elephantWaterhole,
    alt: "Asian elephant drinking at a waterhole",
    paragraphs: [
      "Many visitors find the drier months easier for wildlife sightings, since animals gather more predictably around the water sources that remain. Sightings are never guaranteed on any single visit — this is genuine wildlife behaviour, not a scheduled show — but drier conditions generally mean less cover and more time spent near known water points.",
    ],
  },
  {
    number: "03",
    tag: "Getting around",
    title: "Why most visitors use a private driver",
    image: images.toyotaPrius,
    alt: "Toyota Prius taxi vehicle",
    paragraphs: [
      "Self-driving in Sri Lanka means adjusting to left-hand traffic, mixed-use roads shared with tuk-tuks, buses, and pedestrians, and route conditions that vary a lot outside main highways. A private driver removes that learning curve and gives you someone who already knows the roads, timing, and practical stops.",
      "It also keeps a multi-stop day flexible — a private route can pause for a viewpoint, a food stop, or a change of plan without needing to rebook anything.",
    ],
    linkPage: "is-a-private-driver-worth-it",
    linkLabel: "Is a private driver worth it? Full comparison",
  },
  {
    number: "04",
    tag: "What to expect",
    title: "How a private-driver day actually works",
    image: images.kandyTemple,
    alt: "Temple of the Tooth in Kandy",
    paragraphs: [
      "A typical day starts with a hotel or airport pickup at an agreed time, moves through the day's main stops with flexible pauses for food, photos, and rest, and ends back at your hotel or the next destination on a round trip. Pickup details, route changes, and final pricing are confirmed directly on WhatsApp before and during travel — there is no fixed online price, since routes, vehicle type, and passenger count all affect the final quote.",
    ],
    linkPage: "how-much-does-a-sri-lanka-trip-cost",
    linkLabel: "See real trip cost examples",
  },
  {
    number: "05",
    tag: "Suggested trip lengths",
    title: "How long to spend in Sri Lanka",
    image: images.sigiriya,
    alt: "Sigiriya Rock Fortress in Sri Lanka",
    paragraphs: [
      "There is no single right length for a Sri Lanka trip — it depends on how many regions you want to cover. Below are the trip lengths we currently arrange as real, priced itineraries, from a single day trip to a 10-day route across the north, east, hill country, and south.",
    ],
    list: durationLabels,
    linkPage: "how-many-days-in-sri-lanka",
    linkLabel: "How many days do you actually need? Full breakdown",
  },
  {
    number: "06",
    tag: "Sri Lanka destinations",
    title: "The regions a route usually covers",
    image: images.whaleWatching,
    alt: "Whale watching boat tour near Mirissa",
    paragraphs: [
      "Most itineraries draw from four broad regions: the Cultural Triangle (Sigiriya, Dambulla, Polonnaruwa, Anuradhapura), the hill country (Kandy, Nuwara Eliya, Ella), the south coast (Galle, Unawatuna, Mirissa, Weligama), and wildlife areas such as Yala. Longer routes combine several regions; shorter trips usually focus on one or two.",
    ],
    linkPage: "best-places-to-visit-in-sri-lanka",
    linkLabel: "See the best places to visit, region by region",
  },
];

export default function TravelGuide({ setPage }) {
  return (
    <div className="page travel-guide-page">
      <PageHero
        eyebrow="Sri Lanka travel guide"
        title="A Practical Sri Lanka Travel Guide"
        description="Straightforward, factual notes on timing, getting around, and what to expect — written to help you plan, not to fill a page."
        image={images.sigiriya}
        alt="Sigiriya Rock Fortress in Sri Lanka"
      />

      {chapters.map((chapter, index) => (
        <section className={index % 2 === 0 ? "section" : "section section--soft"} key={chapter.number}>
          <div className="section__inner split-layout">
            {index % 2 === 0 ? (
              <>
                <Reveal className="split-layout__copy travel-guide-chapter">
                  <span className="travel-guide-chapter__number">{chapter.number}</span>
                  <span className="eyebrow">{chapter.tag}</span>
                  <h2>{chapter.title}</h2>
                  {chapter.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                  {chapter.list && (
                    <div className="travel-guide-chapter__list">
                      {chapter.list.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  )}
                  {chapter.linkPage && (
                    <button className="text-button" type="button" onClick={() => setPage(chapter.linkPage)}>
                      {chapter.linkLabel}
                      <ArrowRight size={16} />
                    </button>
                  )}
                </Reveal>
                <Reveal className="image-panel">
                  <img src={chapter.image} alt={chapter.alt} loading="lazy" />
                </Reveal>
              </>
            ) : (
              <>
                <Reveal className="image-panel">
                  <img src={chapter.image} alt={chapter.alt} loading="lazy" />
                </Reveal>
                <Reveal className="split-layout__copy travel-guide-chapter">
                  <span className="travel-guide-chapter__number">{chapter.number}</span>
                  <span className="eyebrow">{chapter.tag}</span>
                  <h2>{chapter.title}</h2>
                  {chapter.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                  {chapter.list && (
                    <div className="travel-guide-chapter__list">
                      {chapter.list.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  )}
                  {chapter.linkPage && (
                    <button className="text-button" type="button" onClick={() => setPage(chapter.linkPage)}>
                      {chapter.linkLabel}
                      <ArrowRight size={16} />
                    </button>
                  )}
                </Reveal>
              </>
            )}
          </div>
        </section>
      ))}

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Keep planning" title="More planning guides" align="left" />
          <div className="colombo-airport-link-row">
            <a href="/first-time-visitor-sri-lanka">First-Time Visitor Guide</a>
            <a href="/how-to-travel-around-sri-lanka">How to Travel Around Sri Lanka</a>
            <a href="/train-vs-private-car-sri-lanka">Train vs Private Car</a>
            <a href="/private-driver-vs-rental-car">Private Driver vs Rental Car</a>
            <a href="/south-coast-vs-east-coast">South Coast vs East Coast</a>
            <a href="/is-sri-lanka-safe-for-tourists">Is Sri Lanka Safe for Tourists?</a>
            <a href="/can-i-travel-sri-lanka-without-a-car">Travel Without a Car</a>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Have a question this guide didn't answer?</h2>
          <p>Send it on WhatsApp — real trip questions get real answers, not a template reply.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
              <MessageCircle size={19} />
              Ask on WhatsApp
            </a>
            <button className="button button--light" type="button" onClick={() => setPage("destinations")}>
              Browse Destinations
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
