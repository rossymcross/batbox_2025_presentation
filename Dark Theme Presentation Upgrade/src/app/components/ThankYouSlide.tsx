import React from "react";
import { motion } from "motion/react";

interface ThankYouSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const ThankYouSlide: React.FC<ThankYouSlideProps> = ({ onNext, onPrev }) => {
  return (
    <div className="w-screen h-screen bg-[#050505] text-white font-sans flex flex-col overflow-hidden relative selection:bg-cyan-500/10">
      {/* Ambient Background Effects - Static */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-[20%] left-[30%] w-[1000px] h-[1000px] rounded-full opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            filter: 'blur(120px)'
          }}
        />
        <div 
          className="absolute bottom-[10%] right-[20%] w-[800px] h-[800px] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)',
            filter: 'blur(120px)'
          }}
        />

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {/* Thank You Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h1 
            className="text-8xl font-black tracking-tight mb-8"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #06b6d4 40%, #a855f7 80%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Thank You
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl text-gray-400 mb-12"
          >
            Batbox — Strategy and Performance Review
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-48 h-1 mx-auto rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.6), rgba(168, 85, 247, 0.6), transparent)'
            }}
          />
        </motion.div>

        {/* Questions prompt */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-20"
        >
          <p className="text-xl text-gray-500">Questions?</p>
        </motion.div>
      </div>
    </div>
  );
};
