
import React from 'react';

interface UXStudioDetailProps {
  onExploreProcess?: () => void;
  onInitiateStrategy?: () => void;
  onRequestAudit?: () => void;
  showBackToSolutions?: boolean;
  onBackToSolutions?: () => void;
}

export const UXStudioDetail: React.FC<UXStudioDetailProps> = ({ 
  onExploreProcess, 
  onInitiateStrategy, 
  onRequestAudit,
  showBackToSolutions,
  onBackToSolutions
}) => {
  return (
    <div className="bg-white">
      {/* 1. Page Introduction / Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center bg-[#1A1A1A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2500&auto=format&fit=crop" 
            alt="Antern UX Analysis Team" 
            className="w-full h-full object-cover opacity-70"
          />
          {/* Refined Overlays for better depth and image visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-30"></div>
        </div>

        {showBackToSolutions && (
          <button 
            onClick={onBackToSolutions}
            className="absolute top-28 left-6 md:left-10 z-50 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-all group"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Solutions
          </button>
        )}

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
          <div className="accent-bar bg-[#79BFFA] w-24 h-1.5 mb-10"></div>
            {/* <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#0085F7] mb-6 block">
              Experience Systems & Design
            </span> */}
            <h1 className="font-black tracking-tighter leading-[0.85] mb-6 text-4xl md:text-5xl capitalize">
              UX <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] to-[#0085F7]">Studio.</span>
            </h1>
            <h2 className="font-normal text-[#00A94B]/90 mb-12 tracking-tight italic leading-tight text-3xl md:text-3xl capitalize">
              Designing systems that think before users do.
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-normal leading-relaxed max-w-3xl border-l border-[#fff]/6 pl-8">
              Antern UX Studio bridges the gap between complex enterprise logic and human behavior. 
              We transform high-density data into frictionless, intuitive cognitive pathways—engineering the invisible layer of instinct.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="py-12 bg-white border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none hidden lg:block">
          <span className="text-[140px] font-black uppercase text-[#1A1A1A] leading-none tracking-tighter">
            IMPACT
          </span>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="accent-bar bg-[#004b23] w-12 h-1 mb-4"></div>
              <h2 className="font-black tracking-tighter text-[#1A1A1A] leading-tight text-4xl md:text-5xl capitalize">
                Architecture for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0085F7] to-[#00A94B]">Human Potential.</span>
              </h2>
              <p className="mt-4 text-lg text-gray-500 font-normal max-w-2xl leading-relaxed">
                We don't just design interfaces; we architect digital behaviors. Our studio combines rigorous cognitive science with aesthetic precision to deliver measurable business growth and unparalleled user clarity.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6 lg:border-l lg:border-gray-100 lg:pl-10">
              <div className="group">
                <div className="text-4xl font-black text-[#1A1A1A] group-hover:text-[#70e000] transition-colors">40%</div>
                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 mt-1">Cognitive Load Reduction</div>
              </div>
              <div className="group">
                <div className="text-4xl font-black text-[#1A1A1A] group-hover:text-[#70e000] transition-colors">95%</div>
                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 mt-1">Task Completion Velocity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Research Strategic Banner */}
      <section className="py-12 md:py-16 bg-[#1A1A1A] text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop" 
            alt="Design Research Workshop" 
            className="w-full h-full object-cover opacity-50 grayscale transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#262626]/90 to-[#1A1A1A]/70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="max-w-2xl">
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-[#0085F7] mb-3 block">Strategic Capability</span>
              <h2 className="font-black tracking-tighter mb-4 leading-tight text-4xl md:text-5xl capitalize">
                Deep User Research & <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] to-[#0085F7]">Design Methodology</span>
              </h2>
              <p className="text-lg md:text-xl text-white/80 font-normal leading-relaxed mb-6 max-w-xl">
                Discover how we combine empathy-driven discovery with algorithmic analysis to build the world's most intuitive enterprise interfaces.
              </p>
              <div className="flex gap-4 items-center">
                <div className="w-8 h-px bg-[#0085F7]"></div>
                <span className="text-[9px] font-black uppercase tracking-widest text-[#0085F7]">Evidence-Based Design</span>
              </div>
            </div>
            <button 
              onClick={onExploreProcess}
              className="px-8 py-4 md:px-10 md:py-5 bg-white text-[#1A1A1A] text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] hover:bg-[#0085F7] hover:text-white transition-all shadow-2xl shrink-0 group"
            >
              Explore Design Lifecycle
              <span className="ml-3 inline-block transform transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* UX Business Engine Grid */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-8 md:mb-12">
            <div className="accent-bar bg-[#004b23] w-16 mb-4"></div>
            <h2 className="font-black tracking-tighter mb-4 leading-[0.9] text-[#1A1A1A] text-4xl md:text-5xl capitalize">
              The UX<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0085F7] to-[#00A94B]">Business Engine</span>
            </h2>
            <p className="text-lg text-gray-500 font-normal leading-relaxed">
              We quantify experience quality to drive shareholder value. Our strategic services are designed to identify friction and maximize product-market fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            {[
              {
                title: "UX Performance Audit",
                metric: "Score: 90+",
                desc: "Heuristic evaluation and quantitative benchmarking of your existing platform to identify conversion leaks and technical debt.",
                tags: ["Accessibility", "Performance", "Heuristics"]
              },
              {
                title: "Conversion Architecture",
                metric: "Avg +18% CR",
                desc: "Data-backed restructuring of user funnels and checkout flows to minimize bounce rates and maximize transactional volume.",
                tags: ["Frictionless Pay", "Intent Mapping", "CRO"]
              },
              {
                title: "Competitive Benchmarking",
                metric: "Market Edge",
                desc: "In-depth analysis of your industry landscape to identify design gaps and opportunities for strategic differentiation.",
                tags: ["Feature Parity", "UX Differentiation", "NPS"]
              },
              {
                title: "Retention & LTV Strategy",
                metric: "+25% Retention",
                desc: "Designing engagement loops and habit-forming micro-interactions that keep users returning and increase long-term value.",
                tags: ["Engagement", "Onboarding", "Loyalty"]
              },
              {
                title: "Design Systems & Scale",
                metric: "+45% Velocity",
                desc: "Implementation of token-driven, multi-platform design systems that bridge the gap between Figma and production code.",
                tags: ["DesignOps", "Efficiency", "Atomic UI"]
              },
              {
                title: "Strategic Consulting",
                metric: "Global Impact",
                desc: "High-level advisory on design maturity and digital transformation roadmaps for Fortune 500 enterprises.",
                tags: ["Design Maturity", "Transformation", "Scale"]
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 md:p-6 group hover:bg-[#1A1A1A] transition-all duration-500 flex flex-col justify-between min-h-[200px]">
                <div>
                  <div className="text-[9px] font-black uppercase tracking-[0.4em] text-[#004b23] group-hover:text-[#0085F7] mb-3 transition-colors">
                    {item.metric}
                  </div>
                  <h3 className="text-lg font-black tracking-tight mb-2 text-[#1A1A1A] group-hover:text-white transition-colors text-3xl md:text-3xl capitalize">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-400 font-normal leading-snug mb-4 transition-colors text-[13px]">
                    {item.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 bg-gray-50 group-hover:bg-white/10 group-hover:text-white transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLUID BLOCK: Proven ROI Highlight */}
      <section className="relative w-full py-8 md:py-10 bg-[#004b23] overflow-hidden group text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1587355760421-b9de3226a046?q=80&w=2500&auto=format&fit=crop" 
            alt="Enterprise Growth and ROI Analytics" 
            className="w-full h-full object-cover grayscale opacity-40 transition-transform duration-[4000ms] group-hover:scale-110 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#00A94B]/80 to-[#1A1A1A]/95"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center">
            
            <div className="lg:col-span-4 border-l-4 border-[#C2C2C2] pl-6 md:pl-8">
              <span className="text-[9px] font-black uppercase tracking-[0.6em] text-[#C2C2C2] mb-2 block">
                Value Realization
              </span>
              <div className="ext-4xl md:text-[72px] font-black tracking-tighter leading-none mb-1 group-hover:text-[#fff] transition-colors duration-700">
                100:1
              </div>
              <h3 className="text-sm md:text-base font-black tracking-widest text-[#C2C2C2] opacity-80 text-4xl md:text-5xl capitalize">
                Gold Standard UX Return
              </h3>
            </div>
            
            <div className="lg:col-span-8 mt-4 lg:mt-0 lg:pl-6">
              <div className="accent-bar bg-white w-12 h-1 mb-4"></div>
              <h2 className="font-black tracking-tighter mb-4 leading-tight text-white text-4xl md:text-5xl capitalize">
                Proven Impact, <br className="hidden md:block" />
                Quantifiable ROI.
              </h2>
              <p className="text-base md:text-lg text-white/80 font-normal leading-relaxed mb-6 max-w-2xl">
                We transform experience maturity into shareholder value. For every $1 invested, enterprises see an average return of $100 through conversion lift and operational efficiency.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
                <div className="space-y-1">
                  <p className="text-[9px] font-black uppercase tracking-[0.4em] text-[#C2C2C2]">Success Benchmark</p>
                  <div className="text-2xl font-black">35% Reduction</div>
                  <p className="text-[12px] text-white/60 leading-relaxed font-normal">
                    In customer support volume achieved for Tier-1 partners through intuitive interface restructuring.
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-black uppercase tracking-[0.4em] text-[#C2C2C2]">Efficiency Metric</p>
                  <div className="text-2xl font-black">22% CR Lift</div>
                  <p className="text-[12px] text-white/60 leading-relaxed font-normal">
                    Average increase in transactional funnel velocity using our proprietary behavioral architecture.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Acquisition Architecture */}
      <section className="py-16 bg-[#F8F7F9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#1A1A1A] p-8 md:p-12 shadow-2xl relative overflow-hidden text-white rounded-sm">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none" 
                 style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
              <div className="lg:col-span-5">
                <div className="accent-bar bg-[#0085F7] w-20 mb-8"></div>
                <div className="text-[10px] font-black text-[#0085F7] uppercase tracking-[0.5em] mb-4">Strategic Value Proposition</div>
                <h3 className="font-black tracking-tighter mb-8 leading-[0.9] text-4xl md:text-5xl capitalize">
                  Acquisition <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] to-[#0085F7]">Architecture</span>
                </h3>
                <p className="text-lg text-gray-400 font-normal leading-relaxed mb-10">
                  UX is your most efficient growth engine. We transform legacy product complexity into fluid, acquisition-ready digital ecosystems.
                </p>
                <div className="flex gap-4 p-6 bg-white/[0.03] border-l-4 border-[#fb5b2b]">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#0085F7]">Portfolio Average</p>
                    <p className="text-xl font-black uppercase tracking-tighter">3x Conversion Lift</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Market Velocity",
                    desc: "Reducing 'Time-to-Value' by streamlining onboarding and removing friction from the user journey.",
                    icon: "M"
                  },
                  {
                    title: "Brand Equity",
                    desc: "Injecting high-fidelity aesthetics into complex data systems to build professional trust.",
                    icon: "B"
                  },
                  {
                    title: "Scalability",
                    desc: "Building atomic design systems that allow your product to pivot and add features faster.",
                    icon: "S"
                  },
                  {
                    title: "Due Diligence",
                    desc: "Documentation and interface excellence that satisfies enterprise acquisition exit strategies.",
                    icon: "D"
                  }
                ].map((item) => (
                  <div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 group/card" key={item.title}>
                    <div className="text-[11px] font-black text-white mb-4 flex items-center gap-4">
                      <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-[#0085F7] group-hover/card:border-[#0085F7] group-hover/card:text-white transition-colors">
                        {item.icon}
                      </span>
                      <span className="tracking-[0.2em] uppercase group-hover/card:text-[#0085F7] transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed font-normal group-hover/card:text-gray-300 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Experience Design (AIXD) */}
      <section className="bg-white overflow-hidden">
        <div className="py-12 md:py-16 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="accent-bar bg-[#004b23] w-16 mb-4"></div>
              <h2 className="font-black tracking-tighter mb-6 leading-[0.85] text-[#1A1A1A] text-4xl md:text-5xl capitalize">
                AI Experience<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0085F7] to-[#00A94B]">Design (AIXD)</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 font-normal leading-relaxed max-w-3xl">
                Moving from automation to augmentation. We design high-performance cognitive interfaces that bridge complex machine logic and human strategic intuition.
              </p>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="py-2 pl-4 border-l-2 border-gray-200 flex flex-col gap-1.5">
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-400">Core Objective</span>
                <p className="text-[11px] font-bold text-[#1A1A1A] leading-relaxed italic">
                  "UX-led AI integration transforms algorithms into business partners."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            
            <div className="bg-white p-6 md:p-8 group hover:bg-[#1A1A1A] transition-all duration-700">
              <div className="mb-8 flex justify-between items-start">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#004b23] group-hover:text-[#0085F7] transition-colors">Efficiency Layer</span>
                <div className="w-8 h-8 text-[11px] border border-[#004b23]/20 flex items-center justify-center text-[#004b23] group-hover:text-white transition-colors">01</div>
              </div>
              <h3 className="font-black tracking-tight mb-4 group-hover:text-white transition-colors text-3xl md:text-3xl capitalize">Conversational <br />Mastery</h3>
              <p className="text-[13px] text-gray-500 group-hover:text-gray-400 font-normal leading-relaxed mb-8 transition-colors">
                Beyond chatbots. We design LLM-driven agent frameworks that resolve complex technical and procurement flows with brand-aligned accuracy.
              </p>
              <div className="space-y-3 mb-8">
                {["Intent-Aware Routing", "Contextual Memory", "Semantic Reasoning"].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#004b23] rounded-full group-hover:bg-[#ccff33] transition-colors"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-300 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-gray-50 group-hover:border-white/10 transition-colors">
                <p className="text-[9px] font-black text-[#004b23] group-hover:text-[#0085F7] uppercase tracking-[0.2em] mb-1">Impact</p>
                <p className="text-[13px] font-bold text-[#1A1A1A] group-hover:text-white transition-colors">60% Support Deflection</p>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 group hover:bg-[#1A1A1A] transition-all duration-700">
              <div className="mb-8 flex justify-between items-start">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#004b23] group-hover:text-[#0085F7] transition-colors">Growth Layer</span>
                <div className="w-8 h-8 text-[11px] border border-[#004b23]/20 flex items-center justify-center text-[#004b23] group-hover:text-white transition-colors">02</div>
              </div>
              <h3 className="font-black tracking-tight mb-4 group-hover:text-white transition-colors text-3xl md:text-3xl capitalize">Predictive <br />Orchestration</h3>
              <p className="text-[13px] text-gray-500 group-hover:text-gray-400 font-normal leading-relaxed mb-8 transition-colors">
                Anticipating user needs before they occur. We build predictive UIs that reorganize dynamically to reduce friction and maximize funnel velocity.
              </p>
              <div className="space-y-3 mb-8">
                {["Behavioral Forecasting", "Situational Urgency", "Adaptive Micro-UI"].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#004b23] rounded-full group-hover:bg-[#ccff33] transition-colors"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-300 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-gray-50 group-hover:border-white/10 transition-colors">
                <p className="text-[9px] font-black text-[#004b23] group-hover:text-[#0085F7] uppercase tracking-[0.2em] mb-1">Impact</p>
                <p className="text-[13px] font-bold text-[#1A1A1A] group-hover:text-white transition-colors">25% LTV Increase</p>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 group hover:bg-[#1A1A1A] transition-all duration-700">
              <div className="mb-8 flex justify-between items-start">
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#004b23] group-hover:text-[#0085F7] transition-colors">Expansion Layer</span>
                <div className="w-8 h-8 text-[11px] border border-[#004b23]/20 flex items-center justify-center text-[#004b23] group-hover:text-white transition-colors">03</div>
              </div>
              <h3 className="font-black tracking-tight mb-4 group-hover:text-white transition-colors text-3xl md:text-3xl capitalize">Multimodal <br />Fluidity</h3>
              <p className="text-[13px] text-gray-500 group-hover:text-gray-400 font-normal leading-relaxed mb-8 transition-colors">
                Unlocking mission-critical efficiency with hands-free, voice, and haptic systems designed for industrial and high-stakes environments.
              </p>
              <div className="space-y-3 mb-8">
                {["Haptic Decision Cues", "Spatial Audio Feedback", "AR-First Workflows"].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#004b23] rounded-full group-hover:bg-[#ccff33] transition-colors"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-300 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-gray-50 group-hover:border-white/10 transition-colors">
                <p className="text-[9px] font-black text-[#004b23] group-hover:text-[#0085F7] uppercase tracking-[0.2em] mb-1">Impact</p>
                <p className="text-[13px] font-bold text-[#1A1A1A] group-hover:text-white transition-colors">45% Faster Execution</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ethical UX Architecture */}
      <section className="py-12 md:py-16 bg-[#1A1A1A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
            <div className="lg:col-span-5">
              <div className="accent-bar bg-[#0085F7] w-12 h-1 mb-6"></div>
              <h2 className="font-black tracking-tighter mb-6 leading-[0.85] text-4xl md:text-5xl capitalize">
                Ethical UX <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] to-[#0085F7]">Architecture</span>
              </h2>
              <p className="text-lg text-gray-400 font-normal leading-relaxed mb-10">
                Ethical design is a risk mitigation strategy. We build trust-centric systems that ensure global compliance and protect brand equity.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "User Agency", desc: "Avoiding manipulative 'dark patterns' to foster long-term loyalty." },
                  { title: "Radical Accessibility", desc: "Inclusive design that expands your total addressable market." },
                  { title: "Transparent Consent", desc: "Designing intuitive data controls that turn privacy into a competitive advantage." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group/item">
                    <div className="text-xl font-black text-[#0085F7]">0{i+1}</div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-1">{item.title}</h4>
                      <p className="text-[13px] text-gray-500 font-normal leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="p-6 md:p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden">
                  <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-[#0085F7] mb-4">Retention Focus</h4>
                  <h3 className="font-bold mb-3 tracking-tight text-4xl md:text-4xl capitalize">Digital Well-being</h3>
                  <p className="text-[13px] text-gray-500 font-normal leading-relaxed">
                    Preventing user burnout by designing for focus. Respecting cognitive limits leads to sustained engagement.
                  </p>
                </div>
                <div className="p-6 md:p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden">
                  <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-[#0085F7] mb-4">Market Compliance</h4>
                  <h3 className="font-bold mb-3 tracking-tight text-4xl md:text-4xl capitalize">Global Inclusivity</h3>
                  <p className="text-[13px] text-gray-500 font-normal leading-relaxed">
                    Meeting WCAG 2.2 and international standards to ensure enterprise applications are ready for global scale.
                  </p>
                </div>
                <div className="md:col-span-2 p-6 md:p-8 bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] border border-white/5">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                    <div className="max-w-md">
                      <h3 className="font-black tracking-tighter mb-2 text-4xl md:text-4xl capitalize">Strategic UX Audit</h3>
                      <p className="text-[13px] text-gray-500 font-normal leading-relaxed">
                        Assess your digital portfolio for friction and technical debt. Identify immediate opportunities for efficiency gains.
                      </p>
                    </div>
                    <button 
                      onClick={onRequestAudit}
                      className="px-6 py-3 border border-[#004b23] text-[9px] font-black uppercase tracking-[0.3em] text-[#0085F7] hover:bg-[#0085F7] hover:text-white transition-all whitespace-nowrap"
                    >
                      Request Audit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Cognitive Bridge (White Banner) */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden border-y border-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="accent-bar bg-[#004b23] mx-auto w-8 h-1 mb-4"></div>
            <h2 className="font-black tracking-tighter mb-4 leading-[1] text-[#1A1A1A] text-4xl md:text-5xl capitalize">
                The Cognitive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0085F7] to-[#00A94B]">Bridge</span>
            </h2>
            <p className="text-[13px] md:text-sm text-gray-500 font-normal max-w-2xl mx-auto leading-relaxed mb-8">
                Data without clarity is noise. We engineer the thin layer between complexity and understanding, turning enterprise systems into intuitive extensions of the human mind.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="p-3 md:p-4 bg-gray-50/50 rounded-sm">
                    <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-[#004b23] mb-2">01. Intuition</h4>
                    <p className="text-[11px] text-gray-500 font-normal leading-relaxed">Reducing cognitive load by aligning interface patterns with existing mental models and behaviors.</p>
                </div>
                <div className="p-3 md:p-4 bg-gray-50/50 rounded-sm">
                    <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-[#004b23] mb-2">02. Clarity</h4>
                    <p className="text-[11px] text-gray-500 font-normal leading-relaxed">Visualizing mission-critical metrics with precision, ensuring zero visual clutter in high-stakes environments.</p>
                </div>
                <div className="p-3 md:p-4 bg-gray-50/50 rounded-sm">
                    <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-[#004b23] mb-2">03. Response</h4>
                    <p className="text-[11px] text-gray-500 font-normal leading-relaxed">Engineering real-time feedback loops that empower users to act with confidence and absolute strategic velocity.</p>
                </div>
            </div>
        </div>
      </section>

      {/* The Growth Engine */}
      <section className="relative w-full py-12 md:py-16 bg-[#0A0A0A] overflow-hidden group text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2500&auto=format&fit=crop" 
            alt="Enterprise Scale Engineering" 
            className="w-full h-full object-cover grayscale opacity-20 transition-transform duration-[3000ms] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent"></div>
          
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#004b23]/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[200px] h-[200px] bg-[#ccff33]/5 rounded-full blur-[80px] animate-pulse [animation-delay:2s]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="accent-bar bg-[#79BFFA] w-12 h-1 mb-4"></div>
                <h2 className="font-black tracking-tighter mb-4 leading-[0.85] text-4xl md:text-5xl capitalize">
                  The Growth <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] to-[#0085F7]">Engine</span>
                </h2>
                <p className="text-[13px] md:text-sm text-gray-400 font-normal leading-relaxed mb-6 border-l-2 border-[#004b23] pl-4 md:pl-5">
                  Design is no longer aesthetic; it is economic. We transform complex user behaviors into precision-engineered catalysts for enterprise capital efficiency.
                </p>
              </div>
              
              <div className="relative p-6 md:p-8 bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl mt-auto">
                <div className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-2 text-[#0085F7]">
                  32%
                </div>
                <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-[#004b23] mb-2">Baseline Efficiency Gain</h4>
                <p className="text-[11px] text-gray-500 font-normal leading-relaxed">
                  Verified reduction in operational task latency achieved within the first six months of deployment.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 flex">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/10 overflow-hidden w-full">
                {[
                  { 
                    title: "OpEx Optimization", 
                    desc: "Lowering Total Cost of Ownership through autonomous, self-documenting interface logic.", 
                    icon: "M", 
                    color: "#004b23" 
                  },
                  { 
                    title: "Engineering Velocity", 
                    desc: "Tokenized design systems unifying Figma and code, resulting in 45% faster deployment cycles.", 
                    icon: "V", 
                    color: "#ccff33" 
                  },
                  { 
                    title: "Market Inclusivity", 
                    desc: "Accessibility-first architecture ensures 100% compliance, unlocking new enterprise demographics.", 
                    icon: "I", 
                    color: "#fb5b2b" 
                  },
                  { 
                    title: "LTV Maximization", 
                    desc: "Habit-forming behavioral architecture that aligns ecosystems with user mental models.", 
                    icon: "L", 
                    color: "#70e000" 
                  }
                ].map((pillar, i) => (
                  <div className="p-5 md:p-6 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-700 flex flex-col justify-between group/card min-h-[160px]" key={i}>
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="text-[#0085F7] w-8 h-8 border border-white/10 flex items-center justify-center text-[10px] font-black group-hover/card:scale-110 group-hover/card:border-[#004b23] transition-all shrink-0">
                          {pillar.icon}
                        </div>
                        <h3 className=" font-black tracking-tight group-hover/card:text-[#0085F7] transition-colors leading-none text-3xl md:text-3xl capitalize">{pillar.title}</h3>
                      </div>
                      <p className="text-[11px] text-gray-500 font-normal leading-relaxed group-hover/card:text-gray-300 transition-colors">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex flex-col lg:flex-row items-center justify-between p-4 md:p-6 bg-white/[0.03] backdrop-blur-md gap-4 border border-white/10 rounded-sm">
                <div className="max-w-3xl">
                    <p className="text-[13px] md:text-sm font-normal text-gray-400 italic leading-relaxed">
                        "UX maturity is the single greatest predictor of software acquisition exit value and enterprise scale."
                    </p>
                </div>
                <div className="flex shrink-0">
                    <button 
                        onClick={onInitiateStrategy}
                        className="px-6 py-3 bg-white text-[#1A1A1A] text-[9px] font-black uppercase tracking-[0.4em] hover:bg-[#0085F7] hover:text-white transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] group"
                    >
                        Request Business Case
                        <span className="ml-3 inline-block transform transition-transform group-hover:translate-x-2">→</span>
                    </button>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section / CTA */}
      <section className="py-10 md:py-12 bg-white border-t border-gray-100 overflow-hidden relative text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="accent-bar bg-[#004b23] mx-auto w-8 h-1 mb-5"></div>
          <h2 className="font-black tracking-tighter mb-6 leading-tight text-[#1A1A1A] text-4xl md:text-5xl capitalize">
            Design the Untold Story<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0085F7] to-[#00A94B]">of your Enterprise.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onInitiateStrategy}
              className="px-6 py-3 md:px-8 md:py-4 bg-[#0085F7] text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#339DFF] hover:text-white"
            >
              Initiate Strategy Session
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
