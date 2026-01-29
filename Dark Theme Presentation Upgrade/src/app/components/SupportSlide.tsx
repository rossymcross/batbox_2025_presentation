import React, { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { MessageSquare, ShieldCheck, Zap, Server, Flame, Star, CheckCircle2, Trophy } from "lucide-react";

interface SupportSlideProps {
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

export const SupportSlide: React.FC<SupportSlideProps> = ({ onNext, onPrev }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightGradient = useMotionTemplate`radial-gradient(circle 700px at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.05), transparent 70%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="w-screen h-screen bg-[#050505] text-white p-10 flex flex-col overflow-hidden relative selection:bg-emerald-500/5">
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

      {/* Static Gradient Orbs - no animation for performance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-[10%] left-[5%] w-[900px] h-[900px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
        <div 
          className="absolute bottom-[10%] right-[10%] w-[700px] h-[700px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.12) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
      </div>

      {/* Mouse-Following Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlightGradient }}
      />


      <div className="relative z-10 w-full h-full flex flex-col font-inter max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 shrink-0"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-3 flex"
          >
            <span className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 text-emerald-400 text-sm font-semibold uppercase tracking-[0.15em] backdrop-blur-sm">
              Operations & Reliability
            </span>
          </motion.div>
          <h2 
            className="text-6xl font-black text-white tracking-[-0.02em] mb-2"
            style={{ textShadow: '0 4px 40px rgba(16, 185, 129, 0.15)' }}
          >
            Support Infrastructure
          </h2>
          <p 
            className="text-2xl text-gray-300 font-light max-w-4xl tracking-[-0.01em]"
            style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.5)' }}
          >
            Team dedication and operational excellence delivering world-class reliability
          </p>
        </motion.div>

        {/* Main Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-12 gap-5 min-h-0"
          style={{ gridTemplateRows: 'auto 1fr' }}
        >
          {/* Dedicated Channels - Slack */}
          <motion.div 
            variants={itemVariants}
            className="col-span-3 bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-[#E01E5A]/30 hover:border-[#E01E5A]/50 rounded-2xl p-5 relative overflow-hidden group cursor-default transition-all duration-300"
            style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}
          >
            {/* Background Glow - static */}
            <div 
              className="absolute top-[-30%] right-[-20%] w-[300px] h-[300px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(224, 30, 90, 0.2) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#E01E5A]/10 border-2 border-[#E01E5A]/50 flex items-center justify-center relative backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 text-[#E01E5A]" strokeWidth={2} />
                  {/* Notification Badge - static */}
                  <div 
                    className="absolute -top-1 -right-1 w-4 h-4 bg-[#E01E5A] rounded-full flex items-center justify-center border border-[#0c0c0e]"
                    style={{ boxShadow: '0 0 10px rgba(224, 30, 90, 0.6)' }}
                  >
                    <span className="text-[8px] font-bold text-white">!</span>
                  </div>
                </div>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Slack</span>
              </div>
              
              <h3 
                className="text-xl font-black text-white mb-3 tracking-[-0.01em]"
                style={{ textShadow: '0 2px 15px rgba(224, 30, 90, 0.2)' }}
              >
                Dedicated Channels
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                Live Slack channels for each venue with direct dev team access.
              </p>
              
              <div className="pt-3 border-t border-[#E01E5A]/20">
                <div 
                  className="text-3xl font-black text-[#E01E5A] tracking-tight"
                  style={{ textShadow: '0 0 20px rgba(224, 30, 90, 0.4)' }}
                >
                  24/7
                </div>
                <div className="text-xs text-gray-400 font-semibold">Availability</div>
              </div>
            </div>
          </motion.div>

          {/* 24/7 Monitoring */}
          <motion.div 
            variants={itemVariants}
            className="col-span-3 bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-cyan-500/30 hover:border-cyan-500/50 rounded-2xl p-5 relative overflow-hidden group cursor-default transition-all duration-300"
            style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}
          >
            {/* Background Glow - static */}
            <div 
              className="absolute top-[-30%] right-[-20%] w-[300px] h-[300px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center relative backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-cyan-400" strokeWidth={2} />
                </div>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Live</span>
              </div>
              
              <h3 
                className="text-xl font-black text-white mb-3 tracking-[-0.01em]"
                style={{ textShadow: '0 2px 15px rgba(6, 182, 212, 0.2)' }}
              >
                24/7 Monitoring
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                Continuous system monitoring with always-on emergency support.
              </p>
              
              <div className="pt-3 border-t border-cyan-500/20">
                <div 
                  className="text-3xl font-black text-cyan-400 tracking-tight"
                  style={{ textShadow: '0 0 20px rgba(6, 182, 212, 0.4)' }}
                >
                  &lt;5min
                </div>
                <div className="text-xs text-gray-400 font-semibold">Avg Response</div>
              </div>
            </div>
          </motion.div>

          {/* Rapid Response */}
          <motion.div 
            variants={itemVariants}
            className="col-span-3 bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-yellow-500/30 hover:border-yellow-500/50 rounded-2xl p-5 relative overflow-hidden group cursor-default transition-all duration-300"
            style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}
          >
            {/* Background Glow - static */}
            <div 
              className="absolute top-[-30%] right-[-20%] w-[300px] h-[300px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(234, 179, 8, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
            />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border-2 border-yellow-500/50 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-yellow-400" strokeWidth={2} />
                </div>
                <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Fast</span>
              </div>
              
              <h3 
                className="text-xl font-black text-white mb-3 tracking-[-0.01em]"
                style={{ textShadow: '0 2px 15px rgba(234, 179, 8, 0.2)' }}
              >
                Rapid Response
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                Industry-leading response times with streamlined escalation.
              </p>
              
              <div className="pt-3 border-t border-yellow-500/20">
                <div 
                  className="text-3xl font-black text-yellow-400 tracking-tight"
                  style={{ textShadow: '0 0 20px rgba(234, 179, 8, 0.4)' }}
                >
                  Instant
                </div>
                <div className="text-xs text-gray-400 font-semibold">Escalation Path</div>
              </div>
            </div>
          </motion.div>

          {/* Uptime - HERO METRIC */}
          <motion.div 
            variants={itemVariants}
            className="col-span-3 bg-gradient-to-br from-emerald-500/15 to-[#0c0c0e] border border-emerald-500/40 hover:border-emerald-500/60 rounded-2xl p-5 relative overflow-hidden group cursor-default transition-all duration-300"
            style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(16, 185, 129, 0.15)' }}
          >
            {/* Static Glow */}
            <div 
              className="absolute top-0 right-0 w-48 h-48 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
            />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <Server className="w-5 h-5 text-emerald-400" strokeWidth={2} />
                </div>
                <span className="font-bold uppercase tracking-[0.15em] text-xs text-emerald-400">Uptime</span>
              </div>
              
              <div className="flex-1 flex flex-col justify-center">
                <div 
                  className="text-6xl font-black text-emerald-400 tracking-tighter leading-none mb-2"
                  style={{ textShadow: '0 0 40px rgba(16, 185, 129, 0.6)' }}
                >
                  99.99%
                </div>
                <div className="text-base text-gray-200 font-bold opacity-90">On Track</div>
              </div>
              
              <div className="text-sm text-gray-300 font-medium">
                Fully operational during all peak hours
              </div>
            </div>
          </motion.div>

          {/* Addison Launch - Unwavering Dedication */}
          <motion.div 
            variants={itemVariants}
            className="col-span-8 bg-gradient-to-br from-[#0c0c0e] to-[#1a0a0a] border border-red-500/30 hover:border-red-500/50 rounded-2xl p-0 relative overflow-hidden group flex min-h-[280px] cursor-default transition-all duration-300"
            style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}
          >
            {/* Left Content Section */}
            <div className="flex-1 p-8 pb-6 z-10 flex flex-col justify-between relative">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Flame className="w-6 h-6 text-red-400" strokeWidth={2} />
                  </div>
                  <span className="font-bold uppercase tracking-[0.15em] text-sm text-red-400">The Addison Launch</span>
                </div>
                
                <h3 
                  className="text-4xl font-black text-white mb-4 tracking-tight leading-tight"
                  style={{ textShadow: '0 4px 30px rgba(239, 68, 68, 0.2)' }}
                >
                  Unwavering<br/>Dedication
                </h3>
                
                <p className="text-gray-200 text-lg leading-relaxed mb-4 max-w-lg">
                  During the pre-launch phase, the team demonstrated extreme commitment with <span className="text-white font-bold">16-hour days</span> for <span className="text-white font-bold">5 weeks</span> to ensure stability with minimal UAT time.
                </p>
              </div>

              {/* Timeline Visual - static */}
              <div className="w-full max-w-md mt-auto mb-2">
                <div className="flex items-center justify-between px-1 mb-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em]">Sprint Timeline</span>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-[0.15em]">5 Weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((week) => (
                    <div
                      key={week}
                      className="h-3 flex-1 rounded-full bg-red-500/20 overflow-hidden"
                    >
                      <div 
                        className="h-full w-full bg-gradient-to-r from-red-500 to-red-400 rounded-full"
                        style={{ boxShadow: '0 0 15px rgba(239, 68, 68, 0.6)' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual Section - Massive Flame */}
            <div className="w-[45%] relative overflow-visible bg-gradient-to-l from-red-900/15 to-transparent flex flex-col items-center justify-center gap-3 py-6 px-8">
              {/* Static Background Glow */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle, rgba(220, 38, 38, 0.12) 0%, transparent 70%)',
                  filter: 'blur(80px)'
                }}
              />
              
              {/* Flame Icon - static */}
              <div className="relative z-10 text-red-500">
                <Flame style={{ width: 96, height: 96 }} strokeWidth={1.5} />
              </div>

              {/* Stat */}
              <div className="relative z-20 text-center">
                <div 
                  className="text-7xl font-black text-white tracking-tighter"
                  style={{ textShadow: '0 0 50px rgba(220, 38, 38, 0.6), 0 4px 30px rgba(0, 0, 0, 0.5)' }}
                >
                  16h
                </div>
                <div className="text-sm font-bold text-red-400 uppercase tracking-[0.2em] mt-1">Daily Effort</div>
              </div>
            </div>
          </motion.div>

          {/* Product Activation - Achievement Badges */}
          <motion.div 
            variants={itemVariants}
            className="col-span-4 bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-blue-500/30 hover:border-blue-500/50 rounded-2xl p-6 relative overflow-hidden group cursor-default transition-all duration-300"
            style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)' }}
          >
            {/* Static Glow */}
            <div 
              className="absolute top-0 right-0 w-64 h-64 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                filter: 'blur(70px)'
              }}
            />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6 text-blue-400" strokeWidth={2} />
                </div>
                <div>
                  <span className="font-bold uppercase tracking-[0.15em] text-xs text-blue-400 block">Event Support</span>
                  <h3 
                    className="text-xl font-black text-white tracking-tight"
                    style={{ textShadow: '0 2px 15px rgba(59, 130, 246, 0.2)' }}
                  >
                    Product Activation
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4">
                World-class support with <span className="text-white font-bold">zero downtime</span> during critical events:
              </p>
              
              {/* Achievement Badges - simplified */}
              <div className="flex-1 flex flex-col gap-3">
                {[
                  { name: 'Launch Day', icon: Star },
                  { name: 'VIP Party Event', icon: Star },
                  { name: 'IAAPA', icon: Trophy }
                ].map((event) => (
                  <div 
                    key={event.name}
                    className="flex items-center gap-3 bg-gradient-to-r from-blue-500/15 to-transparent px-4 py-3 rounded-xl border border-blue-500/30 hover:border-blue-500/50 hover:translate-x-1 transition-all duration-300 cursor-default"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/30">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" strokeWidth={2.5} />
                    </div>
                    <span className="text-white font-bold flex-1">{event.name}</span>
                    <div 
                      className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/30 shrink-0"
                      style={{ boxShadow: '0 0 10px rgba(16, 185, 129, 0.2)' }}
                    >
                      Success
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
