import React from "react";
import { motion } from "motion/react";

interface PlaceholderSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const PlaceholderSlide: React.FC<PlaceholderSlideProps> = ({ onNext, onPrev }) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#121316] text-white font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl text-center p-12 border border-white/10 rounded-2xl bg-[#1E1F23]"
      >
        <h2 className="text-3xl font-bold mb-4 text-[#06b6d4]">Slide 2</h2>
        <p className="text-gray-400 mb-8">
          This is a placeholder for the next slide. The presentation infrastructure is ready for more content.
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={onPrev}
            className="px-6 py-2 rounded-full border border-white/20 hover:bg-white/5 transition-colors"
          >
            Back
          </button>
          <button 
            onClick={onNext}
            className="px-6 py-2 rounded-full bg-[#06b6d4] hover:bg-[#06b6d4]/80 transition-colors"
          >
            Next
          </button>
        </div>
      </motion.div>
    </div>
  );
};
