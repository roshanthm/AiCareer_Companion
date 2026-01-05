import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Users, TrendingUp, Award, Globe } from 'lucide-react';

const stats = [
  { 
    icon: Users, 
    value: 50000, 
    suffix: '+', 
    label: 'Students Guided',
    gradient: 'from-blue-500 to-cyan-500'
  },
  { 
    icon: TrendingUp, 
    value: 95, 
    suffix: '%', 
    label: 'Career Success Rate',
    gradient: 'from-indigo-500 to-purple-500'
  },
  { 
    icon: Award, 
    value: 10000, 
    suffix: '+', 
    label: 'Careers Explored',
    gradient: 'from-purple-500 to-pink-500'
  },
  { 
    icon: Globe, 
    value: 150, 
    suffix: '+', 
    label: 'Countries Reached',
    gradient: 'from-pink-500 to-red-500'
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          const controls = animate(count, value, { duration: 2 });
          setHasAnimated(true);
          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [count, value, hasAnimated]);

  return (
    <div ref={ref} className="flex items-baseline gap-1">
      <motion.span className="text-5xl md:text-6xl font-black">
        {rounded}
      </motion.span>
      <span className="text-3xl md:text-4xl font-black opacity-80">{suffix}</span>
    </div>
  );
}

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'AI Engineer at Google',
    image: '👩‍💻',
    quote: 'AI Career Companion helped me transition from marketing to AI engineering in just 14 months. The personalized roadmap was a game-changer!',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Data Scientist at Microsoft',
    image: '👨‍💼',
    quote: 'The AI mentor guided me through every step. I went from confused fresher to confident data scientist with a 6-figure salary.',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Emily Rodriguez',
    role: 'UX Designer at Airbnb',
    image: '👩‍🎨',
    quote: 'I discovered my passion for UX design through the career explorer. Now I\'m doing what I love at my dream company!',
    gradient: 'from-purple-500 to-pink-500',
  },
];

export function ImpactSection() {
  return (
    <section id="success-stories" className="py-32 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold mb-4">
            Real Impact, Real Results
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
            Transforming Careers Worldwide
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands who've built future-proof careers with AI guidance
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all text-center">
                {/* Icon */}
                <motion.div
                  className={`inline-flex p-4 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-6`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Counter */}
                <div className={`mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Success Stories
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all">
                  {/* Gradient Border on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity`}
                  />

                  {/* Quote */}
                  <div className="relative mb-6">
                    <div className="text-6xl text-gray-200 dark:text-gray-700 leading-none mb-4">"</div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-3xl`}>
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
