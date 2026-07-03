import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer';

const TermsOfService: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-cream to-cream-dark">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-20">
          <nav className="flex items-center gap-2 text-xs font-playfair tracking-wider mb-8">
            <Link to="/" className="text-madhubani-black/40 hover:text-madhubani-red transition-colors">{t('navbar.home')}</Link>
            <span className="text-madhubani-black/20">/</span>
            <span className="text-madhubani-red">{t('legal.termsTitle')}</span>
          </nav>

          <h1 className="font-cinzel text-3xl md:text-4xl text-madhubani-black mb-4">{t('legal.termsTitle')}</h1>
          <p className="font-cormorant text-sm text-madhubani-black/40 mb-10">{t('legal.termsLastUpdated')}</p>

          <div className="font-cormorant text-lg text-madhubani-black/70 leading-relaxed space-y-8">
            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.termsAcceptanceTitle')}</h2>
              <p>{t('legal.termsAcceptance')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.termsIPTitle')}</h2>
              <p>{t('legal.termsIP')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.termsUseTitle')}</h2>
              <p>{t('legal.termsUse')}</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-madhubani-black/60">
                <li>{t('legal.termsUseNoReproduce')}</li>
                <li>{t('legal.termsUseNoScrape')}</li>
                <li>{t('legal.termsUseNoBot')}</li>
                <li>{t('legal.termsUseNoAlter')}</li>
              </ul>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.termsPurchaseTitle')}</h2>
              <p>{t('legal.termsPurchase')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.termsCommissionTitle')}</h2>
              <p>{t('legal.termsCommission')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.termsLinksTitle')}</h2>
              <p>{t('legal.termsLinks')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.termsDisclaimerTitle')}</h2>
              <p>{t('legal.termsDisclaimer')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.termsLiabilityTitle')}</h2>
              <p>{t('legal.termsLiability')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.termsGoverningTitle')}</h2>
              <p>{t('legal.termsGoverning')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.termsChangesTitle')}</h2>
              <p>{t('legal.termsChanges')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.termsContactTitle')}</h2>
              <p>{t('legal.termsContact')}</p>
              <a href="mailto:Mithilafolkfusions@gmail.com" className="text-madhubani-red hover:underline">Mithilafolkfusions@gmail.com</a>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;
