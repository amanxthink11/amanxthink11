import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { PROFILE, SITE_URL } from "@/data/site-data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const title = "Aman Singh — Founder & Software Engineer, Patna";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3efe6" },
    { media: "(prefers-color-scheme: dark)", color: "#13120f" },
  ],
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
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png", sizes: "180x180" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title,
    description: PROFILE.description,
    url: SITE_URL,
    siteName: PROFILE.name,
    locale: "en_IN",
    type: "profile",
    images: [{ url: PROFILE.avatar, width: 460, height: 460, alt: `Portrait of ${PROFILE.name}` }],
  },
  twitter: {
    card: "summary",
    title,
    description: PROFILE.description,
    creator: "@amanxthink11",
    images: [PROFILE.avatar],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
