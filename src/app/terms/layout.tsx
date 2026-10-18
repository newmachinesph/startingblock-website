import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Starting Block Ventures",
  description:
    "Read the Terms of Service for Starting Block Ventures. Learn about our policies governing the use of our venture studio services and programs.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
