
import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-40 pb-32 selection:bg-[#70e000] selection:text-[#004b23]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="accent-bar bg-[#004b23] w-12 h-1.5 mb-10"></div>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-6 block">Legal Protocol</span>
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-16 text-[#1A1A1A]">
          Terms of Service
        </h1>
        
        <div className="space-y-16 text-gray-600 leading-relaxed font-light text-lg">
          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#004b23] mb-6 border-b border-gray-100 pb-4">1. Acceptance of Terms</h2>
            <p>By accessing Antern's digital ecosystem, you agree to abide by these strategic guidelines and operational protocols. Access to our proprietary engines is a privilege governed by these terms.</p>
          </section>
          
          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#004b23] mb-6 border-b border-gray-100 pb-4">2. Intellectual Property</h2>
            <p>All cognitive frameworks, design tokens, source code, and proprietary algorithms within this domain are the exclusive intellectual property of Antern Technologies. Unauthorized reproduction is strictly prohibited.</p>
          </section>
          
          <section>
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#004b23] mb-6 border-b border-gray-100 pb-4">3. Ethical Conduct</h2>
            <p>Users must interact with our cognitive engines with integrity. Any attempt to exploit, reverse-engineer, or manipulate our intelligence stack will result in immediate termination of access and potential legal action.</p>
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
