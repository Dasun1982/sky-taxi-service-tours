import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../PageHero";
import Reveal from "../Reveal";
import RelatedTours from "../RelatedTours";
import SectionHeader from "../SectionHeader";
import { findDestination } from "../../data/destinations";
import { comparisonPages } from "../../data/seo/comparisons";
import { aiPlannerUrl } from "../../data/business";
import { buildWhatsAppLink } from "../../utils/whatsapp";
import { trackEvent } from "../../utils/analytics";

/**
 * Shared template for destination-vs-destination comparison pages (the
 * pattern EllaVsNuwaraEliya.jsx established) — only used for pairs where
 * BOTH sides have real, distinct destinations.js content. Never invents a
 * side; see seoOpportunities.js comparisonOpportunities for pairs that
 * were deliberately skipped (e.g. Yala vs Udawalawe — Udawalawe has no
 * real data).
 */
export default function ComparisonPage({ pageKey, setPage }) {
  const config = comparisonPages[pageKey];
  if (!config) return null;
  const a = findDestination(config.destinationIdA);
  const b = findDestination(config.destinationIdB);
  if (!a || !b) return null;

  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: `${pageKey}-page` });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: `${pageKey}-page` });
  const message = () => `Hello SKY Taxi Service & Tours, I'm deciding between ${a.name} and ${b.name}. Travel dates: ___ Number of passengers: ___`;

  return (
    <div className="page colombo-airport-page">
      <PageHero eyebrow={config.heroEyebrow} title={config.heroTitle} description={config.heroDescription} image={a.image} alt={a.alt}>
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(message())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
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
            <img src={a.image} alt={a.alt} loading="lazy" />
          </Reveal>
          <Reveal className="split-layout__copy">
            <span className="eyebrow">{a.name}</span>
            <h2>{config.aHeadline}</h2>
            <p>{a.description}</p>
            <ul>
              {a.popularFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {config.ctaPageA && (
              <button className="text-button" type="button" onClick={() => setPage(config.ctaPageA)}>
                {config.ctaLabelA || `View ${a.name}`}
                <ArrowRight size={16} />
              </button>
            )}
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">{b.name}</span>
            <h2>{config.bHeadline}</h2>
            <p>{b.description}</p>
            <ul>
              {b.popularFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {config.ctaPageB && (
              <button className="text-button" type="button" onClick={() => setPage(config.ctaPageB)}>
                {config.ctaLabelB || `View ${b.name}`}
                <ArrowRight size={16} />
              </button>
            )}
          </Reveal>
          <Reveal className="image-panel">
            <img src={b.image} alt={b.alt} loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader eyebrow="Side by side" title="Which one fits your trip" align="left" />
          <div className="colombo-airport-route-grid">
            {config.comparisonRows.map((row) => (
              <Reveal className="colombo-airport-route-card" key={row.title}>
                <div>
                  <h3>{row.title}</h3>
                  <p>{row.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {config.combinedNote && (
        <section className="section section--soft">
          <div className="section__inner">
            <Reveal className="booking-cta-panel">
              <div>
                <span className="eyebrow">Can't choose?</span>
                <h2>{config.combinedHeadline}</h2>
                <p>{config.combinedNote}</p>
              </div>
              <div className="cta-actions">
                <button className="button button--primary" type="button" onClick={() => setPage(config.combinedCtaPage || "tours")}>
                  <MessageCircle size={18} />
                  {config.combinedCtaLabel || "View This Tour"}
                </button>
                <a className="button button--light" href={aiPlannerUrl} target="_blank" rel="noreferrer" onClick={openAiPlanner}>
                  <Sparkles size={18} />
                  Adjust with SKY AI
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {config.faqs?.length > 0 && (
        <section className="section">
          <div className="section__inner">
            <SectionHeader eyebrow="Common questions" title={`${a.name} vs ${b.name} FAQ`} align="left" />
            <div className="faq-list">
              {config.faqs.map((faq) => (
                <article className="faq-item" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <div>
                    <p>{faq.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {config.relatedToursDestinationId && (
        <RelatedTours destinationId={config.relatedToursDestinationId} eyebrow={`Real tours that include ${findDestination(config.relatedToursDestinationId)?.name}`} soft />
      )}
    </div>
  );
}
