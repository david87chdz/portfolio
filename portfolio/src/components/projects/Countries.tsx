import { FaReact, FaGithub, FaPhp, FaSymfony } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import imageRepo from "./repositorio.png";

export function Countries() {
  const { t } = useTranslation(); 

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-sm w-full transition-transform transform hover:scale-105">
      <div className="p-4">
        <img
          src={imageRepo}
          alt={t('more_image_alt')}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {t('project_description_more')}
        </h3>
        <div className="flex justify-center mb-4">
          <button
            className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center cursor-pointer"
            onClick={() => window.open("https://github.com/david87chdz?tab=repositories", "_blank")}
          >
            {t('view_code')} <FaGithub className="inline-block ml-2" />
          </button>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          
          {t('created_more')}
        </p>
        <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
            {t('skills')}
          </h4>
          <ul className="grid grid-cols-2 gap-4 list-disc list-inside pl-5">
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              React <FaReact className="ml-2 text-blue-500" />
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              PHP <FaPhp className="ml-2 text-blue-500" />
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              Symfony <FaSymfony className="ml-2 text-blue-500" />
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              {t('more_skills')}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
