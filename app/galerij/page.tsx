import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import CtaBooking from "@/components/CtaBooking";
import Reveal from "@/components/Reveal";
import InstagramIcon from "@/components/InstagramIcon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Galerij",
  description:
    "Bekijk het werk van Nino's Barber in Amstelveen: fades, kapsels en baarden. Volg mee op Instagram en TikTok.",
  alternates: { canonical: "/galerij" },
};

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.9v2.5c-1.3.1-2.5-.3-3.5-1v6.1c0 3.4-2.6 5.5-5.6 5.5A5.4 5.4 0 0 1 5.5 14c0-3 2.4-5.3 5.6-5.1v2.6c-.4-.1-.8-.2-1.2-.2-1.5 0-2.6 1.2-2.5 2.7 0 1.5 1.2 2.6 2.7 2.6 1.5 0 2.6-1.1 2.6-2.9V3h3.3Z" />
    </svg>
  );
}

export default function GalerijPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ons werk"
        title="Galerij"
        intro="Een greep uit het werk van Nino. Nieuwe foto's volgen. Volg mee op Instagram en TikTok voor de laatste knipsels."
      />
      <section className="section">
        <div className="container">
          <Reveal>
            <GalleryGrid />
          </Reveal>

          <div
            style={{
              marginTop: "2.5rem",
              display: "flex",
              gap: "0.9rem",
              flexWrap: "wrap",
            }}
          >
            <a
              className="btn btn-ghost"
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon size={18} />
              Volg op Instagram {site.socials.instagramHandle}
            </a>
            <a
              className="btn btn-ghost"
              href={site.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TikTokIcon size={18} />
              Volg op TikTok
            </a>
          </div>
        </div>
      </section>
      <CtaBooking />
    </>
  );
}
