import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Menu, ArrowUpRight } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.5 } });

      // 1. Initial State
      gsap.set(".reveal-text", { y: "110%" });
      gsap.set(".line-grow", { scaleX: 0 });
      gsap.set(imageRef.current, { scale: 1.3, filter: "blur(10px)", opacity: 0 });

      // 2. Animation Sequence
      tl.to(imageRef.current, { scale: 1, filter: "blur(0px)", opacity: 1, duration: 2.5 })
        .to(".reveal-text", { y: "0%", stagger: 0.1 }, "-=2")
        .to(".line-grow", { scaleX: 1, stagger: 0.2, transformOrigin: "left" }, "-=1.5")
        .from(".fade-in", { opacity: 0, y: 20, stagger: 0.1 }, "-=1");

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-[#0f0f0f] text-[#e5e5e5] font-['Inter'] overflow-hidden">
      
      {/* --- GRID LINES (3000cr Vibe) --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="line-grow absolute top-[15%] left-0 w-full h-[1px] bg-white/10"></div>
        <div className="line-grow absolute bottom-[25%] left-0 w-full h-[1px] bg-white/10"></div>
        <div className="line-grow absolute left-[25%] top-0 h-full w-[1px] bg-white/10 hidden md:block"></div>
      </div>

      {/* --- TOP NAVIGATION --- */}
   

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 min-h-[80vh]">
        
        {/* --- LEFT SECTION: ROLE --- */}
        <div className="md:col-span-1 flex flex-col justify-end p-10 border-r border-white/10">
          <div className="fade-in">
            <h2 className="text-3xl font-bold leading-tight uppercase mb-4 tracking-tighter">
              Digital <br /> Product <br /> Designer
            </h2>
          </div>
        </div>

        {/* --- CENTER SECTION: NAME & MAIN IMAGE --- */}
        <div className="md:col-span-2 relative flex flex-col items-center justify-center pt-20">
          
          {/* THE BIG NAME (Luxury Typography) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full text-center pointer-events-none">
            <h1 className="text-[14vw] md:text-[10vw] font-['Playfair_Display'] leading-none italic">
              <div className="overflow-hidden">
                <span className="reveal-text inline-block">Hi, I am</span>
              </div>
              <div className="overflow-hidden -mt-4 md:-mt-8">
                <span className="reveal-text inline-block font-bold not-italic">Venendra</span>
              </div>
            </h1>
          </div>

          {/* MAIN IMAGE (The Mask Effect) */}
          <div className="relative w-[70%] md:w-[50%] aspect-[4/5] overflow-hidden rounded-full shadow-[0_0_100px_rgba(255,255,255,0.05)]">
            <img 
              ref={imageRef}
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
              alt="Profile" 
            />
            {/* Soft Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>

        {/* --- RIGHT SECTION: BIO & CTA --- */}
        <div className="md:col-span-1 flex flex-col justify-between p-10">
          <div className="fade-in space-y-6">
            <div className="flex justify-end">
              <ArrowUpRight className="w-12 h-12 text-white/20" />
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-[200px] ml-auto text-right">
              Passionate UI/UX Designer crafting engaging, user-centered websites, apps, and branding.
            </p>
          </div>

          {/* MINI PREVIEW BOX (Like the reference) */}
          <div className="fade-in mt-auto bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-md">
             <div className="w-full h-32 bg-gray-800 rounded-lg overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] tracking-[0.2em] uppercase">View Projects</span>
                </div>
             </div>
          </div>
        </div>

      </div>

      {/* --- BOTTOM BAR --- */}
      <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-center text-[10px] tracking-[0.3em] uppercase opacity-40">
        <p>© 2026 Portfolio Edition</p>
        <p>Available for Freelance</p>
      </div>

    </section>
  );
};

export default Hero;