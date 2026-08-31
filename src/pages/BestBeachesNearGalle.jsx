import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { findRelatedDestinations } from "../data/destinations";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

// Real, verified relationship from destinations.js — Galle's own
// relatedDestinations list — not a hand-picked or invented set.
const nearbyBeaches = findRelatedDestinations("galle").filter((destination) => destination.image && destination.seoSlug);

function beachRouteMessage(beach) {
  return `Hello SKY Taxi Service & Tours, I want a private route from Galle to ${beach}. Travel date: ___ Number of passengers: ___`;
}

export default function BestBeachesNearGalle({ setPage }) {
  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: "best-beaches-near-galle-page" });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: "best-beaches-near-galle-page" });

  return (
    <div className="page colombo-airport-page">
      <PageHero
        eyebrow="South coast beaches"
        title="Best Beaches Near Galle"
        description="The real south coast beaches SKY regularly drives to from Galle — compared honestly for swimming, surf, and distance, not a generic top-10 list."
        image={images.blueBeach}
        alt="Blue beach on the Sri Lanka south coast"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(beachRouteMessage("the south coast"))} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
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
          <SectionHeader
            eyebrow="From Galle"
            title="Four real beaches within private-driver reach"
            text="Galle itself has beach access near the Fort, but these four nearby towns are where most visitors base themselves for the beach."
          />
          <div className="destination-showcase-grid">
            {nearbyBeaches.map((destination) => (
              <a
                className="reveal destination-showcase-card"
                href={destination.seoSlug}
                key={destination.id}
                onClick={() => trackEvent("destination_clicked", { destination: destination.name, page_source: "best-beaches-near-galle-page" })}
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
            <Reveal className="colombo-airport-route-card">
              <div>
                <h3>Calm, family-friendly swimming</h3>
                <p>Unawatuna — generally the calmer option of the group, close to Galle Fort and Jungle Beach.</p>
                <a href={buildWhatsAppLink(beachRouteMessage("Unawatuna"))} target="_blank" rel="noreferrer">
                  Ask route price
                </a>
              </div>
            </Reveal>
            <Reveal className="colombo-airport-route-card">
              <div>
                <h3>Whale watching &amp; Coconut Tree Hill</h3>
                <p>Mirissa — the south coast's whale watching base, with Coconut Tree Hill nearby.</p>
                <a href={buildWhatsAppLink(beachRouteMessage("Mirissa"))} target="_blank" rel="noreferrer">
                  Ask route price
                </a>
              </div>
            </Reveal>
            <Reveal className="colombo-airport-route-card">
              <div>
                <h3>Surfing</h3>
                <p>Weligama — the main surf-school beach on this stretch of coast, between Mirissa and Galle.</p>
                <a href={buildWhatsAppLink(beachRouteMessage("Weligama"))} target="_blank" rel="noreferrer">
                  Ask route price
                </a>
              </div>
            </Reveal>
            <Reveal className="colombo-airport-route-card">
              <div>
                <h3>Beach resorts, further out</h3>
                <p>Bentota — further north along the coast, known for beach resorts and the Bentota River.</p>
                <a href={buildWhatsAppLink(beachRouteMessage("Bentota"))} target="_blank" rel="noreferrer">
                  Ask route price
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader eyebrow="Planning your beach day" title="How a private route works" align="left" text="A private driver from Galle can include flexible stops at more than one beach in the same day, unlike a fixed public-transport route." />
          <div className="faq-list">
            <article className="faq-item">
              <h3>Can I visit more than one beach in a day?</h3>
              <div>
                <p>Yes — a private route from Galle can include flexible stops, so you can see two or more of these beaches in one day if your schedule allows.</p>
              </div>
            </article>
            <article className="faq-item">
              <h3>Which beach is closest to Galle?</h3>
              <div>
                <p>Unawatuna is the closest of the four, just south of Galle Fort — see the individual taxi service pages above for route details.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Not sure which beach to start with?</h2>
          <p>Send your interests — swimming, surfing, or whale watching — on WhatsApp for a route suggestion.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(beachRouteMessage("the south coast"))} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
              <MessageCircle size={19} />
              Ask on WhatsApp
            </a>
            <button className="button button--light" type="button" onClick={() => setPage("galle-taxi-service")}>
              View Galle Taxi Service
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
