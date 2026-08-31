import { MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { findDestination } from "../data/destinations";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

const regions = [
  {
    name: "Hill country",
    text: "Ella and Kandy anchor Sri Lanka's hill country — hiking and viewpoints in Ella, culture and the Temple of the Tooth in Kandy, with Nuwara Eliya's tea plantations nearby.",
    ids: ["ella", "kandy"],
  },
  {
    name: "South coast",
    text: "Galle Fort's colonial streets, with beach towns Unawatuna, Mirissa, and Weligama close behind — the most-visited stretch of coast in SKY's data.",
    ids: ["galle", "mirissa"],
  },
  {
    name: "Cultural Triangle",
    text: "Sigiriya's Rock Fortress and Dambulla's Cave Temple are the two Cultural Triangle sites with dedicated SKY pages today.",
    ids: ["sigiriya", "dambulla"],
  },
  {
    name: "Wildlife",
    text: "Yala National Park is SKY's real, dedicated safari destination — leopards, elephants, and a wide range of birdlife.",
    ids: ["yala"],
  },
];

function placesMessage() {
  return "Hello SKY Taxi Service & Tours, I want help deciding which places to visit in Sri Lanka. Travel dates: ___ Number of days: ___";
}

export default function BestPlacesToVisitInSriLanka({ setPage }) {
  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: "best-places-in-sri-lanka-page" });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: "best-places-in-sri-lanka-page" });

  return (
    <div className="page colombo-airport-page">
      <PageHero
        eyebrow="Trip planning"
        title="What Are the Best Places to Visit in Sri Lanka?"
        description="A region-by-region answer based on SKY's real destination data — not a generic top-10 list."
        image={images.sigiriya}
        alt="Sigiriya Rock Fortress in Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(placesMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
            <MessageCircle size={19} />
            Ask on WhatsApp
          </a>
          <a className="button button--light" href={aiPlannerUrl} target="_blank" rel="noreferrer" onClick={openAiPlanner}>
            <Sparkles size={18} />
            Plan with SKY AI
          </a>
        </div>
      </PageHero>

      {regions.map((region, index) => (
        <section className={index % 2 === 0 ? "section" : "section section--soft"} key={region.name}>
          <div className="section__inner">
            <SectionHeader eyebrow={region.name} title={region.text} align="left" />
            <div className="destination-showcase-grid">
              {region.ids.map((id) => {
                const destination = findDestination(id);
                if (!destination?.image || !destination?.seoSlug) return null;
                return (
                  <a className="reveal destination-showcase-card" href={destination.seoSlug} key={id}>
                    <img src={destination.image} alt={destination.alt} loading="lazy" />
                    <div>
                      {destination.region && <span>{destination.region}</span>}
                      <h3>{destination.name}</h3>
                      <p>{destination.description}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="section__inner">
          <SectionHeader eyebrow="See everything" title="Browse the full destination list" align="left" text="This page highlights one place per region — see the full Destinations page for every destination SKY covers." />
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Not sure how to combine these?</h2>
          <p>Send your interests and available days on WhatsApp, or ask SKY AI to sketch a route.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(placesMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
              <MessageCircle size={19} />
              Ask on WhatsApp
            </a>
            <button className="button button--light" type="button" onClick={() => setPage("destinations")}>
              Browse All Destinations
            </button>
            <button className="button button--light" type="button" onClick={() => setPage("ai-trip-planner")}>
              How SKY AI Planning Works
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
