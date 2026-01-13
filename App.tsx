
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { TransitionBanner } from './components/TransitionBanner';
import { FluidBanner } from './components/FluidBanner';
import { UXStudioBanner } from './components/UXStudioBanner';
import { UXStudioDetail } from './components/UXStudioDetail';
import { UXProcessDetail } from './components/UXProcessDetail';
import { Leadership } from './components/Leadership';
import { OurVision } from './components/OurVision';
import { CEOMessage } from './components/CEOMessage';
import { Careers } from './components/Careers';
import { IdeasTransformation } from './components/IdeasTransformation';
import { InnovationExcellence } from './components/InnovationExcellence';
import { CultureCareers } from './components/CultureCareers';
import { Testimonials } from './components/Testimonials';
import { LatestNews } from './components/LatestNews';
import { GetThereTogether } from './components/GetThereTogether';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ProgressBar } from './components/ProgressBar';
import { StrategyModal } from './components/StrategyModal';

// New Page Components
import { ProductRoadmap } from './components/ProductRoadmap';
import { OnPremiseDelivery } from './components/OnPremiseDelivery';
import { ODC } from './components/ODC';
import { ManagedServices } from './components/ManagedServices';
import { MarketReports } from './components/MarketReports';
import { CaseStudies } from './components/CaseStudies';
import { Whitepapers } from './components/Whitepapers';
import { Events } from './components/Events';
import { Sustainability } from './components/Sustainability';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { CookiePreference } from './components/CookiePreference';
import { ContactPage } from './components/ContactPage';
import { OurCulture } from './components/OurCulture';
import { TechnicalInterviews } from './components/TechnicalInterviews';
import { OnlineAssessments } from './components/OnlineAssessments';
import { ScanningResume } from './components/ScanningResume';
import { Solutions } from './components/Solutions';

export type PageType = 
  | 'home' | 'ux-studio' | 'ux-process' | 'leadership' | 'our-vision' | 'ceo-message' | 'careers' | 'culture'
  | 'roadmap' | 'on-premise' | 'odc' | 'managed-services' | 'reports' | 'case-studies' 
  | 'whitepapers' | 'events' | 'sustainability' | 'privacy' | 'terms' | 'cookies' | 'contact'
  | 'technical-interviews' | 'online-assessments' | 'scanning-resume' | 'solutions';

  const VALID_PAGES: PageType[] = [
    'ux-studio', 'ux-process', 'leadership', 'our-vision', 'ceo-message', 'careers', 'culture',
    'roadmap', 'on-premise', 'odc', 'managed-services', 'reports', 'case-studies', 
    'whitepapers', 'events', 'sustainability', 'privacy', 'terms', 'cookies', 'contact',
    'technical-interviews', 'online-assessments', 'scanning-resume', 'solutions'
  ];
  
  const getPageFromHash = (): PageType => {
    const hash = window.location.hash.replace('#', '');
    if (VALID_PAGES.includes(hash as PageType)) {
      return hash as PageType;
    }
    return 'home';
  };

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [navSource, setNavSource] = useState<PageType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState<'strategy' | 'audit'>('strategy');

    // Handle Browser Back/Forward Navigation
    useEffect(() => {
      const handlePopState = (event: PopStateEvent) => {
        const page = getPageFromHash();
        setCurrentPage(page);
        if (event.state && event.state.source) {
          setNavSource(event.state.source);
        } else {
          setNavSource(null);
        }
      };
  
      window.addEventListener('popstate', handlePopState);
      return () => window.removeEventListener('popstate', handlePopState);
    }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page: PageType, source?: PageType) => {
    setNavSource(source || null);
    setCurrentPage(page);

    
    // Update URL Hash to support browser back button
    const url = page === 'home' ? window.location.pathname : `#${page}`;
    const hashCheck = page === 'home' ? '' : `#${page}`;
    
    if (window.location.hash !== hashCheck) {
      window.history.pushState({ source: source || null }, '', url);
    }
  };

  const openStrategySession = () => {
    setModalContext('strategy');
    setIsModalOpen(true);
  };

  const openAuditRequest = () => {
    setModalContext('audit');
    setIsModalOpen(true);
  };

  return (
    <div id="top" className="min-h-screen selection:bg-[#70e000] selection:text-[#004b23] bg-white">
      <ProgressBar />
      <Navbar 
        isScrolled={isScrolled} 
        onNavigateHome={() => navigateTo('home')} 
        isDetailPage={currentPage !== 'home'}
        onNavigateToUXStudio={() => navigateTo('ux-studio')}
        onNavigateToLeadership={() => navigateTo('leadership')}
        onNavigateToVision={() => navigateTo('our-vision')}
        onNavigateToCEO={() => navigateTo('ceo-message')}
        onNavigateToCareers={() => navigateTo('careers')}
        onNavigateTo={(page: PageType) => navigateTo(page)}
        currentPage={currentPage}
        onContact={() => navigateTo('contact')}
      />
      
      {currentPage === 'home' && (
        <main>
          <Hero onInitiateStrategy={openStrategySession} onViewSolutions={() => navigateTo('solutions')} />
          <About />
       
          <Services />
          
          
          {/* <InnovationExcellence /> */}

         
          <LatestNews />
          <FluidBanner />
          {/* <UXStudioBanner onKnowDetails={() => navigateTo('ux-studio')} /> */}
          <Testimonials />
          <GetThereTogether onPartner={openStrategySession} />
        </main>
      )}

      {currentPage === 'ux-studio' && (
        <UXStudioDetail 
          onExploreProcess={() => navigateTo('ux-process')} 
          onInitiateStrategy={openStrategySession} 
          onRequestAudit={openAuditRequest} 
          showBackToSolutions={navSource === 'solutions'}
          onBackToSolutions={() => navigateTo('solutions')}
        />
      )}
      {currentPage === 'ux-process' && <UXProcessDetail onStartDiscovery={openStrategySession} />}
      {currentPage === 'leadership' && <Leadership onContact={() => navigateTo('contact')} />}
      {currentPage === 'our-vision' && <OurVision onInitiateStrategy={openStrategySession} />}
      {currentPage === 'ceo-message' && <CEOMessage onInitiateStrategy={openStrategySession} />}
      {currentPage === 'careers' && <Careers />}
      {currentPage === 'culture' && <OurCulture onExploreCareers={() => navigateTo('careers')} onInitiateStrategy={openStrategySession} />}
      
      {/* New Pages Mapping */}
      {currentPage === 'roadmap' && <ProductRoadmap onInitiateStrategy={openStrategySession} />}
      {currentPage === 'on-premise' && (
        <OnPremiseDelivery 
          onInitiateStrategy={openStrategySession} 
          showBackToSolutions={navSource === 'solutions'}
          onBackToSolutions={() => navigateTo('solutions')}
        />
      )}
      {currentPage === 'odc' && (
        <ODC 
          onInitiateStrategy={openStrategySession} 
          showBackToSolutions={navSource === 'solutions'}
          onBackToSolutions={() => navigateTo('solutions')}
        />
      )}
      {currentPage === 'managed-services' && (
        <ManagedServices 
          onInitiateStrategy={openStrategySession} 
          showBackToSolutions={navSource === 'solutions'}
          onBackToSolutions={() => navigateTo('solutions')}
        />
      )}
      {currentPage === 'reports' && <MarketReports />}
      {currentPage === 'case-studies' && <CaseStudies />}
      {currentPage === 'whitepapers' && <Whitepapers />}
      {currentPage === 'events' && <Events />}
      {currentPage === 'sustainability' && <Sustainability />}
      {currentPage === 'privacy' && <PrivacyPolicy />}
      {currentPage === 'terms' && <TermsOfService />}
      {currentPage === 'cookies' && <CookiePreference />}
      {currentPage === 'contact' && <ContactPage onInitiateStrategy={openStrategySession} />}
      {currentPage === 'technical-interviews' && <TechnicalInterviews onInitiateStrategy={openStrategySession} />}
      {currentPage === 'online-assessments' && <OnlineAssessments onInitiateStrategy={openStrategySession} />}
      {currentPage === 'scanning-resume' && <ScanningResume onInitiateStrategy={openStrategySession} />}
      {currentPage === 'solutions' && (
        <Solutions 
          onInitiateStrategy={openStrategySession} 
          onNavigateTo={(page) => navigateTo(page as PageType, 'solutions')} 
        />
      )}

      <Footer onNavigateTo={(page: PageType) => navigateTo(page)} onInitiateStrategy={openStrategySession} />
      <BackToTop />

      <StrategyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        context={modalContext}
      />
    </div>
  );
};

export default App;
