
import React, { useState, useEffect } from 'react';

interface Props { onInitiateStrategy: () => void; }

export const ScanningResume: React.FC<Props> = ({ onInitiateStrategy }) => {
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
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-30 grayscale transition-transform duration-100 ease-out will-change-transform"
            style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000" 
              className="w-full h-full object-cover" 
              alt="Semantic Analysis"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#70e000] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#ccff33] mb-6 block">
              Intelligent Parser
            </span>
            <h1 className="text-5xl md:ext-5xl lg:text-5xl font-black text-white tracking-tighter leading-[0.85] mb-8">
              Scanning <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">Resume.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-normal max-w-2xl leading-relaxed border-l border-[#004b23] pl-10">
              Beyond keywords. Our semantic engine understands context, career velocity, and implied skills to match talent with opportunity instantly.
            </p>
          </div>
        </div>
      </section>

      {/* SEMANTIC LAYER */}
      <section className="py-32 bg-[#F8F7F9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
               <div className="absolute top-0 -left-10 w-full h-full border-2 border-[#ccff33] opacity-50"></div>
               <div className="bg-white p-12 shadow-2xl relative z-10">
                 <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#004b23] mb-8">Input Stream</h3>
                 <div className="font-mono text-xs text-gray-400 leading-relaxed mb-8">
                   "Led migration of legacy monolith to microservices using K8s..."
                 </div>
                 <div className="flex flex-col gap-4">
                   <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-100">
                     <span className="font-bold text-[#1A1A1A]">Leadership</span>
                     <span className="text-[#004b23] font-mono font-bold">Detected (0.98)</span>
                   </div>
                   <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-100">
                     <span className="font-bold text-[#1A1A1A]">Kubernetes</span>
                     <span className="text-[#004b23] font-mono font-bold">Detected (0.99)</span>
                   </div>
                   <div className="flex items-center justify-between p-3 bg-gray-50 border border-gray-100">
                     <span className="font-bold text-[#1A1A1A]">Architecture</span>
                     <span className="text-[#004b23] font-mono font-bold">Inferred (0.95)</span>
                   </div>
                 </div>
               </div>
            </div>

            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter text-[#1A1A1A] mb-8">Contextual <span className="text-[#004b23]">Understanding.</span></h2>
              <p className="text-lg text-gray-500 font-normal leading-relaxed mb-10">
                Traditional parsers miss the story. Our AI reads between the lines, identifying leadership potential, project complexity, and transferable skills that aren't explicitly listed.
              </p>
              <ul className="space-y-6">
                {[
                  "Natural Language Processing (NLP)",
                  "Bias Reduction Algorithms",
                  "Automated Formatting Standardization",
                  "Instant ATS Integration"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-[#70e000] rotate-45"></div>
                    <span className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE MATCHING CORE */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="accent-bar bg-[#004b23] mx-auto w-12 mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1A1A1A] mb-20">The Matching Core</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 group">
              <div className="w-20 h-20 bg-[#1A1A1A] text-white flex items-center justify-center text-3xl font-black mx-auto mb-8 rounded-full group-hover:bg-[#004b23] transition-colors">1</div>
              <h4 className="text-lg font-black uppercase tracking-tight mb-4">Ingest</h4>
              <p className="text-sm text-gray-500">Bulk upload thousands of resumes. Our engine processes PDFs, DOCXs, and images instantly.</p>
            </div>
            <div className="p-8 group">
              <div className="w-20 h-20 bg-[#1A1A1A] text-white flex items-center justify-center text-3xl font-black mx-auto mb-8 rounded-full group-hover:bg-[#004b23] transition-colors">2</div>
              <h4 className="text-lg font-black uppercase tracking-tight mb-4">Parse & Tag</h4>
              <p className="text-sm text-gray-500">Extracts 150+ data points per candidate, structuring unstructured data into a queryable JSON format.</p>
            </div>
            <div className="p-8 group">
              <div className="w-20 h-20 bg-[#1A1A1A] text-white flex items-center justify-center text-3xl font-black mx-auto mb-8 rounded-full group-hover:bg-[#004b23] transition-colors">3</div>
              <h4 className="text-lg font-black uppercase tracking-tight mb-4">Rank</h4>
              <p className="text-sm text-gray-500">Candidates are scored against JD requirements with percentage-fit indicators for rapid shortlisting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-48 bg-[#1A1A1A] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:ext-5xl font-black uppercase tracking-tighter text-white mb-12">
            Process <span className="text-[#ccff33]">Faster.</span>
          </h2>
          <button 
            onClick={onInitiateStrategy}
            className="px-16 py-6 border border-white/20 text-white text-[12px] font-black uppercase tracking-[0.5em] hover:bg-white hover:text-[#1A1A1A] transition-all"
          >
            Try Resume Parser
          </button>
        </div>
      </section>
    </div>
  );
};
