import React from "react";
import { motion } from "motion/react";
import { Bot, Zap, Calendar, Clock, ArrowRight, Code2, Sparkles } from "lucide-react";
import calendarViewImg from "figma:asset/8d0bc9c05ef6ec412fc7b17c843514d63545f860.png";
import listViewImg from "figma:asset/b7ff3bde360e3abeffbce9cb25d6df57d8a724b9.png";

interface AIFirstDevelopmentSlideProps {
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

export const AIFirstDevelopmentSlide: React.FC<AIFirstDevelopmentSlideProps> = ({ onNext, onPrev }) => {
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
              AI-First Development
            </h2>
            <span className="px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium uppercase tracking-wider">
              Innovation Velocity
            </span>
          </div>
          <p className="text-2xl text-gray-400 font-light max-w-4xl">
            Leveraging next-generation tooling to accelerate delivery.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 grid grid-cols-12 gap-8 min-h-0"
        >
          {/* Left Column: Strategy & Metrics */}
          <div className="col-span-4 flex flex-col gap-6">
            {/* Strategy Card */}
            <motion.div variants={itemVariants} className="bg-[#1E1F23] border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
               
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-6">
                   <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                     <Bot className="w-8 h-8 text-emerald-400" />
                   </div>
                   <h3 className="text-2xl font-bold text-white">The Advantage</h3>
                 </div>
                 
                 <p className="text-gray-300 leading-relaxed text-lg font-light">
                   The development team, with its decades of experience in enterprise-grade software development, is poised to take advantage of recent advances in AI technology to allow for much faster software development than what was possible previously.
                 </p>
               </div>
            </motion.div>

            {/* Metrics/Comparison Card */}
            <motion.div variants={itemVariants} className="flex-1 bg-gradient-to-br from-[#1E1F23] to-[#151619] border border-white/5 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center">
               <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

               <div className="flex items-center gap-2 text-gray-400 mb-6 uppercase tracking-wider text-sm font-medium">
                  <Clock className="w-4 h-4" />
                  <span>Development Velocity</span>
               </div>

               <div className="space-y-8">
                 <div>
                   <div className="flex justify-between items-end mb-2">
                     <span className="text-gray-400 text-lg">Traditional Estimate</span>
                     <span className="text-red-400 text-2xl font-bold">5-7 Days</span>
                   </div>
                   <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                     <div className="w-full h-full bg-white/20" />
                   </div>
                 </div>

                 <div>
                   <div className="flex justify-between items-end mb-2">
                     <span className="text-white text-lg font-medium">AI-Assisted Delivery</span>
                     <span className="text-emerald-400 text-4xl font-bold flex items-center gap-2">
                       &lt; 1 Day
                       <Zap className="w-6 h-6 fill-emerald-400" />
                     </span>
                   </div>
                   <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden relative">
                     <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "15%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-emerald-500 absolute left-0 top-0" 
                     />
                   </div>
                   <p className="mt-2 text-sm text-emerald-500/80 font-medium">85% Reduction in Time-to-Market</p>
                 </div>
               </div>
            </motion.div>
          </div>

          {/* Right Column: Case Study Visuals */}
          <div className="col-span-8 flex flex-col gap-6">
            <motion.div variants={itemVariants} className="flex-1 bg-[#1E1F23] border border-white/5 rounded-3xl p-8 relative overflow-hidden group flex flex-col">
               
               <div className="flex items-center justify-between mb-6 relative z-10">
                 <div>
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                      <Sparkles className="w-6 h-6 text-yellow-400" />
                      Rapid Prototyping Case Study
                    </h3>
                    <p className="text-gray-400">
                      High-pressure requirement: Operations needed a calendar view immediately.
                    </p>
                 </div>
                 <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300">
                   Booking System Calendar
                 </div>
               </div>

               {/* Visual Comparison */}
               <div className="flex-1 relative rounded-2xl overflow-hidden bg-black/20 border border-white/5 p-4 flex gap-4">
                  {/* Before (Small) */}
                  <div className="w-1/3 flex flex-col gap-2 opacity-60 hover:opacity-100 transition-opacity">
                    <span className="text-sm text-gray-500 font-medium uppercase tracking-wider pl-1">Standard List View</span>
                    <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg relative h-full">
                       <img src={listViewImg} alt="List View" className="w-full h-full object-cover object-left-top" />
                       <div className="absolute inset-0 bg-black/10" />
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex flex-col justify-center items-center text-gray-600">
                     <ArrowRight className="w-8 h-8" />
                  </div>

                  {/* After (Large) */}
                  <div className="flex-1 flex flex-col gap-2">
                    <span className="text-sm text-emerald-400 font-medium uppercase tracking-wider pl-1 flex items-center gap-2">
                       <Code2 className="w-4 h-4" />
                       AI-Generated Solution
                    </span>
                    <div className="rounded-xl overflow-hidden border border-emerald-500/30 shadow-2xl shadow-emerald-900/20 relative h-full">
                       <img src={calendarViewImg} alt="Calendar View" className="w-full h-full object-cover object-left-top" />
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};
