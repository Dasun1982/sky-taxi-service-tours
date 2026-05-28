import { Car, Clock3, Luggage, MapPinned, MessageCircle, Palmtree, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const routeDetails = [
  {
    title: "Colombo Airport to Hiriketiya taxi",
    text: "Private transfer from Bandaranaike International Airport to Hiriketiya with flight-time checking, luggage support, and WhatsApp driver confirmation.",
    image: images.airportWelcome,
  },
  {
    title: "Route details and travel time",
    text: "The airport to Hiriketiya taxi route usually takes around 3 to 4 hours by Southern Expressway depending on traffic, pickup time, and hotel location.",
    image: images.airportTransfer,
  },
  {
    title: "Southern Expressway surf transfer",
    text: "Travel safely toward the deep south using the Southern Expressway with a clean private vehicle, fair route quote, and local driver support.",
    image: images.surfing,
  },
  {
    title: "Hiriketiya Beach, Dickwella, Tangalle, and south coast",
    text: "Continue directly to Hiriketiya Beach, Dickwella, Tangalle, Dikwella hotels, surf stays, or nearby south coast villas.",
    image: images.hiriketiyaBeach,
  },
];

const surfStops = [
  {
    title: "Hiriketiya surf transfer",
    text: "Arrive directly at Hiriketiya surf beach hotels, villas, surf stays, or guesthouses with simple WhatsApp coordination.",
    icon: Palmtree,
  },
  {
    title: "Dickwella and Tangalle routes",
    text: "Use the same private transfer for Dickwella, Tangalle, Nilwella, Kudawella, and nearby deep south beach areas.",
    icon: MapPinned,
  },
  {
    title: "South coast connections",
    text: "Connect Hiriketiya with Weligama, Mirissa, Galle, Yala, Ella, or custom Sri Lanka round tour routes.",
    icon: Route,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for a smooth Colombo Airport to Hiriketiya taxi transfer.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Clean wagon option for airport to Hiriketiya taxi rides with extra room for bags.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for couples, families, and Hiriketiya surf transfers.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for families, groups, surfboards, and private transfers to Hiriketiya.",
  },
];

const faqs = [
  {
    question: "How long does a Colombo Airport to Hiriketiya taxi take?",
    answer:
      "A Colombo Airport to Hiriketiya taxi usually takes around 3 to 4 hours by Southern Expressway depending on traffic, pickup time, comfort stops, and the exact Hiriketiya hotel location.",
  },
  {
    question: "Can I book an airport to Hiriketiya taxi after a late flight?",
    answer:
      "Yes. SKY Taxi Service & Tours can arrange Hiriketiya airport transfer service for day or night arrivals with flight-time checking and WhatsApp confirmation.",
  },
  {
    question: "Does the taxi use the Southern Expressway?",
    answer:
      "Yes. Most private transfers from Colombo Airport to Hiriketiya use the Southern Expressway for a faster surf beach transfer, with highway ticket costs confirmed in your WhatsApp quote.",
  },
  {
    question: "Can I continue from Hiriketiya to Dickwella or Tangalle?",
    answer:
      "Yes. Your private transfer to Hiriketiya can continue to Dickwella, Tangalle, Kudawella, Nilwella, Mirissa, Weligama, or nearby south coast hotels.",
  },
  {
    question: "Is the Colombo Airport to Hiriketiya taxi price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, surfboards, and special requests.",
  },
];

function airportToHiriketiyaMessage(topic = "Colombo Airport to Hiriketiya taxi") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Flight number: ___ Arrival date/time: ___ Drop-off in Hiriketiya: ___ Number of passengers: ___ Luggage/surfboards: ___`,
  );
}

export default function AirportToHiriketiyaTaxi({ setPage }) {
  return (
    <div className="page colombo-airport-page hiriketiya-taxi-page airport-to-hiriketiya-page">
      <PageHero
        eyebrow="Airport to Hiriketiya Taxi"
        title="Colombo Airport to Hiriketiya Taxi"
        description="Book a private taxi from Colombo Airport to Hiriketiya with safe surf beach transfer, clean vehicles, local drivers, and 24/7 WhatsApp booking."
        image={images.hiriketiyaBeach}
        alt="Colombo Airport to Hiriketiya taxi private surf beach transfer Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToHiriketiyaMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Airport to Hiriketiya
          </a>
          <a className="button button--light" href="/hiriketiya-taxi-service">
            <Palmtree size={18} />
            Hiriketiya Taxi Service
          </a>
        </div>
        <div className="premium-hero-badges" aria-label="Airport to Hiriketiya taxi benefits">
          <span>
            <Plane size={16} />
            Airport pickup
          </span>
          <span>
            <Route size={16} />
            Expressway route
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

      <section className="section airport-to-hiriketiya-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Colombo Airport to Hiriketiya transfer</span>
            <h2>Private airport to Hiriketiya taxi with safe surf beach transfer</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book a private Colombo Airport to Hiriketiya taxi before arrival. Your driver can meet you at the airport,
              help with luggage or surfboards, use the Southern Expressway route, and take you safely to Hiriketiya Beach, Dickwella, Tangalle, or nearby south coast hotels.
            </p>
            <div className="colombo-airport-link-row">
              <button type="button" onClick={() => setPage("home")}>
                Homepage
              </button>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/hiriketiya-taxi-service">Hiriketiya Taxi Service</a>
              <a href="/weligama-taxi-service">Weligama Taxi Service</a>
              <a href="/mirissa-taxi-service">Mirissa Taxi Service</a>
              <a href="/airport-to-weligama">Airport to Weligama Taxi</a>
            </div>
          </Reveal>
          <Reveal className="colombo-airport-summary">
            {surfStops.map((item) => {
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

      <section className="section section--soft airport-to-hiriketiya-route">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Route details and travel time"
            title="Taxi from Colombo airport to Hiriketiya via Southern Expressway"
            text="Plan your Hiriketiya airport transfer around your flight arrival, luggage, surfboards, hotel location, highway route, and south coast travel plans."
          />
          <div className="colombo-airport-route-grid">
            {routeDetails.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToHiriketiyaMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section airport-to-hiriketiya-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for your private transfer to Hiriketiya"
            text="Choose a private car, SUV, or van for airport to Hiriketiya taxi service, luggage needs, surfboards, families, and comfortable south coast travel."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} airport to Hiriketiya taxi`} loading="lazy" />
                  <span>Airport to Hiriketiya</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToHiriketiyaMessage(`${vehicle.name} airport to Hiriketiya taxi`)}`}
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

      <section className="section section--soft airport-to-hiriketiya-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">24/7 WhatsApp booking</span>
            <h2>Book your Hiriketiya airport transfer</h2>
            <p>
              Send your flight number, arrival time, Hiriketiya hotel or surf stay, passenger count, luggage, and surfboard details. We will reply with a fair route-based quote and confirm your driver.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToHiriketiyaMessage()}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Book on WhatsApp
              </a>
              <a className="button button--light" href="/airport-to-weligama">
                <Car size={18} />
                Airport to Weligama
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section airport-to-hiriketiya-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Airport to Hiriketiya FAQ"
            title="Colombo Airport to Hiriketiya taxi questions"
            text="Helpful answers before booking your private airport transfer to Hiriketiya."
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
