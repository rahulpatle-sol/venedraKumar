import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for minimal look
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
  
    { name: "Insights", path: "/blogs" },
    { name: "Get in Touch", path: "/contact" }
  ];

  return (
    <>
      {/* --- MAIN NAV BAR --- */}
      <nav className={`fixed top-0 w-full z-[150] flex justify-between items-center px-6 md:px-12 transition-all duration-500 ${scrolled ? 'py-6 backdrop-blur-md bg-black/10' : 'py-10'} mix-blend-difference text-white`}>
        
        <Link to="/" className="text-xl md:text-2xl font-['Playfair_Display'] italic font-bold tracking-tighter group overflow-hidden">
          <motion.span 
            initial={{ y: 0 }}
            whileHover={{ y: -30 }}
            className="block transition-transform duration-500"
          >
            VENENDRA
          </motion.span>
          <span className="block absolute  transition-transform duration-500 group-hover:-translate-y-[52px]">
            KUMAR
          </span>
        </Link>

        <div className="flex gap-8 items-center uppercase text-[10px] tracking-[0.3em] font-black">
          
          
          {/* MAGNETIC MENU BUTTON */}
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-500"
          >
            <span className="hidden md:inline">Menu</span>
            <MenuIcon size={16} />
          </motion.button>
        </div>
      </nav>

      {/* --- FULL SCREEN OVERLAY MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[200] bg-[#0e0e0e] text-white flex flex-col justify-center px-6 md:px-24"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 p-4 border border-white/10 rounded-full hover:rotate-90 transition-transform duration-500"
            >
              <X size={32} />
            </button>

            {/* Background Ghost Text */}
            <div className="absolute left-0 bottom-0 opacity-[0.02] pointer-events-none">
              <h2 className="text-[30vw] font-black leading-none">VK.</h2>
            </div>

            {/* Menu Links */}
            <div className="relative z-10 flex flex-col gap-4">
              <p className="text-[10px] uppercase tracking-[1em] text-white/30 mb-4">Navigation</p>
              {navLinks.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + (i * 0.1), duration: 0.8, ease: "expo.out" }}
                >
                  <Link 
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-end gap-4 text-[12vw] md:text-[7vw] font-['Playfair_Display'] leading-none italic hover:pl-10 transition-all duration-500"
                  >
                    <span className="text-sm font-mono not-italic text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                    <span className="group-hover:translate-x-4 transition-transform duration-500">{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer of Menu */}
            <div className="absolute bottom-12 left-6 md:left-24 flex gap-10 text-[10px] uppercase tracking-[0.3em] opacity-40">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;