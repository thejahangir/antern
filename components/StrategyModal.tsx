
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface StrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
  context: 'strategy' | 'audit';
}

export const StrategyModal: React.FC<StrategyModalProps> = ({ isOpen, onClose, context }) => {
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const initialBotMessage = context === 'audit' 
        ? "Welcome to Antern's Quality Assurance Division. I am your Audit Specialist. Would you like to evaluate your current platform's UX performance, security architecture, or accessibility standards?"
        : "Welcome to Antern's Strategic Advisory. I am your AI Consultant. How can we accelerate your digital roadmap today?";
      
      setMessages([{ role: 'bot', text: initialBotMessage }]);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, context]);

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
      // Defensive check for process environment to avoid runtime crashes in browser
      const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : undefined;
      
      if (!apiKey) {
        throw new Error("API Key configuration missing or inaccessible");
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are a professional Strategic Consultant at Antern Technologies. 
          Your goal is to help potential clients understand how Antern's AIXD, Cloud-Smart Modernization, and UX Audit services can drive business value.
          Context: The user is currently in a ${context === 'audit' ? 'UX/Technical Audit' : 'Strategy Session'} phase.
          Tone: Professional, forward-thinking, concise, and enterprise-grade.
          Focus on ROI, scalability, and modern digital ecosystems.`
        }
      });
      
      const botText = response.text || "I'm sorry, I couldn't process that. Please contact our human specialists at contact@antern.com.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Secure connection interrupted. Please try re-engaging or reach out directly to our team." }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#1A1A1A]/95 backdrop-blur-xl transition-opacity animate-in fade-in duration-500"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl h-[85vh] bg-[#1A1A1A] border border-white/10 shadow-[0_64px_128px_-32px_rgba(73,24,169,0.4)] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-white/10 flex justify-between items-center bg-white/5">
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5252]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFB74D]"></div>
              <div className="w-3 h-3 rounded-full bg-[#4918A9]"></div>
            </div>
            <div>
              <h2 className="text-[12px] font-black uppercase tracking-[0.5em] text-[#D9D1DB]">
                {context === 'audit' ? 'Secure Audit Portal' : 'Strategic Advisory Engine'}
              </h2>
              <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1">
                Connected to Cognitive Interface v3.2
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center border border-white/10 text-white hover:bg-white hover:text-[#1A1A1A] transition-all group"
          >
            <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat History */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 md:p-12 space-y-8 scrollbar-hide">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-4 duration-500`}>
              <div className={`max-w-[80%] md:max-w-[65%] p-6 md:p-8 rounded-sm text-[15px] md:text-lg leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-[#4918A9] text-white shadow-2xl' 
                  : 'bg-white/5 border border-white/10 text-gray-300'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/5 border border-white/10 p-6 rounded-sm flex gap-3">
                <div className="w-2 h-2 bg-[#4918A9] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#4918A9] rounded-full animate-bounce [animation-delay:-0.1s]"></div>
                <div className="w-2 h-2 bg-[#4918A9] rounded-full animate-bounce [animation-delay:-0.2s]"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-8 md:p-12 bg-white/5 border-t border-white/10">
          <div className="relative max-w-4xl mx-auto">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={context === 'audit' ? "Describe your platform or target metrics..." : "How can we assist your digital roadmap?"}
              className="w-full bg-transparent border-b-2 border-white/10 py-6 px-0 text-xl focus:outline-none focus:border-[#4918A9] text-white placeholder:text-white/40 transition-all font-normal"
              autoFocus
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-0 top-1/2 -translate-y-1/2 group flex items-center gap-4 text-[12px] font-black uppercase tracking-[0.4em] text-[#D9D1DB] disabled:opacity-30"
            >
              Process
              <div className="w-8 h-px bg-[#D9D1DB] group-hover:w-16 transition-all" />
            </button>
          </div>
          <div className="mt-8 flex justify-center gap-8 text-[9px] font-black text-white/10 uppercase tracking-[0.5em]">
            <span>End-to-End Encryption</span>
            <span>&bull;</span>
            <span>AI Sovereignty Guaranteed</span>
          </div>
        </div>
      </div>
    </div>
  );
};
