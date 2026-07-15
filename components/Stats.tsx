import CountUp from "./CountUp";
import Reveal from "./Reveal";
import styles from "./Sections.module.css";

// Voorbeeld-cijfers. TE BEVESTIGEN / aan te passen met Nino.
// `value` = vaste tekst (telt niet mee), anders telt `end` op.
type Stat = { end?: number; value?: string; suffix?: string; label: string };

const stats: Stat[] = [
  { value: "2021", label: "Opgericht" },
  { end: 2500, suffix: "+", label: "Tevreden klanten" },
  { end: 5, suffix: ".0", label: "Gemiddelde score" },
  { end: 6, suffix: "", label: "Dagen open" },
];

export default function Stats() {
  return (
    <section className="section section-alt">
      <div className="container">
        <Reveal>
          <div className={styles.stats}>
            {stats.map((s) => (
              <div className={styles.stat} key={s.label}>
                <div className={styles.statNum}>
                  {s.value !== undefined ? (
                    s.value
                  ) : (
                    <CountUp end={s.end ?? 0} suffix={s.suffix} />
                  )}
                </div>
                <div className={styles.statLabel}>{s.label}</div>
                <div className={styles.statSweep}>
                  <span />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
