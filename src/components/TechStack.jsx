import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const skills = [
  { cat: "Languages", items: ["Rust", "TypeScript", "C++", "Go"], color: "from-orange-500/20" },
  { cat: "Blockchain", items: ["Solana", "Anchor", "Smart Contracts", "Web3.js"], color: "from-purple-500/20" },
  { cat: "Frontend", items: ["React", "Next.js", "Tailwind", "GSAP"], color: "from-blue-500/20" },
  { cat: "Backend", items: ["Node.js", "PostgreSQL", "Redis", "Docker"], color: "from-green-500/20" }
];

const TechStack = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background items reveal
      gsap.from(".skill-box", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-40 px-6 md:px-20 bg-[#080808] text-white overflow-hidden relative">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.8em] text-white/30 mb-4 font-bold">Capabilities</p>
            <h2 className="text-6xl md:text-8xl font-['Playfair_Display'] italic font-light italic">
              Tech <span className="not-italic font-bold">Arsenal</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-[300px] text-right text-sm font-light leading-relaxed">
            Building high-performance decentralized systems with a focus on security and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`skill-box group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 backdrop-blur-xl overflow-hidden`}
            >
              {/* Animated Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-12">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-black">{skill.cat}</h3>
                  <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white group-hover:shadow-[0_0_10px_#fff] transition-all"></div>
                </div>

                <ul className="space-y-4">
                  {skill.items.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      whileHover={{ x: 10 }}
                      className="text-2xl font-['Inter'] font-light tracking-tight flex items-center gap-3 cursor-default"
                    >
                      <span className="text-white/10 group-hover:text-white/30 transition-colors font-mono text-sm">0{idx + 1}</span>
                      <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/40 transition-all">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Decorative Corner Line */}
              <div className="absolute top-0 right-0 w-20 h-[1px] bg-white/10 group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute -bottom-20 -left-10 text-[20vw] font-black text-white/[0.01] pointer-events-none uppercase">
        Stack
      </div>
    </section>
  );
};

export default TechStack;