"use client";

import { useRef } from "react";
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
  const stageRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);

  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const stage = stageRef.current;
    const tilt = tiltRef.current;
    if (!stage || !tilt || reduce) return;
    const rect = stage.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tilt.style.transform = `rotateX(${(-py * 24).toFixed(2)}deg) rotateY(${(px * 26).toFixed(2)}deg)`;
    stage.style.setProperty("--gx", `${(px + 0.5) * 100}%`);
    stage.style.setProperty("--gy", `${(py + 0.5) * 100}%`);
  };

  const handleLeave = () => {
    const tilt = tiltRef.current;
    const stage = stageRef.current;
    if (tilt) tilt.style.transform = "";
    if (stage) {
      stage.style.setProperty("--gx", "50%");
      stage.style.setProperty("--gy", "34%");
    }
  };

  return (
    <div
      ref={stageRef}
      className={styles.stage}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      aria-hidden="true"
    >
      <div className={styles.cursorGlow} />

      <div ref={tiltRef} className={styles.tilt}>
        <div className={`${styles.cap} ${styles.capTop}`} />
        <div className={styles.pole}>
          <div className={styles.stripes} />
          <div className={styles.gloss} />
        </div>
        <div className={`${styles.cap} ${styles.capBottom}`} />
      </div>

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
