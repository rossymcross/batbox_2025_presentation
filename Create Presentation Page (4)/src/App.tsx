import React, { useState } from "react";
import { OpeningSlide } from "./components/slides/OpeningSlide";
import { DevelopmentSummarySlide } from "./components/slides/DevelopmentSummarySlide";
import { PlatformDistributionSlide } from "./components/slides/PlatformDistributionSlide";
import { MonthlyTrendsSlide } from "./components/slides/MonthlyTrendsSlide";
import { SoftwareDeploymentsSlide } from "./components/slides/SoftwareDeploymentsSlide";
import { BugReportsSlide } from "./components/slides/BugReportsSlide";
import { SupportSlide } from "./components/slides/SupportSlide";
import { DevelopmentTeamSlide } from "./components/slides/DevelopmentTeamSlide";
import { ObjectivesSlide } from "./components/slides/ObjectivesSlide";
import { AddisonLaunchSlide } from "./components/slides/AddisonLaunchSlide";
import { AddisonKPISlide } from "./components/slides/AddisonKPISlide";
import { DemographicsSlide } from "./components/slides/DemographicsSlide";
import { GameplayAnalysisSlide } from "./components/slides/GameplayAnalysisSlide";
import { FinancialAnalysisSlide } from "./components/slides/FinancialAnalysisSlide";
import { EventsAnalysisSlide } from "./components/slides/EventsAnalysisSlide";
import { AddisonSuccessStorySlide } from "./components/slides/AddisonSuccessStorySlide";
import { VirtualDugoutLaunchSlide } from "./components/slides/VirtualDugoutLaunchSlide";
import { VirtualDugoutStatisticsSlide } from "./components/slides/VirtualDugoutStatisticsSlide";
import { InfrastructureSlide } from "./components/slides/InfrastructureSlide";
import { StrategicFoundationSlide } from "./components/slides/StrategicFoundationSlide";
import { ProductVisionStrategySlide } from "./components/slides/ProductVisionStrategySlide";
import { SystemArchitectureContinuedSlide } from "./components/slides/SystemArchitectureContinuedSlide";
import { UserExperienceSlide } from "./components/slides/UserExperienceSlide";
import { TechnologyModernizationSlide } from "./components/slides/TechnologyModernizationSlide";
import { AIFirstDevelopmentSlide } from "./components/slides/AIFirstDevelopmentSlide";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <OpeningSlide key="opening" onNext={() => setCurrentSlide(1)} />,
    <StrategicFoundationSlide key="strategic-foundation" onNext={() => setCurrentSlide(2)} onPrev={() => setCurrentSlide(0)} />,
    <ProductVisionStrategySlide key="vision-strategy" onNext={() => setCurrentSlide(3)} onPrev={() => setCurrentSlide(1)} />,
    <DevelopmentSummarySlide key="dev-summary" onNext={() => setCurrentSlide(4)} onPrev={() => setCurrentSlide(2)} />,
    <PlatformDistributionSlide key="platform-dist" onNext={() => setCurrentSlide(5)} onPrev={() => setCurrentSlide(3)} />,
    <MonthlyTrendsSlide key="monthly-trends" onNext={() => setCurrentSlide(6)} onPrev={() => setCurrentSlide(4)} />,
    <SoftwareDeploymentsSlide key="software-deployments" onNext={() => setCurrentSlide(7)} onPrev={() => setCurrentSlide(5)} />,
    <BugReportsSlide key="bug-reports" onNext={() => setCurrentSlide(8)} onPrev={() => setCurrentSlide(6)} />,
    <SupportSlide key="support" onNext={() => setCurrentSlide(9)} onPrev={() => setCurrentSlide(7)} />,
    <DevelopmentTeamSlide key="dev-team" onNext={() => setCurrentSlide(10)} onPrev={() => setCurrentSlide(8)} />,
    <InfrastructureSlide key="infrastructure" onNext={() => setCurrentSlide(11)} onPrev={() => setCurrentSlide(9)} />,
    <SystemArchitectureContinuedSlide key="infrastructure-2" onNext={() => setCurrentSlide(12)} onPrev={() => setCurrentSlide(10)} />,
    <UserExperienceSlide key="user-experience" onNext={() => setCurrentSlide(13)} onPrev={() => setCurrentSlide(11)} />,
    <TechnologyModernizationSlide key="tech-modernization" onNext={() => setCurrentSlide(14)} onPrev={() => setCurrentSlide(12)} />,
    <AIFirstDevelopmentSlide key="ai-first" onNext={() => setCurrentSlide(15)} onPrev={() => setCurrentSlide(13)} />,
    <ObjectivesSlide key="objectives" onNext={() => setCurrentSlide(16)} onPrev={() => setCurrentSlide(14)} />,
    <AddisonLaunchSlide key="addison-launch" onNext={() => setCurrentSlide(17)} onPrev={() => setCurrentSlide(15)} />,
    <AddisonKPISlide key="addison-kpis" onNext={() => setCurrentSlide(18)} onPrev={() => setCurrentSlide(16)} />,
    <DemographicsSlide key="demographics" onNext={() => setCurrentSlide(19)} onPrev={() => setCurrentSlide(17)} />,
    <GameplayAnalysisSlide key="gameplay-analysis" onNext={() => setCurrentSlide(20)} onPrev={() => setCurrentSlide(18)} />,
    <FinancialAnalysisSlide key="financial-analysis" onNext={() => setCurrentSlide(21)} onPrev={() => setCurrentSlide(19)} />,
    <EventsAnalysisSlide key="events-analysis" onNext={() => setCurrentSlide(22)} onPrev={() => setCurrentSlide(20)} />,
    <AddisonSuccessStorySlide key="addison-success" onNext={() => setCurrentSlide(23)} onPrev={() => setCurrentSlide(21)} />,
    <VirtualDugoutLaunchSlide key="virtual-dugout" onNext={() => setCurrentSlide(24)} onPrev={() => setCurrentSlide(22)} />,
    <VirtualDugoutStatisticsSlide key="virtual-stats" onNext={() => setCurrentSlide(25)} onPrev={() => setCurrentSlide(23)} />
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
