import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Southern Colorado Window Cleaning | Pueblo's Best",
  description:
    "Professional window cleaning services in Pueblo, Colorado. We specialize in residential, commercial, and storefront window cleaning. Shine bright with our eco-friendly solutions. Free quotes — call or text 719.297.1125!",
  keywords:
    "window cleaning, window cleaning services, window cleaning near me, Pueblo Colorado window cleaning, commercial window cleaning, shine bright window cleaning, window washer service, eavestrough cleaning services, professional window washing services, window cleaning company",
  metadataBase: new URL("https://southerncoloradowindowcleaning.vercel.app"),
  alternates: {
    canonical: "https://southerncoloradowindowcleaning.vercel.app",
  },
  openGraph: {
    title: "Southern Colorado Window Cleaning | Pueblo's Best",
    description:
      "Professional window cleaning services in Pueblo, Colorado. Free quotes — call or text 719.297.1125!",
    url: "https://southerncoloradowindowcleaning.vercel.app",
    siteName: "Southern Colorado Window Cleaning",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
    shortcut: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="wnwX0v0OGT7E25CuYA6r3_NjExggVU9PFITJXnpMp8U"
        />
        {/* GEO tags for local SEO */}
        <meta name="geo.region" content="US-CO" />
        <meta name="geo.placename" content="Pueblo, Colorado" />
        <meta name="geo.position" content="38.2544;-104.6091" />
        <meta name="ICBM" content="38.2544, -104.6091" />
        {/* JSON-LD Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Southern Colorado Window Cleaning",
              image:
                "https://southerncoloradowindowcleaning.vercel.app/logo.png",
              description:
                "Professional window cleaning services for commercial buildings and storefronts in Pueblo, Colorado. Per-pane pricing, recurring maintenance, and hard water stain removal.",
              url: "https://southerncoloradowindowcleaning.vercel.app",
              telephone: "+1-719-297-1125",
              email: "matthew.kobilan@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pueblo",
                addressRegion: "CO",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 38.2544,
                longitude: -104.6091,
              },
              areaServed: {
                "@type": "City",
                name: "Pueblo",
                addressRegion: "CO",
              },
              priceRange: "$7-$50",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "07:00",
                closes: "18:00",
              },
              sameAs: [
                "https://github.com/Mkobilan/southerncoloradowindowcleaning",
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
