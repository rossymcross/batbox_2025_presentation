import React, { useState } from "react";
import { OpeningSlide } from "./components/slides/OpeningSlide";
import { DevelopmentSummarySlide } from "./components/slides/DevelopmentSummarySlide";
import { PlatformDistributionSlide } from "./components/slides/PlatformDistributionSlide";
import { MonthlyTrendsSlide } from "./components/slides/MonthlyTrendsSlide";
import { BugReportsSlide } from "./components/slides/BugReportsSlide";
import { SupportSlide } from "./components/slides/SupportSlide";
import { DevelopmentTeamSlide } from "./components/slides/DevelopmentTeamSlide";
import { AddisonLaunchSlide } from "./components/slides/AddisonLaunchSlide";
import { AddisonKPISlide } from "./components/slides/AddisonKPISlide";
import { DemographicsSlide } from "./components/slides/DemographicsSlide";
import { GameplayAnalysisSlide } from "./components/slides/GameplayAnalysisSlide";
import { FinancialAnalysisSlide } from "./components/slides/FinancialAnalysisSlide";
import { EventsAnalysisSlide } from "./components/slides/EventsAnalysisSlide";
import { AddisonSuccessStorySlide } from "./components/slides/AddisonSuccessStorySlide";
import { VirtualDugoutLaunchSlide } from "./components/slides/VirtualDugoutLaunchSlide";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <OpeningSlide key="opening" onNext={() => setCurrentSlide(1)} />,
    <DevelopmentSummarySlide key="dev-summary" onNext={() => setCurrentSlide(2)} onPrev={() => setCurrentSlide(0)} />,
    <PlatformDistributionSlide key="platform-dist" onNext={() => setCurrentSlide(3)} onPrev={() => setCurrentSlide(1)} />,
    <MonthlyTrendsSlide key="monthly-trends" onNext={() => setCurrentSlide(4)} onPrev={() => setCurrentSlide(2)} />,
    <BugReportsSlide key="bug-reports" onNext={() => setCurrentSlide(5)} onPrev={() => setCurrentSlide(3)} />,
    <SupportSlide key="support" onNext={() => setCurrentSlide(6)} onPrev={() => setCurrentSlide(4)} />,
    <DevelopmentTeamSlide key="dev-team" onNext={() => setCurrentSlide(7)} onPrev={() => setCurrentSlide(5)} />,
    <AddisonLaunchSlide key="addison-launch" onNext={() => setCurrentSlide(8)} onPrev={() => setCurrentSlide(6)} />,
    <AddisonKPISlide key="addison-kpis" onNext={() => setCurrentSlide(9)} onPrev={() => setCurrentSlide(7)} />,
    <DemographicsSlide key="demographics" onNext={() => setCurrentSlide(10)} onPrev={() => setCurrentSlide(8)} />,
    <GameplayAnalysisSlide key="gameplay-analysis" onNext={() => setCurrentSlide(11)} onPrev={() => setCurrentSlide(9)} />,
    <FinancialAnalysisSlide key="financial-analysis" onNext={() => setCurrentSlide(13)} onPrev={() => setCurrentSlide(11)} />,
    <EventsAnalysisSlide key="events-analysis" onNext={() => setCurrentSlide(14)} onPrev={() => setCurrentSlide(12)} />,
    <AddisonSuccessStorySlide key="addison-success" onNext={() => setCurrentSlide(15)} onPrev={() => setCurrentSlide(13)} />,
    <VirtualDugoutLaunchSlide key="virtual-dugout" onNext={() => setCurrentSlide(16)} onPrev={() => setCurrentSlide(14)} />
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  return (
    <div className="bg-[#121316] min-h-screen text-white overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Page Number */}
      <div className="fixed bottom-8 left-8 z-50 pointer-events-none">
        <span className="text-8xl font-bold text-white/5 font-[Outfit] tracking-tighter">
          {String(currentSlide + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex gap-4">
        <button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          className={`p-4 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300
            ${currentSlide === 0 
              ? "opacity-30 cursor-not-allowed bg-black/20 text-gray-500" 
              : "bg-black/40 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={handleNext}
          disabled={currentSlide === slides.length - 1}
          className={`p-4 rounded-full border border-white/10 backdrop-blur-md transition-all duration-300
            ${currentSlide === slides.length - 1 
              ? "opacity-30 cursor-not-allowed bg-black/20 text-gray-500" 
              : "bg-black/40 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default App;
