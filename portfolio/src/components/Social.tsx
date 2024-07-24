import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Social = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-center bg-white dark:bg-gray-800 rounded-2xl shadow-md">
      <div className="text-center w-full max-w-3xl px-4 py-6 md:px-8 md:py-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {t('socialTitle')}
        </h2>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/david87chdz"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/david-cerezo-hernandez/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};
