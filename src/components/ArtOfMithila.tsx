import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CameraShy } from 'camerashy';
import { SectionDivider } from './MadhubaniBorder';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

const motifs = [
  {
    name: 'Peacock',
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
    name: 'Tree',
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
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-cream to-cream-dark">
        {/* Breadcrumb */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24">
          <nav className="flex items-center gap-2 text-xs font-playfair tracking-wider">
            <Link to="/" className="text-madhubani-black/40 hover:text-madhubani-red transition-colors">{t('navbar.home')}</Link>
            <span className="text-madhubani-black/20">/</span>
            <span className="text-madhubani-red">{t('navbar.artOfMithila')}</span>
          </nav>
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
              <span className="text-madhubani-teal font-cormorant text-lg tracking-[0.4em] uppercase">{t('artOfMithila.heroLabel')}</span>
              <h1 className="font-cinzel text-4xl md:text-6xl lg:text-7xl text-cream mt-4 mb-6">
                {t('artOfMithila.heroTitle')} <span className="text-madhubani-yellow">{t('artOfMithila.heroHighlight')}</span>
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
                {t('artOfMithila.heroDesc')}
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
                <span className="text-madhubani-teal font-cormorant text-sm tracking-[0.3em] uppercase">{t('artOfMithila.originsLabel')}</span>
                <h2 className="font-cinzel text-3xl md:text-4xl text-madhubani-black mt-2 mb-6">
                  {t('artOfMithila.originsTitle1')} <span className="text-madhubani-red">{t('artOfMithila.originsHighlight1')}</span>{t('artOfMithila.originsTitle2')}
                </h2>
                <div className="w-16 h-0.5 bg-madhubani-red mb-6" />
                <div className="font-cormorant text-lg text-madhubani-black/70 leading-relaxed space-y-4">
                  <p>
                    {t('artOfMithila.originsP1')}
                  </p>
                  <p>
                    {t('artOfMithila.originsP2')}
                  </p>
                  <p>
                    {t('artOfMithila.originsP3')}
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
                  {t('artOfMithila.originsCaption')}
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
                  {t('artOfMithila.geocaption')}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 md:order-2"
              >
                <span className="text-madhubani-teal font-cormorant text-sm tracking-[0.3em] uppercase">{t('artOfMithila.geoLabel')}</span>
                <h2 className="font-cinzel text-3xl md:text-4xl text-cream mt-2 mb-6">
                  {t('artOfMithila.geoTitle1')} <span className="text-madhubani-yellow">{t('artOfMithila.geoHighlight1')}</span>
                </h2>
                <div className="w-16 h-0.5 bg-madhubani-yellow mb-6" />
                <div className="font-cormorant text-lg text-cream/60 leading-relaxed space-y-4">
                  <p>
                    {t('artOfMithila.geoP1')}
                  </p>
                  <p>
                    {t('artOfMithila.geoP2')}
                  </p>
                  <p>
                    {t('artOfMithila.geoP3')}
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
                <span className="text-madhubani-teal font-cormorant text-sm tracking-[0.3em] uppercase">{t('artOfMithila.tradLabel')}</span>
                <h2 className="font-cinzel text-3xl md:text-4xl text-madhubani-black mt-2 mb-6">
                  {t('artOfMithila.tradTitle1')} <span className="text-madhubani-red">{t('artOfMithila.tradHighlight1')}</span>
                </h2>
                <div className="w-16 h-0.5 bg-madhubani-red mb-6" />
                <div className="font-cormorant text-lg text-madhubani-black/70 leading-relaxed space-y-4">
                  <p>
                    {t('artOfMithila.tradP1')}
                  </p>
                  <p>
                    {t('artOfMithila.tradP2')}
                  </p>
                  <p>
                    {t('artOfMithila.tradP3')}
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
                  {t('artOfMithila.tradCaption')}
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
              <span className="text-madhubani-teal font-cormorant text-sm tracking-[0.3em] uppercase">{t('artOfMithila.evolLabel')}</span>
              <h2 className="font-cinzel text-3xl md:text-4xl text-madhubani-black mt-2 mb-4">
                {t('artOfMithila.evolTitle1')} <span className="text-madhubani-red">{t('artOfMithila.evolHighlight1')}</span>
              </h2>
              <div className="w-16 h-0.5 bg-madhubani-red mx-auto mb-6" />
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  year: '1934',
                  title: t('artOfMithila.evolMilestone1Title'),
                  desc: t('artOfMithila.evolMilestone1Desc'),
                },
                {
                  year: '1960s-70s',
                  title: t('artOfMithila.evolMilestone2Title'),
                  desc: t('artOfMithila.evolMilestone2Desc'),
                },
                {
                  year: 'Present Day',
                  title: t('artOfMithila.evolMilestone3Title'),
                  desc: t('artOfMithila.evolMilestone3Desc'),
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
              <span className="text-madhubani-teal font-cormorant text-sm tracking-[0.3em] uppercase">{t('artOfMithila.stylesLabel')}</span>
              <h2 className="font-cinzel text-3xl md:text-4xl text-madhubani-black mt-2 mb-4">
                {t('artOfMithila.stylesTitle1')} <span className="text-madhubani-red">{t('artOfMithila.stylesHighlight1')}</span>{t('artOfMithila.stylesTitle2')}
              </h2>
              <div className="w-16 h-0.5 bg-madhubani-red mx-auto mb-6" />
              <p className="font-cormorant text-lg text-madhubani-black/60 max-w-2xl mx-auto">
                {t('artOfMithila.stylesDesc')}
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Kachni',
                  subtitle: t('artOfMithila.styleKachniSub'),
                  desc: t('artOfMithila.styleKachniDesc'),
                  color: 'border-madhubani-red/30',
                  textColor: 'text-madhubani-red',
                },
                {
                  name: 'Bharni',
                  subtitle: t('artOfMithila.styleBharniSub'),
                  desc: t('artOfMithila.styleBharniDesc'),
                  color: 'border-madhubani-magenta/30',
                  textColor: 'text-madhubani-magenta',
                },
                {
                  name: 'Godna',
                  subtitle: t('artOfMithila.styleGodnaSub'),
                  desc: t('artOfMithila.styleGodnaDesc'),
                  color: 'border-madhubani-teal/30',
                  textColor: 'text-madhubani-teal',
                },
                {
                  name: 'Tantrik',
                  subtitle: t('artOfMithila.styleTantrikSub'),
                  desc: t('artOfMithila.styleTantrikDesc'),
                  color: 'border-madhubani-yellow/40',
                  textColor: 'text-madhubani-yellow',
                },
                {
                  name: 'Kohbar',
                  subtitle: t('artOfMithila.styleKohbarSub'),
                  desc: t('artOfMithila.styleKohbarDesc'),
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
              <span className="text-madhubani-teal font-cormorant text-sm tracking-[0.3em] uppercase">{t('artOfMithila.motifsLabel')}</span>
              <h2 className="font-cinzel text-3xl md:text-4xl text-cream mt-2 mb-4">
                {t('artOfMithila.motifsTitle1')}<span className="text-madhubani-magenta">{t('artOfMithila.motifsHighlight')}</span>
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
                {t('artOfMithila.motifsDesc')}
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
              {motifs.map((motif, i) => (
                <motion.div
                  key={motif.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group text-center p-6 border border-cream/10 hover:border-madhubani-yellow/40 transition-all duration-300 cursor-default overflow-hidden break-words"
                >
                  <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    {motif.svg}
                  </div>
                  <h4 className="font-cinzel text-sm text-madhubani-yellow mb-1">{t(`artOfMithila.motif${motif.name.replace(/[^a-zA-Z]/g, '')}`)}</h4>
                  <p className="font-cormorant text-xs text-cream/40 leading-relaxed">{t(`artOfMithila.motif${motif.name.replace(/[^a-zA-Z]/g, '')}Desc`)}</p>
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
                <span className="text-madhubani-teal font-cormorant text-sm tracking-[0.3em] uppercase">{t('artOfMithila.modernLabel')}</span>
                <h2 className="font-cinzel text-3xl md:text-4xl text-madhubani-black mt-2 mb-6">
                  {t('artOfMithila.modernTitle1')} <span className="text-madhubani-red">{t('artOfMithila.modernHighlight1')}</span>
                </h2>
                <div className="w-16 h-0.5 bg-madhubani-red mb-6" />
                <div className="font-cormorant text-lg text-madhubani-black/70 leading-relaxed space-y-4">
                  <p>
                    {t('artOfMithila.modernP1')}
                  </p>
                  <p>
                    {t('artOfMithila.modernP2')}
                  </p>
                  <p>
                    {t('artOfMithila.modernP3')}
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
                {t('artOfMithila.ctaTitle1')} <span className="text-madhubani-yellow">{t('artOfMithila.ctaHighlight1')}</span>
              </h2>
              <p className="font-cormorant text-xl text-cream/60 max-w-2xl mx-auto mb-10">
                {t('artOfMithila.ctaDesc')}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/portfolio"
                  className="px-8 py-3 bg-madhubani-red text-cream font-playfair text-sm tracking-wider hover:bg-madhubani-crimson transition-colors border-2 border-madhubani-red"
                >
                  {t('artOfMithila.ctaCollection')}
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
                  {t('artOfMithila.ctaCommission')}
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
