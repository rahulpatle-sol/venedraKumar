import React, { useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Jobs from './pages/Jobs';
import 'lenis/dist/lenis.css';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';
import VentureGallery from './components/Projects'
function App() {
  useEffect(() => {
    const lenis = new Lenis({ 
      duration: 1.2, 
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) 
    });
    function raf(time) { 
      lenis.raf(time); 
      requestAnimationFrame(raf); 
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-black">
 
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/experience" element={<Experience/>} />
       <Route path='/projects'  element={<Projects/>} />
        <Route path='/portfolio' element={<VentureGallery/>} />
         </Routes>
   
    </div>
  );
}

export default App;