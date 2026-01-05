import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { HeroSection } from './components/ai-career/HeroSection';
import { HowAIHelps } from './components/ai-career/HowAIHelps';
import { CareerExplorer } from './components/ai-career/CareerExplorer';
import { LearningRoadmap } from './components/ai-career/LearningRoadmap';
import { AIMentorChat } from './components/ai-career/AIMentorChat';
import { ImpactSection } from './components/ai-career/ImpactSection';
import { CTASection } from './components/ai-career/CTASection';
import { Footer } from './components/ai-career/Footer';
import { Navigation } from './components/ai-career/Navigation';
import { AnimatedBackground } from './components/ai-career/AnimatedBackground';
import { ScrollProgress } from './components/ai-career/ScrollProgress';
import { Moon, Sun } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Console welcome message
    console.log(
      '%c🚀 AI Career Companion',
      'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;'
    );
    console.log(
      '%c✨ Build a Career That Survives the Future',
      'font-size: 16px; color: #667eea; font-weight: 600;'
    );
    console.log(
      '%cDesigned with precision • Built for excellence • Optimized for conversions',
      'font-size: 12px; color: #888;'
    );

    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/20 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <ScrollProgress />
      <AnimatedBackground />
      
      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-4 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all"
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.95 }}
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5 text-indigo-600" />
        ) : (
          <Sun className="w-5 h-5 text-cyan-400" />
        )}
      </motion.button>

      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <HowAIHelps />
        <CareerExplorer />
        <LearningRoadmap />
        <AIMentorChat />
        <ImpactSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
