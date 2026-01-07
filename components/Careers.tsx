
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
    postedDate: "Oct 24, 2025",
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
    postedDate: "Oct 20, 2025",
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
    postedDate: "Oct 22, 2025",
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
    postedDate: "Oct 18, 2025",
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
    postedDate: "Oct 25, 2025",
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
    postedDate: "Oct 26, 2025",
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
    postedDate: "Oct 27, 2025",
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
    postedDate: "Oct 28, 2025",
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
    postedDate: "Oct 29, 2025",
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
    postedDate: "Oct 30, 2025",
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
    const handleScroll = () => setOffsetY(window.pageYOffset);
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
      navigator.clipboard.writeText(`https://antern.tech/careers/${activeJob.id}`);
      alert("Link copied to clipboard");
    }
  };

  const similarJobs = activeJob 
    ? jobs.filter(j => j.department === activeJob.department && j.id !== activeJob.id).slice(0, 3)
    : [];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#4918A9] selection:text-white">
      
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
        <div 
          className="absolute inset-0 opacity-10 z-0 pointer-events-none"
          style={{ transform: `translate3d(0, ${offsetY * 0.05}px, 0)` }}
        >
          <div className="absolute inset-0 grid-lines"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] radial-glow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#4918A9] w-24 mb-10"></div>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] text-white">
              The Talent<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D9D1DB] to-[#4918A9]">Matrix.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-gray-400 font-light max-w-xl leading-relaxed">
              Recruiting elite architects for the global intelligence transition.
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
                className={`px-8 py-2 text-[10px] font-black uppercase tracking-[0.3em] transition-all rounded-full border ${
                  filter === dept ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-transparent text-gray-400 border-gray-100 hover:border-[#4918A9] hover:text-[#4918A9]'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#4918A9]">Live Feed</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. JOB CARDS LIST */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <div 
                key={job.id}
                className="group flex flex-col bg-white border border-gray-100 p-8 hover:border-[#4918A9]/30 transition-all duration-500 hover:shadow-[0_24px_48px_-12px_rgba(73,24,169,0.08)] relative"
              >
                <div className="flex-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#4918A9] mb-3 block">{job.department}</span>
                  <h3 
                    onClick={() => openDetails(job)}
                    className="text-lg md:text-xl font-black uppercase tracking-tight text-[#1A1A1A] mb-4 group-hover:text-[#4918A9] transition-colors leading-tight cursor-pointer whitespace-nowrap overflow-hidden truncate"
                  >
                    {job.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    <div className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      {job.experience}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      {job.location}
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3 italic">
                    {job.description}
                  </p>

                  <button 
                    onClick={() => openDetails(job)}
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#4918A9] group/view hover:gap-4 transition-all mb-10"
                  >
                    View Details
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </div>

                <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1">Posted Date</span>
                    <span className="text-[11px] font-bold text-gray-600">{job.postedDate}</span>
                  </div>
                  <button 
                    onClick={() => openApply(job)}
                    className="px-6 py-3 bg-[#1A1A1A] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#4918A9] transition-all"
                  >
                    Quick Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STAY SYNCHRONIZED - JOB ALERT SUBSCRIPTION */}
      <section className="py-32 bg-[#F8F7F9] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="accent-bar bg-[#4918A9] w-12 mb-8"></div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-tight mb-8">
                Stay<br />
                <span className="text-[#4918A9]">Synchronized.</span>
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed mb-10">
                Don't miss a beat. Configure your technical parameters to receive real-time notifications when the right mission opens in the talent matrix.
              </p>
              
              <div className="flex items-center gap-6 p-8 bg-white border border-gray-100">
                <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full shrink-0">
                  <svg className="w-6 h-6 text-[#4918A9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1A1A1A]">Network Update</h4>
                  <p className="text-sm text-gray-400 font-medium">Notifications delivered directly to your preferred node.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-16 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.05)] border border-gray-100 relative group overflow-hidden">
                {/* Floating Plus Symbol Decor */}
                <div className="absolute top-4 right-4 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                  <span className="text-[120px] font-black leading-none">+</span>
                </div>

                {subscriptionState === 'success' ? (
                  <div className="py-12 text-center animate-in fade-in zoom-in-95 duration-500">
                    <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-10 shadow-xl shadow-green-100">
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A] mb-4">Node Integrated</h3>
                    <p className="text-gray-500 font-light max-w-sm mx-auto">Your parameters have been recorded. You will receive an update as soon as matching roles enter the matrix.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubscriptionSubmit} className="space-y-10 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 block">Email Node</label>
                        <input 
                          required 
                          type="email" 
                          placeholder="name@operational.tech" 
                          className="w-full bg-transparent border-b border-gray-100 py-3 text-lg font-light focus:outline-none focus:border-[#4918A9] transition-all placeholder:text-gray-400" 
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 block">Target Department</label>
                        <select className="w-full bg-transparent border-b border-gray-100 py-3 text-lg font-light focus:outline-none focus:border-[#4918A9] transition-all text-gray-700">
                          {departments.map(d => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 block">Focus Keywords</label>
                      <input 
                        type="text" 
                        placeholder="e.g. AI, Neural, Rust, Zero-Trust..." 
                        className="w-full bg-transparent border-b border-gray-100 py-3 text-lg font-light focus:outline-none focus:border-[#4918A9] transition-all placeholder:text-gray-400" 
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={subscriptionState === 'loading'}
                      className="w-full py-6 bg-[#1A1A1A] text-white text-[11px] font-black uppercase tracking-[0.5em] hover:bg-[#4918A9] transition-all shadow-xl relative overflow-hidden group/btn"
                    >
                      {subscriptionState === 'loading' ? (
                        <span className="flex items-center justify-center gap-4">
                          <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                          Configuring Node...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-4">
                          Notify Me
                          <svg className="w-4 h-4 transform group-hover/btn:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      )}
                    </button>
                    
                    <p className="text-[9px] text-gray-300 font-bold uppercase tracking-[0.3em] text-center">
                      Opt-out anytime. Data handled under zero-trust protocols.
                    </p>
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
          className={`absolute inset-0 bg-[#0A0A0A]/85 backdrop-blur-xl transition-opacity duration-700 ${activeJob ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeDetails}
        ></div>
        
        <div className={`absolute top-0 right-0 h-full w-full lg:w-[55vw] bg-white shadow-2xl transition-transform duration-[800ms] cubic-bezier ${activeJob ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="h-full flex flex-col overflow-hidden">
            
            <div className="p-8 md:p-14 border-b border-gray-100 flex justify-between items-start bg-white sticky top-0 z-20">
              <div className="max-w-2xl w-full overflow-hidden">
                <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#4918A9] mb-4 block">
                  Dossier Ref: {activeJob?.id}
                </span>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#1A1A1A] leading-none mb-6 truncate whitespace-nowrap overflow-hidden">
                  {activeJob?.title}
                </h2>
                <div className="flex items-center gap-6">
                   <div className="flex flex-col">
                      <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Posted On</span>
                      <span className="text-sm font-bold text-gray-500 whitespace-nowrap">{activeJob?.postedDate}</span>
                   </div>
                   <div className="h-8 w-px bg-gray-100"></div>
                   <div className="flex items-center gap-4">
                      <button 
                        onClick={handleJobAlert}
                        className={`flex items-center gap-2 px-4 py-2 border border-gray-100 transition-all rounded-sm group relative overflow-hidden ${alertSuccess ? 'bg-green-50 text-green-700 border-green-200' : 'hover:bg-[#4918A9]/5 hover:border-[#4918A9]'}`}
                      >
                         <svg className={`w-4 h-4 ${alertSuccess ? 'text-green-600' : 'text-gray-400 group-hover:text-[#4918A9]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                         </svg>
                         <span className={`text-[10px] font-black uppercase tracking-widest whitespace-nowrap ${alertSuccess ? 'text-green-700' : 'text-gray-400 group-hover:text-[#4918A9]'}`}>
                           {alertSuccess ? 'Alert Enabled' : 'Send me Jobs like this'}
                         </span>
                      </button>

                      <div className="flex gap-2">
                        <button onClick={() => shareJob('email')} className="w-10 h-10 flex items-center justify-center border border-gray-100 hover:bg-gray-50 transition-all rounded-sm group">
                           <svg className="w-4 h-4 text-gray-400 group-hover:text-[#4918A9]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </button>
                        <button onClick={() => shareJob('link')} className="w-10 h-10 flex items-center justify-center border border-gray-100 hover:bg-gray-50 transition-all rounded-sm group">
                           <svg className="w-4 h-4 text-gray-400 group-hover:text-[#4918A9]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                        </button>
                      </div>
                   </div>
                </div>
              </div>
              <button onClick={closeDetails} className="w-14 h-14 flex items-center justify-center border border-gray-100 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all rounded-full group">
                <svg className="w-8 h-8 group-hover:rotate-90 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div ref={detailScrollRef} className="flex-1 overflow-y-auto p-8 md:p-14 lg:p-20 bg-white">
              <div className="animate-fade-in space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-50 pb-16">
                   <div className="space-y-2">
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Experience Required</span>
                     <p className="text-xl font-black text-[#1A1A1A]">{activeJob?.experience}</p>
                   </div>
                   <div className="space-y-2">
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Job Location</span>
                     <p className="text-xl font-black text-[#4918A9]">{activeJob?.location}</p>
                   </div>
                   <div className="space-y-2">
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Education Required</span>
                     <p className="text-xl font-black text-[#1A1A1A]">{activeJob?.education}</p>
                   </div>
                </div>

                <div className="space-y-12">
                   <section>
                     <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                       {activeJob?.description}
                     </p>
                   </section>

                   <section>
                     <h4 className="text-[11px] font-black uppercase tracking-[0.6em] text-gray-400 mb-8 border-l-4 border-[#4918A9] pl-6">Core Requirements</h4>
                     <ul className="space-y-6">
                        {activeJob?.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-4">
                             <span className="text-xs font-mono font-black text-[#4918A9] mt-1">0{i+1}</span>
                             <span className="text-lg text-gray-600 font-medium">{req}</span>
                          </li>
                        ))}
                     </ul>
                   </section>
                </div>

                <div className="pt-8">
                   <button 
                     onClick={() => activeJob && openApply(activeJob)}
                     className="w-full py-8 bg-[#4918A9] text-white text-[13px] font-black uppercase tracking-[0.6em] hover:bg-[#1A1A1A] transition-all shadow-[0_24px_48px_-12px_rgba(73,24,169,0.3)] mb-12"
                   >
                     Apply for this Role
                   </button>

                   {similarJobs.length > 0 && (
                     <div className="mt-20 border-t border-gray-100 pt-16">
                       <div className="flex items-center justify-between mb-10">
                         <div>
                            <span className="text-[10px] font-black uppercase tracking-tight text-[#1A1A1A]">Similar Openings</span>
                         </div>
                         <div className="w-12 h-px bg-gray-100"></div>
                       </div>
                       
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                         {similarJobs.map(job => (
                           <div 
                             key={job.id}
                             onClick={() => openDetails(job)}
                             className="p-6 border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#4918A9]/20 hover:shadow-lg transition-all cursor-pointer group/sim"
                           >
                             <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[#4918A9] mb-2 block">{job.department}</span>
                             <h4 className="text-sm font-black uppercase tracking-tight text-[#1A1A1A] group-hover/sim:text-[#4918A9] transition-colors leading-snug mb-4">
                               {job.title}
                             </h4>
                             <div className="flex items-center gap-2 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                               <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                               {job.location}
                             </div>
                           </div>
                         ))}
                       </div>
                     </div>
                   )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. SEPARATE APPLICATION MODAL (CENTERED) */}
      <div className={`fixed inset-0 z-[110] flex items-center justify-center p-6 transition-all duration-500 ${applyingJob ? 'visible' : 'invisible pointer-events-none'}`}>
        <div 
          className={`absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-2xl transition-opacity duration-500 ${applyingJob ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeApply}
        ></div>
        
        <div className={`relative w-full max-w-2xl bg-white shadow-[0_48px_96px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 transform ${applyingJob ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10'}`}>
          <div className="p-8 md:p-16">
            <button onClick={closeApply} className="absolute top-8 right-8 text-gray-300 hover:text-[#4918A9] transition-colors">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {appState === 'form' && (
              <div className="animate-fade-in">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#4918A9] mb-4 block">Job Application</span>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#1A1A1A] mb-12 truncate whitespace-nowrap overflow-hidden">
                  {applyingJob?.title}
                </h3>
                
                <form onSubmit={handleFormSubmit} className="space-y-10">
                  <div className="group">
                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2 block">Full Name</label>
                    <input required type="text" placeholder="Your operational handle..." className="w-full bg-transparent border-b border-gray-100 py-4 text-xl font-light focus:outline-none focus:border-[#4918A9] transition-all placeholder:text-gray-400" />
                  </div>
                  <div className="group">
                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2 block">Email Node</label>
                    <input required type="email" placeholder="secure@network.tech" className="w-full bg-transparent border-b border-gray-100 py-4 text-xl font-light focus:outline-none focus:border-[#4918A9] transition-all placeholder:text-gray-400" />
                  </div>
                  <div className="group">
                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2 block">Current Location</label>
                    <input required type="text" placeholder="City, Country..." className="w-full bg-transparent border-b border-gray-100 py-4 text-xl font-light focus:outline-none focus:border-[#4918A9] transition-all placeholder:text-gray-400" />
                  </div>
                  
                  <div className="group">
                    <label className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 mb-4 block">Professional Dossier (Resume)</label>
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-gray-100 p-8 text-center cursor-pointer hover:border-[#4918A9] hover:bg-gray-50 transition-all group/upload"
                    >
                      <input 
                        ref={fileInputRef}
                        type="file" 
                        required 
                        className="hidden" 
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                      />
                      <svg className="w-8 h-8 mx-auto text-gray-200 group-hover/upload:text-[#4918A9] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                        {fileName ? fileName : "Click to select or drag and drop dossier"}
                      </p>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-6 bg-[#1A1A1A] text-white text-[11px] font-black uppercase tracking-[0.4em] hover:bg-[#4918A9] transition-all shadow-xl"
                  >
                    Apply
                  </button>
                </form>
              </div>
            )}

            {appState === 'loading' && (
              <div className="py-24 text-center">
                 <div className="w-full max-w-sm h-1 bg-gray-100 rounded-full mx-auto mb-10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#4918A9] animate-shimmer"></div>
                 </div>
                 <p className="text-[11px] font-black uppercase tracking-[0.6em] text-[#4918A9] animate-pulse">Syncing Candidate Data...</p>
              </div>
            )}

            {appState === 'success' && (
              <div className="py-12 text-center animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-12 shadow-2xl shadow-green-200">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-4xl font-black uppercase tracking-tighter text-[#1A1A1A] mb-6">Received.</h3>
                <p className="text-gray-500 font-light mb-12 max-w-sm mx-auto">Your application for {applyingJob?.title} has been successfully integrated into our talent matrix.</p>
                <button onClick={closeApply} className="px-12 py-5 border border-gray-200 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-gray-50 transition-all">Dismiss</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .grid-lines {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .radial-glow {
          background: radial-gradient(circle at center, rgba(73, 24, 169, 0.3) 0%, transparent 70%);
          filter: blur(140px);
        }
        .cubic-bezier {
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s linear infinite;
          background: linear-gradient(90deg, transparent, rgba(73, 24, 169, 0.4), transparent);
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};
