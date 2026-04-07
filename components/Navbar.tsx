
import React, { useState } from 'react';
import { LogoV2 } from './LogoV2';

interface NavItem {
  label: string;
  id: string;
  targetPage?: string;
  externalLink?: string;
  subItems?: { label: string; id: string; targetPage?: string; externalLink?: string }[];
}

interface NavbarProps {
  isScrolled: boolean;
  onNavigateHome: () => void;
  isDetailPage: boolean;
  onNavigateToUXStudio: () => void;
  onNavigateToLeadership: () => void;
  onNavigateToVision: () => void;
  onNavigateToCEO: () => void;
  onNavigateToCareers: () => void;
  onNavigateTo: (page: any) => void;
  currentPage: string;
  onContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  isScrolled, 
  onNavigateHome, 
  isDetailPage, 
  onNavigateToUXStudio, 
  onNavigateToLeadership,
  onNavigateToVision,
  onNavigateToCEO,
  onNavigateToCareers,
  onNavigateTo,
  currentPage, 
  onContact 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);

  const textColor = 'text-gray-900';
  const hoverColor = 'hover:text-[#004b23]';
  const dropdownBg = 'bg-white';
  const dropdownBorder = 'border-gray-200';
  const subTextColor = 'text-gray-900';
  const subHoverTextColor = 'text-[#004b23]';
  const subHoverBg = 'hover:bg-gray-50';

  const navItems: NavItem[] = [
    { 
      label: 'About', 
      id: 'about',
      subItems: [
        { label: 'Our Vision', id: 'our-vision', targetPage: 'our-vision' },
        { label: 'Leadership Team', id: 'leadership', targetPage: 'leadership' },
        { label: 'Our Culture', id: 'culture', targetPage: 'culture' },
        { label: 'Message From CEO', id: 'ceo-message', targetPage: 'ceo-message' }
      ]
    },
    { 
      label: 'Products', 
      id: 'products',
      targetPage: 'products',
      subItems: [
        { label: 'IamInterviewed', id: 'iaminterviewed', targetPage: 'products' },
        { label: 'MySkillTest', id: 'myskilltest', targetPage: 'products' },
        { label: 'ScanJD', id: 'scanjd', targetPage: 'products' },
        { label: 'DelOrg360', id: 'delorg360', targetPage: 'products' }
      ]
    },
    { 
      label: 'Services', 
      id: 'services',
      targetPage: 'services',
      subItems: [
        // { label: 'Technical Interviews', id: 'technical-interviews', targetPage: 'technical-interviews' },
        // { label: 'Online Assessments', id: 'online-assessments', targetPage: 'online-assessments' },
        // { label: 'Scanning Resume', id: 'scanning-resume', targetPage: 'scanning-resume' },
        // { label: 'Software Delivery', id: 'software-delivery', targetPage: 'software-delivery' },
        { label: 'On-Premise Delivery', id: 'on-premise', targetPage: 'services' },
        { label: 'ODC (Offshore Dev Centers)', id: 'odc', targetPage: 'services' },
        { label: 'Managed Services', id: 'managed-services', targetPage: 'services' },
        { label: 'UX Studio', id: 'ux-studio-services', targetPage: 'services' }
      ]
    },
    { label: 'Careers', id: 'careers', targetPage: 'careers' }
  ];

  const handleNavClick = (e: React.MouseEvent, id: string, targetPage?: string, externalLink?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setIsDiscoverOpen(false);
    
    if (externalLink) {
      window.open(externalLink, '_blank', 'noopener,noreferrer');
      return;
    }

    if (targetPage) {
      if ((targetPage === 'products' && currentPage === 'products') || (targetPage === 'services' && currentPage === 'services')) {
        // Already on target page, just scroll
        const element = document.getElementById(id);
        if (element) {
          const offset = 100;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
        return;
      }

      if ((targetPage === 'products' && currentPage !== 'products') || (targetPage === 'services' && currentPage !== 'services')) {
        // Navigate to target page then scroll
        onNavigateTo(targetPage);
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 500);
        return;
      }

      onNavigateTo(targetPage);
      return;
    }

    if (id === 'careers') {
      onNavigateToCareers();
      return;
    }

    if (isDetailPage) {
      onNavigateHome();
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigateHome();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white border-b border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)]`}
    >
      {/* Top Bar */}
      <div className={`bg-white text-gray-500 overflow-hidden transition-all duration-500 ease-in-out ${isScrolled ? 'max-h-0 opacity-0 border-none' : 'max-h-10 opacity-100 border-b border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 h-10 flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
          <div className="flex items-center gap-6">
            <a href="mailto:info@anterntech.com" className="hover:text-[#004b23] transition-colors flex items-center gap-2">
              <span>info@anterntech.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Connect with us on</span>
            <a href="https://www.linkedin.com/company/antern-technologies/" className="hover:text-[#0085F7] transition-colors" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="hover:text-[#0085F7] transition-colors cursor-auto">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="hover:text-[#0085F7] transition-colors cursor-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-5'}`}>
        {/* Logo (Left) */}
        <div onClick={handleLogoClick} className="cursor-pointer relative z-[60] shrink-0">
          <LogoV2 
            className={isScrolled ? 'h-6' : 'h-8'} 
            isLight={false}
          />
        </div>
        
        {/* Right-Aligned Navigation Cluster */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-2 lg:gap-4">
          
          {/* 1. Core Navigation Items (About, Products, Services, Careers) */}
          <div className={`flex items-center gap-0 lg:gap-1 text-[13px] tracking-[0.12em] uppercase transition-colors duration-300 ${textColor}`}>
            {navItems.map((item) => {
              const isActive = currentPage === item.targetPage;
              return (
                <div 
                  key={item.label}
                  className="relative group h-full cursor-pointer"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a 
                    href={item.externalLink || (item.targetPage ? undefined : `#${item.id}`)}
                    onClick={(e) => handleNavClick(e, item.id, item.targetPage, item.externalLink)} 
                    className={`
                      relative px-3 py-3 flex items-center gap-2 transition-all duration-300 rounded-sm cursor-pointer
                      ${hoverColor} 
                      ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'}
                      ${isActive 
                        ? `text-[#004b23] font-black ${isScrolled ? 'bg-[#0085F7]/10' : 'bg-white/5 text-[#0085F7]'}` 
                        : 'font-bold'
                      }
                    `}
                  >
                    {item.label}
                    {item.subItems && (
                      <svg className={`w-3 h-3 opacity-50 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180 opacity-100' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {isActive && (
                      <span className="absolute bottom-1.5 left-3 right-3 h-0.5 bg-[#0085F7] rounded-full"></span>
                    )}
                  </a>

                  {item.subItems && (
                    <div className={`absolute left-0 top-full pt-3 transition-all duration-300 transform-gpu z-50 ${
                      activeDropdown === item.label ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}>
                      <div className={`w-[260px] ${dropdownBg} border ${dropdownBorder} shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-1.5 flex flex-col rounded-sm overflow-hidden`}>
                        {item.subItems.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.externalLink || (sub.targetPage ? undefined : `#${sub.id}`)}
                            onClick={(e) => handleNavClick(e, sub.id, sub.targetPage, sub.externalLink)}
                            className={`group/sub px-5 py-4 text-[12px] font-bold tracking-[0.12em] cursor-pointer ${subTextColor} ${subHoverTextColor} ${subHoverBg} transition-all duration-300 flex items-center justify-between border-b border-gray-100/5 last:border-0`}
                          >
                            <span className="transform transition-transform duration-300 group-hover/sub:translate-x-1">
                              {sub.label}
                            </span>
                            <svg className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          <button 
            onClick={onContact}
            className={`
              ml-3 px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 
              rounded-full border border-[#0085F7] text-[#0085F7] 
              hover:bg-[#0085F7] hover:text-white hover:shadow-[0_8px_20px_rgba(0,133,247,0.3)]
              cursor-pointer whitespace-nowrap flex items-center gap-2
              ${currentPage === 'contact' ? 'bg-[#0085F7] text-white shadow-[0_8px_20px_rgba(0,133,247,0.3)]' : ''}
            `}
          >
            Contact Us
            <span className={`w-1.5 h-1.5 rounded-full bg-[#0085F7] group-hover:bg-white transition-colors duration-500 ${currentPage === 'contact' ? 'bg-white' : ''}`}></span>
          </button>


          {/* <button 
            onClick={() => onNavigateTo('ux-studio')}
            className={`
              text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-500 relative group px-6 py-2.5 rounded-full border flex items-center gap-2.5 cursor-pointer
              ${currentPage === 'ux-studio' 
                ? 'bg-[#00A94B] text-white border-[#00A94B] shadow-[0_10px_20px_rgba(0,75,35,0.3) ]' 
                : 'text-[#004b23] border-[#004b23]/20 hover:bg-[#00A94B] hover:text-white hover:border-[#004b23]'
              }
            `}
          >
            UX Studio
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse transition-colors duration-500 ${
              currentPage === 'ux-studio' ? 'bg-[#70e000]' : 'bg-[#70e000]'
            }`}></span>
          </button>

     
          <button 
            onClick={onContact}
            className={`px-8 py-3.5 text-[13px] font-bold uppercase tracking-widest transition-all duration-300 shadow-sm whitespace-nowrap ml-2 cursor-pointer bg-[#1A1A1A] text-white hover:bg-[#464646] hover:text-[#E0E0E0]`}
          >
            Contact
          </button> */}

        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden relative z-[60] w-10 h-10 flex items-center justify-center cursor-pointer ${textColor}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <div className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`h-0.5 bg-current transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#1A1A1A] z-[55] transition-all duration-700 ease-expo ${
        mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <div className="h-full flex flex-col p-12 pt-32 overflow-y-auto">
          <div className="flex flex-col gap-12 text-white">
             {/* Mobile priority order matching desktop visual intent */}
             {navItems.map((item) => (
                <div key={item.label}>
                   <button 
                    onClick={(e) => handleNavClick(e as any, item.id, item.targetPage, item.externalLink)}
                    className="text-4xl font-black uppercase tracking-tighter hover:text-[#ccff33] cursor-pointer"
                   >
                     {item.label}
                   </button>
                   {item.subItems && (
                     <div className="mt-4 flex flex-col gap-4 pl-6 border-l border-white/10">
                       {item.subItems.map(sub => (
                         <button 
                          key={sub.label} 
                          onClick={(e) => handleNavClick(e as any, sub.id, sub.targetPage, sub.externalLink)}
                          className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white text-left cursor-pointer"
                         >
                           {sub.label}
                         </button>
                       ))}
                     </div>
                   )}
                </div>
             ))}
              <button 
                onClick={() => { setMobileMenuOpen(false); onContact && onContact(); }} 
                className="text-4xl font-black uppercase tracking-tighter hover:text-[#0085F7] text-left flex items-center gap-4 cursor-pointer"
              >
                Contact Us
                <span className="w-3 h-3 bg-[#0085F7] rounded-full animate-pulse"></span>
              </button>
          </div>
        </div>
      </div>

      <style>{`
        .ease-expo {
          transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
        }
      `}</style>
    </nav>
  );
};
