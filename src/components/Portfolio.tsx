import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CameraShy } from 'camerashy';
import { SectionDivider } from './MadhubaniBorder';
import Footer from './Footer';

const portfolioWorks = [
  {
    id: 1,
    src: '/images/resonance.jpeg',
    title: 'Resonance',
    category: 'Environment & Identity',
    description: 'This Mithila-style painting presents a powerful visual dialogue between two contrasting realities of the Earth through a single female face, symbolically connected to the planet itself. The artwork explores the deep impact of pollution on nature and human life, while also reflecting hope through the possibility of restoration. One half of the face represents a polluted world, where industrialization and human activity have disrupted natural balance. A train track cuts through the nose like a tunnel, symbolizing the intrusion of development into life itself. Factories pollute water, motor vehicles and ships contaminate the air and sea, and dead fish highlight the loss of aquatic life. This side is painted in dull, muted tones, and the tear-filled eye reflects sorrow and environmental distress. The other half reveals a thriving, pollution free world filled with harmony and life. Lush green forests, freely roaming elephants, and birds in flight create a sense of natural abundance. Clean water filled with lotus flowers and living fish symbolize purity and renewal. Bright, vibrant colors enhance the feeling of peace and hope, while a traditional Mithila style nose ring adds cultural richness and identity. The entire face is conceptually merged with the Earth, emphasizing the inseparable bond between humanity and nature. Through this striking contrast, the painting creates a strong emotional "resonance," reminding viewers that the Earth responds to human actions, suffering when it is harmed and flourishing when it is cared for.',
    medium: 'Mithila Folk Art',
    dimensions: '—',
  },
  {
    id: 2,
    src: '/images/bodhi-udaya.jpeg',
    title: 'Bodhi Udaya',
    category: 'Spirituality',
    description: 'This artwork, Bodhi Udaya, presents a contemplative interpretation of Lord Buddha\'s enlightenment beneath the sacred Bodhi tree, expressed through the traditional visual language of Mithila folk art. It captures the divine moment of deep meditation, where Siddhartha Gautama attains enlightenment and transforms into the Buddha, symbolizing the awakening of ultimate wisdom and inner peace. At the center of the composition, the Bodhi tree stands as a profound spiritual symbol of knowledge, protection, and transcendence. It anchors the scene as the silent witness to enlightenment, radiating calmness and sacred energy. Beneath it, the serene figure of Buddha in meditation embodies stillness, detachment, and spiritual realization. The painting is enriched with intricate Mithila (Madhubani) motifs, including rhythmic patterns, fine line work, and mandala inspired arches that encircle the central narrative. These decorative elements create a sense of cosmic harmony and reflect the balance between the earthly and the divine. Through its fusion of Buddhist philosophy and Mithila artistic tradition, Bodhi Udaya becomes a visual meditation on awakening and liberation. It invites the viewer into a space of tranquility, reflection, and spiritual awareness, honoring both cultural heritage and timeless wisdom.',
    medium: 'Mithila Folk Art',
    dimensions: '—',
  },
  {
    id: 3,
    src: '/images/mythocircle.jpeg',
    title: 'Mythocircle',
    category: 'Mythology & Folklore',
    description: 'This is a Godna inspired Mithila folk artwork that brings together mythology, nature, and symbolic geometry in a unified composition. At the center of the painting is a turtle, rendered in bold, intricate linework typical of traditional Godna tattoo art. The turtle is not just a natural form but a sacred structure, carrying within it layers of meaning. Its shell is divided into concentric circular patterns, creating a rhythmic mandala like design that draws the viewer inward. Each circle on the shell is filled with detailed animal motifs, representing the harmony of living beings and the interconnectedness of nature. These repeating forms create a sense of movement and balance across the composition, echoing the cyclical idea of life in folk tradition. Within this structured universe, the painting highlights the figure of Raja Sahlesh along with his two brothers. Their presence transforms the turtle into a vessel of storytelling, carrying forward the legacy of Mithila\'s oral history and heroic folklore. The entire composition is rooted in the visual language of Mithila, where Godna art traditionally uses repetitive patterns and symbolic motifs to express cultural identity. The painting unites mythology, animals, and geometry into a single flowing narrative where the turtle becomes a cosmic carrier of stories, and every circle becomes a world of its own.',
    medium: 'Godna Art',
    dimensions: '—',
  },
  {
    id: 4,
    src: '/images/echoes-beneath-branches.jpeg',
    title: 'Echoes Beneath the Branches',
    category: 'Nature & Community',
    description: 'The painting Created in black and white using the traditional Mithila folk art style, Echoes Beneath the Branches explores the idea of home as a shared and living experience. At the center stands a majestic tree transformed into a sanctuary of many birdhouses, each holding quiet life within. Birds rest inside their small dwellings and along the branches, symbolizing belonging, coexistence, and the gentle rhythm of community. Behind the tree, a tranquil pond with swimming ducks and blooming lotuses reflects harmony and renewal. The fish lined border frames the composition, representing continuity and the cyclical flow of nature. Through intricate linework and detailed patterns, the absence of color draws attention to structure, symbolism, and the subtle emotional resonance within the natural world. The work invites viewers to listen to the silent echoes of connection that exist beneath the branches we all call home.',
    medium: 'Mithila Folk Art — Black & White',
    dimensions: '—',
  },
  {
    id: 5,
    src: '/images/one-earth-many-voices.jpeg',
    title: 'One Earth, Many Voices',
    category: 'Climate & Culture',
    description: 'This Mithila-inspired mandala represents Earth as the shared home of humanity, where climate resilience is built through unity, cultural diversity, and respect for nature. At the center lies the planet, surrounded by concentric circles symbolizing the interconnected ecosystems and communities that sustain life. The ring of international flags reflects that climate change knows no borders. Every nation faces the same environmental challenges and must work collectively toward solutions. The repeated human faces symbolize people from diverse cultures, reminding us that resilience is strongest when every community has a voice and participates in shaping a sustainable future. Traditional Mithila motifs-including birds, fish, elephants, vines, and flowering forms-represent biodiversity and the delicate balance between humans and the natural world. These living symbols illustrate thriving ecosystems that protect against climate impacts by supporting clean water, healthy forests, pollinators, wildlife, and ecological harmony. For New Jersey, a state increasingly affected by flooding, extreme weather, rising temperatures, and coastal erosion, the artwork becomes a call for community action. Just as each circle depends on the one surrounding it, resilient neighborhoods depend on collaboration among residents, artists, educators, environmental organizations, and local leaders. Every individual action-whether planting native trees, restoring wetlands, reducing waste, conserving water, or educating future generations-creates ripples of positive change. By presenting the Earth as a unified circle of cultures and nature, the painting invites viewers to recognize that climate resilience is not only about infrastructure but also about strengthening human connections, preserving cultural heritage, and fostering environmental stewardship. Through the storytelling tradition of Mithila art, the work encourages dialogue, inspires collective responsibility, and demonstrates how art can unite communities around a shared vision of a healthier, more resilient future.',
    medium: 'Mithila Folk Art',
    dimensions: '—',
  },
  {
    id: 6,
    src: '/images/echoes-of-exile.jpeg',
    title: 'Echoes of Exile',
    category: 'Mythology & Heritage',
    description: 'The painting, Echoes of Exile, Ram and Sita\'s journey is based on an important event featured in Ramayana visualizing lord Rama\'s 14 year exile with his wife Sita and brother Lakshman. To fulfill his father, king Dasharatha\'s promise to his wife, Kaikeyi, lord Rama went to a 14 year exile. This event set an important phase of Ramayana, where the journey of Ram, Sita and Lakshman began that would give important lessons of Life and Dharma to humankind for years to come. While Rama had to go alone on the exile, Sita insisted to go with him as spouse dharma is stay with each other in all circumstances. Lakshaman, being the loyal brother did not want to leave his brother and be by his side to protect him from any harm. Rama, being the eldest prince who could have become the king and lead a comfortable life decided to fulfill his father\'s promise and chose to embark on the arduous exile, leaving royal comfort behind with courage and grace. This painting is an attempt to showcase this event from Ramayana using the ancient Mithila Folk Art style from north India. The painting uses the colorful and vibrant motifs like flower and birds that sets the enchanting backdrop of the forest. They try to define the significance of beautiful life, no matter the circumstances. The intricate patterns and bright colors add contrast beautifully to enhance the artwork effect.',
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

        <div className="relative px-4 sm:px-6 lg:px-8">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
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
          <div className="space-y-20 md:space-y-28">
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
                  <div className="w-full md:w-2/3">
                    <div className="relative group">
                      {/* Decorative frame */}
                      <div className="absolute -inset-4 border border-madhubani-red/15 pointer-events-none" />
                      <div className="absolute -inset-2 border border-madhubani-yellow/20 pointer-events-none" />

                      {/* Corner ornaments */}
                      <svg className="absolute -top-5 -left-5 z-10 pointer-events-none" width="40" height="40" viewBox="0 0 40 40">
                        <path d="M0,20 Q0,0 20,0" fill="none" stroke="#8B1A1A" strokeWidth="1.5"/>
                        <circle cx="4" cy="4" r="3" fill="#E8A317"/>
                        <path d="M6,14 Q6,6 14,6" fill="none" stroke="#C41E7F" strokeWidth="1"/>
                      </svg>
                      <svg className="absolute -top-5 -right-5 z-10 pointer-events-none" width="40" height="40" viewBox="0 0 40 40" style={{ transform: 'scaleX(-1)' }}>
                        <path d="M0,20 Q0,0 20,0" fill="none" stroke="#8B1A1A" strokeWidth="1.5"/>
                        <circle cx="4" cy="4" r="3" fill="#E8A317"/>
                        <path d="M6,14 Q6,6 14,6" fill="none" stroke="#C41E7F" strokeWidth="1"/>
                      </svg>
                      <svg className="absolute -bottom-5 -left-5 z-10 pointer-events-none" width="40" height="40" viewBox="0 0 40 40" style={{ transform: 'scaleY(-1)' }}>
                        <path d="M0,20 Q0,0 20,0" fill="none" stroke="#8B1A1A" strokeWidth="1.5"/>
                        <circle cx="4" cy="4" r="3" fill="#E8A317"/>
                        <path d="M6,14 Q6,6 14,6" fill="none" stroke="#C41E7F" strokeWidth="1"/>
                      </svg>
                      <svg className="absolute -bottom-5 -right-5 z-10 pointer-events-none" width="40" height="40" viewBox="0 0 40 40" style={{ transform: 'scale(-1)' }}>
                        <path d="M0,20 Q0,0 20,0" fill="none" stroke="#8B1A1A" strokeWidth="1.5"/>
                        <circle cx="4" cy="4" r="3" fill="#E8A317"/>
                        <path d="M6,14 Q6,6 14,6" fill="none" stroke="#C41E7F" strokeWidth="1"/>
                      </svg>

                      <CameraShy mode="blur" blur="20px" sensitivity="balanced">
                      <img
                        src={work.src}
                        alt={work.title}
                        draggable="false"
                        onDragStart={(e) => e.preventDefault()}
                        className="w-full h-[32rem] md:h-[42rem] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                      </CameraShy>

                      {/* Subtle overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-madhubani-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className={`w-full md:w-1/3 ${isEven ? 'md:pl-4' : 'md:pr-4'}`}>
                    <div className="space-y-6 max-w-lg">
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
