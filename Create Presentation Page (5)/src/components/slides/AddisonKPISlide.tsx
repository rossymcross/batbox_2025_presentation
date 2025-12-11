import React from "react";
import { motion } from "motion/react";
import { Target, Users, UserPlus, Repeat, Percent } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface AddisonKPISlideProps {
  onNext: () => void;
  onPrev: () => void;
}

const stats = [
  { label: "Total Sessions", value: "1,825", icon: Target, delay: 0.1 },
  { label: "Total Players", value: "7,928", icon: Users, delay: 0.2 },
  { label: "Total Users", value: "11,772", icon: UserPlus, delay: 0.3 },
  { label: "Returning Players", value: "10%", icon: Repeat, delay: 0.4 },
  { label: "Box Utilization", value: "47.4%", icon: Percent, delay: 0.5 },
];

const chartData = [
  { date: "10-15", returning: 12, firstTime: 45 },
  { date: "10-16", returning: 15, firstTime: 78 },
  { date: "10-17", returning: 18, firstTime: 120 },
  { date: "10-18", returning: 22, firstTime: 180 },
  { date: "10-19", returning: 25, firstTime: 230 },
  { date: "10-20", returning: 28, firstTime: 250 },
  { date: "10-21", returning: 32, firstTime: 280 },
  { date: "10-22", returning: 35, firstTime: 310 },
  { date: "10-23", returning: 38, firstTime: 340 },
  { date: "10-24", returning: 42, firstTime: 380 },
  { date: "10-25", returning: 45, firstTime: 420 },
  { date: "10-26", returning: 50, firstTime: 460 },
  { date: "10-27", returning: 55, firstTime: 500 },
  { date: "10-28", returning: 58, firstTime: 520 },
  { date: "10-29", returning: 62, firstTime: 550 },
  { date: "10-30", returning: 65, firstTime: 580 },
  { date: "10-31", returning: 68, firstTime: 620 },
  { date: "11-01", returning: 72, firstTime: 650 },
  { date: "11-02", returning: 75, firstTime: 680 },
  { date: "11-03", returning: 78, firstTime: 710 },
  { date: "11-04", returning: 82, firstTime: 740 },
  { date: "11-05", returning: 85, firstTime: 780 },
  { date: "11-06", returning: 88, firstTime: 820 },
  { date: "11-07", returning: 92, firstTime: 860 },
  { date: "11-08", returning: 95, firstTime: 900 },
  { date: "11-09", returning: 98, firstTime: 920 },
  { date: "11-10", returning: 102, firstTime: 940 },
  { date: "11-11", returning: 105, firstTime: 960 },
  { date: "11-12", returning: 108, firstTime: 980 },
  { date: "11-13", returning: 112, firstTime: 1020 },
  { date: "11-14", returning: 115, firstTime: 1050 },
  { date: "11-15", returning: 118, firstTime: 1080 },
  { date: "11-16", returning: 122, firstTime: 1100 },
  { date: "11-17", returning: 125, firstTime: 1120 },
  { date: "11-18", returning: 128, firstTime: 1150 },
  { date: "11-19", returning: 132, firstTime: 1180 },
  { date: "11-20", returning: 135, firstTime: 1210 },
  { date: "11-21", returning: 138, firstTime: 1250 },
  { date: "11-22", returning: 142, firstTime: 1280 },
  { date: "11-23", returning: 145, firstTime: 1320 },
  { date: "11-24", returning: 148, firstTime: 1350 },
  { date: "11-25", returning: 152, firstTime: 1380 },
  { date: "11-26", returning: 155, firstTime: 1420 },
  { date: "11-27", returning: 158, firstTime: 1450 },
  { date: "11-28", returning: 162, firstTime: 1480 },
  { date: "11-29", returning: 165, firstTime: 1520 },
  { date: "11-30", returning: 168, firstTime: 1550 },
  { date: "12-01", returning: 172, firstTime: 1580 },
  { date: "12-02", returning: 175, firstTime: 1620 },
  { date: "12-03", returning: 178, firstTime: 1650 },
  { date: "12-04", returning: 182, firstTime: 1680 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E1F23] border border-white/10 rounded-xl p-4 shadow-xl backdrop-blur-md">
        <p className="text-gray-400 mb-2 font-medium">{label}</p>
        <div className="space-y-1">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-gray-300 min-w-[100px]">{entry.name}:</span>
              <span className="text-white font-bold">{entry.value}</span>
            </div>
          ))}
          <div className="pt-2 mt-2 border-t border-white/10 flex items-center gap-2 text-sm">
             <span className="text-gray-400 min-w-[100px] pl-4">Total:</span>
             <span className="text-white font-bold">
               {payload.reduce((acc: number, entry: any) => acc + entry.value, 0)}
             </span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export const AddisonKPISlide: React.FC<AddisonKPISlideProps> = ({ onNext, onPrev }) => {
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
              Performance Metrics
            </span>
          </motion.div>

          <h1 className="text-5xl font-bold text-white tracking-tight leading-none font-raleway">
            Batbox Addison <span className="text-gray-500 mx-2">|</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">KPIs</span>
          </h1>
        </motion.div>

        {/* Stats Grid - Compact */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + stat.delay, duration: 0.5 }}
              className="bg-[#1E1F23]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-[#1E1F23] hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 rounded-lg bg-[#121316] border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
              <div className="text-3xl font-bold text-white tracking-tight group-hover:scale-105 transition-transform origin-left">
                {stat.value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chart Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex-1 bg-[#1E1F23] rounded-3xl border border-white/5 p-6 relative overflow-hidden flex flex-col min-h-0"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1 font-raleway">Repeat Customers Over Time</h3>
              <p className="text-sm text-gray-400">Cumulative new vs returning players</p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#06b6d4]" />
                <span className="text-gray-300">First Time</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#8b5cf6]" />
                <span className="text-gray-300">Returning</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                barGap={0}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  stroke="#6B7280" 
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                  interval={4}
                />
                <YAxis 
                  stroke="#6B7280" 
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  tickLine={false}
                  axisLine={false}
                  dx={-10}
                  label={{ 
                    value: 'Sessions', 
                    angle: -90, 
                    position: 'insideLeft', 
                    style: { fill: '#6B7280', fontSize: 12, fontWeight: 500 },
                    offset: 0
                  }}
                />
                <Bar 
                  dataKey="firstTime" 
                  name="First Time" 
                  stackId="a" 
                  fill="#06b6d4" 
                  radius={[0, 0, 0, 0]}
                />
                <Bar 
                  dataKey="returning" 
                  name="Returning" 
                  stackId="a" 
                  fill="#8b5cf6" 
                  radius={[4, 4, 0, 0]} 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
