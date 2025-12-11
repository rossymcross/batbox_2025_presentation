import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { MessageSquare, ShieldCheck, Zap, Server, Flame, Clock } from "lucide-react";

interface SupportSlideProps {
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

export const SupportSlide: React.FC<SupportSlideProps> = ({ onNext, onPrev }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <div ref={containerRef} className="w-screen h-screen bg-[#121316] text-white font-sans p-12 flex flex-col overflow-y-auto relative">
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
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              2025 Development Summary
            </h2>
            <span className="px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium uppercase tracking-wider">
              Operations & Reliability
            </span>
          </div>
          <p className="text-2xl text-gray-400 font-light">
            Support Infrastructure & Team Dedication
          </p>
        </motion.div>

        {/* Main Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-12 grid-rows-2 gap-6 min-h-0"
        >
          {/* Top Row: Core Support Stats */}
          <motion.div variants={itemVariants} className="col-span-4 bg-[#1E1F23] border border-white/5 rounded-3xl p-8 hover:bg-[#25262B] transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-[#4A154B]/20 flex items-center justify-center text-[#E01E5A] mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Dedicated Channels</h3>
            <p className="text-gray-400 leading-relaxed">
              Live Slack channels established for each venue, providing direct, instant access to the development team for seamless communication.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-4 bg-[#1E1F23] border border-white/5 rounded-3xl p-8 hover:bg-[#25262B] transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">24/7 Monitoring</h3>
            <p className="text-gray-400 leading-relaxed">
              Continuous live system monitoring with always-on emergency support from technical leaders, ensuring stability around the clock.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-4 bg-[#1E1F23] border border-white/5 rounded-3xl p-8 hover:bg-[#25262B] transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Rapid Response</h3>
            <p className="text-gray-400 leading-relaxed">
              Industry-leading response times for all critical issues. Our streamlined escalation path minimizes downtime and maximizes resolution speed.
            </p>
          </motion.div>

          {/* Bottom Row: Uptime & Crunch Story */}
          <motion.div variants={itemVariants} className="col-span-5 bg-gradient-to-br from-[#1E1F23] to-[#121316] border border-white/5 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-emerald-400 mb-2">
                <Server className="w-5 h-5" />
                <span className="font-semibold uppercase tracking-wider text-sm">Business Hours</span>
              </div>
              <div className="text-7xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">100%</div>
              <div className="text-2xl text-gray-300 font-medium">Zero Downtime</div>
              <p className="text-gray-500 mt-4">
                Systems remained fully operational during all peak business hours throughout 2025.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-7 bg-gradient-to-br from-[#1E1F23] to-[#2a1b1b] border border-red-500/10 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group">
            {/* Decoration */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/4" />
            
            <div className="relative z-10 flex gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 text-red-400 mb-4">
                  <Flame className="w-5 h-5" />
                  <span className="font-semibold uppercase tracking-wider text-sm">The Addison Launch</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Unwavering Dedication</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  During the critical pre-launch phase for Batbox Addison, the development team demonstrated extreme commitment, sustaining <span className="text-white font-semibold">16-hour working days</span> for a continuous <span className="text-white font-semibold">5-week period</span> ensure fastest possible stability while deploying to production with only one day of UAT.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 bg-black/20 w-fit px-4 py-2 rounded-full border border-white/5">
                  <Clock className="w-4 h-4" />
                  <span>5 Weeks of Intensive Development</span>
                </div>
              </div>
              
              {/* Visual representation of intensity */}
              <div className="w-32 h-32 rounded-full border-4 border-red-500/20 flex items-center justify-center relative animate-pulse-slow">
                <div className="absolute inset-0 bg-red-500/10 rounded-full blur-xl" />
                <Flame className="w-16 h-16 text-red-500" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
