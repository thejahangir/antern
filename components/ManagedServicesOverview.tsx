
import React, { useEffect, useRef, useState } from 'react';

export const ManagedServicesOverview: React.FC = () => {
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
      className="relative py-12 md:py-16 overflow-hidden font-sans selection:bg-[#00A94B] selection:text-white"
    >
      {/* --- EXTRA ORDINARY LAYER 1: Parallax Background --- */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000')`
        }}
      />
      
      {/* High-Impact Overlay for Readability */}
      <div className="absolute inset-0 z-0 bg-[#0A0A0A]/75 backdrop-blur-[2px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transition-all duration-[1200ms] cubic-bezier(0.2, 0.8, 0.2, 1) ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          
          {/* Left Side: Compact Related Image with Merged Edges */}
          <div className="w-full lg:w-[35%] order-2 lg:order-1">
             <div className="relative group rounded-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000" 
                  alt="High-performance technical operations"
                  className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-105"
                  style={{ 
                    maskImage: 'radial-gradient(circle, black 30%, transparent 90%)',
                    WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 90%)'
                  }}
                />
                
                {/* Subtle Overlay Accent */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00A94B]/10 to-transparent opacity-30 mix-blend-overlay"></div>
                
                {/* Technical Label Overlay */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 opacity-50">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#00A94B] animate-pulse"></div>
                   <span className="text-[8px] font-black uppercase tracking-widest text-white/40">Real-time Watch</span>
                </div>
             </div>
          </div>

          {/* Right Side: Primary Content */}
          <div className="w-full lg:w-[65%] order-1 lg:order-2">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                 <div className="w-6 h-[1px] bg-[#00A94B]"></div>
                 <span className="text-[9px] font-black uppercase tracking-[0.8em] text-white/40">Efficiency Hub</span>
              </div>

              <div className="space-y-6">
                <p className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-tight">
                  We take ownership of running and improving your technology platforms. From production support and monitoring to continuous enhancements, our managed services ensure systems remain <span className="font-black text-[#00A94B]">stable, scalable, and high-performing.</span>
                </p>

                <p className="text-sm md:text-base text-white leading-relaxed font-normal max-w-2xl">
                  Leveraging AI-driven monitoring and intelligent automation, we help identify issues proactively, optimize performance, and reduce operational overhead.
                </p>
              </div>

              {/* Minimalist Connectivity Motif */}
              <div className="pt-4 flex items-center gap-6">
                 <div className="flex gap-1.5">
                    {[1, 2, 3].map(i => (
                       <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-[#00A94B]' : 'bg-white/10'}`}></div>
                    ))}
                 </div>
                 <div className="h-[1px] flex-grow bg-white/5"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scan {
          0%, 100% { transform: scaleY(1) translateY(0); opacity: 0; }
          50% { transform: scaleY(1.5) translateY(0); opacity: 1; }
        }
        .animate-slow-spin {
          animation: slow-spin 15s linear infinite;
        }
        .animate-scan {
          animation: scan 4s ease-in-out infinite;
        }
        .cubic-bezier {
          transition-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
        }
      `}</style>
    </section>
  );
};
