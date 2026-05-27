import { useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { contactInfo } from "../data/travelData";

const initialForm = {
  tripType: "Airport transfer",
  name: "",
  phone: "",
  pickup: "",
  drop: "",
  date: "",
  time: "",
  passengers: "",
  luggage: "",
  message: "",
};

const tripTypeValues = ["Airport transfer", "Taxi ride", "Private tour", "Round tour", "Vehicle rental"];

export default function BookingForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const tripTypeLabels = t("booking.form.tripTypes", tripTypeValues);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submitBooking = (event) => {
    event.preventDefault();

    const message = [
      t("messages.bookingIntro"),
      `${t("booking.form.tripType")}: ${tripTypeLabels[tripTypeValues.indexOf(form.tripType)] || form.tripType}`,
      `${t("booking.form.name")}: ${form.name}`,
      `${t("booking.form.phone")}: ${form.phone}`,
      `${t("booking.form.pickup")}: ${form.pickup}`,
      `${t("booking.form.drop")}: ${form.drop}`,
      `${t("booking.form.date")}: ${form.date || t("booking.form.flexible")}`,
      `${t("booking.form.time")}: ${form.time || t("booking.form.flexible")}`,
      `${t("booking.form.passengers")}: ${form.passengers || t("booking.form.notConfirmed")}`,
      `${t("booking.form.luggage")}: ${form.luggage || t("booking.form.notConfirmed")}`,
      `${t("booking.form.message")}: ${form.message || t("booking.form.noNotes")}`,
    ].join("\n");

    setStatus(t("booking.form.status"));
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="form-panel booking-form-panel" onSubmit={submitBooking}>
      <div className="booking-form__header">
        <span>{t("booking.form.eyebrow")}</span>
        <h3>{t("booking.form.title")}</h3>
        <p>{t("booking.form.text")}</p>
      </div>

      <fieldset className="trip-type-selector">
        <legend>{t("booking.form.tripType")}</legend>
        <div>
          {tripTypeValues.map((type, index) => (
            <label className={form.tripType === type ? "trip-type-option trip-type-option--active" : "trip-type-option"} key={type}>
              <input type="radio" name="tripType" value={type} checked={form.tripType === type} onChange={updateField} />
              <CheckCircle2 size={16} />
              {tripTypeLabels[index] || type}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form-grid">
        <label>
          {t("booking.form.name")}
          <input name="name" value={form.name} onChange={updateField} placeholder={t("booking.form.placeholders.name")} required />
        </label>
        <label>
          {t("booking.form.phone")}
          <input name="phone" value={form.phone} onChange={updateField} placeholder={t("booking.form.placeholders.phone")} required />
        </label>
        <label>
          {t("booking.form.pickup")}
          <input name="pickup" value={form.pickup} onChange={updateField} placeholder={t("booking.form.placeholders.pickup")} required />
        </label>
        <label>
          {t("booking.form.drop")}
          <input name="drop" value={form.drop} onChange={updateField} placeholder={t("booking.form.placeholders.drop")} required />
        </label>
        <label>
          {t("booking.form.date")}
          <input name="date" value={form.date} onChange={updateField} type="date" />
        </label>
        <label>
          {t("booking.form.time")}
          <input name="time" value={form.time} onChange={updateField} type="time" />
        </label>
        <label>
          {t("booking.form.passengers")}
          <input name="passengers" value={form.passengers} onChange={updateField} placeholder={t("booking.form.placeholders.passengers")} />
        </label>
        <label>
          {t("booking.form.luggage")}
          <input name="luggage" value={form.luggage} onChange={updateField} placeholder={t("booking.form.placeholders.luggage")} />
        </label>
        <label className="form-grid__wide">
          {t("booking.form.message")}
          <textarea name="message" value={form.message} onChange={updateField} placeholder={t("booking.form.placeholders.message")} />
        </label>
      </div>

      <button className="button button--primary form-panel__button" type="submit">
        <MessageCircle size={19} />
        {t("common.sendWhatsAppBooking")}
      </button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}
