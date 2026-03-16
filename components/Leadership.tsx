import React, { useState, useEffect } from "react";

import ram from "../src/assets/img/leadership/ramk.png";
import rajani from "../src/assets/img/leadership/rajnikanth.png";
import jaya from "../src/assets/img/leadership/jayk.jpg";
import jagan from "../src/assets/img/leadership/jagan.jpg";
import amarnath from "../src/assets/img/leadership/amar.png";
import jahangir from "../src/assets/img/leadership/jahangir.jpg";
import pradeep from "../src/assets/img/leadership/pradeep.png";
import venky from "../src/assets/img/leadership/venky.png";

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
    fullBio:
      "With over two decades of experience in the Information Technology industry, Ram brings extensive expertise to his role at IamInterviewed. Prior to this, he managed software project delivery at several multinational companies, including Alliance Global Services India and Infinite Computer Solutions Ltd. in India, US and Europe, where he worked with major clients such as Verizon and other prominent firms. He has also worked in the software division of GAFRI Inc, as a programmer. /n Ram holds a Masters degree in Business Administration in Systems and Finance from S.K University, Anantapur, and a Bachelors degree in Mathematics from S.V University, Tirupati, India",
    expertise: [
      "Digital Strategy",
      "Enterprise Scaling",
      "Managment",
      "M&A Advisory",
      "Leadership",
    ],
    strategicHighlight:
      "Pioneering the 'Intuition-First' enterprise framework for Global 500 partners.",
    socials: { linkedin: "#", twitter: "#", email: "ramakrishna@antern.tech" },
  },
  {
    name: "Rajanikanth Goteti",
    role: "Co-Founder and COO",
    image: rajani,
    bio: "Expert in operational excellence and cross-border marketing strategies.",
    fullBio:
      "Rajani brings two decades of expertise in the marketing and outsourcing industries. Throughout his career in marketing, he has executed successful campaigns that have helped businesses grow multifold. Rajani possesses extensive experience in outsourcing strategies. His strategic vision and innovative approach have consistently delivered remarkable results. He has also played a pivotal role in establishing the processes that enable multi national corporations to seamlessly transfer operations offshore./n Rajani holds a Bachelors and Masters in Business Administration from S.K University, Anantapur, India.",
    expertise: [
      "Execution Rigor",
      "Risk Stewardship",
      "Platform Scalability",
      "Experience Architecture",
    ],
    strategicHighlight:
      "Institutionalizing zero-trust operating models to ensure mission-critical reliability.",
    socials: { linkedin: "#", twitter: "#", email: "rajani@antern.tech" },
  },
  {
    name: "Pradeep Nageshwar",
    role: "Director – Talent Strategy & Client Partnerships",
    image: pradeep,
    bio: "Operations expert driving global delivery and strategic execution.",
    fullBio:
      "With over a decade of experience in the recruitment industry, Pradeep specializes in talent acquisition and client relationship management. He has helped organizations identify and secure top talent through strategic sourcing, technical screening, and efficient recruitment operations. His expertise lies in building strong client partnerships while delivering high-quality hiring solutions.",
    expertise: [
      "Client Management",
      "Key Account Management",
      "Recruitment Operations",
      "Talent Sourcing",
    ],
    strategicHighlight:
      "Streamlining global delivery models to accelerate time-to-market by 30%.",
    socials: { linkedin: "#", twitter: "#", email: "michael@antern.tech" },
  },

  {
    name: "Venkatesh ",
    role: "VP - Engineering",
    image: venky,
    bio: "Technology leader driving large-scale platforms and digital transformation.",
    fullBio:
      "Venkatesh comes with nearly three decades of experience leading global technology organizations and delivering large-scale digital platforms. He has built and scaled high-performing engineering teams across multiple geographies, driving technology transformation for both product and services organizations. His experience spans lottery gaming platforms, banking, hospitality, enterprise systems, and data-driven applications operating in regulated environments. Venkatesh has led several modernization initiatives, helping organizations transition from legacy systems to scalable cloud and hybrid architectures. He is passionate about building strong engineering cultures, mentoring future technology leaders, and ensuring that engineering teams consistently deliver solutions that drive measurable business impact.",
    expertise: ["Innovation", "Engineering"],
    strategicHighlight: "Driving growth.",
    socials: { linkedin: "#", twitter: "#", email: "Venkatesh@antern.tech" },
  },
  {
    name: "Jahangir Alam",
    role: "Principal UX Architect",
    image: jahangir,
    bio: "Passionate about UX loves driving enterprise-scale experience architecture.",
    fullBio:
      "UX Architect & Experience Strategist with 15+ years of experience spanning UX, UI, and Front-End engineering. He operates at the intersection of experience architecture, operating models, and digital platforms—helping organizations institutionalize user-centricity at scale. He has partnered with global enterprises including Prometric, Hyundai, NCR, HPE, Sabre, Costco, and NetApp to modernize experience systems, improve adoption, and enable execution across complex environments.",
    expertise: [
      "UX Design",
      "Enterprise Architecture",
      "User Research",
      "Interaction Design",
    ],
    strategicHighlight:
      "Institutionalizing human-centered experience systems within enterprise operating models.",
    socials: { linkedin: "#", twitter: "#", email: "jahangir@antern.com" },
  },
];

const advisors: Leader[] = [
  {
    name: "Jaya Kumar K",
    role: "Advisor & Investor",
    image: jaya,
    bio: "Former VP at Sabre Global with deep tech-business insight.",
    fullBio:
      "Jaya Kumar is a leader, with expertise in technology and business. Having served as Vice President & Managing Director at Sabre's Global Development Center in Bengaluru, Managing Director and Vice President at Walmart Labs and Ariba Technologies over 18 years, Jaya has spearheaded initiatives in e-commerce, supply chain, and technology innovation. He is working with and in startups and has a keen interest in mentoring young leaders. Jaya Kumar holds an MBA from the IIM Bangalore and a B Tech from IIT Bombay.",
    expertise: [
      "Operational Agility",
      "Change Capitalization",
      "Value Creation",
    ],
    strategicHighlight:
      "Accelerating value creation through disciplined transformation and cultural alignment.",
    socials: { linkedin: "#", twitter: "#", email: "jaya@antern.tech" },
  },
  {
    name: "Jagan Mohan",
    role: "Advisor & Investor",
    image: jagan,
    bio: "Innovation-focused leader and seasoned Country Manager.",
    fullBio:
      "Jagan is a detail-oriented leader with a keen focus on innovation and quality. Currently serving as Vice President & Country Manager at Arable Labs India, Jagan's expertise lies in enhancing product standardisation and service quality. With a career spanning over several prestigious companies such as Wipro, HCL, and PSI Data Systems, Jagan has consistently demonstrated his passion and dedication towards driving organisational success./n Jagan holds a Master's degree in Computer Science fromIIT, Madras",
    expertise: [
      "Operational Agility",
      "Transformation Governance",
      "Value Optimization",
    ],
    strategicHighlight:
      "Catalyzing enterprise transformation by aligning culture, capital, and execution.",
    socials: { linkedin: "#", twitter: "#", email: "jaya@antern.tech" },
  },
  {
    name: "Amarnath Thatigutla",
    role: "Advisor & Investor",
    image: amarnath,
    bio: "25 years of global IT experience with marquee clients.",
    fullBio:
      "Amar has 25 years of experience in IT industry. Worked with many marquee clients in India, UK and USA. Amar is B. Tech from SV University and a technology investor apart from his core technology delivery to MNC s.",
    expertise: [
      "Operating Model Design",
      "Change Leadership",
      "Enterprise Value",
    ],
    strategicHighlight:
      "Guiding leadership teams through structural and cultural inflection points.",
    socials: { linkedin: "#", twitter: "#", email: "jaya@antern.tech" },
  },
];

interface TeamSectionProps {
  title: string;
  subtitle: string;
  members: Leader[];
  columns?: number;
  onSelect: (leader: Leader) => void;
}

const TeamSection: React.FC<TeamSectionProps> = ({
  title,
  subtitle,
  members,
  columns = 3,
  onSelect,
}) => (
  <div className="mb-32">
    <div className="flex flex-col mb-16">
      <div className="accent-bar bg-[#004b23] w-12 mb-6"></div>
      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#000] to-[#0085F7]">
          {title}
        </span>
        <span className="text-[#004b23]">.</span>
      </h2>
      <p className="text-gray-500 text-sm font-bold uppercase tracking-[0.2em]">
        {subtitle}
      </p>
    </div>
    <div className="flex flex-wrap justify-center gap-10">
      {members.map((member) => (
        <div
          key={member.name}
          className={`group relative w-full ${columns > 2 ? "md:w-[calc((100%-5rem)/3)]" : "md:w-[calc((100%-2.5rem)/2)]"}`}
        >
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
                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00A94B] mb-3">
                  Executive Context
                </h4>
                <p className="text-white text-sm font-light leading-relaxed mb-4 line-clamp-3">
                  {member.fullBio || member.bio}
                </p>
                <div
                  className="mb-8 cursor-pointer flex items-center gap-2 group/btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(member);
                  }}
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white group-hover/btn:text-[#0085F7] transition-colors border-b border-white/30 group-hover/btn:border-[#0085F7]">
                    View More
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 text-white group-hover/btn:text-[#0085F7] transition-colors group-hover/btn:translate-x-1 duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>

                <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#00A94B] mb-3">
                  Core Expertise
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.expertise.map((exp) => (
                    <span
                      key={exp}
                      className="px-3 py-1 border border-white/20 text-[9px] font-bold uppercase tracking-widest text-gray-300 bg-white/5"
                    >
                      {exp}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/20">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      className="text-gray-400 hover:text-[#70e000] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      className="text-gray-400 hover:text-[#70e000] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="currentColor"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  )}
                  {member.socials.email && (
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="text-gray-400 hover:text-[#70e000] transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <h3 className="text-2xl font-black uppercase tracking-tight text-[#1A1A1A] group-hover:text-[#0085F7] transition-colors">
              {member.name}
            </h3>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mt-2">
              {member.role}
            </p>
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
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#0085F7] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.5em] text-[#0085F7] mb-6 block">
              Global Governance
            </span>
            <h1 className="text-5xl md:ext-5xl font-black  tracking-tighter leading-[0.85] text-white mb-8">
              Leadership{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff]  to-[#0085F7]">
                Team.{" "}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-normal leading-relaxed max-w-2xl border-l border-[#004b23] pl-10">
              The architects of Antern's global mission, committed to delivering
              intelligent solutions with enterprise-grade integrity and
              strategic foresight.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <TeamSection
            title="Leadership"
            subtitle="Strategic Executive Council"
            members={leadershipTeam}
            columns={3}
            onSelect={setSelectedLeader}
          />
          <TeamSection
            title="Advisors & Investors"
            subtitle="Global Strategy & Innovation Board"
            members={advisors}
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
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')",
              backgroundAttachment: "fixed",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:ext-5xl font-black uppercase tracking-tighter leading-tight text-white mb-8">
            Build with the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] to-[#0085F7]">
              Best.
            </span>
          </h2>
          <p className="text-lg text-gray-400 font-normal mb-10 leading-relaxed max-w-xl mx-auto">
            Our multi-disciplinary teams are ready to transform your most
            complex challenges into intuitive, scalable digital assets.
          </p>
          <button
            onClick={onContact}
            className="px-12 py-5 bg-white text-[#1A1A1A] text-[11px] font-black uppercase tracking-[0.5em] hover:bg-[#0085F7] hover:text-[#fff] transition-all shadow-2xl group"
          >
            Initiate Consultation
            <span className="ml-4 inline-block transform transition-transform group-hover:translate-x-2">
              →
            </span>
          </button>
        </div>
      </section>

      {/* Modern Fixed Modal */}
      {selectedLeader && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center"
        >
          {/* Blurred Backbone */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-2xl cursor-pointer ease-out duration-500 animate-in fade-in" 
            onClick={() => setSelectedLeader(null)}
          />

          {/* Modal Content Drawer/Card */}
          <div 
            className="w-full h-full md:h-auto md:max-w-6xl md:max-h-[85vh] bg-[#0A0A0A] rounded-none md:rounded-3xl border border-white/10 shadow-2xl relative z-10 flex flex-col md:flex-row overflow-hidden"
            style={{ 
              animation: 'creativeModalEntry 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
              transformOrigin: 'bottom center'
            }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedLeader(null)}
              className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/5 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transform group-hover:rotate-90 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Box: Identity & Visuals */}
            <div className="w-full md:w-5/12 relative bg-gray-900 flex flex-col justify-end p-10 min-h-[40vh] md:min-h-0">
              {/* Abstract structural grid over image */}
              <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                <img
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent z-10"></div>
                {/* Micro tech pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none z-10" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              </div>
              
              <div className="relative z-20 mt-auto drop-shadow-2xl">
                <div className="accent-bar bg-[#0085F7] w-12 h-1 mb-4"></div>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-2 leading-none">
                  {selectedLeader.name}
                </h2>
                <p className="text-[#00A94B] text-[11px] font-black uppercase tracking-[0.4em] mb-6">{selectedLeader.role}</p>

                <div className="flex gap-4 pt-6 border-t border-white/10">
                    {selectedLeader.socials.linkedin && (
                      <a href={selectedLeader.socials.linkedin} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#0085F7] hover:bg-[#0085F7]/10 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                    )}
                    {selectedLeader.socials.twitter && (
                      <a href={selectedLeader.socials.twitter} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#0085F7] hover:bg-[#0085F7]/10 transition-all duration-300" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                      </a>
                    )}
                    {selectedLeader.socials.email && (
                      <a href={`mailto:${selectedLeader.socials.email}`} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#0085F7] hover:bg-[#0085F7]/10 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      </a>
                    )}
                </div>
              </div>
            </div>

            {/* Right Box: Bio & Details Scrollable Area */}
            <div className="w-full md:w-7/12 bg-[#050505] p-8 md:p-14 overflow-y-auto custom-scrollbar flex flex-col relative">
              <h3 className="text-xl md:text-2xl font-light text-white mb-8 leading-relaxed italic border-l-[3px] border-[#0085F7] pl-6">
                "{selectedLeader.bio}"
              </h3>
              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 mb-4 sticky top-0 bg-[#050505] py-2 z-10">Professional Summary</h4>
              {/* Text rendering block handling multiple paragraphs in template literals securely */}
              <div className="text-gray-300 text-sm md:text-base font-light leading-[1.8] mb-12" style={{ whiteSpace: 'pre-line' }}>
                {selectedLeader.fullBio || selectedLeader.bio}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-auto pb-4">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#0085F7] mb-6 border-b border-white/10 pb-3">Strategic Priorities</h4>
                  <p className="text-gray-400 text-sm font-medium leading-relaxed border-l-2 border-[#00A94B] pl-4">
                    {selectedLeader.strategicHighlight}
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#0085F7] mb-6 border-b border-white/10 pb-3">Core Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLeader.expertise.map(exp => (
                      <span key={exp} className="px-3 py-1.5 border border-white/10 text-[9px] font-bold uppercase tracking-widest text-[#cfcfcf] bg-white/5 hover:bg-white/10 transition-colors cursor-default rounded-sm">
                        {exp}
                      </span>
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
        @keyframes creativeModalEntry {
          0% { 
            opacity: 0; 
            transform: perspective(1500px) rotateX(15deg) scale(0.95) translateY(40px); 
          }
          100% { 
            opacity: 1; 
            transform: perspective(1500px) rotateX(0deg) scale(1) translateY(0); 
          }
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0A0A0A;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #0085F7;
        }
      `}</style>
    </div>
  );
};
