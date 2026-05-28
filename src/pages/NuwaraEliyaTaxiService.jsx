import { Car, Clock3, Home, Luggage, MapPinned, MessageCircle, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const routeCards = [
  {
    title: "Colombo Airport to Nuwara Eliya taxi",
    text: "Book a private Colombo airport to Nuwara Eliya taxi with flight-time checking, luggage support, hill country route planning, and WhatsApp confirmation.",
    image: images.airportWelcome,
  },
  {
    title: "Nuwara Eliya to Ella taxi",
    text: "Travel from Nuwara Eliya to Ella with tea country views, waterfalls, scenic roads, Nine Arch Bridge access, and flexible comfort stops.",
    image: images.nineArchBridge,
  },
  {
    title: "Nuwara Eliya to Kandy route",
    text: "Plan a private hill country route to Kandy for Temple of the Tooth, botanical gardens, viewpoints, hotels, and cultural stops.",
    image: images.kandyTemple,
  },
  {
    title: "Nuwara Eliya to Galle transfer",
    text: "Book long-distance private taxi support from Nuwara Eliya to Galle Fort, Unawatuna, south coast hotels, and beach routes.",
    image: images.galleFort,
  },
  {
    title: "Nuwara Eliya to Mirissa taxi",
    text: "Travel from the hill country to Mirissa Beach, Weligama, whale watching points, and south coast hotels with a clean private vehicle.",
    image: images.whaleWatching,
  },
  {
    title: "Nuwara Eliya to Yala transfer",
    text: "Arrange private transfer from Nuwara Eliya to Yala National Park, Tissamaharama, or Kataragama with luggage-friendly vehicles.",
    image: images.safari,
  },
];

const hillCountryTransfers = [
  {
    title: "Tea plantation transfers",
    text: "Book taxi in Nuwara Eliya for tea factories, plantations, viewpoints, waterfalls, Gregory Lake, and scenic hill country roads.",
    image: images.trainRide,
  },
  {
    title: "Hill country hotel pickups",
    text: "Arrange private pickup from Nuwara Eliya hotels, guesthouses, railway stations, tea estates, and nearby mountain towns.",
    image: images.kandy,
  },
  {
    title: "Nuwara Eliya airport transfer support",
    text: "Plan Nuwara Eliya airport transfer pickup or drop-off with fair route-based quotes, clean vehicles, and 24/7 WhatsApp booking.",
    image: images.ambuluwawe,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for Nuwara Eliya airport transfer, tea country trips, and short hill country rides.",
  },
  {
    name: "Honda Insight",
    image: images.hondaInsight,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Clean hybrid option for taxi in Nuwara Eliya, hotel pickups, and budget-friendly private transfers.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Luggage-friendly wagon for airport transfers, Ella routes, Kandy trips, and family hill country travel.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for private driver Nuwara Eliya routes through mountain roads and longer island travel.",
  },
  {
    name: "Honda Freed",
    image: images.hondaFreed,
    passengers: "Best for 1-5 passengers",
    luggage: "Family luggage space",
    text: "Family-friendly vehicle for hill country transfers, luggage, hotel pickups, and custom Sri Lanka routes.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for groups, families, Colombo airport to Nuwara Eliya taxi routes, and luggage-heavy trips.",
  },
];

const highlights = [
  {
    title: "Hill country route support",
    text: "Friendly support for Nuwara Eliya taxi service, tea plantation trips, Ella transfers, Kandy routes, and scenic mountain roads.",
    icon: Route,
  },
  {
    title: "Airport transfer support",
    text: "Book Colombo airport to Nuwara Eliya taxi service with flight-time checking, fair quotes, clean vehicles, and luggage help.",
    icon: Plane,
  },
  {
    title: "24/7 WhatsApp booking",
    text: "Send your route, date, time, passengers, and luggage anytime to confirm a private driver Nuwara Eliya quote.",
    icon: Clock3,
  },
];

const faqs = [
  {
    question: "How do I book Nuwara Eliya taxi service?",
    answer:
      "Send your pickup location, drop-off location, date, time, number of passengers, and luggage details on WhatsApp. We will confirm the vehicle and fair route price before travel.",
  },
  {
    question: "Do you provide Colombo airport to Nuwara Eliya taxi service?",
    answer:
      "Yes. SKY Taxi Service & Tours provides private Colombo airport to Nuwara Eliya taxi service with flight-time checking, luggage support, and WhatsApp confirmation.",
  },
  {
    question: "Can I book taxi in Nuwara Eliya for Ella, Kandy, Galle, Mirissa, or Yala?",
    answer:
      "Yes. You can book private taxi routes from Nuwara Eliya to Ella, Kandy, Galle, Mirissa, Yala, Colombo Airport, and other destinations across Sri Lanka.",
  },
  {
    question: "Do you offer tea country and hill country transfers?",
    answer:
      "Yes. We arrange transfers for tea plantations, tea factories, waterfalls, viewpoints, Gregory Lake, hill country hotels, and scenic mountain routes.",
  },
  {
    question: "Is the Nuwara Eliya airport transfer price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on pickup location, route, date, pickup time, vehicle type, passengers, luggage, highway tickets, waiting time, mountain route conditions, and special requests.",
  },
];

function nuwaraEliyaTaxiMessage(topic = "Nuwara Eliya taxi service") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Pickup location: ___ Drop-off location: ___ Date/time: ___ Number of passengers: ___ Luggage: ___`,
  );
}

export default function NuwaraEliyaTaxiService({ setPage }) {
  return (
    <div className="page colombo-airport-page nuwara-eliya-taxi-page">
      <PageHero
        eyebrow="Nuwara Eliya Taxi Service"
        title="Nuwara Eliya Taxi Service"
        description="Book Nuwara Eliya taxi service for Colombo airport transfers, hill country routes, tea plantation trips, private drivers, and 24/7 WhatsApp booking."
        image={images.trainRide}
        alt="Nuwara Eliya taxi service hill country airport transfer"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${nuwaraEliyaTaxiMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Nuwara Eliya Taxi
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Nuwara Eliya taxi service benefits">
          <span>
            <Plane size={16} />
            Airport transfers
          </span>
          <span>
            <Route size={16} />
            Hill country routes
          </span>
          <span>
            <MapPinned size={16} />
            Tea country trips
          </span>
          <span>
            <ShieldCheck size={16} />
            Private driver
          </span>
        </div>
      </PageHero>

      <section className="section nuwara-eliya-taxi-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Taxi in Nuwara Eliya</span>
            <h2>Nuwara Eliya taxi service intro for airport, tea country, and island routes</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book taxi in Nuwara Eliya for Colombo Airport pickup, Ella transfers, Kandy routes,
              Galle and Mirissa trips, Yala safari transfers, tea plantation visits, and custom private driver Nuwara Eliya plans.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/ella-taxi-service">Ella Taxi Service</a>
              <a href="/kandy-taxi-service">Kandy Taxi Service</a>
              <a href="/galle-taxi-service">Galle Taxi Service</a>
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

      <section className="section section--soft nuwara-eliya-routes">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Nuwara Eliya airport transfer and routes"
            title="Colombo Airport to Nuwara Eliya taxi and hill country transfer routes"
            text="Choose private taxi routes from Nuwara Eliya to Ella, Kandy, Galle, Mirissa, Yala, Colombo Airport, and custom Sri Lanka destinations."
          />
          <div className="colombo-airport-route-grid">
            {routeCards.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${nuwaraEliyaTaxiMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section nuwara-eliya-hill-country">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Tea country and hill country transfer section"
            title="Tea country and hill country transfers from Nuwara Eliya"
            text="Book private transfers for tea plantations, waterfalls, viewpoints, hotels, railway stations, Gregory Lake, and scenic mountain routes."
          />
          <div className="colombo-airport-route-grid">
            {hillCountryTransfers.map((transfer) => (
              <Reveal className="colombo-airport-route-card" key={transfer.title}>
                <img src={transfer.image} alt={transfer.title} loading="lazy" />
                <div>
                  <h3>{transfer.title}</h3>
                  <p>{transfer.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${nuwaraEliyaTaxiMessage(transfer.title)}`} target="_blank" rel="noreferrer">
                    Book hill transfer
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft nuwara-eliya-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for private driver Nuwara Eliya routes"
            text="Choose a car, SUV, family vehicle, or van for airport transfers, tea country trips, Ella routes, Kandy trips, and longer island travel."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} Nuwara Eliya taxi service vehicle`} loading="lazy" />
                  <span>Nuwara Eliya taxi</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${nuwaraEliyaTaxiMessage(`${vehicle.name} Nuwara Eliya taxi`)}`}
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

      <section className="section nuwara-eliya-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Nuwara Eliya airport transfer</span>
            <h2>Book your Nuwara Eliya taxi on WhatsApp</h2>
            <p>
              Send your pickup location, destination, date, time, passengers, and luggage. We will reply with a fair private taxi quote and vehicle option.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${nuwaraEliyaTaxiMessage()}`} target="_blank" rel="noreferrer">
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

      <section className="section nuwara-eliya-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Nuwara Eliya taxi FAQ"
            title="Nuwara Eliya taxi service questions"
            text="Helpful answers before booking taxi in Nuwara Eliya, Colombo airport to Nuwara Eliya taxi service, or private driver Nuwara Eliya routes."
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
