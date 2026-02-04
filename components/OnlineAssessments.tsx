
import React, { useState, useEffect } from 'react';

interface Props { onInitiateStrategy: () => void; }

export const OnlineAssessments: React.FC<Props> = ({ onInitiateStrategy }) => {
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
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-40 grayscale transition-transform duration-100 ease-out will-change-transform"
            style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bbda4833878d?q=80&w=2000" 
              className="w-full h-full object-cover" 
              alt="Data Analytics"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#70e000] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#ccff33] mb-6 block">
              Validation Protocol
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-8">
              Online<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">
                Assessments
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-[#004b23] pl-10">
              Data-driven competency validation. Our adaptive testing engine dynamically adjusts complexity to pinpoint candidate expertise with surgical accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* INTELLIGENCE BLOCK */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="accent-bar bg-[#1A1A1A] w-12 mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1A1A1A] mb-10 leading-tight">
                Adaptive <br /><span className="text-[#004b23]">Intelligence.</span>
              </h2>
              <p className="text-lg text-gray-500 font-light leading-relaxed mb-12">
                Standardized tests fail to capture the nuance of senior talent. Our engine utilizes Item Response Theory (IRT) to adapt in real-time, serving harder problems as candidates prove their proficiency, ensuring a precise skill calibration in half the time.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                {[
                  { val: "60%", label: "Time Saved" },
                  { val: "99%", label: "Cheat Detection" },
                  { val: "45+", label: "Tech Stacks" },
                  { val: "24/7", label: "Availability" }
                ].map((stat, i) => (
                  <div key={i} className="border-t border-gray-100 pt-6 group">
                    <div className="text-3xl font-black text-[#1A1A1A] mb-2 group-hover:text-[#70e000] transition-colors">{stat.val}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
               {/* Visualizing Adaptive Logic */}
               <div className="space-y-6">
                 {[1, 2, 3, 4].map((i) => (
                   <div key={i} className="flex items-center gap-6 group">
                     <div className="w-16 h-16 bg-gray-50 flex items-center justify-center font-black text-[#004b23] border border-gray-100 group-hover:bg-[#004b23] group-hover:text-white transition-all">Q{i}</div>
                     <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                       <div className="h-full bg-[#1A1A1A] group-hover:bg-[#70e000] transition-colors duration-500" style={{ width: `${20 * i}%` }}></div>
                     </div>
                     <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Difficulty {i*25}%</div>
                   </div>
                 ))}
               </div>
               <div className="mt-12 p-8 bg-[#F8F7F9] border-l-4 border-[#004b23]">
                 <p className="text-sm text-gray-500 italic">"The system correctly identified the candidate's proficiency limit at the Senior Architect level within 15 minutes."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOMAIN COVERAGE */}
      <section className="py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black uppercase tracking-widest mb-16 text-center text-[#ccff33]">Full-Stack Validation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { title: "Frontend", tags: ["React", "Vue", "Angular", "WebAssembly"] },
              { title: "Backend", tags: ["Node.js", "Python", "Go", "Java Spring"] },
              { title: "Data Science", tags: ["TensorFlow", "Pandas", "R", "SQL Advanced"] },
              { title: "DevOps", tags: ["Kubernetes", "AWS/Azure", "Terraform", "CI/CD"] }
            ].map((domain, i) => (
              <div key={i} className="p-10 bg-[#1A1A1A] hover:bg-white/5 transition-colors group">
                <h3 className="text-xl font-bold uppercase tracking-tight mb-6 group-hover:text-[#70e000] transition-colors">{domain.title}</h3>
                <ul className="space-y-3">
                  {domain.tags.map(tag => (
                    <li key={tag} className="flex items-center gap-3 text-sm text-gray-400 font-light group-hover:text-white transition-colors">
                      <div className="w-1 h-1 bg-[#ccff33] rounded-full"></div>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-black uppercase tracking-tighter text-[#1A1A1A] mb-8">Deploy Assessment</h2>
          <p className="text-gray-500 mb-12">Start screening your pipeline with enterprise-grade rigour.</p>
          <button 
            onClick={onInitiateStrategy}
            className="px-16 py-6 bg-[#004b23] text-white text-[12px] font-black uppercase tracking-[0.5em] hover:bg-[#1A1A1A] transition-all shadow-xl hover:shadow-2xl"
          >
            Create Test
          </button>
        </div>
      </section>
    </div>
  );
};
