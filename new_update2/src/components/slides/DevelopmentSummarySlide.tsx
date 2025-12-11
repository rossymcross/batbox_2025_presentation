import React from "react";
import { motion } from "motion/react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { CheckCircle2, CircleDashed, Clock, Layers } from "lucide-react";

interface DevelopmentSummarySlideProps {
  onNext: () => void;
  onPrev: () => void;
}

const data = [
  { name: "Completed", value: 73.1, color: "#1E3F10" }, // Combined Closed & Deployed
  { name: "New", value: 10.2, color: "#4688D6" }, // Blue
  { name: "In Progress", value: 6.4, color: "#F3D64E" }, // Yellow
  { name: "Estimate req", value: 3.3, color: "#001E60" }, // Dark Blue
  { name: "Other", value: 2.6, color: "#808080" }, // Grey
  { name: "QA passed", value: 2.2, color: "#2ECC71" }, // Teal
  { name: "Code review", value: 1.3, color: "#FF69B4" }, // Pink
  { name: "QA", value: 1.0, color: "#FF8C00" }, // Orange
];

const stats = [
  { 
    label: "Total Tasks", 
    value: "1,437", 
    icon: Layers, 
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20"
  },
  { 
    label: "Completed", 
    value: "1,032", 
    icon: CheckCircle2, 
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20"
  },
  { 
    label: "In Progress", 
    value: "261", 
    icon: Clock, 
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20"
  },
  { 
    label: "Backlog", 
    value: "144", 
    icon: CircleDashed, 
    color: "text-gray-400",
    bg: "bg-gray-400/10",
    border: "border-gray-400/20"
  },
];

// Custom label function
const renderCustomizedLabel = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent, name, stroke } = props;
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  
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
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={4} textAnchor={textAnchor} fill="#E5E7EB" fontSize={14}>
        {name}
      </text>
    </g>
  );
};

export const DevelopmentSummarySlide: React.FC<DevelopmentSummarySlideProps> = ({ onNext, onPrev }) => {
  return (
    <div className="w-screen h-screen bg-[#121316] text-white font-sans p-12 flex flex-col overflow-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
      `}</style>

      {/* Navigation Controls (Hidden but clickable) */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-1/4 h-full cursor-default" onClick={onPrev} />
        <div className="w-3/4 h-full cursor-default" onClick={onNext} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col font-outfit max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              2025 Development Summary
            </h2>
            <span className="px-4 py-1 rounded-full bg-[#06b6d4]/10 border border-[#06b6d4]/30 text-[#06b6d4] text-sm font-medium uppercase tracking-wider">
              June - Dec 2025
            </span>
          </div>
          <p className="text-2xl text-gray-400 font-light">
            Work Volume & Velocity Summary
          </p>
        </motion.div>

        <div className="flex-1 grid grid-cols-12 gap-12 min-h-0">
          {/* Left Column: Stats */}
          <div className="col-span-4 flex flex-col gap-6 justify-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (index * 0.1) }}
                className={`flex items-center gap-6 p-6 rounded-2xl border ${stat.bg} ${stat.border} backdrop-blur-sm transition-all hover:scale-105`}
              >
                <div className={`p-4 rounded-xl bg-[#121316]/50 ${stat.color}`}>
                  <stat.icon className="w-10 h-10" />
                </div>
                <div>
                  <div className={`text-5xl font-bold mb-1 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-lg uppercase tracking-wide font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Chart */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="col-span-8 bg-gradient-to-br from-[#1E1F23] via-[#1a1b1f] to-[#121316] rounded-3xl border border-white/5 p-8 flex flex-col shadow-2xl relative overflow-hidden group"
          >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" 
                 style={{ 
                   backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', 
                   backgroundSize: '32px 32px' 
                 }} 
            />
            
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
            
            <h3 className="text-xl font-medium text-gray-400 mb-4 absolute top-8 left-8">Task Status Distribution</h3>
            
            <div className="w-full h-full min-h-[500px] relative flex items-center justify-center">
              <div className="w-full h-full absolute inset-0">
                <ResponsiveContainer width="100%" height="100%" minWidth={100} minHeight={100}>
                  <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={160}
                    outerRadius={240}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                    labelLine={false} // We draw our own
                    label={renderCustomizedLabel}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1E1F23', 
                      borderColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '16px',
                      padding: '12px 16px'
                    }}
                    itemStyle={{ color: '#fff' }}
                  />
                </PieChart>
                </ResponsiveContainer>
              </div>
              
              {/* Center Stat */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">73%</div>
                  <div className="text-gray-400 text-lg">Completed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
