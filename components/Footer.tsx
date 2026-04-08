import React, { useState } from "react";
import emailjs from '@emailjs/browser';

interface FooterProps {
  onInitiateStrategy?: () => void;
  onNavigateTo: (page: any) => void;
  onNavigateToProduct: (productId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onInitiateStrategy,
  onNavigateTo,
  onNavigateToProduct,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_n9atl9p';
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_7gj9eni';
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'zDr7_mS8xJCngl2O3';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'reach.anterntech@gmail.com',
      context_type: 'Footer Contact Form',
      page_context: window.location.hash || 'Home'
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Footer EmailJS Error:', error);
      setStatus('idle');
    }
  };
  return (
    <footer
      id="contact"
      className="bg-[#1A1A1A] pt-24 pb-12 text-white overflow-hidden relative"
    >
      {/* Ambient Background Glow */}
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#004b23]/20 rounded-full blur-[150px] pointer-events-none transform translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-5">
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white mb-8">
              Product Suite
            </h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => onNavigateTo("roadmap")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors"
                >
                  Product Roadmap
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToProduct("iaminterviewed")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors block"
                >
                  IamInterviewed
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToProduct("myskilltest")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors block"
                >
                  MySkillTest
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToProduct("scanjd")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors"
                >
                  ScanJD
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToProduct("delorg360")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors block"
                >
                  DelOrg360
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white mb-8">
              Services
            </h4>
            <ul className="space-y-4 text-left">
              <li>
                <button
                  onClick={() => onNavigateTo("services")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors"
                >
                  Engineering
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo("services")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors"
                >
                  Cloud, Data & Analytics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo("services")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors"
                >
                  Artificial Intelligence
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo("services")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors"
                >
                  Business Models
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo("ux-studio")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors font-bold"
                >
                  UX Studio
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white mb-8">
              Knowledge Hub
            </h4>
            <ul className="space-y-4 text-left">
              {/* <li><button onClick={() => onNavigateTo('reports')} className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors">Market Reports</button></li> */}
              <li>
                <button
                  onClick={() => onNavigateTo("case-studies")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors"
                >
                  Case Studies
                </button>
              </li>
              {/* <li><button onClick={() => onNavigateTo('whitepapers')} className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors">Whitepapers</button></li>
              <li><button onClick={() => onNavigateTo('events')} className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors">Events</button></li> */}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white mb-8">
              Corporate
            </h4>
            <ul className="space-y-4 text-left">
              <li>
                <button
                  onClick={() => onNavigateTo("our-vision")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors"
                >
                  Our Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo("leadership")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors"
                >
                  Leadership Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo("careers")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTo("privacy")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white mb-8">
              Connect
            </h4>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="footer-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="peer w-full bg-transparent border border-white/20 rounded-sm px-4 py-3 text-[13px] text-white focus:outline-none focus:border-[#79BFFA] transition-all placeholder-transparent"
                  placeholder="Name"
                />
                <label
                  htmlFor="footer-name"
                  className="absolute left-3 -top-2.5 bg-[#1A1A1A] px-2 text-[10px] font-bold uppercase tracking-widest text-gray-300 transition-colors peer-focus:text-[#79BFFA]"
                >
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="footer-email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="peer w-full bg-transparent border border-white/20 rounded-sm px-4 py-3 text-[13px] text-white focus:outline-none focus:border-[#79BFFA] transition-all placeholder-transparent"
                  placeholder="Email"
                />
                <label
                  htmlFor="footer-email"
                  className="absolute left-3 -top-2.5 bg-[#1A1A1A] px-2 text-[10px] font-bold uppercase tracking-widest text-gray-300 transition-colors peer-focus:text-[#79BFFA]"
                >
                  Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  rows={3}
                  id="footer-message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="peer w-full bg-transparent border border-white/20 rounded-sm px-4 py-3 text-[13px] text-white focus:outline-none focus:border-[#79BFFA] transition-all resize-none placeholder-transparent"
                  placeholder="Message"
                ></textarea>
                <label
                  htmlFor="footer-message"
                  className="absolute left-3 -top-2.5 bg-[#1A1A1A] px-2 text-[10px] font-bold uppercase tracking-widest text-gray-300 transition-colors peer-focus:text-[#79BFFA]"
                >
                  Message
                </label>
              </div>

              <button 
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full py-4 text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all shadow-lg rounded-sm ${
                  status === 'success' ? 'bg-green-600' : 'bg-[#0085F7] hover:bg-[#339dff] hover:text-[#fff]'
                }`}
              >
                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent' : 'Send'}
              </button>
            </form>
          </div>
        </div>

        {/* Global Office Hubs */}
        <div className="border-t border-white/5 py-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
            <div className="md:col-span-12 mb-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30">
                Global Network
              </h4>
            </div>
            
            {/* Headquarters */}
            <div className="md:col-span-5 pr-8 border-l border-[#0085F7]/30 pl-6">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0085F7] mb-3 block">Headquarters</span>
              <h5 className="text-xl font-black text-white mb-4 tracking-tight">Bangalore</h5>
              <p className="text-[13px] text-gray-400 font-light leading-relaxed max-w-sm">
                #226, 2nd Floor, 10 M, 100 Ft Road, HRBR Layout, Block 1, Kalyan Nagar, Bangalore - 560 043. India.
              </p>
            </div>

            {/* Operational Hub: Hyderabad */}
            <div className="md:col-span-4 pr-8 border-l border-white/5 pl-6">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3 block">Technology Center</span>
              <h5 className="text-xl font-bold text-white mb-4 tracking-tight">Hyderabad</h5>
              <p className="text-[13px] text-gray-400 font-light leading-relaxed">
                Inorganic Growth & Digital Innovation Hub.<br />
                HITECH City, Hyderabad, India.
              </p>
            </div>

            {/* Strategic Operations: USA */}
            <div className="md:col-span-3 border-l border-white/5 pl-6">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-3 block">North America</span>
              <h5 className="text-xl font-bold text-white mb-4 tracking-tight">New York</h5>
              <p className="text-[13px] text-gray-400 font-light leading-relaxed">
                Strategic Operations Division.<br />
                One World Trade Center, NY, USA.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Credits */}
        <div className=" border-t border-white/5 flex flex-col justify-center items-center gap-8 pt-8">
          <div className="flex flex-col items-center gap-6 text-[10px] font-bold lowercase  text-gray-400 text-center">
            <p>© {new Date().getFullYear()} Antern Technologies.</p>
            <div className="flex gap-8">
              {/*<button onClick={() => onNavigateTo('privacy')} className="hover:text-white transition-colors">Privacy</button>
               <button onClick={() => onNavigateTo('terms')} className="hover:text-white transition-colors">Terms</button>
              <button onClick={() => onNavigateTo('cookies')} className="hover:text-white transition-colors">Cookies</button> */}
            </div>
          </div>

          {/* <div className="flex items-center gap-4 text-[9px] font-black text-gray-400 uppercase ">
            <span>Empowering Global Scale</span>
            <div className="w-1.5 h-1.5 bg-[#0085F7] rounded-full"></div>
            <span>Built for Tomorrow</span>
          </div> */}
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
