import { MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

function timeMessage() {
  return "Hello SKY Taxi Service & Tours, I want advice on the best time to visit Sri Lanka. Planned travel dates: ___ Regions of interest: ___";
}

export default function BestTimeToVisitSriLanka({ setPage }) {
  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: "best-time-to-visit-page" });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: "best-time-to-visit-page" });

  return (
    <div className="page colombo-airport-page">
      <PageHero
        eyebrow="Trip planning"
        title="What Is the Best Time to Visit Sri Lanka?"
        description="Sri Lanka has two separate monsoon systems, which is why it rarely has a single bad time to visit — general seasonal patterns, not live weather."
        image={images.blueBeach}
        alt="Blue beach on the Sri Lanka south coast"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(timeMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
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
            <span className="eyebrow">Two coasts, two seasons</span>
            <h2>West, south &amp; hill country: driest December–March</h2>
            <p>
              The west coast, south coast, and hill country are generally driest from around December to March. This is the more commonly
              recommended window for a first Sri Lanka trip focused on the south coast beaches, Galle, and hill country towns like Ella and
              Kandy.
            </p>
          </Reveal>
          <Reveal className="image-panel">
            <img src={images.nineArchBridge} alt="Nine Arch Bridge surrounded by Ella hill country" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner split-layout">
          <Reveal className="image-panel">
            <img src={images.surfing} alt="Surfing on a Sri Lanka beach" loading="lazy" />
          </Reveal>
          <Reveal className="split-layout__copy">
            <span className="eyebrow">East coast</span>
            <h2>East coast: driest May–September</h2>
            <p>
              The east coast — Arugam Bay and Trincomalee — tends to be driest from around May to September, broadly the opposite pattern to the
              west and south. Surfers heading specifically to Arugam Bay often plan around this window.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Planning around both coasts"
            title="A route can be timed to avoid the wettest weeks in each region"
            text="Conditions vary year to year and are worth checking closer to your travel dates — this page describes general seasonal patterns, not live or forecast weather."
            align="left"
          />
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Common questions" title="Planning your dates" align="left" />
          <div className="faq-list">
            <article className="faq-item">
              <h3>Is there a single best month to visit Sri Lanka?</h3>
              <div>
                <p>Not really — it depends which coast you're prioritizing. December to March suits the south and west; May to September suits the east coast.</p>
              </div>
            </article>
            <article className="faq-item">
              <h3>Can I visit both coasts on one trip regardless of season?</h3>
              <div>
                <p>Yes, but see South Coast vs East Coast for how to think about timing if you want to prioritize good weather on both.</p>
              </div>
            </article>
            <article className="faq-item">
              <h3>What if it rains during my trip?</h3>
              <div>
                <p>Rain in Sri Lanka is often short and localized rather than an all-day washout — a private driver can adjust the day's plan around it more easily than a fixed-schedule tour.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Planning around specific dates?</h2>
          <p>Send your travel dates and regions of interest on WhatsApp for practical advice.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(timeMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
              <MessageCircle size={19} />
              Ask on WhatsApp
            </a>
            <button className="button button--light" type="button" onClick={() => setPage("south-coast-vs-east-coast")}>
              South Coast vs East Coast
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
