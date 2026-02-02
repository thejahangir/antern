
import React, { useState, useEffect } from 'react';

interface VisionProps {
  onInitiateStrategy?: () => void;
}

export const OurVision: React.FC<VisionProps> = ({ onInitiateStrategy }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div 
          className="absolute -inset-y-24 inset-x-0 z-0 will-change-transform opacity-40"
          style={{ 
            transform: `translate3d(0, ${offsetY * 0.15}px, 0)` 
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" 
            alt="Futuristic Network Vision" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent"></div>
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#70e000] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black tracking-[0.5em] text-[#ccff33] mb-6 block">
              The Strategic Manifesto
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white mb-8">
              Architecting<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">
                Tomorrow.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl border-l border-[#004b23] pl-10">
              Antern's vision transcends technology. We are building the cognitive infrastructure for a post-digital age where intelligence is seamless, secure, and human-centric.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-[0.95] mb-12">
                Digital <span className="text-[#004b23]">Sovereignty</span> <br /> 
                over Digital Noise.
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed mb-8">
                We believe that true innovation isn't just about speed; it's about direction. Our vision is to empower enterprises to reclaim their strategic focus by automating complexity and elevating human potential.
              </p>
              <div className="flex gap-4 p-8 bg-gray-50 border-l-4 border-[#004b23]">
                <p className="text-lg text-[#1A1A1A] font-medium italic">
                  "Our goal is to make enterprise technology so intuitive it becomes invisible, leaving only the impact behind."
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" 
                  alt="Tech Integrity" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Plus Symbol */}
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-[#004b23] flex items-center justify-center text-white text-5xl font-light shadow-2xl">
                +
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Horizons (Pillars) */}
      <section className="py-32 bg-[#F8F7F9] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <div className="accent-bar bg-[#004b23] mx-auto w-12 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1A1A1A]">The Pillars of Progress</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
            {[
              { 
                title: "Cognitive Integrity", 
                desc: "AI systems that prioritize ethical transparency and human agency over black-box automation.",
                id: "01"
              },
              { 
                title: "Zero-Trust Unity", 
                desc: "A vision of global connectivity where security is intrinsic, not an afterthought.",
                id: "02"
              },
              { 
                title: "Sustainable Scale", 
                desc: "Architecting for net-zero operations and extreme resource efficiency in digital infrastructure.",
                id: "03"
              },
              { 
                title: "Human Resonance", 
                desc: "UX philosophy that bridges the gap between machine precision and human instinct.",
                id: "04"
              }
            ].map((pillar) => (
              <div key={pillar.id} className="bg-white p-12 hover:bg-[#1A1A1A] group transition-all duration-700">
                <span className="text-4xl font-black text-[#004b23] group-hover:text-[#ccff33] transition-colors mb-8 block">
                  {pillar.id}
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight mb-6 group-hover:text-white transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-400 font-light leading-relaxed transition-colors">
                  {pillar.desc}
                </p>
                <div className="mt-12 h-1 bg-gray-100 w-12 group-hover:w-full group-hover:bg-[#70e000] transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2030 Roadmap */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4">
              <div className="accent-bar bg-[#004b23] w-12 mb-10"></div>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
                The<br />
                <span className="text-[#004b23]">Roadmap</span><br />
                to 2030
              </h2>
              <p className="text-lg text-gray-400 font-light leading-relaxed">
                Our vision is structured across three horizons of digital maturity. Each phase is a milestone toward a more intelligent enterprise landscape.
              </p>
            </div>
            
            <div className="lg:col-span-8">
              <div className="space-y-24 relative">
                {/* Vertical Line */}
                <div className="absolute left-0 lg:left-0 top-0 bottom-0 w-px bg-gray-100"></div>

                {[
                  {
                    year: "2024 - 2025",
                    title: "The Augmentation Phase",
                    desc: "Embedding specialized AI assistants across mission-critical enterprise workflows to enhance immediate human productivity."
                  },
                  {
                    year: "2026 - 2028",
                    title: "Autonomous Orchestration",
                    desc: "Transitioning from reactive tools to self-optimizing digital ecosystems that anticipate market shifts and resource needs."
                  },
                  {
                    year: "2029 - 2030+",
                    title: "Universal Cognitive Fluidity",
                    desc: "Achieving a state where digital and physical operational layers are perfectly synchronized, powered by carbon-neutral compute."
                  }
                ].map((item, i) => (
                  <div key={i} className="relative pl-12 group">
                    <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-gray-200 group-hover:bg-[#004b23] group-hover:scale-150 transition-all"></div>
                    <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#004b23] mb-4 block">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-[#1A1A1A]">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-500 font-light leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive CTA - Further Reduced Font Size & Tightened */}
      <section className="relative py-12 bg-[#0A0A0A] overflow-hidden group">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop" 
            alt="Collaborative Vision" 
            className="w-full h-full object-cover grayscale transition-transform duration-[5000ms] group-hover:scale-110"
          />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white leading-[0.85] mb-6">
            Share the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">Manifesto.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light mb-8 max-w-xl mx-auto">
            Our vision is a collaborative journey. Join us in defining the next era of enterprise excellence.
          </p>
          <button 
            onClick={onInitiateStrategy}
            className="px-12 py-5 bg-white text-[#1A1A1A] text-[11px] font-black uppercase tracking-[0.5em] hover:bg-[#004b23] hover:text-white transition-all shadow-2xl group"
          >
            Initiate Vision Session
            <span className="ml-4 inline-block transform transition-transform group-hover:translate-x-2">→</span>
          </button>
        </div>
      </section>
    </div>
  );
};
