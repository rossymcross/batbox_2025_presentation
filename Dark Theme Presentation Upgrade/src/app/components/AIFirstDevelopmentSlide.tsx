import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { Bot, Zap, Calendar, Clock, ArrowRight, Code2, Sparkles } from "lucide-react";
import calendarViewImg from "../../assets/8d0bc9c05ef6ec412fc7b17c843514d63545f860.png";
import listViewImg from "../../assets/b7ff3bde360e3abeffbce9cb25d6df57d8a724b9.png";

interface AIFirstDevelopmentSlideProps {
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

export const AIFirstDevelopmentSlide: React.FC<AIFirstDevelopmentSlideProps> = ({ onNext, onPrev }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const spotlightGradient = useMotionTemplate`radial-gradient(circle 700px at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.05), transparent 70%)`;

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
            linear-gradient(rgba(16, 185, 129, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.02) 1px, transparent 1px)
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
          className="absolute top-[10%] right-[5%] w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
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
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
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
          className="mb-8 flex-none"
        >
          <div className="flex items-center gap-5 mb-3">
            <h2 
              className="text-6xl font-black tracking-[-0.02em]"
              style={{
                background: 'linear-gradient(to right, #ffffff 0%, #a0a0a0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 4px 40px rgba(16, 185, 129, 0.15)'
              }}
            >
              AI-First Development
            </h2>
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 text-emerald-400 text-sm font-semibold uppercase tracking-[0.15em] backdrop-blur-sm relative overflow-hidden"
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
                  background: 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.2), transparent)'
                }}
              />
              <span className="relative z-10">Innovation Velocity</span>
            </motion.span>
          </div>
          <p 
            className="text-2xl text-gray-300 font-light max-w-4xl tracking-[-0.01em]"
            style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.5)' }}
          >
            Leveraging next-generation tooling to accelerate delivery.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-12 gap-6 min-h-0"
        >
          {/* Left Column: Strategy & Metrics */}
          <div className="col-span-4 flex flex-col gap-6">
            {/* Strategy Card */}
            <motion.div 
              variants={itemVariants}
              onHoverStart={() => setHoveredCard(0)}
              onHoverEnd={() => setHoveredCard(null)}
              className="bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-emerald-500/20 rounded-3xl p-8 relative overflow-hidden group cursor-default"
              style={{
                boxShadow: hoveredCard === 0
                  ? '0 0 50px rgba(16, 185, 129, 0.25), inset 0 0 30px rgba(16, 185, 129, 0.05)'
                  : '0 20px 60px rgba(0, 0, 0, 0.5)'
              }}
            >
              <motion.div 
                className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
                  filter: 'blur(60px)'
                }}
                animate={{
                  scale: hoveredCard === 0 ? [1, 1.3, 1.2] : [1, 1.1, 1],
                  opacity: hoveredCard === 0 ? [0.4, 0.6, 0.5] : [0.2, 0.3, 0.25]
                }}
                transition={{
                  duration: hoveredCard === 0 ? 2 : 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
               
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Bot className="w-8 h-8 text-emerald-400" strokeWidth={2} />
                  </motion.div>
                  <h3 
                    className="text-2xl font-black text-white tracking-[-0.01em]"
                    style={{ textShadow: '0 2px 15px rgba(16, 185, 129, 0.2)' }}
                  >
                    The Advantage
                  </h3>
                </div>
                 
                <p className="text-gray-200 leading-relaxed text-lg font-light">
                  The development team, with its decades of experience in enterprise-grade software development, is poised to take advantage of recent advances in AI technology to allow for much faster software development than what was possible previously.
                </p>
              </div>
            </motion.div>

            {/* Metrics/Comparison Card */}
            <motion.div 
              variants={itemVariants}
              onHoverStart={() => setHoveredCard(1)}
              onHoverEnd={() => setHoveredCard(null)}
              className="flex-1 bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-white/10 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center cursor-default"
              style={{
                boxShadow: hoveredCard === 1
                  ? '0 0 50px rgba(6, 182, 212, 0.25), inset 0 0 30px rgba(6, 182, 212, 0.05)'
                  : '0 20px 60px rgba(0, 0, 0, 0.5)'
              }}
            >
              <motion.div 
                className="absolute bottom-0 left-0 w-48 h-48 rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
                  filter: 'blur(60px)'
                }}
                animate={{
                  scale: hoveredCard === 1 ? [1, 1.3, 1.2] : [1, 1.1, 1],
                  opacity: hoveredCard === 1 ? [0.4, 0.6, 0.5] : [0.2, 0.3, 0.25]
                }}
                transition={{
                  duration: hoveredCard === 1 ? 2 : 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-gray-400 mb-6 uppercase tracking-[0.15em] text-sm font-bold">
                  <Clock className="w-4 h-4" />
                  <span>Development Velocity</span>
                </div>

                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-gray-400 text-lg font-medium">Traditional Estimate</span>
                      <span className="text-red-400 text-2xl font-bold">5-7 Days</span>
                    </div>
                    <div className="w-full h-3 bg-black/40 rounded-full overflow-hidden">
                      <div 
                        className="w-full h-full bg-gradient-to-r from-red-500/40 to-red-500/20 rounded-full"
                        style={{ boxShadow: '0 0 10px rgba(239, 68, 68, 0.3)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-white text-lg font-bold">AI-Assisted Delivery</span>
                      <span className="text-emerald-400 text-4xl font-black flex items-center gap-2">
                        &lt; 1 Day
                        <Zap className="w-6 h-6 fill-emerald-400 text-emerald-400" />
                      </span>
                    </div>
                    <div className="w-full h-3 bg-black/40 rounded-full overflow-hidden relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "15%" }}
                        transition={{ duration: 1.5, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 absolute left-0 top-0 rounded-full" 
                        style={{ boxShadow: '0 0 15px rgba(16, 185, 129, 0.6)' }}
                      />
                    </div>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2, duration: 0.8 }}
                      className="mt-3 text-sm text-emerald-400 font-bold"
                      style={{ textShadow: '0 0 20px rgba(16, 185, 129, 0.4)' }}
                    >
                      85% Reduction in Time-to-Market
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Case Study Visuals */}
          <div className="col-span-8 flex flex-col gap-6">
            <motion.div 
              variants={itemVariants}
              onHoverStart={() => setHoveredCard(2)}
              onHoverEnd={() => setHoveredCard(null)}
              className="flex-1 bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-white/10 rounded-3xl p-8 relative overflow-hidden group flex flex-col cursor-default"
              style={{
                boxShadow: hoveredCard === 2
                  ? '0 0 50px rgba(234, 179, 8, 0.2), inset 0 0 30px rgba(234, 179, 8, 0.05)'
                  : '0 20px 60px rgba(0, 0, 0, 0.5)'
              }}
            >
               
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div>
                  <h3 className="text-2xl font-black text-white mb-2 flex items-center gap-3 tracking-[-0.01em]">
                    <Sparkles className="w-6 h-6 text-yellow-400" strokeWidth={2} />
                    Rapid Prototyping Case Study
                  </h3>
                  <p className="text-gray-300 font-medium">
                    High-pressure requirement: Operations needed a calendar view immediately.
                  </p>
                </div>
                <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 font-semibold backdrop-blur-sm">
                  Booking System Calendar
                </div>
              </div>

              {/* Visual Comparison */}
              <div className="flex-1 relative rounded-2xl overflow-hidden bg-black/30 border border-white/5 p-4 flex gap-4">
                {/* Before (Small) */}
                <div className="w-1/3 flex flex-col gap-2 opacity-60 hover:opacity-100 transition-opacity">
                  <span className="text-sm text-gray-400 font-bold uppercase tracking-[0.1em] pl-1">Standard List View</span>
                  <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg relative h-full">
                    <img src={listViewImg} alt="List View" className="w-full h-full object-cover object-left-top" />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex flex-col justify-center items-center text-gray-600">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-8 h-8" strokeWidth={2} />
                  </motion.div>
                </div>

                {/* After (Large) */}
                <div className="flex-1 flex flex-col gap-2">
                  <span className="text-sm text-emerald-400 font-bold uppercase tracking-[0.1em] pl-1 flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    AI-Generated Solution
                  </span>
                  <div className="rounded-xl overflow-hidden border border-emerald-500/40 shadow-2xl relative h-full group">
                    <img src={calendarViewImg} alt="Calendar View" className="w-full h-full object-cover object-left-top" />
                    {/* Glow overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: 'inset 0 0 60px rgba(16, 185, 129, 0.15)'
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/20 rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px rgba(16, 185, 129, 0.4)'
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
