import React from "react";
import { motion } from "motion/react";
import launchImage from "figma:asset/8c4d5a2b0d4df726c5ab0a52d19bed64e1998377.png";

interface AddisonLaunchSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const AddisonLaunchSlide: React.FC<AddisonLaunchSlideProps> = ({ onNext, onPrev }) => {
  return (
    <div className="w-screen h-screen bg-[#121316] text-white font-sans overflow-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
      `}</style>

      {/* Navigation Controls */}
      <div className="absolute inset-0 z-20 flex">
        <div className="w-1/4 h-full cursor-default" onClick={onPrev} />
        <div className="w-3/4 h-full cursor-default" onClick={onNext} />
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={launchImage} 
          alt="Batbox Addison" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-[#121316]/60 to-transparent" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center font-outfit p-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6 inline-block"
          >
            <span className="px-6 py-2 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md text-lg font-medium tracking-widest uppercase">
              New Chapter
            </span>
          </motion.div>
          
          <h1 className="text-8xl md:text-9xl font-bold text-white mb-6 tracking-tight leading-none drop-shadow-2xl">
            Batbox Addison<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Launch
            </span>
          </h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-2 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};
