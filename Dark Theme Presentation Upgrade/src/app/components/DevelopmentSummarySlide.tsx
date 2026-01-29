import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { PieChart, Pie, Cell } from "recharts";
import { CheckCircle2, CircleDashed, Clock, Layers } from "lucide-react";

interface DevelopmentSummarySlideProps {
  onNext: () => void;
  onPrev: () => void;
}

const data = [
  { name: "Deployed to Prod", value: 56.8, color: "#22c55e" }, // Green-500
  { name: "Closed", value: 14.2, color: "#ef4444" }, // Red-500
  { name: "New", value: 8.9, color: "#3b82f6" }, // Blue-500
  { name: "QA Passed", value: 6.8, color: "#14b8a6" }, // Teal-500
  { name: "In Progress", value: 5.2, color: "#eab308" }, // Yellow-500
  { name: "Ready for Deploy", value: 1.7, color: "#8b5cf6" }, // Violet-500
  { name: "Estimate Requested", value: 1.9, color: "#6366f1" }, // Indigo-500
  { name: "Blocked", value: 0.8, color: "#dc2626" }, // Red-600
  { name: "Code Review", value: 0.5, color: "#ec4899" }, // Pink-500
  { name: "Ready for Dev", value: 0.7, color: "#06b6d4" }, // Cyan-500
  { name: "Other", value: 2.5, color: "#64748b" }, // Slate-500 (Rejected, Ready for review, etc.)
];

const stats = [
  { 
    label: "Total Tasks", 
    value: "1,653", 
    icon: Layers, 
    color: "text-blue-400",
    glowColor: "rgba(59, 130, 246, 0.2)",
    bgGradient: "from-blue-500/10 to-blue-500/5",
    border: "border-blue-500/30"
  },
  { 
    label: "Completed", 
    value: "1,292", 
    icon: CheckCircle2, 
    color: "text-emerald-400",
    glowColor: "rgba(16, 185, 129, 0.2)",
    bgGradient: "from-emerald-500/10 to-emerald-500/5",
    border: "border-emerald-500/30"
  },
  { 
    label: "In Progress", 
    value: "164", 
    icon: Clock, 
    color: "text-yellow-400",
    glowColor: "rgba(234, 179, 8, 0.2)",
    bgGradient: "from-yellow-500/10 to-yellow-500/5",
    border: "border-yellow-500/30"
  },
  { 
    label: "Backlog", 
    value: "200", 
    icon: CircleDashed, 
    color: "text-gray-400",
    glowColor: "rgba(148, 163, 184, 0.2)",
    bgGradient: "from-gray-500/10 to-gray-500/5",
    border: "border-gray-500/30"
  },
];

export const DevelopmentSummarySlide: React.FC<DevelopmentSummarySlideProps> = ({ onNext, onPrev }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const spotlightGradient = useMotionTemplate`radial-gradient(circle 700px at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.05), transparent 70%)`;

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

  return (
    <div className="w-screen h-screen bg-[#050505] text-white px-12 pt-10 pb-24 flex flex-col overflow-hidden relative selection:bg-emerald-500/5">
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

      {/* Radial Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.18, 0.1],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[5%] right-[5%] w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, -30, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[10%] left-[5%] w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
      </div>

      {/* Mouse-Following Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlightGradient }}
      />

      {/* Noise Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.4) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col font-inter max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="flex items-center gap-6 mb-3">
            <h2 
              className="text-6xl font-black tracking-[-0.02em]"
              style={{
                textShadow: '0 4px 40px rgba(16, 185, 129, 0.15)'
              }}
            >
              Development Velocity
            </h2>
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 text-emerald-400 text-sm font-semibold uppercase tracking-[0.15em] backdrop-blur-sm relative overflow-hidden translate-y-1"
            >
              <motion.div
                className="absolute inset-0 -translate-x-full"
                animate={{
                  translateX: ['100%', '200%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 2
                }}
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.2), transparent)'
                }}
              />
              <span className="relative z-10">May 2025 - January 2026</span>
            </motion.span>
          </div>
          <p 
            className="text-2xl text-gray-300 font-light max-w-4xl tracking-[-0.01em]"
            style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.5)' }}
          >
            Work Volume & Delivery Summary
          </p>
        </motion.div>

        <div className="flex-1 grid grid-cols-12 gap-12 min-h-0">
          {/* Left Column: Stats */}
          <div className="col-span-4 flex flex-col gap-6 justify-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 0.3 + (index * 0.1),
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                onHoverStart={() => setHoveredStat(index)}
                onHoverEnd={() => setHoveredStat(null)}
                className={`flex items-center gap-6 p-6 rounded-2xl border ${stat.border} bg-gradient-to-br from-[#0c0c0e] to-[#151518] backdrop-blur-sm transition-all cursor-default relative overflow-hidden group`}
                style={{
                  boxShadow: hoveredStat === index
                    ? `0 0 40px ${stat.glowColor}, inset 0 0 20px ${stat.glowColor.replace('0.2', '0.05')}`
                    : '0 8px 30px rgba(0, 0, 0, 0.4)'
                }}
              >
                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 -translate-x-full pointer-events-none"
                  animate={hoveredStat === index ? {
                    translateX: ['100%', '200%']
                  } : {}}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                  style={{
                    background: `linear-gradient(90deg, transparent, ${stat.glowColor}, transparent)`
                  }}
                />

                <motion.div 
                  className={`p-4 rounded-xl bg-gradient-to-br ${stat.bgGradient} ${stat.color} relative`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: hoveredStat === index ? `0 0 25px ${stat.glowColor}` : 'none'
                  }}
                >
                  <stat.icon className="w-10 h-10" strokeWidth={2} />
                </motion.div>
                <div className="relative z-10">
                  <div 
                    className="text-5xl font-black mb-1 text-white tracking-tight"
                    style={{
                      textShadow: hoveredStat === index ? `0 0 30px ${stat.glowColor}` : 'none'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-base uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Chart */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.4, 
              duration: 1,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="col-span-8 bg-gradient-to-br from-[#0c0c0e] to-[#151518] rounded-3xl border border-emerald-500/20 p-8 flex flex-col relative overflow-hidden group"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(16, 185, 129, 0.02)'
            }}
          >
            {/* Background Glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.25, 0.15] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
                filter: 'blur(80px)'
              }}
            />
            
            <h3 
              className="text-xl font-bold text-gray-300 mb-4 absolute top-8 left-8 z-20 tracking-wide"
              style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.5)' }}
            >
              Task Status Distribution
            </h3>
            
            <div className="flex-1 flex items-center gap-8 px-8 relative z-10">
              {/* Chart */}
              <div className="w-[500px] h-[500px] relative shrink-0 flex items-center justify-center">
                <PieChart width={460} height={460}>
                  <Pie
                    data={data}
                    cx={230}
                    cy={230}
                    innerRadius={130}
                    outerRadius={180}
                    paddingAngle={4}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                    stroke="none"
                  >
                    {data.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        style={{ 
                          cursor: 'default'
                        }}
                      />
                    ))}
                  </Pie>
                </PieChart>
                
                {/* Center Stat */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center">
                    <motion.div 
                      className="text-7xl font-black text-white mb-2 tracking-tighter"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        delay: 1, 
                        duration: 0.8,
                        type: "spring",
                        stiffness: 200
                      }}
                      style={{ 
                        textShadow: '0 0 60px rgba(16, 185, 129, 0.4), 0 4px 30px rgba(0, 0, 0, 0.5)' 
                      }}
                    >
                      78%
                    </motion.div>
                    <motion.div 
                      className="text-emerald-400 text-lg font-bold tracking-[0.15em] uppercase"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.3 }}
                      style={{
                        textShadow: '0 0 20px rgba(16, 185, 129, 0.5)'
                      }}
                    >
                      Completion Rate
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="w-[300px] grid grid-cols-1 gap-2.5 py-4">
                {data.map((item, index) => (
                  <motion.div 
                    key={item.name} 
                    className="flex items-center justify-between group/item p-2 rounded-lg hover:bg-white/5 transition-all cursor-default"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 1 + (index * 0.05),
                      duration: 0.5
                    }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="w-3 h-3 rounded-full" 
                        style={{ 
                          backgroundColor: item.color,
                          boxShadow: `0 0 15px ${item.color}80`
                        }} 
                        whileHover={{ scale: 1.3 }}
                      />
                      <span className="text-gray-300 font-medium text-sm group-hover/item:text-white transition-colors">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm font-mono font-semibold group-hover/item:text-gray-300 transition-colors">
                      {item.value}%
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/20 rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px rgba(16, 185, 129, 0.4)'
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};
