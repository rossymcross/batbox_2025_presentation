import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { Layers, Target, Rocket, Monitor } from "lucide-react";

interface IndexSlideProps {
  onNext: () => void;
  onPrev: () => void;
  onNavigate?: (slideIndex: number) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
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

const sections = [
  {
    number: "01",
    title: "Technology Overview 2025",
    description: "Development metrics, system architecture, and platform infrastructure achievements from the past year.",
    icon: Monitor,
    iconProps: { strokeWidth: 1.75 },
    color: "cyan",
    bgGradient: "from-cyan-500/10 to-cyan-500/5",
    borderColor: "border-cyan-500/20",
    textColor: "text-cyan-400",
    glowColor: "rgba(6, 182, 212, 0.15)",
    hoverGlow: "rgba(6, 182, 212, 0.25)",
    colSpan: "col-span-3",
    targetSlide: 2
  },
  {
    number: "02",
    title: "2026 Product Roadmap and Strategy",
    description: "Corporate goals, KPIs, roadmap milestones, and strategic direction for the year ahead.",
    icon: Target,
    iconProps: { strokeWidth: 1.75 },
    color: "orange",
    bgGradient: "from-orange-500/10 to-orange-500/5",
    borderColor: "border-orange-500/20",
    textColor: "text-orange-400",
    glowColor: "rgba(249, 115, 22, 0.15)",
    hoverGlow: "rgba(249, 115, 22, 0.25)",
    colSpan: "col-span-3",
    targetSlide: 15
  },
  {
    number: "03",
    title: "Batbox Suite",
    description: "Self-service platform ecosystem, queue system, superadmin, avatars, and player engagement features.",
    icon: Layers,
    iconProps: { strokeWidth: 1.75 },
    color: "purple",
    bgGradient: "from-purple-500/10 to-purple-500/5",
    borderColor: "border-purple-500/20",
    textColor: "text-purple-400",
    glowColor: "rgba(168, 85, 247, 0.15)",
    hoverGlow: "rgba(168, 85, 247, 0.25)",
    colSpan: "col-span-3",
    targetSlide: 23
  },
  {
    number: "04",
    title: "Strategic Initiatives",
    description: "AI development, CDP implementation, in-house tech team transition, and advertising revenue streams.",
    icon: Rocket,
    iconProps: { strokeWidth: 1.75 },
    color: "blue",
    bgGradient: "from-blue-500/10 to-blue-500/5",
    borderColor: "border-blue-500/20",
    textColor: "text-blue-400",
    glowColor: "rgba(59, 130, 246, 0.15)",
    hoverGlow: "rgba(59, 130, 246, 0.25)",
    colSpan: "col-span-3",
    targetSlide: 28
  }
];

export const IndexSlide: React.FC<IndexSlideProps> = ({ onNext, onPrev, onNavigate }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightGradient = useMotionTemplate`radial-gradient(circle 600px at ${mouseX}px ${mouseY}px, rgba(6, 182, 212, 0.04), transparent 70%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);



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
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[10%] left-[15%] w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[5%] right-[10%] w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)'
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
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.3) 100%)'
        }}
      />


      <div className="relative z-10 w-full h-full flex flex-col font-inter max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-6 mb-3">
            <h2 
              className="text-7xl font-black text-white tracking-[-0.02em]" 
              style={{ 
                textShadow: '0 4px 40px rgba(6, 182, 212, 0.15), 0 2px 20px rgba(0, 0, 0, 0.5)' 
              }}
            >
              Presentation Overview
            </h2>
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 text-cyan-400 text-sm font-semibold uppercase tracking-[0.15em] backdrop-blur-sm translate-y-1"
            >
              Agenda
            </motion.span>
          </div>
          <p 
            className="text-2xl text-gray-400 font-light tracking-[-0.01em]"
            style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.5)' }}
          >
            What we'll cover today
          </p>
        </motion.div>

        {/* Content: Section Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-6 gap-6 min-h-0"
        >
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              onHoverStart={() => setHoveredCard(idx)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`${section.colSpan} bg-gradient-to-br from-[#0c0c0e] to-[#151518] border ${section.borderColor} rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-black/60 flex flex-col group backdrop-blur-sm`}
              style={{
                borderWidth: '1.5px',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
              {/* Animated Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                animate={hoveredCard === idx ? {
                  boxShadow: `inset 0 0 40px ${section.hoverGlow}, 0 0 60px ${section.glowColor}`
                } : {
                  boxShadow: `inset 0 0 0px ${section.glowColor}, 0 0 0px ${section.glowColor}`
                }}
                transition={{ duration: 0.4 }}
              />

              {/* Background Gradient Orb */}
              <motion.div 
                animate={{ 
                  scale: hoveredCard === idx ? [1, 1.3, 1.2] : [1, 1.1, 1],
                  opacity: hoveredCard === idx ? [0.3, 0.5, 0.4] : [0.15, 0.25, 0.2]
                }}
                transition={{ 
                  duration: hoveredCard === idx ? 2 : 6, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
                className="absolute top-[-20%] right-[-10%] w-[350px] h-[350px] rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${section.glowColor} 0%, transparent 70%)`,
                  filter: 'blur(60px)'
                }}
              />

              {/* Shimmer Effect on Hover */}
              <motion.div
                className="absolute inset-0 -translate-x-full pointer-events-none"
                animate={hoveredCard === idx ? {
                  translateX: ['100%', '200%']
                } : {}}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut"
                }}
                style={{
                  background: `linear-gradient(90deg, transparent, ${section.glowColor}, transparent)`
                }}
              />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Number & Icon Row */}
                <div className="flex items-center justify-between mb-6">
                  <motion.span 
                    className={`text-7xl font-black ${section.textColor} opacity-[0.08]`}
                    style={{
                      fontVariantNumeric: 'tabular-nums'
                    }}
                  >
                    {section.number}
                  </motion.span>
                  <motion.div 
                    className={`p-4 rounded-2xl bg-gradient-to-br ${section.bgGradient} border ${section.borderColor} backdrop-blur-sm relative overflow-hidden`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      boxShadow: hoveredCard === idx ? `0 0 30px ${section.glowColor}` : 'none'
                    }}
                  >
                    {/* Icon background glow */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      animate={hoveredCard === idx ? {
                        opacity: [0.3, 0.6, 0.3]
                      } : { opacity: 0 }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        background: `radial-gradient(circle, ${section.glowColor} 0%, transparent 70%)`
                      }}
                    />
                    <section.icon 
                      className={`w-7 h-7 ${section.textColor} relative z-10`}
                      strokeWidth={section.iconProps?.strokeWidth || 1.75}
                    />
                  </motion.div>
                </div>
                
                {/* Title */}
                <motion.h3 
                  className="text-3xl font-bold text-white mb-4 tracking-[-0.01em] leading-tight"
                  style={{
                    textShadow: hoveredCard === idx 
                      ? `0 0 30px ${section.glowColor}, 0 4px 20px rgba(0, 0, 0, 0.5)` 
                      : '0 2px 15px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {section.title}
                </motion.h3>
                
                {/* Description */}
                <p className="text-base text-gray-300/90 font-normal leading-relaxed flex-1">
                  {section.description}
                </p>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/20 rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0]
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