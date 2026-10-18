import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sbv.one"),
  title: "SBV.one | Southeast Asia's Premier Venture Studio",
  description:
    "Starting Block Ventures accelerates frontier startups in the Philippines with hands-on venture building, operator support, and programs like the FutureCare Accelerator.",
  keywords: [
    "venture studio Philippines",
    "startup accelerator ASEAN",
    "venture capital Southeast Asia",
    "startup funding Philippines",
    "co-build startups",
    "AI startups",
    "fintech Philippines",
    "healthtech innovation",
    "climate tech investment",
  ],
  authors: [{ name: "Starting Block Ventures" }],
  creator: "Starting Block Ventures",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sbv.one",
    siteName: "Starting Block Ventures",
    title: "SBV.one | Southeast Asia's Premier Venture Studio",
    description:
      "We co-build and scale high-growth startups from Day 0. Join our 2026 cohort.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Starting Block Ventures - Building the Future of Southeast Asia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SBV.one | Southeast Asia's Premier Venture Studio",
    description:
      "We co-build and scale high-growth startups from Day 0. Apply for our 2026 cohort.",
    creator: "@sbv_one",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" style={{ colorScheme: "light" }}>
      <body
        className={`${dmSans.variable} ${manrope.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
