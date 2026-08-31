import { CalendarDays, Car, Clock3, Home, Luggage, MapPinned, MessageCircle, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { findTaxiVehicle } from "../data/vehicles";
import { buildWhatsAppLink } from "../utils/whatsapp";

const driverServices = [
  {
    title: "Airport pickup with private driver",
    text: "Hire a private driver Sri Lanka service for Colombo Airport pickup with flight-time checking, luggage support, and WhatsApp confirmation before arrival.",
    image: images.airportWelcome,
  },
  {
    title: "Single-day hire",
    text: "Book a private driver for one day at a time — a beach day, a temple visit, or a single point-to-point route, with no multi-day commitment.",
    image: images.galleFort,
  },
  {
    title: "Point-to-point transfers",
    text: "Move between hotels or towns with a private driver and vehicle, without needing a fixed multi-day itinerary planned in advance.",
    image: images.sigiriya,
  },
  {
    title: "Flexible day-by-day extension",
    text: "Start with one day and extend as you go — hire the same driver for another day, or a few more, whenever your plans change.",
    image: images.kandy,
  },
];

const vehicles = [
  ["toyota-prius", "Affordable Sri Lanka private taxi option for airport transfers, city rides, and day tours."],
  ["honda-shuttle", "Clean wagon option for families, hotel pickups, private driver trips, and flexible tours."],
  ["honda-vezel", "Comfortable SUV for couples, families, hill country routes, and longer private driver journeys."],
  ["toyota-kdh-van", "Spacious van for groups, round tours with driver, airport pickup, and island-wide travel."],
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
    question: "What if I want one driver for my whole multi-day trip?",
    answer:
      "This page is for flexible, day-by-day hire — a single day, a few days, or point-to-point transfers with no fixed itinerary. If you want one dedicated driver for a continuous multi-day island tour, see Sri Lanka Tour Driver instead.",
  },
  {
    question: "Is the private driver price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on route, dates, vehicle type, number of days, passengers, luggage, waiting time, tickets, hotel needs, and special requests.",
  },
];

function privateDriverMessage(topic = "private driver Sri Lanka service") {
  return `Hello SKY Taxi Service & Tours, I want to book ${topic}. Pickup location: ___ Travel dates: ___ Places I want to visit: ___ Number of passengers: ___ Luggage: ___ Budget: ___`;
}

export default function PrivateDriverSriLanka({ setPage }) {
  return (
    <div className="page colombo-airport-page private-driver-page">
      <PageHero
        eyebrow="Private Driver Sri Lanka"
        title="Private Driver Sri Lanka"
        description="Hire a private driver in Sri Lanka by the day — airport transfers, single-day trips, or point-to-point transfers, with clean vehicles and 24/7 WhatsApp booking. No fixed multi-day itinerary required."
        image={images.trainRide}
        alt="Private driver Sri Lanka hill country route"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={buildWhatsAppLink(privateDriverMessage())} target="_blank" rel="noreferrer">
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
            Single-day hire
          </span>
          <span>
            <Route size={16} />
            Point-to-point
          </span>
          <span>
            <ShieldCheck size={16} />
            Flexible, no fixed plan
          </span>
        </div>
      </PageHero>

      <section className="section private-driver-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Hire driver Sri Lanka</span>
            <h2>Flexible, day-by-day private driver hire — no fixed multi-day plan needed</h2>
            <p>
              SKY Taxi Service & Tours helps travelers hire a private driver Sri Lanka service for airport pickup, hotel transfers, and single-day
              or point-to-point trips across the island with clean vehicles and friendly local support. Want one dedicated driver for a continuous
              multi-day tour instead? See Sri Lanka Tour Driver.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/is-a-private-driver-worth-it">Is a Private Driver Worth It?</a>
              <a href="/private-driver-vs-rental-car">Private Driver vs Rental Car</a>
              <a href="/sri-lanka-tour-driver">Sri Lanka Tour Driver (multi-day)</a>
              <a href="/driver-guide-sri-lanka">Driver + Guide</a>
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
                <img src={service.image} alt="" loading="lazy" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href={buildWhatsAppLink(privateDriverMessage(service.title))} target="_blank" rel="noreferrer" aria-label={`Ask driver price — ${service.title}`}>
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
                    href={buildWhatsAppLink(privateDriverMessage(`${vehicle.name} private driver`))}
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

      <section className="section section--soft private-driver-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Sri Lanka private taxi</span>
            <h2>Hire a private driver in Sri Lanka</h2>
            <p>
              Send your travel dates, pickup location, places you want to visit, number of passengers, luggage, and budget. We will reply with a fair quote and route plan on WhatsApp.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={buildWhatsAppLink(privateDriverMessage())} target="_blank" rel="noreferrer">
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

      <section className="section private-driver-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Private driver FAQ"
            title="Private driver Sri Lanka questions"
            text="Helpful answers before booking a chauffeur Sri Lanka service or Sri Lanka tour driver."
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
