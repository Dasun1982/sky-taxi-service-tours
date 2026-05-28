import { Car, Clock3, Landmark, Luggage, MapPinned, MessageCircle, Mountain, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const routeDetails = [
  {
    title: "Colombo Airport to Sigiriya taxi",
    text: "Private transfer from Bandaranaike International Airport to Sigiriya with flight-time checking, luggage support, and WhatsApp driver confirmation.",
    image: images.airportWelcome,
  },
  {
    title: "Route details and travel time",
    text: "The airport to Sigiriya taxi route usually takes around 3.5 to 4.5 hours depending on traffic, pickup time, comfort stops, and your hotel location.",
    image: images.sigiriya,
  },
  {
    title: "Sigiriya Rock Fortress and Dambulla route",
    text: "Travel toward Sigiriya Rock Fortress with optional Dambulla Cave Temple, Pidurangala, Habarana, or cultural village stops depending on your schedule.",
    image: images.dambulla,
  },
  {
    title: "Cultural Triangle transfer",
    text: "Use your private transfer to reach Sigiriya, Dambulla, Habarana, Polonnaruwa, Anuradhapura, or nearby Cultural Triangle hotels.",
    image: images.pidurangala,
  },
];

const culturalStops = [
  {
    title: "Sigiriya Rock Fortress",
    text: "Plan a private transfer to Sigiriya with direct hotel drop-off or a flexible stop near the famous rock fortress.",
    icon: Mountain,
  },
  {
    title: "Dambulla route support",
    text: "Ask about Dambulla Cave Temple, Pidurangala, local lunch stops, and comfort breaks along the airport to Sigiriya route.",
    icon: Landmark,
  },
  {
    title: "Cultural Triangle travel",
    text: "Continue toward Habarana, Polonnaruwa, Anuradhapura, Kandy, or custom Sri Lanka round tour routes after Sigiriya.",
    icon: MapPinned,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for a smooth Colombo Airport to Sigiriya taxi transfer.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Clean wagon option for airport to Sigiriya taxi rides with extra room for bags.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for couples, families, and Cultural Triangle transfers.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for families and groups booking a private transfer to Sigiriya.",
  },
];

const faqs = [
  {
    question: "How long does a Colombo Airport to Sigiriya taxi take?",
    answer:
      "A Colombo Airport to Sigiriya taxi usually takes around 3.5 to 4.5 hours depending on traffic, pickup time, comfort stops, and the exact Sigiriya hotel location.",
  },
  {
    question: "Can I book an airport to Sigiriya taxi after a late flight?",
    answer:
      "Yes. SKY Taxi Service & Tours can arrange Sigiriya airport transfer service for day or night arrivals with flight-time checking and WhatsApp confirmation.",
  },
  {
    question: "Can the taxi stop at Dambulla or Pidurangala?",
    answer:
      "Yes. Your taxi from Colombo airport to Sigiriya can include flexible stops for Dambulla Cave Temple, Pidurangala, Habarana, food breaks, and rest stops depending on time and route.",
  },
  {
    question: "Can I continue to other Cultural Triangle destinations?",
    answer:
      "Yes. Your private transfer to Sigiriya can continue to Dambulla, Habarana, Polonnaruwa, Anuradhapura, Kandy, or nearby Cultural Triangle hotels.",
  },
  {
    question: "Is the Colombo Airport to Sigiriya taxi price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on route, date, pickup time, vehicle type, passengers, luggage, waiting time, highway tickets, and special requests.",
  },
];

function airportToSigiriyaMessage(topic = "Colombo Airport to Sigiriya taxi") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Flight number: ___ Arrival date/time: ___ Drop-off in Sigiriya: ___ Number of passengers: ___ Luggage: ___`,
  );
}

export default function AirportToSigiriyaTaxi({ setPage }) {
  return (
    <div className="page colombo-airport-page sigiriya-taxi-page airport-to-sigiriya-page">
      <PageHero
        eyebrow="Airport to Sigiriya Taxi"
        title="Colombo Airport to Sigiriya Taxi"
        description="Book a private taxi from Colombo Airport to Sigiriya with Cultural Triangle transfer, clean vehicles, private drivers, and 24/7 WhatsApp booking."
        image={images.sigiriya}
        alt="Colombo Airport to Sigiriya taxi private transfer Sri Lanka"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToSigiriyaMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Airport to Sigiriya
          </a>
          <a className="button button--light" href="/sigiriya-taxi-service">
            <Mountain size={18} />
            Sigiriya Taxi Service
          </a>
        </div>
        <div className="premium-hero-badges" aria-label="Airport to Sigiriya taxi benefits">
          <span>
            <Plane size={16} />
            Airport pickup
          </span>
          <span>
            <Route size={16} />
            Cultural Triangle
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

      <section className="section airport-to-sigiriya-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Colombo Airport to Sigiriya transfer</span>
            <h2>Private airport to Sigiriya taxi for Cultural Triangle travel</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book a private Colombo Airport to Sigiriya taxi before arrival. Your driver can meet you at the airport,
              help with luggage, plan comfort stops, and take you safely to Sigiriya, Dambulla, Habarana, or nearby Cultural Triangle hotels.
            </p>
            <div className="colombo-airport-link-row">
              <button type="button" onClick={() => setPage("home")}>
                Homepage
              </button>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/sigiriya-taxi-service">Sigiriya Taxi Service</a>
              <a href="/kandy-taxi-service">Kandy Taxi Service</a>
              <a href="/airport-to-kandy">Airport to Kandy Taxi</a>
              <a href="/airport-to-ella">Airport to Ella Taxi</a>
            </div>
          </Reveal>
          <Reveal className="colombo-airport-summary">
            {culturalStops.map((item) => {
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

      <section className="section section--soft airport-to-sigiriya-route">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Route details and travel time"
            title="Taxi from Colombo airport to Sigiriya and Dambulla"
            text="Plan your Sigiriya airport transfer around your flight arrival, luggage, hotel location, Dambulla route, and Cultural Triangle travel plans."
          />
          <div className="colombo-airport-route-grid">
            {routeDetails.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToSigiriyaMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask route price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section airport-to-sigiriya-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for your private transfer to Sigiriya"
            text="Choose a private car, SUV, or van for airport to Sigiriya taxi service, luggage needs, families, and comfortable Cultural Triangle travel."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} airport to Sigiriya taxi`} loading="lazy" />
                  <span>Airport to Sigiriya</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToSigiriyaMessage(`${vehicle.name} airport to Sigiriya taxi`)}`}
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

      <section className="section section--soft airport-to-sigiriya-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">24/7 WhatsApp booking</span>
            <h2>Book your Sigiriya airport transfer</h2>
            <p>
              Send your flight number, arrival time, Sigiriya hotel, passenger count, and luggage details. We will reply with a fair route-based quote and confirm your driver.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${airportToSigiriyaMessage()}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Book on WhatsApp
              </a>
              <a className="button button--light" href="/airport-to-kandy">
                <Car size={18} />
                Airport to Kandy
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section airport-to-sigiriya-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Airport to Sigiriya FAQ"
            title="Colombo Airport to Sigiriya taxi questions"
            text="Helpful answers before booking your private airport transfer to Sigiriya."
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
