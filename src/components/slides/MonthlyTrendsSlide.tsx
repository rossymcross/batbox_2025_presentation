import React from "react";
import { motion } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface MonthlyTrendsSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

const data = [
  {
    month: "Jul",
    "Batbox Webadmin": 78,
    "Kiosk": 51,
    "Booking Portal": 37,
    "Game Development": 0,
    "Waivers": 2,
    "Customer Web App": 3
  },
  {
    month: "Aug",
    "Batbox Webadmin": 75,
    "Kiosk": 42,
    "Booking Portal": 28,
    "Game Development": 5,
    "Waivers": 1,
    "Customer Web App": 6
  },
  {
    month: "Sep",
    "Batbox Webadmin": 20,
    "Kiosk": 43,
    "Booking Portal": 24,
    "Game Development": 12,
    "Waivers": 0,
    "Customer Web App": 2
  },
  {
    month: "Oct",
    "Batbox Webadmin": 112,
    "Kiosk": 31,
    "Booking Portal": 25,
    "Game Development": 14,
    "Waivers": 1,
    "Customer Web App": 3
  },
  {
    month: "Nov",
    "Batbox Webadmin": 33,
    "Kiosk": 15,
    "Booking Portal": 33,
    "Game Development": 10,
    "Waivers": 2,
    "Customer Web App": 2
  },
  {
    month: "Dec",
    "Batbox Webadmin": 22,
    "Kiosk": 10,
    "Booking Portal": 3,
    "Game Development": 48,
    "Waivers": 3,
    "Customer Web App": 0
  },
];

const colors = {
  "Batbox Webadmin": "#3B82F6", // Blue
  "Kiosk": "#F97316", // Orange
  "Booking Portal": "#EF4444", // Red
  "Game Development": "#8B5CF6", // Purple
  "Customer Web App": "#EC4899", // Pink
  "Waivers": "#EAB308", // Yellow
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E1F23] border border-white/10 rounded-xl p-4 shadow-xl">
        <p className="text-gray-400 mb-2 font-medium">{label} 2025</p>
        <div className="space-y-1">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-gray-300 min-w-[140px]">{entry.name}:</span>
              <span className="text-white font-bold">{entry.value} tasks</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export const MonthlyTrendsSlide: React.FC<MonthlyTrendsSlideProps> = ({ onNext, onPrev }) => {
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
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              2025 Development Summary
            </h2>
            <span className="px-4 py-1 rounded-full bg-[#EC4899]/10 border border-[#EC4899]/30 text-[#EC4899] text-sm font-medium uppercase tracking-wider">
              H2 2025 Trends
            </span>
          </div>
          <p className="text-2xl text-gray-400 font-light">
            Monthly Task Velocity
          </p>
        </motion.div>

        {/* Chart Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-1 bg-[#1E1F23] rounded-3xl border border-white/5 p-8 shadow-2xl relative overflow-hidden flex flex-col min-h-0"
        >
           {/* Background decoration */}
           {/* <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" /> */}
           {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" /> */}

          <div className="flex-1 w-full min-h-0">
            <ResponsiveContainer width="100%" height="100%" minWidth={100} minHeight={100}>
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
                barSize={20}
                barGap={4}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis 
                  dataKey="month" 
                  stroke="#9CA3AF" 
                  tick={{ fill: '#9CA3AF', fontSize: 14 }}
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                />
                <YAxis 
                  stroke="#9CA3AF" 
                  tick={{ fill: '#9CA3AF', fontSize: 14 }}
                  tickLine={false}
                  axisLine={false}
                  dx={-10}
                  label={{ value: "Tasks", angle: -90, position: "insideLeft", fill: "#9CA3AF", fontSize: 14, dy: 50 }}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                <Legend 
                  wrapperStyle={{ paddingTop: '20px' }}
                  iconType="circle"
                />
                
                {Object.entries(colors).map(([key, color]) => (
                  <Bar 
                    key={key} 
                    dataKey={key} 
                    fill={color} 
                    radius={[4, 4, 0, 0]} 
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
