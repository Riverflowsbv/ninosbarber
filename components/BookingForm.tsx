"use client";

import { useMemo, useState } from "react";
import { CalendarCheck } from "lucide-react";
import { services, formatPrice } from "@/lib/services";
import { site, whatsappDefaultMessage } from "@/lib/site";
import WhatsappIcon from "./WhatsappIcon";
import styles from "./BookingForm.module.css";

const days = [
  "Zo snel mogelijk",
  "Maandag",
  "Dinsdag",
  "Woensdag",
  "Donderdag",
  "Vrijdag",
  "Zaterdag",
];
const parts = ["Maakt niet uit", "Ochtend", "Middag", "Avond"];

export default function BookingForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [day, setDay] = useState(days[0]);
  const [part, setPart] = useState(parts[0]);
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const valid = name.trim().length > 1 && service !== "";

  const message = useMemo(() => {
    const lines = [
      whatsappDefaultMessage,
      "",
      service && `Dienst: ${service}`,
      `Voorkeur: ${day}${part !== "Maakt niet uit" ? `, ${part.toLowerCase()}` : ""}`,
      name && `Naam: ${name}`,
      phone && `Tel: ${phone}`,
      note && `Opmerking: ${note}`,
    ].filter(Boolean);
    return lines.join("\n");
  }, [name, service, day, part, phone, note]);

  const href = `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="bf-name">
          Naam <span className={styles.req}>*</span>
        </label>
        <input
          id="bf-name"
          className={styles.input}
          type="text"
          autoComplete="name"
          placeholder="Je naam"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="bf-service">
          Dienst <span className={styles.req}>*</span>
        </label>
        <select
          id="bf-service"
          className={styles.select}
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        >
          <option value="" disabled>
            Kies een behandeling
          </option>
          {services.map((s) => (
            <option key={s.name} value={s.name}>
              {s.name} · {formatPrice(s.price)}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="bf-day">
            Voorkeursdag
          </label>
          <select
            id="bf-day"
            className={styles.select}
            value={day}
            onChange={(e) => setDay(e.target.value)}
          >
            {days.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="bf-part">
            Dagdeel
          </label>
          <select
            id="bf-part"
            className={styles.select}
            value={part}
            onChange={(e) => setPart(e.target.value)}
          >
            {parts.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="bf-phone">
          Telefoon <span style={{ color: "var(--ink-faint)", fontWeight: 400 }}>(optioneel)</span>
        </label>
        <input
          id="bf-phone"
          className={styles.input}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="06 ..."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="bf-note">
          Opmerking <span style={{ color: "var(--ink-faint)", fontWeight: 400 }}>(optioneel)</span>
        </label>
        <textarea
          id="bf-note"
          className={styles.textarea}
          placeholder="Bijv. een specifieke stijl of wens"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <span className={styles.previewLabel}>Dit stuur je straks:</span>
        <div className={styles.preview}>{message}</div>
      </div>

      <a
        className={`btn btn-whatsapp btn-lg ${styles.submit}`}
        href={valid ? href : undefined}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={!valid}
        onClick={(e) => {
          if (!valid) e.preventDefault();
        }}
        style={valid ? undefined : { opacity: 0.5, cursor: "not-allowed" }}
      >
        <WhatsappIcon size={20} />
        Verstuur via WhatsApp
      </a>
      <p className={styles.hint}>
        {valid
          ? "Je WhatsApp opent met het bericht klaar, jij drukt op verzenden."
          : "Vul je naam en kies een dienst om te versturen."}
      </p>
    </form>
  );
}
