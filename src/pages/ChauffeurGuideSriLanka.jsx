import { useState } from "react";
import { Compass, MapPinned, MessageCircle, Route, Users } from "lucide-react";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { images } from "../data/travelData";
import { findTaxiVehicle } from "../data/vehicles";
import { getChauffeurGuideOffer } from "../data/chauffeurGuideOffer.js";
import { formatCommercialPrice } from "../data/pricing.js";
import { buildQuoteWhatsAppLink } from "../utils/whatsapp";
import { whatsappIntents } from "../utils/whatsappQuote.js";
import "../styles/privateDriverConversion.css";
import "../styles/chauffeurGuideConversion.css";

const offer = getChauffeurGuideOffer();
const exampleVehicleIds = { sedan: "toyota-prius", miniVan: "honda-freed", van: "toyota-kdh-van" };
const vehicles = offer.vehicleOptions.map((vehicle) => {
  const example = findTaxiVehicle(exampleVehicleIds[vehicle.id]);
  return { ...vehicle, image: example.image, exampleName: example.name };
});

const highlights = [
  { title: "Private journey", text: "A private vehicle and chauffeur-guide service for a journey shaped around your group.", icon: Users },
  { title: "Guiding-oriented travel", text: "Travel with route and destination support beyond transport alone, with the exact service discussed before confirmation.", icon: Compass },
  { title: "Your itinerary", text: "Start from a SKY itinerary or send your own destinations and stops for review.", icon: MapPinned },
];

export default function ChauffeurGuideSriLanka() {
  const [vehicleId, setVehicleId] = useState(null);
  const selectedVehicle = vehicles.find((vehicle) => vehicle.id === vehicleId);
  const quoteHref = (notes) => buildQuoteWhatsAppLink({
    intent: whatsappIntents.CHAUFFEUR_GUIDE,
    vehicle: selectedVehicle?.name,
    notes,
    sourcePage: "chauffeur-guide-sri-lanka",
  });

  return (
    <div className="page colombo-airport-page private-driver-page chauffeur-guide-page">
      <PageHero
        eyebrow="Chauffeur Guide Sri Lanka"
        title="Private Chauffeur-Guided Tours in Sri Lanka"
        description="Explore Sri Lanka with a private vehicle and a guiding-oriented multi-day journey built around your route. Start with an existing itinerary or make it your own."
        image={images.sigiriya}
        alt="Sigiriya Rock Fortress in Sri Lanka"
      >
        <div className="private-driver-hero-price" aria-label={`Starting daily price ${formatCommercialPrice(offer.startingPrice, offer.currency, true)}`}>
          <strong>From {formatCommercialPrice(offer.startingPrice, offer.currency, true)}</strong>
          <span>Normally ideal for {offer.normallyMinDays}+ day journeys · up to {offer.includedKmPerDay} km/day included</span>
        </div>
        <div className="premium-hero-actions">
          <a className="button button--primary" href={quoteHref()} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Get My Tour Quote</a>
          <a className="button button--light" href="#chauffeur-guide-vehicles">See Vehicle Options</a>
        </div>
        <div className="premium-hero-badges" aria-label="Chauffeur Guide benefits">
          <span><Route size={16} /> Your route</span>
          <span><Compass size={16} /> Guided travel</span>
          <span><Users size={16} /> Private journey</span>
        </div>
      </PageHero>

      <section className="section chauffeur-guide-intro">
        <div className="section__inner split-layout">
          <Reveal className="split-layout__copy">
            <span className="eyebrow">More than transport</span>
            <h2>One private journey, with guiding-oriented travel support</h2>
            <p>Chauffeur Guide combines private vehicle travel, driving, and a more guided experience across your destinations. It is normally best suited to journeys of {offer.normallyMinDays} days or more, but you can ask SKY about another duration.</p>
            <p>Want flexible transport without this guided travel service? Explore <a href="/private-driver-sri-lanka">Private Driver</a>. Want a driver plus a separately arranged specialist guide at specific sites? See <a href="/driver-guide-sri-lanka">Driver + Guide</a>.</p>
          </Reveal>
          <Reveal className="colombo-airport-summary">
            {highlights.map((item) => {
              const Icon = item.icon;
              return <article key={item.title}><span><Icon size={20} /></span><h3>{item.title}</h3><p>{item.text}</p></article>;
            })}
          </Reveal>
        </div>
      </section>

      <section className="section section--soft private-driver-vehicles" id="chauffeur-guide-vehicles">
        <div className="section__inner">
          <SectionHeader eyebrow="Chauffeur Guide daily prices" title="Choose the vehicle class you prefer" text={`Each starting rate includes up to ${offer.includedKmPerDay} km/day. SKY confirms a current quote for your route, duration, and service requirements.`} />
          <div className="airport-transfer-grid" role="group" aria-label="Choose preferred Chauffeur Guide vehicle class">
            {vehicles.map((vehicle) => (
              <Reveal className={`airport-transfer-card private-driver-vehicle-card${vehicleId === vehicle.id ? " is-selected" : ""}`} key={vehicle.id}>
                <div className="airport-transfer-card__media"><img src={vehicle.image} alt={`${vehicle.exampleName} example vehicle`} loading="lazy" /><span>Example vehicle type</span></div>
                <div className="airport-transfer-card__body">
                  <h3>{vehicle.name}</h3>
                  <strong className="private-driver-vehicle-price">{formatCommercialPrice(vehicle.dailyPrice, offer.currency, true)}</strong>
                  <p>{vehicle.example ? `${vehicle.example}. Exact model confirmed with SKY.` : "Private sedan class. Exact model confirmed with SKY."}</p>
                  <button className="button button--light airport-transfer-card__button private-driver-vehicle-choice" type="button" aria-pressed={vehicleId === vehicle.id} onClick={() => setVehicleId((current) => current === vehicle.id ? null : vehicle.id)}>
                    {vehicleId === vehicle.id ? `${vehicle.name} selected` : `Choose ${vehicle.name}`}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="private-driver-vehicle-note">This is a preference for your quote, not a vehicle reservation. Share traveler and luggage details with SKY so the right class can be confirmed.</p>
          <a className="button button--primary private-driver-vehicle-quote" href={quoteHref()} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Get My Tour Quote</a>
        </div>
      </section>

      <section className="section private-driver-inclusions">
        <div className="section__inner">
          <SectionHeader eyebrow="Your daily service" title="What the Chauffeur Guide rate covers" text={`Up to ${offer.includedKmPerDay} km per day is included. For longer driving days, send your itinerary and SKY will confirm the current quote.`} />
          <div className="private-driver-detail-grid">
            <Reveal className="private-driver-detail-card">
              <h3>Included in your Chauffeur Guide service</h3>
              <ul><li>Private vehicle and chauffeur-guide service</li>{offer.inclusions.map((item) => <li key={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</li>)}<li>Up to {offer.includedKmPerDay} km/day</li></ul>
            </Reveal>
            <Reveal className="private-driver-detail-card">
              <h3>Not included unless arranged</h3>
              <ul><li>Guest accommodation and meals</li><li>Attraction entrance, safari, and activity tickets</li><li>Train tickets, flights, and third-party services</li><li>Personal expenses</li></ul>
              <p>Your quote will set out the exact services for your route. It does not automatically cover all guest holiday costs.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--soft chauffeur-guide-itineraries">
        <div className="section__inner">
          <SectionHeader eyebrow="Start with a route" title="Use an itinerary or create your own" text="Browse SKY's existing multi-day itineraries for ideas, then discuss this Chauffeur Guide service for the route you want. Existing tour prices are separate offers, not this service's guaranteed total." />
          <div className="private-driver-detail-grid">
            <Reveal className="private-driver-detail-card"><h3>Explore an existing itinerary</h3><p>See SKY's <a href="/5-day-sri-lanka-tour">5-day Trincomalee, Cultural Triangle, Hill Country & Wildlife itinerary</a> or <a href="/round-tours">browse round tours</a>. Use them as a starting point for a Chauffeur Guide inquiry.</p><a className="text-button" href={quoteHref("I would like to discuss the 5-Day Trincomalee, Cultural Triangle, Hill Country & Wildlife itinerary as a starting point for Chauffeur Guide service.")} target="_blank" rel="noreferrer">Ask SKY About This Journey</a></Reveal>
            <Reveal className="private-driver-detail-card"><h3>Customize your journey</h3><p>Change destinations and stops without a separate itinerary-customization fee. Your final travel quote can still change with route, distance, duration, vehicle class, and service requirements.</p><a className="text-button" href={quoteHref()} target="_blank" rel="noreferrer">Plan My Tour</a></Reveal>
          </div>
        </div>
      </section>

      <section className="section private-driver-journey">
        <div className="section__inner">
          <SectionHeader eyebrow="Example journey" title="See how a multi-day route could unfold" text="This route is illustrative, not a fixed package, guaranteed duration, or quoted total. Choose different places if you prefer." />
          <ol className="private-driver-journey-stops" aria-label="Example Chauffeur Guide journey stops">
            {["Colombo / Airport", "Sigiriya", "Kandy", "Nuwara Eliya", "Ella", "Yala", "South Coast", "Galle"].map((stop, index) => <li key={stop}><span>{String(index + 1).padStart(2, "0")}</span><strong>{stop}</strong></li>)}
          </ol>
          <p className="private-driver-journey-note">Send your own destinations in the quote request. SKY reviews the travel plan and the guiding-oriented service with you before confirmation.</p>
        </div>
      </section>

      <section className="section section--soft private-driver-process">
        <div className="section__inner">
          <SectionHeader eyebrow="How it works" title="From an idea to a confirmed journey" />
          <ol className="private-driver-process-grid">
            {[
              ["Choose or share a journey", "Use an existing itinerary or tell SKY where you want to go."],
              ["Choose a vehicle", "Select a preferred class, or ask SKY for help."],
              ["Customize the route", "Discuss destinations and stops without a separate customization fee."],
              ["Receive your quote", "SKY reviews the route, duration, distance, and requirements."],
              ["Confirm if it suits you", "Review the current quote and decide whether to proceed."],
              ["Receive travel details", "SKY provides the relevant service and vehicle arrangements before the confirmed journey."],
            ].map(([title, description], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{title}</strong><p>{description}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="section private-driver-cta">
        <div className="section__inner"><Reveal className="booking-cta-panel"><div><span className="eyebrow">Your journey, your quote</span><h2>Request your Chauffeur Guide quote</h2><p>Send your arrival date, number of days, travelers, and places you want to visit. SKY will discuss the route and current service details with you; you confirm only after reviewing the quote.</p></div><div className="cta-actions"><a className="button button--primary" href={quoteHref()} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Get My Tour Quote</a><a className="button button--light" href="/private-driver-sri-lanka">Compare Private Driver</a></div></Reveal></div>
      </section>
    </div>
  );
}
