import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Gauge, Gift, Tv, FileText, Shield, UserCheck, CheckCircle2, X } from "lucide-react";
import jumbotronImage from "../../assets/jumbotron.png";
import batboxSuiteVideo from "../../assets/BatboxSuite_C (2).mp4";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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

      {/* Radial Gradient Orbs - Static */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[10%] left-[15%] w-[900px] h-[900px] rounded-full opacity-[0.14]"
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
        <div
          className="absolute bottom-[15%] right-[10%] w-[800px] h-[800px] rounded-full opacity-[0.11]"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col font-inter max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="flex items-center gap-5 mb-2">
            <div 
              className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:border-amber-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{ boxShadow: '0 0 20px rgba(245, 158, 11, 0.2)' }}
            >
              <Calendar className="w-7 h-7 text-amber-400" strokeWidth={2} />
            </div>
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
                2026 Development
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
              
              {/* Background glow - Static */}
              <div 
                className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-40"
                style={{
                  background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
                  filter: 'blur(80px)'
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
                      className={`flex items-center gap-4 p-3 rounded-xl bg-black/40 border transition-all duration-300 cursor-default hover:translate-x-1 hover:scale-[1.02] ${
                        feature.color === 'cyan' ? 'border-cyan-500/20 hover:border-cyan-500/50' :
                        feature.color === 'emerald' ? 'border-emerald-500/20 hover:border-emerald-500/50' :
                        feature.color === 'purple' ? 'border-purple-500/20 hover:border-purple-500/50' :
                        feature.color === 'orange' ? 'border-orange-500/20 hover:border-orange-500/50' :
                        feature.color === 'amber' ? 'border-amber-500/20 hover:border-amber-500/50' :
                        'border-pink-500/20 hover:border-pink-500/50'
                      }`}
                      style={{ 
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)' 
                      }}
                    >
                      <div 
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110 ${
                          feature.color === 'cyan' ? 'bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-500/50' :
                          feature.color === 'emerald' ? 'bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-500/50' :
                          feature.color === 'purple' ? 'bg-purple-500/10 border border-purple-500/30 hover:border-purple-500/50' :
                          feature.color === 'orange' ? 'bg-orange-500/10 border border-orange-500/30 hover:border-orange-500/50' :
                          feature.color === 'amber' ? 'bg-amber-500/10 border border-amber-500/30 hover:border-amber-500/50' :
                          'bg-pink-500/10 border border-pink-500/30 hover:border-pink-500/50'
                        }`}
                      >
                        <feature.icon className={`w-5 h-5 ${
                          feature.color === 'cyan' ? 'text-cyan-400' :
                          feature.color === 'emerald' ? 'text-emerald-400' :
                          feature.color === 'purple' ? 'text-purple-400' :
                          feature.color === 'orange' ? 'text-orange-400' :
                          feature.color === 'amber' ? 'text-amber-400' :
                          'text-pink-400'
                        }`} strokeWidth={2} />
                      </div>
                      <span className="text-base text-white font-semibold tracking-[-0.01em]">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image with Video Play */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center relative overflow-hidden"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full flex items-center justify-center p-4"
            >
              {/* Video Preview Container */}
              <div
                className="relative z-10 w-full h-full flex items-center justify-center cursor-pointer group transition-transform duration-300 hover:scale-[1.03]"
                onClick={handlePlayVideo}
              >
                <img 
                  src={jumbotronImage} 
                  alt="Batbox Jumbotron - Advertising and sponsorship display system" 
                  className="w-full h-full object-contain rounded-2xl"
                  style={{ 
                    maxHeight: '100%',
                    maxWidth: '100%'
                  }}
                />

                {/* Play Button Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center z-20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div
                    className="w-24 h-24 rounded-full bg-amber-500/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:bg-amber-400 group-hover:scale-110 transition-all duration-300"
                    style={{
                      boxShadow: '0 0 40px rgba(245, 158, 11, 0.5), 0 0 80px rgba(245, 158, 11, 0.3)'
                    }}
                  >
                    {/* Play Icon */}
                    <svg 
                      className="w-12 h-12 text-white ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

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
              className="absolute top-8 right-8 w-14 h-14 bg-white/10 border border-white/20 hover:border-white/50 rounded-full backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 active:scale-95 transition-all duration-300 z-[101]"
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
                boxShadow: '0 0 100px rgba(245, 158, 11, 0.3), 0 0 200px rgba(0, 0, 0, 0.8)'
              }}
            >
              <video
                ref={videoRef}
                src={batboxSuiteVideo}
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
              <h3 className="text-2xl font-bold text-white mb-1">Batbox Suite Demo</h3>
              <p className="text-gray-400">Q4 Platform Preview</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
  );
};
