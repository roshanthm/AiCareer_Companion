import { motion } from 'motion/react';
import { Brain, Target, TrendingUp, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: Brain,
    title: 'Skill Gap Analysis',
    description: 'AI analyzes your current skills against market demands and identifies exactly what you need to learn.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Target,
    title: 'Career Matching',
    description: 'Machine learning algorithms match your profile with 50,000+ career paths based on aptitude and market trends.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Personalized Roadmaps',
    description: 'Get step-by-step learning paths that adapt in real-time based on industry changes and your progress.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Future-Proof Insights',
    description: 'Predictive AI forecasts job market trends 5 years ahead, ensuring your skills stay relevant.',
    gradient: 'from-orange-500 to-red-500',
  },
];

export function HowAIHelps() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-semibold mb-4">
            Intelligent Career Guidance
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
            How AI Helps You Succeed
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cutting-edge artificial intelligence working 24/7 to guide your career journey
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  className={`inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient}`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
