import React, { useState } from "react";
import { motion } from "motion/react";
import teamImage from "figma:asset/8c5d9f29f6913d56bd0414f64e268b3dea6fe357.png";
import { Users, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface DevelopmentTeamSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const DevelopmentTeamSlide: React.FC<DevelopmentTeamSlideProps> = ({ onNext, onPrev }) => {
  const [scale, setScale] = useState(1.5);

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(1);
  };

  return (
    <div className="w-screen h-screen bg-[#121316] text-white font-sans p-12 flex flex-col overflow-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
      `}</style>

      {/* Navigation Controls */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-1/4 h-full cursor-default" onClick={onPrev} />
        <div className="w-3/4 h-full cursor-default" onClick={onNext} />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col font-outfit max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex-shrink-0"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              2025 Development Summary
            </h2>
            <span className="px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium uppercase tracking-wider flex items-center gap-2">
              <Users className="w-4 h-4" />
              Team Structure
            </span>
          </div>
          <p className="text-2xl text-gray-400 font-light">
            The Dedicated Minds Building the Future
          </p>
        </motion.div>

        {/* Main Content - Centered Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex-1 flex items-center justify-center relative min-h-0"
        >
          <div className="relative w-full h-full bg-[#1E1F23] border border-white/5 rounded-3xl p-8 flex items-center justify-center overflow-hidden group">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Zoom Controls */}
            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-[#121316]/80 backdrop-blur-sm p-2 rounded-xl border border-white/10">
              <button 
                onClick={handleZoomOut}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                title="Zoom Out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              
              <span className="min-w-[3rem] text-center text-sm font-medium text-gray-300 select-none">
                {Math.round(scale * 100)}%
              </span>

              <button 
                onClick={handleZoomIn}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                title="Zoom In"
              >
                <ZoomIn className="w-5 h-5" />
              </button>

              <div className="w-px h-5 bg-white/10 mx-1" />

              <button 
                onClick={handleReset}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                title="Reset Zoom"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

            <motion.div
              drag
              dragConstraints={{ left: -500, right: 500, top: -300, bottom: 300 }}
              style={{ scale }}
              className="relative z-10 w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
            >
              <img 
                src={teamImage} 
                alt="Development Team Organizational Chart" 
                className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg brightness-90 pointer-events-none"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
