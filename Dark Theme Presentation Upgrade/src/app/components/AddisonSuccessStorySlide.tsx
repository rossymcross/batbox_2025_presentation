import React, { useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import ratingImage from "../../assets/ccbf243e976ecc624a525a48a748fabfe54f2b15.png";
import { ArrowRight, Star } from "lucide-react";

interface AddisonSuccessStorySlideProps {
  onNext: () => void;
  onPrev: () => void;
}

const testimonials = [
  { 
    text: "This place is basically Topgolf but for baseball, and that's the best way to describe it.", 
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
    text: "Absolutely incredible! All 6 of my kids enjoyed it. I'll come back AGAIN AND AGAIN!",
    author: "Joshua Feuerstein"
  }
];

const leftColumn = [testimonials[0], testimonials[1], testimonials[2], testimonials[3], testimonials[9]];
const rightColumn = [testimonials[4], testimonials[5], testimonials[6], testimonials[7], testimonials[8]];

const TestimonialCard = ({ text, author }: { text: string, author: string }) => (
  <div
    className="bg-gradient-to-br from-[#0c0c0e] to-[#151518] backdrop-blur-sm border border-white/20 p-5 rounded-2xl mb-4 text-left relative group hover:border-emerald-500/40 transition-all duration-300 cursor-default flex-shrink-0"
    style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
  >
    {/* Accent bar */}
    <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-emerald-500/50 to-transparent rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
    
    {/* Hover glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
      style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.08), transparent 70%)'
      }}
    />
    
    <div className="relative z-10">
      {/* 5 Star Rating */}
      <div className="flex gap-0.5 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-white text-base leading-relaxed mb-3 font-inter">"{text}"</p>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-600 flex items-center justify-center text-[10px] font-bold shadow-lg" style={{ boxShadow: '0 0 10px rgba(16, 185, 129, 0.4)' }}>
          {author.charAt(0)}
        </div>
        <span className="text-xs font-bold text-gray-200 uppercase tracking-wider">{author}</span>
      </div>
    </div>
  </div>
);

// Scrolling marquee component
const ScrollingColumn = ({ items, direction = "up", speed = 25 }: { items: typeof testimonials, direction?: "up" | "down", speed?: number }) => {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];
  
  return (
    <div className="relative h-full overflow-hidden">
      {/* Gradient masks for smooth fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex flex-col"
        animate={{
          y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"]
        }}
        transition={{
          y: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }
        }}
      >
        {duplicatedItems.map((t, i) => (
          <TestimonialCard key={`${t.author}-${i}`} {...t} />
        ))}
      </motion.div>
    </div>
  );
};

export const AddisonSuccessStorySlide: React.FC<AddisonSuccessStorySlideProps> = ({ onNext, onPrev }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightGradient = useMotionTemplate`radial-gradient(circle 700px at ${mouseX}px ${mouseY}px, rgba(16, 185, 129, 0.05), transparent 70%)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.code === "Space") {
        onNext();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrev]);

  return (
    <div className="w-screen h-screen bg-[#050505] text-white overflow-hidden relative flex flex-col">
      <style>{`
        /* Hide scrollbar for clean look */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Radial Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.12, 0.2, 0.12],
            x: [0, 60, 0],
            y: [0, -40, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.18, 0.1],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute bottom-[15%] right-[15%] w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
            filter: 'blur(90px)'
          }}
        />
      </div>

      {/* Mouse-Following Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlightGradient }}
      />

      {/* Noise Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.4) 100%)'
        }}
      />

      <div className="relative z-10 w-full h-full max-w-[1600px] mx-auto flex gap-8 p-8 items-center font-inter">
        
        {/* Left Column Testimonials - Scrolling Up */}
        <div className="hidden lg:block w-1/4 h-full">
          <ScrollingColumn items={leftColumn} direction="up" speed={30} />
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center text-center px-4 z-30">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <span className="px-6 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 text-emerald-400 backdrop-blur-md text-sm font-bold tracking-[0.15em] uppercase relative overflow-hidden">
              <motion.div
                className="absolute inset-0 -translate-x-full"
                animate={{
                  translateX: ['100%', '200%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 2
                }}
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.2), transparent)'
                }}
              />
              <span className="relative z-10">Ongoing Success Story</span>
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-[-0.02em] leading-[1.1]"
            style={{ textShadow: '0 4px 40px rgba(16, 185, 129, 0.15)' }}
          >
            Batbox Addison and Virtual Dugout
            <br />
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500"
              style={{ textShadow: '0 0 80px rgba(16, 185, 129, 0.3)' }}
            >
              A Success Story
            </span>
          </motion.h1>

          {/* Rating Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <div 
              className="bg-gradient-to-br from-[#0c0c0e] to-[#151518] p-6 rounded-2xl border border-white/10 inline-flex flex-col items-center relative"
              style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(234, 179, 8, 0.1)' }}
            >
              <motion.div 
                className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black font-black text-sm shadow-lg"
                animate={{ 
                  y: [0, -8, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ boxShadow: '0 10px 30px rgba(234, 179, 8, 0.5)' }}
              >
                4.6
              </motion.div>
              <img src={ratingImage} alt="4.6 Stars - 137 reviews" className="h-10 w-auto object-contain mb-2" />
              <span className="text-gray-300 text-sm font-bold uppercase tracking-[0.1em]">Google Reviews Rating</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full text-white font-black text-lg transition-all duration-300 flex items-center gap-3 z-50 cursor-pointer pointer-events-auto"
            style={{ boxShadow: '0 0 40px rgba(16, 185, 129, 0.4), 0 10px 40px rgba(0, 0, 0, 0.5)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 60px rgba(16, 185, 129, 0.6), 0 15px 50px rgba(0, 0, 0, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(16, 185, 129, 0.4), 0 10px 40px rgba(0, 0, 0, 0.5)';
            }}
            onClick={(e) => {
              e.stopPropagation();
              window.open('https://takoha-test.com/batbox-analytics/', '_blank');
            }}
          >
            <span>View all Batbox Data</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </motion.button>

        </div>

        {/* Right Column Testimonials - Scrolling Down */}
        <div className="hidden lg:block w-1/4 h-full">
          <ScrollingColumn items={rightColumn} direction="down" speed={35} />
        </div>

      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/20 rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px rgba(16, 185, 129, 0.4)'
          }}
          animate={{
            y: [0, -120, 0],
            opacity: [0, 0.7, 0],
            scale: [0, 1.8, 0]
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

    </div>
  );
};
