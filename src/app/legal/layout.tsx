import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Information | Starting Block Ventures",
  description:
    "Access all legal documents for Starting Block Ventures including our Privacy Policy and Terms of Service.",
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
