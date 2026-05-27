import { MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { contactInfo } from "../data/travelData";

export default function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <a
      className="floating-whatsapp"
      href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(t("messages.floatingWhatsapp"))}`}
      target="_blank"
      rel="noreferrer"
      aria-label={t("common.bookOnWhatsApp")}
    >
      <MessageCircle size={27} />
    </a>
  );
}
