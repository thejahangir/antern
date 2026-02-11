
import React, { useState, useEffect } from 'react';

interface Props {
  onInitiateStrategy: () => void;
  onNavigateTo: (page: string) => void;
}

export const Solutions: React.FC<Props> = ({ onInitiateStrategy, onNavigateTo }) => {
  const [offsetY, setOffsetY] = useState(0);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setIsConsultationOpen(false);
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  const products = [
    {
      id: "01",
      name: "IAmInterviewed",
      tagline: "Video Intelligence",
      description: "An enterprise-grade video assessment platform that uses behavioral AI to analyze candidate communication skills, reducing time-to-hire by 40%.",
      features: ["Sentiment Analysis", "Asynchronous Screening", "Bias Reduction"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
    },
    {
      id: "02",
      name: "SkillTest",
      tagline: "Adaptive Evaluation",
      description: "A dynamic technical validation engine that scales difficulty in real-time based on candidate performance, ensuring precise competency mapping.",
      features: ["50+ Languages", "Anti-Cheat Proctoring", "Code Playback"],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200"
    },
    {
      id: "03",
      name: "ScanJD",
      tagline: "Semantic Parsing",
      description: "Next-generation resume parsing that understands context, not just keywords. Matches talent to opportunity with 98% semantic accuracy.",
      features: ["Contextual Matching", "Gap Analysis", "Instant Ranking"],
      image: "https://plus.unsplash.com/premium_photo-1661402064910-17871fea6755?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  const services = [
    {
      name: "On-Premise Delivery",
      desc: "Air-gapped deployment of Antern's intelligence stack for high-security environments.",
      icon: "OP",
      targetPage: "on-premise"
    },
    {
      name: "ODC (Offshore Dev Centers)",
      desc: "Dedicated global engineering hubs built to your specific technical and cultural standards.",
      icon: "OD",
      targetPage: "odc"
    },
    {
      name: "Managed Services",
      desc: "24/7 proactive monitoring, security patching, and performance optimization.",
      icon: "MS",
      targetPage: "managed-services"
    },
    {
      name: "UX Studio",
      desc: "Strategic behavioral design that bridges complex logic with human intuition.",
      icon: "UX",
      targetPage: "ux-studio"
    }
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-[#70e000] selection:text-[#004b23]">
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] min-h-[700px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div 
          className="absolute -inset-y-24 inset-x-0 z-0 opacity-30 grayscale"
          style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Antern Solutions Ecosystem"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent"></div>
          {/* Tech Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.05]" 
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#70e000] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#ccff33] mb-6 block">
              Integrated Ecosystem
            </span>
            <h1 className="text-5xl md:ext-5xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Total <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">Solutions. </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-normal max-w-2xl leading-relaxed border-l border-[#004b23] pl-8">
              A unified architecture of cognitive products and strategic services designed to modernize the enterprise stack from the inside out.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-none mb-8">
               The Power of <br /><span className="text-[#004b23]">Convergence.</span>
             </h2>
             <div className="w-16 h-2 bg-[#1A1A1A]"></div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xl text-gray-500 font-normal leading-relaxed">
              We don't sell isolated tools. We deploy ecosystems. Antern's suite of products provides the intelligence layer, while our services ensure that intelligence is securely integrated, expertly managed, and beautifully designed. This convergence is where true digital transformation happens.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT SUITE */}
      <section className="py-32 bg-[#F8F7F9] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div>
              <div className="accent-bar bg-[#004b23] w-12 mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1A1A1A]">Cognitive Products</h2>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Deployed in 200+ Enterprises</p>
          </div>

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
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#004b23] mb-4 block">{product.tagline}</span>
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1A1A1A] mb-6">{product.name}</h3>
                  <p className="text-lg text-gray-500 font-normal leading-relaxed mb-10 border-l-2 border-gray-200 pl-6">
                    {product.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {product.features.map(feat => (
                      <div key={feat} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-[#004b23]"></div>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button className="px-8 py-4 bg-[#1A1A1A] text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#004b23] transition-all">
                    View Specs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES MATRIX */}
      <section className="py-32 bg-[#1A1A1A] text-white overflow-hidden relative">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#004b23]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-24 text-center">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">Services</span>
            </h2>
            <p className="text-gray-400 font-normal max-w-2xl mx-auto">
              Beyond software. We provide the operational infrastructure and design expertise to ensure your digital transformation is sustainable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="bg-[#1A1A1A] p-12 md:p-16 hover:bg-white/[0.03] transition-all group min-h-[350px] flex flex-col justify-between"
              >
                <div>
                   <div className="flex justify-between items-start mb-8">
                      <h3 className="text-2xl font-black uppercase tracking-tight group-hover:text-[#ccff33] transition-colors">
                        {service.name}
                      </h3>
                      <span className="text-[10px] font-black border border-white/20 px-2 py-1 text-gray-400 group-hover:border-[#70e000] group-hover:text-[#70e000] transition-all">
                        {service.icon}
                      </span>
                   </div>
                   <p className="text-gray-400 font-normal leading-relaxed group-hover:text-white transition-colors">
                     {service.desc}
                   </p>
                </div>
                
                <div 
                  className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-all duration-300 cursor-pointer w-fit"
                  onClick={() => onNavigateTo(service.targetPage)}
                >
                  <span>Explore Capability</span>
                  <div className="w-8 h-px bg-[#004b23] opacity-60 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. IMPACT DATA */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
             {[
               { val: "2M+", label: "Assessments Conducted" },
               { val: "40%", label: "Avg. Efficiency Gain" },
               { val: "99.9%", label: "Uptime SLA" },
               { val: "Global", label: "Delivery Network" }
             ].map((stat, i) => (
               <div key={i} className="group">
                 <div className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-4 group-hover:text-[#004b23] transition-colors">{stat.val}</div>
                 <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">{stat.label}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-48 bg-[#F8F7F9] relative overflow-hidden text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:ext-5xl font-black uppercase tracking-tighter text-[#1A1A1A] mb-12 leading-[0.9]">
            Architect Your <br /><span className="text-[#004b23]">Future.</span>
          </h2>
          <p className="text-xl text-gray-500 font-normal mb-16 max-w-2xl mx-auto">
            Deploy the full Antern ecosystem to secure your competitive advantage in the cognitive era.
          </p>
          <button 
            onClick={() => setIsConsultationOpen(true)}
            className="px-16 py-7 bg-[#1A1A1A] text-white text-[12px] font-black uppercase tracking-[0.5em] hover:bg-[#004b23] transition-all shadow-2xl"
          >
            Request a consultation
          </button>
        </div>
      </section>

      {/* Consultation Modal */}
      {isConsultationOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-sm" onClick={() => setIsConsultationOpen(false)}></div>
          <div className="relative bg-white w-full max-w-xl shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden">
            <div className="p-10 md:p-12">
              <button 
                onClick={() => setIsConsultationOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-[#1A1A1A] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A] mb-4">Request Received</h3>
                  <p className="text-gray-500 font-normal">Our strategic team will analyze your request and contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleConsultationSubmit} className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A] mb-2">Consultation Request</h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Strategic Alignment Session</p>
                  </div>

                  <div className="space-y-6">
                    <div className="group">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2 block">Name</label>
                      <input 
                        required 
                        type="text" 
                        placeholder="Your full name" 
                        className="w-full bg-gray-50 border-b border-gray-200 py-3 px-4 text-sm focus:outline-none focus:border-[#70e000] focus:bg-white transition-all placeholder:text-gray-300 text-[#1A1A1A]" 
                      />
                    </div>
                    <div className="group">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2 block">Email</label>
                      <input 
                        required 
                        type="email" 
                        placeholder="corporate@email.com" 
                        className="w-full bg-gray-50 border-b border-gray-200 py-3 px-4 text-sm focus:outline-none focus:border-[#70e000] focus:bg-white transition-all placeholder:text-gray-300 text-[#1A1A1A]" 
                      />
                    </div>
                    <div className="group">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2 block">Contact No</label>
                      <input 
                        required 
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        className="w-full bg-gray-50 border-b border-gray-200 py-3 px-4 text-sm focus:outline-none focus:border-[#70e000] focus:bg-white transition-all placeholder:text-gray-300 text-[#1A1A1A]" 
                      />
                    </div>
                    <div className="group">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2 block">Request For</label>
                      <textarea 
                        required 
                        rows={3} 
                        placeholder="Briefly describe your strategic needs..." 
                        className="w-full bg-gray-50 border-b border-gray-200 py-3 px-4 text-sm focus:outline-none focus:border-[#70e000] focus:bg-white transition-all placeholder:text-gray-300 text-[#1A1A1A] resize-none" 
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full py-5 bg-[#1A1A1A] text-white text-[11px] font-black uppercase tracking-[0.4em] hover:bg-[#004b23] transition-all flex items-center justify-center gap-4 group"
                  >
                    {formStatus === 'submitting' ? 'Processing...' : 'Submit Request'}
                    {formStatus !== 'submitting' && (
                      <div className="w-8 h-px bg-white/50 group-hover:bg-white transition-colors"></div>
                    )}
                  </button>
                </form>
              )}
            </div>
            {/* Modal Decorative Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1A1A1A] via-[#70e000] to-[#1A1A1A]"></div>
          </div>
        </div>
      )}
    </div>
  );
};
