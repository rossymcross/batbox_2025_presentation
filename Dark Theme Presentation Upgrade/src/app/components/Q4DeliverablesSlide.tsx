import React, { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { Calendar, Gauge, Gift, Tv, FileText, Shield, UserCheck, CheckCircle2 } from "lucide-react";
import jumbotronImage from "../../assets/jumbotron.png";

interface Q4DeliverablesSlideProps {
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

export const Q4DeliverablesSlide: React.FC<Q4DeliverablesSlideProps> = ({ onNext, onPrev }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightGradient = useMotionTemplate`radial-gradient(circle 800px at ${mouseX}px ${mouseY}px, rgba(245, 158, 11, 0.06), transparent 70%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const features = [
    { icon: Gauge, text: "Platform performance and scale hardening", color: "cyan" },
    { icon: Gift, text: "Expansion of XP, loyalty, referrals, and social features", color: "emerald" },
    { icon: Tv, text: "Advertising and sponsorship readiness via Batbox Display", color: "purple" },
    { icon: FileText, text: "Full documentation of systems, data, and tooling", color: "orange" },
    { icon: Shield, text: "Internal ownership of platform and infrastructure", color: "amber" },
    { icon: UserCheck, text: "Foundation complete for CTO onboarding in 2027", color: "pink" },
  ];

  return (
    <div className="w-screen h-screen bg-[#050505] text-white p-10 flex flex-col overflow-hidden relative selection:bg-amber-500/5">
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245, 158, 11, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.02) 1px, transparent 1px)
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
            x: [0, -30, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[10%] left-[15%] w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[15%] right-[10%] w-[800px] h-[800px] rounded-full"
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
          className="mb-10"
        >
          <div className="flex items-center gap-5 mb-2">
            <motion.div 
              className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              style={{ boxShadow: '0 0 20px rgba(245, 158, 11, 0.2)' }}
            >
              <Calendar className="w-7 h-7 text-amber-400" strokeWidth={2} />
            </motion.div>
            <div>
              <h1 
                className="text-6xl font-black tracking-[-0.02em]"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                2026 Q4
              </h1>
              <p className="text-xl text-gray-300 font-semibold tracking-wide mt-1">Major Software Deliverables</p>
            </div>
          </div>
        </motion.div>

        {/* Main Content - Two Columns */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-2 gap-10 min-h-0"
        >
          {/* Left Column - Milestone Info */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col"
          >
            {/* Major Milestone Card */}
            <div 
              className="bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-amber-500/20 rounded-3xl p-8 relative overflow-hidden flex-1"
              style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(245, 158, 11, 0.03)' }}
            >
              {/* Top gradient bar */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-2 origin-left"
                style={{
                  background: 'linear-gradient(to right, rgba(245, 158, 11, 1), rgba(6, 182, 212, 1))',
                  boxShadow: '0 0 20px rgba(245, 158, 11, 0.5)'
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              />
              
              {/* Background glow */}
              <motion.div 
                className="absolute top-0 right-0 w-80 h-80 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
                  filter: 'blur(80px)'
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10 h-full flex flex-col">
                <motion.div 
                  className="flex items-center gap-3 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <CheckCircle2 className="w-7 h-7 text-amber-400" strokeWidth={2.5} />
                  <span className="text-amber-400 font-bold text-base uppercase tracking-[0.15em]">Major Milestone</span>
                </motion.div>
                
                <motion.h2 
                  className="text-3xl font-black text-white mb-8 tracking-[-0.02em]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  style={{ textShadow: '0 4px 30px rgba(245, 158, 11, 0.2)' }}
                >
                  Player Engagement, Monetization Readiness & Transition
                </motion.h2>
                
                <div className="space-y-3 flex-1">
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className={`flex items-center gap-4 p-3 rounded-xl bg-black/40 border transition-all duration-300 cursor-default ${
                        feature.color === 'cyan' ? 'border-cyan-500/20 hover:border-cyan-500/40' :
                        feature.color === 'emerald' ? 'border-emerald-500/20 hover:border-emerald-500/40' :
                        feature.color === 'purple' ? 'border-purple-500/20 hover:border-purple-500/40' :
                        feature.color === 'orange' ? 'border-orange-500/20 hover:border-orange-500/40' :
                        feature.color === 'amber' ? 'border-amber-500/20 hover:border-amber-500/40' :
                        'border-pink-500/20 hover:border-pink-500/40'
                      }`}
                      style={{ 
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)' 
                      }}
                    >
                      <motion.div 
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          feature.color === 'cyan' ? 'bg-cyan-500/10 border border-cyan-500/30' :
                          feature.color === 'emerald' ? 'bg-emerald-500/10 border border-emerald-500/30' :
                          feature.color === 'purple' ? 'bg-purple-500/10 border border-purple-500/30' :
                          feature.color === 'orange' ? 'bg-orange-500/10 border border-orange-500/30' :
                          feature.color === 'amber' ? 'bg-amber-500/10 border border-amber-500/30' :
                          'bg-pink-500/10 border border-pink-500/30'
                        }`}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                      >
                        <feature.icon className={`w-5 h-5 ${
                          feature.color === 'cyan' ? 'text-cyan-400' :
                          feature.color === 'emerald' ? 'text-emerald-400' :
                          feature.color === 'purple' ? 'text-purple-400' :
                          feature.color === 'orange' ? 'text-orange-400' :
                          feature.color === 'amber' ? 'text-amber-400' :
                          'text-pink-400'
                        }`} strokeWidth={2} />
                      </motion.div>
                      <span className="text-base text-white font-semibold tracking-[-0.01em]">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center relative overflow-hidden"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full flex items-center justify-center p-4"
              whileHover={{ scale: 1.02 }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div 
                  className="w-[500px] h-[500px] rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
                    filter: 'blur(60px)'
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 z-10 pointer-events-none rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)'
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
                src={jumbotronImage} 
                alt="Batbox Jumbotron - Advertising and sponsorship display system" 
                className="w-full h-full object-contain rounded-2xl relative z-10"
                style={{ 
                  maxHeight: '100%',
                  maxWidth: '100%'
                }}
              />
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
            background: i % 2 === 0 ? 'rgba(245, 158, 11, 0.4)' : 'rgba(6, 182, 212, 0.4)',
            boxShadow: i % 2 === 0 
              ? '0 0 10px rgba(245, 158, 11, 0.6)' 
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
