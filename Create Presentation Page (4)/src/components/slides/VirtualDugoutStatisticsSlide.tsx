import React from "react";
import { motion } from "motion/react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { Target, Users, Clock, Undo2 } from "lucide-react";

interface VirtualDugoutStatisticsSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

const chartData = [
  { name: "1-2", weekday: 25, weekend: 10 },
  { name: "3-4", weekday: 30, weekend: 23 },
  { name: "5-6", weekday: 25, weekend: 20 },
  { name: "7-8", weekday: 13, weekend: 7 },
  { name: "9+", weekday: 8, weekend: 3 },
];

const StatCard = ({ icon: Icon, value, label, color, progress, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-[#1E1F23] border border-white/5 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group hover:border-white/10 transition-colors"
  >
    <div className={`absolute bottom-0 left-0 h-1 bg-${color}-500 transition-all duration-1000 ease-out`} style={{ width: `${progress}%` }} />
    <div className="flex items-start justify-between mb-4">
      <div className={`p-3 rounded-lg bg-${color}-500/10 text-${color}-400`}>
        <Icon size={24} />
      </div>
    </div>
    <div>
      <h3 className="text-3xl font-bold text-white mb-1 font-raleway">{value}</h3>
      <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">{label}</p>
    </div>
  </motion.div>
);

const RevenueCard = ({ title, value, subtitle, color, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-[#1E1F23] border border-white/5 rounded-2xl p-6 flex flex-col justify-center relative group hover:bg-[#25262b] transition-colors"
  >
    <h4 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">{title}</h4>
    <div className={`text-3xl font-bold text-${color === 'white' ? 'white' : color + '-500'} mb-2 font-raleway`}>
      {value}
    </div>
    <p className="text-xs text-gray-400 font-medium">{subtitle}</p>
  </motion.div>
);

export const VirtualDugoutStatisticsSlide: React.FC<VirtualDugoutStatisticsSlideProps> = ({ onNext, onPrev }) => {
  return (
    <div className="w-screen h-screen bg-[#121316] text-white font-sans overflow-hidden relative flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Raleway:wght@400;700;900&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
        .font-raleway { font-family: 'Raleway', sans-serif; }
      `}</style>

      {/* Navigation Areas */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-1/6 h-full cursor-default" onClick={onPrev} />
        <div className="w-5/6 h-full cursor-default" onClick={onNext} />
      </div>

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-8 py-12 h-full flex flex-col gap-6 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col mb-2">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold font-raleway tracking-tight text-white"
          >
            Virtual Dugout <span className="text-cyan-400">Performance</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-outfit mt-1"
          >
            Key metrics and engagement statistics
          </motion.p>
        </div>

        {/* Top Row: KPI Cards */}
        <div className="grid grid-cols-5 gap-4">
          <StatCard icon={Target} value="164" label="Total Sessions" color="cyan" progress={70} delay={0.2} />
          <StatCard icon={Users} value="757" label="Total Players" color="purple" progress={60} delay={0.3} />
          <StatCard icon={Users} value="995" label="Total User Count" color="pink" progress={85} delay={0.4} />
          <StatCard icon={Clock} value="78 min" label="Avg Session" color="emerald" progress={75} delay={0.5} />
          <StatCard icon={Undo2} value="10%" label="Return Rate" color="orange" progress={10} delay={0.6} />
        </div>

        {/* Middle Row: Chart */}
        <div className="flex-1 min-h-0 grid grid-cols-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-[#1E1F23] border border-white/5 rounded-2xl p-6 relative"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white font-raleway">Group Size Distribution <span className="text-gray-500 text-sm font-normal ml-2">Weekday vs Weekend</span></h3>
              <div className="flex gap-4 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-cyan-400"></span> Weekday
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-orange-400"></span> Weekend
                </div>
              </div>
            </div>
            
            <div className="h-[calc(100%-3rem)] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#9ca3af', fontSize: 12 }} 
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#9ca3af', fontSize: 12 }} 
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1E1F23', borderColor: '#333', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  />
                  <Bar dataKey="weekday" fill="#22d3ee" radius={[4, 4, 0, 0]} barSize={40} />
                  <Bar dataKey="weekend" fill="#fb923c" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: Revenue */}
        <div className="grid grid-cols-5 gap-4">
          <RevenueCard 
            title="Total Revenue" 
            value="$16,860" 
            subtitle="$13,714 + $3,146 guests" 
            color="white" 
            delay={0.8} 
          />
          <RevenueCard 
            title="Booking Revenue" 
            value="$13,714" 
            subtitle="81% of total (164 sessions)" 
            color="emerald" 
            delay={0.9} 
          />
          <RevenueCard 
            title="Guest Mode Revenue" 
            value="$3,146" 
            subtitle="18.7% of total (152 sessions)" 
            color="cyan" 
            delay={1.0} 
          />
          <RevenueCard 
            title="Peak Revenue" 
            value="$12,641" 
            subtitle="92% of booking revenue" 
            color="orange" 
            delay={1.1} 
          />
          <RevenueCard 
            title="Off-Peak Revenue" 
            value="$1,073" 
            subtitle="8% of booking revenue" 
            color="blue" 
            delay={1.2} 
          />
        </div>
      </div>
    </div>
  );
};
