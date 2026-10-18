import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Starting Block Ventures",
  description:
    "Learn about Starting Block Ventures — a venture studio based in Makati, Philippines, co-building and scaling high-growth startups across ASEAN since 2024.",
  openGraph: {
    title: "About Us | Starting Block Ventures",
    description:
      "A venture studio based in Makati, Philippines, building the infrastructure that helps founders thrive across ASEAN.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
