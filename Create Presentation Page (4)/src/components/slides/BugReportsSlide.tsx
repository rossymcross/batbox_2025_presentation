import React from "react";
import { motion } from "motion/react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Bug, CheckCircle2, Activity } from "lucide-react";

interface BugReportsSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

// Mock data distributed to match the totals: 249 Created, 181 Resolved
const data = [
  { month: "Jul", created: 43, resolved: 0 },
  { month: "Aug", created: 46, resolved: 10 },
  { month: "Sep", created: 32, resolved: 4 },
  { month: "Oct", created: 65, resolved: 112 },
  { month: "Nov", created: 45, resolved: 29 },
  { month: "Dec", created: 18, resolved: 26 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E1F23] border border-white/10 rounded-xl p-4 shadow-xl">
        <p className="text-gray-400 mb-2 font-medium">{label} 2025</p>
        <div className="space-y-2">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center justify-between gap-4 text-sm">
              <span style={{ color: entry.color }} className="font-medium">{entry.name}:</span>
              <span className="text-white font-bold text-lg">{entry.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export const BugReportsSlide: React.FC<BugReportsSlideProps> = ({ onNext, onPrev }) => {
  return (
    <div className="w-screen h-screen bg-[#121316] text-white font-sans p-12 flex flex-col overflow-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
      `}</style>

      {/* Navigation Controls */}
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
          className="mb-8 flex justify-between items-end"
        >
          <div>
            <div className="flex items-center gap-4 mb-2">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                2025 Development Summary
              </h2>
              <span className="px-4 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium uppercase tracking-wider">
                Quality Assurance
              </span>
            </div>
            <p className="text-2xl text-gray-400 font-light">
              Bug Reports
            </p>
          </div>
          
          {/* Resolution Rate Badge */}
          {/* Removed as per request */}
        </motion.div>

        {/* Top Cards - Key Stats */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#1E1F23] border border-white/5 rounded-2xl p-6 flex items-center justify-between group hover:bg-[#25262B] transition-colors"
          >
            <div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-semibold mb-1">Total Recorded</div>
              <div className="text-6xl font-bold text-white group-hover:text-red-400 transition-colors">249</div>
            </div>
            <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
              <Bug className="w-8 h-8" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#1E1F23] border border-white/5 rounded-2xl p-6 flex items-center justify-between group hover:bg-[#25262B] transition-colors"
          >
            <div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-semibold mb-1">Total Resolved</div>
              <div className="text-6xl font-bold text-white group-hover:text-[#06B6D4] transition-colors">181</div>
            </div>
            <div className="w-16 h-16 rounded-full bg-[#06B6D4]/10 flex items-center justify-center text-[#06B6D4]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
          </motion.div>
        </div>

        {/* Chart Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex-1 bg-[#1E1F23] rounded-3xl border border-white/5 p-8 shadow-2xl relative overflow-hidden flex flex-col min-h-0"
        >
           {/* Background decoration */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/[0.02] rounded-full blur-3xl translate-y-[-20%] translate-x-[20%]" />
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/[0.02] rounded-full blur-3xl translate-y-[20%] translate-x-[-20%]" />

           <div className="flex items-center gap-2 mb-6 opacity-70">
             <Activity className="w-5 h-5 text-gray-400" />
             <h3 className="text-lg font-medium text-gray-300">Created vs Resolved Trends (Last 6 Months)</h3>
           </div>

          <div className="flex-1 w-full min-h-0">
            <ResponsiveContainer width="100%" height="100%" minWidth={100} minHeight={100}>
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorCreated" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06B6D4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis 
                  dataKey="month" 
                  stroke="#6B7280" 
                  tick={{ fill: '#9CA3AF', fontSize: 14 }}
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                />
                <YAxis 
                  stroke="#6B7280" 
                  tick={{ fill: '#9CA3AF', fontSize: 14 }}
                  tickLine={false}
                  axisLine={false}
                  dx={-10}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 2 }} />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }}/>
                <Area 
                  type="monotone" 
                  dataKey="created" 
                  name="Bugs Discovered" 
                  stroke="#EF4444" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorCreated)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="resolved" 
                  name="Bugs Resolved" 
                  stroke="#06B6D4" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorResolved)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
