import { Mail, MessageCircle, Phone } from "lucide-react";
import { contactInfo } from "../data/travelData";
import { buildWhatsAppLink } from "../utils/whatsapp";

/**
 * Draft technical terms surface for public hosting preparation.
 * LEGAL REVIEW REQUIRED — not final legal approval.
 */
export default function Terms() {
  return (
    <div className="page">
      <section className="section">
        <div className="section__inner prose-block">
          <span className="eyebrow">Draft · legal review pending</span>
          <h1>Service terms (draft)</h1>
          <p>
            These draft terms describe how SKY transport requests and bookings currently work.
            They are prepared for review and are not a claim of final legal approval.
          </p>

          <h2>Service model</h2>
          <p>
            You may request private transport such as airport transfers, taxi rides, or private
            driver service. A provider may respond with a manual quote. Accepting a quote records
            agreement to proceed — it does not process payment in the closed pilot / NO_PAYMENT mode.
            Confirmation, assignment, and journey fulfillment are separate steps.
          </p>

          <h2>Truthful state boundaries</h2>
          <ul>
            <li>A request is not a confirmed booking</li>
            <li>A quote is not a booking</li>
            <li>Accepted is not confirmed</li>
            <li>Confirmed is not paid</li>
            <li>Paid is not completed</li>
            <li>GPS/location is observational support only and does not authorize fulfillment steps</li>
          </ul>

          <h2>Communication</h2>
          <p>
            Messaging and notifications help coordinate your trip. They do not by themselves mutate
            booking authority. Support is available through published SKY WhatsApp, phone, and email
            channels during published operating hours — not claimed here as 24/7 emergency dispatch.
          </p>

          <h2>Cancellations</h2>
          <p>
            Before provider confirmation, travelers may cancel freely where product policy allows.
            After confirmation, cancellation is handled manually with SKY / the provider.
          </p>

          <h2>Contact</h2>
          <ul>
            <li>
              <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`tel:${contactInfo.tel}`}>
                <Phone size={16} /> {contactInfo.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contactInfo.email}`}>
                <Mail size={16} /> {contactInfo.email}
              </a>
            </li>
          </ul>

          <p className="muted">
            Terms version draft: sky-public-terms-draft-v1 · Effective date: pending legal review
          </p>
        </div>
      </section>
    </div>
  );
}
