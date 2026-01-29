import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { Clock, Box, ShieldCheck, Cpu, Users, CheckCircle2, Lock, Zap, ArrowRight, Network, Server, Database, Globe } from "lucide-react";

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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const spotlightGradient = useMotionTemplate`radial-gradient(circle 700px at ${mouseX}px ${mouseY}px, rgba(6, 182, 212, 0.05), transparent 70%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
  }, [onNext, onPrev]);

  return (
    <div className="w-screen h-screen bg-[#050505] text-white p-10 flex flex-col overflow-hidden relative selection:bg-cyan-500/5">
      {/* Animated Grid Background */}
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

      {/* Radial Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[15%] right-[10%] w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.18, 0.1],
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[15%] left-[15%] w-[600px] h-[600px] rounded-full"
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

      {/* Noise Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.4) 100%)'
        }}
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
              style={{
                textShadow: '0 4px 40px rgba(6, 182, 212, 0.15)'
              }}
            >
              System Architecture
            </h2>
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-500/5 border border-blue-500/30 text-blue-400 text-sm font-semibold uppercase tracking-[0.15em] backdrop-blur-sm relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 -translate-x-full"
                animate={{
                  translateX: ['100%', '200%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 2
                }}
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)'
                }}
              />
              <span className="relative z-10">Infrastructure 2.0</span>
            </motion.span>
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
            onHoverStart={() => setHoveredCard(0)}
            onHoverEnd={() => setHoveredCard(null)}
            className="col-span-4 bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-yellow-500/20 rounded-3xl p-6 relative overflow-hidden group cursor-default flex flex-col justify-between"
            style={{
              boxShadow: hoveredCard === 0
                ? '0 0 50px rgba(250, 204, 21, 0.2), inset 0 0 30px rgba(250, 204, 21, 0.05)'
                : '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Background Glow */}
            <motion.div 
              className="absolute top-[-30%] right-[-20%] w-[300px] h-[300px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(250, 204, 21, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
              animate={{
                scale: hoveredCard === 0 ? [1, 1.3, 1.2] : [1, 1.1, 1],
                opacity: hoveredCard === 0 ? [0.3, 0.5, 0.4] : [0.15, 0.25, 0.2]
              }}
              transition={{
                duration: hoveredCard === 0 ? 2 : 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <motion.div 
                className="flex items-center gap-3 mb-6"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-11 h-11 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center backdrop-blur-sm">
                  <Zap className="w-6 h-6 text-yellow-400" strokeWidth={2} />
                </div>
                <span className="font-semibold uppercase tracking-[0.15em] text-xs text-yellow-400">Velocity</span>
              </motion.div>
              
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
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '33%' }}
                      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
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
            onHoverStart={() => setHoveredCard(1)}
            onHoverEnd={() => setHoveredCard(null)}
            className="col-span-4 bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-purple-500/20 rounded-3xl p-6 relative overflow-hidden group cursor-default flex flex-col justify-between"
            style={{
              boxShadow: hoveredCard === 1
                ? '0 0 50px rgba(168, 85, 247, 0.2), inset 0 0 30px rgba(168, 85, 247, 0.05)'
                : '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Background Glow */}
            <motion.div 
              className="absolute top-[-30%] right-[-20%] w-[300px] h-[300px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
              animate={{
                scale: hoveredCard === 1 ? [1, 1.3, 1.2] : [1, 1.1, 1],
                opacity: hoveredCard === 1 ? [0.3, 0.5, 0.4] : [0.15, 0.25, 0.2]
              }}
              transition={{
                duration: hoveredCard === 1 ? 2 : 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <motion.div 
                className="flex items-center gap-3 mb-6"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center backdrop-blur-sm">
                  <Box className="w-6 h-6 text-purple-400" strokeWidth={2} />
                </div>
                <span className="font-semibold uppercase tracking-[0.15em] text-xs text-purple-400">Optimization</span>
              </motion.div>
              
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
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '50%' }}
                      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
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
            onHoverStart={() => setHoveredCard(2)}
            onHoverEnd={() => setHoveredCard(null)}
            className="col-span-4 bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-emerald-500/20 rounded-3xl p-6 relative overflow-hidden group cursor-default flex flex-col justify-between"
            style={{
              boxShadow: hoveredCard === 2
                ? '0 0 50px rgba(16, 185, 129, 0.2), inset 0 0 30px rgba(16, 185, 129, 0.05)'
                : '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Background Glow */}
            <motion.div 
              className="absolute top-[-30%] right-[-20%] w-[300px] h-[300px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
              animate={{
                scale: hoveredCard === 2 ? [1, 1.3, 1.2] : [1, 1.1, 1],
                opacity: hoveredCard === 2 ? [0.3, 0.5, 0.4] : [0.15, 0.25, 0.2]
              }}
              transition={{
                duration: hoveredCard === 2 ? 2 : 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <motion.div 
                className="flex items-center gap-3 mb-6"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center backdrop-blur-sm">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" strokeWidth={2} />
                </div>
                <span className="font-semibold uppercase tracking-[0.15em] text-xs text-emerald-400">Reliability</span>
              </motion.div>
              
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
              
              <motion.div 
                className="flex items-center gap-2 text-emerald-400 text-xs font-mono bg-emerald-500/10 px-3 py-2 rounded-xl border border-emerald-500/30 w-fit"
                whileHover={{ scale: 1.05 }}
                style={{
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)'
                }}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-semibold">System Stable</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Sensor DLL Isolation - Wide Card */}
          <motion.div 
            variants={itemVariants}
            onHoverStart={() => setHoveredCard(3)}
            onHoverEnd={() => setHoveredCard(null)}
            className="col-span-6 bg-gradient-to-br from-[#0c0c0e] to-[#0f1728] border border-cyan-500/30 rounded-3xl p-8 relative overflow-hidden group cursor-default"
            style={{
              boxShadow: hoveredCard === 3
                ? '0 0 60px rgba(6, 182, 212, 0.25), inset 0 0 40px rgba(6, 182, 212, 0.05)'
                : '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Background Glow */}
            <motion.div 
              className="absolute bottom-[-30%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
                filter: 'blur(80px)'
              }}
              animate={{
                scale: hoveredCard === 3 ? [1, 1.3, 1.2] : [1, 1.15, 1],
                opacity: hoveredCard === 3 ? [0.4, 0.6, 0.5] : [0.2, 0.3, 0.25]
              }}
              transition={{
                duration: hoveredCard === 3 ? 2 : 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10 flex flex-col h-full">
              <motion.div 
                className="flex items-center gap-4 mb-8"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
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
              </motion.div>
              
              <div className="flex-1 flex items-center justify-center py-6">
                {/* Diagram */}
                <div className="flex items-center gap-6 w-full justify-center">
                   {/* App Node */}
                   <div className="flex flex-col items-center gap-3">
                      <motion.div 
                        className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center relative"
                        style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)' }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Globe className="w-9 h-9 text-gray-300" strokeWidth={2} />
                      </motion.div>
                      <span className="text-xs text-gray-400 font-semibold font-mono">Platform</span>
                   </div>

                   {/* Connection 1 */}
                   <div className="h-0.5 w-20 bg-gradient-to-r from-gray-700 via-cyan-500 to-cyan-500 relative">
                      <motion.div 
                        animate={{ x: [-8, 80, -8] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-cyan-400 rounded-full"
                        style={{ boxShadow: '0 0 15px rgba(6, 182, 212, 0.8)' }}
                      />
                   </div>

                   {/* Proxy Node (Hero) */}
                   <div className="flex flex-col items-center gap-3 relative">
                      <motion.div
                        className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div 
                        className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#0a0a0c] to-[#0c1420] border-2 border-cyan-400 flex items-center justify-center relative"
                        style={{ boxShadow: '0 0 40px rgba(6, 182, 212, 0.4), inset 0 0 20px rgba(6, 182, 212, 0.1)' }}
                        whileHover={{ scale: 1.15 }}
                        animate={{
                          borderColor: ['rgba(6, 182, 212, 1)', 'rgba(6, 182, 212, 0.5)', 'rgba(6, 182, 212, 1)']
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Network className="w-11 h-11 text-cyan-400" strokeWidth={2.5} />
                      </motion.div>
                      <span className="text-sm text-cyan-400 font-mono font-black tracking-wider">WS Proxy</span>
                   </div>

                   {/* Connection 2 */}
                   <div className="h-0.5 w-20 bg-gradient-to-r from-cyan-500 to-gray-700 relative">
                      <motion.div 
                        animate={{ x: [-8, 80, -8] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.25 }}
                        className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-cyan-400 rounded-full"
                        style={{ boxShadow: '0 0 15px rgba(6, 182, 212, 0.8)' }}
                      />
                   </div>

                   {/* DLL Node */}
                   <div className="flex flex-col items-center gap-3">
                      <motion.div 
                        className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center relative"
                        style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)' }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Server className="w-9 h-9 text-gray-300" strokeWidth={2} />
                      </motion.div>
                      <span className="text-xs text-gray-400 font-semibold font-mono">Sensor DLL</span>
                   </div>
                </div>
              </div>

              <motion.div 
                className="mt-6 flex items-center gap-3 text-sm text-gray-300 bg-black/30 p-4 rounded-xl border border-cyan-500/20"
                whileHover={{ borderColor: 'rgba(6, 182, 212, 0.4)' }}
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" strokeWidth={2} />
                <p className="leading-relaxed">Decoupled architecture enables hardware agnosticism & stability.</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Data Governance */}
          <motion.div 
            variants={itemVariants}
            onHoverStart={() => setHoveredCard(4)}
            onHoverEnd={() => setHoveredCard(null)}
            className="col-span-3 bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-red-500/20 rounded-3xl p-6 relative overflow-hidden group cursor-default flex flex-col"
            style={{
              boxShadow: hoveredCard === 4
                ? '0 0 50px rgba(239, 68, 68, 0.2), inset 0 0 30px rgba(239, 68, 68, 0.05)'
                : '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Background Glow */}
            <motion.div 
              className="absolute top-[-30%] right-[-20%] w-[300px] h-[300px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
              animate={{
                scale: hoveredCard === 4 ? [1, 1.3, 1.2] : [1, 1.1, 1],
                opacity: hoveredCard === 4 ? [0.3, 0.5, 0.4] : [0.15, 0.25, 0.2]
              }}
              transition={{
                duration: hoveredCard === 4 ? 2 : 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center backdrop-blur-sm">
                    <Lock className="w-6 h-6 text-red-400" strokeWidth={2} />
                  </div>
                  <span className="font-semibold uppercase tracking-[0.15em] text-xs text-red-400">Security</span>
                </motion.div>
                <motion.span 
                  className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-emerald-500 text-black"
                  whileHover={{ scale: 1.05 }}
                  style={{ boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)' }}
                >
                  Deployed
                </motion.span>
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
              
              <motion.div 
                className="mt-auto"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <div className="bg-red-500/10 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-red-400" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Feature</div>
                    <div className="text-base font-bold text-white">Unified Profiles</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Batbox Connect Milestone */}
          <motion.div 
            variants={itemVariants}
            onHoverStart={() => setHoveredCard(5)}
            onHoverEnd={() => setHoveredCard(null)}
            className="col-span-3 bg-gradient-to-br from-[#0c0c0e] to-[#0a2818] border border-emerald-500/30 rounded-3xl p-6 relative overflow-hidden group cursor-default flex flex-col"
            style={{
              boxShadow: hoveredCard === 5
                ? '0 0 50px rgba(16, 185, 129, 0.25), inset 0 0 30px rgba(16, 185, 129, 0.08)'
                : '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Background Glow */}
            <motion.div 
              className="absolute top-[-30%] right-[-20%] w-[300px] h-[300px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
              animate={{
                scale: hoveredCard === 5 ? [1, 1.3, 1.2] : [1, 1.1, 1],
                opacity: hoveredCard === 5 ? [0.4, 0.6, 0.5] : [0.2, 0.35, 0.25]
              }}
              transition={{
                duration: hoveredCard === 5 ? 2 : 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center backdrop-blur-sm">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" strokeWidth={2} />
                  </div>
                  <span className="font-semibold uppercase tracking-[0.15em] text-xs text-emerald-400">Milestone</span>
                </motion.div>
                <motion.span 
                  className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-emerald-500 text-black"
                  whileHover={{ scale: 1.05 }}
                  style={{ boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)' }}
                >
                  Launched
                </motion.span>
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

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/20 rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px rgba(6, 182, 212, 0.4)'
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};
