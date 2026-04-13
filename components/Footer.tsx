import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import bangaloreLandmark from '../src/assets/img/bangalore_landmark.png';
import hyderabadLandmark from '../src/assets/img/hyderabad_landmark.png';
import wilmingtonLandmark from '../src/assets/img/wilmington_landmark.png';

interface FooterProps {
  onInitiateStrategy?: () => void;
  onNavigateTo: (page: any) => void;
  onNavigateToSection: (page: any, sectionId: string) => void;
  onNavigateToProduct: (productId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onInitiateStrategy,
  onNavigateTo,
  onNavigateToSection,
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 mb-12">
          <div className="flex flex-col h-full md:col-span-1">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white mb-8">
              Product Suite
            </h4>
            <ul className="space-y-6">
              {/* <li>
                <button
                  onClick={() => onNavigateTo("roadmap")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors"
                >
                  Product Roadmap
                </button>
              </li> */}
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

          <div className="flex flex-col h-full md:col-span-1">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white mb-8">
              Services
            </h4>
            <ul className="space-y-6 text-left">
              <li>
                <button
                  onClick={() => onNavigateToSection("services", "engineering")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors"
                >
                  Engineering
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection("services", "cloud-data")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors"
                >
                  Cloud, Data & Analytics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection("services", "ai")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors"
                >
                  Artificial Intelligence
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection("services", "business-models")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors"
                >
                  Business Models
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateToSection("services", "ux-studio-services")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors font-bold"
                >
                  UX Studio
                </button>
              </li>
            </ul>
          </div>
{/* 
          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white mb-8">
              Knowledge Hub
            </h4>
            <ul className="space-y-4 text-left">
              <li><button onClick={() => onNavigateTo('reports')} className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors">Market Reports</button></li>
              <li>
                <button
                  onClick={() => onNavigateTo("case-studies")}
                  className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors"
                >
                  Case Studies
                </button>
              </li>
              <li><button onClick={() => onNavigateTo('whitepapers')} className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors">Whitepapers</button></li>
              <li><button onClick={() => onNavigateTo('events')} className="text-[13px] text-gray-400 hover:text-[#79BFFA] transition-colors">Events</button></li>
            </ul>
          </div> */}

          <div className="flex flex-col h-full md:col-span-1">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white mb-8">
              Corporate
            </h4>
            <ul className="space-y-6 text-left">
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

          <div className="flex flex-col h-full md:col-span-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-white mb-8">
              Connect
            </h4>
            <form className="space-y-4 pb-2" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

        <div className="border-t border-white/5 py-16">
          <div className="mb-12">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 mb-3">
              Global Network
            </h4>
            <div className="h-px w-12 bg-[#0085F7]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                city: "Bangalore, India", 
                label: "Headquarters", 
                type: "primary",
                landmark: bangaloreLandmark
              },
              { 
                city: "Hyderabad, India", 
                label: "Operational Center", 
                type: "secondary",
                landmark: hyderabadLandmark
              },
              { 
                city: "Wilmington, North America", 
                label: "Operational Center", 
                type: "secondary",
                landmark: wilmingtonLandmark
              }
            ].map((location, idx) => (
              <div 
                key={idx}
                className="group relative bg-white/[0.03] border border-white/5 rounded-2xl p-8 transition-all duration-500 hover:bg-white/[0.07] hover:border-[#0085F7]/30 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background Landmark Image */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                  <img 
                    src={location.landmark} 
                    alt="" 
                    className="w-full h-full object-cover opacity-[0.07] grayscale brightness-[1.2] mix-blend-screen transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.15]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-50"></div>
                </div>

                {/* Decorative Background Glow */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#0085F7]/5 rounded-full blur-2xl group-hover:bg-[#0085F7]/15 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 flex items-center">
                    <div className={`p-3 rounded-xl ${location.type === 'primary' ? 'bg-[#0085F7]/20 text-[#0085F7]' : 'bg-white/5 text-gray-500 group-hover:text-[#0085F7] group-hover:bg-[#0085F7]/20'} transition-all duration-500`}>
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div className="h-[1px] flex-grow ml-4 bg-white/5 group-hover:bg-[#0085F7]/10 transition-all duration-500"></div>
    </div>
                  
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] mb-3 block ${location.type === 'primary' ? 'text-[#0085F7]' : 'text-gray-500 group-hover:text-gray-300'} transition-all duration-500`}>
                    {location.label}
                  </span>
                  <h5 className="text-xl font-bold text-white tracking-tight group-hover:text-white transition-all duration-500">
                    {location.city}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" border-t border-white/5 flex flex-col justify-center items-center gap-8 pt-8">
          <div className="flex flex-col items-center gap-6 text-[10px] font-bold lowercase  text-gray-400 text-center">
            <p>© {new Date().getFullYear()} Antern Technologies.</p>
            <div className="flex gap-8">
            </div>
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
