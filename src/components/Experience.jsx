import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Ecoavenstra Hr Infotech",
    role: "Software Engineer",
    period: "2025 - Present",
    desc: "Developing responsive, user-centric interfaces for hiring and marketing platforms using MERN stack. Optimized performance and accessibility through clean design systems.",
    skills: ["React.js", "Node.js", "GenAI", "Tailwind CSS"]
  },
  {
    company: "Ecoavenstra Hr Infotech",
    role: "Frontend Engineer",
    period: "2024 - 2025",
    desc: "Implemented UI for cancer care platforms and advertising campaign listings. Collaborated cross-functionally to deliver scalable, maintainable code.",
    skills: ["Redux", "REST APIs", "Data Structures", "Agile"]
  },
  {
    company: "Minzor",
    role: "Frontend Developer",
    period: "2020 - 2022",
    desc: "Built responsive web apps. Focused on clean, reusable code for fast, user-friendly interfaces. Collaborated in Agile sprints and code reviews.",
    skills: ["JavaScript", "Git", "Responsive Design", "React"]
  },
  {
    company: "Vbizgro",
    role: "Founder",
    period: "2019 - 2022",
    desc: "Built and scaled a digital agency delivering end-to-end brand strategy and website design. Led creative direction and marketing campaigns.",
    skills: ["Entrepreneurship", "Strategy", "Leadership", "Marketing"]
  },
  {
    company: "Target Point",
    role: "Founder",
    period: "2014 - 2015",
    desc: "Led academic operations at Target Point Coaching Institute, overseeing quality instruction and student success initiatives.",
    skills: ["Team Management", "Operations", "Marketing"]
  }
];

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".exp-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "expo.out"
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-40 px-6 md:px-20 bg-[#0a0a0a] text-white">
      
      {/* --- SECTION HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-32 border-b border-white/10 pb-20">
        <div className="max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.8em] text-white/30 mb-6 font-bold">Career Path</p>
          <h2 className="text-7xl md:text-9xl font-['Playfair_Display'] italic">
            Experi<span className="not-italic font-bold">ence</span>
          </h2>
        </div>
        <div className="mt-10 md:mt-0">
          <p className="text-white/40 max-w-[280px] text-sm leading-relaxed font-light">
            A decade of evolution from business leadership to deep-tech engineering.
          </p>
        </div>
      </div>

      {/* --- TIMELINE LIST --- */}
      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <div key={i} className="exp-item group relative border-b border-white/5 py-16 md:py-24 hover:bg-white/[0.02] transition-colors duration-500">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start px-4">
              
              {/* Year Column */}
              <div className="md:col-span-2">
                <span className="text-xl font-['Playfair_Display'] italic text-white/30 group-hover:text-white transition-colors">
                  {exp.period}
                </span>
              </div>

              {/* Role & Company Column */}
              <div className="md:col-span-5">
                <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-2">
                  {exp.role}
                </h3>
                <p className="text-lg text-blue-400 font-medium uppercase tracking-widest text-[12px]">
                  {exp.company}
                </p>
              </div>

              {/* Description & Skills Column */}
              <div className="md:col-span-5 flex flex-col justify-between h-full">
                <p className="text-white/50 text-base md:text-lg font-light leading-relaxed mb-8">
                  {exp.desc}
                </p>
                
                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, index) => (
                    <span key={index} className="text-[10px] uppercase tracking-widest px-3 py-1 border border-white/10 rounded-full bg-white/5 group-hover:border-white/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Subtle Animated Line on Hover */}
            <motion.div 
              className="absolute bottom-0 left-0 h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-700 ease-in-out"
            />
          </div>
        ))}
      </div>

      {/* --- BACKGROUND DECOR --- */}
      <div className="mt-40 flex justify-center opacity-10">
        <h4 className="text-[15vw] font-black uppercase tracking-tighter select-none">History</h4>
      </div>

    </section>
  );
};

export default Experience;