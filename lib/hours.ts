// Openingstijden — echte tijden van Nino (bevestigd).
// closed = true => gesloten die dag. Anders open/close in "HH:MM".

export type DayHours = {
  key: string; // schema.org dagcode
  label: string; // NL label
  closed: boolean;
  open?: string;
  close?: string;
};

// Volgorde: maandag t/m zondag.
export const openingHours: DayHours[] = [
  { key: "Mo", label: "Maandag", closed: true },
  { key: "Tu", label: "Dinsdag", closed: false, open: "09:00", close: "17:00" },
  { key: "We", label: "Woensdag", closed: false, open: "09:00", close: "17:00" },
  { key: "Th", label: "Donderdag", closed: false, open: "09:00", close: "17:00" },
  { key: "Fr", label: "Vrijdag", closed: false, open: "09:00", close: "17:00" },
  { key: "Sa", label: "Zaterdag", closed: false, open: "08:30", close: "16:30" },
  { key: "Su", label: "Zondag", closed: true },
];

// JSON-LD openingHoursSpecification-array voor LocalBusiness schema.
export function openingHoursSpecification() {
  const dayMap: Record<string, string> = {
    Mo: "Monday",
    Tu: "Tuesday",
    We: "Wednesday",
    Th: "Thursday",
    Fr: "Friday",
    Sa: "Saturday",
    Su: "Sunday",
  };
  return openingHours
    .filter((d) => !d.closed && d.open && d.close)
    .map((d) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${dayMap[d.key]}`,
      opens: d.open,
      closes: d.close,
    }));
}

// Bepaal of de zaak nu open is (client-side, lokale tijd bezoeker).
export function isOpenNow(now: Date = new Date()): { open: boolean; today: DayHours } {
  // JS getDay(): 0 = zondag ... 6 = zaterdag. Onze array start op maandag.
  const jsDay = now.getDay();
  const index = jsDay === 0 ? 6 : jsDay - 1;
  const today = openingHours[index];
  if (today.closed || !today.open || !today.close) return { open: false, today };

  const [oh, om] = today.open.split(":").map(Number);
  const [ch, cm] = today.close.split(":").map(Number);
  const minutes = now.getHours() * 60 + now.getMinutes();
  const openM = oh * 60 + om;
  const closeM = ch * 60 + cm;
  return { open: minutes >= openM && minutes < closeM, today };
}
