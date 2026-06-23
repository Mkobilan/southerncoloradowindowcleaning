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
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icon.png",
    shortcut: "/favicon.ico",
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
        {/* Favicon — explicit tags for maximum browser compatibility */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does window cleaning cost in Pueblo, Colorado?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our window cleaning pricing is transparent and per-pane. Exterior-only cleaning starts at $7–$9 per pane. Interior and exterior cleaning is $12–$17 per pane. If your windows are heavily soiled, have hard water stains, or have not been cleaned in a long time, an initial deep-cleaning fee of $25–$50 may apply based on condition. All quotes are free — just call or text us at 719.297.1125!"
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer recurring window cleaning services?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We offer flexible recurring maintenance plans on a weekly or monthly schedule. Regular cleaning keeps your storefront or commercial building looking sharp and prevents hard water buildup, which saves you money in the long run."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you remove hard water stains from windows?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Hard water stain removal is one of our specialties. For windows with significant mineral deposits or long-term buildup, we apply an initial deep-cleaning treatment before setting up any recurring maintenance plan."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What areas do you serve near Pueblo, CO?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We serve all of Pueblo and surrounding communities including Pueblo West, Bessemer, Belmont, Downtown Pueblo, Northside, South Side, Vineland, Avondale, Colorado City, and more. Not sure if we cover your area? Give us a call or text — we are always happy to help."
                  }
                }
              ]
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
