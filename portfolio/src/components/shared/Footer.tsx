import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation(); 

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-md text-center py-4">
      <p>{t('footer_text')}</p>
    </footer>
  );
}
