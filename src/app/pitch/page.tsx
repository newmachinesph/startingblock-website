"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const features = [
  {
    title: "Global Discovery",
    description: "Connect with investors worldwide who are actively seeking innovative startups in emerging markets.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Democratized Access",
    description: "Level the playing field for founders regardless of their network or background. Great ideas deserve to be heard.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Investor Network",
    description: "Access our curated network of VCs, angels, and corporate investors actively looking for ASEAN opportunities.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Barrier Removal",
    description: "We eliminate the traditional obstacles that prevent talented founders from accessing global capital markets.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Submit Your Pitch",
    description: "Create your profile and upload your pitch deck. Tell us about your vision, team, and traction.",
  },
  {
    step: "02",
    title: "Get Reviewed",
    description: "Our team reviews your submission and provides feedback. Strong candidates advance to investor introductions.",
  },
  {
    step: "03",
    title: "Connect with Investors",
    description: "We match you with relevant investors from our global network based on your industry, stage, and goals.",
  },
  {
    step: "04",
    title: "Close Your Round",
    description: "Leverage our support throughout the fundraising process, from pitch refinement to term sheet negotiation.",
  },
];

const stats = [
  { value: "500+", label: "Pitches Reviewed" },
  { value: "50+", label: "Investor Partners" },
  { value: "ASEAN", label: "Regional Focus" },
  { value: "24/7", label: "Platform Access" },
];

export default function PitchPage() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const howItWorksInView = useInView(howItWorksRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <>
      <Header variant="light" />
      <main className="bg-white dark:bg-black">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black"
        >
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.p
              className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Pitch
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              The Global
              <br />
              <span className="font-medium">Lens</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our democratized digital platform ensures the most promising founders are discovered
              by a global network of investors, removing barriers for talent in the Philippines
              and greater ASEAN.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mb-12"
            >
              <a
                href="https://pitch.sbv.one"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm tracking-wide rounded-full hover:opacity-90 transition-opacity"
              >
                Go to Pitch Platform
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs tracking-[0.15em] text-gray-400 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Pitch Image */}
            <motion.div
              className="mt-16 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/startingblock-pitch.jpg"
                  alt="Starting Block Ventures Pitch Event"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
                Why Pitch with SBV
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white">
                Breaking down barriers
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="p-8 lg:p-10 border border-gray-100 dark:border-gray-800 rounded-2xl hover:border-gray-200 dark:hover:border-gray-700 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          ref={howItWorksRef}
          className="py-24 lg:py-32 bg-[#fafafa] dark:bg-[#0a0a0a]"
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={howItWorksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
                How It Works
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white">
                Your path to funding
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={howItWorksInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <span className="text-6xl font-light text-gray-100 dark:text-gray-800 absolute -top-4 -left-2">
                    {step.step}
                  </span>
                  <div className="relative pt-8">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* For Investors Section */}
        <section className="py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
                  For Investors
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.2] mb-6">
                  Access the next wave of
                  <br />
                  <span className="font-medium">ASEAN innovation</span>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                  Our platform gives you early access to vetted startups from one of the
                  world's fastest-growing regions. We curate opportunities so you can
                  focus on what matters—finding the next great company.
                </p>
                <ul className="space-y-4">
                  {[
                    "Curated deal flow from the Philippines and ASEAN",
                    "Pre-vetted founders with strong fundamentals",
                    "Direct introductions to promising startups",
                    "Exclusive access to pitch events and demo days",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 lg:p-12"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-6">
                  Join our investor network
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8">
                  Get notified about new startups and exclusive investment opportunities.
                </p>
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm tracking-wide rounded-full hover:opacity-90 transition-opacity"
                >
                  Partner with Us
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={ctaRef}
          className="py-24 lg:py-32 bg-gray-900 dark:bg-white"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white dark:text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Ready to pitch your startup?
            </motion.h2>
            <motion.p
              className="text-gray-400 dark:text-gray-600 mb-10 max-w-xl mx-auto text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Submit your pitch and get discovered by investors actively seeking
              opportunities in ASEAN.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a
                href="/apply"
                className="inline-block px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm tracking-wide rounded-full hover:opacity-90 transition-opacity"
              >
                Submit Your Pitch
              </a>
              <a
                href="/contact"
                className="inline-block px-8 py-4 border border-white/30 dark:border-gray-900/30 text-white dark:text-gray-900 text-sm tracking-wide rounded-full hover:bg-white/10 dark:hover:bg-gray-900/10 transition-colors"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
