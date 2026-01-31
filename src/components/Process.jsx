import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Search, Users, BarChart, ClipboardList, 
  Settings, PenTool, Code, Puzzle, 
  ShieldCheck, Rocket, RefreshCcw 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    phase: "01",
    title: "Intelligence & Discovery",
    steps: ["Client Identification", "Market Growth Mapping"],
    desc: "We identify high-potential partners whose vision aligns with scalable digital transformation. It's about finding the right problem to solve.",
    icon: <Search className="w-6 h-6" />
  },
  {
    phase: "02",
    title: "Strategic Engagement",
    steps: ["Executive Meetups", "Industry Seminars"],
    desc: "Direct engagement through high-level seminars and networking to align on business objectives before a single line of code is written.",
    icon: <Users className="w-6 h-6" />
  },
  {
    phase: "03",
    title: "Business sovereignty",
    steps: ["Deep Research", "Competitor Analysis"],
    desc: "A surgical deep-dive into the business ecosystem. We analyze data points to ensure the product has a clear path to market dominance.",
    icon: <BarChart className="w-6 h-6" />
  },
  {
    phase: "04",
    title: "Blueprint Definition",
    steps: ["Requirement Gathering", "User Personas"],
    desc: "Translating abstract business goals into concrete technical requirements. This is where we define the 'What' and the 'Why'.",
    icon: <ClipboardList className="w-6 h-6" />
  },
  {
    phase: "05",
    title: "Process Architecture",
    steps: ["Scope of Work (SOW)", "Timeline Mapping"],
    desc: "Establishing the legal and operational framework. A comprehensive SOW that eliminates ambiguity and sets the gold standard for delivery.",
    icon: <Settings className="w-6 h-6" />
  },
  {
    phase: "06",
    title: "Systemic Design",
    steps: ["UI/UX Engineering", "System Architecture"],
    desc: "Designing for scale. We create high-fidelity interfaces and robust back-end schemas that can handle the next million users.",
    icon: <PenTool className="w-6 h-6" />
  },
  {
    phase: "07",
    title: "Core Development",
    steps: ["Full-Stack Engineering", "Clean Code Protocol"],
    desc: "Agile sprints where the product comes to life. High-performance, modular development using the modern MERN enterprise stack.",
    icon: <Code className="w-6 h-6" />
  },
  {
    phase: "08",
    title: "System Synthesis",
    steps: ["Third-party Integration", "API Orchestration"],
    desc: "Merging the product with the global ecosystem—connecting payment gateways, CRMs, and AI models seamlessly.",
    icon: <Puzzle className="w-6 h-6" />
  },
  {
    phase: "09",
    title: "Quality Fortification",
    steps: ["UAT Testing", "Security Audits"],
    desc: "Rigorous stress testing. We break things so your users don't have to. Every edge case is documented and mitigated.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    phase: "10",
    title: "Global Deployment",
    steps: ["CI/CD Pipelines", "Market Launch"],
    desc: "The transition from staging to reality. We deploy using high-availability cloud infrastructure for a zero-downtime launch.",
    icon: <Rocket className="w-6 h-6" />
  }
];

const EngineeringProcess = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-40 bg-[#050505] text-white overflow-hidden relative">
      
      {/* Header */}
      <div className="container mx-auto px-6 mb-32">
        <div className="max-w-4xl">
          <p className="text-[10px] uppercase tracking-[0.8em] text-white/30 mb-6 font-bold">Execution Framework</p>
          <h2 className="text-6xl md:text-8xl font-['Playfair_Display'] leading-none">
            The <span className="italic font-light">Product</span> <br /> 
            <span className="font-bold">Lifecycle</span>
          </h2>
        </div>
      </div>

      <div className="relative container mx-auto px-6">
        {/* The Central Animated Line */}
        <div ref={lineRef} className="absolute left-6 md:left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-blue-500 via-white/20 to-transparent origin-top hidden md:block"></div>

        {processSteps.map((step, index) => (
          <div key={index} className={`relative flex flex-col md:flex-row items-center mb-40 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Review Loop Indicator */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-[#050505] border border-white/10 rounded-full z-20 flex items-center justify-center">
               <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_15px_#fff]"></div>
               <div className="absolute inset-0 rounded-full border border-white/5 animate-ping"></div>
            </div>

            {/* Content Box */}
            <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pl-20' : 'md:pr-20'} pl-16 md:pl-0`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-10 rounded-2xl bg-zinc-900/30 border border-white/5 backdrop-blur-sm group hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white group-hover:text-black transition-all">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-['Playfair_Display'] italic opacity-20">0{index + 1}</span>
                </div>

                <h3 className="text-2xl font-bold mb-4 tracking-tight">{step.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {step.steps.map((s, i) => (
                    <span key={i} className="text-[9px] uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full text-white/60">
                      {s}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-white/40 leading-relaxed font-light mb-8">
                  {step.desc}
                </p>

                {/* The "Review Gate" Signature */}
                <div className="pt-6 border-t border-white/5 flex items-center gap-3">
                  <RefreshCcw size={14} className="text-blue-400 animate-spin-slow" />
                  <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Internal Review Gate // Phase Verified</span>
                </div>
              </motion.div>
            </div>

            {/* Empty Spacer for Desktop Layout */}
            <div className="hidden md:block md:w-[45%]"></div>
          </div>
        ))}
      </div>

      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[30vw] font-black text-white/[0.01] pointer-events-none select-none -rotate-90">
        PROCESS
      </div>

    </section>
  );
};

export default EngineeringProcess;