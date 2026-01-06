import { motion } from 'motion/react';
import { useTheme } from './ThemeProvider';

export function EnhancedBackground() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0">
        {/* Large Moving Orbs */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full blur-[120px]"
          style={{
            background: theme === 'light'
              ? 'radial-gradient(circle, rgba(102, 126, 234, 0.4) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
            top: '-20%',
            left: '-10%',
          }}
          animate={{
            x: [0, 150, -100, 0],
            y: [0, -150, 100, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full blur-[120px]"
          style={{
            background: theme === 'light'
              ? 'radial-gradient(circle, rgba(240, 147, 251, 0.4) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(232, 121, 249, 0.3) 0%, transparent 70%)',
            top: '20%',
            right: '-10%',
          }}
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 150, -100, 0],
            scale: [1, 1.2, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: theme === 'light'
              ? 'radial-gradient(circle, rgba(79, 172, 254, 0.4) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            bottom: '-10%',
            left: '30%',
          }}
          animate={{
            x: [0, 100, -150, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.25, 0.95, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Animated Geometric Shapes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute rounded-3xl opacity-20"
          style={{
            width: `${100 + Math.random() * 200}px`,
            height: `${100 + Math.random() * 200}px`,
            background: theme === 'light'
              ? `linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(240, 147, 251, 0.3))`
              : `linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(232, 121, 249, 0.2))`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            rotate: `${Math.random() * 360}deg`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating Particles with Trails */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: theme === 'light'
              ? `rgba(102, 126, 234, ${0.3 + Math.random() * 0.4})`
              : `rgba(167, 139, 250, ${0.3 + Math.random() * 0.4})`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: theme === 'light'
              ? '0 0 20px rgba(102, 126, 234, 0.5)'
              : '0 0 20px rgba(167, 139, 250, 0.5)',
          }}
          animate={{
            y: [0, -100 - Math.random() * 200, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: theme === 'light'
            ? 'radial-gradient(circle at 2px 2px, rgba(102, 126, 234, 0.15) 1px, transparent 0)'
            : 'radial-gradient(circle at 2px 2px, rgba(167, 139, 250, 0.15) 1px, transparent 0)',
          backgroundSize: '50px 50px',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Radial Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: theme === 'light'
            ? 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(250, 250, 250, 0.8) 100%)'
            : 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(15, 15, 15, 0.8) 100%)',
        }}
      />
    </div>
  );
}
