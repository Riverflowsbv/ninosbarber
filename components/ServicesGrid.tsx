import { Clock } from "lucide-react";
import { services, formatPrice } from "@/lib/services";
import ServiceIcon from "./ServiceIcon";
import Reveal from "./Reveal";
import styles from "./Services.module.css";

export default function ServicesGrid({
  limit,
  showNote = false,
}: {
  limit?: number;
  showNote?: boolean;
}) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <>
      <div className={styles.grid}>
        {list.map((s, i) => (
          <Reveal
            key={s.name}
            delay={(i % 3) * 90}
            className={styles.card}
          >
            {s.popular && <span className={styles.popular}>Populair</span>}
            <div className={styles.head}>
              <span className={styles.iconBox}>
                <ServiceIcon name={s.icon} />
              </span>
              <span className={styles.price}>{formatPrice(s.price)}</span>
            </div>
            <h3 className={styles.name}>{s.name}</h3>
            <p className={styles.desc}>{s.description}</p>
            <div className={styles.footer}>
              <span
                style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
              >
                <Clock size={14} /> {s.duration}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
      {showNote && (
        <p className={styles.note}>
          Knippen is één prijs, hoe je het ook wil: skinfade, tondeuse, kapsel,
          lang of kort. Twijfel je wat je nodig hebt? App of bel even, dan denken
          we mee.
        </p>
      )}
    </>
  );
}
