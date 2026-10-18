"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const services = [
  {
    id: "ventures",
    title: "Ventures",
    subtitle: "The Innovation Engine",
    description:
      "We identify and build high-tech, early-stage startups with a merit-driven approach. Our approach dismantles the \"closed network\" of traditional corporate venture capital, focusing on frontier technologies relevant to strategic goals.",
    capabilities: [
      "Merit-Driven Selection",
      "Frontier Technologies",
      "Strategic Alignment",
      "Hands-On Building",
    ],
    link: "/ventures",
  },
  {
    id: "pitch",
    title: "Pitch",
    subtitle: "The Global Lens",
    description:
      "Our democratized digital platform ensures the most promising founders are discovered by a global network of investors, removing barriers for talent in the Philippines and greater ASEAN.",
    capabilities: [
      "Global Discovery",
      "Democratized Access",
      "Investor Network",
      "Barrier Removal",
    ],
    link: "/pitch",
  },
  {
    id: "inspace",
    title: "InSpace",
    subtitle: "The Community Footprint",
    description:
      "We build thriving offline communities through curated events. This engages the local tech ecosystem, positions our partners as innovation leaders, and creates a powerful talent and deal-flow magnet.",
    capabilities: [
      "Grit Chronicles",
      "InSpace Pitch",
      "Live Streaming",
      "Franchise Network",
    ],
    link: "/inspace",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 lg:py-48 bg-white dark:bg-[#111]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.15] max-w-3xl">
            Our complete
            <br />
            <span className="font-medium">startup ecosystem</span>
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="border-t border-gray-200 dark:border-gray-800">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="border-b border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <Link href={service.link}>
                <div className="py-12 lg:py-16 group cursor-pointer">
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Number & Title */}
                    <div className="lg:col-span-4">
                      <div className="flex items-baseline gap-6">
                        <span className="text-xs tracking-[0.2em] text-gray-300 dark:text-gray-600">
                          0{index + 1}
                        </span>
                        <div>
                          <h3 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-400 mt-1">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-5">
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Capabilities */}
                    <div className="lg:col-span-3">
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0.5 }}
                        animate={{
                          opacity: activeService === service.id ? 1 : 0.5,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.capabilities.map((cap) => (
                          <p
                            key={cap}
                            className="text-sm text-gray-400 dark:text-gray-500"
                          >
                            {cap}
                          </p>
                        ))}
                      </motion.div>
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <motion.div
                    className="mt-8 flex justify-end"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{
                      x: activeService === service.id ? 0 : -10,
                      opacity: activeService === service.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
