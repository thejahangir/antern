import React, { useState, useEffect } from 'react';

interface HomeSliderV2Props {
  onNavigateToProduct: (productId: string) => void;
  onNavigateToVision?: () => void;
}

export const HomeSliderV2: React.FC<HomeSliderV2Props> = ({ onNavigateToProduct, onNavigateToVision }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const imagesList = [
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1705544363568-425eabe4de51?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop'
  ];

  const slides = [
    {
      id: 'vision',
      title: 'A Decade of Building. 500+ Customers Worldwide.',
      subtitle: 'Our Journey',
      description: (
  <>
    Antern Technologies has partnered with 500+ customers across the globe, building platforms and delivering engineering solutions.
    <br />
    This journey shaped by long-term relationships, consistent delivery, and a strong focus on practical, scalable outcomes.
  </>
),
      color: 'bg-[#0085F7]', // Antern blue
      images: [imagesList[0], imagesList[1], imagesList[2], imagesList[3], imagesList[4], imagesList[5]],
      hoverImages: [imagesList[6], imagesList[7], imagesList[8], imagesList[9], imagesList[10], imagesList[11]]
    },
    {
      id: 'iaminterviewed',
      title: 'IamInterviewed',
      subtitle: 'Technical Interviews',
      description: 'An Interview-as-a-Service platform designed to scale technical hiring through expert-led evaluations. Enables organizations to assess candidates efficiently with structured interviews, detailed feedback, recorded sessions, and actionable insights.',
      color: 'bg-[#0060B5]', // Darker blue
      images: [imagesList[11], imagesList[10], imagesList[9], imagesList[8], imagesList[7], imagesList[6]],
      hoverImages: [imagesList[5], imagesList[4], imagesList[3], imagesList[2], imagesList[1], imagesList[0]]
    },
    {
      id: 'myskilltest',
      title: 'SkillTest',
      subtitle: 'Adaptive Evaluation',
      description: 'A smart assessment platform built for fast and reliable candidate evaluation. It streamlines the hiring process by automating assessments, scoring, and shortlisting for both campus and lateral hiring.',
      color: 'bg-[#00A94B]', // Antern green
      images: [imagesList[6], imagesList[7], imagesList[8], imagesList[9], imagesList[10], imagesList[11]],
      hoverImages: [imagesList[0], imagesList[1], imagesList[2], imagesList[3], imagesList[4], imagesList[5]]
    },
    {
      id: 'scanjd',
      title: 'ScanJD',
      subtitle: 'Semantic Parsing',
      description: 'An AI-driven resume parsing and matching engine powered by semantic intelligence. Delivers context-aware candidate insights and precise JD-to-profile matching for faster and more effective hiring decisions. DelOrg360',
      color: 'bg-[#050505]', // Dark
      images: [imagesList[2], imagesList[4], imagesList[6], imagesList[8], imagesList[10], imagesList[0]],
      hoverImages: [imagesList[3], imagesList[5], imagesList[7], imagesList[9], imagesList[11], imagesList[1]]
    },
    {
      id: 'delorg360',
      title: 'DelOrg360',
      subtitle: 'Project Portfolio',
      description: 'An enterprise-grade project and delivery management platform. Offers real-time insights into execution, resource utilization, and performance to help organizations manage and optimize large-scale programs.',
      color: 'bg-[#1a1a1a]', // Dark gray
      images: [imagesList[1], imagesList[3], imagesList[5], imagesList[7], imagesList[9], imagesList[11]],
      hoverImages: [imagesList[0], imagesList[2], imagesList[4], imagesList[6], imagesList[8], imagesList[10]]
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, currentSlide, isHovered]);

  return (
    <section 
      className="relative w-full h-[600px] xl:h-[700px] mt-[112px] overflow-hidden bg-white font-sans"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider Track */}
      <div 
        className="flex h-full w-full transition-transform duration-[700ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 flex text-white relative">
            
            {/* Col 1 (Hidden on mobile) */}
            <div className="hidden md:flex flex-col w-[calc(70%/3)] h-full">
              <div className="h-1/2 w-full overflow-hidden relative group bg-black">
                <img src={slide.images[0]} className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-0 group-hover:-translate-y-full" alt="product view 1" />
                <img src={slide.hoverImages[0]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-full group-hover:translate-y-0" alt="product view 1 hover" />
                <div className="absolute inset-0 bg-black/10 pointer-events-none transition-colors duration-500 group-hover:bg-transparent"></div>
              </div>
              <div className="h-1/2 w-full overflow-hidden relative group bg-black">
                <img src={slide.images[1]} className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-0 group-hover:-translate-y-full" alt="product view 2" />
                <img src={slide.hoverImages[1]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-full group-hover:translate-y-0" alt="product view 2 hover" />
                <div className="absolute inset-0 bg-black/10 pointer-events-none transition-colors duration-500 group-hover:bg-transparent"></div>
              </div>
            </div>

            {/* Col 2 - Brand Text Info */}
            <div className={`w-full md:w-[30%] h-full flex items-center justify-start px-10 xl:px-14 py-12 relative ${slide.color} overflow-hidden`}>
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
              
              <div className="relative z-10 w-full">
     
                 {/* Title */}
                 <h1 className="text-[2.5rem] font-bold text-white leading-tight mb-8 tracking-tight">
                    {/* Antern <br/> */}
                    <span className="flex items-center gap-2">
                       {slide.title}
                       {/* <span className="w-2.5 h-2.5 rounded-full bg-white mt-3 shrink-0"></span> */}
                    </span>
                 </h1>

                 {/* Links to all brands, highlighting the current one */}
                 {/* {i !== 0 && (
                   <ul className="space-y-3 font-medium text-[17px]">
                      {slides.slice(1).map((s, idx) => (
                        <li key={s.id}>
                          <button 
                            onClick={() => setCurrentSlide(idx + 1)}
                            className={`text-left transition-all duration-300 hover:translate-x-1 ${idx + 1 === i ? 'text-white font-bold' : 'text-white/60 hover:text-white hover:opacity-100'}`}
                          >
                            {s.title}
                          </button>
                        </li>
                      ))}
                   </ul>
                 )} */}
                 
                 <div className="mt-12 flex flex-col items-start">
                   <p className="text-white/90 text-[18px] font-normal leading-relaxed mb-6">
                     {slide.description}
                   </p>
                   <button
                      onClick={() => {
                        if (i === 0 && onNavigateToVision) {
                          onNavigateToVision();
                        } else {
                          onNavigateToProduct(slide.id);
                        }
                      }}
                      className="inline-block border border-white/40 hover:bg-white hover:text-black hover:border-white transition-all duration-300 px-6 py-2.5 rounded font-bold text-xs uppercase tracking-widest mt-5"
                    >
                      Learn More
                    </button>
                 </div>
              </div>
            </div>

            {/* Col 3 (Hidden on mobile) */}
            <div className="hidden md:flex flex-col w-[calc(70%/3)] h-full">
              <div className="h-1/2 w-full overflow-hidden relative group bg-black">
                <img src={slide.images[2]} className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-0 group-hover:-translate-y-full" alt="product view 3" />
                <img src={slide.hoverImages[2]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-full group-hover:translate-y-0" alt="product view 3 hover" />
                <div className="absolute inset-0 bg-black/10 pointer-events-none transition-colors duration-500 group-hover:bg-transparent"></div>
              </div>
              <div className="h-1/2 w-full overflow-hidden relative group bg-black">
                <img src={slide.images[3]} className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-0 group-hover:-translate-y-full" alt="product view 4" />
                <img src={slide.hoverImages[3]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-full group-hover:translate-y-0" alt="product view 4 hover" />
                <div className="absolute inset-0 bg-black/10 pointer-events-none transition-colors duration-500 group-hover:bg-transparent"></div>
              </div>
            </div>

            {/* Col 4 (Hidden on mobile) */}
            <div className="hidden md:flex flex-col w-[calc(70%/3)] h-full">
              <div className="h-1/2 w-full overflow-hidden relative group bg-black">
                <img src={slide.images[4]} className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-0 group-hover:-translate-y-full" alt="product view 5" />
                <img src={slide.hoverImages[4]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-full group-hover:translate-y-0" alt="product view 5 hover" />
                <div className="absolute inset-0 bg-black/10 pointer-events-none transition-colors duration-500 group-hover:bg-transparent"></div>
              </div>
              <div className="h-1/2 w-full overflow-hidden relative group bg-black">
                <img src={slide.images[5]} className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-0 group-hover:-translate-y-full" alt="product view 6" />
                <img src={slide.hoverImages[5]} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] translate-y-full group-hover:translate-y-0" alt="product view 6 hover" />
                <div className="absolute inset-0 bg-black/10 pointer-events-none transition-colors duration-500 group-hover:bg-transparent"></div>
              </div>
            </div>



          </div>
        ))}
      </div>

      {/* Navigation Arrows (Semi-transparent dark bands with hollow chevrons) */}
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 h-[140px] w-12 xl:w-16 bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-all duration-300 z-50 group"
        aria-label="Previous slide"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="transform transition-transform duration-300 group-hover:-translate-x-1 opacity-80 group-hover:opacity-100"><path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 h-[140px] w-12 xl:w-16 bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-all duration-300 z-50 group"
        aria-label="Next slide"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="transform transition-transform duration-300 group-hover:translate-x-1 opacity-80 group-hover:opacity-100"><path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      
      {/* Slide Pagination Numbers */}
      {/* <div className="absolute bottom-8 right-8 md:bottom-10 md:right-12 z-30 flex items-center gap-2 md:gap-3 pointer-events-auto">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-500 font-sans text-sm md:text-base hover:scale-105
              ${currentSlide === idx
                ? 'bg-white text-black font-bold scale-110 shadow-[0_4px_20px_rgba(255,255,255,0.4)]'
                : 'bg-black/40 backdrop-blur-md border border-white/20 text-white/80 hover:bg-white/20 font-light'
              }`}
          >
            {idx + 1}
          </button>
        ))}
      </div> */}

    </section>
  );
};
