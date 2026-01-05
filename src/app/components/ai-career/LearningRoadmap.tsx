import { motion } from 'motion/react';
import { useState } from 'react';
import { CheckCircle2, Circle, Code, Database, Laptop, GraduationCap, Briefcase } from 'lucide-react';

const roadmapSteps = [
  {
    phase: 'Foundation',
    duration: '3 months',
    icon: GraduationCap,
    skills: ['Python Basics', 'Data Structures', 'Algorithms', 'Git & GitHub'],
    color: 'from-blue-500 to-cyan-500',
    completed: true,
  },
  {
    phase: 'Core Skills',
    duration: '4 months',
    icon: Code,
    skills: ['Machine Learning', 'Neural Networks', 'TensorFlow', 'PyTorch'],
    color: 'from-indigo-500 to-purple-500',
    completed: true,
  },
  {
    phase: 'Specialization',
    duration: '3 months',
    icon: Database,
    skills: ['NLP', 'Computer Vision', 'Deep Learning', 'MLOps'],
    color: 'from-purple-500 to-pink-500',
    completed: false,
  },
  {
    phase: 'Real Projects',
    duration: '2 months',
    icon: Laptop,
    skills: ['Portfolio Projects', 'Open Source', 'Kaggle Competitions'],
    color: 'from-pink-500 to-red-500',
    completed: false,
  },
  {
    phase: 'Career Ready',
    duration: '1 month',
    icon: Briefcase,
    skills: ['Interview Prep', 'System Design', 'Behavioral Skills', 'Job Applications'],
    color: 'from-orange-500 to-yellow-500',
    completed: false,
  },
];

export function LearningRoadmap() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <section id="roadmap" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-sm font-semibold mb-4">
            Your Learning Path
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            Personalized Learning Roadmap
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            AI-generated step-by-step path customized for your goals, skills, and learning pace
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20" />

          {/* Steps */}
          <div className="space-y-8">
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    className="inline-block cursor-pointer"
                    onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all">
                      {/* Header */}
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse md:justify-end' : ''}`}>
                        <div className={`p-3 bg-gradient-to-br ${step.color} rounded-xl`}>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {step.phase}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {step.duration}
                          </p>
                        </div>
                      </div>

                      {/* Skills */}
                      <motion.div
                        initial={false}
                        animate={{ height: expandedStep === index ? 'auto' : 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-wrap gap-2 mt-4">
                          {step.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      step.completed
                        ? 'bg-gradient-to-br from-green-500 to-emerald-500'
                        : 'bg-white dark:bg-gray-800 border-4 border-gray-200 dark:border-gray-700'
                    } shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.completed ? (
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    ) : (
                      <Circle className="w-8 h-8 text-gray-400" />
                    )}
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-500 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(6, 182, 212, 0.6)' }}
            whileTap={{ scale: 0.95 }}
          >
            Generate My Roadmap
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
