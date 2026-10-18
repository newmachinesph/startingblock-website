"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const portfolioCompanies = [
  {
    name: "InstantStudio",
    logo: "/venture-imgs/instantstudio-logo.png",
    category: "AI & Generative AI",
    description: "AI-powered image generation platform",
    url: "https://instantstudio.ai/",
  },
  {
    name: "TikTag",
    logo: "/venture-imgs/tiktag-logo.png",
    category: "AI & Web3",
    description: "AI and Web3 solutions",
    url: "https://tiktag.app/",
  },
  {
    name: "Breakpoints Live",
    logo: "/venture-imgs/breakpointslive-logo.png",
    category: "AI & Developer Tools",
    description: "Agentic maker platform",
    url: "https://breakpoints.live/",
  },
  {
    name: "Korfshore",
    logo: "/venture-imgs/korfshore-logo.png",
    category: "Enterprise / B2B",
    description: "Staff augmentation services",
    url: "https://korfshore.com/",
  },
  {
    name: "Feenex",
    logo: "/venture-imgs/feenex-logo.jpeg",
    category: "Enterprise / B2B",
    description: "Expenses digitization platform",
    url: "https://get.feenex.app/",
  },
  {
    name: "Ximplify",
    logo: "/venture-imgs/ximplify-logo.png",
    category: "Enterprise / B2B",
    description: "Smart billing solutions",
    url: "https://ximplify.it/",
  },
  {
    name: "Tekkicart",
    logo: "/venture-imgs/tekkicart-logo.png",
    category: "E-commerce",
    description: "E-commerce platform",
    url: "https://www.tekkicart.com/",
  },
  {
    name: "Xend",
    logo: "/venture-imgs/xend-logo.png",
    category: "Logistics",
    description: "Logistics and delivery solutions",
    url: "https://xend.com.ph/",
  },
  {
    name: "Kranium",
    logo: "/venture-imgs/kranium-logo.png",
    category: "Healthcare",
    description: "Healthcare analytics platform",
    url: "https://kranium.com.ph/",
  },
  {
    name: "HealthSpace",
    logo: "/venture-imgs/healthspace-logo.png",
    category: "Healthcare",
    description: "Healthcare services platform",
    url: "https://healthspace.ph/",
  },
  {
    name: "Artweex",
    logo: "/venture-imgs/artweex-logo.png",
    category: "Workforce Solutions",
    description: "Creative job platform",
    url: "https://artweex.com/",
  },
  {
    name: "RemoteTalent PH",
    logo: "/venture-imgs/remotetalentph-logo.png",
    category: "Workforce Solutions",
    description: "Remote jobs marketplace",
    url: "https://remotetalent.ph/",
  },
  {
    name: "Incub8space",
    logo: "/venture-imgs/incub8space-logo.png",
    category: "Infrastructure",
    description: "Virtual office solutions",
    url: "https://incub8space.com/",
  },
  {
    name: "Tikoly",
    logo: "/venture-imgs/tikoly-logo.png",
    category: "AI & Web3",
    description: "Privacy-preserving infrastructure for the agentic economy",
    url: "https://tikoly.com/",
  },
  {
    name: "Pitch",
    logo: "/venture-imgs/pitch_logo.png",
    category: "Platform",
    description: "Startup pitch and investor discovery platform",
    url: "https://pitch.sbv.one",
  },
];

const focusAreas = [
  {
    title: "Web3 & Blockchain",
    description: "Decentralized technologies reshaping finance, identity, and digital ownership.",
  },
  {
    title: "Generative AI",
    description: "AI-powered solutions transforming content creation, automation, and decision-making.",
  },
  {
    title: "Healthtech",
    description: "Technology-driven healthcare innovations improving patient outcomes and accessibility.",
  },
  {
    title: "Enterprise SaaS",
    description: "B2B software solutions that streamline operations and drive efficiency.",
  },
  {
    title: "Fintech",
    description: "Financial technology reshaping payments, lending, and wealth management.",
  },
  {
    title: "Climate & Sustainability",
    description: "Solutions addressing environmental challenges and promoting sustainable practices.",
  },
];

const categories = ["All", "AI & Generative AI", "Enterprise / B2B", "Healthcare", "E-commerce", "Workforce Solutions"];

export default function VenturesPage() {
  const heroRef = useRef(null);
  const portfolioRef = useRef(null);
  const focusRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const portfolioInView = useInView(portfolioRef, { once: true, margin: "-100px" });
  const focusInView = useInView(focusRef, { once: true, margin: "-100px" });
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
              Ventures
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              The Innovation
              <br />
              <span className="font-medium">Engine</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              At the forefront of technological advancement, we identify and build high-tech,
              early-stage startups with a merit-driven approach. We partner with visionary founders
              to build disruptive companies.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                { value: "16", label: "Portfolio Companies" },
                { value: "6", label: "Focus Sectors" },
                { value: "ASEAN", label: "Regional Focus" },
                { value: "2024", label: "Est." },
              ].map((stat) => (
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
          </div>
        </section>

        {/* Portfolio Section */}
        <section ref={portfolioRef} className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
                Portfolio
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white mb-6">
                Companies we've backed
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                We provide resources, expertise, and strategic guidance to help our portfolio
                companies scale and succeed.
              </p>
            </motion.div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
              {portfolioCompanies.map((company, index) => (
                <motion.a
                  key={company.name}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-[#fafafa] dark:bg-[#0a0a0a] rounded-2xl p-4 md:p-8 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="relative w-full aspect-square mb-4 flex items-center justify-center">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                      {company.name}
                    </h3>
                    <p className="text-xs tracking-[0.1em] text-gray-400 uppercase mb-2">
                      {company.category}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                      {company.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Focus Areas Section */}
        <section
          ref={focusRef}
          className="py-24 lg:py-32 bg-[#fafafa] dark:bg-[#0a0a0a]"
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={focusInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
                Investment Focus
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white">
                Where we invest
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  className="p-8 bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-gray-800"
                  initial={{ opacity: 0, y: 30 }}
                  animate={focusInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
                  What We Offer
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.2] mb-6">
                  More than just
                  <br />
                  <span className="font-medium">capital</span>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  We roll up our sleeves and work alongside founders. Our hands-on approach
                  means we're in the trenches with you, from strategy to execution.
                </p>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {[
                  {
                    title: "Strategic Guidance",
                    description: "Navigate critical decisions with experienced operators who've built and scaled companies.",
                  },
                  {
                    title: "Operational Support",
                    description: "Access to our network of experts in product, engineering, marketing, and finance.",
                  },
                  {
                    title: "Global Network",
                    description: "Connections to investors, partners, and talent across ASEAN, Greater China, and beyond.",
                  },
                  {
                    title: "Follow-on Investment",
                    description: "Continued support through subsequent funding rounds as you scale.",
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-6 border border-gray-100 dark:border-gray-800 rounded-xl"
                  >
                    <span className="text-xs tracking-[0.2em] text-gray-300 dark:text-gray-600">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Z-One Forge Section */}
        <section className="py-24 lg:py-32 bg-[#fafafa] dark:bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src="/z1-logo.svg"
                    alt="Z-One Forge logo"
                    width={56}
                    height={56}
                    className=""
                  />
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.2]">
                    Z-One
                    <br />
                    <span className="font-medium">Forge</span>
                  </h2>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                  Zero to One. From Nothing to a Live Product in 12 Weeks.
                </p>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                  The Philippines&apos; premier collaborative forge for building, shipping, and
                  launching real products — together. Every team ships every Friday. Powered by
                  the 4H Framework: Hacker, Hustler, Hipster, and Hound.
                </p>
                <a
                  href="https://z1.sbv.one/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm tracking-wide rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Learn More
                </a>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {[
                  { value: "12", label: "Weeks" },
                  { value: "4H", label: "Team Framework" },
                  { value: "1", label: "Live Product" },
                  { value: "4", label: "Platforms" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-6 bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-gray-800 text-center"
                  >
                    <p className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-2">
                      {stat.value}
                    </p>
                    <p className="text-xs tracking-[0.15em] text-gray-400 uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
                <div className="col-span-2 p-6 bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-gray-800">
                  <p className="text-xs tracking-[0.15em] text-gray-400 uppercase mb-3">
                    Cohort 1 — Philippines 2026
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Fintech", "Agritech", "Edtech", "Healthtech", "AI", "SaaS"].map((niche) => (
                      <span
                        key={niche}
                        className="px-3 py-1 text-xs tracking-wide text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 rounded-full"
                      >
                        {niche}
                      </span>
                    ))}
                  </div>
                </div>
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
              Building something bold?
            </motion.h2>
            <motion.p
              className="text-gray-400 dark:text-gray-600 mb-10 max-w-xl mx-auto text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              We'll get back to you within a few days with feedback, next steps,
              and introductions.
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
                Apply Now
              </a>
              <a
                href="/contact"
                className="inline-block px-8 py-4 border border-white/30 dark:border-gray-900/30 text-white dark:text-gray-900 text-sm tracking-wide rounded-full hover:bg-white/10 dark:hover:bg-gray-900/10 transition-colors"
              >
                Get in Touch
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
