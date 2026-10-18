"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const legalPages = [
  {
    title: "Privacy Policy",
    description: "Learn how we collect, use, and protect your personal information.",
    href: "/privacy",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Terms of Service",
    description: "Read our terms and conditions for using Starting Block Ventures services.",
    href: "/terms",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const quickInfo = [
  {
    title: "Data Protection",
    text: "We are committed to protecting your personal data in accordance with applicable data protection laws and best practices.",
  },
  {
    title: "Transparency",
    text: "We believe in being transparent about how we collect and use your information. Our policies are written in plain language.",
  },
  {
    title: "Your Rights",
    text: "You have rights over your personal data, including the right to access, correct, and delete your information.",
  },
  {
    title: "Contact Us",
    text: "If you have any questions about our legal policies, please contact us at info@sbv.one.",
  },
];

export default function LegalPage() {
  return (
    <>
      <Header variant="light" />
      <main className="bg-white dark:bg-black min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
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
              Legal Information
            </motion.h1>
            <motion.p
              className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We're committed to transparency and protecting your rights. Find all our legal documents below.
            </motion.p>
          </div>
        </section>

        {/* Legal Pages Links */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6">
              {legalPages.map((page, index) => (
                <motion.div
                  key={page.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={page.href} className="block group">
                    <div className="p-8 border border-gray-100 dark:border-gray-800 rounded-2xl hover:border-gray-200 dark:hover:border-gray-700 transition-all hover:shadow-lg">
                      <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 mb-6 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                        {page.icon}
                      </div>
                      <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                        {page.title}
                      </h2>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                        {page.description}
                      </p>
                      <span className="inline-flex items-center text-sm text-gray-900 dark:text-white font-medium group-hover:opacity-70 transition-opacity">
                        Read more
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-24 bg-[#fafafa] dark:bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-gray-900 dark:text-white">
                Our Commitment to You
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {quickInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2
              className="text-2xl md:text-3xl font-light tracking-tight text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Have questions about our policies?
            </motion.h2>
            <motion.p
              className="text-gray-500 dark:text-gray-400 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              We're here to help. Reach out to us anytime.
            </motion.p>
            <motion.a
              href="mailto:info@sbv.one"
              className="inline-block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm tracking-wide rounded-full hover:opacity-90 transition-opacity"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Contact Us
            </motion.a>

            <motion.p
              className="mt-12 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Last updated: January 2026
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
