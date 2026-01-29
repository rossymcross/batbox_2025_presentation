import React, { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { Target, Calendar, Users } from "lucide-react";
import batboxEcosystemImage from "../../assets/batbox-ecosystem.png";

interface BatboxEcosystemSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export const BatboxEcosystemSlide: React.FC<BatboxEcosystemSlideProps> = ({ onNext, onPrev }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightGradient = useMotionTemplate`radial-gradient(circle 800px at ${mouseX}px ${mouseY}px, rgba(168, 85, 247, 0.08), transparent 70%)`;

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
    <div className="w-screen h-screen bg-[#050505] text-white p-10 flex flex-col overflow-hidden relative selection:bg-purple-500/5">
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.2, 0.12],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[15%] left-[10%] w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.18, 0.1],
            x: [0, -30, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[10%] right-[15%] w-[800px] h-[800px] rounded-full"
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
        {/* Main Content - Two Columns */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-2 gap-16 min-h-0 items-center"
        >
          {/* Left Column - Text Content */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.h1 
                className="text-7xl font-black tracking-[-0.02em] leading-[1.1] mb-5"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 80px rgba(168, 85, 247, 0.2)'
                }}
              >
                The Batbox Ecosystem
              </motion.h1>
              <h2 className="text-3xl font-bold text-white/95 tracking-[-0.01em] leading-tight mb-6">
                Transitioning to a Self-Service, Platform-Led Ecosystem
              </h2>
              
              <p 
                className="text-xl text-gray-300 font-light leading-relaxed"
                style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.5)' }}
              >
                Strategic Vision, Product Roadmap, and Operational Execution
              </p>
            </motion.div>

            {/* Metadata Cards */}
            <motion.div 
              variants={itemVariants}
              className="space-y-4"
            >
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-purple-500/20 relative overflow-hidden group cursor-default"
                style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)' }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div 
                  className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Target className="w-6 h-6 text-purple-400" strokeWidth={2} />
                </motion.div>
                <div className="relative z-10">
                  <div className="text-xs font-bold text-purple-400 uppercase tracking-[0.15em] mb-1.5">Focus</div>
                  <div className="text-white font-semibold leading-snug">Pivot from venue operations to automated commercial platform</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-cyan-500/20 relative overflow-hidden group cursor-default"
                style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)' }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div 
                  className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Calendar className="w-6 h-6 text-cyan-400" strokeWidth={2} />
                </motion.div>
                <div className="relative z-10">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-[0.15em] mb-1.5">Timeline</div>
                  <div className="text-white font-semibold leading-snug">January – December 2026</div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-emerald-500/20 relative overflow-hidden group cursor-default"
                style={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)' }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div 
                  className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Users className="w-6 h-6 text-emerald-400" strokeWidth={2} />
                </motion.div>
                <div className="relative z-10">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-[0.15em] mb-1.5">Audience</div>
                  <div className="text-white font-semibold leading-snug">Internal Stakeholders & Strategic Partners</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Ecosystem Image */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col justify-center items-center relative h-full"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full flex items-center justify-center relative"
            >
              {/* Glowing border effect */}
              <div 
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(6, 182, 212, 0.2))',
                  filter: 'blur(30px)',
                  opacity: 0.3
                }}
              />
              
              <motion.div
                className="relative rounded-3xl overflow-hidden border border-purple-500/20 backdrop-blur-sm"
                style={{ boxShadow: '0 20px 60px rgba(168, 85, 247, 0.2), 0 0 80px rgba(6, 182, 212, 0.1)' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Shimmer effect overlay */}
                <motion.div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.03), transparent)'
                  }}
                  animate={{
                    x: ['-100%', '200%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 2
                  }}
                />
                
                <img 
                  src={batboxEcosystemImage} 
                  alt="The Batbox Ecosystem" 
                  className="max-w-full max-h-full object-contain"
                  style={{
                    filter: 'drop-shadow(0 10px 40px rgba(0, 0, 0, 0.5))'
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? 'rgba(168, 85, 247, 0.4)' : 'rgba(6, 182, 212, 0.4)',
            boxShadow: i % 2 === 0 
              ? '0 0 10px rgba(168, 85, 247, 0.6)' 
              : '0 0 10px rgba(6, 182, 212, 0.6)'
          }}
          animate={{
            y: [0, -120, 0],
            opacity: [0, 0.8, 0],
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