import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Layers, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ventures = [
  {
    title: "Talent Ecosystems",
    entities: "Skill2Hire / Pro2Hire / Job Portals",
    category: "Human Capital Tech",
    desc: "A full-circle recruitment architecture. From identifying raw talent through Skill2Hire to deploying elite professionals via Pro2Hire, we've built the pipeline for the next generation of industry leaders.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000", // Team/People high-end
    impact: "Streamlining global hiring for 500+ enterprises."
  },
  {
    title: "Vbizgro & VDOAds",
    entities: "Growth Marketing / AdTech",
    category: "Strategic Marketing",
    desc: "Engineered high-conversion digital engines that bridge the gap between brand vision and market dominance. VDOAds leverages data-driven video placement to maximize ROAS in the BFSI and Real Estate sectors.",
    img: "https://images.unsplash.com/photo-1551288049-bbbda546697a?q=80&w=2000", // Data/Growth visual
    impact: "400% average increase in digital lead acquisition."
  },
  {
    title: "Global Commerce",
    entities: "Marketplace / Product Listing / CMS",
    category: "Scalable Infrastructure",
    desc: "Bespoke e-commerce architectures designed for high-concurrency. We don't just build shops; we build robust marketplaces with custom Content Management Systems that give founders absolute control over their digital footprint.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000", // Tech/Clean UI visual
    impact: "Handling $2M+ in monthly transaction volume."
  },
  {
    title: "Social Architecture",
    entities: "Networking Apps / Content Platforms",
    category: "User Connectivity",
    desc: "Developing the next layer of human interaction. Our social networking frameworks focus on low-latency data exchange and intuitive UX, fostering community in a fragmented digital landscape.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000", // Modern social vibe
    impact: "Scalable to 1M+ concurrent active users."
  },
  {
    title: "Vertical Engineering",
    entities: "Ecoavenstra / Run Devs / Architect Engg.",
    category: "Industrial Solutions",
    desc: "Specialized platforms for the physical world. From Ecoavenstra’s sustainability-driven data to architectural engineering portals, we bridge the gap between complex engineering and digital accessibility.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000", // Architecture/Skyscraper
    impact: "Digitizing 15+ years of offline industrial expertise."
  }
];

const VentureGallery = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.to(sectionRef.current, {
      x: () => -(sectionRef.current.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${sectionRef.current.scrollWidth}`,
        invalidateOnRefresh: true,
      }
    });

    return () => pin.kill();
  }, []);

  return (
    <div className="overflow-hidden bg-[#050505]" ref={triggerRef}>
      <div ref={sectionRef} className="h-screen flex flex-row items-center will-change-transform">
        
        {/* --- INTRO SECTION --- */}
        <div className="h-screen w-screen flex-shrink-0 flex flex-col justify-center px-10 md:px-32 relative">
          <div className="absolute top-20 left-32 flex items-center gap-4 opacity-30">
            <div className="w-10 h-[1px] bg-white"></div>
            <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-white">The Industrial Portfolio</span>
          </div>
          
          <h2 className="text-[10vw] font-['Playfair_Display'] leading-[0.9] text-white">
            Proven <br /> <span className="italic text-white/30">Verticals</span>
          </h2>
          
          <p className="mt-12 max-w-lg text-white/40 font-light leading-relaxed text-lg">
            A portfolio of high-performance ventures designed for scalability, market penetration, and industrial digital transformation.
          </p>
        </div>

        {/* --- VENTURE SLIDES --- */}
        {ventures.map((item, index) => (
          <div key={index} className="h-screen w-[90vw] md:w-[85vw] flex-shrink-0 flex items-center justify-center px-6 md:px-20">
            <div className="relative w-full h-[75vh] grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden rounded-sm border border-white/10 group bg-[#0a0a0a]">
              
              {/* IMAGE COLUMN (7/12) */}
              <div className="md:col-span-7 relative overflow-hidden h-64 md:h-full">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  alt={item.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
              </div>

              {/* CONTENT COLUMN (5/12) */}
              <div className="md:col-span-5 p-8 md:p-16 flex flex-col justify-between border-l border-white/5 bg-[#0a0a0a]">
                <div className="space-y-8">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-black">Structure 0{index + 1}</span>
                    <Zap size={16} className="text-white/20" />
                  </div>

                  <div>
                    <h3 className="text-4xl md:text-5xl font-['Playfair_Display'] text-white mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[10px] tracking-widest text-white/40 uppercase mb-6">{item.entities}</p>
                    <p className="text-white/60 font-light leading-relaxed text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-8 border-t border-white/5">
                    <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Key Metric</p>
                    <p className="text-white font-medium italic text-lg tracking-tight">{item.impact}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-8">
                  <button className="flex items-center gap-3 group/btn">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white font-bold group-hover/btn:mr-2 transition-all">View Case Study</span>
                    <ArrowUpRight size={18} className="text-white/40" />
                  </button>
                  <div className="text-[40px] font-['Playfair_Display'] italic text-white/[0.03] font-black select-none">
                    0{index+1}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* --- CLOSING CTA --- */}
        <div className="h-screen w-screen flex-shrink-0 flex flex-col items-center justify-center">
          <div className="relative">
            <h3 className="text-[8vw] font-['Playfair_Display'] text-white/10 italic leading-none text-center">Architecting <br/> Growth</h3>
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap px-12 py-5 bg-white text-black font-bold uppercase tracking-[0.4em] text-[10px] hover:scale-110 transition-transform rounded-full">
              Initiate Consultation
            </button>
          </div>
        </div>
      </div>

      {/* FIXED PROGRESS INDICATOR */}
      <div className="fixed bottom-12 right-12 z-50 flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-[9px] uppercase tracking-widest text-white/40">Market Expansion</span>
            <span className="text-[9px] uppercase tracking-widest text-white/20">Phase 2.0</span>
          </div>
          <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
             <Globe className="text-white/20 animate-pulse" size={16} />
          </div>
      </div>
    </div>
  );
};

export default VentureGallery;