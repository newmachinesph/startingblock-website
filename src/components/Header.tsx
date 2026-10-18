"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems: { key: string; label: React.ReactNode; href: string }[] = [
  { key: "ventures", label: "Ventures", href: "/ventures" },
  // { key: "futurecare", label: <>FutureCare<sup className="text-[0.6em] ml-0.5 align-super">1.0</sup></>, href: "/futurecare-accelerator" },
  { key: "pitch", label: "Pitch", href: "/pitch" },
  { key: "inspace", label: "InSpace", href: "/inspace" },
  { key: "contact", label: "Contact", href: "/contact" },
];

interface HeaderProps {
  variant?: "light" | "dark";
}

export default function Header({ variant = "dark" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Use dark text when: scrolled OR variant is "light" (for light background pages)
  const useDarkText = isScrolled || variant === "light";

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl"
        : "bg-transparent"
        }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center">
            <motion.div
              className="relative h-8 w-44"
              whileHover={{ opacity: 0.7 }}
              transition={{ duration: 0.2 }}
            >
              {useDarkText ? (
                <>
                  <Image src="/sbv_logo_dark.svg" alt="StartingBlock Ventures" fill className="object-contain dark:hidden" />
                  <Image src="/sbv_logo.svg" alt="StartingBlock Ventures" fill className="object-contain hidden dark:block" />
                </>
              ) : (
                <Image src="/sbv_logo.svg" alt="StartingBlock Ventures" fill className="object-contain" />
              )}
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`relative text-sm transition-colors duration-300 group ${useDarkText
                  ? "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300 ${useDarkText ? "bg-gray-900 dark:bg-white" : "bg-white"
                  }`} />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/apply"
              className={`inline-block px-6 py-2.5 text-sm tracking-wide rounded-full transition-all duration-300 ${useDarkText
                ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                : "border border-white/50 text-white hover:bg-white hover:text-gray-900"
                }`}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden relative z-50 p-2 transition-colors duration-300 ${useDarkText || isMenuOpen ? "text-gray-600 dark:text-gray-400" : "text-white"
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars2Icon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-x-0 top-0 bottom-0 bg-white dark:bg-black z-40"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 -mt-20">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl font-light text-gray-900 dark:text-white hover:opacity-50 transition-opacity"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="/apply"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm tracking-wide rounded-full inline-block"
                >
                  Apply Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
