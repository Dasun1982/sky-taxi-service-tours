import { Car, Clock3, Home, Landmark, Luggage, MapPinned, MessageCircle, Mountain, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import RelatedDestinations from "../components/RelatedDestinations";
import RelatedTours from "../components/RelatedTours";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { findTaxiVehicle } from "../data/vehicles";
import { buildWhatsAppLink } from "../utils/whatsapp";

const routeCards = [
  {
    title: "Colombo airport to Dambulla taxi",
    text: "Book a private Colombo airport to Dambulla taxi with flight-time checking, luggage space, and WhatsApp confirmation before pickup.",
    image: images.airportWelcome,
  },
  {
    title: "Dambulla Cave Temple route",
    text: "Travel by Dambulla taxi to the Cave Temple's Buddhist murals and statues, with nearby Sigiriya Rock Fortress and Pidurangala viewpoints.",
    image: images.dambulla,
  },
  {
    title: "Cultural Triangle stops",
    text: "Plan a taxi to Dambulla with optional stops at Matale, Mihintale, Habarana, or Sigiriya depending on your route and schedule.",
    image: images.sigiriya,
  },
  {
    title: "Private driver Dambulla support",
    text: "Choose a friendly private driver Dambulla service for airport transfers, hotel pickups, day trips, and round tours around Sri Lanka.",
    image: images.pidurangala,
  },
];

const vehicles = [
  ["toyota-prius", "Affordable private car for a clean and comfortable Dambulla taxi ride."],
  ["honda-shuttle", "Good option for airport transfers, hotel pickups, and taxi to Dambulla routes."],
  ["honda-vezel", "Comfortable SUV for couples, families, and Cultural Triangle trips."],
  ["toyota-kdh-van", "Spacious van for groups, families, airport transfers, and Dambulla tours."],
].map(([id, text]) => {
  const vehicle = findTaxiVehicle(id);
  return {
    name: vehicle.name,
    image: vehicle.image,
    passengers: vehicle.passengerCapacity,
    luggage: vehicle.routeLuggageNote,
    text,
  };
});

const highlights = [
  {
    title: "Dambulla Cave Temple",
    text: "Visit the Cave Temple's Buddhist murals and statues, one of Sri Lanka's Cultural Triangle landmarks.",
    icon: Landmark,
  },
  {
    title: "Cultural Triangle routes",
    text: "Continue to Sigiriya, Habarana, Polonnaruwa, Anuradhapura, or Kandy after your Dambulla stop.",
    icon: Mountain,
  },
  {
    title: "24/7 WhatsApp booking",
    text: "Send your pickup place, hotel, date, time, and passenger count for a fair route-based quote.",
    icon: Clock3,
  },
];

const faqs = [
  {
    question: "How do I book a Dambulla taxi?",
    answer:
      "Send your pickup location, Dambulla hotel or drop-off place, date, time, passenger count, and luggage details on WhatsApp. We will confirm the vehicle and route price before travel.",
  },
  {
    question: "Can I book a Colombo airport to Dambulla taxi?",
    answer:
      "Yes. SKY Taxi Service & Tours provides private Colombo airport to Dambulla taxi service with flight-time checking, clean vehicles, and friendly local drivers.",
  },
  {
    question: "Can the taxi stop at Sigiriya or Pidurangala?",
    answer:
      "Yes. Your taxi to Dambulla can include flexible stops such as Sigiriya Rock Fortress, Pidurangala, Habarana, and village areas depending on time and route.",
  },
  {
    question: "Do you provide a private driver Dambulla service?",
    answer:
      "Yes. You can book a private driver Dambulla service for airport transfers, local sightseeing, day tours, and round tours around Sri Lanka.",
  },
  {
    question: "Is the Dambulla taxi price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on pickup place, drop-off place, travel date, vehicle type, waiting time, highway tickets, and special requests.",
  },
];

function dambullaTaxiMessage(topic = "Dambulla taxi service") {
  return `Hello SKY Taxi Service & Tours, I want to book ${topic}. Pickup location: ___ Drop-off in Dambulla: ___ Date/time: ___ Number of passengers: ___ Luggage: ___`;
}

export default function DambullaTaxiService({ setPage }) {
  return (
    <div className="page colombo-airport-page dambulla-taxi-page">
      <PageHero
        eyebrow="Dambulla Taxi Service"
        title="Dambulla Taxi Service"
        description="Book a private taxi to Dambulla Sri Lanka with Cultural Triangle stops, airport transfers, clean vehicles, and 24/7 WhatsApp booking."
        image={images.dambulla}
        alt="Dambulla Cave Temple in Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(dambullaTaxiMessage())} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Dambulla Taxi
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Dambulla taxi service benefits">
          <span>
            <Landmark size={16} />
            Cultural Triangle
          </span>
          <span>
            <Plane size={16} />
            Airport transfers
          </span>
          <span>
            <Route size={16} />
            Flexible stops
          </span>
          <span>
            <ShieldCheck size={16} />
            Private driver Dambulla
          </span>
        </div>
      </PageHero>

      <section className="section dambulla-travel-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Taxi to Dambulla Sri Lanka</span>
            <h2>Private Dambulla taxi service for airport transfers and Cultural Triangle rides</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book a Dambulla taxi from Colombo Airport, Sigiriya, Kandy, and other Sri Lanka destinations.
              Your private driver can plan a comfortable route with flexible stops, safe travel, and clean vehicle support.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/sigiriya-taxi-service">Sigiriya Taxi Service</a>
              <a href="/kandy-taxi-service">Kandy Taxi Service</a>
            </div>
          </Reveal>
          <Reveal className="colombo-airport-summary">
            {highlights.map((item) => {
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

      <section className="section section--soft dambulla-route-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Route information"
            title="Colombo Airport to Dambulla taxi and Cultural Triangle stops"
            text="Travel to Dambulla with a private driver, luggage space, scenic stops, and a route planned around your pickup place, time, and hotel location."
          />
          <div className="colombo-airport-route-grid">
            {routeCards.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={buildWhatsAppLink(dambullaTaxiMessage(route.title))} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section dambulla-vehicles-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for your taxi to Dambulla"
            text="Choose a private car, SUV, or van for Colombo airport to Dambulla taxi service, family rides, luggage needs, and Cultural Triangle travel."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} Dambulla taxi`} loading="lazy" />
                  <span>Dambulla taxi</span>
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
                    href={buildWhatsAppLink(dambullaTaxiMessage(`${vehicle.name} Dambulla taxi`))}
                    target="_blank"
                    rel="noreferrer"
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

      <section className="section section--soft dambulla-booking-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">24/7 WhatsApp booking</span>
            <h2>Book a private taxi to Dambulla</h2>
            <p>
              Send your pickup location, Dambulla hotel, date, time, passengers, and luggage. We will reply with a fair quote and help plan Cultural Triangle stops if needed.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={buildWhatsAppLink(dambullaTaxiMessage())} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Book on WhatsApp
              </a>
              <a className="button button--light" href="/sigiriya-taxi-service">
                <Car size={18} />
                Sigiriya Taxi Service
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section dambulla-faq-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Dambulla taxi FAQ"
            title="Dambulla taxi service questions"
            text="Helpful answers before booking a private driver to Dambulla Sri Lanka."
          />
          <div className="faq-list">
            {faqs.map((faq) => (
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

      <RelatedTours destinationId="dambulla" soft />
      <RelatedDestinations destinationId="dambulla" soft={false} />
    </div>
  );
}
