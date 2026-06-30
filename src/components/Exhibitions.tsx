import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award } from 'lucide-react';
import { SectionDivider } from './MadhubaniBorder';

const exhibitions = [
  {
    title: 'United Nations Headquarters',
    venue: 'UN Headquarters',
    location: 'New York, USA',
    date: 'Exhibition',
    description: 'Exhibited Mithila folk art at the United Nations, showcasing cultural heritage on an international diplomatic platform.',
    highlight: true,
  },
  {
    title: 'EU Headquarters',
    venue: 'European Union',
    location: 'Brussels, Belgium',
    date: '2026',
    description: 'Featured at the EU Headquarters, strengthening international presence as a cultural ambassador of Mithila art.',
    highlight: true,
  },
  {
    title: 'Gracie Mansion Cultural Showcase',
    venue: 'Gracie Mansion',
    location: 'New York, USA',
    date: 'Cultural Event',
    description: 'Participated in cultural showcase at the official residence of the Mayor of New York City.',
    highlight: true,
  },
  {
    title: 'Times Square & Madison Avenue',
    venue: 'Public Art',
    location: 'New York, USA',
    date: 'Public Art',
    description: 'Public art visibility in Times Square and Madison Avenue events, bringing Mithila art to a global audience.',
    highlight: false,
  },
  {
    title: 'UCNJ Teen Arts Festival',
    venue: 'Union College of Union County',
    location: 'New Jersey, USA',
    date: 'Workshop',
    description: 'Mithila folk art workshop introducing traditional art forms to over a thousand students, fostering cultural appreciation among youth.',
    highlight: false,
  },
  {
    title: 'Magnetism — Group Show',
    venue: 'Watchung Art Center',
    location: 'New Jersey, USA',
    date: 'Exhibition',
    description: 'Curated group exhibition at Watchung Art Center featuring Mithila folk art alongside contemporary works.',
    highlight: false,
  },
];

const achievements = [
  'United Nations Headquarters exhibition, New York',
  'EU Headquarters featured artist, Brussels (2026)',
  'Gracie Mansion cultural showcase, NYC',
  'Times Square & Madison Avenue public art',
  'FDNY Headquarters exhibition, NYC',
  'Women Entrepreneur in the Arts — Greater NY Chamber of Commerce',
  'Top 35 Indian American Art Influencers — Feedspot (2025)',
  'UCNJ Teen Arts Festival — 1000+ students reached',
  'Mithila Center USA "Art for SDGs" series',
];

const Exhibitions: React.FC = () => {
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
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-madhubani-orange font-cormorant text-lg tracking-[0.4em] uppercase">Recognition</span>
          <h2 className="font-cinzel text-3xl md:text-5xl text-madhubani-black mt-3 mb-4">
            Exhibitions & <span className="text-madhubani-red">Achievements</span>
          </h2>
          <SectionDivider variant="lotus" />
        </motion.div>

        {/* Exhibitions Timeline */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {exhibitions.map((exhibition, index) => (
            <motion.div
              key={exhibition.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative p-6 border-2 transition-all duration-300 hover:shadow-lg group ${
                exhibition.highlight
                  ? 'border-madhubani-red bg-gradient-to-br from-cream-light to-cream'
                  : 'border-madhubani-black/10 bg-cream-light hover:border-madhubani-red/50'
              }`}
            >
              {/* Corner decorations */}
              {exhibition.highlight && (
                <>
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-madhubani-yellow -translate-x-1 -translate-y-1" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-madhubani-yellow translate-x-1 -translate-y-1" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-madhubani-yellow -translate-x-1 translate-y-1" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-madhubani-yellow translate-x-1 translate-y-1" />
                </>
              )}

              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center border ${
                  exhibition.highlight ? 'border-madhubani-red bg-madhubani-red/5' : 'border-madhubani-teal bg-madhubani-teal/5'
                }`}>
                  <Award size={20} className={exhibition.highlight ? 'text-madhubani-red' : 'text-madhubani-teal'} />
                </div>
                <h3 className="font-cinzel text-lg md:text-xl text-madhubani-black group-hover:text-madhubani-red transition-colors">
                  {exhibition.title}
                </h3>
                <div className="flex flex-wrap gap-3 mt-2 mb-3 justify-center">
                  <span className="flex items-center gap-1 text-sm font-cormorant text-madhubani-teal">
                    <MapPin size={14} />
                    {exhibition.location}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-cormorant text-madhubani-orange">
                    <Calendar size={14} />
                    {exhibition.date}
                  </span>
                </div>
                <p className="font-cormorant text-madhubani-black/60 leading-relaxed">
                  {exhibition.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="font-cinzel text-2xl text-center text-madhubani-black mb-8">
            Milestones & <span className="text-madhubani-teal">Recognition</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 p-6 text-center"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" className="shrink-0">
                  <circle cx="10" cy="10" r="8" fill="none" stroke="#C41E7F" strokeWidth="1.5"/>
                  <circle cx="10" cy="10" r="3" fill="#E8A317"/>
                </svg>
                <p className="font-cormorant text-madhubani-black/70">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Exhibitions;
