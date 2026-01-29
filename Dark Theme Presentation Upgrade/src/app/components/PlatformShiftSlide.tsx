import React from "react";
import { motion } from "motion/react";
import { Clock, Monitor, TrendingUp, Users, Settings, Smartphone, Zap, RefreshCw, Server } from "lucide-react";
import platformShiftImage from "../../assets/platform-shift-dna.png";

interface PlatformShiftSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const PlatformShiftSlide: React.FC<PlatformShiftSlideProps> = ({ onNext, onPrev }) => {
  const currentStateItems = [
    { text: "Staff-mediated sessions (High Labor Cost)", icon: Users },
    { text: "Long play sessions (Low Turnover)", icon: Clock },
    { text: "Operationally heavy, manual processes", icon: Settings },
    { text: "Dependency on external vendors", icon: Server },
  ];

  const futureStateItems = [
    { title: "Self-Service", text: "Fully automated check-in & cashless payment", icon: Smartphone },
    { title: "High Throughput", text: "Short-form, 10-minute mini-games (1-4 players)", icon: Zap },
    { title: "Arcade-Style Monetization", text: "Optimized for repeat play", icon: RefreshCw },
    { title: "Platform-Driven", text: "Centralized control via Master Admin Portal", icon: Monitor },
  ];

  return (
    <div className="w-screen h-screen bg-[#050505] text-white p-10 flex flex-col overflow-hidden relative selection:bg-emerald-500/5">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 w-full h-full flex flex-col font-inter max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-8 shrink-0">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-black tracking-[-0.02em] leading-tight"
            style={{
              backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Shifting DNA from Venue
            <br />
            <span className="text-emerald-400">Operator to Platform Scaler</span>
          </motion.h1>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-12 gap-8 min-h-0">
          
          {/* Left Column - Comparison Content (7 cols) */}
          <div className="col-span-7 flex flex-col gap-6">
            
            <div className="grid grid-cols-2 gap-4 flex-1">
              {/* Current State Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-gray-500/10 border border-gray-500/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">Current State</div>
                    <div className="text-lg font-bold text-white">The Bottleneck</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {currentStateItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                      <p className="text-sm text-gray-300 leading-snug">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Future State Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-emerald-900/10 border border-emerald-500/20 rounded-2xl p-5 backdrop-blur-sm flex flex-col relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500" />
                
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-emerald-500/20">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs text-emerald-400 uppercase tracking-wider font-bold">Future State (2026)</div>
                    <div className="text-lg font-bold text-white">The Platform</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {futureStateItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <item.icon className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm font-bold text-white block mb-0.5">{item.title}</span>
                        <span className="text-sm text-gray-300 leading-snug">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Bottom Line */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-auto bg-[#0c0c0e] border border-emerald-500/30 rounded-xl p-5 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
              <h3 className="text-emerald-400 font-bold mb-1 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Bottom Line
              </h3>
              <p className="text-lg text-white leading-relaxed">
                This shift reduces OPEX while increasing revenue opportunities across high-traffic, mixed-attraction venues (Malls, FECs).
              </p>
            </motion.div>
          </div>

          {/* Right Column - Illustration (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="col-span-5 relative flex items-center justify-center overflow-hidden"
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-emerald-500/20 bg-black/50 flex items-center justify-center p-2">
              {/* Glow */}
              <div className="absolute inset-0 bg-emerald-500/10 blur-3xl opacity-20" />
              
              <img 
                src={platformShiftImage} 
                alt="DNA Shift Diagram - Transformation from Venue Operator to Platform Scaler" 
                className="max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
