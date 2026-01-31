import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, ArrowUpRight, Globe, Lock, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactPortal = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Text Parallax
      gsap.from(".contact-header", {
        y: 150,
        opacity: 0,
        skewY: 7,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      // Form staggering reveal
      gsap.from(".form-element", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 70%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen bg-[#050505] text-white pt-40 pb-20 px-6 md:px-24 overflow-hidden relative">
      
      {/* --- ARCHITECTURAL BACKGROUND --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white"></div>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* --- LEFT: BRANDING & CALL TO ACTION (5/12) --- */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="contact-header">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-blue-500"></div>
              <span className="text-[10px] uppercase tracking-[0.6em] text-blue-500 font-bold">Engagement Portal</span>
            </div>
            <h1 className="text-[10vw] lg:text-[7vw] font-['Playfair_Display'] leading-[0.85] mb-12">
              Secure <br /> <span className="italic font-light opacity-40">Your</span> <br /> 
              <span className="font-bold underline decoration-[1px] underline-offset-[15px]">Growth.</span>
            </h1>
            <p className="max-w-xs text-white/40 font-light leading-relaxed text-sm">
              Currently accepting high-impact ventures for Q3/Q4 2026. Private consultations are held under strict NDA protocols.
            </p>
          </div>

          <div className="mt-24 space-y-10">
            <div className="group cursor-pointer">
              <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 mb-3 font-bold">Direct Line</p>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-light font-['Inter'] group-hover:text-blue-500 transition-colors">partnerships@venendra.com</span>
                <ArrowUpRight size={16} className="text-white/20 group-hover:text-blue-500" />
              </div>
            </div>
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-white/30">
               <Lock size={12} /> <span>End-to-End Encrypted Inquiry</span>
            </div>
          </div>
        </div>

        {/* --- RIGHT: THE ONBOARDING FORM (7/12) --- */}
        <div ref={formRef} className="lg:col-span-7 bg-[#0A0A0A] border border-white/5 p-10 md:p-20 rounded-sm relative">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="form-element space-y-3">
              <label className="text-[10px] uppercase tracking-widest text-white/40 font-black">Full Name</label>
              <input type="text" placeholder="Executive Name" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-blue-500 transition-all font-light text-lg" />
            </div>
            <div className="form-element space-y-3">
              <label className="text-[10px] uppercase tracking-widest text-white/40 font-black">Corporate Email</label>
              <input type="email" placeholder="name@company.com" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-blue-500 transition-all font-light text-lg" />
            </div>
          </div>

          <div className="form-element space-y-3 mb-12">
            <label className="text-[10px] uppercase tracking-widest text-white/40 font-black">Venture Vertical</label>
            <div className="flex flex-wrap gap-3 mt-4">
              {['AI Integration', 'Web2 Ecosystem', 'Growth Marketing', 'Product Strategy'].map((tag) => (
                <button key={tag} className="px-5 py-2 border border-white/10 rounded-full text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="form-element space-y-3 mb-16">
            <label className="text-[10px] uppercase tracking-widest text-white/40 font-black">Strategic Objectives</label>
            <textarea rows="4" placeholder="Briefly describe the architectural scope..." className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-blue-500 transition-all font-light text-lg resize-none" />
          </div>

          <motion.button 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="form-element w-full py-6 bg-white text-black font-black uppercase tracking-[0.5em] text-[10px] flex items-center justify-center gap-4 group overflow-hidden relative"
          >
            <span className="relative z-10">Request Consult</span>
            <Send size={14} className="relative z-10 group-hover:translate-x-2 transition-transform" />
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </motion.button>
        </div>
      </div>

      {/* --- FOOTER SOCIALS & STATUS --- */}
      <div className="mt-40 pt-20 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-10">
        {[
          { label: "Network", val: "LinkedIn", link: "/in/venendra" },
          { label: "Social", val: "X / Twitter", link: "/x/venendra" },
          { label: "Repository", val: "Enterprise Git", link: "/git" },
          { label: "Status", val: "Active Engagements", icon: true }
        ].map((item, i) => (
          <div key={i} className="reveal group cursor-pointer">
            <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 mb-4 font-bold">{item.label}</p>
            <div className="flex items-center gap-3">
              {item.icon && <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>}
              <span className="text-sm tracking-widest uppercase font-light group-hover:text-blue-500 transition-colors">
                {item.val}
              </span>
              {!item.icon && <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -rotate-45 transition-all" />}
            </div>
          </div>
        ))}
      </div>

      {/* --- GHOST BACKGROUND --- */}
      <div className="absolute -bottom-20 right-0 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[30vw] font-black uppercase tracking-tighter">VENENDRA</h2>
      </div>

    </section>
  );
};

export default ContactPortal;