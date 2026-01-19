import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import TechStack from '../components/TechStack';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';
import Experience from '../components/Experience';
const Home = () => {
  return (
    <div className="home-page overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
         <Experience/>
      <TechStack />
      {/* Home page ke liye preview blogs */}
      <BlogSection blogs={[
        { title: "Building UPI on Solana", date: "Jan 2026" },
        { title: "Rust for High Performance Systems", date: "Dec 2025" }
      ]} />
      <Footer />
    </div>
  );
};

export default Home;