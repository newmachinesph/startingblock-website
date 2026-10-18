"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const focusIndustries = [
  {
    name: "Artificial Intelligence",
    category: "AI",
    description: "Predictive, autonomous, and adaptive technologies transforming industries",
    icon: "/icons/icon_ai.svg",
  },
  {
    name: "Web3 & Blockchain",
    category: "Web3",
    description: "Decentralized enterprise resource management solutions",
    icon: "/icons/icon_web3.svg",
  },
  {
    name: "Healthcare",
    category: "Healthtech",
    description: "Patient care and medical efficiency innovations",
    icon: "/icons/icon_health.svg",
  },
  {
    name: "Logistics",
    category: "Supply Chain",
    description: "Supply chain and transportation optimization",
    icon: "/icons/icon_logistics.svg",
  },
  {
    name: "Analytics",
    category: "Data",
    description: "Transforming data into actionable business insights",
    icon: "/icons/icon_analytics.svg",
  },
  {
    name: "BPO & Services",
    category: "Enterprise",
    description: "Outsourced business process support and automation",
    icon: "/icons/icon_enterprise.svg",
  },
];

export default function PortfolioSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 lg:py-48 bg-[#fafafa] dark:bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
              Focus Industries
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.15]">
              Sectors we're
              <br />
              <span className="font-medium">actively exploring</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/ventures">
              <span className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2 group">
                View our portfolio
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 dark:bg-gray-800">
          {focusIndustries.map((industry, index) => (
            <motion.div
              key={industry.name}
              className="bg-[#fafafa] dark:bg-[#0a0a0a] p-10 lg:p-12 group cursor-pointer hover:bg-white dark:hover:bg-[#111] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
            >
              <div className="flex items-start justify-between mb-8">
                <span className="text-xs tracking-[0.2em] text-gray-400 uppercase">
                  {industry.category}
                </span>
                <div className="relative w-12 h-12">
                  <Image
                    src={industry.icon}
                    alt={industry.name}
                    fill
                    className="object-contain dark:invert transition-all duration-300"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                {industry.name}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* What we provide */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { label: "Mentorship", value: "1:1" },
            { label: "Focus Areas", value: "6" },
            { label: "Network Reach", value: "Global" },
            { label: "HQ Location", value: "Makati" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-2">
                {stat.value}
              </p>
              <p className="text-xs tracking-[0.2em] text-gray-400 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
