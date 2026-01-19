import React from 'react';
import Footer from '../components/Footer';

const Jobs = () => {
  const jobs = [
    { role: "Core Rust Developer", location: "Remote", type: "Full-time" },
    { role: "Smart Contract Engineer", location: "Remote", type: "Full-time" },
    { role: "Technical Product Manager", location: "Hybrid", type: "Full-time" }
  ];

  return (
    <div className="pt-40 min-h-screen bg-[#f8f9fa]">
      <div className="px-10 mb-20">
        <h1 className="text-[8vw] font-bold uppercase tracking-tighter leading-none">Open <br/> Roles</h1>
        <p className="mt-8 opacity-60 max-w-sm font-medium">We are looking for builders who want to shape the future of Web3 payments.</p>
      </div>
      <div className="px-10 pb-20 space-y-4">
        {jobs.map((job, i) => (
          <div key={i} className="flex justify-between items-center bg-white p-10 rounded-[2rem] border border-gray-200 hover:border-black transition-all group">
            <div>
              <h3 className="text-2xl font-bold">{job.role}</h3>
              <p className="text-sm opacity-50 uppercase tracking-widest mt-1">{job.location} • {job.type}</p>
            </div>
            <button className="bg-black text-white px-8 py-3 rounded-full text-xs uppercase font-bold hover:scale-105 transition-transform">Apply ↗</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;