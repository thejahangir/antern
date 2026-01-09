
import React from 'react';
import { Logo } from './Logo';

interface FooterProps {
  onInitiateStrategy?: () => void;
  onNavigateTo: (page: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onInitiateStrategy, onNavigateTo }) => {
  return (
    <footer id="contact" className="bg-[#1A1A1A] pt-24 pb-12 text-white overflow-hidden relative">
      {/* Ambient Background Glow */}
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#004b23]/20 rounded-full blur-[150px] pointer-events-none transform translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-1">
             <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500 mb-8">Digital Products</h4>
             <ul className="space-y-4">
               <li><button onClick={() => onNavigateTo('roadmap')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">Product Roadmap</button></li>
               <li><button onClick={() => onNavigateTo('home')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">IAmInterviewed</button></li>
               <li><button onClick={() => onNavigateTo('home')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">MySkillTest</button></li>
               <li><button onClick={() => onNavigateTo('home')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">ScanJD</button></li>
             </ul>
          </div>
          
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500 mb-8">Advisory</h4>
            <ul className="space-y-4 text-left">
              <li><button onClick={() => onNavigateTo('on-premise')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">On-Premise Delivery</button></li>
              <li><button onClick={() => onNavigateTo('odc')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">ODC</button></li>
              <li><button onClick={() => onNavigateTo('managed-services')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">Managed Services</button></li>
              <li><button onClick={() => onNavigateTo('ux-studio')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors font-bold">UX Studio</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500 mb-8">Intelligence</h4>
            <ul className="space-y-4 text-left">
              <li><button onClick={() => onNavigateTo('reports')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">Market Reports</button></li>
              <li><button onClick={() => onNavigateTo('case-studies')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">Case Studies</button></li>
              <li><button onClick={() => onNavigateTo('whitepapers')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">Whitepapers</button></li>
              <li><button onClick={() => onNavigateTo('events')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">Events</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500 mb-8">Corporate</h4>
            <ul className="space-y-4 text-left">
              <li><button onClick={() => onNavigateTo('our-vision')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">Our Vision</button></li>
              <li><button onClick={() => onNavigateTo('leadership')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">Leadership Team</button></li>
              <li><button onClick={() => onNavigateTo('careers')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">Careers</button></li>
              <li><button onClick={() => onNavigateTo('sustainability')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">Sustainability</button></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-500 mb-8">Connect</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="group">
                <input 
                  type="text" 
                  placeholder="NAME" 
                  className="w-full bg-white/5 border border-white/10 p-3 text-[10px] font-bold text-white placeholder:text-gray-600 focus:outline-none focus:border-[#70e000] transition-all uppercase tracking-widest" 
                />
              </div>
              <div className="group">
                <input 
                  type="email" 
                  placeholder="EMAIL" 
                  className="w-full bg-white/5 border border-white/10 p-3 text-[10px] font-bold text-white placeholder:text-gray-600 focus:outline-none focus:border-[#70e000] transition-all uppercase tracking-widest" 
                />
              </div>
              <div className="group">
                <textarea 
                  rows={3} 
                  placeholder="MESSAGE" 
                  className="w-full bg-white/5 border border-white/10 p-3 text-[10px] font-bold text-white placeholder:text-gray-600 focus:outline-none focus:border-[#70e000] transition-all uppercase tracking-widest resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-[#004b23] hover:bg-[#70e000] hover:text-[#004b23] text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all">
                Send
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Section: Legal & Credits */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <p>© 2024 ANTERN TECHNOLOGIES.</p>
            <div className="flex gap-8">
              <button onClick={() => onNavigateTo('privacy')} className="hover:text-white transition-colors">Privacy</button>
              <button onClick={() => onNavigateTo('terms')} className="hover:text-white transition-colors">Terms</button>
              <button onClick={() => onNavigateTo('cookies')} className="hover:text-white transition-colors">Cookies</button>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-[9px] font-black text-gray-500 uppercase tracking-[0.4em]">
            <span>Empowering Global Scale</span>
            <div className="w-1.5 h-1.5 bg-[#70e000] rounded-full"></div>
            <span>Built for Tomorrow</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan-line {
          0% { transform: translateX(-100%); }
          50%, 100% { transform: translateX(100%); }
        }
        .animate-scan-line {
          animation: scan-line 3s linear infinite;
        }
      `}</style>
    </footer>
  );
};
