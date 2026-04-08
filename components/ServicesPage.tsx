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
      name: "engineering",
      title: "Engineering",
      tagline: "Software Craftsmanship at Scale",
      description: "Our engineering practice is built on four critical pillars, each designed to deliver maximum value and technical excellence.",
      subPoints: [
        { 
          title: "Platform & Product Engineering", 
          content: "We design and build scalable platforms and digital products aligned to business goals. From architecture to deployment, our teams focus on creating reliable, high-performance systems that are built to scale and evolve."
        },
        { 
          title: "Quality Engineering", 
          content: "We ensure product quality through structured testing strategies, automation, and continuous validation. Our approach improves reliability, reduces defects, and enables faster, more confident releases."
        },
        { 
          title: "DevOps", 
          content: "We implement modern DevOps practices to streamline development and operations. Through automation, CI/CD pipelines, and continuous monitoring, we enable faster releases, improved stability, and efficient system management."
        },
        { 
          title: "Technology Migration", 
          content: "We help organizations modernize legacy systems and transition to modern architectures. From re-platforming to cloud migration, we ensure minimal disruption while improving performance, scalability, and maintainability."
        }
      ],
      features: [],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200",
      linkTarget: "services"
    },
    {
      id: "02",
      name: "cloud-data",
      title: "Cloud, Data & Analytics",
      tagline: "Intelligence Through Infrastructure",
      description: "We build cloud-native platforms and data solutions that enable organizations to scale efficiently and make informed decisions. From infrastructure setup and data pipelines to analytics and reporting, we help transform data into actionable insights.",
      features: ["Cloud Migrations", "Data Warehousing", "Predictive Analytics"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200",
      linkTarget: "services"
    },
    {
      id: "03",
      name: "ai",
      title: "Artificial Intelligence",
      tagline: "AI-First Transformation",
      description: "We apply AI to solve real business problems—enhancing decision-making, automating workflows, and improving operational efficiency. Our focus is on practical, production-ready AI solutions that integrate seamlessly into existing systems.",
      features: ["Machine Learning", "NLP Solutions", "AI Strategy"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
      linkTarget: "services"
    },
    {
      id: "04",
      name: "business-models",
      title: "Business Models",
      tagline: "Strategic Delivery Frameworks",
      description: "Our engagement models are designed for long-term partnership and operational excellence, offering flexible ways to scale your engineering capacity.",
      subPoints: [
        {
          title: "Offshore Development Center (ODC)",
          content: "We set up and manage dedicated offshore engineering teams aligned to your product and delivery goals. Our ODC model provides scalability, continuity, and high-quality execution as an extension of your organization."
        },
        {
          title: "Remote Contract Engineers",
          content: "We provide skilled engineers who can quickly integrate with your teams and contribute from day one. This flexible model helps you scale capacity, access specialized skills, and accelerate delivery without long-term commitments."
        },
        {
          title: "Global Capability Center (GCC)",
          content: "We help organizations establish and scale GCCs in India, covering strategy, hiring, infrastructure, and operations. Our approach ensures your GCC operates as a seamless extension of your global teams with strong governance and delivery alignment."
        }
      ],
      features: [],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
      linkTarget: "services"
    },
    {
      id: "05",
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
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#0085F7] mb-6 block leading-[1.5]">
            Enterprise Solutions
            </span>
            <h1 className="text-5xl md:ext-5xl lg:text-5xl font-black text-white tracking-tighter leading-[1.5] mb-8">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff]  to-[#0085F7]">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-normal max-w-2xl leading-relaxed border-l border-[#004b23] pl-10">
            Drive growth and modernization with strategic digital innovation and expert technology consulting. Tailored services to accelerate business performance.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-24 bg-[#F8F7F9] border-y border-gray-100 overflow-x-hidden">
        <div className="space-y-64">
          {services.map((service: any, idx) => (
            <div key={service.id} id={service.name} className="flex flex-col group transition-all duration-1000">
              {/* Full-Width Liquid Banner */}
              <div className="w-full h-[350px] md:h-[400px] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl border-y border-black/5 mb-20">
                <img src={service.image} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[3000ms]" alt={service.title} />
                {/* Floating Number Overlay */}
                <div className="absolute top-1/2 right-12 md:right-24 -translate-y-1/2 text-[160px] md:text-[220px] font-black text-white/30 select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10">
                  {service.id}
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
              </div>
              
              {/* Centered Content Container */}
              <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-5xl mx-auto">
                  <div className="flex flex-col lg:flex-row items-start lg:items-end gap-6 mb-16">
                    <div className="flex flex-col">
                      <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#0085F7] mb-6 block leading-[1.5]">{service.tagline}</span>
                      <h2 className="text-5xl md:ext-5xl  font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0085F7] to-[#00A94B] leading-[1.5] md:leading-[1.5]">
                        {service.title}
                      </h2>
                    </div>
                    <div className="h-px flex-1 bg-gray-100 hidden lg:block mb-4"></div>
                    <div className="hidden lg:flex items-center gap-4 mb-2">
                       <span className="text-[9px] font-black text-gray-300 uppercase tracking-[0.4em]">Expert Domain</span>
                       <div className="w-2 h-2 bg-[#0085F7] rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-16 border-l-4 border-[#0085F7]/30 pl-10 transition-all duration-700 group-hover:border-[#0085F7]">
                    {service.description}
                  </p>
                  
                  {service.subPoints ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16 mb-16">
                      {service.subPoints.map((point: any) => (
                        <div key={point.title} className="group/sub relative overflow-hidden">
                          <div className="flex items-center gap-5 mb-6">
                             <div className="w-2.5 h-2.5 bg-[#00A94B] rounded-full group-hover/sub:scale-150 transition-all duration-500"></div>
                             <h4 className="text-sm font-black uppercase tracking-[0.2em] text-[#1A1A1A] leading-[1.5]">{point.title}</h4>
                          </div>
                          <p className="text-[16px] text-gray-500 font-light leading-relaxed pl-7 border-l border-gray-100 group-hover/sub:border-[#0085F7] transition-all ml-1.25">
                             {point.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 mb-16">
                      {service.features.map((feat: any) => (
                        <div key={feat} className="flex items-center gap-5 group/feat border-l border-gray-100 pl-6 hover:border-[#0085F7] transition-all py-2">
                          <div className="w-2 h-2 bg-[#00A94B] rounded-full group-hover/feat:scale-150 transition-transform duration-500"></div>
                          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#1A1A1A]">{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex justify-start">
                    <button 
                      onClick={() => handleKnowMore(service.linkTarget)}
                      className="px-12 py-5 bg-[#1A1A1A] text-white text-[11px] font-black uppercase tracking-[0.4em] hover:bg-[#0085F7] transition-all duration-500 shadow-xl group/btn relative overflow-hidden flex items-center gap-6"
                    >
                      <span className="relative z-10">Envision More</span>
                      <svg className="w-5 h-5 relative z-10 transform group-hover/btn:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      <div className="absolute inset-0 bg-[#0085F7] transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-700 ease-out"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
