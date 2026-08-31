import { ArrowRight, Compass, Home, MessageCircle } from "lucide-react";
import Reveal from "../components/Reveal";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function NotFound({ setPage }) {
  return (
    <div className="page not-found-page">
      <section className="section not-found-section">
        <div className="section__inner not-found-inner">
          <Reveal className="not-found-content">
            <span className="eyebrow">404</span>
            <h1>This page has moved on without us.</h1>
            <p>
              The page you were looking for doesn&apos;t exist, may have moved, or the link was mistyped. Here are a few places to pick back up.
            </p>
            <div className="premium-hero-actions">
              <button className="button button--primary" type="button" onClick={() => setPage("home")}>
                <Home size={18} />
                Back to Homepage
              </button>
              <button className="button button--light" type="button" onClick={() => setPage("destinations")}>
                <Compass size={18} />
                Explore Destinations
              </button>
            </div>
            <a className="text-button" href={buildWhatsAppLink()} target="_blank" rel="noreferrer">
              <MessageCircle size={16} />
              Or plan a trip on WhatsApp
              <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
