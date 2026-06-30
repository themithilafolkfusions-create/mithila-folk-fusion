import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CameraShy } from 'camerashy';
import { Globe, Landmark, Building2, MapPin, Building, Paintbrush, Leaf, Users, Award, Star } from 'lucide-react';
import { SectionDivider } from './MadhubaniBorder';

const slides = [
  { type: 'image', src: '/images/profile-headshot.jpg' },
  { type: 'image', src: '/images/eu-podium.jpg' },
  { type: 'image', src: '/images/un-outdoor.jpg' },
  { type: 'image', src: '/images/profile-office.jpg' },
  { type: 'image', src: '/images/profile-exhibition.png' },
  { type: 'video', src: '/images/profile-video.mp4' },
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
    <section id="about" className="relative py-20 md:py-32 bg-cream overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 rangoli-bg opacity-50" />
      
      {/* Decorative side borders */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-madhubani-red via-madhubani-magenta to-madhubani-teal opacity-15" />
      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-madhubani-teal via-madhubani-magenta to-madhubani-red opacity-15" />

      <div className="px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mx-auto max-w-3xl mb-16"
        >
          <span className="text-madhubani-magenta font-cormorant text-lg tracking-[0.4em] uppercase">The Artist</span>
          <h2 className="font-cinzel text-3xl md:text-5xl text-madhubani-black mt-3 mb-4">
            About <span className="text-madhubani-red">Shivangi</span>
          </h2>
          <SectionDivider variant="lotus" />
          <p className="font-playfair text-lg md:text-xl text-madhubani-red italic mt-4 tracking-wide">
            "Preserving Heritage. Inspiring Tomorrow."
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Side-by-side: slideshow + bio intro */}
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            {/* Left: Slideshow — col-span-2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5"
            >
              <div className="relative w-full max-w-[90%] mx-auto">
                <div className="absolute -inset-6 border-2 border-madhubani-red/30" />
                <div className="absolute -inset-3 border border-madhubani-yellow/40" />
                
                <svg className="absolute -top-10 -left-10 z-10" width="56" height="56" viewBox="0 0 56 56">
                  <path d="M0,28 Q0,0 28,0" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
                  <circle cx="6" cy="6" r="4" fill="#E8A317"/>
                  <path d="M8,20 Q8,8 20,8" fill="none" stroke="#C41E7F" strokeWidth="1.5"/>
                </svg>
                <svg className="absolute -top-10 -right-10 z-10" width="56" height="56" viewBox="0 0 56 56" style={{ transform: 'scaleX(-1)' }}>
                  <path d="M0,28 Q0,0 28,0" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
                  <circle cx="6" cy="6" r="4" fill="#E8A317"/>
                  <path d="M8,20 Q8,8 20,8" fill="none" stroke="#C41E7F" strokeWidth="1.5"/>
                </svg>
                <svg className="absolute -bottom-10 -left-10 z-10" width="56" height="56" viewBox="0 0 56 56" style={{ transform: 'scaleY(-1)' }}>
                  <path d="M0,28 Q0,0 28,0" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
                  <circle cx="6" cy="6" r="4" fill="#E8A317"/>
                  <path d="M8,20 Q8,8 20,8" fill="none" stroke="#C41E7F" strokeWidth="1.5"/>
                </svg>
                <svg className="absolute -bottom-10 -right-10 z-10" width="56" height="56" viewBox="0 0 56 56" style={{ transform: 'scale(-1)' }}>
                  <path d="M0,28 Q0,0 28,0" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
                  <circle cx="6" cy="6" r="4" fill="#E8A317"/>
                  <path d="M8,20 Q8,8 20,8" fill="none" stroke="#C41E7F" strokeWidth="1.5"/>
                </svg>

                <div className="w-full bg-madhubani-black overflow-hidden" style={{ aspectRatio: '4/5' }}>
                  <div className="relative w-full h-full p-5">
                    {slides.map((slide, i) => (
                      <div
                        key={i}
                        className="absolute inset-0 transition-opacity duration-700"
                        style={{ opacity: i === current ? 1 : 0 }}
                      >
                        {slide.type === 'image' ? (
                          <CameraShy mode="blur" blur="20px" sensitivity="balanced">
                          <img
                            src={slide.src}
                            alt="Shivangi Singh"
                            className="w-full h-full object-cover"
                          />
                          </CameraShy>
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
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-madhubani-black/40 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-cream/90 backdrop-blur-sm p-4 border border-madhubani-red/30 text-center">
                  <p className="font-cinzel text-madhubani-red text-base tracking-wider">Shivangi Vatsya Singh</p>
                  <p className="font-cormorant text-madhubani-teal text-sm tracking-widest uppercase">Mithila Folk Artist</p>
                </div>

                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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

            {/* Right: Opening bios — col-span-7 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-7 text-left space-y-8 md:space-y-10 max-w-2xl"
            >
              <p className="font-cormorant text-2xl md:text-3xl text-madhubani-black/80 leading-relaxed">
                <span className="font-playfair text-4xl md:text-5xl text-madhubani-red font-semibold italic">Shivangi Singh</span> 
                {' '}is an Indian American contemporary Mithila (Madhubani) folk artist based in New Jersey, working under the name <strong className="text-madhubani-teal">MithilaFolkFusions</strong>. 
                Originally from the Mithilanchal region of India and raised in Jharkhand, she brings a strong cultural foundation to her practice, blending traditional storytelling with contemporary themes that speak to global audiences.
              </p>

              <p className="font-cormorant text-xl md:text-2xl text-madhubani-black/70 leading-relaxed">
                Her work is rooted in classical Mithila styles such as Kachni, Bharni, and Godna, while also expanding into experimental compositions on handmade paper using fine nib work and acrylics. 
                Through her art, she explores identity, migration, women's narratives, ecology, and climate resilience—transforming folk visual language into a powerful medium for cultural dialogue and social reflection.
              </p>
            </motion.div>
          </div>

          {/* Achievements & Recognition */}
          <div className="space-y-8">
            <div className="text-center">
              <SectionDivider variant="lotus" />
              <h3 className="font-cinzel text-xl md:text-2xl text-madhubani-black mt-4">
                Achievements & <span className="text-madhubani-red">Recognition</span>
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
              {[
                { icon: Globe, label: 'United Nations', detail: 'Exhibition, New York', desc: 'Exhibited Mithila folk art at the United Nations Headquarters, showcasing cultural heritage on an international diplomatic platform.' },
                { icon: Landmark, label: 'EU Headquarters', detail: 'Brussels, 2026', desc: 'Featured at the EU Headquarters in Brussels, strengthening international presence as a cultural ambassador of Mithila art.' },
                { icon: Building2, label: 'Gracie Mansion', detail: 'Cultural Showcase, NYC', desc: 'Participated in cultural showcase at the official residence of the Mayor of New York City.' },
                { icon: MapPin, label: 'Times Square & Madison Ave', detail: 'Public Art, NYC', desc: 'Public art visibility in Times Square and Madison Avenue events, bringing Mithila art to iconic NYC landmarks.' },
                { icon: Building, label: 'FDNY Headquarters', detail: 'Exhibition, NYC', desc: 'Presented artwork at the FDNY Headquarters in New York City.' },
                { icon: Paintbrush, label: 'Watchung Art Center', detail: '"Magnetism" Exhibition, NJ', desc: 'Participated in the "Magnetism" curated exhibition at Watchung Art Center, New Jersey.' },
                { icon: Award, label: 'Manville Art Council', detail: 'Curated Exhibition, NJ', desc: 'Exhibited in curated exhibitions at Manville Art Council, New Jersey.' },
                { icon: Leaf, label: 'Art for SDGs', detail: 'Mithila Center USA', desc: 'Actively involved with Mithila Center USA "Art for SDGs" exhibition series, contributing to global conversations around sustainability and cultural preservation.' },
                { icon: Users, label: 'UCNJ Teen Arts Festival', detail: '1,000+ Students', desc: 'Conducted a Mithila folk art workshop at UCNJ Teen Arts Festival, introducing traditional art forms to over a thousand students.' },
                { icon: Award, label: 'Women Entrepreneur', detail: 'Greater NY Chamber of Commerce', desc: 'Recognized as a Women Entrepreneur in the Arts by the Greater New York Chamber of Commerce.' },
                { icon: Star, label: 'Top 35 Art Influencer', detail: 'Feedspot, 2025', desc: 'Listed among the Top 35 Indian American Art Influencers by Feedspot (2025).' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flip-card group/flip h-56 md:h-64"
                    tabIndex={0}
                  >
                    <div className="flip-card-inner w-full h-full relative">
                      <div className="flip-card-front absolute inset-0 bg-cream-light p-5 md:p-6 transition-colors duration-300 flex flex-col items-center justify-center text-center gap-3">
                        {/* Gradient top bar */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-madhubani-red via-madhubani-magenta to-madhubani-teal" />

                        {/* Outer decorative border */}
                        <div className="absolute inset-2 border border-madhubani-red/20 pointer-events-none" />
                        <div className="absolute inset-3 border border-madhubani-yellow/20 pointer-events-none" />

                        {/* Corner lotuses */}
                        <svg className="absolute -top-1 -left-1 z-10 pointer-events-none" width="24" height="24" viewBox="0 0 24 24">
                          <path d="M0,12 Q0,0 12,0" fill="none" stroke="#8B1A1A" strokeWidth="1.5"/>
                          <circle cx="2" cy="2" r="2" fill="#E8A317"/>
                          <path d="M3,9 Q3,3 9,3" fill="none" stroke="#C41E7F" strokeWidth="1"/>
                        </svg>
                        <svg className="absolute -top-1 -right-1 z-10 pointer-events-none" width="24" height="24" viewBox="0 0 24 24" style={{ transform: 'scaleX(-1)' }}>
                          <path d="M0,12 Q0,0 12,0" fill="none" stroke="#8B1A1A" strokeWidth="1.5"/>
                          <circle cx="2" cy="2" r="2" fill="#E8A317"/>
                          <path d="M3,9 Q3,3 9,3" fill="none" stroke="#C41E7F" strokeWidth="1"/>
                        </svg>
                        <svg className="absolute -bottom-1 -left-1 z-10 pointer-events-none" width="24" height="24" viewBox="0 0 24 24" style={{ transform: 'scaleY(-1)' }}>
                          <path d="M0,12 Q0,0 12,0" fill="none" stroke="#8B1A1A" strokeWidth="1.5"/>
                          <circle cx="2" cy="2" r="2" fill="#E8A317"/>
                          <path d="M3,9 Q3,3 9,3" fill="none" stroke="#C41E7F" strokeWidth="1"/>
                        </svg>
                        <svg className="absolute -bottom-1 -right-1 z-10 pointer-events-none" width="24" height="24" viewBox="0 0 24 24" style={{ transform: 'scale(-1)' }}>
                          <path d="M0,12 Q0,0 12,0" fill="none" stroke="#8B1A1A" strokeWidth="1.5"/>
                          <circle cx="2" cy="2" r="2" fill="#E8A317"/>
                          <path d="M3,9 Q3,3 9,3" fill="none" stroke="#C41E7F" strokeWidth="1"/>
                        </svg>

                        <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-madhubani-red/10 text-madhubani-red group-hover/flip:bg-madhubani-red group-hover/flip:text-cream transition-all duration-300 mt-3">
                          <Icon size={26} />
                        </div>
                        <div>
                          <p className="font-playfair text-base md:text-lg text-madhubani-black font-semibold leading-tight">{item.label}</p>
                          <p className="font-cormorant text-sm md:text-base text-madhubani-teal mt-1">{item.detail}</p>
                        </div>
                        <span className="font-cormorant text-[11px] md:text-xs text-madhubani-red/50 tracking-wider uppercase">Hover to explore</span>
                      </div>
                      <div className="flip-card-back absolute inset-0 bg-madhubani-red text-cream p-5 md:p-6 flex flex-col items-center justify-center text-center gap-2">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-madhubani-yellow via-cream to-madhubani-yellow opacity-60" />
                        <p className="font-cormorant text-sm md:text-base leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Closing + Stats */}
          <div className="text-center space-y-10 max-w-3xl mx-auto">
            <p className="font-cormorant text-lg text-madhubani-black/70 leading-relaxed">
              Through MithilaFolkFusions, she continues to preserve and evolve Mithila heritage bridging tradition and modernity while amplifying community voices through art.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-10">
              {[
                { number: '1,000+', label: 'Artworks Created' },
                { number: '15+', label: 'Exhibitions' },
                { number: '500+', label: 'Happy Collectors' },
              ].map((stat) => (
                <div key={stat.label} className="text-center border border-madhubani-red/20 p-6 bg-cream-light">
                  <p className="font-cinzel text-2xl md:text-3xl text-madhubani-red">{stat.number}</p>
                  <p className="font-cormorant text-sm text-madhubani-teal tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
