
import React, { useState, useEffect } from 'react';
import Avatar1 from '../src/assets/img/avatar/avatar-6.png';
import Avatar2 from '../src/assets/img/avatar/avatar-2.png';
import Avatar3 from '../src/assets/img/avatar/avatar-3.png';

const testimonials = [
  {
    quote: "Antern didn't just provide code; they provided a vision. Their strategic approach to our mission-critical systems saved us months of development time and ensured a seamless transition to cloud-native architecture.",
    author: "Sarah Chen",
    role: "CTO, Global Logistics Corp",
    avatar: [Avatar1]
  },
  {
    quote: "The SkillTest platform revolutionized our hiring process. We've seen a 40% increase in the quality of our technical hires since implementation, allowing our teams to scale with absolute confidence.",
    author: "Marcus Thorne",
    role: "VP of Engineering, FinTech Alpha",
    avatar: [Avatar2]
  },
  {
    quote: "Their consultants integrated seamlessly with our internal teams. It felt like they were part of our company from day one. Truly exceptional talent with a deep understanding of enterprise-grade execution.",
    author: "Elena Rodriguez",
    role: "Head of Product, NexaHealth",
    avatar: [Avatar3]
  }
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Section Info - Compact */}
          <div className="lg:col-span-4">
            <div className="accent-bar bg-[#004b23] w-12 h-1 mb-6"></div>
            <h3 className="text-3xl md:text-4xl font-black mb-6 leading-none uppercase tracking-tight text-[#1A1A1A]">
            Strategic<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004b23] to-[#70e000]">Impact</span>
              </h3>
            
            <p className="text-sm md:text-base text-gray-500 mb-8 leading-relaxed max-w-md font-normal">
              Our clients are leaders in their respective industries, driving transformation through our intelligent digital solutions.
            </p>
            
            {/* Custom Navigation Controls - Compact */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#1A1A1A] hover:bg-[#004b23] hover:text-white hover:border-[#004b23] transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#1A1A1A] hover:bg-[#004b23] hover:text-white hover:border-[#004b23] transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="ml-4 flex gap-1.5">
                {testimonials.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`h-0.5 transition-all duration-500 ${idx === activeIndex ? 'w-6 bg-[#004b23]' : 'w-2 bg-gray-200'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Content - Compact */}
          <div className="lg:col-span-8 relative min-h-[280px] lg:min-h-[240px]">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  idx === activeIndex 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8 pointer-events-none'
                }`}
              >
                <div className="h-full flex flex-col justify-between">
                  <div className="mb-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#004b23] mb-4 block">Client Perspective</span>
                    <blockquote className="text-xl md:text-2xl font-normal italic text-[#1A1A1A] leading-snug tracking-tight">
                      "{t.quote}"
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <img 
                      src={t.avatar} 
                      alt={t.author} 
                      className="w-10 h-10 grayscale object-cover rounded-sm"
                    />
                    <div>
                      <h4 className="text-sm font-black text-[#1A1A1A] tracking-wide uppercase">{t.author}</h4>
                      <p className="text-[#004b23] text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
  );
};
