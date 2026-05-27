import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { contactInfo } from "../data/travelData";

const initialForm = {
  name: "",
  emailOrPhone: "",
  message: "",
};

export default function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const hasErrors = Object.values(errors).some(Boolean);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[name];
      return next;
    });
    setStatus("");
  };

  const submitContact = (event) => {
    event.preventDefault();
    const nextErrors = {};
    const name = form.name.trim();
    const emailOrPhone = form.emailOrPhone.trim();
    const userMessage = form.message.trim();

    if (!name) nextErrors.name = t("contact.form.errors.name");
    if (!emailOrPhone) nextErrors.emailOrPhone = t("contact.form.errors.emailOrPhone");
    if (!userMessage) nextErrors.message = t("contact.form.errors.message");

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus(t("contact.form.errors.complete"));
      return;
    }

    const message = [
      t("messages.contactIntro"),
      `${t("contact.form.name")}: ${name}`,
      `${t("contact.form.emailOrPhone")}: ${emailOrPhone}`,
      `${t("contact.form.message")}: ${userMessage}`,
      "",
      t("messages.pleaseReply"),
    ].join("\n");

    setErrors({});
    setStatus(t("contact.form.status"));
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="form-panel contact-form-panel" onSubmit={submitContact} noValidate>
      <div className="contact-form__header">
        <span>{t("contact.form.eyebrow")}</span>
        <h3>{t("contact.form.title")}</h3>
        <p>{t("contact.form.text")}</p>
      </div>
      <div className="form-grid form-grid--single">
        <label>
          {t("contact.form.name")}
          <input
            name="name"
            value={form.name}
            onChange={updateField}
            placeholder={t("contact.form.placeholders.name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
          />
          {errors.name && (
            <span className="field-error" id="contact-name-error">
              {errors.name}
            </span>
          )}
        </label>
        <label>
          {t("contact.form.emailOrPhone")}
          <input
            name="emailOrPhone"
            value={form.emailOrPhone}
            onChange={updateField}
            placeholder={t("contact.form.placeholders.emailOrPhone")}
            aria-invalid={Boolean(errors.emailOrPhone)}
            aria-describedby={errors.emailOrPhone ? "contact-email-phone-error" : undefined}
          />
          {errors.emailOrPhone && (
            <span className="field-error" id="contact-email-phone-error">
              {errors.emailOrPhone}
            </span>
          )}
        </label>
        <label>
          {t("contact.form.message")}
          <textarea
            name="message"
            value={form.message}
            onChange={updateField}
            placeholder={t("contact.form.placeholders.message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
          />
          {errors.message && (
            <span className="field-error" id="contact-message-error">
              {errors.message}
            </span>
          )}
        </label>
      </div>

      <button className="button button--primary form-panel__button" type="submit">
        <MessageCircle size={18} />
        {t("common.sendToWhatsApp")}
      </button>
      {status && <p className={hasErrors ? "form-status form-status--error" : "form-status"}>{status}</p>}
    </form>
  );
}
