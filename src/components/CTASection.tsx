"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function CTASection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 lg:py-48 bg-gray-900 dark:bg-black overflow-hidden"
    >
      {/* Subtle gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-8">
            Let's Connect
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-white leading-[1.1] mb-8">
            Tell us about your
            <br />
            <span className="font-medium">startup idea</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you're a founder with a bold idea, an investor seeking deal flow,
            or a partner interested in collaboration—we'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply">
              <motion.button
                className="px-10 py-5 bg-white text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-100 transition-colors font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Application
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                className="px-10 py-5 border border-gray-700 text-white text-sm tracking-wide rounded-full hover:border-gray-500 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Discovery Call
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-gray-500">
            Contact us at hello@sbv.one • Makati, Philippines
          </p>
        </motion.div>
      </div>
    </section>
  );
}
