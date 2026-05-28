import { Camera, Car, Clock3, Home, Luggage, MapPinned, MessageCircle, Plane, ShieldCheck, Users, Waves } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const mirissaRoutes = [
  {
    title: "Colombo airport to Mirissa taxi",
    text: "Book a private Colombo airport to Mirissa taxi with flight-time checking, luggage space, highway route planning, and WhatsApp confirmation before pickup.",
    image: images.airportWelcome,
  },
  {
    title: "Mirissa Beach taxi route",
    text: "Plan a Mirissa taxi for Mirissa Beach, Coconut Tree Hill, beach hotels, seafood restaurants, and relaxed south coast travel.",
    image: images.beach,
  },
  {
    title: "Whale watching transfer Mirissa",
    text: "Book a whale watching transfer Mirissa service for early morning boat trips, hotel pickup, harbor drop-off, and return travel support.",
    image: images.whaleWatching,
  },
  {
    title: "Weligama and south coast route",
    text: "Choose a taxi to Mirissa with optional stops in Weligama, Ahangama, Galle, Unawatuna, surf areas, and beach viewpoints.",
    image: images.surfing,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for a smooth Mirissa taxi ride and airport transfer.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Clean wagon option for airport pickups, Mirissa Beach routes, and hotel transfers.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for couples, families, and longer south coast travel.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for families, groups, Mirissa taxi service Sri Lanka routes, and private tours.",
  },
];

const highlights = [
  {
    title: "Flexible beach routes",
    text: "Add Mirissa Beach, Coconut Tree Hill, Weligama, Ahangama, Galle, Unawatuna, whale watching harbor, or hotel drop-off.",
    icon: MapPinned,
  },
  {
    title: "Clean private vehicles",
    text: "Book a car, SUV, or van depending on your passengers, luggage, pickup point, and route to Mirissa.",
    icon: Car,
  },
  {
    title: "24/7 WhatsApp booking",
    text: "Send pickup place, drop-off location, date, time, passenger count, and luggage for a fair route-based quote.",
    icon: Clock3,
  },
];

const faqs = [
  {
    question: "How do I book a Mirissa taxi?",
    answer:
      "Send your pickup location, Mirissa hotel or drop-off place, date, time, passenger count, and luggage details on WhatsApp. We will confirm the vehicle and route price before travel.",
  },
  {
    question: "Can I book a Colombo airport to Mirissa taxi?",
    answer:
      "Yes. SKY Taxi Service & Tours provides private Colombo airport to Mirissa taxi service with flight-time checking, clean vehicles, and friendly local drivers.",
  },
  {
    question: "Can I book a whale watching transfer Mirissa pickup?",
    answer:
      "Yes. We can arrange early morning hotel pickup for whale watching transfer Mirissa trips, harbor drop-off, and return travel depending on your schedule.",
  },
  {
    question: "Do you provide a private driver Mirissa service?",
    answer:
      "Yes. You can book a private driver Mirissa service for airport transfers, beach routes, whale watching transfers, hotel pickups, day trips, and Sri Lanka round tours.",
  },
  {
    question: "Is the Mirissa taxi price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on pickup place, drop-off place, travel date, vehicle type, waiting time, highway tickets, luggage, and special requests.",
  },
];

function mirissaTaxiMessage(topic = "Mirissa taxi service") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Pickup location: ___ Drop-off in Mirissa: ___ Date/time: ___ Number of passengers: ___ Luggage: ___`,
  );
}

export default function MirissaTaxiService({ setPage }) {
  return (
    <div className="page colombo-airport-page mirissa-taxi-page">
      <PageHero
        eyebrow="Mirissa Taxi Service"
        title="Mirissa Taxi Service"
        description="Book a private taxi to Mirissa Sri Lanka with airport transfers, beach routes, whale watching transfers, clean vehicles, and 24/7 WhatsApp booking."
        image={images.whaleWatching}
        alt="Mirissa taxi service and whale watching transfer Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${mirissaTaxiMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Mirissa Taxi
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Mirissa taxi service benefits">
          <span>
            <Waves size={16} />
            Mirissa Beach
          </span>
          <span>
            <Plane size={16} />
            Airport transfers
          </span>
          <span>
            <Camera size={16} />
            Whale watching transfer
          </span>
          <span>
            <ShieldCheck size={16} />
            Private driver Mirissa
          </span>
        </div>
      </PageHero>

      <section className="section mirissa-travel-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Taxi to Mirissa Sri Lanka</span>
            <h2>Private Mirissa taxi service for airport transfers and beach routes</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book a Mirissa taxi from Colombo Airport, Galle, Ella, Kandy, Unawatuna, and other Sri Lanka destinations.
              Your private driver can plan a comfortable route with flexible stops, safe travel, and clean vehicle support.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/galle-taxi-service">Galle Taxi Service</a>
              <a href="/ella-taxi-service">Ella Taxi Service</a>
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

      <section className="section section--soft mirissa-route-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Mirissa route information"
            title="Colombo Airport to Mirissa taxi, whale watching, Weligama, and south coast routes"
            text="Travel to Mirissa with a private driver, luggage space, beach route planning, whale watching transfer support, and a route matched to your pickup place, time, and hotel location."
          />
          <div className="colombo-airport-route-grid">
            {mirissaRoutes.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${mirissaTaxiMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section mirissa-vehicles-section">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for your taxi to Mirissa"
            text="Choose a private car, SUV, or van for Colombo airport to Mirissa taxi service, family rides, luggage needs, whale watching transfers, and beach routes."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} Mirissa taxi`} loading="lazy" />
                  <span>Mirissa taxi</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${mirissaTaxiMessage(`${vehicle.name} Mirissa taxi`)}`}
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

      <section className="section section--soft mirissa-booking-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Mirissa taxi service Sri Lanka</span>
            <h2>Book a private taxi to Mirissa</h2>
            <p>
              Send your pickup location, Mirissa hotel, date, time, passengers, and luggage. We will reply with a fair quote and help plan whale watching or south coast stops if needed.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${mirissaTaxiMessage()}`} target="_blank" rel="noreferrer">
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

      <section className="section mirissa-faq-section" itemScope itemType="https://schema.org/FAQPage">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Mirissa taxi FAQ"
            title="Mirissa taxi service questions"
            text="Helpful answers before booking a private driver to Mirissa Sri Lanka."
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
