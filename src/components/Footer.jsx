import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { brand, contactInfo, images } from "../data/travelData";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function Footer({ setPage }) {
  const { t } = useLanguage();
  const linkGroups = [
    {
      heading: "Explore",
      links: [
        { label: "Destinations", page: "destinations" },
        { label: "Experiences", page: "experiences" },
        { label: "Tours", page: "tours" },
        { label: "Wildlife", page: "wildlife" },
        { label: "Gallery", page: "gallery" },
        { label: "Travel Guide", page: "travel-guide" },
        { label: "About", page: "about" },
      ],
    },
    {
      heading: "Plan & book",
      links: [
        { label: "AI Trip Planner", page: "ai-trip-planner" },
        { label: "Transportation", page: "transport" },
        { label: "Taxi Service", page: "taxi" },
        { label: "Airport Transfers", page: "airport" },
        { label: "Private Driver", page: "sri-lanka-tour-driver" },
        { label: "Packages", page: "packages" },
        { label: "Booking", page: "booking" },
        { label: "Testimonials", page: "testimonials" },
        { label: "Contact", page: "contact" },
      ],
    },
  ];

  const goToPage = (event, page) => {
    event.preventDefault();
    setPage(page);
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="brand-mark">
            <img src={images.logo} alt="SKY Taxi Service & Tours logo" />
          </span>
          <div>
            <strong>{brand.name}</strong>
            <p>{t("footer.tagline", brand.tagline)}</p>
          </div>
        </div>

        {linkGroups.map((group) => (
          <div className="footer__col" key={group.heading}>
            <h2>{group.heading}</h2>
            <div className="footer__links">
              {group.links.map((item) => (
                <a href={`#/${item.page}`} key={item.page} onClick={(event) => goToPage(event, item.page)}>
                  {t(`footer.links.${item.page}`, item.label)}
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="footer__social">
          <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer" aria-label={t("common.whatsapp")}>
            <MessageCircle size={19} />
            {t("common.whatsapp")}
          </a>
          <a href={`tel:${contactInfo.tel}`} aria-label={t("common.phone")}>
            <Phone size={19} />
            {t("common.call")}
          </a>
          <a href={`mailto:${contactInfo.email}`} aria-label={t("common.email")}>
            <Mail size={19} />
            {t("common.email")}
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=SKY%20Taxi%20Service%20%26%20Tours%20Unawatuna"
            target="_blank"
            rel="noreferrer"
            aria-label={t("common.googleMaps")}
          >
            <MapPin size={19} />
            {t("common.map")}
          </a>
          <span className="footer__address">
            <MapPin size={19} />
            656/B, Kahatagaha Watta, Maharamba Road, Dalawella, Unawatuna, Sri Lanka.
          </span>
        </div>
      </div>
      <div className="footer__bottom">
        <span>{t("footer.copyright")}</span>
        <span>{t("footer.bottom")}</span>
      </div>
    </footer>
  );
}
