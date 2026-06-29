import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Play, Pause } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'The Art', href: '#art-form' },
  { label: 'Exhibitions', href: '#exhibitions' },
  { label: 'Commission', href: '#commission' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isPlaying, togglePlay }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-lg border-b-2 border-madhubani-red'
            : 'bg-transparent'
        }`}
      >
        {/* Decorative top border */}
        <div className="h-1 w-full bg-gradient-to-r from-madhubani-red via-madhubani-magenta to-madhubani-teal" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center h-16 md:h-20">
            {/* Play/Pause button - left side */}
            <button
              onClick={togglePlay}
              className={`absolute left-0 flex flex-col items-center gap-0.5 transition-colors ${
                isScrolled ? 'text-madhubani-red hover:text-madhubani-crimson' : 'text-cream hover:text-madhubani-yellow'
              }`}
              aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
            >
              {isPlaying ? <Pause size={22} /> : <Play size={22} />}
              <span className="text-[9px] tracking-wider font-medium leading-none">Play Gramophone</span>
            </button>

            {/* Centered Logo - visible only on scroll */}
            <a href="#home" className={`flex items-center group transition-all duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
              <img
                src="/images/mithila-folk-fusion-logo.png"
                alt="Mithila Folk Fusions"
                className="h-10 md:h-12 w-auto"
              />
            </a>

            {/* Menu button - right side */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`absolute right-0 p-2 ${isScrolled ? 'text-madhubani-red' : 'text-cream'}`}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-lg pt-24"
          >
            <div className="flex flex-col items-center gap-4 px-8">
              {/* Decorative element */}
              <svg width="60" height="60" viewBox="0 0 60 60" className="mb-4">
                <circle cx="30" cy="30" r="28" fill="none" stroke="#8B1A1A" strokeWidth="1.5" strokeDasharray="4,4"/>
                <circle cx="30" cy="30" r="20" fill="none" stroke="#C41E7F" strokeWidth="1"/>
                <circle cx="30" cy="30" r="5" fill="#E8A317"/>
              </svg>
              
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-xl font-playfair text-madhubani-black hover:text-madhubani-red transition-colors py-2 border-b border-madhubani-red/10 w-full text-center"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
