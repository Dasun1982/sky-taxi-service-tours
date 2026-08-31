import { MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { oneDayTourPricing, roundTourPricing } from "../data/pricing";
import { tours } from "../data/tours";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

function costMessage() {
  return "Hello SKY Taxi Service & Tours, I want an estimate for my Sri Lanka trip. Route/interests: ___ Travel dates: ___ Number of passengers: ___";
}

export default function HowMuchDoesASriLankaTripCost({ setPage }) {
  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: "trip-cost-page" });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: "trip-cost-page" });

  return (
    <div className="page colombo-airport-page">
      <PageHero
        eyebrow="Trip planning"
        title="How Much Does a Sri Lanka Trip Cost?"
        description="Real prices from SKY's own catalog — no invented averages or third-party estimates — for private tours and transfers, priced per vehicle."
        image={images.sigiriya}
        alt="Sigiriya Rock Fortress in Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(costMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
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
            <span className="eyebrow">How pricing works</span>
            <h2>Priced per vehicle, not per person</h2>
            <p>
              Every price on this page is for the entire private vehicle, not per traveler — a group of four pays the same as a solo traveler on
              the same route. Final pricing always depends on exact dates, vehicle type, and any add-ons like a specialist guide, confirmed on
              WhatsApp before travel.
            </p>
          </Reveal>
          <Reveal className="image-panel">
            <img src={images.blueBeach} alt="Blue beach on the Sri Lanka south coast" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Real prices" title="One-day tours" align="left" />
          <div className="pricing-grid related-tours-grid">
            {oneDayTourPricing.map((entry) => {
              const tour = tours.find((item) => item.priceId === entry.id);
              return (
                <article className="pricing-card" key={entry.id}>
                  <span className="pricing-card__label">{entry.price}</span>
                  <h3>{tour?.name || entry.id}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader eyebrow="Real prices" title="Multi-day round tours" align="left" />
          <div className="pricing-grid related-tours-grid">
            {roundTourPricing.map((entry) => {
              const tour = tours.find((item) => item.priceId === entry.id);
              return (
                <article className="pricing-card" key={entry.id}>
                  <span className="pricing-card__label">{entry.price}</span>
                  <h3>{tour?.name || entry.id}</h3>
                  <p>{tour?.duration}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="What affects the final price" title="Not included in the base prices above" align="left" />
          <div className="faq-list">
            <article className="faq-item">
              <h3>What isn't included in these prices?</h3>
              <div>
                <p>Entrance tickets, meals, and hotel stays are not included in the tour prices above — see the individual tour pages for a full breakdown of what's included.</p>
              </div>
            </article>
            <article className="faq-item">
              <h3>Does a specialist guide cost extra?</h3>
              <div>
                <p>Yes — a driver alone is included in the base price; a specialist licensed guide is an optional add-on, confirmed on WhatsApp.</p>
              </div>
            </article>
            <article className="faq-item">
              <h3>Are airport transfers priced separately?</h3>
              <div>
                <p>Yes — airport transfers have their own per-vehicle pricing, separate from tour packages. See Airport Transfer Sri Lanka for details.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Want an exact quote for your route?</h2>
          <p>Send your interests, dates, and passenger count on WhatsApp for a real, route-based price.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(costMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
              <MessageCircle size={19} />
              Ask on WhatsApp
            </a>
            <button className="button button--light" type="button" onClick={() => setPage("packages")}>
              View All Packages
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
