import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply to SBV Accelerator | Starting Block Ventures",
  description:
    "Apply to the Starting Block Ventures Accelerator — a 12-week intensive program for early-stage startups in Fintech, Healthtech, AI, SaaS, Climatetech, and Consumer tech across ASEAN.",
  openGraph: {
    title: "Apply to SBV Accelerator | Starting Block Ventures",
    description:
      "Join our 12-week accelerator program. Get capital, mentorship, industry access, and infrastructure to scale your startup.",
  },
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
