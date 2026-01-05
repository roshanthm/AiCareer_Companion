import { motion } from 'motion/react';
import { useState } from 'react';
import { Search, TrendingUp, Briefcase, Code, Palette, Stethoscope, Calculator, Users } from 'lucide-react';

const careers = [
  { 
    title: 'AI Engineer', 
    growth: 95, 
    salary: '$120K - $180K', 
    demand: 'Very High',
    icon: Code,
    gradient: 'from-blue-500 to-cyan-500'
  },
  { 
    title: 'UX Designer', 
    growth: 78, 
    salary: '$85K - $130K', 
    demand: 'High',
    icon: Palette,
    gradient: 'from-purple-500 to-pink-500'
  },
  { 
    title: 'Data Scientist', 
    growth: 88, 
    salary: '$110K - $160K', 
    demand: 'Very High',
    icon: TrendingUp,
    gradient: 'from-indigo-500 to-purple-500'
  },
  { 
    title: 'Product Manager', 
    growth: 72, 
    salary: '$95K - $150K', 
    demand: 'High',
    icon: Briefcase,
    gradient: 'from-orange-500 to-red-500'
  },
  { 
    title: 'Healthcare Tech', 
    growth: 85, 
    salary: '$90K - $140K', 
    demand: 'Very High',
    icon: Stethoscope,
    gradient: 'from-green-500 to-emerald-500'
  },
  { 
    title: 'Blockchain Dev', 
    growth: 92, 
    salary: '$115K - $175K', 
    demand: 'Very High',
    icon: Calculator,
    gradient: 'from-cyan-500 to-blue-500'
  },
];

const filters = ['All', 'Tech', 'Creative', 'Business', 'Healthcare', 'Finance'];

export function CareerExplorer() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="explore-careers" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold mb-4">
            Career Intelligence
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Explore Future-Proof Careers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            AI-powered insights into careers that will thrive in the next decade
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search careers by skills, interests, or industry..."
                className="w-full pl-14 pr-6 py-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-full border border-gray-200 dark:border-gray-700 focus:border-indigo-500 dark:focus:border-cyan-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 dark:focus:ring-cyan-400/20 transition-all text-gray-900 dark:text-white placeholder-gray-500"
              />
            </div>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 text-white shadow-lg'
                    : 'bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Career Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careers.map((career, index) => (
            <motion.div
              key={career.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              <div className="relative p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all overflow-hidden">
                {/* Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${career.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                />

                {/* Icon */}
                <div className={`inline-flex p-3 bg-gradient-to-br ${career.gradient} rounded-xl mb-4`}>
                  <career.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                  {career.title}
                </h3>

                {/* Stats */}
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Growth</span>
                    <span className="font-semibold text-green-600 dark:text-green-400 flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {career.growth}%
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Salary Range</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{career.salary}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Demand</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      career.demand === 'Very High' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                    }`}>
                      {career.demand}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${career.gradient}`}
                      initial={{ width: 0 }}
                      animate={hoveredCard === index ? { width: `${career.growth}%` } : { width: 0 }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* Learn More */}
                <motion.button
                  className="w-full py-3 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Career Path
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Insight Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 dark:from-cyan-500/10 dark:to-purple-500/10 backdrop-blur-xl rounded-3xl border border-indigo-200 dark:border-cyan-500/30"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 dark:from-cyan-400 to-purple-400 rounded-xl">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">AI Career Insight</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Based on your profile and current market trends, <strong>AI Engineering</strong> and <strong>Data Science</strong> offer the highest growth potential with 95%+ job market expansion. Our AI recommends starting with Python and Machine Learning fundamentals.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
