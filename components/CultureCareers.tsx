
import React from 'react';

interface CultureCareersProps {
  onExploreCareers?: () => void;
  onExploreCulture?: () => void;
}

export const CultureCareers: React.FC<CultureCareersProps> = ({ onExploreCareers, onExploreCulture }) => {
  return (
    <section id="careers" className="bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Culture Block */}
          <div 
            className="relative group cursor-pointer overflow-hidden border-r border-gray-100"
            onClick={onExploreCulture}
          >
            <div className="aspect-[4/3] lg:aspect-auto lg:h-[700px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600" 
                alt="Antern Culture" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-[#1A1A1A]/40 group-hover:bg-[#1A1A1A]/10 transition-colors duration-700"></div>
            </div>
            
            <div className="absolute inset-0 p-12 md:p-20 flex flex-col justify-end pointer-events-none">
              <div className="accent-bar bg-white w-12 mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-6">
                Our<br />Culture
              </h2>
              <p className="text-white/80 text-lg md:text-xl max-w-sm mb-10 font-normal leading-relaxed">
                Where technical precision meets human empathy. We build for people, by people.
              </p>
              <div className="pointer-events-auto">
                <button 
                  onClick={(e) => { e.stopPropagation(); onExploreCulture?.(); }}
                  className="group/btn flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-white"
                >
                  Learn about our values
                  <div className="w-12 h-px bg-white group-hover/btn:w-20 transition-all duration-500"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Careers Block */}
          <div className="relative group cursor-pointer overflow-hidden bg-[#F8F7F9]">
            <div className="p-12 md:p-20 lg:p-32 flex flex-col h-full justify-center">
              <div className="accent-bar bg-[#4918A9] w-12 mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-[0.9] mb-8">
                Advance<br />
                <span className="text-[#4918A9]">Your Career</span>
              </h2>
              <p className="text-gray-500 text-xl max-w-md mb-12 font-normal leading-relaxed">
                Join a global team of thinkers and doers modernizing the world's most vital digital infrastructure.
              </p>
              
              <div className="space-y-6 mb-16">
                <div className="flex items-center justify-between py-4 border-b border-gray-200 group/link" onClick={onExploreCareers}>
                  <span className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">Engineering & Tech</span>
                  <svg className="w-5 h-5 text-[#4918A9] transform group-hover/link:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-200 group/link" onClick={onExploreCareers}>
                  <span className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">Product & Strategy</span>
                  <svg className="w-5 h-5 text-[#4918A9] transform group-hover/link:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-200 group/link" onClick={onExploreCareers}>
                  <span className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A]">Consulting Services</span>
                  <svg className="w-5 h-5 text-[#4918A9] transform group-hover/link:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              <div>
                <button 
                  onClick={onExploreCareers}
                  className="px-10 py-5 bg-[#1A1A1A] text-white text-[11px] font-black uppercase tracking-[0.3em] hover:bg-[#4918A9] transition-all duration-500"
                >
                  Search All Openings
                </button>
              </div>
            </div>
            
            {/* Visual Detail: Floating Plus symbol */}
            <div className="absolute top-1/2 right-12 -translate-y-1/2 opacity-5 pointer-events-none">
              <span className="text-[300px] font-normal text-[#4918A9] leading-none">+</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
