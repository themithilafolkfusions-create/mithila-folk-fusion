import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Frame, Gift, Brush, Heart, Star } from 'lucide-react';


const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Custom Paintings',
    description: `A single conversation shapes the brief; fine nib work on handmade paper translates your story into Mithila's 2,500 year old visual language.`,
    color: 'madhubani-red',
  },
  {
    icon: <Frame className="w-8 h-8" />,
    title: 'Wall Murals',
    description: 'Painted on site or on mounted panels. Large format Madhubani compositions for lobbies, galleries, restaurants, and residential walls.',
    color: 'madhubani-teal',
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: 'Commissions as Gifts',
    description: 'A commissioned Madhubani piece for weddings, anniversaries, or milestones. Framed and shipped, with a note that carries the artist\'s voice.',
    color: 'madhubani-magenta',
  },
  {
    icon: <Brush className="w-8 h-8" />,
    title: 'Workshops',
    description: 'Two hour to full day sessions covering Kachni, Bharni, and Godna techniques. All materials provided. Suitable for schools, colleges, museums, and corporate teams.',
    color: 'madhubani-green',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Live Demonstrations',
    description: 'The artist paints live at your venue. A festival, conference, or gallery opening. While guests observe the discipline of Mithila linework up close.',
    color: 'madhubani-orange',
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: 'Giclée Prints',
    description: 'Archival quality fine art prints of original works, signed and numbered. Custom sizing available for residential and commercial framing.',
    color: 'madhubani-blue',
  },
];

const Commission: React.FC = () => {
  return (
    <section id="commission" className="relative py-28 md:py-44 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-madhubani-red via-madhubani-crimson to-madhubani-magenta" />
      
      {/* Decorative overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="commission-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40,0 L80,40 L40,80 L0,40 Z" fill="none" stroke="#FDF5E6" strokeWidth="0.5"/>
              <circle cx="40" cy="40" r="15" fill="none" stroke="#FDF5E6" strokeWidth="0.5"/>
              <circle cx="0" cy="0" r="10" fill="none" stroke="#FDF5E6" strokeWidth="0.3"/>
              <circle cx="80" cy="0" r="10" fill="none" stroke="#FDF5E6" strokeWidth="0.3"/>
              <circle cx="0" cy="80" r="10" fill="none" stroke="#FDF5E6" strokeWidth="0.3"/>
              <circle cx="80" cy="80" r="10" fill="none" stroke="#FDF5E6" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#commission-pattern)"/>
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
          <span className="text-madhubani-yellow font-cormorant text-lg tracking-[0.4em] uppercase">Commissions</span>
          <h2 className="font-cinzel text-3xl md:text-5xl text-cream mt-3 mb-4">
            Commission <span className="text-madhubani-yellow">Your Art</span>
          </h2>
          <div className="flex justify-center">
            <svg width="200" height="40" viewBox="0 0 200 40">
              <line x1="0" y1="20" x2="70" y2="20" stroke="#E8A317" strokeWidth="1" opacity="0.5"/>
              <circle cx="100" cy="20" r="8" fill="none" stroke="#E8A317" strokeWidth="1.5"/>
              <circle cx="100" cy="20" r="4" fill="#E8A317" opacity="0.5"/>
              <line x1="130" y1="20" x2="200" y2="20" stroke="#E8A317" strokeWidth="1" opacity="0.5"/>
            </svg>
          </div>
          <p className="font-cormorant text-lg text-cream/70 max-w-2xl mx-auto mt-4">
            A commissioned Mithila piece begins with a conversation. Your vision, translated 
            into line and pigment, on handmade paper that carries a 2,500 year old tradition
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-cream/10 backdrop-blur-sm border border-cream/20 p-6 hover:bg-cream/20 transition-all duration-300 group text-center"
            >
              <div className="text-madhubani-yellow mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>
              <h3 className="font-cinzel text-lg text-cream mb-2">{service.title}</h3>
              <p className="font-cormorant text-cream/60 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="font-cinzel text-2xl text-center text-cream mb-12">
            The <span className="text-madhubani-yellow">Process</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consult', desc: 'Share your vision & ideas' },
              { step: '02', title: 'Design', desc: 'Concept sketches & motifs' },
              { step: '03', title: 'Create', desc: 'Handcrafted with love' },
              { step: '04', title: 'Deliver', desc: 'Framed & shipped safely' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 mx-auto mb-3 border-2 border-madhubani-yellow/50 rounded-full flex items-center justify-center">
                  <span className="font-cinzel text-lg text-madhubani-yellow">{item.step}</span>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t border-dashed border-cream/20" />
                )}
                <h4 className="font-cinzel text-sm text-cream mb-1">{item.title}</h4>
                <p className="font-cormorant text-xs text-cream/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Commission;
