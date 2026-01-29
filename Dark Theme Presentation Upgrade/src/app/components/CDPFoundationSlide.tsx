import React from "react";
import { motion } from "motion/react";
import { Database, Target, Settings, Sparkles } from "lucide-react";
import cdpDiagram from "../../assets/cdp-foundation-dark.png";

interface CDPFoundationSlideProps {
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

export const CDPFoundationSlide: React.FC<CDPFoundationSlideProps> = ({ onNext, onPrev }) => {
  return (
    <div className="w-screen h-screen bg-[#050505] text-white p-10 flex flex-col overflow-hidden relative selection:bg-blue-500/5">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Static Radial Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[10%] left-[15%] w-[900px] h-[900px] rounded-full opacity-[0.14]"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
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
          className="mb-8 shrink-0"
        >
          <div className="flex items-center gap-5 mb-2">
            <div 
              className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center transition-transform hover:scale-110"
              style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)' }}
            >
              <Database className="w-7 h-7 text-blue-400" strokeWidth={2} />
            </div>
            <div>
              <h1 
                className="text-5xl font-black tracking-[-0.02em] leading-tight py-1"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                The Customer Data Platform (CDP) Foundation
              </h1>
              <p className="text-lg text-gray-400 mt-1">
                Building a unified data ecosystem with Treasure Data for intelligent automation and insights
              </p>
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
          {/* Left Column - Content */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            {/* Three Cards */}
            <div className="flex flex-col gap-4">
              
              {/* Objective Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-white/10 rounded-2xl p-5 relative overflow-hidden"
                style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)' }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500" />
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                    <Target className="w-5 h-5 text-cyan-400" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400">Objective</h3>
                </div>
                
                <p className="text-base text-gray-200 mb-2">
                  Create a <span className="font-bold text-white">360° customer view</span> that unifies all touchpoints into a single, actionable data source.
                </p>
                <p className="text-sm text-gray-400">
                  By consolidating gameplay data, transaction records, and customer interactions, we eliminate data silos and enable true cross-platform intelligence.
                </p>
              </motion.div>

              {/* Implementation Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-white/10 rounded-2xl p-5 relative overflow-hidden"
                style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)' }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500" />
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                    <Settings className="w-5 h-5 text-purple-400" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-purple-400">Implementation</h3>
                </div>
                
                <p className="text-base text-gray-200 mb-2">
                  <span className="font-bold text-white">Phase 2 integration</span> of Treasure Data CDP into our core infrastructure.
                </p>
                <p className="text-sm text-gray-400">
                  This integration connects disparate data sources, enabling real-time data ingestion, transformation, and enrichment across all customer touchpoints.
                </p>
              </motion.div>

              {/* Outcome Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-white/10 rounded-2xl p-5 relative overflow-hidden"
                style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)' }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-emerald-400" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-400">Outcome</h3>
                </div>
                
                <p className="text-base text-gray-200 mb-2">
                  Unlock <span className="font-bold text-white">real-time decision making</span> and <span className="font-bold text-white">automated AI action</span> at scale.
                </p>
                <p className="text-sm text-gray-400">
                  Transform raw data into actionable insights that power executive dashboards, enable AI-driven automation, and deliver hyper-personalized customer experiences.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center relative"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full flex items-center justify-center transition-transform hover:scale-[1.02]"
            >
              <img 
                src={cdpDiagram} 
                alt="CDP Foundation Diagram - Data flow from sources through Treasure Data to actionable outcomes" 
                className="max-w-full max-h-full object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};
