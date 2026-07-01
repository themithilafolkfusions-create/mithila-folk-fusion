import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import nl from './nl';
import hi from './hi';
import de from './de';

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, nl: { translation: nl }, hi: { translation: hi }, de: { translation: de } },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
