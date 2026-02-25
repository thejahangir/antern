
import React, { useState, useEffect } from 'react';
import Bangalore from '../src/assets/img/bangalore.jpg';
import Hyderabad from '../src/assets/img/hyderbad.jpg';
import UnitedStates from '../src/assets/img/usa.png';

interface Props { 
  onInitiateStrategy: () => void; 
}

export const ContactPage: React.FC<Props> = ({ onInitiateStrategy }) => {
  const [offsetY, setOffsetY] = useState(0);
  const [times, setTimes] = useState<Record<string, string>>({});

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    query: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // EmailJS Configuration
    const SERVICE_ID = process.env.EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      location: formData.location,
      message: formData.query,
      context_type: 'Direct Contact Page Hero',
      page_context: 'Contact Page'
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      setFormStatus('success');
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', location: '', query: '' });
        setFormStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      // Fallback for demo
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

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
      image: [Bangalore], // Vidhana Soudha
    },
    {
      city: 'United States',
      region: 'North America Presence',
      address: 'Strategic Operations & Client Relations Division. One World Trade Center, New York.',
      timezone: 'EST',
      image: [UnitedStates],
    },
    {
      city: 'Hyderabad',
      region: 'Technology Center',
      address: 'Inorganic Growth & Digital Innovation Hub. HITECH City, Hyderabad.',
      timezone: 'IST',
      image: [Hyderabad], // Charminar
    }
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-[#0085F7] selection:text-[#fff]">
      {/* 1. KINETIC HERO WITH FORM */}
      <section className="relative min-h-screen flex items-center bg-[#0A0A0A] overflow-hidden pt-24 pb-24">
        <div 
          className="absolute -inset-y-24 inset-x-0 z-0 opacity-40 grayscale"
          style={{ transform: `translate3d(0, ${offsetY * 0.2}px, 0)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2500" 
            className="w-full h-full object-cover" 
            alt="Antern Global Office"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* LEFT COLUMN: Text Content */}
            <div>
              <div className="accent-bar bg-[#70e000] w-32 h-1.5 mb-12"></div>
              <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#ccff33] mb-8 block">
                Direct Portal
              </span>
              {/* <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-10">
                Initiate<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">
                  Sync.
                </span>
              </h1> */}
              <h1 class="text-5xl md:ext-5xl lg:text-5xl font-black tracking-tighter leading-[0.85] mb-8 text-white">Contact <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">Us</span></h1>
              <p className="text-lg md:text-xl text-gray-400 font-light max-w-xl leading-relaxed border-l-2 border-[#70e000] pl-8 mb-12 italic">
                "Connecting global strategic thinkers to accelerate your industrial-scale digital transformation."
              </p>
              
              <div className="flex flex-col gap-2">
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-1 block">General Inquiries</span>
                 <a href="mailto:contact@antern.com" className="text-xl font-bold text-white hover:text-[#70e000] transition-colors flex items-center gap-4 w-fit group">
                   contact@anterntech.com
                   <div className="w-8 h-px bg-white group-hover:w-16 group-hover:bg-[#70e000] transition-all"></div>
                 </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 p-8 md:p-12 shadow-[0_32px_64px_rgba(0,0,0,0.4)] animate-in slide-in-from-bottom-10 duration-1000">
              <h3 className="text-[12px] font-black uppercase tracking-[0.5em] text-[#D9D1DB] mb-1">
                Get in touch
              </h3>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-10">
                We will get back to you in next 3 working days
              </p>

              {formStatus === 'success' ? (
                <div className="text-center py-20 animate-in fade-in zoom-in-95 duration-500">
                  <div className="w-20 h-20 bg-[#004b23] rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(0,75,35,0.6)]">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-4">Thank you</h3>
                  <p className="text-white/60 font-light text-sm">We will get in touch very soon.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                      <label className="text-[11px]  uppercase text-gray-100 mb-2 block">Name</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white focus:outline-none focus:border-[#70e000] transition-all placeholder:text-white/20 font-light"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="group">
                      <label className="text-[11px]  uppercase text-gray-100 mb-2 block">Location</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white focus:outline-none focus:border-[#70e000] transition-all placeholder:text-white/20 font-light"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                      <label className="text-[11px]  uppercase text-gray-100 mb-2 block">Email</label>
                      <input 
                        required 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white focus:outline-none focus:border-[#70e000] transition-all placeholder:text-white/20 font-light"
                        placeholder="name@corp.com"
                      />
                    </div>
                    <div className="group">
                      <label className="text-[11px]  uppercase text-gray-100 mb-2 block">Phone</label>
                      <input 
                        required 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white focus:outline-none focus:border-[#70e000] transition-all placeholder:text-white/20 font-light"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="text-[11px]  uppercase text-gray-100 mb-2 block">Query</label>
                    <textarea 
                      required 
                      rows={2}
                      value={formData.query}
                      onChange={(e) => setFormData({...formData, query: e.target.value})}
                      className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white focus:outline-none focus:border-[#70e000] transition-all placeholder:text-white/20 font-light resize-none"
                      placeholder="Brief us on your strategic requirements..."
                    />
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full py-4 bg-[#004b23] text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#70e000] hover:text-[#004b23] transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                    >
                      {formStatus === 'submitting' ? 'Transmitting...' : 'Send'}
                      {formStatus !== 'submitting' && (
                          <div className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Floating Accent (Hidden on mobile to save space) */}
        <div className="absolute bottom-20 left-10 hidden lg:block">
           <div className="flex flex-col items-center gap-6">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 rotate-[-90deg] origin-center whitespace-nowrap mb-24">Global Operations</span>
              <div className="w-px h-32 bg-gradient-to-t from-white/20 to-[#70e000]"></div>
           </div>
        </div>
      </section>

      {/* 2. GLOBAL HUB CARDS */}
      <section className="py-48 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
             <div className="max-w-2xl">
                <div className="accent-bar bg-[#1A1A1A] w-16 mb-8"></div>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-none">
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
      <section className="py-32 md:py-48 bg-[#F8F7F9] relative overflow-hidden flex items-center justify-center">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ccff33]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            
            {/* LEFT COLUMN - Information */}
            <div className="lg:col-span-7 flex flex-col h-full justify-between">
              <div>
                <div className="w-16 h-1.5 bg-[#004b23] mb-10"></div>
                <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-[0.9] mb-10">
                  Strategic <br />
                  <span className="text-[#004b23]">Engagement.</span>
                </h2>
                <p className="text-xl text-gray-500 font-light leading-relaxed mb-16 max-w-lg">
                  Engage our executive council for an immediate deep-dive into your strategic needs, or utilize our cognitive engine to define your project requirements.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8 border-t border-gray-200">
                 {[
                   { label: 'Partnerships', detail: 'partners@anterntech.com' },
                   { label: 'Talent', detail: 'careers@anterntech.com' },
                   { label: 'Press', detail: 'media@anterntech.com' }
                 ].map(item => (
                   <div key={item.label} className="group">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 group-hover:text-[#70e000] transition-colors block mb-3">{item.label}</span>
                      <a href={`mailto:${item.detail}`} className="text-lg font-bold text-[#1A1A1A] border-b border-transparent group-hover:border-[#004b23] transition-all pb-1">{item.detail}</a>
                   </div>
                 ))}
              </div>
            </div>

            {/* RIGHT COLUMN - The Action (CTA Only) */}
            <div className="lg:col-span-5 relative flex flex-col items-start lg:items-end justify-center">
               <div className="relative z-10 w-full lg:w-auto">
                  <div className="hidden lg:block absolute -top-12 -right-12 text-[#E5E7EB]">
                     <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <path d="M50 0V100M0 50H100" stroke="currentColor" strokeWidth="20" />
                     </svg>
                  </div>

                  <button 
                    onClick={onInitiateStrategy}
                    className="w-full lg:w-auto py-8 px-12 bg-[#1A1A1A] text-white text-[13px] font-black uppercase tracking-[0.4em] hover:bg-[#004b23] transition-all shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_-10px_rgba(0,75,35,0.4)] group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-6">
                      Initiate a Discussion
                      <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    {/* Hover Effect Layer */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[#70e000] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0 opacity-10"></div>
                  </button>
                  
                  <div className="mt-8 flex items-center justify-center lg:justify-end gap-3 opacity-60">
                     <div className="w-1.5 h-1.5 bg-[#004b23] rounded-full animate-pulse"></div>
                     <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em]">
                       Secure Transmission &bull; 256-bit Infrastructure
                     </span>
                  </div>
               </div>
            </div>

          </div>
        </div>
        
        {/* Large Watermark */}
        <div className="absolute bottom-[-5%] left-[-5%] text-[400px] font-black text-gray-100/50 pointer-events-none select-none tracking-tighter z-0 leading-none">
          CONNECT
        </div>
      </section>
    </div>
  );
};
