import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CameraShy } from 'camerashy';
import { SectionDivider } from './MadhubaniBorder';
import ExhibitionsLightbox from './ExhibitionsLightbox';

const galleryImages = [
  { src: '/images/eu-podium.jpg', caption: 'Shivangi Singh speaking at EU External Action Service, Brussels. Mithila folk art cultural diplomacy' },
  { src: '/images/un-outdoor.jpg', caption: 'Mithila artist Shivangi Singh at United Nations Headquarters, New York. Art for SDGs exhibition' },
  { src: '/images/eu-backdrop.jpg', caption: 'Madhubani artist at EU External Action venue, Brussels. MithilaFolkFusions exhibition' },
  { src: '/images/un-exhibition.jpg', caption: 'Art for SDGs Exhibition at United Nations. Shivangi Singh presenting Mithila folk art' },
  { src: '/images/eu-group.jpg', caption: 'Shivangi Singh with international delegates at EU Headquarters, Brussels cultural showcase' },
  { src: '/images/un-discussing.jpg', caption: 'Shivangi Singh discussing Mithila art techniques with visitors at UN exhibition, New York' },
  { src: '/images/eu-viewing.jpg', caption: 'Shivangi Singh guiding visitors through Madhubani exhibition at European Union, Brussels' },
  { src: '/images/un-presenting.jpg', caption: 'Shivangi Singh presenting Mithila folk artwork at United Nations Headquarters, New York' },
];

const CornerOrnament: React.FC<{ className: string }> = ({ className }) => (
  <svg className={`absolute z-10 pointer-events-none ${className}`} width="24" height="24" viewBox="0 0 24 24">
    <path d="M0,12 Q0,0 12,0" fill="none" stroke="#8B1A1A" strokeWidth="1" />
    <circle cx="2.5" cy="2.5" r="1.8" fill="#E8A317" />
    <path d="M4,9 Q4,4 9,4" fill="none" stroke="#C41E7F" strokeWidth="0.7" />
  </svg>
);

const ExhibitionsGallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { t } = useTranslation();
  return (
    <section className="relative py-28 md:py-44 bg-gradient-to-b from-cream-dark to-cream overflow-hidden">
      <div className="absolute inset-0 rangoli-bg opacity-30 pointer-events-none" />

      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-madhubani-teal via-madhubani-magenta to-madhubani-red opacity-15" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-madhubani-red via-madhubani-magenta to-madhubani-teal opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
            <span className="text-madhubani-teal font-cormorant text-lg tracking-[0.4em] uppercase">{t('exhibitionsGallery.sectionLabel')}</span>
          <h2 className="font-cinzel text-3xl md:text-5xl text-madhubani-black mt-3 mb-4">
            {t('exhibitionsGallery.headingPrefix')} <span className="text-madhubani-red">{t('exhibitionsGallery.headingHighlight')}</span>
          </h2>
          <SectionDivider variant="peacock" />
          <p className="font-cormorant text-lg text-madhubani-black/60 max-w-2xl mx-auto mt-4">
            {t('exhibitionsGallery.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative cursor-pointer"
              onClick={() => setLightboxIndex(index)}
            >
              <div className="relative border border-madhubani-red/20 bg-cream-light p-3 md:p-4 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-madhubani-red/10">
                <CornerOrnament className="top-1 left-1" />
                <CornerOrnament className="top-1 right-1 -scale-x-100" />
                <CornerOrnament className="bottom-1 left-1 -scale-y-100" />
                <CornerOrnament className="bottom-1 right-1 scale-[-1]" />

                <div className="relative overflow-hidden border border-madhubani-red/10 flex items-center justify-center">
                  {/* Blurred fill background */}
                  <img
                    src={img.src}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-70"
                    draggable="false"
                    onDragStart={(e) => e.preventDefault()}
                  />
                  <div className="w-full h-56 md:h-72 flex items-center justify-center z-10 p-2">
                    <CameraShy mode="blur" blur="20px" sensitivity="balanced">
                      <img
                        src={img.src}
                        alt={t('exhibitionsGallery.cap' + (index + 1))}
                        draggable="false"
                        onDragStart={(e) => e.preventDefault()}
                        className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </CameraShy>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 mt-3 mb-2">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-madhubani-red/20 to-transparent" />
                  <svg width="10" height="10" viewBox="0 0 10 10">
                    <circle cx="5" cy="5" r="2" fill="none" stroke="#C41E7F" strokeWidth="0.6" />
                    <circle cx="5" cy="5" r="0.8" fill="#E8A317" />
                  </svg>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-madhubani-red/20 to-transparent" />
                </div>

                <p className="font-cormorant text-sm md:text-base text-madhubani-black/70 text-center px-1 leading-relaxed">
                  {t('exhibitionsGallery.cap' + (index + 1))}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ExhibitionsLightbox
        images={galleryImages}
        selectedIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </section>
  );
};

export default ExhibitionsGallery;
