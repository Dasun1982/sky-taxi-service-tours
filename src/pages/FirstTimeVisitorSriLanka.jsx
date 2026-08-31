import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

function firstTimeMessage() {
  return "Hello SKY Taxi Service & Tours, this is my first trip to Sri Lanka and I'd like help planning. Travel dates: ___ Number of days: ___";
}

export default function FirstTimeVisitorSriLanka({ setPage }) {
  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: "first-time-visitor-page" });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: "first-time-visitor-page" });

  return (
    <div className="page colombo-airport-page">
      <PageHero
        eyebrow="First-time visitors"
        title="Is Sri Lanka Good for a First-Time Visitor?"
        description="A practical, honest answer — what makes it easy, what to plan for, and how most first-time itineraries are actually built."
        image={images.kandyTemple}
        alt="Temple of the Tooth in Kandy"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(firstTimeMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
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
            <span className="eyebrow">Short answer</span>
            <h2>Yes — for most travelers, especially with a private driver</h2>
            <p>
              Sri Lanka packs beaches, hill country, ancient history, and wildlife into a small, manageable island — a genuine draw for a first
              trip. The main friction point for independent travelers is getting around: left-hand traffic, mixed-use roads, and route
              conditions that vary outside main highways. A private driver removes that learning curve entirely.
            </p>
          </Reveal>
          <Reveal className="image-panel">
            <img src={images.sigiriya} alt="Sigiriya Rock Fortress in Sri Lanka" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="How first-time routes are usually built" title="A realistic starting structure" align="left" />
          <div className="colombo-airport-route-grid">
            <Reveal className="colombo-airport-route-card">
              <div>
                <h3>2–3 days</h3>
                <p>Hill country alone, or hill country plus one Cultural Triangle stop.</p>
              </div>
            </Reveal>
            <Reveal className="colombo-airport-route-card">
              <div>
                <h3>5 days</h3>
                <p>East coast, Cultural Triangle, hill country, and a wildlife safari combined.</p>
              </div>
            </Reveal>
            <Reveal className="colombo-airport-route-card">
              <div>
                <h3>7–10 days</h3>
                <p>A fuller route covering the north, east, culture, hill country, wildlife, and south coast.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader eyebrow="Common questions" title="What first-time visitors ask" align="left" />
          <div className="faq-list">
            <article className="faq-item">
              <h3>How many days should a first trip be?</h3>
              <div>
                <p>See How Many Days Do You Need in Sri Lanka? for a full breakdown by real, priced route length.</p>
              </div>
            </article>
            <article className="faq-item">
              <h3>Should I self-drive on my first trip?</h3>
              <div>
                <p>Most first-time visitors use a private driver rather than self-driving — see Is a Private Driver Worth It in Sri Lanka? for the full comparison.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Planning your first trip?</h2>
          <p>Send your travel dates and interests on WhatsApp, or ask SKY AI to sketch a starting route.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(firstTimeMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
              <MessageCircle size={19} />
              Ask on WhatsApp
            </a>
            <button className="button button--light" type="button" onClick={() => setPage("how-many-days-in-sri-lanka")}>
              How Many Days Do You Need?
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
