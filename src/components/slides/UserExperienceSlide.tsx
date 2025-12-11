import React from "react";
import { motion } from "motion/react";
import { Users, Calendar, Clock, Smartphone, Layout, Monitor, UserCheck, CheckCircle, Gamepad2, ArrowRight, Zap, Timer } from "lucide-react";
import iaapaLogo from 'figma:asset/f2a14099d7c2e80ca328dba12facf4ab39d5613e.png';

interface UserExperienceSlideProps {
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

export const UserExperienceSlide: React.FC<UserExperienceSlideProps> = ({ onNext, onPrev }) => {
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
            <span className="px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium uppercase tracking-wider">
              User Experience
            </span>
          </div>
          <p className="text-2xl text-gray-400 font-light max-w-4xl">
            Streamlined the booking system with account creation and player onboarding with a new intuitive interface.
          </p>
        </motion.div>

        {/* Main Grid - 3 Columns */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-12 gap-6 min-h-0"
        >
          
          {/* Column 1: IAAPA Innovation */}
          <motion.div variants={itemVariants} className="col-span-4 bg-gradient-to-br from-[#1E1F23] to-[#1a1b1f] border border-white/5 rounded-3xl p-8 relative overflow-hidden group flex flex-col">
            {/* Big Faded Icon */}
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Monitor className="w-24 h-24 text-emerald-400" />
            </div>

            <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="bg-white px-3 py-1.5 rounded-lg h-10 flex items-center shadow-lg shadow-black/20">
                    <img src={iaapaLogo} alt="IAAPA" className="h-full w-auto object-contain" />
                </div>
            </div>
            
            <h3 className="text-3xl font-extrabold text-emerald-400 mb-2 relative z-10 uppercase tracking-wide">Innovation Debut</h3>
            <p className="text-lg text-gray-400 mb-6 relative z-10">Self-Service Booking Kiosk</p>

            <div className="space-y-4 relative z-10 flex-1">
                <div className="bg-black/20 p-5 rounded-xl border border-white/5 backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                        <UserCheck className="w-5 h-5 text-emerald-400 mt-1" />
                        <div>
                            <div className="text-white font-medium">End-to-End Demo Flow</div>
                            <p className="text-sm text-gray-400 mt-1">Player selection, duration choice, and SMS verification.</p>
                        </div>
                    </div>
                </div>
                 <div className="bg-black/20 p-5 rounded-xl border border-white/5 backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-emerald-400 mt-1" />
                        <div>
                            <div className="text-white font-medium">Smart Scheduling</div>
                            <p className="text-sm text-gray-400 mt-1">New logic tailored specifically for IAAPA demo sessions.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-start gap-3 text-sm text-gray-300 bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20 relative z-10">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Automated booking confirmation screen with guest list + countdown timer.</span>
            </div>
          </motion.div>

          {/* Column 2: Onboarding Metrics */}
          <motion.div variants={itemVariants} className="col-span-4 bg-[#1E1F23] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:bg-[#25262B] transition-colors flex flex-col">
            {/* Big Faded Icon */}
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-24 h-24 text-blue-400" />
            </div>

            <div className="flex items-center gap-3 text-blue-400 mb-4 relative z-10">
                <Clock className="w-6 h-6" />
            </div>
            
            <h3 className="text-3xl font-extrabold text-blue-400 mb-2 relative z-10 uppercase tracking-wide">Onboarding Efficiency</h3>
            
            <div className="relative z-10 mb-8">
                <div className="text-sm text-gray-400 mb-2">Time to First Pitch</div>
                <div className="flex items-baseline gap-4">
                    <span className="text-4xl font-bold text-gray-600 line-through decoration-red-500/50">~6m</span>
                    <ArrowRight className="w-6 h-6 text-gray-600" />
                    <span className="text-6xl font-bold text-white text-blue-400">≤3m</span>
                </div>
                <div className="text-xs text-gray-500 mt-2">Current (Mexico) vs Target (Addison)</div>
            </div>

            <div className="space-y-4 relative z-10 mt-auto">
                <div className="flex items-start gap-3 bg-black/20 p-4 rounded-xl border border-white/5">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                        <Smartphone className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                        <div className="text-white font-medium text-sm">Web-Based Kiosk</div>
                        <p className="text-xs text-gray-400 mt-0.5">Supports phones, tablets, and remote kiosks.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-3 bg-black/20 p-4 rounded-xl border border-white/5">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                        <Users className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                        <div className="text-white font-medium text-sm">Direct Profile Connection</div>
                        <p className="text-xs text-gray-400 mt-0.5">Pre-booked profiles linked for faster group play.</p>
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Column 3: Game Selection */}
          <motion.div variants={itemVariants} className="col-span-4 bg-gradient-to-b from-[#1E1F23] to-[#25262B] border border-white/5 rounded-3xl p-8 relative overflow-hidden group flex flex-col">
            {/* Big Faded Icon */}
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Gamepad2 className="w-24 h-24 text-purple-400" />
            </div>
            
            <div className="relative z-10">
                <div className="flex items-center gap-3 text-purple-400 mb-4">
                    <Layout className="w-6 h-6" />
                </div>
                
                <h3 className="text-3xl font-extrabold text-purple-400 mb-2 uppercase tracking-wide">Interface Design</h3>
                <p className="text-lg text-gray-400 mb-6">Re-imagined Game Selection</p>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                    UI for game selection modes has been redesigned to <span className="text-white font-semibold">massively simplify</span> and streamline the registration process.
                </p>

                <div className="space-y-3">
                   <div className="bg-black/30 px-4 py-3 rounded-lg border border-white/10 text-sm text-purple-300 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        Simplified Visual UI
                   </div>
                   <div className="bg-black/30 px-4 py-3 rounded-lg border border-white/10 text-sm text-purple-300 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        Faster Player Registration
                   </div>
                   <div className="bg-black/30 px-4 py-3 rounded-lg border border-white/10 text-sm text-purple-300 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        Intuitive Mode Selection
                   </div>
                </div>
            </div>
            
            <div className="mt-auto pt-8 flex justify-center relative z-10">
                 <div className="w-full h-32 bg-purple-500/5 rounded-xl border border-purple-500/10 flex items-center justify-center">
                    <Gamepad2 className="w-12 h-12 text-purple-400/50" />
                 </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};