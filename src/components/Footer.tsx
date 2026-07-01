import React from 'react';
import { Link } from 'react-router-dom';
import { MadhubaniBorderBottom } from './MadhubaniBorder';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative bg-madhubani-black text-cream overflow-hidden">
      <MadhubaniBorderBottom />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-44">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <img src="/images/mithila-folk-fusion-logo.png" alt="Mithila Folk Art" className="w-10 h-10" />
              <div>
                <h3 className="font-cinzel text-lg text-madhubani-yellow tracking-wider">{t('footer.brandTitle')}</h3>
                <p className="font-cormorant text-xs text-cream/50 tracking-widest uppercase">{t('footer.brandSub')}</p>
              </div>
            </div>
            <p className="font-cormorant text-cream/50 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-cinzel text-sm text-madhubani-yellow tracking-wider mb-4 uppercase">{t('footer.exploreTitle')}</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: t('footer.home'), target: 'home' },
                { label: t('footer.about'), target: 'about' },
                { label: t('footer.gallery'), target: 'gallery' },
                { label: t('footer.artForm'), target: 'art-form' },
                { label: t('footer.artOfMithila'), target: '/art-of-mithila', isRoute: true },
                { label: t('footer.exhibitions'), target: 'exhibitions' },
                { label: t('footer.commission'), target: 'commission' },
                { label: t('footer.contact'), target: 'contact' },
              ].map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.target}
                    className="font-cormorant text-cream/50 hover:text-madhubani-yellow transition-colors py-1 text-left"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => document.getElementById(link.target)?.scrollIntoView({ behavior: 'smooth' })}
                    className="font-cormorant text-cream/50 hover:text-madhubani-yellow transition-colors py-1 text-left"
                  >
                    {link.label}
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Newsletter-style CTA */}
          <div className="text-center md:text-left">
            <h4 className="font-cinzel text-sm text-madhubani-yellow tracking-wider mb-4 uppercase">{t('footer.stayConnected')}</h4>
            <p className="font-cormorant text-cream/50 mb-4">
              {t('footer.stayConnectedDesc')}
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/mithilafolkfusions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-cream/20 flex items-center justify-center text-cream/50 hover:text-madhubani-yellow hover:border-madhubani-yellow transition-all"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="https://www.facebook.com/shivangi.v.singh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-cream/20 flex items-center justify-center text-cream/50 hover:text-madhubani-yellow hover:border-madhubani-yellow transition-all"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="https://www.youtube.com/@Mithilafolkfusions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-cream/20 flex items-center justify-center text-cream/50 hover:text-madhubani-yellow hover:border-madhubani-yellow transition-all"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
          <svg width="30" height="30" viewBox="0 0 30 30">
            <circle cx="15" cy="15" r="12" fill="none" stroke="#E8A317" strokeWidth="0.5"/>
            <circle cx="15" cy="15" r="3" fill="#E8A317" opacity="0.3"/>
          </svg>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="font-cormorant text-cream/30 text-sm">
            {t('footer.copyright')}
          </p>
          <p className="font-cormorant text-cream/20 text-xs italic">
            {t('footer.quote')}
          </p>
          <p className="font-cormorant text-cream/20 text-sm">
            {t('footer.builtBy')}{' '}
            <svg className="inline w-3 h-3 fill-madhubani-red text-madhubani-red -mt-0.5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {' '}{t('footer.by')}{' '}
            <a
              href="https://chiti.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/30 hover:text-madhubani-yellow transition-colors"
            >
              {t('footer.chitiTech')}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
