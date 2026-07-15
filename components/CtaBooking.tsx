import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import WhatsappIcon from "./WhatsappIcon";
import Reveal from "./Reveal";
import styles from "./Sections.module.css";

export default function CtaBooking() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className={styles.cta}>
          <div className={styles.ctaPole} aria-hidden="true" />
          <div className={styles.ctaInner}>
            <span className="eyebrow no-line" style={{ justifyContent: "center" }}>
              Klaar voor een verse knip?
            </span>
            <h2 style={{ marginTop: "0.8rem" }}>
              Maak vandaag nog een afspraak
            </h2>
            <p>
              Kies een moment dat jou uitkomt. App even en je krijgt snel een
              bevestiging. Makkelijker wordt het niet.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/afspraak" className="btn btn-lg">
                Afspraak maken
                <CalendarCheck size={19} strokeWidth={2.3} />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <WhatsappIcon size={20} />
                Direct via WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
