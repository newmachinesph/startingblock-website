import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "InSpace — Events & Community | Starting Block Ventures",
  description:
    "Join SBV InSpace events — startup meetups, pitch nights, workshops, and community gatherings for founders and investors in the Philippines.",
  openGraph: {
    title: "InSpace — Events & Community | Starting Block Ventures",
    description:
      "Startup events, pitch nights, and community gatherings for the Philippine startup ecosystem.",
  },
};

export default function InSpaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
