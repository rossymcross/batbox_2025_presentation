import React from "react";
import { motion } from "motion/react";
import { Globe, TrendingUp, Layers, Smartphone, Target, ArrowRight } from "lucide-react";

interface StrategicFoundationSlideProps {
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

export const StrategicFoundationSlide: React.FC<StrategicFoundationSlideProps> = ({ onNext, onPrev }) => {
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
              Technology Driven Expansion
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
          className="flex-1 grid grid-cols-12 gap-8 min-h-0"
        >
          {/* Left Column: Vision & Strategy Text */}
          <motion.div variants={itemVariants} className="col-span-4 flex flex-col gap-6">
            <div className="bg-[#1E1F23] border border-white/5 rounded-3xl p-8 h-full relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               
               <div className="relative z-10 flex flex-col gap-8 h-full justify-center">
                  <div className="flex items-center gap-4 text-indigo-400 mb-2">
                    <div className="p-3 rounded-xl bg-indigo-500/10">
                        <Target className="w-8 h-8" />
                    </div>
                    <span className="font-bold uppercase tracking-wider text-lg">Long-Term Vision</span>
                  </div>
                  
                  <p className="text-2xl text-white font-medium leading-relaxed">
                    Batbox’s vision is to acquire the world’s most advanced baseball gameplay technology and build the commercial infrastructure around it.
                  </p>
                  
                  <div className="h-px w-full bg-white/5" />
                  
                  <div className="space-y-6">
                      <p className="text-lg text-gray-400 leading-relaxed">
                        This strategy goes beyond gameplay, laying the foundation for a full business ecosystem, powered by data, operational tools, and seamless user experiences.
                      </p>
                      
                      <p className="text-lg text-gray-400 leading-relaxed">
                        By unifying gameplay, venue management, and analytics into a single platform, Batbox is positioning itself as the first <span className="text-white font-medium">fully-integrated baseball simulator solution</span>.
                      </p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Right Column: 4-Point Strategy Grid */}
          <motion.div variants={itemVariants} className="col-span-8 grid grid-cols-2 gap-4">
             {/* 1. Unified Infrastructure */}
             <div className="bg-gradient-to-br from-[#1E1F23] to-[#1a1b1f] border border-white/5 rounded-3xl p-8 flex flex-col justify-between group hover:bg-[#25262B] transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/10">
                        <Globe className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">1. Unified Infrastructure</h3>
                    <p className="text-base text-gray-400 leading-relaxed">
                        Build a centralized backend for seamless remote updates, simulator health monitoring, and streamlined management across all Batbox locations and partners.
                    </p>
                </div>
             </div>

             {/* 2. Monetization Tools */}
             <div className="bg-gradient-to-br from-[#1E1F23] to-[#1a1b1f] border border-white/5 rounded-3xl p-8 flex flex-col justify-between group hover:bg-[#25262B] transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-900/10">
                        <TrendingUp className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">2. Monetization Tools & Insights</h3>
                    <p className="text-base text-gray-400 leading-relaxed">
                        Enable dynamic pricing, recurring revenue models, and real-time analytics to drive engagement, operational efficiency, and partner profitability.
                    </p>
                </div>
             </div>

             {/* 3. Flexible Product Formats */}
             <div className="bg-gradient-to-br from-[#1E1F23] to-[#1a1b1f] border border-white/5 rounded-3xl p-8 flex flex-col justify-between group hover:bg-[#25262B] transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-orange-900/10">
                        <Layers className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">3. Flexible Product Formats</h3>
                    <p className="text-base text-gray-400 leading-relaxed">
                        Support multiple venue types—Batbox-owned, Partner Program, and licensed third-party installations—through adaptable kiosk and software formats.
                    </p>
                </div>
             </div>

             {/* 4. Connected Player Experience */}
             <div className="bg-gradient-to-br from-[#1E1F23] to-[#1a1b1f] border border-white/5 rounded-3xl p-8 flex flex-col justify-between group hover:bg-[#25262B] transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-900/10">
                        <Smartphone className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">4. Connected Player Experience</h3>
                    <p className="text-base text-gray-400 leading-relaxed">
                        Launch the Batbox Mobile App to tie user profiles, gameplay history, rewards, and social features into a cohesive, gamified player journey across venues.
                    </p>
                </div>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};