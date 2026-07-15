import { MapPin, Phone, Navigation } from "lucide-react";
import { site, telLink, whatsappLink } from "@/lib/site";
import HoursList from "./HoursList";
import OpenStatus from "./OpenStatus";
import WhatsappIcon from "./WhatsappIcon";
import Reveal from "./Reveal";
import styles from "./Sections.module.css";

export default function LocationHours() {
  return (
    <section className="section" id="locatie">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Vind ons</span>
          <h2>Locatie &amp; openingstijden</h2>
          <p>
            Je vindt Nino&apos;s Barber aan {site.address.street} in {site.city}.
            Maak eenvoudig een afspraak, dan staat je stoel klaar.
          </p>
        </div>

        <div className={styles.locationGrid}>
          <Reveal className={styles.mapWrap}>
            <iframe
              src={site.maps.embed}
              title={`Kaart naar ${site.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>

          <Reveal className={styles.hoursCard} delay={120}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
              <h3 style={{ fontSize: "1.4rem" }}>Openingstijden</h3>
              <OpenStatus />
            </div>

            <HoursList />

            <div className={styles.contactLine}>
              <a className={styles.contactItem} href={site.maps.directions} target="_blank" rel="noopener noreferrer">
                <MapPin size={17} />
                {site.address.street}, {site.address.postalCode} {site.address.city}
              </a>
              <a className={styles.contactItem} href={telLink()}>
                <Phone size={17} />
                {site.phone.display}
              </a>
              <a className={styles.contactItem} href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <span style={{ display: "inline-flex" }}>
                  <WhatsappIcon size={17} />
                </span>
                WhatsApp Nino
              </a>
              <a
                className="btn btn-ghost"
                href={site.maps.directions}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: "0.5rem", alignSelf: "flex-start" }}
              >
                <Navigation size={17} />
                Route plannen
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
