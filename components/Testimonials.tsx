
import React, { useState, useEffect } from 'react';
import Avatar1 from '../src/assets/img/avatar/avatar-6.png';
import Avatar2 from '../src/assets/img/avatar/avatar-2.png';
import Avatar3 from '../src/assets/img/avatar/avatar-3.png';

const testimonials = [
  {
    quote: "The quality of their interviews truly stands out. They evaluate real-world skills with precision and clarity, not just theoretical knowledge. The insights we get have significantly improved our final-round conversion rates.",
    author: "Director of Engineering",
    role: "PaaS Product Company",
    avatar: [Avatar1]
  },
  {
    quote: "With 500 profiles to manage and 50 urgent roles to fill in just two months, we needed speed without losing quality. IamInterviewed delivered both – conducting 350 high-quality interviews with remarkable turnaround time and helping us shortlist 80 top candidates. Their partnership made the process effortless and even earned me a promotion.",
    author: "Recruiter",
    role: "IT Services MNC",
    avatar: [Avatar2]
  },
  {
    quote: "As part of the procurement team, I initially connected IamInterviewed with our internal recruitment function to support an urgent requirement. Since then, there’s been no looking back — the feedback from our hiring teams has been consistently positive. Their reliability, speed, and professionalism have made them one of our most trusted and valued partners.",
    author: "Head of Procurement",
    role: "Business Consulting and Services",
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
    <section className="py-20 bg-white overflow-hidden border-t border-gray-100 pt-1 pb-1">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="accent-bar bg-[#004b23] w-12 h-1 mb-6"></div>
            <h3 className="text-3xl md:text-4xl font-black mb-6 leading-none  tracking-tight text-[#1A1A1A]">
            Strategic<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0085F7] to-[#00A94B]">Impact</span>
              </h3>
            
            <p className="text-sm md:text-base text-gray-500 mb-8 leading-relaxed max-w-md font-normal">
              Our clients are leaders in their respective industries, driving transformation through our intelligent digital solutions.
            </p>
            
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
                    <blockquote className="text-xl md:text-1xl font-normal italic text-[#1A1A1A] leading-snug tracking-tight">
                      "{t.quote}"
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center gap-4 pt-1 border-t border-gray-100">
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
