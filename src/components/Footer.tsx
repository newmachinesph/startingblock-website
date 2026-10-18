"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const footerLinks: { key: string; label: React.ReactNode; href: string }[] = [
  { key: "about", label: "About", href: "/about" },
  { key: "ventures", label: "Ventures", href: "/ventures" },
  // { key: "futurecare", label: <>FutureCare<sup className="text-[0.6em] ml-0.5 align-super">1.0</sup></>, href: "/futurecare-accelerator" },
  { key: "pitch", label: "Pitch", href: "/pitch" },
  { key: "inspace", label: "InSpace", href: "/inspace" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/starting-block-ventures/" },
  { label: "Facebook", href: "https://www.facebook.com/startingblockventures" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleNewsletterSubmit(e: FormEvent) {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      if (!res.ok) throw new Error();
      setNewsletterStatus("success");
      setNewsletterEmail("");
    } catch {
      setNewsletterStatus("error");
    }
  }

  return (
    <footer className="relative bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link href="/">
              <motion.div
                className="relative h-8 w-44"
                whileHover={{ opacity: 0.7 }}
              >
                <Image src="/sbv_logo_dark.svg" alt="StartingBlock Ventures" fill className="object-contain object-left dark:hidden" />
                <Image src="/sbv_logo.svg" alt="StartingBlock Ventures" fill className="object-contain object-left hidden dark:block" />
              </motion.div>
            </Link>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              Empowering early-stage startups with mentorship, resources, and
              networking to transform innovative ideas into successful businesses.
            </p>

            {/* Connect */}
            <div className="mt-8 space-y-2">
              <a
                href="mailto:hello@sbv.one"
                className="block text-sm text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                hello@sbv.one
              </a>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Makati, Philippines
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
              Navigation
            </p>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
              Connect
            </p>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-6">
              Stay Updated
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Subscribe for insights and opportunities.
            </p>
            {newsletterStatus === "success" ? (
              <p className="text-sm text-green-600 dark:text-green-400">Subscribed! Thank you.</p>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors text-sm rounded-full"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === "loading"}
                  className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50"
                >
                  {newsletterStatus === "loading" ? "..." : "Subscribe"}
                </button>
              </form>
            )}
            {newsletterStatus === "error" && (
              <p className="text-sm text-red-500 mt-2">Something went wrong. Please try again.</p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-gray-100 dark:border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400 dark:text-gray-500">
              © {new Date().getFullYear()} Starting Block Ventures. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
