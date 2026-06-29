import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ZoomIn } from 'lucide-react';
import { SectionDivider } from './MadhubaniBorder';

const artworks = [
  {
    id: 1,
    src: '/images/artwork1.jpg',
    title: 'The Royal Peacock',
    category: 'Nature & Birds',
    description: 'An ornate peacock rendered in traditional Madhubani style with intricate geometric tail feathers',
    medium: 'Pen & Ink on Handmade Paper',
  },
  {
    id: 2,
    src: '/images/artwork2.jpg',
    title: 'Divine Goddess',
    category: 'Mythology',
    description: 'A powerful depiction of the goddess seated on a lotus, surrounded by sacred symbols',
    medium: 'Mixed Media on Canvas',
  },
  {
    id: 3,
    src: '/images/artwork3.jpg',
    title: 'Tree of Life',
    category: 'Sacred Motifs',
    description: 'The cosmic tree connecting earth and heaven, flanked by elephants and adorned with birds',
    medium: 'Natural Dyes on Handmade Paper',
  },
  {
    id: 4,
    src: '/images/artwork4.jpg',
    title: 'The Kite Runner',
    category: 'Cultural Fusion',
    description: 'A woman in traditional dress flying a kite, celebrating the joy and freedom of folk life',
    medium: 'Pen & Watercolor on Paper',
  },
  {
    id: 5,
    src: '/images/artwork5.jpg',
    title: 'Lakshmi - The Benevolent',
    category: 'Mythology',
    description: 'Goddess Lakshmi in contemplative meditation, rendered in dramatic black and white linework',
    medium: 'Pen & Ink on Handmade Paper',
  },
  {
    id: 6,
    src: '/images/artwork6.jpg',
    title: 'Matsya Mandala',
    category: 'Sacred Motifs',
    description: 'Twin fish swimming in eternal harmony, a symbol of fertility and prosperity in Mithila art',
    medium: 'Pen & Ink with Watercolor',
  },
];

const categories = ['All', 'Nature & Birds', 'Mythology', 'Sacred Motifs', 'Cultural Fusion'];

const CornerOrnament: React.FC<{ className: string }> = ({ className }) => (
  <svg className={`absolute z-10 pointer-events-none ${className}`} width="28" height="28" viewBox="0 0 28 28">
    <path d="M0,14 Q0,0 14,0" fill="none" stroke="#8B1A1A" strokeWidth="1.2" />
    <circle cx="3" cy="3" r="2" fill="#E8A317" />
    <path d="M4,10 Q4,4 10,4" fill="none" stroke="#C41E7F" strokeWidth="0.8" />
  </svg>
);

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedArt, setSelectedArt] = useState<typeof artworks[0] | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filtered = selectedCategory === 'All'
    ? artworks
    : artworks.filter(a => a.category === selectedCategory);

  const CARD_WIDTH = 352;

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const smoothScroll = (target: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({ left: target, behavior: 'smooth' });
  };

  const scrollByCards = (direction: number) => {
    if (!scrollRef.current) return;
    const target = scrollRef.current.scrollLeft + direction * CARD_WIDTH * 2;
    smoothScroll(target);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const atStart = scrollLeft <= 0 && e.deltaY < 0;
    const atEnd = scrollLeft >= scrollWidth - clientWidth - 1 && e.deltaY > 0;
    if (!atStart && !atEnd) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY * 1.5;
      checkScroll();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
    scrollRef.current.style.scrollBehavior = 'auto';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
    checkScroll();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) scrollRef.current.style.scrollBehavior = 'smooth';
  };

  return (
    <section id="gallery" className="relative py-28 md:py-44 bg-gradient-to-b from-cream to-cream-dark overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="gallery-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="15" fill="none" stroke="#8B1A1A" strokeWidth="0.5"/>
              <circle cx="30" cy="30" r="8" fill="none" stroke="#006B6B" strokeWidth="0.5"/>
              <circle cx="0" cy="0" r="5" fill="none" stroke="#C41E7F" strokeWidth="0.5"/>
              <circle cx="60" cy="0" r="5" fill="none" stroke="#C41E7F" strokeWidth="0.5"/>
              <circle cx="0" cy="60" r="5" fill="none" stroke="#C41E7F" strokeWidth="0.5"/>
              <circle cx="60" cy="60" r="5" fill="none" stroke="#C41E7F" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gallery-pattern)"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-madhubani-teal font-cormorant text-lg tracking-[0.4em] uppercase">Portfolio</span>
          <h2 className="font-cinzel text-3xl md:text-5xl text-madhubani-black mt-3 mb-4">
            Art <span className="text-madhubani-red">Gallery</span>
          </h2>
          <SectionDivider variant="peacock" />
          <p className="font-cormorant text-lg text-madhubani-black/60 max-w-2xl mx-auto mt-4">
            Each artwork is a conversation between ancient Mithila traditions and the contemporary soul —
            hand-painted with love, patience, and reverence for the craft
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 font-playfair text-sm tracking-wider transition-all duration-300 border ${
                selectedCategory === cat
                  ? 'bg-madhubani-red text-cream border-madhubani-red'
                  : 'bg-transparent text-madhubani-black/70 border-madhubani-red/30 hover:border-madhubani-red hover:text-madhubani-red'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery — Horizontal Scroll with nav buttons */}
        <div className="relative group/scroll">
          {/* Left navigation button */}
          {canScrollLeft && (
            <button
              onClick={() => scrollByCards(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 w-14 h-14 bg-cream/90 backdrop-blur-sm border-2 border-madhubani-red/30 text-madhubani-red flex items-center justify-center hover:bg-madhubani-red hover:text-cream transition-all duration-300 shadow-lg"
              aria-label="Scroll left"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          {/* Right navigation button */}
          {canScrollRight && (
            <button
              onClick={() => scrollByCards(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 w-14 h-14 bg-cream/90 backdrop-blur-sm border-2 border-madhubani-red/30 text-madhubani-red flex items-center justify-center hover:bg-madhubani-red hover:text-cream transition-all duration-300 shadow-lg"
              aria-label="Scroll right"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}

          {/* Left fade */}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cream-dark to-transparent z-10 pointer-events-none" />
          )}
          {/* Right fade */}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cream-dark to-transparent z-10 pointer-events-none" />
          )}

          <div
            ref={scrollRef}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onScroll={checkScroll}
            className={`flex gap-8 md:gap-10 overflow-x-auto pb-6 scrollbar-hide px-8 select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{ scrollBehavior: 'smooth' }}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((artwork, index) => (
                <motion.div
                  key={artwork.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group shrink-0 w-80 md:w-[22rem]"
                  onClick={() => { if (!isDragging) setSelectedArt(artwork); }}
                >
                  {/* Museum-style card with decorative frame */}
                  <div className="relative border border-madhubani-red/20 bg-cream-light p-6 md:p-8 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-madhubani-red/10">
                    {/* Corner ornaments */}
                    <CornerOrnament className="top-2 left-2" />
                    <CornerOrnament className="top-2 right-2 -scale-x-100" />
                    <CornerOrnament className="bottom-2 left-2 -scale-y-100" />
                    <CornerOrnament className="bottom-2 right-2 scale-[-1]" />

                    {/* Inner image frame */}
                    <div className="relative overflow-hidden border border-madhubani-red/10 m-2 mb-6">
                      <img
                        src={artwork.src}
                        alt={artwork.title}
                        className="w-full h-80 md:h-96 object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-madhubani-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full border-2 border-cream/80 flex items-center justify-center backdrop-blur-sm">
                          <ZoomIn size={24} className="text-cream" />
                        </div>
                      </div>
                    </div>

                    {/* Decorative divider */}
                    <div className="flex items-center justify-center gap-3 mb-5">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-madhubani-red/20 to-transparent" />
                      <svg width="16" height="16" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="3" fill="none" stroke="#C41E7F" strokeWidth="0.8" />
                        <circle cx="8" cy="8" r="1" fill="#E8A317" />
                      </svg>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-madhubani-red/20 to-transparent" />
                    </div>

                    {/* Card info */}
                    <div className="text-center space-y-2 px-2">
                      <h3 className="font-cinzel text-lg md:text-xl text-madhubani-black group-hover:text-madhubani-red transition-colors">
                        {artwork.title}
                      </h3>
                      <p className="font-cormorant text-sm text-madhubani-teal">{artwork.medium}</p>
                      <p className="font-playfair text-xs text-madhubani-black/40 tracking-widest uppercase">{artwork.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* View Full Portfolio link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-playfair text-sm tracking-wider text-madhubani-red border-b border-madhubani-red/40 pb-1 hover:border-madhubani-red transition-colors"
          >
            View Full Portfolio
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 3l5 5-5 5" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedArt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-madhubani-black/90 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedArt(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full bg-cream border-4 border-madhubani-red"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedArt(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-madhubani-red text-cream flex items-center justify-center hover:bg-madhubani-crimson transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2">
                <img
                  src={selectedArt.src}
                  alt={selectedArt.title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-madhubani-magenta font-cormorant text-sm tracking-[0.3em] uppercase">
                    {selectedArt.category}
                  </span>
                  <h3 className="font-cinzel text-2xl md:text-3xl text-madhubani-black mt-2 mb-4">
                    {selectedArt.title}
                  </h3>
                  <div className="w-20 h-0.5 bg-madhubani-red mb-4" />
                  <p className="font-cormorant text-lg text-madhubani-black/70 leading-relaxed mb-4">
                    {selectedArt.description}
                  </p>
                  <p className="font-playfair text-sm text-madhubani-teal">
                    Medium: {selectedArt.medium}
                  </p>
                  <a
                    href="#commission"
                    onClick={(e) => { e.preventDefault(); setSelectedArt(null); setTimeout(() => document.getElementById('commission')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
                    className="mt-6 inline-block px-6 py-2 bg-madhubani-red text-cream font-playfair text-sm tracking-wider text-center hover:bg-madhubani-crimson transition-colors"
                  >
                    Inquire About This Piece
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
