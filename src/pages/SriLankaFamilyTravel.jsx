import { MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { findDestination } from "../data/destinations";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

// Unawatuna is destinations.js's only destination explicitly tagged
// "family" — that real tag, not a guess, is why it's the anchor here.
const familyId = "unawatuna";

function familyMessage() {
  return "Hello SKY Taxi Service & Tours, we're traveling with children in Sri Lanka. Number of passengers (adults/children): ___ Travel dates: ___";
}

export default function SriLankaFamilyTravel({ setPage }) {
  const family = findDestination(familyId);
  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: "sri-lanka-family-travel-page" });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: "sri-lanka-family-travel-page" });

  return (
    <div className="page colombo-airport-page">
      <PageHero
        eyebrow="Family travel"
        title="Sri Lanka Family Travel"
        description="A private driver removes the logistics friction of traveling with children — flexible stops, no fixed timetable, and vehicles sized for the group."
        image={family.image}
        alt={family.alt}
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(familyMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
            <MessageCircle size={19} />
            Ask on WhatsApp
          </a>
          <a className="button button--light" href={aiPlannerUrl} target="_blank" rel="noreferrer" onClick={openAiPlanner}>
            <Sparkles size={18} />
            Plan with SKY AI
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">What actually helps with children</span>
            <h2>Flexible stops and the right vehicle size</h2>
            <p>
              Traveling with children usually means more frequent stops, less predictable timing, and more luggage — all things a private driver
              handles more easily than a fixed public-transport schedule. SKY's vehicle range includes larger options (SUV, van) for families
              needing more space.
            </p>
          </Reveal>
          <Reveal className="image-panel">
            <img src={family.image} alt={family.alt} loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="A real family-friendly beach" title="Unawatuna" align="left" text={family.description} />
          <Reveal className="colombo-airport-route-card">
            <div>
              <h3>Why Unawatuna</h3>
              <p>It's the destination in SKY's data explicitly noted for calmer, family-friendly swimming conditions — not a general claim applied everywhere.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader eyebrow="Planning" title="Common questions" align="left" />
          <div className="faq-list">
            <article className="faq-item">
              <h3>Do you have larger vehicles for families?</h3>
              <div>
                <p>Yes — SKY's fleet includes SUVs and vans suited to families needing more passenger and luggage space; mention your group size when booking.</p>
              </div>
            </article>
            <article className="faq-item">
              <h3>Which beach is best for children?</h3>
              <div>
                <p>Unawatuna is the destination specifically noted for calmer swimming conditions in SKY's data, making it a reasonable starting point.</p>
              </div>
            </article>
            <article className="faq-item">
              <h3>Can we take breaks more often with a private driver?</h3>
              <div>
                <p>Yes — a private route isn't locked to a fixed schedule, so stops for food, rest, or a change of plan can be added as needed.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Traveling with children?</h2>
          <p>Send your group size and travel dates on WhatsApp for a vehicle and route suggestion.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(familyMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
              <MessageCircle size={19} />
              Ask on WhatsApp
            </a>
            <button className="button button--light" type="button" onClick={() => setPage("unawatuna-taxi-service")}>
              View Unawatuna Taxi Service
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
