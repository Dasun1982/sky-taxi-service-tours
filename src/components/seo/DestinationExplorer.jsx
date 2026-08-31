import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../PageHero";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import { findDestination, findRelatedDestinations } from "../../data/destinations";
import { destinationExplorerPages } from "../../data/seo/destinationExplorer";
import { aiPlannerUrl } from "../../data/business";
import { buildWhatsAppLink } from "../../utils/whatsapp";
import { trackEvent } from "../../utils/analytics";

/**
 * Shared template for two related, genuinely different search intents on
 * the same destination:
 *   mode: "overview"    — a destination with real data but no dedicated
 *                          page yet (e.g. Colombo, Sinharaja). Introduces
 *                          the place itself.
 *   mode: "things-to-do" — a destination that ALREADY has a transport-
 *                          focused taxi-service page; this page targets the
 *                          separate "what do I actually do there" search
 *                          intent instead of repeating the transport page.
 * Both modes render from the same real destinations.js record — nothing
 * here invents an attraction, opening time, or price.
 */
export default function DestinationExplorer({ pageKey, setPage }) {
  const config = destinationExplorerPages[pageKey];
  if (!config) return null;
  const destination = findDestination(config.destinationId);
  if (!destination) return null;

  const related = findRelatedDestinations(config.destinationId).filter((item) => item.image && item.seoSlug);

  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: `${pageKey}-page` });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: `${pageKey}-page` });
  const message = () => `Hello SKY Taxi Service & Tours, I'm interested in ${destination.name}. ${config.whatsappTopic || ""} Travel dates: ___`;

  return (
    <div className="page colombo-airport-page">
      <PageHero eyebrow={config.heroEyebrow} title={config.heroTitle} description={config.heroDescription} image={destination.image} alt={destination.alt}>
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
          <Reveal className="split-layout__copy">
            <span className="eyebrow">About {destination.name}</span>
            <h2>{config.introTitle}</h2>
            <p>{config.introText}</p>
            {config.secondParagraph && <p>{config.secondParagraph}</p>}
            {config.relatedLinks?.length > 0 && (
              <div className="colombo-airport-link-row">
                {config.relatedLinks.map((link) => (
                  <a href={link.href} key={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </Reveal>
          <Reveal className="colombo-airport-summary">
            <article>
              <h3>Known for</h3>
              <p>{destination.popularFor.join(", ")}</p>
            </article>
            {destination.region && (
              <article>
                <h3>Region</h3>
                <p>{destination.region}</p>
              </article>
            )}
            <article>
              <h3>Who it suits</h3>
              <p>{config.whoItSuits}</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Things to do" title={config.thingsToDoTitle} align="left" />
          <div className="colombo-airport-route-grid">
            {destination.popularFor.map((item) => (
              <Reveal className="colombo-airport-route-card" key={item}>
                <div>
                  <h3>{item}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader eyebrow="Practical planning" title="What to know before you go" align="left" text={config.practicalInfo} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section--soft">
          <div className="section__inner">
            <SectionHeader eyebrow="Nearby" title={`Places near ${destination.name}`} align="left" />
            <div className="destination-showcase-grid">
              {related.map((item) => (
                <a
                  className="reveal destination-showcase-card"
                  href={item.seoSlug}
                  key={item.id}
                  onClick={() => trackEvent("destination_clicked", { destination: item.name, page_source: `${pageKey}-page` })}
                >
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <div>
                    {item.region && <span>{item.region}</span>}
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {config.faqs?.length > 0 && (
        <section className="section">
          <div className="section__inner">
            <SectionHeader eyebrow={`${destination.name} FAQ`} title="Common questions" align="left" />
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
          <h2>{config.ctaHeading}</h2>
          <p>{config.ctaText}</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(message())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
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
