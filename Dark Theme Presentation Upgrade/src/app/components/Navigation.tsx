import React, { memo } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
}

export const Navigation: React.FC<NavigationProps> = memo(({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed top-6 right-6 z-[100] flex items-center gap-2"
    >
      {/* Previous Button */}
      <motion.button
        onClick={onPrev}
        disabled={currentSlide === 0}
        className={`w-10 h-10 bg-black/40 border border-white/20 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
          currentSlide === 0
            ? "text-gray-600 cursor-not-allowed opacity-50"
            : "text-white hover:bg-black/60 hover:border-white/40"
        }`}
        whileHover={currentSlide > 0 ? { scale: 1.1 } : {}}
        whileTap={currentSlide > 0 ? { scale: 0.95 } : {}}
        style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)" }}
      >
        <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
      </motion.button>

      {/* Page Counter */}
      <div
        className="px-4 py-2 bg-black/40 border border-white/20 rounded-full backdrop-blur-md flex items-center gap-1"
        style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)" }}
      >
        <span className="text-white font-bold text-sm tabular-nums">
          {currentSlide + 1}
        </span>
        <span className="text-gray-500 text-sm">/</span>
        <span className="text-gray-400 text-sm tabular-nums">{totalSlides}</span>
      </div>

      {/* Next Button */}
      <motion.button
        onClick={onNext}
        disabled={currentSlide >= totalSlides - 1}
        className={`w-10 h-10 bg-black/40 border border-white/20 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
          currentSlide >= totalSlides - 1
            ? "text-gray-600 cursor-not-allowed opacity-50"
            : "text-white hover:bg-black/60 hover:border-white/40"
        }`}
        whileHover={currentSlide < totalSlides - 1 ? { scale: 1.1 } : {}}
        whileTap={currentSlide < totalSlides - 1 ? { scale: 0.95 } : {}}
        style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)" }}
      >
        <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
      </motion.button>
    </motion.div>
  );
});

Navigation.displayName = 'Navigation';
