import { ArrowRight, MessageCircle } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { buildWhatsAppLink } from "../utils/whatsapp";

const experiences = [
  {
    tag: "Wildlife Routes",
    title: "Safari days built around real sightings",
    text: "Sri Lanka's national parks hold leopards, elephants, sloth bears, and wetland birdlife within private-driver reach of most major routes. Early pickup times are planned around park gate hours.",
    image: images.sriLankanLeopard,
    alt: "Sri Lankan leopard resting in tall grass",
    page: "wildlife",
    linkLabel: "Explore wildlife & safaris",
  },
  {
    tag: "Ancient Kingdoms",
    title: "Sigiriya, Dambulla, and Mihintale",
    text: "Culture routes with temple visits, viewpoints, cave art, and comfortable private transfers between the Cultural Triangle's ancient sites.",
    image: images.sigiriya,
    alt: "Sigiriya Rock Fortress in Sri Lanka",
    page: "sigiriya-taxi-service",
    linkLabel: "View Sigiriya taxi service",
  },
  {
    tag: "Tea Country",
    title: "Ella, Kandy, and the hill country rail line",
    text: "Mountain air, tea country views, waterfalls, the Nine Arch Bridge, and one of the world's most scenic train routes through Sri Lanka's hill country.",
    image: images.trainRide,
    alt: "Sri Lanka scenic train ride through hill country",
    page: "ella-taxi-service",
    linkLabel: "View Ella taxi service",
  },
  {
    tag: "Coastal South",
    title: "Unawatuna, Hiriketiya, and Jungle Beach",
    text: "Easy beach days, surf towns, seafood stops, and golden-hour coastal drives along Sri Lanka's south coast.",
    image: images.hiriketiyaBeach,
    alt: "Hiriketiya Beach in Sri Lanka",
    page: "galle-taxi-service",
    linkLabel: "View Galle taxi service",
  },
  {
    tag: "Local Life",
    title: "Stilt fishermen, markets, and food stops",
    text: "The everyday routines of the south coast — stilt fishing at sunrise, roadside food stops, and small local moments a private route has time for.",
    image: images.stiltFishing,
    alt: "Stilt fishing in Sri Lanka",
    page: "tours",
    linkLabel: "Browse tours",
  },
  {
    tag: "Adventure",
    title: "Pidurangala, Ambuluwawa, and viewpoint drives",
    text: "Sunrise climbs, tower viewpoints, and scenic drives to some of Sri Lanka's most photogenic lookout points.",
    image: images.pidurangala,
    alt: "Pidurangala viewpoint near Sigiriya",
    page: "sigiriya-taxi-service",
    linkLabel: "View Sigiriya taxi service",
  },
];

export default function Experiences({ setPage }) {
  return (
    <div className="page experiences-page">
      <PageHero
        eyebrow="Sri Lanka by experience"
        title="Sri Lanka Travel Experiences"
        description="Wildlife safaris, ancient kingdoms, tea country, coastal south, local life, and adventure — six ways to see Sri Lanka with a private driver."
        image={images.nineArchBridge}
        alt="Nine Arch Bridge surrounded by Ella hill country"
      >
        <a className="button button--primary" href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
          <MessageCircle size={19} />
          Plan on WhatsApp
        </a>
      </PageHero>

      {experiences.map((experience, index) => (
        <section className={index % 2 === 0 ? "section" : "section section--soft"} key={experience.tag}>
          <div className="section__inner split-layout">
            {index % 2 === 0 ? (
              <>
                <Reveal className="split-layout__copy">
                  <span className="eyebrow">{experience.tag}</span>
                  <h2>{experience.title}</h2>
                  <p>{experience.text}</p>
                  <button className="text-button" type="button" onClick={() => setPage(experience.page)}>
                    {experience.linkLabel}
                    <ArrowRight size={16} />
                  </button>
                </Reveal>
                <Reveal className="image-panel">
                  <img src={experience.image} alt={experience.alt} loading="lazy" />
                </Reveal>
              </>
            ) : (
              <>
                <Reveal className="image-panel">
                  <img src={experience.image} alt={experience.alt} loading="lazy" />
                </Reveal>
                <Reveal className="split-layout__copy">
                  <span className="eyebrow">{experience.tag}</span>
                  <h2>{experience.title}</h2>
                  <p>{experience.text}</p>
                  <button className="text-button" type="button" onClick={() => setPage(experience.page)}>
                    {experience.linkLabel}
                    <ArrowRight size={16} />
                  </button>
                </Reveal>
              </>
            )}
          </div>
        </section>
      ))}

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Explore by theme" title="More ways to explore Sri Lanka" align="left" />
          <div className="colombo-airport-link-row">
            <a href="/sri-lanka-beaches">Sri Lanka Beaches</a>
            <a href="/sri-lanka-hill-country">Sri Lanka Hill Country</a>
            <a href="/sri-lanka-culture-ancient-cities">Sri Lanka Culture &amp; Ancient Cities</a>
            <a href="/sri-lanka-surfing">Sri Lanka Surfing</a>
            <a href="/sri-lanka-honeymoon">Sri Lanka Honeymoon &amp; Romantic Places</a>
            <a href="/sri-lanka-family-travel">Sri Lanka Family Travel</a>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Not sure which experience fits your trip?</h2>
          <p>Send your interests and travel dates on WhatsApp — we will combine experiences into one private route.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
              <MessageCircle size={19} />
              Plan on WhatsApp
            </a>
            <button className="button button--light" type="button" onClick={() => setPage("tours")}>
              Browse Tours
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
