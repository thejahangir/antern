
import React, { useState, useEffect } from 'react';
import ram from '../src/assets/img/leadership/ramk.png';

interface CEOProps {
  onInitiateStrategy?: () => void;
}

export const CEOMessage: React.FC<CEOProps> = ({ onInitiateStrategy }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const visionHorizons = [
    {
      period: "2025 - 2026",
      title: "Cognitive Foundation",
      desc: "Establishing the bedrock of autonomous enterprise systems, moving beyond simple automation to predictive intelligence."
    },
    {
      period: "2027 - 2028",
      title: "Global Resilience",
      desc: "Scaling our infrastructure to support 100% cloud-native fluidity with zero-trust security as a fundamental utility."
    },
    {
      period: "2029 - 2030",
      title: "Universal Intelligence",
      desc: "Reaching a state of 'Invisibility Logic' where Antern's systems power the invisible layer of the world's most vital operations."
    }
  ];

  return (
    <div className="bg-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[800px] bg-[#0A0A0A] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="absolute right-0 top-0 w-full lg:w-3/4 h-full grayscale opacity-60 transition-transform duration-1000 ease-out"
            style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
          >
            <img 
              src={ram} 
              alt="Ramakrishna RL" 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
          </div>
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full h-full flex flex-col justify-center">
          <div className="relative">
            <div className="absolute -top-40 -left-20 text-[18vw] font-black text-white/[0.03] uppercase leading-none select-none pointer-events-none tracking-tighter">
              Executive
            </div>
            <div className="max-w-3xl">
              <div className="accent-bar bg-[#4918A9] w-24 h-1 mb-12"></div>
              <span className="text-[12px] font-black uppercase tracking-[0.8em] text-[#D9D1DB] mb-8 block">
                Official Correspondence
              </span>
              <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] text-white mb-10">
                The<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">
                  Directive.
                </span>
              </h1>
              <p className="text-xl md:text-3xl text-gray-400 font-light leading-tight max-w-2xl border-l-2 border-[#4918A9] pl-10 italic">
                "We are not here to predict the future, but to engineer the infrastructure that makes it inevitable."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-48 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
              <div className="accent-bar bg-[#4918A9] w-12 mb-8"></div>
              <h3 className="text-sm font-black uppercase tracking-[0.4em] text-gray-400 mb-12">Our Foundational Ethics</h3>
              <div className="space-y-12">
                {[
                  { t: "Cognitive Sovereignty", d: "Empowering every partner to own their intelligence." },
                  { t: "Invisibility Logic", d: "Technology that disappears into the workflow." },
                  { t: "Human Resonance", d: "Designing for instinct, not just interaction." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <h4 className="text-xl font-bold uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#4918A9] transition-colors mb-2">{item.t}</h4>
                    <p className="text-gray-500 font-light text-sm">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#1A1A1A] mb-12 leading-[0.9]">
                Architectural Integrity <br />
                <span className="text-[#4918A9]">is our true north.</span>
              </h2>
              <div className="space-y-10 text-xl text-gray-500 font-light leading-relaxed">
                <p>
                  At Antern Technologies, we believe we are living through a historical pivot. The digital age, characterized by noise and fragmented data, is giving way to an era of Cognitive Intelligence. This shift requires more than just faster processors; it requires a new philosophy of building.
                </p>
                <p>
                  My commitment since founding Antern has been to ensure that every enterprise we partner with doesn't just survive this transition, but leads it. We prioritize the *architecture of clarity* over the *volume of output*. 
                </p>
                <div className="py-12 my-12 border-y border-gray-100 italic">
                  <p className="text-3xl font-bold text-[#1A1A1A] leading-tight">
                    "We don’t build products; we build industrial-strength trust that powers the next generation of global infrastructure."
                  </p>
                </div>
                <p>
                  This mission-critical mindset is what separates a vendor from a strategic partner. As we look forward, our focus remains on providing the secure, scalable, and intuitive systems that allow humans to focus on high-level strategic thinking while our technology handles the complexity of execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-48 bg-[#F8F7F9] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <div className="accent-bar bg-[#4918A9] w-24 mb-10"></div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-none">
                Vision <br />
                <span className="text-[#4918A9]">2025 - 2030.</span>
              </h2>
            </div>
            <p className="text-xs font-black uppercase tracking-[0.5em] text-gray-400 border-l border-gray-200 pl-8 max-w-[200px]">
              The Strategic Roadmap to Universal Intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {visionHorizons.map((horizon, i) => (
              <div key={i} className="bg-white p-12 md:p-16 hover:bg-[#1A1A1A] group transition-all duration-700 h-full flex flex-col justify-between min-h-[450px]">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#4918A9] group-hover:text-white mb-10 block transition-colors">
                    Horizon 0{i+1}
                  </span>
                  <div className="text-5xl font-black text-gray-200 group-hover:text-white/30 transition-colors mb-6">
                    {horizon.period}
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] group-hover:text-white transition-colors mb-6 leading-none">
                    {horizon.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-400 font-light leading-relaxed transition-colors">
                    {horizon.desc}
                  </p>
                </div>
                <div className="w-12 h-1 bg-[#4918A9] group-hover:w-full transition-all duration-700 mt-12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-64 bg-[#1A1A1A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop" 
            alt="Antern Community" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-[#1A1A1A]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="accent-bar bg-[#D9D1DB] mx-auto w-16 mb-12"></div>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white mb-12">
            A Note of <br />
            <span className="text-[#D9D1DB]">Deep Gratitude.</span>
          </h2>
          <div className="space-y-8 text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-16">
            <p>
              Antern Technologies is not just a company of code and architecture; it is a community of shared purpose. To our 500+ global partners, thank you for trusting us with your most vital digital assets.
            </p>
            <p>
              To our team—the thinkers, the doers, and the visionaries—you are the engine that makes "Bright Thinking" a reality every single day. 
            </p>
            <p>
              We have traveled a remarkable decade together, and as we step into this next strategic horizon, I am more inspired than ever by the collective intelligence of this global network.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative mb-8 group">
              <span className="text-6xl md:text-8xl font-light text-white opacity-90 select-none animate-draw" style={{ fontFamily: 'Georgia, serif' }}>
                Ramakrishna RL
              </span>
              <div className="absolute -bottom-4 left-0 w-full h-px bg-[#4918A9] scale-x-0 animate-expand-line"></div>
            </div>
            <p className="text-[12px] font-black uppercase tracking-[0.8em] text-gray-500">
              Chief Executive Officer & Founder
            </p>
            
            <div className="mt-20 flex flex-wrap justify-center gap-6">
               <button 
                onClick={onInitiateStrategy}
                className="px-12 py-5 bg-[#4918A9] text-white text-[11px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-[#1A1A1A] transition-all shadow-xl group"
               >
                 Initiate a Discussion
                 <span className="ml-4 inline-block transform transition-transform group-hover:translate-x-2">→</span>
               </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 items-center text-center">
           {[
             { label: "Founded", val: "2014" },
             { label: "Global Presence", val: "USA, India" },
             { label: "Strategic Partners", val: "200+" },
             { label: "Impact Rating", val: "A+" }
           ].map((stat, i) => (
             <div key={i} className="flex flex-col">
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">{stat.label}</span>
               <span className="text-2xl font-black text-[#1A1A1A]">{stat.val}</span>
             </div>
           ))}
        </div>
      </section>

      <style>{`
        @keyframes draw {
          from { opacity: 0; filter: blur(10px); }
          to { opacity: 1; filter: blur(0); }
        }
        .animate-draw {
          animation: draw 2s ease-out forwards;
        }
        @keyframes expand-line {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-expand-line {
          animation: expand-line 1.5s 1s ease-out forwards;
          transform-origin: left;
        }
      `}</style>
    </div>
  );
};
