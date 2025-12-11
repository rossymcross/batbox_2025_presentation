import React from "react";
import { motion } from "motion/react";
import dugoutImage from "figma:asset/7cf67c667b6b1f5fa4bcdbbe04cce4152b351207.png";

interface VirtualDugoutLaunchSlideProps {
  onNext: () => void;
  onPrev: () => void;
}

export const VirtualDugoutLaunchSlide: React.FC<VirtualDugoutLaunchSlideProps> = ({ onNext, onPrev }) => {
  return (
    <div className="w-screen h-screen bg-[#121316] text-white font-sans overflow-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
      `}</style>

      {/* Navigation Controls */}
      <div className="absolute inset-0 z-20 flex">
        <div className="w-1/4 h-full cursor-default" onClick={onPrev} />
        <div className="w-3/4 h-full cursor-default" onClick={onNext} />
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#121316]">
         {/* Since this is a logo/badge type image, maybe it shouldn't be full screen cover? 
             But the prompt says "like Page 08" which had a full cover background. 
             However, the provided image looks like a logo on a white/transparent background.
             If I stretch it, it might look bad.
             Let's try to display it prominently in the center or use it as a background if it's high res enough.
             Looking at the image thumbnail, it's a logo "The Virtual Dugout".
             
             Actually, usually "chapter pages" in this deck have a full background. 
             If the image is just a logo, maybe I should put it in the center and have a dark background.
             But the user said "It should use this image".
             
             Let's try to use it as a central graphical element rather than a stretched background if it's a logo.
             But if "Page 08" is the reference, Page 08 uses `object-cover`.
             
             Wait, looking at the user's uploaded image, it's a square logo. 
             It won't look good as `object-cover` full screen.
             I will place it centrally or use it as the main visual.
             
             Let's replicate the layout of Page 08 but adapt for a logo image.
             I'll use a subtle background (maybe a blurred version of the logo or just dark) 
             and place the logo nicely, or just text if the image is the logo itself.
             
             Actually, the user said "It should use this image and be titled...".
             If the image IS the logo containing the text "The Virtual Dugout", maybe I don't need to repeat the text as much?
             But the prompt implies I should title it textually too.
             
             Let's compromise: Dark elegant background, Logo image centered/large, Text overlaid or below.
             
             Actually, looking at Page 08 (AddisonLaunchSlide), it has text overlaying an image.
             If I use the logo as the "background image" but with `object-contain` opacity, or just position it.
             
             Let's try to make it look cool. 
             I will use a dark gradient background.
             Display the logo image.
             Display the text title.
         */}
         <div className="absolute inset-0 bg-[#121316]">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[120px]" />
         </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center font-outfit p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 relative"
        >
          <img 
            src={dugoutImage} 
            alt="The Virtual Dugout" 
            className="w-64 md:w-80 h-auto drop-shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6 inline-block"
          >
            <span className="px-6 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 backdrop-blur-md text-lg font-medium tracking-widest uppercase">
              New Chapter
            </span>
          </motion.div>
          
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-none">
            The Virtual Dugout<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-5xl md:text-6xl block mt-4">
              First Batbox B2B Install
            </span>
          </h1>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-2 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mt-8"
          />
        </motion.div>
      </div>
    </div>
  );
};
