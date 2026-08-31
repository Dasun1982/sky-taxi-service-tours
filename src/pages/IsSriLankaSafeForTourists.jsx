import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

function safetyMessage() {
  return "Hello SKY Taxi Service & Tours, I have questions about traveling safely in Sri Lanka. Travel dates: ___";
}

export default function IsSriLankaSafeForTourists({ setPage }) {
  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: "is-sri-lanka-safe-page" });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: "is-sri-lanka-safe-page" });

  return (
    <div className="page colombo-airport-page">
      <PageHero
        eyebrow="Trip planning"
        title="Is Sri Lanka Safe for Tourists?"
        description="General, practical guidance — not a safety rating or statistic SKY isn't in a position to publish."
        image={images.kandyTemple}
        alt="Temple of the Tooth in Kandy"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(safetyMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
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
            <span className="eyebrow">Honest scope of this page</span>
            <h2>General guidance, not a safety statistic</h2>
            <p>
              SKY is a transport and tour operator, not a safety authority — we don't have crime statistics, government travel-advisory data, or
              other verified safety sources to cite, and won't invent numbers to sound authoritative. Sri Lanka is a well-established tourist
              destination with a large, active tourism industry; standard travel precautions that apply to most destinations — keeping valuables
              secure, using licensed transport, checking your own government's current travel advice — apply here too.
            </p>
          </Reveal>
          <Reveal className="image-panel">
            <img src={images.sigiriya} alt="Sigiriya Rock Fortress in Sri Lanka" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="What a private driver changes" title="Fewer unknowns, not a safety guarantee" align="left" />
          <div className="colombo-airport-route-grid">
            <Reveal className="colombo-airport-route-card">
              <div>
                <h3>Licensed, known drivers</h3>
                <p>A private driver you've booked directly, rather than an unfamiliar arrangement — one known factor removed from an unfamiliar country.</p>
              </div>
            </Reveal>
            <Reveal className="colombo-airport-route-card">
              <div>
                <h3>No unfamiliar road navigation</h3>
                <p>You're not personally navigating unfamiliar roads, left-hand traffic, or mixed-use highways — see Is a Private Driver Worth It? for the full breakdown.</p>
              </div>
            </Reveal>
            <Reveal className="colombo-airport-route-card">
              <div>
                <h3>Door-to-door pickups</h3>
                <p>Airport and hotel pickups mean less time navigating unfamiliar transport hubs alone, especially late at night.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader eyebrow="Practical advice" title="Common questions" align="left" />
          <div className="faq-list">
            <article className="faq-item">
              <h3>Should I check official travel advisories?</h3>
              <div>
                <p>Yes — your own government's foreign travel advisory (updated regularly by official sources) is the right place for current, authoritative safety guidance, not a tour operator's website.</p>
              </div>
            </article>
            <article className="faq-item">
              <h3>Is it safe to travel around Sri Lanka at night?</h3>
              <div>
                <p>A private driver with a confirmed pickup time removes much of the uncertainty of unfamiliar late-night transport — see Is a Private Driver Worth It? for the fuller comparison against self-drive or public transport.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Have a specific concern about your trip?</h2>
          <p>Send your questions on WhatsApp — real answers about your actual route, not a generic disclaimer.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(safetyMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
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
