import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  type: 'bot' | 'user';
  text: string;
  cta?: { label: string; to: string };
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', type: 'bot', text: 'Hi! I’m the Worklabs Discovery Agent. Are you looking to automate your business operations?' }
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const discoverySteps = [
    "What type of business do you run? (Agency, E-com, SaaS, etc.)",
    "How many employees are in your team?",
    "What is your #1 manual bottleneck right now?",
    "Got it. Would you like to see a custom automation roadmap for your business?"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), type: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulated bot response logic (state machine)
    setTimeout(() => {
      if (step < discoverySteps.length) {
        const botMsg: Message = { 
          id: (Date.now() + 1).toString(), 
          type: 'bot', 
          text: discoverySteps[step] 
        };
        
        if (step === discoverySteps.length - 1) {
          botMsg.cta = { label: 'Book Consultation', to: '/book' };
        }
        
        setMessages(prev => [...prev, botMsg]);
        setStep(prev => prev + 1);
      } else {
        setMessages(prev => [...prev, { 
          id: (Date.now() + 1).toString(), 
          type: 'bot', 
          text: "I've passed your details to our architects. They'll be ready for your consultation!" 
        }]);
      }
    }, 800);
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', damping: 15 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all z-50 ${
          isOpen ? 'bg-dark-panel border border-white/5 rotate-90' : 'bg-primary-600 hover:bg-primary-500 scale-100'
        }`}
      >
        {isOpen ? <X className="text-white" /> : <MessageSquare className="text-white" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-primary-500"></span>
          </span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-24 right-6 w-[350px] sm:w-[400px] h-[550px] glass-panel rounded-3xl shadow-2xl flex flex-col z-50 border border-white/5 animate-in fade-in slide-in-from-bottom-4 duration-300 overflow-hidden font-outfit"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/5 bg-dark-panel flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-900/30 flex items-center justify-center border border-primary-500/30 text-primary-400">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Discovery Agent</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Systems Active</span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-5 space-y-4 bg-dark-surface/50 scrollbar-hide"
            >
              {messages.map((msg) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  key={msg.id} 
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.type === 'user' 
                    ? 'bg-primary-600 text-white rounded-tr-none' 
                    : 'bg-dark-panel border border-white/5 text-gray-300 rounded-tl-none ring-1 ring-white/5'
                  }`}>
                    {msg.text}
                    {msg.cta && (
                      <div className="mt-4">
                        <Link 
                          to={msg.cta.to}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-center gap-2 bg-white text-dark-surface font-bold py-2.5 px-4 rounded-xl hover:bg-gray-200 transition-all text-xs shadow-lg"
                        >
                          {msg.cta.label} <ChevronRight className="w-3 h-3" />
                        </Link>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-5 border-t border-white/5 bg-dark-panel flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow bg-dark-surface border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary-500 transition-colors shadow-inner"
              />
              <button 
                type="submit"
                className="bg-primary-600 text-white p-3 rounded-xl hover:bg-primary-500 transition-colors shadow-lg"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
