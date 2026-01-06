import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="relative py-16 px-4 border-t border-current/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-4 opacity-60"
            style={{ fontSize: '0.875rem' }}
          >
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Heart 
                className="w-4 h-4 fill-current"
                style={{
                  color: theme === 'light' ? '#f093fb' : '#e879f9',
                }}
              />
            </motion.div>
            <span>by Roshan Thomas</span>
          </motion.div>

          <p className="opacity-40" style={{ fontSize: '0.75rem' }}>
            © {new Date().getFullYear()} All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
