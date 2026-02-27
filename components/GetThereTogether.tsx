
import React from 'react';

interface GetThereTogetherProps {
  onPartner?: () => void;
}

export const GetThereTogether: React.FC<GetThereTogetherProps> = ({ onPartner }) => {
  return (
    <section className="relative w-full py-20 overflow-hidden border-t border-gray-200">
      {/* Background Image Layer - Parallax */}
      <div className="absolute inset-0 z-0">
         <div 
           className="absolute inset-0 bg-fixed bg-center bg-cover opacity-25"
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000')" }}
         />
         <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/50"></div>
      </div>
      
      {/* Content Container - Fixed layout centered */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Heading - Adjusted for compact layout */}
          <div className="text-center md:text-left flex-1">
            <h2 className="text-4xl md:text-5xl font-black  tracking-tighter leading-[0.85] text-[#1A1A1A]">
              Let's get there <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0085F7] to-[#00A94B]">Together.</span>
            </h2>
          </div>
          
          {/* Action - Enhanced Button */}
          <div className="shrink-0">
            <button 
              onClick={onPartner}
              className="group flex items-center gap-6 text-[13px] font-black uppercase tracking-[0.3em] text-[#1A1A1A] hover:text-[#004b23] transition-colors whitespace-nowrap"
            >
              Start Partnership
              <div className="w-16 h-px bg-[#1A1A1A] group-hover:w-24 group-hover:bg-[#004b23] transition-all duration-500"></div>
              <div className="w-12 h-12 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#004b23] group-hover:border-[#004b23] transition-all shadow-lg hover:shadow-xl">
                 <svg className="w-4 h-4 text-[#1A1A1A] group-hover:text-white transform group-hover:-rotate-45 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
