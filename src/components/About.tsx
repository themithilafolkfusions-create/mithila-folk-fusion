import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { CameraShy } from 'camerashy';
import { Globe, Landmark, Building2, MapPin, Building, Paintbrush, Users, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SectionDivider } from './MadhubaniBorder';

const slides = [
  { type: 'image', src: '/images/profile-headshot.jpg' },
  { type: 'image', src: '/images/eu-podium.jpg' },
  { type: 'image', src: '/images/un-outdoor.jpg' },
  { type: 'image', src: '/images/profile-office.jpg' },
  { type: 'image', src: '/images/profile-exhibition.png' },
  { type: 'image', src: '/images/shivangi-1.jpg' },
  { type: 'image', src: '/images/shivangi-2.png' },
  { type: 'image', src: '/images/shivangi-3.png' },
  { type: 'image', src: '/images/shivangi-4.png' },
  { type: 'image', src: '/images/shivangi-5.png' },
  { type: 'image', src: '/images/shivangi-6.jpeg' },
  { type: 'image', src: '/images/shivangi-7.jpeg' },
  { type: 'image', src: '/images/shivangi-8.jpeg' },
  { type: 'image', src: '/images/shivangi-9.jpeg' },
  { type: 'image', src: '/images/shivangi-10.png' },
  { type: 'video', src: '/images/profile-video.mp4' },
];

const SLIDE_INTERVAL = 4000;

const About: React.FC = () => {
  const { t } = useTranslation();
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

  const prev = () => goTo(current === 0 ? slides.length - 1 : current - 1);
  const next = () => goTo(current === slides.length - 1 ? 0 : current + 1);
  return (
    <section id="about" className="relative py-20 md:py-32 bg-cream overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 rangoli-bg opacity-50 pointer-events-none" />
      
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
          <span className="text-madhubani-magenta font-cormorant text-lg tracking-[0.4em] uppercase">{t('about.sectionLabel')}</span>
          <h2 className="font-cinzel text-3xl md:text-5xl text-madhubani-black mt-3 mb-4">
            {t('about.headingPrefix')} <span className="text-madhubani-red">{t('about.headingHighlight')}</span>
          </h2>
          <SectionDivider variant="lotus" />
        </motion.div>

        <div className="space-y-16">
          {/* Side-by-side: slideshow + bio intro */}
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
            {/* Left: Slideshow — col-span-5 */}
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

                {/* Nav arrow left */}
                <button
                  onClick={prev}
                  className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-cream/20 backdrop-blur-sm text-cream/70 hover:bg-cream/40 hover:text-cream transition-all rounded-full"
                  aria-label={t('about.ariaPrev')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                {/* Nav arrow right */}
                <button
                  onClick={next}
                  className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-cream/20 backdrop-blur-sm text-cream/70 hover:bg-cream/40 hover:text-cream transition-all rounded-full"
                  aria-label={t('about.ariaNext')}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>

                <div className="w-full bg-madhubani-black overflow-hidden" style={{ aspectRatio: '4/5' }}>
                  <div className="relative w-full h-full p-5">
                    {slides.map((slide, i) => (
                      <div
                        key={i}
                        className="absolute inset-0 transition-opacity duration-700"
                        style={{ opacity: i === current ? 1 : 0 }}
                      >
                        {slide.type === 'image' ? (
                          <CameraShy mode="blur" blur="20px" sensitivity="balanced" style={{ display: 'flex', width: '100%', height: '100%' }}>
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
                  <p className="font-cinzel text-madhubani-red text-base tracking-wider">{t('about.name')}</p>
                  <p className="font-cormorant text-madhubani-teal text-sm tracking-widest uppercase">{t('about.title')}</p>
                </div>

                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === current ? 'bg-madhubani-yellow w-5' : 'bg-cream/60 hover:bg-cream'
                      }`}
                      aria-label={`${t('about.slideLabel')} ${i + 1}`}
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
              className="md:col-span-7 text-left space-y-8 md:space-y-10 max-w-3xl"
            >
              <p className="font-cormorant text-2xl md:text-3xl text-madhubani-black/80 leading-relaxed">
                {t('about.bio1')}
              </p>

              <p className="font-cormorant text-xl md:text-2xl text-madhubani-black/70 leading-relaxed">
                {t('about.bio2')}
              </p>
            </motion.div>
          </div>

          {/* Achievements & Recognition */}
          <div className="space-y-8">
            <div className="text-center">
              <SectionDivider variant="lotus" />
              <h3 className="font-cinzel text-xl md:text-2xl text-madhubani-black mt-4">
                {t('about.achievements')} <span className="text-madhubani-red">{t('about.achievementsHighlight')}</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
              {[
                { icon: Globe, label: t('about.ach1Label'), detail: t('about.ach1Detail'), desc: t('about.ach1Desc'), quote: t('about.ach1Quote') },
                { icon: Landmark, label: t('about.ach2Label'), detail: t('about.ach2Detail'), desc: t('about.ach2Desc'), quote: t('about.ach2Quote') },
                { icon: Building2, label: t('about.ach3Label'), detail: t('about.ach3Detail'), desc: t('about.ach3Desc'), quote: t('about.ach3Quote') },
                { icon: MapPin, label: t('about.ach4Label'), detail: t('about.ach4Detail'), desc: t('about.ach4Desc'), quote: t('about.ach4Quote') },
                { icon: Building, label: t('about.ach5Label'), detail: t('about.ach5Detail'), desc: t('about.ach5Desc'), quote: t('about.ach5Quote') },
                { icon: Paintbrush, label: t('about.ach6Label'), detail: t('about.ach6Detail'), desc: t('about.ach6Desc'), quote: t('about.ach6Quote') },
                { icon: Award, label: t('about.ach7Label'), detail: t('about.ach7Detail'), desc: t('about.ach7Desc'), quote: t('about.ach7Quote') },
                { icon: Users, label: t('about.ach8Label'), detail: t('about.ach8Detail'), desc: t('about.ach8Desc'), quote: t('about.ach8Quote') },
              ].map((item, i) => {
                const isBig = i < 2;
                const Icon = item.icon;
                return isBig ? (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flip-card group/flip md:col-span-6 h-72 md:h-88"
                    tabIndex={0}
                  >
                    <div className="flip-card-inner w-full h-full relative">
                      <div className="flip-card-front absolute inset-0 bg-cream-light p-6 md:p-8 flex flex-col items-center justify-center text-center gap-3">
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-madhubani-red via-madhubani-magenta to-madhubani-teal" />
                        <div className="absolute inset-2 border border-madhubani-red/25 pointer-events-none" />
                        <div className="absolute inset-4 border border-madhubani-yellow/30 pointer-events-none" />
                        <svg className="absolute -top-1 -left-1 z-10 pointer-events-none" width="32" height="32" viewBox="0 0 32 32">
                          <path d="M0,16 Q0,0 16,0" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
                          <circle cx="3" cy="3" r="3" fill="#E8A317"/>
                          <path d="M4,12 Q4,4 12,4" fill="none" stroke="#C41E7F" strokeWidth="1.5"/>
                        </svg>
                        <svg className="absolute -top-1 -right-1 z-10 pointer-events-none" width="32" height="32" viewBox="0 0 32 32" style={{ transform: 'scaleX(-1)' }}>
                          <path d="M0,16 Q0,0 16,0" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
                          <circle cx="3" cy="3" r="3" fill="#E8A317"/>
                          <path d="M4,12 Q4,4 12,4" fill="none" stroke="#C41E7F" strokeWidth="1.5"/>
                        </svg>
                        <svg className="absolute -bottom-1 -left-1 z-10 pointer-events-none" width="32" height="32" viewBox="0 0 32 32" style={{ transform: 'scaleY(-1)' }}>
                          <path d="M0,16 Q0,0 16,0" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
                          <circle cx="3" cy="3" r="3" fill="#E8A317"/>
                          <path d="M4,12 Q4,4 12,4" fill="none" stroke="#C41E7F" strokeWidth="1.5"/>
                        </svg>
                        <svg className="absolute -bottom-1 -right-1 z-10 pointer-events-none" width="32" height="32" viewBox="0 0 32 32" style={{ transform: 'scale(-1)' }}>
                          <path d="M0,16 Q0,0 16,0" fill="none" stroke="#8B1A1A" strokeWidth="2"/>
                          <circle cx="3" cy="3" r="3" fill="#E8A317"/>
                          <path d="M4,12 Q4,4 12,4" fill="none" stroke="#C41E7F" strokeWidth="1.5"/>
                        </svg>
                        <div className="w-14 h-14 md:w-18 md:h-18 flex items-center justify-center bg-madhubani-red/10 text-madhubani-red group-hover/flip:bg-madhubani-red group-hover/flip:text-cream transition-all duration-300 mt-1">
                          <Icon size={28} />
                        </div>
                        <div>
                          <p className="font-playfair text-lg md:text-xl text-madhubani-black font-semibold leading-tight">{item.label}</p>
                          <p className="font-cormorant text-sm md:text-base text-madhubani-teal mt-1">{item.detail}</p>
                        </div>
                        <p className="font-cormorant text-sm md:text-base text-madhubani-black/60 leading-relaxed max-w-xs">{item.desc}</p>
                      </div>
                      <div className="flip-card-back absolute inset-0 bg-madhubani-red text-cream p-6 md:p-8 flex flex-col items-center justify-center text-center gap-3">
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-madhubani-yellow via-cream to-madhubani-yellow opacity-60" />
                        <svg width="24" height="24" viewBox="0 0 24 24" className="mb-2 opacity-60">
                          <path d="M0,8 Q0,0 8,0" fill="none" stroke="#FDF5E6" strokeWidth="1.5"/>
                          <circle cx="2" cy="2" r="1.5" fill="#FDF5E6"/>
                        </svg>
                        <p className="font-playfair italic text-base md:text-lg leading-relaxed">{item.quote}</p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flip-card group/flip md:col-span-4 h-60 md:h-72"
                    tabIndex={0}
                  >
                    <div className="flip-card-inner w-full h-full relative">
                      <div className="flip-card-front absolute inset-0 bg-cream-light p-4 md:p-5 flex flex-col items-center justify-center text-center gap-2">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-madhubani-red via-madhubani-magenta to-madhubani-teal" />
                        <div className="absolute inset-2 border border-madhubani-red/20 pointer-events-none" />
                        <div className="absolute inset-3 border border-madhubani-yellow/20 pointer-events-none" />
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
                        <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-madhubani-red/10 text-madhubani-red group-hover/flip:bg-madhubani-red group-hover/flip:text-cream transition-all duration-300 mt-1">
                          <Icon size={22} />
                        </div>
                        <div>
                          <p className="font-playfair text-sm md:text-base text-madhubani-black font-semibold leading-tight">{item.label}</p>
                          <p className="font-cormorant text-xs md:text-sm text-madhubani-teal mt-0.5">{item.detail}</p>
                        </div>
                        <p className="font-cormorant text-xs md:text-sm text-madhubani-black/60 leading-relaxed line-clamp-3">{item.desc}</p>
                      </div>
                      <div className="flip-card-back absolute inset-0 bg-madhubani-red text-cream p-4 md:p-5 flex flex-col items-center justify-center text-center gap-2">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-madhubani-yellow via-cream to-madhubani-yellow opacity-60" />
                        <svg width="16" height="16" viewBox="0 0 16 16" className="opacity-60">
                          <path d="M0,6 Q0,0 6,0" fill="none" stroke="#FDF5E6" strokeWidth="1"/>
                          <circle cx="1.5" cy="1.5" r="1" fill="#FDF5E6"/>
                        </svg>
                        <p className="font-playfair italic text-sm md:text-base leading-relaxed">{item.quote}</p>
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
              {t('about.closing')}
            </p>

            <div className="grid grid-cols-3 gap-6 pt-10">
              {[
                { number: '1,000+', label: t('about.stat1Label') },
                { number: '15+', label: t('about.stat2Label') },
                { number: '500+', label: t('about.stat3Label') },
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
