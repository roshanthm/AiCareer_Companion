import { motion } from 'motion/react';
import { ArrowRight, Sparkles, TrendingUp, Target } from 'lucide-react';

export function HeroSection() {
  const floatingIcons = [
    { Icon: Sparkles, delay: 0, x: -20, y: -30 },
    { Icon: TrendingUp, delay: 0.2, x: 30, y: -20 },
    { Icon: Target, delay: 0.4, x: -30, y: 20 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* Floating UI Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, delay, x, y }, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 15}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
              x: [0, x, 0],
              y: [0, y, 0],
            }}
            transition={{
              duration: 4,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
              <Icon className="w-8 h-8 text-indigo-600 dark:text-cyan-400" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-full border border-indigo-200/50 dark:border-cyan-500/30 mb-8"
        >
          <Sparkles className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
          <span className="text-sm font-medium text-indigo-900 dark:text-cyan-300">
            AI-Powered Career Intelligence
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Build a Career
          </span>
          <br />
          <span className="text-gray-900 dark:text-white">
            That Survives the Future
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Discover future-proof careers, analyze your skills with AI, and get personalized learning roadmaps that adapt to the evolving job market.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)' 
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>

          <motion.button
            className="px-8 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md text-gray-900 dark:text-white rounded-full font-bold text-lg border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-cyan-400 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 dark:text-gray-400"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>100% Free to Start</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span>50,000+ Career Paths</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span>AI-Powered Insights</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
