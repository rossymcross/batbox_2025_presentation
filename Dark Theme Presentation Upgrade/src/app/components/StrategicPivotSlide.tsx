import React, { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { Target, Zap, LayoutGrid, Database, TrendingUp, ArrowRight } from "lucide-react";
import strategicPivotImage from "../../assets/strategic-pivot-diagram.png";

interface StrategicPivotSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const StrategicPivotSlide: React.FC<StrategicPivotSlideProps> = ({ onNext, onPrev }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightGradient = useMotionTemplate`radial-gradient(circle 800px at ${mouseX}px ${mouseY}px, rgba(34, 197, 94, 0.06), transparent 70%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const pillars = [
    { 
      title: "Product: Batbox Suite", 
      desc: "Launch of self-service, short-form gaming.",
      icon: LayoutGrid,
      color: "emerald"
    },
    { 
      title: "Operations: Master Admin Portal", 
      desc: "The centralized system of record.",
      icon: Database,
      color: "cyan"
    },
    { 
      title: "Differentiation: Data & AI", 
      desc: "Leveraging CDP for automation and insights.",
      icon: Zap,
      color: "purple"
    }
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
      
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlightGradient }}
      />

      <div className="relative z-10 w-full h-full flex flex-col font-inter max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8 shrink-0">
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 
              className="text-6xl font-black tracking-[-0.02em] leading-tight mb-2"
              style={{
                backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent'
              }}
            >
              The 2026 Strategic Pivot:
              <br />
              <span className="text-emerald-400">Building the Engine for Scale</span>
            </h1>
          </motion.div>

          {/* North Star Goal Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-[#0c0c0e] border border-emerald-500/30 rounded-2xl p-6 flex flex-col items-center justify-center min-w-[300px]"
            style={{ boxShadow: '0 0 30px rgba(34, 197, 94, 0.1)' }}
          >
            <span className="text-emerald-500 font-bold text-sm uppercase tracking-widest mb-2">North Star Goal</span>
            <div className="text-3xl font-black text-white text-center leading-tight">
              100 Simulators /
              <br />
              ~50 Venues
            </div>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-12 gap-8 min-h-0">
          
          {/* Left Column - Strategy Content (7 cols) */}
          <div className="col-span-7 flex flex-col gap-6">
            
            {/* The Vision */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                <Target className="w-6 h-6 text-emerald-400" />
                The Vision
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                2026 defines a fundamental change in DNA. We are shifting from <span className="text-gray-400 line-through decoration-emerald-500/50">labor-heavy venue operations</span> to <span className="text-emerald-400 font-semibold">high-throughput, automated platform ownership</span>. The goal is scalability through software.
              </p>
            </motion.div>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 gap-4">
              <motion.h3 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.5 }}
                className="text-xl font-bold text-gray-400 uppercase tracking-widest pl-1"
              >
                Strategic Pillars
              </motion.h3>
              
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 hover:border-emerald-500/30 transition-colors group"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${pillar.color}-500/10 border border-${pillar.color}-500/20 group-hover:scale-110 transition-transform`}>
                    <pillar.icon className={`w-6 h-6 text-${pillar.color}-400`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{pillar.title}</h4>
                    <p className="text-gray-400">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Financial & Operational Goal */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-auto bg-gradient-to-br from-emerald-900/20 to-black border border-emerald-500/20 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-emerald-400 mb-2 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Financial & Operational Goal
              </h3>
              <p className="text-lg text-gray-300">
                Achieve monetization readiness through arcade-style turnover and recurring subscriptions, supported by a <span className="text-white font-semibold">lean, AI-assisted team</span>.
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
                src={strategicPivotImage} 
                alt="Strategic Pivot Diagram - Transition from Labor-Heavy to Automated Platform" 
                className="max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
