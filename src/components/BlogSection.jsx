import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ArrowRight, BookOpen, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const blogs = [
  {
    id: 1,
    title: "Engineering the AI-First Product Strategy",
    date: "Jan 28, 2026",
    category: "AI Strategy",
    readTime: "8 min read",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000",
    content: "The shift from deterministic software to probabilistic AI-driven systems requires a fundamental rethink of product architecture. We are moving away from rigid workflows toward dynamic, generative experiences. In this deep dive, we explore how to integrate LLMs into core business logic without sacrificing system reliability..."
  },
  {
    id: 2,
    title: "Scalable Web2 Architecture for the Enterprise",
    date: "Jan 15, 2026",
    category: "Product Engg",
    readTime: "12 min read",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000",
    content: "When moving from an MVP to a system serving millions, the bottlenecks aren't just technical—they are structural. Scalability is about isolation of concerns, cache coherence, and database sharding protocols. This article outlines the roadmap for transitioning to high-load microservices..."
  },
  {
    id: 3,
    title: "The Human Element in High-Output Teams",
    date: "Dec 30, 2025",
    category: "Leadership",
    readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000",
    content: "Executive leadership in engineering is less about code reviews and more about psychological safety and clear decision-making frameworks. We examine the 'Founder-Engineer' mindset and how it translates into building cross-functional teams that move 10x faster than traditional hierarchies..."
  }
];

const InsightsLibrary = () => {
  const sectionRef = useRef(null);
  const [activeBlog, setActiveBlog] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blog-row", {
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-40 bg-white text-black relative">
      
      {/* --- SECTION HEADER --- */}
      <div className="container mx-auto px-6 md:px-24 mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.8em] text-black/40 font-bold mb-8">Executive Perspectives</p>
          <h2 className="text-[8vw] md:text-[6vw] font-['Playfair_Display'] leading-[0.9]">
            The <span className="italic font-light">Insights</span> Library
          </h2>
        </div>
        <div className="text-right">
            <p className="text-sm uppercase tracking-widest font-black mb-2 opacity-20">Volume 01 // 2026</p>
            <div className="w-20 h-px bg-black ml-auto"></div>
        </div>
      </div>

      {/* --- BLOGS LIST (Clean Row Style) --- */}
      <div className="container mx-auto px-6 md:px-24">
        {blogs.map((blog) => (
          <div 
            key={blog.id}
            onClick={() => setActiveBlog(blog)}
            className="blog-row group relative py-12 border-b border-black/10 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer transition-all hover:px-8"
          >
            <div className="flex items-center gap-12 z-10">
              <span className="text-[10px] font-black opacity-20 group-hover:opacity-100 transition-opacity">0{blog.id}</span>
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-blue-600 font-bold mb-2 block">{blog.category}</span>
                <h3 className="text-3xl md:text-5xl font-['Playfair_Display'] leading-none group-hover:italic transition-all">
                  {blog.title}
                </h3>
              </div>
            </div>

            <div className="mt-6 md:mt-0 flex items-center gap-8 opacity-40 group-hover:opacity-100 transition-opacity z-10">
              <span className="text-[10px] uppercase tracking-widest">{blog.date}</span>
              <ArrowRight size={20} strokeWidth={1} />
            </div>

            {/* Hover Background Peek */}
            <div className="absolute inset-0 bg-zinc-50 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-expo -z-0"></div>
          </div>
        ))}
      </div>

      {/* --- MEDIUM-STYLE READER MODAL --- */}
      <AnimatePresence>
        {activeBlog && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white overflow-y-auto"
          >
            {/* Navigation / Close */}
            <div className="sticky top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-black/5 px-6 md:px-24 py-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <BookOpen size={18} />
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Reader Mode</span>
              </div>
              <button 
                onClick={() => setActiveBlog(null)}
                className="flex items-center gap-2 group"
              >
                <span className="text-[10px] uppercase tracking-widest font-black group-hover:mr-2 transition-all">Close Article</span>
                <X size={20} strokeWidth={1} />
              </button>
            </div>

            {/* Article Content */}
            <article className="max-w-3xl mx-auto py-24 px-6">
              <div className="mb-16">
                <span className="px-4 py-1 border border-black/10 rounded-full text-[10px] uppercase tracking-widest font-bold mb-8 inline-block">
                  {activeBlog.category}
                </span>
                <h1 className="text-5xl md:text-7xl font-['Playfair_Display'] font-bold leading-tight mb-8">
                  {activeBlog.title}
                </h1>
                <div className="flex items-center gap-8 text-black/40 text-[10px] uppercase tracking-widest font-bold">
                  <span>{activeBlog.date}</span>
                  <div className="flex items-center gap-2"><Clock size={12}/> {activeBlog.readTime}</div>
                </div>
              </div>

              <div className="aspect-video w-full rounded-2xl overflow-hidden mb-16">
                <img src={activeBlog.img} className="w-full h-full object-cover grayscale" alt="" />
              </div>

              <div className="prose prose-xl max-w-none">
                <p className="text-2xl md:text-3xl font-['Playfair_Display'] italic leading-relaxed text-black/80 mb-12">
                  {activeBlog.content}
                </p>
                <p className="text-lg leading-relaxed text-black/60 font-light font-['Inter'] mb-8">
                  In the current landscape of enterprise software engineering, the definition of a "product" has evolved from a static utility to a living ecosystem. As founders, we must recognize that technical debt is not just bad code—it is an organizational liability that slows down market pivot capabilities...
                </p>
                {/* Dummy placeholder for more content */}
                <div className="h-px w-full bg-black/5 my-12"></div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">I. The Architecture of Scale</h4>
                <p className="text-lg leading-relaxed text-black/60 font-light font-['Inter']">
                  Data integrity remains the core of any high-performing Web2 system. Whether we are discussing MongoDB clusters or Java-based microservices, the principle of statelessness allows us to scale horizontally without technical friction...
                </p>
              </div>
            </article>

            {/* Footer of Reader */}
            <footer className="bg-zinc-50 py-20 px-6 md:px-24 mt-20 text-center">
              <p className="text-[10px] uppercase tracking-[0.5em] text-black/30 mb-8 font-bold">End of Article</p>
              <button 
                onClick={() => setActiveBlog(null)}
                className="px-12 py-5 bg-black text-white text-[10px] uppercase tracking-[0.4em] rounded-full"
              >
                Back to Library
              </button>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default InsightsLibrary;