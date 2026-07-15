import type { Metadata } from "next";
import { Phone, MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import LocationHours from "@/components/LocationHours";
import WhatsappIcon from "@/components/WhatsappIcon";
import { site, telLink, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & route",
  description:
    "Contact en route naar Nino's Barber, Lindenlaan 143 in Amstelveen. Bel of app voor een afspraak.",
  alternates: { canonical: "/contact" },
};

const cards = [
  {
    icon: <Phone size={22} />,
    title: "Bellen",
    value: site.phone.display,
    href: telLink(),
  },
  {
    icon: <WhatsappIcon size={22} />,
    title: "WhatsApp",
    value: "Stuur een berichtje",
    href: whatsappLink(),
    external: true,
  },
  {
    icon: <MapPin size={22} />,
    title: "Adres",
    value: `${site.address.street}, ${site.address.city}`,
    href: site.maps.directions,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kom langs"
        title="Contact & route"
        intro={`Je vindt ons aan ${site.address.street} in ${site.city}. Bel of app voor een afspraak.`}
      />

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {cards.map((c) => (
              <a
                key={c.title}
                className="card"
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                style={{
                  padding: "1.6rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 14,
                    display: "grid",
                    placeItems: "center",
                    background: "rgba(200, 163, 106, 0.12)",
                    color: "var(--gold)",
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </span>
                <span>
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.8rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--ink-faint)",
                    }}
                  >
                    {c.title}
                  </span>
                  <span style={{ color: "var(--ink)", fontWeight: 600 }}>
                    {c.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <LocationHours />
    </>
  );
}
