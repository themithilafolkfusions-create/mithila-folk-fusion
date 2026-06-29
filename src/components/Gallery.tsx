import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedArt, setSelectedArt] = useState<typeof artworks[0] | null>(null);

  const filtered = selectedCategory === 'All' 
    ? artworks 
    : artworks.filter(a => a.category === selectedCategory);

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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="gallery-card group cursor-pointer bg-cream-light"
                onClick={() => setSelectedArt(artwork)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={artwork.src}
                    alt={artwork.title}
                    className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-madhubani-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 rounded-full border-2 border-cream flex items-center justify-center"
                    >
                      <ZoomIn size={24} className="text-cream" />
                    </motion.div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 bg-madhubani-red/90 backdrop-blur-sm px-3 py-1">
                    <span className="text-cream text-xs font-playfair tracking-wider">{artwork.category}</span>
                  </div>
                </div>

                {/* Card info */}
                <div className="p-6 border-t-2 border-madhubani-red/20 text-center">
                  <h3 className="font-cinzel text-lg text-madhubani-black group-hover:text-madhubani-red transition-colors">
                    {artwork.title}
                  </h3>
                  <p className="font-cormorant text-sm text-madhubani-teal mt-1">{artwork.medium}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
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
                    onClick={() => setSelectedArt(null)}
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
