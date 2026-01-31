import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layout, BarChart3, Users2, Zap, Target, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FounderAbout = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text Scrub Reveal (The 'Wash' Effect)
      const words = textRef.current.querySelectorAll(".word");
      gsap.fromTo(words, 
        { color: "rgba(0,0,0,0.1)", y: 10 },
        {
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 40%",
            scrub: 0.5,
          },
          color: "rgba(0,0,0,1)",
          y: 0,
          stagger: 0.05,
          ease: "power2.out"
        }
      );

      // 2. Parallax Image Entrance
      gsap.from(".image-reveal", {
        scrollTrigger: {
          trigger: ".image-reveal",
          start: "top bottom",
          scrub: true,
        },
        scale: 1.2,
        y: 100,
      });

      // 3. Horizontal Line Growth
      gsap.from(".accent-line", {
        scrollTrigger: {
          trigger: ".accent-line",
          start: "top 90%",
        },
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.5,
        ease: "expo.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const content = "Engineering is the foundation, but strategy is the structure. I occupy the critical space between high-performance product engineering and market-dominant growth. I don't just build software; I architect ecosystems where technical precision meets cross-functional business intelligence.";

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[#F9F9F9] text-black py-40 px-6 md:px-24 overflow-hidden">
      
      {/* --- TOP HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-8">
        <div className="max-w-sm">
          <div className="accent-line w-20 h-[2px] bg-black mb-6"></div>
          <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-40">The Executive Summary</p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-4xl font-['Playfair_Display'] italic opacity-10">12+ Years of Vertical Growth</p>
        </div>
      </div>

      {/* --- MAIN PHILOSOPHY (SCROLL REVEAL) --- */}
      <div className="max-w-6xl">
        <h2 ref={textRef} className="text-[4.5vw] md:text-[3.5vw] leading-[1.1] font-['Playfair_Display'] font-medium tracking-tight">
          {content.split(" ").map((word, i) => (
            <span key={i} className="word inline-block mr-[0.3em] transition-colors duration-500">
              {word}
            </span>
          ))}
        </h2>
      </div>

      {/* --- EXPERTISE GRID (The "Founders Portfolio" Twist) --- */}
      <div className="mt-48 grid grid-cols-1 md:grid-cols-3 gap-1px bg-black/5 border-y border-black/5">
        
        {/* Column 1: Engineering */}
        <div className="bg-[#F9F9F9] p-12 space-y-6 hover:bg-white transition-colors duration-500 group">
          <Zap className="text-black/20 group-hover:text-black transition-colors" size={24} />
          <h3 className="text-xs uppercase tracking-widest font-black">Product Engineering</h3>
          <p className="text-sm leading-relaxed text-black/60 font-light">
            Building scalable Web2 infrastructures with a focus on high-concurrency and data integrity. Product engineering is where we turn theory into a market-ready weapon.
          </p>
        </div>

        {/* Column 2: Strategy */}
        <div className="bg-[#F9F9F9] p-12 space-y-6 hover:bg-white transition-colors duration-500 group border-x border-black/5">
          <Target className="text-black/20 group-hover:text-black transition-colors" size={24} />
          <h3 className="text-xs uppercase tracking-widest font-black">Market Analysis</h3>
          <p className="text-sm leading-relaxed text-black/60 font-light">
            Leveraging business analysis and digital marketing to ensure the product doesn't just exist—it dominates. Managing cross-functional channel partners for global reach.
          </p>
        </div>

        {/* Column 3: Collaboration */}
        <div className="bg-[#F9F9F9] p-12 space-y-6 hover:bg-white transition-colors duration-500 group">
          <Users2 className="text-black/20 group-hover:text-black transition-colors" size={24} />
          <h3 className="text-xs uppercase tracking-widest font-black">Executive Leadership</h3>
          <p className="text-sm leading-relaxed text-black/60 font-light">
            The art of collaboration. Leading engineering teams and marketing channels through a single, unified product vision.
          </p>
        </div>
      </div>

      {/* --- THE VISUAL ANCHOR --- */}
      <div className="mt-32 relative w-full h-[60vh] overflow-hidden rounded-sm">
        <img 
          className="image-reveal w-full h-full object-cover grayscale contrast-125"
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
          alt="Modern Architecture" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F9F9F9] via-transparent to-transparent"></div>
        <div className="absolute bottom-10 left-10">
            <span className="text-[8px] uppercase tracking-[0.8em] font-bold text-black/40">Ecosystem Architectural Perspective // 2026</span>
        </div>
      </div>

      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute left-[-5%] bottom-[10%] text-[20vw] font-black opacity-[0.02] pointer-events-none select-none">
        FOUNDER
      </div>

    </section>
  );
};

export default FounderAbout;