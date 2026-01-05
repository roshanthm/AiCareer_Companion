import { motion } from 'motion/react';
import { Brain, Twitter, Linkedin, Github, Mail, Heart } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Roadmap', 'Changelog', 'API'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
  Resources: ['Documentation', 'Guides', 'Help Center', 'Community', 'Templates'],
  Legal: ['Privacy', 'Terms', 'Security', 'Compliance', 'Cookies'],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: '#', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="relative py-20 px-6 border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Brain className="w-8 h-8 text-indigo-600 dark:text-cyan-400" />
              <span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
                AI Career Companion
              </span>
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Empowering the next generation with AI-powered career intelligence. Build a future-proof career with personalized guidance.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/30"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Get the latest career insights, AI trends, and learning resources delivered to your inbox.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-400 text-gray-900 dark:text-white"
              />
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-500 dark:to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
              © 2025 AI Career Companion. Made with{' '}
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />{' '}
              for your career success.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
