import { ArrowRight, Car, MapPinned, MessageCircle, Sparkles } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { findDestination } from "../data/destinations";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

const galle = findDestination("galle");
const ella = findDestination("ella");

function routeMessage() {
  return "Hello SKY Taxi Service & Tours, I want a private transfer from Galle to Ella. Pickup location in Galle: ___ Date/time: ___ Number of passengers: ___";
}

export default function GalleToElla({ setPage }) {
  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: "galle-to-ella-page" });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: "galle-to-ella-page" });

  return (
    <div className="page colombo-airport-page">
      <PageHero
        eyebrow="South coast to hill country"
        title="Galle to Ella"
        description="A private-driver travel guide from the south coast to the hill country — what the route covers, what to expect, and how to get an exact quote."
        image={images.nineArchBridge}
        alt="Nine Arch Bridge surrounded by Ella hill country"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(routeMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
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
            <h2>South coast to hill country, in one continuous trip</h2>
            <p>
              Galle to Ella is a real route SKY drivers cover — from Galle's fort city and beaches up into Ella's hill country, with Little
              Adam's Peak, the Nine Arch Bridge, and tea country views waiting at the other end. There's no single fixed journey time for this
              leg: it depends on your exact pickup point in Galle, road conditions, and any stops along the way. Send your travel date and
              pickup location on WhatsApp for a realistic estimate before booking.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/galle-taxi-service">Galle Taxi Service</a>
              <a href="/ella-taxi-service">Ella Taxi Service</a>
              <a href="/private-driver-sri-lanka">Private Driver Sri Lanka</a>
              <a href="/best-beaches-near-galle">Best Beaches Near Galle</a>
              <a href="/how-many-days-in-sri-lanka">How Many Days Do You Need?</a>
            </div>
          </Reveal>
          <Reveal className="colombo-airport-summary">
            <article>
              <span>
                <Car size={20} />
              </span>
              <h3>One private vehicle</h3>
              <p>The same driver and vehicle for the whole journey — no transfer partway, unlike most public transport options.</p>
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
            <img src={galle.image} alt={galle.alt} loading="lazy" />
          </Reveal>
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Starting point</span>
            <h2>Galle</h2>
            <p>{galle.description}</p>
            <ul>
              {galle.popularFor.map((item) => (
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
            <h2>Ella</h2>
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
          <Reveal className="image-panel">
            <img src={ella.image} alt={ella.alt} loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Practical advice" title="What to know before you book" align="left" />
          <div className="faq-list">
            <article className="faq-item">
              <h3>Is there a direct train or bus?</h3>
              <div>
                <p>
                  Public transport between the south coast and hill country typically involves a transfer rather than one direct route. A
                  private driver avoids that transfer and keeps the trip to one continuous journey.
                </p>
              </div>
            </article>
            <article className="faq-item">
              <h3>Can we stop along the way?</h3>
              <div>
                <p>Yes — tell your driver what you'd like to see, and stops can be added within reason without booking a separate trip.</p>
              </div>
            </article>
            <article className="faq-item">
              <h3>How is the price worked out?</h3>
              <div>
                <p>
                  There's no fixed online price for this route. Final pricing depends on your exact pickup point, vehicle type, and passenger
                  count, confirmed on WhatsApp before travel.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__inner center-block">
          <h2>Ready to book this route?</h2>
          <p>Send your pickup point in Galle and travel date on WhatsApp for a route-based quote.</p>
          <div className="cta-actions cta-actions--center">
            <a className="button button--primary" href={buildWhatsAppLink(routeMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
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
