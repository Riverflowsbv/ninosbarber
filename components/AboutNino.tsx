import { site } from "@/lib/site";
import Reveal from "./Reveal";
import styles from "./Sections.module.css";

export default function AboutNino() {
  return (
    <section className="section section-alt" id="nino">
      <div className="container">
        <div className={`${styles.split} ${styles.splitReverse}`}>
          <Reveal className={styles.splitMedia}>
            <div
              style={{
                borderRadius: "var(--r-lg)",
                overflow: "hidden",
                border: "1px solid var(--border)",
                aspectRatio: "9 / 11",
                maxWidth: 460,
              }}
            >
              {/* Vervang door een echte foto van Nino (public/nino.jpg). */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/nino-portret.svg"
                alt="Nino, eigenaar van Nino's Barber"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </Reveal>

          <Reveal className={styles.splitBody} delay={120}>
            <span className="eyebrow">De man achter de stoel</span>
            <h2 style={{ marginTop: "0.9rem" }}>Nino</h2>
            <p className="lead">
              Nino knipt met aandacht voor detail: strakke lijnen, nette fades en
              een baard die zit. Bij hem in de stoel krijg je advies dat past bij
              jouw haar en gezicht. Geen standaard knip, maar een look waar je mee
              thuiskomt.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Kom langs in {site.city} en ervaar het verschil. Even bijkletsen,
              scherp geknipt de deur uit.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
