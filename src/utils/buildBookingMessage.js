/**
 * Pure message-generation function, extracted from BookingForm.jsx's
 * submitBooking() so it isn't tangled with the component's own state/DOM
 * concerns. `t` is passed in rather than imported — this stays a plain
 * function callable from anywhere (including, one day, an email/SMS
 * builder that wants the same booking summary in a different envelope),
 * not a hook.
 *
 * Message DELIVERY (opening the WhatsApp link) stays exactly where it was,
 * in BookingForm.jsx — this file only ever builds the text.
 *
 * Output is byte-for-byte identical to the array/join this replaced.
 */
export function buildBookingWhatsAppMessage({ t, tripTypeLabel, form }) {
  return [
    t("messages.bookingIntro"),
    `${t("booking.form.tripType")}: ${tripTypeLabel}`,
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
}
