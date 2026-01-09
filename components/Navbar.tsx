
import React, { useState } from 'react';
import { Logo } from './Logo';

interface NavItem {
  label: string;
  id: string;
  targetPage?: string;
  subItems?: { label: string; id: string; targetPage?: string }[];
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

  const textColor = isScrolled ? 'text-gray-900' : 'text-white';
  const hoverColor = isScrolled ? 'hover:text-[#004b23]' : 'hover:text-[#ccff33]';
  const dropdownBg = isScrolled ? 'bg-white' : 'bg-[#1A1A1A]';
  const dropdownBorder = isScrolled ? 'border-gray-200' : 'border-white/10';
  const subTextColor = isScrolled ? 'text-gray-900' : 'text-white/80';
  const subHoverTextColor = isScrolled ? 'text-[#004b23]' : 'text-[#70e000]';
  const subHoverBg = isScrolled ? 'hover:bg-gray-50' : 'hover:bg-white/5';

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
      subItems: [
        { label: 'Product Roadmap', id: 'roadmap', targetPage: 'roadmap' },
        { label: 'IAmInterviewed', id: 'products' },
        { label: 'MySkillTest', id: 'products' },
        { label: 'ScanJD', id: 'products' }
      ]
    },
    { 
      label: 'Services', 
      id: 'services',
      subItems: [
        { label: 'On-Premise Delivery', id: 'on-premise', targetPage: 'on-premise' },
        { label: 'ODC', id: 'odc', targetPage: 'odc' },
        { label: 'Managed Services', id: 'managed-services', targetPage: 'managed-services' },
        { label: 'UX Studio', id: 'ux-studio', targetPage: 'ux-studio' },
        { label: 'Technical Interviews', id: 'technical-interviews', targetPage: 'technical-interviews' },
        { label: 'Online Assessments', id: 'online-assessments', targetPage: 'online-assessments' },
        { label: 'Scanning Resume', id: 'scanning-resume', targetPage: 'scanning-resume' }
      ]
    },
    { label: 'Careers', id: 'careers', targetPage: 'careers' }
  ];

  const handleNavClick = (e: React.MouseEvent, id: string, targetPage?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setIsDiscoverOpen(false);
    
    if (targetPage) {
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-white border-b border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] scrolled' 
          : isDetailPage
            ? 'py-6 bg-black/40 backdrop-blur-md'
            : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo (Left) */}
        <div onClick={handleLogoClick} className="cursor-pointer relative z-[60] shrink-0">
          <Logo 
            className={isScrolled ? 'h-8' : 'h-10'} 
            isLight={(!isScrolled && !mobileMenuOpen) || (isDetailPage && !isScrolled)}
          />
        </div>
        
        {/* Right-Aligned Navigation Cluster */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-2 lg:gap-6">
          
          {/* 1. Core Navigation Items (About, Products, Services, Careers) */}
          <div className={`flex items-center gap-1 lg:gap-2 text-[13px] tracking-[0.12em] uppercase transition-colors duration-300 ${textColor}`}>
            {isDetailPage ? (
              <>
                <button 
                  onClick={onNavigateHome} 
                  className={`flex items-center gap-3 group/home font-bold px-4 py-2 cursor-pointer ${hoverColor}`}
                >
                  <span className="w-4 h-px bg-current opacity-30 group-hover/home:w-6 group-hover/home:opacity-100 transition-all"></span>
                  Back to Home
                </button>

                <div 
                  className="relative flex items-center cursor-pointer"
                  onMouseEnter={() => setIsDiscoverOpen(true)}
                  onMouseLeave={() => setIsDiscoverOpen(false)}
                >
                  <button className={`px-4 py-2 border border-current opacity-30 group hover:opacity-100 transition-all flex items-center gap-3 font-bold cursor-pointer ${textColor}`}>
                    Discover
                    <div className="flex gap-0.5">
                       <div className={`w-1 h-1 bg-current transition-all duration-300 ${isDiscoverOpen ? 'scale-150 bg-[#70e000]' : 'scale-100'}`}></div>
                       <div className={`w-1 h-1 bg-current transition-all duration-300 delay-75 ${isDiscoverOpen ? 'scale-150 bg-[#70e000]' : 'scale-100'}`}></div>
                    </div>
                  </button>

                  <div className={`absolute left-0 top-full pt-4 transition-all duration-500 ease-expo ${isDiscoverOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                    <div className={`flex items-center gap-2 p-2 ${dropdownBg} border ${dropdownBorder} shadow-2xl rounded-sm`}>
                      {navItems.map((item) => (
                        <div 
                          key={item.label}
                          className="relative group/mini cursor-pointer"
                          onMouseEnter={() => setActiveDropdown(item.label)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <button 
                            onClick={(e) => handleNavClick(e, item.id, item.targetPage)}
                            className={`px-4 py-2 whitespace-nowrap text-[11px] font-black tracking-widest cursor-pointer ${subTextColor} ${subHoverTextColor} ${subHoverBg} transition-all`}
                          >
                            {item.label}
                          </button>

                          {item.subItems && activeDropdown === item.label && (
                            <div className={`absolute left-0 top-full pt-2 z-[70] transition-all duration-300`}>
                              <div className={`w-64 ${dropdownBg} border ${dropdownBorder} shadow-xl p-1 flex flex-col rounded-sm`}>
                                {item.subItems.map((sub) => (
                                  <button
                                    key={sub.label}
                                    onClick={(e) => handleNavClick(e as any, sub.id, sub.targetPage)}
                                    className={`px-4 py-3 text-[11px] font-bold text-left cursor-pointer ${subTextColor} ${subHoverTextColor} ${subHoverBg} transition-all border-b border-white/5 last:border-0`}
                                  >
                                    {sub.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
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
                        href={item.targetPage ? undefined : `#${item.id}`} 
                        onClick={(e) => handleNavClick(e, item.id, item.targetPage)} 
                        className={`
                          relative px-5 py-3 flex items-center gap-2 transition-all duration-300 rounded-sm cursor-pointer
                          ${hoverColor} 
                          ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'}
                           ${isActive 
                            ? `text-[#004b23] font-black ${isScrolled ? 'bg-[#70e000]/10' : 'bg-white/5 text-[#70e000]'}` 
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
                          <span className="absolute bottom-1.5 left-5 right-5 h-0.5 bg-[#70e000] rounded-full"></span>
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
                                href={sub.targetPage ? undefined : `#${sub.id}`}
                                onClick={(e) => handleNavClick(e, sub.id, sub.targetPage)}
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
              </>
            )}
          </div>

          {/* 2. UX Studio (Differentiated Pill Style) */}
          <button 
            onClick={() => onNavigateTo('ux-studio')}
            className={`
              text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-500 relative group px-6 py-2.5 rounded-full border flex items-center gap-2.5 cursor-pointer
              ${currentPage === 'ux-studio' 
                ? 'bg-[#004b23] text-white border-[#004b23] shadow-[0_10px_20px_rgba(0,75,35,0.3)]' 
                : isScrolled
                  ? 'text-[#004b23] border-[#004b23]/20 hover:bg-[#004b23] hover:text-white hover:border-[#004b23]'
                  : 'text-white border-white/20 hover:bg-white hover:text-[#1A1A1A] hover:border-white'
              }
            `}
          >
            UX Studio
            <span className={`w-1.5 h-1.5 rounded-full animate-pulse transition-colors duration-500 ${
              currentPage === 'ux-studio' ? 'bg-[#70e000]' : 'bg-[#70e000]'
            }`}></span>
          </button>

          {/* 3. Contact CTA (Rightmost in the desktop view) */}
          <button 
            onClick={onContact}
            className={`px-8 py-3.5 text-[13px] font-bold uppercase tracking-widest transition-all duration-300 shadow-sm whitespace-nowrap ml-2 cursor-pointer ${
              isScrolled 
                ? 'bg-[#1A1A1A] text-white hover:bg-[#70e000] hover:text-[#004b23]' 
                : 'bg-white text-[#1A1A1A] hover:bg-[#ccff33]'
            }`}
          >
            Contact
          </button>

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
                    onClick={(e) => handleNavClick(e as any, item.id, item.targetPage)}
                    className="text-4xl font-black uppercase tracking-tighter hover:text-[#ccff33] cursor-pointer"
                   >
                     {item.label}
                   </button>
                   {item.subItems && (
                     <div className="mt-4 flex flex-col gap-4 pl-6 border-l border-white/10">
                       {item.subItems.map(sub => (
                         <button 
                          key={sub.label} 
                          onClick={(e) => handleNavClick(e as any, sub.id, sub.targetPage)}
                          className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white text-left cursor-pointer"
                         >
                           {sub.label}
                         </button>
                       ))}
                     </div>
                   )}
                </div>
             ))}
              <button onClick={() => { setMobileMenuOpen(false); onNavigateTo('ux-studio'); }} className="text-4xl font-black uppercase tracking-tighter hover:text-[#70e000] text-left flex items-center gap-4 cursor-pointer">
                UX Studio
                <span className="w-2 h-2 bg-[#70e000] rounded-full animate-pulse"></span>
             </button>
             <button onClick={() => { setMobileMenuOpen(false); onNavigateTo('contact'); }} className="text-4xl font-black uppercase tracking-tighter hover:text-[#ccff33] text-left text-white/50 cursor-pointer">
                Contact
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
