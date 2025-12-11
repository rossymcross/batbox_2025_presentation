import React from "react";
import { motion } from "motion/react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer
} from "recharts";

interface FinancialAnalysisSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

// Data Generation
const generateData = () => {
  const targetTotal = 316741;
  const startDate = new Date('2025-10-15');
  const totalDays = 52;
  
  let rawDaily = [];
  let currentSum = 0;

  for (let i = 0; i < totalDays; i++) {
    // Random daily roughly 6000
    // varied by sine wave
    const base = 6000;
    const variation = Math.sin(i * 0.2) * 2000 + (Math.random() * 2000 - 1000);
    const value = Math.max(2000, base + variation);
    rawDaily.push(value);
    currentSum += value;
  }

  const ratio = targetTotal / currentSum;
  
  const data = [];
  let cumulative = 0;

  for (let i = 0; i < totalDays; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    
    // Scale daily
    const daily = Math.floor(rawDaily[i] * ratio);
    
    // For the last item, ensure we hit exact total (handle rounding errors)
    if (i === totalDays - 1) {
       cumulative = targetTotal;
    } else {
       cumulative += daily;
    }

    data.push({
      date: date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' }).replace('/', '-'),
      value: cumulative,
      originalDate: date
    });
  }
  
  return data;
};

const data = generateData();

const kpiData = [
  {
    title: "TOTAL REVENUE",
    value: "$316,741",
    subtitle: "$296,832 + $19,909 guests",
    color: "text-white",
    subColor: "text-gray-500"
  },
  {
    title: "BOOKING REVENUE",
    value: "$296,832",
    subtitle: "94% of total (1825 sessions)",
    color: "text-[#10B981]", // Green
    subColor: "text-gray-500"
  },
  {
    title: "GUEST MODE REVENUE",
    value: "$19,909",
    subtitle: "6.3% of total (2707 sessions)",
    color: "text-[#06B6D4]", // Cyan
    subColor: "text-gray-500"
  },
  {
    title: "PEAK REVENUE",
    value: "$263,825",
    subtitle: "89% of booking revenue",
    color: "text-[#F97316]", // Orange
    subColor: "text-gray-500"
  },
  {
    title: "OFF-PEAK REVENUE",
    value: "$33,007",
    subtitle: "11% of booking revenue",
    color: "text-[#3B82F6]", // Blue
    subColor: "text-gray-500"
  }
];

export const FinancialAnalysisSlide: React.FC<FinancialAnalysisSlideProps> = ({ onNext, onPrev }) => {
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
              Financial Overview
            </span>
          </motion.div>

          <h1 className="text-5xl font-bold text-white tracking-tight leading-none font-raleway">
            Batbox Addison <span className="text-gray-500 mx-2">|</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Financial Analysis</span>
          </h1>
        </motion.div>

        {/* KPI Row */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {kpiData.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-[#1E1F23] border border-white/5 rounded-2xl p-5 relative overflow-hidden group hover:bg-[#25262B] transition-colors"
            >
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">{kpi.title}</div>
              <div className={`text-3xl font-bold mb-1 ${kpi.color}`}>{kpi.value}</div>
              <div className={`text-[10px] ${kpi.subColor} truncate`}>{kpi.subtitle}</div>
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
          <div className="w-1 h-6 bg-[#10B981] rounded-full"></div>
          <h2 className="text-xl font-bold text-white tracking-wide uppercase">Revenue Growth</h2>
          <span className="text-gray-500 text-sm">Cumulative revenue over period</span>
        </motion.div>

        {/* Main Chart Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-[#1E1F23] border border-white/5 rounded-3xl p-6 flex-1 min-h-0 flex flex-col relative"
        >
          <div className="flex-1 w-full min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="0" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  stroke="#6B7280" 
                  tick={{ fill: '#9CA3AF', fontSize: 10 }}
                  tickLine={false}
                  axisLine={false}
                  interval={2} // Show every 3rd label roughly (0, 3, 6...) since data is daily
                />
                <YAxis 
                  stroke="#6B7280" 
                  tick={{ fill: '#9CA3AF', fontSize: 10 }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                  tickLine={false}
                  axisLine={false}
                  domain={[0, 350000]}
                  ticks={[0, 50000, 100000, 150000, 200000, 250000, 300000, 350000]}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
