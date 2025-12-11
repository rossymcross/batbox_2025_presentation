import React from "react";
import { motion } from "motion/react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { User, Users, Baby } from "lucide-react";

interface DemographicsSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

const sessionData = [
  { name: "Adult Only", value: 62.7, color: "#EF4444" },
  { name: "Family", value: 22.4, color: "#10B981" },
  { name: "Youth Groups", value: 14.8, color: "#3B82F6" },
];

const userBreakdownData = [
  { name: "Adult Players", value: 69.7, count: 6000, color: "#EF4444" },
  { name: "Minor Players", value: 21.4, count: 2000, color: "#3B82F6" },
  { name: "Adult Spectators", value: 7.9, count: 700, color: "#FCA5A5" },
  { name: "Minor Spectators", value: 0.9, count: 100, color: "#8B5CF6" },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E1F23] border border-white/10 rounded-xl p-4 shadow-xl backdrop-blur-md">
        <p className="text-gray-400 mb-2 font-medium">{payload[0].name}</p>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-white font-bold text-lg">
            {payload[0].value}%
          </span>
          {payload[0].payload.count && (
             <span className="text-gray-500">
               (~{payload[0].payload.count.toLocaleString()})
             </span>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export const DemographicsSlide: React.FC<DemographicsSlideProps> = ({ onNext, onPrev }) => {
  return (
    <div className="w-screen h-screen bg-[#121316] text-white font-sans overflow-hidden relative p-8 flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Raleway:wght@400;700;900&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
        .font-raleway { font-family: 'Raleway', sans-serif; }
      `}</style>

      {/* Navigation Controls */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-1/4 h-full cursor-default" onClick={onPrev} />
        <div className="w-3/4 h-full cursor-default" onClick={onNext} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto flex flex-col font-outfit">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
           <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4 inline-block"
          >
            <span className="px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 backdrop-blur-md text-sm font-semibold tracking-widest uppercase">
              Player Insights
            </span>
          </motion.div>

          <h1 className="text-5xl font-bold text-white tracking-tight leading-none font-raleway">
            Batbox Addison <span className="text-gray-500 mx-2">|</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Demographics</span>
          </h1>
        </motion.div>

        {/* Top Stats Row */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#1E1F23] border border-white/5 rounded-2xl p-6 relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             <div className="flex justify-between items-start mb-4">
                <div className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Adult-Only Sessions</div>
                <Users className="w-5 h-5 text-red-500" />
             </div>
             <div className="text-5xl font-bold text-white mb-2">1,145</div>
             <div className="text-gray-500 text-sm">63% of sessions</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#1E1F23] border border-white/5 rounded-2xl p-6 relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             <div className="flex justify-between items-start mb-4">
                <div className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Family Sessions</div>
                <Baby className="w-5 h-5 text-emerald-500" />
             </div>
             <div className="text-5xl font-bold text-white mb-2">409</div>
             <div className="text-gray-500 text-sm">22% of sessions</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-[#1E1F23] border border-white/5 rounded-2xl p-6 relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             <div className="flex justify-between items-start mb-4">
                <div className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Youth Groups</div>
                <Users className="w-5 h-5 text-blue-500" />
             </div>
             <div className="text-5xl font-bold text-white mb-2">271</div>
             <div className="text-gray-500 text-sm">15% of sessions</div>
          </motion.div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-2 gap-6 flex-1 min-h-0">
          {/* Donut Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-[#1E1F23] border border-white/5 rounded-2xl p-6 flex flex-col"
          >
            <h3 className="text-lg font-bold text-white mb-1">Session Types</h3>
            <p className="text-sm text-gray-400 mb-6">By composition</p>
            
            <div className="flex-1 w-full min-h-0 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sessionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={110}
                    outerRadius={160}
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                  >
                    {sessionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex justify-center gap-6 mt-4">
              {sessionData.map((entry) => (
                <div key={entry.name} className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                  <span className="text-gray-300">{entry.name} ({entry.value}%)</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-[#1E1F23] border border-white/5 rounded-2xl p-6 flex flex-col"
          >
            <h3 className="text-lg font-bold text-white mb-1">User Breakdown</h3>
            <p className="text-sm text-gray-400 mb-6">Players & Spectators with %</p>
            
            <div className="flex-1 w-full min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={userBreakdownData}
                  margin={{ top: 0, right: 30, left: 100, bottom: 0 }}
                  barSize={80}
                >
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    tick={{ fill: '#9CA3AF', fontSize: 13 }} 
                    width={110}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {userBreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
