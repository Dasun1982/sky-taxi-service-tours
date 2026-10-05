import { Car, Clock3, Landmark, MapPinned, MessageCircle, Palmtree, Plane, Route, ShieldCheck } from "lucide-react";
import AirportRouteOffer, { AirportContinueJourney, AirportRouteHeroPrice } from "../components/AirportRouteOffer";
import PageHero from "../components/PageHero";
import RelatedRoutes from "../components/RelatedRoutes";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { findTaxiVehicle } from "../data/vehicles";
import { getAirportConversionOffer } from "../data/airportConversion.js";
import { buildWhatsAppLink } from "../utils/whatsapp";
import { buildWhatsAppMessage, whatsappIntents } from "../utils/whatsappQuote.js";
import { FaqItem } from "../components/FaqList";

const routeDetails = [
  {
    title: "Colombo Airport to Unawatuna taxi",
    text: "Private transfer from Bandaranaike International Airport to Unawatuna with flight details shared in advance, luggage support, and WhatsApp driver confirmation.",
    image: images.airportWelcome,
  },
  {
    title: "Route details and travel time",
    text: "The airport to Unawatuna taxi route usually takes around 2 to 2.5 hours by Southern Expressway depending on traffic, pickup time, and hotel location.",
    image: images.airportTransfer,
  },
  {
    title: "Southern Expressway beach transfer",
    text: "Travel toward the south coast using the Southern Expressway with a clean private vehicle, fair route quote, and local driver support.",
    image: images.blueBeach,
  },
  {
    title: "Unawatuna Beach, Dalawella, Jungle Beach, and Galle Fort",
    text: "Continue directly to Unawatuna Beach, Dalawella, Jungle Beach, Galle Fort, or nearby south coast hotels and villas.",
    image: images.jungleBeach,
  },
];

const beachStops = [
  {
    title: "Unawatuna Beach transfer",
    text: "Arrive directly at Unawatuna beach hotels, guesthouses, villas, or restaurants with simple WhatsApp coordination.",
    icon: Palmtree,
  },
  {
    title: "Dalawella and Jungle Beach",
    text: "Book a private transfer to Dalawella, Jungle Beach, Mihiripenna, or nearby coastal stays around Unawatuna.",
    icon: MapPinned,
  },
  {
    title: "Galle Fort nearby",
    text: "Add Galle Fort drop-off, hotel pickup, or south coast connections after your Unawatuna airport transfer.",
    icon: Landmark,
  },
];

const vehicles = [
  ["toyota-prius", "Affordable private car for a smooth Colombo Airport to Unawatuna taxi transfer."],
  ["honda-shuttle", "Clean wagon option for airport to Unawatuna taxi rides with extra room for bags."],
  ["honda-vezel", "Comfortable SUV for couples, families, and south coast beach transfers."],
  ["toyota-kdh-van", "Spacious van for families and groups booking a private transfer to Unawatuna."],
].map(([id, text]) => {
  const vehicle = findTaxiVehicle(id);
  return {
    name: vehicle.name,
    image: vehicle.image,
    text,
  };
});

const faqs = [
  {
    question: "How long does a Colombo Airport to Unawatuna taxi take?",
    answer:
      "A Colombo Airport to Unawatuna taxi usually takes around 2 to 2.5 hours by Southern Expressway depending on traffic, pickup time, comfort stops, and the exact Unawatuna hotel location.",
  },
  {
    question: "Can I book an airport to Unawatuna taxi after a late flight?",
    answer:
      "Yes, you can request one. Share your flight time on WhatsApp and SKY will confirm whether a late-arrival pickup to Unawatuna is available before travel.",
  },
  {
    question: "Does the taxi use the Southern Expressway?",
    answer:
      "Yes. Most private transfers from Colombo Airport to Unawatuna use the Southern Expressway for a faster beach transfer, with highway ticket costs confirmed in your WhatsApp quote.",
  },
  {
    question: "Can I continue from Unawatuna to Dalawella, Jungle Beach, or Galle Fort?",
    answer:
      "Yes. Your private transfer to Unawatuna can continue to Dalawella, Jungle Beach, Mihiripenna, Galle Fort, or nearby south coast hotels.",
  },
  {
    question: "Is the Colombo Airport to Unawatuna taxi price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
  },
];

const offer = getAirportConversionOffer("airport-to-unawatuna");

function airportToUnawatunaMessage(topic) {
  return buildWhatsAppMessage({ intent: whatsappIntents.AIRPORT_TRANSFER, pickup: offer.pickupName, destination: offer.destinationName, notes: topic });
}

export default function AirportToUnawatunaTaxi({ setPage }) {
  return (
    <div className="page colombo-airport-page unawatuna-taxi-page airport-to-unawatuna-page">
      <PageHero
        eyebrow="Airport to Unawatuna Taxi"
        title="Colombo Airport to Unawatuna Taxi"
        description="Book a private taxi from Colombo Airport to Unawatuna with private beach transfer, clean vehicles, local drivers, and WhatsApp booking."
        image={images.jungleBeach}
        alt="Colombo Airport to Unawatuna taxi private beach transfer Sri Lanka"
      >
        <AirportRouteHeroPrice offer={offer} />
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(airportToUnawatunaMessage())} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Get Transfer Quote to Unawatuna
          </a>
          <a className="button button--light" href="/unawatuna-taxi-service">
            <Palmtree size={18} />
            Unawatuna Taxi Service
          </a>
        </div>
        <div className="premium-hero-badges" aria-label="Airport to Unawatuna taxi benefits">
          <span>
            <Plane size={16} />
            Airport pickup
          </span>
          <span>
            <Route size={16} />
            Expressway route
          </span>
          <span>
            <ShieldCheck size={16} />
            Private driver
          </span>
          <span>
            <Clock3 size={16} />
            WhatsApp
          </span>
        </div>
      </PageHero>

      <AirportRouteOffer offer={offer} />

      <section className="section airport-to-unawatuna-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Colombo Airport to Unawatuna transfer</span>
            <h2>Private airport to Unawatuna taxi with private south coast transfer</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book a private Colombo Airport to Unawatuna taxi before arrival. Your driver can meet you at the airport,
              help with luggage, use the Southern Expressway route, and take you to Unawatuna Beach, Dalawella, Jungle Beach, Galle Fort, or nearby hotels.
            </p>
            <div className="colombo-airport-link-row">
              <button type="button" onClick={() => setPage("home")}>
                Homepage
              </button>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/unawatuna-taxi-service">Unawatuna Taxi Service</a>
              <a href="/galle-taxi-service">Galle Taxi Service</a>
              <a href="/airport-to-galle">Airport to Galle Taxi</a>
              <a href="/airport-to-mirissa">Airport to Mirissa Taxi</a>
            </div>
          </Reveal>
          <Reveal className="colombo-airport-summary">
            {beachStops.map((item) => {
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

      <section className="section section--soft airport-to-unawatuna-route">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Route details and travel time"
            title="Taxi from Colombo airport to Unawatuna via Southern Expressway"
            text="Plan your Unawatuna airport transfer around your flight arrival, luggage, hotel location, highway route, beach stay, and Galle area plans."
          />
          <div className="colombo-airport-route-grid">
            {routeDetails.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt="" loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={buildWhatsAppLink(airportToUnawatunaMessage(route.title))} target="_blank" rel="noreferrer" aria-label={`Ask route price — ${route.title}`}>
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section airport-to-unawatuna-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="More fleet examples"
            title="Ask SKY about a specific vehicle"
            text="These are vehicle examples. SKY confirms the exact model and current quote; other models do not inherit the class prices above."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} airport to Unawatuna taxi`} loading="lazy" />
                  <span>Airport to Unawatuna</span>
                </div>
                <div className="airport-transfer-card__body">
                  <h3>{vehicle.name}</h3>
                  <p>{vehicle.text}</p>
                  <a
                    className="button button--primary airport-transfer-card__button"
                    href={buildWhatsAppLink(airportToUnawatunaMessage(`${vehicle.name} airport to Unawatuna taxi`))}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ask about this vehicle — ${vehicle.name}`}
                  >
                    <MessageCircle size={18} />
                    Ask About This Vehicle
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft airport-to-unawatuna-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Current transfer quote</span>
            <h2>Request your Unawatuna airport transfer quote</h2>
            <p>
              Send your flight number, arrival time, Unawatuna hotel or beach destination, passenger count, and luggage details. SKY replies with a current quote; driver details follow after you confirm the transfer.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={buildWhatsAppLink(airportToUnawatunaMessage())} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Get Transfer Quote
              </a>
              <a className="button button--light" href="/airport-to-galle">
                <Car size={18} />
                Airport to Galle
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <AirportContinueJourney destinationName={offer.destinationName} />

      <section className="section airport-to-unawatuna-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Airport to Unawatuna FAQ"
            title="Colombo Airport to Unawatuna Taxi FAQs"
            text="Helpful answers before booking your private airport transfer to Unawatuna."
          />
          <div className="faq-list faq-accordion">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question}>
                <p>{faq.answer}</p>
              </FaqItem>
            ))}
          </div>
        </div>
      </section>

      <RelatedRoutes destinationId="unawatuna" pageSource="airport-to-unawatuna-page" />
    </div>
  );
}
