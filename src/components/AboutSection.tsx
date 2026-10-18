"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const principles = [
  {
    number: "01",
    title: "Personalized Mentorship",
    description:
      "Tailored guidance from experienced mentors throughout your entire entrepreneurial journey, from ideation to scale.",
  },
  {
    number: "02",
    title: "Access to Funding",
    description:
      "Direct connections to venture capitalists and financial support opportunities to fuel your growth.",
  },
  {
    number: "03",
    title: "Skill Development",
    description:
      "Comprehensive workshops on essential business skills—product, marketing, operations—for effective market navigation.",
  },
  {
    number: "04",
    title: "Expansive Network",
    description:
      "Access to industry leaders, investors, and fellow founders across ASEAN and Greater China.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 lg:py-48 bg-[#fafafa] dark:bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.15]">
              Championing the
              <br />
              <span className="font-medium">bold and visionary</span>
            </h2>
          </motion.div>

          <motion.div
            className="flex items-end"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              Starting Block Ventures champions companies bold enough to reinvent how we live.
              Beyond funding, we provide mentorship, co-design strategy, share operational expertise,
              and help founders maintain resilience through the entrepreneurial journey.
            </p>
          </motion.div>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-gray-200 dark:bg-gray-800">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              className="bg-[#fafafa] dark:bg-[#0a0a0a] p-12 lg:p-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <span className="text-xs tracking-[0.3em] text-gray-300 dark:text-gray-600 mb-6 block">
                {principle.number}
              </span>
              <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                {principle.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Minimal divider */}
        <motion.div
          className="mt-24 flex items-center gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
            Est. 2024
          </p>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
        </motion.div>
      </div>
    </section>
  );
}
