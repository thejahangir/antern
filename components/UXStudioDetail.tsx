
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
      <section className="relative h-[90vh] min-h-[700px] flex items-center bg-[#1A1A1A] text-white overflow-hidden">
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
            <div className="accent-bar bg-gradient-to-r from-[#ccff33] to-[#70e000] w-32 h-1.5 mb-12"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#ccff33] mb-6 block">
              Experience Systems & Design
            </span>
            <h1 className="text-5xl md:ext-5xl lg:text-5xl font-black tracking-tighter leading-[0.85] mb-6">
              UX <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">Studio.</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-light text-[#ccff33]/90 mb-12 tracking-tight italic leading-tight">
              Designing systems that think before users do.
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl border-l border-[#70e000] pl-8">
              Antern UX Studio bridges the gap between complex enterprise logic and human behavior. 
              We transform high-density data into frictionless, intuitive cognitive pathways—engineering the invisible layer of instinct.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Banner */}
      <section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none hidden lg:block">
          <span className="text-[200px] font-black uppercase text-[#1A1A1A] leading-none tracking-tighter">
            IMPACT
          </span>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8">
              <div className="accent-bar bg-[#004b23] w-12 mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#1A1A1A] leading-[0.95]">
                Architecture for <br />
                <span className="text-[#004b23]">Human Potential.</span>
              </h2>
              <p className="mt-8 text-xl text-gray-500 font-light max-w-2xl leading-relaxed">
                We don't just design interfaces; we architect digital behaviors. Our studio combines rigorous cognitive science with aesthetic precision to deliver measurable business growth and unparalleled user clarity.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-10 lg:border-l lg:border-gray-100 lg:pl-16">
              <div className="group">
                <div className="text-5xl font-black text-[#1A1A1A] group-hover:text-[#70e000] transition-colors">40%</div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mt-2">Cognitive Load Reduction</div>
              </div>
              <div className="group">
                <div className="text-5xl font-black text-[#1A1A1A] group-hover:text-[#70e000] transition-colors">95%</div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mt-2">Task Completion Velocity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Research Strategic Banner */}
      <section className="py-32 bg-[#1A1A1A] text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop" 
            alt="Design Research Workshop" 
            className="w-full h-full object-cover opacity-50 grayscale transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004b23]/90 to-[#1A1A1A]/70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ccff33] mb-4 block">Strategic Capability</span>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-tighter mb-6 leading-tight">
                Deep User Research & <br />Design Methodology
              </h2>
              <p className="text-xl text-white/80 font-light leading-relaxed mb-8">
                Discover how we combine empathy-driven discovery with algorithmic analysis to build the world's most intuitive enterprise interfaces.
              </p>
              <div className="flex gap-4 items-center">
                <div className="w-8 h-px bg-[#ccff33]"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#ccff33]">Evidence-Based Design</span>
              </div>
            </div>
            <button 
              onClick={onExploreProcess}
              className="px-12 py-6 bg-white text-[#1A1A1A] text-[12px] font-black uppercase tracking-[0.4em] hover:bg-[#ccff33] transition-all shadow-2xl shrink-0 group"
            >
              Explore Design Lifecycle
              <span className="ml-4 inline-block transform transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* UX Business Engine Grid */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <div className="accent-bar bg-[#004b23] w-24"></div>
            <h2 className="text-5xl md:ext-5xl font-black uppercase tracking-tighter mb-10 leading-[0.85] text-[#1A1A1A]">
              The UX<br />
              <span className="text-[#004b23]">Business Engine</span>
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
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
              <div key={i} className="bg-white p-10 group hover:bg-[#1A1A1A] transition-all duration-500 flex flex-col justify-between min-h-[420px]">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#004b23] group-hover:text-[#ccff33] mb-8 transition-colors">
                    {item.metric}
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-6 text-[#1A1A1A] group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-400 font-light leading-relaxed mb-10 transition-colors text-sm">
                    {item.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-9px font-bold uppercase tracking-widest px-3 py-1 bg-gray-50 group-hover:bg-white/10 group-hover:text-white transition-all">
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
      <section className="relative w-full py-32 md:py-48 bg-[#004b23] overflow-hidden group text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bbda4833878d?q=80&w=2500&auto=format&fit=crop" 
            alt="Enterprise Growth and ROI Analytics" 
            className="w-full h-full object-cover grayscale opacity-40 transition-transform duration-[4000ms] group-hover:scale-110 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004b23] via-[#004b23]/80 to-[#1A1A1A]/95"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
            
            <div className="lg:col-span-5 border-l-8 border-[#ccff33] pl-10 md:pl-16">
              <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#ccff33] mb-6 block">
                Enterprise Value Realization
              </span>
              <div className="ext-5xl md:text-[140px] font-black tracking-tighter leading-none mb-4 group-hover:text-[#ccff33] transition-colors duration-700">
                100:1
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-widest text-[#ccff33] opacity-80">
                The Gold Standard <br /> of UX Return
              </h3>
            </div>
            
            <div className="lg:col-span-7">
              <div className="accent-bar bg-white w-20 mb-10"></div>
              <h2 className="text-4xl md:ext-5xl font-black uppercase tracking-tighter mb-10 leading-[0.9] text-white">
                Proven <span className="text-[#ccff33]">Impact</span>, <br />
                Quantifiable <span className="text-[#ccff33]">ROI</span>.
              </h2>
              <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed mb-12 max-w-2xl">
                We transform experience maturity into shareholder value. For every $1 invested in Antern's strategic design lifecycle, enterprises see an average return of $100 through conversion lift and operational efficiency.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 pt-12 border-t border-white/10">
                <div className="space-y-4">
                  <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[#ccff33]">Success Benchmark</p>
                  <div className="text-4xl font-black">35% Reduction</div>
                  <p className="text-sm text-white/60 leading-relaxed font-light">
                    In customer support volume achieved for Tier-1 partners through intuitive interface restructuring.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-[11px] font-black uppercase tracking-[0.4em] text-[#ccff33]">Efficiency Metric</p>
                  <div className="text-4xl font-black">22% CR Lift</div>
                  <p className="text-sm text-white/60 leading-relaxed font-light">
                    Average increase in transactional funnel velocity using our proprietary behavioral architecture.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Acquisition Architecture */}
      <section className="py-32 bg-[#F8F7F9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#1A1A1A] p-12 md:p-20 shadow-2xl relative overflow-hidden text-white rounded-sm">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none" 
                 style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
              <div className="lg:col-span-5">
                <div className="accent-bar bg-[#ccff33] w-20 mb-8"></div>
                <div className="text-[10px] font-black text-[#ccff33] uppercase tracking-[0.5em] mb-4">Strategic Value Proposition</div>
                <h3 className="text-4xl md:ext-5xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                  Acquisition <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff] via-[#70e000] to-[#ccff33]">Architecture</span>
                </h3>
                <p className="text-lg text-gray-400 font-light leading-relaxed mb-10">
                  UX is your most efficient growth engine. We transform legacy product complexity into fluid, acquisition-ready digital ecosystems.
                </p>
                <div className="flex gap-4 p-6 bg-white/[0.03] border-l-4 border-[#fb5b2b]">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#ccff33]">Portfolio Average</p>
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
                    icon: "E"
                  },
                  {
                    title: "Scalability",
                    desc: "Building atomic design systems that allow your product to pivot and add features faster.",
                    icon: "S"
                  },
                  {
                    title: "Due Diligence",
                    desc: "Documentation and interface excellence that satisfies enterprise acquisition exit strategies.",
                    icon: "A"
                  }
                ].map((item) => (
                  <div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 group/card" key={item.title}>
                    <div className="text-[11px] font-black text-white mb-4 flex items-center gap-4">
                      <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-[#ccff33] group-hover/card:border-[#fb5b2b] group-hover/card:text-white transition-colors">
                        {item.icon}
                      </span>
                      <span className="tracking-[0.2em] uppercase group-hover/card:text-[#ccff33] transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed font-light group-hover/card:text-gray-300 transition-colors">
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
        <div className="py-32 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="accent-bar bg-[#004b23] w-24"></div>
              <h2 className="text-5xl md:ext-5xl lg:ext-5xl font-black uppercase tracking-tighter mb-10 leading-[0.85] text-[#1A1A1A]">
                AI Experience<br />
                <span className="text-[#004b23]">Design (AIXD)</span>
              </h2>
              <p className="text-2xl text-gray-500 font-light leading-relaxed max-w-3xl">
                Moving from automation to augmentation. We design high-performance cognitive interfaces that bridge complex machine logic and human strategic intuition.
              </p>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="p-8 border-l border-gray-100 flex flex-col gap-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Core Objective</span>
                <p className="text-sm font-bold text-[#1A1A1A] leading-relaxed italic">
                  "UX-led AI integration transforms cold algorithms into active business partners."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
            
            <div className="bg-white p-12 group hover:bg-[#1A1A1A] transition-all duration-700">
              <div className="mb-10 flex justify-between items-start">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#004b23] group-hover:text-[#ccff33] transition-colors">Efficiency Layer</span>
                <div className="w-10 h-10 border border-[#004b23]/20 flex items-center justify-center text-[#004b23] group-hover:text-white transition-colors">01</div>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-6 group-hover:text-white transition-colors">Conversational <br />Mastery</h3>
              <p className="text-gray-500 group-hover:text-gray-400 font-light leading-relaxed mb-12 transition-colors">
                Beyond chatbots. We design LLM-driven agent frameworks that resolve complex technical and procurement flows with brand-aligned accuracy.
              </p>
              <div className="space-y-4 mb-12">
                {["Intent-Aware Routing", "Contextual Memory", "Semantic Reasoning"].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-[#004b23] rounded-full group-hover:bg-[#ccff33] transition-colors"></div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-300 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-gray-50 group-hover:border-white/10 transition-colors">
                <p className="text-[10px] font-black text-[#004b23] group-hover:text-[#ccff33] uppercase tracking-[0.2em] mb-1">Impact</p>
                <p className="text-sm font-bold text-[#1A1A1A] group-hover:text-white transition-colors">60% Support Deflection</p>
              </div>
            </div>

            <div className="bg-white p-12 group hover:bg-[#1A1A1A] transition-all duration-700">
              <div className="mb-10 flex justify-between items-start">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#004b23] group-hover:text-[#ccff33] transition-colors">Growth Layer</span>
                <div className="w-10 h-10 border border-[#004b23]/20 flex items-center justify-center text-[#004b23] group-hover:text-white transition-colors">02</div>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-6 group-hover:text-white transition-colors">Predictive <br />Orchestration</h3>
              <p className="text-gray-500 group-hover:text-gray-400 font-light leading-relaxed mb-12 transition-colors">
                Anticipating user needs before they occur. We build predictive UIs that reorganize dynamically to reduce friction and maximize funnel velocity.
              </p>
              <div className="space-y-4 mb-12">
                {["Behavioral Forecasting", "Situational Urgency", "Adaptive Micro-UI"].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-[#004b23] rounded-full group-hover:bg-[#ccff33] transition-colors"></div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-300 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-gray-50 group-hover:border-white/10 transition-colors">
                <p className="text-[10px] font-black text-[#004b23] group-hover:text-[#ccff33] uppercase tracking-[0.2em] mb-1">Impact</p>
                <p className="text-sm font-bold text-[#1A1A1A] group-hover:text-white transition-colors">25% LTV Increase</p>
              </div>
            </div>

            <div className="bg-white p-12 group hover:bg-[#1A1A1A] transition-all duration-700">
              <div className="mb-10 flex justify-between items-start">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#004b23] group-hover:text-[#ccff33] transition-colors">Expansion Layer</span>
                <div className="w-10 h-10 border border-[#004b23]/20 flex items-center justify-center text-[#004b23] group-hover:text-white transition-colors">03</div>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tight mb-6 group-hover:text-white transition-colors">Multimodal <br />Fluidity</h3>
              <p className="text-gray-500 group-hover:text-gray-400 font-light leading-relaxed mb-12 transition-colors">
                Unlocking mission-critical efficiency with hands-free, voice, and haptic systems designed for industrial and high-stakes environments.
              </p>
              <div className="space-y-4 mb-12">
                {["Haptic Decision Cues", "Spatial Audio Feedback", "AR-First Workflows"].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-[#004b23] rounded-full group-hover:bg-[#ccff33] transition-colors"></div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-300 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-gray-50 group-hover:border-white/10 transition-colors">
                <p className="text-[10px] font-black text-[#004b23] group-hover:text-[#ccff33] uppercase tracking-[0.2em] mb-1">Impact</p>
                <p className="text-sm font-bold text-[#1A1A1A] group-hover:text-white transition-colors">Enhanced Industrial TAM</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ethical UX Architecture */}
      <section className="py-48 bg-[#1A1A1A] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <div className="accent-bar bg-[#ccff33] w-20 mb-10"></div>
              <h2 className="text-5xl md:ext-5xl font-black uppercase tracking-tighter mb-10 leading-[0.85]">
                Ethical UX <br />
                <span className="text-[#ccff33]">Architecture</span>
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-16">
                Ethical design is a risk mitigation strategy. We build trust-centric systems that ensure global compliance and protect brand equity.
              </p>
              
              <div className="space-y-10">
                {[
                  { title: "User Agency", desc: "Avoiding manipulative 'dark patterns' to foster long-term loyalty." },
                  { title: "Radical Accessibility", desc: "Inclusive design that expands your total addressable market." },
                  { title: "Transparent Consent", desc: "Designing intuitive data controls that turn privacy into a competitive advantage." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group/item">
                    <div className="text-2xl font-black text-[#ccff33]">0{i+1}</div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="p-12 border border-white/5 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ccff33] mb-6">Retention Focus</h4>
                  <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Digital Well-being</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    Preventing user burnout by designing for focus. Respecting cognitive limits leads to sustained engagement.
                  </p>
                </div>
                <div className="p-12 border border-white/5 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ccff33] mb-6">Market Compliance</h4>
                  <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Global Inclusivity</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    Meeting WCAG 2.2 and international standards to ensure enterprise applications are ready for global scale.
                  </p>
                </div>
                <div className="md:col-span-2 p-12 bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] border border-white/5">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-md">
                      <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Strategic UX Audit</h3>
                      <p className="text-sm text-gray-500 font-light leading-relaxed">
                        Assess your digital portfolio for friction and technical debt. Identify immediate opportunities for efficiency gains.
                      </p>
                    </div>
                    <button 
                      onClick={onRequestAudit}
                      className="px-8 py-4 border border-[#004b23] text-[10px] font-black uppercase tracking-[0.3em] text-[#ccff33] hover:bg-[#004b23] hover:text-white transition-all whitespace-nowrap"
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
      <section className="py-32 bg-white relative overflow-hidden border-y border-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="accent-bar bg-[#004b23] mx-auto w-16 mb-12"></div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 leading-[1] text-[#1A1A1A]">
                The Cognitive <span className="text-[#004b23]">Bridge</span>
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed mb-20">
                Data without clarity is noise. We engineer the thin layer between complexity and understanding, turning enterprise systems into intuitive extensions of the human mind.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="p-8">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#004b23] mb-4">01. Intuition</h4>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">Reducing cognitive load by aligning interface patterns with existing mental models and learned behaviors.</p>
                </div>
                <div className="p-8 md:border-x border-gray-100">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#004b23] mb-4">02. Clarity</h4>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">Visualizing mission-critical metrics with absolute precision, ensuring zero visual clutter in high-stakes environments.</p>
                </div>
                <div className="p-8">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#004b23] mb-4">03. Response</h4>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">Engineering real-time feedback loops that empower users to act with confidence and absolute strategic velocity.</p>
                </div>
            </div>
        </div>
      </section>

      {/* The Growth Engine */}
      <section className="relative w-full py-48 bg-[#0A0A0A] overflow-hidden group text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2500&auto=format&fit=crop" 
            alt="Enterprise Scale Engineering" 
            className="w-full h-full object-cover grayscale opacity-20 transition-transform duration-[3000ms] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent"></div>
          
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#004b23]/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#ccff33]/5 rounded-full blur-[100px] animate-pulse [animation-delay:2s]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            
            <div className="lg:col-span-5">
              <div className="accent-bar bg-gradient-to-r from-[#004b23] to-[#ccff33] w-32 mb-12"></div>
              <h2 className="text-5xl md:ext-5xl font-black uppercase tracking-tighter mb-10 leading-[0.85]">
                The Growth <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Engine</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-16 border-l-4 border-[#004b23] pl-10">
                Design is no longer aesthetic; it is economic. We transform complex user behaviors into precision-engineered catalysts for enterprise capital efficiency.
              </p>
              
              <div className="relative p-12 bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl">
                <div className="ext-5xl md:text-[120px] font-black tracking-tighter leading-none mb-4 text-[#ccff33]">
                  32%
                </div>
                <h4 className="text-xs font-black uppercase tracking-[0.5em] text-[#004b23] mb-4">Baseline Efficiency Gain</h4>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  Verified reduction in operational task latency achieved within the first six months of deployment.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/10 overflow-hidden">
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
                  <div className="p-10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-700 flex flex-col justify-between group/card min-h-[340px]" key={i}>
                    <div>
                      <div className="w-14 h-14 border border-white/10 flex items-center justify-center text-xl font-black mb-8 group-hover/card:scale-110 group-hover/card:border-[#004b23] transition-all" style={{ color: pillar.color }}>
                        {pillar.icon}
                      </div>
                      <h3 className="text-xl font-black uppercase tracking-tight mb-4 group-hover/card:text-[#ccff33] transition-colors">{pillar.title}</h3>
                      <p className="text-sm text-gray-500 font-light leading-relaxed group-hover/card:text-gray-300 transition-colors">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-24 pt-16 border-t border-white/10">
            <div className="flex flex-col lg:flex-row items-center justify-between p-12 bg-white/[0.03] backdrop-blur-md gap-12 border border-white/10 rounded-sm">
                <div className="max-w-2xl">
                    <p className="text-xl md:text-2xl font-light text-gray-400 italic leading-relaxed">
                        "UX maturity is the single greatest predictor of software acquisition exit value and enterprise scale."
                    </p>
                </div>
                <div className="flex shrink-0">
                    <button 
                        onClick={onInitiateStrategy}
                        className="px-12 py-6 bg-white text-[#1A1A1A] text-[12px] font-black uppercase tracking-[0.4em] hover:bg-[#004b23] hover:text-white transition-all shadow-[0_20px_40px_rgba(255,255,255,0.1)] group"
                    >
                        Request Business Case
                        <span className="ml-4 inline-block transform transition-transform group-hover:translate-x-2">→</span>
                    </button>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section / CTA */}
      <section className="py-32 bg-white border-t border-gray-100 overflow-hidden relative text-center">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="accent-bar bg-[#004b23] mx-auto w-16 mb-12"></div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-10 leading-tight text-[#1A1A1A]">
            Design the <span className="text-[#004b23]">Untold</span> Story<br /> of your Enterprise.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={onInitiateStrategy}
              className="px-12 py-5 bg-[#004b23] text-white text-[12px] font-black uppercase tracking-[0.4em] hover:bg-[#70e000] hover:text-[#004b23] transition-all"
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
