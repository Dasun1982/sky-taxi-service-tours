import { Car, Clock3, Home, Luggage, MapPinned, MessageCircle, Plane, Route, ShieldCheck, Users, Waves } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const routeCards = [
  {
    title: "Colombo Airport to Unawatuna taxi",
    text: "Book a private Colombo airport to Unawatuna taxi with flight-time checking, luggage support, highway route planning, and WhatsApp confirmation.",
    image: images.airportWelcome,
  },
  {
    title: "Unawatuna to Galle taxi",
    text: "Quick private transfer from Unawatuna to Galle Fort, city hotels, railway station, restaurants, and south coast viewpoints.",
    image: images.galleFort,
  },
  {
    title: "Unawatuna to Mirissa transfer",
    text: "Travel to Mirissa Beach, whale watching points, Weligama, Ahangama, and south coast hotels with a clean private vehicle.",
    image: images.whaleWatching,
  },
  {
    title: "Unawatuna to Ella taxi",
    text: "Plan a longer hill country transfer to Ella with waterfalls, tea views, comfort stops, and flexible route timing.",
    image: images.nineArchBridge,
  },
  {
    title: "Unawatuna to Yala transfer",
    text: "Book safari transfer support from Unawatuna to Yala National Park, Tissamaharama, or Kataragama with luggage-friendly vehicles.",
    image: images.safari,
  },
  {
    title: "Unawatuna to Kandy taxi",
    text: "Private driver Unawatuna route to Kandy for Temple of the Tooth, hill country stops, hotels, and onward travel.",
    image: images.kandyTemple,
  },
];

const beachTransfers = [
  {
    title: "Unawatuna Beach hotel pickups",
    text: "Book taxi in Unawatuna for beach hotels, guesthouses, Dalawella, Wijaya Beach, Jungle Beach, and local south coast transfers.",
    image: images.jungleBeach,
  },
  {
    title: "South coast beach transfers",
    text: "Travel from Unawatuna to Galle, Ahangama, Weligama, Mirissa, Hiriketiya, Tangalle, and other beach destinations.",
    image: images.blueBeach,
  },
  {
    title: "Airport and beach route support",
    text: "Plan Unawatuna airport transfer pickup or drop-off with fair route-based quotes, clean vehicles, and 24/7 WhatsApp booking.",
    image: images.beach,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for Unawatuna airport transfer, Galle trips, and short south coast rides.",
  },
  {
    name: "Honda Insight",
    image: images.hondaInsight,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Clean hybrid option for taxi in Unawatuna, hotel pickups, and budget-friendly local transfers.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Luggage-friendly wagon for airport transfers, Mirissa routes, Galle trips, and family travel.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for private driver Unawatuna routes to Ella, Yala, Kandy, and longer island travel.",
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
    text: "Spacious van for groups, families, Colombo airport to Unawatuna taxi routes, and luggage-heavy trips.",
  },
];

const highlights = [
  {
    title: "Based near Unawatuna",
    text: "Fast local support for Unawatuna taxi service, beach hotels, Dalawella, Galle, and nearby south coast pickup points.",
    icon: MapPinned,
  },
  {
    title: "Airport transfer support",
    text: "Book Colombo airport to Unawatuna taxi service with flight-time checking, fair quotes, clean vehicles, and luggage help.",
    icon: Plane,
  },
  {
    title: "24/7 WhatsApp booking",
    text: "Send your route, date, time, passengers, and luggage anytime to confirm a private driver Unawatuna quote.",
    icon: Clock3,
  },
];

const faqs = [
  {
    question: "How do I book Unawatuna taxi service?",
    answer:
      "Send your pickup location, drop-off location, date, time, number of passengers, and luggage details on WhatsApp. We will confirm the vehicle and fair route price before travel.",
  },
  {
    question: "Do you provide Colombo airport to Unawatuna taxi service?",
    answer:
      "Yes. SKY Taxi Service & Tours provides private Colombo airport to Unawatuna taxi service with flight-time checking, luggage support, and WhatsApp confirmation.",
  },
  {
    question: "Can I book taxi in Unawatuna for Galle, Mirissa, Ella, Yala, or Kandy?",
    answer:
      "Yes. You can book private taxi routes from Unawatuna to Galle, Mirissa, Ella, Yala, Kandy, Colombo Airport, and other destinations across Sri Lanka.",
  },
  {
    question: "Do you offer beach transfers from Unawatuna?",
    answer:
      "Yes. We arrange beach transfers from Unawatuna to Jungle Beach, Dalawella, Ahangama, Weligama, Mirissa, Hiriketiya, Tangalle, and south coast hotels.",
  },
  {
    question: "Is the Unawatuna airport transfer price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on pickup location, route, date, pickup time, vehicle type, passengers, luggage, highway tickets, waiting time, and special requests.",
  },
];

function unawatunaTaxiMessage(topic = "Unawatuna taxi service") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Pickup location: ___ Drop-off location: ___ Date/time: ___ Number of passengers: ___ Luggage: ___`,
  );
}

export default function UnawatunaTaxiService({ setPage }) {
  return (
    <div className="page colombo-airport-page unawatuna-taxi-page">
      <PageHero
        eyebrow="Unawatuna Taxi Service"
        title="Unawatuna Taxi Service"
        description="Book Unawatuna taxi service for airport transfers, Galle trips, Mirissa transfers, private drivers, clean vehicles, and 24/7 WhatsApp booking."
        image={images.jungleBeach}
        alt="Unawatuna taxi service private airport transfer"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${unawatunaTaxiMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Unawatuna Taxi
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Unawatuna taxi service benefits">
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

      <section className="section unawatuna-taxi-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Taxi in Unawatuna</span>
            <h2>Unawatuna taxi service intro for airport, beach, and island routes</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book taxi in Unawatuna for Colombo Airport pickup, Galle trips, Mirissa transfers,
              Ella routes, Yala safari transfers, Kandy travel, beach hotels, and custom private driver Unawatuna plans.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/galle-taxi-service">Galle Taxi Service</a>
              <a href="/mirissa-taxi-service">Mirissa Taxi Service</a>
              <a href="/yala-safari-transfer">Yala Safari Transfer</a>
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

      <section className="section section--soft unawatuna-routes">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Unawatuna airport transfer and routes"
            title="Colombo Airport to Unawatuna taxi and island transfer routes"
            text="Choose private taxi routes from Unawatuna to Galle, Mirissa, Ella, Yala, Kandy, Colombo Airport, and custom Sri Lanka destinations."
          />
          <div className="colombo-airport-route-grid">
            {routeCards.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${unawatunaTaxiMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section unawatuna-beach-transfers">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Beach transfer section"
            title="Beach transfers from Unawatuna"
            text="Book private beach transfers for Unawatuna, Dalawella, Jungle Beach, Galle, Ahangama, Weligama, Mirissa, Hiriketiya, and south coast hotels."
          />
          <div className="colombo-airport-route-grid">
            {beachTransfers.map((transfer) => (
              <Reveal className="colombo-airport-route-card" key={transfer.title}>
                <img src={transfer.image} alt={transfer.title} loading="lazy" />
                <div>
                  <h3>{transfer.title}</h3>
                  <p>{transfer.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${unawatunaTaxiMessage(transfer.title)}`} target="_blank" rel="noreferrer">
                    Book beach transfer
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft unawatuna-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for private driver Unawatuna routes"
            text="Choose a car, SUV, family vehicle, or van for airport transfers, beach transfers, Galle trips, Mirissa routes, and longer island travel."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} Unawatuna taxi service vehicle`} loading="lazy" />
                  <span>Unawatuna taxi</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${unawatunaTaxiMessage(`${vehicle.name} Unawatuna taxi`)}`}
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

      <section className="section unawatuna-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Unawatuna airport transfer</span>
            <h2>Book your Unawatuna taxi on WhatsApp</h2>
            <p>
              Send your pickup location, destination, date, time, passengers, and luggage. We will reply with a fair private taxi quote and vehicle option.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${unawatunaTaxiMessage()}`} target="_blank" rel="noreferrer">
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

      <section className="section unawatuna-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Unawatuna taxi FAQ"
            title="Unawatuna taxi service questions"
            text="Helpful answers before booking taxi in Unawatuna, Colombo airport to Unawatuna taxi service, or private driver Unawatuna routes."
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
