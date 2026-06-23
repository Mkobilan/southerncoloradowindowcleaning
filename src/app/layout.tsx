import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Southern Colorado Window Cleaning | Pueblo's Best",
  description: "Professional window cleaning services in Pueblo, Colorado. We specialize in residential, commercial, and storefront window cleaning. Shine bright with our eco-friendly solutions. Free quotes!",
  keywords: "window cleaning, window cleaning services, window cleaning near me, Pueblo Colorado window cleaning, commercial window cleaning, shine bright window cleaning, window washer service, eavestrough cleaning services, professional window washing services, window cleaning company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
