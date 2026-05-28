import { Car, Clock3, Flower2, Home, Luggage, MapPinned, MessageCircle, Mountain, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const routeDetails = [
  {
    title: "Colombo Airport to Kandy taxi",
    text: "Private transfer from Bandaranaike International Airport to Kandy with flight-time checking, luggage support, and WhatsApp driver confirmation.",
    image: images.airportWelcome,
  },
  {
    title: "Travel time and route details",
    text: "The airport to Kandy taxi route usually takes around 3 to 4.5 hours depending on traffic, pickup time, comfort stops, and your hotel location.",
    image: images.kandy,
  },
  {
    title: "Temple of the Tooth and Kandy city",
    text: "Arrive directly at your Kandy hotel or plan a stop near Temple of the Tooth, Kandy Lake, city viewpoints, and cultural places.",
    image: images.kandyTemple,
  },
  {
    title: "Private transfer to Kandy",
    text: "Choose a clean car, SUV, or van with a friendly local driver for airport pickup, hill country travel, and flexible sightseeing stops.",
    image: images.ambuluwawe,
  },
];

const scenicStops = [
  {
    title: "Temple of the Tooth",
    text: "Plan a Kandy airport transfer around hotel drop-off or a cultural stop near the Temple of the Tooth and Kandy Lake.",
    icon: ShieldCheck,
  },
  {
    title: "Hill country route",
    text: "Enjoy a comfortable drive toward Sri Lanka's central hills with optional photo stops, food breaks, and viewpoint stops.",
    icon: Mountain,
  },
  {
    title: "Garden and viewpoint stops",
    text: "Ask about flexible stops such as Peradeniya Botanical Gardens, Ambuluwawa, local viewpoints, or simple rest breaks.",
    icon: Flower2,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for a smooth Colombo Airport to Kandy taxi transfer.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Clean wagon option for airport to Kandy taxi rides with extra room for bags.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for couples, families, and hill country road travel.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for families and groups booking a private transfer to Kandy.",
  },
];

const faqs = [
  {
    question: "How long does a Colombo Airport to Kandy taxi take?",
    answer:
      "A Colombo Airport to Kandy taxi usually takes around 3 to 4.5 hours depending on traffic, pickup time, comfort stops, and the exact Kandy hotel location.",
  },
  {
    question: "Can I book an airport to Kandy taxi after a late flight?",
    answer:
      "Yes. SKY Taxi Service & Tours can arrange Kandy airport transfer service for day or night arrivals with flight-time checking and WhatsApp confirmation.",
  },
  {
    question: "Can we stop at Temple of the Tooth or hill country viewpoints?",
    answer:
      "Yes. Your taxi from Colombo airport to Kandy can include flexible stops for Temple of the Tooth, Peradeniya Botanical Gardens, viewpoints, food breaks, and rest stops depending on time and route.",
  },
  {
    question: "What vehicles are available for a private transfer to Kandy?",
    answer:
      "You can request a private car, SUV, or van depending on passengers, luggage, comfort needs, and availability. The final vehicle and price are confirmed on WhatsApp.",
  },
  {
    question: "Is the Colombo Airport to Kandy taxi price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
  },
];

function airportToKandyMessage(topic = "Colombo Airport to Kandy taxi") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Flight number: ___ Arrival date/time: ___ Drop-off in Kandy: ___ Number of passengers: ___ Luggage: ___`,
  );
}

export default function AirportToKandyTaxi({ setPage }) {
  return (
    <div className="page colombo-airport-page kandy-taxi-page airport-to-kandy-page">
      <PageHero
        eyebrow="Airport to Kandy Taxi"
        title="Colombo Airport to Kandy Taxi"
        description="Book a private taxi from Colombo Airport to Kandy with comfortable airport transfer, clean vehicles, local drivers, and 24/7 WhatsApp booking."
        image={images.kandyTemple}
        alt="Colombo Airport to Kandy taxi private transfer Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToKandyMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Airport to Kandy
          </a>
          <a className="button button--light" href="/kandy-taxi-service">
            <Home size={18} />
            Kandy Taxi Service
          </a>
        </div>
        <div className="premium-hero-badges" aria-label="Airport to Kandy taxi benefits">
          <span>
            <Plane size={16} />
            Airport pickup
          </span>
          <span>
            <Route size={16} />
            Kandy transfer
          </span>
          <span>
            <ShieldCheck size={16} />
            Private driver
          </span>
          <span>
            <Clock3 size={16} />
            24/7 WhatsApp
          </span>
        </div>
      </PageHero>

      <section className="section airport-to-kandy-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Colombo Airport to Kandy transfer</span>
            <h2>Private airport to Kandy taxi with clean vehicles and local drivers</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book a private Colombo Airport to Kandy taxi before arrival. Your driver can meet you at the airport,
              help with luggage, plan comfort stops, and take you safely toward Kandy and Sri Lanka's central hill country.
            </p>
            <div className="colombo-airport-link-row">
              <button type="button" onClick={() => setPage("home")}>
                Homepage
              </button>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/kandy-taxi-service">Kandy Taxi Service</a>
              <a href="/airport-to-ella">Airport to Ella Taxi</a>
            </div>
          </Reveal>
          <Reveal className="colombo-airport-summary">
            {scenicStops.map((item) => {
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

      <section className="section section--soft airport-to-kandy-route">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Route details and travel time"
            title="Taxi from Colombo airport to Kandy with cultural and hill country stops"
            text="Plan your Kandy airport transfer around your flight arrival, luggage, hotel location, and preferred stops along the route."
          />
          <div className="colombo-airport-route-grid">
            {routeDetails.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToKandyMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section airport-to-kandy-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for your private transfer to Kandy"
            text="Choose a private car, SUV, or van for airport to Kandy taxi service, luggage needs, families, and comfortable hill country travel."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} airport to Kandy taxi`} loading="lazy" />
                  <span>Airport to Kandy</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToKandyMessage(`${vehicle.name} airport to Kandy taxi`)}`}
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

      <section className="section section--soft airport-to-kandy-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">24/7 WhatsApp booking</span>
            <h2>Book your Kandy airport transfer</h2>
            <p>
              Send your flight number, arrival time, Kandy hotel, passenger count, and luggage details. We will reply with a fair route-based quote and confirm your driver.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToKandyMessage()}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Book on WhatsApp
              </a>
              <a className="button button--light" href="/airport-to-ella">
                <Car size={18} />
                Airport to Ella
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section airport-to-kandy-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Airport to Kandy FAQ"
            title="Colombo Airport to Kandy taxi questions"
            text="Helpful answers before booking your private airport transfer to Kandy."
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
