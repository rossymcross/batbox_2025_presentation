import React from "react";
import { motion } from "motion/react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Globe, Monitor, Smartphone, Gamepad2, FileText, LayoutGrid, Server } from "lucide-react";

interface PlatformDistributionSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

const data = [
  { name: "Batbox Webadmin", value: 505, percentage: 45.2, color: "#3B82F6", icon: Server }, // Blue
  { name: "Kiosk", value: 217, percentage: 19.4, color: "#F97316", icon: Monitor }, // Orange
  { name: "Booking Portal", value: 143, percentage: 12.8, color: "#EF4444", icon: Globe }, // Red
  { name: "Game Development", value: 133, percentage: 11.9, color: "#8B5CF6", icon: Gamepad2 }, // Purple
  { name: "Customer Web App", value: 45, percentage: 4.0, color: "#EC4899", icon: Smartphone }, // Pink
  { name: "Waivers", value: 38, percentage: 3.4, color: "#EAB308", icon: FileText }, // Yellow
  { name: "Other", value: 36, percentage: 3.2, color: "#94A3B8", icon: LayoutGrid }, // Slate
];

// Reusing the successful label renderer from the previous slide
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
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={4} textAnchor={textAnchor} fill="#E5E7EB" fontSize={14}>
        {name} ({props.percentage}%)
      </text>
    </g>
  );
};

export const PlatformDistributionSlide: React.FC<PlatformDistributionSlideProps> = ({ onNext, onPrev }) => {
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
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              2025 Development Summary
            </h2>
            <span className="px-4 py-1 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#8B5CF6] text-sm font-medium uppercase tracking-wider">
              System Analysis
            </span>
          </div>
          <p className="text-2xl text-gray-400 font-light">
            Platform Issue Distribution
          </p>
        </motion.div>

        <div className="flex-1 grid grid-cols-12 gap-8 min-h-0">
          {/* Left Column: Chart */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="col-span-7 bg-gradient-to-br from-[#1E1F23] via-[#1a1b1f] to-[#121316] rounded-3xl border border-white/5 p-4 flex flex-col shadow-2xl relative overflow-hidden group"
          >
             {/* Background Grid Pattern */}
             <div className="absolute inset-0 opacity-[0.03]" 
                  style={{ 
                    backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', 
                    backgroundSize: '24px 24px' 
                  }} 
             />

             {/* Background decoration */}
             {/* Removed background effects as per request */}

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
                      formatter={(value: number) => [`${value} Tasks`, 'Volume']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              {/* Center Stat */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-1">1,117</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">Total Tasks</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed List */}
          <div className="col-span-5 flex flex-col gap-3 justify-center overflow-y-auto pr-2">
            {data.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#1E1F23]/50 hover:bg-[#1E1F23] transition-all hover:scale-[1.02] group"
              >
                <div 
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${item.color}20`, color: item.color }}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-semibold text-lg text-white truncate">{item.name}</h4>
                    <span className="text-xl font-bold" style={{ color: item.color }}>{item.percentage}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: 0.8 + (index * 0.1) }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                  
                  <div className="mt-1 text-sm text-gray-500 text-right">
                    {item.value} tasks
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
