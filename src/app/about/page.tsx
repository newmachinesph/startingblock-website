"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const values = [
  {
    title: "Merit-Driven",
    description:
      "We believe the best ideas should win, regardless of background. Our selection process focuses purely on potential and execution capability.",
  },
  {
    title: "Co-Building",
    description:
      "We don't just invest—we roll up our sleeves and build alongside founders. From strategy to operations, we're in the trenches with you.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "Building great companies takes time. We're committed to supporting founders through every stage of their journey.",
  },
  {
    title: "Global Mindset",
    description:
      "While rooted in the Philippines, we think globally. Our network spans ASEAN, Greater China, and beyond.",
  },
];

const team = [
  {
    name: "Ryan Sy",
    role: "Founder & Managing Partner",
    bio: "Entrepreneur and ecosystem builder passionate about developing the Philippine startup scene.",
  },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const valuesRef = useRef(null);
  const storyRef = useRef(null);
  const teamRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });

  return (
    <>
      <Header variant="light" />
      <main className="bg-white dark:bg-black">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.p
              className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              About Us
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Building startups
              <br />
              <span className="font-medium">together</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Starting Block Ventures is a venture studio based in Makati, Philippines.
              We champion companies bold enough to reinvent how we live.
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section
          ref={storyRef}
          className="py-24 lg:py-32 bg-[#fafafa] dark:bg-[#0a0a0a]"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
                  Our Story
                </p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white leading-[1.2]">
                  From service provider to{" "}
                  <span className="font-medium">ecosystem architect</span>
                </h2>
              </motion.div>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 40 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  Starting Block Ventures was founded in 2024 with a clear mission:
                  to empower early-stage startups with mentorship, resources, and
                  networking to transform innovative ideas into successful businesses.
                </p>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  We evolved from being service providers to becoming ecosystem architects—
                  building the infrastructure that helps founders thrive. Our three pillars—
                  Ventures, Pitch, and InSpace—work together to create a comprehensive
                  support system for the next generation of entrepreneurs.
                </p>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  Based in Makati, Philippines, we focus on six key industries:
                  Fintech, Healthtech, SaaS, Climatetech, AI, and Consumer. Our reach
                  extends across ASEAN and Greater China, connecting founders with
                  global opportunities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="py-24 lg:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
                Our Values
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white">
                What drives us
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="p-8 lg:p-12 border border-gray-100 dark:border-gray-800 rounded-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section
          ref={teamRef}
          className="py-24 lg:py-32 bg-[#fafafa] dark:bg-[#0a0a0a]"
        >
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] text-gray-400 uppercase mb-6">
                Leadership
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white">
                Meet the team
              </h2>
            </motion.div>

            <div className="flex justify-center">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="text-center max-w-sm"
                  initial={{ opacity: 0, y: 30 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-200 dark:bg-gray-800" />
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{member.role}</p>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="py-24 lg:py-32 border-t border-gray-100 dark:border-gray-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Ready to build something great?
            </motion.h2>
            <motion.p
              className="text-gray-500 dark:text-gray-400 mb-10 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              We're always looking for exceptional founders with bold ideas.
            </motion.p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm tracking-wide rounded-full hover:opacity-90 transition-opacity"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
