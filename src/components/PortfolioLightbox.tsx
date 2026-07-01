import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { CameraShy } from 'camerashy';

interface PortfolioWork {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
  medium: string;
  dimensions: string;
}

interface Props {
  works: PortfolioWork[];
  selectedIndex: number | null;
  onClose: () => void;
}

const PortfolioLightbox: React.FC<Props> = ({ works, selectedIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = React.useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      setCurrentIndex(selectedIndex);
    }
  }, [selectedIndex]);

  const prev = useCallback(() => {
    if (currentIndex === null) return;
    const el = document.getElementById('portfolio-lightbox');
    if (el) el.scrollTop = 0;
    setCurrentIndex(currentIndex === 0 ? works.length - 1 : currentIndex - 1);
  }, [currentIndex, works.length]);

  const next = useCallback(() => {
    if (currentIndex === null) return;
    const el = document.getElementById('portfolio-lightbox');
    if (el) el.scrollTop = 0;
    setCurrentIndex(currentIndex === works.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, works.length]);

  useEffect(() => {
    if (currentIndex === null) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose, prev, next]);

  if (currentIndex === null) return null;

  const work = works[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        key={`lightbox-${currentIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        id="portfolio-lightbox"
        className="fixed inset-0 z-[100] bg-black/95 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center text-cream/60 hover:text-cream transition-colors"
        >
          <X size={24} />
        </button>

        {/* Counter */}
        <div className="absolute top-4 left-4 z-20 font-cormorant text-sm text-cream/40 tracking-wider">
          {currentIndex + 1} / {works.length}
        </div>

        {/* Image area */}
        <div className="flex-1 flex items-center justify-center p-4 md:p-8 min-h-[50vh] md:min-h-0">
          <CameraShy mode="blur" blur="20px" sensitivity="balanced" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <img
              src={work.src}
              alt={work.title}
              className="max-w-full max-h-[80vh] md:max-h-[90vh] w-auto h-auto object-contain select-none"
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
              onContextMenu={(e) => e.preventDefault()}
            />
          </CameraShy>
        </div>

        {/* Description panel */}
        <div className="w-full md:w-[480px] shrink-0 bg-cream/5 backdrop-blur-sm border-t md:border-t-0 md:border-l border-cream/10 p-8 md:p-10 flex flex-col justify-start overflow-y-auto max-h-none md:max-h-screen">
          <span className="font-playfair text-xs md:text-sm tracking-[0.3em] uppercase text-madhubani-magenta border border-madhubani-magenta/30 px-4 py-1.5 inline-block w-fit mb-5">
            {work.category}
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl text-cream leading-tight mb-5">
            {work.title}
          </h2>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-0.5 bg-madhubani-red" />
            <svg width="10" height="10" viewBox="0 0 12 12">
              <circle cx="6" cy="6" r="2" fill="none" stroke="#E8A317" strokeWidth="0.8" />
              <circle cx="6" cy="6" r="0.8" fill="#C41E7F" />
            </svg>
          </div>
          <div className="font-cormorant text-lg md:text-xl text-cream/70 leading-relaxed space-y-4 mb-8">
            {work.description.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="space-y-3 pt-5 border-t border-cream/10">
            <p className="font-playfair text-base md:text-lg text-cream/50">
              <span className="text-madhubani-teal">Medium:</span> {work.medium}
            </p>
            <p className="font-playfair text-base md:text-lg text-cream/50">
              <span className="text-madhubani-teal">Dimensions:</span> {work.dimensions}
            </p>
          </div>

          <Link
            to="/#commission"
            onClick={onClose}
            className="inline-block mt-6 px-6 py-3 border border-madhubani-red text-madhubani-red font-playfair text-sm tracking-wider hover:bg-madhubani-red hover:text-cream transition-all duration-300 text-center"
          >
            Inquire About This Piece
          </Link>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-cream/40 hover:text-cream hover:bg-cream/10 rounded-full transition-all"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={next}
          className="absolute right-2 md:right-[calc(480px+1rem)] top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-cream/40 hover:text-cream hover:bg-cream/10 rounded-full transition-all"
        >
          <ChevronRight size={28} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default PortfolioLightbox;
