import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, GraduationCap, TrendingUp, Users, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const EntrepreneurJourney = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          snap: 1 / 3, // Snaps to each "chapter"
          anticipatePin: 1,
        },
      }
    );
    return () => pin.kill();
  }, []);

  const ventures = [
    {
      title: "The Genesis",
      subtitle: "Training & Skill Development",
      description: "My journey began with a fundamental obsession: human potential. We didn't just teach skills; we engineered the workforce of tomorrow.",
      stat: "50k+ Lives Impacted",
      icon: <GraduationCap size={32} strokeWidth={1} />
    },
    {
      title: "VB Corp",
      subtitle: "The Diversified Backbone",
      description: "Scaling into BFSI, Real Estate, and Education. We provided the marketing muscle and operational intelligence for industry titans.",
      stat: "Multi-Sector Dominance",
      icon: <Briefcase size={32} strokeWidth={1} />
    },
    {
      title: "Vbizgro",
      subtitle: "The Growth Catalyst",
      description: "Digital transformation isn't an option; it's survival. Vbizgro became the engine that accelerated brands into the digital stratosphere.",
      stat: "Exponential ROI",
      icon: <TrendingUp size={32} strokeWidth={1} />
    },
    {
      title: "The Pipeline",
      subtitle: "Prothire & Skill2Hire",
      description: "Closing the loop. We built a symbiotic ecosystem: Refining raw talent through Skill2Hire and placing elite professionals via Prothire.",
      stat: "Bridging the Gap",
      icon: <Users size={32} strokeWidth={1} />
    }
  ];

  return (
    <div ref={triggerRef} className="overflow-hidden bg-[#06159fc4]">
      <div ref={sectionRef} className="flex flex-row relative h-screen w-[400vw]">
        
        {/* --- CHAPTER 1: INTRO --- */}
        <section className="h-screen w-screen flex flex-col justify-center px-12 md:px-32 relative border-r border-white/5">
          <div className="absolute top-20 left-32">
            <span className="text-[10px] tracking-[0.8em] uppercase text-white/30">The Anthology</span>
          </div>
          <h2 className="text-[8vw] font-['Playfair_Display'] italic text-white leading-tight">
            Building the <br /> 
            <span className="text-white/20 not-italic">Infrastructure of Impact.</span>
          </h2>
          <div className="mt-12 flex items-center gap-8">
            <div className="w-24 h-[1px] bg-white/20"></div>
            <p className="max-w-md text-white/50 font-light leading-relaxed">
              Entrepreneurship is not about starting companies; it’s about solving the deficits of a generation. Here is how I built mine.
            </p>
          </div>
        </section>

        {/* --- VENTURE CHAPTERS --- */}
        {ventures.map((v, i) => (
          <section key={i} className="h-screen w-screen flex items-center justify-center px-12 md:px-32 border-r border-white/5 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              
              <div className="space-y-8">
                <div className="text-white/20">{v.icon}</div>
                <div>
                  <h3 className="text-white/30 text-sm uppercase tracking-[0.4em] mb-2">{v.title}</h3>
                  <h4 className="text-5xl md:text-7xl font-['Playfair_Display'] text-white leading-tight">{v.subtitle}</h4>
                </div>
                <p className="text-lg text-white/40 leading-relaxed max-w-lg">
                  {v.description}
                </p>
                <div className="inline-block px-6 py-3 border border-white/10 rounded-full">
                  <span className="text-[10px] tracking-widest uppercase text-white/60">{v.stat}</span>
                </div>
              </div>

              <div className="relative group">
                 {/* Visual Representation of the Venture */}
                 <div className="aspect-square w-full max-w-md bg-white/[0.02] rounded-3xl border border-white/5 flex items-center justify-center overflow-hidden">
                    <span className="absolute top-10 right-10 text-9xl font-black text-white/[0.03] select-none">0{i+1}</span>
                    <div className="w-1/2 h-1/2 bg-gradient-to-tr from-white/10 to-transparent blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <Target className="text-white/10 group-hover:text-white/40 transition-all duration-700" size={120} strokeWidth={0.5} />
                 </div>
              </div>

            </div>
          </section>
        ))}

      </div>
      
      {/* Scroll Progress Indicator */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <span className="text-[8px] text-white/20 tracking-tighter uppercase">Evolution</span>
        <div className="w-40 h-[1px] bg-white/10 relative">
          <div className="absolute top-0 left-0 h-full bg-white w-1/4 animate-pulse"></div>
        </div>
        <span className="text-[8px] text-white/20 tracking-tighter uppercase">Legacy</span>
      </div>
    </div>
  );
};

export default EntrepreneurJourney;