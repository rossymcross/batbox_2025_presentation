import React, { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { Target, Clock, Rocket, Users, Database, ArrowRight, Monitor, Hammer, RefreshCw, Layers, Gamepad2, PlayCircle, FolderKanban, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

interface ObjectivesSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const ObjectivesSlide: React.FC<ObjectivesSlideProps> = ({ onNext, onPrev }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightGradient = useMotionTemplate`radial-gradient(circle 600px at ${mouseX}px ${mouseY}px, rgba(6, 182, 212, 0.06), transparent 70%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);


  const objectives = [
    {
      icon: Clock,
      text: "Reduce kiosk check-in to first pitch time by 50%",
      color: "text-cyan-400",
      glowColor: "rgba(6, 182, 212, 0.2)",
      bgGradient: "from-cyan-500/10 to-cyan-500/5",
      border: "border-cyan-500/30",
      status: "completed"
    },
    {
      icon: Rocket,
      text: "Launch redesigned Batbox-branded game selection & onboarding by August 31, 2025",
      color: "text-purple-400",
      glowColor: "rgba(168, 85, 247, 0.2)",
      bgGradient: "from-purple-500/10 to-purple-500/5",
      border: "border-purple-500/30",
      status: "completed"
    },
    {
      icon: Users,
      text: "Shift product focus from individual to group-based experiences",
      subtext: "New UI/UX for group configuration and clearer game mode selection",
      color: "text-emerald-400",
      glowColor: "rgba(16, 185, 129, 0.2)",
      bgGradient: "from-emerald-500/10 to-emerald-500/5",
      border: "border-emerald-500/30",
      status: "completed"
    },
    {
      icon: Database,
      text: "Capture detailed usage data from 90%+ of first-time users",
      color: "text-orange-400",
      glowColor: "rgba(249, 115, 22, 0.2)",
      bgGradient: "from-orange-500/10 to-orange-500/5",
      border: "border-orange-500/30",
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
    <div className="w-screen h-screen bg-[#050505] text-white overflow-hidden relative flex flex-col">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.2);
          border-radius: 10px;
          transition: background 0.3s;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.4);
        }
      `}</style>

      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Static Radial Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[10%] right-[5%] w-[800px] h-[800px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
        <div
          className="absolute bottom-[5%] left-[10%] w-[700px] h-[700px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
      </div>

      {/* Mouse-Following Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlightGradient }}
      />

      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto flex gap-12 p-12 pt-20 font-inter">
        
        {/* Left Content - Primary Objectives */}
        <div className="w-[45%] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-white/8 to-white/3 border border-cyan-500/20 backdrop-blur-sm mb-8 relative overflow-hidden">
              <span 
                className="w-2.5 h-2.5 rounded-full bg-cyan-400 relative z-10"
                style={{
                  boxShadow: '0 0 12px rgba(6, 182, 212, 0.8)'
                }}
              />
              <span className="text-sm font-semibold tracking-[0.15em] text-cyan-400 uppercase relative z-10">
                Strategic Goals
              </span>
            </div>

            {/* Enhanced Title */}
            <h1 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight tracking-[-0.02em]">
              What we set out <br />
              <span 
                className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 60px rgba(6, 182, 212, 0.3)'
                }}
              >
                to achieve.
              </span>
            </h1>

            {/* Enhanced Description */}
            <div className="relative mb-10">
              <div
                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-600 rounded-full"
                style={{
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)'
                }}
              />
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl pl-6">
                Launch Batbox Simulator Products, Platforms, and Services for the Addison Venue and IAAPA.
              </p>
            </div>

            {/* Enhanced Objectives Cards */}
            <div className="flex flex-col gap-4">
              {objectives.map((obj, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: 0.3 + (index * 0.1), 
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className={`bg-gradient-to-br from-[#0c0c0e] to-[#151518] backdrop-blur-sm border ${obj.border} p-5 rounded-2xl flex items-start gap-4 relative overflow-hidden group cursor-default transition-all duration-300 hover:border-opacity-60`}
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  {/* Icon Container */}
                  <div 
                    className={`p-3 rounded-xl bg-gradient-to-br ${obj.bgGradient} ${obj.color} shrink-0 relative transition-transform duration-300 group-hover:scale-110`}
                  >
                    <obj.icon size={22} strokeWidth={2} />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 relative z-10">
                    <p className="text-gray-100 font-medium text-lg leading-snug">
                      {obj.text}
                    </p>
                    {obj.subtext && (
                      <p className="text-base text-gray-400 mt-2">{obj.subtext}</p>
                    )}
                  </div>

                  {/* Check Icon */}
                  <motion.div 
                    className="flex items-center justify-center pt-1 relative z-10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1), type: "spring", stiffness: 200 }}
                  >
                    <div className="relative">
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
                          filter: 'blur(10px)'
                        }}
                      />
                      <CheckCircle2 className="text-emerald-400 relative z-10" size={36} strokeWidth={2} />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Content - Technical Roadmap */}
        <div className="w-[55%] flex flex-col h-full justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.4,
              duration: 1,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="bg-gradient-to-br from-[#0c0c0e] to-[#151518] backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-[80vh] flex flex-col relative overflow-hidden"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(6, 182, 212, 0.02)'
            }}
          >
            {/* Static background accent glow */}
            <div
              className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none opacity-40"
              style={{
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
                filter: 'blur(60px)'
              }}
            />

            {/* Header */}
            <h3 className="text-3xl font-black mb-8 text-white flex items-center gap-4 relative z-10 tracking-[-0.01em]">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20">
                <Database className="text-cyan-400" size={28} strokeWidth={2} />
              </div>
              Technical Roadmap
            </h3>

            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar relative z-10">
              {technicalGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: 0.6 + (index * 0.04),
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="flex items-center justify-between p-4 rounded-xl bg-black/20 border border-white/5 transition-all duration-300 group relative overflow-hidden hover:border-cyan-500/30 hover:bg-cyan-500/5"
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div 
                      className="p-2.5 rounded-lg bg-white/5 text-gray-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all duration-300 group-hover:scale-110"
                    >
                      <goal.icon size={20} strokeWidth={2} />
                    </div>
                    <span className="font-medium text-gray-300 text-sm group-hover:text-white transition-colors">
                      {goal.text}
                    </span>
                  </div>
                  
                  {/* Status Badge */}
                  <div 
                    className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider border relative z-10 transition-transform duration-300 hover:scale-105 ${
                      goal.status === 'completed' 
                        ? 'bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border-emerald-500/30 text-emerald-400' 
                        : goal.status === 'partial' 
                          ? 'bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 border-yellow-500/30 text-yellow-400' 
                          : 'bg-gradient-to-r from-gray-500/10 to-gray-500/5 border-gray-500/30 text-gray-400'
                    }`}
                    style={{
                      boxShadow: goal.status === 'completed' 
                        ? '0 0 15px rgba(16, 185, 129, 0.3)' 
                        : goal.status === 'partial'
                          ? '0 0 15px rgba(234, 179, 8, 0.3)'
                          : 'none'
                    }}
                  >
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
