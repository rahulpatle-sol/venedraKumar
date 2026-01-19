import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const BlogSection = ({ blogs = [] }) => {
  const sectionRef = useRef(null);

  // Default blogs agar prop khali ho toh
  const displayBlogs = blogs.length > 0 ? blogs : [
    { title: "The Future of Solana Parallel Execution", date: "Jan 12, 2026", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0" },
    { title: "Mastering Rust for High-Load Systems", date: "Jan 05, 2026", img: "https://images.unsplash.com/photo-1644088379091-d574269d422f" },
    { title: "Leadership in Decentralized Teams", date: "Dec 28, 2025", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blog-card", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-40 px-6 md:px-20 bg-[#ffffff] text-black overflow-hidden">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
        <div>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.4, x: 0 }}
            className="text-[10px] uppercase tracking-[0.8em] font-bold mb-4"
          >
            Knowledge Base
          </motion.p>
          <h2 className="text-[12vw] md:text-[8vw] font-['Playfair_Display'] font-black leading-[0.8] uppercase tracking-tighter">
            Insi<span className="italic font-light">ghts</span>
          </h2>
        </div>
        <p className="text-sm md:text-base opacity-60 max-w-[300px] font-['Inter'] leading-relaxed border-l-2 border-black pl-6">
          Deep dives into Blockchain Architecture, Rust Performance, and the future of Web3 Leadership.
        </p>
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-black/10">
        {displayBlogs.map((blog, i) => (
          <motion.div 
            key={i} 
            whileHover="hover"
            className="blog-card group relative border-t border-black/10 md:border-r last:border-r-0 pt-10 pb-20 px-8 flex flex-col justify-between h-[500px] overflow-hidden cursor-pointer bg-white transition-colors duration-500 hover:bg-[#0a0a0a] hover:text-white"
          >
            {/* Background Image Reveal on Hover */}
            <motion.div 
              variants={{
                hover: { opacity: 0.15, scale: 1.1, rotate: 2 }
              }}
              className="absolute inset-0 z-0 opacity-0 pointer-events-none transition-all duration-700"
            >
              <img src={blog.img} alt="" className="w-full h-full object-cover grayscale" />
            </motion.div>

            <div className="relative z-10 flex justify-between items-start">
              <span className="text-[10px] font-bold tracking-widest opacity-40 group-hover:opacity-100 group-hover:text-blue-400 transition-all">
                0{i+1}
              </span>
              <motion.div 
                variants={{ hover: { rotate: 45, x: 5, y: -5 } }}
                className="text-3xl font-light"
              >
                ↗
              </motion.div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-['Playfair_Display'] font-bold leading-[1.1] mb-6 tracking-tight">
                {blog.title}
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-black group-hover:bg-white transition-colors"></div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50 group-hover:opacity-100">
                  {blog.date}
                </span>
              </div>
            </div>

            {/* Hover Bottom Fill Effect */}
            <motion.div 
              variants={{ hover: { height: "100%" } }}
              initial={{ height: "0%" }}
              className="absolute bottom-0 left-0 w-full bg-black -z-10 transition-all duration-500 ease-expo"
            />
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-20 flex justify-center">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-12 py-5 border border-black overflow-hidden"
        >
          <span className="relative z-10 text-xs uppercase font-black tracking-[0.4em] group-hover:text-white transition-colors duration-300">
            Read All Articles
          </span>
          <div className="absolute inset-0 bg-black translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-expo"></div>
        </motion.button>
      </div>
    </section>
  );
};

export default BlogSection;