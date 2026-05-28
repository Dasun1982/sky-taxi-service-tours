import { BadgeCheck, Car, Clock3, DollarSign, Home, Luggage, MapPinned, MessageCircle, Plane, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const budgetServices = [
  {
    title: "Budget airport transfer Sri Lanka",
    text: "Book an affordable airport transfer from Colombo Airport with WhatsApp confirmation, clean vehicles, and fair route-based pricing.",
    image: images.airportWelcome,
  },
  {
    title: "Affordable taxi Sri Lanka routes",
    text: "Travel to Ella, Kandy, Galle, Mirissa, Sigiriya, Unawatuna, and island-wide destinations with a practical private taxi plan.",
    image: images.galleFort,
  },
  {
    title: "Fair price taxi Sri Lanka quotes",
    text: "Send pickup place, drop-off place, date, time, passengers, and luggage so we can share a clear quote before travel.",
    image: images.toyotaPrius,
  },
  {
    title: "Private driver on a budget",
    text: "Choose a friendly driver for airport transfers, day tours, hotel pickups, and long-distance rides without confusing pricing.",
    image: images.trainRide,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Budget-friendly hybrid car for cheap taxi Sri Lanka routes, airport transfers, and city rides.",
  },
  {
    name: "Honda Insight",
    image: images.hondaInsight,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Clean hybrid option for affordable taxi Sri Lanka trips and private transfers.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Good choice for families who need more luggage space while keeping prices fair.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Group-friendly van for budget airport transfer Sri Lanka routes and family travel.",
  },
];

const pricePoints = [
  {
    title: "Fair route-based prices",
    text: "Prices depend on pickup place, destination, travel time, vehicle type, luggage, waiting time, and highway tickets.",
    icon: DollarSign,
  },
  {
    title: "Best quote on WhatsApp",
    text: "Share your exact route and date to get a clear affordable taxi Sri Lanka quote before confirming.",
    icon: MessageCircle,
  },
  {
    title: "Clean vehicles, friendly drivers",
    text: "Budget-friendly travel still includes clean vehicles, local driver support, and safe private transfers.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "How do I book a budget taxi in Sri Lanka?",
    answer:
      "Send your pickup location, drop-off location, date, time, passenger count, and luggage details on WhatsApp. We will confirm the vehicle and fair route price before travel.",
  },
  {
    question: "Do you offer cheap taxi Sri Lanka airport transfers?",
    answer:
      "Yes. SKY Taxi Service & Tours offers budget airport transfer Sri Lanka options with clean vehicles, private drivers, and route-based WhatsApp quotes.",
  },
  {
    question: "How can I get the best affordable taxi Sri Lanka price?",
    answer:
      "Send accurate pickup and drop-off locations, travel date, time, passenger count, and luggage details. This helps us give the best fair price taxi Sri Lanka quote.",
  },
  {
    question: "Are budget taxis still private vehicles?",
    answer:
      "Yes. Budget taxi Sri Lanka service uses private vehicles with friendly local drivers. You do not share the vehicle with other travelers.",
  },
  {
    question: "Is the final budget taxi price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on route, date, vehicle type, waiting time, highway tickets, luggage, pickup time, and special requests.",
  },
];

function budgetTaxiMessage(topic = "budget taxi Sri Lanka service") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Pickup location: ___ Drop-off location: ___ Date/time: ___ Number of passengers: ___ Luggage: ___ Budget: ___`,
  );
}

export default function BudgetTaxiSriLanka({ setPage }) {
  return (
    <div className="page colombo-airport-page budget-taxi-page">
      <PageHero
        eyebrow="Budget Taxi Sri Lanka"
        title="Budget Taxi Sri Lanka"
        description="Book a budget taxi in Sri Lanka with affordable airport transfers, private drivers, clean vehicles, fair prices, and 24/7 WhatsApp booking."
        image={images.toyotaPrius}
        alt="Budget taxi Sri Lanka private car"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${budgetTaxiMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Ask Budget Price
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Budget taxi Sri Lanka benefits">
          <span>
            <BadgeCheck size={16} />
            Fair prices
          </span>
          <span>
            <Plane size={16} />
            Airport transfers
          </span>
          <span>
            <Car size={16} />
            Clean vehicles
          </span>
          <span>
            <Clock3 size={16} />
            24/7 WhatsApp
          </span>
        </div>
      </PageHero>

      <section className="section budget-taxi-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Affordable taxi service intro</span>
            <h2>Affordable taxi Sri Lanka service with fair local prices</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book budget taxi Sri Lanka rides for airport transfers, hotel pickups, private drivers,
              day tours, and long-distance travel. Send your route on WhatsApp and we will help you choose a clean vehicle with a fair price.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/private-driver-sri-lanka">Private Driver Sri Lanka</a>
              <a href="/ella-taxi-service">Ella Taxi Service</a>
              <a href="/kandy-taxi-service">Kandy Taxi Service</a>
              <a href="/galle-taxi-service">Galle Taxi Service</a>
            </div>
          </Reveal>
          <Reveal className="colombo-airport-summary">
            {pricePoints.map((item) => {
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

      <section className="section section--soft budget-taxi-services">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Budget airport transfers"
            title="Budget airport transfers and fair price taxi Sri Lanka routes"
            text="Choose a practical private taxi for Colombo Airport pickup, city transfers, beach routes, hill country travel, and custom Sri Lanka trips."
          />
          <div className="colombo-airport-route-grid">
            {budgetServices.map((service) => (
              <Reveal className="colombo-airport-route-card" key={service.title}>
                <img src={service.image} alt={service.title} loading="lazy" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${budgetTaxiMessage(service.title)}`} target="_blank" rel="noreferrer">
                    Ask fair price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section budget-taxi-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for budget taxi Sri Lanka travel"
            text="Choose a budget-friendly car, wagon, or van based on passengers, luggage, route distance, and comfort needs."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} budget taxi Sri Lanka vehicle`} loading="lazy" />
                  <span>Budget taxi</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${budgetTaxiMessage(`${vehicle.name} budget taxi`)}`}
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

      <section className="section section--soft budget-taxi-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Cheap taxi Sri Lanka quotes</span>
            <h2>Ask for a fair budget taxi price</h2>
            <p>
              Send your pickup location, destination, date, time, passengers, luggage, and budget. We will reply with a fair route-based quote on WhatsApp.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${budgetTaxiMessage()}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Ask Price on WhatsApp
              </a>
              <a className="button button--light" href="/airport-transfer-sri-lanka">
                <Plane size={18} />
                Airport Transfers
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section budget-taxi-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Budget taxi FAQ"
            title="Budget taxi Sri Lanka questions"
            text="Helpful answers before booking an affordable taxi Sri Lanka ride or airport transfer."
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
