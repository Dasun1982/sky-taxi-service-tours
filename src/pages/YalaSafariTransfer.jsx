import { Car, Clock3, Home, Luggage, MapPinned, MessageCircle, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const transferSections = [
  {
    title: "Taxi from Colombo Airport to Yala",
    text: "Book a Colombo airport to Yala taxi with flight-time checking, luggage support, clean private vehicles, and WhatsApp confirmation before pickup.",
    image: images.airportWelcome,
  },
  {
    title: "Yala National Park travel content",
    text: "Travel to Yala National Park for wildlife, elephants, leopard safari routes, dry zone landscapes, and nearby Tissamaharama or Kataragama stays.",
    image: images.safari,
  },
  {
    title: "Safari transport Sri Lanka",
    text: "Arrange private transfer support to Yala, hotel pickup, safari jeep meeting points, early morning starts, and comfortable return travel.",
    image: images.elephantRide,
  },
  {
    title: "Yala taxi service routes",
    text: "Plan Yala taxi service from Galle, Mirissa, Unawatuna, Ella, Colombo, Airport, Tangalle, Hiriketiya, or custom south coast locations.",
    image: images.blueBeach,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for taxi to Yala National Park, airport pickup, and couple safari transfers.",
  },
  {
    name: "Honda Insight",
    image: images.hondaInsight,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Clean hybrid option for Yala taxi service routes, hotel pickups, and private safari transfer Sri Lanka travel.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Luggage-friendly wagon for airport to Yala rides, family safari transfers, and south coast routes.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for Yala safari transfer routes, longer rides, families, and hill-to-safari connections.",
  },
  {
    name: "Honda Freed",
    image: images.hondaFreed,
    passengers: "Best for 1-5 passengers",
    luggage: "Family luggage space",
    text: "Family-friendly vehicle for safari transport, luggage, hotel pickups, and flexible Yala route stops.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for groups, family safari transfer Sri Lanka routes, airport pickups, and luggage-heavy travel.",
  },
];

const highlights = [
  {
    title: "Early safari timing support",
    text: "Plan pickup times for morning or afternoon safari starts, hotel check-in, luggage, comfort stops, and jeep meeting points.",
    icon: Clock3,
  },
  {
    title: "Private Yala transfer",
    text: "Travel in a private vehicle with a friendly driver for airport pickup, south coast routes, and taxi to Yala National Park.",
    icon: Car,
  },
  {
    title: "Fair WhatsApp quote",
    text: "Send pickup place, date, time, people, luggage, and safari plan to get a clear Yala safari transfer quote.",
    icon: MessageCircle,
  },
];

const faqs = [
  {
    question: "How do I book a Yala safari transfer?",
    answer:
      "Send your pickup location, drop-off location, date, time, number of passengers, luggage, and safari plan on WhatsApp. We will confirm the private vehicle and fair route price.",
  },
  {
    question: "Can I book a taxi to Yala National Park from Colombo Airport?",
    answer:
      "Yes. SKY Taxi Service & Tours provides Colombo airport to Yala taxi service with private vehicles, flight-time checking, luggage support, and WhatsApp confirmation.",
  },
  {
    question: "Do you arrange safari transport Sri Lanka hotel pickup?",
    answer:
      "Yes. We can arrange private transfer support from hotels in Galle, Mirissa, Unawatuna, Ella, Colombo, Airport, Tangalle, Hiriketiya, and nearby areas.",
  },
  {
    question: "Is the safari jeep included with Yala taxi service?",
    answer:
      "This page is for private taxi and transfer service to Yala. Safari jeep hire and park entrance fees can be discussed separately on WhatsApp if needed.",
  },
  {
    question: "Is the Yala safari transfer price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on pickup location, route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
  },
];

function yalaTransferMessage(topic = "Yala safari transfer") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Pickup location: ___ Drop-off location: Yala National Park Date/time: ___ Number of passengers: ___ Luggage: ___ Safari time: ___`,
  );
}

export default function YalaSafariTransfer({ setPage }) {
  return (
    <div className="page colombo-airport-page yala-safari-transfer-page">
      <PageHero
        eyebrow="Yala Safari Transfer"
        title="Yala Safari Transfer"
        description="Book a private Yala safari transfer for taxi to Yala National Park, airport pickup, safari transport, private drivers, and 24/7 WhatsApp booking."
        image={images.safari}
        alt="Yala safari transfer taxi to Yala National Park Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${yalaTransferMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Yala Transfer
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Yala safari transfer benefits">
          <span>
            <Route size={16} />
            Taxi to Yala
          </span>
          <span>
            <Plane size={16} />
            Airport pickup
          </span>
          <span>
            <Clock3 size={16} />
            Safari timing
          </span>
          <span>
            <ShieldCheck size={16} />
            Private driver
          </span>
        </div>
      </PageHero>

      <section className="section yala-transfer-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Safari transfer Sri Lanka</span>
            <h2>Yala safari transfer intro with private taxi support</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book Yala safari transfer service for airport pickup, hotel pickup, taxi to Yala National Park,
              safari jeep meeting points, luggage-friendly vehicles, and private driver support across Sri Lanka.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/day-tours-sri-lanka">Day Tours Sri Lanka</a>
              <a href="/sri-lanka-private-tours">Sri Lanka Private Tours</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/galle-taxi-service">Galle Taxi Service</a>
              <a href="/mirissa-taxi-service">Mirissa Taxi Service</a>
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

      <section className="section section--soft yala-transfer-content">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Taxi to Yala National Park"
            title="Airport pickup, Yala National Park travel, and safari transport"
            text="Choose a private transfer for Colombo airport to Yala taxi routes, south coast pickup, hotel transfers, and safari-ready transport plans."
          />
          <div className="colombo-airport-route-grid">
            {transferSections.map((section) => (
              <Reveal className="colombo-airport-route-card" key={section.title}>
                <img src={section.image} alt={section.title} loading="lazy" />
                <div>
                  <h3>{section.title}</h3>
                  <p>{section.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${yalaTransferMessage(section.title)}`} target="_blank" rel="noreferrer">
                    Ask transfer price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section yala-transfer-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for Yala taxi service"
            text="Choose a car, SUV, family vehicle, or van for your Yala safari transfer based on passengers, luggage, route, and comfort needs."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} Yala safari transfer vehicle`} loading="lazy" />
                  <span>Yala transfer</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${yalaTransferMessage(`${vehicle.name} Yala transfer`)}`}
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

      <section className="section section--soft yala-transfer-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Colombo airport to Yala taxi</span>
            <h2>Book your private Yala safari transfer</h2>
            <p>
              Send your pickup location, travel date, safari time, number of passengers, luggage, and vehicle needs. We will reply with a fair route-based quote.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${yalaTransferMessage()}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Book on WhatsApp
              </a>
              <a className="button button--light" href="/day-tours-sri-lanka">
                <MapPinned size={18} />
                Day Tours
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section yala-transfer-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Yala transfer FAQ"
            title="Yala safari transfer questions"
            text="Helpful answers before booking taxi to Yala National Park, Yala taxi service, or safari transfer Sri Lanka transport."
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
