import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useTransform } from "motion/react";
import batboxLogo from "../../assets/b48a003eb09a9aa603c90fc81f3e8997a64d6e61.png";

interface OpeningSlideProps {
  onNext: () => void;
}

export const OpeningSlide: React.FC<OpeningSlideProps> = ({ onNext }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX = useTransform(mouseX, (value) => (value - window.innerWidth / 2) * -0.015);
  const parallaxY = useTransform(mouseY, (value) => (value - window.innerHeight / 2) * -0.015);

  const spotlightGradient = useMotionTemplate`radial-gradient(circle 800px at ${mouseX}px ${mouseY}px, rgba(6, 182, 212, 0.08), transparent 70%)`;

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
      role="button"
      tabIndex={0}
      onClick={onNext}
      onKeyDown={(e) => { if (e.key === 'Enter') onNext(); }}
      className="relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505] text-white cursor-pointer outline-none"
    >
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          animation: 'grid-pulse 8s ease-in-out infinite'
        }}
      />

      {/* Radial Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[-10%] left-[-5%] w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
            filter: 'blur(60px)'
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

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-[1100px] px-8 font-inter">
        {/* Logo with Enhanced Effects */}
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.2, 
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mb-16 flex justify-center relative"
          style={{
            x: parallaxX,
            y: parallaxY
          }}
        >
          <div className="relative">
            {/* Glow effect behind logo */}
            <div 
              className="absolute inset-0 blur-[40px] opacity-40"
              style={{
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.6) 0%, transparent 70%)',
                transform: 'scale(1.5)'
              }}
            />
            <img 
              src={batboxLogo} 
              alt="Batbox" 
              className="h-24 w-auto relative z-10 drop-shadow-[0_0_60px_rgba(6,182,212,0.4)]" 
            />
          </div>
        </motion.div>

        {/* Enhanced Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="inline-flex items-center gap-3 px-6 py-2.5 mb-10 bg-gradient-to-r from-[#06b6d4]/10 via-[#06b6d4]/5 to-transparent border border-[#06b6d4]/20 rounded-full text-sm font-semibold text-[#06b6d4] tracking-[0.15em] uppercase backdrop-blur-sm relative overflow-hidden"
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
              background: 'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.2), transparent)'
            }}
          />
          <motion.span
            className="w-2.5 h-2.5 rounded-full relative z-10"
            style={{
              background: 'radial-gradient(circle, #06b6d4 40%, rgba(6, 182, 212, 0.4) 100%)',
              boxShadow: '0 0 12px rgba(6, 182, 212, 0.8)'
            }}
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [1, 0.6, 1]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <span className="relative z-10">Corporate Strategy Update</span>
        </motion.div>

        {/* Main Title with Enhanced Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mb-10"
        >
          <h1 className="mb-6">
            <motion.span 
              className="block text-6xl md:text-8xl font-black tracking-[-0.03em] leading-[1.05] relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <span 
                className="bg-gradient-to-br from-[#06b6d4] via-[#0891b2] to-[#3B82F6] bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 80px rgba(6, 182, 212, 0.3)'
                }}
              >
                Strategy and
              </span>
              <br />
              <span 
                className="bg-gradient-to-br from-[#3B82F6] via-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 80px rgba(59, 130, 246, 0.3)'
                }}
              >
                Performance Review
              </span>
            </motion.span>
          </h1>
        </motion.div>

        {/* Enhanced Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 1.3,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="text-2xl md:text-3xl font-light text-gray-300/90 mb-14 max-w-4xl mx-auto tracking-[-0.01em] leading-relaxed"
          style={{
            textShadow: '0 2px 20px rgba(0, 0, 0, 0.5)'
          }}
        >
          2025 Performance, Technology Suite, Installations & 2026 KPIs
        </motion.p>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ 
            duration: 1.5, 
            delay: 1.6,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="relative w-48 h-[1px] mx-auto"
        >
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#06b6d4] to-transparent"
            style={{
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.6)'
            }}
          />
          <motion.div
            className="absolute top-1/2 left-0 w-2 h-2 rounded-full -translate-y-1/2 bg-[#06b6d4]"
            style={{
              boxShadow: '0 0 15px rgba(6, 182, 212, 0.8)'
            }}
            animate={{
              x: [0, 180, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1
            }}
          />
        </motion.div>
      </div>

    </div>
  );
};