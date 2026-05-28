import { Camera, Car, Clock3, Home, Luggage, MapPinned, MessageCircle, Palmtree, Plane, ShieldCheck, Users, Waves } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const galleRoutes = [
  {
    title: "Colombo airport to Galle taxi",
    text: "Book a private Colombo airport to Galle taxi with flight-time checking, luggage space, highway route planning, and WhatsApp confirmation before pickup.",
    image: images.airportWelcome,
  },
  {
    title: "Galle Fort taxi and city stops",
    text: "Plan a Galle taxi for Galle Fort, lighthouse viewpoints, Dutch streets, cafes, boutique hotels, and flexible city sightseeing.",
    image: images.galleFort,
  },
  {
    title: "South coast beach routes",
    text: "Travel by private taxi to Galle, Unawatuna, Jungle Beach, Ahangama, Weligama, Mirissa, and nearby south coast stays.",
    image: images.blueBeach,
  },
  {
    title: "Private driver Galle support",
    text: "Choose a friendly private driver Galle service for airport transfers, hotel pickups, Galle Fort trips, beach transfers, and custom tours.",
    image: images.galle,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for a smooth Galle taxi ride and airport transfer.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Clean wagon option for airport pickups, Galle Fort trips, and beach routes.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for couples, families, and longer south coast travel.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for families, groups, Galle taxi service Sri Lanka routes, and private tours.",
  },
];

const highlights = [
  {
    title: "Flexible south coast routes",
    text: "Add Galle Fort, Unawatuna, Jungle Beach, turtle hatcheries, Ahangama, Weligama, Mirissa, or hotel drop-off.",
    icon: MapPinned,
  },
  {
    title: "Clean private vehicles",
    text: "Book a car, SUV, or van depending on your passengers, luggage, pickup point, and route to Galle.",
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
    question: "How do I book a Galle taxi?",
    answer:
      "Send your pickup location, Galle hotel or drop-off place, date, time, passenger count, and luggage details on WhatsApp. We will confirm the vehicle and route price before travel.",
  },
  {
    question: "Can I book a Colombo airport to Galle taxi?",
    answer:
      "Yes. SKY Taxi Service & Tours provides private Colombo airport to Galle taxi service with flight-time checking, clean vehicles, and friendly local drivers.",
  },
  {
    question: "Can the taxi stop at Galle Fort or south coast beaches?",
    answer:
      "Yes. Your taxi to Galle can include flexible stops such as Galle Fort, Unawatuna, Jungle Beach, turtle hatchery, Ahangama, Weligama, Mirissa, and photo stops depending on time and route.",
  },
  {
    question: "Do you provide a private driver Galle service?",
    answer:
      "Yes. You can book a private driver Galle service for airport transfers, Galle Fort sightseeing, hotel pickups, south coast beach routes, day trips, and Sri Lanka round tours.",
  },
  {
    question: "Is the Galle taxi price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on pickup place, drop-off place, travel date, vehicle type, waiting time, highway tickets, luggage, and special requests.",
  },
];

function galleTaxiMessage(topic = "Galle taxi service") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Pickup location: ___ Drop-off in Galle: ___ Date/time: ___ Number of passengers: ___ Luggage: ___`,
  );
}

export default function GalleTaxiService({ setPage }) {
  return (
    <div className="page colombo-airport-page galle-taxi-page">
      <PageHero
        eyebrow="Galle Taxi Service"
        title="Galle Taxi Service"
        description="Book a private taxi to Galle Sri Lanka with Colombo airport transfers, Galle Fort trips, beach routes, clean vehicles, and 24/7 WhatsApp booking."
        image={images.galleFort}
        alt="Galle taxi service to Galle Fort Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${galleTaxiMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Galle Taxi
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Galle taxi service benefits">
          <span>
            <Camera size={16} />
            Galle Fort trips
          </span>
          <span>
            <Plane size={16} />
            Airport transfers
          </span>
          <span>
            <Waves size={16} />
            South coast routes
          </span>
          <span>
            <ShieldCheck size={16} />
            Private driver Galle
          </span>
        </div>
      </PageHero>

      <section className="section galle-travel-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Taxi to Galle Sri Lanka</span>
            <h2>Private Galle taxi service for airport transfers and south coast travel</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book a Galle taxi from Colombo Airport, Ella, Kandy, Unawatuna, Mirissa, and other Sri Lanka destinations.
              Your private driver can plan a comfortable route with flexible stops, safe travel, and clean vehicle support.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/ella-taxi-service">Ella Taxi Service</a>
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

      <section className="section section--soft galle-route-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Galle route information"
            title="Colombo Airport to Galle taxi, Galle Fort, and south coast routes"
            text="Travel to Galle with a private driver, luggage space, Galle Fort stops, beach route planning, and a route matched to your pickup place, time, and hotel location."
          />
          <div className="colombo-airport-route-grid">
            {galleRoutes.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${galleTaxiMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section galle-vehicles-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for your taxi to Galle"
            text="Choose a private car, SUV, or van for Colombo airport to Galle taxi service, family rides, luggage needs, Galle Fort trips, and beach routes."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} Galle taxi`} loading="lazy" />
                  <span>Galle taxi</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${galleTaxiMessage(`${vehicle.name} Galle taxi`)}`}
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

      <section className="section section--soft galle-booking-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Galle taxi service Sri Lanka</span>
            <h2>Book a private taxi to Galle</h2>
            <p>
              Send your pickup location, Galle hotel, date, time, passengers, and luggage. We will reply with a fair quote and help plan Galle Fort or south coast stops if needed.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${galleTaxiMessage()}`} target="_blank" rel="noreferrer">
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

      <section className="section galle-faq-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Galle taxi FAQ"
            title="Galle taxi service questions"
            text="Helpful answers before booking a private driver to Galle Sri Lanka."
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
