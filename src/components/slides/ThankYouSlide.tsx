import React from "react";
import { motion } from "motion/react";

interface ThankYouSlideProps {
  onPrev: () => void;
}

export const ThankYouSlide: React.FC<ThankYouSlideProps> = ({ onPrev }) => {
  return (
    <div className="w-screen h-screen bg-[#121316] text-white font-sans flex flex-col items-center justify-center relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
      `}</style>

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Navigation Controls (Invisible) */}
      <div className="absolute inset-0 z-10 flex">
        <div className="w-1/4 h-full cursor-default" onClick={onPrev} />
        <div className="w-3/4 h-full cursor-default" /> 
      </div>

      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto px-8 font-outfit">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-8xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-8 tracking-tight">
            Thank You
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="space-y-4"
        >
          <p className="text-3xl text-gray-400 font-light">
            Batbox Technology 2025 Performance Review
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mx-auto my-8 opacity-50" />
          <p className="text-xl text-gray-500">
            Questions & Discussion
          </p>
        </motion.div>
      </div>
    </div>
  );
};
