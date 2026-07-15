import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Intro from "@/components/Intro";
import ServicesGrid from "@/components/ServicesGrid";
import Stats from "@/components/Stats";
import GalleryGrid from "@/components/GalleryGrid";
import ReviewsSection from "@/components/ReviewsSection";
import AboutNino from "@/components/AboutNino";
import LocationHours from "@/components/LocationHours";
import CtaBooking from "@/components/CtaBooking";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Intro />

      {/* Diensten preview */}
      <section className="section section-alt" id="diensten">
        <div className="container">
          <div
            className="section-head"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              maxWidth: "100%",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div style={{ maxWidth: "40rem" }}>
              <span className="eyebrow">Diensten &amp; prijzen</span>
              <h2 style={{ marginTop: "0.9rem" }}>Strak werk, eerlijke prijs</h2>
            </div>
            <Link href="/diensten" className="link-arrow">
              Alle diensten <ArrowRight size={17} />
            </Link>
          </div>
          <ServicesGrid limit={6} />
        </div>
      </section>

      <Stats />

      {/* Galerij preview */}
      <section className="section" id="galerij">
        <div className="container">
          <div
            className="section-head"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              maxWidth: "100%",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div style={{ maxWidth: "40rem" }}>
              <span className="eyebrow">Ons werk</span>
              <h2 style={{ marginTop: "0.9rem" }}>Vers uit de stoel</h2>
            </div>
            <Link href="/galerij" className="link-arrow">
              Hele galerij <ArrowRight size={17} />
            </Link>
          </div>
          <Reveal>
            <GalleryGrid limit={4} />
          </Reveal>
        </div>
      </section>

      <ReviewsSection />
      <AboutNino />
      <LocationHours />
      <CtaBooking />
    </>
  );
}
