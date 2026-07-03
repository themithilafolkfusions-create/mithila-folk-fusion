import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer';

const AccessibilityStatement: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-cream to-cream-dark">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-20">
          <nav className="flex items-center gap-2 text-xs font-playfair tracking-wider mb-8">
            <Link to="/" className="text-madhubani-black/40 hover:text-madhubani-red transition-colors">{t('navbar.home')}</Link>
            <span className="text-madhubani-black/20">/</span>
            <span className="text-madhubani-red">{t('legal.accessibilityTitle')}</span>
          </nav>

          <h1 className="font-cinzel text-3xl md:text-4xl text-madhubani-black mb-4">{t('legal.accessibilityTitle')}</h1>
          <p className="font-cormorant text-sm text-madhubani-black/40 mb-10">{t('legal.accessibilityLastUpdated')}</p>

          <div className="font-cormorant text-lg text-madhubani-black/70 leading-relaxed space-y-8">
            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.accessibilityCommitmentTitle')}</h2>
              <p>{t('legal.accessibilityCommitment')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.accessibilityStandardsTitle')}</h2>
              <p>{t('legal.accessibilityStandards')}</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-madhubani-black/60">
                <li>{t('legal.accessibilityWCAG')}</li>
                <li>{t('legal.accessibilityKeyboard')}</li>
                <li>{t('legal.accessibilityScreenReader')}</li>
                <li>{t('legal.accessibilityColorContrast')}</li>
              </ul>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.accessibilityKnownTitle')}</h2>
              <p>{t('legal.accessibilityKnown')}</p>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.accessibilityFeedbackTitle')}</h2>
              <p>{t('legal.accessibilityFeedback')}</p>
              <a href="mailto:Mithilafolkfusions@gmail.com" className="text-madhubani-red hover:underline">Mithilafolkfusions@gmail.com</a>
            </section>

            <section>
              <h2 className="font-cinzel text-xl text-madhubani-black mb-3">{t('legal.accessibilityComplianceTitle')}</h2>
              <p>{t('legal.accessibilityCompliance')}</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccessibilityStatement;
