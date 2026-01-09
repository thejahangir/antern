
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Antern didn't just provide code; they provided a vision. Their strategic approach to our mission-critical systems saved us months of development time and ensured a seamless transition to cloud-native architecture.",
    author: "Sarah Chen",
    role: "CTO, Global Logistics Corp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "The SkillTest platform revolutionized our hiring process. We've seen a 40% increase in the quality of our technical hires since implementation, allowing our teams to scale with absolute confidence.",
    author: "Marcus Thorne",
    role: "VP of Engineering, FinTech Alpha",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Their consultants integrated seamlessly with our internal teams. It felt like they were part of our company from day one. Truly exceptional talent with a deep understanding of enterprise-grade execution.",
    author: "Elena Rodriguez",
    role: "Head of Product, NexaHealth",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
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
    <section className="py-32 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Section Info */}
          <div className="lg:col-span-4">
            <div className="accent-bar bg-[#004b23]"></div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              Strategic<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004b23] to-[#70e000]">Impact</span>
            </h2>
            <p className="text-gray-500 text-lg mb-12">
              Our clients are leaders in their respective industries, driving transformation through our intelligent digital solutions.
            </p>
            
            {/* Custom Navigation Controls */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-12 h-12 flex items-center justify-center border border-gray-200 text-[#1A1A1A] hover:bg-[#004b23] hover:text-white hover:border-[#004b23] transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
                className="w-12 h-12 flex items-center justify-center border border-gray-200 text-[#1A1A1A] hover:bg-[#004b23] hover:text-white hover:border-[#004b23] transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="ml-4 flex gap-2">
                {testimonials.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`h-1 transition-all duration-500 ${idx === activeIndex ? 'w-8 bg-[#004b23]' : 'w-2 bg-gray-200'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="lg:col-span-8 relative min-h-[400px]">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  idx === activeIndex 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-12 pointer-events-none'
                }`}
              >
                <div className="h-full flex flex-col justify-between">
                  <div className="mb-12">
                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#004b23] mb-8 block">Client Perspective</span>
                    <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1A1A1A] leading-[1.3] tracking-tight">
                      "{t.quote}"
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center gap-6 pt-12 border-t border-gray-100">
                    <img 
                      src={t.avatar} 
                      alt={t.author} 
                      className="w-16 h-16 grayscale group-hover:grayscale-0 transition-all duration-500 object-cover"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-[#1A1A1A] tracking-tight uppercase">{t.author}</h4>
                      <p className="text-[#004b23] text-xs font-black uppercase tracking-widest">{t.role}</p>
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
