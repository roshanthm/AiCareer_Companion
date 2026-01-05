import { motion } from 'motion/react';
import { Brain, Sparkles } from 'lucide-react';

export function Navigation() {
  const navItems = ['How It Works', 'Explore Careers', 'Roadmap', 'AI Mentor', 'Success Stories'];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-40 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-full px-6 py-3 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <Brain className="w-8 h-8 text-indigo-600 dark:text-cyan-400" />
                <Sparkles className="w-4 h-4 text-purple-500 absolute -top-1 -right-1" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
                AI Career Companion
              </span>
            </motion.div>

            {/* Nav Items - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className="hidden sm:block px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Free
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
