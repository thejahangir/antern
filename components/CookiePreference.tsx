
import React from 'react';

export const CookiePreference: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-32 selection:bg-[#70e000] selection:text-[#004b23]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="accent-bar bg-[#004b23] w-12 h-1.5 mb-10"></div>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-6 block">Data Control</span>
        <h1 className="text-6xl font-black uppercase tracking-tighter mb-8 text-[#1A1A1A]">
          Cookie Preference
        </h1>
        <p className="text-xl text-gray-500 font-light mb-16 max-w-2xl leading-relaxed">
          Control your digital footprint across the Antern ecosystem. We prioritize your privacy and offer granular control over data collection.
        </p>
        
        <div className="space-y-6">
          {[
            { title: 'Necessary Intelligence', desc: 'Critical cookies required for core session management and security protocols.', active: true },
            { title: 'Cognitive Optimization', desc: 'Cookies that allow us to tailor the strategic insights shown to your operational history.', active: false },
            { title: 'Interface Persistence', desc: 'Remembers your preferred UI settings and navigation history for a fluid experience.', active: true }
          ].map((item, i) => (
            <div key={i} className="p-10 border border-gray-100 flex items-center justify-between hover:border-[#004b23]/30 transition-colors group bg-gray-50/50">
              <div className="max-w-xl pr-8">
                <h3 className="text-lg font-black uppercase tracking-tight mb-3 text-[#1A1A1A] group-hover:text-[#004b23] transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
              <button className={`w-16 h-8 rounded-full transition-all duration-300 relative shrink-0 ${item.active ? 'bg-[#004b23]' : 'bg-gray-300'}`}>
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-md ${item.active ? 'left-9' : 'left-1'}`}></div>
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-10 border-t border-gray-100">
          <button className="px-12 py-6 bg-[#1A1A1A] text-white text-[11px] font-black uppercase tracking-[0.3em] hover:bg-[#004b23] transition-all shadow-xl">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};
