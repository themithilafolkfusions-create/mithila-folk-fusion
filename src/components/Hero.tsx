import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MadhubaniBorderTop } from './MadhubaniBorder';

interface HeroProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

const heroVideos = ['/videos/hero-1.mp4', '/videos/hero-2.mp4', '/videos/hero-3.mp4'];

const Hero: React.FC<HeroProps> = ({ isPlaying }) => {
  const { scrollY } = useScroll();
  const heroLogoScale = useTransform(scrollY, [0, 300], [1, 0.3]);
  const heroLogoOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-madhubani-red/15 to-madhubani-black">
        <video
          key={currentVideo}
          autoPlay muted loop playsInline
          className="absolute w-full h-full"
          style={{ objectFit: 'cover' }}
          onEnded={() => setCurrentVideo((prev) => (prev + 1) % heroVideos.length)}
        >
          <source src={heroVideos[currentVideo]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-madhubani-black/70 via-madhubani-black/50 to-madhubani-black/80" />
      </div>

      {/* Animated decorative SVG overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glow filter definition */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <filter id="lotus-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Madhubani border at the bottom of the hero */}
        <div className="absolute bottom-0 left-0 w-full">
          <MadhubaniBorderTop />
        </div>

        {/* Corner lotuses */}
        {/* Top-left */}
        <motion.svg
          animate={{ y: [0, -6, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ y: { duration: 10, repeat: Infinity, ease: 'easeInOut' }, opacity: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
          className="absolute top-20 left-4 md:left-10"
          style={{ rotate: mousePos.x * 15, filter: 'url(#lotus-glow)', transition: 'rotate 0.3s ease-out' }}
          width="120" height="120" viewBox="0 0 120 120"
        >
          <path d="M0,0 L0,120" stroke="#E8A317" strokeWidth="2"/>
          <path d="M0,0 L120,0" stroke="#E8A317" strokeWidth="2"/>
          <g transform="translate(24, 24) rotate(135)">
            <ellipse cx="0" cy="-12" rx="4" ry="12" fill="none" stroke="#C41E3A" strokeWidth="1.5"/>
            <ellipse cx="0" cy="-12" rx="4" ry="12" fill="none" stroke="#E8A317" strokeWidth="1.5" transform="rotate(30)"/>
            <ellipse cx="0" cy="-12" rx="4" ry="12" fill="none" stroke="#C41E3A" strokeWidth="1.5" transform="rotate(-30)"/>
            <ellipse cx="0" cy="-12" rx="4" ry="12" fill="none" stroke="#C41E7F" strokeWidth="1.5" transform="rotate(60)"/>
            <ellipse cx="0" cy="-12" rx="4" ry="12" fill="none" stroke="#C41E7F" strokeWidth="1.5" transform="rotate(-60)"/>
            <circle cx="0" cy="-12" r="3" fill="#E8A317" opacity="0.5"/>
          </g>
        </motion.svg>

        {/* Top-right */}
        <motion.svg
          animate={{ y: [0, -6, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ y: { duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }, opacity: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 } }}
          className="absolute top-20 right-4 md:right-10"
          style={{ rotate: -mousePos.x * 15, filter: 'url(#lotus-glow)', transition: 'rotate 0.3s ease-out' }}
          width="120" height="120" viewBox="0 0 120 120"
        >
          <path d="M120,0 L120,120" stroke="#E8A317" strokeWidth="2"/>
          <path d="M120,0 L0,0" stroke="#E8A317" strokeWidth="2"/>
          <g transform="translate(96, 24) rotate(-135)">
            <ellipse cx="0" cy="-12" rx="4" ry="12" fill="none" stroke="#C41E3A" strokeWidth="1.5"/>
            <ellipse cx="0" cy="-12" rx="4" ry="12" fill="none" stroke="#E8A317" strokeWidth="1.5" transform="rotate(30)"/>
            <ellipse cx="0" cy="-12" rx="4" ry="12" fill="none" stroke="#C41E3A" strokeWidth="1.5" transform="rotate(-30)"/>
            <ellipse cx="0" cy="-12" rx="4" ry="12" fill="none" stroke="#C41E7F" strokeWidth="1.5" transform="rotate(60)"/>
            <ellipse cx="0" cy="-12" rx="4" ry="12" fill="none" stroke="#C41E7F" strokeWidth="1.5" transform="rotate(-60)"/>
            <circle cx="0" cy="-12" r="3" fill="#E8A317" opacity="0.5"/>
          </g>
        </motion.svg>

        {/* Bottom-left */}
        <motion.svg
          animate={{ y: [0, 6, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ y: { duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 4 }, opacity: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.6 } }}
          className="absolute bottom-16 left-4 md:left-10"
          style={{ rotate: mousePos.x * 15, filter: 'url(#lotus-glow)', transition: 'rotate 0.3s ease-out' }}
          width="80" height="80" viewBox="0 0 120 120"
        >
          <path d="M0,120 L0,0" stroke="#E8A317" strokeWidth="2"/>
          <path d="M0,120 L120,120" stroke="#E8A317" strokeWidth="2"/>
          <g transform="translate(24, 96) rotate(45)">
            <ellipse cx="0" cy="-12" rx="4" ry="12" fill="none" stroke="#C41E3A" strokeWidth="1.5"/>
            <ellipse cx="0" cy="-12" rx="4" ry="12" fill="none" stroke="#E8A317" strokeWidth="1.5" transform="rotate(30)"/>
            <ellipse cx="0" cy="-12" rx="4" ry="12" fill="none" stroke="#C41E3A" strokeWidth="1.5" transform="rotate(-30)"/>
            <ellipse cx="0" cy="-12" rx="4" ry="12" fill="none" stroke="#C41E7F" strokeWidth="1.5" transform="rotate(60)"/>
            <ellipse cx="0" cy="-12" rx="4" ry="12" fill="none" stroke="#C41E7F" strokeWidth="1.5" transform="rotate(-60)"/>
            <circle cx="0" cy="-12" r="3" fill="#E8A317" opacity="0.5"/>
          </g>
        </motion.svg>

        {/* Bottom-right */}
        <motion.svg
          animate={{ y: [0, 6, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ y: { duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 6 }, opacity: { duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 2.4 } }}
          className="absolute bottom-16 right-4 md:right-10"
          style={{ rotate: -mousePos.x * 15, filter: 'url(#lotus-glow)', transition: 'rotate 0.3s ease-out' }}
          width="80" height="80" viewBox="0 0 120 120"
        >
          <path d="M120,120 L120,0" stroke="#E8A317" strokeWidth="2"/>
          <path d="M120,120 L0,120" stroke="#E8A317" strokeWidth="2"/>
          <g transform="translate(96, 96) rotate(-45)">
            <ellipse cx="0" cy="-12" rx="4" ry="12" fill="none" stroke="#C41E3A" strokeWidth="1.5"/>
            <ellipse cx="0" cy="-12" rx="4" ry="12" fill="none" stroke="#E8A317" strokeWidth="1.5" transform="rotate(30)"/>
            <ellipse cx="0" cy="-12" rx="4" ry="12" fill="none" stroke="#C41E3A" strokeWidth="1.5" transform="rotate(-30)"/>
            <ellipse cx="0" cy="-12" rx="4" ry="12" fill="none" stroke="#C41E7F" strokeWidth="1.5" transform="rotate(60)"/>
            <ellipse cx="0" cy="-12" rx="4" ry="12" fill="none" stroke="#C41E7F" strokeWidth="1.5" transform="rotate(-60)"/>
            <circle cx="0" cy="-12" r="3" fill="#E8A317" opacity="0.5"/>
          </g>
        </motion.svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col flex-1 w-full max-w-4xl mx-auto px-4 text-center">
        {/* Centered content group */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Scroll-aware Logo with music player integration */}
          <motion.div
            style={{ scale: heroLogoScale, opacity: heroLogoOpacity }}
            className="flex justify-center mb-4 md:mb-8 relative"
          >
            <div className="relative">
              <motion.img
                src="/images/mithila-folk-fusion-logo.png"
                alt="Mithila Folk Fusions"
                className="w-40 h-40 md:w-[250px] md:h-[250px]"
                animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                transition={isPlaying ? { repeat: Infinity, duration: 10, ease: 'linear' } : { duration: 0.5 }}
              />

              {/* Gramophone pin — half-logo size at top-right */}
              <motion.svg
                initial={{ scale: 0, rotate: -12 }}
                animate={isPlaying ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -12 }}
                transition={{ type: 'spring', stiffness: 180, damping: 16 }}
                className="absolute top-0 -right-0 md:top-0 md:-right-3 z-20 w-[96px] h-[96px] md:w-[170px] md:h-[170px] pointer-events-none"
                viewBox="0 0 100 100"
                fill="none"
              >
                {/* Pivot mount — top-right outside disc */}
                <circle cx="90" cy="10" r="7" fill="#8B1A1A" stroke="#E8A317" strokeWidth="1.5" />
                <circle cx="90" cy="10" r="3" fill="#E8A317" />
                {/* Tonearm — thicker */}
                <line x1="88" y1="14" x2="70" y2="30" stroke="#8B1A1A" strokeWidth="4" strokeLinecap="round" />
                {/* Headshell — cartridge body on disc edge */}
                <g transform="rotate(-45, 70, 30)">
                  <path d="M62,27 L78,27 L77,33 L61,33 Z" fill="#8B1A1A" stroke="#C41E3A" strokeWidth="0.5" />
                  <rect x="63" y="28" width="14" height="4" rx="1" fill="#E8A317" opacity="0.5" />
                  <rect x="65" y="29" width="10" height="2" rx="0.5" fill="#C41E3A" opacity="0.3" />
                  {/* Finger lift */}
                  <path d="M75,27 Q77,24 79,26" fill="none" stroke="#E8A317" strokeWidth="1" strokeLinecap="round" />
                </g>
                {/* Stylus shaft */}
                <line x1="69" y1="33" x2="66" y2="40" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" />
                {/* Stylus tip — diamond on disc edge */}
                <polygon points="66,40 64.5,42.5 66,45 67.5,42.5" fill="#E8A317" />
                <circle cx="66" cy="43" r="1" fill="#FFF8DC" opacity="0.6" />
              </motion.svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col items-center mb-3"
          >
            <h1 className="font-cinzel text-[clamp(1.25rem,5vw,2.5rem)] sm:text-4xl md:text-6xl lg:text-7xl text-cream leading-tight whitespace-nowrap">
              Mithila{' '}
              <span className="text-madhubani-yellow">Folk Art</span>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="w-3/4 h-0.5 bg-gradient-to-r from-transparent via-madhubani-yellow/80 to-transparent mt-3"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="font-playfair text-cream/90 text-base md:text-xl italic mb-2 md:mb-3"
          >
            by <span className="text-madhubani-yellow font-semibold not-italic">Shivangi Singh</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="font-cormorant text-sm md:text-xl text-cream/80 max-w-2xl mx-auto mb-3 md:mb-6 leading-relaxed bg-madhubani-black/80 rounded-lg px-4 py-3 md:px-6 md:py-4"
          >
            Shivangi Singh reimagines Mithila's 2,500 year old visual language 
            for a world in motion. Line by line, motif by motif
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a
              href="#gallery"
              onClick={(e) => { e.preventDefault(); document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group relative px-5 py-2.5 md:px-8 md:py-3 min-h-[34px] md:min-h-[42px] min-w-[150px] md:min-w-[180px] bg-madhubani-red text-cream font-playfair tracking-wider text-xs md:text-sm uppercase border-2 border-madhubani-yellow/50 hover:bg-madhubani-crimson transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Explore Gallery</span>
              <div className="absolute inset-0 bg-gradient-to-r from-madhubani-magenta to-madhubani-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#commission"
              onClick={(e) => { e.preventDefault(); document.getElementById('commission')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-5 py-2.5 md:px-8 md:py-3 min-h-[34px] md:min-h-[42px] min-w-[150px] md:min-w-[180px] bg-transparent text-cream font-playfair tracking-wider text-xs md:text-sm uppercase border-2 border-cream/40 hover:border-madhubani-yellow hover:text-madhubani-yellow transition-all duration-300"
            >
              Commission Art
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-cream/50 text-xs font-cormorant tracking-widest uppercase">Scroll</span>
            <svg width="20" height="30" viewBox="0 0 20 30">
              <rect x="6" y="0" width="8" height="16" rx="4" fill="none" stroke="#E8A317" strokeWidth="1.5" opacity="0.5"/>
              <circle cx="10" cy="6" r="2" fill="#E8A317" opacity="0.5"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
