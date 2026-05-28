import { Clock3, Home, Luggage, MapPinned, MessageCircle, Plane, Route, ShieldCheck, Users, Waves } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const routeCards = [
  {
    title: "Colombo Airport to Arugam Bay taxi",
    text: "Book a private Colombo airport to Arugam Bay taxi with flight-time checking, luggage support, long-distance route planning, and WhatsApp confirmation.",
    image: images.airportWelcome,
  },
  {
    title: "Arugam Bay to Ella taxi",
    text: "Travel from Arugam Bay to Ella with hill country views, waterfalls, tea routes, Nine Arch Bridge access, and flexible comfort stops.",
    image: images.nineArchBridge,
  },
  {
    title: "Arugam Bay to Yala transfer",
    text: "Arrange private transfer from Arugam Bay to Yala National Park, Tissamaharama, or Kataragama with luggage-friendly vehicles.",
    image: images.safari,
  },
  {
    title: "Arugam Bay to Kandy route",
    text: "Book private driver Arugam Bay support for Kandy, Temple of the Tooth, hill country stops, hotels, and cultural routes.",
    image: images.kandyTemple,
  },
  {
    title: "Arugam Bay to Mirissa taxi",
    text: "Plan a private beach route from Arugam Bay to Mirissa, Weligama, whale watching areas, and south coast hotels.",
    image: images.whaleWatching,
  },
  {
    title: "Arugam Bay to Galle taxi",
    text: "Travel from Arugam Bay to Galle Fort, Unawatuna, south coast viewpoints, beach hotels, and flexible coastal stops.",
    image: images.galleFort,
  },
];

const surfTransfers = [
  {
    title: "Arugam Bay surf beach pickups",
    text: "Book taxi in Arugam Bay for surf points, beach hotels, guesthouses, board bags, luggage, and local pickup points.",
    image: images.surfing,
  },
  {
    title: "East coast surf transfers",
    text: "Travel from Arugam Bay to nearby surf beaches, Pottuvil, east coast stays, Ella, Yala, and custom Sri Lanka routes.",
    image: images.blueBeach,
  },
  {
    title: "Airport and surf route support",
    text: "Plan Arugam Bay airport transfer pickup or drop-off with fair route-based quotes, clean vehicles, and 24/7 WhatsApp booking.",
    image: images.beach,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for Arugam Bay airport transfer, surf beach pickups, and couple long-distance rides.",
  },
  {
    name: "Honda Insight",
    image: images.hondaInsight,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Clean hybrid option for taxi in Arugam Bay, hotel pickups, and budget-friendly private transfers.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Luggage-friendly wagon for airport transfers, surf gear, Ella routes, Yala trips, and family travel.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for private driver Arugam Bay routes to Ella, Yala, Kandy, and longer island travel.",
  },
  {
    name: "Honda Freed",
    image: images.hondaFreed,
    passengers: "Best for 1-5 passengers",
    luggage: "Family luggage space",
    text: "Family-friendly vehicle for surf trips, airport pickup, luggage, and custom east coast taxi routes.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for groups, families, Colombo airport to Arugam Bay taxi routes, and luggage-heavy trips.",
  },
];

const highlights = [
  {
    title: "Surf trip taxi support",
    text: "Friendly local support for Arugam Bay taxi service, surf beach pickups, Pottuvil, Ella, Yala, and long-distance routes.",
    icon: Waves,
  },
  {
    title: "Airport transfer support",
    text: "Book Colombo airport to Arugam Bay taxi service with flight-time checking, fair quotes, clean vehicles, and luggage help.",
    icon: Plane,
  },
  {
    title: "24/7 WhatsApp booking",
    text: "Send your route, date, time, passengers, and luggage anytime to confirm a private driver Arugam Bay quote.",
    icon: Clock3,
  },
];

const faqs = [
  {
    question: "How do I book Arugam Bay taxi service?",
    answer:
      "Send your pickup location, drop-off location, date, time, number of passengers, and luggage details on WhatsApp. We will confirm the vehicle and fair route price before travel.",
  },
  {
    question: "Do you provide Colombo airport to Arugam Bay taxi service?",
    answer:
      "Yes. SKY Taxi Service & Tours provides private Colombo airport to Arugam Bay taxi service with flight-time checking, luggage support, and WhatsApp confirmation.",
  },
  {
    question: "Can I book taxi in Arugam Bay for Ella, Yala, Kandy, Mirissa, or Galle?",
    answer:
      "Yes. You can book private taxi routes from Arugam Bay to Ella, Yala, Kandy, Mirissa, Galle, Colombo Airport, and other destinations across Sri Lanka.",
  },
  {
    question: "Do you offer surf beach transfers from Arugam Bay?",
    answer:
      "Yes. We arrange surf beach transfers from Arugam Bay to nearby surf points, Pottuvil, east coast stays, Ella, Yala, and custom island routes.",
  },
  {
    question: "Is the Arugam Bay airport transfer price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on pickup location, route, date, pickup time, vehicle type, passengers, luggage, highway tickets, waiting time, surf gear, and special requests.",
  },
];

function arugamBayTaxiMessage(topic = "Arugam Bay taxi service") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Pickup location: ___ Drop-off location: ___ Date/time: ___ Number of passengers: ___ Luggage: ___`,
  );
}

export default function ArugamBayTaxiService({ setPage }) {
  return (
    <div className="page colombo-airport-page arugam-bay-taxi-page">
      <PageHero
        eyebrow="Arugam Bay Taxi Service"
        title="Arugam Bay Taxi Service"
        description="Book Arugam Bay taxi service for Colombo airport transfers, surf trips, private drivers, clean vehicles, and 24/7 WhatsApp booking."
        image={images.surfing}
        alt="Arugam Bay taxi service airport transfer and surf trip"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${arugamBayTaxiMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Arugam Bay Taxi
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Arugam Bay taxi service benefits">
          <span>
            <Plane size={16} />
            Airport transfers
          </span>
          <span>
            <Waves size={16} />
            Surf trips
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

      <section className="section arugam-bay-taxi-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Taxi in Arugam Bay</span>
            <h2>Arugam Bay taxi service intro for airport, surf beach, and island routes</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book taxi in Arugam Bay for Colombo Airport pickup, surf trips, Ella transfers,
              Yala safari routes, Kandy travel, Mirissa transfers, Galle routes, and custom private driver Arugam Bay plans.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/ella-taxi-service">Ella Taxi Service</a>
              <a href="/yala-safari-transfer">Yala Safari Transfer</a>
              <a href="/private-driver-sri-lanka">Private Driver Sri Lanka</a>
              <a href="/sri-lanka-tour-driver">Sri Lanka Tour Driver</a>
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

      <section className="section section--soft arugam-bay-routes">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Arugam Bay airport transfer and routes"
            title="Colombo Airport to Arugam Bay taxi and surf transfer routes"
            text="Choose private taxi routes from Arugam Bay to Ella, Yala, Kandy, Mirissa, Galle, Colombo Airport, and custom Sri Lanka destinations."
          />
          <div className="colombo-airport-route-grid">
            {routeCards.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${arugamBayTaxiMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section arugam-bay-surf-transfers">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Surf beach transfer section"
            title="Surf beach transfers from Arugam Bay"
            text="Book private surf transfers for Arugam Bay, nearby surf points, Pottuvil, east coast stays, Ella, Yala, and longer island routes."
          />
          <div className="colombo-airport-route-grid">
            {surfTransfers.map((transfer) => (
              <Reveal className="colombo-airport-route-card" key={transfer.title}>
                <img src={transfer.image} alt={transfer.title} loading="lazy" />
                <div>
                  <h3>{transfer.title}</h3>
                  <p>{transfer.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${arugamBayTaxiMessage(transfer.title)}`} target="_blank" rel="noreferrer">
                    Book surf transfer
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft arugam-bay-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for private driver Arugam Bay routes"
            text="Choose a car, SUV, family vehicle, or van for airport transfers, surf trips, Yala routes, Ella transfers, and longer island travel."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} Arugam Bay taxi service vehicle`} loading="lazy" />
                  <span>Arugam Bay taxi</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${arugamBayTaxiMessage(`${vehicle.name} Arugam Bay taxi`)}`}
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

      <section className="section arugam-bay-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Arugam Bay airport transfer</span>
            <h2>Book your Arugam Bay taxi on WhatsApp</h2>
            <p>
              Send your pickup location, destination, date, time, passengers, and luggage. We will reply with a fair private taxi quote and vehicle option.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${arugamBayTaxiMessage()}`} target="_blank" rel="noreferrer">
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

      <section className="section arugam-bay-faq" itemScope itemType="https://schema.org/FAQPage">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Arugam Bay taxi FAQ"
            title="Arugam Bay taxi service questions"
            text="Helpful answers before booking taxi in Arugam Bay, Colombo airport to Arugam Bay taxi service, or private driver Arugam Bay routes."
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
