import { ArrowRight, Compass, Heart, MessageCircle, Sparkles, UserCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import RelatedDestinations from "../components/RelatedDestinations";
import RelatedTours from "../components/RelatedTours";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { findService } from "../data/services";
import { routes } from "../data/routes";
import { findDestination } from "../data/destinations";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { setBookingContext } from "../utils/bookingContext";
import { trackEvent } from "../utils/analytics";

const driverOnly = findService("driver-only");
const driverGuide = findService("driver-guide");

const howItWorks = [
  { label: "Tell us your route", text: "Send your dates, places, and travel style on WhatsApp or through SKY AI." },
  { label: "Choose driver or driver + guide", text: "Pick the option that fits — transportation only, or transportation plus local guiding." },
  { label: "Request your trip", text: "We confirm your vehicle, driver, and (if chosen) guide availability with a fair quote." },
  { label: "Travel privately", text: "Your private driver arrives, and your journey begins on your schedule." },
];

const whoThisIsFor = [
  { title: "First-time visitors", text: "Get local route knowledge and, where useful, a specialist guide at key sites.", icon: Compass },
  { title: "Families", text: "Comfortable private vehicles with flexible stops for kids and luggage.", icon: Users },
  { title: "Couples", text: "A relaxed, private way to see Sri Lanka at your own pace.", icon: Heart },
  { title: "Culture and history travelers", text: "Add a specialist licensed guide for temples, ancient cities, and heritage stops.", icon: UserCheck },
];

const cultureRouteSlugs = ["airport-to-kandy", "airport-to-sigiriya", "airport-to-dambulla"];
const featuredRoutes = routes.filter((route) => cultureRouteSlugs.includes(route.slug));

function driverGuideMessage(topic = "driver or driver + guide service") {
  return `Hello SKY Taxi Service & Tours, I want to request a ${topic}. Travel dates: ___ Places I want to visit: ___ Number of passengers: ___ Do I need a guide at any specific site: ___`;
}

export default function DriverGuideSriLanka({ setPage }) {
  const requestService = (service) => {
    trackEvent("service_selected", { service_id: service.id, page_source: "driver-guide-page" });
    setBookingContext({ tripType: service.bookingTripType, message: `${service.name} request`, source: "driver-guide-page" });
    trackEvent("booking_started", { source: "driver-guide-page" });
    setPage("booking");
  };

  const openAiPlanner = () => trackEvent("ai_planner_opened", { page_source: "driver-guide-page" });
  const clickWhatsApp = () => trackEvent("whatsapp_clicked", { page_source: "driver-guide-page" });

  return (
    <div className="page colombo-airport-page driver-guide-page">
      <PageHero
        eyebrow="Private Driver + Guide"
        title="Private Driver + Guide in Sri Lanka"
        description="Travel with a private driver, and arrange a specialist licensed local guide when you want deeper cultural or historical insight. Not every driver is a licensed guide — here's the honest difference."
        image={images.kandyTemple}
        alt="Temple of the Tooth in Kandy, a common Driver + Guide route"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={aiPlannerUrl} target="_blank" rel="noreferrer" onClick={openAiPlanner}>
            <Sparkles size={19} />
            Plan with SKY AI
          </a>
          <button className="button button--light" type="button" onClick={() => requestService(driverGuide)} aria-label="Request this service — Driver + Guide">
            Request this service
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Driver + Guide benefits">
          <span>
            <Users size={16} />
            Private driver
          </span>
          <span>
            <UserCheck size={16} />
            Specialist guide arranged
          </span>
          <span>
            <Compass size={16} />
            Your route, your pace
          </span>
        </div>
      </PageHero>

      <section className="section driver-guide-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Two honest choices</span>
            <h2>Driver Only, or Driver + Guide</h2>
            <p>
              SKY Taxi Service & Tours provides a private driver and vehicle for every trip. If you already know where you're going, that's all
              you need. If you want deeper explanation at temples, ancient cities, or cultural sites, a specialist licensed local guide can be
              arranged alongside your driver — subject to availability, confirmed on WhatsApp.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/transport">Transportation</a>
              <a href="/sri-lanka-tour-driver">Sri Lanka Tour Driver</a>
              <a href="/private-driver-sri-lanka">Private Driver Sri Lanka</a>
              <a href="/tours">Private Tours</a>
            </div>
          </Reveal>
          <Reveal className="colombo-airport-summary">
            {whoThisIsFor.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <span>
                    <Icon size={20} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Compare your options"
            title="Choose your service"
            text="Both include a private air-conditioned vehicle and an experienced local driver. The difference is what happens at the sites you visit."
            align="left"
          />
          <div className="transport-option-grid">
            {[driverOnly, driverGuide].map((service) => (
              <Reveal className="transport-option-card" key={service.id}>
                <img src={service.id === "driver-guide" ? images.sigiriya : images.toyotaKdh} alt={service.name} loading="lazy" />
                <div className="transport-option-card__body">
                  <span className="transport-option-card__icon">{service.id === "driver-guide" ? <UserCheck size={20} /> : <Users size={20} />}</span>
                  <h3>{service.name}</h3>
                  <p>{service.shortDescription}</p>
                  <ul className="transport-option-card__includes">
                    {service.included.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <span className="transport-option-card__price">{service.pricingBasis}</span>
                  <div className="transport-option-card__actions">
                    <button
                      className="button button--primary"
                      type="button"
                      onClick={() => requestService(service)}
                      aria-label={`Request this service — ${service.name}`}
                    >
                      Request this service
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader eyebrow="How it works" title="From request to travel" align="left" />
          <Reveal className="trip-flow-strip">
            {howItWorks.map((step, index) => (
              <div className="trip-flow-strip__step" key={step.label}>
                <span className="trip-flow-strip__number">{String(index + 1).padStart(2, "0")}</span>
                <span className="trip-flow-strip__label">{step.label}</span>
                <span className="trip-flow-strip__text">{step.text}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Route examples"
            title="Routes where a guide adds the most"
            text="Cultural Triangle and heritage routes are where travelers most often add a specialist guide to their private driver."
            align="left"
          />
          <div className="related-destinations-grid">
            {featuredRoutes.map((route) => {
              const destination = findDestination(route.destinationId);
              if (!destination?.image) return null;
              return (
                <a
                  className="reveal destination-showcase-card"
                  href={`/${route.slug}`}
                  aria-label={`Airport to ${route.destinationName}`}
                  key={route.slug}
                  onClick={() => trackEvent("destination_clicked", { destination: route.destinationName, page_source: "driver-guide-page" })}
                >
                  <img src={destination.image} alt={destination.alt} loading="lazy" />
                  <div>
                    <span>{route.travelTime}</span>
                    <h3>Airport to {route.destinationName}</h3>
                    <p>Driver only or Driver + Guide available</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section driver-guide-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <div>
              <span className="eyebrow">Not sure which one you need?</span>
              <h2>Let SKY AI help you decide</h2>
              <p>Tell SKY AI your route and interests — it can explain where a guide adds the most value, then send the trip to SKY for a real quote.</p>
            </div>
            <div className="cta-actions">
              <a className="button button--primary" href={aiPlannerUrl} target="_blank" rel="noreferrer" onClick={openAiPlanner}>
                <Sparkles size={18} />
                Plan with SKY AI
              </a>
              <a className="button button--light" href={buildWhatsAppLink(driverGuideMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
                <MessageCircle size={18} />
                Talk to SKY on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section driver-guide-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Driver + Guide FAQ"
            title="Questions before you choose"
            text="Honest answers about what's actually included."
          />
          <div className="faq-list">
            {[...driverOnly.faq, ...driverGuide.faq, {
              question: "Is the price fixed online?",
              answer: "No. The final price is confirmed on WhatsApp depending on route, dates, vehicle type, number of days, and whether a guide is arranged.",
            }].map((faq) => (
              <article className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <div>
                  <p>{faq.answer}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="colombo-airport-link-row">
            <a href="/ai-trip-planner">
              How SKY AI works
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <RelatedTours destinationId="kandy" soft />
      <RelatedDestinations destinationId="kandy" soft={false} title="Popular Driver + Guide destinations" />
    </div>
  );
}
