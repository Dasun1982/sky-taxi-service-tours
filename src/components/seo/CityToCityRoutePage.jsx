import { ArrowRight, Car, MapPinned, MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../PageHero";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import { findDestination } from "../../data/destinations";
import { cityToCityRoutes } from "../../data/seo/cityRoutes";
import { aiPlannerUrl } from "../../data/business";
import { buildWhatsAppLink } from "../../utils/whatsapp";
import { trackEvent } from "../../utils/analytics";

/**
 * Shared template for city-to-city route guides (the pattern
 * GalleToElla.jsx established) — real endpoints only, and NEVER a
 * fabricated journey time. routes.js's own airport-anchored times don't
 * cover city-to-city legs, so every page here uses the same honest
 * "confirmed on WhatsApp, varies by pickup point and stops" framing
 * routes.js itself falls back to for any unverified time.
 */
export default function CityToCityRoutePage({ pageKey, setPage }) {
  const config = cityToCityRoutes[pageKey];
  if (!config) return null;
  const from = findDestination(config.fromId);
  const to = findDestination(config.toId);
  if (!from || !to) return null;

  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: `${pageKey}-page` });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: `${pageKey}-page` });
  const message = () => `Hello SKY Taxi Service & Tours, I want a private transfer from ${from.name} to ${to.name}. Pickup location: ___ Date/time: ___ Number of passengers: ___`;

  return (
    <div className="page colombo-airport-page">
      <PageHero eyebrow={config.heroEyebrow} title={`${from.name} to ${to.name}`} description={config.heroDescription} image={from.image} alt={from.alt}>
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(message())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
            <MessageCircle size={19} />
            Ask Route Price
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
            <span className="eyebrow">The route</span>
            <h2>{config.introHeadline}</h2>
            <p>{config.introText}</p>
            <p>
              There's no single fixed journey time for this leg — it depends on your exact pickup point, road conditions, and any stops along the
              way. Send your travel date and pickup location on WhatsApp for a realistic estimate before booking.
            </p>
            <div className="colombo-airport-link-row">
              {config.relatedLinks.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal className="colombo-airport-summary">
            <article>
              <span>
                <Car size={20} />
              </span>
              <h3>One private vehicle</h3>
              <p>The same driver and vehicle for the whole journey, unlike most public transport options.</p>
            </article>
            <article>
              <span>
                <MapPinned size={20} />
              </span>
              <h3>Flexible stops</h3>
              <p>Add a viewpoint, food stop, or photo pause along the way — a private route isn't locked to a fixed schedule.</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner split-layout">
          <Reveal className="image-panel">
            <img src={from.image} alt={from.alt} loading="lazy" />
          </Reveal>
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Starting point</span>
            <h2>{from.name}</h2>
            <p>{from.description}</p>
            <ul>
              {from.popularFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Destination</span>
            <h2>{to.name}</h2>
            <p>{to.description}</p>
            <ul>
              {to.popularFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {to.seoSlug && (
              <button className="text-button" type="button" onClick={() => setPage(config.toPage)}>
                View {to.name} taxi service
                <ArrowRight size={16} />
              </button>
            )}
          </Reveal>
          <Reveal className="image-panel">
            <img src={to.image} alt={to.alt} loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Practical advice" title="What to know before you book" align="left" />
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

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Ready to book this route?</h2>
          <p>Send your pickup point and travel date on WhatsApp for a route-based quote.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(message())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
              <MessageCircle size={19} />
              Ask Route Price
            </a>
            <button className="button button--light" type="button" onClick={() => setPage("private-driver-sri-lanka")}>
              View Private Driver Service
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
