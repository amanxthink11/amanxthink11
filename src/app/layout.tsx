import type { Metadata, Viewport } from "next";
import { Archivo, Bungee, Geist_Mono, Permanent_Marker } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { PROFILE, SITE_URL } from "@/data/site-data";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const bungee = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: "400",
});

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Aman Singh — Founder & Software Engineer, Patna";

export const viewport: Viewport = {
  themeColor: "#0b0d12",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description: PROFILE.description,
  keywords: [
    "Aman Singh",
    "Aman Kumar Singh",
    "amanxthink11",
    "QuickQR",
    "Billzo",
    "IND Tech Mark",
    "Think11",
    "Patna software engineer",
    "Bihar founder",
  ],
  authors: [{ name: PROFILE.name, url: SITE_URL }],
  creator: PROFILE.name,
  alternates: { canonical: "/" },
  // Icons come from app/icon.tsx and app/apple-icon.tsx, generated from the LogoMark paths.
  openGraph: {
    title,
    description: PROFILE.description,
    url: SITE_URL,
    siteName: PROFILE.name,
    locale: "en_IN",
    type: "profile",
    // The share image comes from app/opengraph-image.tsx; X falls back to it too.
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: PROFILE.description,
    creator: "@amanxthink11",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${archivo.variable} ${bungee.variable} ${permanentMarker.variable} ${geistMono.variable}`}
    >
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
