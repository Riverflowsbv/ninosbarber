"use client";

import { useEffect, useState } from "react";
import { isOpenNow, type DayHours } from "@/lib/hours";

/** Live "Nu open / Gesloten" indicator op basis van de bezoeker z'n lokale tijd. */
export default function OpenStatus({ compact = false }: { compact?: boolean }) {
  const [state, setState] = useState<{ open: boolean; today: DayHours } | null>(
    null
  );

  useEffect(() => {
    const update = () => setState(isOpenNow());
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  // Vóór hydratie niets tonen om mismatch te voorkomen.
  if (!state) {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "0.85rem",
          color: "var(--ink-faint)",
        }}
      >
        <span
          style={{
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: "var(--ink-faint)",
          }}
        />
        Openingstijden
      </span>
    );
  }

  const { open, today } = state;
  const color = open ? "#3ecf7a" : "#d97a5a";
  const text = open
    ? compact
      ? "Nu open"
      : `Nu open tot ${today.close}`
    : today.closed
      ? "Vandaag gesloten"
      : `Gesloten, opent ${today.open}`;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        fontSize: "0.85rem",
        color: "var(--ink-muted)",
      }}
    >
      <span
        className={open ? "dot-pulse" : undefined}
        style={{
          width: 9,
          height: 9,
          borderRadius: "50%",
          background: color,
          boxShadow: open ? undefined : `0 0 0 4px ${color}22`,
        }}
      />
      {text}
    </span>
  );
}
