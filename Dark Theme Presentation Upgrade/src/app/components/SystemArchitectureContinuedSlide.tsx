import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { Globe, Calendar, Cloud, Clock, Smartphone, Users, Database, Code, Settings, WifiOff, Zap, MapPin, TrendingUp, Layout, BarChart, UserCheck, CheckCircle2, Timer } from "lucide-react";
import iaapaLogo from '../../assets/f2a14099d7c2e80ca328dba12facf4ab39d5613e.png';

interface SystemArchitectureContinuedSlideProps {
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

export const SystemArchitectureContinuedSlide: React.FC<SystemArchitectureContinuedSlideProps> = ({ onNext, onPrev }) => {
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
    <div className="w-screen h-screen bg-[#050505] text-white p-12 flex flex-col overflow-hidden relative">
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
            x: [0, 50, 0],
            y: [0, -40, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[5%] right-[10%] w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.18, 0.1],
            x: [0, -40, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute bottom-[10%] left-[5%] w-[800px] h-[800px] rounded-full"
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
          className="mb-10"
        >
          <div className="flex items-center gap-5 mb-3">
            <h2 
              className="text-6xl font-black tracking-[-0.02em]"
              style={{
                background: 'linear-gradient(to right, #ffffff 0%, #a0a0a0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 4px 40px rgba(6, 182, 212, 0.15)'
              }}
            >
              2025 Development Summary
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
              <span className="relative z-10">System Architecture</span>
            </motion.span>
          </div>
          <p 
            className="text-2xl text-gray-400 font-light max-w-4xl tracking-[-0.01em]"
            style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.5)' }}
          >
            International deployment milestones and platform modernization.
          </p>
        </motion.div>

        {/* Main Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-12 grid-rows-2 gap-6 min-h-0"
        >
          {/* Mexico Launch - Large Featured Card */}
          <motion.div 
            variants={itemVariants} 
            onHoverStart={() => setHoveredCard(0)}
            onHoverEnd={() => setHoveredCard(null)}
            className="col-span-8 bg-gradient-to-br from-[#0c0c0e] to-[#0f1728] border border-blue-500/20 rounded-3xl p-6 relative overflow-hidden group cursor-default"
            style={{
              boxShadow: hoveredCard === 0 
                ? '0 0 60px rgba(59, 130, 246, 0.2), inset 0 0 40px rgba(59, 130, 246, 0.05)'
                : '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Background Glow */}
            <motion.div 
              className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                filter: 'blur(80px)'
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

            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 -translate-x-full pointer-events-none"
              animate={hoveredCard === 0 ? {
                translateX: ['100%', '200%']
              } : {}}
              transition={{
                duration: 1.5,
                ease: "easeInOut"
              }}
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.15), transparent)'
              }}
            />
            
            <div className="relative z-10 h-full flex flex-col">
              {/* Badge */}
              <motion.div 
                className="flex items-center gap-3 text-blue-400 mb-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                  <Globe className="w-5 h-5" strokeWidth={2} />
                </div>
                <span className="font-semibold uppercase tracking-[0.15em] text-xs">Global Milestone</span>
              </motion.div>
              
              <div className="flex-1 flex flex-col">
                <h3 
                  className="text-3xl font-black text-white mb-3 leading-tight tracking-[-0.01em]"
                  style={{
                    textShadow: '0 4px 30px rgba(59, 130, 246, 0.2), 0 2px 15px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  Addison Launch – First Fully Independent Deployment
                </h3>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                  First live deployment on Batbox-owned infrastructure in <span className="text-white font-semibold">Addison</span>. 
                  Cloud-based architecture connecting Master Portal, Websites, and Kiosks through AWS and Baseball Connect.
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <motion.div 
                    className="bg-black/30 p-4 rounded-xl border border-white/10 backdrop-blur-sm relative overflow-hidden group/stat"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity"
                    />
                    <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider relative z-10">Windows 10 Upgrade</div>
                    <div className="flex items-end gap-2 relative z-10">
                      <span className="text-2xl font-black text-white">2 Months</span>
                      <span className="text-xs text-gray-500 mb-1 line-through">vs 5-6 mo</span>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="bg-black/30 p-4 rounded-xl border border-white/10 backdrop-blur-sm relative overflow-hidden group/stat"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity"
                    />
                    <div className="text-xs text-gray-400 mb-1 uppercase tracking-wider relative z-10">Unity 6.0 Upgrade</div>
                    <div className="flex items-end gap-2 relative z-10">
                      <span className="text-2xl font-black text-white">2 Months</span>
                      <span className="text-xs text-gray-500 mb-1 line-through">vs 1-2 yrs</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data & Analytics Card */}
          <motion.div 
            variants={itemVariants}
            onHoverStart={() => setHoveredCard(1)}
            onHoverEnd={() => setHoveredCard(null)}
            className="col-span-4 bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-purple-500/20 rounded-3xl p-8 relative overflow-hidden group cursor-default"
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

            <div className="relative z-10 h-full flex flex-col">
              {/* Badge */}
              <motion.div 
                className="flex items-center gap-3 text-purple-400 mb-6"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
                  <BarChart className="w-6 h-6" strokeWidth={2} />
                </div>
                <span className="font-semibold uppercase tracking-[0.15em] text-sm">Intelligence</span>
              </motion.div>
              
              <h3 
                className="text-3xl font-black text-white mb-5 tracking-[-0.01em]"
                style={{
                  textShadow: '0 4px 30px rgba(168, 85, 247, 0.2), 0 2px 15px rgba(0, 0, 0, 0.5)'
                }}
              >
                Data & Analytics
              </h3>
              
              <div className="space-y-5 flex-1">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Built data capture systems with <span className="text-white font-bold">200+ gameplay metrics</span>.
                </p>
                <ul className="space-y-3">
                  {[
                    "Automated alerts",
                    "Real-time engagement dashboards",
                    "Repeat visit tracking"
                  ].map((item, idx) => (
                    <motion.li 
                      key={idx}
                      className="flex items-center gap-3 text-gray-300 text-base group/item"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-purple-500"
                        style={{
                          boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)'
                        }}
                        animate={{
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: idx * 0.3
                        }}
                      />
                      <span className="group-hover/item:text-white transition-colors">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* IAAPA Innovation Debut - Emerald Theme */}
          <motion.div 
            variants={itemVariants}
            onHoverStart={() => setHoveredCard(2)}
            onHoverEnd={() => setHoveredCard(null)}
            className="col-span-8 bg-gradient-to-br from-[#0c0c0e] to-[#0d1713] border border-emerald-500/20 rounded-3xl p-6 relative overflow-hidden group cursor-default"
            style={{
              boxShadow: hoveredCard === 2
                ? '0 0 60px rgba(16, 185, 129, 0.2), inset 0 0 40px rgba(16, 185, 129, 0.05)'
                : '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Background Glow */}
            <motion.div 
              className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
                filter: 'blur(80px)'
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

            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 -translate-x-full pointer-events-none"
              animate={hoveredCard === 2 ? {
                translateX: ['100%', '200%']
              } : {}}
              transition={{
                duration: 1.5,
                ease: "easeInOut"
              }}
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.15), transparent)'
              }}
            />

            <div className="relative z-10 h-full flex flex-col">
              {/* Top Row: Logo + Header */}
              <div className="flex items-center justify-between mb-3">
                {/* IAAPA Logo */}
                <motion.div 
                  className="w-[180px] h-[45px] rounded-lg bg-white/95 p-2 flex items-center justify-center shadow-xl backdrop-blur-sm"
                  style={{
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                  }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={iaapaLogo} alt="IAAPA" className="w-full h-full object-contain" />
                </motion.div>

                {/* Badge and Success Tag */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" strokeWidth={2} />
                    </div>
                    <span className="font-semibold uppercase tracking-[0.12em] text-[10px] text-emerald-400">
                      Innovation Debut
                    </span>
                  </div>
                  
                  <motion.span 
                    className="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-[0.12em] bg-emerald-500 text-black shadow-lg"
                    style={{
                      boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)'
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    Success
                  </motion.span>
                </div>
              </div>

              {/* Title */}
              <h3 
                className="text-xl font-black text-white tracking-[-0.01em] mb-3"
                style={{
                  textShadow: '0 4px 30px rgba(16, 185, 129, 0.2), 0 2px 15px rgba(0, 0, 0, 0.5)'
                }}
              >
                Self-Service Kiosk
              </h3>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-2.5 flex-1">
                {[
                  { icon: UserCheck, title: "End-to-End Demo Flow", desc: "Player selection, duration choice, SMS verification." },
                  { icon: Calendar, title: "Smart Scheduling", desc: "Logic tailored for IAAPA demo sessions." },
                  { icon: Timer, title: "Bookable 10 Min Games", desc: "Schedule quickfire games back to back." },
                  { icon: Users, title: "Lead Acquisition", desc: "Hundreds of accounts from potential customers." }
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    className="bg-black/30 p-3 rounded-xl border border-white/5 hover:border-emerald-500/20 transition-all group/feature"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-start gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover/feature:bg-emerald-500/20 transition-colors">
                        <feature.icon className="w-3.5 h-3.5 text-emerald-400" strokeWidth={2} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white mb-0.5 truncate">{feature.title}</div>
                        <div className="text-[11px] text-gray-400 leading-snug">{feature.desc}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Onboarding Efficiency - Cyan Theme */}
          <motion.div 
            variants={itemVariants}
            onHoverStart={() => setHoveredCard(3)}
            onHoverEnd={() => setHoveredCard(null)}
            className="col-span-4 bg-gradient-to-br from-[#0c0c0e] to-[#0e1620] border border-cyan-500/20 rounded-3xl p-8 relative overflow-hidden group cursor-default"
            style={{
              boxShadow: hoveredCard === 3
                ? '0 0 50px rgba(6, 182, 212, 0.2), inset 0 0 30px rgba(6, 182, 212, 0.05)'
                : '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Background Glow */}
            <motion.div 
              className="absolute top-[-30%] right-[-20%] w-[300px] h-[300px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
              animate={{
                scale: hoveredCard === 3 ? [1, 1.3, 1.2] : [1, 1.1, 1],
                opacity: hoveredCard === 3 ? [0.3, 0.5, 0.4] : [0.15, 0.25, 0.2]
              }}
              transition={{
                duration: hoveredCard === 3 ? 2 : 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="relative z-10 h-full flex flex-col">
              {/* Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
                  <Zap className="w-6 h-6 text-cyan-400" strokeWidth={2} />
                </div>
                <div>
                  <motion.span 
                    className="font-semibold uppercase tracking-[0.15em] text-xs text-cyan-400 block"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.3 }}
                  >
                    Efficiency
                  </motion.span>
                  <h3 
                    className="text-2xl font-black text-white tracking-[-0.01em]"
                    style={{
                      textShadow: '0 4px 30px rgba(6, 182, 212, 0.2), 0 2px 15px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    Onboarding Speed
                  </h3>
                </div>
              </div>

              {/* Main Stat Display */}
              <div className="bg-black/30 p-6 rounded-2xl border border-white/5 mb-6">
                <div className="text-sm text-gray-400 mb-3 uppercase tracking-wider">Time to First Pitch</div>
                <div className="text-5xl font-black text-white mb-6">
                  ≤3 <span className="text-2xl text-cyan-400 font-bold">Minutes</span>
                </div>
                
                {/* Comparison Bars */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                      <span>Previous (Addison)</span>
                      <span>~6 min</span>
                    </div>
                    <div className="w-full h-2.5 bg-white/10 rounded-full" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-[10px] uppercase tracking-wider text-cyan-400 font-black">
                      <span>New (Addison)</span>
                      <span>≤3 min</span>
                    </div>
                    <div className="w-full h-2.5 bg-cyan-500/10 rounded-full overflow-hidden relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '50%' }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                        className="absolute left-0 top-0 h-full bg-cyan-500 rounded-full"
                        style={{ boxShadow: '0 0 15px rgba(6, 182, 212, 0.6)' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mt-auto">
                {[
                  { icon: Users, label: "Direct Profile Connection" }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20 group/item"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + idx * 0.1 }}
                    whileHover={{ x: 3 }}
                  >
                    <div className="bg-cyan-500/10 p-2 rounded-lg group-hover/item:bg-cyan-500/20 transition-colors">
                      <item.icon className="w-4 h-4 text-cyan-400" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Feature</div>
                      <div className="text-sm font-bold text-white">{item.label}</div>
                    </div>
                  </motion.div>
                ))}
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