import { ArrowRight, Car, MessageCircle, Plane, Sparkles, UserCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { taxiRatePerKm } from "../data/pricing";
import { findDestination } from "../data/destinations";
import { routes as airportRoutes, transportOptionLabels } from "../data/routes";
import { aiPlannerUrl } from "../data/business";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { setBookingContext } from "../utils/bookingContext";
import { trackEvent } from "../utils/analytics";

const transportGroups = [
  {
    label: "Transport only",
    text: "You already know your route — SKY provides the private vehicle and driver.",
    options: [
      {
        title: "Airport Transfer",
        icon: Plane,
        image: images.airportTransfer,
        text: "One-way pickup or drop-off between Colombo Bandaranaike Airport and your hotel, with flight-time checking.",
        includes: ["Private driver", "Flight-time checking", "Fixed route pricing"],
        priceBasis: "From $49.99 per route",
        href: "/airport",
        tripType: "Airport transfer",
      },
      {
        title: "Private Taxi",
        icon: Car,
        image: images.toyotaPrius,
        text: "Private taxi for short rides, city trips, or a single route between two places.",
        includes: ["Private driver", "Clean cars, SUVs, or vans", "Metered by distance"],
        priceBasis: `${taxiRatePerKm.oneWay} · per km`,
        href: "/taxi",
        tripType: "Taxi ride",
      },
    ],
  },
  {
    label: "Transport + driver, or driver + guide",
    text: "The same local driver stays with you across the trip. A specialist licensed site guide can also be arranged where you want deeper cultural or historical explanation.",
    options: [
      {
        title: "Private Driver",
        icon: Users,
        image: images.toyotaKdh,
        text: "One driver and vehicle for your whole trip — day tours or multi-day round tours, with flexible stops and real local route knowledge along the way.",
        includes: ["Same driver every day", "Flexible daily stops", "Day tour or round tour routes"],
        priceBasis: "Price on request",
        href: "/sri-lanka-tour-driver",
        tripType: "Driver only",
      },
      {
        title: "Driver + Guide",
        icon: UserCheck,
        image: images.sigiriya,
        text: "Your private driver, plus a specialist licensed site guide arranged for the sites where deeper history or cultural context adds the most.",
        includes: ["Private driver included", "Licensed guide arranged where useful", "Best for culture/history-focused days"],
        priceBasis: "Price on request",
        href: "/driver-guide-sri-lanka",
        tripType: "Driver + Guide",
      },
    ],
  },
];

function transportMessage() {
  return "Hello SKY Taxi Service & Tours, I want to compare transportation options for my Sri Lanka trip. My route/dates: ___ Number of passengers: ___";
}

export default function Transport({ setPage }) {
  const requestTransport = (option) => {
    trackEvent("transport_clicked", { transport_type: option.tripType, page_source: "transport-page" });
    setBookingContext({ tripType: option.tripType, message: `${option.title} request`, source: "transport-page" });
    trackEvent("booking_started", { source: "transport-page" });
    setPage("booking");
  };

  const openAiPlanner = () => {
    trackEvent("ai_planner_opened", { page_source: "transport-page" });
  };

  const clickWhatsApp = () => {
    trackEvent("whatsapp_clicked", { page_source: "transport-page" });
  };

  return (
    <div className="page transport-page">
      <PageHero
        eyebrow="SKY Transportation"
        title="Choose how you want to travel around Sri Lanka"
        description="Airport transfer, private taxi, private driver, or driver + guide — compare what's actually included before you choose, then confirm a fair price on WhatsApp."
        image={images.toyotaKdh}
        alt="Toyota KDH van used for SKY Taxi Service & Tours transfers"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={aiPlannerUrl} target="_blank" rel="noreferrer" onClick={openAiPlanner}>
            <Sparkles size={19} />
            Plan my Sri Lanka trip
          </a>
          <a className="button button--light" href={buildWhatsAppLink(transportMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
            <MessageCircle size={18} />
            Talk to SKY on WhatsApp
          </a>
        </div>
      </PageHero>

      {transportGroups.map((group) => (
        <section className={group.label === "Transport only" ? "section" : "section section--soft"} key={group.label}>
          <div className="section__inner">
            <SectionHeader eyebrow="Compare your options" title={group.label} text={group.text} align="left" />
            <div className="transport-option-grid">
              {group.options.map((option) => {
                const Icon = option.icon;
                return (
                  <Reveal className="transport-option-card" key={option.title}>
                    <img src={option.image} alt="" loading="lazy" />
                    <div className="transport-option-card__body">
                      <span className="transport-option-card__icon">
                        <Icon size={20} />
                      </span>
                      <h3>{option.title}</h3>
                      <p>{option.text}</p>
                      <ul className="transport-option-card__includes">
                        {option.includes.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <span className="transport-option-card__price">{option.priceBasis}</span>
                      <div className="transport-option-card__actions">
                        <button
                          className="button button--primary"
                          type="button"
                          onClick={() => requestTransport(option)}
                          aria-label={`Request this transport — ${option.title}`}
                        >
                          Request this transport
                        </button>
                        <a className="text-button" href={option.href} aria-label={`View details — ${option.title}`}>
                          View details
                          <ArrowRight size={16} />
                        </a>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Route intelligence"
            title="Popular Colombo Airport journeys"
            text="Real travel-time ranges for SKY's most requested airport routes. Every route supports all four transport options above — final price is always confirmed on WhatsApp."
            align="left"
          />
          <div className="related-destinations-grid">
            {airportRoutes.map((route) => {
              const destination = findDestination(route.destinationId);
              if (!destination?.image) return null;
              return (
                <a
                  className="reveal destination-showcase-card"
                  href={`/${route.slug}`}
                  aria-label={`Colombo Airport to ${route.destinationName}`}
                  key={route.slug}
                  onClick={() => trackEvent("destination_clicked", { destination: route.destinationName, page_source: "transport-page" })}
                >
                  <img src={destination.image} alt={destination.alt} loading="lazy" />
                  <div>
                    <span>{route.travelTime}</span>
                    <h3>Airport to {route.destinationName}</h3>
                    <p>{route.transportOptions.map((option) => transportOptionLabels[option]).join(" · ")}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <SectionHeader eyebrow="Deciding how to get around" title="Transport planning guides" align="left" />
          <div className="colombo-airport-link-row">
            <a href="/is-a-private-driver-worth-it">Is a Private Driver Worth It?</a>
            <a href="/private-driver-vs-rental-car">Private Driver vs Rental Car</a>
            <a href="/train-vs-private-car-sri-lanka">Train vs Private Car</a>
            <a href="/how-to-travel-around-sri-lanka">How to Travel Around Sri Lanka</a>
            <a href="/can-i-travel-sri-lanka-without-a-car">Travel Without a Car</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <div>
              <span className="eyebrow">Not sure what transport you need?</span>
              <h2>Let SKY AI plan it</h2>
              <p>Tell SKY AI your route, days, and travel style — it can explain where a private vehicle helps most, then send the trip to SKY for a real quote.</p>
            </div>
            <div className="cta-actions">
              <a className="button button--primary" href={aiPlannerUrl} target="_blank" rel="noreferrer" onClick={openAiPlanner}>
                <Sparkles size={18} />
                Plan my Sri Lanka trip
              </a>
              <a className="button button--light" href={buildWhatsAppLink(transportMessage())} target="_blank" rel="noreferrer" onClick={clickWhatsApp}>
                <MessageCircle size={18} />
                Talk to SKY on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
