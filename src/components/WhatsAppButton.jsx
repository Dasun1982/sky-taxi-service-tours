import { MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { buildWhatsAppLink } from "../utils/whatsapp";

export default function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <a
      className="floating-whatsapp"
      href={buildWhatsAppLink(t("messages.floatingWhatsapp"))}
      target="_blank"
      rel="noreferrer"
      aria-label={t("common.bookOnWhatsApp")}
    >
      <MessageCircle size={27} />
    </a>
  );
}
