"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const programHighlights = [
  {
    value: "12",
    unit: "Weeks",
    label: "Intensive Program",
  },
  {
    value: "1-on-1",
    unit: "",
    label: "Expert Mentorship",
  },
  {
    value: "25+",
    unit: "",
    label: "Industry Partners",
  },
];

const programBenefits = [
  {
    title: "Go-to-Market Support",
    description: "Hands-on help with product positioning, customer discovery, and market entry strategies tailored to your vertical.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Industry Access",
    description: "Direct connections to 25+ enterprise partners for pilots, partnerships, and customer acquisition.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Expert Mentorship",
    description: "One-on-one guidance from experienced operators, industry executives, and domain specialists.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Regulatory Guidance",
    description: "Navigate complex regulatory landscapes with expert guidance on compliance and certifications.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Infrastructure & Tools",
    description: "Access to workspace, development tools, secure sandboxes, and operational infrastructure.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Investor Network",
    description: "Warm introductions to our network of VCs, angels, and strategic investors across ASEAN.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const timeline = [
  {
    weeks: "Weeks 1-2",
    title: "Discovery & Immersion",
    description: "Deep dive into your market, validate assumptions, and audit your current position with our team.",
  },
  {
    weeks: "Weeks 3-6",
    title: "Build & Iterate",
    description: "Co-design solutions with industry partners, develop prototypes, and refine your product-market fit.",
  },
  {
    weeks: "Weeks 7-10",
    title: "Pilot & Scale",
    description: "Launch pilots with enterprise partners, gather real-world feedback, and begin scaling operations.",
  },
  {
    weeks: "Weeks 11-12",
    title: "Capital & Launch",
    description: "Prepare your data room, refine your pitch, and get introduced to investors for your next round.",
  },
];

const eligibility = [
  "Early-stage startup (pre-seed to Series A)",
  "Technology-driven solution with clear innovation",
  "Committed founding team (at least 2 co-founders)",
  "Operating or planning to operate in ASEAN",
  "Open to mentorship and willing to iterate",
  "Available for the full 12-week program",
];

export default function ApplyPage() {
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const timelineRef = useRef(null);
  const formRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    founderName: "",
    email: "",
    startupName: "",
    website: "",
    stage: "",
    industry: "",
    location: "",
    teamSize: "",
    pitch: "",
    support: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.details || "Failed to submit application");
      }

      setIsSubmitted(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error";
      setError(`Something went wrong: ${message}. Please try again or email us directly at hello@sbv.one`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              Apply Now
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Join the SBV
              <br />
              <span className="font-medium">Accelerator</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A 12-week intensive program designed to help founders validate and scale
              their solutions. We provide capital, mentorship, industry access, and
              infrastructure to accelerate your growth.
            </motion.p>

            {/* Program Highlights */}
            <motion.div
              className="flex flex-wrap justify-center gap-12 md:gap-16"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {programHighlights.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-1">
                    {stat.value}
                    <span className="text-lg">{stat.unit}</span>
                  </p>
                  <p className="text-xs tracking-[0.15em] text-gray-400 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
                What You Get
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white">
                Everything you need to scale
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="p-8 border border-gray-100 dark:border-gray-800 rounded-2xl hover:border-gray-200 dark:hover:border-gray-700 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section
          ref={timelineRef}
          className="py-24 lg:py-32 bg-[#fafafa] dark:bg-[#0a0a0a]"
        >
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
                12 weeks to transform your startup
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((phase, index) => (
                <motion.div
                  key={phase.weeks}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="mb-4">
                    <span className="text-xs tracking-[0.2em] text-gray-400 uppercase">
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

        {/* Eligibility Section */}
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
                  Who Should Apply
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.2] mb-6">
                  Are you the right fit?
                </h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                  We're looking for ambitious founders building technology-driven solutions
                  with the potential to transform industries. If you're committed to building
                  something meaningful, we want to hear from you.
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
                className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 lg:p-12"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                  Focus Industries
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  We invest across these sectors:
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Fintech", "Healthtech", "AI / ML", "SaaS", "Climatetech", "Consumer", "Web3", "Enterprise"].map((industry) => (
                    <span
                      key={industry}
                      className="px-4 py-2 bg-white dark:bg-black rounded-full text-sm text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section
          ref={formRef}
          id="form"
          className="py-24 lg:py-32 bg-[#fafafa] dark:bg-[#0a0a0a]"
        >
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
                Application
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white mb-4">
                Tell us about your startup
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                We review every application thoroughly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {isSubmitted ? (
                <div className="bg-white dark:bg-black rounded-3xl p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-900 dark:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-3">
                    Application received!
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">
                    Thank you for applying to the SBV Accelerator. We'll review your
                    application and get back to you soon.
                  </p>
                  <a
                    href="/"
                    className="inline-block text-gray-900 dark:text-white font-medium hover:opacity-70 transition-opacity"
                  >
                    Back to Home
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white dark:bg-black rounded-3xl p-8 lg:p-12 space-y-8">
                  {/* Founder Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="founderName" className="block text-xs tracking-[0.2em] text-gray-400 uppercase mb-3">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="founderName"
                        name="founderName"
                        value={formData.founderName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs tracking-[0.2em] text-gray-400 uppercase mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
                        placeholder="you@startup.com"
                      />
                    </div>
                  </div>

                  {/* Startup Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="startupName" className="block text-xs tracking-[0.2em] text-gray-400 uppercase mb-3">
                        Startup Name *
                      </label>
                      <input
                        type="text"
                        id="startupName"
                        name="startupName"
                        value={formData.startupName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
                        placeholder="Your startup"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-xs tracking-[0.2em] text-gray-400 uppercase mb-3">
                        Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
                        placeholder="https://..."
                      />
                    </div>
                  </div>

                  {/* Stage & Industry */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="stage" className="block text-xs tracking-[0.2em] text-gray-400 uppercase mb-3">
                        Stage *
                      </label>
                      <select
                        id="stage"
                        name="stage"
                        value={formData.stage}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
                      >
                        <option value="">Select stage</option>
                        <option value="idea">Idea / Concept</option>
                        <option value="mvp">MVP / Prototype</option>
                        <option value="pre-seed">Pre-seed</option>
                        <option value="seed">Seed</option>
                        <option value="series-a">Series A</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="industry" className="block text-xs tracking-[0.2em] text-gray-400 uppercase mb-3">
                        Industry *
                      </label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
                      >
                        <option value="">Select industry</option>
                        <option value="fintech">Fintech</option>
                        <option value="healthtech">Healthtech</option>
                        <option value="ai">AI / ML</option>
                        <option value="saas">SaaS</option>
                        <option value="climatetech">Climatetech</option>
                        <option value="consumer">Consumer</option>
                        <option value="web3">Web3</option>
                        <option value="enterprise">Enterprise</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Location & Team */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="location" className="block text-xs tracking-[0.2em] text-gray-400 uppercase mb-3">
                        Location *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
                        placeholder="City, Country"
                      />
                    </div>
                    <div>
                      <label htmlFor="teamSize" className="block text-xs tracking-[0.2em] text-gray-400 uppercase mb-3">
                        Team Size *
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
                      >
                        <option value="">Select size</option>
                        <option value="1">Solo founder</option>
                        <option value="2-5">2-5 people</option>
                        <option value="6-10">6-10 people</option>
                        <option value="11-25">11-25 people</option>
                        <option value="25+">25+ people</option>
                      </select>
                    </div>
                  </div>

                  {/* Pitch */}
                  <div>
                    <label htmlFor="pitch" className="block text-xs tracking-[0.2em] text-gray-400 uppercase mb-3">
                      Tell us about your startup *
                    </label>
                    <textarea
                      id="pitch"
                      name="pitch"
                      value={formData.pitch}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors resize-none"
                      placeholder="What problem are you solving? What's your solution? What traction do you have?"
                    />
                  </div>

                  {/* Support Needed */}
                  <div>
                    <label htmlFor="support" className="block text-xs tracking-[0.2em] text-gray-400 uppercase mb-3">
                      What support do you need?
                    </label>
                    <textarea
                      id="support"
                      name="support"
                      value={formData.support}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors resize-none"
                      placeholder="Funding, mentorship, industry connections, technical support..."
                    />
                  </div>

                  {error && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                      <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm tracking-wide rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    By submitting, you agree to our{" "}
                    <a href="/legal" className="underline hover:text-gray-600 dark:hover:text-gray-300">
                      Terms & Privacy Policy
                    </a>
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
