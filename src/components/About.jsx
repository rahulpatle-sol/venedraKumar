import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = textRef.current.querySelectorAll(".about-char");
      
      // Text Reveal Animation (Opacity + Blur + Movement)
      gsap.fromTo(chars, 
        { 
          opacity: 0.1, 
          filter: "blur(10px)",
          y: 20 
        },
        {
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 1,
          },
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          color: "#1a1a1a",
          stagger: 0.05,
          ease: "power2.out"
        }
      );

      // Lines Growth Animation
      gsap.from(".about-line", {
        scrollTrigger: {
          trigger: ".about-line",
          start: "top 90%",
        },
        scaleX: 0,
        duration: 1.5,
        stagger: 0.3,
        transformOrigin: "left",
        ease: "expo.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const text = "I am a Tech Leader & Blockchain Architect specializing in the Solana ecosystem. I focus on building high-performance systems that bridge the gap between complex backend logic and seamless user experiences.";

  return (
    <section ref={containerRef} className="min-h-screen bg-[#ffffff] py-32 px-6 md:px-20 flex flex-col justify-center relative">
      
      {/* Decorative Label */}
      <div className="flex items-center gap-4 mb-16 overflow-hidden">
        <div className="about-line w-12 h-[1px] bg-black"></div>
        <p className="text-[10px] uppercase tracking-[0.6em] opacity-60 font-black font-['Inter']">
          The Visionary Perspective
        </p>
      </div>

      {/* Main Typography Area */}
      <h2 ref={textRef} className="text-[4.5vw] md:text-[3.8vw] leading-[1.1] font-['Playfair_Display'] font-medium tracking-tight text-[#e0e0e0]">
        {text.split("").map((char, i) => (
          <span key={i} className="about-char inline-block whitespace-pre transition-all">
            {char}
          </span>
        ))}
      </h2>

      {/* Stats / Info Grid */}
      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-black/5 pt-12">
        
        <div className="space-y-4">
          <p className="text-[11px] uppercase font-black tracking-widest opacity-30">Core Philosophy</p>
          <div className="about-line w-full h-[1px] bg-black/10 mb-4"></div>
          <p className="text-xl font-['Playfair_Display'] italic leading-relaxed text-[#333]">
            "Scalability is not an option, it's a requirement. I build for the next billion users."
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-[11px] uppercase font-black tracking-widest opacity-30">Expertise</p>
          <div className="about-line w-full h-[1px] bg-black/10 mb-4"></div>
          <ul className="text-lg font-['Inter'] font-light space-y-2">
            <li className="flex items-center gap-2"> <span className="w-1.5 h-1.5 bg-black rounded-full"></span> Rust & Solana Core</li>
            <li className="flex items-center gap-2"> <span className="w-1.5 h-1.5 bg-black rounded-full"></span> High-load Architecture</li>
            <li className="flex items-center gap-2"> <span className="w-1.5 h-1.5 bg-black rounded-full"></span> Node.js Ecosystem</li>
          </ul>
        </div>

        <div className="relative group overflow-hidden rounded-2xl h-64 md:h-auto">
          <img 
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000" 
            alt="Blockchain Concept"
            className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
             <span className="text-white text-[10px] tracking-widest uppercase border border-white/40 px-4 py-2 backdrop-blur-md">Deep Tech</span>
          </div>
        </div>

      </div>

      {/* Vertical Accent Text */}
      <div className="absolute right-10 top-1/2 -rotate-90 origin-right pointer-events-none opacity-[0.03] select-none">
        <h3 className="text-[15vw] font-black uppercase">Architect</h3>
      </div>

    </section>
  );
};

export default About;