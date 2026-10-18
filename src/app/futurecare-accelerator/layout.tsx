import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FutureCare AI x HealthTech Accelerator | Starting Block Ventures",
  description:
    "FutureCare is a 12-week accelerator connecting HealthTech founders with clinical mentors, regulatory experts, and enterprise buyers across the Philippines and ASEAN.",
  keywords: [
    "healthtech accelerator Philippines",
    "AI healthcare startups",
    "health tech accelerator ASEAN",
    "FutureCare accelerator",
    "medical AI Philippines",
    "digital health startups",
  ],
  openGraph: {
    title: "FutureCare AI x HealthTech Accelerator",
    description:
      "A 12-week program for HealthTech founders. Clinical mentors, regulatory support, and enterprise access in the Philippines and ASEAN.",
  },
};

export default function FutureCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
