
import React, { useState, useEffect } from 'react';

export const About: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="relative py-48 bg-white overflow-hidden selection:bg-[#70e000] selection:text-[#004b23]">
      {/* Background Watermark Layer */}
      <div 
        className="absolute top-20 right-[-15%] text-[500px] font-black text-[#1A1A1A]/[0.02] select-none pointer-events-none leading-none tracking-tighter"
        style={{ transform: `translate3d(${-offsetY * 0.15}px, 0, 0)` }}
      >
        ANTERN
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 1. NARRATIVE HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 items-end">
          <div className="lg:col-span-8">
            <div className="accent-bar bg-[#004b23] w-32 h-1.5 mb-12"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.8em] text-[#004b23] mb-8 block">The Antern Narrative</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.8] text-[#1A1A1A]">
              Decades of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004b23] to-[#70e000]">
                Excellence.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 pb-4">
            <div className="relative p-10 border-l border-gray-100 bg-gray-50/30">
              <p className="text-xl text-gray-500 font-light leading-relaxed italic">
                "We bridge the gap between engineering logic and human instinct, scaling mission-critical systems with surgical precision."
              </p>
              <div className="absolute top-0 left-0 w-2 h-2 bg-[#004b23]"></div>
            </div>
          </div>
        </div>

        {/* 2. STRATEGIC PILLARS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-100 border border-gray-100 mb-32">
          <div className="bg-white p-12 md:p-24 group hover:bg-[#1A1A1A] transition-all duration-700">
            <div className="flex items-center gap-6 mb-16">
              <div className="w-20 h-px bg-[#004b23] group-hover:bg-white/30 transition-all group-hover:w-32"></div>
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-gray-400 group-hover:text-[#70e000] transition-colors">Strategic Ops</span>
            </div>
            <h3 className="text-4xl font-black uppercase tracking-tighter text-[#1A1A1A] group-hover:text-white mb-10 transition-colors leading-none">
              Enterprise <br />Resilience
            </h3>
            <p className="text-lg text-gray-500 group-hover:text-gray-400 font-light leading-relaxed transition-colors max-w-sm mb-12">
              Antern was founded on the principle that digital infrastructure must be as resilient as the industries it supports. We specialize in zero-trust architectures that empower global scale.
            </p>
            <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-[#1A1A1A] group-hover:text-white transition-colors">
              Explore Capability <div className="w-8 h-px bg-current"></div>
            </button>
          </div>

          <div className="bg-white p-12 md:p-24 group hover:bg-[#004b23] transition-all duration-700">
            <div className="flex items-center gap-6 mb-16">
              <div className="w-20 h-px bg-[#1A1A1A] group-hover:bg-white/30 transition-all group-hover:w-32"></div>
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-gray-400 group-hover:text-[#ccff33] transition-colors">Core Design</span>
            </div>
            <h3 className="text-4xl font-black uppercase tracking-tighter text-[#1A1A1A] group-hover:text-white mb-10 transition-colors leading-none">
              Cognitive <br />Fluidity
            </h3>
            <p className="text-lg text-gray-500 group-hover:text-white/80 font-light leading-relaxed transition-colors max-w-sm mb-12">
              Technology should disappear into the user's workflow. Our UX Studio applies behavioral science to high-density data, creating frictionless pathways for industrial-scale decision making.
            </p>
            <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-[#1A1A1A] group-hover:text-white transition-colors">
              Our Methodology <div className="w-8 h-px bg-current"></div>
            </button>
          </div>
        </div>

        {/* 3. IMPACT SYNC SECTION */}
        <div className="relative group overflow-hidden bg-[#1A1A1A] min-h-[600px] flex flex-col lg:flex-row items-stretch">
          {/* Visual Layer */}
          <div className="lg:w-1/2 relative overflow-hidden h-[500px] lg:h-auto border-r border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000" 
              className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-105"
              alt="Antern Global Reach"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-transparent to-transparent"></div>
            
            {/* Scanline Detail */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
               <div className="w-full h-px bg-white/40 absolute top-1/2 left-0"></div>
               <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100% 4px' }}></div>
            </div>
          </div>

          {/* Metrics Layer */}
          <div className="lg:w-1/2 p-12 md:p-24 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-[200px] font-black leading-none pointer-events-none text-white">
              +
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative z-10">
              <div className="relative group/metric">
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#70e000] group-hover/metric:text-[#ccff33] mb-4 block transition-colors">Longevity</span>
                <div className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#70e000] group-hover/metric:to-[#ccff33] transition-all">10+</div>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-widest group-hover/metric:text-gray-400 transition-colors">Years of strategic presence</p>
              </div>
              <div className="relative group/metric">
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#70e000] group-hover/metric:text-[#ccff33] mb-4 block transition-colors">Velocity</span>
                <div className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#70e000] group-hover/metric:to-[#ccff33] transition-all">500+</div>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-widest group-hover/metric:text-gray-400 transition-colors">Digital systems delivered</p>
              </div>
              <div className="relative group/metric">
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#70e000] group-hover/metric:text-[#ccff33] mb-4 block transition-colors">Scale</span>
                <div className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#70e000] group-hover/metric:to-[#ccff33] transition-all">24/7</div>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-widest group-hover/metric:text-gray-400 transition-colors">Operational Intelligence sync</p>
              </div>
              <div className="relative group/metric">
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#70e000] group-hover/metric:text-[#ccff33] mb-4 block transition-colors">Quality</span>
                <div className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#70e000] group-hover/metric:to-[#ccff33] transition-all">01</div>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-widest group-hover/metric:text-gray-400 transition-colors">Unified Excellence standard</p>
              </div>
            </div>

            <div className="mt-24 pt-16 border-t border-white/5">
              <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
                Our multi-disciplinary teams operate across three global tech corridors, ensuring seamless delivery and mission-critical support for our Global 500 partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
