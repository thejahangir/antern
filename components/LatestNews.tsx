
import React from 'react';

const newsItems = [
  {
    category: "Strategic Insight",
    title: "The Multi-Modal AI Transformers: Redefining Enterprise Scale",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800"
  },
  {
    category: "Security Protocol",
    title: "Zero Trust Architecture: The New Standard for Secure Operations",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800"
  },
  {
    category: "Cloud Evolution",
    title: "Sustainable Infrastructure: Reaching Net Zero with Green Tech",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800"
  }
];

export const LatestNews: React.FC = () => {
  return (
    <section id="news" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
        <div>
            <div className="accent-bar bg-[#004b23]"></div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#004b23] to-[#70e000]">Latest News</h2>
          </div>
          <a href="#" className="text-sm font-bold uppercase tracking-widest text-[#004b23] hover:text-[#70e000] transition-colors">View Archive</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-100">
          {newsItems.map((news, idx) => (
            <article key={idx} className="group p-10 border-r border-gray-100 last:border-r-0 hover:bg-gray-50 transition-all duration-500">
              <div className="aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 mb-8">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#004b23] mb-4 block">
                {news.category}
              </span>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-8 leading-tight">
                {news.title}
              </h3>
              <a href="#" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#004b23] transition-all">
                Read Article
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
