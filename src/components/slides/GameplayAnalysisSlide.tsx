import React from "react";
import { motion } from "motion/react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";
import { Gamepad2, Users, Trophy, Activity } from "lucide-react";

interface GameplayAnalysisSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

// Data
const genderData = [
  { name: "Male", value: 80, color: "#3B82F6" },
  { name: "Female", value: 20, color: "#EC4899" },
];

const gameModeData = [
  { name: "Boost (Arcade)", value: 65, color: "#F97316" },
  { name: "Standard (Realistic)", value: 35, color: "#10B981" },
];

const gameTypeData = [
  { name: "Batting", value: 45, color: "#3B82F6" },
  { name: "Home Run", value: 15, color: "#EF4444" },
  { name: "Pitching", value: 15, color: "#10B981" },
  { name: "Inning", value: 25, color: "#06B6D4" },
];

const gameTypeByGenderData = [
  { name: "Batting", Male: 16000, Female: 4200 },
  { name: "Home Run", Male: 4500, Female: 1100 },
  { name: "Pitching", Male: 4800, Female: 1200 },
  { name: "Inning", Male: 9200, Female: 2100 },
];

const CustomTooltip = ({ active, payload, label, unit }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E1F23] border border-white/10 rounded-xl p-3 shadow-xl backdrop-blur-md">
        <p className="text-gray-400 mb-1 font-medium text-xs uppercase">{label || payload[0].name}</p>
        {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color || entry.fill }} />
            <span className="text-white font-bold">
                {entry.value.toLocaleString()}{unit}
            </span>
            </div>
        ))}
      </div>
    );
  }
  return null;
};

export const GameplayAnalysisSlide: React.FC<GameplayAnalysisSlideProps> = ({ onNext, onPrev }) => {
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
            Batbox Addison <span className="text-gray-500 mx-2">|</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Gameplay Analysis</span>
          </h1>
        </motion.div>

        {/* Top Stats Row */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#1E1F23] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:bg-[#25262B] transition-colors"
          >
             <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Total Games Tracked</div>
             <div className="text-5xl font-bold text-white mb-1">42,735</div>
             <div className="text-gray-500 text-xs">simulator sessions</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#1E1F23] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:bg-[#25262B] transition-colors"
          >
             <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Male Players</div>
             <div className="text-5xl font-bold text-[#3B82F6] mb-1">34,336</div>
             <div className="text-gray-500 text-xs">80% of all games</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-[#1E1F23] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:bg-[#25262B] transition-colors"
          >
             <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Female Players</div>
             <div className="text-5xl font-bold text-[#EC4899] mb-1">8,399</div>
             <div className="text-gray-500 text-xs">20% of all games</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-[#1E1F23] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:bg-[#25262B] transition-colors"
          >
             <div className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-2">Gender Ratio</div>
             <div className="text-5xl font-bold text-white mb-1">4.1:1</div>
             <div className="text-gray-500 text-xs">male to female ratio</div>
          </motion.div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-4 gap-6 flex-1 min-h-0">
          
          {/* Gender Distribution */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-[#1E1F23] border border-white/5 rounded-2xl p-5 flex flex-col"
          >
            <div className="mb-4">
                <h3 className="text-sm font-bold text-white">Gender Distribution</h3>
                <p className="text-xs text-gray-400">All games</p>
            </div>
            
            <div className="flex-1 w-full min-h-0 flex items-center justify-center relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    innerRadius="65%"
                    outerRadius="90%"
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                    cornerRadius={4}
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip unit="%" />} cursor={{ fill: 'transparent' }} />
                </PieChart>
              </ResponsiveContainer>
              {/* Legend */}
              <div className="absolute bottom-0 w-full flex justify-center gap-4 text-xs">
                 {genderData.map((item) => (
                    <div key={item.name} className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}/>
                        <span>{item.name} <span className="text-gray-400 font-normal">({item.value}%)</span></span>
                    </div>
                 ))}
              </div>
            </div>
          </motion.div>

          {/* Game Mode */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-[#1E1F23] border border-white/5 rounded-2xl p-5 flex flex-col"
          >
            <div className="mb-4">
                <h3 className="text-sm font-bold text-white">Game Mode</h3>
                <p className="text-xs text-gray-400">Boost vs Standard</p>
            </div>
            
            <div className="flex-1 w-full min-h-0 flex items-center justify-center relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={gameModeData}
                    cx="50%"
                    cy="50%"
                    innerRadius="65%"
                    outerRadius="90%"
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                    cornerRadius={4}
                  >
                    {gameModeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip unit="%" />} cursor={{ fill: 'transparent' }} />
                </PieChart>
              </ResponsiveContainer>
               <div className="absolute bottom-0 w-full flex justify-center gap-4 text-xs flex-wrap">
                 {gameModeData.map((item) => (
                    <div key={item.name} className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}/>
                        <span>{item.name} <span className="text-gray-400 font-normal">({item.value}%)</span></span>
                    </div>
                 ))}
              </div>
            </div>
          </motion.div>

           {/* Game Type */}
           <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
            className="bg-[#1E1F23] border border-white/5 rounded-2xl p-5 flex flex-col"
          >
            <div className="mb-4">
                <h3 className="text-sm font-bold text-white">Game Type</h3>
                <p className="text-xs text-gray-400">What was played</p>
            </div>
            
            <div className="flex-1 w-full min-h-0 flex items-center justify-center relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={gameTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius="65%"
                    outerRadius="90%"
                    paddingAngle={2}
                    dataKey="value"
                    stroke="none"
                    cornerRadius={4}
                  >
                    {gameTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip unit="%" />} cursor={{ fill: 'transparent' }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute bottom-0 w-full flex justify-center gap-2 text-[10px] flex-wrap">
                 {gameTypeData.map((item) => (
                    <div key={item.name} className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}/>
                        <span>{item.name} <span className="text-gray-400 font-normal">({item.value}%)</span></span>
                    </div>
                 ))}
              </div>
            </div>
          </motion.div>

          {/* Game Type by Gender */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 }}
            className="bg-[#1E1F23] border border-white/5 rounded-2xl p-5 flex flex-col"
          >
            <div className="mb-4 flex justify-between items-start">
                <div>
                    <h3 className="text-sm font-bold text-white">Game Type by Gender</h3>
                    <p className="text-xs text-gray-400">Player preferences</p>
                </div>
                 <div className="flex gap-3 text-[10px]">
                     <div className="flex items-center gap-1"><div className="w-2 h-2 rounded bg-[#3B82F6]"/> Male</div>
                     <div className="flex items-center gap-1"><div className="w-2 h-2 rounded bg-[#EC4899]"/> Female</div>
                 </div>
            </div>
            
            <div className="flex-1 w-full min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={gameTypeByGenderData}
                  margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                  barGap={2}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    stroke="#6B7280" 
                    tick={{ fill: '#9CA3AF', fontSize: 10 }}
                    tickLine={false}
                    axisLine={false}
                    dy={5}
                  />
                  <YAxis 
                    stroke="#6B7280" 
                    tick={{ fill: '#9CA3AF', fontSize: 10 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                  <Bar dataKey="Male" fill="#3B82F6" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="Female" fill="#EC4899" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
