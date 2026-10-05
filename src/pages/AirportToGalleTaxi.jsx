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
    title: "Colombo Airport to Galle taxi",
    text: "Private transfer from Bandaranaike International Airport to Galle with flight details shared in advance, luggage support, and WhatsApp driver confirmation.",
    image: images.airportWelcome,
  },
  {
    title: "Route details and travel time",
    text: "The airport to Galle taxi route usually takes around 2 to 2.5 hours by Southern Expressway depending on traffic, pickup time, and hotel location.",
    image: images.airportTransfer,
  },
  {
    title: "Southern Expressway transfer",
    text: "Travel on the Southern Expressway with a clean private vehicle, comfort breaks when needed, and fair route-based pricing confirmed on WhatsApp.",
    image: images.galle,
  },
  {
    title: "Galle Fort and beach destinations",
    text: "Continue directly to Galle Fort, Unawatuna, Jungle Beach, Ahangama, Weligama, Mirissa, or nearby south coast hotels.",
    image: images.galleFort,
  },
];

const coastalStops = [
  {
    title: "Southern Expressway route",
    text: "A faster coastal transfer route from Colombo Airport to Galle with clean vehicles and local driver support.",
    icon: Route,
  },
  {
    title: "Galle Fort arrival",
    text: "Arrive near Galle Fort, boutique hotels, beach stays, or south coast pickup points with easy WhatsApp coordination.",
    icon: Landmark,
  },
  {
    title: "Beach destination support",
    text: "Use the same private transfer to reach Unawatuna, Jungle Beach, Ahangama, Weligama, Mirissa, and nearby hotels.",
    icon: Palmtree,
  },
];

const vehicles = [
  ["toyota-prius", "Affordable private car for a smooth Colombo Airport to Galle taxi transfer."],
  ["honda-shuttle", "Clean wagon option for airport to Galle taxi rides with extra room for bags."],
  ["honda-vezel", "Comfortable SUV for couples, families, and south coast transfers."],
  ["toyota-kdh-van", "Spacious van for families and groups booking a private transfer to Galle."],
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
    question: "How long does a Colombo Airport to Galle taxi take?",
    answer:
      "A Colombo Airport to Galle taxi usually takes around 2 to 2.5 hours by Southern Expressway depending on traffic, pickup time, comfort stops, and the exact Galle hotel location.",
  },
  {
    question: "Can I book an airport to Galle taxi after a late flight?",
    answer:
      "Yes, you can request one. Share your flight time on WhatsApp and SKY will confirm whether a late-arrival pickup to Galle is available before travel.",
  },
  {
    question: "Does the taxi use the Southern Expressway?",
    answer:
      "Yes. Most private transfers from Colombo Airport to Galle use the Southern Expressway for a faster coastal route, with highway ticket costs confirmed in your WhatsApp quote.",
  },
  {
    question: "Can I continue from Galle to beach destinations?",
    answer:
      "Yes. Your private transfer to Galle can continue to Galle Fort, Unawatuna, Jungle Beach, Ahangama, Weligama, Mirissa, or nearby south coast hotels.",
  },
  {
    question: "Is the Colombo Airport to Galle taxi price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
  },
];

const offer = getAirportConversionOffer("airport-to-galle");

function airportToGalleMessage(topic) {
  return buildWhatsAppMessage({ intent: whatsappIntents.AIRPORT_TRANSFER, pickup: offer.pickupName, destination: offer.destinationName, notes: topic });
}

export default function AirportToGalleTaxi({ setPage }) {
  return (
    <div className="page colombo-airport-page galle-taxi-page airport-to-galle-page">
      <PageHero
        eyebrow="Airport to Galle Taxi"
        title="Colombo Airport to Galle Taxi"
        description="Book a private taxi from Colombo Airport to Galle with private coastal transfer, clean vehicles, local drivers, and WhatsApp booking."
        image={images.galleFort}
        alt="Colombo Airport to Galle taxi private transfer Sri Lanka"
      >
        <AirportRouteHeroPrice offer={offer} />
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(airportToGalleMessage())} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Get Transfer Quote to Galle
          </a>
          <a className="button button--light" href="/galle-taxi-service">
            <Landmark size={18} />
            Galle Taxi Service
          </a>
        </div>
        <div className="premium-hero-badges" aria-label="Airport to Galle taxi benefits">
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

      <section className="section airport-to-galle-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Colombo Airport to Galle transfer</span>
            <h2>Private airport to Galle taxi with private coastal transfer</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book a private Colombo Airport to Galle taxi before arrival. Your driver can meet you at the airport,
              help with luggage, use the Southern Expressway route, and take you to Galle Fort, beach hotels, or nearby south coast destinations.
            </p>
            <div className="colombo-airport-link-row">
              <button type="button" onClick={() => setPage("home")}>
                Homepage
              </button>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/galle-taxi-service">Galle Taxi Service</a>
              <a href="/airport-to-kandy">Airport to Kandy Taxi</a>
              <a href="/airport-to-ella">Airport to Ella Taxi</a>
            </div>
          </Reveal>
          <Reveal className="colombo-airport-summary">
            {coastalStops.map((item) => {
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

      <section className="section section--soft airport-to-galle-route">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Route details and travel time"
            title="Taxi from Colombo airport to Galle via Southern Expressway"
            text="Plan your Galle airport transfer around your flight arrival, luggage, hotel location, highway route, and nearby beach destination."
          />
          <div className="colombo-airport-route-grid">
            {routeDetails.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt="" loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={buildWhatsAppLink(airportToGalleMessage(route.title))} target="_blank" rel="noreferrer" aria-label={`Ask route price — ${route.title}`}>
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section airport-to-galle-vehicles">
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
                  <img src={vehicle.image} alt={`${vehicle.name} airport to Galle taxi`} loading="lazy" />
                  <span>Airport to Galle</span>
                </div>
                <div className="airport-transfer-card__body">
                  <h3>{vehicle.name}</h3>
                  <p>{vehicle.text}</p>
                  <a
                    className="button button--primary airport-transfer-card__button"
                    href={buildWhatsAppLink(airportToGalleMessage(`${vehicle.name} airport to Galle taxi`))}
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

      <section className="section section--soft airport-to-galle-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Current transfer quote</span>
            <h2>Request your Galle airport transfer quote</h2>
            <p>
              Send your flight number, arrival time, Galle hotel or beach destination, passenger count, and luggage details. SKY replies with a current quote; driver details follow after you confirm the transfer.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={buildWhatsAppLink(airportToGalleMessage())} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Get Transfer Quote
              </a>
              <a className="button button--light" href="/galle-taxi-service">
                <Car size={18} />
                Galle Taxi Service
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <AirportContinueJourney destinationName={offer.destinationName} />

      <section className="section airport-to-galle-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Airport to Galle FAQ"
            title="Colombo Airport to Galle Taxi FAQs"
            text="Helpful answers before booking your private airport transfer to Galle."
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

      <RelatedRoutes destinationId="galle" pageSource="airport-to-galle-page" />
    </div>
  );
}
