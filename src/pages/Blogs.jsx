import React, { useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const Blogs = () => {
  const blogs = [
    { title: "Scalable Microservices with Node.js & Redis", category: "Backend", date: "15 Jan", read: "5 min", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1000" },
    { title: "The Art of Clean Code in React 19", category: "Frontend", date: "10 Jan", read: "8 min", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000" },
    { title: "Optimizing PostgreSQL for Millions of Rows", category: "Database", date: "05 Jan", read: "12 min", img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1000" },
    { title: "Design Systems: Scaling UI from 0 to 1", category: "Design", date: "02 Jan", read: "6 min", img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1000" },
    { title: "Breaking into GenAI: A Frontend Perspective", category: "AI", date: "28 Dec", read: "10 min", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000" },
    { title: "Git Workflows for High-Performance Teams", category: "DevOps", date: "20 Dec", read: "4 min", img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1000" },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".blog-row", {
        opacity: 0,
        x: -50,
        stagger: 0.15,
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
    <div className="pt-40 min-h-screen bg-[#fcfcfc] text-black">
      {/* --- HEADER --- */}
      <div className="px-6 md:px-20 mb-32" ref={sectionRef}>
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.4, y: 0 }}
              className="text-[10px] uppercase tracking-[0.8em] font-bold mb-6"
            >
              Curated Insights
            </motion.p>
            <h1 className="text-[14vw] md:text-[10vw] font-['Playfair_Display'] font-black uppercase tracking-tighter leading-[0.8]">
              Jour<span className="italic font-light">nal</span>
            </h1>
          </div>
          <div className="max-w-[300px] border-l-2 border-black pl-6 pb-2">
            <p className="text-sm opacity-60 font-['Inter'] leading-relaxed">
              Documenting the journey through full-stack engineering, system design, and the evolving tech landscape.
            </p>
          </div>
        </div>
      </div>

      {/* --- BLOG LIST (Ultra-Modern Row Layout) --- */}
      <div className="px-0 md:px-20 mb-40">
        <div className="border-t border-black/10">
          {blogs.map((blog, i) => (
            <motion.div 
              key={i} 
              whileHover="hover"
              className="blog-row group relative flex flex-col md:flex-row items-start md:items-center justify-between py-12 px-6 md:px-10 border-b border-black/10 cursor-pointer overflow-hidden transition-all duration-500 hover:bg-black hover:text-white"
            >
              {/* Floating Image Preview on Hover (Desktop Only) */}
              <motion.div 
                variants={{
                  hover: { opacity: 1, scale: 1, x: 20, rotate: 5 }
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                className="absolute right-[20%] top-1/2 -translate-y-1/2 w-64 h-40 z-20 pointer-events-none hidden lg:block overflow-hidden rounded-xl shadow-2xl"
              >
                <img src={blog.img} alt="" className="w-full h-full object-cover" />
              </motion.div>

              <div className="flex items-center gap-10 md:w-1/2 z-10">
                <span className="text-xs font-mono opacity-30 group-hover:text-blue-400">0{i+1}</span>
                <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold tracking-tight group-hover:italic transition-all duration-500">
                  {blog.title}
                </h2>
              </div>

              <div className="flex items-center justify-between w-full md:w-auto gap-12 mt-6 md:mt-0 z-10">
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-[10px] uppercase tracking-widest font-black text-blue-600 group-hover:text-white mb-1">{blog.category}</span>
                  <span className="text-xs opacity-40 font-bold group-hover:text-white/60">{blog.date} • {blog.read}</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:border-white transition-colors">
                  <span className="text-xl group-hover:rotate-45 transition-transform duration-500">↗</span>
                </div>
              </div>

              {/* Hover Fill Effect Background */}
              <motion.div 
                variants={{ hover: { y: 0 } }}
                initial={{ y: "100%" }}
                className="absolute inset-0 bg-black -z-10 transition-transform duration-500 ease-expo"
              />
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Blogs;