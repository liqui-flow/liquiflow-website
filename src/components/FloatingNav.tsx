'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

const navItems = [
  { href: '#hero', label: 'Overview' },
  { href: '#technology', label: 'Technology' },
  { href: '#p2p', label: 'P2P' },
  { href: '#terminal', label: 'Terminal' },
  { href: '#innovation', label: 'Innovation' },
  { href: '#privacy', label: 'Privacy' },
];

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <div className="text-white font-semibold text-lg">Aeria</div>
              
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <MagneticButton
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === item.href.replace('#', '')
                        ? 'text-white'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                    strength={0}
                  >
                    {item.label}
                  </MagneticButton>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
