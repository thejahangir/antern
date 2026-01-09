
import React from 'react';

const newsHighlights = [
  {
    tag: "Press Release",
    title: "Antern Technologies Recognized as a Leader in AI-Driven Recruitment Strategy for 2024",
    date: "March 15, 2024",
    link: "#"
  },
  {
    tag: "Innovation",
    title: "Introducing ScanJD 2.0: The Future of Semantic Job Matching and Talent Acquisition",
    date: "March 10, 2024",
    link: "#"
  },
  {
    tag: "Sustainability",
    title: "Antern Commits to Net-Zero Operations Across All Digital Infrastructure by 2030",
    date: "March 05, 2024",
    link: "#"
  }
];

export const WhatsNew: React.FC = () => {
  return (
    <section id="whats-new" className="py-32 bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col">
            <div className="accent-bar bg-[#70e000] w-12 mb-8 mx-auto"></div>
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-16 pb-6 text-center">
              Recent <span className="text-[#ccff33]">Announcements</span>
            </h3>
            <div className="space-y-12">
              {newsHighlights.map((item, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-white/5 text-[#ccff33] border border-white/10 group-hover:border-[#70e000] transition-colors">
                      {item.tag}
                    </span>
                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{item.date}</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold leading-snug group-hover:text-[#ccff33] transition-colors">
                    {item.title}
                  </h4>
                  <div className="mt-6 h-px w-full bg-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-0 bg-[#70e000] group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-16 self-center px-12 py-5 border border-white/20 text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all">
              Newsroom Archive
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
