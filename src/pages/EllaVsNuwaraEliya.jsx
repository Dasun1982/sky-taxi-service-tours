import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import RelatedTours from "../components/RelatedTours";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { findDestination } from "../data/destinations";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

const ella = findDestination("ella");
const nuwaraEliya = findDestination("nuwara-eliya");

function compareMessage() {
  return "Hello SKY Taxi Service & Tours, I'm deciding between Ella and Nuwara Eliya. Travel dates: ___ Number of passengers: ___";
}

export default function EllaVsNuwaraEliya({ setPage }) {
  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: "ella-vs-nuwara-eliya-page" });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: "ella-vs-nuwara-eliya-page" });

  return (
    <div className="page colombo-airport-page">
      <PageHero
        eyebrow="Hill country comparison"
        title="Ella vs Nuwara Eliya"
        description="Two real hill country towns, compared honestly for hiking, tea plantations, climate, and pace — with a real 2-day tour that covers both if you can't choose."
        image={images.nineArchBridge}
        alt="Nine Arch Bridge surrounded by Ella hill country"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(compareMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
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
          <Reveal className="image-panel">
            <img src={ella.image} alt={ella.alt} loading="lazy" />
          </Reveal>
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Ella</span>
            <h2>Hiking, viewpoints, and the Nine Arch Bridge</h2>
            <p>{ella.description}</p>
            <ul>
              {ella.popularFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button className="text-button" type="button" onClick={() => setPage("ella-taxi-service")}>
              View Ella taxi service
              <ArrowRight size={16} />
            </button>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Nuwara Eliya</span>
            <h2>Tea plantations and a cooler colonial-era climate</h2>
            <p>{nuwaraEliya.description}</p>
            <ul>
              {nuwaraEliya.popularFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button className="text-button" type="button" onClick={() => setPage("nuwara-eliya-taxi-service")}>
              View Nuwara Eliya taxi service
              <ArrowRight size={16} />
            </button>
          </Reveal>
          <Reveal className="image-panel">
            <img src={nuwaraEliya.image} alt={nuwaraEliya.alt} loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader eyebrow="Side by side" title="Which one fits your trip" align="left" />
          <div className="colombo-airport-route-grid">
            <Reveal className="colombo-airport-route-card">
              <div>
                <h3>Best for hiking &amp; viewpoints</h3>
                <p>Ella — Little Adam's Peak and the Nine Arch Bridge are its main draws.</p>
              </div>
            </Reveal>
            <Reveal className="colombo-airport-route-card">
              <div>
                <h3>Best for tea plantations</h3>
                <p>Nuwara Eliya — tea plantations and tea factories are the region's defining feature.</p>
              </div>
            </Reveal>
            <Reveal className="colombo-airport-route-card">
              <div>
                <h3>Cooler climate</h3>
                <p>Nuwara Eliya sits higher and has the more distinctly cool, colonial-era climate of the two.</p>
              </div>
            </Reveal>
            <Reveal className="colombo-airport-route-card">
              <div>
                <h3>Livelier small-town base</h3>
                <p>Ella has a busier small-town center with more cafes, shops, and a train station on the scenic hill country line.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <div>
              <span className="eyebrow">Can't choose?</span>
              <h2>SKY's real 2-day tour already combines Kandy, Nuwara Eliya &amp; Ella</h2>
              <p>You don't have to pick one — this is a real, priced route that visits both towns on one continuous private trip.</p>
            </div>
            <div className="cta-actions">
              <button className="button button--primary" type="button" onClick={() => setPage("round-tours")}>
                <MessageCircle size={18} />
                View This Tour
              </button>
              <a className="button button--light" href={aiPlannerUrl} target="_blank" rel="noreferrer" onClick={openAiPlanner}>
                <Sparkles size={18} />
                Adjust with SKY AI
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <RelatedTours destinationId="ella" eyebrow="Real tours that include Ella" soft />
    </div>
  );
}
