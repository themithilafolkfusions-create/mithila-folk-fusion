import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CameraShy } from 'camerashy';
import { SectionDivider } from './MadhubaniBorder';
import Footer from './Footer';
import PortfolioLightbox from './PortfolioLightbox';

const portfolioWorks = [
  {
    id: 1,
    src: '/images/resonance.jpeg',
    title: 'Resonance',
    category: 'Environment & Identity',
    description: 'This Mithila style painting presents a powerful visual dialogue between two contrasting realities of the Earth through a single female face, symbolically connected to the planet itself. The artwork explores the deep impact of pollution on nature and human life, while also reflecting hope through the possibility of restoration.\n\nOne half of the face represents a polluted world, where industrialization and human activity have disrupted natural balance. A train track cuts through the nose like a tunnel, symbolizing the intrusion of development into life itself. Factories pollute water, motor vehicles and ships contaminate the air and sea, and dead fish highlight the loss of aquatic life. This side is painted in dull, muted tones, and the tear filled eye reflects sorrow and environmental distress. The other half reveals a thriving, pollution free world filled with harmony and life. Lush green forests, freely roaming elephants, and birds in flight create a sense of natural abundance. Clean water filled with lotus flowers and living fish symbolizes purity and renewal. Bright, vibrant colors enhance the feeling of peace and hope, while a traditional Mithila style nose ring adds cultural richness and identity.\n\nThe entire face is conceptually merged with the Earth, emphasizing the inseparable bond between humanity and nature. Through this striking contrast, the painting creates a strong emotional "resonance," reminding viewers that the Earth responds to human actions, suffering when it is harmed and flourishing when it is cared for.',
    medium: 'Mithila Folk Art, acrylic on handmade canvas/paper',
    dimensions: '',
  },
  {
    id: 2,
    src: '/images/bodhi-udaya.jpeg',
    title: 'Bodhi Udaya',
    category: 'Spirituality',
    description: 'This artwork, Bodhi Udaya, presents a contemplative interpretation of Lord Buddha\'s enlightenment beneath the sacred Bodhi tree, expressed through the traditional visual language of Mithila folk art. It captures the divine moment of deep meditation, where Siddhartha Gautama attains enlightenment and transforms into the Buddha, symbolizing the awakening of ultimate wisdom and inner peace.\n\nAt the center of the composition, the Bodhi tree stands as a profound spiritual symbol of knowledge, protection, and transcendence. It anchors the scene as the silent witness to enlightenment, radiating calmness and sacred energy. Beneath it, the serene figure of Buddha in meditation embodies stillness, detachment, and spiritual realization.\n\nThe painting is enriched with intricate Mithila motifs, including rhythmic patterns, fine line work, and mandala inspired arches that encircle the central narrative. These decorative elements create a sense of cosmic harmony and reflect the balance between the earthly and the divine.\n\nThrough its fusion of Buddhist philosophy and Mithila artistic tradition, Bodhi Udaya becomes a visual meditation on awakening and liberation. It invites the viewer into a space of tranquility, reflection, and spiritual awareness, honoring both cultural heritage and timeless wisdom.',
    medium: 'Mithila Folk Art, acrylic on handmade canvas/paper',
    dimensions: '',
  },
  {
    id: 3,
    src: '/images/mythocircle.jpeg',
    title: 'Mythocircle',
    category: 'Mythology & Folklore',
    description: 'This is a Godna inspired Mithila folk artwork that brings together mythology, nature, and symbolic geometry in a unified composition. At the center of the painting is a turtle, rendered in bold, intricate linework typical of traditional Godna tattoo art. The turtle is not just a natural form but a sacred structure, carrying within it layers of meaning. Its shell is divided into concentric circular patterns, creating a rhythmic mandala like design that draws the viewer inward.\n\nEach circle on the shell is filled with detailed animal motifs, representing the harmony of living beings and the interconnectedness of nature. These repeating forms create a sense of movement and balance across the composition, echoing the cyclical idea of life in folk tradition. Within this structured universe, the painting highlights the figure of Raja Sahlesh along with his two brothers. Their presence transforms the turtle into a vessel of storytelling, carrying forward the legacy of Mithila\'s oral history and heroic folklore. The entire composition is rooted in the visual language of Mithila, where Godna art traditionally uses repetitive patterns and symbolic motifs to express cultural identity. The painting unites mythology, animals, and geometry into a single flowing narrative where the turtle becomes a cosmic carrier of stories, and every circle becomes a world of its own.',
    medium: 'Godna Art, acrylic on handmade canvas/paper',
    dimensions: '',
  },
  {
    id: 4,
    src: '/images/echoes-beneath-branches.jpeg',
    title: 'Echoes Beneath the Branches',
    category: 'Nature & Community',
    description: 'The painting Created in black and white using the traditional Mithila folk art style, Echoes Beneath the Branches explores the idea of home as a shared and living experience. At the center stands a majestic tree transformed into a sanctuary of many birdhouses, each holding quiet life within. Birds rest inside their small dwellings and along the branches, symbolizing belonging, coexistence, and the gentle rhythm of community. Behind the tree, a tranquil pond with swimming ducks and blooming lotuses reflects harmony and renewal. The fish lined border frames the composition, representing continuity and the cyclical flow of nature. Through intricate linework and detailed patterns, the absence of color draws attention to structure, symbolism, and the subtle emotional resonance within the natural world. The work invites viewers to listen to the silent echoes of connection that exist beneath the branches we all call home.',
    medium: 'Mithila Folk Art, Black & White, acrylic on handmade canvas/paper',
    dimensions: '',
  },
  {
    id: 5,
    src: '/images/one-earth-many-voices.jpeg',
    title: 'One Earth, Many Voices',
    category: 'Climate & Culture',
    description: 'This Mithila inspired mandala represents Earth as the shared home of humanity, where climate resilience is built through unity, cultural diversity, and respect for nature. At the center lies the planet, surrounded by concentric circles symbolizing the interconnected ecosystems and communities that sustain life.\n\nThe ring of international flags reflects that climate change knows no borders. Every nation faces the same environmental challenges and must work collectively toward solutions. The repeated human faces symbolize people from diverse cultures, reminding us that resilience is strongest when every community has a voice and participates in shaping a sustainable future.\n\nTraditional Mithila motifs, including birds, fish, elephants, vines, and flowering forms, represent biodiversity and the delicate balance between humans and the natural world. These living symbols illustrate thriving ecosystems that protect against climate impacts by supporting clean water, healthy forests, pollinators, wildlife, and ecological harmony.\n\nFor New Jersey, a state increasingly affected by flooding, extreme weather, rising temperatures, and coastal erosion, the artwork becomes a call for community action. Just as each circle depends on the one surrounding it, resilient neighborhoods depend on collaboration among residents, artists, educators, environmental organizations, and local leaders. Every individual action, whether planting native trees, restoring wetlands, reducing waste, conserving water, or educating future generations, creates ripples of positive change.\n\nBy presenting the Earth as a unified circle of cultures and nature, the painting invites viewers to recognize that climate resilience is not only about infrastructure but also about strengthening human connections, preserving cultural heritage, and fostering environmental stewardship. Through the storytelling tradition of Mithila art, the work encourages dialogue, inspires collective responsibility, and demonstrates how art can unite communities around a shared vision of a healthier, more resilient future.',
    medium: 'Mithila Folk Art, acrylic on handmade canvas/paper',
    dimensions: '',
  },
  {
    id: 6,
    src: '/images/echoes-of-exile.jpeg',
    title: 'Echoes of Exile',
    category: 'Mythology & Heritage',
    description: 'The painting, Echoes of Exile, Ram and Sita\'s journey is based on an important event featured in Ramayana visualizing lord Rama\'s 14 year exile with his wife Sita and brother Lakshman. To fulfill his father, king Dasharatha\'s promise to his wife, Kaikeyi, lord Rama went to a 14 year exile. This event set an important phase of Ramayana, where the journey of Ram, Sita and Lakshman began that would give important lessons of Life and Dharma to humankind for years to come. While Rama had to go alone on the exile, Sita insisted to go with him as spouse dharma is stay with each other in all circumstances. Lakshaman, being the loyal brother did not want to leave his brother and be by his side to protect him from any harm. Rama, being the eldest prince who could have become the king and lead a comfortable life decided to fulfill his father\'s promise and chose to embark on the arduous exile, leaving royal comfort behind with courage and grace. This painting is an attempt to showcase this event from Ramayana using the ancient Mithila Folk Art style from north India. The painting uses the colorful and vibrant motifs like flower and birds that sets the enchanting backdrop of the forest. They try to define the significance of beautiful life, no matter the circumstances. The intricate patterns and bright colors add contrast beautifully to enhance the artwork effect.',
    medium: 'Mithila Folk Art, acrylic on handmade canvas/paper',
    dimensions: '',
  },
];

const CornerOrnament: React.FC<{ className: string }> = ({ className }) => (
  <svg className={`absolute z-10 pointer-events-none ${className}`} width="24" height="24" viewBox="0 0 24 24">
    <path d="M0,12 Q0,0 12,0" fill="none" stroke="#8B1A1A" strokeWidth="1" />
    <circle cx="3" cy="3" r="1.5" fill="#E8A317" />
    <path d="M3,8 Q3,3 8,3" fill="none" stroke="#C41E7F" strokeWidth="0.6" />
  </svg>
);

const Portfolio: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { t } = useTranslation();

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
            {t('portfolio.backToHome')}
          </Link>
        </div>

        {/* Header */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-madhubani-teal font-cormorant text-lg tracking-[0.4em] uppercase">{t('portfolio.sectionLabel')}</span>
            <h1 className="font-cinzel text-3xl md:text-5xl text-madhubani-black mt-3 mb-4">
              {t('portfolio.headingPrefix')} <span className="text-madhubani-red">{t('portfolio.headingHighlight')}</span>
            </h1>
            <SectionDivider variant="peacock" />
            <p className="font-cormorant text-lg text-madhubani-black/60 max-w-2xl mx-auto mt-4">
              {t('portfolio.description')}
            </p>
          </motion.div>
        </div>

        {/* Paintings grid */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="space-y-20">
            {portfolioWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                onClick={() => setSelectedIndex(index)}
                className="cursor-pointer group"
              >
                {/* Museum-style card */}
                <div className="relative border border-madhubani-red/20 bg-cream-light p-4 md:p-8 lg:p-12 transition-all duration-500 hover:shadow-lg hover:shadow-madhubani-red/10">
                  {/* Corner ornaments */}
                  <CornerOrnament className="top-2 left-2" />
                  <CornerOrnament className="top-2 right-2 -scale-x-100" />
                  <CornerOrnament className="bottom-2 left-2 -scale-y-100" />
                  <CornerOrnament className="bottom-2 right-2 scale-[-1]" />

                  {/* Decorative inset border around the painting area */}
                  <div className="relative -inset-4 border-2 border-madhubani-red/10 p-1 mb-10">
                    <div className="border border-madhubani-red/20">
                      <CameraShy mode="blur" blur="20px" sensitivity="balanced">
                        <img
                          src={work.src}
                          alt={work.title}
                          draggable="false"
                          onDragStart={(e) => e.preventDefault()}
                          className="w-auto mx-auto h-auto max-h-[100dvh] select-none transition-all duration-700 grayscale hover:grayscale-0 group-hover:scale-[1.02]"
                        />
                      </CameraShy>
                    </div>
                  </div>

                  {/* Decorative divider */}
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-madhubani-red/20 to-transparent" />
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="3" fill="none" stroke="#C41E7F" strokeWidth="0.8" />
                      <circle cx="8" cy="8" r="1" fill="#E8A317" />
                    </svg>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-madhubani-red/20 to-transparent" />
                  </div>

                  {/* Artwork info */}
                  <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-cinzel text-2xl md:text-3xl text-madhubani-black group-hover:text-madhubani-red transition-colors mb-2">
                      {t(`portfolio.art${work.id}Title`)}
                    </h2>
                    <p className="font-playfair text-sm tracking-[0.3em] uppercase text-madhubani-teal mb-4">
                      {work.category}
                    </p>
                    <div className="font-cormorant text-lg text-madhubani-black/60 leading-relaxed space-y-4 text-left max-w-3xl mx-auto">
                      {t(`portfolio.art${work.id}Long`).split('\n\n').map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
                      <span className="font-playfair text-madhubani-black/40">
                        {t('portfolio.medium')} {work.medium}
                      </span>
                    </div>
                  </div>

                  {/* Click hint */}
                  <div className="text-center mt-6">
                    <span className="font-playfair text-xs tracking-widest text-madhubani-red/40 group-hover:text-madhubani-red/70 transition-colors">
                      {t('portfolio.clickHint')}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <PortfolioLightbox
          works={portfolioWorks}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
