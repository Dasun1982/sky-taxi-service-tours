import {
  Car,
  Clock3,
  Landmark,
  Luggage,
  MapPinned,
  MessageCircle,
  Mountain,
  Palmtree,
  Plane,
  Route,
  ShieldCheck,
  Users,
} from "lucide-react";
import PageHero from "../PageHero";
import RelatedRoutes from "../RelatedRoutes";
import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import { airportTransferTowns } from "../../data/seo/airportTransfers";
import { findTaxiVehicle } from "../../data/vehicles";
import { buildWhatsAppLink } from "../../utils/whatsapp";

const icons = {
  plane: Plane,
  mapPinned: MapPinned,
  route: Route,
  palmtree: Palmtree,
  shieldCheck: ShieldCheck,
  mountain: Mountain,
  landmark: Landmark,
};

const vehicleIds = ["toyota-prius", "honda-shuttle", "honda-vezel", "toyota-kdh-van"];

export default function AirportTransferLanding({ townId, setPage }) {
  const town = airportTransferTowns[townId];
  if (!town) return null;

  const message = (topic = `Colombo Airport to ${town.townName} taxi`) =>
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Flight number: ___ Arrival date/time: ___ Drop-off in ${town.townName}: ___ Number of passengers: ___ Luggage: ___`;

  const vehicles = vehicleIds.map((id, index) => {
    const vehicle = findTaxiVehicle(id);
    return {
      name: vehicle.name,
      image: vehicle.image,
      passengers: vehicle.passengerCapacity,
      luggage: vehicle.routeLuggageNote,
      text: town.vehicleBlurbs[index],
    };
  });

  return (
    <div className={`page colombo-airport-page airport-to-${townId}-page`}>
      <PageHero eyebrow={`Airport to ${town.townName} Taxi`} title={town.heroTitle} description={town.heroDescription} image={town.heroImage} alt={town.heroAlt}>
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(message())} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Airport to {town.townName}
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Car size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label={`Airport to ${town.townName} taxi benefits`}>
          <span>
            <Plane size={16} />
            Airport pickup
          </span>
          <span>
            <Route size={16} />
            {town.badgeText}
          </span>
          <span>
            <ShieldCheck size={16} />
            Private driver
          </span>
          <span>
            <Clock3 size={16} />
            24/7 WhatsApp
          </span>
        </div>
      </PageHero>

      <section className="section">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">{town.introEyebrow}</span>
            <h2>{town.introTitle}</h2>
            <p>{town.introText}</p>
            <div className="colombo-airport-link-row">
              <button type="button" onClick={() => setPage("home")}>
                Homepage
              </button>
              {town.relatedLinks.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal className="colombo-airport-summary">
            {town.summaryStops.map((item) => {
              const Icon = icons[item.icon] || Route;
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
            eyebrow="Route details and travel time"
            title={`Taxi from Colombo airport to ${town.townName}`}
            text={town.travelTimeText}
          />
          <div className="colombo-airport-route-grid">
            {town.routeDetails.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt="" loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={buildWhatsAppLink(message(route.title))} target="_blank" rel="noreferrer" aria-label={`Ask route price — ${route.title}`}>
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title={`Clean vehicles for your private transfer to ${town.townName}`}
            text={`Choose a private car, SUV, or van for airport to ${town.townName} taxi service, luggage needs, families, and comfortable travel.`}
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} airport to ${town.townName} taxi`} loading="lazy" />
                  <span>Airport to {town.townName}</span>
                </div>
                <div className="airport-transfer-card__body">
                  <h3>{vehicle.name}</h3>
                  <div className="airport-transfer-card__meta">
                    <span>
                      <Users size={16} />
                      {vehicle.passengers}
                    </span>
                    <span>
                      <Luggage size={16} />
                      {vehicle.luggage}
                    </span>
                  </div>
                  <p>{vehicle.text}</p>
                  <a
                    className="button button--primary airport-transfer-card__button"
                    href={buildWhatsAppLink(message(`${vehicle.name} airport to ${town.townName} taxi`))}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Book This Vehicle — ${vehicle.name}`}
                  >
                    <MessageCircle size={18} />
                    Book This Vehicle
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">24/7 WhatsApp booking</span>
            <h2>Book your {town.townName} airport transfer</h2>
            <p>
              Send your flight number, arrival time, {town.townName} hotel or drop-off place, passenger count, and luggage details. We will reply with a fair
              route-based quote and confirm your driver.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={buildWhatsAppLink(message())} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Book on WhatsApp
              </a>
              <a className="button button--light" href="/airport-transfer-sri-lanka">
                <Plane size={18} />
                Airport Transfers
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionHeader
            eyebrow={`Airport to ${town.townName} FAQ`}
            title={`Colombo Airport to ${town.townName} taxi questions`}
            text={`Helpful answers before booking your private airport transfer to ${town.townName}.`}
          />
          <div className="faq-list">
            {town.faqs.map((faq) => (
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

      <RelatedRoutes destinationId={townId} pageSource={`airport-to-${townId}-page`} />
    </div>
  );
}
