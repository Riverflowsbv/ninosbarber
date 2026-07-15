"use client";

import { useEffect, useState } from "react";

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
 * Toont standaard de scherpe vector-lockup (schaar+kam + woordmerk).
 * Alleen als /public/logo.png echt bestaat en laadt, wisselt hij naar dat
 * embleem. Zo verschijnt er nooit een kapotte afbeelding.
 */
export default function Logo({ height = 40 }: { height?: number }) {
  const [hasImage, setHasImage] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => {
      if (img.naturalWidth > 1) setHasImage(true);
    };
    img.src = "/logo.png";
  }, []);

  if (hasImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logo.png"
        alt="Nino's Barber"
        style={{ height, width: "auto", display: "block" }}
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
