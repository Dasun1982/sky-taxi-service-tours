import { Clock3, Home, Luggage, MapPinned, MessageCircle, Plane, Route, ShieldCheck, Users, Waves } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const routeCards = [
  {
    title: "Colombo Airport to Weligama taxi",
    text: "Book a private Colombo airport to Weligama taxi with flight-time checking, luggage support, highway route planning, and WhatsApp confirmation.",
    image: images.airportWelcome,
  },
  {
    title: "Weligama to Mirissa taxi",
    text: "Quick private transfer from Weligama to Mirissa Beach, whale watching points, Coconut Tree Hill, and south coast hotels.",
    image: images.whaleWatching,
  },
  {
    title: "Weligama to Galle route",
    text: "Travel to Galle Fort, Unawatuna, Jungle Beach, city hotels, railway station, restaurants, and south coast viewpoints.",
    image: images.galleFort,
  },
  {
    title: "Weligama to Unawatuna taxi",
    text: "Plan a simple beach-to-beach transfer for Unawatuna, Dalawella, Wijaya Beach, Jungle Beach, and nearby hotels.",
    image: images.jungleBeach,
  },
  {
    title: "Weligama to Ella taxi",
    text: "Travel from Weligama to Ella with hill country views, waterfalls, comfort stops, tea country routes, and flexible timing.",
    image: images.nineArchBridge,
  },
  {
    title: "Weligama to Yala transfer",
    text: "Book safari transfer support from Weligama to Yala National Park, Tissamaharama, or Kataragama with luggage-friendly vehicles.",
    image: images.safari,
  },
];

const surfTransfers = [
  {
    title: "Weligama surf beach pickups",
    text: "Book taxi in Weligama for surf schools, beach hotels, guesthouses, board bags, and local south coast pickup points.",
    image: images.surfing,
  },
  {
    title: "Surf coast beach transfers",
    text: "Travel from Weligama to Mirissa, Ahangama, Midigama, Unawatuna, Hiriketiya, Tangalle, and other beach destinations.",
    image: images.blueBeach,
  },
  {
    title: "Airport and surf route support",
    text: "Plan Weligama airport transfer pickup or drop-off with fair route-based quotes, clean vehicles, and 24/7 WhatsApp booking.",
    image: images.beach,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for Weligama airport transfer, Mirissa trips, and short south coast rides.",
  },
  {
    name: "Honda Insight",
    image: images.hondaInsight,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Clean hybrid option for taxi in Weligama, hotel pickups, and budget-friendly local transfers.",
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
    text: "Comfortable SUV for private driver Weligama routes to Ella, Yala, Galle, and longer island travel.",
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
    text: "Spacious van for groups, families, Colombo airport to Weligama taxi routes, and luggage-heavy trips.",
  },
];

const highlights = [
  {
    title: "Surf coast taxi support",
    text: "Fast local support for Weligama taxi service, surf beaches, Mirissa, Ahangama, Galle, and nearby south coast pickup points.",
    icon: Waves,
  },
  {
    title: "Airport transfer support",
    text: "Book Colombo airport to Weligama taxi service with flight-time checking, fair quotes, clean vehicles, and luggage help.",
    icon: Plane,
  },
  {
    title: "24/7 WhatsApp booking",
    text: "Send your route, date, time, passengers, and luggage anytime to confirm a private driver Weligama quote.",
    icon: Clock3,
  },
];

const faqs = [
  {
    question: "How do I book Weligama taxi service?",
    answer:
      "Send your pickup location, drop-off location, date, time, number of passengers, and luggage details on WhatsApp. We will confirm the vehicle and fair route price before travel.",
  },
  {
    question: "Do you provide Colombo airport to Weligama taxi service?",
    answer:
      "Yes. SKY Taxi Service & Tours provides private Colombo airport to Weligama taxi service with flight-time checking, luggage support, and WhatsApp confirmation.",
  },
  {
    question: "Can I book taxi in Weligama for Mirissa, Galle, Unawatuna, Ella, or Yala?",
    answer:
      "Yes. You can book private taxi routes from Weligama to Mirissa, Galle, Unawatuna, Ella, Yala, Colombo Airport, and other destinations across Sri Lanka.",
  },
  {
    question: "Do you offer surf beach transfers from Weligama?",
    answer:
      "Yes. We arrange surf beach transfers from Weligama to Mirissa, Ahangama, Midigama, Unawatuna, Hiriketiya, Tangalle, and south coast hotels.",
  },
  {
    question: "Is the Weligama airport transfer price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on pickup location, route, date, pickup time, vehicle type, passengers, luggage, highway tickets, waiting time, surf gear, and special requests.",
  },
];

function weligamaTaxiMessage(topic = "Weligama taxi service") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Pickup location: ___ Drop-off location: ___ Date/time: ___ Number of passengers: ___ Luggage: ___`,
  );
}

export default function WeligamaTaxiService({ setPage }) {
  return (
    <div className="page colombo-airport-page weligama-taxi-page">
      <PageHero
        eyebrow="Weligama Taxi Service"
        title="Weligama Taxi Service"
        description="Book Weligama taxi service for Colombo airport transfers, Mirissa trips, Galle routes, private drivers, clean vehicles, and 24/7 WhatsApp booking."
        image={images.surfing}
        alt="Weligama taxi service private airport transfer"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${weligamaTaxiMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Weligama Taxi
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Weligama taxi service benefits">
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

      <section className="section weligama-taxi-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Taxi in Weligama</span>
            <h2>Weligama taxi service intro for airport, surf beach, and island routes</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book taxi in Weligama for Colombo Airport pickup, Mirissa trips, Galle routes,
              Unawatuna transfers, Ella travel, Yala safari transfers, surf beaches, and custom private driver Weligama plans.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/galle-taxi-service">Galle Taxi Service</a>
              <a href="/mirissa-taxi-service">Mirissa Taxi Service</a>
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

      <section className="section section--soft weligama-routes">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Weligama airport transfer and routes"
            title="Colombo Airport to Weligama taxi and south coast transfer routes"
            text="Choose private taxi routes from Weligama to Mirissa, Galle, Unawatuna, Ella, Yala, Colombo Airport, and custom Sri Lanka destinations."
          />
          <div className="colombo-airport-route-grid">
            {routeCards.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${weligamaTaxiMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section weligama-surf-transfers">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Surf beach transfer section"
            title="Surf beach transfers from Weligama"
            text="Book private beach transfers for Weligama, Mirissa, Ahangama, Midigama, Unawatuna, Hiriketiya, Tangalle, and south coast hotels."
          />
          <div className="colombo-airport-route-grid">
            {surfTransfers.map((transfer) => (
              <Reveal className="colombo-airport-route-card" key={transfer.title}>
                <img src={transfer.image} alt={transfer.title} loading="lazy" />
                <div>
                  <h3>{transfer.title}</h3>
                  <p>{transfer.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${weligamaTaxiMessage(transfer.title)}`} target="_blank" rel="noreferrer">
                    Book surf transfer
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft weligama-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for private driver Weligama routes"
            text="Choose a car, SUV, family vehicle, or van for airport transfers, surf beach transfers, Mirissa trips, Galle routes, and longer island travel."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} Weligama taxi service vehicle`} loading="lazy" />
                  <span>Weligama taxi</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${weligamaTaxiMessage(`${vehicle.name} Weligama taxi`)}`}
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

      <section className="section weligama-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Weligama airport transfer</span>
            <h2>Book your Weligama taxi on WhatsApp</h2>
            <p>
              Send your pickup location, destination, date, time, passengers, and luggage. We will reply with a fair private taxi quote and vehicle option.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${weligamaTaxiMessage()}`} target="_blank" rel="noreferrer">
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

      <section className="section weligama-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Weligama taxi FAQ"
            title="Weligama taxi service questions"
            text="Helpful answers before booking taxi in Weligama, Colombo airport to Weligama taxi service, or private driver Weligama routes."
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
