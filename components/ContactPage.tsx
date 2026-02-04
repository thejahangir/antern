
import React, { useState, useEffect } from 'react';

interface Props { 
  onInitiateStrategy: () => void; 
}

export const ContactPage: React.FC<Props> = ({ onInitiateStrategy }) => {
  const [offsetY, setOffsetY] = useState(0);
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Real-time clock update for hubs
    const timer = setInterval(() => {
      const now = new Date();
      setTimes({
        'Bangalore': now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit' }),
        'Hyderabad': now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit' }),
        'United States': now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour12: false, hour: '2-digit', minute: '2-digit' })
      });
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const offices = [
    {
      city: 'Bangalore',
      region: 'India Headquarters',
      address: '#226, 10 M, 100 Ft Road, HRBR Layout, Block 1, Kalyan Nagar, Bangalore - 560 043. India.',
      timezone: 'IST',
      image: 'https://images.unsplash.com/photo-1610433572201-110753c6cff9?q=80&w=800&auto=format&fit=crop', // Vidhana Soudha
    },
    {
      city: 'United States',
      region: 'North America Presence',
      address: 'Strategic Operations & Client Relations Division. One World Trade Center, New York.',
      timezone: 'EST',
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=800&auto=format&fit=crop',
    },
    {
      city: 'Hyderabad',
      region: 'Technology Center',
      address: 'Inorganic Growth & Digital Innovation Hub. HITECH City, Hyderabad.',
      timezone: 'IST',
      image: 'https://images.unsplash.com/photo-1605142859862-978be7eba909?q=80&w=800&auto=format&fit=crop', // Charminar
    }
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-[#70e000] selection:text-[#004b23]">
      {/* 1. KINETIC HERO */}
      <section className="relative h-[80vh] min-h-[700px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div 
          className="absolute -inset-y-24 inset-x-0 z-0 opacity-40 grayscale"
          style={{ transform: `translate3d(0, ${offsetY * 0.2}px, 0)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2500" 
            className="w-full h-full object-cover" 
            alt="Antern Global Office"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#70e000] w-32 h-1.5 mb-12"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#ccff33] mb-8 block">
              Direct Portal
            </span>
            <h1 className="ext-5xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-12">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]"> Us.</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-400 font-light max-w-2xl leading-tight border-l-2 border-[#70e000] pl-10 mb-16 italic">
              "Connecting global strategic thinkers to accelerate your industrial-scale digital transformation."
            </p>
            
            <div className="flex flex-col md:flex-row gap-8">
               <div className="group">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-2 block">General Inquiries</span>
                  <a href="mailto:contact@antern.com" className="text-2xl font-black text-white hover:text-[#70e000] transition-colors flex items-center gap-4">
                    contact@antern.com
                    <div className="w-8 h-px bg-white group-hover:w-16 group-hover:bg-[#70e000] transition-all"></div>
                  </a>
               </div>
            </div>
          </div>
        </div>

        {/* Floating Accent */}
        <div className="absolute bottom-20 right-10 hidden lg:block">
           <div className="flex flex-col items-center gap-6">
              <div className="w-px h-32 bg-gradient-to-b from-white/20 to-[#70e000]"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 rotate-90 origin-left mt-24 whitespace-nowrap">Global Operations</span>
           </div>
        </div>
      </section>

      {/* 2. GLOBAL HUB CARDS */}
      <section className="py-48 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
             <div className="max-w-2xl">
                <div className="accent-bar bg-[#1A1A1A] w-16 mb-8"></div>
                <h2 className="text-5xl md:ext-5xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-none">
                  Operational <br />
                  <span className="text-[#004b23]">Hubs.</span>
                </h2>
             </div>
             <p className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400 max-w-[250px] border-l border-gray-100 pl-8">
               Strategically distributed intelligence synchronized across global time zones.
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            {offices.map((office, idx) => (
              <div key={idx} className="group relative bg-white overflow-hidden min-h-[650px] flex flex-col justify-between p-12 hover:bg-[#1A1A1A] transition-all duration-700">
                <div className="relative z-20">
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100 group-hover:border-white/10 transition-colors">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 group-hover:text-white/50 transition-colors mb-1">Timezone</span>
                        <span className="text-xl font-black text-[#004b23] group-hover:text-[#ccff33] transition-colors">{office.timezone}</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 group-hover:bg-white/10 px-4 py-2 rounded-full transition-colors">
                        <div className="w-2 h-2 rounded-full bg-[#70e000] animate-pulse"></div>
                        <span className="text-lg font-mono font-bold text-[#1A1A1A] group-hover:text-white transition-colors">
                            {times[office.city] || '--:--'}
                        </span>
                    </div>
                  </div>
                  
                  <h3 className="text-4xl font-black uppercase tracking-tighter text-[#1A1A1A] group-hover:text-white transition-colors mb-6">
                    {office.city}
                  </h3>
                  <div className="w-8 h-1 bg-[#004b23] mb-8 group-hover:w-full group-hover:bg-[#70e000] transition-all duration-700"></div>
                  
                  {/* Particular Place Thumbnail */}
                  <div className="my-8 aspect-[16/10] w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 border border-gray-100 group-hover:border-white/10 bg-gray-50 relative">
                    <img 
                      src={office.image} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2000ms]" 
                      alt={office.city} 
                    />
                    {/* Tech Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                       <div className="absolute inset-0 bg-gradient-to-t from-[#004b23]/40 to-transparent"></div>
                       <div className="absolute top-4 left-4 flex gap-1">
                          <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                          <div className="w-1 h-px bg-white/50 w-8 mt-0.5"></div>
                       </div>
                    </div>
                  </div>

                  <p className="text-gray-500 group-hover:text-white/80 text-sm font-light leading-relaxed mb-10 transition-colors">
                    {office.address}
                  </p>
                </div>

                <div className="relative z-20 pt-12 border-t border-gray-50 group-hover:border-white/10 transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 group-hover:text-[#ccff33] block mb-4 transition-colors">
                    {office.region}
                  </span>
                  <button className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-[#1A1A1A] group-hover:text-white transition-colors group/btn">
                    View on Map 
                    <div className="w-10 h-px bg-current group-hover:w-20 transition-all duration-500 bg-[#70e000]"></div>
                  </button>
                </div>

                {/* Subtle Background Mark */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000 pointer-events-none">
                  <span className="text-[200px] font-black text-white rotate-90 inline-block">HUB</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTELLIGENCE DESK (Direct Contact Section) */}
      <section className="py-48 bg-[#F8F7F9] relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white rounded-full blur-[150px] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            
            <div className="lg:col-span-5">
              <div className="accent-bar bg-[#004b23] w-24 mb-10"></div>
              <h2 className="text-5xl md:ext-5xl font-black uppercase tracking-tighter leading-none text-[#1A1A1A] mb-10">
                Strategic <br />
                <span className="text-[#004b23]">Engagement.</span>
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
                Engage our executive council for an immediate deep-dive into your strategic needs, or utilize our cognitive engine to define your project requirements.
              </p>
              
              <div className="space-y-10">
                 {[
                   { label: 'Partnerships', detail: 'partners@antern.tech' },
                   { label: 'Talent', detail: 'careers@antern.tech' },
                   { label: 'Press', detail: 'media@antern.tech' }
                 ].map(item => (
                   <div key={item.label} className="group cursor-pointer">
                      <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 group-hover:text-[#70e000] transition-colors">{item.label}</span>
                      <p className="text-xl font-bold text-[#1A1A1A] mt-1">{item.detail}</p>
                   </div>
                 ))}
              </div>
            </div>

            <div className="lg:col-span-7">
               <div className="p-12 md:p-20 bg-white shadow-[0_64px_128px_-32px_rgba(0,75,35,0.1)] relative group rounded-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none">
                     <span className="text-[150px] font-black leading-none">+</span>
                  </div>
                  
                  <h3 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] mb-12">
                    Request a <span className="text-[#004b23]">Session.</span>
                  </h3>
                  
                  <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Full Name / Operational Handle" 
                        className="w-full bg-transparent border-b border-gray-100 py-4 px-0 text-xl font-light focus:outline-none focus:border-[#70e000] transition-all placeholder:text-gray-400"
                      />
                    </div>
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="Professional Email Node" 
                        className="w-full bg-transparent border-b border-gray-100 py-4 px-0 text-xl font-light focus:outline-none focus:border-[#70e000] transition-all placeholder:text-gray-400"
                      />
                    </div>
                    <div className="relative">
                      <textarea 
                        rows={1}
                        placeholder="Initial Directive / Inquiry Details" 
                        className="w-full bg-transparent border-b border-gray-100 py-4 px-0 text-xl font-light focus:outline-none focus:border-[#70e000] transition-all placeholder:text-gray-400 resize-none"
                      />
                    </div>
                    
                    <button 
                      onClick={onInitiateStrategy}
                      className="w-full py-8 bg-[#1A1A1A] text-white text-[12px] font-black uppercase tracking-[0.6em] hover:bg-[#004b23] transition-all shadow-2xl flex items-center justify-center gap-6 group"
                    >
                      Initiate a Discussion
                      <div className="w-12 h-px bg-white group-hover:w-20 transition-all"></div>
                    </button>
                  </form>
                  
                  <p className="mt-12 text-[9px] font-black text-gray-300 uppercase tracking-[0.5em] text-center">
                    Secure Transmission &bull; 256-bit Infrastructure
                  </p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Large Watermark Background */}
      <div className="fixed bottom-[-150px] left-[-50px] opacity-[0.02] text-[500px] font-black pointer-events-none select-none z-0 tracking-tighter">
        CONNECT
      </div>
    </div>
  );
};
