
import React, { useRef, useState, useEffect } from 'react';

const ideas = [
  {
    category: "Thought Leadership",
    title: "Navigating the New Era of AI Sovereignty",
    description: "How enterprises are reclaiming control over their cognitive assets in a decentralized world where data privacy and compute power define the new competitive landscape.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1600",
    link: "#"
  },
  {
    category: "Market Report",
    title: "The Zero-Trust Imperative for 2025",
    description: "Why perimeter security is dead and identity-based access control is the new mission-critical firewall for global operations.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200",
    link: "#"
  },
  {
    category: "Strategy",
    title: "Reimagining Experience in the Age of Automation",
    description: "Why successful digital transformation starts with people, and how leading enterprises are bridging the skills gap through intuitive, AI-enhanced employee journeys.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
    link: "#"
  },
  {
    category: "Case Study",
    title: "Scaling Talent in a Post-Digital Economy",
    description: "Lessons from Antern's mission-critical deployment for Global 500 partners, focusing on agility, resource optimization, and rapid project ramp-up.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    link: "#"
  },
  {
    category: "Digital Continuity",
    title: "Sustaining Momentum in Rapid AI Cycles",
    description: "How modern agile frameworks are evolving to support the seamless integration of generative capabilities without disrupting mission-critical enterprise stability.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200",
    link: "#"
  },
  {
    category: "Operational Excellence",
    title: "From Cloud-First to Cloud-Smart Efficiency",
    description: "Navigating the complexities of hybrid environments to achieve true resilience, cost predictability, and accelerated time-to-market for mission-critical apps.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
    link: "#"
  },
  {
    category: "Cognitive Architecture",
    title: "UX for the Era of Autonomous Systems",
    description: "Designing interfaces that don't just display data, but facilitate meaningful human-in-the-loop decision making in increasingly automated environments.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200",
    link: "#"
  },
  {
    category: "Whitepaper",
    title: "Quantum Resilience: Preparing Infrastructure",
    description: "Future-proofing mission-critical data against the next generation of computing challenges and significant cryptographic shifts in the global security landscape.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200",
    link: "#"
  }
];

export const IdeasTransformation: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay Logic
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      const next = (activeIndex + 1) % ideas.length;
      scrollToIndex(next);
      setActiveIndex(next);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, activeIndex]);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const items = scrollContainerRef.current.children;
      if (items[index]) {
        const item = items[index] as HTMLElement;
        const containerWidth = scrollContainerRef.current.offsetWidth;
        const itemWidth = item.offsetWidth;
        // Center the item in the viewport
        const targetScroll = item.offsetLeft - (containerWidth / 2) + (itemWidth / 2);
        
        scrollContainerRef.current.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const centerPoint = scrollLeft + (containerWidth / 2);
      
      const items = scrollContainerRef.current.children;
      let newIndex = 0;
      let minDistance = Infinity;

      for (let i = 0; i < ideas.length; i++) {
        const item = items[i] as HTMLElement;
        const itemCenter = item.offsetLeft + (item.offsetWidth / 2);
        const distance = Math.abs(centerPoint - itemCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          newIndex = i;
        }
      }
      
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  const manualScroll = (direction: 'left' | 'right') => {
    let targetIndex;
    if (direction === 'left') {
      targetIndex = activeIndex === 0 ? ideas.length - 1 : activeIndex - 1;
    } else {
      targetIndex = (activeIndex + 1) % ideas.length;
    }
    setActiveIndex(targetIndex);
    scrollToIndex(targetIndex);
  };

  return (
    <section 
      className="pt-32 pb-24 bg-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="accent-bar bg-[#4918A9] w-16 mb-6"></div>
            <h2 className="text-5xl md:ext-5xl font-black uppercase tracking-tighter leading-[0.85] text-[#1A1A1A]">
              Ideas that drive<br />
              <span className="text-[#4918A9]">Transformation</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="flex gap-2 items-center">
              <span className="text-[10px] font-black text-[#1A1A1A] mr-2">0{activeIndex + 1}</span>
              <div className="flex gap-1.5">
                {ideas.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveIndex(i);
                      scrollToIndex(i);
                    }}
                    className={`h-1 transition-all duration-700 rounded-full ${i === activeIndex ? 'w-10 bg-[#4918A9]' : 'w-2 bg-gray-200 hover:bg-gray-300'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <span className="text-[10px] font-black text-gray-300 ml-2">0{ideas.length}</span>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={() => manualScroll('left')}
                className="group w-14 h-14 border border-gray-200 flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 transform transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => manualScroll('right')}
                className="group w-14 h-14 border border-gray-200 flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 transform transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* The Slider Canvas */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-12 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Edge Padding for centering */}
          <div className="min-w-[5vw] md:min-w-[10vw] shrink-0"></div>

          {ideas.map((idea, idx) => (
            <div 
              key={idx} 
              className={`snap-center group transition-all duration-1000 ease-in-out flex-shrink-0 w-[85vw] md:w-[600px] lg:w-[850px]`}
            >
              {/* Image Container: FIXED ASPECT RATIO to prevent page jumping */}
              <div className="relative overflow-hidden mb-8 bg-gray-50 border border-gray-100 aspect-[16/9] transition-all duration-1000">
                <img 
                  src={idea.image} 
                  alt={idea.title} 
                  className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
                    idx === activeIndex ? 'scale-105 grayscale-0 opacity-100' : 'scale-100 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100'
                  }`}
                />
                <div className="absolute inset-0 bg-[#1A1A1A]/0 group-hover:bg-[#1A1A1A]/5 transition-colors duration-500"></div>
                
                {idx === activeIndex && (
                  <div className="absolute top-6 left-6 bg-[#1A1A1A] text-white text-[10px] font-black uppercase tracking-[0.4em] px-4 py-2 animate-in fade-in slide-in-from-left-6 duration-1000">
                    Featured
                  </div>
                )}
              </div>
              
              {/* Content Block */}
              <div className="flex flex-col">
                <span className={`text-[11px] font-black uppercase tracking-[0.4em] text-[#4918A9] mb-3 transition-all duration-1000`}>
                  {idea.category}
                </span>
                <h3 className={`font-black  tracking-tight text-[#1A1A1A] leading-[0.9] mb-6 transition-all duration-1000 text-3xl md:text-5xl lg:text-5xl`}>
                  {idea.title}
                </h3>
                <p className={`mb-8 font-light leading-relaxed transition-all duration-1000 max-w-3xl text-lg text-[#1A1A1A]`}>
                  {idea.description}
                </p>
                
                <a 
                  href={idea.link} 
                  className="group/link flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-[#1A1A1A] hover:text-[#4918A9] transition-colors"
                >
                  Explore depth
                  <div className="w-10 h-px bg-gray-200 group-hover/link:w-20 group-hover/link:bg-[#4918A9] transition-all duration-500"></div>
                  <svg className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
          
          {/* Edge Padding for centering */}
          <div className="min-w-[5vw] md:min-w-[10vw] shrink-0"></div>
        </div>
      </div>
    </section>
  );
};
