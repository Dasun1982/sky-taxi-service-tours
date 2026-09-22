import { Mail, MessageCircle, Phone } from "lucide-react";
import { contactInfo } from "../data/travelData";
import { buildWhatsAppLink } from "../utils/whatsapp";

/**
 * Truthful manual account deletion / privacy request path for store readiness.
 * Does not promise automatic deletion.
 */
export default function AccountDeletion() {
  const prefill = "SKY account deletion / privacy request: ";
  return (
    <div className="page">
      <section className="section">
        <div className="section__inner prose-block">
          <span className="eyebrow">Manual process</span>
          <h1>Account deletion &amp; data requests</h1>
          <p>
            SKY handles account deletion and privacy/data requests manually through support.
            There is no automatic one-click deletion for every system yet. That is intentional
            and truthful — we will not claim automation we do not have.
          </p>

          <h2>How to request</h2>
          <ol>
            <li>Contact SKY using WhatsApp, phone, or email below.</li>
            <li>State clearly whether you want account deletion, a data copy, or another privacy request.</li>
            <li>Include the phone/email used for bookings or app login so we can identify the correct account.</li>
          </ol>

          <h2>What happens next</h2>
          <p>
            An operator confirms the request, verifies identity through existing contact channels,
            and processes deletion or disclosure according to operational and legal requirements.
            Some categories (for example safety/incident or financial/compliance records, if any later
            apply) may require legitimate retention pending legal review.
          </p>

          <h2>Contact</h2>
          <ul>
            <li>
              <a href={buildWhatsAppLink(prefill)} target="_blank" rel="noreferrer">
                <MessageCircle size={16} /> WhatsApp request
              </a>
            </li>
            <li>
              <a href={`tel:${contactInfo.tel}`}>
                <Phone size={16} /> {contactInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contactInfo.email}?subject=${encodeURIComponent("SKY account deletion / privacy request")}`}
              >
                <Mail size={16} /> {contactInfo.email}
              </a>
            </li>
          </ul>

          <p>
            Related: <a href="/privacy">Privacy notice</a> · <a href="/support">Support</a>
          </p>
        </div>
      </section>
    </div>
  );
}
