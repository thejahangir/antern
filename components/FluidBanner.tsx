
import React from 'react';
interface FluidBannerProps {
  onExplore?: () => void;
}

export const FluidBanner: React.FC<FluidBannerProps> = ({ onExplore }) => {
  return (
    <section className="relative py-16 bg-[#1A1A1A] overflow-hidden group border-y border-white/5">
      {/* Background Graphic Element - Subtle Texture */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#004b23]" fill="currentColor">
          <circle cx="80" cy="50" r="40" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left: Heading & Label */}
          <div className="flex items-center gap-8 w-full md:w-auto">
             <div className="hidden md:block w-1 h-12 bg-[#70e000]"></div>
             <div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ccff33] block mb-1">
                  Core Infrastructure
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none">
                  Managed <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">IT Services</span>
                </h2>
             </div>
          </div>

          {/* Right: Tags & Minimal CTA */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full md:w-auto justify-between md:justify-end">
             <div className="flex flex-wrap justify-center md:justify-end gap-3">
                {['Cloud Ops', 'Cyber Security', 'Network Arch'].map((tag) => (
                    <span key={tag} className="text-[9px] font-bold uppercase tracking-widest text-white/50 border border-white/10 px-3 py-1.5 rounded-sm whitespace-nowrap hover:text-white hover:border-[#70e000] transition-colors cursor-default">
                        {tag}
                    </span>
                ))}
             </div>
             
             <button 
                onClick={onExplore}
                className="group/btn flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white cursor-pointer hover:text-[#70e000] transition-colors shrink-0"
             >
                Explore
                <div className="w-6 h-px bg-white group-hover/btn:w-12 group-hover/btn:bg-[#70e000] transition-all duration-500"></div>
                <svg className="w-3.5 h-3.5 text-[#70e000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};
