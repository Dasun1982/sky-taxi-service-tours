import { Car, Clock3, Luggage, MapPinned, MessageCircle, Palmtree, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const routeDetails = [
  {
    title: "Colombo Airport to Mirissa taxi",
    text: "Private transfer from Bandaranaike International Airport to Mirissa with flight-time checking, luggage support, and WhatsApp driver confirmation.",
    image: images.airportWelcome,
  },
  {
    title: "Route details and travel time",
    text: "The airport to Mirissa taxi route usually takes around 2.5 to 3.5 hours by Southern Expressway depending on traffic, pickup time, and hotel location.",
    image: images.airportTransfer,
  },
  {
    title: "Southern Expressway beach transfer",
    text: "Travel safely toward the south coast using the Southern Expressway with a clean private vehicle, fair route quote, and local driver support.",
    image: images.blueBeach,
  },
  {
    title: "Mirissa Beach and whale watching transfer",
    text: "Continue directly to Mirissa Beach, whale watching harbor pickups, Weligama, Galle, Unawatuna, or nearby south coast hotels.",
    image: images.whaleWatching,
  },
];

const coastalStops = [
  {
    title: "Southern Expressway route",
    text: "A comfortable airport to Mirissa taxi route with safe coastal travel, clean vehicles, and flexible comfort stops.",
    icon: Route,
  },
  {
    title: "Mirissa Beach transfer",
    text: "Arrive directly at Mirissa Beach hotels, guesthouses, villas, or nearby Weligama and south coast pickup points.",
    icon: Palmtree,
  },
  {
    title: "Whale watching pickup support",
    text: "Ask for early morning whale watching transfer Mirissa support, harbor drop-off timing, and return travel if needed.",
    icon: MapPinned,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for a smooth Colombo Airport to Mirissa taxi transfer.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Clean wagon option for airport to Mirissa taxi rides with extra room for bags.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for couples, families, and south coast beach transfers.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for families and groups booking a private transfer to Mirissa.",
  },
];

const faqs = [
  {
    question: "How long does a Colombo Airport to Mirissa taxi take?",
    answer:
      "A Colombo Airport to Mirissa taxi usually takes around 2.5 to 3.5 hours by Southern Expressway depending on traffic, pickup time, comfort stops, and the exact Mirissa hotel location.",
  },
  {
    question: "Can I book an airport to Mirissa taxi after a late flight?",
    answer:
      "Yes. SKY Taxi Service & Tours can arrange Mirissa airport transfer service for day or night arrivals with flight-time checking and WhatsApp confirmation.",
  },
  {
    question: "Does the taxi use the Southern Expressway?",
    answer:
      "Yes. Most private transfers from Colombo Airport to Mirissa use the Southern Expressway for a faster beach transfer, with highway ticket costs confirmed in your WhatsApp quote.",
  },
  {
    question: "Can I book a whale watching transfer Mirissa pickup?",
    answer:
      "Yes. We can arrange early morning whale watching transfer Mirissa support, harbor drop-off, hotel pickup, and return travel depending on your schedule.",
  },
  {
    question: "Is the Colombo Airport to Mirissa taxi price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
  },
];

function airportToMirissaMessage(topic = "Colombo Airport to Mirissa taxi") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Flight number: ___ Arrival date/time: ___ Drop-off in Mirissa: ___ Number of passengers: ___ Luggage: ___`,
  );
}

export default function AirportToMirissaTaxi({ setPage }) {
  return (
    <div className="page colombo-airport-page mirissa-taxi-page airport-to-mirissa-page">
      <PageHero
        eyebrow="Airport to Mirissa Taxi"
        title="Colombo Airport to Mirissa Taxi"
        description="Book a private taxi from Colombo Airport to Mirissa with safe beach transfer, clean vehicles, local drivers, and 24/7 WhatsApp booking."
        image={images.whaleWatching}
        alt="Colombo Airport to Mirissa taxi private beach transfer Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToMirissaMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Airport to Mirissa
          </a>
          <a className="button button--light" href="/mirissa-taxi-service">
            <Palmtree size={18} />
            Mirissa Taxi Service
          </a>
        </div>
        <div className="premium-hero-badges" aria-label="Airport to Mirissa taxi benefits">
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

      <section className="section airport-to-mirissa-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Colombo Airport to Mirissa transfer</span>
            <h2>Private airport to Mirissa taxi with safe beach transfer</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book a private Colombo Airport to Mirissa taxi before arrival. Your driver can meet you at the airport,
              help with luggage, use the Southern Expressway route, and take you safely to Mirissa Beach, whale watching pickups, or nearby south coast hotels.
            </p>
            <div className="colombo-airport-link-row">
              <button type="button" onClick={() => setPage("home")}>
                Homepage
              </button>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/mirissa-taxi-service">Mirissa Taxi Service</a>
              <a href="/galle-taxi-service">Galle Taxi Service</a>
              <a href="/airport-to-galle">Airport to Galle Taxi</a>
              <a href="/airport-to-ella">Airport to Ella Taxi</a>
            </div>
          </Reveal>
          <Reveal className="colombo-airport-summary">
            {coastalStops.map((item) => {
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

      <section className="section section--soft airport-to-mirissa-route">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Route details and travel time"
            title="Taxi from Colombo airport to Mirissa via Southern Expressway"
            text="Plan your Mirissa airport transfer around your flight arrival, luggage, hotel location, highway route, beach stay, and whale watching schedule."
          />
          <div className="colombo-airport-route-grid">
            {routeDetails.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToMirissaMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section airport-to-mirissa-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for your private transfer to Mirissa"
            text="Choose a private car, SUV, or van for airport to Mirissa taxi service, luggage needs, families, and comfortable south coast beach travel."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} airport to Mirissa taxi`} loading="lazy" />
                  <span>Airport to Mirissa</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToMirissaMessage(`${vehicle.name} airport to Mirissa taxi`)}`}
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

      <section className="section section--soft airport-to-mirissa-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">24/7 WhatsApp booking</span>
            <h2>Book your Mirissa airport transfer</h2>
            <p>
              Send your flight number, arrival time, Mirissa hotel or beach destination, passenger count, and luggage details. We will reply with a fair route-based quote and confirm your driver.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToMirissaMessage()}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Book on WhatsApp
              </a>
              <a className="button button--light" href="/airport-to-galle">
                <Car size={18} />
                Airport to Galle
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section airport-to-mirissa-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Airport to Mirissa FAQ"
            title="Colombo Airport to Mirissa taxi questions"
            text="Helpful answers before booking your private airport transfer to Mirissa."
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
