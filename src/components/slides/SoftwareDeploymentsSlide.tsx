import React from "react";
import { motion } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";
import { Rocket, GitMerge } from "lucide-react";

interface SoftwareDeploymentsSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

const data = [
  { month: 'Oct', 'Master Admin Portal': 6, 'Game Kiosk': 2, 'Customer Web App': 3, 'Customer Booking Portal': 6 },
  { month: 'Nov', 'Master Admin Portal': 2, 'Game Kiosk': 0, 'Customer Web App': 0, 'Customer Booking Portal': 6 },
  { month: 'Dec', 'Master Admin Portal': 1, 'Game Kiosk': 0, 'Customer Web App': 0, 'Customer Booking Portal': 1 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const SoftwareDeploymentsSlide: React.FC<SoftwareDeploymentsSlideProps> = ({ onNext, onPrev }) => {
  return (
    <div className="w-screen h-screen bg-[#121316] text-white font-sans p-12 flex flex-col overflow-y-auto relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
      `}</style>

      {/* Navigation Controls */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-1/4 h-full cursor-default" onClick={onPrev} />
        <div className="w-3/4 h-full cursor-default" onClick={onNext} />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col font-outfit max-w-[1600px] mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex-none"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              2025 Development Summary
            </h2>
            <span className="px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-medium uppercase tracking-wider">
              Software Deployments
            </span>
          </div>
          <p className="text-2xl text-gray-400 font-light max-w-4xl">
            Release cadence accelerated significantly in Q4 following infrastructure upgrades.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-12 gap-8 min-h-0"
        >
          {/* Main Chart Area */}
          <div className="col-span-9 bg-[#1E1F23] border border-white/5 rounded-3xl p-8 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            
            <div className="relative z-10 flex-1 w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 20,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                    <XAxis 
                        dataKey="month" 
                        stroke="#9CA3AF" 
                        tick={{ fill: '#9CA3AF' }} 
                        axisLine={{ stroke: '#ffffff10' }}
                        tickLine={false}
                    />
                    <YAxis 
                        stroke="#9CA3AF" 
                        tick={{ fill: '#9CA3AF' }} 
                        axisLine={{ stroke: '#ffffff10' }}
                        tickLine={false}
                    />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#1E1F23', borderColor: '#ffffff20', borderRadius: '12px', color: '#fff' }}
                        itemStyle={{ color: '#fff' }}
                        cursor={{ fill: '#ffffff05' }}
                    />
                    <Legend 
                        wrapperStyle={{ paddingTop: '20px' }}
                    />
                    <Bar dataKey="Master Admin Portal" fill="#3B82F6" radius={[4, 4, 0, 0]}>
                        <LabelList dataKey="Master Admin Portal" position="top" fill="#3B82F6" formatter={(val: number) => val > 0 ? val : ''} />
                    </Bar>
                    <Bar dataKey="Game Kiosk" fill="#F59E0B" radius={[4, 4, 0, 0]}>
                        <LabelList dataKey="Game Kiosk" position="top" fill="#F59E0B" formatter={(val: number) => val > 0 ? val : ''} />
                    </Bar>
                    <Bar dataKey="Customer Web App" fill="#EC4899" radius={[4, 4, 0, 0]}>
                        <LabelList dataKey="Customer Web App" position="top" fill="#EC4899" formatter={(val: number) => val > 0 ? val : ''} />
                    </Bar>
                    <Bar dataKey="Customer Booking Portal" fill="#EF4444" radius={[4, 4, 0, 0]}>
                        <LabelList dataKey="Customer Booking Portal" position="top" fill="#EF4444" formatter={(val: number) => val > 0 ? val : ''} />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
            </div>
          </div>

          {/* Key Metrics / Insights */}
          <div className="col-span-3 flex flex-col gap-6">
            
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-[#1E1F23] to-[#151619] border border-white/5 rounded-3xl p-6 relative overflow-hidden group">
                <div className="flex items-center gap-3 text-indigo-400 mb-2">
                    <Rocket className="w-5 h-5" />
                    <span className="font-semibold uppercase tracking-wider text-xs">Peak Activity</span>
                </div>
                <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">17</span>
                    <span className="text-gray-400 text-sm">Deployments in Oct</span>
                </div>
                <div className="mt-4 text-gray-400 text-sm leading-relaxed">
                    Major release window coordinating all four platforms simultaneously.
                </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gradient-to-br from-[#1E1F23] to-[#151619] border border-white/5 rounded-3xl p-6 relative overflow-hidden group">
                <div className="flex items-center gap-3 text-emerald-400 mb-2">
                    <GitMerge className="w-5 h-5" />
                    <span className="font-semibold uppercase tracking-wider text-xs">Total Q4 Deployments</span>
                </div>
                <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">28</span>
                    <span className="text-gray-400 text-sm">Total Updates</span>
                </div>
                 <div className="mt-4 text-gray-400 text-sm leading-relaxed">
                    Averaging ~2.3 deployments per week during the active development phase.
                </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};