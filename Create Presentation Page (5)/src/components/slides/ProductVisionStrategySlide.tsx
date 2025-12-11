import React from "react";
import { motion } from "motion/react";
import { Lightbulb, Compass, Target, TrendingUp, Eye } from "lucide-react";

interface ProductVisionStrategySlideProps {
  onNext: () => void;
  onPrev: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const ProductVisionStrategySlide: React.FC<ProductVisionStrategySlideProps> = ({ onNext, onPrev }) => {
  return (
    <div className="w-screen h-screen bg-[#121316] text-white font-sans p-12 flex flex-col overflow-y-auto relative">
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
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Strategic Foundation
            </h2>
            <span className="px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-medium uppercase tracking-wider">
              Vision & Strategy
            </span>
          </div>
          <p className="text-2xl text-gray-400 font-light max-w-4xl">
            For Commercial Growth & Market Leadership
          </p>
        </motion.div>

        {/* Content Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-2 gap-8 min-h-0"
        >
          {/* Card 1: Product Vision */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div className="bg-[#1E1F23] border border-white/5 rounded-3xl p-10 h-full relative overflow-hidden group">
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 transition-all duration-700 group-hover:bg-cyan-500/10" />
               <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
               
               <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-6 text-cyan-400 mb-10">
                    <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 shadow-lg shadow-cyan-900/10">
                        <Eye className="w-12 h-12" />
                    </div>
                    <h3 className="text-4xl font-bold text-white tracking-wide">Product Vision</h3>
                  </div>
                  
                  <div className="space-y-8 flex-1 flex flex-col justify-center">
                      <p className="text-2xl text-gray-300 leading-relaxed font-light">
                        Batbox is redefining baseball entertainment through a unified technology ecosystem that aligns with our <span className="text-white font-medium">flexible dual-approach</span> to commercial growth.
                      </p>
                      
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      
                      <p className="text-2xl text-gray-300 leading-relaxed font-light">
                        Our product vision is to solve real market pain points by giving venues the tools and flexibility to tailor experiences based on user behavior, operational preferences, and monetization goals.
                      </p>

                      <p className="text-2xl text-gray-300 leading-relaxed font-light">
                         We aim to lead the industry with <span className="text-cyan-400 font-medium">AI-driven personalization</span>, real-time gameplay analytics, and immersive, inclusive game modes, enabling baseball to be enjoyed by everyone, everywhere.
                      </p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Card 2: Product Strategy */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <div className="bg-[#1E1F23] border border-white/5 rounded-3xl p-10 h-full relative overflow-hidden group">
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 transition-all duration-700 group-hover:bg-purple-500/10" />
               <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
               
               <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-6 text-purple-400 mb-10">
                    <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 shadow-lg shadow-purple-900/10">
                        <Compass className="w-12 h-12" />
                    </div>
                    <h3 className="text-4xl font-bold text-white tracking-wide">Product Strategy</h3>
                  </div>
                  
                  <div className="space-y-8 flex-1 flex flex-col justify-center">
                      <p className="text-2xl text-gray-300 leading-relaxed font-light">
                        Batbox is evolving from a concept-driven organization to a <span className="text-white font-medium">data-driven technology leader</span>, ensuring that every product decision is guided by real-world engagement metrics, market demand, and performance analytics.
                      </p>
                      
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      
                      <p className="text-2xl text-gray-300 leading-relaxed font-light">
                        Our strategy balances visionary innovation with data-backed execution, prioritizing features that enhance user engagement, drive recurring revenue, and strengthen product-market fit.
                      </p>

                      <div className="grid grid-cols-2 gap-6 mt-8">
                        <div className="bg-black/20 rounded-2xl p-6 border border-white/5 flex flex-col items-center text-center">
                            <TrendingUp className="w-8 h-8 text-purple-400 mb-3" />
                            <span className="text-lg text-gray-400">Data-Backed Execution</span>
                        </div>
                        <div className="bg-black/20 rounded-2xl p-6 border border-white/5 flex flex-col items-center text-center">
                            <Target className="w-8 h-8 text-purple-400 mb-3" />
                            <span className="text-lg text-gray-400">Product-Market Fit</span>
                        </div>
                      </div>
                  </div>
               </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};