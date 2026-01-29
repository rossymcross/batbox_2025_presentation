import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useMotionTemplate, AnimatePresence } from "motion/react";
import { Calendar, Building2, CreditCard, Shield, CheckCircle2, BarChart3, Play, X } from "lucide-react";
import venuesImage from "../../assets/superadmin-venues.png";
import adminPanelsVideo from "../../assets/batbox-admin-panels.mp4";

interface SuperadminPortalSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const SuperadminPortalSlide: React.FC<SuperadminPortalSlideProps> = ({ onNext, onPrev }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const spotlightGradient = useMotionTemplate`radial-gradient(circle 800px at ${mouseX}px ${mouseY}px, rgba(6, 182, 212, 0.06), transparent 70%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const features = [
    { icon: Building2, text: "Venue / sim / kiosk registration", color: "cyan" },
    { icon: CreditCard, text: "Subscription and tier enforcement", color: "emerald" },
    { icon: Shield, text: "Role-based access", color: "purple" },
    { icon: BarChart3, text: "Initial operational dashboards", color: "orange" },
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
        {/* Header Row */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-5 mb-10"
        >
          <motion.div 
            className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' }}
          >
            <Calendar className="w-7 h-7 text-cyan-400" strokeWidth={2} />
          </motion.div>
          <div>
            <h1 
              className="text-6xl font-black tracking-[-0.02em]"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 4px 40px rgba(6, 182, 212, 0.2)'
              }}
            >
              2026 Q1
            </h1>
            <p className="text-xl text-gray-300 font-semibold tracking-wide mt-1">Major Software Deliverables</p>
          </div>
        </motion.div>

        {/* Main Content - Two Columns */}
        <div className="flex-1 grid grid-cols-2 gap-10 min-h-0">
          {/* Left Column - Milestone Info + Features */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            {/* Major Milestone Card */}
            <div 
              className="bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-cyan-500/20 rounded-3xl p-8 relative overflow-hidden flex-1"
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
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
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
              
              <div className="relative z-10 h-full flex flex-col">
                <motion.div 
                  className="flex items-center gap-3 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <CheckCircle2 className="w-7 h-7 text-cyan-400" strokeWidth={2.5} />
                  <span className="text-cyan-400 font-bold text-base uppercase tracking-[0.15em]">Major Milestone</span>
                </motion.div>
                
                <motion.h2 
                  className="text-5xl font-black text-white mb-10 tracking-[-0.02em]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  style={{ textShadow: '0 4px 30px rgba(6, 182, 212, 0.2)' }}
                >
                  Superadmin Master Portal MVP
                </motion.h2>
                
                <div className="space-y-4 flex-1">
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className={`flex items-center gap-4 p-4 rounded-xl bg-black/40 border transition-all duration-300 cursor-default ${
                        feature.color === 'cyan' ? 'border-cyan-500/20 hover:border-cyan-500/40' :
                        feature.color === 'emerald' ? 'border-emerald-500/20 hover:border-emerald-500/40' :
                        feature.color === 'orange' ? 'border-orange-500/20 hover:border-orange-500/40' :
                        'border-purple-500/20 hover:border-purple-500/40'
                      }`}
                      style={{ 
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)' 
                      }}
                    >
                      <motion.div 
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                          feature.color === 'cyan' ? 'bg-cyan-500/10 border border-cyan-500/30' :
                          feature.color === 'emerald' ? 'bg-emerald-500/10 border border-emerald-500/30' :
                          feature.color === 'orange' ? 'bg-orange-500/10 border border-orange-500/30' :
                          'bg-purple-500/10 border border-purple-500/30'
                        }`}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                      >
                        <feature.icon className={`w-6 h-6 ${
                          feature.color === 'cyan' ? 'text-cyan-400' :
                          feature.color === 'emerald' ? 'text-emerald-400' :
                          feature.color === 'orange' ? 'text-orange-400' :
                          'text-purple-400'
                        }`} strokeWidth={2} />
                      </motion.div>
                      <span className="text-lg text-white font-semibold tracking-[-0.01em]">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Screenshot with Video */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Glowing orb behind image */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div 
                  className="w-[500px] h-[500px] rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
                    filter: 'blur(100px)'
                  }}
                />
              </motion.div>

              {/* Rotating ring effect */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div 
                  className="w-[90%] h-[90%] rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, rgba(6, 182, 212, 0.1), transparent)',
                    filter: 'blur(30px)'
                  }}
                />
              </motion.div>
              
              {/* Image Container */}
              <motion.div
                className="relative z-10 max-w-[85%] max-h-[90%] cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={handlePlayVideo}
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

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 z-20 pointer-events-none rounded-2xl overflow-hidden"
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
                  src={venuesImage} 
                  alt="Superadmin Portal - Venues Management" 
                  className="w-auto h-auto max-h-[calc(100vh-200px)] object-contain rounded-2xl border border-cyan-500/30 relative z-0"
                  style={{ 
                    filter: 'drop-shadow(0 0 60px rgba(6, 182, 212, 0.3)) brightness(1.05) contrast(1.1)',
                    boxShadow: '0 30px 80px rgba(6, 182, 212, 0.2)'
                  }}
                />

                {/* Play Button Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0.7 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/40 flex items-center justify-center cursor-pointer"
                    style={{
                      boxShadow: '0 0 40px rgba(6, 182, 212, 0.4), 0 0 80px rgba(6, 182, 212, 0.2)'
                    }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      scale: isHovered ? 1.1 : 1
                    }}
                  >
                    {/* Pulsing ring effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-cyan-400"
                      animate={{
                        scale: [1, 1.5, 1.5],
                        opacity: [0.5, 0, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                    <Play 
                      className="w-8 h-8 text-white relative z-10 ml-1" 
                      fill="white"
                      strokeWidth={0}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
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
      ))}

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={handleCloseVideo}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2 }}
              onClick={handleCloseVideo}
              className="absolute top-8 right-8 w-14 h-14 bg-white/10 border border-white/20 rounded-full backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 z-[101]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)' }}
            >
              <X className="w-7 h-7" strokeWidth={2} />
            </motion.button>

            {/* Video Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 300
              }}
              className="relative w-[90vw] max-w-[1400px] aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow: '0 0 100px rgba(6, 182, 212, 0.3), 0 0 200px rgba(0, 0, 0, 0.8)'
              }}
            >
              <video
                ref={videoRef}
                src={adminPanelsVideo}
                className="w-full h-full object-contain bg-black"
                controls
                autoPlay
                playsInline
              />
            </motion.div>

            {/* Video Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-1">Superadmin Portal Demo</h3>
              <p className="text-gray-400">Admin Panels Overview</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
  );
};