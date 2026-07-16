import { useState, useRef, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import api from '../api/axios';

interface ChatMessage {
  role: 'user' | 'bot';
  message: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'bot',
      message: "Hello! 👋 I'm Janastra Technologies' virtual assistant. How can I help you today? Ask me about our services, pricing, or anything else!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', message: userMessage }]);
    setIsTyping(true);

    try {
      const response = await api.post('/chat', {
        message: userMessage,
        sessionId,
      });

      setSessionId(response.data.sessionId);
      setMessages((prev) => [...prev, { role: 'bot', message: response.data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'bot', message: "Sorry, I'm having trouble connecting right now. Please try again later or contact us directly at contact@janastratech.com." },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        id="chatbot-toggle"
        aria-label="Toggle chatbot"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window glass"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            id="chatbot-window"
          >
            {/* Header */}
            <div className="chatbot-header">
              <h3>
                <Bot size={20} />
                Janastra Technologies AI Assistant
              </h3>
              <button onClick={() => setIsOpen(false)} aria-label="Close chat">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="chatbot-messages" id="chatbot-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.role}`}>
                  {msg.message}
                </div>
              ))}
              {isTyping && (
                <div className="chat-message bot" style={{ opacity: 0.6 }}>
                  <span style={{ display: 'inline-flex', gap: '4px' }}>
                    <span style={{ animation: 'float 1s ease-in-out infinite' }}>●</span>
                    <span style={{ animation: 'float 1s ease-in-out infinite 0.2s' }}>●</span>
                    <span style={{ animation: 'float 1s ease-in-out infinite 0.4s' }}>●</span>
                  </span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form className="chatbot-input" onSubmit={handleSend} id="chatbot-form">
              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                id="chatbot-input-field"
              />
              <button type="submit" aria-label="Send message" id="chatbot-send">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
