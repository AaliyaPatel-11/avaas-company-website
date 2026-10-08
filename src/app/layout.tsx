import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/content/siteConfig";
import { companyInfo } from "@/content/company";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AVAAS — Voice-First Mobility",
    template: "%s | AVAAS Speech Systems",
  },
  description:
    "AVAAS is building a voice-first mobility platform that enables people to access ride-booking services through a simple phone conversation.",
  keywords: [
    "AVAAS",
    "Voice-first mobility",
    "Conversational AI",
    "Telephony AI",
    "Ride booking by phone",
    "Accessible mobility",
    "Speech recognition",
    "AVAAS SPEECH SYSTEMS",
    "Hyderabad startups",
  ],
  authors: [{ name: companyInfo.legalName }],
  creator: companyInfo.legalName,
  publisher: companyInfo.legalName,
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/avaas-logo.svg", type: "image/svg+xml" },
    ],
    apple: "/avaas-logo.jpeg",
  },
  openGraph: {
    title: "AVAAS — Voice-First Mobility",
    description:
      "Building the future of voice-first mobility. Call AVAAS and book a ride through a voice-first experience powered by AI.",
    url: siteConfig.url,
    siteName: companyInfo.tradeName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "AVAAS Speech Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AVAAS — Voice-First Mobility",
    description:
      "Building the future of voice-first mobility. Call AVAAS and book a ride through a voice-first experience powered by AI.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-avaas-cream text-slate-900 font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
