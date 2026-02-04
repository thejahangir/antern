
import React, { useState, useEffect } from 'react';

export const MarketReports: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
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
            src="https://images.unsplash.com/photo-1551288049-bbda4833878d?q=80&w=2500" 
            className="w-full h-full object-cover" 
            alt="Market Analysis"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#70e000] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#ccff33] mb-6 block">
              Strategic Intelligence
            </span>
            <h1 className="text-5xl md:ext-5xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Market <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">Reports</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-[#004b23] pl-8">
              Intelligence-driven insights into the future of enterprise tech and human-centric design. We decode the signals others miss.
            </p>
          </div>
        </div>
      </section>

      {/* 2. REPORT GRID */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 shadow-xl">
            {[
              { date: 'March 2024', title: 'The AI Sovereignty Index', category: 'Cognitive Intelligence' },
              { date: 'Jan 2024', title: 'Cloud-Smart vs Cloud-First', category: 'Infrastructure' },
              { date: 'Nov 2023', title: 'UX ROI: Quantifying Intuition', category: 'Experience Design' },
              { date: 'Sept 2023', title: 'Zero-Trust for the Edge', category: 'Security' },
              { date: 'Aug 2023', title: 'The Talent Velocity Report', category: 'Human Capital' },
              { date: 'July 2023', title: 'Green Compute Architectures', category: 'Sustainability' }
            ].map((report, i) => (
              <div key={i} className="group p-12 bg-white hover:bg-[#1A1A1A] transition-all duration-500 flex flex-col justify-between min-h-[350px]">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#004b23] group-hover:text-[#ccff33] transition-colors">
                      {report.category}
                    </span>
                    <span className="text-[9px] font-bold text-gray-300 group-hover:text-white/40 uppercase tracking-widest transition-colors">
                      {report.date}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-8 leading-[0.9] text-[#1A1A1A] group-hover:text-white transition-colors">
                    {report.title}
                  </h3>
                </div>
                
                <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#1A1A1A] group-hover:text-[#70e000] transition-colors group/btn">
                  Access Intelligence
                  <div className="w-8 h-px bg-current group-hover/btn:w-16 transition-all"></div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
