import React from "react";
import { motion } from "motion/react";
import ratingImage from "figma:asset/ccbf243e976ecc624a525a48a748fabfe54f2b15.png";
import { ArrowRight } from "lucide-react";

interface AddisonSuccessStorySlideProps {
  onNext: () => void;
  onPrev: () => void;
}

const testimonials = [
  { 
    text: "This place is basically Topgolf but for baseball, and that’s the best way to describe it.", 
    author: "Matthew Chantelois" 
  },
  { 
    text: "We came in for a corporate event with the team from Embed, and frankly, we were blown away by both the tech and the service. Coming from the FEC industry, I have to give props to the technology here. The simulators are incredibly immersive—the tracking is spot-on, the graphics are crisp...", 
    author: "Josh Chappell" 
  },
  { 
    text: "Went to Batbox with some friends for the first time and it absolutely exceeded all expectations. The atmosphere was electric, the games were nonstop fun, the drinks were flowing, and the food hit the spot.", 
    author: "Patrick Aldridge" 
  },
  { 
    text: "This was our first time and we had a blast! We will definitely be going back! Love the concept… similar to Top Golf but with a baseball twist!", 
    author: "Kirsten White" 
  },
  { 
    text: "Went on the 26th last month and ended up having the time of our lives with a group of my friends!", 
    author: "Kyle Stough" 
  },
  { 
    text: "I love baseball and this was the coolest place to go for baseball and beers!!", 
    author: "Jessica Chipple" 
  },
  { 
    text: "I have zero baseball experience, but visiting Batbox was such an amazing experience! The atmosphere is super fun and welcoming for everyone", 
    author: "Beatriz Guitron" 
  },
  { 
    text: "Saw the place on IG and had no idea what to expect, we played 9-inning game and had an amazing time, it got super competitive and fun. Stayed after to watch the World Series there and the screens are top quality...", 
    author: "Marco Antonio" 
  },
  { 
    text: "Looking for fun? Check out Batbox in Addison! Spend time with family and friends and hit a home run in the digital batting box. Watch sports and complement it with food and drinks.", 
    author: "Tami Hahn" 
  },
  {
    text: "Absolutely incredible! All 6 of my kids enjoyed it. I’ll come back AGAIN AND AGAIN!",
    author: "Joshua Feuerstein"
  }
];

const leftColumn = [testimonials[0], testimonials[1], testimonials[2], testimonials[3], testimonials[9]];
const rightColumn = [testimonials[4], testimonials[5], testimonials[6], testimonials[7], testimonials[8]];

const TestimonialCard = ({ text, author, index, align = "left" }: { text: string, author: string, index: number, align?: "left" | "right" }) => (
  <motion.div
    initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.5 + (index * 0.1), duration: 0.6 }}
    className="bg-[#1E1F23]/80 backdrop-blur-sm border border-white/5 p-5 rounded-2xl mb-4 text-left relative group hover:border-cyan-500/30 transition-colors"
  >
    {/* Chat bubble tail effect using border radius trick or psuedo element? 
        Let's just stick to rounded bubbles for cleanliness, or add a small tail icon. */}
    <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-cyan-500/50 to-transparent rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <p className="text-gray-300 text-sm leading-relaxed mb-3 font-outfit">"{text}"</p>
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-[10px] font-bold">
        {author.charAt(0)}
      </div>
      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{author}</span>
    </div>
  </motion.div>
);

export const AddisonSuccessStorySlide: React.FC<AddisonSuccessStorySlideProps> = ({ onNext, onPrev }) => {
  return (
    <div className="w-screen h-screen bg-[#121316] text-white font-sans overflow-hidden relative flex flex-col">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Raleway:wght@400;700;900&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
        .font-raleway { font-family: 'Raleway', sans-serif; }
        
        /* Hide scrollbar for clean look */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Navigation Controls removed - use arrow buttons only */}

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto flex gap-8 p-8 items-center">
        
        {/* Left Column Testimonials */}
        <div className="hidden lg:flex flex-col w-1/4 h-full justify-center space-y-4 opacity-60 hover:opacity-100 transition-opacity duration-500 mask-image-vertical">
          <div className="overflow-y-auto no-scrollbar py-20 fade-mask">
            {leftColumn.map((t, i) => (
              <TestimonialCard key={i} {...t} index={i} align="left" />
            ))}
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center text-center px-4 font-outfit z-30">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 backdrop-blur-md text-sm font-semibold tracking-widest uppercase">
              Ongoing Success Story
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-raleway tracking-tight"
          >
            Batbox Addison
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              A Success Story
            </span>
          </motion.h1>

          {/* Rating Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-12"
          >
            <div className="bg-[#1E1F23] p-6 rounded-2xl border border-white/5 inline-flex flex-col items-center shadow-2xl relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xs shadow-lg animate-bounce">
                4.6
              </div>
              <img src={ratingImage} alt="4.6 Stars - 137 reviews" className="h-10 w-auto object-contain mb-2" />
              <span className="text-gray-400 text-sm font-medium uppercase tracking-wide">Google Reviews Rating</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-white font-bold text-lg shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all duration-300 flex items-center gap-3 z-50 cursor-pointer pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation(); // Prevent navigation when clicking button
              window.open('https://takoha-test.com/batbox-analytics/', '_blank');
            }}
          >
            <span>View All Batbox Addison Data</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

        </div>

        {/* Right Column Testimonials */}
        <div className="hidden lg:flex flex-col w-1/4 h-full justify-center space-y-4 opacity-60 hover:opacity-100 transition-opacity duration-500">
          <div className="overflow-y-auto no-scrollbar py-20 fade-mask">
            {rightColumn.map((t, i) => (
              <TestimonialCard key={i} {...t} index={i} align="right" />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
