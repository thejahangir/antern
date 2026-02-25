
import React, { useState, useEffect } from 'react';

export const About: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden selection:bg-[#70e000] selection:text-[#004b23]">
      {/* Background Watermark Layer - Positioned tighter */}
      <div 
        className="absolute top-10 right-[-10%] text-[350px] font-black text-[#1A1A1A]/[0.02] select-none pointer-events-none leading-none tracking-tighter"
        style={{ transform: `translate3d(${-offsetY * 0.15}px, 0, 0)` }}
      >
        ANTERN
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* 1. NARRATIVE HEADER - Compact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20 items-center">
          <div className="lg:col-span-7">
            <div className="accent-bar bg-[#004b23] w-16 h-1 mb-6"></div>
            <span className="text-[11px] font-black uppercase tracking-[0.6em] text-[#1A1A1A] mb-3 block">The Antern Narrative</span>

            <h3 className="text-3xl md:text-4xl font-black mb-6 leading-none tracking-tight text-[#1A1A1A]">
            Decades of<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0085F7] to-[#00A94B]">Excellence</span>
              </h3>
          </div>
          <div className="lg:col-span-5">
            <div className="relative p-8 border-l-2 border-[#004b23]/10 bg-gray-50/50 rounded-r-sm">
              <p className="text-lg text-gray-600 font-medium leading-relaxed italic">
                "We bridge the gap between engineering logic and human instinct, scaling mission-critical systems with surgical precision."
              </p>
              <div className="absolute top-0 left-0 w-2 h-2 bg-[#004b23]"></div>
            </div>
          </div>
        </div>

      

        {/* 3. IMPACT SYNC SECTION (Compact Version) */}
        <div className="relative group overflow-hidden bg-[#1A1A1A] flex flex-col lg:flex-row items-stretch border border-white/5">
          {/* Visual Layer */}
          <div className="lg:w-1/2 relative overflow-hidden h-[350px] lg:h-auto border-r border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000" 
              className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-105"
              alt="Antern Global Reach"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-transparent to-transparent"></div>
            
            {/* Scanline Detail */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
               <div className="w-full h-px bg-white/40 absolute top-1/2 left-0"></div>
               <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100% 4px' }}></div>
            </div>
          </div>

          {/* Metrics Layer - Tighter Layout */}
          <div className="lg:w-1/2 p-10 md:p-14 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-[150px] font-black leading-none pointer-events-none text-white">
              +
            </div>
            
            <div className="grid grid-cols-2 gap-10 md:gap-16 relative z-10">
              <div className="relative group/metric">
                <span className="text-[9px] font-black uppercase tracking-[0.6em] text-[#fff] group-hover/metric:text-[#0085F7] mb-3 block transition-colors">Longevity</span>
                <div className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#0085F7] group-hover/metric:to-[#ccff33] transition-all">10+</div>
                <p className="text-gray-500 text-[10px] font-medium uppercase tracking-widest group-hover/metric:text-gray-400 transition-colors">Years active</p>
              </div>
              <div className="relative group/metric">
                <span className="text-[9px] font-black uppercase tracking-[0.6em] text-[#fff] group-hover/metric:text-[#0085F7] mb-3 block transition-colors">Velocity</span>
                <div className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#0085F7] group-hover/metric:to-[#ccff33] transition-all">500+</div>
                <p className="text-gray-500 text-[10px] font-medium uppercase tracking-widest group-hover/metric:text-gray-400 transition-colors">Systems shipped</p>
              </div>
              <div className="relative group/metric">
                <span className="text-[9px] font-black uppercase tracking-[0.6em] text-[#fff] group-hover/metric:text-[#0085F7] mb-3 block transition-colors">Scale</span>
                <div className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#0085F7] group-hover/metric:to-[#ccff33] transition-all">24/7</div>
                <p className="text-gray-500 text-[10px] font-medium uppercase tracking-widest group-hover/metric:text-gray-400 transition-colors">Global sync</p>
              </div>
              <div className="relative group/metric">
                <span className="text-[9px] font-black uppercase tracking-[0.6em] text-[#fff] group-hover/metric:text-[#0085F7] mb-3 block transition-colors">Quality</span>
                <div className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-[#0085F7] group-hover/metric:to-[#ccff33] transition-all">01</div>
                <p className="text-gray-500 text-[10px] font-medium uppercase tracking-widest group-hover/metric:text-gray-400 transition-colors">Unified Standard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
