import React, { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";

interface SectionTitleSlideProps {
  onNext: () => void;
  onPrev: () => void;
  sectionNumber?: string;
  title?: string;
  subtitle?: string;
  accentColor?: string; // "cyan" | "purple" | "emerald" | "orange" | "blue"
  pageNumber?: number; // Add page number prop
}

export const SectionTitleSlide: React.FC<SectionTitleSlideProps> = ({ 
  onNext, 
  onPrev,
  sectionNumber = "01",
  title = "2025 Performance Data",
  subtitle = "Development Metrics • Deployment Stats • Operational Insights",
  accentColor = "cyan",
  pageNumber = 3
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Color mapping with enhanced properties
  const colorConfig = {
    cyan: { 
      text: "text-cyan-400", 
      bg: "bg-cyan-500", 
      glowRgba: "rgba(6, 182, 212, 0.15)",
      glowHeavy: "rgba(6, 182, 212, 0.3)",
      borderColor: "border-cyan-500/30"
    },
    purple: { 
      text: "text-purple-400", 
      bg: "bg-purple-500", 
      glowRgba: "rgba(168, 85, 247, 0.15)",
      glowHeavy: "rgba(168, 85, 247, 0.3)",
      borderColor: "border-purple-500/30"
    },
    emerald: { 
      text: "text-emerald-400", 
      bg: "bg-emerald-500", 
      glowRgba: "rgba(16, 185, 129, 0.15)",
      glowHeavy: "rgba(16, 185, 129, 0.3)",
      borderColor: "border-emerald-500/30"
    },
    orange: { 
      text: "text-orange-400", 
      bg: "bg-orange-500", 
      glowRgba: "rgba(249, 115, 22, 0.15)",
      glowHeavy: "rgba(249, 115, 22, 0.3)",
      borderColor: "border-orange-500/30"
    },
    blue: { 
      text: "text-blue-400", 
      bg: "bg-blue-500", 
      glowRgba: "rgba(59, 130, 246, 0.15)",
      glowHeavy: "rgba(59, 130, 246, 0.3)",
      borderColor: "border-blue-500/30"
    }
  }[accentColor] || { 
    text: "text-cyan-400", 
    bg: "bg-cyan-500", 
    glowRgba: "rgba(6, 182, 212, 0.15)",
    glowHeavy: "rgba(6, 182, 212, 0.3)",
    borderColor: "border-cyan-500/30"
  };

  const spotlightGradient = useMotionTemplate`radial-gradient(circle 700px at ${mouseX}px ${mouseY}px, ${colorConfig.glowRgba}, transparent 70%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);


  return (
    <div 
      className="w-screen h-screen bg-[#050505] text-white flex flex-col overflow-hidden relative cursor-default"
      onClick={onNext}
    >
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(${colorConfig.glowRgba.replace('0.15', '0.02')} 1px, transparent 1px),
            linear-gradient(90deg, ${colorConfig.glowRgba.replace('0.15', '0.02')} 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Radial Gradient Orbs - Dynamic color */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.12, 0.2, 0.12],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[5%] right-[10%] w-[900px] h-[900px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${colorConfig.glowRgba} 0%, transparent 70%)`,
            filter: 'blur(80px)'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[10%] left-[15%] w-[800px] h-[800px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${colorConfig.glowRgba.replace('0.15', '0.1')} 0%, transparent 70%)`,
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
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.5) 100%)'
        }}
      />


      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center font-inter max-w-[1600px] mx-auto px-12">
        
        {/* Giant Number Watermark with Enhanced Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: -100 }}
          animate={{ opacity: 0.04, scale: 1, x: 0 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
          style={{
            fontSize: '42rem',
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: '-0.05em',
            textShadow: `0 0 120px ${colorConfig.glowRgba}`
          }}
        >
          {sectionNumber}
        </motion.div>

        {/* Content Container */}
        <div className="relative z-20 text-center">
          {/* Enhanced Badge with Shimmer */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1, 
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
            className={`inline-flex items-center gap-3 px-7 py-3 mb-10 bg-gradient-to-r from-white/8 to-white/3 border ${colorConfig.borderColor} rounded-full text-base font-semibold tracking-[0.15em] uppercase ${colorConfig.text} backdrop-blur-sm relative overflow-hidden`}
            style={{
              boxShadow: `0 0 40px ${colorConfig.glowRgba}, inset 0 0 20px ${colorConfig.glowRgba.replace('0.15', '0.05')}`
            }}
          >
            {/* Shimmer effect */}
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
                background: `linear-gradient(90deg, transparent, ${colorConfig.glowHeavy}, transparent)`
              }}
            />
            <motion.span 
              className={`w-3 h-3 rounded-full ${colorConfig.bg} relative z-10`}
              style={{
                boxShadow: `0 0 15px ${colorConfig.glowHeavy}`
              }}
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <span className="relative z-10">Section {sectionNumber}</span>
          </motion.div>

          {/* Title with Multi-Line Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="text-8xl md:text-9xl font-black text-white mb-12 tracking-[-0.03em] leading-[0.95] max-w-5xl mx-auto"
            style={{ 
              textShadow: `0 4px 60px ${colorConfig.glowRgba}, 0 8px 40px rgba(0, 0, 0, 0.6)`,
              background: `linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {title}
          </motion.h1>

          {/* Enhanced Divider with Animated Glow */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ 
              duration: 1.5, 
              delay: 0.8, 
              ease: [0.22, 1, 0.36, 1]
            }}
            className="relative w-40 h-[3px] mx-auto mb-12"
          >
            <motion.div
              className={`absolute inset-0 ${colorConfig.bg} rounded-full`}
              style={{
                boxShadow: `0 0 30px ${colorConfig.glowHeavy}, 0 0 60px ${colorConfig.glowRgba}`
              }}
              animate={{
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Traveling light pulse */}
            <motion.div
              className={`absolute top-0 left-0 w-8 h-[3px] rounded-full ${colorConfig.bg}`}
              style={{
                boxShadow: `0 0 20px ${colorConfig.glowHeavy}`,
                filter: 'blur(2px)'
              }}
              animate={{
                x: [0, 128, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1
              }}
            />
          </motion.div>

          {/* Subtitle with Enhanced Styling */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 1.1,
              ease: [0.22, 1, 0.36, 1]
            }}
            className={`text-2xl md:text-3xl font-light ${colorConfig.text} tracking-wide max-w-4xl mx-auto leading-relaxed`}
            style={{
              textShadow: `0 0 40px ${colorConfig.glowRgba}, 0 4px 20px rgba(0, 0, 0, 0.5)`
            }}
          >
            {subtitle}
          </motion.p>

          {/* Decorative Accent Lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="absolute -left-32 top-1/2 -translate-y-1/2 hidden xl:block"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-20 h-[1px] mb-3 ${colorConfig.bg}`}
                style={{
                  opacity: 0.3 - i * 0.1
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5 + i * 0.1, duration: 0.8 }}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="absolute -right-32 top-1/2 -translate-y-1/2 hidden xl:block"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-20 h-[1px] mb-3 ${colorConfig.bg}`}
                style={{
                  opacity: 0.3 - i * 0.1
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.5 + i * 0.1, duration: 0.8 }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Floating Particles - Color matched */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 ${colorConfig.bg} rounded-full pointer-events-none opacity-40`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: `0 0 10px ${colorConfig.glowRgba}`
          }}
          animate={{
            y: [0, -120, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

    </div>
  );
};