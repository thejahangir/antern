
import React, { useEffect, useRef, useState } from 'react';

export const ProductOverview: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#fcfcf9] py-12 md:py-20 relative overflow-hidden font-sans selection:bg-[#0085F7] selection:text-white"
    >
      {/* --- EXTRA ORDINARY LAYER 1: The Technical Grid --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* --- EXTRA ORDINARY LAYER 2: Floating Digital Dust --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-[#0085F7]/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* --- EXTRA ORDINARY LAYER 3: Interactive Light Lens --- */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000 opacity-20"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}% ${mousePos.y}%, rgba(0, 133, 247, 0.04), transparent 80%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`relative transition-all duration-[1200ms] cubic-bezier(0.2, 0.8, 0.2, 1) ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          
          <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 lg:p-14 border border-white shadow-[0_40px_100px_-15px_rgba(0,0,0,0.06)] relative overflow-hidden group">
            
            {/* Corner Accents */}
            <div className={`absolute top-0 left-0 w-16 h-[1px] bg-gradient-to-r from-[#0085F7] to-transparent transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}></div>
            <div className={`absolute bottom-0 right-0 w-16 h-[1px] bg-gradient-to-l from-[#00A94B] to-transparent transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative z-10 items-center">
              
              {/* Pillar 1: The Core Mission */}
              <div className="lg:col-span-12 flex flex-col md:flex-row md:items-end justify-between gap-12">
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-8 h-[2px] bg-[#1A1A1A]"></div>
                     <span className="text-[9px] font-black uppercase tracking-[0.6em] text-[#1A1A1A]/40 text-xs text-xs">System Architecture</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl leading-none tracking-tight text-[#1A1A1A] space-y-3">
                    <span className="block font-normal text-[#000] text-xs md:text-sm tracking-[0.4em] uppercase">
                      Our products are designed to
                    </span>
                    <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0085F7] via-[#1A1A1A] to-[#1A1A1A] bg-[length:200%_auto] hover:bg-right transition-all duration-1000 cursor-default text-4xl md:text-5xl lg:text-6xl tracking-tighter -ml-1 leading-[1.5] py-2">
                      simplify and scale
                    </span>
                    <span className="flex flex-wrap items-center gap-4">
                      <span className="font-semibold text-xl md:text-2xl lg:text-3xl">the hiring process end-to-end</span>
                    </span>
                  </h2>
                </div>

                {/* Typographic Anchor Icon - High Prominence */}
                <div className="hidden lg:flex items-center justify-center p-9 bg-[#0085F7]/[0.03] rounded-[2.5rem] border border-[#0085F7]/10 shadow-[0_20px_50px_-12px_rgba(0,133,247,0.1)] group-hover:border-[#0085F7]/30 transition-all duration-700 relative overflow-hidden">
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0085F7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  
                  <svg width="85" height="85" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" className="text-[#0085F7] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 relative z-10">
                    <rect width="7" height="7" x="14" y="3" rx="1" />
                    <rect width="7" height="7" x="3" y="14" rx="1" />
                    <path d="M10 14h4" />
                    <path d="M17 10v4" />
                    <path d="M10 10v0" />
                    <path d="M7 7v7" />
                    <path d="M17 17v0" />
                    <path d="M14 7h-4" />
                  </svg>
                </div>
              </div>

              {/* Central Divider Path */}
              <div className="lg:col-span-12">
                 <div className="relative w-full h-[1px] bg-gray-100">
                    <div className={`absolute top-0 left-0 h-full bg-gradient-to-r from-[#0085F7] via-[#00A94B] to-[#0085F7] transition-all duration-[2000ms] delay-700 ${isVisible ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
                 </div>
              </div>

              {/* Pillar 2: Detailed Insight */}
              <div className="lg:col-span-7">
                <p className="text-lg md:text-xl text-gray-600 font-medium leading-[1.4] tracking-tight">
                  From intelligent candidate screening and skill assessment to expert-led interviews, 
                  our platforms help organizations identify the right talent faster and with greater accuracy.
                </p>
              </div>

              {/* Pillar 3: High Volume Impact */}
              <div className="lg:col-span-5">
                <div className="relative p-6 bg-[#f9f9f7] border-l-2 border-[#00A94B] hover:shadow-xl hover:shadow-[#00A94B]/10 transition-all duration-500">
                  <p className="text-base text-gray-800 font-normal leading-relaxed italic">
                    Built for high-volume hiring, they bring structure, consistency, and data-driven insights to every stage of the hiring lifecycle reducing manual effort and improving quality of hire.
                  </p>
                </div>
              </div>

            </div>

            {/* Static Background Tech Label */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 p-12 opacity-[0.01] text-[180px] font-black leading-none pointer-events-none select-none -rotate-90">
              OPTIMIZED
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes subtle-float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        .animate-float {
          animation: subtle-float 10s ease-in-out infinite;
        }
        .cubic-bezier {
          transition-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
        }
      `}</style>
    </section>
  );
};
