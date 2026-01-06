import { motion } from 'motion/react';
import { useTheme } from './ThemeProvider';

export function AnimatedBackground() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
        style={{
          background: theme === 'light'
            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            : 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%)',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
        style={{
          background: theme === 'light'
            ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
            : 'linear-gradient(135deg, #7c2d12 0%, #991b1b 100%)',
        }}
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-1/3 w-[700px] h-[700px] rounded-full blur-3xl opacity-20"
        style={{
          background: theme === 'light'
            ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
            : 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: theme === 'light' 
              ? 'rgba(102, 126, 234, 0.3)' 
              : 'rgba(139, 92, 246, 0.3)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: theme === 'light'
            ? 'radial-gradient(circle at 1px 1px, rgb(0, 0, 0) 1px, transparent 0)'
            : 'radial-gradient(circle at 1px 1px, rgb(255, 255, 255) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
