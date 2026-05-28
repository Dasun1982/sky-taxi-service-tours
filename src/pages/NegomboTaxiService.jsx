import { Clock3, Home, Luggage, MapPinned, MessageCircle, Plane, Route, ShieldCheck, Users, Waves } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const routeCards = [
  {
    title: "Colombo Airport to Negombo taxi",
    text: "Book a private Colombo airport to Negombo taxi with flight-time checking, luggage support, quick pickup planning, and WhatsApp confirmation.",
    image: images.airportWelcome,
  },
  {
    title: "Negombo to Colombo taxi",
    text: "Travel from Negombo to Colombo city, hotels, business areas, railway stations, shopping stops, and private appointments.",
    image: images.colomboCulture,
  },
  {
    title: "Negombo to Galle route",
    text: "Plan a private south coast transfer to Galle Fort, Unawatuna, beach hotels, coastal viewpoints, and flexible comfort stops.",
    image: images.galleFort,
  },
  {
    title: "Negombo to Kandy taxi",
    text: "Book private driver Negombo support for Kandy, Temple of the Tooth, botanical gardens, hotels, and hill country connections.",
    image: images.kandyTemple,
  },
  {
    title: "Negombo to Ella taxi",
    text: "Travel from Negombo to Ella with tea country views, waterfalls, Nine Arch Bridge access, and comfortable route breaks.",
    image: images.nineArchBridge,
  },
  {
    title: "Negombo to Sigiriya taxi",
    text: "Arrange a Cultural Triangle route from Negombo to Sigiriya Rock Fortress, Dambulla Cave Temple, and nearby hotels.",
    image: images.sigiriya,
  },
  {
    title: "Negombo to Mirissa transfer",
    text: "Book a private beach route from Negombo to Mirissa, Weligama, whale watching areas, and south coast hotels.",
    image: images.whaleWatching,
  },
];

const pickupSections = [
  {
    title: "Negombo airport transfer",
    text: "Plan airport pickup or drop-off from Negombo with fair route-based quotes, clean vehicles, luggage help, and 24/7 WhatsApp booking.",
    image: images.airportTransfer,
  },
  {
    title: "Negombo beach hotel pickups",
    text: "Book taxi in Negombo for beach hotels, guesthouses, lagoon stays, restaurants, railway stations, and local coastal pickup points.",
    image: images.beach,
  },
  {
    title: "Lagoon and beach transfer support",
    text: "Travel from Negombo to Colombo, airport hotels, lagoon boat areas, beach routes, and custom Sri Lanka destinations.",
    image: images.boatTour,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for Negombo airport transfer, Colombo rides, and short coastal routes.",
  },
  {
    name: "Honda Insight",
    image: images.hondaInsight,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Clean hybrid option for taxi in Negombo, hotel pickups, and budget-friendly private transfers.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Luggage-friendly wagon for airport pickups, Colombo routes, Kandy trips, and family travel.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for private driver Negombo routes to Sigiriya, Ella, Galle, and longer island travel.",
  },
  {
    name: "Honda Freed",
    image: images.hondaFreed,
    passengers: "Best for 1-5 passengers",
    luggage: "Family luggage space",
    text: "Family-friendly vehicle for airport pickup, beach transfers, luggage, and custom Sri Lanka taxi routes.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for groups, families, Colombo airport to Negombo taxi routes, and luggage-heavy trips.",
  },
];

const highlights = [
  {
    title: "Airport-area taxi support",
    text: "Friendly local support for Negombo taxi service, Colombo Airport pickups, airport hotels, beach stays, and island routes.",
    icon: Plane,
  },
  {
    title: "Beach transfer support",
    text: "Book Negombo beach transfers for hotels, lagoon areas, Colombo, Galle, Kandy, Sigiriya, Ella, and Mirissa routes.",
    icon: Waves,
  },
  {
    title: "24/7 WhatsApp booking",
    text: "Send your route, date, time, passengers, and luggage anytime to confirm a private driver Negombo quote.",
    icon: Clock3,
  },
];

const faqs = [
  {
    question: "How do I book Negombo taxi service?",
    answer:
      "Send your pickup location, drop-off location, date, time, number of passengers, and luggage details on WhatsApp. We will confirm the vehicle and fair route price before travel.",
  },
  {
    question: "Do you provide Colombo airport to Negombo taxi service?",
    answer:
      "Yes. SKY Taxi Service & Tours provides private Colombo airport to Negombo taxi service with flight-time checking, luggage support, and WhatsApp confirmation.",
  },
  {
    question: "Can I book taxi in Negombo for Colombo, Galle, Kandy, Ella, Sigiriya, or Mirissa?",
    answer:
      "Yes. You can book private taxi routes from Negombo to Colombo, Galle, Kandy, Ella, Sigiriya, Mirissa, Colombo Airport, and other destinations across Sri Lanka.",
  },
  {
    question: "Do you offer airport pickup and beach transfers from Negombo?",
    answer:
      "Yes. We arrange Negombo airport transfer service, beach hotel pickups, lagoon transfers, airport hotel rides, and longer private routes around Sri Lanka.",
  },
  {
    question: "Is the Negombo airport transfer price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on pickup location, route, date, pickup time, vehicle type, passengers, luggage, highway tickets, waiting time, and special requests.",
  },
];

function negomboTaxiMessage(topic = "Negombo taxi service") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Pickup location: ___ Drop-off location: ___ Date/time: ___ Number of passengers: ___ Luggage: ___`,
  );
}

export default function NegomboTaxiService({ setPage }) {
  return (
    <div className="page colombo-airport-page negombo-taxi-page">
      <PageHero
        eyebrow="Negombo Taxi Service"
        title="Negombo Taxi Service"
        description="Book Negombo taxi service for Colombo airport transfers, beach routes, private drivers, clean vehicles, and 24/7 WhatsApp booking."
        image={images.beach}
        alt="Negombo taxi service airport transfer and beach route"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${negomboTaxiMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Negombo Taxi
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Negombo taxi service benefits">
          <span>
            <Plane size={16} />
            Airport transfers
          </span>
          <span>
            <Waves size={16} />
            Beach transfers
          </span>
          <span>
            <Route size={16} />
            Island routes
          </span>
          <span>
            <ShieldCheck size={16} />
            Private driver
          </span>
        </div>
      </PageHero>

      <section className="section negombo-taxi-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Taxi in Negombo</span>
            <h2>Negombo taxi service intro for airport, beach, and island routes</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book taxi in Negombo for Colombo Airport pickup, beach routes, airport hotels,
              Colombo city rides, Galle transfers, Kandy trips, Ella routes, Sigiriya travel, Mirissa transfers, and private driver Negombo plans.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/kandy-taxi-service">Kandy Taxi Service</a>
              <a href="/sigiriya-taxi-service">Sigiriya Taxi Service</a>
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

      <section className="section section--soft negombo-routes">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Negombo airport transfer and routes"
            title="Colombo Airport to Negombo taxi and island transfer routes"
            text="Choose private taxi routes from Negombo to Colombo, Galle, Kandy, Ella, Sigiriya, Mirissa, Colombo Airport, and custom Sri Lanka destinations."
          />
          <div className="colombo-airport-route-grid">
            {routeCards.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${negomboTaxiMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section negombo-pickup-transfers">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Airport pickup and beach transfer section"
            title="Airport pickup and beach transfers from Negombo"
            text="Book private transfers for Negombo beach hotels, airport hotels, Colombo Airport, lagoon areas, Colombo city, and longer island routes."
          />
          <div className="colombo-airport-route-grid">
            {pickupSections.map((section) => (
              <Reveal className="colombo-airport-route-card" key={section.title}>
                <img src={section.image} alt={section.title} loading="lazy" />
                <div>
                  <h3>{section.title}</h3>
                  <p>{section.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${negomboTaxiMessage(section.title)}`} target="_blank" rel="noreferrer">
                    Book transfer
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft negombo-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for private driver Negombo routes"
            text="Choose a car, SUV, family vehicle, or van for airport transfers, beach routes, Colombo rides, Kandy trips, and longer island travel."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} Negombo taxi service vehicle`} loading="lazy" />
                  <span>Negombo taxi</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${negomboTaxiMessage(`${vehicle.name} Negombo taxi`)}`}
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

      <section className="section negombo-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Negombo airport transfer</span>
            <h2>Book your Negombo taxi on WhatsApp</h2>
            <p>
              Send your pickup location, destination, date, time, passengers, and luggage. We will reply with a fair private taxi quote and vehicle option.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${negomboTaxiMessage()}`} target="_blank" rel="noreferrer">
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

      <section className="section negombo-faq" itemScope itemType="https://schema.org/FAQPage">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Negombo taxi FAQ"
            title="Negombo taxi service questions"
            text="Helpful answers before booking taxi in Negombo, Colombo airport to Negombo taxi service, or private driver Negombo routes."
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
