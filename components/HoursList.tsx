"use client";

import { useEffect, useState } from "react";
import { openingHours } from "@/lib/hours";
import styles from "./Sections.module.css";

export default function HoursList() {
  const [todayIndex, setTodayIndex] = useState<number | null>(null);

  useEffect(() => {
    const jsDay = new Date().getDay();
    setTodayIndex(jsDay === 0 ? 6 : jsDay - 1);
  }, []);

  return (
    <div className={styles.hoursList}>
      {openingHours.map((d, i) => (
        <div
          key={d.key}
          className={`${styles.hoursRow} ${i === todayIndex ? styles.today : ""}`}
        >
          <span className={styles.hoursDay}>{d.label}</span>
          <span className={`${styles.hoursTime} ${d.closed ? styles.closed : ""}`}>
            {d.closed ? "Gesloten" : `${d.open} – ${d.close}`}
          </span>
        </div>
      ))}
    </div>
  );
}
