import { motion } from 'motion/react';
import { Github, ArrowUpRight } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function GitHubSection() {
  const { theme } = useTheme();

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="relative group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.a
            href="https://github.com/roshanthm"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block p-12 rounded-3xl backdrop-blur-md border border-current/10 overflow-hidden cursor-pointer"
            style={{
              background: theme === 'light'
                ? 'rgba(255, 255, 255, 0.6)'
                : 'rgba(30, 30, 30, 0.6)',
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Animated Gradient Background */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
              style={{
                background: theme === 'light'
                  ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)'
                  : 'linear-gradient(135deg, rgba(167, 139, 250, 0.15) 0%, rgba(192, 132, 252, 0.15) 100%)',
              }}
            />

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-3xl -z-20"
              style={{
                background: theme === 'light'
                  ? 'radial-gradient(circle at 50% 50%, rgba(102, 126, 234, 0.3), transparent 70%)'
                  : 'radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.3), transparent 70%)',
              }}
              transition={{ duration: 0.5 }}
            />

            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center gap-6">
                <motion.div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{
                    background: theme === 'light'
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      : 'linear-gradient(135deg, #a78bfa 0%, #c084fc 100%)',
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Github className="w-10 h-10 text-white" />
                </motion.div>

                <div>
                  <h3 className="mb-2" style={{ fontSize: '2rem', fontWeight: 600 }}>
                    Check Out My Work
                  </h3>
                  <p className="opacity-60" style={{ fontSize: '1.125rem' }}>
                    Explore my projects and contributions on GitHub
                  </p>
                </div>
              </div>

              <motion.div
                whileHover={{ x: 5, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight className="w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </div>
          </motion.a>

          {/* Floating Particles Around GitHub Card */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: theme === 'light'
                  ? 'rgba(102, 126, 234, 0.4)'
                  : 'rgba(167, 139, 250, 0.4)',
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
