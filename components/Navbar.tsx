"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";
import Logo from "./Logo";
import styles from "./Navbar.module.css";

const nav = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/galerij", label: "Galerij" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sluit menu bij route-wissel en blokkeer scroll als open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={styles.wrap}>
      <div className={`${styles.bar} ${scrolled ? styles.scrolled : ""}`}>
        <Link href="/" aria-label="Nino's Barber home">
          <Logo />
        </Link>

        <nav className={styles.links} aria-label="Hoofdmenu">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.link} ${
                isActive(item.href) ? styles.active : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.right}>
          <Link href="/afspraak" className={`btn ${styles.cta}`}>
            Afspraak maken
            <CalendarCheck size={17} strokeWidth={2.3} />
          </Link>
          <button
            className={styles.burger}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className={styles.mobileLink}>
            {item.label}
          </Link>
        ))}
        <Link href="/afspraak" className={`btn btn-lg ${styles.mobileCta}`}>
          Afspraak maken
          <CalendarCheck size={19} strokeWidth={2.3} />
        </Link>
      </div>
    </header>
  );
}
