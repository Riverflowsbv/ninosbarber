import styles from "./Sections.module.css";

const words = [
  "Knippen",
  "Fades",
  "Baard",
  "Contouren",
  "Kids",
  "Styling",
  "Walk-in",
  "Op afspraak",
];

export default function Marquee() {
  // Twee keer renderen voor een naadloze loop.
  const items = [...words, ...words];
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.marqueeTrack}>
        <span className={styles.marqueeItem}>
          {items.map((w, i) => (
            <span key={i} style={{ display: "inline-flex", gap: "3rem", alignItems: "center" }}>
              {w}
              <span className={styles.marqueeDot}>✦</span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
