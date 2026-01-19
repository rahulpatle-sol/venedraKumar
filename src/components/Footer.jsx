import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowUpRight, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const bigTextRef = useRef(null);

  useEffect(() => {
    // Large Background Text Reveal
    gsap.fromTo(bigTextRef.current, 
      { y: 200, opacity: 0 },
      { 
        y: 0, 
        opacity: 0.05, 
        duration: 2, 
        ease: "expo.out",
        scrollTrigger: {
          trigger: bigTextRef.current,
          start: "top 95%",
        }
      }
    );
  }, []);

  const socialLinks = [
    { name: "LinkedIn", icon: <Linkedin size={18} />, url: "#" },
    { name: "Twitter", icon: <Twitter size={18} />, url: "#" },
    { name: "Github", icon: <Github size={18} />, url: "#" },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] text-white pt-40 pb-10 px-6 md:px-20 overflow-hidden">
      
      {/* --- BIG CALL TO ACTION --- */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-40 gap-10">
        <div className="max-w-2xl">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.5, x: 0 }}
            className="text-[10px] uppercase tracking-[0.6em] mb-6 font-bold"
          >
            Project in mind?
          </motion.p>
          <h2 className="text-6xl md:text-8xl font-['Playfair_Display'] italic leading-tight">
            Let’s create something <span className="not-italic font-bold underline decoration-1 underline-offset-8">legendary.</span>
          </h2>
        </div>

        {/* MAGNETIC BUTTON VIBE */}
        <motion.a 
          href="mailto:hello@venendra.com"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-40 h-40 md:w-56 md:h-56 bg-white text-black rounded-full flex flex-col items-center justify-center group transition-colors duration-500 hover:bg-blue-500 hover:text-white"
        >
          <Mail className="mb-2 group-hover:animate-bounce" />
          <span className="text-xs uppercase font-black tracking-widest">Get in touch</span>
          <ArrowUpRight className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
        </motion.a>
      </div>

      {/* --- SOCIALS & INFO GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-20 mb-20 relative z-10">
        
        <div className="md:col-span-2 space-y-6">
          <p className="text-white/40 text-sm max-w-xs leading-relaxed">
            Specializing in high-performance blockchain architecture and seamless digital experiences. Based in India, working worldwide.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((link, i) => (
              <motion.a 
                key={i}
                href={link.url}
                whileHover={{ y: -5, opacity: 1 }}
                className="opacity-50 transition-all flex items-center gap-2 text-xs uppercase tracking-widest font-bold"
              >
                {link.icon} {link.name}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Contact Details</p>
          <p className="text-lg font-light">hello@venendra.com</p>
          <p className="text-lg font-light">+91 98765 43210</p>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Current Status</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <p className="text-lg font-light">Available for new projects</p>
          </div>
        </div>
      </div>

      {/* --- BOTTOM STRIP --- */}
      <div className="flex flex-col md:flex-row justify-between items-center opacity-20 text-[10px] uppercase font-bold tracking-[0.4em] pt-10 border-t border-white/5">
        <p>© 2026 Venendra Kumar — All Rights Reserved</p>
        <p className="mt-4 md:mt-0">Built with React 19 & GSAP</p>
      </div>

      {/* --- LARGE KINETIC BACKGROUND TEXT --- */}
      <h2 
        ref={bigTextRef}
        className="absolute -bottom-10 left-0 text-[30vw] leading-none font-black tracking-tighter pointer-events-none select-none"
        style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)', color: 'transparent' }}
      >
        VENENDRA
      </h2>
    </footer>
  );
};

export default Footer;