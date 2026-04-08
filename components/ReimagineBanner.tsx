
import React from 'react';

export const ReimagineBanner: React.FC = () => {
  return (
    <section className="relative bg-[#0F0F0F] py-16 md:py-20 overflow-hidden border-b border-white/5 mt-10 md:mt-16">
      {/* Background Texture/Grid */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      {/* Animated Gradient Orbs - Smaller and more subtle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#0085F7] opacity-[0.05] blur-[100px] rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-[#00A94B] opacity-[0.05] blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* Main Statement - More compact typography */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white text-center leading-[1.2] tracking-tight max-w-5xl">
            We help organizations <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0085F7] via-white to-[#00A94B] bg-size-200 animate-gradient-x">reimagine and build</span> their business with strong engineering and modern technology.
          </h2>

          {/* Decorative Bottom Bar - Minimalist */}
          <div className="mt-8 flex items-center gap-2">
             <div className="w-1 h-1 rounded-full bg-[#0085F7]"></div>
             <div className="w-12 h-[1px] bg-gradient-to-r from-[#0085F7] to-[#00A94B]"></div>
             <div className="w-1 h-1 rounded-full bg-[#00A94B]"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </section>
  );
};
