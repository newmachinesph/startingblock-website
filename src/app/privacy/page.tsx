"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const sections = [
  {
    title: "Information We Collect",
    content: [
      {
        subtitle: "Information You Provide",
        text: "We collect information you provide directly to us, such as when you create an account, apply to our programs, fill out a form, or communicate with us. This may include your name, email address, phone number, company information, and any other information you choose to provide.",
      },
      {
        subtitle: "Automatically Collected Information",
        text: "When you access our website, we automatically collect certain information, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our website.",
      },
      {
        subtitle: "Cookies and Tracking Technologies",
        text: "We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings, though this may affect your experience on our website.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Service Delivery",
        text: "We use your information to provide, maintain, and improve our services, process applications, communicate with you about opportunities and updates, and respond to your inquiries.",
      },
      {
        subtitle: "Analytics and Improvement",
        text: "We analyze usage patterns to understand how our services are used, identify trends, and improve the user experience. This helps us make informed decisions about product development and service enhancements.",
      },
      {
        subtitle: "Marketing Communications",
        text: "With your consent, we may send you promotional communications about our programs, events, and services. You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails.",
      },
    ],
  },
  {
    title: "Information Sharing",
    content: [
      {
        subtitle: "Third-Party Service Providers",
        text: "We may share your information with third-party service providers who perform services on our behalf, such as hosting, analytics, email delivery, and customer support. These providers are contractually obligated to protect your information.",
      },
      {
        subtitle: "Business Partners",
        text: "For program participants, we may share relevant information with our network of investors, mentors, and partners to facilitate connections and opportunities. We will inform you before sharing such information.",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose your information if required by law, regulation, legal process, or government request, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.",
      },
    ],
  },
  {
    title: "Data Security",
    content: [
      {
        subtitle: "Security Measures",
        text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, and regular security assessments.",
      },
      {
        subtitle: "Data Retention",
        text: "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.",
      },
    ],
  },
  {
    title: "Your Rights",
    content: [
      {
        subtitle: "Access and Correction",
        text: "You have the right to access the personal information we hold about you and to request correction of any inaccurate information. You can update your information by contacting us directly.",
      },
      {
        subtitle: "Deletion",
        text: "You may request deletion of your personal information, subject to certain exceptions such as compliance with legal obligations or legitimate business purposes.",
      },
      {
        subtitle: "Data Portability",
        text: "Where applicable, you have the right to receive a copy of your personal information in a structured, commonly used, and machine-readable format.",
      },
    ],
  },
  {
    title: "International Transfers",
    content: [
      {
        subtitle: "Cross-Border Data Transfer",
        text: "Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.",
      },
    ],
  },
  {
    title: "Contact Us",
    content: [
      {
        subtitle: "Questions or Concerns",
        text: "If you have any questions about this Privacy Policy or our data practices, please contact us at info@sbv.one. We will respond to your inquiry within a reasonable timeframe.",
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header variant="light" />
      <main className="bg-white dark:bg-black min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <motion.p
              className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Legal
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              This Privacy Policy describes how Starting Block Ventures collects, uses, and protects your personal information.
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                className="mb-16"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.05 }}
              >
                <h2 className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-8">
                  {section.title}
                </h2>
                <div className="space-y-8">
                  {section.content.map((item, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Last Updated */}
            <motion.div
              className="pt-12 border-t border-gray-100 dark:border-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm text-gray-400">
                Last updated: January 2026
              </p>
              <p className="text-sm text-gray-400 mt-2">
                If you have any questions, please contact us at{" "}
                <a
                  href="mailto:info@sbv.one"
                  className="text-gray-900 dark:text-white hover:opacity-70 transition-opacity"
                >
                  info@sbv.one
                </a>
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
