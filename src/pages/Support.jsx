import { Mail, MessageCircle, Phone } from "lucide-react";
import { contactInfo } from "../data/travelData";
import { buildWhatsAppLink } from "../utils/whatsapp";

/**
 * Public support page using canonical SKY channels.
 * Does not claim 24/7 emergency dispatch.
 */
export default function Support({ setPage }) {
  return (
    <div className="page">
      <section className="section">
        <div className="section__inner prose-block">
          <span className="eyebrow">Support</span>
          <h1>Contact SKY support</h1>
          <p>
            Need help with a transport request, quote, booking, driver coordination, cancellation,
            or app question? Reach the same SKY channels used across the website and apps.
            Replies are handled by the SKY team as soon as practical; this is not a 24/7 emergency dispatch service.
          </p>

          <div className="feature-grid" style={{ marginTop: "1.5rem" }}>
            <a className="feature-card" href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
              <span className="feature-card__icon">
                <MessageCircle size={24} />
              </span>
              <h3>WhatsApp</h3>
              <p>Fastest for bookings, route details, and trip questions.</p>
            </a>
            <a className="feature-card" href={`tel:${contactInfo.tel}`}>
              <span className="feature-card__icon">
                <Phone size={24} />
              </span>
              <h3>Phone</h3>
              <p>{contactInfo.phone}</p>
            </a>
            <a className="feature-card" href={`mailto:${contactInfo.email}`}>
              <span className="feature-card__icon">
                <Mail size={24} />
              </span>
              <h3>Email</h3>
              <p>{contactInfo.email}</p>
            </a>
          </div>

          <h2 style={{ marginTop: "2rem" }}>Useful links</h2>
          <ul>
            <li>
              <a
                href="/booking"
                onClick={(e) => {
                  e.preventDefault();
                  setPage("booking");
                }}
              >
                Request transport / booking
              </a>
            </li>
            <li>
              <a
                href="/transport"
                onClick={(e) => {
                  e.preventDefault();
                  setPage("transport");
                }}
              >
                Transportation overview
              </a>
            </li>
            <li>
              <a href="/privacy">Privacy notice</a>
            </li>
            <li>
              <a href="/account-deletion">Account deletion &amp; data requests</a>
            </li>
            <li>
              <a href="/terms">Service terms (draft)</a>
            </li>
          </ul>

          <p className="muted">SKY app for phones: coming soon — no public Play Store link yet.</p>
        </div>
      </section>
    </div>
  );
}
