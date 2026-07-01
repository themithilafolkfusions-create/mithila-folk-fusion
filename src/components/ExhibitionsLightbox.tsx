import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CameraShy } from 'camerashy';

interface ExhibitionImage {
  src: string;
  caption: string;
}

interface Props {
  images: ExhibitionImage[];
  selectedIndex: number | null;
  onClose: () => void;
}

const ExhibitionsLightbox: React.FC<Props> = ({ images, selectedIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    setCurrentIndex(selectedIndex);
  }, [selectedIndex]);

  const prev = useCallback(() => {
    if (currentIndex === null) return;
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex, images.length]);

  const next = useCallback(() => {
    if (currentIndex === null) return;
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, images.length]);

  useEffect(() => {
    if (currentIndex === null) return;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
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

  const img = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        key={`exh-lightbox-${currentIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 md:p-8 overflow-y-auto"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center text-cream/60 hover:text-cream transition-colors"
        >
          <X size={24} />
        </button>

        <div className="absolute top-4 left-4 z-20 font-cormorant text-sm text-cream/40 tracking-wider">
          {currentIndex + 1} / {images.length}
        </div>

        <div className="flex-1 flex items-center justify-center w-full max-w-5xl min-h-[50vh]">
          <CameraShy mode="blur" blur="20px" sensitivity="balanced" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <img
              src={img.src}
              alt={t('exhibitionsGallery.cap' + (currentIndex + 1))}
              className="max-w-full max-h-[65vh] md:max-h-[75vh] w-auto h-auto object-contain select-none"
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
              onContextMenu={(e) => e.preventDefault()}
            />
          </CameraShy>
        </div>

        <div className="w-full max-w-2xl mt-6 md:mt-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-madhubani-red/30 to-transparent" />
            <svg width="10" height="10" viewBox="0 0 12 12">
              <circle cx="6" cy="6" r="4" fill="none" stroke="#C41E7F" strokeWidth="0.8" />
              <circle cx="6" cy="6" r="1.5" fill="#E8A317" />
            </svg>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-madhubani-red/30 to-transparent" />
          </div>
          <svg className="inline-block w-6 h-6 text-madhubani-magenta/40 mb-2" viewBox="0 0 24 24" fill="none">
            <path d="M4 14C4 10 6 8 10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M4 18C4 14 6 12 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14 14C14 10 16 8 20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14 18C14 14 16 12 20 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <p className="font-cormorant text-lg md:text-xl text-cream/80 italic leading-relaxed px-4">
            {t('exhibitionsGallery.cap' + (currentIndex + 1))}
          </p>
          <svg className="inline-block w-6 h-6 text-madhubani-magenta/40 mt-2 rotate-180" viewBox="0 0 24 24" fill="none">
            <path d="M4 14C4 10 6 8 10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M4 18C4 14 6 12 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14 14C14 10 16 8 20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14 18C14 14 16 12 20 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-madhubani-red/30 to-transparent" />
            <svg width="10" height="10" viewBox="0 0 12 12">
              <circle cx="6" cy="6" r="4" fill="none" stroke="#C41E7F" strokeWidth="0.8" />
              <circle cx="6" cy="6" r="1.5" fill="#E8A317" />
            </svg>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-madhubani-red/30 to-transparent" />
          </div>
        </div>

        <button
          onClick={prev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-cream/40 hover:text-cream hover:bg-cream/10 rounded-full transition-all"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={next}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-cream/40 hover:text-cream hover:bg-cream/10 rounded-full transition-all"
        >
          <ChevronRight size={28} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ExhibitionsLightbox;
