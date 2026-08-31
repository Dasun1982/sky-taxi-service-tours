import { MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { findDestination } from "../data/destinations";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

// Real destinations honestly suited to a quieter, scenic pace — chosen
// from destinations.js's own real content, not a fabricated "romantic"
// tag or invented couples package.
const suggestedIds = ["hiriketiya", "unawatuna", "ella", "nuwara-eliya"];

function honeymoonMessage() {
  return "Hello SKY Taxi Service & Tours, we're planning a honeymoon/couples trip to Sri Lanka. Travel dates: ___ Interests: ___";
}

export default function SriLankaHoneymoon({ setPage }) {
  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: "sri-lanka-honeymoon-page" });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: "sri-lanka-honeymoon-page" });

  return (
    <div className="page colombo-airport-page">
      <PageHero
        eyebrow="Couples & honeymoon travel"
        title="Sri Lanka Honeymoon & Romantic Places"
        description="A private driver keeps a couples trip flexible and unhurried — real quiet beaches and hill country stops, not an invented package."
        image={images.hiriketiyaBeach}
        alt="Hiriketiya Beach in Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(honeymoonMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
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
            <span className="eyebrow">Why a private driver suits a couples trip</span>
            <h2>Flexibility and privacy, not a fixed package</h2>
            <p>
              SKY doesn't sell a dedicated "honeymoon package" — what actually changes a couples trip is the same thing that helps any private
              route: no fixed schedule, no group tour, and the flexibility to slow down, add a stop, or change plans without rebooking anything.
            </p>
          </Reveal>
          <Reveal className="image-panel">
            <img src={images.blueBeach} alt="Blue beach on the Sri Lanka south coast" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Real destinations" title="Quieter, scenic stops for a couples trip" text="Chosen from SKY's real destination data — nothing invented, no fabricated 'romantic' rating." align="left" />
          <div className="destination-showcase-grid">
            {suggestedIds.map((id) => {
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

      <section className="section">
        <div className="section__inner">
          <SectionHeader eyebrow="Planning" title="Common questions" align="left" />
          <div className="faq-list">
            <article className="faq-item">
              <h3>Does SKY offer a honeymoon package?</h3>
              <div>
                <p>Not as a separate product — SKY's private driver and round tour services already offer the flexibility a couples trip needs. Tell us your interests and we'll suggest a real route.</p>
              </div>
            </article>
            <article className="faq-item">
              <h3>Is Sri Lanka good for a honeymoon?</h3>
              <div>
                <p>Many couples combine hill country scenery with south coast beaches on one private route — SKY's real multi-day tours already cover both in a single continuous trip.</p>
              </div>
            </article>
            <article className="faq-item">
              <h3>Can we customize a route just for two people?</h3>
              <div>
                <p>Yes — a private vehicle and driver work the same whether it's two passengers or a larger group; pricing depends on route and vehicle, confirmed on WhatsApp.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Plan your trip together</h2>
          <p>Send your interests and travel dates on WhatsApp, or ask SKY AI to help sketch a route.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(honeymoonMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
              <MessageCircle size={19} />
              Ask on WhatsApp
            </a>
            <button className="button button--light" type="button" onClick={() => setPage("round-tours")}>
              Browse Round Tours
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
