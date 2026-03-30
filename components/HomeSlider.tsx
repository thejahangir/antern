import React, { useState, useEffect } from 'react';

interface HomeSliderProps {
  onNavigateToProduct: (productId: string) => void;
}

export const HomeSlider: React.FC<HomeSliderProps> = ({ onNavigateToProduct }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'iaminterviewed',
      title: 'IAmInterviewed',
      subtitle: 'Technical Interviews',
      description: 'An Interview-as-a-Service platform that enables expert-led technical interviews at scale. It helps organizations evaluate candidates efficiently with structured feedback, recordings, and data-driven insights.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop',
    },
    {
      id: 'myskilltest',
      title: 'SkillTest',
      subtitle: 'Adaptive Evaluation',
      description: 'A smart assessment platform designed for fast, fair, and accurate candidate evaluation. It automates testing, scoring, and shortlisting to streamline campus and lateral hiring.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2000&auto=format&fit=crop',
    },
    {
      id: 'scanjd',
      title: 'ScanJD',
      subtitle: 'Semantic Parsing',
      description: 'An advanced resume parsing and matching engine powered by semantic intelligence. It understands context, extracts rich candidate data, and delivers highly accurate JD-to-profile matching for faster hiring.',
      image: 'https://images.unsplash.com/photo-1705544363568-425eabe4de51?q=80&w=2000&auto=format&fit=crop',
    },
    {
      id: 'delorg360',
      title: 'DelOrg365',
      subtitle: 'Project Portfolio Management',
      description: 'A comprehensive project and delivery management platform for enterprise teams. It provides real-time visibility into projects, resources, and performance to optimize execution.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length, currentSlide]);

  return (
    <section className="relative h-screen min-h-[500px] w-full flex items-center overflow-hidden bg-[#050505]">
      {/* CSS keyframe for progress line */}
      <style>{`
        @keyframes slideProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
      
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with Auto-Zoom (Ken Burns Effect) */}
            <div 
              className={`absolute inset-0 z-0 transition-transform duration-[6500ms] ease-linear origin-center ${
                isActive ? 'scale-100' : 'scale-[1.15]'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover grayscale opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/70 to-transparent"></div>
            </div>

            {/* Massive Number Typography background */}
            <div className={`absolute top-20 right-10 md:right-24 lg:right-32 text-[100px] md:text-[180px] lg:text-[250px] font-black leading-none text-transparent bg-clip-text select-none transition-all duration-1000 delay-300 transform ${isActive ? 'translate-y-0 opacity-10' : '-translate-y-20 opacity-0'}`}
                 style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>
              0{index + 1}
            </div>

            {/* Slide Content */}
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full h-full flex flex-col justify-center pt-16">
              <div className="max-w-4xl relative z-20">
                
                {/* Accent Line + Subtitle */}
                <div className="overflow-hidden mb-3">
                  <div className={`flex items-center gap-4 transition-transform duration-[800ms] delay-100 transform ${isActive ? 'translate-y-0' : 'translate-y-full'}`}>
                    <div className="w-8 md:w-12 h-[2px] bg-[#00A94B]"></div>
                    <h2 className="text-[10px] md:text-sm font-black uppercase tracking-[0.4em] text-[#0085F7]">
                      {slide.subtitle}
                    </h2>
                  </div>
                </div>

                {/* Staggered Title */}
                <div className="overflow-hidden mb-4 py-1">
                  <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.85] transition-transform duration-[900ms] delay-300 transform ${isActive ? 'translate-y-0' : 'translate-y-[120%]'}`}>
                    <span className="bg-gradient-to-r from-[#0085F7] to-[#00A94B] bg-clip-text text-transparent drop-shadow-2xl">
                      {slide.title}
                    </span>
                  </h1>
                </div>

                {/* Description Glass Panel */}
                <div className={`p-4 md:p-6 rounded-tr-[30px] rounded-bl-[30px] md:rounded-tr-[40px] md:rounded-bl-[40px] border border-white/5 bg-white/5 backdrop-blur-[12px] shadow-2xl mb-5 max-w-2xl transition-all duration-[900ms] delay-500 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <p className="text-sm md:text-lg text-gray-300 font-light leading-relaxed">
                    {slide.description}
                  </p>
                </div>
                
                {/* Interactive CTA */}
                <div className={`transition-all duration-[900ms] delay-700 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  <button
                    onClick={() => onNavigateToProduct(slide.id)}
                    className="px-6 py-3 md:px-8 md:py-4 bg-[#0085F7] text-white font-bold uppercase tracking-widest text-xs hover:bg-[#339DFF] hover:text-white transition-all w-fit"
                  >
                    View in Our Products
                  </button>
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* Modern Slider Navigation & Progress Controls */}
      <div className="absolute bottom-6 md:bottom-10 left-6 md:left-[5%] lg:left-[calc(50%-40rem)] z-30 flex items-center">
        <div className="flex gap-4 items-center">
          <span className="text-white/40 text-sm font-black tracking-[0.2em]">01</span>
          
          <div className="flex gap-3 relative">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="relative group py-4 flex items-center"
                aria-label={`Go to slide ${index + 1}`}
              >
                {/* Base Line */}
                <div className={`w-12 h-[5px] rounded-full transition-colors duration-500 ${index === currentSlide ? 'bg-white/10' : 'bg-white/30 group-hover:bg-white/50'}`}>
                  {/* Progress Line */}
                  {index === currentSlide && (
                    <div 
                      className="absolute left-0 h-[5px] bg-[#0085F7] rounded-full"
                      style={{
                        animation: 'slideProgress 6s linear infinite'
                      }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
          
          <span className="text-white/40 text-sm font-black tracking-[0.2em]">0{slides.length}</span>
        </div>
      </div>

      {/* Left/Right Arrow Navigation */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/50 text-white backdrop-blur-md border border-white/10 transition-all group hidden sm:flex"
        aria-label="Previous slide"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:-translate-x-1 transition-transform">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/50 text-white backdrop-blur-md border border-white/10 transition-all group hidden sm:flex"
        aria-label="Next slide"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

    </section>
  );
};
