import { MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { findDestination } from "../data/destinations";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

// Real destinations tagged to each region in destinations.js — nothing
// invented, no destination listed here that doesn't already have a real
// region label matching "South Coast" or "East Coast".
const southCoastIds = ["galle", "unawatuna", "mirissa", "weligama", "hiriketiya"];
const eastCoastIds = ["arugam-bay"];

function coastMessage() {
  return "Hello SKY Taxi Service & Tours, I'm deciding between the south coast and east coast. Travel dates: ___";
}

export default function SouthCoastVsEastCoast({ setPage }) {
  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: "south-vs-east-coast-page" });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: "south-vs-east-coast-page" });

  return (
    <div className="page colombo-airport-page">
      <PageHero
        eyebrow="Coast comparison"
        title="South Coast vs East Coast"
        description="Sri Lanka has two coasts with two different monsoon seasons — a real, practical comparison to help decide which fits your travel dates."
        image={images.blueBeach}
        alt="Blue beach on the Sri Lanka south coast"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(coastMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
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
            <span className="eyebrow">The real difference</span>
            <h2>Two coasts, two separate monsoon seasons</h2>
            <p>
              Sri Lanka's west and south coasts (Galle, Unawatuna, Mirissa, Weligama, Hiriketiya) are generally driest from around December to
              March. The east coast (Arugam Bay) tends to be driest from around May to September. That split is the main practical reason to
              choose one coast over the other for a given set of travel dates — not one coast being simply "better" than the other.
            </p>
          </Reveal>
          <Reveal className="image-panel">
            <img src={images.surfing} alt="Surfing on a Sri Lanka beach" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Real destinations" title="South coast" align="left" />
          <div className="destination-showcase-grid">
            {southCoastIds.map((id) => {
              const destination = findDestination(id);
              if (!destination?.image || !destination?.seoSlug) return null;
              return (
                <a className="reveal destination-showcase-card" href={destination.seoSlug} key={id}>
                  <img src={destination.image} alt={destination.alt} loading="lazy" />
                  <div>
                    <span>{destination.region}</span>
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
          <SectionHeader eyebrow="Real destinations" title="East coast" align="left" />
          <div className="destination-showcase-grid">
            {eastCoastIds.map((id) => {
              const destination = findDestination(id);
              if (!destination?.image || !destination?.seoSlug) return null;
              return (
                <a className="reveal destination-showcase-card" href={destination.seoSlug} key={id}>
                  <img src={destination.image} alt={destination.alt} loading="lazy" />
                  <div>
                    <span>{destination.region}</span>
                    <h3>{destination.name}</h3>
                    <p>{destination.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
          <p className="package-price-note">
            Trincomalee is another real east coast destination in SKY's data, but doesn't yet have a dedicated page — ask on WhatsApp if you'd
            like to include it in a custom route.
          </p>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Choosing a coast" title="Which fits your trip" align="left" />
          <div className="faq-list">
            <article className="faq-item">
              <h3>I'm traveling December to March — which coast?</h3>
              <div>
                <p>The south and west coasts are generally driest in this window, making Galle, Unawatuna, Mirissa, Weligama, and Hiriketiya a reasonable focus.</p>
              </div>
            </article>
            <article className="faq-item">
              <h3>I'm traveling May to September — which coast?</h3>
              <div>
                <p>The east coast, including Arugam Bay, tends to be driest in this window — a reasonable time to prioritize the east over the south.</p>
              </div>
            </article>
            <article className="faq-item">
              <h3>Can I visit both coasts on one trip?</h3>
              <div>
                <p>Yes, on a longer route — SKY's real 10-day tour combines the east coast, hill country, and south coast in one continuous private trip.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Not sure which coast fits your dates?</h2>
          <p>Send your travel dates on WhatsApp for a straight answer, or ask SKY AI to help plan a route.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(coastMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
              <MessageCircle size={19} />
              Ask on WhatsApp
            </a>
            <button className="button button--light" type="button" onClick={() => setPage("10-days-in-sri-lanka")}>
              View the 10-Day Route
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
