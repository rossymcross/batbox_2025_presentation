import React, { useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Building2, CreditCard, Shield, CheckCircle2, BarChart3, Play, X } from "lucide-react";
import venuesImage from "../../assets/superadmin-venues.png";
import adminPanelsVideo from "../../assets/batbox-admin-panels.mp4";

interface SuperadminPortalSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const SuperadminPortalSlide: React.FC<SuperadminPortalSlideProps> = ({ onNext, onPrev }) => {
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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

      {/* Static Radial Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[10%] left-[15%] w-[900px] h-[900px] rounded-full opacity-[0.14]"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
        <div
          className="absolute bottom-[15%] right-[10%] w-[800px] h-[800px] rounded-full opacity-[0.11]"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col font-inter max-w-[1600px] mx-auto">
        {/* Header Row */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-5 mb-10"
        >
          <div 
            className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center transition-transform duration-300 hover:scale-110"
            style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' }}
          >
            <Calendar className="w-7 h-7 text-cyan-400" strokeWidth={2} />
          </div>
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
              2026 Development
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
              
              {/* Background glow - static */}
              <div 
                className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-40"
                style={{
                  background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
                  filter: 'blur(80px)'
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
                      className={`flex items-center gap-4 p-4 rounded-xl bg-black/40 border transition-all duration-300 cursor-default hover:translate-x-1 hover:scale-[1.02] ${
                        feature.color === 'cyan' ? 'border-cyan-500/20 hover:border-cyan-500/40' :
                        feature.color === 'emerald' ? 'border-emerald-500/20 hover:border-emerald-500/40' :
                        feature.color === 'orange' ? 'border-orange-500/20 hover:border-orange-500/40' :
                        'border-purple-500/20 hover:border-purple-500/40'
                      }`}
                      style={{ 
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)' 
                      }}
                    >
                      <div 
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-110 ${
                          feature.color === 'cyan' ? 'bg-cyan-500/10 border border-cyan-500/30' :
                          feature.color === 'emerald' ? 'bg-emerald-500/10 border border-emerald-500/30' :
                          feature.color === 'orange' ? 'bg-orange-500/10 border border-orange-500/30' :
                          'bg-purple-500/10 border border-purple-500/30'
                        }`}
                      >
                        <feature.icon className={`w-6 h-6 ${
                          feature.color === 'cyan' ? 'text-cyan-400' :
                          feature.color === 'emerald' ? 'text-emerald-400' :
                          feature.color === 'orange' ? 'text-orange-400' :
                          'text-purple-400'
                        }`} strokeWidth={2} />
                      </div>
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
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Static glowing orb behind image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div 
                  className="w-[500px] h-[500px] rounded-full opacity-40"
                  style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
                    filter: 'blur(100px)'
                  }}
                />
              </div>
              
              {/* Image Container */}
              <div
                className="relative z-10 max-w-[85%] max-h-[90%] cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
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
                <div className="absolute inset-0 flex items-center justify-center z-10 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/40 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110"
                    style={{
                      boxShadow: '0 0 40px rgba(6, 182, 212, 0.4), 0 0 80px rgba(6, 182, 212, 0.2)'
                    }}
                  >
                    <Play 
                      className="w-8 h-8 text-white relative z-10 ml-1" 
                      fill="white"
                      strokeWidth={0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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
              className="absolute top-8 right-8 w-14 h-14 bg-white/10 border border-white/20 rounded-full backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 z-[101]"
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
