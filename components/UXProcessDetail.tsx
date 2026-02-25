
import React from 'react';

interface UXProcessDetailProps {
  onStartDiscovery?: () => void;
}

const processSteps = [
  {
    id: "01",
    title: "Empathise / Understand",
    tasks: [
      "Research User needs/business needs",
      "Understand current landscape and assumptions",
      "Identify current user behaviour"
    ],
    discovery: [
      "Insight Capture",
      "Project Canvas",
      "Empathy Map",
      "Journey Map",
      "Product Strategy"
    ]
  },
  {
    id: "02",
    title: "Define",
    tasks: [
      "Define digital strategy",
      "Define scope of work and resource requirements",
      "Define success criteria and performance measures"
    ],
    discovery: [
      "Strategy Definition",
      "Requirement Gathering",
      "Epic & User Story Creation",
      "Time/Resource Estimation",
      "Roadmap Planning"
    ]
  },
  {
    id: "03",
    title: "Ideate",
    tasks: [
      "Co-design potential solutions with stakeholders",
      "Determine flow, features, format, and structure"
    ],
    discovery: [
      "Journey Flow Design",
      "Information Architecture",
      "Messaging Hierarchy",
      "Lo-Fi Sketching",
      "Voice & Tone Definition"
    ]
  },
  {
    id: "04",
    title: "Design / Prototype",
    tasks: [
      "Collaboratively design high-fidelity solutions",
      "Write testable micro-copy and content",
      "Document design decisions for development"
    ],
    discovery: [
      "Hi-Fi Exploration",
      "Interactive Prototyping",
      "Rationale Documentation",
      "Pair Writing Sessions",
      "Design System Integration"
    ]
  },
  {
    id: "05",
    title: "Review",
    tasks: [
      "Peer reviews for design consistency",
      "Stakeholder feedback loops",
      "Technical feasibility and constraint reviews"
    ],
    discovery: [
      "Design Critics",
      "Feedback Sessions",
      "Show and Tells",
      "Dev Handoff Syncs"
    ]
  },
  {
    id: "06",
    title: "Implement",
    tasks: [
      "Document final production content",
      "Support engineering during UI implementation",
      "Ensure cross-team content alignment"
    ],
    discovery: [
      "UX Quality Assurance",
      "SEO Implementation",
      "Launch Management",
      "Internal Comms Sync"
    ]
  },
  {
    id: "07",
    title: "Test & Learn",
    tasks: [
      "Validate solutions via A/B and usability testing",
      "Report on KPI progress and business impact",
      "Create hypotheses for future optimization"
    ],
    discovery: [
      "Research Methodology",
      "Sentiment Analysis",
      "Content Audits",
      "Test Plan Generation",
      "Iterative Backlog"
    ]
  }
];

export const UXProcessDetail: React.FC<UXProcessDetailProps> = ({ onStartDiscovery }) => {
  return (
    <div className="bg-[#FFFFFF] selection:bg-[#0085F7] selection:text-[#fff]">
      {/* 1. KINETIC HERO */}
      <section className="relative h-[85vh] min-h-[700px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2500&auto=format&fit=crop" 
            alt="UX Research and Analysis" 
            className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-[3000ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#70e000] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.5em] text-[#ccff33] mb-6 block">
              Strategic Lifecycle
            </span>
            <h1 className="text-5xl md:ext-5xl lg:text-5xl font-black uppercase tracking-tighter leading-[0.85] mb-8 text-white">
              The Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">
                Lifecycle.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-normal leading-relaxed max-w-2xl border-l border-[#004b23] pl-10">
              A rigorous, data-driven framework spanning seven critical phases of digital evolution. We transform enterprise complexity into human-centric frictionlessness.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INTRO PHILOSOPHY */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-[0.95]">
                Evidence-based <span className="text-[#004b23]">Discovery</span>. <br />
                Iterative <span className="text-[#004b23]">Execution</span>.
              </h2>
            </div>
            <div className="lg:col-span-4 flex items-end">
              <p className="text-lg text-gray-500 font-normal leading-relaxed">
                By integrating behavioral science with technical feasibility, we ensure every design decision contributes to both user delight and measurable business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE LIFECYCLE GRID */}
      <section className="relative bg-[#F8F7F9] py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-px border border-gray-200 bg-gray-200">
            {processSteps.map((step, index) => (
              <div 
                key={step.id} 
                className="group bg-white hover:bg-[#1A1A1A] transition-all duration-500 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[300px]">
                  
                  {/* Phase ID & Indicator */}
                  <div className="lg:col-span-1 bg-gray-50 group-hover:bg-[#004b23] flex items-center justify-center p-8 transition-colors duration-500">
                    <span className="text-4xl lg:text-5xl font-black text-gray-200 group-hover:text-white transition-colors">
                      {step.id}
                    </span>
                  </div>

                  {/* Core Strategic Tasks */}
                  <div className="lg:col-span-6 p-10 lg:p-14 border-r border-gray-100 group-hover:border-white/10 transition-colors">
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#004b23] group-hover:text-[#ccff33] mb-6 transition-colors">Core Objectives</div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-[#1A1A1A] group-hover:text-white mb-8 leading-none transition-colors">
                      {step.title}
                    </h3>
                    <div className="space-y-5">
                      {step.tasks.map((task, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="w-1.5 h-1.5 bg-[#004b23] group-hover:bg-[#70e000] mt-2 rounded-full shrink-0 transition-colors"></div>
                          <p className="text-lg text-gray-700 group-hover:text-gray-400 font-medium leading-snug transition-colors">
                            {task}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Discovery Deliverables */}
                  <div className="lg:col-span-5 p-10 lg:p-14 bg-gray-50/30 group-hover:bg-transparent transition-colors">
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 group-hover:text-white/50 mb-6 transition-colors">Key Deliverables</div>
                    <div className="flex flex-wrap gap-2">
                      {step.discovery.map((item, i) => (
                        <div 
                          key={i} 
                          className="px-4 py-3 bg-white border border-gray-200 text-[12px] font-bold uppercase tracking-widest text-gray-600 group-hover:bg-white/5 group-hover:text-[#ccff33] group-hover:border-[#70e000] transition-all"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER CTA */}
      <section className="py-48 bg-white text-center relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none -translate-y-1/2 select-none">
           <span className="text-[400px] font-black text-[#1A1A1A]">+</span>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="accent-bar bg-[#004b23] mx-auto w-16 mb-12"></div>
          <h2 className="text-5xl md:ext-5xl font-black uppercase tracking-tighter leading-[0.85] text-[#1A1A1A] mb-12">
            Ready to <br />
            <span className="text-[#004b23]">Initiate?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-normal mb-16 leading-relaxed">
            Successful digital transformation is the result of a disciplined lifecycle. Let's deploy our strategic framework for your next mission-critical project.
          </p>
          <button 
            onClick={onStartDiscovery}
            className="px-16 py-7 bg-[#1A1A1A] text-white text-[12px] font-black uppercase tracking-[0.5em] hover:bg-[#004b23] transition-all shadow-2xl group"
          >
            Start Project Discovery
            <span className="ml-4 inline-block transform transition-transform group-hover:translate-x-2">→</span>
          </button>
        </div>
      </section>

    </div>
  );
};
