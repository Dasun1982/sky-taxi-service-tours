import { Clock3, Home, Luggage, MapPinned, MessageCircle, Plane, Route, ShieldCheck, Users, Waves } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const routeCards = [
  {
    title: "Colombo Airport to Bentota taxi",
    text: "Book a private Colombo airport to Bentota taxi with flight-time checking, luggage support, highway route planning, and WhatsApp confirmation.",
    image: images.airportWelcome,
  },
  {
    title: "Bentota to Galle taxi",
    text: "Travel from Bentota to Galle Fort, Unawatuna, Jungle Beach, south coast viewpoints, city hotels, and railway station stops.",
    image: images.galleFort,
  },
  {
    title: "Bentota to Mirissa transfer",
    text: "Book a private beach route to Mirissa Beach, Weligama, whale watching points, Coconut Tree Hill, and south coast hotels.",
    image: images.whaleWatching,
  },
  {
    title: "Bentota to Unawatuna taxi",
    text: "Choose a private south coast transfer for Unawatuna, Dalawella, Wijaya Beach, Jungle Beach, and nearby beach hotels.",
    image: images.jungleBeach,
  },
  {
    title: "Bentota to Ella taxi",
    text: "Plan a long-distance hill country transfer from Bentota to Ella with waterfalls, tea views, comfort stops, and flexible timing.",
    image: images.nineArchBridge,
  },
  {
    title: "Bentota to Yala transfer",
    text: "Arrange private transfer from Bentota to Yala National Park, Tissamaharama, or Kataragama with luggage-friendly vehicles.",
    image: images.safari,
  },
];

const beachTransfers = [
  {
    title: "Bentota beach hotel pickups",
    text: "Book taxi in Bentota for beach resorts, guesthouses, Bentota River, nearby railway stations, and local coastal pickup points.",
    image: images.blueBeach,
  },
  {
    title: "South coast beach transfers",
    text: "Travel from Bentota to Hikkaduwa, Galle, Unawatuna, Weligama, Mirissa, Hiriketiya, Tangalle, and other beach destinations.",
    image: images.beach,
  },
  {
    title: "Airport and beach route support",
    text: "Plan Bentota airport transfer pickup or drop-off with fair route-based quotes, clean vehicles, and 24/7 WhatsApp booking.",
    image: images.boatTour,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for Bentota airport transfer, beach routes, and short south coast rides.",
  },
  {
    name: "Honda Insight",
    image: images.hondaInsight,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Clean hybrid option for taxi in Bentota, hotel pickups, and budget-friendly private transfers.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Luggage-friendly wagon for airport transfers, beach luggage, Galle routes, Mirissa trips, and family travel.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for private driver Bentota routes to Ella, Yala, Galle, and longer island travel.",
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
    text: "Spacious van for groups, families, Colombo airport to Bentota taxi routes, and luggage-heavy trips.",
  },
];

const highlights = [
  {
    title: "Beach route taxi support",
    text: "Friendly local support for Bentota taxi service, beach resorts, river areas, Galle, Mirissa, Unawatuna, and south coast routes.",
    icon: Waves,
  },
  {
    title: "Airport transfer support",
    text: "Book Colombo airport to Bentota taxi service with flight-time checking, fair quotes, clean vehicles, and luggage help.",
    icon: Plane,
  },
  {
    title: "24/7 WhatsApp booking",
    text: "Send your route, date, time, passengers, and luggage anytime to confirm a private driver Bentota quote.",
    icon: Clock3,
  },
];

const faqs = [
  {
    question: "How do I book Bentota taxi service?",
    answer:
      "Send your pickup location, drop-off location, date, time, number of passengers, and luggage details on WhatsApp. We will confirm the vehicle and fair route price before travel.",
  },
  {
    question: "Do you provide Colombo airport to Bentota taxi service?",
    answer:
      "Yes. SKY Taxi Service & Tours provides private Colombo airport to Bentota taxi service with flight-time checking, luggage support, and WhatsApp confirmation.",
  },
  {
    question: "Can I book taxi in Bentota for Galle, Mirissa, Unawatuna, Ella, or Yala?",
    answer:
      "Yes. You can book private taxi routes from Bentota to Galle, Mirissa, Unawatuna, Ella, Yala, Colombo Airport, and other destinations across Sri Lanka.",
  },
  {
    question: "Do you offer beach transfers from Bentota?",
    answer:
      "Yes. We arrange beach transfers from Bentota to Hikkaduwa, Galle, Unawatuna, Weligama, Mirissa, Hiriketiya, Tangalle, and south coast hotels.",
  },
  {
    question: "Is the Bentota airport transfer price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on pickup location, route, date, pickup time, vehicle type, passengers, luggage, highway tickets, waiting time, and special requests.",
  },
];

function bentotaTaxiMessage(topic = "Bentota taxi service") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Pickup location: ___ Drop-off location: ___ Date/time: ___ Number of passengers: ___ Luggage: ___`,
  );
}

export default function BentotaTaxiService({ setPage }) {
  return (
    <div className="page colombo-airport-page bentota-taxi-page">
      <PageHero
        eyebrow="Bentota Taxi Service"
        title="Bentota Taxi Service"
        description="Book Bentota taxi service for Colombo airport transfers, beach routes, private drivers, clean vehicles, and 24/7 WhatsApp booking."
        image={images.blueBeach}
        alt="Bentota taxi service private airport transfer"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${bentotaTaxiMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Bentota Taxi
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Bentota taxi service benefits">
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

      <section className="section bentota-taxi-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Taxi in Bentota</span>
            <h2>Bentota taxi service intro for airport, beach, and island routes</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book taxi in Bentota for Colombo Airport pickup, beach resort transfers, Galle routes,
              Mirissa trips, Unawatuna transfers, Ella travel, Yala safari transfers, and custom private driver Bentota plans.
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

      <section className="section section--soft bentota-routes">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Bentota airport transfer and routes"
            title="Colombo Airport to Bentota taxi and beach transfer routes"
            text="Choose private taxi routes from Bentota to Galle, Mirissa, Unawatuna, Ella, Yala, Colombo Airport, and custom Sri Lanka destinations."
          />
          <div className="colombo-airport-route-grid">
            {routeCards.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${bentotaTaxiMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bentota-beach-transfers">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Beach transfer section"
            title="Beach transfers from Bentota"
            text="Book private beach transfers for Bentota, Hikkaduwa, Galle, Unawatuna, Weligama, Mirissa, Hiriketiya, Tangalle, and south coast hotels."
          />
          <div className="colombo-airport-route-grid">
            {beachTransfers.map((transfer) => (
              <Reveal className="colombo-airport-route-card" key={transfer.title}>
                <img src={transfer.image} alt={transfer.title} loading="lazy" />
                <div>
                  <h3>{transfer.title}</h3>
                  <p>{transfer.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${bentotaTaxiMessage(transfer.title)}`} target="_blank" rel="noreferrer">
                    Book beach transfer
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft bentota-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for private driver Bentota routes"
            text="Choose a car, SUV, family vehicle, or van for airport transfers, beach routes, Galle trips, Mirissa travel, and longer island routes."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} Bentota taxi service vehicle`} loading="lazy" />
                  <span>Bentota taxi</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${bentotaTaxiMessage(`${vehicle.name} Bentota taxi`)}`}
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

      <section className="section bentota-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Bentota airport transfer</span>
            <h2>Book your Bentota taxi on WhatsApp</h2>
            <p>
              Send your pickup location, destination, date, time, passengers, and luggage. We will reply with a fair private taxi quote and vehicle option.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${bentotaTaxiMessage()}`} target="_blank" rel="noreferrer">
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

      <section className="section bentota-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Bentota taxi FAQ"
            title="Bentota taxi service questions"
            text="Helpful answers before booking taxi in Bentota, Colombo airport to Bentota taxi service, or private driver Bentota routes."
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
