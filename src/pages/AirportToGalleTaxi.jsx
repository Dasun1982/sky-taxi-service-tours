import { Car, Clock3, Landmark, Luggage, MapPinned, MessageCircle, Palmtree, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const routeDetails = [
  {
    title: "Colombo Airport to Galle taxi",
    text: "Private transfer from Bandaranaike International Airport to Galle with flight-time checking, luggage support, and WhatsApp driver confirmation.",
    image: images.airportWelcome,
  },
  {
    title: "Route details and travel time",
    text: "The airport to Galle taxi route usually takes around 2 to 2.5 hours by Southern Expressway depending on traffic, pickup time, and hotel location.",
    image: images.airportTransfer,
  },
  {
    title: "Southern Expressway transfer",
    text: "Travel safely on the Southern Expressway with a clean private vehicle, comfort breaks when needed, and fair route-based pricing confirmed on WhatsApp.",
    image: images.galle,
  },
  {
    title: "Galle Fort and beach destinations",
    text: "Continue directly to Galle Fort, Unawatuna, Jungle Beach, Ahangama, Weligama, Mirissa, or nearby south coast hotels.",
    image: images.galleFort,
  },
];

const coastalStops = [
  {
    title: "Southern Expressway route",
    text: "A faster coastal transfer route from Colombo Airport to Galle with clean vehicles and safe local driver support.",
    icon: Route,
  },
  {
    title: "Galle Fort arrival",
    text: "Arrive near Galle Fort, boutique hotels, beach stays, or south coast pickup points with easy WhatsApp coordination.",
    icon: Landmark,
  },
  {
    title: "Beach destination support",
    text: "Use the same private transfer to reach Unawatuna, Jungle Beach, Ahangama, Weligama, Mirissa, and nearby hotels.",
    icon: Palmtree,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for a smooth Colombo Airport to Galle taxi transfer.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Clean wagon option for airport to Galle taxi rides with extra room for bags.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for couples, families, and south coast transfers.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for families and groups booking a private transfer to Galle.",
  },
];

const faqs = [
  {
    question: "How long does a Colombo Airport to Galle taxi take?",
    answer:
      "A Colombo Airport to Galle taxi usually takes around 2 to 2.5 hours by Southern Expressway depending on traffic, pickup time, comfort stops, and the exact Galle hotel location.",
  },
  {
    question: "Can I book an airport to Galle taxi after a late flight?",
    answer:
      "Yes. SKY Taxi Service & Tours can arrange Galle airport transfer service for day or night arrivals with flight-time checking and WhatsApp confirmation.",
  },
  {
    question: "Does the taxi use the Southern Expressway?",
    answer:
      "Yes. Most private transfers from Colombo Airport to Galle use the Southern Expressway for a faster coastal route, with highway ticket costs confirmed in your WhatsApp quote.",
  },
  {
    question: "Can I continue from Galle to beach destinations?",
    answer:
      "Yes. Your private transfer to Galle can continue to Galle Fort, Unawatuna, Jungle Beach, Ahangama, Weligama, Mirissa, or nearby south coast hotels.",
  },
  {
    question: "Is the Colombo Airport to Galle taxi price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
  },
];

function airportToGalleMessage(topic = "Colombo Airport to Galle taxi") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Flight number: ___ Arrival date/time: ___ Drop-off in Galle: ___ Number of passengers: ___ Luggage: ___`,
  );
}

export default function AirportToGalleTaxi({ setPage }) {
  return (
    <div className="page colombo-airport-page galle-taxi-page airport-to-galle-page">
      <PageHero
        eyebrow="Airport to Galle Taxi"
        title="Colombo Airport to Galle Taxi"
        description="Book a private taxi from Colombo Airport to Galle with safe coastal transfer, clean vehicles, local drivers, and 24/7 WhatsApp booking."
        image={images.galleFort}
        alt="Colombo Airport to Galle taxi private transfer Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToGalleMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Airport to Galle
          </a>
          <a className="button button--light" href="/galle-taxi-service">
            <Landmark size={18} />
            Galle Taxi Service
          </a>
        </div>
        <div className="premium-hero-badges" aria-label="Airport to Galle taxi benefits">
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

      <section className="section airport-to-galle-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Colombo Airport to Galle transfer</span>
            <h2>Private airport to Galle taxi with safe coastal transfer</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book a private Colombo Airport to Galle taxi before arrival. Your driver can meet you at the airport,
              help with luggage, use the Southern Expressway route, and take you safely to Galle Fort, beach hotels, or nearby south coast destinations.
            </p>
            <div className="colombo-airport-link-row">
              <button type="button" onClick={() => setPage("home")}>
                Homepage
              </button>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/galle-taxi-service">Galle Taxi Service</a>
              <a href="/airport-to-kandy">Airport to Kandy Taxi</a>
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

      <section className="section section--soft airport-to-galle-route">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Route details and travel time"
            title="Taxi from Colombo airport to Galle via Southern Expressway"
            text="Plan your Galle airport transfer around your flight arrival, luggage, hotel location, highway route, and nearby beach destination."
          />
          <div className="colombo-airport-route-grid">
            {routeDetails.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToGalleMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section airport-to-galle-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for your private transfer to Galle"
            text="Choose a private car, SUV, or van for airport to Galle taxi service, luggage needs, families, and comfortable south coast travel."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} airport to Galle taxi`} loading="lazy" />
                  <span>Airport to Galle</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToGalleMessage(`${vehicle.name} airport to Galle taxi`)}`}
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

      <section className="section section--soft airport-to-galle-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">24/7 WhatsApp booking</span>
            <h2>Book your Galle airport transfer</h2>
            <p>
              Send your flight number, arrival time, Galle hotel or beach destination, passenger count, and luggage details. We will reply with a fair route-based quote and confirm your driver.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToGalleMessage()}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Book on WhatsApp
              </a>
              <a className="button button--light" href="/galle-taxi-service">
                <Car size={18} />
                Galle Taxi Service
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section airport-to-galle-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Airport to Galle FAQ"
            title="Colombo Airport to Galle taxi questions"
            text="Helpful answers before booking your private airport transfer to Galle."
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
