import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  {
    text: "Shivangi's Madhubani paintings are not just art — they are windows into a thousand-year-old tradition, rendered with the freshness of a modern eye.",
    author: "Art Collector",
    location: "New York",
  },
  {
    text: "The intricate detail and vibrant colors in every piece reflect a deep reverence for the Mithila tradition. Each painting tells a story that transcends time.",
    author: "Gallery Curator",
    location: "New Jersey",
  },
  {
    text: "My commissioned piece from Mithilafolkfusions is the centerpiece of my home. The Tree of Life painting brings such warmth and cultural richness to our space.",
    author: "Private Collector",
    location: "Connecticut",
  },
  {
    text: "Watching Shivangi create is mesmerizing — the confidence of each line, the thoughtfulness of each motif. She breathes life into every canvas.",
    author: "Exhibition Visitor",
    location: "New York",
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-28 md:py-44 bg-cream overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <svg width="600" height="600" viewBox="0 0 600 600">
          {[50, 100, 150, 200, 250, 280].map((r) => (
            <circle key={r} cx="300" cy="300" r={r} fill="none" stroke="#8B1A1A" strokeWidth="1"/>
          ))}
          {Array.from({ length: 16 }).map((_, i) => (
            <line
              key={i}
              x1="300"
              y1="300"
              x2={300 + 280 * Math.cos((i * 22.5 * Math.PI) / 180)}
              y2={300 + 280 * Math.sin((i * 22.5 * Math.PI) / 180)}
              stroke="#8B1A1A"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
        {/* Quote decoration */}
        <svg width="60" height="50" viewBox="0 0 60 50" className="mx-auto mb-8 text-madhubani-red/20">
          <path d="M0,35 Q0,0 25,0 L25,5 Q5,5 5,25 L25,25 L25,50 L0,50 Z" fill="currentColor"/>
          <path d="M35,35 Q35,0 60,0 L60,5 Q40,5 40,25 L60,25 L60,50 L35,50 Z" fill="currentColor"/>
        </svg>

        <div className="relative h-48 md:h-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <p className="font-playfair text-xl md:text-2xl text-madhubani-black/80 italic leading-relaxed mb-6">
                "{quotes[current].text}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-px bg-madhubani-red" />
                <p className="font-cormorant text-madhubani-red">
                  {quotes[current].author}
                </p>
                <span className="text-madhubani-black/30">·</span>
                <p className="font-cormorant text-madhubani-teal text-sm">
                  {quotes[current].location}
                </p>
                <div className="w-8 h-px bg-madhubani-red" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-4 mt-12">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 ${
                i === current
                  ? 'w-8 h-2 bg-madhubani-red'
                  : 'w-2 h-2 bg-madhubani-red/20 hover:bg-madhubani-red/40'
              }`}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
