
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onInitiateStrategy?: () => void;
  onViewSolutions?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onInitiateStrategy, onViewSolutions }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-[#1A1A1A]">
      {/* Background Image with Parallax & Scale Overlay */}
      <div 
        className="absolute -inset-y-24 inset-x-0 z-0 will-change-transform opacity-40"
        style={{ 
          transform: `translate3d(0, ${offsetY * 0.2}px, 0) scale(${1 + offsetY * 0.0004})` 
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/70 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          <div className="accent-bar"></div>
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tight">
          Hybrid Intelligence.<br />
            <span className="bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33] bg-clip-text text-transparent">Enterprise</span> Execution.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl leading-relaxed border-l-4 border-[#70e000] pl-6"> 

          We are a technology-driven product and services company specializing in On-Demand Technical Interviews, Technical Assessments, Resume Screening, and Project Portfolio Management. Our solutions are powered by proprietary platforms — <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#70e000] to-[#ccff33]">IamInterviewed</span>, <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#70e000] to-[#ccff33]">SkillTest</span>, <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#70e000] to-[#ccff33]">ScanJD</span>, and <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#70e000] to-[#ccff33]">DelOrg</span> — developed to deliver efficiency, accuracy, and innovation
          
          
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onInitiateStrategy}
              className="px-10 py-5 bg-[#004b23] text-white font-bold uppercase tracking-widest text-sm hover:bg-[#70e000] hover:text-[#004b23] transition-all"
            >
              Initiate Strategy Session
            </button>
            <button 
              onClick={onViewSolutions}
              className="px-10 py-5 border border-white/30 text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#1A1A1A] transition-all"
            >
              View Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
