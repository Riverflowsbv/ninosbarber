"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * Toont het officiële embleem uit /public/logo.png.
 * Bestaat dat bestand nog niet, dan valt het automatisch terug op een
 * strak tekst-woordmerk met barberpole-icoontje. Zo is de site nooit "stuk".
 * Zet het echte logo neer als /public/logo.png en het schakelt vanzelf over.
 */
export default function Logo({ height = 40 }: { height?: number }) {
  const [ok, setOk] = useState(true);

  if (ok) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logo.png"
        alt="Nino's Barber"
        style={{ height, width: "auto", display: "block" }}
        onError={() => setOk(false)}
      />
    );
  }

  // Fallback-woordmerk
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem" }}>
      <svg width={height * 0.62} height={height * 0.62} viewBox="0 0 26 26" aria-hidden="true" style={{ flexShrink: 0 }}>
        <defs>
          <clipPath id="poleClip">
            <rect x="9" y="2" width="8" height="22" rx="4" />
          </clipPath>
        </defs>
        <rect x="9" y="2" width="8" height="22" rx="4" fill="#14161c" stroke="var(--gold)" strokeWidth="1.5" />
        <g clipPath="url(#poleClip)">
          <g fill="var(--gold)" opacity="0.9">
            <rect x="4" y="-6" width="4" height="40" transform="rotate(32 13 13)" />
            <rect x="12" y="-6" width="4" height="40" transform="rotate(32 13 13)" />
            <rect x="20" y="-6" width="4" height="40" transform="rotate(32 13 13)" />
            <rect x="-4" y="-6" width="4" height="40" transform="rotate(32 13 13)" />
          </g>
        </g>
      </svg>
      <span
        className="display"
        style={{ fontSize: height * 0.5, letterSpacing: "0.02em", lineHeight: 1, color: "var(--ink)" }}
      >
        {site.name}
      </span>
    </span>
  );
}
