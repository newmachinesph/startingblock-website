"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const eventFormats = [
  {
    title: "Grit Chronicles",
    description:
      "Intimate fireside chats with successful founders sharing their raw, unfiltered journeys—the struggles, pivots, and breakthroughs that shaped their companies.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    title: "InSpace Pitch",
    description:
      "Live pitch sessions where startups present to a panel of investors and industry experts. Real feedback, real connections, real opportunities.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: "Breakpoints.live",
    description:
      "Live-streamed tech events and conversations broadcast to the community. Tune in from anywhere and engage with founders, builders, and innovators in real time.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: "For Founders",
    items: [
      "Network with investors and industry leaders",
      "Learn from experienced entrepreneurs",
      "Showcase your startup to the community",
      "Find co-founders and early team members",
    ],
  },
  {
    title: "For Investors",
    items: [
      "Discover promising startups early",
      "Meet founders in person",
      "Connect with other investors",
      "Stay ahead of market trends",
    ],
  },
  {
    title: "For Partners",
    items: [
      "Position as innovation leaders",
      "Access top talent pipeline",
      "Build enterprise relationships",
      "Engage with the tech ecosystem",
    ],
  },
];

const stats = [
  { value: "20+", label: "Events Hosted" },
  { value: "1,000+", label: "Community Members" },
  { value: "Makati", label: "HQ Location" },
  { value: "ASEAN", label: "Expansion Plan" },
];

export default function InSpacePage() {
  const heroRef = useRef(null);
  const eventsRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const eventsInView = useInView(eventsRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });
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
              InSpace
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              The Community
              <br />
              <span className="font-medium">Footprint</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We build thriving offline communities through curated events. This engages
              the local tech ecosystem, positions our partners as innovation leaders,
              and creates a powerful talent and deal-flow magnet.
            </motion.p>

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

            <motion.div
              className="mt-16 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/startingblock-inspace.jpg"
                  alt="Starting Block Ventures InSpace Event"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Event Formats Section */}
        <section ref={eventsRef} className="py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={eventsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
                Event Formats
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white">
                How we bring the community together
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {eventFormats.map((format, index) => (
                <motion.div
                  key={format.title}
                  className="p-8 lg:p-10 border border-gray-100 dark:border-gray-800 rounded-2xl hover:border-gray-200 dark:hover:border-gray-700 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  animate={eventsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 mb-6">
                    {format.icon}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                    {format.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    {format.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-center text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={eventsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              From panel discussions on AI and Web3 to deep-dive sessions with
              industry pioneers—we attract innovation-frontier talent to deliver
              thought leadership and expertise. Our goal is to be the go-to
              destination for insights on the technologies shaping the future.
            </motion.p>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          ref={benefitsRef}
          className="py-24 lg:py-32 bg-[#fafafa] dark:bg-[#0a0a0a]"
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
                Who Benefits
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white">
                Something for everyone
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="bg-white dark:bg-black p-8 lg:p-10 rounded-2xl border border-gray-100 dark:border-gray-800"
                  initial={{ opacity: 0, y: 30 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
                    {benefit.title}
                  </h3>
                  <ul className="space-y-4">
                    {benefit.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-500 dark:text-gray-400">
                        <svg className="w-5 h-5 text-gray-900 dark:text-white mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events Placeholder */}
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
                  Join Us
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.2] mb-6">
                  Be part of the
                  <br />
                  <span className="font-medium">community</span>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                  Whether you're a founder, investor, or tech enthusiast, InSpace
                  events are your gateway to the Philippine and ASEAN startup ecosystem.
                  Join us at our next event and connect with like-minded individuals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Makati, Philippines</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Monthly events & special sessions</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>hello@sbv.one</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 lg:p-12"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                  Stay in the loop
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8">
                  Get notified about upcoming events, speaker announcements, and community news.
                </p>
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm tracking-wide rounded-full hover:opacity-90 transition-opacity"
                >
                  Join the Community
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
              Want to host or sponsor an event?
            </motion.h2>
            <motion.p
              className="text-gray-400 dark:text-gray-600 mb-10 max-w-xl mx-auto text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Partner with InSpace to engage the tech ecosystem and position your
              brand as an innovation leader.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm tracking-wide rounded-full hover:opacity-90 transition-opacity"
              >
                Partner with Us
              </a>
              <a
                href="mailto:hello@sbv.one"
                className="inline-block px-8 py-4 border border-white/30 dark:border-gray-900/30 text-white dark:text-gray-900 text-sm tracking-wide rounded-full hover:bg-white/10 dark:hover:bg-gray-900/10 transition-colors"
              >
                Email Us
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
