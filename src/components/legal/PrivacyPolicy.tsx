import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-cream to-cream-dark">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-20">
          <nav className="flex items-center gap-2 text-xs font-playfair tracking-wider mb-8">
            <Link to="/" className="text-madhubani-black/40 hover:text-madhubani-red transition-colors">{t('navbar.home')}</Link>
            <span className="text-madhubani-black/20">/</span>
            <span className="text-madhubani-red">{t('legal.privacyTitle')}</span>
          </nav>

          <h1 className="font-cinzel text-3xl md:text-4xl text-madhubani-black mb-4">{t('legal.privacyTitle')}</h1>
          <p className="font-cormorant text-sm text-madhubani-black/40 mb-10">{t('legal.privacyLastUpdated')}</p>

          <div className="font-cormorant text-lg text-madhubani-black/70 leading-relaxed space-y-8">
            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.privacyIntroTitle')}</h2>
              <p>{t('legal.privacyIntro')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.privacyCollectTitle')}</h2>
              <p>{t('legal.privacyCollect')}</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-madhubani-black/60">
                <li>{t('legal.privacyCollectName')}</li>
                <li>{t('legal.privacyCollectEmail')}</li>
                <li>{t('legal.privacyCollectIP')}</li>
                <li>{t('legal.privacyCollectCookies')}</li>
                <li>{t('legal.privacyCollectBrowser')}</li>
              </ul>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.privacyUseTitle')}</h2>
              <p>{t('legal.privacyUse')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.privacyShareTitle')}</h2>
              <p>{t('legal.privacyShare')}</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-madhubani-black/60">
                <li>{t('legal.privacyShareHosting')}</li>
                <li>{t('legal.privacyShareAnalytics')}</li>
                <li>{t('legal.privacySharePayment')}</li>
                <li>{t('legal.privacyShareLegal')}</li>
              </ul>
              <p className="mt-3 font-semibold text-madhubani-black">{t('legal.privacyNoSell')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.privacyCookiesTitle')}</h2>
              <p>{t('legal.privacyCookies')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.privacyRightsTitle')}</h2>
              <p>{t('legal.privacyRights')}</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-madhubani-black/60">
                <li>{t('legal.privacyRightsAccess')}</li>
                <li>{t('legal.privacyRightsCorrect')}</li>
                <li>{t('legal.privacyRightsDelete')}</li>
                <li>{t('legal.privacyRightsOptOut')}</li>
              </ul>
              <p className="mt-3">{t('legal.privacyRightsContact')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.privacySecurityTitle')}</h2>
              <p>{t('legal.privacySecurity')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.privacyChildrenTitle')}</h2>
              <p>{t('legal.privacyChildren')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.privacyChangesTitle')}</h2>
              <p>{t('legal.privacyChanges')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.privacyContactTitle')}</h2>
              <p>{t('legal.privacyContact')}</p>
              <a href="mailto:Mithilafolkfusions@gmail.com" className="text-madhubani-red hover:underline">Mithilafolkfusions@gmail.com</a>
            </section>

            <section className="border-t border-madhubani-red/10 pt-6">
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.privacyDoNotSellTitle')}</h2>
              <p>{t('legal.privacyDoNotSell')}</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
