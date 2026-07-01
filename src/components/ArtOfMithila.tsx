import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CameraShy } from 'camerashy';
import { SectionDivider } from './MadhubaniBorder';
import Footer from './Footer';

const motifs = [
  {
    name: 'Peacock',
    description: 'Symbol of love, beauty, and divine grace. The peacock represents Lord Krishna and the cycle of time.',
    svg: (
      <svg viewBox="0 0 80 80" className="w-16 h-16">
        <circle cx="40" cy="40" r="35" fill="none" stroke="#006B6B" strokeWidth="1.5"/>
        <path d="M30,55 Q35,40 40,35 Q45,30 50,35" fill="none" stroke="#006B6B" strokeWidth="2"/>
        <path d="M40,35 Q25,15 20,20" fill="none" stroke="#2E5A1C" strokeWidth="1.5"/>
        <path d="M40,35 Q35,10 30,12" fill="none" stroke="#006B6B" strokeWidth="1.5"/>
        <path d="M40,35 Q40,8 40,10" fill="none" stroke="#1B4F72" strokeWidth="1.5"/>
        <path d="M40,35 Q45,10 50,12" fill="none" stroke="#006B6B" strokeWidth="1.5"/>
        <path d="M40,35 Q55,15 60,20" fill="none" stroke="#2E5A1C" strokeWidth="1.5"/>
        <circle cx="20" cy="20" r="3" fill="#E8A317"/>
        <circle cx="30" cy="12" r="3" fill="#C41E7F"/>
        <circle cx="40" cy="10" r="3" fill="#E8A317"/>
        <circle cx="50" cy="12" r="3" fill="#C41E7F"/>
        <circle cx="60" cy="20" r="3" fill="#E8A317"/>
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
        <path d="M20,35 Q30,25 40,35 Q30,45 20,35" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
        <path d="M40,35 L48,29 L48,41 Z" fill="none" stroke="#8B1A1A" strokeWidth="1.5"/>
        <circle cx="27" cy="33" r="2" fill="#1A1A1A"/>
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
        <circle cx="30" cy="35" r="8" fill="none" stroke="#E8A317" strokeWidth="2"/>
        <circle cx="30" cy="35" r="4" fill="#E8A317" opacity="0.4"/>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <line key={angle} x1={30 + 10 * Math.cos(angle * Math.PI / 180)} y1={35 + 10 * Math.sin(angle * Math.PI / 180)} x2={30 + 14 * Math.cos(angle * Math.PI / 180)} y2={35 + 14 * Math.sin(angle * Math.PI / 180)} stroke="#E8A317" strokeWidth="1.5"/>
        ))}
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
        <line x1="40" y1="65" x2="40" y2="35" stroke="#5C3317" strokeWidth="3"/>
        <path d="M40,35 Q30,25 20,20" fill="none" stroke="#2E5A1C" strokeWidth="2"/>
        <path d="M40,35 Q50,25 60,20" fill="none" stroke="#2E5A1C" strokeWidth="2"/>
        <path d="M40,40 Q32,32 25,30" fill="none" stroke="#2E5A1C" strokeWidth="1.5"/>
        <path d="M40,40 Q48,32 55,30" fill="none" stroke="#2E5A1C" strokeWidth="1.5"/>
        <circle cx="20" cy="20" r="4" fill="#2E5A1C" opacity="0.4"/>
        <circle cx="60" cy="20" r="4" fill="#2E5A1C" opacity="0.4"/>
        <circle cx="25" cy="30" r="3" fill="#006B6B" opacity="0.4"/>
        <circle cx="55" cy="30" r="3" fill="#006B6B" opacity="0.4"/>
        <circle cx="40" cy="18" r="5" fill="#2E5A1C" opacity="0.3"/>
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
          <circle key={angle} cx={40 + 24 * Math.cos(angle * Math.PI / 180)} cy={40 + 24 * Math.sin(angle * Math.PI / 180)} r="2" fill="#C41E7F"/>
        ))}
        <circle cx="40" cy="40" r="5" fill="#E8A317" opacity="0.5"/>
        <circle cx="40" cy="40" r="3" fill="#8B1A1A"/>
      </svg>
    ),
  },
];

const ArtOfMithila: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-cream to-cream-dark">
        {/* Back to home */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-playfair text-sm tracking-wider text-madhubani-red hover:text-madhubani-crimson transition-colors group"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        {/* Hero */}
        <section className="relative bg-madhubani-black overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/hero-bg.jpg" alt="" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-madhubani-black via-madhubani-black/80 to-madhubani-black" />
          </div>
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="text-madhubani-teal font-cormorant text-lg tracking-[0.4em] uppercase">Heritage</span>
              <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl text-cream mt-4 mb-6">
                The Art of <span className="text-madhubani-yellow">Mithila</span>
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 md:w-20 h-px bg-madhubani-red" />
                <svg width="16" height="16" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="6" fill="none" stroke="#E8A317" strokeWidth="1" />
                  <circle cx="8" cy="8" r="2" fill="#C41E7F" />
                </svg>
                <div className="w-12 md:w-20 h-px bg-madhubani-red" />
              </div>
              <p className="font-cormorant text-xl md:text-2xl text-cream/60 max-w-3xl mx-auto leading-relaxed">
                A 2,500 year old women's art form from the Mithila region of Bihar and Nepal's Tarai. 
                A living tradition of storytelling through line, pattern, and symbol.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Origins & History */}
        <section className="relative py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-madhubani-teal font-cormorant text-sm tracking-[0.3em] uppercase">Origins</span>
                <h2 className="font-cinzel text-3xl md:text-4xl text-madhubani-black mt-2 mb-6">
                  A Tradition <span className="text-madhubani-red">2,500 Years</span> in the Making
                </h2>
                <div className="w-16 h-0.5 bg-madhubani-red mb-6" />
                <div className="font-cormorant text-lg text-madhubani-black/70 leading-relaxed space-y-4">
                  <p>
                    Mithila painting, also known as Madhubani art, traces its origins to the ancient kingdom of Mithila, 
                    the birthplace of Sita from the Ramayana. Dating back over 2,500 years, this art form was traditionally 
                    created by women on the mud walls and floors of their homes. The paintings served both as decoration 
                    and as a means of recording myths, rituals, and daily life.
                  </p>
                  <p>
                    Passed down through generations of women, the art was a closely guarded practice. Each region, 
                    each family developed its own style, its own set of patterns and symbols. A daughter learned by 
                    watching her mother, by tracing lines in the mud with her fingers before graduating to bamboo nibs 
                    and natural pigments.
                  </p>
                  <p>
                    The earliest references to Mithila painting appear in the Ramayana, where King Janak's palace 
                    walls are described as being adorned with paintings. For centuries, the tradition remained 
                    confined to the interior walls of village homes, invisible to the outside world.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative border-2 border-madhubani-red/20 p-2">
                  <CameraShy mode="blur" blur="20px" sensitivity="balanced">
                    <img src="/images/echoes-of-exile.jpeg" alt="Mithila painting depicting Ramayana" className="w-full h-auto select-none" draggable="false" onDragStart={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} />
                  </CameraShy>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-madhubani-yellow/30 -z-10" />
                <p className="font-playfair text-xs text-madhubani-black/40 mt-3 text-center italic">
                  Echoes of Exile &mdash; A Mithila interpretation of the Ramayana
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Geographic Roots */}
        <section className="relative py-20 md:py-28 bg-madhubani-black overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="geo-mandala" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#E8A317" strokeWidth="0.5"/>
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#C41E7F" strokeWidth="0.5"/>
                  <circle cx="100" cy="100" r="40" fill="none" stroke="#006B6B" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#geo-mandala)"/>
            </svg>
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 md:order-1"
              >
                <div className="relative border-2 border-madhubani-yellow/20 p-2">
                  <CameraShy mode="blur" blur="20px" sensitivity="balanced">
                    <img src="/images/one-earth-many-voices.jpeg" alt="Mithila region spans India and Nepal" className="w-full h-auto select-none" draggable="false" onDragStart={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} />
                  </CameraShy>
                </div>
                <p className="font-playfair text-xs text-cream/40 mt-3 text-center italic">
                  One Earth, Many Voices &mdash; Unity across borders
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-2"
              >
                <span className="text-madhubani-teal font-cormorant text-sm tracking-[0.3em] uppercase">Geography</span>
                <h2 className="font-cinzel text-3xl md:text-4xl text-cream mt-2 mb-6">
                  Across Borders, One <span className="text-madhubani-yellow">Culture</span>
                </h2>
                <div className="w-16 h-0.5 bg-madhubani-yellow mb-6" />
                <div className="font-cormorant text-lg text-cream/60 leading-relaxed space-y-4">
                  <p>
                    The Mithila region spans both sides of the India-Nepal border. In India, it covers parts of 
                    Bihar; in Nepal, it extends into the Tarai region including Janakpur, believed to be the 
                    birthplace of Sita. This shared cultural heritage means Mithila art is practiced and cherished 
                    by communities in both countries.
                  </p>
                  <p>
                    For the Nepali diaspora, particularly in the United States, Mithila painting holds deep cultural 
                    significance. Janakpur's temples and courtyards have long been centers of Mithila artistic 
                    tradition, and the art form is recognized across the Nepali community as a symbol of identity, 
                    spirituality, and continuity.
                  </p>
                  <p>
                    Today, Mithila artists from both sides of the border showcase their work on international 
                    stages, demonstrating that this ancient art form transcends political boundaries and speaks 
                    a universal visual language.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Traditional Practice */}
        <section className="relative py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-madhubani-teal font-cormorant text-sm tracking-[0.3em] uppercase">Tradition</span>
                <h2 className="font-cinzel text-3xl md:text-4xl text-madhubani-black mt-2 mb-6">
                  Women, Walls, and <span className="text-madhubani-red">Natural Colors</span>
                </h2>
                <div className="w-16 h-0.5 bg-madhubani-red mb-6" />
                <div className="font-cormorant text-lg text-madhubani-black/70 leading-relaxed space-y-4">
                  <p>
                    For centuries, Mithila painting was an exclusively female art form, practiced by women of all 
                    castes and communities. The knowledge was passed from mother to daughter, with each generation 
                    adding its own interpretations while preserving the core visual vocabulary.
                  </p>
                  <p>
                    The paintings were created on freshly plastered mud walls using natural materials. Black was 
                    derived from soot or burnt cow dung. White from rice powder. Red from the Kusum flower or 
                    red clay. Yellow from turmeric or pollen. Green from leaf extracts. Blue from indigo. 
                    The brushes were simple bamboo sticks with cotton wrapped at the tip.
                  </p>
                  <p>
                    The most elaborate paintings were created during weddings, festivals, and religious ceremonies. 
                    The Kohbar, or wedding painting, was the most important, adorning the walls of the nuptial 
                    chamber with symbols of fertility, love, and prosperity &mdash; fish, lotus, bamboo, and the 
                    sun &mdash; each carrying specific blessings for the new couple.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative border-2 border-madhubani-red/20 p-2">
                  <CameraShy mode="blur" blur="20px" sensitivity="balanced">
                    <img src="/images/resonance.jpeg" alt="Mithila painting with natural pigments" className="w-full h-auto select-none" draggable="false" onDragStart={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} />
                  </CameraShy>
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-madhubani-teal/30 -z-10" />
                <p className="font-playfair text-xs text-madhubani-black/40 mt-3 text-center italic">
                  Resonance &mdash; A contemporary Mithila work in natural and symbolic colors
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Journey to Paper */}
        <section className="relative py-20 md:py-28 bg-cream-light overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-madhubani-teal font-cormorant text-sm tracking-[0.3em] uppercase">Evolution</span>
              <h2 className="font-cinzel text-3xl md:text-4xl text-madhubani-black mt-2 mb-4">
                From Village Walls to <span className="text-madhubani-red">World Stage</span>
              </h2>
              <div className="w-16 h-0.5 bg-madhubani-red mx-auto mb-6" />
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  year: '1934',
                  title: 'The Discovery',
                  desc: 'A devastating earthquake in Bihar exposed the interior wall paintings of Mithila homes to the outside world for the first time. British colonial officer W. G. Archer photographed and documented the art, bringing it to international attention.',
                },
                {
                  year: '1960s-70s',
                  title: 'Government Patronage',
                  desc: 'The Indian government, facing a severe drought, encouraged women to transfer their wall paintings to handmade paper as a means of income. This shift from mud walls to paper marked a turning point in the art form\'s history.',
                },
                {
                  year: 'Present Day',
                  title: 'Global Recognition',
                  desc: 'Mithila art is now exhibited at the United Nations, the European Union, and major galleries worldwide. Artists use acrylics and fine nib pens on canvas paper, exploring contemporary themes while preserving traditional techniques.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative pl-8 border-l-2 border-madhubani-red/20"
                >
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-madhubani-red bg-cream" />
                  <span className="font-cinzel text-sm text-madhubani-red tracking-wider">{item.year}</span>
                  <h3 className="font-cinzel text-lg text-madhubani-black mt-1 mb-2">{item.title}</h3>
                  <p className="font-cormorant text-madhubani-black/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Five Classical Styles */}
        <section className="relative py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-madhubani-teal font-cormorant text-sm tracking-[0.3em] uppercase">Styles</span>
              <h2 className="font-cinzel text-3xl md:text-4xl text-madhubani-black mt-2 mb-4">
                Five <span className="text-madhubani-red">Classical</span> Traditions
              </h2>
              <div className="w-16 h-0.5 bg-madhubani-red mx-auto mb-6" />
              <p className="font-cormorant text-lg text-madhubani-black/60 max-w-2xl mx-auto">
                Mithila art has five distinct styles, each with its own visual language, techniques, and regional roots
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Kachni',
                  subtitle: 'The Line',
                  desc: 'Kachni is the most intricate style, characterized by fine black lines and delicate cross hatching. No colors are used only monochromatic linework that creates texture, depth, and movement through pattern alone. Artists use bamboo nibs dipped in soot-based ink, and a single painting can take weeks to complete.',
                  color: 'border-madhubani-red/30',
                  textColor: 'text-madhubani-red',
                },
                {
                  name: 'Bharni',
                  subtitle: 'The Color',
                  desc: 'Bharni, meaning "filling," is the most widely recognized Mithila style. Bold black outlines define forms that are then filled with vibrant colors &mdash; deep reds, yellows, oranges, blues, and greens. The contrast between the dark outline and the bright fills creates the dramatic visual impact that Madhubani is famous for.',
                  color: 'border-madhubani-magenta/30',
                  textColor: 'text-madhubani-magenta',
                },
                {
                  name: 'Godna',
                  subtitle: 'The Tattoo',
                  desc: 'Godna takes its inspiration from traditional tattoo art practiced by the Godna community. The style features repetitive geometric patterns, dots, and stylized animal forms. The lines are bolder than Kachni, and the compositions often have a rhythmic, meditative quality. Turtles, fish, and birds are common subjects.',
                  color: 'border-madhubani-teal/30',
                  textColor: 'text-madhubani-teal',
                },
                {
                  name: 'Tantrik',
                  subtitle: 'The Sacred',
                  desc: 'Tantrik style draws on Tantric iconography and esoteric symbolism. It features geometric yantras, concentric circles, and simplified deity forms. The compositions are highly structured and symmetrical, used primarily for ritual and devotional purposes. The focus is on spiritual energy and cosmic order.',
                  color: 'border-madhubani-yellow/40',
                  textColor: 'text-madhubani-yellow',
                },
                {
                  name: 'Kohbar',
                  subtitle: 'The Wedding',
                  desc: 'Kohbar is the wedding art of Mithila, created on the walls of the nuptial chamber. It is the most symbolic style, filled with images of bamboo groves (symbolizing longevity), banana plants (fertility), fish (prosperity), lotus (purity), and the sun and moon (everlasting union). Every element carries a specific blessing for the couple.',
                  color: 'border-madhubani-red/30',
                  textColor: 'text-madhubani-red',
                },
              ].map((style, i) => (
                <motion.div
                  key={style.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`border ${style.color} p-6 bg-cream-light hover:shadow-lg transition-all duration-300 group`}
                >
                  <div className={`w-10 h-0.5 ${style.textColor.replace('text-', 'bg-')} mb-4 group-hover:w-16 transition-all duration-300`} />
                  <div className="flex items-baseline gap-3 mb-3">
                    <h3 className="font-cinzel text-xl text-madhubani-black">{style.name}</h3>
                    <span className={`font-playfair text-xs tracking-widest uppercase ${style.textColor}`}>{style.subtitle}</span>
                  </div>
                  <p className="font-cormorant text-madhubani-black/60 leading-relaxed">{style.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sacred Motifs */}
        <section className="relative py-20 md:py-28 bg-madhubani-black overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="motif-mandala" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#E8A317" strokeWidth="0.5"/>
                  <circle cx="100" cy="100" r="60" fill="none" stroke="#C41E7F" strokeWidth="0.5"/>
                  <circle cx="100" cy="100" r="40" fill="none" stroke="#006B6B" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#motif-mandala)"/>
            </svg>
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-madhubani-teal font-cormorant text-sm tracking-[0.3em] uppercase">Symbolism</span>
              <h2 className="font-cinzel text-3xl md:text-4xl text-cream mt-2 mb-4">
                Sacred <span className="text-madhubani-magenta">Motifs</span>
              </h2>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-px bg-madhubani-red" />
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <circle cx="6" cy="6" r="2" fill="none" stroke="#E8A317" strokeWidth="0.8" />
                  <circle cx="6" cy="6" r="0.8" fill="#C41E7F" />
                </svg>
                <div className="w-12 h-px bg-madhubani-red" />
              </div>
              <p className="font-cormorant text-lg text-cream/50 max-w-2xl mx-auto">
                The symbols that carry centuries of meaning, passed down through generations of women artists
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center">
              {motifs.map((motif, i) => (
                <motion.div
                  key={motif.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group text-center p-6 border border-cream/10 hover:border-madhubani-yellow/40 transition-all duration-300 cursor-default"
                >
                  <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    {motif.svg}
                  </div>
                  <h4 className="font-cinzel text-sm text-madhubani-yellow mb-1">{motif.name}</h4>
                  <p className="font-cormorant text-xs text-cream/40 leading-relaxed">{motif.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Relevance */}
        <section className="relative py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-madhubani-teal font-cormorant text-sm tracking-[0.3em] uppercase">Today</span>
                <h2 className="font-cinzel text-3xl md:text-4xl text-madhubani-black mt-2 mb-6">
                  A Living <span className="text-madhubani-red">Tradition</span>
                </h2>
                <div className="w-16 h-0.5 bg-madhubani-red mb-6" />
                <div className="font-cormorant text-lg text-madhubani-black/70 leading-relaxed space-y-4">
                  <p>
                    Mithila art has traveled far from the mud walls of Bihar. Today, it is practiced by thousands 
                    of artists across India, Nepal, and the global diaspora. The art has been recognized with 
                    India's highest civilian honors, including the Padma Shri, awarded to master artists like 
                    Sita Devi, Mahasundari Devi, and Godawari Dutta for their contributions.
                  </p>
                  <p>
                    Contemporary Mithila artists explore themes far beyond traditional mythology &mdash; climate 
                    change, gender equality, migration, and social justice are now part of the visual vocabulary. 
                    The art has been exhibited at the United Nations, the European Union, the White House, and 
                    museums worldwide, proving that a 2,500 year old women's tradition remains urgently relevant.
                  </p>
                  <p>
                    For the diaspora, Mithila art is a bridge between worlds. It carries the visual memory of 
                    home, the stories of ancestors, and the pride of a culture that refuses to be forgotten. 
                    Every line drawn is an act of preservation and reinvention.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <div className="relative border-2 border-madhubani-red/20 p-2">
                  <CameraShy mode="blur" blur="20px" sensitivity="balanced">
                    <img src="/images/eu-podium.jpg" alt="Mithila art at European Union" className="w-full h-auto select-none" draggable="false" onDragStart={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} />
                  </CameraShy>
                </div>
                <div className="relative border-2 border-madhubani-yellow/20 p-2">
                  <CameraShy mode="blur" blur="20px" sensitivity="balanced">
                    <img src="/images/un-presenting.jpg" alt="Mithila art at the United Nations" className="w-full h-auto select-none" draggable="false" onDragStart={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} />
                  </CameraShy>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 md:py-28 bg-madhubani-black overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="cta-mandala" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#E8A317" strokeWidth="0.5"/>
                  <circle cx="50" cy="50" r="20" fill="none" stroke="#C41E7F" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-mandala)"/>
            </svg>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-cinzel text-3xl md:text-5xl text-cream mb-6">
                Experience the <span className="text-madhubani-yellow">Art</span>
              </h2>
              <p className="font-cormorant text-xl text-cream/60 max-w-2xl mx-auto mb-10">
                Explore the full collection of original Mithila paintings, or commission a piece that carries 
                your own story into this ancient tradition.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/portfolio"
                  className="px-8 py-3 bg-madhubani-red text-cream font-playfair text-sm tracking-wider hover:bg-madhubani-crimson transition-colors border-2 border-madhubani-red"
                >
                  View the Collection
                </Link>
                <Link
                  to="/#commission"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/#commission';
                    setTimeout(() => document.getElementById('commission')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }}
                  className="px-8 py-3 border-2 border-madhubani-yellow/50 text-madhubani-yellow font-playfair text-sm tracking-wider hover:bg-madhubani-yellow hover:text-madhubani-black transition-all"
                >
                  Commission a Piece
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ArtOfMithila;
