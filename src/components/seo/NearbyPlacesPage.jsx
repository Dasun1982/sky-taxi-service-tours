import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../PageHero";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import { findDestination, findRelatedDestinations } from "../../data/destinations";
import { nearbyPlacesPages } from "../../data/seo/nearbyPlaces";
import { aiPlannerUrl } from "../../data/business";
import { buildWhatsAppLink } from "../../utils/whatsapp";
import { trackEvent } from "../../utils/analytics";

/**
 * Shared template for "Best Places to Visit from <X>" pages (the pattern
 * BestBeachesNearGalle.jsx established) — built entirely from a
 * destination's own verified relatedDestinations list in destinations.js,
 * never an invented itinerary.
 */
export default function NearbyPlacesPage({ pageKey, setPage }) {
  const config = nearbyPlacesPages[pageKey];
  if (!config) return null;
  const base = findDestination(config.destinationId);
  if (!base) return null;
  const nearby = findRelatedDestinations(config.destinationId).filter((item) => item.image && item.seoSlug);

  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: `${pageKey}-page` });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: `${pageKey}-page` });
  const message = (place) => `Hello SKY Taxi Service & Tours, I want a private route from ${base.name} to ${place}. Travel date: ___ Number of passengers: ___`;

  return (
    <div className="page colombo-airport-page">
      <PageHero eyebrow={config.heroEyebrow} title={config.heroTitle} description={config.heroDescription} image={base.image} alt={base.alt}>
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(message("nearby destinations"))} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
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
        <div className="section__inner">
          <SectionHeader eyebrow={`From ${base.name}`} title={config.introTitle} text={config.introText} />
          <div className="destination-showcase-grid">
            {nearby.map((destination) => (
              <a
                className="reveal destination-showcase-card"
                href={destination.seoSlug}
                key={destination.id}
                onClick={() => trackEvent("destination_clicked", { destination: destination.name, page_source: `${pageKey}-page` })}
              >
                <img src={destination.image} alt={destination.alt} loading="lazy" />
                <div>
                  {destination.region && <span>{destination.region}</span>}
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Which one fits you" title="Choosing between them" align="left" />
          <div className="colombo-airport-route-grid">
            {nearby.map((destination) => (
              <Reveal className="colombo-airport-route-card" key={destination.id}>
                <div>
                  <h3>{destination.name}</h3>
                  <p>{destination.popularFor.slice(0, 2).join(", ")}</p>
                  <a href={buildWhatsAppLink(message(destination.name))} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {config.faqs?.length > 0 && (
        <section className="section">
          <div className="section__inner">
            <SectionHeader eyebrow="Planning your route" title="Common questions" align="left" />
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

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Not sure where to start?</h2>
          <p>Send your interests on WhatsApp for a route suggestion from {base.name}.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(message("nearby destinations"))} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
              <MessageCircle size={19} />
              Ask on WhatsApp
            </a>
            <button className="button button--light" type="button" onClick={() => setPage(config.ctaPage)}>
              {config.ctaButtonLabel}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
