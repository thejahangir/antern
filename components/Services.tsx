
import React from 'react';

const talentPoints = [
  "On-demand skilled resources",
  "Faster project ramp-up",
  "Cost-efficient team scaling",
  "Seamless integration"
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
      {/* Service Block 1 - White Theme */}
      <div className="py-32 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="accent-bar bg-[#004b23]"></div>
              <h3 className="text-4xl font-black mb-8 leading-tight uppercase tracking-tight text-[#1A1A1A]">
                Flexible Talent &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004b23] to-[#70e000]">Tech Consulting</span>
              </h3>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Accelerate delivery with highly skilled resources tailored to your mission-critical needs. We reduce hiring risks while improving productivity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {talentPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-4 py-4 border-t border-gray-100">
                    <div className="w-2 h-2 bg-[#004b23]"></div>
                    <span className="text-[13px] font-bold uppercase tracking-widest text-[#1A1A1A]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-700">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200" alt="Consulting" className="w-full aspect-video object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Service Block 2 - Dark Theme */}
      <div className="py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-last lg:order-first grayscale hover:grayscale-0 transition-all duration-700">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200" alt="Delivery" className="w-full aspect-video object-cover" />
            </div>
            <div>
              <div className="accent-bar bg-white"></div>
              <h3 className="text-4xl font-black mb-8 leading-tight uppercase tracking-tight">
                End-to-End Project<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">Delivery Assurance</span>
              </h3>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                We take ownership of digital projects from strategy to deployment, building scalable, secure, and high-performance solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deliveryPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-4 py-4 border-t border-white/10">
                    <div className="w-2 h-2 bg-white"></div>
                    <span className="text-[13px] font-bold uppercase tracking-widest">{point}</span>
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
