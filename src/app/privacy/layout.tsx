import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Starting Block Ventures",
  description:
    "Learn how Starting Block Ventures collects, uses, and protects your personal information. Our commitment to data privacy and security.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
