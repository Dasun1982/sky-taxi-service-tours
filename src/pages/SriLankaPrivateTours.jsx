import { CalendarDays, Car, Clock3, Compass, Home, Luggage, MapPinned, MessageCircle, Plane, Route, ShieldCheck, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { contactInfo, images } from "../data/travelData";

const privateTourTypes = [
  {
    title: "Custom day tours",
    text: "Plan Sri Lanka custom tours for beaches, temples, viewpoints, wildlife, culture, and local stops with a private driver for the day.",
    image: images.galleFort,
  },
  {
    title: "Multi-day round tours",
    text: "Book Sri Lanka round tours with flexible routes for Sigiriya, Kandy, Ella, Galle, Mirissa, Yala, Trincomalee, and more.",
    image: images.nineArchBridge,
  },
  {
    title: "Airport pickup for tours",
    text: "Start your private tours Sri Lanka journey from Colombo Airport with flight-time checking, luggage support, and WhatsApp confirmation.",
    image: images.airportWelcome,
  },
  {
    title: "Sri Lanka tours with driver",
    text: "Travel with a friendly local driver who helps with route timing, safe transfers, comfort stops, luggage, and flexible tour planning.",
    image: images.trainRide,
  },
];

const destinations = [
  {
    title: "Sigiriya and Dambulla",
    text: "Cultural Triangle route for Sigiriya Rock Fortress, Dambulla Cave Temple, Pidurangala, and village experiences.",
    image: images.sigiriya,
  },
  {
    title: "Kandy and Hill Country",
    text: "Private Sri Lanka tours for Kandy, Temple of the Tooth, Nuwara Eliya, Ella, tea country, waterfalls, and scenic roads.",
    image: images.kandyTemple,
  },
  {
    title: "Galle and South Coast",
    text: "Beach and culture route for Galle Fort, Unawatuna, Jungle Beach, Mirissa, Weligama, and whale watching transfers.",
    image: images.blueBeach,
  },
  {
    title: "Wildlife and Nature",
    text: "Plan safari routes, Yala or Udawalawe stops, rainforest areas, viewpoints, and nature-friendly custom tour days.",
    image: images.safari,
  },
];

const vehicles = [
  {
    name: "Toyota Prius",
    image: images.toyotaPrius,
    passengers: "Best for 1-3 passengers",
    luggage: "2 medium bags",
    text: "Affordable private car for custom day tours, airport pickup, and short Sri Lanka private tours.",
  },
  {
    name: "Honda Shuttle",
    image: images.hondaShuttle,
    passengers: "Best for 1-4 passengers",
    luggage: "Comfortable luggage space",
    text: "Luggage-friendly wagon for Sri Lanka tours with driver, airport pickups, and family routes.",
  },
  {
    name: "Honda Vezel",
    image: images.hondaVezel,
    passengers: "Best for 1-4 passengers",
    luggage: "SUV luggage space",
    text: "Comfortable SUV for hill country roads, couples, families, and longer private tour routes.",
  },
  {
    name: "Honda Freed",
    image: images.hondaFreed,
    passengers: "Best for 1-5 passengers",
    luggage: "Family luggage space",
    text: "Good family vehicle for Sri Lanka custom tours, day trips, luggage, and airport-to-tour plans.",
  },
  {
    name: "Toyota KDH Van",
    image: images.toyotaKdh,
    passengers: "Best for 1-8 passengers",
    luggage: "Large group luggage",
    text: "Spacious van for group private tours Sri Lanka, round tours, airport pickup, and island-wide travel.",
  },
];

const highlights = [
  {
    title: "Flexible custom routes",
    text: "Tell us your dates, pickup location, places, budget, hotel needs, and travel style so we can plan a custom private tour.",
    icon: Compass,
  },
  {
    title: "Private driver support",
    text: "Book Sri Lanka tours with driver for safe travel, simple route planning, luggage help, and friendly local support.",
    icon: Car,
  },
  {
    title: "Final quote on WhatsApp",
    text: "Tour prices are confirmed on WhatsApp depending on route, vehicle, people, dates, tickets, hotels, and special requests.",
    icon: MessageCircle,
  },
];

const faqs = [
  {
    question: "How do I book Sri Lanka private tours?",
    answer:
      "Send your travel dates, pickup location, places you want to visit, number of passengers, luggage, hotel needs, and budget on WhatsApp. We will help create a flexible private tour plan.",
  },
  {
    question: "Can I customize my Sri Lanka private tour?",
    answer:
      "Yes. SKY Taxi Service & Tours can help with Sri Lanka custom tours for day trips, round tours, airport pickup, beach routes, cultural sites, wildlife, and hill country travel.",
  },
  {
    question: "Do you offer Sri Lanka round tours?",
    answer:
      "Yes. You can book multi-day Sri Lanka round tours with a private driver, clean vehicle, flexible itinerary, hotel stops, and WhatsApp support.",
  },
  {
    question: "Can private tours start from Colombo Airport?",
    answer:
      "Yes. Airport pickup for tours is available, so your Sri Lanka private tours can begin directly after arrival with flight-time checking and luggage support.",
  },
  {
    question: "Is the private tour price fixed online?",
    answer:
      "The final price is confirmed on WhatsApp depending on route, dates, vehicle type, passengers, luggage, hotels, entrance tickets, waiting time, and special requests.",
  },
];

function privateToursMessage(topic = "Sri Lanka private tours") {
  return encodeURIComponent(
    `Hello SKY Taxi Service & Tours, I want to book ${topic}. Travel dates: ___ Pickup location: ___ Places I want to visit: ___ Number of passengers: ___ Hotel needs: ___ Budget: ___`,
  );
}

export default function SriLankaPrivateTours({ setPage }) {
  return (
    <div className="page colombo-airport-page sri-lanka-private-tours-page">
      <PageHero
        eyebrow="Sri Lanka Private Tours"
        title="Sri Lanka Private Tours"
        description="Book Sri Lanka private tours with custom day tours, round tours, private driver service, airport pickup, and 24/7 WhatsApp booking."
        image={images.galleFort}
        alt="Sri Lanka private tours with driver"
      >
        <div className="premium-hero-actions">
          <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${privateToursMessage()}`} target="_blank" rel="noreferrer">
            <MessageCircle size={19} />
            Customize on WhatsApp
          </a>
          <button className="button button--light" type="button" onClick={() => setPage("home")}>
            <Home size={18} />
            Visit Homepage
          </button>
        </div>
        <div className="premium-hero-badges" aria-label="Sri Lanka private tour benefits">
          <span>
            <CalendarDays size={16} />
            Custom day tours
          </span>
          <span>
            <Route size={16} />
            Round tours
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

      <section className="section sri-lanka-private-tours-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">Private tours Sri Lanka</span>
            <h2>Private Sri Lanka tours with flexible routes and friendly driver support</h2>
            <p>
              SKY Taxi Service & Tours helps travelers plan Sri Lanka private tours for custom day tours, multi-day Sri Lanka round tours,
              airport pickup, hotel transfers, cultural routes, beaches, hill country, and wildlife stops with a clean private vehicle.
            </p>
            <div className="colombo-airport-link-row">
              <a href="/">Homepage</a>
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

      <section className="section section--soft sri-lanka-private-tour-types">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Sri Lanka custom tours"
            title="Custom day tours, round tours, and airport pickup for tours"
            text="Choose a private Sri Lanka tour style and send your details on WhatsApp for a flexible route and fair quote."
          />
          <div className="colombo-airport-route-grid">
            {privateTourTypes.map((tour) => (
              <Reveal className="colombo-airport-route-card" key={tour.title}>
                <img src={tour.image} alt={tour.title} loading="lazy" />
                <div>
                  <h3>{tour.title}</h3>
                  <p>{tour.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${privateToursMessage(tour.title)}`} target="_blank" rel="noreferrer">
                    Ask tour price
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section sri-lanka-private-destinations">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Popular destinations"
            title="Popular destinations for Sri Lanka tours with driver"
            text="Plan private tours Sri Lanka routes for culture, beaches, hill country, wildlife, temples, viewpoints, and custom travel days."
          />
          <div className="colombo-airport-route-grid">
            {destinations.map((destination) => (
              <Reveal className="colombo-airport-route-card" key={destination.title}>
                <img src={destination.image} alt={destination.title} loading="lazy" />
                <div>
                  <h3>{destination.title}</h3>
                  <p>{destination.text}</p>
                  <a href={`https://wa.me/${contactInfo.whatsapp}?text=${privateToursMessage(destination.title)}`} target="_blank" rel="noreferrer">
                    Plan this tour
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft sri-lanka-private-vehicles">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Vehicle options"
            title="Clean vehicles for Sri Lanka private tours"
            text="Choose a car, SUV, family vehicle, or van for custom day tours, round tours, airport pickup, and private driver travel."
          />
          <div className="airport-transfer-grid">
            {vehicles.map((vehicle) => (
              <Reveal className="airport-transfer-card" key={vehicle.name}>
                <div className="airport-transfer-card__media">
                  <img src={vehicle.image} alt={`${vehicle.name} Sri Lanka private tour vehicle`} loading="lazy" />
                  <span>Private tour</span>
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
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${privateToursMessage(`${vehicle.name} private tour`)}`}
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

      <section className="section sri-lanka-private-cta">
        <div className="section__inner">
          <Reveal className="booking-cta-panel">
            <span className="eyebrow">Sri Lanka tours with driver</span>
            <h2>Customize your Sri Lanka private tour</h2>
            <p>
              Send your travel dates, pickup place, destinations, number of passengers, hotel needs, and budget. We will help create a flexible private tour route.
            </p>
            <div className="cta-actions">
              <a className="button button--primary" href={`https://wa.me/${contactInfo.whatsapp}?text=${privateToursMessage()}`} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Book on WhatsApp
              </a>
              <a className="button button--light" href="/sri-lanka-tour-driver">
                <MapPinned size={18} />
                Tour Driver
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section sri-lanka-private-faq" itemScope itemType="https://schema.org/FAQPage">
        <div className="section__inner">
          <SectionHeader
            eyebrow="Private tours FAQ"
            title="Sri Lanka private tours questions"
            text="Helpful answers before booking Sri Lanka custom tours, Sri Lanka round tours, or private tours with driver."
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
