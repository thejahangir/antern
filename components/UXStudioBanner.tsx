
import React from 'react';

interface UXStudioBannerProps {
  onKnowDetails: () => void;
}

export const UXStudioBanner: React.FC<UXStudioBannerProps> = ({ onKnowDetails }) => {
  return (
    <section className="relative py-32 bg-[#1A1A1A] overflow-hidden group">
      {/* Background Graphic Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#004b23]" fill="currentColor">
          <circle cx="80" cy="50" r="40" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="accent-bar bg-[#70e000]"></div>
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#ccff33] mb-6 block">Specialized Studio</span>
            <h2 className="text-5xl md:ext-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Antern <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">UX Studio</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed font-light">
              Crafting human-centric digital experiences that bridge the gap between complex enterprise technology and intuitive user interaction.
            </p>
            <button 
              onClick={onKnowDetails}
              className="group flex items-center gap-6 text-[14px] font-black uppercase tracking-[0.4em] text-white"
            >
              Know Details
              <div className="w-12 h-px bg-white group-hover:w-24 group-hover:bg-[#70e000] transition-all duration-700"></div>
              <svg className="w-6 h-6 text-[#70e000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          
          <div className="relative w-full aspect-square lg:aspect-video overflow-hidden border border-white/10 shadow-2xl">
            {/* Using a more vibrant, reliable image for visibility */}
            <img 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop" 
              alt="UX Design Studio Interior" 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
            />
            {/* Lighter overlay to ensure image isn't "blacked out" */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent"></div>
            
            {/* Subtle Tech Pattern Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-10 transition-opacity duration-1000" 
                 style={{ backgroundImage: 'radial-gradient(#004b23 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
