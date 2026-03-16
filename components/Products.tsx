
import React from 'react';

interface ProductsProps {
  onViewSolutions: () => void;
}

const products = [
  {
    name: "IAmInterviewed",
    description: "Enterprise video assessment platform redefining the hiring landscape with precision metrics.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "SkillTest",
    description: "Scalable evaluation engine designed for large-scale enterprise domain validation.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "ScanJD",
    description: "AI-driven optimization tool for intelligent recruitment and organizational growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  }
];

export const Products: React.FC<ProductsProps> = ({ onViewSolutions }) => {
  return (
    <section id="products" className="py-32 bg-[#F8F7F9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="accent-bar"></div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0085F7] to-[#00A94B]">Solutions</span></h2>
            <p className="text-gray-500 text-lg">Innovative products built to solve the complex challenges of the modern enterprise.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, idx) => (
            <div key={idx} className="group bg-white border border-gray-100 hover:border-[#4918A9]/30 transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">{product.name}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed text-[15px]">
                  {product.description}
                </p>
                <button 
                  onClick={onViewSolutions}
                  className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-[#4918A9] group-hover:gap-5 transition-all"
                >
                  Explore Solution
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
