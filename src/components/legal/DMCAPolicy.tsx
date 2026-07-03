import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer';

const DMCAPolicy: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-cream to-cream-dark">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-20">
          <nav className="flex items-center gap-2 text-xs font-playfair tracking-wider mb-8">
            <Link to="/" className="text-madhubani-black/40 hover:text-madhubani-red transition-colors">{t('navbar.home')}</Link>
            <span className="text-madhubani-black/20">/</span>
            <span className="text-madhubani-red">{t('legal.dmcaTitle')}</span>
          </nav>

          <h1 className="font-cinzel text-3xl md:text-4xl text-madhubani-black mb-4">{t('legal.dmcaTitle')}</h1>
          <p className="font-cormorant text-sm text-madhubani-black/40 mb-10">{t('legal.dmcaLastUpdated')}</p>

          <div className="font-cormorant text-lg text-madhubani-black/70 leading-relaxed space-y-8">
            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.dmcaOverviewTitle')}</h2>
              <p>{t('legal.dmcaOverview')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.dmcaOwnershipTitle')}</h2>
              <p>{t('legal.dmcaOwnership')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.dmcaTakedownTitle')}</h2>
              <p>{t('legal.dmcaTakedown')}</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-madhubani-black/60">
                <li>{t('legal.dmcaTakedownElement1')}</li>
                <li>{t('legal.dmcaTakedownElement2')}</li>
                <li>{t('legal.dmcaTakedownElement3')}</li>
                <li>{t('legal.dmcaTakedownElement4')}</li>
                <li>{t('legal.dmcaTakedownElement5')}</li>
                <li>{t('legal.dmcaTakedownElement6')}</li>
              </ul>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.dmcaProcedureTitle')}</h2>
              <p>{t('legal.dmcaProcedure')}</p>
              <a href="mailto:Mithilafolkfusions@gmail.com" className="text-madhubani-red hover:underline">Mithilafolkfusions@gmail.com</a>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.dmcaCounterTitle')}</h2>
              <p>{t('legal.dmcaCounter')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.dmcaRepeatTitle')}</h2>
              <p>{t('legal.dmcaRepeat')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.dmcaAgentTitle')}</h2>
              <p>{t('legal.dmcaAgent')}</p>
              <p className="mt-2 text-madhubani-red">{t('legal.dmcaAgentTODO')}</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DMCAPolicy;
