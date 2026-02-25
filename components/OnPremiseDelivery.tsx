
import React, { useState, useEffect } from 'react';

interface Props { 
  onInitiateStrategy: () => void; 
  showBackToSolutions?: boolean;
  onBackToSolutions?: () => void;
}

export const OnPremiseDelivery: React.FC<Props> = ({ onInitiateStrategy, showBackToSolutions, onBackToSolutions }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen selection:bg-[#0085F7] selection:text-[#fff]">
      {/* HERO SECTION */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-[#1A1A1A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-40 grayscale transition-transform duration-100 ease-out will-change-transform"
            style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
          >
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2000" className="w-full h-full object-cover" alt="Secure Server Room" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent"></div>
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
            <div className="accent-bar bg-[#70e000] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.5em] text-[#ccff33] mb-6 block">
              Infrastructure Sovereignty
            </span>
            <h1 className="text-5xl md:ext-5xl lg:text-5xl font-black tracking-tighter leading-[0.85] mb-8 text-white">
              On-Premise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">Delivery</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-normal max-w-2xl leading-relaxed border-l border-[#004b23] pl-10">
              Ultimate security and performance. We deploy Antern's full intelligence stack within your own secure infrastructure, ensuring complete data isolation.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1A1A1A] mb-8 leading-[0.9]">
                Air-Gapped <br />
                <span className="text-[#004b23]">Excellence.</span>
              </h2>
              <p className="text-lg text-gray-500 font-normal leading-relaxed mb-12">
                For organizations with strict regulatory requirements, we provide end-to-end on-premise installation and maintenance of our proprietary platforms. Our systems are architected to function with zero external dependency.
              </p>
              <div className="space-y-8">
                {[
                  { title: 'Hardware Optimization', desc: 'Custom kernel tuning for your specific bare-metal constraints.' },
                  { title: 'Local Data Sovereignty', desc: '100% data retention within your physical perimeter.' },
                  { title: 'Dedicated Support Mesh', desc: 'On-site reliability engineers aligned to your timezone.' },
                  { title: 'Real-time Updates', desc: 'Secure, offline update mechanisms for continuous evolution.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-[#004b23] group-hover:bg-[#004b23] transition-all">
                       <span className="text-[#004b23] font-black group-hover:text-white transition-colors">0{i+1}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-widest text-[#1A1A1A] mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-[#1A1A1A] overflow-hidden grayscale group hover:grayscale-0 transition-all duration-1000 relative">
                <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" alt="Server Infrastructure" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004b23]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-2xl border-l-4 border-[#70e000] hidden md:block">
                 <p className="text-3xl font-black text-[#1A1A1A]">99.999%</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Uptime SLA</p>
              </div>
            </div>
          </div>
          
          <div className="mt-40 text-center border-t border-gray-100 pt-20">
             <h3 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] mb-8">Secure Your Infrastructure</h3>
             <button 
               onClick={onInitiateStrategy} 
               className="px-12 py-6 bg-[#1A1A1A] text-white text-[11px] font-black uppercase tracking-[0.4em] hover:bg-[#004b23] hover:text-white transition-all shadow-xl group"
             >
               Request Infrastructure Audit
               <span className="ml-4 inline-block transform transition-transform group-hover:translate-x-2">→</span>
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};
