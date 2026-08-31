import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

function noCarMessage() {
  return "Hello SKY Taxi Service & Tours, I want to travel Sri Lanka without renting my own car. Travel dates: ___ Route: ___";
}

export default function TravelSriLankaWithoutACar({ setPage }) {
  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: "travel-without-a-car-page" });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: "travel-without-a-car-page" });

  return (
    <div className="page colombo-airport-page">
      <PageHero
        eyebrow="Getting around"
        title="Can I Travel Sri Lanka Without a Car?"
        description="Yes — most visitors never rent or drive their own car. Here's how a private driver, trains, and buses actually cover the island."
        image={images.trainRide}
        alt="Sri Lanka scenic train ride through hill country"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(noCarMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
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
            <h2>Yes — renting your own car is the exception, not the norm</h2>
            <p>
              Most visitors to Sri Lanka never personally drive — between private drivers, trains, and buses, a rental car is one of the least
              common ways travelers actually get around. A private driver covers the same ground as a rental car without you needing to adjust to
              left-hand traffic or unfamiliar roads yourself.
            </p>
          </Reveal>
          <Reveal className="image-panel">
            <img src={images.toyotaPrius} alt="Toyota Prius taxi vehicle" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Real options" title="How to get around without driving yourself" align="left" />
          <div className="colombo-airport-route-grid">
            <Reveal className="colombo-airport-route-card">
              <div>
                <h3>Private driver</h3>
                <p>One vehicle and driver for your whole trip — door-to-door, no fixed timetable. This is what most SKY customers use.</p>
              </div>
            </Reveal>
            <Reveal className="colombo-airport-route-card">
              <div>
                <h3>Train</h3>
                <p>The hill country rail line is a genuinely scenic option for one leg of a trip — see Is Sri Lanka Better by Train or Private Car?</p>
              </div>
            </Reveal>
            <Reveal className="colombo-airport-route-card">
              <div>
                <h3>Bus</h3>
                <p>An option for budget-conscious independent travel between major towns, though on a fixed schedule with no door-to-door pickup.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader eyebrow="Planning" title="Common questions" align="left" />
          <div className="faq-list">
            <article className="faq-item">
              <h3>Do I need to rent a car to see multiple destinations?</h3>
              <div>
                <p>No — a private driver covers multi-stop, multi-region routes without you needing to rent or drive anything yourself. See How to Travel Around Sri Lanka for the full comparison of options.</p>
              </div>
            </article>
            <article className="faq-item">
              <h3>Is a private driver more expensive than a rental car?</h3>
              <div>
                <p>There's no fixed online price for either — see How Much Does a Sri Lanka Trip Cost? for real figures from SKY's own catalog, and Private Driver vs Rental Car for the fuller comparison.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Plan your trip without renting a car</h2>
          <p>Send your route and dates on WhatsApp for a private-driver plan.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(noCarMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
              <MessageCircle size={19} />
              Ask on WhatsApp
            </a>
            <button className="button button--light" type="button" onClick={() => setPage("how-to-travel-around-sri-lanka")}>
              How to Travel Around Sri Lanka
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
