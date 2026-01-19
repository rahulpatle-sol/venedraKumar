import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Send, Globe, MessageCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "expo.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-white pt-40 pb-20 px-6 md:px-20 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        
        {/* --- LEFT SIDE: BIG TEXT --- */}
        <div className="flex flex-col justify-between">
          <div className="reveal">
            <p className="text-[10px] uppercase tracking-[0.8em] text-white/30 mb-8 font-bold">Contact</p>
            <h1 className="text-[12vw] lg:text-[8vw] font-['Playfair_Display'] italic leading-none mb-10">
              Let's build <br /> <span className="not-italic font-bold underline decoration-1 underline-offset-[20px]">together.</span>
            </h1>
          </div>

          <div className="reveal space-y-12 mt-20">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2 font-bold">Email me</p>
              <a href="mailto:hello@venendra.com" className="text-3xl md:text-4xl font-light hover:text-blue-500 transition-colors duration-500 font-['Inter']">
                hello@venendra.com
              </a>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-2 font-bold">Location</p>
              <p className="text-3xl md:text-4xl font-light font-['Inter']">Bengaluru, India</p>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: MODERN FORM --- */}
        <div className="reveal bg-white/[0.03] border border-white/10 p-8 md:p-16 rounded-[40px] backdrop-blur-xl">
          <form className="space-y-10">
            <div className="group relative">
              <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4 block group-focus-within:text-blue-400 transition-colors">Your Name</label>
              <input 
                type="text" 
                placeholder="Venendra Kumar" 
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-all text-xl font-light placeholder:opacity-20"
              />
            </div>

            <div className="group relative">
              <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4 block group-focus-within:text-blue-400 transition-colors">Email Address</label>
              <input 
                type="email" 
                placeholder="example@mail.com" 
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-all text-xl font-light placeholder:opacity-20"
              />
            </div>

            <div className="group relative">
              <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4 block group-focus-within:text-blue-400 transition-colors">Project Details</label>
              <textarea 
                rows="4"
                placeholder="Tell me about your vision..." 
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-all text-xl font-light placeholder:opacity-20 resize-none"
              />
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-white text-black py-6 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-colors duration-500"
            >
              Send Message <Send size={16} />
            </motion.button>
          </form>
        </div>
      </div>

      {/* --- BOTTOM SECTION: SOCIAL GRID --- */}
      <div className="reveal mt-40 grid grid-cols-2 md:grid-cols-4 border-t border-white/10 pt-20 gap-10">
        <div className="group cursor-pointer">
          <p className="text-[10px] uppercase tracking-widest text-white/20 mb-4 font-bold">LinkedIn</p>
          <div className="flex items-center gap-2 group-hover:gap-4 transition-all duration-500">
            <span className="text-xl md:text-2xl font-light">@venendra</span>
            <ArrowRight className="opacity-0 group-hover:opacity-100 -rotate-45" size={20} />
          </div>
        </div>

        <div className="group cursor-pointer">
          <p className="text-[10px] uppercase tracking-widest text-white/20 mb-4 font-bold">Twitter</p>
          <div className="flex items-center gap-2 group-hover:gap-4 transition-all duration-500">
            <span className="text-xl md:text-2xl font-light">@venendra_x</span>
            <ArrowRight className="opacity-0 group-hover:opacity-100 -rotate-45" size={20} />
          </div>
        </div>

        <div className="group cursor-pointer">
          <p className="text-[10px] uppercase tracking-widest text-white/20 mb-4 font-bold">WhatsApp</p>
          <div className="flex items-center gap-2 group-hover:gap-4 transition-all duration-500">
            <span className="text-xl md:text-2xl font-light">+91 98xx-xxxx</span>
            <ArrowRight className="opacity-0 group-hover:opacity-100 -rotate-45" size={20} />
          </div>
        </div>

        <div className="group cursor-pointer">
          <p className="text-[10px] uppercase tracking-widest text-white/20 mb-4 font-bold">Availability</p>
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
             <span className="text-xl md:text-2xl font-light">Ready to ship</span>
          </div>
        </div>
      </div>

      {/* Background Ghost Text */}
      <div className="absolute -bottom-10 left-0 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[25vw] font-black uppercase tracking-tighter">Inquiry</h2>
      </div>

    </section>
  );
};

export default Contact;