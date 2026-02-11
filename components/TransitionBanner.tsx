
import React from 'react';

export const TransitionBanner: React.FC = () => {
  return (
    <section className="bg-white py-32 relative overflow-hidden border-y border-gray-50">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[250px] font-black uppercase text-[#1A1A1A] leading-none tracking-tighter">
          DESIGN
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="accent-bar bg-[#4918A9] w-12 mb-10 mx-auto"></div>
        
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-[1] max-w-4xl">
          Where Engineering Logic <br /> 
          <span className="text-[#4918A9]">Meets Human</span> Experience.
        </h2>
        
        <p className="mt-8 text-lg text-gray-400 font-normal max-w-2xl leading-relaxed">
          We bridge the distance between complex enterprise infrastructure and the people who use it every day.
        </p>
        
        <div className="mt-12 flex items-center gap-4 text-[10px] font-black text-gray-300 uppercase tracking-[0.5em]">
          <span>Strategy</span>
          <div className="w-1.5 h-1.5 bg-[#D9D1DB] rounded-full"></div>
          <span>Engineering</span>
          <div className="w-1.5 h-1.5 bg-[#4918A9] rounded-full"></div>
          <span>Experience</span>
        </div>
      </div>
    </section>
  );
};
