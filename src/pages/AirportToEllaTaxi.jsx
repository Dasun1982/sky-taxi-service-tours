import { Car, Clock3, Coffee, Luggage, MapPinned, MessageCircle, Mountain, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const routeDetails = [
  {
    title: "Colombo Airport to Ella taxi",
    text: "Private transfer from Bandaranaike International Airport to Ella with flight-time checking, luggage support, and WhatsApp confirmation before pickup.",
    image: images.airportWelcome,
  },
  {
    title: "Travel time and route planning",
    text: "The airport to Ella taxi route usually takes around 5.5 to 7 hours depending on traffic, weather, comfort stops, and your hotel location.",
    image: images.trainRide,
  },
  {
    title: "Private transfer to Ella",
    text: "Travel in a clean private car, SUV, or van with a friendly local driver and flexible stops for food, photos, tea views, and rest breaks.",
    image: images.nineArchBridge,
  },
  {
    title: "Ella airport transfer support",
    text: "Continue directly to your Ella hotel or plan nearby stops like Ravana Falls, Nine Arch Bridge, Little Adam's Peak, and Ella town after arrival.",
    image: images.ambuluwawe,
  },
];

const scenicStops = [
  {
    title: "Tea country views",
    text: "Add optional stops for Ceylon tea landscapes, hill country viewpoints, and relaxed photo breaks on the way to Ella.",
    icon: Coffee,
  },
  {
    title: "Waterfalls and viewpoints",
    text: "Plan comfort stops near waterfalls, mountain scenery, and local viewpoints depending on your pickup time and route.",
    icon: Mountain,
  },
  {
    title: "Flexible food breaks",
    text: "Your private driver can help with clean rest stops, local food breaks, and safe timing for the long-distance transfer.",
    icon: MapPinned,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for a smooth Colombo Airport to Ella taxi transfer.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Clean wagon option for airport to Ella taxi rides with extra room for bags.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for couples, families, and scenic hill country travel.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for families and groups booking a private transfer to Ella.",
  },
];

const faqs = [
  {
    question: "How long does a Colombo Airport to Ella taxi take?",
    answer:
      "A Colombo Airport to Ella taxi usually takes around 5.5 to 7 hours depending on traffic, weather, comfort stops, pickup time, and the exact Ella hotel location.",
  },
  {
    question: "Can I book an airport to Ella taxi after a late flight?",
    answer:
      "Yes. SKY Taxi Service & Tours can arrange Ella airport transfer service for day or night arrivals with flight-time checking and WhatsApp confirmation.",
  },
  {
    question: "Can we stop on the scenic route to Ella?",
    answer:
      "Yes. Your taxi from Colombo airport to Ella can include flexible stops for tea country views, waterfalls, food breaks, photos, and rest stops depending on time and route.",
  },
  {
    question: "What vehicles are available for a private transfer to Ella?",
    answer:
      "You can request a private car, SUV, or van depending on passengers, luggage, comfort needs, and availability. The final vehicle and price are confirmed on WhatsApp.",
  },
  {
    question: "Is the Colombo Airport to Ella taxi price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
  },
];

function airportToEllaMessage(topic = "Colombo Airport to Ella taxi") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Flight number: ___ Arrival date/time: ___ Drop-off in Ella: ___ Number of passengers: ___ Luggage: ___`,
  );
}

export default function AirportToEllaTaxi({ setPage }) {
  return (
    <div className="page colombo-airport-page ella-taxi-page airport-to-ella-page">
      <PageHero
        eyebrow="Airport to Ella Taxi"
        title="Colombo Airport to Ella Taxi"
        description="Book a private taxi from Colombo Airport to Ella with scenic hill country transfer, clean vehicles, flexible stops, and 24/7 WhatsApp booking."
        image={images.nineArchBridge}
        alt="Colombo Airport to Ella taxi private transfer Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToEllaMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Airport to Ella
          </a>
          <a className="button button--light" href="/ella-taxi-service">
            <Mountain size={18} />
            Ella Taxi Service
          </a>
        </div>
        <div className="premium-hero-badges" aria-label="Airport to Ella taxi benefits">
          <span>
            <Plane size={16} />
            Airport pickup
          </span>
          <span>
            <Route size={16} />
            Scenic transfer
          </span>
          <span>
            <ShieldCheck size={16} />
            Private driver
          </span>
          <span>
            <Clock3 size={16} />
            24/7 WhatsApp
          </span>
        </div>
      </PageHero>

      <section className="section airport-to-ella-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Colombo Airport to Ella transfer</span>
            <h2>Private airport to Ella taxi with friendly local driver support</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book a private Colombo Airport to Ella taxi before arrival. Your driver can meet you at the airport,
              help with luggage, plan comfort stops, and take you safely into Sri Lanka's hill country.
            </p>
            <div className="colombo-airport-link-row">
              <button type="button" onClick={() => setPage("home")}>
                Homepage
              </button>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/sri-lanka-tour-driver">Sri Lanka Tour Driver</a>
            </div>
          </Reveal>
          <Reveal className="colombo-airport-summary">
            {scenicStops.map((item) => {
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

      <section className="section section--soft airport-to-ella-route">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Route details and travel time"
            title="Taxi from Colombo airport to Ella with scenic hill country stops"
            text="Plan your Ella airport transfer around your flight arrival, luggage, hotel location, and preferred stops along the route."
          />
          <div className="colombo-airport-route-grid">
            {routeDetails.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToEllaMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section airport-to-ella-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for your private transfer to Ella"
            text="Choose a private car, SUV, or van for airport to Ella taxi service, luggage needs, families, and comfortable long-distance travel."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} airport to Ella taxi`} loading="lazy" />
                  <span>Airport to Ella</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToEllaMessage(`${vehicle.name} airport to Ella taxi`)}`}
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

      <section className="section section--soft airport-to-ella-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">24/7 WhatsApp booking</span>
            <h2>Book your Ella airport transfer</h2>
            <p>
              Send your flight number, arrival time, Ella hotel, passenger count, and luggage details. We will reply with a fair route-based quote and confirm your driver.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToEllaMessage()}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Book on WhatsApp
              </a>
              <a className="button button--light" href="/kandy-taxi-service">
                <Car size={18} />
                Kandy Taxi Service
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section airport-to-ella-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Airport to Ella FAQ"
            title="Colombo Airport to Ella taxi questions"
            text="Helpful answers before booking your private airport transfer to Ella."
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
