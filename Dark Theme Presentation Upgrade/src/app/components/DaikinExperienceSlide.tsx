import React, { useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";
import sizzleReelCover from "../../assets/sizzle-reel-cover.png";
import sizzleReelVideo from "../../assets/Sizzle Reel_Final B.mp4";
import stadiumSequenceCover from "../../assets/stadium-sequence-cover.png";
import stadiumSequenceVideo from "../../assets/Stadium_Sequence.mp4";
import venusStadiumCover from "../../assets/venus-stadium-cover.png";
import heroMomentVideo from "../../assets/Hero_Moment_Concept_02b_30s (1).mp4";
import moonStadiumCover from "../../assets/moon-stadium-cover.png";
import heroMoment01Video from "../../assets/Hero_Moment_Concept_01.mp4";

interface DaikinExperienceSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

const videos = [
  {
    id: 1,
    thumbnail: moonStadiumCover,
    videoSrc: heroMoment01Video,
    title: "Hero Moments",
    subtitle: "Moon Stadium",
    description: "Epic cinematic hero moments with dramatic camera angles and celebration sequences on the lunar surface"
  },
  {
    id: 2,
    thumbnail: venusStadiumCover,
    videoSrc: heroMomentVideo,
    title: "Hero Moments",
    subtitle: "Venus Stadium",
    description: "Epic cinematic hero moments with dramatic camera angles and celebration sequences in the Venus Stadium"
  },
  {
    id: 3,
    thumbnail: stadiumSequenceCover,
    videoSrc: stadiumSequenceVideo,
    title: "Stadium Sequence",
    subtitle: "Daikin Park Earth",
    description: "Experience the stunning Daikin Park Earth venue with dynamic lighting and immersive crowd atmosphere"
  },
  {
    id: 4,
    thumbnail: sizzleReelCover,
    videoSrc: sizzleReelVideo,
    title: "Sizzle Reel",
    subtitle: "2026 Q1 Preview",
    description: "Experience the future of Batbox gaming with stunning visuals and immersive gameplay"
  }
];

export const DaikinExperienceSlide: React.FC<DaikinExperienceSlideProps> = ({ onNext, onPrev }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = React.useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePreviousVideo = () => {
    setCurrentVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const currentVideo = videos[currentVideoIndex];

  const handlePlayVideo = () => {
    if (currentVideo.videoSrc) {
      setIsVideoPlaying(true);
    }
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Memoize star configurations so they don't jump on re-renders
  const smallStars = useMemo(() => 
    Array.from({ length: 150 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.3,
    })), 
  []);

  const mediumStars = useMemo(() => 
    Array.from({ length: 80 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.6 + 0.4,
    })), 
  []);

  const brightStars = useMemo(() => 
    Array.from({ length: 30 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    })), 
  []);

  return (
    <div className="w-screen h-screen bg-[#050505] text-white p-10 flex flex-col overflow-hidden relative selection:bg-cyan-500/5">
      {/* Deep Space Background with Stars */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0a0a1a] to-[#050510] pointer-events-none" />
      
      {/* Static Stars Layer 1 - Small stars */}
      {smallStars.map((star, i) => (
        <div
          key={`star-small-${i}`}
          className="absolute w-[1px] h-[1px] bg-white rounded-full pointer-events-none"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* Static Medium Stars Layer 2 */}
      {mediumStars.map((star, i) => (
        <div
          key={`star-medium-${i}`}
          className="absolute w-[2px] h-[2px] bg-white rounded-full pointer-events-none"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            opacity: star.opacity,
            boxShadow: '0 0 2px rgba(255, 255, 255, 0.8)'
          }}
        />
      ))}

      {/* Static Bright Stars Layer 3 */}
      {brightStars.map((star, i) => (
        <div
          key={`star-bright-${i}`}
          className="absolute w-[3px] h-[3px] rounded-full pointer-events-none opacity-80"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(200, 220, 255, 0.8) 100%)',
            boxShadow: '0 0 4px rgba(255, 255, 255, 1), 0 0 8px rgba(200, 220, 255, 0.5)'
          }}
        />
      ))}

      {/* Static Distant Planet 1 - Large */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '8%',
          top: '15%',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.4), rgba(120, 60, 200, 0.3), rgba(80, 40, 150, 0.2))',
          boxShadow: '0 0 40px rgba(168, 85, 247, 0.3), inset -20px -20px 40px rgba(0, 0, 0, 0.5)',
          filter: 'blur(1px)',
          opacity: 0.6
        }}
      />

      {/* Static Distant Planet 2 - Medium */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '5%',
          bottom: '20%',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 35%, rgba(6, 182, 212, 0.35), rgba(4, 140, 160, 0.25), rgba(3, 100, 120, 0.15))',
          boxShadow: '0 0 30px rgba(6, 182, 212, 0.25), inset -15px -15px 30px rgba(0, 0, 0, 0.4)',
          filter: 'blur(0.5px)',
          opacity: 0.5
        }}
      />

      {/* Static Distant Planet 3 - Small */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: '25%',
          bottom: '12%',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 40%, rgba(251, 146, 60, 0.3), rgba(200, 110, 40, 0.2), rgba(150, 80, 30, 0.1))',
          boxShadow: '0 0 20px rgba(251, 146, 60, 0.2), inset -10px -10px 20px rgba(0, 0, 0, 0.4)',
          filter: 'blur(0.3px)',
          opacity: 0.45
        }}
      />

      {/* Static Nebula/Galaxy Effect - Top Left */}
      <div
        className="absolute pointer-events-none opacity-40"
        style={{
          top: '5%',
          left: '10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.15) 0%, rgba(120, 60, 200, 0.08) 30%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Static Nebula/Galaxy Effect - Bottom Right */}
      <div
        className="absolute pointer-events-none opacity-35"
        style={{
          bottom: '10%',
          right: '5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.12) 0%, rgba(4, 140, 160, 0.06) 30%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Animated Grid Background - More subtle now */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Static Radial Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[10%] left-[15%] w-[900px] h-[900px] rounded-full opacity-[0.14]"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
        <div
          className="absolute bottom-[15%] right-[10%] w-[800px] h-[800px] rounded-full opacity-[0.11]"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
      </div>


      <div className="relative z-10 w-full h-full flex flex-col font-inter max-w-[1600px] mx-auto">
        {/* Header - Outside Video Frame */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 shrink-0"
        >
          <div className="flex items-center gap-5 mb-2">
            <div 
              className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center transition-transform duration-300 hover:scale-110"
              style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' }}
            >
              <Calendar className="w-7 h-7 text-cyan-400" strokeWidth={2} />
            </div>
            <div>
              <h1 
                className="text-6xl font-black tracking-[-0.02em]"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 4px 40px rgba(6, 182, 212, 0.2)'
                }}
              >
                Daikin Experience
              </h1>
              <p className="text-xl text-gray-300 font-semibold tracking-wide mt-1">First Custom Game • 2026 Development</p>
            </div>
          </div>
        </motion.div>

        {/* Video Carousel Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="flex-1 relative flex flex-col items-center justify-center min-h-0 gap-6"
        >
          {/* Carousel Navigation Arrows - Above Video */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-4 z-30"
          >
            {/* Left Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePreviousVideo();
              }}
              className="w-12 h-12 bg-black/60 border border-white/20 rounded-full backdrop-blur-md flex items-center justify-center text-white hover:bg-black/80 hover:border-cyan-400/60 transition-all duration-300 hover:scale-110 active:scale-95"
              style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)' }}
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
            </button>

            {/* Video Counter */}
            <div className="px-4 py-2 bg-black/60 border border-white/20 rounded-full backdrop-blur-md">
              <span className="text-white font-bold text-sm">
                {currentVideoIndex + 1} / {videos.length}
              </span>
            </div>

            {/* Right Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextVideo();
              }}
              className="w-12 h-12 bg-black/60 border border-white/20 rounded-full backdrop-blur-md flex items-center justify-center text-white hover:bg-black/80 hover:border-cyan-400/60 transition-all duration-300 hover:scale-110 active:scale-95"
              style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)' }}
            >
              <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
            </button>
          </motion.div>

          <div className="relative w-full h-full flex items-center justify-center">
            {/* Video Player Container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVideo.id}
                initial={{ opacity: 0, scale: 0.95, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -50 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full max-w-[1200px] max-h-[650px] rounded-3xl overflow-hidden cursor-pointer group"
                style={{
                  boxShadow: '0 30px 100px rgba(0, 0, 0, 0.7), 0 0 60px rgba(6, 182, 212, 0.2)'
                }}
              >
                {/* Static glowing border effect */}
                <div 
                  className="absolute inset-0 rounded-3xl -z-10 opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(168, 85, 247, 0.3))',
                    filter: 'blur(30px)',
                  }}
                />
                
                {/* Main border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-cyan-500/30 pointer-events-none z-10" />

                {/* Video Thumbnail */}
                <img 
                  src={currentVideo.thumbnail} 
                  alt={currentVideo.title} 
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.65) contrast(1.1)' }}
                />

                {/* Dark overlay for better content visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

                {/* Play Button */}
                <div
                  className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayVideo();
                  }}
                >
                  <div
                    className={`w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/40 flex items-center justify-center relative overflow-hidden transition-transform duration-300 hover:scale-110 active:scale-95 ${currentVideo.videoSrc ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
                    style={{
                      boxShadow: '0 0 40px rgba(6, 182, 212, 0.4), 0 0 80px rgba(6, 182, 212, 0.2)'
                    }}
                  >
                    {/* Play Icon */}
                    <Play 
                      className="w-10 h-10 text-white relative z-10 ml-1" 
                      fill="white"
                      strokeWidth={0}
                    />
                  </div>
                </div>

                {/* Text Inside Video Frame */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-8 z-10"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div
                    className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 backdrop-blur-sm mb-3"
                    style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' }}
                  >
                    <span className="text-cyan-400 font-bold text-sm uppercase tracking-[0.15em]">
                      {currentVideo.subtitle}
                    </span>
                  </div>
                  <h3 className="text-4xl font-black text-white mb-3 tracking-[-0.01em]">
                    {currentVideo.title}
                  </h3>
                  <p className="text-lg text-gray-200 font-medium leading-relaxed max-w-2xl">
                    {currentVideo.description}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Video Indicator Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center justify-center gap-3 mt-6 shrink-0"
        >
          {videos.map((video, index) => (
            <button
              key={video.id}
              onClick={() => setCurrentVideoIndex(index)}
              className="relative transition-transform duration-300 hover:scale-125 active:scale-90"
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentVideoIndex
                    ? 'bg-cyan-400 border-2 border-cyan-400 scale-[1.3]'
                    : 'bg-white/20 border-2 border-white/20 hover:bg-white/40'
                }`}
                style={{
                  boxShadow: index === currentVideoIndex 
                    ? '0 0 20px rgba(6, 182, 212, 0.8)' 
                    : '0 0 0px rgba(6, 182, 212, 0)'
                }}
              />
            </button>
          ))}
        </motion.div>
      </div>


      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && currentVideo.videoSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={handleCloseVideo}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2 }}
              onClick={handleCloseVideo}
              className="absolute top-8 right-8 w-14 h-14 bg-white/10 border border-white/20 rounded-full backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 z-[101]"
              style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)' }}
            >
              <X className="w-7 h-7" strokeWidth={2} />
            </motion.button>

            {/* Video Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 300
              }}
              className="relative w-[90vw] max-w-[1400px] aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow: '0 0 100px rgba(6, 182, 212, 0.3), 0 0 200px rgba(0, 0, 0, 0.8)'
              }}
            >
              <video
                ref={videoRef}
                src={currentVideo.videoSrc}
                className="w-full h-full object-contain bg-black"
                controls
                autoPlay
                playsInline
              />
            </motion.div>

            {/* Video Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-1">{currentVideo.title}</h3>
              <p className="text-gray-400">{currentVideo.subtitle}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
