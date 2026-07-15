import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServicesGrid from "@/components/ServicesGrid";
import CtaBooking from "@/components/CtaBooking";

export const metadata: Metadata = {
  title: "Diensten & prijzen",
  description:
    "Bekijk de diensten en prijzen van Nino's Barber in Amstelveen: knippen, baard, fades, kinderkapsels en meer.",
  alternates: { canonical: "/diensten" },
};

export default function DienstenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Diensten & prijzen"
        title="Knippen, baard & fades"
        intro="Vakwerk voor een eerlijke prijs. Knippen is één prijs, ongeacht je stijl. Twijfel je wat je nodig hebt? App even, dan denken we mee."
      />
      <section className="section">
        <div className="container">
          <ServicesGrid showNote />
        </div>
      </section>
      <CtaBooking />
    </>
  );
}
