
import React from 'react';

export const GetThereTogether: React.FC = () => {
  return (
    <section className="relative bg-white py-32 md:py-48 overflow-hidden">
      {/* Background Image Layer - Adjusted opacity for greater prominence */}
      <div className="absolute inset-0 z-0 opacity-[0.3] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000" 
          alt="Modern Collaborative Space" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="accent-bar bg-[#004b23] w-16 mb-12 mx-auto"></div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-[#1A1A1A] mb-16">
            Let's get there <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004b23] to-[#70e000]">Together.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <a 
              href="#contact" 
              className="group flex items-center gap-6 text-[14px] font-black uppercase tracking-[0.4em] text-[#1A1A1A]"
            >
              Partner with antern
              <div className="w-12 h-px bg-[#1A1A1A] group-hover:w-24 group-hover:bg-[#004b23] transition-all duration-700"></div>
              <svg className="w-6 h-6 text-[#004b23]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Background decoration: Subtle repeating text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-[0.02] pointer-events-none whitespace-nowrap select-none z-0">
        <span className="text-[150px] font-black uppercase tracking-tighter text-[#1A1A1A]">
          TRANSFORMATION INNOVATION MODERNIZATION SCALE AGILITY TRANSFORMATION INNOVATION MODERNIZATION SCALE AGILITY
        </span>
      </div>
    </section>
  );
};
