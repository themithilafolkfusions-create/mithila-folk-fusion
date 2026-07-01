import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { SectionDivider } from './MadhubaniBorder';

const cvEntries = [
  { year: '2026', title: 'EU Headquarters', subtitle: 'Featured artist, Brussels, Belgium' },
  { year: '2025', title: 'United Nations Headquarters', subtitle: 'Art for SDGs Exhibition, New York' },
  { year: '2025', title: 'Gracie Mansion', subtitle: 'Cultural showcase, NYC Mayor\'s residence' },
  { year: '2025', title: 'Times Square & Madison Avenue', subtitle: 'Public art installation, New York' },
  { year: '2025', title: 'FDNY Headquarters', subtitle: 'Exhibition, New York City' },
  { year: '2025', title: 'Watchung Art Center', subtitle: '"Magnetism" group exhibition, New Jersey' },
  { year: '2025', title: 'Manville Art Council', subtitle: 'Curated exhibition, New Jersey' },
  { year: '2025', title: 'UCNJ Teen Arts Festival', subtitle: 'Mithila art workshop, 1,000+ students' },
  { year: '2025', title: 'Greater NY Chamber of Commerce', subtitle: 'Women Entrepreneur in the Arts recognition' },
  { year: '2025', title: 'Feedspot', subtitle: 'Top 35 Indian American Art Influencers' },
];

const Exhibitions: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="exhibitions" className="relative py-28 md:py-44 bg-cream overflow-hidden">
      {/* Decorative side elements */}
      <div className="absolute left-0 top-1/4 opacity-10">
        <svg width="100" height="300" viewBox="0 0 100 300">
          <path d="M0,0 Q50,50 0,100 Q50,150 0,200 Q50,250 0,300" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
          <path d="M10,0 Q60,50 10,100 Q60,150 10,200 Q60,250 10,300" fill="none" stroke="#C41E7F" strokeWidth="1"/>
        </svg>
      </div>
      <div className="absolute right-0 top-1/4 opacity-10" style={{ transform: 'scaleX(-1)' }}>
        <svg width="100" height="300" viewBox="0 0 100 300">
          <path d="M0,0 Q50,50 0,100 Q50,150 0,200 Q50,250 0,300" fill="none" stroke="#006B6B" strokeWidth="2"/>
          <path d="M10,0 Q60,50 10,100 Q60,150 10,200 Q60,250 10,300" fill="none" stroke="#E8A317" strokeWidth="1"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-madhubani-orange font-cormorant text-lg tracking-[0.4em] uppercase">{t('exhibitions.sectionLabel')}</span>
          <h2 className="font-cinzel text-3xl md:text-5xl text-madhubani-black mt-3 mb-4">
            {t('exhibitions.headingPrefix')}<span className="text-madhubani-red">{t('exhibitions.headingHighlight')}</span>
          </h2>
          <SectionDivider variant="lotus" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {cvEntries.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative flex gap-6 md:gap-10 group"
              >
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-madhubani-red z-10 mt-2 ring-2 ring-cream" />
                  {i < cvEntries.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-madhubani-red/40 to-transparent" />
                  )}
                </div>
                {/* Year badge */}
                <div className="shrink-0 w-16 md:w-20 pt-0.5">
                  <span className="font-cinzel text-sm text-madhubani-teal tracking-wider">{entry.year}</span>
                </div>
                {/* Content */}
                <div className="pb-8 md:pb-10 flex-1 border-b border-madhubani-red/10 group-last:border-b-0">
                  <h3 className="font-cinzel text-lg md:text-xl text-madhubani-black">{t('exhibitions.cv' + (i + 1) + 'Title')}</h3>
                  <p className="font-cormorant text-base text-madhubani-black/60 mt-1">{t('exhibitions.cv' + (i + 1) + 'Sub')}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;
