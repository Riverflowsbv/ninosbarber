import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { openingHoursSpecification } from "@/lib/hours";
import { reviewSummary } from "@/lib/reviews";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = Barlow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · Barbershop & Herenkapper in ${site.city}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "kapper Amstelveen",
    "barbershop Amstelveen",
    "herenkapper Amstelveen",
    "baard Amstelveen",
    "fade kapper Amstelveen",
    "Nino's Barber",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: site.url,
    siteName: site.name,
    title: `${site.name} · Barbershop in ${site.city}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Barbershop in ${site.city}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone.intl,
    image: `${site.url}/og.jpg`,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: openingHoursSpecification(),
    sameAs: [site.socials.instagram, site.socials.tiktok],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewSummary.rating,
      reviewCount: reviewSummary.count,
    },
    areaServed: { "@type": "City", name: site.city },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${display.variable} ${body.variable}`}>
      <body>
        <LocalBusinessJsonLd />
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
