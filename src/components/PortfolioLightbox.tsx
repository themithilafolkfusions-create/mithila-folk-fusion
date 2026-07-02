import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowLeft, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
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
  const [showInquiryForm, setShowInquiryForm] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = React.useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setCurrentIndex(selectedIndex);
    setShowInquiryForm(false);
    setSubmitted(false);
  }, [selectedIndex]);

  const prev = useCallback(() => {
    if (currentIndex === null) return;
    const el = document.getElementById('portfolio-lightbox');
    if (el) el.scrollTop = 0;
    setCurrentIndex(currentIndex === 0 ? works.length - 1 : currentIndex - 1);
    setShowInquiryForm(false);
    setSubmitted(false);
  }, [currentIndex, works.length]);

  const next = useCallback(() => {
    if (currentIndex === null) return;
    const el = document.getElementById('portfolio-lightbox');
    if (el) el.scrollTop = 0;
    setCurrentIndex(currentIndex === works.length - 1 ? 0 : currentIndex + 1);
    setShowInquiryForm(false);
    setSubmitted(false);
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

        {/* Description / Inquiry panel */}
        <div className="w-full md:w-[480px] shrink-0 bg-cream/5 backdrop-blur-sm border-t md:border-t-0 md:border-l border-cream/10 p-8 md:p-10 flex flex-col justify-start overflow-y-auto max-h-none md:max-h-screen">
          {showInquiryForm ? (
            <>
              <button
                onClick={() => { setShowInquiryForm(false); setSubmitted(false); }}
                className="inline-flex items-center gap-1.5 text-cream/40 hover:text-cream transition-colors mb-5 font-playfair text-xs tracking-wider"
              >
                <ArrowLeft size={14} />
                {t('gallery.backToArt')}
              </button>

              <h4 className="font-cinzel text-2xl text-cream mb-5">
                {t('contact.title')} <span className="text-madhubani-magenta">{t('contact.titleHighlight')}</span>
              </h4>

              <div className="space-y-4">
                <div>
                  <label className="font-playfair text-xs text-cream/40 uppercase tracking-wider block mb-1.5">
                    {t('contact.formName')}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-3 py-3 bg-cream/10 border border-cream/20 font-cormorant text-base text-cream focus:outline-none focus:border-madhubani-magenta transition-colors"
                    placeholder={t('contact.formNamePlaceholder')}
                  />
                </div>

                <div>
                  <label className="font-playfair text-xs text-cream/40 uppercase tracking-wider block mb-1.5">
                    {t('contact.formEmail')}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-3 py-3 bg-cream/10 border border-cream/20 font-cormorant text-base text-cream focus:outline-none focus:border-madhubani-magenta transition-colors"
                    placeholder={t('contact.formEmailPlaceholder')}
                  />
                </div>

                <div>
                  <label className="font-playfair text-xs text-cream/40 uppercase tracking-wider block mb-1.5">
                    {t('contact.formSubject')}
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-3 py-3 bg-cream/10 border border-cream/20 font-cormorant text-base text-cream focus:outline-none focus:border-madhubani-magenta transition-colors"
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
                  <label className="font-playfair text-xs text-cream/40 uppercase tracking-wider block mb-1.5">
                    {t('contact.formMessage')}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-3 py-3 bg-cream/10 border border-cream/20 font-cormorant text-base text-cream focus:outline-none focus:border-madhubani-magenta transition-colors resize-none"
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
                        'Artwork: ' + t(`portfolio.art${work.id}Title`) + '\n\n' +
                        formData.message + '\n\n---\nSent from Mithila Folk Fusions';
                      const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1' +
                        '&to=' + encodeURIComponent('Mithilafolkfusions@gmail.com') +
                        '&su=' + encodeURIComponent(subjectLine) +
                        '&body=' + encodeURIComponent(body);
                      window.open(gmailUrl, '_blank');
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
              <span className="font-playfair text-xs md:text-sm tracking-[0.3em] uppercase text-madhubani-magenta border border-madhubani-magenta/30 px-4 py-1.5 inline-block w-fit mb-5">
                {work.category}
              </span>
              <h2 className="font-cinzel text-3xl md:text-5xl text-cream leading-tight mb-5">
                {t(`portfolio.art${work.id}Title`)}
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
                  <span className="text-madhubani-teal">{t('portfolioLightbox.medium')}:</span> {work.medium}
                </p>
              </div>

              <button
                onClick={() => {
                  setFormData({
                    name: '',
                    email: '',
                    subject: 'purchase',
                    message: 'I\'m interested in: ' + t(`portfolio.art${work.id}Title`) + '\n\n',
                  });
                  setSubmitted(false);
                  setShowInquiryForm(true);
                }}
                className="inline-block mt-6 w-full px-6 py-3 border border-madhubani-red text-madhubani-red font-playfair text-sm tracking-wider hover:bg-madhubani-red hover:text-cream transition-all duration-300 text-center"
              >
                {t('portfolioLightbox.inquireAbout')}
              </button>
            </>
          )}
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
