import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { OpeningSlide } from "@/app/components/OpeningSlide";
import { IndexSlide } from "@/app/components/IndexSlide";
import { SectionTitleSlide } from "@/app/components/SectionTitleSlide";
import { ObjectivesSlide } from "@/app/components/ObjectivesSlide";
import { SystemArchitectureContinuedSlide } from "@/app/components/SystemArchitectureContinuedSlide";
import { InfrastructureSlide } from "@/app/components/InfrastructureSlide";
import { TechnologyModernizationSlide } from "@/app/components/TechnologyModernizationSlide";
import { DevelopmentSummarySlide } from "@/app/components/DevelopmentSummarySlide";
import { PlatformDistributionSlide } from "@/app/components/PlatformDistributionSlide";
import { SupportSlide } from "@/app/components/SupportSlide";
import { AIFirstDevelopmentSlide } from "@/app/components/AIFirstDevelopmentSlide";
import { AddisonSuccessStorySlide } from "@/app/components/AddisonSuccessStorySlide";
import { ExecutionPlanSlide } from "@/app/components/ExecutionPlanSlide";
import { BatboxEcosystemSlide } from "@/app/components/BatboxEcosystemSlide";
import { ShiftingDNASlide } from "@/app/components/ShiftingDNASlide";
import { BatboxSuiteSlide } from "@/app/components/BatboxSuiteSlide";
import { DaikinExperienceSlide } from "@/app/components/DaikinExperienceSlide";
import { Q1DeliverablesSlide } from "@/app/components/Q1DeliverablesSlide";
import { Q2DeliverablesSlide } from "@/app/components/Q2DeliverablesSlide";
import { Q3DeliverablesSlide } from "@/app/components/Q3DeliverablesSlide";
import { Q4DeliverablesSlide } from "@/app/components/Q4DeliverablesSlide";
import { SuperadminPortalSlide } from "@/app/components/SuperadminPortalSlide";
import { BatboxSuiteIntroSlide } from "@/app/components/BatboxSuiteIntroSlide";
import { PlatformShiftSlide } from "@/app/components/PlatformShiftSlide";
import { StrategicPivotSlide } from "@/app/components/StrategicPivotSlide";
import { BatboxSuiteDemoSlide } from "@/app/components/BatboxSuiteDemoSlide";
import { Navigation } from "@/app/components/Navigation";
import { CDPFoundationSlide } from "@/app/components/CDPFoundationSlide";
import { AIOperationsSlide } from "@/app/components/AIOperationsSlide";
import { GamificationSlide } from "@/app/components/GamificationSlide";
import { CustomerSupportSlide } from "@/app/components/CustomerSupportSlide";
import { SuccessDefinitionSlide } from "@/app/components/SuccessDefinitionSlide";
import { ThankYouSlide } from "@/app/components/ThankYouSlide";
import { Preloader } from "@/app/components/Preloader";

const TOTAL_SLIDES = 34;

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleNext = () => {
    setCurrentSlide((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNavigate = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  // Global keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.code === "Space") {
        setCurrentSlide((prev) => Math.min(prev + 1, TOTAL_SLIDES - 1));
      } else if (e.key === "ArrowLeft") {
        setCurrentSlide((prev) => Math.max(0, prev - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="size-full">
      <AnimatePresence>
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          {/* Global Navigation */}
          <Navigation
            currentSlide={currentSlide}
            totalSlides={TOTAL_SLIDES}
            onPrev={handlePrev}
            onNext={handleNext}
          />
          {currentSlide === 0 && <OpeningSlide onNext={handleNext} />}
      {currentSlide === 1 && (
        <IndexSlide 
          onNext={handleNext} 
          onPrev={handlePrev}
          onNavigate={handleNavigate}
        />
      )}
      {currentSlide === 2 && (
        <SectionTitleSlide
          onNext={handleNext}
          onPrev={handlePrev}
          sectionNumber="01"
          title="Technology Overview 2025"
          subtitle="Development metrics, system architecture, and platform infrastructure achievements from the past year."
          accentColor="cyan"
          pageNumber={3}
        />
      )}
      {currentSlide === 3 && (
        <ObjectivesSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 4 && (
        <SystemArchitectureContinuedSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 5 && (
        <InfrastructureSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 6 && (
        <TechnologyModernizationSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 7 && (
        <DevelopmentSummarySlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 8 && (
        <PlatformDistributionSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 9 && (
        <SupportSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 10 && (
        <AddisonSuccessStorySlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 11 && (
        <SectionTitleSlide
          onNext={handleNext}
          onPrev={handlePrev}
          sectionNumber="02"
          title="2026 Product Roadmap"
          subtitle="Strategic initiatives • Platform evolution • Commercial readiness"
          accentColor="purple"
          pageNumber={12}
        />
      )}
      {currentSlide === 12 && (
        <AIFirstDevelopmentSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 13 && (
        <Q1DeliverablesSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 14 && (
        <BatboxSuiteSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 15 && (
        <DaikinExperienceSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 16 && (
        <SuperadminPortalSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 17 && (
        <Q2DeliverablesSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 18 && (
        <Q3DeliverablesSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 19 && (
        <Q4DeliverablesSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 20 && (
        <SectionTitleSlide
          onNext={handleNext}
          onPrev={handlePrev}
          sectionNumber="03"
          title="Batbox Suite"
          subtitle="Self-service platform • Queue system • Avatars • Player engagement"
          accentColor="purple"
          pageNumber={21}
        />
      )}
      {currentSlide === 21 && (
        <BatboxSuiteIntroSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 22 && (
        <StrategicPivotSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 23 && (
        <BatboxEcosystemSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 24 && (
        <SectionTitleSlide
          onNext={handleNext}
          onPrev={handlePrev}
          sectionNumber="04"
          title="Strategic Initiatives"
          subtitle="AI development • CDP implementation • In-house tech team • Advertising revenue"
          accentColor="blue"
          pageNumber={25}
        />
      )}
      {currentSlide === 25 && (
        <BatboxSuiteDemoSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 26 && (
        <ShiftingDNASlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 27 && (
        <CDPFoundationSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 28 && (
        <AIOperationsSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 29 && (
        <GamificationSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 30 && (
        <ExecutionPlanSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 31 && (
        <CustomerSupportSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 32 && (
        <SuccessDefinitionSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide === 33 && (
        <ThankYouSlide
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {currentSlide >= 34 && (
        <div className="size-full flex items-center justify-center bg-[#050505] text-white">
          <p className="text-2xl">Slide {currentSlide + 1} goes here...</p>
        </div>
      )}
        </>
      )}
    </div>
  );
}