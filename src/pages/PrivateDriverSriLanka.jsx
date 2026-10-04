import { useState } from "react";
import { CalendarDays, Car, MapPinned, MessageCircle, Plane, Route, ShieldCheck } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { findTaxiVehicle } from "../data/vehicles";
import { getPrivateDriverOffer } from "../data/privateDriverOffer.js";
import { formatCommercialPrice } from "../data/pricing.js";
import { buildQuoteWhatsAppLink } from "../utils/whatsapp";
import { whatsappIntents } from "../utils/whatsappQuote.js";
import "../styles/privateDriverConversion.css";

const offer = getPrivateDriverOffer();

const driverServices = [
  {
    title: "Start from the airport",
    text: "Begin a multi-stop journey after arrival, with your onward route and pickup details reviewed in the quote.",
    image: images.airportWelcome,
  },
  {
    title: "Choose your destinations",
    text: "Tell SKY which towns, hotels, and stops matter to you. Your route can be planned around your own journey.",
    image: images.galleFort,
  },
  {
    title: "Travel for several days",
    text: "Use a private vehicle and driver arrangement across a multi-day trip, with daily plans and stops discussed in advance.",
    image: images.sigiriya,
  },
  {
    title: "Adjust your plan",
    text: "A single day is possible too. If your destinations, distance, or duration change, SKY reviews the route and confirms the quote.",
    image: images.kandy,
  },
];

const exampleVehicleIds = { sedan: "toyota-prius", miniVan: "honda-freed", van: "toyota-kdh-van" };
const vehicles = offer.vehicleOptions.map((vehicle) => {
  const example = findTaxiVehicle(exampleVehicleIds[vehicle.id]);
  return {
    ...vehicle,
    image: example.image,
    exampleName: example.name,
  };
});

const highlights = [
  {
    title: "Your route",
    text: "Choose the destinations and stops that matter to you, then share your plan for a route-specific quote.",
    icon: MapPinned,
  },
  {
    title: "Your schedule",
    text: "Discuss timing and stops around your journey. Material route changes are reviewed with SKY.",
    icon: Car,
  },
  {
    title: "Multi-day travel",
    text: "Keep your main private transport arrangement simple while moving between Sri Lankan destinations.",
    icon: CalendarDays,
  },
];

const faqs = [
  {
    question: "How do I hire a private driver in Sri Lanka?",
    answer:
      "Send your dates, number of days, starting location, destinations, travelers, and preferred vehicle class on WhatsApp. SKY reviews the route and confirms a current quote before you decide.",
  },
  {
    question: "Can I book a private driver for airport pickup?",
    answer:
      "Yes. SKY Taxi Service & Tours provides airport pickup with private driver support from Colombo Airport to hotels, beach areas, hill country routes, and island-wide destinations.",
  },
  {
    question: "Can I hire a private driver for one day?",
    answer:
      "Yes. The same Private Driver service can be requested for one day or for a longer route across several days. Share the places you want to visit for a current quote.",
  },
  {
    question: "What if I want one driver for my whole multi-day trip?",
    answer:
      "Yes. Private Driver supports a custom multi-day route as well as a single day. SKY confirms the vehicle and driver arrangements for your dates in the quote. The Sri Lanka Tour Driver page focuses on a continuous arrival-to-departure journey with one dedicated driver.",
  },
  {
    question: "Is the private driver price fixed online?",
    answer:
      "The listed daily class prices are starting points for up to the included daily distance. The final quote depends on your route, distance, duration, and vehicle class. SKY reviews longer days or route changes before you confirm.",
  },
  {
    question: "Is a Private Driver also a tour guide?",
    answer: "No specialist guiding is included in the Private Driver daily price. The driver handles transport and route coordination; ask SKY separately if you want a guide at a cultural or historical site.",
  },
];

export default function PrivateDriverSriLanka() {
  const [vehicleId, setVehicleId] = useState(null);
  const selectedVehicle = offer.vehicleOptions.find((vehicle) => vehicle.id === vehicleId);
  const quoteHref = (topic) => buildQuoteWhatsAppLink({
    intent: whatsappIntents.PRIVATE_DRIVER,
    vehicle: selectedVehicle?.name,
    notes: topic,
    sourcePage: "private-driver-sri-lanka",
  });

  return (
    <div className="page colombo-airport-page private-driver-page">
      <PageHero
        eyebrow="Private Driver Sri Lanka"
        title="Private Driver Sri Lanka"
        description="Travel around Sri Lanka with a private vehicle and driver, with a route built around your destinations and schedule. Plan one day or a multi-day journey."
        image={images.trainRide}
        alt="Travelers beside a hill country train in Sri Lanka"
      >
        <div className="private-driver-hero-price" aria-label={`Starting daily price ${formatCommercialPrice(offer.startingPrice, offer.currency, true)}`}>
          <strong>From {formatCommercialPrice(offer.startingPrice, offer.currency, true)}</strong>
          <span>Up to {offer.includedKmPerDay} km/day included · final route quote before confirmation</span>
        </div>
        <div className="premium-hero-actions">
          <a className="button button--primary" href={quoteHref()} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Get My Driver Quote
          </a>
          <a className="button button--light" href="#private-driver-vehicles">See Vehicle Options</a>
        </div>
        <div className="premium-hero-badges" aria-label="Private driver Sri Lanka benefits">
          <span>
            <Plane size={16} />
            Your route
          </span>
          <span>
            <CalendarDays size={16} />
            Flexible stops
          </span>
          <span>
            <Route size={16} />
            Multi-day travel
          </span>
          <span>
            <ShieldCheck size={16} />
            Quote before confirmation
          </span>
        </div>
      </PageHero>

      <section className="section private-driver-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Your private journey</span>
            <h2>Your route, your schedule, a private vehicle and driver</h2>
            <p>
              Tell SKY how many days you are travelling and where you want to go. Private Driver is a transport service for your own stops and
              destinations, from one day to a multi-day journey. Your driver handles the road; specialist site guiding is separate. A direct
              airport or town-to-town transfer can be quoted as its own service.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/is-a-private-driver-worth-it">Is a Private Driver Worth It?</a>
              <a href="/private-driver-vs-rental-car">Private Driver vs Rental Car</a>
              <a href="/sri-lanka-tour-driver">Sri Lanka Tour Driver (continuous trip)</a>
              <a href="/driver-guide-sri-lanka">Driver + Guide</a>
              <a href="/chauffeur-guide-sri-lanka">Chauffeur Guide tours</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/colombo-airport-taxi">Colombo Airport Taxi</a>
              <a href="/ella-taxi-service">Ella Taxi Service</a>
              <a href="/kandy-taxi-service">Kandy Taxi Service</a>
              <a href="/galle-taxi-service">Galle Taxi Service</a>
              <a href="/sigiriya-taxi-service">Sigiriya Taxi Service</a>
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

      <section className="section section--soft private-driver-services">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Built around your route"
            title="Use a private driver for your own Sri Lanka journey"
            text="Choose the places and days that matter to you. These are ways to use the service, not fixed itineraries or packages."
          />
          <div className="colombo-airport-route-grid">
            {driverServices.map((service) => (
              <Reveal className="colombo-airport-route-card" key={service.title}>
                <img src={service.image} alt="" loading="lazy" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href={quoteHref(service.title)} target="_blank" rel="noreferrer" aria-label={`Request driver quote — ${service.title}`}>
                    Request route quote
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section private-driver-vehicles" id="private-driver-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Private Driver daily prices"
            title="Choose the vehicle class you prefer"
            text={`The listed daily prices include up to ${offer.includedKmPerDay} km/day. SKY confirms the current quote for your route and duration.`}
          />
          <div className="airport-transfer-grid" role="group" aria-label="Choose preferred Private Driver vehicle class">
            {vehicles.map((vehicle) => (
              <Reveal className={`airport-transfer-card private-driver-vehicle-card${vehicleId === vehicle.id ? " is-selected" : ""}`} key={vehicle.id}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.exampleName} example vehicle`} loading="lazy" />
                  <span>Example vehicle type</span>
                </div>
                <div className="airport-transfer-card__body">
                  <h3>{vehicle.name}</h3>
                  <strong className="private-driver-vehicle-price">{formatCommercialPrice(vehicle.dailyPrice, offer.currency, true)}</strong>
                  <p>{vehicle.example ? `${vehicle.example}. Exact model confirmed with SKY.` : "Private sedan class. Exact model confirmed with SKY."}</p>
                  <button
                    className="button button--light airport-transfer-card__button private-driver-vehicle-choice"
                    type="button"
                    aria-pressed={vehicleId === vehicle.id}
                    onClick={() => setVehicleId((current) => current === vehicle.id ? null : vehicle.id)}
                  >
                    {vehicleId === vehicle.id ? `${vehicle.name} selected` : `Choose ${vehicle.name}`}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="private-driver-vehicle-note">Your choice is a vehicle preference for the quote. No exact model or vehicle is reserved by selecting it. Share your traveler and luggage details with SKY.</p>
          <a className="button button--primary private-driver-vehicle-quote" href={quoteHref()} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> Get My Driver Quote
          </a>
        </div>
      </section>

      <section className="section section--soft private-driver-inclusions">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Your daily service"
            title="What the Private Driver price covers"
            text={`Up to ${offer.includedKmPerDay} km per day is included. If your route needs more distance, send the itinerary and SKY will confirm the current quote.`}
          />
          <div className="private-driver-detail-grid">
            <Reveal className="private-driver-detail-card">
              <h3>Included in your Private Driver service</h3>
              <ul>
                <li>Private vehicle and driver</li>
                {offer.inclusions.map((item) => <li key={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</li>)}
                <li>Up to {offer.includedKmPerDay} km/day</li>
              </ul>
            </Reveal>
            <Reveal className="private-driver-detail-card">
              <h3>Not included unless arranged</h3>
              <ul>
                <li>Guest accommodation and meals</li>
                <li>Entrance, safari, and activity tickets</li>
                <li>Train tickets, flights, and third-party services</li>
                <li>Personal expenses or specialist site guides</li>
              </ul>
              <p>Your quote will confirm the exact details for your route. SKY reviews days beyond the included distance individually.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section private-driver-journey">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Example multi-day journey"
            title="See how your own route can take shape"
            text="This is an illustration of multi-stop travel, not a fixed tour package, guaranteed itinerary, or quoted total. Choose different destinations if you prefer."
          />
          <ol className="private-driver-journey-stops" aria-label="Example journey stops">
            {["Airport / Colombo", "Sigiriya", "Kandy", "Ella", "South Coast", "Galle"].map((stop, index) => (
              <li key={stop}><span>{String(index + 1).padStart(2, "0")}</span><strong>{stop}</strong></li>
            ))}
          </ol>
          <p className="private-driver-journey-note">Send your dates and destinations. SKY reviews the route, distance, duration, and preferred vehicle before confirming your quote.</p>
        </div>
      </section>

      <section className="section section--soft private-driver-process">
        <div className="section__inner">
          <SectionHeader eyebrow="How it works" title="From your route to a confirmed plan" />
          <ol className="private-driver-process-grid">
            {[
              ["Share your journey", "Send your dates, number of days, starting point, and destinations."],
              ["Choose a vehicle", "Tell SKY your preferred class, or ask for help choosing."],
              ["Receive your quote", "SKY reviews the route and confirms the current price and details."],
              ["Confirm your journey", "Review the quote and confirm if it suits your plans."],
              ["Receive travel details", "SKY provides driver and vehicle arrangements before the confirmed service."],
            ].map(([title, description], index) => (
              <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong><p>{description}</p></li>
            ))}
          </ol>
          <p className="private-driver-journey-note">Need one direct ride only? See <a href="/airport">Airport Transfers</a>. Private Driver is for a route with your own stops or travel across days.</p>
        </div>
      </section>

      <section className="section section--soft private-driver-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Your route, your quote</span>
            <h2>Request your Private Driver quote</h2>
            <p>
              Send your dates, number of days, starting location, destinations, and traveler details. SKY confirms the current route quote; you decide whether to proceed after reviewing it.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={quoteHref()} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Get My Driver Quote
              </a>
              <a className="button button--light" href="/airport-transfer-sri-lanka">
                <Plane size={18} />
                Airport Transfers
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section private-driver-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Private driver FAQ"
            title="Private driver Sri Lanka questions"
            text="Helpful answers before requesting a Private Driver quote."
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
