import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SectionDivider } from './MadhubaniBorder';

const slides = [
  { type: 'image', src: '/images/profile-1.jpg' },
  { type: 'video', src: '/images/profile-video.mp4' },
  { type: 'image', src: '/images/profile-2.png' },
  { type: 'image', src: '/images/profile-3.png' },
  { type: 'image', src: '/images/profile-4.png' },
  { type: 'image', src: '/images/profile-5.png' },
];

const SLIDE_INTERVAL = 4000;

const About: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (index: number) => {
    setCurrent(index);
    startTimer();
  };
  return (
    <section id="about" className="relative py-28 md:py-44 bg-cream overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 rangoli-bg opacity-50" />
      
      {/* Decorative side borders */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-madhubani-red via-madhubani-magenta to-madhubani-teal opacity-15" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-madhubani-teal via-madhubani-magenta to-madhubani-red opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-madhubani-magenta font-cormorant text-lg tracking-[0.4em] uppercase">The Artist</span>
          <h2 className="font-cinzel text-3xl md:text-5xl text-madhubani-black mt-3 mb-4">
            About <span className="text-madhubani-red">Shivangi</span>
          </h2>
          <SectionDivider variant="lotus" />
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-16">
          {/* Video / Slideshow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-madhubani-red/30" />
              <div className="absolute -inset-2 border border-madhubani-yellow/40" />
              
              <svg className="absolute -top-6 -left-6 z-10" width="40" height="40" viewBox="0 0 40 40">
                <path d="M0,20 Q0,0 20,0" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
                <circle cx="4" cy="4" r="3" fill="#E8A317"/>
                <path d="M5,15 Q5,5 15,5" fill="none" stroke="#C41E7F" strokeWidth="1.5"/>
              </svg>
              <svg className="absolute -top-6 -right-6 z-10" width="40" height="40" viewBox="0 0 40 40" style={{ transform: 'scaleX(-1)' }}>
                <path d="M0,20 Q0,0 20,0" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
                <circle cx="4" cy="4" r="3" fill="#E8A317"/>
                <path d="M5,15 Q5,5 15,5" fill="none" stroke="#C41E7F" strokeWidth="1.5"/>
              </svg>
              <svg className="absolute -bottom-6 -left-6 z-10" width="40" height="40" viewBox="0 0 40 40" style={{ transform: 'scaleY(-1)' }}>
                <path d="M0,20 Q0,0 20,0" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
                <circle cx="4" cy="4" r="3" fill="#E8A317"/>
                <path d="M5,15 Q5,5 15,5" fill="none" stroke="#C41E7F" strokeWidth="1.5"/>
              </svg>
              <svg className="absolute -bottom-6 -right-6 z-10" width="40" height="40" viewBox="0 0 40 40" style={{ transform: 'scale(-1)' }}>
                <path d="M0,20 Q0,0 20,0" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
                <circle cx="4" cy="4" r="3" fill="#E8A317"/>
                <path d="M5,15 Q5,5 15,5" fill="none" stroke="#C41E7F" strokeWidth="1.5"/>
              </svg>

              <div className="w-full aspect-[4/3] bg-madhubani-black overflow-hidden">
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{ opacity: i === current ? 1 : 0 }}
                  >
                    {slide.type === 'image' ? (
                      <img
                        src={slide.src}
                        alt="Shivangi Singh"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <video
                        src={slide.src}
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-madhubani-black/40 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-cream/90 backdrop-blur-sm p-3 border border-madhubani-red/30 text-center">
                <p className="font-cinzel text-madhubani-red text-sm tracking-wider">Shivangi Vatsya Singh</p>
                <p className="font-cormorant text-madhubani-teal text-xs tracking-widest uppercase">Mithila Folk Artist</p>
              </div>

              {/* Slide indicators */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'bg-madhubani-yellow w-5' : 'bg-cream/60 hover:bg-cream'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-10"
          >
            <p className="font-cormorant text-lg md:text-xl text-madhubani-black/80 leading-relaxed">
              <span className="font-playfair text-2xl md:text-3xl text-madhubani-red font-semibold italic">Shivangi Singh</span> 
              {' '}is a passionate Mithila folk artist who breathes new life into the ancient art form of Madhubani painting. 
              Through her brand <strong className="text-madhubani-teal">Mithilafolkfusions</strong>, she creates a beautiful 
              bridge between centuries-old traditions and contemporary artistic expression.
            </p>

            <p className="font-cormorant text-lg text-madhubani-black/70 leading-relaxed">
              Born with an innate connection to the rich cultural heritage of Bihar's Mithila region, 
              Shivangi's artistry captures the essence of this 2,500-year-old tradition while infusing it 
              with modern sensibilities. Her work features the characteristic bold outlines, intricate patterns, 
              and vibrant colors that define Madhubani art.
            </p>

            <p className="font-cormorant text-lg text-madhubani-black/70 leading-relaxed">
              From majestic peacocks and sacred lotus flowers to powerful goddess figures and the iconic 
              Tree of Life, each piece tells a story rooted in mythology, nature, and the feminine divine. 
              Her unique fusion approach has earned recognition at prestigious venues including the 
              <strong className="text-madhubani-red"> Consulate General of India in New York</strong>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-10">
              {[
                { number: '100+', label: 'Artworks Created' },
                { number: '15+', label: 'Exhibitions' },
                { number: '500+', label: 'Happy Collectors' },
              ].map((stat) => (
                <div key={stat.label} className="text-center border border-madhubani-red/20 p-6 bg-cream-light">
                  <p className="font-cinzel text-2xl md:text-3xl text-madhubani-red">{stat.number}</p>
                  <p className="font-cormorant text-sm text-madhubani-teal tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
