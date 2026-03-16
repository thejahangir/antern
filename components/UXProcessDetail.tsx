
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
      <section className="relative h-[60vh] min-h-[450px] flex items-center bg-[#0A0A0A] overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mt-10">
          <div className="max-w-3xl">
            <div className="accent-bar bg-[#0085F7] w-16 h-1 mb-6"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#0085F7] mb-4 block">
              Strategic Lifecycle
            </span>
            <h1 className="font-black tracking-tighter leading-[0.85] mb-6 text-white text-4xl md:text-5xl capitalize">
              The Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] to-[#0085F7]">
                Lifecycle.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-normal leading-relaxed max-w-xl border-l-2 border-[#004b23] pl-6">
              A rigorous, data-driven framework spanning seven critical phases of digital evolution. We transform enterprise complexity into human-centric frictionlessness.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INTRO PHILOSOPHY */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            <div className="lg:col-span-8">
              <h2 className="font-black tracking-tighter text-[#1A1A1A] leading-[0.95] text-4xl md:text-5xl capitalize">
                Evidence-basedDiscovery. <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0085F7] to-[#00A94B]">Iterative Execution</span>.
              </h2>
            </div>
            <div className="lg:col-span-4 flex items-end">
              <p className="text-[13px] md:text-sm text-gray-500 font-normal leading-relaxed">
                By integrating behavioral science with technical feasibility, we ensure every design decision contributes to both user delight and measurable business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE LIFECYCLE GRID */}
      <section className="relative bg-[#F8F7F9] py-12 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-px border border-gray-200 bg-gray-200">
            {processSteps.map((step, index) => (
              <div 
                key={step.id} 
                className="group bg-white hover:bg-[#1A1A1A] transition-all duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[120px]">
                  
                  {/* Phase ID & Indicator */}
                  <div className="lg:col-span-1 bg-gray-50 group-hover:bg-[#00A94B] flex items-center justify-center p-4 transition-colors duration-300">
                    <span className="text-2xl lg:text-3xl font-black text-gray-200 group-hover:text-white transition-colors">
                      {step.id}
                    </span>
                  </div>

                  {/* Core Strategic Tasks */}
                  <div className="lg:col-span-6 p-4 lg:p-6 border-r border-gray-100 group-hover:border-white/10 transition-colors">
                    <div className="text-[8px] font-black uppercase tracking-[0.3em] text-[#004b23] group-hover:text-[#0085F7] mb-2 transition-colors">Core Objectives</div>
                    <h3 className="text-lg font-black tracking-tighter text-[#1A1A1A] group-hover:text-white mb-3 leading-none transition-colors text-4xl md:text-5xl capitalize">
                      {step.title}
                    </h3>
                    <div className="space-y-2">
                      {step.tasks.map((task, i) => (
                        <div key={i} className="flex gap-2 items-start">
                          <div className="w-1 h-1 bg-[#0085F7] group-hover:bg-[#00A94B] mt-1.5 rounded-full shrink-0 transition-colors"></div>
                          <p className="text-[11px] md:text-[12px] text-gray-700 group-hover:text-gray-400 font-normal leading-snug transition-colors">
                            {task}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Discovery Deliverables */}
                  <div className="lg:col-span-5 p-4 lg:p-6 bg-gray-50/30 group-hover:bg-transparent transition-colors">
                    <div className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-400 group-hover:text-white/50 mb-2 transition-colors">Key Deliverables</div>
                    <div className="flex flex-wrap gap-1.5">
                      {step.discovery.map((item, i) => (
                        <div 
                          key={i} 
                          className="px-2 py-1 bg-white border border-gray-200 text-[9px] font-bold uppercase tracking-widest text-gray-600 group-hover:bg-white/5 group-hover:text-[#fff] group-hover:border-[#0085F7] transition-all"
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
      <section className="py-12 md:py-16 bg-white text-center relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none -translate-y-1/2 select-none">
           <span className="text-[200px] font-black text-[#1A1A1A]">+</span>
        </div>

        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <div className="accent-bar bg-[#004b23] mx-auto w-8 h-1 mb-5"></div>
          <h2 className="font-black tracking-tighter leading-[0.85] text-[#1A1A1A] mb-5 text-4xl md:text-5xl capitalize">
            Ready <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0085F7] to-[#00A94B]">to Initiate?</span>
          </h2>
          <p className="text-[13px] md:text-sm text-gray-500 font-normal mb-8 leading-relaxed">
            Successful digital transformation is the result of a disciplined lifecycle. Let's deploy our strategic framework for your next mission-critical project.
          </p>
          <button 
            onClick={onStartDiscovery}
            className="px-6 py-3 md:px-8 md:py-4 bg-[#1A1A1A] text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#0085F7] transition-all shadow-[0_10px_20px_rgba(26,26,26,0.2)] hover:shadow-[0_15px_30px_rgba(0,133,247,0.3)] group transform hover:-translate-y-0.5"
          >
            Start Project Discovery
            <span className="ml-3 inline-block transform transition-transform group-hover:translate-x-2">→</span>
          </button>
        </div>
      </section>

    </div>
  );
};
