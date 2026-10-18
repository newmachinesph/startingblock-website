"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function FutureCarePromoModal() {
    const [isOpen, setIsOpen] = useState(false);

    // Auto-open logic — show once per day
    useEffect(() => {
        const today = new Date().toISOString().slice(0, 10);
        const dismissed = localStorage.getItem("futurecare-promo-dismissed");
        if (dismissed === today) return;

        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        const today = new Date().toISOString().slice(0, 10);
        localStorage.setItem("futurecare-promo-dismissed", today);
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleClose}
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none p-4">
                        <motion.div
                            className="relative w-full max-w-md bg-white dark:bg-zinc-950 rounded-3xl overflow-hidden shadow-2xl pointer-events-auto border border-gray-100 dark:border-gray-800"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        >
                            {/* Subtle gradient accent */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-gray-900 to-gray-200 dark:from-gray-800 dark:via-white dark:to-gray-800" />

                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all z-10"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Content */}
                            <div className="p-8 pt-12">
                                {/* Badge */}
                                <motion.div
                                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full mb-6"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <span className="w-2 h-2 rounded-full bg-gray-900 dark:bg-white animate-pulse" />
                                    <span className="text-xs font-medium tracking-wide text-gray-600 dark:text-gray-300">
                                        Now Accepting Applications
                                    </span>
                                </motion.div>

                                {/* Title */}
                                <motion.h2
                                    className="text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-2 leading-tight tracking-tight"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15 }}
                                >
                                    FutureCare
                                </motion.h2>
                                <motion.p
                                    className="text-sm text-gray-500 dark:text-gray-400 mb-6"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    AI × HealthTech Accelerator 1.0
                                </motion.p>

                                {/* Description */}
                                <motion.p
                                    className="text-gray-600 dark:text-gray-300 mb-8 text-sm leading-relaxed"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.25 }}
                                >
                                    A 12-week program equipping HealthTech founders with operators,
                                    clinical advisors, and infrastructure to scale solutions across
                                    the Philippines and ASEAN.
                                </motion.p>

                                {/* Features */}
                                <motion.div
                                    className="grid grid-cols-2 gap-3 mb-8"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {[
                                        "Capital Access",
                                        "Clinical Mentors",
                                        "Regulatory Support",
                                        "Enterprise Access"
                                    ].map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400"
                                        >
                                            <svg className="w-4 h-4 text-gray-900 dark:text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </div>
                                    ))}
                                </motion.div>

                                {/* CTA Buttons */}
                                <motion.div
                                    className="flex flex-col sm:flex-row gap-3"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.35 }}
                                >
                                    <Link href="/apply#form" className="flex-1" onClick={handleClose}>
                                        <motion.button
                                            className="w-full py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium text-sm tracking-wide transition-all hover:opacity-90"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Apply Now
                                        </motion.button>
                                    </Link>
                                    <Link href="/futurecare-accelerator" className="flex-1" onClick={handleClose}>
                                        <motion.button
                                            className="w-full py-3.5 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 rounded-full font-medium text-sm tracking-wide transition-all hover:bg-gray-50 dark:hover:bg-gray-800"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Learn More
                                        </motion.button>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
