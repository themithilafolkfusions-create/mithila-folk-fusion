import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SectionDivider } from './MadhubaniBorder';
import Footer from './Footer';

const portfolioWorks = [
  {
    id: 1,
    src: '/images/resonance.jpeg',
    title: 'Resonance',
    category: 'Environment & Identity',
    description: 'This Mithila-style painting presents a powerful visual dialogue between two contrasting realities of the Earth through a single female face, symbolically connected to the planet itself. The artwork explores the deep impact of pollution on nature and human life, while also reflecting hope through the possibility of restoration. One half of the face represents a polluted world, where industrialization and human activity have disrupted natural balance. The other half reveals a thriving, pollution-free world filled with harmony and life.',
    medium: 'Mithila Folk Art',
    dimensions: '—',
  },
  {
    id: 2,
    src: '/images/bodhi-udaya.jpeg',
    title: 'Bodhi Udaya',
    category: 'Spirituality',
    description: 'This artwork presents a contemplative interpretation of Lord Buddha\'s enlightenment beneath the sacred Bodhi tree, expressed through the traditional visual language of Mithila folk art. It captures the divine moment of deep meditation, where Siddhartha Gautama attains enlightenment and transforms into the Buddha, symbolizing the awakening of ultimate wisdom and inner peace. The painting is enriched with intricate Kachni, Bharni, and Godna motifs, including rhythmic patterns, fine line work, and mandala-inspired arches.',
    medium: 'Mithila Folk Art',
    dimensions: '—',
  },
  {
    id: 3,
    src: '/images/mythocircle.jpeg',
    title: 'Mythocircle',
    category: 'Mythology & Folklore',
    description: 'This is a Godna inspired Mithila folk artwork that brings together mythology, nature, and symbolic geometry in a unified composition. At the center is a turtle, rendered in bold, intricate linework typical of traditional Godna tattoo art. Its shell is divided into concentric circular patterns, creating a rhythmic mandala-like design. Within this structured universe, the painting highlights the figure of Raja Sahlesh along with his two brothers, transforming the turtle into a vessel of storytelling.',
    medium: 'Godna Art',
    dimensions: '—',
  },
  {
    id: 4,
    src: '/images/echoes-beneath-branches.jpeg',
    title: 'Echoes Beneath the Branches',
    category: 'Nature & Community',
    description: 'Created in black and white using the traditional Mithila folk art style, this painting explores the idea of home as a shared and living experience. At the center stands a majestic tree transformed into a sanctuary of many birdhouses, each holding quiet life within. Behind the tree, a tranquil pond with swimming ducks and blooming lotuses reflects harmony and renewal. The fish-lined border frames the composition, representing continuity and the cyclical flow of nature.',
    medium: 'Mithila Folk Art — Black & White',
    dimensions: '—',
  },
  {
    id: 5,
    src: '/images/one-earth-many-voices.jpeg',
    title: 'One Earth, Many Voices',
    category: 'Climate & Culture',
    description: 'This Mithila-inspired mandala represents Earth as the shared home of humanity, where climate resilience is built through unity, cultural diversity, and respect for nature. At the center lies the planet, surrounded by concentric circles symbolizing interconnected ecosystems. The ring of international flags reflects that climate change knows no borders. Traditional Mithila motifs — birds, fish, elephants, vines — represent biodiversity and the delicate balance between humans and the natural world.',
    medium: 'Mithila Folk Art',
    dimensions: '—',
  },
  {
    id: 6,
    src: '/images/echoes-of-exile.jpeg',
    title: 'Echoes of Exile',
    category: 'Mythology & Heritage',
    description: 'The painting visualizes Lord Rama\'s 14-year exile with his wife Sita and brother Lakshman from the Ramayana. While Rama had to go alone on the exile, Sita insisted to go with him as spouse dharma is to stay with each other in all circumstances. Lakshman, being the loyal brother, did not want to leave his brother. This painting is an attempt to showcase this event using the ancient Mithila Folk Art style with colorful and vibrant motifs like flower and birds that set the enchanting backdrop of the forest.',
    medium: 'Mithila Folk Art',
    dimensions: '—',
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Simple header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-madhubani-red/10">
        <div className="h-1 w-full bg-gradient-to-r from-madhubani-red via-madhubani-magenta to-madhubani-teal" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-madhubani-black/60 hover:text-madhubani-red transition-colors font-playfair text-sm tracking-wider"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
          <h1 className="font-cinzel text-lg text-madhubani-red tracking-wider">Portfolio</h1>
          <div className="w-24" />
        </div>
      </header>

      {/* Portfolio content */}
      <section className="relative pt-32 pb-28 md:pt-40 md:py-44 bg-cream overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 rangoli-bg opacity-30" />

        {/* Decorative side borders */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-madhubani-yellow via-madhubani-red to-madhubani-magenta opacity-15" />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-madhubani-magenta via-madhubani-red to-madhubani-yellow opacity-15" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-madhubani-magenta font-cormorant text-lg tracking-[0.4em] uppercase">Full Collection</span>
            <h2 className="font-cinzel text-3xl md:text-5xl text-madhubani-black mt-3 mb-4">
              Portfolio
            </h2>
            <SectionDivider variant="lotus" />
            <p className="font-cormorant text-lg text-madhubani-black/60 max-w-2xl mx-auto mt-4">
              A curated selection of original Madhubani paintings — each piece tells a story rooted in
              mythology, nature, and the feminine divine of the Mithila tradition
            </p>
          </motion.div>

          {/* Single column portfolio */}
          <div className="space-y-24 md:space-y-32">
            {portfolioWorks.map((work, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="w-full md:w-3/5">
                    <div className="relative group">
                      {/* Decorative frame */}
                      <div className="absolute -inset-3 border border-madhubani-red/15 pointer-events-none" />
                      <div className="absolute -inset-1.5 border border-madhubani-yellow/20 pointer-events-none" />

                      {/* Corner ornaments */}
                      <svg className="absolute -top-4 -left-4 z-10 pointer-events-none" width="32" height="32" viewBox="0 0 32 32">
                        <path d="M0,16 Q0,0 16,0" fill="none" stroke="#8B1A1A" strokeWidth="1.5"/>
                        <circle cx="3" cy="3" r="2.5" fill="#E8A317"/>
                        <path d="M5,12 Q5,5 12,5" fill="none" stroke="#C41E7F" strokeWidth="1"/>
                      </svg>
                      <svg className="absolute -top-4 -right-4 z-10 pointer-events-none" width="32" height="32" viewBox="0 0 32 32" style={{ transform: 'scaleX(-1)' }}>
                        <path d="M0,16 Q0,0 16,0" fill="none" stroke="#8B1A1A" strokeWidth="1.5"/>
                        <circle cx="3" cy="3" r="2.5" fill="#E8A317"/>
                        <path d="M5,12 Q5,5 12,5" fill="none" stroke="#C41E7F" strokeWidth="1"/>
                      </svg>
                      <svg className="absolute -bottom-4 -left-4 z-10 pointer-events-none" width="32" height="32" viewBox="0 0 32 32" style={{ transform: 'scaleY(-1)' }}>
                        <path d="M0,16 Q0,0 16,0" fill="none" stroke="#8B1A1A" strokeWidth="1.5"/>
                        <circle cx="3" cy="3" r="2.5" fill="#E8A317"/>
                        <path d="M5,12 Q5,5 12,5" fill="none" stroke="#C41E7F" strokeWidth="1"/>
                      </svg>
                      <svg className="absolute -bottom-4 -right-4 z-10 pointer-events-none" width="32" height="32" viewBox="0 0 32 32" style={{ transform: 'scale(-1)' }}>
                        <path d="M0,16 Q0,0 16,0" fill="none" stroke="#8B1A1A" strokeWidth="1.5"/>
                        <circle cx="3" cy="3" r="2.5" fill="#E8A317"/>
                        <path d="M5,12 Q5,5 12,5" fill="none" stroke="#C41E7F" strokeWidth="1"/>
                      </svg>

                      <img
                        src={work.src}
                        alt={work.title}
                        className="w-full h-[28rem] md:h-[36rem] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />

                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-madhubani-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className={`w-full md:w-2/5 ${isEven ? 'md:pl-4' : 'md:pr-4'}`}>
                    <div className="space-y-6">
                      {/* Category */}
                      <span className="inline-block font-playfair text-xs tracking-[0.3em] uppercase text-madhubani-magenta border border-madhubani-magenta/30 px-3 py-1">
                        {work.category}
                      </span>

                      {/* Title */}
                      <h3 className="font-cinzel text-2xl md:text-3xl text-madhubani-black leading-tight">
                        {work.title}
                      </h3>

                      {/* Divider */}
                      <div className="flex items-center gap-3">
                        <div className="w-16 h-0.5 bg-madhubani-red" />
                        <svg width="12" height="12" viewBox="0 0 12 12">
                          <circle cx="6" cy="6" r="2" fill="none" stroke="#E8A317" strokeWidth="0.8" />
                          <circle cx="6" cy="6" r="0.8" fill="#C41E7F" />
                        </svg>
                      </div>

                      {/* Description */}
                      <p className="font-cormorant text-lg text-madhubani-black/70 leading-relaxed">
                        {work.description}
                      </p>

                      {/* Details */}
                      <div className="space-y-2 pt-4 border-t border-madhubani-red/10">
                        <p className="font-playfair text-sm text-madhubani-black/50">
                          <span className="text-madhubani-teal">Medium:</span> {work.medium}
                        </p>
                        <p className="font-playfair text-sm text-madhubani-black/50">
                          <span className="text-madhubani-teal">Dimensions:</span> {work.dimensions}
                        </p>
                      </div>

                      {/* CTA */}
                      <Link
                        to="/#commission"
                        className="inline-block mt-4 px-6 py-3 border border-madhubani-red text-madhubani-red font-playfair text-sm tracking-wider hover:bg-madhubani-red hover:text-cream transition-all duration-300"
                      >
                        Inquire About This Piece
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
