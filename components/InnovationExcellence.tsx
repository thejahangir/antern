
import React from 'react';

export const InnovationExcellence: React.FC = () => {
  return (
    <section className="bg-[#FFFFFF] overflow-hidden border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 relative">
          
          {/* Central Plus Symbol - Kyndryl Signature */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
            <div className="w-20 h-20 bg-[#FFFFFF] border border-gray-100 flex items-center justify-center shadow-sm">
              <span className="text-4xl font-light text-[#004b23]">+</span>
            </div>
          </div>

          {/* Left Block: Continuous Innovation */}
          <div className="relative group overflow-hidden border-r border-gray-100">
            <div className="p-12 md:p-24 lg:p-32 flex flex-col h-full min-h-[600px] justify-center relative z-10 bg-white group-hover:bg-gray-50 transition-colors duration-700">
              <div className="accent-bar bg-[#004b23] w-12 mb-10"></div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9] text-[#1A1A1A]">
                Continuous<br />
                <span className="text-[#004b23]">Innovation</span>
              </h2>
              <p className="text-xl text-gray-500 max-w-md leading-relaxed mb-12 font-light">
                Modernizing the world’s most vital infrastructure with cognitive intelligence and cloud-native agility.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span className="text-[10px] font-bold text-[#004b23] mt-1">01</span>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest mb-1 text-[#1A1A1A]">Modernization</h4>
                    <p className="text-sm text-gray-400">Seamlessly transitioning legacy systems to the cloud.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[10px] font-bold text-[#004b23] mt-1">02</span>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest mb-1 text-[#1A1A1A]">Cognitive AI</h4>
                    <p className="text-sm text-gray-400">Embedding intelligence at every touchpoint of your operation.</p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <button className="group/btn flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-[#1A1A1A] hover:text-[#004b23] transition-colors">
                  Innovate with us
                  <div className="w-12 h-px bg-[#1A1A1A] group-hover/btn:w-20 group-hover/btn:bg-[#004b23] transition-all"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Block: Operational Excellence */}
          <div className="relative group overflow-hidden">
            <div className="p-12 md:p-24 lg:p-32 flex flex-col h-full min-h-[600px] justify-center relative z-10 bg-white group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-700">
              <div className="accent-bar bg-[#70e000] w-12 mb-10"></div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9] text-[#1A1A1A] group-hover:text-white transition-colors">
                Operational<br />
                <span className="group-hover:text-[#ccff33] transition-colors">Excellence</span>
              </h2>
              <p className="text-xl text-gray-500 group-hover:text-gray-400 max-w-md leading-relaxed mb-12 font-light transition-colors">
                Ensuring mission-critical systems are secure, resilient, and optimized for high-performance scale.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <span className="text-[10px] font-bold text-[#004b23] group-hover:text-[#ccff33] mt-1 transition-colors">01</span>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest mb-1 text-[#1A1A1A] group-hover:text-white transition-colors">Zero-Trust</h4>
                    <p className="text-sm text-gray-400 group-hover:text-gray-500 transition-colors">Standardized security for global-scale enterprise platforms.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[10px] font-bold text-[#004b23] group-hover:text-[#ccff33] mt-1 transition-colors">02</span>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest mb-1 text-[#1A1A1A] group-hover:text-white transition-colors">Scalability</h4>
                    <p className="text-sm text-gray-400 group-hover:text-gray-500 transition-colors">Proactive management of complex digital ecosystems.</p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <button className="group/btn flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-[#1A1A1A] group-hover:text-white transition-colors">
                  Scale efficiently
                  <div className="w-12 h-px bg-[#1A1A1A] group-hover:bg-white group-hover/btn:w-20 transition-all"></div>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Visual Split Overlay (Desktop only) */}
      <div className="hidden lg:block h-px w-full bg-gray-100"></div>
    </section>
  );
};
