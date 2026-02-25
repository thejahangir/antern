
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
    <section id="news" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Compact Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="accent-bar bg-[#004b23] w-12 h-1 mb-4"></div>
            <h2 className="text-3xl font-black tracking-tighter text-[#1A1A1A]">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0085F7] to-[#00A94B]">Insights</span>
            </h2>
          </div>
          <a href="#" className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#004b23] hover:text-[#70e000] transition-colors">
            View Archive 
            <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((news, idx) => (
            <article key={idx} className="group cursor-pointer flex flex-col h-full">
              {/* Image Container */}
              <div className="aspect-[3/2] overflow-hidden bg-gray-100 mb-5 relative">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
                <div className="absolute top-0 left-0 bg-[#1A1A1A] px-3 py-1.5">
                   <span className="text-[8px] font-black uppercase tracking-widest text-white">
                     {news.category}
                   </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex flex-col flex-1">
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-4 leading-snug group-hover:text-[#004b23] transition-colors">
                  {news.title}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-600 transition-colors">
                    Read Article
                  </span>
                  <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#004b23] group-hover:text-white transition-all">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
