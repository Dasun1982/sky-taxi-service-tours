import { CalendarDays, Car, Clock3, Home, Luggage, MapPinned, MessageCircle, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const driverServices = [
  {
    title: "Airport pickup with private driver",
    text: "Hire a private driver Sri Lanka service for Colombo Airport pickup with flight-time checking, luggage support, and WhatsApp confirmation before arrival.",
    image: images.airportWelcome,
  },
  {
    title: "Day tours with driver",
    text: "Book a Sri Lanka tour driver for one-day trips to beaches, temples, wildlife parks, viewpoints, tea country, or cultural sites with flexible stops.",
    image: images.galleFort,
  },
  {
    title: "Round tours with driver",
    text: "Plan multi-day round tours with driver support for Sigiriya, Kandy, Ella, Galle, Mirissa, Yala, Trincomalee, and custom island routes.",
    image: images.sigiriya,
  },
  {
    title: "Flexible chauffeur Sri Lanka service",
    text: "Choose a chauffeur Sri Lanka service for hotel pickups, long-distance transfers, family travel, business trips, and Sri Lanka private taxi routes.",
    image: images.kandy,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable Sri Lanka private taxi option for airport transfers, city rides, and day tours.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Clean wagon option for families, hotel pickups, private driver trips, and flexible tours.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for couples, families, hill country routes, and longer private driver journeys.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for groups, round tours with driver, airport pickup, and island-wide travel.",
  },
];

const highlights = [
  {
    title: "Flexible routes",
    text: "Tell us your pickup place, dates, destinations, budget, and travel style. We help plan a practical route.",
    icon: MapPinned,
  },
  {
    title: "Clean private vehicles",
    text: "Choose a car, SUV, or van based on passengers, luggage, route distance, and comfort needs.",
    icon: Car,
  },
  {
    title: "24/7 WhatsApp booking",
    text: "Send your trip details anytime and get a fair quote for hire driver Sri Lanka service.",
    icon: Clock3,
  },
];

const faqs = [
  {
    question: "How do I hire a private driver in Sri Lanka?",
    answer:
      "Send your pickup location, travel dates, places you want to visit, number of passengers, luggage, and vehicle preference on WhatsApp. We will confirm a fair quote and driver details before travel.",
  },
  {
    question: "Can I book a private driver for airport pickup?",
    answer:
      "Yes. SKY Taxi Service & Tours provides airport pickup with private driver support from Colombo Airport to hotels, beach areas, hill country routes, and island-wide destinations.",
  },
  {
    question: "Can I book day tours with driver?",
    answer:
      "Yes. You can book day tours with driver for Galle, Ella, Kandy, Sigiriya, Mirissa, Yala, beaches, temples, viewpoints, and custom Sri Lanka day trips.",
  },
  {
    question: "Can I book round tours with driver?",
    answer:
      "Yes. We arrange round tours with driver support for multi-day Sri Lanka travel, flexible routes, hotel pickups, airport transfers, and custom island itineraries.",
  },
  {
    question: "Is the private driver price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on route, dates, vehicle type, number of days, passengers, luggage, waiting time, tickets, hotel needs, and special requests.",
  },
];

function privateDriverMessage(topic = "private driver Sri Lanka service") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Pickup location: ___ Travel dates: ___ Places I want to visit: ___ Number of passengers: ___ Luggage: ___ Budget: ___`,
  );
}

export default function PrivateDriverSriLanka({ setPage }) {
  return (
    <div className="page colombo-airport-page private-driver-page">
      <PageHero
        eyebrow="Private Driver Sri Lanka"
        title="Private Driver Sri Lanka"
        description="Hire a private driver in Sri Lanka for airport transfers, day tours, round tours, clean vehicles, flexible routes, and 24/7 WhatsApp booking."
        image={images.trainRide}
        alt="Private driver Sri Lanka hill country route"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${privateDriverMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Hire Private Driver
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Private driver Sri Lanka benefits">
          <span>
            <Plane size={16} />
            Airport pickup
          </span>
          <span>
            <CalendarDays size={16} />
            Day tours
          </span>
          <span>
            <Route size={16} />
            Round tours
          </span>
          <span>
            <ShieldCheck size={16} />
            Flexible routes
          </span>
        </div>
      </PageHero>

      <section className="section private-driver-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Hire driver Sri Lanka</span>
            <h2>Private driver service for airport transfers, day tours, and round tours</h2>
            <p>
              SKY Taxi Service & Tours helps travelers hire a private driver Sri Lanka service for airport pickup, hotel transfers, one-day tours,
              round tours, family travel, and flexible routes across the island with clean vehicles and friendly local support.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/ella-taxi-service">Ella Taxi Service</a>
              <a href="/kandy-taxi-service">Kandy Taxi Service</a>
              <a href="/galle-taxi-service">Galle Taxi Service</a>
              <a href="/sigiriya-taxi-service">Sigiriya Taxi Service</a>
              <a href="/mirissa-taxi-service">Mirissa Taxi Service</a>
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

      <section className="section section--soft private-driver-services">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Chauffeur Sri Lanka service"
            title="Airport pickup, day tours, and round tours with driver"
            text="Choose a Sri Lanka private taxi and driver for flexible travel plans, scenic stops, hotel pickups, airport transfers, and custom island routes."
          />
          <div className="colombo-airport-route-grid">
            {driverServices.map((service) => (
              <Reveal className="colombo-airport-route-card" key={service.title}>
                <img src={service.image} alt={service.title} loading="lazy" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${privateDriverMessage(service.title)}`} target="_blank" rel="noreferrer">
                    Ask driver price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section private-driver-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for your Sri Lanka tour driver"
            text="Choose a private car, SUV, or van for airport transfers, day tours with driver, round tours with driver, and flexible chauffeur Sri Lanka routes."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} private driver Sri Lanka vehicle`} loading="lazy" />
                  <span>Private driver</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${privateDriverMessage(`${vehicle.name} private driver`)}`}
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

      <section className="section section--soft private-driver-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Sri Lanka private taxi</span>
            <h2>Hire a private driver in Sri Lanka</h2>
            <p>
              Send your travel dates, pickup location, places you want to visit, number of passengers, luggage, and budget. We will reply with a fair quote and route plan on WhatsApp.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${privateDriverMessage()}`} target="_blank" rel="noreferrer">
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

      <section className="section private-driver-faq" itemScope itemType="https://schema.org/FAQPage">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Private driver FAQ"
            title="Private driver Sri Lanka questions"
            text="Helpful answers before booking a chauffeur Sri Lanka service or Sri Lanka tour driver."
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
