"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const sections = [
  {
    title: "Acceptance of Terms",
    content: [
      {
        subtitle: "Agreement to Terms",
        text: "By accessing or using the Starting Block Ventures website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.",
      },
      {
        subtitle: "Modifications",
        text: "We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the updated terms on our website. Your continued use of our services after such modifications constitutes acceptance of the updated terms.",
      },
    ],
  },
  {
    title: "Description of Services",
    content: [
      {
        subtitle: "Venture Studio Services",
        text: "Starting Block Ventures provides venture studio services including startup mentorship, investment facilitation, networking opportunities, accelerator programs, and community events. Our services are designed to support early-stage startups in the ASEAN region.",
      },
      {
        subtitle: "Program Participation",
        text: "Participation in our accelerator programs and investment opportunities is subject to application and selection processes. Acceptance into any program is at our sole discretion and does not guarantee funding or specific outcomes.",
      },
      {
        subtitle: "Service Availability",
        text: "We strive to maintain continuous availability of our services but do not guarantee uninterrupted access. Services may be modified, suspended, or discontinued at any time without prior notice.",
      },
    ],
  },
  {
    title: "User Responsibilities",
    content: [
      {
        subtitle: "Accurate Information",
        text: "You agree to provide accurate, current, and complete information when applying to our programs or using our services. You are responsible for maintaining the accuracy of your information and promptly updating it as necessary.",
      },
      {
        subtitle: "Account Security",
        text: "If you create an account with us, you are responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use.",
      },
      {
        subtitle: "Prohibited Conduct",
        text: "You agree not to: (a) use our services for any unlawful purpose; (b) submit false or misleading information; (c) interfere with or disrupt our services; (d) attempt to gain unauthorized access to our systems; or (e) violate any applicable laws or regulations.",
      },
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      {
        subtitle: "Our Content",
        text: "All content on our website, including text, graphics, logos, images, and software, is the property of Starting Block Ventures or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.",
      },
      {
        subtitle: "Your Content",
        text: "By submitting content to us (such as applications, pitch decks, or other materials), you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content in connection with our services. You represent that you have the right to grant this license.",
      },
      {
        subtitle: "Feedback",
        text: "Any feedback, suggestions, or ideas you provide to us may be used by us without any obligation to compensate you. We will own all rights to any improvements or modifications resulting from such feedback.",
      },
    ],
  },
  {
    title: "Investment Disclaimer",
    content: [
      {
        subtitle: "No Investment Advice",
        text: "Nothing on our website or in our communications constitutes investment advice, financial advice, or any other form of professional advice. You should consult with qualified professionals before making any investment decisions.",
      },
      {
        subtitle: "Risk Disclosure",
        text: "Startup investments carry significant risks, including the potential loss of your entire investment. Past performance is not indicative of future results. We make no representations or warranties regarding the success of any startup or investment opportunity.",
      },
      {
        subtitle: "Forward-Looking Statements",
        text: "Our website may contain forward-looking statements based on current expectations and assumptions. Actual results may differ materially due to various factors and uncertainties. We undertake no obligation to update such statements.",
      },
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      {
        subtitle: "Disclaimer of Warranties",
        text: "Our services are provided \"as is\" and \"as available\" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.",
      },
      {
        subtitle: "Limitation of Damages",
        text: "In no event shall Starting Block Ventures, its directors, employees, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services, even if we have been advised of the possibility of such damages.",
      },
      {
        subtitle: "Maximum Liability",
        text: "Our total liability to you for any claims arising from or related to these terms or our services shall not exceed the amount you have paid to us, if any, in the twelve months preceding the claim.",
      },
    ],
  },
  {
    title: "Indemnification",
    content: [
      {
        subtitle: "Your Indemnification Obligations",
        text: "You agree to indemnify, defend, and hold harmless Starting Block Ventures and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services, violation of these terms, or infringement of any third-party rights.",
      },
    ],
  },
  {
    title: "Governing Law",
    content: [
      {
        subtitle: "Jurisdiction",
        text: "These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of the Philippines, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Makati City, Philippines.",
      },
      {
        subtitle: "Dispute Resolution",
        text: "Before initiating any legal proceedings, you agree to first attempt to resolve any dispute informally by contacting us. If the dispute cannot be resolved within 30 days, either party may proceed with formal dispute resolution.",
      },
    ],
  },
  {
    title: "General Provisions",
    content: [
      {
        subtitle: "Entire Agreement",
        text: "These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and Starting Block Ventures regarding your use of our services.",
      },
      {
        subtitle: "Severability",
        text: "If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.",
      },
      {
        subtitle: "Waiver",
        text: "Our failure to enforce any right or provision of these terms shall not constitute a waiver of such right or provision.",
      },
    ],
  },
];

export default function TermsPage() {
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
              Terms of Service
            </motion.h1>
            <motion.p
              className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Please read these terms carefully before using our services.
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
