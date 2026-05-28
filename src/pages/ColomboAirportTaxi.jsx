import { Car, CheckCircle2, Clock3, Home, Languages, Luggage, MapPinned, MessageCircle, Plane, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const transferRoutes = [
  {
    title: "Colombo airport pickup",
    text: "Meet your driver at Bandaranaike International Airport with WhatsApp confirmation, flight-time checking, and private vehicle support.",
    image: images.airportWelcome,
  },
  {
    title: "Airport to Ella taxi",
    text: "Travel from Colombo Airport to Ella with a friendly local driver, comfort stops, luggage space, and a flexible hill country route.",
    image: images.nineArchBridge,
  },
  {
    title: "Airport to Kandy taxi",
    text: "Book a private taxi from Colombo Airport to Kandy for hotels, Temple of the Tooth, Peradeniya, and central hill country travel.",
    image: images.kandyTemple,
  },
  {
    title: "Airport to Galle taxi",
    text: "Start your south coast trip with a reliable airport transfer to Galle, Unawatuna, Weligama, Mirissa, or nearby beach hotels.",
    image: images.galleFort,
  },
];

const airportVehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable airport taxi for solo travelers, couples, and city transfers.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Good luggage space",
    text: "Comfortable airport pickup option for families and longer routes.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Private SUV option for airport transfers and island-wide tours.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for groups, airport transfers, and private round tours.",
  },
];

const servicePoints = [
  {
    title: "Private airport transfers",
    text: "Travel directly from Colombo Airport to your hotel, beach stay, hill country route, or round tour starting point.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 service",
    text: "Early morning arrivals, late night flights, and delayed flight pickups can be arranged by WhatsApp.",
    icon: Clock3,
  },
  {
    title: "English-speaking drivers",
    text: "Friendly local drivers help with pickup details, routes, comfort stops, and simple travel support.",
    icon: Languages,
  },
];

const faqs = [
  {
    question: "How do I book a Colombo Airport taxi?",
    answer: "Send your flight number, arrival time, pickup date, destination, passenger count, and luggage details on WhatsApp. We will confirm the vehicle and fair price before pickup.",
  },
  {
    question: "Can I book airport transfers to Ella, Kandy, or Galle?",
    answer: "Yes. SKY Taxi Service & Tours offers private airport transfers from Colombo Airport to Ella, Kandy, Galle, Unawatuna, Mirissa, Sigiriya, and many other Sri Lanka destinations.",
  },
  {
    question: "Are airport taxis available 24/7?",
    answer: "Yes. Colombo Airport taxi pickups can be arranged day or night, including early morning and late night arrivals.",
  },
  {
    question: "Is the final airport taxi price fixed online?",
    answer: "The final price is confirmed on WhatsApp depending on route, pickup time, passengers, luggage, vehicle type, waiting time, and highway tickets.",
  },
];

function airportTaxiMessage(destination = "Colombo Airport transfer") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book a ${destination}. Flight number: ___ Arrival date/time: ___ Drop-off location: ___ Number of passengers: ___ Luggage: ___`,
  );
}

export default function ColomboAirportTaxi({ setPage }) {
  return (
    <div className="page colombo-airport-page">
      <PageHero
        eyebrow="Colombo Airport Taxi"
        title="Colombo Airport Taxi Service"
        description="Book private airport transfers from Colombo Airport to Ella, Kandy, Galle, Unawatuna, Sigiriya, and destinations across Sri Lanka with friendly local drivers."
        image={images.airportTransfer}
        alt="Colombo Airport taxi service in Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${airportTaxiMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book on WhatsApp
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Colombo Airport taxi benefits">
          <span>
            <Plane size={16} />
            Airport pickup
          </span>
          <span>
            <Clock3 size={16} />
            24/7 service
          </span>
          <span>
            <ShieldCheck size={16} />
            Private transfers
          </span>
          <span>
            <Languages size={16} />
            English-speaking drivers
          </span>
        </div>
      </PageHero>

      <section className="section colombo-airport-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Airport transfer content</span>
            <h2>Reliable Colombo airport pickup for Sri Lanka travel</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book a Colombo Airport taxi before arrival, with clean private vehicles, WhatsApp confirmation,
              route planning, and friendly local driver support for airport transfers and private tours across Sri Lanka.
            </p>
            <div className="colombo-airport-link-row">
              <button type="button" onClick={() => setPage("home")}>
                Homepage
              </button>
              <a href={`https://wa.me/${contactInfo.whatsapp}?text=${airportTaxiMessage()}`} target="_blank" rel="noreferrer">
                WhatsApp booking
              </a>
            </div>
          </Reveal>
          <Reveal className="colombo-airport-summary">
            {servicePoints.map((item) => {
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

      <section className="section section--soft colombo-airport-routes">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Popular airport routes"
            title="Airport to Ella, Kandy, Galle and more"
            text="Choose a private airport transfer for long-distance travel, hotel pickups, south coast beach stays, hill country routes, and island-wide tours."
          />
          <div className="colombo-airport-route-grid">
            {transferRoutes.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${airportTaxiMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section colombo-airport-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Airport taxi vehicles"
            title="Private vehicles for Colombo Airport transfers"
            text="Select a clean car, SUV, or van for airport pickup, luggage space, family travel, and private tours after arrival."
          />
          <div className="airport-transfer-grid">
            {airportVehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} Colombo Airport taxi`} loading="lazy" />
                  <span>Airport taxi</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${airportTaxiMessage(`${vehicle.name} Colombo Airport taxi`)}`}
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

      <section className="section section--soft colombo-airport-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Private airport transfers</span>
            <h2>Need a Colombo Airport taxi today?</h2>
            <p>
              Send your flight details, destination, passenger count, and luggage information. We will reply with a fair quote and confirm your driver on WhatsApp.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${airportTaxiMessage()}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Book Airport Taxi
              </a>
              <button className="button button--light" type="button" onClick={() => setPage("home")}>
                <Home size={18} />
                Back to Homepage
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section colombo-airport-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Airport taxi FAQ"
            title="Colombo Airport taxi questions"
            text="Quick answers for travelers booking private airport transfers in Sri Lanka."
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
