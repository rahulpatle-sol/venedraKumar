import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowUpRight, Shield, Globe, Play, User } from 'lucide-react';

const GlobalExecutiveHero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background slow-zoom for cinematic depth
      gsap.fromTo(".hero-bg", 
        { scale: 1.1, filter: "brightness(0.3)" },
        { scale: 1, filter: "brightness(0.5)", duration: 4, ease: "power2.out" }
      );
      
      // Floating animation for the glass cards
      gsap.to(".glass-card", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full bg-[#030303] text-white overflow-hidden font-sans">
      
      {/* --- CINEMATIC BACKGROUND --- */}
      <div 
        className="hero-bg absolute inset-0 z-0 bg-contain bg-center bg-no-repeat will-change-transform"
        style={{ backgroundImage: `url('/main.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-transparent z-10 opacity-90" />

      <div className="relative z-20 container mx-auto px-6 md:px-16 min-h-screen flex flex-col justify-between py-12">
        
        {/* --- TOP: NAVIGATION & STATUS --- */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <Globe size={16} className="text-blue-400" />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase font-black text-white/40">Global Status</p>
              <p className="text-xs font-bold tracking-widest text-green-500">OPERATIONAL // 2026</p>
            </div>
          </div>
  
        </div>

        {/* --- MAIN BODY: THE FOUNDER GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20">
          
          {/* LEFT: POWER TYPOGRAPHY */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-[9px] uppercase tracking-[0.4em] font-bold">Strategic Architect</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-[10rem] font-bold leading-[0.8] tracking-tighter uppercase"
            >
              VENENDRA <br /> 
              <span className="text-transparent font-light italic" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>
                KUMAR
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-white/60 font-light max-w-xl leading-relaxed"
            >
              Transforming complex high-stakes capital into <span className="text-white border-b border-white/20 italic">seamless digital legacies</span>. 
            </motion.p>

            <div className="flex flex-wrap gap-6 pt-6">
              <a  href="/portfolio" className="group flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-black text-[11px] uppercase tracking-[0.4em] hover:scale-105 transition-transform">
                View Portfolio
                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
              </a>
             
            </div>
          </div>

          {/* RIGHT: THE LUXURY FOUNDER CARD */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Main Portrait Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2 }}
              className="relative w-full max-w-md aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/20 shadow-2xl z-20 group"
            >
              <img 
                ref={imageRef}
                src="/main.png" // Your Photo
                className="w-full h-full object-cover grayscale brightness-110 contrast-125 group-hover:grayscale-0 transition-all duration-1000"
                alt="Venendra Kumar"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Floating Content on Photo */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[8px] uppercase tracking-widest font-bold">Strategy</span>
                  <span className="px-3 py-1 bg-blue-500/40 backdrop-blur-md rounded-full text-[8px] uppercase tracking-widest font-bold">Technology</span>
                </div>
                <h3 className="text-3xl font-bold tracking-tight">Executive Lead</h3>
              </div>
            </motion.div>

            {/* FLOATING GLASS CARD 1: VIDEO PREVIEW */}
            <div className="glass-card absolute -top-10 -right-10 w-48 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 rounded-3xl hidden xl:block z-30 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden mb-3">
                 <img src="/main.png" className="w-full h-24 object-cover opacity-60" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center"><Play size={12} className="text-black fill-current ml-0.5" /></div>
                 </div>
              </div>
              <p className="text-[9px] uppercase tracking-widest text-white/50 mb-1">Architecture</p>
              <p className="text-[10px] font-bold leading-tight">V-Studio Interior Preview</p>
            </div>

            {/* FLOATING GLASS CARD 2: SOCIAL PROOF */}
        

          </div>
        </div>

        {/* --- FOOTER: PROTOCOL --- */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-12 text-white/20 uppercase tracking-[0.5em] font-bold text-[9px]">
          <p>© 2026 VK ARCHITECTS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Protocol</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Engagement</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GlobalExecutiveHero;