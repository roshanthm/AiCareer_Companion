import { motion } from 'motion/react';
import { useTheme } from './ThemeProvider';
import { Mail, MapPin, Send, Github, Heart } from 'lucide-react';

export function ContactSection() {
  const { theme } = useTheme();

  return (
    <section id="contact" className="relative py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4 px-6 py-2 rounded-full backdrop-blur-sm border border-current/20"
            style={{
              background: theme === 'light'
                ? 'rgba(255, 255, 255, 0.5)'
                : 'rgba(30, 30, 30, 0.5)',
            }}
          >
            Get In Touch
          </motion.div>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 700 }}>
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-70">
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl mb-8" style={{ fontWeight: 600 }}>
              Contact Information
            </h3>

            <div className="space-y-6 mb-12">
              <motion.a
                href="mailto:hello@roshanp thomas.com"
                className="flex items-center gap-4 p-6 rounded-2xl backdrop-blur-sm border border-current/10 group"
                style={{
                  background: theme === 'light'
                    ? 'rgba(255, 255, 255, 0.5)'
                    : 'rgba(30, 30, 30, 0.5)',
                }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{
                    background: theme === 'light'
                      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      : 'linear-gradient(135deg, #a78bfa 0%, #c084fc 100%)',
                  }}
                >
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm opacity-60 mb-1">Email</div>
                  <div className="font-medium">hello@roshanthomas.com</div>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 p-6 rounded-2xl backdrop-blur-sm border border-current/10"
                style={{
                  background: theme === 'light'
                    ? 'rgba(255, 255, 255, 0.5)'
                    : 'rgba(30, 30, 30, 0.5)',
                }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{
                    background: theme === 'light'
                      ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                      : 'linear-gradient(135deg, #e879f9 0%, #ec4899 100%)',
                  }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm opacity-60 mb-1">Location</div>
                  <div className="font-medium">Available Worldwide</div>
                </div>
              </motion.div>

              <motion.a
                href="https://github.com/roshanthm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-2xl backdrop-blur-sm border border-current/10 group"
                style={{
                  background: theme === 'light'
                    ? 'rgba(255, 255, 255, 0.5)'
                    : 'rgba(30, 30, 30, 0.5)',
                }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{
                    background: theme === 'light'
                      ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                      : 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                  }}
                >
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm opacity-60 mb-1">GitHub</div>
                  <div className="font-medium">@roshanthm</div>
                </div>
              </motion.a>
            </div>

            <p className="text-lg opacity-60 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6">
              <div>
                <label className="block mb-2 opacity-70">Name</label>
                <motion.input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-6 py-4 rounded-2xl backdrop-blur-sm border border-current/10 outline-none transition-all"
                  style={{
                    background: theme === 'light'
                      ? 'rgba(255, 255, 255, 0.5)'
                      : 'rgba(30, 30, 30, 0.5)',
                  }}
                  whileFocus={{ scale: 1.02, borderColor: theme === 'light' ? '#667eea' : '#a78bfa' }}
                />
              </div>

              <div>
                <label className="block mb-2 opacity-70">Email</label>
                <motion.input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-6 py-4 rounded-2xl backdrop-blur-sm border border-current/10 outline-none transition-all"
                  style={{
                    background: theme === 'light'
                      ? 'rgba(255, 255, 255, 0.5)'
                      : 'rgba(30, 30, 30, 0.5)',
                  }}
                  whileFocus={{ scale: 1.02, borderColor: theme === 'light' ? '#667eea' : '#a78bfa' }}
                />
              </div>

              <div>
                <label className="block mb-2 opacity-70">Message</label>
                <motion.textarea
                  placeholder="Your message..."
                  rows={6}
                  className="w-full px-6 py-4 rounded-2xl backdrop-blur-sm border border-current/10 outline-none transition-all resize-none"
                  style={{
                    background: theme === 'light'
                      ? 'rgba(255, 255, 255, 0.5)'
                      : 'rgba(30, 30, 30, 0.5)',
                  }}
                  whileFocus={{ scale: 1.02, borderColor: theme === 'light' ? '#667eea' : '#a78bfa' }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 rounded-2xl flex items-center justify-center gap-3"
                style={{
                  background: theme === 'light'
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : 'linear-gradient(135deg, #a78bfa 0%, #c084fc 100%)',
                  color: '#ffffff',
                }}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 40px rgba(102, 126, 234, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <span style={{ fontWeight: 600 }}>Send Message</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-32 pt-12 border-t border-current/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-4 opacity-60"
            style={{ fontSize: '0.875rem' }}
          >
            <span>Crafted with</span>
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
            © {new Date().getFullYear()} Roshan Thomas. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
