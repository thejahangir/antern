
import React, { useState, useEffect } from 'react';

interface Props { 
  onInitiateStrategy: () => void;
  showBackToSolutions?: boolean;
  onBackToSolutions?: () => void;
}

export const ManagedServices: React.FC<Props> = ({ onInitiateStrategy, showBackToSolutions, onBackToSolutions }) => {
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
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-[#1A1A1A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-40 grayscale transition-transform duration-100 ease-out will-change-transform"
            style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
          >
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000" className="w-full h-full object-cover" alt="Network Operations Center" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/70 to-transparent"></div>
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
            <span className="text-[12px] font-black uppercase tracking-[0.5em] text-[#ccff33] mb-6 block">
              Operational Continuity
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8 text-white">
              Managed<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed border-l border-[#70e000] pl-10">
              Continuous optimization for mission-critical infrastructure. We handle the complexity of scale, security, and uptime so you can focus on pure innovation.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE LIST */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: '24/7 Cognitive Support', desc: 'AI-enhanced monitoring and rapid incident response across your entire stack, predicting failures before they occur.' },
              { title: 'Security Patching & Resilience', desc: 'Proactive vulnerability management and continuous zero-trust hardening against emerging threats.' },
              { title: 'Performance Engineering', desc: 'Ongoing tuning of database queries, cloud resource allocation, and latency optimization for peak efficiency.' },
              { title: 'Strategic Roadmap Sync', desc: 'Regular executive reviews to ensure your managed stack evolves in alignment with future business goals.' }
            ].map((service, i) => (
              <div key={i} className="flex gap-8 p-12 bg-white border border-gray-100 hover:border-[#004b23]/30 hover:shadow-2xl transition-all duration-500 group">
                <div className="text-5xl font-black text-gray-100 group-hover:text-[#004b23] transition-colors">0{i+1}</div>
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-[#1A1A1A] group-hover:text-[#004b23] transition-colors">{service.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-32 text-center">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-[#1A1A1A] mb-8">Ready for reliability?</h2>
            <button 
              onClick={onInitiateStrategy} 
              className="px-12 py-6 bg-[#004b23] text-white font-black uppercase tracking-[0.4em] text-[11px] hover:bg-[#1A1A1A] transition-all shadow-[0_20px_40px_rgba(0,75,35,0.3)] hover:shadow-none"
            >
              Request Managed Support Proposal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
