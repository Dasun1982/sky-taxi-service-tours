import { Car, Clock3, Luggage, MapPinned, MessageCircle, Palmtree, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const routeDetails = [
  {
    title: "Colombo Airport to Weligama taxi",
    text: "Private transfer from Bandaranaike International Airport to Weligama with flight-time checking, luggage support, and WhatsApp driver confirmation.",
    image: images.airportWelcome,
  },
  {
    title: "Route details and travel time",
    text: "The airport to Weligama taxi route usually takes around 2.5 to 3 hours by Southern Expressway depending on traffic, pickup time, and hotel location.",
    image: images.airportTransfer,
  },
  {
    title: "Southern Expressway surf beach transfer",
    text: "Travel safely toward the south coast using the Southern Expressway with a clean private vehicle, fair route quote, and local driver support.",
    image: images.surfing,
  },
  {
    title: "Weligama surf beach, Mirissa, Ahangama, and Galle",
    text: "Continue directly to Weligama surf beach, Mirissa, Ahangama, Galle, Unawatuna, or nearby south coast hotels and villas.",
    image: images.blueBeach,
  },
];

const surfStops = [
  {
    title: "Weligama surf transfer",
    text: "Arrive directly at Weligama surf beach hotels, surf camps, villas, or guesthouses with simple WhatsApp coordination.",
    icon: Palmtree,
  },
  {
    title: "Mirissa and Ahangama routes",
    text: "Use the same private transfer for Mirissa, Ahangama, Midigama, Kabalana, and nearby south coast surf areas.",
    icon: MapPinned,
  },
  {
    title: "Galle and beach connections",
    text: "Add Galle Fort, Unawatuna, or coastal hotel stops before or after your Weligama airport transfer.",
    icon: Route,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for a smooth Colombo Airport to Weligama taxi transfer.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Clean wagon option for airport to Weligama taxi rides with extra room for bags.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for couples, families, and surf beach transfers.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for families, groups, surfboards, and private transfers to Weligama.",
  },
];

const faqs = [
  {
    question: "How long does a Colombo Airport to Weligama taxi take?",
    answer:
      "A Colombo Airport to Weligama taxi usually takes around 2.5 to 3 hours by Southern Expressway depending on traffic, pickup time, comfort stops, and the exact Weligama hotel location.",
  },
  {
    question: "Can I book an airport to Weligama taxi after a late flight?",
    answer:
      "Yes. SKY Taxi Service & Tours can arrange Weligama airport transfer service for day or night arrivals with flight-time checking and WhatsApp confirmation.",
  },
  {
    question: "Does the taxi use the Southern Expressway?",
    answer:
      "Yes. Most private transfers from Colombo Airport to Weligama use the Southern Expressway for a faster surf beach transfer, with highway ticket costs confirmed in your WhatsApp quote.",
  },
  {
    question: "Can I continue from Weligama to Mirissa, Ahangama, or Galle?",
    answer:
      "Yes. Your private transfer to Weligama can continue to Mirissa, Ahangama, Midigama, Galle, Unawatuna, or nearby south coast hotels.",
  },
  {
    question: "Is the Colombo Airport to Weligama taxi price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, surfboards, and special requests.",
  },
];

function airportToWeligamaMessage(topic = "Colombo Airport to Weligama taxi") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Flight number: ___ Arrival date/time: ___ Drop-off in Weligama: ___ Number of passengers: ___ Luggage/surfboards: ___`,
  );
}

export default function AirportToWeligamaTaxi({ setPage }) {
  return (
    <div className="page colombo-airport-page weligama-taxi-page airport-to-weligama-page">
      <PageHero
        eyebrow="Airport to Weligama Taxi"
        title="Colombo Airport to Weligama Taxi"
        description="Book a private taxi from Colombo Airport to Weligama with safe surf beach transfer, clean vehicles, local drivers, and 24/7 WhatsApp booking."
        image={images.surfing}
        alt="Colombo Airport to Weligama taxi private surf beach transfer Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToWeligamaMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Airport to Weligama
          </a>
          <a className="button button--light" href="/weligama-taxi-service">
            <Palmtree size={18} />
            Weligama Taxi Service
          </a>
        </div>
        <div className="premium-hero-badges" aria-label="Airport to Weligama taxi benefits">
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

      <section className="section airport-to-weligama-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Colombo Airport to Weligama transfer</span>
            <h2>Private airport to Weligama taxi with safe surf beach transfer</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book a private Colombo Airport to Weligama taxi before arrival. Your driver can meet you at the airport,
              help with luggage or surfboards, use the Southern Expressway route, and take you safely to Weligama surf beach, Mirissa, Ahangama, or nearby hotels.
            </p>
            <div className="colombo-airport-link-row">
              <button type="button" onClick={() => setPage("home")}>
                Homepage
              </button>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/weligama-taxi-service">Weligama Taxi Service</a>
              <a href="/mirissa-taxi-service">Mirissa Taxi Service</a>
              <a href="/airport-to-mirissa">Airport to Mirissa Taxi</a>
              <a href="/airport-to-unawatuna">Airport to Unawatuna Taxi</a>
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

      <section className="section section--soft airport-to-weligama-route">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Route details and travel time"
            title="Taxi from Colombo airport to Weligama via Southern Expressway"
            text="Plan your Weligama airport transfer around your flight arrival, luggage, surfboards, hotel location, highway route, and south coast travel plans."
          />
          <div className="colombo-airport-route-grid">
            {routeDetails.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToWeligamaMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section airport-to-weligama-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for your private transfer to Weligama"
            text="Choose a private car, SUV, or van for airport to Weligama taxi service, luggage needs, surfboards, families, and comfortable south coast travel."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} airport to Weligama taxi`} loading="lazy" />
                  <span>Airport to Weligama</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToWeligamaMessage(`${vehicle.name} airport to Weligama taxi`)}`}
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

      <section className="section section--soft airport-to-weligama-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">24/7 WhatsApp booking</span>
            <h2>Book your Weligama airport transfer</h2>
            <p>
              Send your flight number, arrival time, Weligama hotel or surf camp, passenger count, luggage, and surfboard details. We will reply with a fair route-based quote and confirm your driver.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToWeligamaMessage()}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Book on WhatsApp
              </a>
              <a className="button button--light" href="/airport-to-mirissa">
                <Car size={18} />
                Airport to Mirissa
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section airport-to-weligama-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Airport to Weligama FAQ"
            title="Colombo Airport to Weligama taxi questions"
            text="Helpful answers before booking your private airport transfer to Weligama."
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
