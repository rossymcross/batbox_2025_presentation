import React from "react";
import { motion } from "motion/react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Cell
} from "recharts";

interface EventsAnalysisSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

const kpiData = [
  {
    title: "TOTAL EVENTS",
    value: "123",
    subtitle: "across 35 unique dates",
    color: "text-[#A855F7]", // Purple
    subColor: "text-gray-500"
  },
  {
    title: "TOTAL ATTENDEES",
    value: "869",
    subtitle: "7.1 avg per booking",
    color: "text-[#F97316]", // Orange
    subColor: "text-gray-500"
  },
  {
    title: "EVENT REVENUE",
    value: "$43,292",
    subtitle: "15% of total revenue",
    color: "text-[#10B981]", // Green
    subColor: "text-gray-500"
  },
  {
    title: "AVG DURATION",
    value: "127",
    subtitle: "minutes per booking",
    color: "text-[#3B82F6]", // Blue
    subColor: "text-gray-500"
  }
];

const chartData = [
  { name: "Events", value: 350, color: "#A855F7" },
  { name: "Regular", value: 150, color: "#06B6D4" }
];

export const EventsAnalysisSlide: React.FC<EventsAnalysisSlideProps> = ({ onNext, onPrev }) => {
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
        
        {/* Header */}
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
              Events
            </span>
          </motion.div>

          <h1 className="text-5xl font-bold text-white tracking-tight leading-none font-raleway">
            Batbox Addison <span className="text-gray-500 mx-2">|</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Events Analysis</span>
          </h1>
        </motion.div>

        {/* KPI Row */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {kpiData.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-[#1E1F23] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:bg-[#25262B] transition-colors"
            >
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3">{kpi.title}</div>
              <div className={`text-4xl font-bold mb-2 ${kpi.color}`}>{kpi.value}</div>
              <div className={`text-xs ${kpi.subColor}`}>{kpi.subtitle}</div>
            </motion.div>
          ))}
        </div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-4 mb-4 pl-1"
        >
          <div className="w-1 h-6 bg-[#A855F7] rounded-full"></div>
          <h2 className="text-xl font-bold text-white tracking-wide uppercase">Avg Revenue per Box</h2>
          <span className="text-gray-500 text-sm">Events vs regular bookings</span>
        </motion.div>

        {/* Main Chart Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-[#1E1F23] border border-white/5 rounded-3xl p-8 flex-1 min-h-0 flex flex-col relative"
        >
          <div className="flex-1 w-full min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }} barSize={150}>
                <CartesianGrid strokeDasharray="0" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#6B7280" 
                  tick={{ fill: '#9CA3AF', fontSize: 14 }}
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                />
                <YAxis 
                  stroke="#6B7280" 
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  tickFormatter={(value) => `$${value}`}
                  tickLine={false}
                  axisLine={false}
                  domain={[0, 400]}
                  ticks={[0, 50, 100, 150, 200, 250, 300, 350, 400]}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
