import { Car, Clock3, Home, Landmark, Luggage, MapPinned, MessageCircle, Mountain, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const kandyRoutes = [
  {
    title: "Colombo airport to Kandy taxi",
    text: "Book a private Colombo airport to Kandy taxi with flight-time checking, luggage space, and WhatsApp confirmation before pickup.",
    image: images.airportWelcome,
  },
  {
    title: "Temple of the Tooth transfer",
    text: "Plan a Kandy taxi for Temple of the Tooth, Kandy Lake, city hotels, cultural stops, and flexible sightseeing around the city.",
    image: images.kandyTemple,
  },
  {
    title: "Hill country route to Kandy",
    text: "Enjoy a comfortable taxi to Kandy with scenic stops, tea country views, botanical gardens, Ambuluwawa, or Nuwara Eliya route planning.",
    image: images.kandy,
  },
  {
    title: "Private driver Kandy support",
    text: "Choose a friendly private driver Kandy service for airport transfers, hotel pickups, day trips, and round tours across Sri Lanka.",
    image: images.ambuluwawe,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for a clean and comfortable Kandy taxi ride.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Good option for airport transfers, hotel pickups, and taxi to Kandy routes.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for couples, families, and hill country trips.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for groups, families, airport transfers, and Kandy tours.",
  },
];

const highlights = [
  {
    title: "Flexible Kandy routes",
    text: "Add Temple of the Tooth, Kandy Lake, Peradeniya Botanical Gardens, Ambuluwawa, tea stops, or hotel drop-off.",
    icon: MapPinned,
  },
  {
    title: "Clean private vehicles",
    text: "Book a car, SUV, or van depending on your passengers, luggage, pickup point, and route to Kandy.",
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
    question: "How do I book a Kandy taxi?",
    answer:
      "Send your pickup location, Kandy hotel or drop-off place, date, time, passenger count, and luggage details on WhatsApp. We will confirm the vehicle and route price before travel.",
  },
  {
    question: "Can I book a Colombo airport to Kandy taxi?",
    answer:
      "Yes. SKY Taxi Service & Tours provides private Colombo airport to Kandy taxi service with flight-time checking, clean vehicles, and friendly local drivers.",
  },
  {
    question: "Can the taxi stop at Temple of the Tooth or hill country viewpoints?",
    answer:
      "Yes. Your taxi to Kandy can include flexible stops such as Temple of the Tooth, Kandy Lake, Peradeniya Botanical Gardens, tea viewpoints, and photo stops depending on time and route.",
  },
  {
    question: "Do you provide a private driver Kandy service?",
    answer:
      "Yes. You can book a private driver Kandy service for airport transfers, local sightseeing, hotel pickups, day trips, and Sri Lanka round tours.",
  },
  {
    question: "Is the Kandy taxi price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on pickup place, drop-off place, travel date, vehicle type, waiting time, highway tickets, luggage, and special requests.",
  },
];

function kandyTaxiMessage(topic = "Kandy taxi service") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Pickup location: ___ Drop-off in Kandy: ___ Date/time: ___ Number of passengers: ___ Luggage: ___`,
  );
}

export default function KandyTaxiService({ setPage }) {
  return (
    <div className="page colombo-airport-page kandy-taxi-page">
      <PageHero
        eyebrow="Kandy Taxi Service"
        title="Kandy Taxi Service"
        description="Book a private taxi to Kandy Sri Lanka with Colombo airport transfers, hill country routes, clean vehicles, and 24/7 WhatsApp booking."
        image={images.kandyTemple}
        alt="Kandy taxi service to Temple of the Tooth Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${kandyTaxiMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Kandy Taxi
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Kandy taxi service benefits">
          <span>
            <Landmark size={16} />
            Temple of the Tooth
          </span>
          <span>
            <Plane size={16} />
            Airport transfers
          </span>
          <span>
            <Mountain size={16} />
            Hill country routes
          </span>
          <span>
            <ShieldCheck size={16} />
            Private driver Kandy
          </span>
        </div>
      </PageHero>

      <section className="section kandy-travel-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Taxi to Kandy Sri Lanka</span>
            <h2>Private Kandy taxi service for airport transfers and hill country trips</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book a Kandy taxi from Colombo Airport, Ella, Galle, Unawatuna, Nuwara Eliya, and other Sri Lanka destinations.
              Your private driver can plan a comfortable route with flexible stops, safe travel, and clean vehicle support.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/ella-taxi-service">Ella Taxi Service</a>
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

      <section className="section section--soft kandy-route-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Kandy route information"
            title="Colombo Airport to Kandy taxi, Temple of the Tooth, and hill country routes"
            text="Travel to Kandy with a private driver, luggage space, cultural stops, and a route planned around your pickup place, time, and hotel location."
          />
          <div className="colombo-airport-route-grid">
            {kandyRoutes.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${kandyTaxiMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section kandy-vehicles-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for your taxi to Kandy"
            text="Choose a private car, SUV, or van for Colombo airport to Kandy taxi service, family rides, luggage needs, and hill country travel."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} Kandy taxi`} loading="lazy" />
                  <span>Kandy taxi</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${kandyTaxiMessage(`${vehicle.name} Kandy taxi`)}`}
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

      <section className="section section--soft kandy-booking-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Kandy taxi service Sri Lanka</span>
            <h2>Book a private taxi to Kandy</h2>
            <p>
              Send your pickup location, Kandy hotel, date, time, passengers, and luggage. We will reply with a fair quote and help plan Temple of the Tooth or hill country stops if needed.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${kandyTaxiMessage()}`} target="_blank" rel="noreferrer">
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

      <section className="section kandy-faq-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Kandy taxi FAQ"
            title="Kandy taxi service questions"
            text="Helpful answers before booking a private driver to Kandy Sri Lanka."
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
    </div>
  );
}
