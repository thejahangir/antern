
import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-32 selection:bg-[#70e000] selection:text-[#004b23]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="accent-bar bg-[#004b23] w-12 h-1.5 mb-10"></div>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-6 block">Legal Protocol</span>
        <h1 className="text-6xl font-black uppercase tracking-tighter mb-16 text-[#1A1A1A]">
          Privacy Policy
        </h1>
        
        <div className="space-y-16 text-gray-600 leading-relaxed font-light text-lg">
          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#004b23] mb-6 border-b border-gray-100 pb-4">1. Information We Collect</h2>
            <p>We collect information that you provide directly to us when you use our services, including operational handles, email nodes, and professional dossiers during recruitment processes. We prioritize data minimization, collecting only what is strictly necessary.</p>
          </section>
          
          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#004b23] mb-6 border-b border-gray-100 pb-4">2. Data Usage</h2>
            <p>Your data is used solely for the purpose of delivering high-performance enterprise services, improving our cognitive engine, and processing professional applications. All usage is strictly governed by our internal ethical AI guidelines.</p>
          </section>
          
          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#004b23] mb-6 border-b border-gray-100 pb-4">3. Data Sovereignty</h2>
            <p>Antern Technologies respects user sovereignty. We do not sell data to third parties. All information is handled with zero-trust encryption protocols (AES-256) both in transit and at rest.</p>
          </section>
          
          <section className="bg-gray-50 p-8 border-l-4 border-[#70e000]">
             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Effective Date</p>
             <p className="text-[#1A1A1A] font-bold">March 2024</p>
          </section>
        </div>
      </div>
    </div>
  );
};
