import React, { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { Clock, ArrowRight, Monitor, Users, DollarSign, Settings, Repeat, CreditCard, Gamepad2, Building2 } from "lucide-react";

interface ShiftingDNASlideProps {
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

export const ShiftingDNASlide: React.FC<ShiftingDNASlideProps> = ({ onNext, onPrev }) => {
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

  const currentStateItems = [
    { icon: Users, text: "Staff-mediated sessions", subtext: "High Labor Cost" },
    { icon: Clock, text: "Long play sessions", subtext: "Low Turnover" },
    { icon: Settings, text: "Operationally heavy", subtext: "Manual Processes" },
    { icon: Building2, text: "Dependency on external vendors", subtext: "Limited Control" },
  ];

  const futureStateItems = [
    { icon: CreditCard, label: "Self-Service", text: "Fully automated check-in & cashless payment" },
    { icon: Gamepad2, label: "High Throughput", text: "Short-form, 10-minute mini-games (1-4 players)" },
    { icon: Repeat, label: "Arcade-Style Monetization", text: "Optimized for repeat play" },
    { icon: Monitor, label: "Platform-Driven", text: "Centralized control via Master Admin Portal" },
  ];

  return (
    <div className="w-screen h-screen bg-[#050505] text-white p-10 flex flex-col overflow-hidden relative selection:bg-cyan-500/5">
      {/* Static Grid Background */}
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
          className="absolute top-[15%] left-[15%] w-[800px] h-[800px] rounded-full opacity-[0.12]"
          style={{
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.12) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
        <div
          className="absolute bottom-[10%] right-[15%] w-[900px] h-[900px] rounded-full opacity-[0.14]"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
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
          className="mb-10 text-center"
        >
          <h1 
            className="text-6xl font-black tracking-[-0.02em] leading-tight"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 4px 40px rgba(6, 182, 212, 0.2)'
            }}
          >
            Shifting DNA from Venue Operator to Platform Scaler
          </h1>
        </motion.div>

        {/* Main Content - Two Columns */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-2 gap-8 min-h-0 relative"
        >
          {/* Left Column: Current State */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-red-500/20 rounded-3xl p-8 relative overflow-hidden flex flex-col"
            style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(239, 68, 68, 0.03)' }}
          >
            {/* Static background glow with CSS hover */}
            <div 
              className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-30 transition-opacity duration-500 hover:opacity-50"
              style={{
                background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
            />
            
            <div className="flex items-center gap-4 mb-10 relative z-10">
              <div 
                className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center transition-transform duration-300 hover:scale-110"
                style={{ boxShadow: '0 0 20px rgba(239, 68, 68, 0.2)' }}
              >
                <Clock className="w-8 h-8 text-red-400" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-4xl font-black text-white tracking-[-0.01em]">Current State</h2>
                <p className="text-red-400 font-bold text-lg tracking-wide">The Bottleneck</p>
              </div>
            </div>

            <div className="space-y-6 flex-1 relative z-10">
              {currentStateItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="flex items-start gap-4 p-3 rounded-xl group cursor-default bg-red-500/5 border border-red-500/10 transition-transform duration-300 hover:translate-x-1 hover:scale-[1.02]"
                  style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20 transition-transform duration-300 group-hover:scale-110"
                  >
                    <item.icon className="w-6 h-6 text-red-400" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg mb-1 tracking-[-0.01em]">{item.text}</div>
                    <div className="text-red-400/80 text-sm font-semibold">{item.subtext}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center Arrow - Simplified */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8, type: "spring", stiffness: 150 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center"
          >
            <div 
              className="w-20 h-20 rounded-full bg-[#050505] border-2 border-cyan-400/50 flex items-center justify-center backdrop-blur-sm"
              style={{ 
                boxShadow: '0 0 40px rgba(6, 182, 212, 0.4), 0 0 80px rgba(6, 182, 212, 0.2), inset 0 0 20px rgba(6, 182, 212, 0.1)' 
              }}
            >
              <ArrowRight className="w-10 h-10 text-cyan-400" strokeWidth={2.5} />
            </div>
          </motion.div>

          {/* Right Column: Future State */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-cyan-500/20 rounded-3xl p-8 relative overflow-hidden flex flex-col"
            style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(6, 182, 212, 0.03)' }}
          >
            {/* Static background glow with CSS hover */}
            <div 
              className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-30 transition-opacity duration-500 hover:opacity-50"
              style={{
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
            />
            
            <div className="flex items-center gap-4 mb-10 relative z-10">
              <div 
                className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center transition-transform duration-300 hover:scale-110"
                style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' }}
              >
                <Monitor className="w-8 h-8 text-cyan-400" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-4xl font-black text-white tracking-[-0.01em]">Future State (2026)</h2>
                <p className="text-cyan-400 font-bold text-lg tracking-wide">The Platform</p>
              </div>
            </div>

            <div className="space-y-6 flex-1 relative z-10">
              {futureStateItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="flex items-start gap-4 p-3 rounded-xl group cursor-default bg-cyan-500/5 border border-cyan-500/10 transition-transform duration-300 hover:-translate-x-1 hover:scale-[1.02]"
                  style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20 transition-transform duration-300 group-hover:scale-110"
                  >
                    <item.icon className="w-6 h-6 text-cyan-400" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-cyan-400 font-bold text-sm uppercase tracking-[0.1em] mb-1">{item.label}</div>
                    <div className="text-white/95 font-semibold text-base leading-tight tracking-[-0.01em]">{item.text}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 pt-6 relative"
        >
          <div 
            className="flex items-center justify-center gap-4 text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border border-emerald-500/20 transition-transform duration-300 hover:scale-[1.02]"
            style={{ boxShadow: '0 10px 40px rgba(16, 185, 129, 0.1)' }}
          >
            <DollarSign className="w-8 h-8 text-emerald-400 shrink-0" strokeWidth={2.5} />
            <div className="text-left">
              <span className="text-emerald-400 font-black text-xl tracking-wide">Bottom Line: </span>
              <span className="text-gray-100 text-lg font-medium">
                This shift reduces OPEX while increasing revenue opportunities across high-traffic, mixed-attraction venues (Malls, FECs).
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
  );
};
