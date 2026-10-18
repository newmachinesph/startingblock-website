import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Starting Block Ventures",
  description:
    "Get in touch with Starting Block Ventures. Whether you're a founder with a bold idea or looking to collaborate, we'd love to hear from you.",
  openGraph: {
    title: "Contact Us | Starting Block Ventures",
    description:
      "Reach out to Starting Block Ventures — for founders, investors, partners, and media inquiries.",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of startups does Starting Block Ventures support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Starting Block Ventures supports early-stage startups that focus on technology-driven solutions across various industries. Our primary focus areas include Fintech, Healthtech, SaaS, Climatetech, AI, and Consumer tech.",
      },
    },
    {
      "@type": "Question",
      name: "What resources does Starting Block provide to participating startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer personalized mentorship, access to funding, workshops on critical business skills, and connections to a vast network of investors and industry leaders across ASEAN and Greater China.",
      },
    },
    {
      "@type": "Question",
      name: "How long is the Starting Block Ventures program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The duration of the Starting Block program varies, but it typically runs for several months, during which startups receive intensive support and resources tailored to their specific needs and stage.",
      },
    },
    {
      "@type": "Question",
      name: "How can I apply to join the Starting Block program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can apply through our contact form or email us directly at hello@sbv.one. We screen all startup applications thoroughly. Please provide comprehensive information about your startup including your team, traction, and vision.",
      },
    },
    {
      "@type": "Question",
      name: "Does Starting Block Ventures take equity in startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our investment terms vary depending on the level of involvement and resources provided. We discuss equity arrangements on a case-by-case basis during our evaluation process.",
      },
    },
    {
      "@type": "Question",
      name: "What regions does Starting Block Ventures focus on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While we are headquartered in Makati, Philippines, our focus extends across ASEAN and Greater China. We work with founders who are building solutions for these markets or have global ambitions.",
      },
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
