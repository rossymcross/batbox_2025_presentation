import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { Target, Building2, Zap, DollarSign, TrendingUp, Bot, Flag, Circle } from "lucide-react";

interface ExecutionPlanSlideProps {
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
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const ExecutionPlanSlide: React.FC<ExecutionPlanSlideProps> = ({ onNext, onPrev }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const spotlightGradient = useMotionTemplate`radial-gradient(circle 700px at ${mouseX}px ${mouseY}px, rgba(251, 146, 60, 0.05), transparent 70%)`;

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

  const focusAreas = [
    { icon: Zap, text: "Automation", desc: "End-to-end self-service workflows" },
    { icon: TrendingUp, text: "Throughput", desc: "Maximize session capacity" },
    { icon: Building2, text: "Platform Ownership", desc: "Full control of the ecosystem" },
    { icon: DollarSign, text: "Monetization Readiness", desc: "Subscriptions & revenue streams" },
    { icon: Target, text: "Operational Scale", desc: "50+ venues, 100 simulators" },
    { icon: Bot, text: "Data & AI Foundation", desc: "Long-term differentiation" },
  ];

  const successCriteria = [
    "Batbox Suite Products launched",
    "3 Pilot Program sites live and tracked",
    "Subscriptions live across ~50 venues",
    "Fully self-service product in market",
    "Master Admin Portal as system of record",
    "CDP and AI delivering insights",
    "Platform ownership institutionalized",
  ];

  return (
    <div className="w-screen h-screen bg-[#050505] text-white p-10 flex flex-col overflow-hidden relative selection:bg-orange-500/5">
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(251, 146, 60, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 146, 60, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.18, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[10%] right-[10%] w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.15) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[10%] left-[10%] w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
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
          <div className="flex items-baseline gap-5 mb-3">
            <h2 
              className="text-6xl font-black text-white tracking-[-0.02em]"
              style={{ textShadow: '0 4px 40px rgba(251, 146, 60, 0.2)' }}
            >
              Executing the 2026 Vision
            </h2>
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/30 text-orange-400 text-sm font-semibold uppercase tracking-[0.15em] backdrop-blur-sm relative overflow-hidden"
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
                  background: 'linear-gradient(90deg, transparent, rgba(251, 146, 60, 0.2), transparent)'
                }}
              />
              <span className="relative z-10">Roadmap</span>
            </motion.span>
          </div>
          <p 
            className="text-2xl text-gray-300 font-light max-w-4xl tracking-[-0.01em]"
            style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.5)' }}
          >
            Strategic pillars and success measurement.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col gap-6"
        >
          {/* Strategic Focus Areas */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-[#0c0c0e] to-[#151518] backdrop-blur-xl border border-orange-500/20 rounded-3xl p-6 relative overflow-hidden"
            style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(251, 146, 60, 0.03)' }}
          >
            <motion.div 
              className="absolute bottom-0 right-0 w-64 h-64 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(251, 146, 60, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-[0.15em] mb-6 relative z-10">Strategic Focus Areas</h3>
            
            <motion.div 
              variants={listVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-4 relative z-10"
            >
              {focusAreas.map((item, i) => (
                <motion.div 
                  key={i}
                  variants={listItemVariants}
                  onHoverStart={() => setHoveredCard(i)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 transition-all duration-300 cursor-default"
                  style={{
                    boxShadow: hoveredCard === i 
                      ? '0 0 30px rgba(251, 146, 60, 0.2), inset 0 0 20px rgba(251, 146, 60, 0.05)'
                      : '0 4px 15px rgba(0, 0, 0, 0.2)',
                    borderColor: hoveredCard === i ? 'rgba(251, 146, 60, 0.3)' : 'rgba(255, 255, 255, 0.1)'
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className="w-6 h-6 text-orange-400" strokeWidth={2} />
                  </motion.div>
                  <div>
                    <div 
                      className="text-lg font-black text-white mb-1 tracking-[-0.01em]"
                      style={{ textShadow: hoveredCard === i ? '0 0 20px rgba(251, 146, 60, 0.3)' : 'none' }}
                    >
                      {item.text}
                    </div>
                    <div className="text-sm text-gray-300">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Path to Success Visualization */}
          <motion.div 
            variants={itemVariants}
            className="flex-1 relative"
          >
            <h3 className="text-sm font-bold text-gray-300 uppercase tracking-[0.15em] mb-4">
              Path to 2026 Success
            </h3>
            
            {/* The Pathway Container */}
            <div className="relative h-[420px] bg-gradient-to-br from-[#0c0c0e] to-[#151518] rounded-3xl border border-orange-500/20 p-16" style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}>
              {/* Background decoration */}
              <div 
                className="absolute inset-0 opacity-[0.02] rounded-3xl" 
                style={{ 
                  backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', 
                  backgroundSize: '24px 24px' 
                }} 
              />

              {/* === START MARKER === */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 200 }}
                className="absolute flex flex-col items-center z-[25]"
                style={{ left: '3%', top: '50%', transform: 'translateY(-50%)' }}
              >
                <div 
                  className="w-10 h-10 rounded-full bg-white/10 border-2 border-white/40 flex items-center justify-center backdrop-blur-sm"
                  style={{ boxShadow: '0 0 25px rgba(255, 255, 255, 0.3)' }}
                >
                  <Circle className="w-3 h-3 text-white/90" fill="currentColor" />
                </div>
                <span className="text-xs font-bold text-gray-200 uppercase tracking-[0.15em] mt-3 whitespace-nowrap">Today</span>
              </motion.div>

              {/* === CENTRAL HORIZONTAL PATH LINE === */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1], delay: 1.3 }}
                className="absolute left-[8%] h-[4px] origin-left z-[15]"
                style={{
                  top: '50%',
                  marginTop: '-2px',
                  width: '86%',
                  background: 'linear-gradient(to right, rgba(251, 146, 60, 1), rgba(251, 146, 60, 0.9))',
                  boxShadow: '0 0 20px rgba(251, 146, 60, 0.8), 0 0 40px rgba(251, 146, 60, 0.4)',
                }}
              />
              
              {/* === DESTINATION FLAG === */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 3.8, type: "spring", stiffness: 150 }}
                className="absolute flex flex-col items-center z-[25]"
                style={{ left: '94%', top: '50%', transform: 'translateX(-50%) translateY(-50%)' }}
              >
                <div 
                  className="w-10 h-10 rounded-full bg-orange-500/15 border-2 border-orange-400 flex items-center justify-center backdrop-blur-sm"
                  style={{ boxShadow: '0 0 30px rgba(251, 146, 60, 0.7)' }}
                >
                  <Flag className="w-4 h-4 text-orange-400" strokeWidth={2.5} />
                </div>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-[0.15em] mt-3 whitespace-nowrap">2026</span>
              </motion.div>
              
              {/* === MILESTONE NODES === */}
              {successCriteria.map((item, i) => {
                const isAbove = i % 2 === 0;
                const leftPercent = 16 + (i * 11);
                
                const lineDelay = 1.3;
                const lineDuration = 2.5;
                const lineStart = 8;
                const lineEnd = 94;
                const milestoneDelay = lineDelay + lineDuration * ((leftPercent - lineStart) / (lineEnd - lineStart));
                
                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{ left: `${leftPercent}%`, top: '50%' }}
                  >
                    {/* Vertical Connector Line */}
                    <motion.div 
                      initial={{ opacity: 0, scaleY: 0 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      transition={{ duration: 0.5, delay: milestoneDelay, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute z-[18]"
                      style={{
                        left: '0px',
                        bottom: isAbove ? '2px' : 'auto',
                        top: isAbove ? 'auto' : '2px',
                        height: '80px',
                        width: '2px',
                        background: isAbove 
                          ? 'linear-gradient(to top, rgba(251, 146, 60, 1), rgba(251, 146, 60, 0.5))' 
                          : 'linear-gradient(to bottom, rgba(251, 146, 60, 1), rgba(251, 146, 60, 0.5))',
                        boxShadow: '0 0 10px rgba(251, 146, 60, 0.7)',
                        transformOrigin: isAbove ? 'bottom' : 'top',
                      }}
                    />
                    
                    {/* Node Circle on the main line */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: milestoneDelay + 0.15, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.5 }}
                      className="absolute w-4 h-4 rounded-full bg-[#050505] border-[3px] border-orange-400 flex items-center justify-center z-[20] cursor-pointer"
                      style={{ 
                        left: '-8px',
                        top: '-8px',
                        boxShadow: '0 0 20px rgba(251, 146, 60, 0.8)',
                      }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400" style={{ boxShadow: '0 0 8px rgba(251, 146, 60, 1)' }} />
                    </motion.div>
                    
                    {/* Text Label at end of vertical line */}
                    <motion.div 
                      initial={{ opacity: 0, y: isAbove ? 10 : -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: milestoneDelay + 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute text-center z-[19]"
                      style={{
                        left: '-100px',
                        bottom: isAbove ? '82px' : 'auto',
                        top: isAbove ? 'auto' : '82px',
                        width: '200px',
                      }}
                    >
                      <span 
                        className="text-sm text-gray-100 font-semibold leading-tight block bg-[#050505]/90 backdrop-blur-sm px-3 py-2.5 rounded-lg border border-orange-500/30"
                        style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)' }}
                      >
                        {item}
                      </span>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-orange-400/20 rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px rgba(251, 146, 60, 0.4)'
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