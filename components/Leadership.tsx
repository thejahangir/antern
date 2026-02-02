
import React, { useState, useEffect } from 'react';

import ram from '../src/assets/img/leadership/ramk.png';
import rajani from '../src/assets/img/leadership/rajnikanth.png';
import jaya from '../src/assets/img/leadership/jayk.jpg';
import jagan from '../src/assets/img/leadership/jagan.jpg';
import amarnath from '../src/assets/img/leadership/amar.png';
import jahangir from '../src/assets/img/leadership/jahangir.jpg';
import arvind from '../src/assets/img/leadership/arvind.png';
import pallavi from '../src/assets/img/leadership/pallavi.png';



interface Leader {
  name: string;
  role: string;
  image: string;
  bio: string;
  fullBio?: string;
  expertise: string[];
  strategicHighlight: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const leadershipTeam: Leader[] = [
  {
    name: "Ramakrishna RL",
    role: "Chief Executive Officer & Founder",
    image: ram,
    bio: "Visionary leader with 20+ years in IT strategy and large-scale project delivery.",
    fullBio: "With over two decades of experience in the Information Technology industry, Ram brings extensive expertise to his role at MySkillTest. Prior to this, he managed software project delivery at several multinational companies, steering complex digital transformations for Fortune 500 clients. His focus at MySkillTest is on bridging the gap between technical capability and industrial requirement through automated intelligence.",
    expertise: ["Digital Strategy", "Enterprise Scaling", "Managment", "M&A Advisory", "Leadership"],
    strategicHighlight: "Pioneering the 'Intuition-First' enterprise framework for Global 500 partners.",
    socials: { linkedin: "#", twitter: "#", email: "ramakrishna@antern.tech" }
  },
  {
    name: "Rajanikanth Goteti",
    role: "Co-Founder and COO",
    image: rajani,
    bio: "Expert in operational excellence and cross-border marketing strategies.",
    fullBio: "Rajani brings two decades of expertise in the marketing and outsourcing industries. Throughout his career, he has executed successful campaigns that have helped businesses grow multifold. At MySkillTest, he oversees the global operations, ensuring that our scalable testing infrastructure meets the rigorous demands of enterprise clients while maintaining a seamless experience for candidates worldwide.",
    expertise: ["Execution Rigor", "Risk Stewardship", "Platform Scalability", "Experience Architecture"],
    strategicHighlight: "Institutionalizing zero-trust operating models to ensure mission-critical reliability.",
    socials: { linkedin: "#", twitter: "#", email: "rajani@antern.tech" }
  }
];

const advisors: Leader[] = [
  {
    name: "Jaya Kumar K",
    role: "Advisor & Investor",
    image: jaya,
    bio: "Former VP at Sabre Global with deep tech-business insight.",
    fullBio: "A leader with expertise in technology and business. Former Vice President & Managing Director at Sabre's Global. Jaya provides strategic oversight on our scaling roadmap and enterprise-grade security protocols.",
    expertise: ["Operational Agility", "Change Capitalization", "Value Creation"],
    strategicHighlight: "Accelerating value creation through disciplined transformation and cultural alignment.",
    socials: { linkedin: "#", email: "jaya@antern.tech" }
  },
  {
    name: "Jagan Mohan",
    role: "Advisor & Investor",
    image: jagan,
    bio: "Innovation-focused leader and seasoned Country Manager.",
    fullBio: "Detail-oriented leader with a focus on innovation. Currently serving as Vice President & Country Manager for a leading global tech firm. Jagan's expertise helps us navigate international markets and local compliance.",
    expertise: ["Operational Agility", "Transformation Governance", "Value Optimization"],
    strategicHighlight: "Catalyzing enterprise transformation by aligning culture, capital, and execution.",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Amarnath Thatigutla",
    role: "Advisor & Investor",
    image: amarnath,
    bio: "25 years of global IT experience with marquee clients.",
    fullBio: "25 years of IT industry experience. Worked with marquee clients across India, UK, and USA. Amarnath advises on the technical depth of our question banks to ensure they remain industry-aligned.",
    expertise: ["Operating Model Design", "Change Leadership", "Enterprise Value"],
    strategicHighlight: "Guiding leadership teams through structural and cultural inflection points.",
    socials: { linkedin: "#" }
  }
];

const uxStudioTeam: Leader[] = [
  {
    name: "Jahangir Alam",
    role: "Principal UX Architect",
    image: jahangir,
    bio: "Passionate about UX loves driving enterprise-scale experience architecture.",
    fullBio: "UX Architect & Experience Strategist with 15+ years of experience spanning UX, UI, and Front-End engineering. He operates at the intersection of experience architecture, operating models, and digital platforms—helping organizations institutionalize user-centricity at scale. He has partnered with global enterprises including Prometric, Hyundai, NCR, HPE, Sabre, Costco, and NetApp to modernize experience systems, improve adoption, and enable execution across complex environments.",
    expertise: ["Cognitive Experience Design", "AI-Driven UX", "Intelligent Design Systems", "Interaction Architecture", "Cross-Platform UX", "Enterprise UX Strategy"],
    strategicHighlight: "Institutionalizing human-centered experience systems within enterprise operating models.",
    socials: { linkedin: "#", twitter: "#" , email: "jahangir@antern.tech"}
  },
  {
    name: "Arvind Narayanan",
    role: "Head of Design & Innovation",
    image: arvind,
    bio: "Enabling enterprise growth through strategic design and innovation.",
    fullBio: "Arvind leads design and innovation across enterprise engagements, operating at the intersection of behavioral science, operating models, and value creation. He partners with executive leadership to frame transformation agendas, guide discovery and innovation programs, and institutionalize ethical, insight-driven decision-making across products, platforms, and services.",
    expertise: ["Innovation Strategy", "Behavioral Science", "Experience Governance", "Design Language Systems"],
    strategicHighlight: "Embedding behavioral intelligence into enterprise operating models to drive sustained value.",
    socials: { linkedin: "#", twitter: "#", email: "sophia@antern.tech" }
  },
  {
    name: "Pallavi Srinivasan",
    role: "Principal Visual Designer",
    image: pallavi,
    bio: "Focused on high-fidelity enterprise aesthetics and tokenized design systems.",
    fullBio: "Pallavi leads Antern’s visual systems, institutionalizing a coherent visual language that reflects the sophistication of the underlying technology.",
    expertise: ["Visual Direction", "Interface Visualization", "Creative Leadership", "Visual Storytelling"],
    strategicHighlight: "Setting the global standard for enterprise-grade digital aesthetics.",
    socials: { linkedin: "#", twitter: "#" }
  }
];

interface TeamSectionProps {
  title: string;
  subtitle: string;
  members: Leader[];
  columns?: number;
  onSelect: (member: Leader) => void;
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, subtitle, members, columns = 3, onSelect }) => (
  <div className="mb-32">
    <div className="flex flex-col mb-16">
      <div className="accent-bar bg-[#004b23] w-12 mb-6"></div>
      <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004b23] to-[#70e000]">
          {title}
        </span>
        <span className="text-[#004b23]">.</span>
      </h2>
      <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.2em]">{subtitle}</p>
    </div>
    <div className={`grid grid-cols-1 gap-10 ${columns > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
      {members.map((member) => (
        <div key={member.name} className="group relative">
          <div 
            className="aspect-[4/5] overflow-hidden bg-gray-100 mb-8 border border-gray-100 transition-all duration-700 hover:shadow-2xl grayscale group-hover:grayscale-0 relative cursor-pointer"
            onClick={() => onSelect(member)}
          >
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
              <p className="text-white text-sm font-light leading-relaxed mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{member.bio}</p>
              <button 
                className="w-full py-4 bg-white text-[#1A1A1A] text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#004b23] hover:text-white transition-all transform translate-y-8 group-hover:translate-y-0 transition-all duration-500"
                onClick={(e) => { e.stopPropagation(); onSelect(member); }}
              >
                View Profile Dossier
              </button>
            </div>
          </div>
          <div className="relative">
            <h3 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#004b23] transition-colors">{member.name}</h3>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mt-2">{member.role}</p>
            <div className="absolute top-0 right-0 w-8 h-px bg-gray-200 group-hover:bg-[#004b23] group-hover:w-12 transition-all duration-500"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

interface LeadershipProps {
  onContact?: () => void;
}

export const Leadership: React.FC<LeadershipProps> = ({ onContact }) => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [isDossierActive, setIsDossierActive] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (selectedLeader) {
      setTimeout(() => setIsDossierActive(true), 50);
      document.body.style.overflow = 'hidden';
    } else {
      setIsDossierActive(false);
      document.body.style.overflow = 'unset';
    }
  }, [selectedLeader]);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div 
          className="absolute -inset-y-24 inset-x-0 z-0 will-change-transform opacity-40"
          style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop" 
            alt="Antern Leadership Collaboration" 
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#70e000] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.5em] text-[#ccff33] mb-6 block">
              Global Governance
            </span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white mb-8">
              Leadership<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">
                Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl border-l border-[#70e000] pl-10">
              The architects of Antern's global mission, committed to delivering intelligent solutions with enterprise-grade integrity and strategic foresight.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <TeamSection 
            title="Leadership" 
            subtitle="Strategic Executive Council" 
            members={leadershipTeam} 
            columns={2}
            onSelect={setSelectedLeader}
          />
          <TeamSection 
            title="Advisors" 
            subtitle="Global Strategy & Innovation Board" 
            members={advisors} 
            onSelect={setSelectedLeader}
          />
          <TeamSection 
            title="UX Studio" 
            subtitle="Experience Architecture & Behavioral Design Leads" 
            members={uxStudioTeam} 
            onSelect={setSelectedLeader}
          />
        </div>
      </section>

      {/* Closing CTA - Tightened & Parallax */}
      <section className="relative py-24 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
           <div 
             className="absolute inset-0 bg-cover bg-center opacity-25 grayscale"
             style={{ 
               backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')",
               backgroundAttachment: 'fixed'
             }}
           ></div>
           <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight text-white mb-8">
            Build with the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#70e000] to-[#ccff33]">Best.</span>
          </h2>
          <p className="text-lg text-gray-400 font-light mb-10 leading-relaxed max-w-xl mx-auto">
            Our multi-disciplinary teams are ready to transform your most complex challenges into intuitive, scalable digital assets.
          </p>
          <button 
            onClick={onContact}
            className="px-12 py-5 bg-white text-[#1A1A1A] text-[11px] font-black uppercase tracking-[0.5em] hover:bg-[#70e000] hover:text-[#004b23] transition-all shadow-2xl group"
          >
            Initiate Consultation
            <span className="ml-4 inline-block transform transition-transform group-hover:translate-x-2">→</span>
          </button>
        </div>
      </section>

      {/* Profile Dossier Detail Overlay */}
      {selectedLeader && (
        <div className={`fixed inset-0 z-[100] transition-opacity duration-700 ${isDossierActive ? 'opacity-100' : 'opacity-0'}`}>
          <div 
            className="absolute inset-0 bg-[#0A0A0A]/95 backdrop-blur-3xl" 
            onClick={() => setSelectedLeader(null)}
          ></div>
          
          <div className="relative h-full w-full overflow-y-auto overflow-x-hidden flex flex-col lg:flex-row">
            {/* Visual Portrait Side */}
            <div className={`w-full lg:w-1/2 h-[50vh] lg:h-full relative bg-[#1A1A1A] transition-all duration-1000 ease-expo ${isDossierActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              <img src={selectedLeader.image} alt={selectedLeader.name} className="w-full h-full object-cover grayscale opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent"></div>
              
              {/* Dynamic Scan Line Effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                <div className="w-full h-px bg-white/40 absolute top-0 left-0 animate-scan"></div>
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100% 4px' }}></div>
              </div>

              {/* Large Outline Name */}
              <div className="absolute bottom-10 left-10 lg:bottom-20 lg:left-20">
                <div className="text-[10vw] font-black leading-none text-transparent border-text select-none opacity-10 absolute -bottom-8 left-0 whitespace-nowrap">
                   {selectedLeader.name.split(' ')[0]}
                </div>
                <h3 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white relative z-10">
                  {selectedLeader.name}
                </h3>
                <p className="text-[12px] font-black uppercase tracking-[0.6em] text-[#70e000] mt-6 relative z-10 flex items-center gap-4">
                  <span className="w-8 h-px bg-[#70e000]"></span>
                  {selectedLeader.role}
                </p>
              </div>
            </div>

            {/* Strategic Content Side */}
            <div className={`w-full lg:w-1/2 p-10 lg:p-24 flex flex-col justify-center bg-[#0A0A0A] text-white transition-all duration-1000 delay-300 ease-expo ${isDossierActive ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'}`}>
              <button 
                onClick={() => setSelectedLeader(null)}
                className="absolute top-10 right-10 w-16 h-16 flex items-center justify-center border border-white/10 hover:bg-white hover:text-[#1A1A1A] transition-all group rounded-full"
              >
                <svg className="w-8 h-8 transform group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="max-w-xl">
                <div className="accent-bar bg-[#70e000] w-12 mb-12"></div>
                
                <section className="mb-16">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ccff33] mb-6">Strategic Vision</h4>
                  <p className="text-3xl lg:text-4xl font-light italic leading-tight text-white/90">
                    "{selectedLeader.strategicHighlight}"
                  </p>
                </section>

                <section className="mb-16">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ccff33] mb-6">Executive Context</h4>
                  <p className="text-lg text-gray-400 font-light leading-relaxed">
                    {selectedLeader.fullBio || selectedLeader.bio}
                  </p>
                </section>

                <section className="mb-16">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ccff33] mb-8">Core Expertise</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedLeader.expertise.map(exp => (
                      <span key={exp} className="px-5 py-3 border border-white/10 text-[11px] font-bold uppercase tracking-widest text-gray-300 bg-white/5 hover:border-[#70e000] transition-colors">
                        {exp}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Dossier Social Connect */}
                <div className="pt-12 border-t border-white/10">
                  <div className="flex flex-wrap gap-12">
                    {Object.entries(selectedLeader.socials).map(([key, val]) => val && (
                      <a 
                        key={key} 
                        href={key === 'email' ? `mailto:${val}` : val} 
                        className="group flex flex-col gap-2"
                      >
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 group-hover:text-[#70e000] transition-colors">
                          {key}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-black uppercase tracking-widest">Connect</span>
                          <div className="w-0 h-px bg-[#70e000] group-hover:w-8 transition-all duration-500"></div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .border-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.4);
        }
        .ease-expo {
          transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
        }
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </div>
  );
};
