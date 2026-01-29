import React, { useEffect, useState, memo, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

// Import critical images only (for preloader display)
import batboxLogo from "../../assets/b48a003eb09a9aa603c90fc81f3e8997a64d6e61.png";

// Define image URLs as strings for preloading
const criticalImages = [
  batboxLogo,
];

// These will be preloaded but won't block the presentation start
const secondaryImages = [
  () => import("../../assets/gamification-phones.png"),
  () => import("../../assets/support-pyramid.png"),
  () => import("../../assets/ai-operations-diagram.png"),
  () => import("../../assets/cdp-foundation-dark.png"),
  () => import("../../assets/batbox-suite-revenue-flow.png"),
  () => import("../../assets/platform-shift-dna.png"),
  () => import("../../assets/strategic-pivot-diagram.png"),
  () => import("../../assets/batbox-suite-overview.png"),
  () => import("../../assets/jumbotron.png"),
  () => import("../../assets/analytics-dashboard.png"),
  () => import("../../assets/batbox_suite.png"),
  () => import("../../assets/superadmin-venues.png"),
  () => import("../../assets/sizzle-reel-cover.png"),
  () => import("../../assets/stadium-sequence-cover.png"),
  () => import("../../assets/venus-stadium-cover.png"),
  () => import("../../assets/moon-stadium-cover.png"),
  () => import("../../assets/batbox-ecosystem.png"),
  () => import("../../assets/52fbef4d4f0507caf930524ddaf00ae7a362d968.png"),
  () => import("../../assets/ccbf243e976ecc624a525a48a748fabfe54f2b15.png"),
  () => import("../../assets/e6138832baf9743f8d6aed63f08a44ea4dd44a75.png"),
  () => import("../../assets/8d0bc9c05ef6ec412fc7b17c843514d63545f860.png"),
  () => import("../../assets/b7ff3bde360e3abeffbce9cb25d6df57d8a724b9.png"),
];

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = memo(({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");

  const handleComplete = useCallback(() => {
    setLoadingText("Ready!");
    setTimeout(onComplete, 400);
  }, [onComplete]);

  useEffect(() => {
    let loadedCount = 0;
    const totalCritical = criticalImages.length;
    
    // Load critical images first
    setLoadingText("Loading assets...");
    
    const loadCriticalImages = () => {
      return Promise.all(
        criticalImages.map((src) => {
          return new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => {
              loadedCount++;
              setProgress(Math.round((loadedCount / (totalCritical + 5)) * 100));
              resolve();
            };
            img.onerror = () => {
              loadedCount++;
              setProgress(Math.round((loadedCount / (totalCritical + 5)) * 100));
              resolve();
            };
            img.src = src;
          });
        })
      );
    };

    // Simulate some initial loading steps
    const simulateInitialProgress = async () => {
      setProgress(10);
      await new Promise(resolve => setTimeout(resolve, 100));
      setProgress(25);
      await new Promise(resolve => setTimeout(resolve, 100));
      setProgress(40);
    };

    const runPreload = async () => {
      await simulateInitialProgress();
      await loadCriticalImages();
      setProgress(60);
      
      // Load a few more secondary images
      setLoadingText("Preparing slides...");
      setProgress(75);
      await new Promise(resolve => setTimeout(resolve, 150));
      setProgress(90);
      await new Promise(resolve => setTimeout(resolve, 100));
      setProgress(100);
      
      // Start loading secondary images in background (non-blocking)
      secondaryImages.forEach(importFn => {
        importFn().catch(() => {}); // Silently fail - these are non-critical
      });
      
      handleComplete();
    };

    runPreload();
  }, [handleComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo/Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 
            className="text-4xl font-bold tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Batbox Presentation
          </h1>
        </motion.div>

        {/* Loading Animation */}
        <div className="relative w-64 h-64 mb-8">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-500/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Middle ring */}
          <motion.div
            className="absolute inset-4 rounded-full border-2 border-purple-500/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Inner ring with progress */}
          <motion.div
            className="absolute inset-8 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, #06b6d4 ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`,
              opacity: 0.3
            }}
          />
          
          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                className="text-5xl font-bold text-white"
                key={progress}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {progress}%
              </motion.span>
            </motion.div>
          </div>

          {/* Orbiting dots */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: i === 0 ? '#06b6d4' : i === 1 ? '#a855f7' : '#ec4899',
                boxShadow: `0 0 20px ${i === 0 ? '#06b6d4' : i === 1 ? '#a855f7' : '#ec4899'}`,
                top: '50%',
                left: '50%',
                transformOrigin: `${-80 - i * 20}px 0px`,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-80 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #06b6d4, #a855f7, #ec4899)',
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Loading text */}
        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {loadingText}
        </motion.p>
      </div>
    </motion.div>
  );
});

Preloader.displayName = 'Preloader';
