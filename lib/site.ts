// Centrale bedrijfsgegevens voor Nino's Barber.
// Pas hier één keer aan en het verandert overal op de site.

export const site = {
  name: "Nino's Barber",
  shortName: "Nino's Barber",
  tagline: "Barbershop in Amstelveen",
  description:
    "Herenkapper en barbershop in Amstelveen. Strak knippen, baard en fades door Nino. Maak eenvoudig een afspraak.",
  city: "Amstelveen",
  domain: "ninosbarber.nl",
  url: "https://ninosbarber.nl",

  address: {
    street: "Lindenlaan 143",
    postalCode: "1185 LG",
    city: "Amstelveen",
    country: "NL",
  },

  // Geo van Lindenlaan 143, Amstelveen (bij benadering — controleer op Google Maps).
  geo: {
    lat: 52.3008,
    lng: 4.8637,
  },

  phone: {
    display: "06 43 49 55 50",
    intl: "+31643495550",
    // wa.me verwacht landcode zonder + en zonder leidende 0
    whatsapp: "31643495550",
  },

  email: "info@ninosbarber.nl", // TE BEVESTIGEN met Nino

  socials: {
    instagram: "https://www.instagram.com/ninosbarber/",
    instagramHandle: "@ninosbarber",
    tiktok: "https://www.tiktok.com/@ninosbarber",
    tiktokHandle: "@ninosbarber",
  },

  // Google Maps embed + route.
  maps: {
    embed:
      "https://www.google.com/maps?q=Lindenlaan+143,+1185+LG+Amstelveen&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Lindenlaan+143+1185+LG+Amstelveen",
  },
} as const;

// Standaard WhatsApp-bericht voor de zwevende knop en boekingsknoppen.
export const whatsappDefaultMessage =
  "Hoi Nino, ik wil graag een afspraak maken.";

export function whatsappLink(message: string = whatsappDefaultMessage): string {
  return `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telLink(): string {
  return `tel:${site.phone.intl}`;
}
