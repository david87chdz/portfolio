import { FaAngular, FaNode, FaJava, FaDocker, FaGithub } from "react-icons/fa";
import { SiMysql, SiExpress, SiSpringboot } from "react-icons/si";
import { useTranslation } from 'react-i18next';
import angularVideo from "../../assets/eUFuturo.mp4";

export function EligiendoUnFuturo() {
  const { t } = useTranslation(); // Hook de traducción

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-sm w-full transition-transform transform hover:scale-105">
      <div className="p-4">
        <video
          src={angularVideo}
          className="w-full h-48 object-cover rounded-md"
          controls
          loop
          autoPlay
          muted
        ></video>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {t('future_title')}
        </h2>
        <div className="flex justify-center mb-4">
          <button
            onClick={() => window.open("https://github.com/david87chdz/Eligiendo-un-futuro", "_blank")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center cursor-pointer"
          >
            {t('view_code')} <FaGithub className="inline-block ml-2" />
          </button>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {t('project_description')}
          <br />
          {t('created_with')} Angular 16, Node.js, Express, Java 17, Spring Boot, Docker y MySQL
        </p>
        <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
            {t('skills')}
          </h4>
          <ul className="grid grid-cols-2 gap-4 list-disc list-inside pl-5">
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              Angular 16 <FaAngular className="ml-2 text-red-600" />
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              Node.js <FaNode className="ml-2 text-green-600" />
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              Express <SiExpress className="ml-2 text-gray-600" />
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              Java 17 <FaJava className="ml-2 text-blue-600" />
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              Spring Boot <SiSpringboot className="ml-2 text-green-500" />
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              Docker <FaDocker className="ml-2 text-blue-600" />
            </li>
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              MySQL <SiMysql className="ml-2 text-blue-700" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
