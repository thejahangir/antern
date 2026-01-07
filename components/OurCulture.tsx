
import React, { useState, useEffect } from 'react';

interface Props {
  onExploreCareers: () => void;
  onInitiateStrategy: () => void;
}

export const OurCulture: React.FC<Props> = ({ onExploreCareers, onInitiateStrategy }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen selection:bg-[#4918A9] selection:text-white overflow-hidden">
      {/* 1. KINETIC HERO */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div 
          className="absolute -inset-y-24 inset-x-0 z-0 opacity-40 grayscale"
          style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2500&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Antern Culture Collaboration"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#4918A9] w-32 h-1.5 mb-12"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.8em] text-[#D9D1DB] mb-8 block">
              The Human Operating System
            </span>
            <h1 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-12">
              Our<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9D1DB] via-[#7C4DFF] to-[#4918A9]">
                Culture.
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-400 font-light max-w-2xl leading-tight border-l-2 border-[#4918A9] pl-10 mb-16 italic">
              "Technology is engineered by the mind, but sustained by the heart. At Antern, we build ecosystems where both thrive."
            </p>
          </div>
        </div>

        {/* Floating Detail */}
        <div className="absolute bottom-20 right-10 hidden lg:block">
           <div className="flex flex-col items-center gap-6">
              <div className="w-px h-32 bg-gradient-to-b from-white/20 to-[#4918A9]"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 rotate-90 origin-left mt-24 whitespace-nowrap">Unified Purpose</span>
           </div>
        </div>
      </section>

      {/* 2. THE MANIFESTO */}
      <section className="py-48 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-5">
              <div className="accent-bar bg-[#1A1A1A] w-12 mb-10"></div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-none mb-12">
                The Antern<br />
                <span className="text-[#4918A9]">Manifesto.</span>
              </h2>
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                  className="w-full h-full object-cover" 
                  alt="Team Sync"
                />
              </div>
            </div>
            
            <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
              <p className="text-2xl md:text-4xl text-[#1A1A1A] font-light leading-tight">
                We believe that <span className="font-black text-[#4918A9]">Brilliance</span> is a shared state. 
              </p>
              <p className="text-xl text-gray-500 font-light leading-relaxed">
                Antern isn't just a place to work; it's a sanctuary for high-fidelity thinkers. We've stripped away the hierarchy of traditional enterprise to focus on the hierarchy of ideas. Our culture is built on the radical notion that autonomy, combined with extreme ownership, produces world-class digital systems.
              </p>
              <div className="pt-12 border-t border-gray-100 grid grid-cols-2 gap-12">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">Our Foundation</h4>
                  <p className="text-lg font-bold text-[#1A1A1A]">Cognitive Syncing</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">Our Priority</h4>
                  <p className="text-lg font-bold text-[#1A1A1A]">Mission Velocity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CULTURAL PILLARS */}
      <section className="py-48 bg-[#F8F7F9] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none select-none">
          <span className="text-[400px] font-black text-[#1A1A1A] leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            CORE
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
             <div className="accent-bar bg-[#4918A9] mx-auto w-16 mb-10"></div>
             <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-none">
               The Pillars of <br /><span className="text-[#4918A9]">Our Identity.</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 shadow-2xl">
            {[
              { id: "01", title: "Cognitive Empathy", desc: "Understanding the human impact of every line of code is our primary directive. We don't just build for users; we build for people." },
              { id: "02", title: "Radical Transparency", desc: "Clarity is our currency. We maintain a culture of open information, where every decision is documented and every challenge shared." },
              { id: "03", title: "Extreme Ownership", desc: "Antern engineers are owners. We take full responsibility for the systems we build, from first sketch to final deployment." },
              { id: "04", title: "Continuous Evolution", desc: "Complacency is the enemy of innovation. We foster a lifelong learning mindset, constantly upgrading our skills and perspectives." }
            ].map((pillar) => (
              <div key={pillar.id} className="bg-white p-12 md:p-20 group hover:bg-[#1A1A1A] transition-all duration-700 min-h-[450px] flex flex-col justify-between">
                <div>
                  <span className="text-4xl font-black text-gray-100 group-hover:text-white/10 transition-colors block mb-10">
                    {pillar.id}
                  </span>
                  <h3 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] group-hover:text-white mb-6 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-400 font-light text-lg leading-relaxed transition-colors">
                    {pillar.desc}
                  </p>
                </div>
                <div className="w-12 h-1 bg-[#4918A9] group-hover:w-full transition-all duration-1000 mt-12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE STUDIO EXPERIENCE */}
      <section className="py-48 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            
            <div className="lg:col-span-6 relative">
               <div className="relative z-10 aspect-square overflow-hidden grayscale group hover:grayscale-0 transition-all duration-1000 shadow-3xl">
                  <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Workspace" />
               </div>
               <div className="absolute -top-10 -right-10 w-40 h-40 border-t border-r border-[#4918A9] opacity-20 pointer-events-none"></div>
               <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b border-l border-[#4918A9] opacity-20 pointer-events-none"></div>
            </div>

            <div className="lg:col-span-6">
              <div className="accent-bar bg-[#4918A9] w-24 mb-10"></div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-none mb-10">
                The Global <br />
                <span className="text-[#4918A9]">Studio Experience.</span>
              </h2>
              <div className="space-y-10 text-xl text-gray-500 font-light leading-relaxed">
                <p>
                  Our hubs in Bangalore, Hyderabad, and the United States are designed for deep work and seamless global sync. We prioritize focus over noise.
                </p>
                <p>
                  Whether remote or in-studio, Antern provides a fluid digital environment equipped with the latest cognitive tools to ensure your thinking isn't limited by your infrastructure.
                </p>
                <div className="pt-12 flex flex-wrap gap-8">
                  {[
                    "Research Labs",
                    "AIOps Nodes",
                    "Fluid Workspaces",
                    "Global Sync Rooms"
                  ].map(label => (
                    <div key={label} className="flex items-center gap-3">
                       <div className="w-2 h-2 bg-[#4918A9]"></div>
                       <span className="text-[11px] font-black uppercase tracking-widest text-[#1A1A1A]">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-48 bg-[#1A1A1A] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4918A9]/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="accent-bar bg-[#D9D1DB] mx-auto w-24 mb-12"></div>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white mb-12">
            Are you <br />
            <span className="text-[#D9D1DB]">Sync Material?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-20 leading-relaxed">
            We are always looking for high-fidelity talent to join our global network of thinkers and doers.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button 
              onClick={onExploreCareers}
              className="px-16 py-7 bg-white text-[#1A1A1A] text-[12px] font-black uppercase tracking-[0.6em] hover:bg-[#4918A9] hover:text-white transition-all shadow-3xl group"
            >
              View Open Roles
              <span className="ml-4 inline-block transform transition-transform group-hover:translate-x-2">→</span>
            </button>
            <button 
              onClick={onInitiateStrategy}
              className="px-16 py-7 border border-white/20 text-white text-[12px] font-black uppercase tracking-[0.6em] hover:bg-white hover:text-[#1A1A1A] transition-all"
            >
              Partner with Us
            </button>
          </div>
        </div>
      </section>

      {/* Background Typography */}
      <div className="fixed bottom-0 left-0 w-full opacity-[0.01] text-[400px] font-black pointer-events-none select-none z-0 tracking-tighter">
        CULTURE
      </div>
    </div>
  );
};
