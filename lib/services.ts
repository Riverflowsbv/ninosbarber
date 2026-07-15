// Diensten & prijzen — echte tarieven van Nino (bevestigd).
// Knippen is één prijs, ongeacht de stijl (skinfade, tondeuse, kapsel,
// lang of kort haar). icon = naam van een lucide-react icoon (zie ServiceIcon).

export type Service = {
  name: string;
  description: string;
  price: number; // in euro's
  duration: string; // richttijd
  icon: string;
  popular?: boolean;
};

export const services: Service[] = [
  {
    name: "Knippen",
    description:
      "Elke stijl voor dezelfde prijs: skinfade, tondeuse, kapsel, lang of kort haar.",
    price: 37.5,
    duration: "30 min",
    icon: "Scissors",
    popular: true,
  },
  {
    name: "Haar & baard",
    description: "Compleet verzorgd: haar knippen én je baard strak in model.",
    price: 65,
    duration: "50 min",
    icon: "UserRound",
  },
  {
    name: "Baard of snor",
    description: "Baard of snor los bijwerken, scheren en netjes verzorgen.",
    price: 30,
    duration: "20 min",
    icon: "Sparkles",
  },
];

// €37,50 / €65 / €30 — nette Nederlandse notatie (komma-decimalen).
export function formatPrice(price: number): string {
  return Number.isInteger(price)
    ? `€${price}`
    : `€${price.toFixed(2).replace(".", ",")}`;
}
