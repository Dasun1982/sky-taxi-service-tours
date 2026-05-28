import { CalendarDays, Car, Clock3, Compass, Home, Luggage, MapPinned, MessageCircle, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const tourIdeas = [
  {
    title: "3-day Sri Lanka itinerary with driver",
    text: "A short Sri Lanka round trip for Sigiriya, Dambulla, Kandy, Nuwara Eliya, Ella, tea views, and scenic mountain roads.",
    image: images.sigiriya,
    duration: "3 days",
  },
  {
    title: "5-day Sri Lanka tour package with driver",
    text: "A flexible private round tour Sri Lanka route for Cultural Triangle highlights, Kandy, Ella, wildlife safari, and south coast stops.",
    image: images.nineArchBridge,
    duration: "5 days",
  },
  {
    title: "7-day Sri Lanka round tours",
    text: "A balanced island route with beaches, culture, hill country, wildlife, temples, viewpoints, and clean private vehicle support.",
    image: images.dambulla,
    duration: "7 days",
  },
];

const popularRoutes = [
  {
    title: "Airport, Sigiriya, Kandy, Ella and Galle",
    text: "A classic Sri Lanka round trip with airport pickup, cultural sites, hill country, tea views, waterfalls, and south coast travel.",
    image: images.trainRide,
  },
  {
    title: "Cultural Triangle and Hill Country",
    text: "Plan Sigiriya, Dambulla, Kandy, Nuwara Eliya, Ella, Nine Arch Bridge, tea factories, temples, and viewpoint stops.",
    image: images.kandyTemple,
  },
  {
    title: "South Coast, Yala Safari and Ella",
    text: "Travel through Galle, Unawatuna, Mirissa, Yala or Udawalawe, Ella, waterfalls, and scenic mountain roads.",
    image: images.safari,
  },
  {
    title: "Full island private round tour Sri Lanka",
    text: "Build a longer Sri Lanka itinerary with driver for beaches, culture, east coast, north, hill country, wildlife, and airport drop-off.",
    image: images.blueBeach,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for short Sri Lanka round tours and small custom routes.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Luggage-friendly wagon for Sri Lanka tour package with driver bookings and family travel.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for hill country roads, private round tours, and longer Sri Lanka routes.",
  },
  {
    name: "Honda Freed",
    image: images.hondaFreed,
    passengers: "Best for 1-5 passengers",
    luggage: "Family luggage space",
    text: "Family-friendly option for airport pickup, multi-day travel, luggage, and flexible route stops.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for group Sri Lanka round tours, private driver round trips, and island-wide travel.",
  },
];

const highlights = [
  {
    title: "Custom Sri Lanka itinerary with driver",
    text: "Share your dates, pickup place, destinations, hotel needs, people, luggage, and budget so we can shape a flexible route.",
    icon: Compass,
  },
  {
    title: "Airport pickup for round trips",
    text: "Start your Sri Lanka round tours directly from Colombo Airport with flight-time checking and private vehicle support.",
    icon: Plane,
  },
  {
    title: "Fair WhatsApp quote",
    text: "Final prices are confirmed on WhatsApp depending on days, route, vehicle, hotels, tickets, safari needs, and special requests.",
    icon: MessageCircle,
  },
];

const faqs = [
  {
    question: "How do I book Sri Lanka round tours?",
    answer:
      "Send your travel dates, pickup location, places you want to visit, number of people, luggage, hotel needs, and budget on WhatsApp. We will help plan a private driver round trip.",
  },
  {
    question: "Can I customize my Sri Lanka round trip?",
    answer:
      "Yes. SKY Taxi Service & Tours can create a Sri Lanka itinerary with driver around your dates, places, hotels, budget, and travel style.",
  },
  {
    question: "Do round tours include airport pickup?",
    answer:
      "Yes. Your Sri Lanka round tours can start from Colombo Airport with flight-time checking, luggage support, and private driver pickup.",
  },
  {
    question: "Can I book a Sri Lanka tour package with driver for 3, 5, or 7 days?",
    answer:
      "Yes. You can book 3-day, 5-day, 7-day, or longer private round tour Sri Lanka routes with clean vehicles and flexible stops.",
  },
  {
    question: "Is the final Sri Lanka round tour price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on route, dates, vehicle type, number of days, passengers, hotels, entrance tickets, safari plans, train tickets, and special requests.",
  },
];

function roundToursMessage(topic = "Sri Lanka round tours") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Travel dates: ___ Pickup location: ___ Places I want to visit: ___ Number of people: ___ Hotel needs: ___ Budget: ___`,
  );
}

export default function SriLankaRoundTours({ setPage }) {
  return (
    <div className="page colombo-airport-page sri-lanka-round-tours-page">
      <PageHero
        eyebrow="Sri Lanka Round Tours"
        title="Sri Lanka Round Tours"
        description="Book Sri Lanka round tours with private driver round trips, custom routes, airport pickup, clean vehicles, and 24/7 WhatsApp booking."
        image={images.nineArchBridge}
        alt="Sri Lanka round tours with private driver"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${roundToursMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Plan on WhatsApp
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Sri Lanka round tour benefits">
          <span>
            <Route size={16} />
            Private round trips
          </span>
          <span>
            <CalendarDays size={16} />
            3, 5, 7 day ideas
          </span>
          <span>
            <Plane size={16} />
            Airport pickup
          </span>
          <span>
            <ShieldCheck size={16} />
            Driver support
          </span>
        </div>
      </PageHero>

      <section className="section sri-lanka-round-tours-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Sri Lanka round trip</span>
            <h2>Sri Lanka round tour intro with flexible private driver routes</h2>
            <p>
              SKY Taxi Service & Tours helps travelers plan Sri Lanka round tours with airport pickup, clean vehicles, private drivers,
              flexible routes, hotel stops, and custom island itineraries for culture, beaches, hill country, wildlife, and local experiences.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
              <a href="/sri-lanka-private-tours">Sri Lanka Private Tours</a>
              <a href="/sri-lanka-tour-driver">Sri Lanka Tour Driver</a>
              <a href="/private-driver-sri-lanka">Private Driver Sri Lanka</a>
              <a href="/airport-transfer-sri-lanka">Airport Transfer Sri Lanka</a>
              <a href="/ella-taxi-service">Ella Taxi Service</a>
              <a href="/kandy-taxi-service">Kandy Taxi Service</a>
              <a href="/galle-taxi-service">Galle Taxi Service</a>
              <a href="/sigiriya-taxi-service">Sigiriya Taxi Service</a>
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

      <section className="section section--soft sri-lanka-round-ideas">
        <div className="section__inner">
          <SectionHeader
            eyebrow="3-day, 5-day, 7-day tour ideas"
            title="Sri Lanka round tour ideas with private driver"
            text="Use these sample ideas to plan your Sri Lanka tour package with driver. Routes can be changed around your dates, budget, hotels, and travel style."
          />
          <div className="colombo-airport-route-grid">
            {tourIdeas.map((idea) => (
              <Reveal className="colombo-airport-route-card" key={idea.title}>
                <img src={idea.image} alt={idea.title} loading="lazy" />
                <div>
                  <span className="eyebrow">{idea.duration}</span>
                  <h3>{idea.title}</h3>
                  <p>{idea.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${roundToursMessage(idea.title)}`} target="_blank" rel="noreferrer">
                    Ask about this tour
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section sri-lanka-round-routes">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Popular round tour routes"
            title="Popular private round tour Sri Lanka routes"
            text="Choose a route idea or build your own Sri Lanka itinerary with driver for culture, beaches, hill country, wildlife, and airport drop-off."
          />
          <div className="colombo-airport-route-grid">
            {popularRoutes.map((route) => (
              <Reveal className="colombo-airport-route-card" key={route.title}>
                <img src={route.image} alt={route.title} loading="lazy" />
                <div>
                  <h3>{route.title}</h3>
                  <p>{route.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${roundToursMessage(route.title)}`} target="_blank" rel="noreferrer">
                    Plan this route
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft sri-lanka-round-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Private driver and vehicle options"
            title="Clean vehicles for Sri Lanka round tours"
            text="Choose a car, SUV, family vehicle, or van for your private round tour Sri Lanka route based on passengers, luggage, route distance, and comfort needs."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} Sri Lanka round tours vehicle`} loading="lazy" />
                  <span>Round tour</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${roundToursMessage(`${vehicle.name} round tour`)}`}
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

      <section className="section sri-lanka-round-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Sri Lanka itinerary with driver</span>
            <h2>Plan your Sri Lanka round trip on WhatsApp</h2>
            <p>
              Send your travel dates, pickup place, places you want to visit, number of people, hotel needs, and budget. We will help create a flexible private driver round trip.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${roundToursMessage()}`} target="_blank" rel="noreferrer">
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

      <section className="section sri-lanka-round-faq" itemScope itemType="https://schema.org/FAQPage">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Round tours FAQ"
            title="Sri Lanka round tours questions"
            text="Helpful answers before booking a Sri Lanka round trip, Sri Lanka tour package with driver, or custom island itinerary."
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
