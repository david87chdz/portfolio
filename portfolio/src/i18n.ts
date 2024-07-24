// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa tus traducciones
import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  es: {
    translation: translationES,
  },
  en: {
    translation: translationEN,
  },
};

i18n
  .use(initReactI18next) // Integración con React
  .init({
    resources,
    lng: 'es', // Idioma por defecto
    fallbackLng: 'en', // Idioma de reserva
    interpolation: {
      escapeValue: false, // React ya escapa los valores por defecto
    },
  });

export default i18n;
