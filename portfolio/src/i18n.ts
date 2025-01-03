import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json';
import esTranslations from './locales/es/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations }
    },
    lng: 'es', // Idioma por defecto
    fallbackLng: 'es', // Idioma de reserva
    interpolation: { escapeValue: false },
    react: {
      useSuspense: true
    }
  }, (err) => {
    if (err) {
      console.error('Error initializing i18n:', err);
    }
  });

export default i18n;
