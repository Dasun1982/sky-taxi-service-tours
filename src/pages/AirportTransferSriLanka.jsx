import { Car, Clock3, Home, Languages, Luggage, MapPinned, MessageCircle, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const destinations = [
  {
    title: "Colombo Airport pickup",
    text: "Book reliable Colombo airport pickup with flight-time checking, WhatsApp confirmation, and a private driver waiting for your arrival.",
    image: images.airportWelcome,
  },
  {
    title: "Airport transfer to Ella",
    text: "Travel from Colombo Airport to Ella with comfort stops, luggage space, and friendly driver support for your hill country journey.",
    image: images.nineArchBridge,
  },
  {
    title: "Airport transfer to Kandy",
    text: "Private airport taxi service to Kandy for hotels, Temple of the Tooth, Peradeniya, Nuwara Eliya routes, and cultural tours.",
    image: images.kandy,
  },
  {
    title: "Airport transfer to Galle",
    text: "Start your south coast travel with a private transfer to Galle, Unawatuna, Weligama, Mirissa, or nearby beach stays.",
    image: images.galle,
  },
  {
    title: "Airport transfer to Unawatuna or Mirissa",
    text: "Clean vehicles and fair route-based quotes for Colombo Airport transfers to Unawatuna, Mirissa, Ahangama, and beach hotels.",
    image: images.blueBeach,
  },
  {
    title: "Airport transfer to Sigiriya",
    text: "Plan a private airport transfer to Sigiriya, Dambulla, Habarana, or the Cultural Triangle with an English-speaking local driver.",
    image: images.sigiriya,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private airport transfer car for couples, solo travelers, and city routes.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Clean wagon option for airport pickup, hotel transfers, and family travel.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for private airport transfers and longer island-wide routes.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for groups, families, airport transfers, and private tours.",
  },
];

const benefits = [
  {
    title: "Private airport transfers",
    text: "Door-to-door Sri Lanka airport transfer service from Colombo Airport to hotels, villas, beaches, and tour routes.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 WhatsApp booking",
    text: "Book early morning arrivals, late night pickups, and delayed flights with quick WhatsApp confirmation.",
    icon: Clock3,
  },
  {
    title: "English-speaking drivers",
    text: "Friendly local drivers help with airport pickup details, luggage, routes, stops, and travel support.",
    icon: Languages,
  },
];

const faqs = [
  {
    question: "How do I book an airport transfer in Sri Lanka?",
    answer:
      "Send your flight number, arrival date and time, destination, passenger count, and luggage details on WhatsApp. We will confirm the vehicle and price before pickup.",
  },
  {
    question: "Can I book transfers from Colombo Airport to Ella, Kandy, Galle, Unawatuna, Mirissa, or Sigiriya?",
    answer:
      "Yes. SKY Taxi Service & Tours provides private airport transfers from Colombo Airport to Ella, Kandy, Galle, Unawatuna, Mirissa, Sigiriya, and many other destinations across Sri Lanka.",
  },
  {
    question: "Are airport transfers available 24/7?",
    answer: "Yes. Airport transfer service is available for day and night arrivals, including early morning and late night flights.",
  },
  {
    question: "Do you provide private drivers and clean vehicles?",
    answer:
      "Yes. You can book a private driver with a clean car, SUV, or van depending on your route, passenger count, and luggage.",
  },
  {
    question: "How is the final airport transfer price confirmed?",
    answer:
      "The final price is confirmed on WhatsApp depending on route, pickup time, vehicle type, passengers, luggage, highway tickets, waiting time, and special requests.",
  },
];

function transferMessage(topic = "Airport Transfer Sri Lanka") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Flight number: ___ Arrival date/time: ___ Pickup airport: ___ Drop-off location: ___ Number of passengers: ___ Luggage: ___`,
  );
}

export default function AirportTransferSriLanka({ setPage }) {
  return (
    <div className="page colombo-airport-page airport-transfer-sri-lanka-page">
      <PageHero
        eyebrow="Airport Transfer Sri Lanka"
        title="Airport Transfer Sri Lanka"
        description="Book private airport transfers in Sri Lanka with reliable Colombo airport pickup, private drivers, clean vehicles, and 24/7 WhatsApp booking."
        image={images.airportTransfer}
        alt="Airport transfer Sri Lanka private taxi service"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${transferMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Airport Transfer
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Airport transfer Sri Lanka benefits">
          <span>
            <Plane size={16} />
            Colombo Airport pickup
          </span>
          <span>
            <Car size={16} />
            Private taxi
          </span>
          <span>
            <Clock3 size={16} />
            24/7 service
          </span>
          <span>
            <Languages size={16} />
            English-speaking drivers
          </span>
        </div>
      </PageHero>

      <section className="section airport-transfer-content">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Private taxi and driver service</span>
            <h2>Reliable airport transfers across Sri Lanka</h2>
            <p>
              SKY Taxi Service & Tours arranges private Sri Lanka airport transfers for travelers arriving at Colombo Bandaranaike International Airport.
              Share your flight details, destination, passengers, and luggage on WhatsApp, and we will help you choose a suitable vehicle with a fair route-based quote.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi page</a>
            </div>
          </Reveal>
          <Reveal className="colombo-airport-summary">
            {benefits.map((item) => {
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

      <section className="section section--soft airport-transfer-destinations">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Popular airport transfer routes"
            title="Transfers to Ella, Kandy, Galle, Unawatuna, Mirissa and Sigiriya"
            text="Choose a private airport transfer from Colombo Airport to beaches, hill country, cultural sites, and island-wide tour routes."
          />
          <div className="colombo-airport-route-grid airport-transfer-destination-grid">
            {destinations.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${transferMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask transfer price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section airport-transfer-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Airport transfer vehicles"
            title="Clean private vehicles for Sri Lanka airport transfers"
            text="Choose a car, SUV, or van based on your group size, luggage, comfort needs, and destination."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} airport transfer Sri Lanka`} loading="lazy" />
                  <span>Airport transfer</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${transferMessage(`${vehicle.name} airport transfer`)}`}
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

      <section className="section section--soft airport-transfer-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">24/7 WhatsApp booking</span>
            <h2>Book your Sri Lanka airport transfer before arrival</h2>
            <p>
              Send your flight number, arrival time, destination, passengers, and luggage. We will confirm your private driver and route price on WhatsApp.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${transferMessage()}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Book on WhatsApp
              </a>
              <button className="button button--light" type="button" onClick={() => setPage("colombo-airport-taxi")}>
                <Route size={18} />
                Colombo Airport Taxi
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section airport-transfer-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Airport transfer FAQ"
            title="Sri Lanka airport transfer questions"
            text="Helpful answers before you book a private airport taxi or driver in Sri Lanka."
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
