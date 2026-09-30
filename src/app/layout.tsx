import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#08090d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://amanxthink11.com"),
  title: "Aman Singh — Founder, Builder & Technology Entrepreneur",
  description:
    "Aman Singh is a technology entrepreneur and founder from Patna, Bihar, building companies, products and technology ventures.",
  keywords: [
    "Aman Singh",
    "Aman Kumar Singh",
    "amanxthink11",
    "Think11",
    "IND Tech Mark",
    "Patna Bihar Entrepreneur",
    "Founder",
    "Technology Entrepreneur",
    "Product Builder",
    "Sports Technology",
    "SaaS India",
  ],
  authors: [{ name: "Aman Singh", url: "https://amanxthink11.com" }],
  creator: "Aman Singh",
  publisher: "Aman Singh",
  alternates: {
    canonical: "https://amanxthink11.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "180x180" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Aman Singh — Founder, Builder & Technology Entrepreneur",
    description:
      "Aman Singh is a technology entrepreneur and founder from Patna, Bihar, building companies, products and technology ventures.",
    url: "https://amanxthink11.com",
    siteName: "Aman Singh",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/aman.jpg",
        width: 460,
        height: 460,
        alt: "Aman Singh — Founder & Technology Entrepreneur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Singh — Founder, Builder & Technology Entrepreneur",
    description:
      "Aman Singh is a technology entrepreneur and founder from Patna, Bihar, building companies, products and technology ventures.",
    creator: "@amanxthink11",
    images: ["/aman.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-[#08090d] text-[#f3f4f6]">
        {children}
      </body>
    </html>
  );
}
