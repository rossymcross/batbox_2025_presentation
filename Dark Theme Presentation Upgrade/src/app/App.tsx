import { useState, useEffect, lazy, Suspense, useCallback, memo } from "react";
import { AnimatePresence } from "motion/react";
import { Navigation } from "@/app/components/Navigation";
import { Preloader } from "@/app/components/Preloader";

// Lazy load all slide components for code splitting
const OpeningSlide = lazy(() => import("@/app/components/OpeningSlide").then(m => ({ default: m.OpeningSlide })));
const IndexSlide = lazy(() => import("@/app/components/IndexSlide").then(m => ({ default: m.IndexSlide })));
const SectionTitleSlide = lazy(() => import("@/app/components/SectionTitleSlide").then(m => ({ default: m.SectionTitleSlide })));
const ObjectivesSlide = lazy(() => import("@/app/components/ObjectivesSlide").then(m => ({ default: m.ObjectivesSlide })));
const SystemArchitectureContinuedSlide = lazy(() => import("@/app/components/SystemArchitectureContinuedSlide").then(m => ({ default: m.SystemArchitectureContinuedSlide })));
const InfrastructureSlide = lazy(() => import("@/app/components/InfrastructureSlide").then(m => ({ default: m.InfrastructureSlide })));
const TechnologyModernizationSlide = lazy(() => import("@/app/components/TechnologyModernizationSlide").then(m => ({ default: m.TechnologyModernizationSlide })));
const DevelopmentSummarySlide = lazy(() => import("@/app/components/DevelopmentSummarySlide").then(m => ({ default: m.DevelopmentSummarySlide })));
const PlatformDistributionSlide = lazy(() => import("@/app/components/PlatformDistributionSlide").then(m => ({ default: m.PlatformDistributionSlide })));
const SupportSlide = lazy(() => import("@/app/components/SupportSlide").then(m => ({ default: m.SupportSlide })));
const AIFirstDevelopmentSlide = lazy(() => import("@/app/components/AIFirstDevelopmentSlide").then(m => ({ default: m.AIFirstDevelopmentSlide })));
const AddisonSuccessStorySlide = lazy(() => import("@/app/components/AddisonSuccessStorySlide").then(m => ({ default: m.AddisonSuccessStorySlide })));
const ExecutionPlanSlide = lazy(() => import("@/app/components/ExecutionPlanSlide").then(m => ({ default: m.ExecutionPlanSlide })));
const BatboxEcosystemSlide = lazy(() => import("@/app/components/BatboxEcosystemSlide").then(m => ({ default: m.BatboxEcosystemSlide })));
const ShiftingDNASlide = lazy(() => import("@/app/components/ShiftingDNASlide").then(m => ({ default: m.ShiftingDNASlide })));
const BatboxSuiteSlide = lazy(() => import("@/app/components/BatboxSuiteSlide").then(m => ({ default: m.BatboxSuiteSlide })));
const DaikinExperienceSlide = lazy(() => import("@/app/components/DaikinExperienceSlide").then(m => ({ default: m.DaikinExperienceSlide })));
const Q1DeliverablesSlide = lazy(() => import("@/app/components/Q1DeliverablesSlide").then(m => ({ default: m.Q1DeliverablesSlide })));
const Q2DeliverablesSlide = lazy(() => import("@/app/components/Q2DeliverablesSlide").then(m => ({ default: m.Q2DeliverablesSlide })));
const Q3DeliverablesSlide = lazy(() => import("@/app/components/Q3DeliverablesSlide").then(m => ({ default: m.Q3DeliverablesSlide })));
const Q4DeliverablesSlide = lazy(() => import("@/app/components/Q4DeliverablesSlide").then(m => ({ default: m.Q4DeliverablesSlide })));
const SuperadminPortalSlide = lazy(() => import("@/app/components/SuperadminPortalSlide").then(m => ({ default: m.SuperadminPortalSlide })));
const BatboxSuiteIntroSlide = lazy(() => import("@/app/components/BatboxSuiteIntroSlide").then(m => ({ default: m.BatboxSuiteIntroSlide })));
const PlatformShiftSlide = lazy(() => import("@/app/components/PlatformShiftSlide").then(m => ({ default: m.PlatformShiftSlide })));
const StrategicPivotSlide = lazy(() => import("@/app/components/StrategicPivotSlide").then(m => ({ default: m.StrategicPivotSlide })));
const BatboxSuiteDemoSlide = lazy(() => import("@/app/components/BatboxSuiteDemoSlide").then(m => ({ default: m.BatboxSuiteDemoSlide })));
const CDPFoundationSlide = lazy(() => import("@/app/components/CDPFoundationSlide").then(m => ({ default: m.CDPFoundationSlide })));
const AIOperationsSlide = lazy(() => import("@/app/components/AIOperationsSlide").then(m => ({ default: m.AIOperationsSlide })));
const GamificationSlide = lazy(() => import("@/app/components/GamificationSlide").then(m => ({ default: m.GamificationSlide })));
const CustomerSupportSlide = lazy(() => import("@/app/components/CustomerSupportSlide").then(m => ({ default: m.CustomerSupportSlide })));
const SuccessDefinitionSlide = lazy(() => import("@/app/components/SuccessDefinitionSlide").then(m => ({ default: m.SuccessDefinitionSlide })));
const ThankYouSlide = lazy(() => import("@/app/components/ThankYouSlide").then(m => ({ default: m.ThankYouSlide })));

const TOTAL_SLIDES = 34;

// Minimal loading fallback that doesn't affect layout
const SlideFallback = memo(() => (
  <div className="size-full bg-[#050505]" />
));
SlideFallback.displayName = 'SlideFallback';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Memoize handlers to prevent unnecessary re-renders
  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, TOTAL_SLIDES - 1));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNavigate = useCallback((slideIndex: number) => {
    setCurrentSlide(slideIndex);
  }, []);

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

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

  // Preload adjacent slides for smoother navigation
  useEffect(() => {
    const preloadSlide = (index: number) => {
      if (index >= 0 && index < TOTAL_SLIDES) {
        // This triggers the lazy load
        const slideMap: Record<number, () => Promise<any>> = {
          0: () => import("@/app/components/OpeningSlide"),
          1: () => import("@/app/components/IndexSlide"),
          2: () => import("@/app/components/SectionTitleSlide"),
          3: () => import("@/app/components/ObjectivesSlide"),
          4: () => import("@/app/components/SystemArchitectureContinuedSlide"),
          5: () => import("@/app/components/InfrastructureSlide"),
          6: () => import("@/app/components/TechnologyModernizationSlide"),
          7: () => import("@/app/components/DevelopmentSummarySlide"),
          8: () => import("@/app/components/PlatformDistributionSlide"),
          9: () => import("@/app/components/SupportSlide"),
          10: () => import("@/app/components/AddisonSuccessStorySlide"),
          11: () => import("@/app/components/SectionTitleSlide"),
          12: () => import("@/app/components/AIFirstDevelopmentSlide"),
          13: () => import("@/app/components/Q1DeliverablesSlide"),
          14: () => import("@/app/components/BatboxSuiteSlide"),
          15: () => import("@/app/components/DaikinExperienceSlide"),
          16: () => import("@/app/components/SuperadminPortalSlide"),
          17: () => import("@/app/components/Q2DeliverablesSlide"),
          18: () => import("@/app/components/Q3DeliverablesSlide"),
          19: () => import("@/app/components/Q4DeliverablesSlide"),
          20: () => import("@/app/components/SectionTitleSlide"),
          21: () => import("@/app/components/BatboxSuiteIntroSlide"),
          22: () => import("@/app/components/StrategicPivotSlide"),
          23: () => import("@/app/components/BatboxEcosystemSlide"),
          24: () => import("@/app/components/SectionTitleSlide"),
          25: () => import("@/app/components/BatboxSuiteDemoSlide"),
          26: () => import("@/app/components/ShiftingDNASlide"),
          27: () => import("@/app/components/CDPFoundationSlide"),
          28: () => import("@/app/components/AIOperationsSlide"),
          29: () => import("@/app/components/GamificationSlide"),
          30: () => import("@/app/components/ExecutionPlanSlide"),
          31: () => import("@/app/components/CustomerSupportSlide"),
          32: () => import("@/app/components/SuccessDefinitionSlide"),
          33: () => import("@/app/components/ThankYouSlide"),
        };
        slideMap[index]?.();
      }
    };

    // Preload next and previous slides
    preloadSlide(currentSlide + 1);
    preloadSlide(currentSlide - 1);
  }, [currentSlide]);

  return (
    <div className="size-full">
      <AnimatePresence>
        {isLoading && (
          <Preloader onComplete={handleLoadComplete} />
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
          <Suspense fallback={<SlideFallback />}>
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
          </Suspense>
        </>
      )}
    </div>
  );
}
