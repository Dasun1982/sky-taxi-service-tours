import { Car, Clock3, Home, Landmark, Luggage, MapPinned, MessageCircle, Mountain, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import RelatedDestinations from "../components/RelatedDestinations";
import RelatedRoutes from "../components/RelatedRoutes";
import RelatedTours from "../components/RelatedTours";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { findTaxiVehicle } from "../data/vehicles";
import { buildWhatsAppLink } from "../utils/whatsapp";

const sigiriyaRoutes = [
  {
    title: "Colombo airport to Sigiriya taxi",
    text: "Book a private Colombo airport to Sigiriya taxi with flight-time checking, luggage space, and WhatsApp confirmation before pickup.",
    image: images.airportWelcome,
  },
  {
    title: "Sigiriya Rock Fortress route",
    text: "Travel by Sigiriya taxi to the UNESCO rock fortress, water gardens, viewpoints, nearby hotels, and cultural triangle highlights.",
    image: images.sigiriya,
  },
  {
    title: "Dambulla and Cultural Triangle stops",
    text: "Plan a taxi to Sigiriya with optional stops at Dambulla Cave Temple, Pidurangala, Habarana, or village route experiences.",
    image: images.dambulla,
  },
  {
    title: "Private driver Sigiriya support",
    text: "Choose a friendly private driver Sigiriya service for airport transfers, hotel pickups, day trips, and round tours around Sri Lanka.",
    image: images.pidurangala,
  },
];

const vehicles = [
  ["toyota-prius", "Affordable private car for a clean and comfortable Sigiriya taxi ride."],
  ["honda-shuttle", "Good option for airport transfers, hotel pickups, and taxi to Sigiriya routes."],
  ["honda-vezel", "Comfortable SUV for couples, families, and cultural triangle trips."],
  ["toyota-kdh-van", "Spacious van for groups, families, airport transfers, and Sigiriya tours."],
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
    title: "Flexible cultural routes",
    text: "Add Sigiriya Rock Fortress, Dambulla Cave Temple, Pidurangala, Habarana, village stops, or hotel drop-off.",
    icon: MapPinned,
  },
  {
    title: "Clean private vehicles",
    text: "Book a car, SUV, or van depending on your passengers, luggage, pickup point, and route to Sigiriya.",
    icon: Car,
  },
  {
    title: "24/7 WhatsApp booking",
    text: "Send pickup place, drop-off location, date, time, passenger count, and luggage for a fair route-based quote.",
    icon: Clock3,
  },
];

const faqs = [
  {
    question: "How do I book a Sigiriya taxi?",
    answer:
      "Send your pickup location, Sigiriya hotel or drop-off place, date, time, passenger count, and luggage details on WhatsApp. We will confirm the vehicle and route price before travel.",
  },
  {
    question: "Can I book a Colombo airport to Sigiriya taxi?",
    answer:
      "Yes. SKY Taxi Service & Tours provides private Colombo airport to Sigiriya taxi service with flight-time checking, clean vehicles, and friendly local drivers.",
  },
  {
    question: "Can the taxi stop at Dambulla or Pidurangala?",
    answer:
      "Yes. Your taxi to Sigiriya can include flexible stops such as Dambulla Cave Temple, Pidurangala, Habarana, village areas, and photo stops depending on time and route.",
  },
  {
    question: "Do you provide a private driver Sigiriya service?",
    answer:
      "Yes. You can book a private driver Sigiriya service for airport transfers, local sightseeing, hotel pickups, day trips, and Sri Lanka round tours.",
  },
  {
    question: "Is the Sigiriya taxi price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on pickup place, drop-off place, travel date, vehicle type, waiting time, highway tickets, luggage, and special requests.",
  },
];

function sigiriyaTaxiMessage(topic = "Sigiriya taxi service") {
  return `Hello SKY Taxi Service & Tours, I want to book ${topic}. Pickup location: ___ Drop-off in Sigiriya: ___ Date/time: ___ Number of passengers: ___ Luggage: ___`;
}

export default function SigiriyaTaxiService({ setPage }) {
  return (
    <div className="page colombo-airport-page sigiriya-taxi-page">
      <PageHero
        eyebrow="Sigiriya Taxi Service"
        title="Sigiriya Taxi Service"
        description="Book a private taxi to Sigiriya Sri Lanka with airport transfers, cultural triangle trips, clean vehicles, and 24/7 WhatsApp booking."
        image={images.sigiriya}
        alt="Sigiriya taxi service to Sigiriya Rock Fortress Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(sigiriyaTaxiMessage())} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Sigiriya Taxi
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Sigiriya taxi service benefits">
          <span>
            <Landmark size={16} />
            Sigiriya Rock Fortress
          </span>
          <span>
            <Plane size={16} />
            Airport transfers
          </span>
          <span>
            <Mountain size={16} />
            Cultural triangle
          </span>
          <span>
            <ShieldCheck size={16} />
            Private driver Sigiriya
          </span>
        </div>
      </PageHero>

      <section className="section sigiriya-travel-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Taxi to Sigiriya Sri Lanka</span>
            <h2>Private Sigiriya taxi service for airport transfers and cultural triangle trips</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book a Sigiriya taxi from Colombo Airport, Kandy, Ella, Galle, Unawatuna, and other Sri Lanka destinations.
              Your private driver can plan a comfortable route with flexible stops, safe travel, and clean vehicle support.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/ella-taxi-service">Ella Taxi Service</a>
              <a href="/kandy-taxi-service">Kandy Taxi Service</a>
              <a href="/galle-taxi-service">Galle Taxi Service</a>
              <a href="/things-to-do-in-sigiriya">Things to Do in Sigiriya</a>
              <a href="/sigiriya-vs-ella">Sigiriya vs Ella</a>
              <a href="/kandy-to-sigiriya">Kandy to Sigiriya</a>
              <a href="/sigiriya-to-yala">Sigiriya to Yala</a>
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

      <section className="section section--soft sigiriya-route-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Sigiriya route information"
            title="Colombo Airport to Sigiriya taxi, Sigiriya Rock Fortress, and Dambulla routes"
            text="Travel to Sigiriya with a private driver, luggage space, cultural stops, and a route planned around your pickup place, time, and hotel location."
          />
          <div className="colombo-airport-route-grid">
            {sigiriyaRoutes.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt="" loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={buildWhatsAppLink(sigiriyaTaxiMessage(route.title))} target="_blank" rel="noreferrer" aria-label={`Ask route price — ${route.title}`}>
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section sigiriya-vehicles-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for your taxi to Sigiriya"
            text="Choose a private car, SUV, or van for Colombo airport to Sigiriya taxi service, family rides, luggage needs, and cultural triangle travel."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} Sigiriya taxi`} loading="lazy" />
                  <span>Sigiriya taxi</span>
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
                    href={buildWhatsAppLink(sigiriyaTaxiMessage(`${vehicle.name} Sigiriya taxi`))}
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

      <section className="section section--soft sigiriya-booking-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Sigiriya taxi service Sri Lanka</span>
            <h2>Book a private taxi to Sigiriya</h2>
            <p>
              Send your pickup location, Sigiriya hotel, date, time, passengers, and luggage. We will reply with a fair quote and help plan Sigiriya Rock Fortress or Dambulla stops if needed.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={buildWhatsAppLink(sigiriyaTaxiMessage())} target="_blank" rel="noreferrer">
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

      <section className="section sigiriya-faq-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Sigiriya taxi FAQ"
            title="Sigiriya taxi service questions"
            text="Helpful answers before booking a private driver to Sigiriya Sri Lanka."
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

      <RelatedTours destinationId="sigiriya" soft />
      <RelatedDestinations destinationId="sigiriya" soft={false} />
      <RelatedRoutes destinationId="sigiriya" pageSource="sigiriya-taxi-service-page" />
    </div>
  );
}
