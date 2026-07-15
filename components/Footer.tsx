import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { site, telLink } from "@/lib/site";
import Logo from "./Logo";
import OpenStatus from "./OpenStatus";
import WhatsappIcon from "./WhatsappIcon";
import InstagramIcon from "./InstagramIcon";
import styles from "./Footer.module.css";

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.5c-1.3.1-2.5-.3-3.5-1v6.1c0 3.4-2.6 5.5-5.6 5.5A5.4 5.4 0 0 1 5.5 14c0-3 2.4-5.3 5.6-5.1v2.6c-.4-.1-.8-.2-1.2-.2-1.5 0-2.6 1.2-2.5 2.7 0 1.5 1.2 2.6 2.7 2.6 1.5 0 2.6-1.1 2.6-2.9V3h3.3Z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo height={64} />
            <p>
              Herenkapper en barbershop in {site.city}. Strak knippen, baard en
              fades, met oog voor detail.
            </p>
            <div className={styles.status}>
              <OpenStatus />
            </div>
            <div className={styles.socials}>
              <a
                className={styles.social}
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                className={styles.social}
                href={site.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <TikTokIcon size={18} />
              </a>
              <a
                className={styles.social}
                href={telLink()}
                aria-label="Bel Nino's Barber"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <nav className={styles.col} aria-label="Pagina's">
            <p className={styles.colTitle}>Menu</p>
            <Link href="/">Home</Link>
            <Link href="/diensten">Diensten &amp; prijzen</Link>
            <Link href="/galerij">Galerij</Link>
            <Link href="/contact">Contact &amp; route</Link>
            <Link href="/afspraak">Afspraak maken</Link>
          </nav>

          <div className={styles.col}>
            <p className={styles.colTitle}>Volg mee</p>
            <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer">
              Instagram {site.socials.instagramHandle}
            </a>
            <a href={site.socials.tiktok} target="_blank" rel="noopener noreferrer">
              TikTok {site.socials.tiktokHandle}
            </a>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>Contact</p>
            <address>
              <MapPin
                size={15}
                style={{ display: "inline", marginRight: 6, verticalAlign: -2 }}
              />
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </address>
            <a href={telLink()}>
              <Phone
                size={15}
                style={{ display: "inline", marginRight: 6, verticalAlign: -2 }}
              />
              {site.phone.display}
            </a>
            <a href={`https://wa.me/${site.phone.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <span style={{ display: "inline-flex", marginRight: 6, verticalAlign: -3 }}>
                <WhatsappIcon size={15} />
              </span>
              WhatsApp
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © {year} {site.name}. Alle rechten voorbehouden.
          </span>
          <span className={styles.credit}>
            Website door{" "}
            <a href="https://huureenwebsite.nl" target="_blank" rel="noopener noreferrer">
              HuurEenWebsite.nl
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
