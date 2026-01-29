import React, { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { Package, Users, Repeat, TrendingUp } from "lucide-react";
import astronautsImage from "../../assets/e6138832baf9743f8d6aed63f08a44ea4dd44a75.png";

interface BatboxSuiteSlideProps {
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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export const BatboxSuiteSlide: React.FC<BatboxSuiteSlideProps> = ({ onNext, onPrev }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightGradient = useMotionTemplate`radial-gradient(circle 800px at ${mouseX}px ${mouseY}px, rgba(6, 182, 212, 0.06), transparent 70%)`;

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

  const benefits = [
    { icon: Package, text: "Unlocks new venue formats", color: "cyan" },
    { icon: Repeat, text: "Increases throughput and repeat play", color: "purple" },
    { icon: TrendingUp, text: "Establishes a subscription-driven product business", color: "emerald" },
  ];

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
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
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
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)',
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
          <motion.div
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-sm mb-4"
            style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' }}
          >
            <span className="text-cyan-400 font-bold text-sm uppercase tracking-[0.15em]">
              Introducing
            </span>
          </motion.div>
          <h1 
            className="text-7xl font-black tracking-[-0.02em] mb-3"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 4px 40px rgba(6, 182, 212, 0.2)'
            }}
          >
            Batbox Suite for the Daikin Experience
          </h1>
        </motion.div>

        {/* Main Content - Two Columns */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-2 gap-12 min-h-0"
        >
          {/* Left Column - Description */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Description Card */}
            <div 
              className="bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-cyan-500/20 rounded-3xl p-8 relative overflow-hidden"
              style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(6, 182, 212, 0.03)' }}
            >
              {/* Top gradient bar */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-2 origin-left"
                style={{
                  background: 'linear-gradient(to right, rgba(6, 182, 212, 1), rgba(168, 85, 247, 1))',
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)'
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              />
              
              {/* Background glow */}
              <motion.div 
                className="absolute top-0 right-0 w-80 h-80 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
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
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                    <Package className="w-5 h-5 text-cyan-400" strokeWidth={2.5} />
                  </div>
                  <span className="text-cyan-400 font-bold text-base uppercase tracking-[0.15em]">What It Is</span>
                </div>
                
                <p className="text-xl text-gray-200 leading-relaxed mb-4 font-medium">
                  Batbox Suite is a set of <span className="text-white font-bold">commercial-ready product offerings</span> designed for:
                </p>
                
                <ul className="space-y-3 text-lg text-gray-300 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
                    <span>High-traffic, mixed-attraction venues</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2.5 shrink-0" />
                    <span>Standalone installations (malls, entertainment districts, FECs)</span>
                  </li>
                </ul>

                <p className="text-xl text-gray-200 leading-relaxed font-medium">
                  It introduces <span className="text-white font-bold">short-form, self-service gameplay</span> with arcade-style monetization, backed by a powerful operational and data-driven platform.
                </p>
              </div>
            </div>

            {/* Why It Matters Section */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-400" strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl font-black text-white tracking-[-0.01em]">Why It Matters</h2>
              </div>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className={`flex items-center gap-4 p-4 rounded-xl bg-black/40 border transition-all duration-300 cursor-default ${
                      benefit.color === 'cyan' ? 'border-cyan-500/20 hover:border-cyan-500/40' :
                      benefit.color === 'emerald' ? 'border-emerald-500/20 hover:border-emerald-500/40' :
                      'border-purple-500/20 hover:border-purple-500/40'
                    }`}
                    style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)' }}
                  >
                    <motion.div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        benefit.color === 'cyan' ? 'bg-cyan-500/10 border border-cyan-500/30' :
                        benefit.color === 'emerald' ? 'bg-emerald-500/10 border border-emerald-500/30' :
                        'bg-purple-500/10 border border-purple-500/30'
                      }`}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                    >
                      <benefit.icon className={`w-6 h-6 ${
                        benefit.color === 'cyan' ? 'text-cyan-400' :
                        benefit.color === 'emerald' ? 'text-emerald-400' :
                        'text-purple-400'
                      }`} strokeWidth={2} />
                    </motion.div>
                    <span className="text-lg text-white font-semibold tracking-[-0.01em]">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full max-h-[700px] overflow-hidden rounded-2xl group"
              whileHover={{ scale: 1.02 }}
            >
              {/* Glowing border effect */}
              <div 
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(168, 85, 247, 0.2))',
                  filter: 'blur(20px)',
                  opacity: 0.4
                }}
              />
              
              <div className="relative z-10 h-full rounded-2xl overflow-hidden border border-cyan-500/30 bg-gradient-to-br from-gray-100 to-gray-50" style={{ boxShadow: '0 20px 60px rgba(6, 182, 212, 0.2)' }}>
                {/* Shimmer effect overlay */}
                <motion.div
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)'
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
                  src={astronautsImage} 
                  alt="Daikin Air Lab Astronauts" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
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
            background: i % 2 === 0 ? 'rgba(6, 182, 212, 0.4)' : 'rgba(168, 85, 247, 0.4)',
            boxShadow: i % 2 === 0 
              ? '0 0 10px rgba(6, 182, 212, 0.6)' 
              : '0 0 10px rgba(168, 85, 247, 0.6)'
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
      ))}</div>
  );
};
