import { CalendarDays, Car, Clock3, Compass, Home, Luggage, MapPinned, MessageCircle, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const tourDriverServices = [
  {
    title: "Airport pickup with tour driver",
    text: "Start your journey with a Sri Lanka tour driver from Colombo Airport, including flight-time checking, luggage support, and WhatsApp confirmation.",
    image: images.airportWelcome,
  },
  {
    title: "Multi-day private chauffeur tours",
    text: "Plan a chauffeur tour Sri Lanka route for Sigiriya, Kandy, Ella, Galle, Mirissa, Yala, Trincomalee, and custom island travel.",
    image: images.sigiriya,
  },
  {
    title: "Flexible itineraries",
    text: "Tell us your dates, places, hotel needs, budget, and travel style. Your private tour driver Sri Lanka route can be adjusted around your plans.",
    image: images.trainRide,
  },
  {
    title: "Sri Lanka driver guide support",
    text: "Travel with a friendly local driver who helps with routes, timing, stops, luggage, simple travel advice, and safe private transfers.",
    image: images.kandyTemple,
  },
];

const popularDestinations = [
  {
    title: "Cultural Triangle",
    text: "Sigiriya, Dambulla, Polonnaruwa, Anuradhapura, and cultural village routes with a Sri Lanka private chauffeur.",
    image: images.dambulla,
  },
  {
    title: "Hill Country",
    text: "Kandy, Nuwara Eliya, Ella, tea country, waterfalls, train views, and mountain routes with flexible stops.",
    image: images.nineArchBridge,
  },
  {
    title: "South Coast",
    text: "Galle, Unawatuna, Mirissa, Weligama, Ahangama, beaches, whale watching transfers, and relaxed coastal travel.",
    image: images.blueBeach,
  },
  {
    title: "Wildlife and Nature",
    text: "Yala, Udawalawe, safari routes, jungle areas, viewpoints, and nature stops with private vehicle support.",
    image: images.safari,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for solo travelers, couples, airport pickups, and short tours.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Clean wagon option for private chauffeur tours, family travel, and luggage-friendly routes.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for hill country roads, couples, families, and longer private tour routes.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for groups, families, multi-day tours, airport pickups, and round tours.",
  },
];

const highlights = [
  {
    title: "Custom tour planning",
    text: "Build your itinerary around your dates, places, hotels, budget, vehicle needs, and travel style.",
    icon: Compass,
  },
  {
    title: "Clean private vehicles",
    text: "Choose a car, SUV, or van depending on your passengers, luggage, route distance, and comfort needs.",
    icon: Car,
  },
  {
    title: "24/7 WhatsApp booking",
    text: "Send your travel details anytime and get a fair quote for a Sri Lanka tour driver.",
    icon: Clock3,
  },
];

const faqs = [
  {
    question: "How do I hire a Sri Lanka tour driver?",
    answer:
      "Send your travel dates, pickup location, places you want to visit, number of passengers, luggage, hotel needs, and budget on WhatsApp. We will help plan a flexible route and confirm the driver.",
  },
  {
    question: "Can I book airport pickup with a tour driver?",
    answer:
      "Yes. SKY Taxi Service & Tours can arrange Colombo Airport pickup with a Sri Lanka tour driver so your private tour starts directly after arrival.",
  },
  {
    question: "Can I book a multi-day private chauffeur tour?",
    answer:
      "Yes. You can book private chauffeur tours for cultural sites, hill country, beaches, wildlife routes, and full island travel with flexible itineraries.",
  },
  {
    question: "Is this a Sri Lanka driver guide service?",
    answer:
      "Your driver helps with routes, timing, comfort stops, luggage, and local travel support. Specialist licensed site guides can be arranged separately where needed.",
  },
  {
    question: "Is the Sri Lanka tour driver price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on travel dates, route, vehicle type, number of days, passengers, luggage, hotel needs, tickets, and special requests.",
  },
];

function tourDriverMessage(topic = "Sri Lanka tour driver service") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to hire a ${topic}. Travel dates: ___ Pickup location: ___ Places I want to visit: ___ Number of passengers: ___ Hotel needs: ___ Budget: ___`,
  );
}

export default function SriLankaTourDriver({ setPage }) {
  return (
    <div className="page colombo-airport-page tour-driver-page">
      <PageHero
        eyebrow="Sri Lanka Tour Driver"
        title="Sri Lanka Tour Driver"
        description="Hire a Sri Lanka tour driver for private chauffeur tours, airport pickups, flexible itineraries, clean vehicles, and 24/7 WhatsApp booking."
        image={images.sigiriya}
        alt="Sri Lanka tour driver private chauffeur tour"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${tourDriverMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Hire Tour Driver
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Sri Lanka tour driver benefits">
          <span>
            <Plane size={16} />
            Airport pickups
          </span>
          <span>
            <CalendarDays size={16} />
            Multi-day tours
          </span>
          <span>
            <Route size={16} />
            Flexible itineraries
          </span>
          <span>
            <ShieldCheck size={16} />
            Private chauffeur
          </span>
        </div>
      </PageHero>

      <section className="section tour-driver-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Private tour driver Sri Lanka</span>
            <h2>Sri Lanka private tour driver for flexible chauffeur tours</h2>
            <p>
              SKY Taxi Service & Tours helps travelers hire a Sri Lanka tour driver for airport pickups, day tours, multi-day round tours,
              hotel transfers, and custom private chauffeur routes across the island with clean vehicles and friendly local driver support.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
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

      <section className="section section--soft tour-driver-services">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Chauffeur tour Sri Lanka"
            title="Airport pickup, multi-day tours, and flexible itineraries"
            text="Choose a Sri Lanka private chauffeur for arrival pickup, custom route planning, day tours, round tours, and island-wide private travel."
          />
          <div className="colombo-airport-route-grid">
            {tourDriverServices.map((service) => (
              <Reveal className="colombo-airport-route-card" key={service.title}>
                <img src={service.image} alt={service.title} loading="lazy" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${tourDriverMessage(service.title)}`} target="_blank" rel="noreferrer">
                    Ask tour driver price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section tour-driver-destinations">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Popular destinations"
            title="Popular Sri Lanka destinations with a private tour driver"
            text="Plan cultural, hill country, south coast, wildlife, and custom Sri Lanka routes with a friendly driver and clean private vehicle."
          />
          <div className="colombo-airport-route-grid">
            {popularDestinations.map((destination) => (
              <Reveal className="colombo-airport-route-card" key={destination.title}>
                <img src={destination.image} alt={destination.title} loading="lazy" />
                <div>
                  <h3>{destination.title}</h3>
                  <p>{destination.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${tourDriverMessage(destination.title)}`} target="_blank" rel="noreferrer">
                    Plan this route
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft tour-driver-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for your Sri Lanka driver guide route"
            text="Choose a private car, SUV, or van for airport pickups, day tours, private chauffeur tours, and multi-day Sri Lanka travel."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} Sri Lanka tour driver vehicle`} loading="lazy" />
                  <span>Tour driver</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${tourDriverMessage(`${vehicle.name} tour driver`)}`}
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

      <section className="section tour-driver-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Sri Lanka private chauffeur</span>
            <h2>Hire a Sri Lanka tour driver</h2>
            <p>
              Send your travel dates, pickup location, destinations, number of passengers, luggage, hotel needs, and budget. We will reply with a fair quote and flexible route plan.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${tourDriverMessage()}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Book on WhatsApp
              </a>
              <a className="button button--light" href="/private-driver-sri-lanka">
                <Car size={18} />
                Private Driver
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section tour-driver-faq" itemScope itemType="https://schema.org/FAQPage">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Tour driver FAQ"
            title="Sri Lanka tour driver questions"
            text="Helpful answers before booking a private tour driver Sri Lanka route or chauffeur tour Sri Lanka service."
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
