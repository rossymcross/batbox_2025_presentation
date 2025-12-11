import React from "react";
import { motion } from "motion/react";
import { Box, Monitor, ShieldCheck, Zap, Eye, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";

interface TechnologyModernizationSlideProps {
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

export const TechnologyModernizationSlide: React.FC<TechnologyModernizationSlideProps> = ({ onNext, onPrev }) => {
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
          className="mb-8 flex-none"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Technology Modernization
            </h2>
            <span className="px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium uppercase tracking-wider">
              2025 Architecture
            </span>
          </div>
          <p className="text-2xl text-gray-400 font-light max-w-4xl">
            Transitioning from legacy debt to a future-proof foundation.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-6 grid-rows-2 gap-6 min-h-0 pb-4"
        >
          {/* Top Row - Major Upgrades */}
          
          {/* Unity Upgrade */}
          <motion.div variants={itemVariants} className="col-span-3 bg-[#1E1F23] border border-white/5 rounded-3xl p-8 relative overflow-hidden group flex flex-col">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 transition-all duration-700 group-hover:bg-cyan-500/10" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <Box className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Unity Engine Upgrade</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                    <span className="text-red-400 line-through">Legacy 5.6.5f1</span>
                    <ArrowRight className="w-3 h-3" />
                    <span className="text-cyan-400 font-bold">Unity 6 LTS (2025)</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 flex-1 text-lg font-light">
                This transition replaces an engine that fell out of support in 2017 with a modern LTS foundation backed through 2026, delivering a decisive jump in capability, stability, and long-term competitiveness.
              </p>

              <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Support Status</span>
                  <span className="text-sm text-cyan-400 font-mono">+96 Months</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden flex">
                   <div className="w-[15%] h-full bg-red-500/30" />
                   <div className="w-[85%] h-full bg-cyan-500" />
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-400">
                   <span>2017 (End of Life)</span>
                   <span>Supported to 2026</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Windows Upgrade */}
          <motion.div variants={itemVariants} className="col-span-3 bg-[#1E1F23] border border-white/5 rounded-3xl p-8 relative overflow-hidden group flex flex-col">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 transition-all duration-700 group-hover:bg-blue-500/10" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <Monitor className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Windows Upgrade</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                    <span className="text-red-400 line-through">Windows 7 Req.</span>
                    <ArrowRight className="w-3 h-3" />
                    <span className="text-blue-400 font-bold">Windows 10/11 Ready</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 flex-1 text-lg font-light">
                Upgrading from a Windows 7 dependency (2009) to Windows 10/11 delivers a major leap in security, compatibility, and enterprise readiness, moving the product onto a modern, fully supported OS foundation.
              </p>

              <div className="bg-black/20 rounded-xl p-4 border border-white/5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">OS Evolution</span>
                  <span className="text-sm text-blue-400 font-mono">+144 Months</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden flex">
                   <div className="w-[20%] h-full bg-red-500/30" />
                   <div className="w-[80%] h-full bg-blue-500" />
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-400">
                   <span>2009 (Win 7)</span>
                   <span>Modern Support</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Row - Pillars */}

          {/* Reliability */}
          <motion.div variants={itemVariants} className="col-span-2 bg-[#1E1F23] border border-white/5 rounded-3xl p-6 relative overflow-hidden group flex flex-col">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 transition-all duration-700 group-hover:bg-emerald-500/10" />
            
            <div className="flex items-center gap-3 mb-4">
               <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
               </div>
               <h3 className="text-xl font-bold text-white">Reliability</h3>
            </div>

            <h4 className="text-emerald-400 font-medium mb-2">Always-On Operations</h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
              Shift from reactive firefighting to self-healing architecture that recovers automatically from hardware issues and network drops.
            </p>

            <div className="mt-auto pt-4 border-t border-white/5">
               <div className="flex items-center justify-between text-sm mb-1">
                 <span className="text-gray-500">Recovery</span>
                 <span className="text-emerald-400">Zero-Touch</span>
               </div>
               <div className="text-xs text-gray-600">24/7 autonomous operation</div>
            </div>
          </motion.div>

          {/* Efficiency */}
          <motion.div variants={itemVariants} className="col-span-2 bg-[#1E1F23] border border-white/5 rounded-3xl p-6 relative overflow-hidden group flex flex-col">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 transition-all duration-700 group-hover:bg-orange-500/10" />
            
            <div className="flex items-center gap-3 mb-4">
               <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <Zap className="w-6 h-6 text-orange-400" />
               </div>
               <h3 className="text-xl font-bold text-white">Efficiency</h3>
            </div>

            <h4 className="text-orange-400 font-medium mb-2">Optimized Build Pipeline</h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
              Build time cut from 30m to 10m. Code commits automatically build, test, and deploy with instant rollback capabilities.
            </p>

            <div className="mt-auto pt-4 border-t border-white/5">
               <div className="flex items-center justify-between text-sm mb-1">
                 <span className="text-gray-500">Build Time</span>
                 <span className="text-orange-400">30m → 10m</span>
               </div>
               <div className="text-xs text-gray-600">50% smaller bundles</div>
            </div>
          </motion.div>

          {/* Observability */}
          <motion.div variants={itemVariants} className="col-span-2 bg-[#1E1F23] border border-white/5 rounded-3xl p-6 relative overflow-hidden group flex flex-col">
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 transition-all duration-700 group-hover:bg-purple-500/10" />
            
            <div className="flex items-center gap-3 mb-4">
               <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <Eye className="w-6 h-6 text-purple-400" />
               </div>
               <h3 className="text-xl font-bold text-white">Observability</h3>
            </div>

            <h4 className="text-purple-400 font-medium mb-2">Real-Time Monitoring</h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
              Continuous health metrics, heartbeats every 60s, and centralized dashboards enable proactive alerting before issues impact users.
            </p>

            <div className="mt-auto pt-4 border-t border-white/5">
               <div className="flex items-center justify-between text-sm mb-1">
                 <span className="text-gray-500">Visibility</span>
                 <span className="text-purple-400">Full / Proactive</span>
               </div>
               <div className="text-xs text-gray-600">Deep logging & Alerting</div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};
