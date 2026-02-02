
import React, { useState, useRef, useEffect } from 'react';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  education: string;
  postedDate: string;
  description: string;
  requirements: string[];
  perks: string[];
}

const jobs: Job[] = [
  { 
    id: "AN-NODE-001",
    title: "Lead Neural Architect",
    department: "Engineering",
    location: "San Francisco, CA",
    experience: "8-12 Years",
    education: "Master's or PhD in Computer Science",
    postedDate: "Oct 24, 2023",
    description: "Engineering the foundational cognitive layers for next-generation enterprise-scale LLM orchestration. You will lead the development of adaptive neural pathways and orchestrate complex deployment architectures.",
    requirements: ["Deep knowledge of Neural Networking", "Proven LLM optimization track record", "Expertise in Rust & PyTorch"],
    perks: ["Competitive Equity", "Global Mobility", "Research Stipend"]
  },
  { 
    id: "AN-NODE-002",
    title: "Cyber Resilience Director",
    department: "Security",
    location: "Singapore // Remote",
    experience: "10+ Years",
    education: "Bachelor's in Cybersecurity or Information Systems",
    postedDate: "Oct 20, 2023",
    description: "Developing zero-trust fluid perimeters to safeguard the world's most sensitive data infrastructures against advanced persistent threats in a rapidly evolving landscape.",
    requirements: ["Expertise in Zero-Trust Architecture", "CISSP/CISM Certified", "Enterprise SecOps background"],
    perks: ["Relocation Package", "Health Concierge", "Annual Retreat"]
  },
  { 
    id: "AN-NODE-003",
    title: "Principal UX Systems Lead",
    department: "UX Studio",
    location: "London, UK",
    experience: "7-10 Years",
    education: "Degree in HCI, Design, or Psychology",
    postedDate: "Oct 22, 2023",
    description: "Defining the visual physics of invisible interfaces for high-stakes industrial and clinical environments where precision, accessibility, and speed are paramount.",
    requirements: ["Portfolio of complex systems", "Human-Computer Interaction (HCI) expertise", "Team leadership experience"],
    perks: ["Hardware Upgrades", "Studio Ownership", "Shoreditch Workspace"]
  },
  { 
    id: "AN-NODE-004",
    title: "Strategic Product Director",
    department: "Product",
    location: "New York, NY",
    experience: "8+ Years",
    education: "MBA or equivalent Technical Management degree",
    postedDate: "Oct 18, 2023",
    description: "Translating machine intelligence into high-velocity business outcomes for Global 500 clients by defining roadmap excellence and aligning cross-functional teams.",
    requirements: ["Proven B2B SaaS growth", "Technical product background", "C-suite communication skills"],
    perks: ["Performance Bonus", "Family Health", "Travel Credits"]
  },
  { 
    id: "AN-NODE-005",
    title: "AI Research Scientist",
    department: "R&D",
    location: "Tokyo, Japan",
    experience: "5-8 Years",
    education: "PhD in Mathematics, Physics, or CS",
    postedDate: "Oct 25, 2023",
    description: "Pushing the boundaries of self-correcting neural pathways and adaptive decision frameworks in our specialized Tokyo research hub.",
    requirements: ["PhD with focus on Deep Learning", "Published Research in NeurIPS/ICML", "Open Source contributor"],
    perks: ["GPU Cluster Access", "Publication Bonus", "Tokyo Residence"]
  },
  { 
    id: "AN-NODE-006",
    title: "Senior Cloud Ops Engineer",
    department: "Engineering",
    location: "Austin, TX // Remote",
    experience: "5-7 Years",
    education: "Bachelor's in Cloud Computing or CS",
    postedDate: "Oct 26, 2023",
    description: "Optimizing multi-cloud mesh architectures to ensure seamless data flow and cost-efficiency for our high-availability enterprise services.",
    requirements: ["AWS/Azure/GCP Mastery", "Terraform & Kubernetes expert", "FinOps optimization experience"],
    perks: ["Remote Work Choice", "Home Office Stipend", "Stock Options"]
  },
  { 
    id: "AN-NODE-007",
    title: "Data Sovereignty Lead",
    department: "Security",
    location: "Berlin, Germany",
    experience: "7+ Years",
    education: "Master's in Data Ethics or Cybersecurity",
    postedDate: "Oct 27, 2023",
    description: "Architecting decentralized data storage solutions that empower users with absolute control over their digital sovereignty and privacy compliance.",
    requirements: ["GDPR/Global privacy law expertise", "Blockchain & Decentralized Tech", "Security Policy implementation"],
    perks: ["Public Transport Pass", "EU Travel Credit", "Wellness Allowance"]
  },
  { 
    id: "AN-NODE-008",
    title: "Quantum Algorithm Researcher",
    department: "R&D",
    location: "Toronto, Canada",
    experience: "4-6 Years",
    education: "PhD in Quantum Physics or Mathematics",
    postedDate: "Oct 28, 2023",
    description: "Developing post-quantum cryptographic standards and exploring early-stage algorithmic advantages for enterprise optimization problems.",
    requirements: ["Qiskit/Cirq proficiency", "Deep understanding of Complexity Theory", "Strong math background"],
    perks: ["Lab Equipment Credit", "Publication Support", "Relocation Support"]
  },
  { 
    id: "AN-NODE-009",
    title: "Enterprise Solutions Architect",
    department: "Product",
    location: "Chicago, IL",
    experience: "10-15 Years",
    education: "Bachelor's in CS or Software Engineering",
    postedDate: "Oct 29, 2023",
    description: "Translating complex client requirements into scalable architectural blueprints that utilize the full Antern Technologies suite.",
    requirements: ["Enterprise SaaS experience", "Strong Stakeholder Management", "Full-stack architectural depth"],
    perks: ["Premium Healthcare", "Quarterly Bonuses", "Executive Coaching"]
  },
  { 
    id: "AN-NODE-010",
    title: "Head of Design Systems",
    department: "UX Studio",
    location: "London, UK // Remote",
    experience: "8+ Years",
    education: "Degree in Graphic Design or CS",
    postedDate: "Oct 30, 2023",
    description: "Unified visual language across all Antern platforms, ensuring tokens-to-code consistency and rapid UI scalability.",
    requirements: ["Mastery of Figma & Design Tokens", "React/Component Library knowledge", "Leadership experience"],
    perks: ["Latest Tech Package", "Studio Membership", "Global Workshops"]
  }
];

export const Careers: React.FC = () => {
  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [applyingJob, setApplyingJob] = useState<Job | null>(null);
  const [filter, setFilter] = useState('All');
  const [appState, setAppState] = useState<'form' | 'loading' | 'success'>('form');
  const [subscriptionState, setSubscriptionState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const detailScrollRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredJobs = filter === 'All' ? jobs : jobs.filter(j => j.department === filter);
  const departments = ['All', ...Array.from(new Set(jobs.map(j => j.department)))];

  const openDetails = (job: Job) => {
    setActiveJob(job);
    setAlertSuccess(false);
    document.body.style.overflow = 'hidden';
    if (detailScrollRef.current) {
      detailScrollRef.current.scrollTop = 0;
    }
  };

  const openApply = (job: Job) => {
    setApplyingJob(job);
    setAppState('form');
    setFileName(null);
    document.body.style.overflow = 'hidden';
  };

  const closeDetails = () => {
    setActiveJob(null);
    if (!applyingJob) document.body.style.overflow = 'auto';
  };

  const closeApply = () => {
    setApplyingJob(null);
    if (!activeJob) document.body.style.overflow = 'auto';
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppState('loading');
    setTimeout(() => setAppState('success'), 2000);
  };

  const handleSubscriptionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscriptionState('loading');
    setTimeout(() => {
      setSubscriptionState('success');
      setTimeout(() => setSubscriptionState('idle'), 5000);
    }, 1500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleJobAlert = () => {
    setAlertSuccess(true);
    setTimeout(() => setAlertSuccess(false), 4000);
  };

  const shareJob = (method: 'email' | 'link') => {
    if (!activeJob) return;
    const subject = `Job Opportunity: ${activeJob.title} at Antern Technologies`;
    const body = `Check out this role at Antern Technologies: ${activeJob.title}. Link: https://antern.tech/careers/${activeJob.id}`;
    if (method === 'email') {
      window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
      // In a real app, use toast notification
      alert("Link copied to clipboard");
    }
  };

  const similarJobs = activeJob 
    ? jobs.filter(j => j.department === activeJob.department && j.id !== activeJob.id).slice(0, 3)
    : [];

  return (
    <div className="bg-white min-h-screen selection:bg-[#70e000] selection:text-[#004b23]">
      
      {/* 1. KINETIC HERO */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-[#0A0A0A]">
        {/* Background Image Layer */}
        <div 
          className="absolute -inset-y-24 inset-x-0 z-0 will-change-transform opacity-30"
          style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2500&auto=format&fit=crop" 
            alt="Career Opportunities" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#70e000] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.5em] text-[#ccff33] mb-6 block">
              Join the Vanguard
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white mb-8">
              The Talent<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">
                Matrix.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed border-l border-[#004b23] pl-10">
              Recruiting elite architects for the global intelligence transition. We are building the team that builds the future.
            </p>
          </div>
        </div>
      </section>

      {/* 2. HUD NAVIGATION */}
      <section className="sticky top-[80px] z-[40] bg-white/95 backdrop-blur-xl border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex flex-wrap gap-4">
            {departments.map(dept => (
              <button 
                key={dept}
                onClick={() => setFilter(dept)}
                className={`px-8 py-2 text-[10px] font-black uppercase tracking-[0.3em] transition-all rounded-sm border ${
                  filter === dept ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-transparent text-gray-400 border-gray-100 hover:border-[#004b23] hover:text-[#004b23]'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#70e000] animate-pulse"></div>
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#004b23]">Live Feed</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. JOB CARDS LIST */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 shadow-xl">
            {filteredJobs.map((job) => (
              <div 
                key={job.id}
                className="group flex flex-col bg-white p-10 hover:bg-[#1A1A1A] transition-all duration-500 relative min-h-[400px]"
              >
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#004b23] group-hover:text-[#ccff33] transition-colors">{job.department}</span>
                    <span className="text-[9px] font-bold text-gray-300 group-hover:text-white/40 transition-colors">{job.postedDate}</span>
                  </div>
                  
                  <h3 
                    onClick={() => openDetails(job)}
                    className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A] mb-6 group-hover:text-white transition-colors leading-[0.95] cursor-pointer"
                  >
                    {job.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-4 mb-8">
                    <span className="px-3 py-1 bg-gray-50 text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:bg-white/10 group-hover:text-white transition-all">{job.location}</span>
                    <span className="px-3 py-1 bg-gray-50 text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:bg-white/10 group-hover:text-white transition-all">{job.experience}</span>
                  </div>

                  <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 line-clamp-3 group-hover:text-gray-400 transition-colors">
                    {job.description}
                  </p>
                </div>

                <div className="pt-8 border-t border-gray-100 group-hover:border-white/10 flex items-center justify-between transition-colors">
                  <button 
                    onClick={() => openDetails(job)}
                    className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#1A1A1A] group-hover:text-[#70e000] transition-colors"
                  >
                    Details
                    <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                  <button 
                    onClick={() => openApply(job)}
                    className="w-8 h-8 flex items-center justify-center bg-[#004b23] text-white hover:bg-[#ccff33] hover:text-[#004b23] transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  </button>
                </div>
                
                {/* Active Indicator Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#004b23] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STAY SYNCHRONIZED - JOB ALERT SUBSCRIPTION */}
      <section className="py-32 bg-[#1A1A1A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="accent-bar bg-[#ccff33] w-12 mb-8"></div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none mb-8">
                Stay<br />
                <span className="text-[#ccff33]">Synchronized.</span>
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-10">
                Don't miss a beat. Configure your technical parameters to receive real-time notifications when the right mission opens in the talent matrix.
              </p>
              
              <div className="flex items-center gap-6 p-8 border border-white/10 bg-white/5">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-[#ccff33]">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-white">Network Update</h4>
                  <p className="text-sm text-gray-400 font-medium">Notifications delivered directly to your node.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-16 relative group overflow-hidden">
                {subscriptionState === 'success' ? (
                  <div className="py-12 text-center animate-in fade-in zoom-in-95 duration-500">
                    <div className="w-20 h-20 bg-[#004b23] flex items-center justify-center mx-auto mb-10">
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] mb-4">Node Integrated</h3>
                    <p className="text-gray-500 font-light max-w-sm mx-auto">Your parameters have been recorded.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscriptionSubmit} className="space-y-10 relative z-10 text-[#1A1A1A]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 block">Email Node</label>
                        <input 
                          required 
                          type="email" 
                          placeholder="name@operational.tech" 
                          className="w-full bg-transparent border-b border-gray-200 py-3 text-lg font-light focus:outline-none focus:border-[#004b23] transition-all placeholder:text-gray-300" 
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 block">Target Department</label>
                        <select className="w-full bg-transparent border-b border-gray-200 py-3 text-lg font-light focus:outline-none focus:border-[#004b23] transition-all text-gray-700">
                          {departments.map(d => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={subscriptionState === 'loading'}
                      className="w-full py-6 bg-[#1A1A1A] text-white text-[11px] font-black uppercase tracking-[0.5em] hover:bg-[#004b23] transition-all shadow-xl relative overflow-hidden group/btn"
                    >
                      {subscriptionState === 'loading' ? 'Configuring Node...' : 'Notify Me'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. JOB DETAILS SLIDE-OUT PANEL */}
      <div className={`fixed inset-0 z-[100] transition-all duration-[800ms] ${activeJob ? 'visible' : 'invisible pointer-events-none'}`}>
        <div 
          className={`absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-md transition-opacity duration-700 ${activeJob ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeDetails}
        ></div>
        
        <div className={`absolute top-0 right-0 h-full w-full lg:w-[50vw] bg-white shadow-2xl transition-transform duration-[800ms] cubic-bezier ${activeJob ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="h-full flex flex-col overflow-hidden">
            
            <div className="p-10 border-b border-gray-100 flex justify-between items-start bg-white sticky top-0 z-20">
              <div className="max-w-xl w-full">
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#004b23] mb-4 block">
                  Dossier Ref: {activeJob?.id}
                </span>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-[0.9] mb-4">
                  {activeJob?.title}
                </h2>
                <div className="flex gap-4">
                   <button onClick={handleJobAlert} className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 border transition-all ${alertSuccess ? 'bg-green-50 text-green-700 border-green-200' : 'border-gray-200 text-gray-400 hover:border-[#004b23] hover:text-[#004b23]'}`}>
                      {alertSuccess ? 'Alert Active' : 'Subscribe to Updates'}
                   </button>
                   <button onClick={() => shareJob('link')} className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 border border-gray-200 text-gray-400 hover:border-[#004b23] hover:text-[#004b23] transition-all">
                      Share Link
                   </button>
                </div>
              </div>
              <button onClick={closeDetails} className="w-12 h-12 flex items-center justify-center bg-gray-50 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div ref={detailScrollRef} className="flex-1 overflow-y-auto p-10 bg-white">
              <div className="space-y-12">
                <div className="grid grid-cols-2 gap-8 p-8 bg-[#F8F7F9] border border-gray-100">
                   <div>
                     <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2 block">Experience</span>
                     <p className="text-lg font-bold text-[#1A1A1A]">{activeJob?.experience}</p>
                   </div>
                   <div>
                     <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2 block">Location</span>
                     <p className="text-lg font-bold text-[#004b23]">{activeJob?.location}</p>
                   </div>
                </div>

                <div>
                   <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#1A1A1A] mb-6">Role Overview</h4>
                   <p className="text-lg text-gray-600 leading-relaxed font-light">
                     {activeJob?.description}
                   </p>
                </div>

                <div>
                   <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#1A1A1A] mb-6">Core Requirements</h4>
                   <ul className="space-y-4">
                      {activeJob?.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-4 p-4 border-l-2 border-gray-100 hover:border-[#004b23] transition-colors bg-white">
                           <span className="text-xs font-black text-[#004b23]">0{i+1}</span>
                           <span className="text-sm text-gray-600 font-medium uppercase tracking-wide">{req}</span>
                        </li>
                      ))}
                   </ul>
                </div>

                <div className="pt-8">
                   <button 
                     onClick={() => activeJob && openApply(activeJob)}
                     className="w-full py-6 bg-[#004b23] text-white text-[11px] font-black uppercase tracking-[0.5em] hover:bg-[#1A1A1A] transition-all shadow-xl"
                   >
                     Apply for this Role
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. APPLICATION MODAL */}
      <div className={`fixed inset-0 z-[110] flex items-center justify-center p-4 transition-all duration-500 ${applyingJob ? 'visible' : 'invisible pointer-events-none'}`}>
        <div 
          className={`absolute inset-0 bg-[#0A0A0A]/95 backdrop-blur-xl transition-opacity duration-500 ${applyingJob ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeApply}
        ></div>
        
        <div className={`relative w-full max-w-xl bg-white shadow-2xl transition-all duration-500 transform ${applyingJob ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10'}`}>
          <div className="p-12">
            <button onClick={closeApply} className="absolute top-6 right-6 text-gray-300 hover:text-[#004b23] transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {appState === 'form' && (
              <div className="animate-fade-in">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#004b23] mb-4 block">Secure Transmission</span>
                <h3 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] mb-10">
                  {applyingJob?.title}
                </h3>
                
                <form onSubmit={handleFormSubmit} className="space-y-8">
                  <div className="group">
                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2 block">Full Name</label>
                    <input required type="text" className="w-full bg-gray-50 border-b-2 border-gray-100 p-3 text-sm focus:outline-none focus:border-[#004b23] transition-all text-[#1A1A1A]" />
                  </div>
                  <div className="group">
                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2 block">Email Node</label>
                    <input required type="email" className="w-full bg-gray-50 border-b-2 border-gray-100 p-3 text-sm focus:outline-none focus:border-[#004b23] transition-all text-[#1A1A1A]" />
                  </div>
                  
                  <div className="group">
                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 mb-4 block">Dossier (Resume)</label>
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="border border-dashed border-gray-300 p-6 text-center cursor-pointer hover:bg-gray-50 hover:border-[#004b23] transition-all"
                    >
                      <input 
                        ref={fileInputRef}
                        type="file" 
                        required 
                        className="hidden" 
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                      />
                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        {fileName ? fileName : "Upload Document"}
                      </p>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-5 bg-[#1A1A1A] text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#004b23] transition-all"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            )}

            {appState === 'loading' && (
              <div className="py-24 text-center">
                 <div className="w-10 h-10 border-2 border-[#004b23] border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                 <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1A1A1A]">Encrypting Data...</p>
              </div>
            )}

            {appState === 'success' && (
              <div className="py-12 text-center animate-fade-in">
                <div className="w-16 h-16 bg-[#004b23] flex items-center justify-center mx-auto mb-8">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A] mb-4">Received.</h3>
                <p className="text-gray-500 text-sm font-light mb-8">Your application has been integrated into our talent matrix.</p>
                <button onClick={closeApply} className="px-8 py-3 border border-gray-200 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#1A1A1A] hover:text-white transition-all">Dismiss</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .cubic-bezier {
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
