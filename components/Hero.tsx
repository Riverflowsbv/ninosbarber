"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CalendarCheck, Phone, Star } from "lucide-react";
import { site, telLink } from "@/lib/site";
import { reviewSummary } from "@/lib/reviews";
import OpenStatus from "./OpenStatus";
import styles from "./Hero.module.css";

const particles = [
  { top: "18%", left: "72%", delay: "0s", size: 7 },
  { top: "30%", left: "84%", delay: "1.2s", size: 5 },
  { top: "55%", left: "78%", delay: "0.6s", size: 9 },
  { top: "68%", left: "88%", delay: "1.8s", size: 5 },
  { top: "42%", left: "66%", delay: "2.4s", size: 6 },
];

export default function Hero() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.eyebrowRow}`, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
      });
      gsap.from(".hero-l1", {
        y: 46,
        opacity: 0,
        duration: 1,
        delay: 0.28,
        ease: "power3.out",
      });
      gsap.from(".hero-l2", {
        y: 58,
        opacity: 0,
        duration: 1.1,
        delay: 0.42,
        ease: "power3.out",
      });
      gsap.from(`.${styles.sub}, .${styles.actions} > *, .${styles.meta} > *`, {
        y: 24,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={root}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.pole} aria-hidden="true" />
      <div className={styles.particles} aria-hidden="true">
        {particles.map((p, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className={styles.content}>
          <div className={styles.eyebrowRow}>
            <span className="eyebrow">Barbershop · {site.city}</span>
            <OpenStatus compact />
          </div>

          <h1 className={styles.title}>
            <span className="hero-l1">Nino&apos;s</span>
            <span className={`${styles.line2} hero-l2`}>Barber</span>
          </h1>

          <p className={styles.sub}>
            Strak knippen, baard en fades in {site.city}. Je gaat er verzorgd en
            scherp weer uit. Maak simpel een afspraak.
          </p>

          <div className={styles.actions}>
            <Link href="/afspraak" className="btn btn-lg">
              Afspraak maken
              <CalendarCheck size={19} strokeWidth={2.3} />
            </Link>
            <a href={telLink()} className="btn btn-ghost btn-lg">
              <Phone size={18} strokeWidth={2.3} />
              {site.phone.display}
            </a>
          </div>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaNum} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {reviewSummary.rating.toFixed(1)}
                <Star size={20} fill="var(--gold)" color="var(--gold)" />
              </span>
              <span className={styles.metaLabel}>Klantwaardering</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaNum}>Op afspraak</span>
              <span className={styles.metaLabel}>Via WhatsApp</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaNum}>Sinds 2021</span>
              <span className={styles.metaLabel}>Barber in Amstelveen</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scroll} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  );
}
