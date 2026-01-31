import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Twitter, Linkedin, Mail, Shield, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ExecutiveFooter = () => {
  const bigTextRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Kinetic Text Parallax - Slow, heavy movement for premium feel
      gsap.fromTo(bigTextRef.current, 
        { x: "-5%", opacity: 0 },
        { 
          x: "2%", 
          opacity: 0.04, 
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const links = {
    expertise: ["Product Strategy", "System Architecture", "AI Optimization", "Growth Analysis"],
    ventures: ["Vbizgro", "Skill2Hire", "VDOAds", "Ecoavenstra"]
  };

  return (
    <footer 
      ref={containerRef} 
      className="relative bg-[#050505] text-white pt-48 pb-12 px-6 md:px-24 overflow-hidden border-t border-white/5 font-sans"
    >
      
      {/* --- MAIN CALL TO ACTION --- */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
        <div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-[1px] bg-blue-500/50"></div>
            <span className="text-[10px] uppercase tracking-[0.8em] text-white/40 font-bold">The Final Chapter</span>
          </motion.div>
          
          <h2 className="text-[10vw] md:text-[7vw] font-serif leading-[0.85] mb-12 tracking-tight">
            Ready to <br /> 
            <span className="italic font-light text-white/80">Scale</span> your <br /> 
            <span className="font-bold underline decoration-[1px] underline-offset-[12px] decoration-white/20">Legacy?</span>
          </h2>

          <div className="flex flex-wrap gap-6 mt-16">
            <button className="group flex items-center gap-3 px-10 py-5 bg-white text-black text-[10px] uppercase font-black tracking-[0.4em] rounded-full hover:bg-transparent hover:text-white border border-white transition-all duration-500">
              Initiate Project
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
            </button>
            <button className="px-10 py-5 bg-transparent text-white text-[10px] uppercase font-black tracking-[0.4em] rounded-full border border-white/10 hover:border-white transition-all duration-500">
              Download Dossier
            </button>
          </div>
        </div>

        {/* --- NAVIGATION GRID --- */}
        <div className="grid grid-cols-2 gap-12 border-l border-white/5 pl-0 lg:pl-20">
          <div className="space-y-10">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-white/20">Core Pillars</h4>
            <ul className="space-y-5">
              {links.expertise.map((item) => (
                <li key={item} className="group flex items-center text-lg font-serif italic text-white/60 hover:text-white transition-all cursor-pointer">
                  <span className="w-0 group-hover:w-4 h-[1px] bg-blue-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-10">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-white/20">Active Ventures</h4>
            <ul className="space-y-5">
              {links.ventures.map((item) => (
                <li key={item} className="group flex items-center text-lg font-serif italic text-white/60 hover:text-white transition-all cursor-pointer">
                  <span className="w-0 group-hover:w-4 h-[1px] bg-blue-500 mr-0 group-hover:mr-3 transition-all duration-300"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* --- DATA STRIP --- */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 py-16 border-y border-white/5 gap-10">
        <div className="flex items-center gap-4">
            <div className="p-4 bg-white/5 rounded-full border border-white/5 group hover:border-white/20 transition-colors">
                <Mail size={18} className="text-white/60"/>
            </div>
            <div>
                <p className="text-[8px] uppercase tracking-widest text-white/30 mb-1">Primary Liaison</p>
                <p className="text-sm font-light tracking-wide hover:text-blue-400 cursor-pointer transition-colors">partnerships@venendra.com</p>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <div className="p-4 bg-white/5 rounded-full border border-white/5">
                <Shield size={18} className="text-white/60"/>
            </div>
            <div>
                <p className="text-[8px] uppercase tracking-widest text-white/30 mb-1">Protocol Status</p>
                <p className="text-sm font-light flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> 
                    Active & Available
                </p>
            </div>
        </div>
        <div className="flex justify-start md:justify-end items-center gap-10">
            <Linkedin className="text-white/20 hover:text-white transition-all cursor-pointer hover:-translate-y-1" size={22}/>
            <Twitter className="text-white/20 hover:text-white transition-all cursor-pointer hover:-translate-y-1" size={22}/>
            <Github className="text-white/20 hover:text-white transition-all cursor-pointer hover:-translate-y-1" size={22}/>
        </div>
      </div>

      {/* --- LEGAL STRIP --- */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center pt-12 text-[9px] uppercase tracking-[0.6em] font-bold text-white/20">
        <p>© 2026 VENENDRA KUMAR. ARCHITECTING DIGITAL DOMINANCE.</p>
        <div className="flex gap-10 mt-6 md:mt-0">
            <span className="hover:text-white transition-colors cursor-pointer border-b border-transparent hover:border-white/20 pb-1">Privacy Protocol</span>
            <span className="hover:text-white transition-colors cursor-pointer border-b border-transparent hover:border-white/20 pb-1">Terms of Engagement</span>
        </div>
      </div>

      {/* --- KINETIC BACKGROUND TEXT --- */}
      <h2 
        ref={bigTextRef}
        className="absolute -bottom-16 left-0 text-[28vw] leading-none font-black tracking-tighter pointer-events-none select-none italic transition-all duration-700"
        style={{ WebkitTextStroke: '1px rgba(255,255,255,0.03)', color: 'transparent' }}
      >
        VENENDRA
      </h2>
    </footer>
  );
};

export default ExecutiveFooter;