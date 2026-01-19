import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Nagtoll",
    category: "Solana Ecosystem",
    desc: "UPI for Solana. Secure, Fast, Decentralized.",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000",
    color: "#0a0a0a"
  },
  {
    title: "Rust Core",
    category: "Architecture",
    desc: "High performance microservices architecture.",
    img: "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1000",
    color: "#111"
  },
  {
    title: "Venedra Pay",
    category: "FinTech",
    desc: "Cross-border payments on-chain.",
    img: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=1000",
    color: "#050505"
  }
];

const Projects = () => {
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

    // Project cards parallax effect
    gsap.utils.toArray(".project-card").forEach((card) => {
      gsap.fromTo(card.querySelector("img"), 
        { scale: 1.2 }, 
        {
          scale: 1,
          scrollTrigger: {
            trigger: card,
            containerAnimation: pin,
            start: "left right",
            end: "right left",
            scrub: true,
          }
        }
      );
    });

    return () => {
      pin.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="overflow-hidden bg-[#0a0a0a]" ref={triggerRef}>
      <div ref={sectionRef} className="h-screen flex flex-row items-center will-change-transform">
        
        {/* Intro Slide */}
        <div className="h-screen w-screen flex-shrink-0 flex flex-col justify-center px-10 md:px-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.4, y: 0 }}
            className="text-[12px] uppercase tracking-[0.8em] mb-4 font-bold text-white"
          >
            Curated Portfolio
          </motion.p>
          <h2 className="text-[12vw] font-['Playfair_Display'] font-black uppercase italic leading-none text-white/90">
            Selected <br /> <span className="not-italic text-[15vw]">Works</span>
          </h2>
          <div className="mt-10 w-32 h-[1px] bg-white/20"></div>
        </div>

        {/* Project Slides */}
        {projects.map((project, index) => (
          <div key={index} className="h-screen w-screen flex-shrink-0 flex items-center justify-center px-10 md:px-20 relative">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="project-card group relative w-full md:w-[75vw] h-[75vh] bg-zinc-900/50 rounded-[40px] overflow-hidden border border-white/5 flex flex-col md:flex-row shadow-2xl"
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden relative">
                <img 
                  src={project.img} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  alt={project.title} 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-between bg-zinc-950">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 font-bold">0{index + 1} / 03</span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-white/60 border border-white/20 px-3 py-1 rounded-full">{project.category}</span>
                  </div>
                  <h3 className="text-5xl md:text-8xl font-['Playfair_Display'] font-bold mt-10 mb-6 tracking-tighter text-white">
                    {project.title}
                  </h3>
                  <p className="text-lg text-white/50 max-w-sm font-light leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <motion.button 
                  whileHover={{ gap: "24px" }}
                  className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-bold text-white group-hover:text-blue-400 transition-colors"
                >
                  Explore Case Study <span className="text-xl">→</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Ghost Background Number */}
            <span className="absolute bottom-10 right-20 text-[25vw] font-black text-white/[0.02] pointer-events-none select-none">
              0{index + 1}
            </span>
          </div>
        ))}

        {/* Closing Slide */}
        <div className="h-screen w-screen flex-shrink-0 flex flex-col items-center justify-center text-center">
            <h3 className="text-5xl font-['Playfair_Display'] italic text-white/20 italic">Next Billion Users...</h3>
            <button className="mt-10 px-10 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-transparent hover:text-white border border-white transition-all">
                Let's Build Together
            </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;