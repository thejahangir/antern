
import React, { useState, useEffect } from 'react';

interface Props { onInitiateStrategy: () => void; }

export const ProductRoadmap: React.FC<Props> = ({ onInitiateStrategy }) => {
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
      {/* 1. KINETIC HERO */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-30 grayscale transition-transform duration-100 ease-out will-change-transform"
            style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2500" 
              className="w-full h-full object-cover" 
              alt="Strategic Roadmap"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
          {/* Tech Overlay */}
          <div className="absolute inset-0 opacity-[0.05]" 
               style={{ backgroundImage: 'linear-gradient(90deg, transparent 50%, rgba(112, 224, 0, .1) 50%), linear-gradient(0deg, transparent 50%, rgba(112, 224, 0, .1) 50%)', backgroundSize: '40px 40px' }}>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#70e000] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.5em] text-[#ccff33] mb-6 block">
              Strategic Trajectory
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Product<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">
                Roadmap
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-[#004b23] pl-10">
              The evolution of Antern's intelligence suite. We build today for the mission-critical needs of tomorrow, ensuring your infrastructure is always ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* 2. TIMELINE GRID */}
      <section className="py-32 bg-white relative">
        {/* Background line */}
        <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gray-100 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 gap-24">
            {[
              { 
                q: 'Q1-Q2 2024', 
                title: 'Cognitive Integration', 
                items: ['IAmInterviewed Video Synthesis', 'SkillTest Adaptive Scoring', 'ScanJD Sentiment Analysis'],
                align: 'left'
              },
              { 
                q: 'Q3-Q4 2024', 
                title: 'Autonomous Scale', 
                items: ['Managed Services AI Overlay', 'Predictive Resource Balancing', 'Global Edge Node Expansion'],
                align: 'right'
              },
              { 
                q: '2025 Vision', 
                title: 'Universal Intelligence', 
                items: ['Neuromorphic Compute Support', 'Quantum Resilient Encryption', 'Full ODC Automation'],
                align: 'left'
              }
            ].map((phase, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-center ${phase.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Timeline Content */}
                <div className={`w-full lg:w-1/2 ${phase.align === 'right' ? 'lg:pl-24' : 'lg:pr-24'}`}>
                  <div className="group bg-[#F8F7F9] border border-gray-100 p-12 hover:bg-[#1A1A1A] transition-all duration-500 hover:shadow-2xl">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#004b23] group-hover:text-[#ccff33] mb-6 block transition-colors">
                      {phase.q}
                    </span>
                    <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 text-[#1A1A1A] group-hover:text-white transition-colors leading-[0.9]">
                      {phase.title}
                    </h3>
                    <ul className="space-y-4">
                      {phase.items.map(item => (
                        <li key={item} className="flex items-start gap-4 text-gray-500 group-hover:text-gray-400 font-light transition-colors">
                          <div className="w-1.5 h-1.5 bg-[#004b23] group-hover:bg-[#70e000] mt-2 shrink-0 rounded-full transition-colors"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Marker (Desktop) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white border border-gray-200 items-center justify-center rounded-full z-10">
                  <div className="w-4 h-4 bg-[#004b23]"></div>
                </div>

                {/* Empty Space for alignment */}
                <div className="w-full lg:w-1/2"></div>
              </div>
            ))}
          </div>

          <div className="mt-40 bg-[#1A1A1A] p-20 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#004b23]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-black mb-10 uppercase tracking-tighter text-white">Shape our direction.</h2>
              <button 
                onClick={onInitiateStrategy} 
                className="px-12 py-6 border border-white/20 text-white font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-[#1A1A1A] transition-all"
              >
                Request Roadmap Deep-Dive
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
