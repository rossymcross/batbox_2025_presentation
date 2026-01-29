import React, { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { Gamepad2, CreditCard, Clock, Users, Store, Zap, Smartphone, RefreshCw, Monitor, DollarSign, Layers, Megaphone } from "lucide-react";
import batboxSuiteRevenueFlow from "../../assets/batbox-suite-revenue-flow.png";

interface BatboxSuiteDemoSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const BatboxSuiteDemoSlide: React.FC<BatboxSuiteDemoSlideProps> = ({ onNext, onPrev }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightGradient = useMotionTemplate`radial-gradient(circle 800px at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.06), transparent 70%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="w-screen h-screen bg-[#050505] text-white p-6 flex flex-col overflow-hidden relative selection:bg-emerald-500/5">
      {/* Background Effects */}
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
      
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlightGradient }}
      />

      <div className="relative z-10 w-full h-full flex flex-col font-inter max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-4 shrink-0">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-black tracking-[-0.02em] leading-tight"
            style={{
              backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Introducing Batbox Suite:{" "}
            <span className="text-emerald-400">A Commercial-Ready Self-Service Product</span>
          </motion.h1>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-12 gap-8 min-h-0">
          
          {/* Left Column - Content (7 cols) */}
          <div className="col-span-7 flex flex-col gap-5">
            
            {/* Product Definition Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-emerald-400 mb-3 flex items-center gap-3">
                <Store className="w-7 h-7" />
                Product Definition
              </h3>
              <p className="text-xl text-gray-200 leading-relaxed">
                Commercial-ready offering for high-traffic venues (Malls, FECs, Districts).
              </p>
            </motion.div>

            {/* The Experience Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-emerald-900/10 border border-emerald-500/20 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden flex-1"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500" />
              
              <h3 className="text-2xl font-bold text-emerald-400 mb-5 flex items-center gap-3">
                <Zap className="w-7 h-7" />
                The Experience
              </h3>
              
              <div className="grid grid-cols-2 gap-5">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-lg font-bold text-white block mb-1">Short-Form</span>
                    <span className="text-lg text-gray-300">~10 minutes per session.</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-lg font-bold text-white block mb-1">Capacity</span>
                    <span className="text-lg text-gray-300">1–4 players.</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CreditCard className="w-6 h-6 text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-lg font-bold text-white block mb-1">Frictionless</span>
                    <span className="text-lg text-gray-300">Minimal staff. Credits, tokens, or card payments.</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Gamepad2 className="w-6 h-6 text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-lg font-bold text-white block mb-1">Mini-Game Library</span>
                    <span className="text-lg text-gray-300">4 new games in 2026 roadmap.</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Revenue Generation Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-cyan-900/10 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden flex-1"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-emerald-500" />
              
              <h3 className="text-2xl font-bold text-cyan-400 mb-5 flex items-center gap-3">
                <DollarSign className="w-7 h-7" />
                Revenue Generation
              </h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Layers className="w-6 h-6 text-cyan-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-lg font-bold text-white block mb-1">Subscription Logic</span>
                    <span className="text-lg text-gray-300">Venues pay for access tiers (Standard vs. Premium). Tiers control game availability and exclusive IP access.</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Megaphone className="w-6 h-6 text-cyan-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-lg font-bold text-white block mb-1">Advertising & Sponsorship</span>
                    <span className="text-lg text-gray-300">Batbox Display surfaces utilized for sponsor-branded experiences and audience targeting.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Illustration (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="col-span-5 relative flex items-center justify-center overflow-hidden"
          >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Glow */}
              <div className="absolute inset-0 bg-emerald-500/10 blur-3xl opacity-20" />
              
              <img 
                src={batboxSuiteRevenueFlow} 
                alt="Batbox Suite Revenue Flow" 
                className="max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
