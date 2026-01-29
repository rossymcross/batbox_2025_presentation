import React from "react";
import { motion } from "motion/react";
import { Check, Rocket } from "lucide-react";

interface SuccessDefinitionSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const SuccessDefinitionSlide: React.FC<SuccessDefinitionSlideProps> = ({ onNext, onPrev }) => {
  const successCriteria = [
    "Batbox Suite commercial product fully launched in market.",
    "Subscription services live across ~50 venues / 100 simulators.",
    "3 Pilot Program sites live and tracking data.",
    "Master Admin Portal operating as the central system of record.",
    "CDP and AI systems delivering actionable business insights.",
    "Platform ownership institutionalized (reduced vendor dependency)."
  ];

  return (
    <div className="w-screen h-screen bg-[#050505] text-white font-sans p-10 flex flex-col overflow-hidden relative selection:bg-cyan-500/10">
      {/* Ambient Background Effects - Static */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-[-10%] right-[10%] w-[900px] h-[900px] rounded-full opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
        />
        <div 
          className="absolute bottom-[-10%] left-[5%] w-[800px] h-[800px] rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
        />

        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-black tracking-tight leading-tight"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #06b6d4 50%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 60px rgba(6, 182, 212, 0.4)'
            }}
          >
            Defining Success at End-of-Year 2026
          </motion.h1>
        </motion.div>

        {/* Success Criteria List */}
        <div className="flex-1 flex flex-col justify-center gap-4 mb-8">
          {successCriteria.map((criterion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2 + (index * 0.1),
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex items-center gap-4 group"
            >
              {/* Checkmark Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3 + (index * 0.1),
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                className="relative shrink-0"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)',
                    border: '2px solid rgba(6, 182, 212, 0.3)',
                    boxShadow: '0 8px 32px rgba(6, 182, 212, 0.2)'
                  }}
                >
                  <Check className="w-7 h-7 text-cyan-400" strokeWidth={3} />
                </div>
              </motion.div>

              {/* Criterion Text */}
              <div className="flex-1 transition-transform duration-300 hover:translate-x-2">
                <p className="text-2xl text-gray-100 leading-relaxed font-medium">
                  {criterion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Outcome Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="relative mb-8"
        >
          <div 
            className="rounded-3xl p-10 backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(168, 85, 247, 0.08) 100%)',
              border: '2px solid rgba(6, 182, 212, 0.2)',
              boxShadow: '0 20px 60px rgba(6, 182, 212, 0.2)'
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-cyan-400" strokeWidth={2} />
              </div>
              <h2 className="text-3xl font-bold text-cyan-400">2026 Outcome</h2>
            </div>
            <p className="text-4xl text-white leading-relaxed font-semibold">
              A fully self-service, scalable commercial platform ready for global expansion.
            </p>
          </div>

          {/* Static glow effect */}
          <div
            className="absolute inset-0 rounded-3xl opacity-40"
            style={{
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)',
              filter: 'blur(30px)',
              zIndex: -1
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};
