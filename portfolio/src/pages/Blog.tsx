import { useTranslation } from 'react-i18next';
import { FaTools } from 'react-icons/fa'; // Icono de herramientas
import { useState, useEffect } from 'react';

export function Blog() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Se utiliza un temporizador para simular una animación de aparición
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full flex flex-col items-center bg-gray-200 dark:bg-gray-800 py-8 px-4">
      <section className="w-full max-w-4xl flex flex-col items-center bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6">
        <div className={`transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center">
            <FaTools className="text-6xl md:text-8xl text-blue-500 dark:text-blue-300 mb-4 animate-spin" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {t('blogUnderConstructionTitle')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {t('blogUnderConstructionDescription')}
            </p>
            <div className="flex flex-col items-center">
              <svg
                className="w-16 h-16 md:w-24 md:h-24 text-gray-300 dark:text-gray-600 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-2">
                {t('comingSoon')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
