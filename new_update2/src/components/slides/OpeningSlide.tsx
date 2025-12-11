import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, BarChart3, Terminal } from "lucide-react";
import batboxLogo from "figma:asset/b48a003eb09a9aa603c90fc81f3e8997a64d6e61.png";

interface OpeningSlideProps {
  onNext: () => void;
}

export const OpeningSlide: React.FC<OpeningSlideProps> = ({ onNext }) => {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.code === "Space") {
        onNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext]);

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden bg-[#121316] text-white font-sans selection:bg-cyan-500/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
      `}</style>

      {/* Background Gradients - Removed as per request */}
      <div className="absolute inset-0 pointer-events-none">
      </div>

      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 text-center max-w-[900px] px-8 font-outfit">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mb-12 flex justify-center"
        >
          <img 
            src={batboxLogo} 
            alt="Batbox Technology" 
            className="h-20 w-auto drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]" 
          />
        </motion.div>

        {/* Year Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-[#06b6d4]/10 border border-[#06b6d4]/30 rounded-full text-sm font-medium text-[#06b6d4] tracking-widest uppercase"
        >
          <motion.span
            className="w-2 h-2 bg-[#06b6d4] rounded-full"
            animate={{ opacity: [1, 0.5, 1], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          End of Year Review
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-br from-white via-slate-400 to-[#06b6d4] bg-clip-text text-transparent block mb-2">
            Batbox Technology
          </span>
          <span className="bg-gradient-to-br from-[#06b6d4] via-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent block">
            2025 Performance Review
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="text-xl md:text-2xl font-light text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          A comprehensive look at our growth, achievements, and the data that
          drives us forward.
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="w-32 h-[3px] mx-auto mb-12 bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent"
        />

        {/* Start Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(6, 182, 212, 0.5)" }}
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
          className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-br from-[#06b6d4] to-[#3B82F6] rounded-full text-lg font-semibold text-white shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all"
        >
          Begin Presentation
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>

      {/* Navigation Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.1, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm text-gray-500 font-outfit"
      >
        Press{" "}
        <kbd className="px-2 py-1 bg-[#2A2B30] border border-white/10 rounded text-xs font-mono text-gray-300">
          →
        </kbd>{" "}
        or{" "}
        <kbd className="px-2 py-1 bg-[#2A2B30] border border-white/10 rounded text-xs font-mono text-gray-300">
          Space
        </kbd>{" "}
        to advance
      </motion.div>
    </div>
  );
};
