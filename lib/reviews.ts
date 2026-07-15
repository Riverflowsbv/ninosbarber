// Reviews — VOORBEELDEN, TE VERVANGEN door echte Google-reviews van klanten.
// Zet hier straks echte quotes neer (met toestemming) of koppel Google reviews.

export type Review = {
  name: string;
  text: string;
  rating: number; // 1..5
};

export const reviews: Review[] = [
  {
    name: "Sam",
    text: "Beste barber van Amstelveen. Altijd strak geknipt en de fade zit perfect.",
    rating: 5,
  },
  {
    name: "Younes",
    text: "Nino neemt echt de tijd en denkt mee. Baard en haar helemaal top.",
    rating: 5,
  },
  {
    name: "David",
    text: "Snel een afspraak via WhatsApp en meteen goed geholpen. Aanrader.",
    rating: 5,
  },
  {
    name: "Mike",
    text: "Ga hier al maanden. Vakwerk, goede sfeer en netjes op tijd.",
    rating: 5,
  },
];

export const reviewSummary = {
  rating: 5.0,
  count: 4, // TE VERVANGEN door echt aantal Google-reviews
};
