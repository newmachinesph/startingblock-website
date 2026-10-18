import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Ventures | Starting Block Ventures",
  description:
    "Explore the Starting Block Ventures portfolio — startups we've co-built and invested in across Fintech, Healthtech, AI, SaaS, Climatetech, and Consumer tech in ASEAN.",
  openGraph: {
    title: "Portfolio & Ventures | Starting Block Ventures",
    description:
      "Our portfolio of high-growth startups across Southeast Asia. See the companies we're building with.",
  },
};

export default function VenturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
