
import React, { useState, useEffect } from 'react';

export const Whitepapers: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen selection:bg-[#70e000] selection:text-[#004b23]">
      {/* 1. KINETIC HERO */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div 
          className="absolute -inset-y-24 inset-x-0 z-0 opacity-40 grayscale"
          style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Technical Research"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#70e000] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#ccff33] mb-6 block">
              Deep Architecture
            </span>
            <h1 className="text-5xl md:ext-5xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">Whitepapers.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-normal max-w-2xl leading-relaxed border-l border-[#004b23] pl-8">
              Rigorous deep-dives and strategic frameworks for the next generation of enterprise architecture. Validated research for the CTO office.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PAPERS GRID */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
            {[
              { title: 'The Ethics of Autonomous UX', desc: 'A framework for human-in-the-loop AI orchestration, ensuring agency is preserved in automated systems.' },
              { title: 'Post-Quantum Resilience', desc: 'Preparing legacy infrastructure for next-gen cryptographic challenges and Q-Day readiness.' },
              { title: 'Semantic Matching Engines', desc: 'The mathematical architecture behind ScanJD and the future of ontology-based talent sourcing.' },
              { title: 'Cloud Mesh Optimization', desc: 'Reducing latency in high-density multi-cloud environments through edge-compute strategies.' }
            ].map((paper, i) => (
              <div key={i} className="bg-white p-16 hover:bg-[#1A1A1A] group transition-all duration-500">
                <div className="mb-10">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#004b23] group-hover:text-[#ccff33] transition-colors">
                     WP-0{i+1}
                   </span>
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tight mb-6 leading-[0.95] text-[#1A1A1A] group-hover:text-white transition-colors">
                  {paper.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-400 font-normal mb-12 text-lg leading-relaxed transition-colors">
                  {paper.desc}
                </p>
                <button className="px-10 py-5 border border-gray-200 text-[10px] font-black uppercase tracking-widest text-[#1A1A1A] group-hover:bg-[#004b23] group-hover:text-white group-hover:border-[#004b23] transition-all">
                  Access Document
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
