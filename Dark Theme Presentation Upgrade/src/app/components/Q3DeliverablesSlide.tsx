import React from "react";
import { motion } from "motion/react";
import { Calendar, Database, Users, BarChart3, Bot, Brain, Building2, CheckCircle2 } from "lucide-react";
import analyticsDashboard from "../../assets/image (77).png";

interface Q3DeliverablesSlideProps {
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

export const Q3DeliverablesSlide: React.FC<Q3DeliverablesSlideProps> = ({ onNext, onPrev }) => {
  const features = [
    { icon: Database, text: "Customer Data Platform (Treasure Data) Phase 2", color: "cyan" },
    { icon: Users, text: "360° customer view across gameplay, booking, and payments", color: "emerald" },
    { icon: BarChart3, text: "Executive dashboards and analytics", color: "purple" },
    { icon: Bot, text: "Agentic AI for Tier 1 customer support", color: "orange" },
    { icon: Brain, text: "Internal AI insights for ops, product, and growth", color: "amber" },
    { icon: Building2, text: "Launch and operate 3 pilot locations", color: "pink" },
  ];

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

      {/* Static Radial Gradient Orbs */}
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
          className="mb-10"
        >
          <div className="flex items-center gap-5 mb-2">
            <div 
              className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 hover:border-purple-500/50 flex items-center justify-center transition-colors duration-300"
              style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)' }}
            >
              <Calendar className="w-7 h-7 text-purple-400" strokeWidth={2} />
            </div>
            <div>
              <h1 
                className="text-6xl font-black tracking-[-0.02em]"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                2026 Q3
              </h1>
              <p className="text-xl text-gray-300 font-semibold tracking-wide mt-1">Major Software Deliverables</p>
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
          {/* Left Column - Milestone Info */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col"
          >
            {/* Major Milestone Card */}
            <div 
              className="bg-gradient-to-br from-[#0c0c0e] to-[#151518] border border-purple-500/20 rounded-3xl p-8 relative overflow-hidden flex-1"
              style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(168, 85, 247, 0.03)' }}
            >
              {/* Top gradient bar */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-2 origin-left"
                style={{
                  background: 'linear-gradient(to right, rgba(168, 85, 247, 1), rgba(6, 182, 212, 1))',
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              />
              
              {/* Background glow */}
              <div 
                className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-40"
                style={{
                  background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
                  filter: 'blur(80px)'
                }}
              />
              
              <div className="relative z-10 h-full flex flex-col">
                <motion.div 
                  className="flex items-center gap-3 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <CheckCircle2 className="w-7 h-7 text-purple-400" strokeWidth={2.5} />
                  <span className="text-purple-400 font-bold text-base uppercase tracking-[0.15em]">Major Milestone</span>
                </motion.div>
                
                <motion.h2 
                  className="text-4xl font-black text-white mb-8 tracking-[-0.02em]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  style={{ textShadow: '0 4px 30px rgba(168, 85, 247, 0.2)' }}
                >
                  Customer Intelligence & Pilot Operations
                </motion.h2>
                
                <div className="space-y-3 flex-1">
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                      className={`flex items-center gap-4 p-3 rounded-xl bg-black/40 border transition-all duration-300 cursor-default ${
                        feature.color === 'cyan' ? 'border-cyan-500/20 hover:border-cyan-500/50' :
                        feature.color === 'emerald' ? 'border-emerald-500/20 hover:border-emerald-500/50' :
                        feature.color === 'purple' ? 'border-purple-500/20 hover:border-purple-500/50' :
                        feature.color === 'orange' ? 'border-orange-500/20 hover:border-orange-500/50' :
                        feature.color === 'amber' ? 'border-amber-500/20 hover:border-amber-500/50' :
                        'border-pink-500/20 hover:border-pink-500/50'
                      }`}
                      style={{ 
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)' 
                      }}
                    >
                      <div 
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                          feature.color === 'cyan' ? 'bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-500/50' :
                          feature.color === 'emerald' ? 'bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-500/50' :
                          feature.color === 'purple' ? 'bg-purple-500/10 border border-purple-500/30 hover:border-purple-500/50' :
                          feature.color === 'orange' ? 'bg-orange-500/10 border border-orange-500/30 hover:border-orange-500/50' :
                          feature.color === 'amber' ? 'bg-amber-500/10 border border-amber-500/30 hover:border-amber-500/50' :
                          'bg-pink-500/10 border border-pink-500/30 hover:border-pink-500/50'
                        }`}
                      >
                        <feature.icon className={`w-5 h-5 ${
                          feature.color === 'cyan' ? 'text-cyan-400' :
                          feature.color === 'emerald' ? 'text-emerald-400' :
                          feature.color === 'purple' ? 'text-purple-400' :
                          feature.color === 'orange' ? 'text-orange-400' :
                          feature.color === 'amber' ? 'text-amber-400' :
                          'text-pink-400'
                        }`} strokeWidth={2} />
                      </div>
                      <span className="text-base text-white font-semibold tracking-[-0.01em]">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center relative overflow-hidden"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full flex items-center justify-center p-4"
            >
              {/* Background glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div 
                  className="w-[500px] h-[500px] rounded-full opacity-40"
                  style={{
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
                    filter: 'blur(60px)'
                  }}
                />
              </div>

              <img 
                src={analyticsDashboard} 
                alt="Analytics Dashboard - Executive dashboards showing customer intelligence and operational metrics" 
                className="w-full h-full object-contain rounded-2xl relative z-10"
                style={{ 
                  maxHeight: '100%',
                  maxWidth: '100%'
                }}
              />
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};
