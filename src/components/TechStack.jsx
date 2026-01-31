import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Globe, Layers, Terminal } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skillPillars = [
  { 
    cat: "Core Engineering", 
    items: ["MERN Architecture", "Java Enterprise", "Data Structures", "Scalable Systems"], 
    icon: <Cpu size={20} strokeWidth={1} />,
    desc: "Foundational logic designed for peak efficiency and horizontal scalability."
  },
  { 
    cat: "Interface Systems", 
    items: ["React.js", "Tailwind Engineering", "Micro-Interactions", "Responsive Design"], 
    icon: <Globe size={20} strokeWidth={1} />,
    desc: "Engineered user experiences that merge aesthetic precision with functional depth."
  },
  { 
    cat: "AI & Optimization", 
    items: ["Prompt Engineering", "Model Integration", "Algorithm Tuning", "Performance Audits"], 
    icon: <Terminal size={20} strokeWidth={1} />,
    desc: "Leveraging cognitive computing to automate workflows and optimize data throughput."
  },
  { 
    cat: "Governance & Flow", 
    items: ["Agile/Jira", "Git Enterprise", "Postman/API Docs", "SDLC Management"], 
    icon: <Layers size={20} strokeWidth={1} />,
    desc: "Streamlining the bridge between development cycles and market-ready deployments."
  }
];

const TechnicalCapabilities = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal lines like a blueprint
      gsap.from(".grid-line-v", {
        scaleY: 0,
        transformOrigin: "top",
        stagger: 0.2,
        duration: 1.5,
        ease: "power4.inOut",
        scrollTrigger: { trigger: sectionRef.current, start: "top 60%" }
      });

      gsap.from(".capability-card", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 50%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-40 px-6 md:px-24 bg-[#3E4AB4] text-white relative overflow-hidden">
      
      {/* --- BACKGROUND DECOR (Architectural) --- */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="grid-line-v absolute left-1/4 top-0 w-[1px] h-full bg-white/20" />
        <div className="grid-line-v absolute left-2/4 top-0 w-[1px] h-full bg-white/20" />
        <div className="grid-line-v absolute left-3/4 top-0 w-[1px] h-full bg-white/20" />
      </div>

      <div className="relative z-10">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-7xl md:text-9xl font-['Playfair_Display'] leading-[0.8] mb-8">
              Systemic <br /> <span className="italic font-light text-white/40">Intelligence</span>
            </h2>
            <div className="w-24 h-[1px] bg-white/40 mb-8" />
            <p className="text-lg font-light text-white/50 max-w-md leading-relaxed">
              We don't just write code; we architect the digital infrastructure that sustains modern enterprise growth.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2 text-[10px] tracking-[0.6em] uppercase text-white/20 font-bold">
            <span>Tech Stack // 2026</span>
            <span>Founder Edition</span>
          </div>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
          {skillPillars.map((pillar, i) => (
            <div 
              key={i} 
              className="capability-card bg-[#050505] p-12 flex flex-col justify-between group hover:bg-white transition-all duration-700 cursor-crosshair"
            >
              <div>
                <div className="flex justify-between items-center mb-16">
                  <div className="text-white/40 group-hover:text-black transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] tracking-widest text-white/20 group-hover:text-black/30 font-black">
                    V-0{i + 1}
                  </span>
                </div>
                
                <h3 className="text-xs uppercase tracking-[0.4em] text-white/40 group-hover:text-black/40 mb-4 transition-colors">
                  {pillar.cat}
                </h3>
                
                <ul className="space-y-3 mb-12">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="text-2xl font-['Playfair_Display'] italic text-white group-hover:text-black transition-colors leading-none">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm leading-relaxed text-white/30 group-hover:text-black/60 font-light transition-colors">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- FOOTER DECOR --- */}
      <div className="mt-20 flex justify-between items-center opacity-20">
        <div className="text-[8px] uppercase tracking-[1em] font-bold">Cognitive Optimization Enabled</div>
        <div className="text-[8px] uppercase tracking-[1em] font-bold">Standard Enterprise protocol</div>
      </div>

    </section>
  );
};

export default TechnicalCapabilities;