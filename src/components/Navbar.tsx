import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAudio } from '../context/AudioContext';

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

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [langOpen, setLangOpen] = useState(false);
  const [toast, setToast] = useState(false);
  const [showVolume, setShowVolume] = useState(false);
  const prevScrollY = useRef(0);
  const langRef = useRef<HTMLDivElement>(null);
  const volRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();
  const {
    isPlaying,
    currentTrack,
    trackProgress,
    togglePlay,
    playNext,
    playPrevious,
    toggleMute,
    isMuted,
    volume,
    setVolume,
  } = useAudio();

  useEffect(() => {
    if (currentTrack) {
      setToast(true);
      const timer = setTimeout(() => setToast(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [currentTrack?.title]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
      if (volRef.current && !volRef.current.contains(e.target as Node)) {
        setShowVolume(false);
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
            {/* Music controls - left side */}
            <div className={`absolute left-0 flex items-center gap-1.5 transition-colors ${
              isScrolled ? 'text-madhubani-red' : 'text-cream'
            }`}>
              {isPlaying ? (
                <>
                  <button
                    onClick={playPrevious}
                    className="p-1 hover:opacity-80 transition-opacity"
                    aria-label="Previous track"
                  >
                    <SkipBack size={14} />
                  </button>

                  <button
                    onClick={togglePlay}
                    className="relative w-[22px] h-[22px]"
                    aria-label={t('navbar.ariaPause')}
                  >
                    <motion.svg
                      viewBox="0 0 100 100"
                      className="w-full h-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    >
                      <circle cx="50" cy="50" r="48" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
                      <circle cx="50" cy="50" r="16" fill="#8B1A1A" />
                      <circle cx="50" cy="50" r="12" fill="#C41E3A" />
                      <circle cx="50" cy="50" r="4" fill="#1a1a1a" />
                    </motion.svg>
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50" cy="50" r="47"
                        fill="none"
                        stroke="rgba(232, 163, 23, 0.6)"
                        strokeWidth="2"
                        strokeDasharray={`${trackProgress * 295.3} 295.3`}
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={playNext}
                    className="p-1 hover:opacity-80 transition-opacity"
                    aria-label="Next track"
                  >
                    <SkipForward size={14} />
                  </button>

                  {/* Volume control with dropdown */}
                  <div className="relative" ref={volRef}>
                    <button
                      onClick={() => setShowVolume(!showVolume)}
                      className="p-1 hover:opacity-80 transition-opacity"
                      aria-label="Volume"
                    >
                      {isMuted || volume === 0 ? <VolumeX size={14} /> : <Volume2 size={14} />}
                    </button>
                    <AnimatePresence>
                      {showVolume && (
                        <motion.div
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 py-2 px-3 rounded-lg shadow-lg border bg-cream/95 backdrop-blur-sm border-madhubani-red/20 flex items-center gap-2"
                        >
                          <button
                            onClick={toggleMute}
                            className="text-madhubani-red/60 hover:text-madhubani-red transition-colors"
                            aria-label={isMuted ? 'Unmute' : 'Mute'}
                          >
                            {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                          </button>
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.05"
                            value={volume}
                            onChange={(e) => setVolume(parseFloat(e.target.value))}
                            className="w-16 h-1 bg-madhubani-red/10 rounded-full appearance-none cursor-pointer accent-madhubani-red"
                            aria-label="Volume"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </>
              ) : (
                <button
                  onClick={togglePlay}
                  className="flex flex-col items-center gap-0.5 hover:opacity-80 transition-opacity"
                  aria-label={t('navbar.ariaPlay')}
                >
                  <svg width="22" height="22" viewBox="0 0 100 100" className="pointer-events-none">
                    <polygon points="35,20 80,50 35,80" fill="currentColor" />
                  </svg>
                  <span className="text-[9px] tracking-wider font-medium leading-none">{t('navbar.playLabel')}</span>
                </button>
              )}
            </div>

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

      {/* Track title toast - below navbar */}
      <AnimatePresence>
        {toast && isPlaying && currentTrack && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-4 z-40 bg-cream/95 backdrop-blur-sm border border-madhubani-red/20 rounded-lg px-3 py-2 shadow-lg max-w-[200px]"
          >
            <p className="text-[9px] text-madhubani-black/40 font-mono uppercase tracking-wider">Now Playing</p>
            <p className="text-xs font-playfair text-madhubani-red truncate">{currentTrack.title}</p>
          </motion.div>
        )}
      </AnimatePresence>

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
