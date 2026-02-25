import React, { useState, useEffect } from 'react';

interface ProductsPageProps {
  onNavigateTo: (page: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigateTo }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      id: "01",
      name: "IAmInterviewed",
      tagline: "Video Intelligence",
      description: "An enterprise-grade video assessment platform that uses behavioral AI to analyze candidate communication skills, reducing time-to-hire by 40%.",
      features: ["Sentiment Analysis", "Asynchronous Screening", "Bias Reduction"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
      link: "https://iaminterviewed.com/"
    },
    {
      id: "02",
      name: "MySkillTest",
      tagline: "Adaptive Evaluation",
      description: "A dynamic technical validation engine that scales difficulty in real-time based on candidate performance, ensuring precise competency mapping.",
      features: ["50+ Languages", "Anti-Cheat Proctoring", "Code Playback"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200",
      link: "https://myskilltest.com/"
    },
    {
      id: "03",
      name: "ScanJD",
      tagline: "Semantic Parsing",
      description: "Next-generation resume parsing that understands context, not just keywords. Matches talent to opportunity with 98% semantic accuracy.",
      features: ["Contextual Matching", "Gap Analysis", "Instant Ranking"],
      image: "https://images.unsplash.com/photo-1705544363568-425eabe4de51?q=80&w=1200",
      link: "#" // Internal link handled via onClick if needed, or just placeholder
    },
    {
      id: "04",
      name: "DelOrg360",
      tagline: "Project Portfolio Management",
      description: "Comprehensive project portfolio management solution designed to streamline organizational delivery and optimize resource allocation.",
      features: ["Resource Optimization", "Delivery Tracking", "Strategic Alignment"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      link: "https://delorg360.com/"
    }
  ];

  const handleKnowMore = (link: string, name: string) => {
    if (name === 'ScanJD') {
      onNavigateTo('scanning-resume');
    } else {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-white min-h-screen selection:bg-[#0085F7] selection:text-white">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div 
          className="absolute -inset-y-24 inset-x-0 z-0 opacity-30 grayscale"
          style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Antern Products"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent"></div>
          {/* Tech Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.05]" 
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#0085F7] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#00A94B] mb-6 block">
            Innovation Suite
            </span>
            <h1 className="text-5xl md:ext-5xl lg:text-5xl font-black text-white tracking-tighter leading-[0.85] mb-8">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#0085F7] to-[#00A94B]">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-normal max-w-2xl leading-relaxed border-l border-[#004b23] pl-10">
            Purpose-built solutions for modern hiring. Our intelligent platform streamlines evaluation, enhances decision-making, and delivers precise talent alignment at scale.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS LIST */}
      <section className="py-32 bg-[#F8F7F9] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {products.map((product, idx) => (
              <div key={product.id} className={`flex flex-col lg:flex-row gap-16 items-center group ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2 relative">
                  <div className="aspect-video bg-gray-200 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                    <img src={product.image} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2000ms]" alt={product.name} />
                  </div>
                  {/* Floating Number */}
                  <div className="absolute -top-10 -left-10 text-[120px] font-black text-white drop-shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 select-none pointer-events-none">
                    {product.id}
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#0085F7] mb-4 block">{product.tagline}</span>
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1A1A1A] mb-6">{product.name}</h3>
                  <p className="text-lg text-gray-500 font-light leading-relaxed mb-10 border-l-2 border-gray-200 pl-6">
                    {product.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {product.features.map(feat => (
                      <div key={feat} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-[#00A94B]"></div>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => handleKnowMore(product.link, product.name)}
                    className="px-8 py-4 bg-[#0085F7] text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#339DFF] transition-all"
                  >
                    Know More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
