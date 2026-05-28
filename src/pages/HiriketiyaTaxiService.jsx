import { Clock3, Home, Luggage, MapPinned, MessageCircle, Plane, Route, ShieldCheck, Users, Waves } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const routeCards = [
  {
    title: "Colombo Airport to Hiriketiya taxi",
    text: "Book a private Colombo airport to Hiriketiya taxi with flight-time checking, luggage support, highway route planning, and WhatsApp confirmation.",
    image: images.airportWelcome,
  },
  {
    title: "Hiriketiya to Mirissa taxi",
    text: "Travel from Hiriketiya to Mirissa Beach, whale watching points, Coconut Tree Hill, Weligama, and south coast hotels.",
    image: images.whaleWatching,
  },
  {
    title: "Hiriketiya to Weligama transfer",
    text: "Book a surf coast transfer to Weligama, Ahangama, Midigama, Mirissa, surf schools, beach hotels, and local pickup points.",
    image: images.surfing,
  },
  {
    title: "Hiriketiya to Galle route",
    text: "Plan a private route to Galle Fort, Unawatuna, Jungle Beach, south coast viewpoints, city hotels, and railway station stops.",
    image: images.galleFort,
  },
  {
    title: "Hiriketiya to Ella taxi",
    text: "Travel from Hiriketiya to Ella with hill country views, waterfalls, comfort stops, tea country routes, and flexible timing.",
    image: images.nineArchBridge,
  },
  {
    title: "Hiriketiya to Yala transfer",
    text: "Book safari transfer support from Hiriketiya to Yala National Park, Tissamaharama, or Kataragama with luggage-friendly vehicles.",
    image: images.safari,
  },
  {
    title: "Hiriketiya to Unawatuna taxi",
    text: "Choose a beach-to-beach transfer for Unawatuna, Dalawella, Wijaya Beach, Jungle Beach, and nearby south coast hotels.",
    image: images.jungleBeach,
  },
];

const surfTransfers = [
  {
    title: "Hiriketiya surf beach pickups",
    text: "Book taxi in Hiriketiya for surf beach hotels, guesthouses, cafes, board bags, luggage, and local pickup points.",
    image: images.hiriketiyaBeach,
  },
  {
    title: "Surf coast beach transfers",
    text: "Travel from Hiriketiya to Weligama, Mirissa, Ahangama, Midigama, Unawatuna, Tangalle, and other beach destinations.",
    image: images.blueBeach,
  },
  {
    title: "Airport and surf route support",
    text: "Plan Hiriketiya airport transfer pickup or drop-off with fair route-based quotes, clean vehicles, and 24/7 WhatsApp booking.",
    image: images.beach,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for Hiriketiya airport transfer, surf beach pickups, and short south coast rides.",
  },
  {
    name: "Honda Insight",
    image: images.hondaInsight,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Clean hybrid option for taxi in Hiriketiya, hotel pickups, and budget-friendly local transfers.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Luggage-friendly wagon for airport transfers, surf gear, Mirissa routes, Galle trips, and family travel.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for private driver Hiriketiya routes to Ella, Yala, Galle, and longer island travel.",
  },
  {
    name: "Honda Freed",
    image: images.hondaFreed,
    passengers: "Best for 1-5 passengers",
    luggage: "Family luggage space",
    text: "Family-friendly vehicle for beach transfers, airport pickup, luggage, and custom south coast taxi routes.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for groups, families, Colombo airport to Hiriketiya taxi routes, and luggage-heavy trips.",
  },
];

const highlights = [
  {
    title: "Surf beach taxi support",
    text: "Friendly local support for Hiriketiya taxi service, surf beach pickups, Dickwella, Tangalle, Mirissa, and south coast routes.",
    icon: Waves,
  },
  {
    title: "Airport transfer support",
    text: "Book Colombo airport to Hiriketiya taxi service with flight-time checking, fair quotes, clean vehicles, and luggage help.",
    icon: Plane,
  },
  {
    title: "24/7 WhatsApp booking",
    text: "Send your route, date, time, passengers, and luggage anytime to confirm a private driver Hiriketiya quote.",
    icon: Clock3,
  },
];

const faqs = [
  {
    question: "How do I book Hiriketiya taxi service?",
    answer:
      "Send your pickup location, drop-off location, date, time, number of passengers, and luggage details on WhatsApp. We will confirm the vehicle and fair route price before travel.",
  },
  {
    question: "Do you provide Colombo airport to Hiriketiya taxi service?",
    answer:
      "Yes. SKY Taxi Service & Tours provides private Colombo airport to Hiriketiya taxi service with flight-time checking, luggage support, and WhatsApp confirmation.",
  },
  {
    question: "Can I book taxi in Hiriketiya for Mirissa, Weligama, Galle, Ella, Yala, or Unawatuna?",
    answer:
      "Yes. You can book private taxi routes from Hiriketiya to Mirissa, Weligama, Galle, Ella, Yala, Unawatuna, Colombo Airport, and other destinations across Sri Lanka.",
  },
  {
    question: "Do you offer surf beach transfers from Hiriketiya?",
    answer:
      "Yes. We arrange surf beach transfers from Hiriketiya to Weligama, Mirissa, Ahangama, Midigama, Unawatuna, Tangalle, and south coast hotels.",
  },
  {
    question: "Is the Hiriketiya airport transfer price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on pickup location, route, date, pickup time, vehicle type, passengers, luggage, highway tickets, waiting time, surf gear, and special requests.",
  },
];

function hiriketiyaTaxiMessage(topic = "Hiriketiya taxi service") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Pickup location: ___ Drop-off location: ___ Date/time: ___ Number of passengers: ___ Luggage: ___`,
  );
}

export default function HiriketiyaTaxiService({ setPage }) {
  return (
    <div className="page colombo-airport-page hiriketiya-taxi-page">
      <PageHero
        eyebrow="Hiriketiya Taxi Service"
        title="Hiriketiya Taxi Service"
        description="Book Hiriketiya taxi service for Colombo airport transfers, surf beach transfers, private drivers, clean vehicles, and 24/7 WhatsApp booking."
        image={images.hiriketiyaBeach}
        alt="Hiriketiya taxi service private airport transfer"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${hiriketiyaTaxiMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Hiriketiya Taxi
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Hiriketiya taxi service benefits">
          <span>
            <Plane size={16} />
            Airport transfers
          </span>
          <span>
            <Waves size={16} />
            Surf transfers
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

      <section className="section hiriketiya-taxi-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Taxi in Hiriketiya</span>
            <h2>Hiriketiya taxi service intro for airport, surf beach, and island routes</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book taxi in Hiriketiya for Colombo Airport pickup, surf beach transfers, Mirissa trips,
              Weligama routes, Galle travel, Ella transfers, Yala safari transfers, Unawatuna rides, and custom private driver Hiriketiya plans.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/galle-taxi-service">Galle Taxi Service</a>
              <a href="/mirissa-taxi-service">Mirissa Taxi Service</a>
              <a href="/weligama-taxi-service">Weligama Taxi Service</a>
              <a href="/unawatuna-taxi-service">Unawatuna Taxi Service</a>
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

      <section className="section section--soft hiriketiya-routes">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Hiriketiya airport transfer and routes"
            title="Colombo Airport to Hiriketiya taxi and south coast transfer routes"
            text="Choose private taxi routes from Hiriketiya to Mirissa, Weligama, Galle, Ella, Yala, Unawatuna, Colombo Airport, and custom Sri Lanka destinations."
          />
          <div className="colombo-airport-route-grid">
            {routeCards.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${hiriketiyaTaxiMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section hiriketiya-surf-transfers">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Surf beach transfer section"
            title="Surf beach transfers from Hiriketiya"
            text="Book private beach transfers for Hiriketiya, Weligama, Mirissa, Ahangama, Midigama, Unawatuna, Tangalle, and south coast hotels."
          />
          <div className="colombo-airport-route-grid">
            {surfTransfers.map((transfer) => (
              <Reveal className="colombo-airport-route-card" key={transfer.title}>
                <img src={transfer.image} alt={transfer.title} loading="lazy" />
                <div>
                  <h3>{transfer.title}</h3>
                  <p>{transfer.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${hiriketiyaTaxiMessage(transfer.title)}`} target="_blank" rel="noreferrer">
                    Book surf transfer
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft hiriketiya-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for private driver Hiriketiya routes"
            text="Choose a car, SUV, family vehicle, or van for airport transfers, surf beach transfers, Mirissa trips, Galle routes, and longer island travel."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} Hiriketiya taxi service vehicle`} loading="lazy" />
                  <span>Hiriketiya taxi</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${hiriketiyaTaxiMessage(`${vehicle.name} Hiriketiya taxi`)}`}
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

      <section className="section hiriketiya-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Hiriketiya airport transfer</span>
            <h2>Book your Hiriketiya taxi on WhatsApp</h2>
            <p>
              Send your pickup location, destination, date, time, passengers, and luggage. We will reply with a fair private taxi quote and vehicle option.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${hiriketiyaTaxiMessage()}`} target="_blank" rel="noreferrer">
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

      <section className="section hiriketiya-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Hiriketiya taxi FAQ"
            title="Hiriketiya taxi service questions"
            text="Helpful answers before booking taxi in Hiriketiya, Colombo airport to Hiriketiya taxi service, or private driver Hiriketiya routes."
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
