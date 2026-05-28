import { Car, Clock3, Coffee, Home, Luggage, MapPinned, MessageCircle, Mountain, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const scenicStops = [
  {
    title: "Colombo airport to Ella taxi",
    text: "Book a private Colombo airport to Ella taxi with flight-time checking, luggage space, and WhatsApp confirmation before pickup.",
    image: images.airportWelcome,
  },
  {
    title: "Scenic hill country route",
    text: "Enjoy a comfortable taxi to Ella with optional stops for tea country views, waterfalls, viewpoints, and local food breaks.",
    image: images.trainRide,
  },
  {
    title: "Nine Arch Bridge and Ella town",
    text: "Plan your Ella taxi around hotel drop-off, Nine Arch Bridge, Little Adam's Peak, Ravana Falls, and flexible local sightseeing.",
    image: images.nineArchBridge,
  },
  {
    title: "Private driver Ella support",
    text: "Choose a friendly private driver Ella service for airport transfers, day trips, round tours, and custom Sri Lanka travel plans.",
    image: images.ambuluwawe,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for a smooth Ella taxi ride and airport transfer.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Clean wagon option for a taxi to Ella with extra room for bags.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for hill country roads, couples, and small families.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for families, groups, and private driver Ella tours.",
  },
];

const highlights = [
  {
    title: "Flexible stops",
    text: "Add tea views, waterfalls, lunch breaks, photo stops, and viewpoints along your route to Ella.",
    icon: MapPinned,
  },
  {
    title: "Clean private vehicles",
    text: "Choose a private car, SUV, or van depending on passengers, luggage, route, and comfort needs.",
    icon: Car,
  },
  {
    title: "24/7 WhatsApp booking",
    text: "Send your pickup place, hotel, date, time, and passenger count for a fair route-based quote.",
    icon: Clock3,
  },
];

const faqs = [
  {
    question: "How do I book an Ella taxi?",
    answer:
      "Send your pickup location, Ella hotel or drop-off place, date, time, passenger count, and luggage details on WhatsApp. We will confirm the vehicle and route price before travel.",
  },
  {
    question: "Can I book a Colombo airport to Ella taxi?",
    answer:
      "Yes. SKY Taxi Service & Tours provides private Colombo airport to Ella taxi service with flight-time checking, clean vehicles, and friendly local drivers.",
  },
  {
    question: "Can we stop on the scenic route to Ella?",
    answer:
      "Yes. Your taxi to Ella can include flexible stops for tea country views, waterfalls, viewpoints, food breaks, and photos depending on time and route.",
  },
  {
    question: "Do you provide a private driver Ella service?",
    answer:
      "Yes. You can book a private driver Ella service for airport transfers, local sightseeing, day tours, and round tours around Sri Lanka.",
  },
  {
    question: "Is the Ella taxi price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on pickup place, drop-off place, travel date, vehicle type, waiting time, highway tickets, and special requests.",
  },
];

function ellaTaxiMessage(topic = "Ella taxi service") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Pickup location: ___ Drop-off in Ella: ___ Date/time: ___ Number of passengers: ___ Luggage: ___`,
  );
}

export default function EllaTaxiService({ setPage }) {
  return (
    <div className="page colombo-airport-page ella-taxi-page">
      <PageHero
        eyebrow="Ella Taxi Service"
        title="Ella Taxi Service"
        description="Book a private taxi to Ella Sri Lanka with scenic hill country stops, airport transfers, clean vehicles, and 24/7 WhatsApp booking."
        image={images.nineArchBridge}
        alt="Ella taxi service to Nine Arch Bridge Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${ellaTaxiMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Ella Taxi
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Ella taxi service benefits">
          <span>
            <Mountain size={16} />
            Scenic hill country
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
            Private driver Ella
          </span>
        </div>
      </PageHero>

      <section className="section ella-travel-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Taxi to Ella Sri Lanka</span>
            <h2>Private Ella taxi service for airport transfers and hill country rides</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book an Ella taxi from Colombo Airport, Galle, Unawatuna, Kandy, Nuwara Eliya, and other Sri Lanka destinations.
              Your private driver can plan a comfortable route with flexible stops, safe travel, and clean vehicle support.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
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

      <section className="section section--soft ella-route-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Scenic route information"
            title="Colombo Airport to Ella taxi and flexible hill country stops"
            text="Travel to Ella with a private driver, luggage space, scenic stops, and a route planned around your pickup place, time, and hotel location."
          />
          <div className="colombo-airport-route-grid">
            {scenicStops.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${ellaTaxiMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section ella-vehicles-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for your taxi to Ella"
            text="Choose a private car, SUV, or van for Colombo airport to Ella taxi service, family rides, luggage needs, and scenic hill country travel."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} Ella taxi`} loading="lazy" />
                  <span>Ella taxi</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${ellaTaxiMessage(`${vehicle.name} Ella taxi`)}`}
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

      <section className="section section--soft ella-booking-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">24/7 WhatsApp booking</span>
            <h2>Book a private taxi to Ella</h2>
            <p>
              Send your pickup location, Ella hotel, date, time, passengers, and luggage. We will reply with a fair quote and help plan scenic stops if needed.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${ellaTaxiMessage()}`} target="_blank" rel="noreferrer">
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

      <section className="section ella-faq-section" itemScope itemType="https://schema.org/FAQPage">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Ella taxi FAQ"
            title="Ella taxi service questions"
            text="Helpful answers before booking a private driver to Ella Sri Lanka."
          />
          <div className="faq-list">
            {faqs.map((faq) => (
              <article className="faq-item" key={faq.question} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 itemProp="name">{faq.question}</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">{faq.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
