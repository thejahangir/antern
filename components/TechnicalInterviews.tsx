
import React, { useState, useEffect } from 'react';

interface Props { onInitiateStrategy: () => void; }

export const TechnicalInterviews: React.FC<Props> = ({ onInitiateStrategy }) => {
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
      {/* KINETIC HERO */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-30 grayscale transition-transform duration-100 ease-out will-change-transform"
            style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2000" 
              className="w-full h-full object-cover" 
              alt="Technical Interview Code"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
          {/* Matrix Grid Effect */}
          <div className="absolute inset-0 opacity-[0.05]" 
               style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(112, 224, 0, .3) 25%, rgba(112, 224, 0, .3) 26%, transparent 27%, transparent 74%, rgba(112, 224, 0, .3) 75%, rgba(112, 224, 0, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(112, 224, 0, .3) 25%, rgba(112, 224, 0, .3) 26%, transparent 27%, transparent 74%, rgba(112, 224, 0, .3) 75%, rgba(112, 224, 0, .3) 76%, transparent 77%, transparent)', backgroundSize: '50px 50px' }}>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#70e000] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#ccff33] mb-6 block">
              Evaluation Engine
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Technical<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">
                Interviews
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-[#004b23] pl-10">
              Precision evaluation at scale. We combine human expertise with algorithmic insights to validate engineering talent with zero bias.
            </p>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <div className="accent-bar bg-[#1A1A1A] w-12 mb-8"></div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-[0.95] mb-12">
                The Interview <br />
                <span className="text-[#004b23]">OS.</span>
              </h2>
              <div className="space-y-10">
                {[
                  { title: "Live Coding Environments", desc: "Browser-based IDEs supporting 40+ languages with collaborative cursors and execution sandboxes." },
                  { title: "System Design Whiteboarding", desc: "Infinite canvas for architectural diagramming, enabling candidates to visualize complex distributed systems." },
                  { title: "Soft Skill Analytics", desc: "AI-driven sentiment analysis to gauge communication clarity, cultural fit, and problem-solving adaptability." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <h3 className="text-xl font-bold uppercase tracking-tight text-[#1A1A1A] mb-2 group-hover:text-[#004b23] transition-colors">{item.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] bg-[#1A1A1A] border border-gray-100 overflow-hidden shadow-2xl group">
                {/* Abstract Code UI */}
                <div className="absolute top-0 left-0 w-full h-12 bg-white/5 border-b border-white/10 flex items-center px-6 gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5252]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFB74D]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#00E676]"></div>
                </div>
                <div className="p-12 mt-8 font-mono text-sm text-gray-400 leading-loose">
                  <span className="text-[#70e000]">const</span> <span className="text-[#ccff33]">evaluateCandidate</span> = <span className="text-[#70e000]">async</span> (profile) ={'>'} {'{'}
                  <br />
                  &nbsp;&nbsp;<span className="text-[#70e000]">const</span> skills = <span className="text-[#70e000]">await</span> extractSkills(profile.dossier);
                  <br />
                  &nbsp;&nbsp;<span className="text-[#70e000]">const</span> score = calculateVelocity(skills, benchmarks);
                  <br />
                  &nbsp;&nbsp;<span className="text-gray-600">// Real-time heuristic analysis</span>
                  <br />
                  &nbsp;&nbsp;
                  <span className="text-[#70e000]">return</span>
                  {' score > 95 ? '}
                  <span className="text-green-400">'HIRE'</span>
                  {' : '}
                  <span className="text-red-400">'PASS'</span>
                  {';'}
                  <br />
                  {'}'}
                </div>
                {/* Floating Metrics */}
                <div className="absolute bottom-10 right-10 bg-white p-6 shadow-xl border-l-4 border-[#70e000] transform group-hover:translate-y-[-10px] transition-transform duration-500">
                  <div className="text-3xl font-black text-[#1A1A1A]">98.4%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-32 bg-[#F8F7F9] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-3xl font-black uppercase tracking-widest text-[#1A1A1A]">The Validation Pipeline</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", label: "Calibration", text: "Defining role-specific competency matrices." },
              { step: "02", label: "Assessment", text: "Asynchronous coding challenges to filter top 10%." },
              { step: "03", label: "Live Round", text: "Expert-led technical deep dives with senior engineers." },
              { step: "04", label: "Report", text: "Granular feedback and hiring recommendation." }
            ].map((s, i) => (
              <div key={i} className="bg-white p-10 border-t-4 border-[#004b23] hover:border-[#70e000] hover:shadow-lg transition-all cursor-default group">
                <span className="text-5xl font-black text-gray-100 group-hover:text-[#ccff33] transition-colors mb-6 block">{s.step}</span>
                <h4 className="text-lg font-bold uppercase tracking-tight mb-4 text-[#1A1A1A]">{s.label}</h4>
                <p className="text-sm text-gray-500 font-light">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 bg-[#1A1A1A] text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 100 L100 0" stroke="white" strokeWidth="0.5" />
           </svg>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-10 leading-none">
            Hire with <br /><span className="text-[#ccff33]">Certainty.</span>
          </h2>
          <button 
            onClick={onInitiateStrategy}
            className="px-12 py-6 bg-white text-[#1A1A1A] text-[12px] font-black uppercase tracking-[0.5em] hover:bg-[#70e000] hover:text-[#004b23] transition-all group"
          >
            Schedule Demo
            <span className="ml-4 inline-block transform transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </section>
    </div>
  );
};
