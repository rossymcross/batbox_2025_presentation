import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Import all images
import batboxLogo from "../../assets/b48a003eb09a9aa603c90fc81f3e8997a64d6e61.png";
import phonesImage from "../../assets/gamification-phones.png";
import pyramidImage from "../../assets/support-pyramid.png";
import aiDiagram from "../../assets/ai-operations-diagram.png";
import cdpDiagram from "../../assets/cdp-foundation-dark.png";
import batboxSuiteRevenueFlow from "../../assets/batbox-suite-revenue-flow.png";
import platformShiftImage from "../../assets/platform-shift-dna.png";
import strategicPivotImage from "../../assets/strategic-pivot-diagram.png";
import batboxSuiteOverview from "../../assets/batbox-suite-overview.png";
import jumbotronImage from "../../assets/jumbotron.png";
import analyticsDashboard from "../../assets/analytics-dashboard.png";
import batboxSuiteImage from "../../assets/batbox_suite.png";
import venuesImage from "../../assets/superadmin-venues.png";
import sizzleReelCover from "../../assets/sizzle-reel-cover.png";
import stadiumSequenceCover from "../../assets/stadium-sequence-cover.png";
import venusStadiumCover from "../../assets/venus-stadium-cover.png";
import moonStadiumCover from "../../assets/moon-stadium-cover.png";
import batboxEcosystemImage from "../../assets/batbox-ecosystem.png";
import kioskImage from "../../assets/52fbef4d4f0507caf930524ddaf00ae7a362d968.png";
import ratingImage from "../../assets/ccbf243e976ecc624a525a48a748fabfe54f2b15.png";
import astronautsImage from "../../assets/e6138832baf9743f8d6aed63f08a44ea4dd44a75.png";
import calendarViewImg from "../../assets/8d0bc9c05ef6ec412fc7b17c843514d63545f860.png";
import listViewImg from "../../assets/b7ff3bde360e3abeffbce9cb25d6df57d8a724b9.png";

// Import all videos
import batboxSuiteVideoB from "../../assets/BatboxSuite_B.mp4";
import adminPanelsVideo from "../../assets/batbox-admin-panels.mp4";
import sizzleReelVideo from "../../assets/Sizzle Reel.mp4";
import stadiumSequenceVideo from "../../assets/Stadium_Sequence.mp4";
import heroMomentVideo from "../../assets/Hero_Moment_Concept_02b_30s (1).mp4";
import heroMoment03Video from "../../assets/Hero_Moment_Concept_03 (1).mp4";
import batboxSuiteVideoA from "../../assets/BatboxSuite_A.mp4";

const allImages = [
  batboxLogo,
  phonesImage,
  pyramidImage,
  aiDiagram,
  cdpDiagram,
  batboxSuiteRevenueFlow,
  platformShiftImage,
  strategicPivotImage,
  batboxSuiteOverview,
  jumbotronImage,
  analyticsDashboard,
  batboxSuiteImage,
  venuesImage,
  sizzleReelCover,
  stadiumSequenceCover,
  venusStadiumCover,
  moonStadiumCover,
  batboxEcosystemImage,
  kioskImage,
  ratingImage,
  astronautsImage,
  calendarViewImg,
  listViewImg,
];

const allVideos = [
  batboxSuiteVideoB,
  adminPanelsVideo,
  sizzleReelVideo,
  stadiumSequenceVideo,
  heroMomentVideo,
  heroMoment03Video,
  batboxSuiteVideoA,
];

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");

  useEffect(() => {
    const totalAssets = allImages.length + allVideos.length;
    let loadedAssets = 0;

    const updateProgress = () => {
      loadedAssets++;
      const newProgress = Math.round((loadedAssets / totalAssets) * 100);
      setProgress(newProgress);
      
      if (loadedAssets === totalAssets) {
        setLoadingText("Ready!");
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    };

    // Preload images
    setLoadingText("Loading images...");
    allImages.forEach((src) => {
      const img = new Image();
      img.onload = updateProgress;
      img.onerror = updateProgress; // Continue even if image fails
      img.src = src;
    });

    // Preload videos (just metadata, not full video)
    setLoadingText("Loading media...");
    allVideos.forEach((src) => {
      const video = document.createElement("video");
      video.preload = "metadata";
      video.onloadedmetadata = updateProgress;
      video.onerror = updateProgress; // Continue even if video fails
      video.src = src;
    });
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo/Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 
            className="text-4xl font-bold tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Batbox Presentation
          </h1>
        </motion.div>

        {/* Loading Animation */}
        <div className="relative w-64 h-64 mb-8">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-500/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Middle ring */}
          <motion.div
            className="absolute inset-4 rounded-full border-2 border-purple-500/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Inner ring with progress */}
          <motion.div
            className="absolute inset-8 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, #06b6d4 ${progress * 3.6}deg, transparent ${progress * 3.6}deg)`,
              opacity: 0.3
            }}
          />
          
          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                className="text-5xl font-bold text-white"
                key={progress}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {progress}%
              </motion.span>
            </motion.div>
          </div>

          {/* Orbiting dots */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: i === 0 ? '#06b6d4' : i === 1 ? '#a855f7' : '#ec4899',
                boxShadow: `0 0 20px ${i === 0 ? '#06b6d4' : i === 1 ? '#a855f7' : '#ec4899'}`,
                top: '50%',
                left: '50%',
                transformOrigin: `${-80 - i * 20}px 0px`,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-80 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #06b6d4, #a855f7, #ec4899)',
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Loading text */}
        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {loadingText}
        </motion.p>
      </div>
    </motion.div>
  );
};
