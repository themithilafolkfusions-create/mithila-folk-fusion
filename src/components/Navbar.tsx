import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Play, Pause } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'nl', label: 'NL' },
  { code: 'hi', label: 'HI' },
  { code: 'de', label: 'DE' },
];

const navLinks = [
  { label: 'home', href: '#home', scrollTo: 'home' },
  { label: 'about', href: '#about', scrollTo: 'about' },
  { label: 'gallery', href: '#gallery', scrollTo: 'gallery' },
  { label: 'portfolio', href: '/portfolio', isRoute: true },
  { label: 'artOfMithila', href: '/art-of-mithila', isRoute: true },
  { label: 'artForm', href: '#art-form', scrollTo: 'art-form' },
  { label: 'exhibitions', href: '#exhibitions', scrollTo: 'exhibitions' },
  { label: 'commission', href: '#commission', scrollTo: 'commission' },
  { label: 'contact', href: '#contact', scrollTo: 'contact' },
];

interface NavbarProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isPlaying, togglePlay }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [langOpen, setLangOpen] = useState(false);
  const prevScrollY = useRef(0);
  const langRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);
      if (currentY > prevScrollY.current && currentY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      prevScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-lg border-b-2 border-madhubani-red'
            : 'bg-transparent'
        }`}
      >
        <div className="h-1 w-full bg-gradient-to-r from-madhubani-red via-madhubani-magenta to-madhubani-teal" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center h-16 md:h-20">
            {/* Play/Pause button - left side */}
            <button
              onClick={togglePlay}
              className={`absolute left-0 flex flex-col items-center gap-0.5 transition-colors ${
                isScrolled ? 'text-madhubani-red hover:text-madhubani-crimson' : 'text-cream hover:text-madhubani-yellow'
              }`}
              aria-label={isPlaying ? t('navbar.ariaPause') : t('navbar.ariaPlay')}
            >
              {isPlaying ? <Pause size={22} /> : <Play size={22} />}
              <span className="text-[9px] tracking-wider font-medium leading-none">{t('navbar.playLabel')}</span>
            </button>

            {/* Centered Logo - visible only on scroll */}
            <a href="#home" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={`flex items-center group transition-all duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
              <img
                src="/images/mithila-folk-fusion-logo.png"
                alt="Mithila Folk Fusions"
                className="h-10 md:h-12 w-auto"
              />
            </a>

            {/* Language Toggle + Menu - right side */}
            <div className="absolute right-0 flex items-center gap-2">
              {/* Language dropdown */}
              <div className="hidden md:block relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className={`text-[10px] font-bold tracking-wider px-2 py-1 border transition-all flex items-center gap-1 ${
                    isScrolled
                      ? 'border-madhubani-red/30 text-madhubani-red/60 hover:border-madhubani-red hover:text-madhubani-red'
                      : 'border-cream/30 text-cream/60 hover:border-cream hover:text-cream'
                  }`}
                >
                  {i18n.language.toUpperCase()}
                  <svg className={`w-2.5 h-2.5 transition-transform ${langOpen ? 'rotate-180' : ''}`} viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-1 bg-cream border border-madhubani-red/20 shadow-lg py-1 min-w-[80px]">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { i18n.changeLanguage(lang.code); setLangOpen(false); }}
                        className={`block w-full text-left text-[11px] font-bold tracking-wider px-3 py-1.5 transition-colors ${
                          i18n.language === lang.code
                            ? 'bg-madhubani-red/10 text-madhubani-red'
                            : 'text-madhubani-black/70 hover:bg-madhubani-red/5 hover:text-madhubani-red'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={`p-2 ${isScrolled ? 'text-madhubani-red' : 'text-cream'}`}
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
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
              <svg width="60" height="60" viewBox="0 0 60 60" className="mb-4">
                <circle cx="30" cy="30" r="28" fill="none" stroke="#8B1A1A" strokeWidth="1.5" strokeDasharray="4,4"/>
                <circle cx="30" cy="30" r="20" fill="none" stroke="#C41E7F" strokeWidth="1"/>
                <circle cx="30" cy="30" r="5" fill="#E8A317"/>
              </svg>

              {/* Language toggle in mobile */}
              <div className="flex gap-2 mb-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { i18n.changeLanguage(lang.code); setIsMobileOpen(false); }}
                    className={`text-sm font-bold tracking-wider px-3 py-1 border transition-all ${
                      i18n.language === lang.code
                        ? 'border-madhubani-red bg-madhubani-red text-cream'
                        : 'border-madhubani-red/30 text-madhubani-black/60 hover:border-madhubani-red hover:text-madhubani-red'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
              
              {navLinks.map((link, i) => (
                link.isRoute ? (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="text-xl font-playfair text-madhubani-black hover:text-madhubani-red transition-colors py-2 border-b border-madhubani-red/10 w-full text-center block"
                    >
                      {t(`navbar.${link.label}`)}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileOpen(false);
                      if (link.scrollTo === 'home') {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        setTimeout(() => document.getElementById(link.scrollTo!)?.scrollIntoView({ behavior: 'smooth' }), 100);
                      }
                    }}
                    className="text-xl font-playfair text-madhubani-black hover:text-madhubani-red transition-colors py-2 border-b border-madhubani-red/10 w-full text-center"
                  >
                    {t(`navbar.${link.label}`)}
                  </motion.a>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
