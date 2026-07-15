import type { Metadata } from "next";
import { Phone, MessageSquare, Clock, MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BookingForm from "@/components/BookingForm";
import WhatsappIcon from "@/components/WhatsappIcon";
import Reveal from "@/components/Reveal";
import { site, telLink, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Afspraak maken",
  description:
    "Maak eenvoudig een afspraak bij Nino's Barber in Amstelveen via WhatsApp. Kies je dienst en voorkeursmoment.",
  alternates: { canonical: "/afspraak" },
};

const steps = [
  {
    icon: <MessageSquare size={20} />,
    title: "1. Vul het formulier",
    text: "Kies je dienst en je voorkeursmoment.",
  },
  {
    icon: <WhatsappIcon size={20} />,
    title: "2. Verstuur via WhatsApp",
    text: "Je bericht staat klaar, jij drukt op verzenden.",
  },
  {
    icon: <Clock size={20} />,
    title: "3. Krijg je bevestiging",
    text: "Nino appt je snel een tijd terug. Klaar.",
  },
];

export default function AfspraakPage() {
  return (
    <>
      <PageHeader
        eyebrow="Plan je bezoek"
        title="Afspraak maken"
        intro="Snel en zonder gedoe. Vul hieronder je voorkeur in en verstuur via WhatsApp. Je krijgt vlot een bevestiging van Nino."
      />

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr",
              gap: "clamp(2rem, 5vw, 4rem)",
              alignItems: "start",
            }}
            className="afspraak-grid"
          >
            <Reveal>
              <span className="eyebrow">Zo werkt het</span>
              <h2 style={{ marginTop: "0.9rem", fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}>
                In drie stappen geregeld
              </h2>
              <div style={{ marginTop: "1.75rem", display: "grid", gap: "1.1rem" }}>
                {steps.map((s) => (
                  <div key={s.title} style={{ display: "flex", gap: "0.9rem", alignItems: "flex-start" }}>
                    <span
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        display: "grid",
                        placeItems: "center",
                        background: "rgba(200, 163, 106, 0.12)",
                        color: "var(--gold)",
                        flexShrink: 0,
                      }}
                    >
                      {s.icon}
                    </span>
                    <div>
                      <strong style={{ color: "var(--ink)", display: "block" }}>
                        {s.title}
                      </strong>
                      <p style={{ fontSize: "0.95rem", marginTop: 2 }}>{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                <a className="btn btn-whatsapp" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <WhatsappIcon size={19} />
                  Liever meteen appen
                </a>
                <a className="btn btn-ghost" href={telLink()}>
                  <Phone size={18} />
                  Of bel {site.phone.display}
                </a>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--ink-faint)", fontSize: "0.9rem", marginTop: "0.4rem" }}>
                  <MapPin size={15} />
                  {site.address.street}, {site.address.city}
                </span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <BookingForm />
            </Reveal>
          </div>

          {/* ================================================================
              UPGRADE-SLOT — online agenda (Salonized / Booksy / Treatwell)
              ----------------------------------------------------------------
              Wil Nino later een échte online agenda met tijdslots?
              Vervang het blok hieronder door de embed-code van de gekozen tool.
              Voorbeeld (Salonized):
                <iframe src="https://SALON.salonized.com/widget_bookings/new"
                        style={{ width: "100%", minHeight: 700, border: 0 }} />
              Voorbeeld (Booksy): plak hun widget-script + div hier.
              De rest van de pagina hoeft niet te wijzigen.
          ================================================================= */}
          <div
            style={{
              marginTop: "clamp(2.5rem, 5vw, 4rem)",
              padding: "1.5rem",
              borderRadius: "var(--r-md)",
              border: "1px dashed var(--border-strong)",
              background: "var(--bg-alt)",
              color: "var(--ink-faint)",
              fontSize: "0.9rem",
              textAlign: "center",
            }}
          >
            Liever zelf online een tijdslot kiezen? Die optie voegen we hier
            binnenkort toe.
          </div>
        </div>
      </section>
    </>
  );
}
