import { BadgeCheck, Car, Clock3, Home, Luggage, MapPinned, MessageCircle, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const taxiServices = [
  {
    title: "Sri Lanka airport taxi",
    text: "Book Colombo Airport pickup with flight-time checking, luggage support, clean vehicles, and WhatsApp confirmation before your driver arrives.",
    image: images.airportWelcome,
  },
  {
    title: "Long distance taxi Sri Lanka routes",
    text: "Travel from Colombo, Galle, Kandy, Ella, Sigiriya, Mirissa, Unawatuna, and island-wide destinations with private taxi support.",
    image: images.trainRide,
  },
  {
    title: "City to city taxi service",
    text: "Plan reliable taxi Sri Lanka trips between hotels, beaches, hill country towns, cultural sites, airports, and railway stations.",
    image: images.galleFort,
  },
  {
    title: "Private taxi Sri Lanka travel",
    text: "Choose a private car, SUV, or van with a friendly local driver for safe transfers, custom stops, and flexible travel plans.",
    image: images.sigiriya,
  },
];

const popularRoutes = [
  {
    title: "Colombo Airport to Ella",
    text: "A scenic long-distance taxi Sri Lanka route through hill country roads, tea views, waterfalls, and flexible comfort stops.",
    image: images.nineArchBridge,
  },
  {
    title: "Colombo Airport to Kandy",
    text: "Private taxi to Kandy for Temple of the Tooth, hill country routes, hotels, and onward travel to Nuwara Eliya or Ella.",
    image: images.kandyTemple,
  },
  {
    title: "Colombo Airport to Galle",
    text: "Reliable south coast taxi route for Galle Fort, Unawatuna, Weligama, Mirissa, and beach hotel pickups.",
    image: images.galle,
  },
  {
    title: "Colombo Airport to Sigiriya",
    text: "Private taxi Sri Lanka route to Sigiriya Rock Fortress, Dambulla Cave Temple, and Cultural Triangle hotels.",
    image: images.dambulla,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for airport transfers, city rides, and short to medium Sri Lanka taxi service routes.",
  },
  {
    name: "Honda Insight",
    image: images.hondaInsight,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Clean hybrid option for private taxi Sri Lanka rides, hotel pickups, and budget-friendly city transfers.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Luggage-friendly wagon for Sri Lanka airport taxi bookings, family rides, and long-distance taxi routes.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for private taxi Sri Lanka trips, hill country roads, and longer island routes.",
  },
  {
    name: "Honda Freed",
    image: images.hondaFreed,
    passengers: "Best for 1-5 passengers",
    luggage: "Family luggage space",
    text: "Family-friendly vehicle for airport transfers, city to city taxi service, and flexible day travel.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for groups, long distance taxi Sri Lanka routes, airport pickups, and family tours.",
  },
];

const highlights = [
  {
    title: "Fair route-based quotes",
    text: "Send pickup, drop-off, date, time, passengers, and luggage details to get a clear taxi Sri Lanka quote on WhatsApp.",
    icon: BadgeCheck,
  },
  {
    title: "Island-wide private taxis",
    text: "Book Sri Lanka taxi service for airport transfers, hotels, cities, beaches, cultural routes, and hill country travel.",
    icon: Route,
  },
  {
    title: "24/7 WhatsApp booking",
    text: "Message anytime for private taxi Sri Lanka prices, driver confirmation, vehicle options, and route help.",
    icon: Clock3,
  },
];

const faqs = [
  {
    question: "How do I book a Sri Lanka taxi service?",
    answer:
      "Send your pickup location, drop-off location, date, time, passenger count, and luggage details on WhatsApp. SKY Taxi Service & Tours will confirm the vehicle and route-based price before travel.",
  },
  {
    question: "Do you provide Sri Lanka airport taxi pickup?",
    answer:
      "Yes. We provide Colombo Airport pickup with private vehicles, flight-time checking, luggage support, and WhatsApp confirmation before pickup.",
  },
  {
    question: "Can I book a long distance taxi Sri Lanka route?",
    answer:
      "Yes. You can book long-distance taxi routes to Ella, Kandy, Galle, Sigiriya, Mirissa, Unawatuna, Nuwara Eliya, and many other destinations around Sri Lanka.",
  },
  {
    question: "Is this a private taxi Sri Lanka service?",
    answer:
      "Yes. Your taxi is private for your group, with a clean vehicle and friendly local driver. You do not share the vehicle with other travelers.",
  },
  {
    question: "Is the final taxi price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, highway tickets, waiting time, and special requests.",
  },
];

function sriLankaTaxiMessage(topic = "Sri Lanka taxi service") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Pickup location: ___ Drop-off location: ___ Date/time: ___ Number of passengers: ___ Luggage: ___`,
  );
}

export default function SriLankaTaxiService({ setPage }) {
  return (
    <div className="page colombo-airport-page sri-lanka-taxi-page">
      <PageHero
        eyebrow="Sri Lanka Taxi Service"
        title="Sri Lanka Taxi Service"
        description="Book a reliable Sri Lanka taxi service for airport transfers, private drivers, city rides, long-distance taxis, and 24/7 WhatsApp booking."
        image={images.airportTransfer}
        alt="Sri Lanka taxi service private airport transfer"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${sriLankaTaxiMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Taxi on WhatsApp
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Sri Lanka taxi service benefits">
          <span>
            <Plane size={16} />
            Airport transfers
          </span>
          <span>
            <Route size={16} />
            Long-distance taxi
          </span>
          <span>
            <Car size={16} />
            Private vehicles
          </span>
          <span>
            <ShieldCheck size={16} />
            Friendly drivers
          </span>
        </div>
      </PageHero>

      <section className="section sri-lanka-taxi-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Taxi Sri Lanka</span>
            <h2>Reliable Sri Lanka taxi service for airport, city, and island-wide travel</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book taxi Sri Lanka rides for Colombo Airport pickup, hotel transfers, city to city taxi
              service, private drivers, and long distance taxi Sri Lanka routes with clean vehicles and clear WhatsApp confirmation.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/private-driver-sri-lanka">Private Driver Sri Lanka</a>
              <a href="/sri-lanka-tour-driver">Sri Lanka Tour Driver</a>
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

      <section className="section section--soft sri-lanka-taxi-services">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Airport transfers and city rides"
            title="Private taxi Sri Lanka routes for simple, comfortable travel"
            text="Book Sri Lanka airport taxi pickup, city transfers, long-distance routes, and private vehicle travel with friendly local drivers."
          />
          <div className="colombo-airport-route-grid">
            {taxiServices.map((service) => (
              <Reveal className="colombo-airport-route-card" key={service.title}>
                <img src={service.image} alt={service.title} loading="lazy" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${sriLankaTaxiMessage(service.title)}`} target="_blank" rel="noreferrer">
                    Ask taxi price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section sri-lanka-taxi-routes">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Long-distance taxi Sri Lanka"
            title="Popular long-distance and city to city taxi routes"
            text="Choose private taxi routes from Colombo Airport and major cities to beaches, hill country, cultural sites, and island-wide destinations."
          />
          <div className="colombo-airport-route-grid">
            {popularRoutes.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${sriLankaTaxiMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Plan this taxi route
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft sri-lanka-taxi-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for Sri Lanka taxi service"
            text="Choose a car, SUV, family vehicle, or van based on route distance, passengers, luggage, and comfort needs."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} Sri Lanka taxi service vehicle`} loading="lazy" />
                  <span>Private taxi</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${sriLankaTaxiMessage(`${vehicle.name} taxi`)}`}
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

      <section className="section sri-lanka-taxi-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">24/7 WhatsApp booking</span>
            <h2>Book a private taxi Sri Lanka ride</h2>
            <p>
              Send your pickup location, drop-off location, date, time, passengers, luggage, and route needs. We will reply with a fair taxi quote and vehicle option.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${sriLankaTaxiMessage()}`} target="_blank" rel="noreferrer">
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

      <section className="section sri-lanka-taxi-faq" itemScope itemType="https://schema.org/FAQPage">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Sri Lanka taxi FAQ"
            title="Sri Lanka taxi service questions"
            text="Helpful answers before booking a Sri Lanka airport taxi, city ride, or long-distance private taxi route."
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
