"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const contactInfo = [
  {
    label: "Email",
    value: "hello@sbv.one",
    href: "mailto:hello@sbv.one",
  },
  {
    label: "Location",
    value: "Makati, Philippines",
    href: null,
  },
  {
    label: "LinkedIn",
    value: "Starting Block Ventures",
    href: "https://www.linkedin.com/company/starting-block-ventures/",
  },
];

const faqs = [
  {
    question: "What types of startups does Starting Block Ventures support?",
    answer:
      "Starting Block Ventures supports early-stage startups that focus on technology-driven solutions across various industries. Our primary focus areas include Fintech, Healthtech, SaaS, Climatetech, AI, and Consumer tech.",
  },
  {
    question: "What resources does Starting Block provide to participating startups?",
    answer:
      "We offer personalized mentorship, access to funding, workshops on critical business skills, and connections to a vast network of investors and industry leaders across ASEAN and Greater China.",
  },
  {
    question: "How long is the Starting Block Ventures program?",
    answer:
      "The duration of the Starting Block program varies, but it typically runs for several months, during which startups receive intensive support and resources tailored to their specific needs and stage.",
  },
  {
    question: "How can I apply to join the Starting Block program?",
    answer:
      "You can apply through our contact form or email us directly at hello@sbv.one. We screen all startup applications thoroughly. Please provide comprehensive information about your startup including your team, traction, and vision.",
  },
  {
    question: "Does Starting Block Ventures take equity in startups?",
    answer:
      "Our investment terms vary depending on the level of involvement and resources provided. We discuss equity arrangements on a case-by-case basis during our evaluation process.",
  },
  {
    question: "What regions does Starting Block Ventures focus on?",
    answer:
      "While we are headquartered in Makati, Philippines, our focus extends across ASEAN and Greater China. We work with founders who are building solutions for these markets or have global ambitions.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-gray-200 dark:border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg text-gray-900 dark:text-white pr-8 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-400"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-500 dark:text-gray-400 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ContactPage() {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const faqRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    type: "general",
    website: "", // honeypot
  });
  const formLoadedAt = useRef(Date.now());

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Honeypot check — if bot filled the hidden field, silently "succeed"
    if (formData.website) {
      setIsSubmitted(true);
      return;
    }

    const { website: _hp, ...submitData } = formData;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...submitData,
          _t: formLoadedAt.current,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.details || "Failed to send message");
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
          className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-16"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.p
              className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Contact
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Let's start a
              <br />
              <span className="font-medium">conversation</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Whether you're a founder with a bold idea or looking to collaborate,
              we'd love to hear from you.
            </motion.p>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={formRef} className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl md:text-3xl font-light tracking-tight text-gray-900 dark:text-white mb-8">
                  Get in touch
                </h2>

                <div className="space-y-8 mb-12">
                  {contactInfo.map((item) => (
                    <div key={item.label}>
                      <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-2">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-lg text-gray-900 dark:text-white hover:opacity-70 transition-opacity"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg text-gray-900 dark:text-white">
                          {item.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-[#fafafa] dark:bg-[#0a0a0a] rounded-2xl">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    For Founders
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                    Have a startup idea? We're always looking for exceptional founders
                    building in our focus areas: Fintech, Healthtech, SaaS, Climatetech, AI, and Consumer.
                  </p>
                  <a
                    href="/apply"
                    className="inline-flex items-center text-sm text-gray-900 dark:text-white font-medium hover:opacity-70 transition-opacity"
                  >
                    Apply to SBV
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {isSubmitted ? (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
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
                        Message sent!
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        We'll get back to you as soon as possible.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot — hidden from humans, bots will fill it */}
                    <div className="absolute opacity-0 pointer-events-none" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="type"
                        className="block text-xs tracking-[0.2em] text-gray-400 uppercase mb-3"
                      >
                        I am a...
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="founder">Founder / Startup</option>
                        <option value="investor">Investor</option>
                        <option value="partner">Potential Partner</option>
                        <option value="media">Media / Press</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs tracking-[0.2em] text-gray-400 uppercase mb-3"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs tracking-[0.2em] text-gray-400 uppercase mb-3"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs tracking-[0.2em] text-gray-400 uppercase mb-3"
                      >
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs tracking-[0.2em] text-gray-400 uppercase mb-3"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors resize-none"
                        placeholder="Tell us about your project or inquiry..."
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
                      className="w-full mt-8 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm tracking-wide rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          ref={faqRef}
          id="faq"
          className="py-24 lg:py-32 bg-[#fafafa] dark:bg-[#0a0a0a]"
        >
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white">
                Frequently asked questions
              </h2>
            </motion.div>

            <div className="border-t border-gray-200 dark:border-gray-800">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} index={index} />
              ))}
            </div>

            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Still have questions?
              </p>
              <a
                href="mailto:hello@sbv.one"
                className="inline-flex items-center text-gray-900 dark:text-white font-medium hover:opacity-70 transition-opacity"
              >
                Email us directly
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
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
