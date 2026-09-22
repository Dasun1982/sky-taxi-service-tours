import { Mail, MessageCircle, Phone } from "lucide-react";
import { contactInfo } from "../data/travelData";
import { buildWhatsAppLink } from "../utils/whatsapp";

/**
 * Draft technical privacy notice for public hosting preparation.
 * LEGAL REVIEW REQUIRED — not final legal approval.
 * Based on existing SKY M70 closed-pilot / transport data practices.
 */
export default function Privacy() {
  return (
    <div className="page">
      <section className="section">
        <div className="section__inner prose-block">
          <span className="eyebrow">Draft · legal review pending</span>
          <h1>Privacy notice</h1>
          <p>
            This page describes how SKY Taxi Service &amp; Tours (&quot;SKY&quot;) handles information
            when you request transport, book services, message support, or use SKY apps.
            It is a technical draft prepared for review. It is not legal advice and does not
            claim professional legal approval.
          </p>

          <h2>What we use</h2>
          <ul>
            <li>Account and contact details you provide (name, phone, email where used)</li>
            <li>Transport request details (pickup, destination, date/time, passengers, notes)</li>
            <li>Quotes, booking/journey status, and assignment information needed to operate a trip</li>
            <li>Messages exchanged for booking or journey coordination</li>
            <li>Operational support records when you contact us</li>
            <li>
              Foreground location during an active journey context when you grant permission in the
              app — background location tracking is not used
            </li>
          </ul>

          <h2>Why we use it</h2>
          <p>
            To receive and respond to transport requests, issue provider quotes, confirm bookings,
            coordinate drivers and vehicles, communicate about your trip, provide support, and keep
            operational records needed to run the service safely and truthfully.
          </p>

          <h2>What we do not claim here</h2>
          <ul>
            <li>Accepting a quote is not payment</li>
            <li>Location does not by itself mark arrived, start, or complete</li>
            <li>Messages and notifications are informational and do not alone change booking state</li>
            <li>SKY does not claim 24/7 support, emergency dispatch, or guaranteed verification on this page</li>
          </ul>

          <h2>Sharing</h2>
          <p>
            Information needed to fulfill a request may be shared with the transport provider and
            assigned driver for that trip. We do not sell personal data. Server-only credentials and
            privileged keys are not placed in public apps.
          </p>

          <h2>Retention</h2>
          <p>
            Exact retention periods remain pending human/professional legal review. Some operational
            records may need to be kept for legitimate business, safety, or legal reasons.
          </p>

          <h2>Your requests</h2>
          <p>
            You may request account deletion or a privacy/data request. These are handled manually
            by SKY support — there is no automatic instant deletion button for every system yet.
          </p>
          <p>
            See <a href="/account-deletion">Account deletion &amp; data requests</a> or contact us:
          </p>
          <ul>
            <li>
              <a href={buildWhatsAppLink("SKY privacy / data request:")} target="_blank" rel="noreferrer">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`tel:${contactInfo.tel}`}>
                <Phone size={16} /> {contactInfo.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contactInfo.email}?subject=${encodeURIComponent("SKY privacy / data request")}`}>
                <Mail size={16} /> {contactInfo.email}
              </a>
            </li>
          </ul>

          <p className="muted">
            Policy version draft: sky-public-privacy-notice-draft-v1 · Effective date: pending legal review
          </p>
        </div>
      </section>
    </div>
  );
}
