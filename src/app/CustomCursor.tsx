import { useState, useEffect } from 'react';
import { motion, useSpring } from 'motion/react';
import { useTheme } from './ThemeProvider';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { theme } = useTheme();

  const cursorX = useSpring(mousePosition.x, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(mousePosition.y, { stiffness: 500, damping: 28 });
  
  const cursorOuterX = useSpring(mousePosition.x, { stiffness: 150, damping: 20 });
  const cursorOuterY = useSpring(mousePosition.y, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, [data-magnetic]');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Inner Cursor Dot */}
      <motion.div
        className="pointer-events-none fixed z-50 rounded-full mix-blend-difference"
        style={{
          left: cursorX,
          top: cursorY,
          x: '-50%',
          y: '-50%',
          width: isHovering ? '8px' : '6px',
          height: isHovering ? '8px' : '6px',
          background: theme === 'light' 
            ? 'rgba(50, 50, 50, 0.9)' 
            : 'rgba(255, 255, 255, 0.9)',
          boxShadow: theme === 'light'
            ? '0 0 20px rgba(50, 50, 50, 0.6), 0 0 40px rgba(50, 50, 50, 0.4)'
            : '0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.4)',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Outer Cursor Ring with Trail */}
      <motion.div
        className="pointer-events-none fixed z-50 rounded-full border-2"
        style={{
          left: cursorOuterX,
          top: cursorOuterY,
          x: '-50%',
          y: '-50%',
          width: isHovering ? '50px' : '35px',
          height: isHovering ? '50px' : '35px',
          borderColor: theme === 'light' 
            ? 'rgba(102, 126, 234, 0.6)' 
            : 'rgba(167, 139, 250, 0.6)',
          background: theme === 'light'
            ? 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%)',
        }}
        animate={{
          scale: isHovering ? 1.3 : 1,
          rotate: isHovering ? 90 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Animated Particles Following Cursor */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none fixed z-40 rounded-full"
          style={{
            left: cursorOuterX,
            top: cursorOuterY,
            x: '-50%',
            y: '-50%',
            width: '4px',
            height: '4px',
            background: theme === 'light'
              ? 'rgba(102, 126, 234, 0.4)'
              : 'rgba(167, 139, 250, 0.4)',
            boxShadow: theme === 'light'
              ? '0 0 10px rgba(102, 126, 234, 0.6)'
              : '0 0 10px rgba(167, 139, 250, 0.6)',
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeOut',
          }}
        />
      ))}
    </>
  );
}
