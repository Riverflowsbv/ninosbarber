import styles from "./SignatureAnimation.module.css";

// Vaste posities/timings zodat er geen Math.random() in de render zit (SSR-safe).
const hairs = [
  { left: "24%", delay: "0s", dur: "2.6s" },
  { left: "38%", delay: "0.9s", dur: "3.1s" },
  { left: "52%", delay: "0.4s", dur: "2.3s" },
  { left: "63%", delay: "1.6s", dur: "3.4s" },
  { left: "71%", delay: "0.7s", dur: "2.8s" },
  { left: "31%", delay: "2.1s", dur: "3.0s" },
  { left: "58%", delay: "1.2s", dur: "2.5s" },
];

export default function SignatureAnimation() {
  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.glowBlob} />
      <div className={`${styles.cap} ${styles.capTop}`} />
      <div className={styles.pole}>
        <div className={styles.stripes} />
        <div className={styles.gloss} />
      </div>
      <div className={`${styles.cap} ${styles.capBottom}`} />

      <div className={styles.hairField}>
        {hairs.map((h, i) => (
          <span
            key={i}
            className={styles.hair}
            style={{
              left: h.left,
              animationDelay: h.delay,
              animationDuration: h.dur,
            }}
          />
        ))}
      </div>

      <div className={styles.label}>
        <span>
          <span className={styles.dot} />
          Vers geknipt
        </span>
        <span>Amstelveen</span>
      </div>
    </div>
  );
}
