"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const FRAME_COUNT = 120;
const SCROLL_HEIGHT = "300vh";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(FRAME_COUNT).fill(null));
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const lastFrameRef = useRef(-1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  const stage2Opacity = useTransform(scrollYProgress, [0.2, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
  const stage2Y = useTransform(scrollYProgress, [0.2, 0.35], [60, 0]);

  const stage3Opacity = useTransform(scrollYProgress, [0.65, 0.8, 0.95], [0, 1, 1]);
  const stage3Y = useTransform(scrollYProgress, [0.65, 0.8], [60, 0]);

  // IntersectionObserver to pause when offscreen
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Progressive frame loading: load frame 0 first, then batch the rest
  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;

    const loadFrame = (i: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image();
        const frameIndex = i.toString().padStart(3, "0");
        img.src = `/frames/frame_${frameIndex}.webp`;

        const onComplete = () => {
          if (isMounted) {
            imagesRef.current[i] = img;
            loadedCount++;
            setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
          }
          resolve();
        };

        img.onload = onComplete;
        img.onerror = onComplete;
      });
    };

    const loadImages = async () => {
      // Load first frame immediately for fast LCP
      await loadFrame(0);

      // Load remaining frames in batches of 10
      const batchSize = 10;
      for (let batch = 1; batch < FRAME_COUNT; batch += batchSize) {
        if (!isMounted) break;
        const promises: Promise<void>[] = [];
        for (let i = batch; i < Math.min(batch + batchSize, FRAME_COUNT); i++) {
          promises.push(loadFrame(i));
        }
        await Promise.all(promises);
      }

      if (isMounted) {
        setIsLoading(false);
      }
    };

    loadImages();
    return () => {
      isMounted = false;
    };
  }, []);

  // Canvas rendering with visibility check
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isLoading) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const renderLoop = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(renderLoop);
        return;
      }

      const progress = smoothProgress.get();
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(progress * (FRAME_COUNT - 1)))
      );

      // Skip render if same frame
      if (frameIndex === lastFrameRef.current) {
        animationFrameId = requestAnimationFrame(renderLoop);
        return;
      }

      const img = imagesRef.current[frameIndex];
      if (!img || !img.complete || img.naturalWidth === 0) {
        animationFrameId = requestAnimationFrame(renderLoop);
        return;
      }

      lastFrameRef.current = frameIndex;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const imgRatio = img.width / img.height;
      const screenRatio = canvas.width / canvas.height;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (screenRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isLoading, isVisible, smoothProgress]);

  const renderFallbackBackground = () => (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[#fafafa]" />
      <motion.div
        className="absolute top-0 right-0 w-[70%] h-[70%] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          y: [0, -20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
    </div>
  );

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: SCROLL_HEIGHT }}
    >
      {/* Loading Screen */}
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#fafafa]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center gap-8">
            <motion.div
              className="text-6xl font-light tracking-[-0.04em] text-gray-900"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              SBV
            </motion.div>
            <div className="w-48 h-[1px] bg-gray-200 overflow-hidden">
              <motion.div
                className="h-full bg-gray-900"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <span className="text-xs tracking-[0.3em] text-gray-400 uppercase">
              {loadProgress}%
            </span>
          </div>
        </motion.div>
      )}

      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 w-full h-full"
        />

        {(isLoading || !imagesRef.current[0]) && renderFallbackBackground()}

        <div className="absolute inset-0 bg-black/60 pointer-events-none z-[1]" />

        {/* STAGE 1: Initial Hero */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6"
          style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              className="text-xs tracking-[0.4em] text-white/70 uppercase mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Venture Studio &bull; Makati, Philippines
            </motion.p>

            <motion.h1
              className="text-[clamp(3rem,8vw,7rem)] font-light tracking-[-0.03em] text-white leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              Building startups
              <br />
              <span className="font-medium">together</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-xl mx-auto font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Empowering early-stage startups with mentorship, resources,
              and networking to transform innovative ideas into successful businesses.
            </motion.p>

            <motion.div
              className="mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                className="w-[1px] h-16 bg-white/40 mx-auto"
                animate={{ scaleY: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* STAGE 2: Value Proposition */}
        <motion.div
          className="absolute inset-0 flex items-center z-10 px-6"
          style={{ opacity: stage2Opacity, y: stage2Y }}
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs tracking-[0.3em] text-white/70 uppercase mb-4">
                  Our Ecosystem
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.15] mb-6">
                  Beyond funding,
                  <br />
                  <span className="font-medium">we co-build</span>
                </h2>
                <p className="text-white/80 text-lg leading-relaxed max-w-md">
                  We champion companies bold enough to reinvent how we live.
                  Co-designing strategy, sharing expertise, and aligning on shared visions.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "6+", label: "Industries" },
                  { number: "3", label: "Pillars" },
                  { number: "ASEAN", label: "Focus" },
                  { number: "Global", label: "Network" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="text-center md:text-left"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <p className="text-4xl md:text-5xl font-light text-white mb-2">
                      {stat.number}
                    </p>
                    <p className="text-xs tracking-[0.2em] text-white/70 uppercase">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* STAGE 3: CTA */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-10 px-6"
          style={{ opacity: stage3Opacity, y: stage3Y }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] text-white/70 uppercase mb-6">
              Let&apos;s Connect
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.15] mb-8">
              Tell us about
              <br />
              <span className="font-medium">your startup</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/apply"
                className="px-8 py-4 bg-white text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-100 transition-colors text-center"
              >
                Start Application
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-white/50 text-white text-sm tracking-wide rounded-full hover:border-white transition-colors text-center"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
