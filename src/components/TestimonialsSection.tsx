"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const valueProps = [
  {
    quote:
      "The InSpace pillar transforms brand identity. By hosting curated tech events, you move beyond being just another company to become the central hub for the Philippine tech community.",
    highlight: "Ecosystem Architect",
    detail: "From service provider to community leader",
  },
  {
    quote:
      "Attract top talent by becoming the go-to destination for the brightest engineers and builders in the country. The best founders and ideas will come to you first.",
    highlight: "Attract Top Talent",
    detail: "Generate organic deal flow",
  },
  {
    quote:
      "Strengthen enterprise relationships by showcasing cutting-edge solutions and fostering a community around innovation. Engage clients through thought leadership.",
    highlight: "Enterprise Relationships",
    detail: "Build through community",
  },
];

const inSpaceEvents = [
  {
    name: "Grit Chronicles",
    description: "45-min founder interviews diving into the blood, sweat, and tears of entrepreneurship",
  },
  {
    name: "InSpace Pitch",
    description: "5-7 min pitches with group Q&A from in-person and global online audiences",
  },
  {
    name: "Hybrid Streaming",
    description: "Live broadcast to global viewers with interactive chat and on-demand archives",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  // Track visibility to pause auto-rotate when offscreen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsSectionVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate through value props every 5 seconds, only when visible
  useEffect(() => {
    if (!isSectionVisible) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % valueProps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isSectionVisible]);

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
            The Vision
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.15] max-w-3xl">
            From Service Provider
            <br />
            <span className="font-medium">to Ecosystem Architect</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Quote */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.blockquote
              key={activeIndex}
              className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 dark:text-white leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {valueProps[activeIndex].quote}
            </motion.blockquote>

            <motion.div
              className="mt-12"
              key={`author-${activeIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {valueProps[activeIndex].highlight}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                {valueProps[activeIndex].detail}
              </p>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <div className="lg:col-span-4 flex lg:flex-col lg:justify-end gap-4">
            {valueProps.map((_, index) => (
              <motion.button
                key={index}
                className={`relative w-full h-1 lg:h-auto lg:w-1 lg:flex-1 overflow-hidden transition-colors ${
                  index === activeIndex
                    ? "bg-gray-200 dark:bg-gray-700"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {index === activeIndex && (
                  <motion.div
                    className="absolute inset-0 bg-gray-900 dark:bg-white origin-left lg:origin-bottom"
                    initial={{ scaleX: 0, scaleY: 1 }}
                    animate={{ scaleX: 1, scaleY: 1 }}
                    transition={{ duration: 5, ease: "linear" }}
                    style={{ originX: 0, originY: 1 }}
                    key={`progress-${activeIndex}`}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* InSpace Events Preview */}
        <motion.div
          className="mt-24 pt-16 border-t border-gray-200 dark:border-gray-800"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase text-center mb-12">
            InSpace Event Formats • Twice Monthly per Location
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {inSpaceEvents.map((event, index) => (
              <motion.div
                key={event.name}
                className="text-center p-8 bg-gray-50 dark:bg-gray-900/50 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  {event.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
