import React from "react";
import { motion } from "motion/react";
import { Server, Clock, Box, ShieldCheck, Cpu, Users, Calendar, Lock, Cloud, Zap, ArrowRight, Activity, Database } from "lucide-react";

interface InfrastructureSlideProps {
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

export const InfrastructureSlide: React.FC<InfrastructureSlideProps> = ({ onNext, onPrev }) => {
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
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              2025 Development Summary
            </h2>
            <span className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium uppercase tracking-wider">
              System Architecture
            </span>
          </div>
          <p className="text-2xl text-gray-400 font-light max-w-4xl">
            Enterprise-grade platform built with Datadog monitoring, offline fallback, and automated updates on AWS + Fastly scalable architecture.
          </p>
        </motion.div>

        {/* Main Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-12 grid-rows-2 gap-6 min-h-0"
        >
          {/* Row 1 */}
          {/* Build Efficiency */}
          <motion.div variants={itemVariants} className="col-span-4 bg-[#1E1F23] border border-white/5 rounded-3xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-24 h-24 text-yellow-400" />
            </div>
            <div className="flex items-center gap-3 text-yellow-400 mb-4">
              <Clock className="w-6 h-6" />
              <span className="font-semibold uppercase tracking-wider text-sm">Efficiency</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Build Time Optimization</h3>
            <div className="flex items-baseline gap-3 my-4">
              <span className="text-4xl font-bold text-gray-500 line-through">30m</span>
              <ArrowRight className="w-6 h-6 text-gray-500" />
              <span className="text-5xl font-bold text-white text-yellow-400">10m</span>
            </div>
            <p className="text-gray-400">
              Drastic reduction in deployment pipeline duration, enabling faster hotfixes and iterations.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-4 bg-[#1E1F23] border border-white/5 rounded-3xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Box className="w-24 h-24 text-purple-400" />
            </div>
            <div className="flex items-center gap-3 text-purple-400 mb-4">
              <Box className="w-6 h-6" />
              <span className="font-semibold uppercase tracking-wider text-sm">Optimization</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Build Size Halved</h3>
            <p className="text-gray-400 mt-4 leading-relaxed">
              50% reduction in final bundle size, resulting in faster load times and reduced bandwidth consumption for all venues.
            </p>
            <div className="mt-6 w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-purple-500 rounded-full" />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Before</span>
                <span>Current</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="col-span-4 bg-[#1E1F23] border border-white/5 rounded-3xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck className="w-24 h-24 text-emerald-400" />
            </div>
            <div className="flex items-center gap-3 text-emerald-400 mb-4">
              <ShieldCheck className="w-6 h-6" />
              <span className="font-semibold uppercase tracking-wider text-sm">Reliability</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Legacy Errors Eliminated</h3>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Complete refactoring of legacy codebases has resulted in stable operations and elimination of recurring historical bugs.
            </p>
          </motion.div>

          {/* Row 2 */}
          
          {/* Architecture / DLL */}
          <motion.div variants={itemVariants} className="col-span-6 bg-gradient-to-br from-[#1E1F23] to-[#1a1b1f] border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
            <div className="flex items-center gap-3 text-cyan-400 mb-4">
              <Cpu className="w-6 h-6" />
              <span className="font-semibold uppercase tracking-wider text-sm">Architecture</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Sensor DLL Isolation</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Implemented a WebSocket proxy to isolate the Sensor DLL, making the platform <span className="text-white font-medium">fully independent of Strikezon</span>. This architectural shift creates a future-proof foundation for hardware agnosticism.
            </p>
            <div className="flex gap-4">
                <div className="bg-black/30 px-4 py-2 rounded-lg border border-white/10 text-sm text-cyan-300">WebSocket Proxy</div>
                <div className="bg-black/30 px-4 py-2 rounded-lg border border-white/10 text-sm text-cyan-300">Future-Ready</div>
            </div>
          </motion.div>

          {/* Security & Data */}
          <motion.div variants={itemVariants} className="col-span-3 bg-[#1E1F23] border border-white/5 rounded-3xl p-6 flex flex-col justify-between group hover:bg-[#25262B] transition-colors">
            <div>
                <div className="flex items-center gap-3 text-red-400 mb-4">
                <Lock className="w-6 h-6" />
                <span className="font-semibold uppercase tracking-wider text-sm">Security</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Data Governance</h3>
                <p className="text-gray-400 text-sm">
                Robust protocols and PII masking implemented across the entire stack.
                </p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-white">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium">Unified Customer Profiles</span>
                </div>
            </div>
          </motion.div>

           {/* Deployment Milestone */}
           <motion.div variants={itemVariants} className="col-span-3 bg-[#1E1F23] border border-white/5 rounded-3xl p-6 flex flex-col justify-between group hover:bg-[#25262B] transition-colors">
            <div>
                <div className="flex items-center gap-3 text-orange-400 mb-4">
                <Calendar className="w-6 h-6" />
                <span className="font-semibold uppercase tracking-wider text-sm">Roadmap</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Baseball Connect</h3>
                <p className="text-gray-400 text-sm">
                Deploying at commercial venues and Addison.
                </p>
            </div>
            <div className="mt-4">
                <div className="text-2xl font-bold text-white">July 31, 2025</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Target Launch</div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};