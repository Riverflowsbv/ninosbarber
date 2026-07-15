import { Check } from "lucide-react";
import { site } from "@/lib/site";
import SignatureAnimation from "./SignatureAnimation";
import Reveal from "./Reveal";
import styles from "./Sections.module.css";

const points = [
  {
    title: "Vakwerk, geen haast",
    text: "Elke knipbeurt met aandacht afgewerkt, precies zoals jij het wil.",
  },
  {
    title: "Fades & baard specialist",
    text: "Van strakke skin fade tot baard perfect in model.",
  },
  {
    title: "Makkelijk een plekje",
    text: "Snel en simpel te boeken via WhatsApp, op een moment dat jou uitkomt.",
  },
];

export default function Intro() {
  return (
    <section className="section" id="over">
      <div className="container">
        <div className={styles.split}>
          <Reveal className={styles.splitMedia}>
            <SignatureAnimation />
          </Reveal>

          <Reveal className={styles.splitBody} delay={120}>
            <span className="eyebrow">Welkom bij Nino&apos;s Barber</span>
            <h2 style={{ marginTop: "0.9rem" }}>
              De barbershop van {site.city}
            </h2>
            <p className="lead">
              Bij Nino&apos;s Barber draait het om strak werk en een goede sfeer.
              Je stapt binnen, ontspant even, en gaat er scherp weer uit. Klassiek
              of modern: jij bepaalt, wij zorgen dat het klopt.
            </p>

            <div className={styles.featureList}>
              {points.map((p) => (
                <div className={styles.featureRow} key={p.title}>
                  <span className={styles.tick}>
                    <Check size={15} strokeWidth={2.6} />
                  </span>
                  <div>
                    <strong>{p.title}</strong>
                    <p>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
