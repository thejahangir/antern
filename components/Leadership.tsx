
import React, { useState, useEffect } from 'react';

import ram from '../src/assets/img/leadership/ramk.png';
import rajani from '../src/assets/img/leadership/rajnikanth.png';
import jaya from '../src/assets/img/leadership/jayk.jpg';
import jagan from '../src/assets/img/leadership/jagan.jpg';
import amarnath from '../src/assets/img/leadership/amar.png';
import jahangir from '../src/assets/img/leadership/jahangir.jpg';
import arvind from '../src/assets/img/leadership/arvind.png';
import pallavi from '../src/assets/img/leadership/pallavi.png';
import pradeep from '../src/assets/img/leadership/pradeep.png';



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
    fullBio: "With over two decades of experience in the Information Technology industry, Ram brings extensive expertise to his role at Antern. Prior to this, he managed software project delivery at several multinational companies, steering complex digital transformations for Fortune 500 clients. His focus at Antern is on bridging the gap between technical capability and industrial requirement through automated intelligence.",
    expertise: ["Digital Strategy", "Enterprise Scaling", "Managment", "M&A Advisory", "Leadership"],
    strategicHighlight: "Pioneering the 'Intuition-First' enterprise framework for Global 500 partners.",
    socials: { linkedin: "#", twitter: "#", email: "ramakrishna@antern.tech" }
  },
  {
    name: "Rajanikanth Goteti",
    role: "Co-Founder and COO",
    image: rajani,
    bio: "Expert in operational excellence and cross-border marketing strategies.",
    fullBio: "Rajani brings two decades of expertise in the marketing and outsourcing industries. Throughout his career, he has executed successful campaigns that have helped businesses grow multifold. At Antern, he oversees the global operations, ensuring that our scalable testing infrastructure meets the rigorous demands of enterprise clients while maintaining a seamless experience for candidates worldwide.",
    expertise: ["Execution Rigor", "Risk Stewardship", "Platform Scalability", "Experience Architecture"],
    strategicHighlight: "Institutionalizing zero-trust operating models to ensure mission-critical reliability.",
    socials: { linkedin: "#", twitter: "#", email: "rajani@antern.tech" }
  },
  {
    name: "Pradeep Nageshwar",
    role: "Director – Talent Strategy & Client Partnerships",
    image: pradeep,
    bio: "Operations expert driving global delivery and strategic execution.",
    fullBio: "With over a decade of experience in the recruitment industry, Pradeep specializes in talent acquisition and client relationship management. He has helped organizations identify and secure top talent through strategic sourcing, technical screening, and efficient recruitment operations. His expertise lies in building strong client partnerships while delivering high-quality hiring solutions.",
    expertise: ["Client Management", "Key Account Management", "Recruitment Operations", "Talent Sourcing"],
    strategicHighlight: "Streamlining global delivery models to accelerate time-to-market by 30%.",
    socials: { linkedin: "#", email: "michael@antern.tech" }
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
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, subtitle, members, columns = 3 }) => (
  <div className="mb-32">
    <div className="flex flex-col mb-16">
      <div className="accent-bar bg-[#004b23] w-12 mb-6"></div>
      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#000] to-[#0085F7]">
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
            <div className="absolute inset-0 bg-[#1A1A1A]/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-8 overflow-y-auto">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00A94B] mb-3">Executive Context</h4>
                <p className="text-white text-sm font-light leading-relaxed mb-6">
                  {member.fullBio || member.bio}
                </p>

                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00A94B] mb-3">Core Expertise</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.expertise.map(exp => (
                    <span key={exp} className="px-3 py-1 border border-white/20 text-[9px] font-bold uppercase tracking-widest text-gray-300 bg-white/5">
                      {exp}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/20">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="text-gray-400 hover:text-[#70e000] transition-colors" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} className="text-gray-400 hover:text-[#70e000] transition-colors" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </a>
                  )}
                  {member.socials.email && (
                    <a href={`mailto:${member.socials.email}`} className="text-gray-400 hover:text-[#70e000] transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <h3 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#0085F7] transition-colors">{member.name}</h3>
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
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div 
          className="absolute -inset-y-24 inset-x-0 z-0 will-change-transform opacity-40"
          style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000" 
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
            <div className="accent-bar bg-[#0085F7] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.5em] text-[#0085F7] mb-6 block">
              Global Governance
            </span>
            <h1 className="text-5xl md:ext-5xl font-black  tracking-tighter leading-[0.85] text-white mb-8">
              Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff]  to-[#0085F7]">Team. </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-normal leading-relaxed max-w-2xl border-l border-[#004b23] pl-10">
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
            columns={3}
          />
          <TeamSection 
            title="Advisors & Investors" 
            subtitle="Global Strategy & Innovation Board" 
            members={advisors} 
          />
          <TeamSection 
            title="UX Studio" 
            subtitle="Experience Architecture & Behavioral Design Leads" 
            members={uxStudioTeam} 
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
          <h2 className="text-5xl md:ext-5xl font-black uppercase tracking-tighter leading-tight text-white mb-8">
            Build with the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] to-[#0085F7]">Best.</span>
          </h2>
          <p className="text-lg text-gray-400 font-normal mb-10 leading-relaxed max-w-xl mx-auto">
            Our multi-disciplinary teams are ready to transform your most complex challenges into intuitive, scalable digital assets.
          </p>
          <button 
            onClick={onContact}
            className="px-12 py-5 bg-white text-[#1A1A1A] text-[11px] font-black uppercase tracking-[0.5em] hover:bg-[#0085F7] hover:text-[#fff] transition-all shadow-2xl group"
          >
            Initiate Consultation
            <span className="ml-4 inline-block transform transition-transform group-hover:translate-x-2">→</span>
          </button>
        </div>
      </section>

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
