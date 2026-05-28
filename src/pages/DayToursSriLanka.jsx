import { CalendarDays, Car, Clock3, Compass, Home, Luggage, MapPinned, MessageCircle, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const dayTourRoutes = [
  {
    title: "Ella day tour",
    text: "Plan an Ella day tour for Nine Arch Bridge, Little Adam's Peak, tea views, waterfalls, Ella town, and scenic hill country stops.",
    image: images.nineArchBridge,
  },
  {
    title: "Kandy day tour",
    text: "Visit Temple of the Tooth, Kandy Lake, botanical gardens, viewpoints, culture stops, and city highlights with a private driver.",
    image: images.kandyTemple,
  },
  {
    title: "Galle day tour",
    text: "Explore Galle Fort, Unawatuna, Jungle Beach, turtle stops, south coast viewpoints, and relaxed beach route travel.",
    image: images.galleFort,
  },
  {
    title: "Sigiriya day tour",
    text: "Book a Sigiriya one day tour Sri Lanka route for Sigiriya Rock Fortress, Dambulla Cave Temple, Pidurangala, and cultural stops.",
    image: images.sigiriya,
  },
  {
    title: "Mirissa day tour",
    text: "Enjoy Mirissa Beach, whale watching transfers, Coconut Tree Hill, Weligama coast, surfing areas, and south coast photo stops.",
    image: images.whaleWatching,
  },
  {
    title: "Yala safari day trip",
    text: "Plan a private Yala safari day trip with vehicle transfer support, wildlife stops, nature routes, and flexible pickup timing.",
    image: images.safari,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for short Sri Lanka day trips, airport pickup, and couple day tours.",
  },
  {
    name: "Honda Insight",
    image: images.hondaInsight,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Clean hybrid option for private day tour Sri Lanka routes and comfortable city-to-destination rides.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Luggage-friendly wagon for Sri Lanka day tours with driver, family trips, and airport-to-tour travel.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for hill country roads, beach routes, viewpoints, and longer one day tour Sri Lanka plans.",
  },
  {
    name: "Honda Freed",
    image: images.hondaFreed,
    passengers: "Best for 1-5 passengers",
    luggage: "Family luggage space",
    text: "Family-friendly vehicle for custom day tours, luggage, airport pickup, and flexible local stops.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for group day tours Sri Lanka, Yala safari transfers, family trips, and island day routes.",
  },
];

const highlights = [
  {
    title: "Private one-day routes",
    text: "Choose a route or customize Sri Lanka day trips around your pickup place, timing, budget, and places you want to visit.",
    icon: Route,
  },
  {
    title: "Driver support for the day",
    text: "Book Sri Lanka day tours with driver for safe private travel, route timing, comfort stops, luggage help, and friendly local support.",
    icon: Car,
  },
  {
    title: "Fast WhatsApp quote",
    text: "Send your pickup place, date, time, people, route, and vehicle needs to get a fair day tour quote on WhatsApp.",
    icon: MessageCircle,
  },
];

const faqs = [
  {
    question: "How do I book day tours Sri Lanka with SKY Taxi Service & Tours?",
    answer:
      "Send your pickup location, date, places you want to visit, number of people, luggage, and budget on WhatsApp. We will help plan a private one-day route and confirm the vehicle.",
  },
  {
    question: "Can I customize a private day tour Sri Lanka route?",
    answer:
      "Yes. You can customize your route for Ella, Kandy, Galle, Sigiriya, Mirissa, Yala, beaches, temples, viewpoints, wildlife, and local stops.",
  },
  {
    question: "Can day tours start with airport pickup?",
    answer:
      "Yes. Sri Lanka day trips can start from Colombo Airport or your hotel, depending on route distance, arrival time, luggage, and vehicle availability.",
  },
  {
    question: "Do you provide Sri Lanka day tours with driver?",
    answer:
      "Yes. Each private day tour includes a clean vehicle and friendly local driver support. Specialist licensed site guides can be arranged separately where needed.",
  },
  {
    question: "Is the day tour price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on pickup place, route, date, vehicle type, passengers, waiting time, entrance tickets, safari needs, and special requests.",
  },
];

function dayToursMessage(topic = "day tours Sri Lanka") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Pickup location: ___ Places I want to visit: ___ Date: ___ Number of people: ___ Budget: ___`,
  );
}

export default function DayToursSriLanka({ setPage }) {
  return (
    <div className="page colombo-airport-page day-tours-sri-lanka-page">
      <PageHero
        eyebrow="Day Tours Sri Lanka"
        title="Day Tours Sri Lanka"
        description="Book private day tours in Sri Lanka for Ella, Kandy, Galle, Sigiriya, Mirissa, Yala, airport pickup, and 24/7 WhatsApp booking."
        image={images.blueBeach}
        alt="Day tours Sri Lanka private one day trips with driver"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${dayToursMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Book Day Tour
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Day tours Sri Lanka benefits">
          <span>
            <CalendarDays size={16} />
            One day tours
          </span>
          <span>
            <Route size={16} />
            Custom routes
          </span>
          <span>
            <Plane size={16} />
            Airport pickup
          </span>
          <span>
            <ShieldCheck size={16} />
            Private driver
          </span>
        </div>
      </PageHero>

      <section className="section day-tours-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Sri Lanka day trips</span>
            <h2>Sri Lanka day tours intro with private driver support</h2>
            <p>
              SKY Taxi Service & Tours helps travelers book day tours Sri Lanka routes for beaches, temples, hill country, wildlife,
              cultural sites, viewpoints, airport pickup, and custom one-day travel with a clean private vehicle and friendly local driver.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/sri-lanka-private-tours">Sri Lanka Private Tours</a>
              <a href="/sri-lanka-round-tours">Sri Lanka Round Tours</a>
              <a href="/sri-lanka-tour-driver">Sri Lanka Tour Driver</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
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

      <section className="section section--soft day-tours-routes">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Popular one-day tour routes"
            title="Popular private day tour Sri Lanka routes"
            text="Choose a ready route or customize your one day tour Sri Lanka plan around your pickup location, available time, budget, and travel style."
          />
          <div className="colombo-airport-route-grid">
            {dayTourRoutes.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${dayToursMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Ask about this trip
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section day-tours-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for Sri Lanka day tours with driver"
            text="Choose a private car, SUV, family vehicle, or van for your day tour based on passengers, route distance, luggage, and comfort needs."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} day tours Sri Lanka vehicle`} loading="lazy" />
                  <span>Day tour</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${dayToursMessage(`${vehicle.name} day tour`)}`}
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

      <section className="section section--soft day-tours-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Private day tour Sri Lanka</span>
            <h2>Customize your one day tour Sri Lanka route</h2>
            <p>
              Send your pickup place, date, places you want to visit, number of people, luggage, and budget. We will help create a clear day tour plan and fair quote.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${dayToursMessage()}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Book on WhatsApp
              </a>
              <a className="button button--light" href="/sri-lanka-private-tours">
                <MapPinned size={18} />
                Private Tours
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section day-tours-faq">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Day tours FAQ"
            title="Day tours Sri Lanka questions"
            text="Helpful answers before booking Sri Lanka day trips, a private day tour Sri Lanka route, or Sri Lanka day tours with driver."
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
