import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer';

const ShippingPolicy: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-cream to-cream-dark">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-20">
          <nav className="flex items-center gap-2 text-xs font-playfair tracking-wider mb-8">
            <Link to="/" className="text-madhubani-black/40 hover:text-madhubani-red transition-colors">{t('navbar.home')}</Link>
            <span className="text-madhubani-black/20">/</span>
            <span className="text-madhubani-red">{t('legal.shippingTitle')}</span>
          </nav>

          <h1 className="font-cinzel text-3xl md:text-4xl text-madhubani-black mb-4">{t('legal.shippingTitle')}</h1>
          <p className="font-cormorant text-sm text-madhubani-black/40 mb-10">{t('legal.shippingLastUpdated')}</p>

          <div className="font-cormorant text-lg text-madhubani-black/70 leading-relaxed space-y-8">
            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.shippingHandlingTitle')}</h2>
              <p>{t('legal.shippingHandling')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.shippingOriginalTitle')}</h2>
              <p>{t('legal.shippingOriginal')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.shippingPrintsTitle')}</h2>
              <p>{t('legal.shippingPrints')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.shippingInternationalTitle')}</h2>
              <p>{t('legal.shippingInternational')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.shippingTrackingTitle')}</h2>
              <p>{t('legal.shippingTracking')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.shippingInsuranceTitle')}</h2>
              <p>{t('legal.shippingInsurance')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.shippingContactTitle')}</h2>
              <p>{t('legal.shippingContact')}</p>
              <a href="mailto:Mithilafolkfusions@gmail.com" className="text-madhubani-red hover:underline">Mithilafolkfusions@gmail.com</a>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShippingPolicy;
