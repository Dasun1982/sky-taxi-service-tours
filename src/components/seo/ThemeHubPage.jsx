import { MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../PageHero";
import SectionHeader from "../SectionHeader";
import { findDestination } from "../../data/destinations";
import { themeHubPages } from "../../data/seo/themeHubs";
import { images } from "../../data/travelData";
import { aiPlannerUrl } from "../../data/business";
import { buildWhatsAppLink } from "../../utils/whatsapp";
import { trackEvent } from "../../utils/analytics";

/**
 * Shared template for theme hub pages (Beaches, Hill Country, Culture,
 * Surfing) — aggregates destinations.js entries that already carry the
 * matching category tag. Only built where enough real, distinct
 * destinations exist to be substantially different from a single
 * destination page — see seoOpportunities.js experienceOpportunities for
 * themes (Mountains, Tea Country, Adventure) deliberately skipped as
 * near-duplicates of this hub or of /experiences.
 */
export default function ThemeHubPage({ pageKey, setPage }) {
  const config = themeHubPages[pageKey];
  if (!config) return null;
  const destinations = config.destinationIds.map((id) => findDestination(id)).filter((item) => item?.image && item?.seoSlug);

  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: `${pageKey}-page` });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: `${pageKey}-page` });
  const message = () => `Hello SKY Taxi Service & Tours, I'm interested in ${config.heroTitle.toLowerCase()}. Travel dates: ___`;

  return (
    <div className="page colombo-airport-page">
      <PageHero eyebrow={config.heroEyebrow} title={config.heroTitle} description={config.heroDescription} image={config.heroImage || images.blueBeach} alt={config.heroAlt}>
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
        <div className="section__inner">
          <SectionHeader eyebrow="Overview" title={config.introTitle} text={config.introText} />
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Real destinations" title={config.gridTitle} align="left" />
          <div className="destination-showcase-grid">
            {destinations.map((destination) => (
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
          {config.gapNote && <p className="package-price-note">{config.gapNote}</p>}
        </div>
      </section>

      {config.faqs?.length > 0 && (
        <section className="section">
          <div className="section__inner">
            <SectionHeader eyebrow="Common questions" title="Planning your trip" align="left" />
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
          <h2>Ready to plan this part of your trip?</h2>
          <p>Send your interests on WhatsApp, or ask SKY AI to help sequence a route.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(message())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
              <MessageCircle size={19} />
              Ask on WhatsApp
            </a>
            <button className="button button--light" type="button" onClick={() => setPage("tours")}>
              Browse All Tours
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
