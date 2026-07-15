"use client";

import { useState } from "react";

/** Gekruiste schaar + kam — klassiek barber-embleem, scherpe vector. */
export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <g
        stroke="var(--gold)"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Kam */}
        <g transform="rotate(45 24 24)">
          <rect x="21" y="10" width="6" height="22" rx="3" />
          <path d="M27 14h4M27 19h4M27 24h4M27 29h4" />
        </g>
        {/* Schaar */}
        <g transform="rotate(-45 24 24)">
          <circle cx="20" cy="34" r="3.6" />
          <circle cx="28" cy="34" r="3.6" />
          <path d="M21.7 31 L29 13" />
          <path d="M26.3 31 L19 13" />
        </g>
        <circle cx="24" cy="23.5" r="1.4" fill="var(--gold)" stroke="none" />
      </g>
    </svg>
  );
}

/**
 * Logo-lockup: het schaar+kam-merk met het woordmerk "Nino's Barber".
 * Staat er een eigen /public/logo.png? Dan wint die en toont het echte embleem.
 * Zo niet, dan blijft deze scherpe vector-lockup staan.
 */
export default function Logo({ height = 40 }: { height?: number }) {
  const [useImage, setUseImage] = useState(true);

  if (useImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logo.png"
        alt="Nino's Barber"
        style={{ height, width: "auto", display: "block" }}
        onError={() => setUseImage(false)}
      />
    );
  }

  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem" }}>
      <LogoMark size={height * 0.92} />
      <span
        className="display"
        style={{
          fontSize: height * 0.52,
          letterSpacing: "0.03em",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ color: "var(--ink)" }}>Nino&apos;s</span>{" "}
        <span style={{ color: "var(--gold)" }}>Barber</span>
      </span>
    </span>
  );
}
