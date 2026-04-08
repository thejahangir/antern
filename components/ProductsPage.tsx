import React, { useState, useEffect } from "react";
import LogoIaminterViewed from "../src/assets/img/product/Logo-IAmInterviewed.png";
import LogoSkillTest from "../src/assets/img/product/Logo-Skilltest.png";
import LogoDelOrg from "../src/assets/img/product/Logo-DO.png";
import LogoScanJD from "../src/assets/img/product/Logo-ScanJD.png";

interface ProductsPageProps {
  onNavigateTo: (page: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigateTo }) => {
  const [offsetY, setOffsetY] = useState(0);

  const [displayTestimonials, setDisplayTestimonials] = useState<any[]>([]);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Shuffle testimonials on mount
    const shuffled = [...productTestimonialsPool].sort(
      () => 0.5 - Math.random(),
    );
    setDisplayTestimonials(shuffled);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const products = [
    {
      id: "01",
      name: "IamInterviewed",
      tagline: "Technical Interviews",
      description: (
        <>
          <p>
            IamInterviewed is an Interview-as-a-Service (IaaS) platform built to
            scale technical hiring through expert-led evaluations. It enables
            real-time interviews conducted by experienced professionals using
            structured frameworks to ensure consistency and quality.
          </p>
          <br />
          <p>
            The platform supports both technical and behavioral assessments,
            with standardized scoring models that help reduce bias and improve
            decision-making. Detailed feedback reports, interview recordings,
            and transcripts provide complete visibility into candidate
            performance.
          </p>
          <br />
          <p>
            Designed for high-volume hiring, IamInterviewed allows parallel
            interview execution, reduces dependency on internal engineering
            teams, and significantly speeds up turnaround times. The result is a
            more efficient, transparent, and data-driven hiring process that
            improves overall quality of hire.
          </p>
        </>
      ),
      features: [
        "Sentiment Analysis",
        "Asynchronous Screening",
        "Bias Reduction",
      ],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
      logo: [LogoIaminterViewed],
      link: "https://iaminterviewed.com/",
      logoClass: "logo-one",
    },
    {
      id: "02",
      name: "MySkillTest",
      tagline: "Adaptive Evaluation",
      description: (
        <>
          <p>
            SkillTest is a scalable assessment platform designed to deliver
            structured, data-driven candidate evaluations across technical,
            aptitude, and role-specific skills. It allows organizations to
            create customized assessment frameworks aligned to job requirements
            while automating test execution, scoring, and evaluation workflows.
          </p>

          <br />
          <p>
            The platform supports large-scale hiring, including campus and
            lateral recruitment, ensuring consistent and unbiased assessments.
            With integrated coding tests, objective assessments, and
            domain-specific modules, SkillTest provides real-time insights into
            candidate performance.
          </p>
          <br />
          <p>
            By reducing manual screening effort and accelerating shortlisting,
            SkillTest helps improve both hiring efficiency and decision
            accuracy.
          </p>
        </>
      ),
      features: ["50+ Languages", "Anti-Cheat Proctoring", "Code Playback"],
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200",
      logo: [LogoSkillTest],
      link: "https://myskilltest.com/",
      logoClass: "logo-two",
    },
    {
      id: "03",
      name: "ScanJD",
      tagline: "Semantic Parsing",
      description: (
        <>
          <p>
            Scan JD is an AI-powered resume parsing and intelligent matching
            engine that goes beyond traditional keyword-based filtering. Using
            semantic intelligence, it understands context, career progression,
            and inferred skills to deliver accurate candidate-to-job matching.
          </p>
          <br />
          <p>
            The platform processes large volumes of resumes, extracting
            structured data and converting unstructured information into a
            standardized, searchable format. With advanced JD-to-profile
            matching, it generates precise fitment scores that support faster
            and more effective shortlisting.
          </p>
          <br />
          <p>
            By improving the quality of matching and reducing manual effort,
            Scan JD enhances recruiter productivity, enables better talent
            discovery, and accelerates hiring decisions at scale.
          </p>
        </>
      ),
      features: ["Contextual Matching", "Gap Analysis", "Instant Ranking"],
      image:
        "https://images.unsplash.com/photo-1705544363568-425eabe4de51?q=80&w=1200",
      logo: [LogoScanJD],
      link: "#",
      logoClass: "logo-three",
    },
    {
      id: "04",
      name: "DelOrg360",
      tagline: "Project Portfolio Management",
      description: (
        <>
          <p>
            DelOrg360 is an enterprise-grade delivery and project portfolio
            management platform that provides clear visibility into projects,
            resources, and performance. It enables real-time tracking of
            delivery progress, supports efficient resource allocation, and helps
            optimize utilization across teams.
          </p>
          <br />
          <p>
            Designed for multi-project environments, the platform enables
            portfolio-level governance and data-driven decision-making through
            actionable insights. It integrates seamlessly with existing
            enterprise systems, improving collaboration across distributed
            teams.
          </p>
          <br />
          <p>
            By bringing greater control, transparency, and accountability to
            delivery, DelOrg360 helps organizations improve execution and
            achieve more predictable outcomes.
          </p>
        </>
      ),
      features: [
        "Resource Optimization",
        "Delivery Tracking",
        "Strategic Alignment",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      logo: [LogoDelOrg],
      link: "https://delorg360.com/",
      logoClass: "logo-four",
    },
  ];

  const handleKnowMore = (link: string, name: string) => {
    if (name === "ScanJD") {
      onNavigateTo("scanning-resume");
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const productTestimonialsPool = [
    {
      quote:
        "Antern's specialized products didn't just solve our technical gaps; they redefined our entire delivery velocity.",
      author: "Jonathan Vane",
      role: "Technical Director, Quantum Labs",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    },
    {
      quote:
        "The SkillTest platform revolutionized our hiring process. We've seen a 40% increase in candidate quality.",
      author: "Marcus Thorne",
      role: "VP of Engineering, FinTech Alpha",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    },
    {
      quote:
        "Strategic approach to mission-critical systems saved us months of development time.",
      author: "Sarah Chen",
      role: "CTO, Global Logistics Corp",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    },
    {
      quote:
        "The integration support was world-class. Antern is a true partner in our digital journey.",
      author: "Liam O'Connell",
      role: "CTO, CloudStream",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200",
    },
    {
      quote:
        "Their AI-driven screening saved us hundreds of manual hours. A game-changer for our team.",
      author: "Priya Sharma",
      role: "Head of Talent, TechNext",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200",
    },
    {
      quote:
        "Precision, scale, and speed. Antern delivers exactly what modern enterprises need.",
      author: "Alex Volkov",
      role: "Director of Ops, BuildWise",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    },
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-[#0085F7] selection:text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-[#0A0A0A] overflow-hidden">
        <div
          className="absolute -inset-y-24 inset-x-0 z-0 opacity-50 grayscale"
          style={{ transform: `translate3d(0, ${offsetY * 0.15}px, 0)` }}
        >
          <img
            src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=2000"
            className="w-full h-full object-cover"
            alt="Antern Products"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/50 to-transparent"></div>
          {/* Tech Grid Overlay */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="accent-bar bg-[#0085F7] w-24 h-1.5 mb-10"></div>
            <span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#0085F7] mb-6 block">
              Innovation Suite
            </span>
            <h1 className="text-5xl md:ext-5xl lg:text-5xl font-black text-white tracking-tighter leading-[0.85] mb-8">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff]  to-[#0085F7]">
                Products
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-normal max-w-2xl leading-relaxed border-l border-[#004b23] pl-10">
              Platforms built to streamline hiring and delivery. Combining AI, structured workflows, and real-time insights to drive better decisions at scale.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTS LIST */}
      <section className="py-16 bg-[#F8F7F9] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {products.map((product, idx) => (
              <React.Fragment key={product.id}>
                <div
                  id={product.name.toLowerCase()}
                  className="block lg:flow-root group"
                >
                  <div
                    className={`w-full lg:w-1/2 relative mb-10 ${idx % 2 === 1 ? "lg:float-right lg:ml-16" : "lg:float-left lg:mr-16"}`}
                  >
                    <div className="aspect-video bg-gray-200 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                      <img
                        src={product.image}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[2000ms]"
                        alt={product.name}
                      />
                    </div>
                    {/* Floating Number */}
                    <div className="absolute -top-10 -left-10 text-[120px] font-black text-white drop-shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 select-none pointer-events-none">
                      {product.id}
                    </div>
                  </div>

                  <div className="w-full">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#0085F7] mb-4 block">
                      {product.tagline}
                    </span>
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={product.logo}
                        alt={`${product.name} logo`}
                        className={`${product.logoClass}`}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-lg text-gray-500 font-light leading-relaxed mb-10">
                      {product.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                      {product.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-[#00A94B]"></div>
                          <span className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => handleKnowMore(product.link, product.name)}
                      className="px-8 py-4 bg-[#0085F7] text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#339DFF] transition-all"
                    >
                      Know More
                    </button>
                  </div>
                </div>

                {/* TESTIMONIAL DIVIDER */}
                {idx < products.length - 1 && (
                  <div className="w-screen relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] py-12 border-y border-gray-200 bg-[#ECECEC] my-8 overflow-hidden">
                    {/* Subtle Pattern */}
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                      <svg width="100%" height="100%">
                        <pattern
                          id={`pattern-quote-${idx}`}
                          x="0"
                          y="0"
                          width="40"
                          height="40"
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            width="40"
                            height="40"
                            fill="none"
                            stroke="#000"
                            strokeWidth="0.5"
                          />
                        </pattern>
                        <rect
                          width="100%"
                          height="100%"
                          fill={`url(#pattern-quote-${idx})`}
                        />
                      </svg>
                    </div>

                    <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                      <div className="flex justify-center mb-6">
                        <div className="w-10 h-1 bg-[#0085F7]/40"></div>
                      </div>

                      <blockquote className="text-base md:text-lg font-medium text-[#333] italic leading-relaxed mb-8 max-w-3xl mx-auto">
                        "
                        {displayTestimonials[idx]?.quote ||
                          productTestimonialsPool[
                            idx % productTestimonialsPool.length
                          ].quote}
                        "
                      </blockquote>

                      <div className="flex flex-col items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-300 border border-gray-200 overflow-hidden grayscale">
                          <img
                            src={
                              displayTestimonials[idx]?.avatar ||
                              productTestimonialsPool[
                                idx % productTestimonialsPool.length
                              ].avatar
                            }
                            alt={
                              displayTestimonials[idx]?.author ||
                              productTestimonialsPool[
                                idx % productTestimonialsPool.length
                              ].author
                            }
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-[#1A1A1A] font-black uppercase tracking-widest text-[10px]">
                            {displayTestimonials[idx]?.author ||
                              productTestimonialsPool[
                                idx % productTestimonialsPool.length
                              ].author}
                          </h4>
                          <p className="text-[#0085F7] text-[9px] font-bold uppercase tracking-widest mt-0.5">
                            {displayTestimonials[idx]?.role ||
                              productTestimonialsPool[
                                idx % productTestimonialsPool.length
                              ].role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
