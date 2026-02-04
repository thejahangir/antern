
import React from 'react';

export const Sustainability: React.FC = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-[#70e000] selection:text-[#004b23]">
      {/* 1. HERO */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-[#0A0A0A] overflow-hidden text-white">
        <div className="absolute inset-0 opacity-40 grayscale">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2500" className="w-full h-full object-cover" alt="Sustainable Future" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#004b23]/80 via-[#0A0A0A]/60 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#ccff33] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.5em] text-[#ccff33] mb-6 block">
              Ecological Responsibility
            </span>
            <h1 className="text-5xl md:text-5xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Net-Zero <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">Operations</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl leading-relaxed border-l border-[#ccff33] pl-10">
              Sustainability is a mission-critical metric. Our goal is 100% carbon neutrality by 2030 across all digital infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PILLARS */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
            {[
              { label: 'Green Compute', desc: 'Utilizing carbon-aware scheduling for all heavy processing tasks to maximize renewable energy usage.' },
              { label: 'Circular Ops', desc: '100% recycling program for all corporate and lab hardware, minimizing e-waste contribution.' },
              { label: 'Ethics in AI', desc: 'Building inclusive algorithms that minimize cognitive bias and computational waste.' }
            ].map((p, i) => (
              <div key={i} className="space-y-8 group">
                <div className="w-16 h-16 bg-[#004b23] text-white flex items-center justify-center font-black text-2xl group-hover:bg-[#70e000] group-hover:text-[#004b23] transition-colors">0{i+1}</div>
                <h3 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A]">{p.label}</h3>
                <p className="text-gray-500 leading-relaxed font-light">{p.desc}</p>
                <div className="w-full h-px bg-gray-200 group-hover:bg-[#004b23] transition-colors"></div>
              </div>
            ))}
          </div>
          
          <div className="p-20 bg-[#1A1A1A] relative overflow-hidden text-white group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#004b23] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative z-10">
                <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter text-[#ccff33]">Our Promise</h2>
                <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl italic">
                "We recognize that digital progress must not come at an ecological cost. Antern Technologies is committed to engineering solutions that are as kind to the planet as they are efficient for the enterprise."
                </p>
                <div className="mt-12 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em]">
                    <div className="w-8 h-1 bg-[#ccff33]"></div>
                    Antern ESG Board
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
