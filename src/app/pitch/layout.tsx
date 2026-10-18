import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pitch — The Global Lens | Starting Block Ventures",
  description:
    "Submit your startup pitch on SBV's democratized digital platform. Connect with a global network of investors actively seeking opportunities in the Philippines and ASEAN.",
  openGraph: {
    title: "Pitch — The Global Lens | Starting Block Ventures",
    description:
      "Our platform connects promising ASEAN founders with a global investor network. Submit your pitch and get discovered.",
  },
};

export default function PitchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
