import React from "react";
import { motion } from "motion/react";
import { Brain, Zap, Headphones, TrendingUp } from "lucide-react";
import aiDiagram from "../../assets/ai-operations-diagram.png";

interface AIOperationsSlideProps {
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

export const AIOperationsSlide: React.FC<AIOperationsSlideProps> = ({ onNext, onPrev }) => {
  return (
    <div className="w-screen h-screen bg-[#050505] text-white p-10 flex flex-col overflow-hidden relative selection:bg-purple-500/5">
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial Gradient Orbs - Static */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[10%] left-[15%] w-[900px] h-[900px] rounded-full opacity-[0.14]"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
        <div
          className="absolute bottom-[15%] right-[10%] w-[800px] h-[800px] rounded-full opacity-[0.12]"
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
              className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:rotate-[5deg]"
              style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)' }}
            >
              <Brain className="w-7 h-7 text-purple-400" strokeWidth={2} />
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
                Leveraging AI for Operational Efficiency and Differentiation
              </h1>
              <p className="text-lg text-gray-400 mt-1">
                Automating development, support, and insights through intelligent AI systems
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
              
              {/* Development Velocity Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-white/10 rounded-2xl p-5 relative overflow-hidden"
                style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)' }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500" />
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-purple-400" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-purple-400">Development Velocity</h3>
                </div>
                
                <p className="text-base text-gray-200 mb-2">
                  <span className="font-bold text-white">AI-assisted prototyping</span> and automated testing drive rapid feature development.
                </p>
                <p className="text-sm text-gray-400">
                  Target achievement of <span className="text-purple-400 font-semibold">~80% AI-assisted builds by Q4 2026</span>, with test automation reducing manual testing cycles by 70%.
                </p>
              </motion.div>

              {/* Customer Support Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-white/10 rounded-2xl p-5 relative overflow-hidden"
                style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)' }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500" />
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-cyan-400" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400">Customer Support</h3>
                </div>
                
                <p className="text-base text-gray-200 mb-2">
                  <span className="font-bold text-white">Tier 1: Agentic AI</span> provides autonomous handling of common support inquiries 24/7.
                </p>
                <p className="text-sm text-gray-400">
                  Instant response times across all time zones, allowing human agents to focus on complex, high-value customer interactions.
                </p>
              </motion.div>

              {/* Insights Card */}
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
                    <TrendingUp className="w-5 h-5 text-emerald-400" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-400">Insights</h3>
                </div>
                
                <p className="text-base text-gray-200 mb-2">
                  <span className="font-bold text-white">Data-driven recommendations</span> and predictive analytics power strategic decisions.
                </p>
                <p className="text-sm text-gray-400">
                  AI transforms raw data into actionable intelligence for operations and sales teams, anticipating customer needs and venue performance trends.
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
              className="relative w-full flex items-center justify-center transition-transform duration-200 hover:scale-[1.02]"
            >
              <img 
                src={aiDiagram} 
                alt="AI Operations Diagram - Code Generation, Automated QA, AI Support Agents, and Faster Builds" 
                className="max-w-full max-h-full object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};
