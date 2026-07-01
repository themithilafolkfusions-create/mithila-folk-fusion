import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionDivider } from './MadhubaniBorder';

const motifs = [
  {
    name: 'Peacock',
    description: 'Symbol of love, beauty, and divine grace. The peacock represents Lord Krishna and the cycle of time.',
    svg: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <circle cx="40" cy="40" r="35" fill="none" stroke="#006B6B" strokeWidth="1.5"/>
        {/* Peacock body simplified */}
        <path d="M30,55 Q35,40 40,35 Q45,30 50,35" fill="none" stroke="#006B6B" strokeWidth="2"/>
        {/* Tail feathers */}
        <path d="M40,35 Q25,15 20,20" fill="none" stroke="#2E5A1C" strokeWidth="1.5"/>
        <path d="M40,35 Q35,10 30,12" fill="none" stroke="#006B6B" strokeWidth="1.5"/>
        <path d="M40,35 Q40,8 40,10" fill="none" stroke="#1B4F72" strokeWidth="1.5"/>
        <path d="M40,35 Q45,10 50,12" fill="none" stroke="#006B6B" strokeWidth="1.5"/>
        <path d="M40,35 Q55,15 60,20" fill="none" stroke="#2E5A1C" strokeWidth="1.5"/>
        {/* Eyes on feathers */}
        <circle cx="20" cy="20" r="3" fill="#E8A317"/>
        <circle cx="30" cy="12" r="3" fill="#C41E7F"/>
        <circle cx="40" cy="10" r="3" fill="#E8A317"/>
        <circle cx="50" cy="12" r="3" fill="#C41E7F"/>
        <circle cx="60" cy="20" r="3" fill="#E8A317"/>
        {/* Head */}
        <circle cx="50" cy="35" r="4" fill="#006B6B"/>
        <circle cx="51" cy="34" r="1.5" fill="#FDF5E6"/>
      </svg>
    ),
  },
  {
    name: 'Lotus',
    description: 'The sacred lotus symbolizes purity, enlightenment, and divine beauty rising from muddy waters.',
    svg: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <circle cx="40" cy="40" r="35" fill="none" stroke="#C41E7F" strokeWidth="1.5"/>
        <ellipse cx="40" cy="32" rx="5" ry="16" fill="none" stroke="#C41E3A" strokeWidth="1.5"/>
        <ellipse cx="40" cy="32" rx="5" ry="16" fill="none" stroke="#C41E7F" strokeWidth="1.5" transform="rotate(25,40,40)"/>
        <ellipse cx="40" cy="32" rx="5" ry="16" fill="none" stroke="#C41E3A" strokeWidth="1.5" transform="rotate(-25,40,40)"/>
        <ellipse cx="40" cy="32" rx="5" ry="16" fill="none" stroke="#E8A317" strokeWidth="1.5" transform="rotate(50,40,40)"/>
        <ellipse cx="40" cy="32" rx="5" ry="16" fill="none" stroke="#E8A317" strokeWidth="1.5" transform="rotate(-50,40,40)"/>
        <circle cx="40" cy="40" r="5" fill="#C41E7F" opacity="0.4"/>
        <circle cx="40" cy="40" r="3" fill="#E8A317"/>
      </svg>
    ),
  },
  {
    name: 'Fish',
    description: 'Twin fish represent fertility, prosperity, and good fortune. They are essential motifs in wedding ceremonies.',
    svg: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <circle cx="40" cy="40" r="35" fill="none" stroke="#E8A317" strokeWidth="1.5"/>
        {/* Fish 1 */}
        <path d="M20,35 Q30,25 40,35 Q30,45 20,35" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
        <path d="M40,35 L48,29 L48,41 Z" fill="none" stroke="#8B1A1A" strokeWidth="1.5"/>
        <circle cx="27" cy="33" r="2" fill="#1A1A1A"/>
        {/* Fish 2 */}
        <path d="M60,50 Q50,40 40,50 Q50,60 60,50" fill="none" stroke="#006B6B" strokeWidth="2"/>
        <path d="M40,50 L32,44 L32,56 Z" fill="none" stroke="#006B6B" strokeWidth="1.5"/>
        <circle cx="53" cy="48" r="2" fill="#1A1A1A"/>
      </svg>
    ),
  },
  {
    name: 'Sun & Moon',
    description: 'Celestial bodies represent the cosmic balance, divine energy, and the eternal rhythm of the universe.',
    svg: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <circle cx="40" cy="40" r="35" fill="none" stroke="#D2691E" strokeWidth="1.5"/>
        {/* Sun */}
        <circle cx="30" cy="35" r="8" fill="none" stroke="#E8A317" strokeWidth="2"/>
        <circle cx="30" cy="35" r="4" fill="#E8A317" opacity="0.4"/>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <line
            key={angle}
            x1={30 + 10 * Math.cos(angle * Math.PI / 180)}
            y1={35 + 10 * Math.sin(angle * Math.PI / 180)}
            x2={30 + 14 * Math.cos(angle * Math.PI / 180)}
            y2={35 + 14 * Math.sin(angle * Math.PI / 180)}
            stroke="#E8A317" strokeWidth="1.5"
          />
        ))}
        {/* Moon */}
        <path d="M55,30 Q45,40 55,50 Q60,40 55,30" fill="none" stroke="#C41E7F" strokeWidth="2"/>
        <circle cx="52" cy="36" r="1" fill="#C41E7F"/>
      </svg>
    ),
  },
  {
    name: 'Tree of Life',
    description: 'The Kohbar tree symbolizes the continuity of life, fertility, and the sacred bond of marriage.',
    svg: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <circle cx="40" cy="40" r="35" fill="none" stroke="#2E5A1C" strokeWidth="1.5"/>
        {/* Trunk */}
        <line x1="40" y1="65" x2="40" y2="35" stroke="#5C3317" strokeWidth="3"/>
        {/* Branches */}
        <path d="M40,35 Q30,25 20,20" fill="none" stroke="#2E5A1C" strokeWidth="2"/>
        <path d="M40,35 Q50,25 60,20" fill="none" stroke="#2E5A1C" strokeWidth="2"/>
        <path d="M40,40 Q32,32 25,30" fill="none" stroke="#2E5A1C" strokeWidth="1.5"/>
        <path d="M40,40 Q48,32 55,30" fill="none" stroke="#2E5A1C" strokeWidth="1.5"/>
        {/* Leaves */}
        <circle cx="20" cy="20" r="4" fill="#2E5A1C" opacity="0.4"/>
        <circle cx="60" cy="20" r="4" fill="#2E5A1C" opacity="0.4"/>
        <circle cx="25" cy="30" r="3" fill="#006B6B" opacity="0.4"/>
        <circle cx="55" cy="30" r="3" fill="#006B6B" opacity="0.4"/>
        <circle cx="40" cy="18" r="5" fill="#2E5A1C" opacity="0.3"/>
        {/* Fruits */}
        <circle cx="22" cy="18" r="2" fill="#C41E3A"/>
        <circle cx="58" cy="18" r="2" fill="#E8A317"/>
        <circle cx="40" cy="15" r="2" fill="#C41E3A"/>
      </svg>
    ),
  },
  {
    name: 'Mandala',
    description: 'Circular sacred geometry representing wholeness, harmony, and the infinite nature of the cosmos.',
    svg: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <circle cx="40" cy="40" r="35" fill="none" stroke="#8B1A1A" strokeWidth="1.5"/>
        <circle cx="40" cy="40" r="28" fill="none" stroke="#C41E7F" strokeWidth="1" strokeDasharray="4,3"/>
        <circle cx="40" cy="40" r="20" fill="none" stroke="#006B6B" strokeWidth="1"/>
        <circle cx="40" cy="40" r="12" fill="none" stroke="#E8A317" strokeWidth="1.5"/>
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
          <circle
            key={angle}
            cx={40 + 24 * Math.cos(angle * Math.PI / 180)}
            cy={40 + 24 * Math.sin(angle * Math.PI / 180)}
            r="2"
            fill="#C41E7F"
          />
        ))}
        <circle cx="40" cy="40" r="5" fill="#E8A317" opacity="0.5"/>
        <circle cx="40" cy="40" r="3" fill="#8B1A1A"/>
      </svg>
    ),
  },
];

const ArtForm: React.FC = () => {
  return (
    <section id="art-form" className="relative py-28 md:py-44 bg-madhubani-black overflow-hidden">
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="bg-mandala" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#E8A317" strokeWidth="0.5"/>
              <circle cx="100" cy="100" r="60" fill="none" stroke="#C41E7F" strokeWidth="0.5"/>
              <circle cx="100" cy="100" r="40" fill="none" stroke="#006B6B" strokeWidth="0.5"/>
              <circle cx="100" cy="100" r="20" fill="none" stroke="#E8A317" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bg-mandala)"/>
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
          <span className="text-madhubani-yellow font-cormorant text-lg tracking-[0.4em] uppercase">Heritage</span>
          <h2 className="font-cinzel text-3xl md:text-5xl text-cream mt-3 mb-4">
            The Art of <span className="text-madhubani-yellow">Mithila</span>
          </h2>
          <SectionDivider variant="fish" />

          {/* Intro summary */}
          <p className="font-cormorant text-lg text-cream/60 max-w-3xl mx-auto mt-4 leading-relaxed">
            Mithila painting is an ancient folk art form originating in the Mithila region of Bihar, India, 
            and extending into Nepal's Tarai region including Janakpur. Traditionally created by women on 
            mud walls using natural pigments, this 2,500 year old tradition is a living language of storytelling 
            through intricate linework, sacred motifs, and vibrant colors.
          </p>
        </motion.div>

        {/* Quick highlights */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {[
            { label: '2,500+ Years', sub: 'Of continuous tradition' },
            { label: '5 Classical Styles', sub: 'Kachni, Bharni, Godna, Tantrik, Kohbar' },
            { label: 'Women Led', sub: 'Passed mother to daughter' },
            { label: 'Natural Colors', sub: 'Turmeric, indigo, soot, clay' },
            { label: 'India & Nepal', sub: 'Shared Mithila heritage' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-4 border border-madhubani-yellow/15 bg-madhubani-black/40"
            >
              <div className="font-cinzel text-sm md:text-base text-madhubani-yellow mb-1">{item.label}</div>
              <div className="font-cormorant text-xs text-cream/40">{item.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Sacred Motifs preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-cinzel text-2xl md:text-3xl text-cream mb-2">
            Sacred <span className="text-madhubani-magenta">Motifs</span>
          </h3>
          <p className="font-cormorant text-cream/50">The symbols that carry centuries of meaning</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center">
          {motifs.map((motif, i) => (
            <motion.div
              key={motif.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center p-6 border border-cream/10 hover:border-madhubani-yellow/40 transition-all duration-300"
            >
              <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                {motif.svg}
              </div>
              <h4 className="font-cinzel text-sm text-madhubani-yellow mb-1">{motif.name}</h4>
              <p className="font-cormorant text-xs text-cream/40 leading-relaxed hidden md:block">
                {motif.description.split('.')[0]}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Link to full page */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/art-of-mithila"
            className="inline-flex items-center gap-2 font-playfair text-sm tracking-wider text-madhubani-yellow border-b border-madhubani-yellow/40 pb-1 hover:border-madhubani-yellow transition-colors"
          >
            Learn more about the art of Mithila
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 3l5 5-5 5" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ArtForm;
