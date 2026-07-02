import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ZoomIn, Send, ArrowLeft as ArrowLeftIcon } from 'lucide-react';
import { CameraShy } from 'camerashy';
import { SectionDivider } from './MadhubaniBorder';

const artworks = [
  {
    id: 1,
    src: '/images/resonance.jpeg',
    title: 'Resonance',
    category: 'Environment & Identity',
    description: 'A powerful visual dialogue between two contrasting realities of the Earth through a single female face, symbolically connected to the planet itself. One half represents a polluted world; the other reveals a thriving, pollution free world with lush forests and lotus flowers.',
    medium: 'Mithila Folk Art, acrylic on handmade canvas/paper',
  },
  {
    id: 2,
    src: '/images/bodhi-udaya.jpeg',
    title: 'Bodhi Udaya',
    category: 'Spirituality',
    description: 'A contemplative interpretation of Lord Buddha\'s enlightenment beneath the sacred Bodhi tree, expressed through traditional Mithila folk art with intricate Kachni, Bharni, and Godna motifs and mandala inspired arches.',
    medium: 'Mithila Folk Art, acrylic on handmade canvas/paper',
  },
  {
    id: 3,
    src: '/images/mythocircle.jpeg',
    title: 'Mythocircle',
    category: 'Mythology & Folklore',
    description: 'A Godna inspired artwork bringing together mythology, nature, and symbolic geometry. A turtle with concentric circular patterns carries the figure of Raja Sahlesh, a vessel of Mithila\'s oral history and heroic folklore.',
    medium: 'Godna Art, acrylic on handmade canvas/paper',
  },
  {
    id: 4,
    src: '/images/echoes-beneath-branches.jpeg',
    title: 'Echoes Beneath the Branches',
    category: 'Nature & Community',
    description: 'Created in black and white, this painting explores home as a shared and living experience. A majestic tree transformed into a sanctuary of birdhouses, with a tranquil pond, swimming ducks, and blooming lotuses.',
    medium: 'Mithila Folk Art, Black & White, acrylic on handmade canvas/paper',
  },
  {
    id: 5,
    src: '/images/one-earth-many-voices.jpeg',
    title: 'One Earth, Many Voices',
    category: 'Climate & Culture',
    description: 'A Mithila inspired mandala representing Earth as the shared home of humanity. International flags reflect that climate change knows no borders. Traditional motifs represent biodiversity and the balance between humans and nature.',
    medium: 'Mithila Folk Art, acrylic on handmade canvas/paper',
  },
  {
    id: 6,
    src: '/images/echoes-of-exile.jpeg',
    title: 'Echoes of Exile',
    category: 'Mythology & Heritage',
    description: 'Based on the Ramayana, Lord Rama\'s 14 year exile with Sita and Lakshman. Colorful motifs of flowers and birds set the enchanting backdrop of the forest, defining the significance of beautiful life no matter the circumstances.',
    medium: 'Mithila Folk Art, acrylic on handmade canvas/paper',
  },
];

const categories = ['All', 'Environment & Identity', 'Spirituality', 'Mythology & Folklore', 'Nature & Community', 'Climate & Culture', 'Mythology & Heritage'];

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
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const { t } = useTranslation();

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
          <span className="text-madhubani-teal font-cormorant text-lg tracking-[0.4em] uppercase">{t('gallery.sectionLabel')}</span>
          <h2 className="font-cinzel text-3xl md:text-5xl text-madhubani-black mt-3 mb-4">
            {t('gallery.headingPrefix')} <span className="text-madhubani-red">{t('gallery.headingHighlight')}</span>
          </h2>
          <SectionDivider variant="peacock" />
          <p className="font-cormorant text-lg text-madhubani-black/60 max-w-2xl mx-auto mt-4">
            {t('gallery.description')}
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
              {cat === 'All' ? t('gallery.filterAll') : cat}
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
              aria-label={t('gallery.ariaScrollLeft')}
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
              aria-label={t('gallery.ariaScrollRight')}
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
                    <div className="relative overflow-hidden border border-madhubani-red/10 m-2 mb-6 flex items-center justify-center">
                      <CameraShy mode="blur" blur="20px" sensitivity="balanced">
                      <img
                        src={artwork.src}
                        alt={artwork.title}
                        draggable="false"
                        onDragStart={(e) => e.preventDefault()}
                        className="w-full h-80 md:h-96 object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                      />
                      </CameraShy>

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
                        {t(`gallery.art${artwork.id}Title`)}
                      </h3>
                      <p className="font-cormorant text-sm text-madhubani-teal">{t(`gallery.art${artwork.id}Medium`)}</p>
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
            {t('gallery.viewFullPortfolio')}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 3l5 5-5 5" />
            </svg>
          </Link>
        </motion.div>

        {/* Sold Out Paintings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <span className="text-madhubani-teal font-cormorant text-lg tracking-[0.4em] uppercase">{t('gallery.soldSection')}</span>
            <h3 className="font-cinzel text-2xl md:text-3xl text-madhubani-black mt-3 mb-2">
              {t('gallery.soldHeadingPrefix')} <span className="text-madhubani-red">{t('gallery.soldHeadingHighlight')}</span>
            </h3>
            <p className="font-cormorant text-madhubani-black/50">
              {t('gallery.soldDescription')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { src: '/images/sold-out/sold-out-1.jpeg', title: 'Sold' },
              { src: '/images/sold-out/sold-out-2.jpeg', title: 'Sold' },
              { src: '/images/sold-out/sold-out-3.jpeg', title: 'Sold' },
              { src: '/images/sold-out/sold-out-4.jpeg', title: 'Sold' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group"
              >
                <div className="relative overflow-hidden border border-madhubani-red/10 flex items-center justify-center">
                  <CameraShy mode="blur" blur="20px" sensitivity="balanced">
                  <img
                    src={item.src}
                    alt={t('gallery.soldAlt')}
                    draggable="false"
                    onDragStart={(e) => e.preventDefault()}
                    className="w-full h-48 md:h-64 object-cover opacity-60 grayscale transition-all duration-500 group-hover:opacity-80 group-hover:grayscale-0"
                  />
                  </CameraShy>
                  <div className="absolute inset-0 bg-madhubani-black/40 flex items-center justify-center">
                    <span className="font-cinzel text-cream text-sm md:text-base tracking-[0.3em] uppercase border border-cream/40 px-4 py-2 bg-madhubani-black/30 backdrop-blur-sm">
                      {t('gallery.soldLabel')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
                <CameraShy mode="blur" blur="20px" sensitivity="balanced">
                <img
                  src={selectedArt.src}
                  alt={selectedArt.title}
                  draggable="false"
                  onDragStart={(e) => e.preventDefault()}
                  className="w-full h-64 md:h-full object-cover"
                />
                </CameraShy>
                <div className="p-6 md:p-8 flex flex-col overflow-y-auto max-h-[60vh] md:max-h-[90vh]">
                  {showInquiryForm ? (
                    <>
                      <button
                        onClick={() => { setShowInquiryForm(false); setSubmitted(false); }}
                        className="inline-flex items-center gap-1.5 text-madhubani-red/60 hover:text-madhubani-red transition-colors mb-4 font-playfair text-xs tracking-wider"
                      >
                        <ArrowLeftIcon size={14} />
                        {t('gallery.backToArt')}
                      </button>

                      <h4 className="font-cinzel text-lg text-madhubani-black mb-4">
                        {t('contact.title')} <span className="text-madhubani-magenta">{t('contact.titleHighlight')}</span>
                      </h4>

                      <div className="space-y-4">
                        <div>
                          <label className="font-playfair text-xs text-madhubani-black/60 uppercase tracking-wider block mb-1.5">
                            {t('contact.formName')}
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="w-full px-3 py-3 bg-cream-light border border-madhubani-red/20 font-cormorant text-base text-madhubani-black focus:outline-none focus:border-madhubani-red transition-colors"
                            placeholder={t('contact.formNamePlaceholder')}
                          />
                        </div>

                        <div>
                          <label className="font-playfair text-xs text-madhubani-black/60 uppercase tracking-wider block mb-1.5">
                            {t('contact.formEmail')}
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="w-full px-3 py-3 bg-cream-light border border-madhubani-red/20 font-cormorant text-base text-madhubani-black focus:outline-none focus:border-madhubani-red transition-colors"
                            placeholder={t('contact.formEmailPlaceholder')}
                          />
                        </div>

                        <div>
                          <label className="font-playfair text-xs text-madhubani-black/60 uppercase tracking-wider block mb-1.5">
                            {t('contact.formSubject')}
                          </label>
                          <select
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            required
                            className="w-full px-3 py-3 bg-cream-light border border-madhubani-red/20 font-cormorant text-base text-madhubani-black focus:outline-none focus:border-madhubani-red transition-colors"
                          >
                            <option value="">{t('contact.formSubjectPlaceholder')}</option>
                            <option value="commission">{t('contact.subCommission')}</option>
                            <option value="purchase">{t('contact.subPurchase')}</option>
                            <option value="workshop">{t('contact.subWorkshop')}</option>
                            <option value="exhibition">{t('contact.subExhibition')}</option>
                            <option value="collaboration">{t('contact.subCollaboration')}</option>
                            <option value="other">{t('contact.subOther')}</option>
                          </select>
                        </div>

                        <div>
                          <label className="font-playfair text-xs text-madhubani-black/60 uppercase tracking-wider block mb-1.5">
                            {t('contact.formMessage')}
                          </label>
                          <textarea
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            rows={4}
                            className="w-full px-3 py-3 bg-cream-light border border-madhubani-red/20 font-cormorant text-base text-madhubani-black focus:outline-none focus:border-madhubani-red transition-colors resize-none"
                            placeholder={t('contact.formMessagePlaceholder')}
                          />
                        </div>

                        {submitted ? (
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center font-cormorant text-madhubani-teal text-lg"
                          >
                            {t('contact.formThankYou')}
                          </motion.p>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              const subjectLine = 'Mithila Folk Fusions - ' + formData.subject;
                              const body = 'Name: ' + formData.name + '\n' +
                                'Email: ' + formData.email + '\n' +
                                'Subject: ' + formData.subject + '\n' +
                                'Artwork: ' + t(`gallery.art${selectedArt.id}Title`) + '\n\n' +
                                formData.message + '\n\n---\nSent from Mithila Folk Fusions';
                              window.location.href = 'mailto:Mithilafolkfusions@gmail.com?subject=' +
                                encodeURIComponent(subjectLine) + '&body=' + encodeURIComponent(body);
                              setSubmitted(true);
                              setTimeout(() => { setShowInquiryForm(false); setSubmitted(false); }, 3000);
                            }}
                            className="w-full py-3 bg-madhubani-red text-cream font-playfair text-sm tracking-wider uppercase hover:bg-madhubani-crimson transition-colors flex items-center justify-center gap-2 group"
                          >
                            <span>{t('contact.formSubmit')}</span>
                            <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                          </button>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="text-madhubani-magenta font-cormorant text-sm tracking-[0.3em] uppercase">
                        {selectedArt.category}
                      </span>
                      <h3 className="font-cinzel text-2xl md:text-3xl text-madhubani-black mt-2 mb-4">
                        {t(`gallery.art${selectedArt.id}Title`)}
                      </h3>
                      <div className="w-20 h-0.5 bg-madhubani-red mb-4" />
                      <p className="font-cormorant text-lg text-madhubani-black/70 leading-relaxed mb-4">
                        {t(`gallery.art${selectedArt.id}Desc`)}
                      </p>
                      <p className="font-playfair text-sm text-madhubani-teal">
                        {t('gallery.medium')} {selectedArt.medium}
                      </p>
                      <button
                        onClick={() => {
                          setFormData({
                            name: '',
                            email: '',
                            subject: 'purchase',
                            message: 'I\'m interested in: ' + t(`gallery.art${selectedArt.id}Title`) + '\n\n',
                          });
                          setSubmitted(false);
                          setShowInquiryForm(true);
                        }}
                        className="mt-6 w-full px-6 py-2 bg-madhubani-red text-cream font-playfair text-sm tracking-wider text-center hover:bg-madhubani-crimson transition-colors"
                      >
                        {t('gallery.inquireAbout')}
                      </button>
                    </>
                  )}
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
