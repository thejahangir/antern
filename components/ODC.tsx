
import React, { useState, useEffect } from 'react';

interface Props { 
  onInitiateStrategy: () => void;
  showBackToSolutions?: boolean;
  onBackToSolutions?: () => void;
}

export const ODC: React.FC<Props> = ({ onInitiateStrategy, showBackToSolutions, onBackToSolutions }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen selection:bg-[#70e000] selection:text-[#004b23]">
      {/* HERO SECTION */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-30 grayscale transition-transform duration-100 ease-out will-change-transform"
            style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
          >
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" className="w-full h-full object-cover" alt="Offshore Development Center" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent"></div>
        </div>

        {showBackToSolutions && (
          <button 
            onClick={onBackToSolutions}
            className="absolute top-28 left-6 md:left-10 z-50 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-[#ccff33] transition-all group"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Solutions
          </button>
        )}

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#004b23] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.5em] text-[#004b23] mb-6 block bg-[#ccff33] px-2 py-1 w-fit">
              Global Scale
            </span>
            <h1 className="text-5xl md:ext-5xl lg:text-5xl font-black text-white  tracking-tighter leading-[0.85] mb-8">
              Offshore Dev <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">Centers.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-normal max-w-2xl leading-relaxed border-l border-[#70e000] pl-10">
              Global talent, centralized control. We build and manage dedicated innovation hubs tailored to your technical roadmap, extending your engineering capacity without diluting quality.
            </p>
          </div>
        </div>
      </section>

      {/* STRATEGIC VALUE GRID */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 shadow-2xl">
            {[
              { title: 'Talent Acquisition', desc: 'Direct access to top-tier engineering talent globally, filtered by our rigorous testing engines.' },
              { title: 'Cultural Sync', desc: 'Standardized operational procedures aligned with your brand values and workflow methodologies.' },
              { title: 'Operational Rigor', desc: 'Security, HR, compliance, and infrastructure fully managed by Antern.' },
              { title: 'Cost Efficiency', desc: 'Optimized resource allocation delivering 40-60% savings without compromising code quality.' }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-12 hover:bg-[#1A1A1A] group transition-all duration-500 min-h-[400px] flex flex-col justify-between">
                <div>
                  <span className="text-[12px] font-black text-[#004b23] group-hover:text-[#ccff33] mb-6 block transition-colors">0{i+1}</span>
                  <h3 className="text-2xl font-black uppercase mb-6 tracking-tight text-[#1A1A1A] group-hover:text-white transition-colors">{feature.title}</h3>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed group-hover:text-gray-400 transition-colors">{feature.desc}</p>
                </div>
                <div className="w-8 h-1 bg-[#004b23] group-hover:w-16 group-hover:bg-[#70e000] transition-all duration-500"></div>
              </div>
            ))}
          </div>
          
          <div className="mt-32 relative group overflow-hidden bg-[#004b23]">
            <div className="absolute inset-0 opacity-20 grayscale">
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000" className="w-full h-full object-cover" alt="Team Collaboration" />
            </div>
            <div className="relative z-10 p-20 flex flex-col md:flex-row items-center justify-between gap-12 text-white">
              <div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4">
                  Expand your <br />
                  <span className="text-[#ccff33]">Horizon.</span>
                </h2>
                <p className="text-white/80 max-w-md font-normal">Set up your dedicated center in under 45 days.</p>
              </div>
              <button 
                onClick={onInitiateStrategy} 
                className="px-12 py-6 bg-white text-[#004b23] text-[11px] font-black uppercase tracking-[0.4em] hover:bg-[#ccff33] transition-all shadow-xl whitespace-nowrap"
              >
                Initiate ODC Discovery
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
