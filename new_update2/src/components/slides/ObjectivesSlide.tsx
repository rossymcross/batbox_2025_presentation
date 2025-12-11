import React from "react";
import { motion } from "motion/react";
import { Target, Clock, Rocket, Users, Database, ArrowRight, Monitor, Hammer, RefreshCw, Layers, Gamepad2, PlayCircle, FolderKanban, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

interface ObjectivesSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const ObjectivesSlide: React.FC<ObjectivesSlideProps> = ({ onNext, onPrev }) => {
  const objectives = [
    {
      icon: Clock,
      text: "Reduce kiosk check-in to first pitch time by 50%",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      status: "completed"
    },
    {
      icon: Rocket,
      text: "Launch redesigned Batbox-branded game selection & onboarding by August 31, 2025",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      status: "completed"
    },
    {
      icon: Users,
      text: "Shift product focus from individual to group-based experiences",
      subtext: "New UI/UX for group configuration and clearer game mode selection",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      status: "completed"
    },
    {
      icon: Database,
      text: "Capture detailed usage data from 90%+ of first-time users",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      status: "completed"
    }
  ];

  const technicalGoals = [
    { text: "Windows 10 upgrade", status: "completed", icon: Monitor },
    { text: "Unity Upgrade", status: "completed", icon: Layers },
    { text: "Build and deployment system (CI/CD pipeline)", status: "completed", icon: Hammer },
    { text: "Replace StrikeZon backend with Batbox Auth Server (MVP)", status: "completed", icon: RefreshCw },
    { text: "Booking/Waiver System", status: "completed", icon: FolderKanban },
    { text: "StrikeZon game rebrand", status: "completed", icon: Gamepad2 },
    { text: "StrikeZon upgraded menu system", status: "completed", icon: Users },
    { text: "StrikeZon team selection system (always choose)", status: "completed", icon: Users },
    { text: "User Engagement System (Kiosk and Web)", status: "todo", icon: Users },
    { text: "Swing Replay System (R+D)", status: "todo", icon: PlayCircle },
    { text: "Master Portal", status: "completed", icon: Layers },
    { text: "Data Portal", status: "partial", icon: Database },
  ];

  return (
    <div className="w-screen h-screen bg-[#121316] text-white font-sans overflow-hidden relative flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Raleway:wght@400;700;900&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
        .font-raleway { font-family: 'Raleway', sans-serif; }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Custom Scrollbar for Technical Roadmap */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.5);
        }
      `}</style>

      {/* Navigation Controls */}
      <button 
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 text-white/50 hover:text-cyan-400 transition-all duration-300 group"
      >
        <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
      </button>

      <button 
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 text-white/50 hover:text-cyan-400 transition-all duration-300 group"
      >
        <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto flex gap-12 p-12 pt-20">
        
        {/* Left Content - Primary Objectives */}
        <div className="w-[45%] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm font-semibold tracking-wide text-gray-300 font-outfit uppercase">
                Strategic Goals
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-raleway leading-tight">
              What we set out <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                to achieve.
              </span>
            </h1>

            <p className="text-lg text-gray-400 font-outfit leading-relaxed max-w-xl mb-10 border-l-4 border-cyan-500/30 pl-6">
              Launch Batbox Simulator Products, Platforms, and Services for the Addison Venue and IAAPA.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {objectives.map((obj, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                  className="bg-[#1E1F23]/80 backdrop-blur-md border border-white/5 p-4 rounded-xl flex items-start gap-4 hover:bg-white/5 transition-colors"
                >
                  <div className={`p-2 rounded-lg ${obj.bg} ${obj.color} shrink-0`}>
                    <obj.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-200 font-medium font-outfit text-sm leading-snug">
                      {obj.text}
                    </p>
                    {obj.subtext && (
                      <p className="text-xs text-gray-500 mt-1">{obj.subtext}</p>
                    )}
                  </div>
                  <div className="flex items-center justify-center pt-1">
                    <CheckCircle2 className="text-emerald-400" size={40} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Content - Technical Goals List */}
        <div className="w-[55%] flex flex-col h-full justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#1E1F23]/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 h-[80vh] flex flex-col"
          >
            <h3 className="text-2xl font-bold font-raleway mb-6 text-white flex items-center gap-3">
              <Database className="text-cyan-400" />
              Technical Roadmap
            </h3>

            <div className="flex-1 overflow-y-auto pr-4 space-y-3 custom-scrollbar">
              {technicalGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (index * 0.05) }}
                  className="flex items-center justify-between p-4 rounded-xl bg-black/20 border border-white/5 hover:border-cyan-500/20 hover:bg-cyan-500/5 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-cyan-400 transition-colors">
                      <goal.icon size={18} />
                    </div>
                    <span className="font-outfit text-gray-300 text-sm group-hover:text-white transition-colors">
                      {goal.text}
                    </span>
                  </div>
                  
                  <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                    goal.status === 'completed' 
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                      : goal.status === 'partial' 
                        ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' 
                        : 'bg-gray-500/10 border-gray-500/20 text-gray-400'
                  }`}>
                    {goal.status === 'completed' ? 'Done' : goal.status === 'partial' ? 'In Progress' : 'To Do'}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};
