import React from "react";
import { motion } from "motion/react";
import { Globe, Cloud, Clock, Smartphone, Users, Database, Code, Settings, WifiOff, Zap, MapPin, TrendingUp, Layout, BarChart } from "lucide-react";

interface SystemArchitectureContinuedSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

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

export const SystemArchitectureContinuedSlide: React.FC<SystemArchitectureContinuedSlideProps> = ({ onNext, onPrev }) => {
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
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              2025 Development Summary
            </h2>
            <span className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium uppercase tracking-wider">
              System Architecture
            </span>
          </div>
          <p className="text-2xl text-gray-400 font-light max-w-4xl">
            International deployment milestones and platform modernization.
          </p>
        </motion.div>

        {/* Main Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-12 grid-rows-2 gap-6 min-h-0"
        >
          {/* Row 1 */}
          
          {/* Mexico Launch */}
          <motion.div variants={itemVariants} className="col-span-8 bg-gradient-to-br from-[#1E1F23] to-[#162032] border border-blue-500/10 rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 text-blue-400 mb-6">
                <Globe className="w-6 h-6" />
                <span className="font-semibold uppercase tracking-wider text-sm">Global Milestone</span>
              </div>
              
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-4">Mexico Launch – First Fully Independent Deployment</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  First live deployment on Batbox-owned infrastructure in <span className="text-white font-medium">Monterrey</span>. 
                  Cloud-based architecture connecting Master Portal, Websites, and Kiosks through AWS and Baseball Connect.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-auto">
                    <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                        <div className="text-sm text-gray-400 mb-1">Windows 10 Upgrade</div>
                        <div className="flex items-end gap-2">
                            <span className="text-2xl font-bold text-white">2 Months</span>
                            <span className="text-sm text-gray-500 mb-1 line-through">vs 5-6 mo</span>
                        </div>
                    </div>
                    <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                        <div className="text-sm text-gray-400 mb-1">Unity 6.0 Upgrade</div>
                        <div className="flex items-end gap-2">
                            <span className="text-2xl font-bold text-white">2 Months</span>
                            <span className="text-sm text-gray-500 mb-1 line-through">vs 1-2 yrs</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data & Analytics */}
          <motion.div variants={itemVariants} className="col-span-4 bg-[#1E1F23] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:bg-[#25262B] transition-colors">
            <div className="flex items-center gap-3 text-purple-400 mb-6">
                <BarChart className="w-6 h-6" />
                <span className="font-semibold uppercase tracking-wider text-sm">Intelligence</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Data & Analytics</h3>
            <div className="space-y-4">
                <p className="text-gray-400 leading-relaxed">
                    Built data capture systems with <span className="text-white font-bold">200+ gameplay metrics</span>.
                </p>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        Automated alerts
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        Real-time engagement dashboards
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        Repeat visit tracking
                    </li>
                </ul>
            </div>
          </motion.div>

          {/* Row 2 */}

          {/* Game Kiosk & Source Code - Expanded to full width */}
          <motion.div variants={itemVariants} className="col-span-12 bg-[#1E1F23] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:bg-[#25262B] transition-colors">
             <div className="flex items-center gap-3 text-orange-400 mb-6">
                <Code className="w-6 h-6" />
                <span className="font-semibold uppercase tracking-wider text-sm">Core Technology</span>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Game Kiosk & Source Code</h3>
                <div className="text-gray-400 mb-4">
                  Foundations built for faster time-to-market from Strikezon source code investment.
                </div>
              </div>
              
              <div className="flex-[2] grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                      <div className="flex gap-3">
                          <Settings className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-300">
                              <span className="block text-white font-medium mb-0.5">Profile Persistence</span>
                              Gender-based performance differences removed.
                          </p>
                      </div>
                      <div className="flex gap-3">
                          <Zap className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-300">
                              <span className="block text-white font-medium mb-0.5">Full Control</span>
                              Documented settings for localized personalization.
                          </p>
                      </div>
                  </div>
                  <div className="space-y-4">
                      <div className="flex gap-3">
                          <WifiOff className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-300">
                              <span className="block text-white font-medium mb-0.5">Offline Capable</span>
                              Kiosk auto-launch and offline play enabled.
                          </p>
                      </div>
                      <div className="flex gap-3">
                          <TrendingUp className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-300">
                              <span className="block text-white font-medium mb-0.5">Technical Insights</span>
                              Spray charts and heatmaps from trajectory data.
                          </p>
                      </div>
                  </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};