import React, { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Globe, Monitor, Smartphone, Gamepad2, FileText, LayoutGrid, Server } from "lucide-react";

interface PlatformDistributionSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

const data = [
  { name: "Batbox Webadmin", value: 696, percentage: 42, color: "#3B82F6", icon: Server }, // Blue
  { name: "Kiosk", value: 258, percentage: 15.6, color: "#EC4899", icon: Monitor }, // Pink
  { name: "Booking Portal", value: 175, percentage: 10.6, color: "#06B6D4", icon: Globe }, // Cyan
  { name: "Game Development", value: 196, percentage: 11.8, color: "#F97316", icon: Gamepad2 }, // Orange
  { name: "Customer Web App", value: 48, percentage: 2.9, color: "#A855F7", icon: Smartphone }, // Purple
  { name: "Waivers", value: 88, percentage: 5.3, color: "#22C55E", icon: FileText }, // Green
  { name: "Other", value: 196, percentage: 11.8, color: "#64748B", icon: LayoutGrid }, // Slate
];

// Custom label renderer
const renderCustomizedLabel = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent, name } = props;
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
  // Calculate line start/end points
  const sin = Math.sin(-midAngle * RADIAN);
  const cos = Math.cos(-midAngle * RADIAN);
  const sx = cx + (outerRadius + 20) * cos;
  const sy = cy + (outerRadius + 20) * sin;
  const mx = cx + (outerRadius + 40) * cos;
  const my = cy + (outerRadius + 40) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke="#9CA3AF" strokeWidth={1} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill="#9CA3AF" stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={4} textAnchor={textAnchor} fill="#E5E7EB" fontSize={14} fontWeight={500}>
        {name} ({props.percentage}%)
      </text>
    </g>
  );
};

export const PlatformDistributionSlide: React.FC<PlatformDistributionSlideProps> = ({ onNext, onPrev }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightGradient = useMotionTemplate`radial-gradient(circle 700px at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.05), transparent 70%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);


  return (
    <div className="w-screen h-screen bg-[#050505] text-white p-12 flex flex-col overflow-hidden relative">
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.02) 1px, transparent 1px)
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
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[10%] right-[5%] w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-[10%] left-[10%] w-[700px] h-[700px] rounded-full"
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulance type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.4) 100%)'
        }}
      />

      {/* Navigation Controls */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-1/4 h-full cursor-default" onClick={onPrev} />
        <div className="w-3/4 h-full cursor-default" onClick={onNext} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col font-inter max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <div className="flex items-center gap-5 mb-3">
            <h2 
              className="text-6xl font-black tracking-[-0.02em]"
              style={{
                background: 'linear-gradient(to right, #ffffff 0%, #a0a0a0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 4px 40px rgba(139, 92, 246, 0.15)'
              }}
            >
              2025 Development Summary
            </h2>
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-purple-500/5 border border-purple-500/30 text-purple-400 text-sm font-semibold uppercase tracking-[0.15em] backdrop-blur-sm relative overflow-hidden"
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
                  background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.2), transparent)'
                }}
              />
              <span className="relative z-10">System Analysis</span>
            </motion.span>
          </div>
          <p 
            className="text-2xl text-gray-300 font-light tracking-[-0.01em]"
            style={{ textShadow: '0 2px 15px rgba(0, 0, 0, 0.5)' }}
          >
            Platform Issue Distribution
          </p>
        </motion.div>

        <div className="flex-1 grid grid-cols-12 gap-8 min-h-0">
          {/* Left Column: Chart */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              delay: 0.4, 
              duration: 1,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="col-span-7 bg-gradient-to-br from-[#0c0c0e] to-[#151518] rounded-3xl border border-purple-500/20 p-4 flex flex-col relative overflow-hidden group"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(139, 92, 246, 0.02)'
            }}
          >
             {/* Background Grid Pattern */}
             <div className="absolute inset-0 opacity-[0.02]" 
                  style={{ 
                    backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', 
                    backgroundSize: '24px 24px' 
                  }} 
             />

             {/* Background Glow */}
             <motion.div 
               animate={{ 
                 scale: [1, 1.2, 1],
                 opacity: [0.15, 0.25, 0.15] 
               }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
               style={{
                 background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
                 filter: 'blur(80px)'
               }}
             />

            <div className="w-full h-full min-h-[400px] relative flex items-center justify-center">
              <div className="w-full h-full absolute inset-0">
                <ResponsiveContainer width="100%" height="100%" minWidth={100} minHeight={100}>
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={140}
                      outerRadius={210}
                      paddingAngle={2}
                      dataKey="value"
                      stroke="none"
                      labelLine={false}
                      label={renderCustomizedLabel}
                    >
                      {data.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.color} 
                          stroke={entry.color}
                          style={{
                            cursor: 'default'
                          }}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              {/* Center Stat */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <motion.div 
                    className="text-6xl font-black text-white mb-2 tracking-tighter"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: 1, 
                      duration: 0.8,
                      type: "spring",
                      stiffness: 200
                    }}
                    style={{ 
                      textShadow: '0 0 60px rgba(139, 92, 246, 0.4), 0 4px 30px rgba(0, 0, 0, 0.5)' 
                    }}
                  >
                    1,657
                  </motion.div>
                  <motion.div 
                    className="text-gray-300 text-base uppercase tracking-[0.15em] font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                  >
                    Total Tasks
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed List */}
          <div className="col-span-5 flex flex-col gap-3 justify-center overflow-y-auto pr-2">
            {data.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 30 }}
                animate={{ 
                  opacity: 1,
                  x: 0
                }}
                transition={{ 
                  delay: 0.6 + (index * 0.08),
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-gradient-to-br from-[#0c0c0e] to-[#151518] relative overflow-hidden"
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div 
                  className="p-3 rounded-xl relative shrink-0"
                  style={{ 
                    backgroundColor: `${item.color}20`,
                    color: item.color
                  }}
                >
                  <item.icon className="w-6 h-6" strokeWidth={2} />
                </div>
                
                <div className="flex-1 min-w-0 relative z-10">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-bold text-base text-white truncate">{item.name}</h4>
                    <span 
                      className="text-xl font-black ml-3"
                      style={{ 
                        color: item.color
                      }}
                    >
                      {item.percentage}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden mb-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ 
                        width: `${item.percentage}%`,
                        boxShadow: `0 0 10px ${item.color}80`
                      }}
                      transition={{ 
                        duration: 1.5, 
                        delay: 1 + (index * 0.08),
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="h-full rounded-full"
                      style={{ 
                        backgroundColor: item.color
                      }}
                    />
                  </div>
                  
                  <div className="text-xs text-gray-400 text-right font-semibold">
                    {item.value} tasks
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/20 rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px rgba(139, 92, 246, 0.4)'
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
