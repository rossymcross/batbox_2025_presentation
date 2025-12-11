import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { MessageSquare, ShieldCheck, Zap, Server, Flame, Clock, Star } from "lucide-react";

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
          <motion.div variants={itemVariants} className="col-span-3 bg-[#1E1F23] border border-white/5 rounded-3xl p-6 hover:bg-[#25262B] transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-[#4A154B]/20 flex items-center justify-center text-[#E01E5A] mb-4 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Dedicated Channels</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Live Slack channels for each venue, providing direct, instant access to the dev team.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-3 bg-[#1E1F23] border border-white/5 rounded-3xl p-6 hover:bg-[#25262B] transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">24/7 Monitoring</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Continuous live system monitoring with always-on emergency support from technical leaders.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-3 bg-[#1E1F23] border border-white/5 rounded-3xl p-6 hover:bg-[#25262B] transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Rapid Response</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Industry-leading response times. Streamlined escalation path minimizes downtime.
            </p>
          </motion.div>

          {/* Zero Downtime - Moved to Top Row */}
          <motion.div variants={itemVariants} className="col-span-3 bg-gradient-to-br from-[#1E1F23] to-[#121316] border border-emerald-500/20 rounded-3xl p-6 flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-emerald-400 mb-2">
                <Server className="w-5 h-5" />
                <span className="font-semibold uppercase tracking-wider text-xs">Uptime</span>
              </div>
              <div className="text-4xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">On Track</div>
              <div className="text-lg text-gray-300 font-medium leading-tight">for 99.99% uptime</div>
              <p className="text-xs text-gray-500 mt-2">
                Systems fully operational during all peak business hours.
              </p>
            </div>
          </motion.div>

          {/* Bottom Row */}
          
          {/* Addison Launch */}
          <motion.div variants={itemVariants} className="col-span-7 bg-gradient-to-br from-[#1E1F23] to-[#2a1b1b] border border-red-500/10 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/4" />
            <div className="relative z-10 flex gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 text-red-400 mb-4">
                  <Flame className="w-5 h-5" />
                  <span className="font-semibold uppercase tracking-wider text-sm">The Addison Launch</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Unwavering Dedication</h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  During the pre-launch phase, the team demonstrated extreme commitment with <span className="text-white font-semibold">16-hour days</span> for <span className="text-white font-semibold">5 weeks</span> to ensure stability with minimal UAT time.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 bg-black/20 w-fit px-4 py-2 rounded-full border border-white/5">
                  <Clock className="w-4 h-4" />
                  <span>5 Weeks of Intensive Development</span>
                </div>
              </div>
              <div className="w-32 h-32 rounded-full border-4 border-red-500/20 flex items-center justify-center relative animate-pulse-slow shrink-0">
                <div className="absolute inset-0 bg-red-500/10 rounded-full blur-xl" />
                <Flame className="w-16 h-16 text-red-500" />
              </div>
            </div>
          </motion.div>

          {/* New Tile: Product Activation Events Support */}
          <motion.div variants={itemVariants} className="col-span-5 bg-gradient-to-br from-[#1E1F23] to-[#162032] border border-blue-500/10 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-blue-400 mb-4">
                <Star className="w-5 h-5" />
                <span className="font-semibold uppercase tracking-wider text-sm">Event Support</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Product Activation</h3>
              <p className="text-gray-400 mb-6">
                Provided world-class support with <span className="text-white font-semibold">no downtime</span> during critical high-profile events:
              </p>
              
              <div className="space-y-3">
                {['Launch Day', 'VIP Party Event', 'IAAPA'].map((event, i) => (
                  <div key={i} className="flex items-center gap-3 bg-black/20 p-3 rounded-xl border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
                    <span className="text-gray-200 font-medium">{event}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};
