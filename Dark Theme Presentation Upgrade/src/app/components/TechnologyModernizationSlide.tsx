import React, { useEffect } from "react";
import { motion } from "motion/react";
import { Box, Monitor, ShieldCheck, Zap, Eye, ArrowRight, CheckCircle2 } from "lucide-react";

interface TechnologyModernizationSlideProps {
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

export const TechnologyModernizationSlide: React.FC<TechnologyModernizationSlideProps> = ({ onNext, onPrev }) => {
  useEffect(() => {
  }, [onNext, onPrev]);

  return (
    <div className="w-screen h-screen bg-[#050505] text-white p-10 flex flex-col overflow-hidden relative">
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
          className="absolute top-[10%] right-[5%] w-[800px] h-[800px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
        <div
          className="absolute bottom-[10%] left-[10%] w-[700px] h-[700px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
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
          className="mb-6 flex-none"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 
              className="text-5xl font-black tracking-[-0.02em]"
              style={{
                background: 'linear-gradient(to right, #ffffff 0%, #a0a0a0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 4px 40px rgba(6, 182, 212, 0.15)'
              }}
            >
              Technology Modernization
            </h2>
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-[0.15em] backdrop-blur-sm"
            >
              <span className="relative z-10">2025 Architecture</span>
            </motion.span>
          </div>
          <p 
            className="text-xl text-gray-300 font-light max-w-4xl tracking-[-0.01em]"
            style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.5)' }}
          >
            Transitioning from legacy debt to a future-proof foundation.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-6 grid-rows-2 gap-6 min-h-0 pb-4"
        >
          {/* Unity Upgrade */}
          <motion.div 
            variants={itemVariants}
            className="col-span-3 bg-gradient-to-br from-[#0c0c0e] to-[#0f1728] border border-cyan-500/30 hover:border-cyan-500/50 rounded-3xl p-8 relative overflow-hidden group cursor-default flex flex-col transition-all duration-300"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Background Glow */}
            <div 
              className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
                filter: 'blur(80px)'
              }}
            />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm hover:scale-110 transition-transform duration-300">
                  <Box className="w-8 h-8 text-cyan-400" strokeWidth={2} />
                </div>
                <div>
                  <h3 
                    className="text-3xl font-black text-white tracking-[-0.01em]"
                    style={{ textShadow: '0 4px 30px rgba(6, 182, 212, 0.2)' }}
                  >
                    Unity Engine Upgrade
                  </h3>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <span className="text-red-400 line-through font-medium">Legacy 5.6.5f1</span>
                    <ArrowRight className="w-3 h-3 text-gray-500" />
                    <span className="text-cyan-400 font-bold">Unity 6 LTS (2025)</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                This transition replaces an engine that fell out of support in 2017 with a modern LTS foundation backed through 2026, delivering a decisive jump in capability, stability, and long-term competitiveness.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: "Render Pipeline", value: "URP/HDRP" },
                  { label: "C# Version", value: "C# 9.0" },
                  { label: "Performance", value: "+40%" },
                  { label: "Graphics API", value: "Modern" }
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-black/20 rounded-lg p-3 border border-cyan-500/10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + idx * 0.05 }}
                  >
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{benefit.label}</div>
                    <div className="text-sm font-bold text-cyan-400">{benefit.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Windows Upgrade */}
          <motion.div 
            variants={itemVariants}
            className="col-span-3 bg-gradient-to-br from-[#0c0c0e] to-[#1a1530] border border-blue-500/30 hover:border-blue-500/50 rounded-3xl p-8 relative overflow-hidden group cursor-default flex flex-col transition-all duration-300"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Background Glow */}
            <div 
              className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                filter: 'blur(80px)'
              }}
            />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm hover:scale-110 transition-transform duration-300">
                  <Monitor className="w-8 h-8 text-blue-400" strokeWidth={2} />
                </div>
                <div>
                  <h3 
                    className="text-3xl font-black text-white tracking-[-0.01em]"
                    style={{ textShadow: '0 4px 30px rgba(59, 130, 246, 0.2)' }}
                  >
                    Windows Upgrade
                  </h3>
                  <div className="flex items-center gap-2 text-sm mt-1">
                    <span className="text-red-400 line-through font-medium">Windows 7</span>
                    <ArrowRight className="w-3 h-3 text-gray-500" />
                    <span className="text-blue-400 font-bold">Windows 10/11 Ready</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Upgrading from a Windows 7 dependency (2009) to Windows 10/11 delivers a major leap in security, compatibility, and enterprise readiness, moving the product onto a modern, fully supported OS foundation.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: "Security", value: "Enterprise" },
                  { label: "DirectX", value: "12 Ready" },
                  { label: "Drivers", value: "Modern" },
                  { label: "Support", value: "Active" }
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-black/20 rounded-lg p-3 border border-blue-500/10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + idx * 0.05 }}
                  >
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{benefit.label}</div>
                    <div className="text-sm font-bold text-blue-400">{benefit.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Reliability */}
          <motion.div 
            variants={itemVariants}
            className="col-span-2 bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-emerald-500/20 hover:border-emerald-500/50 rounded-3xl p-6 relative overflow-hidden group cursor-default flex flex-col transition-all duration-300"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Background Glow */}
            <div 
              className="absolute bottom-[-30%] left-[-20%] w-[300px] h-[300px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
            />
            
            <div className="flex items-center gap-3 mb-4 group-hover:translate-x-1 transition-transform duration-300">
               <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" strokeWidth={2} />
               </div>
               <h3 
                 className="text-2xl font-black text-white tracking-[-0.01em]"
                 style={{ textShadow: '0 4px 30px rgba(16, 185, 129, 0.2)' }}
               >
                 Reliability
               </h3>
            </div>

            <h4 className="text-emerald-400 font-bold mb-2 text-base">Always-On Operations</h4>
            <p className="text-gray-300 text-base mb-4 leading-relaxed">
              Shift from reactive firefighting to self-healing architecture that recovers automatically from hardware issues and network drops.
            </p>

            {/* Feature List */}
            <div className="space-y-2 mb-4">
              {[
                "Auto-restart on failure",
                "Network reconnection",
                "Software self heal"
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 text-sm text-gray-400"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + idx * 0.1 }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" strokeWidth={2.5} />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-emerald-500/20">
               <div className="flex items-center justify-between text-base mb-1">
                 <span className="text-gray-400">Recovery</span>
                 <span className="text-emerald-400 font-bold">Zero-Touch</span>
               </div>
               <div className="text-sm text-gray-500 font-medium">24/7 autonomous operation</div>
            </div>
          </motion.div>

          {/* Efficiency */}
          <motion.div 
            variants={itemVariants}
            className="col-span-2 bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-orange-500/20 hover:border-orange-500/50 rounded-3xl p-6 relative overflow-hidden group cursor-default flex flex-col transition-all duration-300"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Background Glow */}
            <div 
              className="absolute bottom-[-30%] left-[-20%] w-[300px] h-[300px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
            />
            
            <div className="flex items-center gap-3 mb-4 group-hover:translate-x-1 transition-transform duration-300">
               <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/30 backdrop-blur-sm">
                  <Zap className="w-6 h-6 text-orange-400" strokeWidth={2} />
               </div>
               <h3 
                 className="text-2xl font-black text-white tracking-[-0.01em]"
                 style={{ textShadow: '0 4px 30px rgba(249, 115, 22, 0.2)' }}
               >
                 Efficiency
               </h3>
            </div>

            <h4 className="text-orange-400 font-bold mb-2 text-base">Optimized Build Pipeline</h4>
            <p className="text-gray-300 text-base mb-4 leading-relaxed">
              Build time cut from 30m to 10m. Code commits automatically build, test, and deploy with instant rollback capabilities.
            </p>

            {/* Feature List */}
            <div className="space-y-2 mb-4">
              {[
                "CI/CD automation",
                "Automated testing",
                "Instant rollbacks"
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 text-sm text-gray-400"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + idx * 0.1 }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" strokeWidth={2.5} />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-orange-500/20">
               <div className="flex items-center justify-between text-base mb-1">
                 <span className="text-gray-400">Build Time</span>
                 <span className="text-orange-400 font-bold">30m → 10m</span>
               </div>
               <div className="text-sm text-gray-500 font-medium">50% smaller bundles</div>
            </div>
          </motion.div>

          {/* Observability */}
          <motion.div 
            variants={itemVariants}
            className="col-span-2 bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-purple-500/20 hover:border-purple-500/50 rounded-3xl p-6 relative overflow-hidden group cursor-default flex flex-col transition-all duration-300"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
          >
            {/* Background Glow */}
            <div 
              className="absolute bottom-[-30%] left-[-20%] w-[300px] h-[300px] rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
            />
            
            <div className="flex items-center gap-3 mb-4 group-hover:translate-x-1 transition-transform duration-300">
               <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm">
                  <Eye className="w-6 h-6 text-purple-400" strokeWidth={2} />
               </div>
               <h3 
                 className="text-2xl font-black text-white tracking-[-0.01em]"
                 style={{ textShadow: '0 4px 30px rgba(168, 85, 247, 0.2)' }}
               >
                 Observability
               </h3>
            </div>

            <h4 className="text-purple-400 font-bold mb-2 text-base">Real-Time Monitoring</h4>
            <p className="text-gray-300 text-base mb-4 leading-relaxed">
              Continuous health metrics, heartbeats every 60s, and centralized dashboards enable proactive alerting before issues impact users.
            </p>

            {/* Feature List */}
            <div className="space-y-2 mb-4">
              {[
                "60s health checks",
                "Centralized dashboards",
                "Proactive alerts"
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 text-sm text-gray-400"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 + idx * 0.1 }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" strokeWidth={2.5} />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-4 border-t border-purple-500/20">
               <div className="flex items-center justify-between text-base mb-1">
                 <span className="text-gray-400">Visibility</span>
                 <span className="text-purple-400 font-bold">Full / Proactive</span>
               </div>
               <div className="text-sm text-gray-500 font-medium">Deep logging & Alerting</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
