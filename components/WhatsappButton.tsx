"use client";

import { whatsappLink } from "@/lib/site";
import WhatsappIcon from "./WhatsappIcon";
import styles from "./WhatsappButton.module.css";

export default function WhatsappButton() {
  return (
    <a
      className={styles.fab}
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Stuur Nino een WhatsApp-bericht"
    >
      <WhatsappIcon size={24} />
      <span className={styles.label}>App voor een afspraak</span>
    </a>
  );
}
