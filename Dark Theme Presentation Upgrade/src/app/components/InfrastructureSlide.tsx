import React, { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { Box, ShieldCheck, Cpu, Users, CheckCircle2, Lock, Zap, Network, Server, Globe } from "lucide-react";

interface InfrastructureSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const InfrastructureSlide: React.FC<InfrastructureSlideProps> = ({ onNext, onPrev }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightGradient = useMotionTemplate`radial-gradient(circle 700px at ${mouseX}px ${mouseY}px, rgba(6, 182, 212, 0.05), transparent 70%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="w-screen h-screen bg-[#050505] text-white p-10 flex flex-col overflow-hidden relative selection:bg-cyan-500/5">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Static Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-[15%] right-[10%] w-[700px] h-[700px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
        <div 
          className="absolute bottom-[15%] left-[15%] w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
      </div>

      {/* Mouse-Following Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlightGradient }}
      />

      <div className="relative z-10 w-full h-full flex flex-col font-inter max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 shrink-0"
        >
          <div className="flex items-center gap-5 mb-3">
            <h2 
              className="text-6xl font-black tracking-[-0.02em]"
              style={{ textShadow: '0 4px 40px rgba(6, 182, 212, 0.15)' }}
            >
              System Architecture
            </h2>
            <span className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-500/5 border border-blue-500/30 text-blue-400 text-sm font-semibold uppercase tracking-[0.15em] backdrop-blur-sm">
              Infrastructure 2.0
            </span>
          </div>
          <p 
            className="text-2xl text-gray-300 font-light max-w-4xl tracking-[-0.01em]"
            style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.5)' }}
          >
            Enterprise-grade platform with Datadog monitoring, offline fallback, and AWS + Fastly architecture
          </p>
        </motion.div>

        {/* Main Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-12 gap-6 min-h-0"
        >
          {/* Build Time Optimization */}
          <motion.div 
            variants={itemVariants}
            className="col-span-4 bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-yellow-500/20 hover:border-yellow-500/40 rounded-3xl p-6 relative overflow-hidden group cursor-default flex flex-col justify-between transition-all duration-300"
            style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}
          >
            {/* Static Background Glow */}
            <div 
              className="absolute top-[-30%] right-[-20%] w-[300px] h-[300px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(250, 204, 21, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 group-hover:translate-x-1 transition-transform">
                <div className="w-11 h-11 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center backdrop-blur-sm">
                  <Zap className="w-6 h-6 text-yellow-400" strokeWidth={2} />
                </div>
                <span className="font-semibold uppercase tracking-[0.15em] text-xs text-yellow-400">Velocity</span>
              </div>
              
              <div className="mb-6">
                <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Build Time</div>
                <div 
                  className="text-7xl font-black text-white tracking-tighter"
                  style={{ textShadow: '0 4px 30px rgba(250, 204, 21, 0.2)' }}
                >
                  10 <span className="text-4xl text-yellow-400 font-black">min</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 uppercase tracking-wider w-14 shrink-0 font-semibold">Before</span>
                  <div className="flex-1 h-3 bg-white/20 rounded-full" />
                  <span className="text-xs text-gray-400 w-16 text-right font-semibold">30 min</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-yellow-400 uppercase tracking-wider w-14 shrink-0 font-semibold">Now</span>
                  <div className="flex-1 relative h-3 bg-black/30 rounded-full overflow-hidden">
                    <div 
                      className="absolute left-0 top-0 h-full w-[33%] bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
                      style={{ boxShadow: '0 0 15px rgba(250, 204, 21, 0.6)' }}
                    />
                  </div>
                  <span className="text-xs text-yellow-400 w-16 text-right font-bold">10 min</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Build Size Halved */}
          <motion.div 
            variants={itemVariants}
            className="col-span-4 bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-purple-500/20 hover:border-purple-500/40 rounded-3xl p-6 relative overflow-hidden group cursor-default flex flex-col justify-between transition-all duration-300"
            style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}
          >
            {/* Static Background Glow */}
            <div 
              className="absolute top-[-30%] right-[-20%] w-[300px] h-[300px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 group-hover:translate-x-1 transition-transform">
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center backdrop-blur-sm">
                  <Box className="w-6 h-6 text-purple-400" strokeWidth={2} />
                </div>
                <span className="font-semibold uppercase tracking-[0.15em] text-xs text-purple-400">Optimization</span>
              </div>
              
              <div className="flex items-end gap-4 mb-6">
                <div>
                  <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Bundle Size</div>
                  <div 
                    className="text-7xl font-black text-white tracking-tighter"
                    style={{ textShadow: '0 4px 30px rgba(168, 85, 247, 0.2)' }}
                  >
                    -50<span className="text-4xl text-purple-400 ml-2 font-black">%</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 uppercase tracking-wider w-14 shrink-0 font-semibold">Before</span>
                  <div className="flex-1 h-3 bg-white/20 rounded-full" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-purple-400 uppercase tracking-wider w-14 shrink-0 font-semibold">Now</span>
                  <div className="flex-1 relative h-3 bg-black/30 rounded-full overflow-hidden">
                    <div 
                      className="absolute left-0 top-0 h-full w-[50%] bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                      style={{ boxShadow: '0 0 15px rgba(168, 85, 247, 0.6)' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Legacy Errors Eliminated */}
          <motion.div 
            variants={itemVariants}
            className="col-span-4 bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-emerald-500/20 hover:border-emerald-500/40 rounded-3xl p-6 relative overflow-hidden group cursor-default flex flex-col justify-between transition-all duration-300"
            style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}
          >
            {/* Static Background Glow */}
            <div 
              className="absolute top-[-30%] right-[-20%] w-[300px] h-[300px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 group-hover:translate-x-1 transition-transform">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center backdrop-blur-sm">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" strokeWidth={2} />
                </div>
                <span className="font-semibold uppercase tracking-[0.15em] text-xs text-emerald-400">Reliability</span>
              </div>
              
              <div className="flex items-end gap-4 mb-6">
                <div>
                  <div className="text-sm text-gray-400 mb-2 uppercase tracking-wider">Stability Rate</div>
                  <div 
                    className="text-7xl font-black text-white tracking-tighter"
                    style={{ textShadow: '0 4px 30px rgba(16, 185, 129, 0.2)' }}
                  >
                    100<span className="text-4xl text-emerald-400 ml-2 font-black">%</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-4">Legacy errors eliminated</p>
              
              <div 
                className="flex items-center gap-2 text-emerald-400 text-xs font-mono bg-emerald-500/10 px-3 py-2 rounded-xl border border-emerald-500/30 w-fit hover:scale-105 transition-transform"
                style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)' }}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-semibold">System Stable</span>
              </div>
            </div>
          </motion.div>

          {/* Sensor DLL Isolation - Wide Card */}
          <motion.div 
            variants={itemVariants}
            className="col-span-6 bg-gradient-to-br from-[#0c0c0e] to-[#0f1728] border border-cyan-500/30 hover:border-cyan-500/50 rounded-3xl p-8 relative overflow-hidden group cursor-default transition-all duration-300"
            style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}
          >
            {/* Static Background Glow */}
            <div 
              className="absolute bottom-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-25 group-hover:opacity-40 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
                filter: 'blur(80px)'
              }}
            />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-8 group-hover:translate-x-1 transition-transform">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center backdrop-blur-sm">
                  <Cpu className="w-7 h-7 text-cyan-400" strokeWidth={2} />
                </div>
                <div>
                  <h3 
                    className="text-3xl font-black text-white tracking-[-0.01em]"
                    style={{ textShadow: '0 4px 30px rgba(6, 182, 212, 0.2)' }}
                  >
                    Sensor DLL Isolation
                  </h3>
                  <span className="text-xs text-cyan-400 uppercase tracking-[0.15em] font-bold">Architecture 2.0</span>
                </div>
              </div>
              
              <div className="flex-1 flex items-center justify-center py-6">
                {/* Static Diagram */}
                <div className="flex items-center gap-6 w-full justify-center">
                   {/* App Node */}
                   <div className="flex flex-col items-center gap-3">
                      <div 
                        className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center relative hover:scale-110 transition-transform"
                        style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)' }}
                      >
                        <Globe className="w-9 h-9 text-gray-300" strokeWidth={2} />
                      </div>
                      <span className="text-xs text-gray-400 font-semibold font-mono">Platform</span>
                   </div>

                   {/* Connection 1 */}
                   <div className="h-0.5 w-20 bg-gradient-to-r from-gray-700 via-cyan-500 to-cyan-500 relative" />

                   {/* Proxy Node (Hero) */}
                   <div className="flex flex-col items-center gap-3 relative">
                      <div 
                        className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full opacity-40"
                      />
                      <div 
                        className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#0a0a0c] to-[#0c1420] border-2 border-cyan-400 flex items-center justify-center relative hover:scale-110 transition-transform"
                        style={{ boxShadow: '0 0 40px rgba(6, 182, 212, 0.4), inset 0 0 20px rgba(6, 182, 212, 0.1)' }}
                      >
                        <Network className="w-11 h-11 text-cyan-400" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm text-cyan-400 font-mono font-black tracking-wider">WS Proxy</span>
                   </div>

                   {/* Connection 2 */}
                   <div className="h-0.5 w-20 bg-gradient-to-r from-cyan-500 to-gray-700 relative" />

                   {/* DLL Node */}
                   <div className="flex flex-col items-center gap-3">
                      <div 
                        className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center relative hover:scale-110 transition-transform"
                        style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)' }}
                      >
                        <Server className="w-9 h-9 text-gray-300" strokeWidth={2} />
                      </div>
                      <span className="text-xs text-gray-400 font-semibold font-mono">Sensor DLL</span>
                   </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm text-gray-300 bg-black/30 p-4 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" strokeWidth={2} />
                <p className="leading-relaxed">Decoupled architecture enables hardware agnosticism & stability.</p>
              </div>
            </div>
          </motion.div>

          {/* Data Governance */}
          <motion.div 
            variants={itemVariants}
            className="col-span-3 bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-red-500/20 hover:border-red-500/40 rounded-3xl p-6 relative overflow-hidden group cursor-default flex flex-col transition-all duration-300"
            style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}
          >
            {/* Static Background Glow */}
            <div 
              className="absolute top-[-30%] right-[-20%] w-[300px] h-[300px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
            />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                  <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center backdrop-blur-sm">
                    <Lock className="w-6 h-6 text-red-400" strokeWidth={2} />
                  </div>
                  <span className="font-semibold uppercase tracking-[0.15em] text-xs text-red-400">Security</span>
                </div>
                <span 
                  className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-emerald-500 text-black hover:scale-105 transition-transform"
                  style={{ boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)' }}
                >
                  Deployed
                </span>
              </div>
              
              <h3 
                className="text-2xl font-black text-white mb-3 tracking-[-0.01em]"
                style={{ textShadow: '0 4px 30px rgba(239, 68, 68, 0.2)' }}
              >
                Data Governance
              </h3>
              
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                PII masking & robust protocols across the stack.
              </p>
              
              <div className="mt-auto hover:scale-[1.02] transition-transform">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <div className="bg-red-500/10 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-red-400" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Feature</div>
                    <div className="text-base font-bold text-white">Unified Profiles</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Batbox Connect Milestone */}
          <motion.div 
            variants={itemVariants}
            className="col-span-3 bg-gradient-to-br from-[#0c0c0e] to-[#0a2818] border border-emerald-500/30 hover:border-emerald-500/50 rounded-3xl p-6 relative overflow-hidden group cursor-default flex flex-col transition-all duration-300"
            style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}
          >
            {/* Static Background Glow */}
            <div 
              className="absolute top-[-30%] right-[-20%] w-[300px] h-[300px] rounded-full pointer-events-none opacity-25 group-hover:opacity-45 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
            />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center backdrop-blur-sm">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" strokeWidth={2} />
                  </div>
                  <span className="font-semibold uppercase tracking-[0.15em] text-xs text-emerald-400">Milestone</span>
                </div>
                <span 
                  className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-emerald-500 text-black hover:scale-105 transition-transform"
                  style={{ boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)' }}
                >
                  Launched
                </span>
              </div>
              
              <h3 
                className="text-2xl font-black text-white mb-3 tracking-[-0.01em]"
                style={{ textShadow: '0 4px 30px rgba(16, 185, 129, 0.2)' }}
              >
                Batbox Connect
              </h3>
              
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Successfully deployed in Addison first, then all venues.
              </p>
              
              <div className="mt-auto">
                <div 
                  className="text-4xl font-black text-emerald-400 tracking-tight mb-2"
                  style={{ textShadow: '0 0 30px rgba(16, 185, 129, 0.4)' }}
                >
                  July 31, 2025
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Launch Date</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
