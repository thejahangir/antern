import React, { useState, useEffect } from 'react';

interface ServicesPageProps {
  onNavigateTo: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigateTo }) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: "01",
      name: "on-premise",
      title: "On-Premise Delivery",
      tagline: "Precision-Fit Delivery",
      description: "We embed our expert teams directly within your organizational environment to deliver software solutions end-to-end. From requirement analysis to final handover, executed on your terms.",
      features: ["Embedded Teams", "Workflow-Aligned", "Continuous Engagement"],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200",
      linkTarget: "on-premise"
    },
    {
      id: "02",
      name: "odc",
      title: "ODC (Offshore Dev Centers)",
      tagline: "Scale Engineering Capacity",
      description: "Scale your engineering capacity seamlessly with dedicated offshore development centers. We provide top-tier talent and infrastructure configured precisely to your enterprise standards.",
      features: ["Dedicated Talent", "Seamless Integration", "Cost Optimization"],
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200",
      linkTarget: "odc"
    },
    {
      id: "03",
      name: "managed-services",
      title: "Managed Services",
      tagline: "Sustained Operational Excellence",
      description: "Comprehensive managed services ensuring your systems run flawlessly. From infrastructure maintenance to application support, we manage the operations so you can focus on innovation.",
      features: ["24/7 Support", "Performance Monitoring", "Proactive Maintenance"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      linkTarget: "managed-services"
    },
    {
      id: "04",
      name: "ux-studio-services",
      title: "UX Studio",
      tagline: "Designing Digital Experiences",
      description: "Our dedicated design studio crafts intuitive, human-centric interfaces. We turn complex requirements into elegant digital experiences that drive user engagement and satisfaction.",
      features: ["User Interviews", "Journey Mapping", "Interaction Design"],
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200",
      linkTarget: "ux-studio"
    }
  ];

  const handleKnowMore = (targetPage: string) => {
    onNavigateTo(targetPage);
  };

  return (
    <div className="bg-white min-h-screen selection:bg-[#0085F7] selection:text-white">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div 
          className="absolute -inset-y-24 inset-x-0 z-0 opacity-50 grayscale"
          style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Antern Services"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/50 to-transparent"></div>
          {/* Tech Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.05]" 
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#0085F7] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#0085F7] mb-6 block">
            Enterprise Solutions
            </span>
            <h1 className="text-5xl md:ext-5xl lg:text-5xl font-black text-white tracking-tighter leading-[0.85] mb-8">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff]  to-[#0085F7]">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-normal max-w-2xl leading-relaxed border-l border-[#004b23] pl-10">
            Drive growth and modernization with strategic digital innovation and expert technology consulting. Tailored services to accelerate business performance.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-32 bg-[#F8F7F9] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {services.map((service, idx) => (
              <div key={service.id} id={service.name} className={`flex flex-col lg:flex-row gap-16 items-center group ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2 relative">
                  <div className="aspect-video bg-gray-200 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                    <img src={service.image} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2000ms]" alt={service.title} />
                  </div>
                  {/* Floating Number */}
                  <div className="absolute -top-10 -left-10 text-[120px] font-black text-white drop-shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 select-none pointer-events-none">
                    {service.id}
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#0085F7] mb-4 block">{service.tagline}</span>
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#1A1A1A]">{service.title}</h3>
                  </div>
                  <p className="text-lg text-gray-500 font-light leading-relaxed mb-10 border-l-2 border-gray-200 pl-6">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map(feat => (
                      <div key={feat} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-[#00A94B]"></div>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => handleKnowMore(service.linkTarget)}
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
