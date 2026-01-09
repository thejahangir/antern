
import React, { useState, useEffect } from 'react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#004b23] text-white flex items-center justify-center transition-all duration-500 shadow-2xl hover:bg-[#70e000] hover:text-[#004b23] group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      {/* Dynamic line effect */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-white/20">
        <div className="h-full bg-[#ccff33] w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
      
      <svg 
        className="w-6 h-6 transform transition-transform group-hover:-translate-y-1" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
      
      {/* Side Label (revealed on hover) */}
      <span className="absolute right-full mr-4 px-3 py-1 bg-[#1A1A1A] text-[#70e000] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Top
      </span>
    </button>
  );
};
