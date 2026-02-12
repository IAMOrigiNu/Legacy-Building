import React, { useState, useRef, useEffect } from 'react';
import { generateAssistantResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: "Hello. I am the Legacy Digital Architect. I can answer any questions regarding the website proposal, the 30-day roadmap, or the maintenance options. How can I assist you today?"
    },
    {
      id: '2',
      role: 'user',
      text: "Do we really need Namecheap, or can Vercel handle everything? And what about security updates?"
    },
    {
      id: '3',
      role: 'model',
      text: "Excellent technical question.\n\n**1. Can Vercel replace Namecheap? No.**\nVercel is built for the Frontend (React), but it cannot host the WordPress database or PHP files. We need Namecheap to host the \"Headless\" WordPress content. The two work together: Namecheap stores the data, Vercel displays it.\n\n**2. Security Updates (Self-Managed):**\nIf you choose the Self-Managed option, you are 100% responsible for all security. This means you must manually login to WordPress to update Core files, patch plugins, and fix server vulnerabilities. If a plugin update breaks the site, you are responsible for restoring the backup."
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Prepare history for API
    const history = messages.map(m => ({ role: m.role, text: m.text }));

    try {
      const responseText = await generateAssistantResponse(input, history);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col bg-legacy-gray rounded-xl border border-gray-800 overflow-hidden animate-fade-in">
      <div className="p-4 border-b border-gray-800 bg-gray-900/50 flex justify-between items-center">
        <div>
           <h3 className="text-lg font-bold text-white">Gemini Proposal Assistant</h3>
           <p className="text-xs text-gray-400">Powered by Google Gemini 2.5 Flash</p>
        </div>
        <div className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400">Live Demo</div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] p-4 rounded-lg ${
              msg.role === 'user' 
                ? 'bg-legacy-gold text-black rounded-tr-none' 
                : 'bg-gray-800 text-gray-200 rounded-tl-none border border-gray-700'
            }`}>
              <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-800 p-4 rounded-lg rounded-tl-none border border-gray-700 flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-gray-900/50 border-t border-gray-800">
        <div className="flex items-center space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about the timeline, costs, or tech stack..."
            className="flex-1 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-legacy-gold focus:ring-1 focus:ring-legacy-gold transition-all"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-legacy-gold text-black p-3 rounded-lg hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiAssistant;
