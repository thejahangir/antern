
import React from 'react';

const talentPoints = [
  "End-to-end digital transformation strategy",
  "Agile technology implementation",
  "Process optimization & modernization",
  "Scalable, future-ready technology solutions"
];

const deliveryPoints = [
  "End-to-end project ownership",
  "Agile & milestone-driven execution",
  "Scalable, secure solutions",
  "On-budget delivery assurance"
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="bg-white">
      {/* Service Block 1 - White Theme - Compact */}
      <div className="py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Content Side */}
            <div className="lg:col-span-5">
              <div className="accent-bar bg-[#004b23] w-12 h-1 mb-6"></div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 leading-none uppercase tracking-tight text-[#1A1A1A]">
              Digital Innovation &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004b23] to-[#70e000]">Tech Consulting</span>
              </h3>
              <p className="text-sm md:text-base text-gray-500 mb-8 leading-relaxed max-w-md font-normal">
              Drive growth and modernization with strategic digital innovation and expert technology consulting. From transformation roadmaps to execution, solutions are designed to optimize operations, reduce risk, and accelerate business performance.

              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4 border-t border-gray-100">
                {talentPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#004b23]"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Side */}
            <div className="lg:col-span-7 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200" 
                  alt="Consulting" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Service Block 2 - Dark Theme - Compact */}
      <div className="py-20 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Image Side */}
            <div className="lg:col-span-7 order-last lg:order-first grayscale hover:grayscale-0 transition-all duration-700">
               <div className="aspect-[16/9] w-full overflow-hidden bg-[#222]">
                 <img 
                   src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200" 
                   alt="Delivery" 
                   className="w-full h-full object-cover" 
                 />
               </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-5">
              <div className="accent-bar bg-white w-12 h-1 mb-6"></div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 leading-none uppercase tracking-tight">
                End-to-End Project<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">Delivery Assurance</span>
              </h3>
              <p className="text-sm md:text-base text-gray-400 mb-8 leading-relaxed max-w-md font-normal">
                From strategy to deployment, we build scalable, secure, and high-performance solutions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4 border-t border-white/10">
                {deliveryPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-white"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">{point}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
