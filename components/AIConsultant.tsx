
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

export const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: "Welcome to Antern's Strategic Advisory. I am your AI Consultant. How can we accelerate your digital roadmap today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are a helpful and professional AI assistant for Antern Technologies. 
          Information about Antern:
          - Slogan: Bright Thinking. Intelligent Solutions.
          - Products: IAmInterviewed, SkillTest, ScanJD.
          - Services: Flexible Talent & Tech Consultants, End-to-End Project Development.
          Always be concise, professional, and focus on business transformation and enterprise-grade strategy.`
        }
      });
      
      const botText = response.text || "I'm sorry, I couldn't process that. Please try again or contact our team directly.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Connection interrupted. Please try re-engaging with our strategy engine." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-strategist" className="py-32 bg-[#F8F7F9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Left Column: Context & Branding */}
          <div className="lg:col-span-5">
            <div className="accent-bar bg-[#4918A9]"></div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-[0.9] text-[#1A1A1A]">
              Strategic AI<br />
              <span className="text-[#4918A9]">Advisory</span>
            </h2>
            <p className="text-xl text-gray-500 mb-12 max-w-md leading-relaxed font-normal">
              Engage with our cognitive intelligence engine to explore how Antern's products and strategic consulting can transform your mission-critical operations.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-[#4918A9]"></div>
                <span className="text-xs font-black uppercase tracking-widest text-[#1A1A1A]">Real-time Insights</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-[#4918A9]"></div>
                <span className="text-xs font-black uppercase tracking-widest text-[#1A1A1A]">Strategic Roadmapping</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-[#4918A9]"></div>
                <span className="text-xs font-black uppercase tracking-widest text-[#1A1A1A]">Product Deep-Dives</span>
              </div>
            </div>

            <div className="p-8 border-l-2 border-[#4918A9]/10 bg-white/50 italic text-gray-400 text-sm">
              "AI is not just a tool; it's a strategic partner in the next generation of digital excellence."
            </div>
          </div>

          {/* Right Column: Integrated Chat Interface */}
          <div className="lg:col-span-7">
            <div className="w-full h-[600px] bg-[#1A1A1A] rounded-2xl flex flex-col shadow-[0_32px_64px_-16px_rgba(73,24,169,0.2)] overflow-hidden border border-white/5">
              
              {/* Terminal Header */}
              <div className="p-6 bg-white/5 border-b border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5252]/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFB74D]/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4918A9]"></div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 ml-4">Cognitive Interface v3.1</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[9px] font-bold text-green-500/80 uppercase tracking-widest">Active</span>
                </div>
              </div>
              
              {/* Chat Canvas */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 scrollbar-hide">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-5 rounded-xl text-[14px] leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-[#4918A9] text-white rounded-tr-none shadow-xl shadow-[#4918A9]/10' 
                        : 'bg-white/5 border border-white/10 text-gray-300 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex gap-2">
                      <div className="w-1.5 h-1.5 bg-[#4918A9] rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-[#4918A9] rounded-full animate-bounce [animation-delay:-0.1s]"></div>
                      <div className="w-1.5 h-1.5 bg-[#4918A9] rounded-full animate-bounce [animation-delay:-0.2s]"></div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Input Terminal */}
              <div className="p-6 bg-white/5 border-t border-white/10">
                <div className="relative">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Inquire about enterprise solutions..."
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl py-4 px-6 pr-16 text-sm focus:outline-none focus:border-[#4918A9] text-white placeholder:text-white/40 transition-all"
                  />
                  <button 
                    onClick={handleSend}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[#4918A9] text-white rounded-lg hover:bg-[#D9D1DB] hover:text-[#4918A9] transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
                <p className="mt-4 text-[9px] text-white/20 text-center uppercase tracking-widest font-medium">
                  Secure Strategic Session &bull; Powered by Gemini 3 Pro
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
