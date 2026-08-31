import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { oneDayTourPricing } from "../data/pricing";
import { tours } from "../data/tours";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

function budgetMessage() {
  return "Hello SKY Taxi Service & Tours, I'm planning a budget-friendly Sri Lanka trip. Travel dates: ___ Interests: ___";
}

export default function SriLankaBudgetTravel({ setPage }) {
  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: "sri-lanka-budget-travel-page" });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: "sri-lanka-budget-travel-page" });

  return (
    <div className="page colombo-airport-page">
      <PageHero
        eyebrow="Budget travel"
        title="Sri Lanka Budget Travel"
        description="Real, lower-cost ways to see Sri Lanka with SKY — one-day tours priced for the whole vehicle, and a dedicated budget taxi option."
        image={images.toyotaPrius}
        alt="Toyota Prius taxi vehicle"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(budgetMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
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
            <span className="eyebrow">What "budget" actually means here</span>
            <h2>Lower-cost real products, not a discount gimmick</h2>
            <p>
              SKY doesn't publish a separate discounted product line — "budget" here means the real, already-lower-cost options in the catalog:
              one-day tours (priced for the whole vehicle, not per person) and a dedicated budget taxi service for shorter trips.
            </p>
          </Reveal>
          <Reveal className="image-panel">
            <img src={images.sigiriya} alt="Sigiriya Rock Fortress in Sri Lanka" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Real prices" title="Lower-cost one-day tours" text="Prices are for the entire private vehicle, not per person — real figures from SKY's catalog." align="left" />
          <div className="pricing-grid related-tours-grid">
            {oneDayTourPricing.map((entry) => {
              const tour = tours.find((item) => item.priceId === entry.id);
              if (!tour) return null;
              return (
                <article className="pricing-card" key={entry.id}>
                  <span className="pricing-card__label">{entry.price}</span>
                  <h3>{tour.name}</h3>
                  <a className="text-button" href="/one-day-tours">
                    View this tour
                    <ArrowRight size={17} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader eyebrow="Transport" title="Budget taxi service" align="left" text="A dedicated lower-cost taxi option for point-to-point travel — see Budget Taxi Sri Lanka for details." />
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Planning" title="Common questions" align="left" />
          <div className="faq-list">
            <article className="faq-item">
              <h3>Are prices per person or per vehicle?</h3>
              <div>
                <p>Per vehicle — the price shown covers the whole private tour or transfer, not each traveler individually, which makes group and family trips more cost-effective.</p>
              </div>
            </article>
            <article className="faq-item">
              <h3>Is there a cheaper way to see multiple destinations?</h3>
              <div>
                <p>One-day tours are the lower-cost option per destination; a multi-day round tour costs more overall but covers several regions in one continuous booking. See How Many Days Do You Need in Sri Lanka? to compare.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Planning on a budget?</h2>
          <p>Send your interests and travel dates on WhatsApp for a realistic, lower-cost route suggestion.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(budgetMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
              <MessageCircle size={19} />
              Ask on WhatsApp
            </a>
            <button className="button button--light" type="button" onClick={() => setPage("budget-taxi-sri-lanka")}>
              View Budget Taxi Service
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
