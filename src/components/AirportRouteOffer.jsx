import { useState } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { formatCommercialPrice } from "../data/pricing.js";
import { buildQuoteWhatsAppLink } from "../utils/whatsapp.js";
import { whatsappIntents } from "../utils/whatsappQuote.js";
import { trackEvent } from "../utils/analytics.js";
import "../styles/airportConversion.css";

const steps = [
  ["Send your details", "Share your travel date, flight or arrival details, travelers, luggage, and pickup preference."],
  ["Receive your quote", "SKY confirms the current price and transfer details for your request."],
  ["Confirm your transfer", "Review the quote and confirm with SKY if it suits your plans."],
  ["Receive pickup details", "SKY shares the driver and vehicle details before your confirmed pickup."],
  ["Meet your driver", "Meet according to the pickup arrangement you confirmed with SKY."],
];

const className = (vehicle) => vehicle.id === "van" ? "KDH Van" : vehicle.name;

export function AirportRouteHeroPrice({ offer }) {
  return (
    <div className="airport-route-hero-price" aria-label={`Starting price from ${formatCommercialPrice(offer.startingPrice, offer.currency)}`}>
      <strong>From {formatCommercialPrice(offer.startingPrice, offer.currency)}</strong>
      <span>{offer.startingVehicleName} · {offer.startingPickupName}. Final quote confirmed before booking.</span>
    </div>
  );
}

export default function AirportRouteOffer({ offer }) {
  const [pickupOption, setPickupOption] = useState(null);
  const [vehicleClass, setVehicleClass] = useState(null);
  const selectedVehicle = offer.vehicleOptions.find((vehicle) => vehicle.id === vehicleClass);
  const quoteHref = buildQuoteWhatsAppLink({
    intent: whatsappIntents.AIRPORT_TRANSFER,
    pickup: offer.pickupName,
    destination: offer.destinationName,
    pickupOption,
    vehicle: selectedVehicle ? className(selectedVehicle) : undefined,
    sourcePage: offer.pageSlug,
  });

  return (
    <section className="section section--soft airport-route-offer" data-airport-offer={offer.pageSlug}>
      <div className="section__inner">
        <SectionHeader
          eyebrow="Your private airport transfer"
          title="Choose your pickup at Colombo Airport"
          text={`These are CMB to ${offer.destinationName} transport prices. Choose the meeting arrangement that suits you; SKY confirms the current quote before booking.`}
        />

        <div className="airport-offer-pickup-grid" role="group" aria-label="Choose airport pickup arrangement">
          {offer.pickupOptions.map((option) => (
            <button
              key={option.id}
              className={`airport-offer-pickup${pickupOption === option.id ? " is-selected" : ""}`}
              type="button"
              aria-pressed={pickupOption === option.id}
              onClick={() => setPickupOption((current) => current === option.id ? null : option.id)}
            >
              <strong>{option.name}</strong>
              <span>{option.description}</span>
              <em>{pickupOption === option.id ? "Selected pickup" : "Choose this pickup"}</em>
            </button>
          ))}
        </div>
        <p className="airport-offer-explainer">Outside Meeting has a lower price because you meet near the post office, about 50 metres from the airport exit. It is a different pickup arrangement.</p>

        <h3 className="airport-offer-subtitle">Vehicle class and pickup prices</h3>
        <div className="airport-offer-vehicle-grid" role="group" aria-label="Choose vehicle class">
          {offer.vehicleOptions.map((vehicle) => (
            <article className={`airport-offer-vehicle-card${vehicleClass === vehicle.id ? " is-selected" : ""}`} key={vehicle.id}>
              <h4>{className(vehicle)}</h4>
              <p>{vehicle.example ? `${vehicle.example}. Exact model confirmed with SKY.` : "Private sedan class. Exact model confirmed with SKY."}</p>
              <div className="airport-transfer-card__prices">
                {offer.pickupOptions.map((option) => (
                  <div key={option.id}>
                    <span>{option.name}</span>
                    <strong>{formatCommercialPrice(vehicle.prices[option.id].amount, vehicle.prices[option.id].currency)}</strong>
                  </div>
                ))}
              </div>
              <button
                className="button button--light airport-offer-choose"
                type="button"
                aria-pressed={vehicleClass === vehicle.id}
                onClick={() => setVehicleClass((current) => current === vehicle.id ? null : vehicle.id)}
              >
                {vehicleClass === vehicle.id ? `${className(vehicle)} selected` : `Choose ${className(vehicle)}`}
              </button>
            </article>
          ))}
        </div>
        <p className="airport-offer-explainer">Vehicle class is a preference for your quote. No exact model or vehicle is reserved by selecting it.</p>

        <div className="airport-offer-detail-grid">
          <div>
            <h3>Included in your transfer</h3>
            <ul>
              <li>Private vehicle and driver for CMB to {offer.destinationName}</li>
              <li>{offer.inclusions[0]}</li>
              <li>The meeting arrangement you confirm with SKY</li>
            </ul>
            <p>Extra stops, waiting, and special requests are reviewed in your quote. Accommodation, meals, and activities are separate.</p>
          </div>
          <div>
            <h3>How it works</h3>
            <ol>
              {steps.map(([title, description]) => <li key={title}><strong>{title}</strong><span>{description}</span></li>)}
            </ol>
          </div>
        </div>

        <Reveal className="booking-cta-panel airport-offer-quote">
          <div>
            <span className="eyebrow">Quote before confirmation</span>
            <h2>Request your {offer.destinationName} transfer quote</h2>
            <p>Pickup and vehicle choices appear in your WhatsApp message only when selected. Add your flight, date, traveler, and luggage details there, and ask for today&apos;s best available price.</p>
          </div>
          <div className="cta-actions">
            <a className="button button--primary" href={quoteHref} target="_blank" rel="noreferrer" onClick={() => trackEvent("whatsapp_clicked", { page_source: offer.pageSlug, service: "airport-transfer" })}>
              <MessageCircle size={18} />
              Get My Transfer Quote
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AirportContinueJourney({ destinationName }) {
  return (
    <section className="section airport-continue-journey">
      <div className="section__inner">
        <Reveal className="booking-cta-panel">
          <div>
            <span className="eyebrow">Continue your journey</span>
            <h2>Travelling around Sri Lanka after {destinationName}?</h2>
            <p>Explore SKY's existing private driver service for travel beyond your airport transfer.</p>
          </div>
          <div className="cta-actions">
            <a className="button button--light" href="/private-driver-sri-lanka">
              Explore Private Travel <ArrowRight size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
