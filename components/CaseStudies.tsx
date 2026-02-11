
import React, { useState, useEffect } from 'react';

export const CaseStudies: React.FC = () => {
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
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2500" 
            className="w-full h-full object-cover" 
            alt="Success Metrics"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#70e000] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#ccff33] mb-6 block">
              Proven Outcomes
            </span>
            <h1 className="text-5xl md:ext-5xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">Studies</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-normal max-w-2xl leading-relaxed border-l border-[#004b23] pl-8">
              Real impact, global scale. How Antern partners are redefining their industries through digital excellence and architectural rigor.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CASE STUDY LIST */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {[
              { 
                client: 'Global Logistics Corp', 
                impact: '+40% Efficiency', 
                title: 'Modernizing Supply Chain with Cognitive Automation', 
                desc: 'Deploying a predictive AI layer atop legacy ERP systems to automate route planning and inventory distribution in real-time.',
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600' 
              },
              { 
                client: 'FinTech Alpha', 
                impact: 'Zero Breaches', 
                title: 'Implementing Zero-Trust Across a Decentralized Network', 
                desc: 'Architecting a banking-grade security mesh that validates every transactional request without compromising user velocity.',
                image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600' 
              },
              { 
                client: 'NexaHealth', 
                impact: '95% UX Satisfaction', 
                title: 'Humanizing High-Stakes Patient Data Management', 
                desc: 'Redesigning clinician interfaces to reduce cognitive load during critical care decision-making processes.',
                image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600' 
              }
            ].map((study, i) => (
              <div key={i} className="group grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className={`lg:col-span-7 relative overflow-hidden ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <div className="aspect-[16/9] w-full bg-gray-100 grayscale group-hover:grayscale-0 transition-all duration-1000 overflow-hidden">
                    <img src={study.image} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1500ms]" alt={study.title} />
                  </div>
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-[#004b23]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
                
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-px bg-[#004b23]"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#004b23]">{study.client}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 leading-[0.95] text-[#1A1A1A] group-hover:text-[#004b23] transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-500 font-normal leading-relaxed mb-8">
                    {study.desc}
                  </p>

                  <div className="p-6 bg-gray-50 border-l-4 border-[#70e000] mb-10">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Key Outcome</span>
                    <div className="text-3xl font-black text-[#1A1A1A]">{study.impact}</div>
                  </div>

                  <button className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-[#1A1A1A] hover:text-[#004b23] transition-all group/btn">
                    Read Analysis 
                    <div className="w-12 h-px bg-[#1A1A1A] group-hover/btn:w-20 group-hover/btn:bg-[#004b23] transition-all"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
