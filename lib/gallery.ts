// Galerij — handmatige versie met nette placeholders.
// Vervang src door echte foto's van Nino (leg ze in /public/gallery/).
// Zie components/GalleryNote of de handover voor de Instagram-koppeling later.

export type GalleryItem = {
  src: string;
  alt: string;
  tag: string; // korte label, bv. "Fade", "Baard"
};

export const gallery: GalleryItem[] = [
  { src: "/gallery/01.svg", alt: "Strakke skin fade door Nino's Barber", tag: "Skin fade" },
  { src: "/gallery/02.svg", alt: "Klassiek heren kapsel met scheiding", tag: "Klassiek" },
  { src: "/gallery/03.svg", alt: "Baard strak in model geschoren", tag: "Baard" },
  { src: "/gallery/04.svg", alt: "Moderne crop met textuur", tag: "Crop" },
  { src: "/gallery/05.svg", alt: "Kort kapsel met scherpe contouren", tag: "Contouren" },
  { src: "/gallery/06.svg", alt: "Knippen en baard combinatie", tag: "Knippen & baard" },
  { src: "/gallery/07.svg", alt: "Kinderkapsel bij Nino's Barber", tag: "Kids" },
  { src: "/gallery/08.svg", alt: "Styling met product, afgewerkt kapsel", tag: "Styling" },
];
