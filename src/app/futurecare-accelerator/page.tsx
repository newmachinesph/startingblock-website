"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const programStats = [
  { value: "12", label: "Week Program" },
  { value: "1-on-1", label: "Expert Mentorship" },
  { value: "AI × Health", label: "Focus Area" },
];

const programPillars = [
  {
    title: "Capital Access",
    description: "Seed funding and follow-on investment opportunities from our network of healthcare-focused VCs and strategic investors.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Clinical Advisors",
    description: "Direct mentorship from practicing physicians, healthcare executives, and industry specialists who understand the clinical landscape.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Regulatory Support",
    description: "Navigate FDA, DOH, and ASEAN regulatory pathways with expert guidance on compliance, certifications, and market entry strategies.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Enterprise Access",
    description: "Warm introductions to hospitals, HMOs, pharmaceutical companies, and healthcare systems actively seeking innovation partners.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Incub8Space Infrastructure",
    description: "Access to dedicated workspace, development tools, secure sandboxes for health data, and operational infrastructure.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Go-to-Market Strategy",
    description: "Develop pricing models, distribution strategies, and pilot programs tailored to the healthcare ecosystem.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const focusAreas = [
  {
    title: "AI Diagnostics",
    description: "Machine learning solutions for medical imaging, pathology, and early disease detection.",
  },
  {
    title: "Remote Patient Monitoring",
    description: "Connected devices and platforms for continuous health tracking and telemedicine.",
  },
  {
    title: "Clinical Workflow",
    description: "Automation tools that reduce administrative burden and improve care delivery efficiency.",
  },
  {
    title: "Health Data Analytics",
    description: "Platforms that unlock insights from electronic health records and population health data.",
  },
  {
    title: "Mental Health Tech",
    description: "Digital therapeutics, wellness apps, and AI-powered mental health interventions.",
  },
  {
    title: "Pharmaceutical Tech",
    description: "Drug discovery acceleration, clinical trial optimization, and supply chain innovation.",
  },
];

const timeline = [
  {
    phase: "Phase 1",
    weeks: "Weeks 1-3",
    title: "Clinical Immersion",
    description: "Deep dive into the healthcare ecosystem. Meet clinical advisors, audit regulatory requirements, and validate your solution with healthcare practitioners.",
  },
  {
    phase: "Phase 2",
    weeks: "Weeks 4-7",
    title: "Build & Validate",
    description: "Iterate on your product with clinical feedback. Develop compliance roadmaps and begin integration discussions with healthcare partners.",
  },
  {
    phase: "Phase 3",
    weeks: "Weeks 8-10",
    title: "Pilot & Scale",
    description: "Launch pilot programs with enterprise partners. Gather real-world evidence and begin commercial conversations.",
  },
  {
    phase: "Phase 4",
    weeks: "Weeks 11-12",
    title: "Investment Ready",
    description: "Prepare data room, refine investor pitch, and get introduced to healthcare-focused VCs and strategic investors.",
  },
];

const eligibility = [
  "Building AI-powered or technology-driven healthcare solutions",
  "Early-stage (pre-seed to Series A)",
  "Strong technical founding team (2+ co-founders preferred)",
  "Clear path to regulatory compliance",
  "Committed to serving the Philippines / ASEAN market",
  "Available for the full 12-week program",
];

const partners = [
  {
    name: "Starting Block Ventures",
    role: "Venture Partner",
    description: "Capital, clinical mentors, and enterprise access to help FutureCare founders validate faster.",
  },
  {
    name: "MedProjects Healthcare IT Solutions",
    role: "Healthcare Acumen",
    description: "Helping hospitals and healthcare organizations achieve better outcomes from IT systems and processes.",
    url: "https://medprojects.com/",
  },
  {
    name: "Incub8Space",
    role: "Workspace Partner",
    description: "Operator-built offices, collaboration zones, and virtual services powering the cohort.",
    url: "https://incub8space.com/",
  },
];

export default function FutureCareAcceleratorPage() {
  const heroRef = useRef(null);
  const partnersRef = useRef(null);
  const pillarsRef = useRef(null);
  const focusRef = useRef(null);
  const timelineRef = useRef(null);
  const eligibilityRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const partnersInView = useInView(partnersRef, { once: true, margin: "-100px" });
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-100px" });
  const focusInView = useInView(focusRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  const eligibilityInView = useInView(eligibilityRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <>
      <Header variant="light" />
      <main className="bg-white dark:bg-black">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black"
        >
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-gray-600 dark:text-gray-300">
                Cohort 1.0 — Now Accepting Applications
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              FutureCare
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              AI × HealthTech Accelerator
            </motion.p>

            <motion.p
              className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A 12-week program connecting HealthTech founders with clinical mentors,
              regulatory experts, and enterprise buyers across the Philippines and ASEAN.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-12 md:gap-16 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {programStats.map((stat) => (
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

            {/* CTA */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/apply"
                className="inline-block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm tracking-wide rounded-full hover:opacity-90 transition-opacity"
              >
                Apply Now
              </Link>
              <a
                href="#program"
                className="inline-block px-8 py-4 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-sm tracking-wide rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </section>

        {/* Partners Section */}
        <section ref={partnersRef} className="py-24 lg:py-32 bg-[#fafafa] dark:bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={partnersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
                FutureCare
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white">
                Accelerator Enablers
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {partners.map((partner, index) => {
                const CardWrapper = partner.url ? "a" : "div";
                const linkProps = partner.url
                  ? { href: partner.url, target: "_blank", rel: "noopener noreferrer" }
                  : {};
                return (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={partnersInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CardWrapper
                      {...linkProps}
                      className={`relative block p-8 bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-gray-800 h-full ${
                        partner.url
                          ? "hover:border-gray-300 dark:hover:border-gray-600 transition-colors group"
                          : ""
                      }`}
                    >
                      {partner.url && (
                        <svg
                          className="absolute top-6 right-6 w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                      <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-3">
                        {partner.role}
                      </p>
                      <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                        {partner.name}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                        {partner.description}
                      </p>
                    </CardWrapper>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Program Pillars */}
        <section ref={pillarsRef} id="program" className="py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
                What You Get
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white mb-4">
                Built for HealthTech Founders
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Everything you need to navigate the unique challenges of building
                healthcare technology in Southeast Asia.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programPillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  className="p-8 border border-gray-100 dark:border-gray-800 rounded-2xl hover:border-gray-200 dark:hover:border-gray-700 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Focus Areas */}
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
                Focus Areas
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white mb-4">
                Where AI Meets Healthcare
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                We're looking for founders building solutions across the healthcare value chain.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  className="p-6 bg-white dark:bg-black rounded-2xl border border-gray-100 dark:border-gray-800"
                  initial={{ opacity: 0, y: 30 }}
                  animate={focusInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section ref={timelineRef} className="py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
                Program Timeline
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white">
                12 Weeks to Market
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-xs font-medium tracking-[0.1em] text-gray-900 dark:text-white uppercase bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                      {phase.phase}
                    </span>
                    <span className="text-xs text-gray-400">
                      {phase.weeks}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section
          ref={eligibilityRef}
          className="py-24 lg:py-32 bg-[#fafafa] dark:bg-[#0a0a0a]"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={eligibilityInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
                  Who Should Apply
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.2] mb-6">
                  Is FutureCare right for you?
                </h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                  We're looking for ambitious founders building AI-powered healthcare
                  solutions with the potential to transform patient outcomes across
                  Southeast Asia.
                </p>
                <ul className="space-y-4">
                  {eligibility.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                      <svg className="w-5 h-5 text-gray-900 dark:text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-black rounded-3xl p-10 lg:p-12 border border-gray-100 dark:border-gray-800"
                initial={{ opacity: 0, x: 40 }}
                animate={eligibilityInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                  Why FutureCare?
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white mb-1">
                      Healthcare Expertise
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Deep industry connections with hospitals, HMOs, and pharma companies.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white mb-1">
                      Regulatory Navigation
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Expert guidance through FDA, DOH, and ASEAN regulatory pathways.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white mb-1">
                      Market Access
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Direct introductions to enterprise buyers ready for pilot programs.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white mb-1">
                      Capital Network
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      Access to healthcare-focused VCs and strategic investors across ASEAN.
                    </p>
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
              Ready to build the future of healthcare?
            </motion.h2>
            <motion.p
              className="text-gray-400 dark:text-gray-600 mb-10 max-w-xl mx-auto text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Applications for Cohort 1.0 are now open. Join the program that's
              designed specifically for HealthTech founders.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link
                href="/apply"
                className="inline-block px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm tracking-wide rounded-full hover:opacity-90 transition-opacity"
              >
                Apply to FutureCare
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 border border-white/30 dark:border-gray-900/30 text-white dark:text-gray-900 text-sm tracking-wide rounded-full hover:bg-white/10 dark:hover:bg-gray-900/10 transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
