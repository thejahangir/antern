
import React, { useState, useEffect } from 'react';

export const Events: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to generate dates relative to today for dynamic demo purposes
  const getRelativeDate = (days: number) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).toUpperCase();
  };

  const eventsList = [
    {
      dateObj: getRelativeDate(-3),
      location: 'Virtual Lab',
      title: 'Microservices & Chaos Engineering',
      type: 'Technical Workshop',
      inviteOnly: false
    },
    {
      dateObj: getRelativeDate(-2),
      location: 'Bangalore Hub',
      title: 'Accessible UX: Beyond Compliance',
      type: 'Design Sprint',
      inviteOnly: false
    },
    {
      dateObj: getRelativeDate(12),
      location: 'San Francisco',
      title: 'Cognitive Summit 2024',
      type: 'Flagship Conference',
      inviteOnly: false
    },
    {
      dateObj: getRelativeDate(25),
      location: 'Virtual',
      title: 'UX ROI Masterclass',
      type: 'Webinar',
      inviteOnly: false
    },
    {
      dateObj: getRelativeDate(40),
      location: 'London',
      title: 'Enterprise Modernization Forum',
      type: 'Roundtable',
      inviteOnly: true
    },
    {
      dateObj: getRelativeDate(60),
      location: 'New York',
      title: 'Generative AI in FinTech',
      type: 'Industry Panel',
      inviteOnly: true
    }
  ];

  const isPast = (date: Date) => {
    const today = new Date();
    // Reset time to ensure correct day comparison
    today.setHours(0, 0, 0, 0); 
    date.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. KINETIC HERO */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div 
          className="absolute -inset-y-24 inset-x-0 z-0 opacity-40 grayscale"
          style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1540575861501-7c0f110f6f3a?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Global Networking Events"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#004b23] w-24 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#ccff33] mb-6 block">
              Global Assemblies
            </span>
            <h1 className="text-5xl md:ext-5xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">Events.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-normal max-w-2xl leading-relaxed border-l border-[#004b23] pl-8">
              Connecting global thinkers and industrial leaders to define the next horizon of digital excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {eventsList.map((event, i) => {
              const eventIsPast = isPast(new Date(event.dateObj));
              const dateString = formatDate(event.dateObj);
              const dateParts = dateString.split(','); // "MMM DD, YYYY" -> ["MMM DD", " YYYY"]
              
              return (
                <div 
                  key={i} 
                  className={`group flex flex-col md:flex-row items-center gap-12 p-12 border transition-all duration-500 relative overflow-hidden ${
                    eventIsPast 
                      ? 'border-gray-100 bg-gray-50/50 opacity-75 grayscale-[0.8]' 
                      : event.inviteOnly
                        ? 'border-gray-200 bg-white hover:border-[#ea4a54] hover:shadow-[0_20px_40px_-15px_rgba(234,74,84,0.15)]' // Red/Pink accent for invite only
                        : 'border-gray-100 hover:border-[#004b23]/50 bg-white hover:shadow-lg'
                  }`}
                >
                  {/* Status Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                    {eventIsPast && (
                      <div className="px-3 py-1 bg-gray-200 text-gray-500 text-[9px] font-black uppercase tracking-widest rounded-sm">
                        Concluded
                      </div>
                    )}
                    {event.inviteOnly && !eventIsPast && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-[#ea4a54]/5 border border-[#ea4a54]/20 text-[#ea4a54] rounded-sm shadow-sm animate-in fade-in slide-in-from-top-2 duration-700">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-[9px] font-black uppercase tracking-widest">By Invitation Only</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Date Column */}
                  <div className="text-center md:text-left shrink-0 min-w-[140px]">
                    <div className={`text-3xl font-black ${
                      eventIsPast 
                        ? 'text-gray-400' 
                        : event.inviteOnly 
                          ? 'text-[#ea4a54]' 
                          : 'text-[#004b23]'
                    }`}>
                      {dateParts[0]}
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                      {dateParts[1] ? dateParts[1].trim() : ''}
                    </div>
                  </div>
                  
                  {/* Content Column */}
                  <div className="flex-1">
                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-2 block">
                      {event.type} &bull; {event.location}
                    </span>
                    <h3 className={`text-2xl font-black uppercase tracking-tight ${
                      eventIsPast ? 'text-gray-500 line-through decoration-2 decoration-gray-300' : 'text-[#1A1A1A]'
                    }`}>
                      {event.title}
                    </h3>
                    {event.inviteOnly && !eventIsPast && (
                      <p className="mt-4 text-xs font-medium text-gray-400 italic flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#ea4a54] rounded-full"></span>
                        Exclusive access for strategic partners and executive leadership.
                      </p>
                    )}
                  </div>
                  
                  {/* Action Column */}
                  <button 
                    disabled={eventIsPast || event.inviteOnly}
                    className={`px-10 py-4 text-[10px] font-black uppercase tracking-[0.3em] transition-all whitespace-nowrap flex items-center gap-3 ${
                      eventIsPast 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed border border-transparent' 
                        : event.inviteOnly
                          ? 'bg-transparent border border-gray-200 text-gray-400 cursor-not-allowed hover:bg-gray-50'
                          : 'bg-[#1A1A1A] text-white hover:bg-[#004b23] border border-transparent'
                    }`}
                  >
                    {eventIsPast ? (
                      'Registration Closed'
                    ) : event.inviteOnly ? (
                      <>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Private Event
                      </>
                    ) : (
                      'Register'
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
