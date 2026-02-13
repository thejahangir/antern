
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
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-10">
          <div className="col-span-2 lg:col-span-1">
             <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white mb-8">Digital Products</h4>
             <ul className="space-y-4">
               <li><button onClick={() => onNavigateTo('roadmap')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">Product Roadmap</button></li>
               <li><a href="https://iaminterviewed.com/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors block">IAmInterviewed</a></li>
               <li><a href="https://myskilltest.com/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors block">MySkillTest</a></li>
               <li><button onClick={() => onNavigateTo('home')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">ScanJD</button></li>
             </ul>
          </div>
          
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white mb-8">Advisory</h4>
            <ul className="space-y-4 text-left">
              <li><button onClick={() => onNavigateTo('on-premise')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">On-Premise Delivery</button></li>
              <li><button onClick={() => onNavigateTo('odc')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">ODC</button></li>
              <li><button onClick={() => onNavigateTo('managed-services')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">Managed Services</button></li>
              <li><button onClick={() => onNavigateTo('ux-studio')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors font-bold">UX Studio</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white mb-8">Intelligence</h4>
            <ul className="space-y-4 text-left">
              <li><button onClick={() => onNavigateTo('reports')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">Market Reports</button></li>
              <li><button onClick={() => onNavigateTo('case-studies')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">Case Studies</button></li>
              <li><button onClick={() => onNavigateTo('whitepapers')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">Whitepapers</button></li>
              <li><button onClick={() => onNavigateTo('events')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">Events</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white mb-8">Corporate</h4>
            <ul className="space-y-4 text-left">
              <li><button onClick={() => onNavigateTo('our-vision')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">Our Vision</button></li>
              <li><button onClick={() => onNavigateTo('leadership')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">Leadership Team</button></li>
              <li><button onClick={() => onNavigateTo('careers')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">Careers</button></li>
              <li><button onClick={() => onNavigateTo('sustainability')} className="text-[13px] text-gray-400 hover:text-[#70e000] transition-colors">Sustainability</button></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white mb-8">Connect</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="text" 
                  id="footer-name"
                  className="peer w-full bg-transparent border border-white/20 rounded-sm px-4 py-3 text-[13px] text-white focus:outline-none focus:border-[#70e000] transition-all placeholder-transparent"
                  placeholder="Name"
                />
                <label 
                  htmlFor="footer-name"
                  className="absolute left-3 -top-2.5 bg-[#1A1A1A] px-2 text-[10px] font-bold uppercase tracking-widest text-gray-300 transition-colors peer-focus:text-[#70e000]"
                >
                  Name
                </label>
              </div>
              
              <div className="relative">
                <input 
                  type="email" 
                  id="footer-email"
                  className="peer w-full bg-transparent border border-white/20 rounded-sm px-4 py-3 text-[13px] text-white focus:outline-none focus:border-[#70e000] transition-all placeholder-transparent"
                  placeholder="Email"
                />
                <label 
                  htmlFor="footer-email"
                  className="absolute left-3 -top-2.5 bg-[#1A1A1A] px-2 text-[10px] font-bold uppercase tracking-widest text-gray-300 transition-colors peer-focus:text-[#70e000]"
                >
                  Email
                </label>
              </div>

              <div className="relative">
                <textarea 
                  rows={3} 
                  id="footer-message"
                  className="peer w-full bg-transparent border border-white/20 rounded-sm px-4 py-3 text-[13px] text-white focus:outline-none focus:border-[#70e000] transition-all resize-none placeholder-transparent"
                  placeholder="Message"
                ></textarea>
                <label 
                  htmlFor="footer-message"
                  className="absolute left-3 -top-2.5 bg-[#1A1A1A] px-2 text-[10px] font-bold uppercase tracking-widest text-gray-300 transition-colors peer-focus:text-[#70e000]"
                >
                  Message
                </label>
              </div>

              <button className="w-full py-4 bg-[#004b23] hover:bg-[#70e000] hover:text-[#004b23] text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all shadow-lg hover:shadow-[#70e000]/20 rounded-sm">
                Send
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Section: Legal & Credits */}
        <div className=" border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
          <p>© {new Date().getFullYear()} ANTERN TECHNOLOGIES.</p>
            <div className="flex gap-8">
              <button onClick={() => onNavigateTo('privacy')} className="hover:text-white transition-colors">Privacy</button>
              <button onClick={() => onNavigateTo('terms')} className="hover:text-white transition-colors">Terms</button>
              <button onClick={() => onNavigateTo('cookies')} className="hover:text-white transition-colors">Cookies</button>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-[9px] font-black text-gray-400 uppercase ">
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
