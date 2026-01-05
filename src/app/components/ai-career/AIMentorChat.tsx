import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Bot, User, Send, Sparkles } from 'lucide-react';

const chatMessages = [
  {
    type: 'ai',
    message: "Hi! I'm your AI Career Mentor. I've analyzed your profile and I'm ready to help you build a future-proof career. What would you like to explore today?",
    suggestions: ['Career Recommendations', 'Skill Gap Analysis', 'Learning Path'],
  },
  {
    type: 'user',
    message: "I want to become an AI Engineer but don't know where to start.",
  },
  {
    type: 'ai',
    message: "Excellent choice! AI Engineering is growing 95% year-over-year. Based on your background, I recommend starting with Python and Mathematics. I've created a customized 13-month roadmap for you.",
    suggestions: ['View Roadmap', 'Required Skills', 'Salary Insights'],
  },
];

export function AIMentorChat() {
  const [messages, setMessages] = useState<typeof chatMessages>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentMessageIndex < chatMessages.length) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setMessages(prev => [...prev, chatMessages[currentMessageIndex]]);
          setCurrentMessageIndex(prev => prev + 1);
          setIsTyping(false);
        }, 1000);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex]);

  return (
    <section id="ai-mentor" className="py-32 px-6 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-semibold mb-4">
            AI-Powered Guidance
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent">
            Your Personal AI Mentor
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get instant, intelligent answers to your career questions 24/7
          </p>
        </motion.div>

        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl overflow-hidden"
        >
          {/* Chat Header */}
          <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Bot className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <h3 className="font-bold text-white text-lg">AI Career Mentor</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-white/80">Online & Ready to Help</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-6 space-y-6 min-h-[400px] max-h-[500px] overflow-y-auto">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}
              >
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.type === 'ai'
                    ? 'bg-gradient-to-br from-indigo-500 to-purple-500'
                    : 'bg-gradient-to-br from-gray-600 to-gray-700'
                }`}>
                  {msg.type === 'ai' ? (
                    <Bot className="w-5 h-5 text-white" />
                  ) : (
                    <User className="w-5 h-5 text-white" />
                  )}
                </div>

                {/* Message */}
                <div className={`flex-1 ${msg.type === 'user' ? 'text-right' : ''}`}>
                  <motion.div
                    className={`inline-block p-4 rounded-2xl ${
                      msg.type === 'ai'
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-sm leading-relaxed">{msg.message}</p>
                  </motion.div>

                  {/* Suggestions */}
                  {msg.suggestions && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {msg.suggestions.map((suggestion) => (
                        <motion.button
                          key={suggestion}
                          className="px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-indigo-500 dark:hover:border-cyan-400 transition-all"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {suggestion}
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-3"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-2xl">
                  <div className="flex gap-1">
                    <motion.div
                      className="w-2 h-2 bg-gray-400 rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-gray-400 rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-gray-400 rounded-full"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-gray-50/50 dark:bg-gray-900/50 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Ask me anything about your career..."
                className="flex-1 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-400 text-gray-900 dark:text-white placeholder-gray-500"
              />
              <motion.button
                className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* AI Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: Sparkles, title: 'Real-time Insights', desc: 'Instant answers based on latest market data' },
            { icon: Bot, title: 'Personalized', desc: 'Learns from your goals and preferences' },
            { icon: User, title: '24/7 Available', desc: 'Get guidance anytime, anywhere' },
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 bg-white/40 dark:bg-gray-800/40 backdrop-blur-md rounded-2xl border border-gray-200/50 dark:border-gray-700/50 text-center"
            >
              <div className="inline-flex p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl mb-3">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
