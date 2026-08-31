import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

function travelMessage() {
  return "Hello SKY Taxi Service & Tours, I want advice on how to get around Sri Lanka. Travel dates: ___ Route: ___";
}

export default function HowToTravelAroundSriLanka({ setPage }) {
  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: "how-to-travel-around-page" });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: "how-to-travel-around-page" });

  return (
    <div className="page colombo-airport-page">
      <PageHero
        eyebrow="Getting around"
        title="How to Travel Around Sri Lanka"
        description="The real transport options — private driver, self-drive, and public transport — and when each one actually makes sense."
        image={images.toyotaPrius}
        alt="Toyota Prius taxi vehicle"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(travelMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
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
            <span className="eyebrow">The options</span>
            <h2>Private driver, self-drive, or public transport</h2>
            <p>
              Most visitors choose between three real options: a private driver (one vehicle and driver for the whole trip, no fixed schedule),
              self-drive (renting and driving yourself, adjusting to left-hand traffic), or public transport (trains and buses, on a fixed
              timetable). A private driver is what most SKY customers use, since it removes the logistics of the other two.
            </p>
          </Reveal>
          <Reveal className="image-panel">
            <img src={images.trainRide} alt="Sri Lanka scenic train ride through hill country" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Compare the options" title="Which fits your trip" align="left" />
          <div className="colombo-airport-route-grid">
            <Reveal className="colombo-airport-route-card">
              <div>
                <h3>Private driver</h3>
                <p>One vehicle and driver for your whole route, flexible stops, no fixed timetable. See Is a Private Driver Worth It? for the full breakdown.</p>
              </div>
            </Reveal>
            <Reveal className="colombo-airport-route-card">
              <div>
                <h3>Self-drive / rental car</h3>
                <p>You handle navigation and left-hand traffic yourself. See Private Driver vs Rental Car for a direct comparison.</p>
              </div>
            </Reveal>
            <Reveal className="colombo-airport-route-card">
              <div>
                <h3>Train &amp; public transport</h3>
                <p>Fixed schedules, no door-to-door pickup, but a genuinely scenic option on certain hill country routes. See Is Sri Lanka Better by Train or Private Car?</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Not sure which option fits your route?</h2>
          <p>Send your planned trip on WhatsApp for a straight answer.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(travelMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
              <MessageCircle size={19} />
              Ask on WhatsApp
            </a>
            <button className="button button--light" type="button" onClick={() => setPage("is-a-private-driver-worth-it")}>
              Is a Private Driver Worth It?
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
