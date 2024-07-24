import { useTranslation } from 'react-i18next';
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaJava, FaPhp, FaHtml5, FaCss3Alt, FaSass, FaAngular, FaReact, FaBootstrap, FaSymfony, FaNode, FaGitAlt, FaGithub, FaDocker, FaAws, FaLinux, FaNpm } from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiExpress, SiHibernate, SiMysql, SiPostgresql, SiMariadb, SiOracle, SiMongodb, SiVisualstudiocode, SiIntellijidea, SiEclipseide, SiPostman } from "react-icons/si";
import { DiDoctrine, DiComposer } from "react-icons/di";
import { FiGitlab } from "react-icons/fi";
import { TbBrandVite } from "react-icons/tb";

export function Skills() {
  const { t } = useTranslation();

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 min-h-screen flex flex-col items-center rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:text-4xl">{t('skillsTitle')}</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Tarjeta Lenguajes de programación */}
        <div className="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg p-4 w-full sm:w-80 flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex-shrink-0">
            {t('programmingLanguages')}
          </h2>
          <div className="flex flex-wrap justify-around items-center gap-4 mt-4">
            <IoLogoJavascript className="text-yellow-500 dark:text-yellow-300 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiTypescript className="text-blue-500 dark:text-blue-300 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaJava className="text-red-600 dark:text-red-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaPhp className="text-purple-600 dark:text-purple-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
          </div>
        </div>

        {/* Tarjeta Frameworks y bibliotecas Frontend */}
        <div className="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg p-4 w-full sm:w-80 flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex-shrink-0">
            {t('frontendFrameworks')}
          </h2>
          <div className="flex flex-wrap justify-around items-center gap-4 mt-4">
            <FaAngular className="text-red-600 dark:text-red-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaReact className="text-blue-600 dark:text-blue-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaBootstrap className="text-purple-600 dark:text-purple-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiTailwindcss className="text-blue-400 dark:text-blue-300 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
          </div>
        </div>

        {/* Tarjeta Tecnologías y frameworks Backend */}
        <div className="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg p-4 w-full sm:w-80 flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex-shrink-0">
            {t('backendTechnologies')}
          </h2>
          <div className="flex flex-wrap justify-around items-center gap-4 mt-4">
            <SiSpringboot className="text-green-500 dark:text-green-300 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaSymfony className="text-black dark:text-gray-200 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaNode className="text-green-600 dark:text-green-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiExpress className="text-gray-600 dark:text-gray-300 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiHibernate className="text-purple-600 dark:text-purple-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <DiDoctrine className="text-blue-600 dark:text-blue-300 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
          </div>
        </div>

        {/* Tarjeta Sistemas de gestión de bases de datos */}
        <div className="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg p-4 w-full sm:w-80 flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex-shrink-0">
            {t('databaseSystems')}
          </h2>
          <div className="flex flex-wrap justify-around items-center gap-4 mt-4">
            <SiMysql className="text-blue-600 dark:text-blue-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiPostgresql className="text-blue-700 dark:text-blue-500 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiMariadb className="text-blue-600 dark:text-blue-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiOracle className="text-orange-600 dark:text-orange-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiMongodb className="text-green-500 dark:text-green-300 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
          </div>
        </div>

        {/* Tarjeta Lenguajes de marcado y estilos */}
        <div className="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg p-4 w-full sm:w-80 flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex-shrink-0">
            {t('markupLanguages')}
          </h2>
          <div className="flex flex-wrap justify-around items-center gap-4 mt-4">
            <FaHtml5 className="text-orange-600 dark:text-orange-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaCss3Alt className="text-blue-500 dark:text-blue-300 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaSass className="text-pink-500 dark:text-pink-300 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
          </div>
        </div>

        {/* Tarjeta Control de versiones */}
        <div className="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg p-4 w-full sm:w-80 flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex-shrink-0">
            {t('versionControl')}
          </h2>
          <div className="flex flex-wrap justify-around items-center gap-4 mt-4">
            <FaGitAlt className="text-orange-600 dark:text-orange-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaGithub className="text-gray-900 dark:text-gray-100 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <FiGitlab className="text-orange-600 dark:text-orange-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
          </div>
        </div>

        {/* Tarjeta Herramientas de desarrollo */}
        <div className="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg p-4 w-full sm:w-80 flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex-shrink-0">
            {t('developmentTools')}
          </h2>
          <div className="flex flex-wrap justify-around items-center gap-4 mt-4">
            <SiVisualstudiocode className="text-blue-600 dark:text-blue-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiIntellijidea className="text-gray-900 dark:text-gray-100 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiEclipseide className="text-gray-700 dark:text-gray-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiPostman className="text-orange-600 dark:text-orange-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaDocker className="text-blue-600 dark:text-blue-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaAws className="text-yellow-600 dark:text-yellow-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaLinux className="text-black dark:text-gray-100 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaNpm className="text-red-600 dark:text-red-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <DiComposer className="text-purple-600 dark:text-purple-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
            <TbBrandVite className="text-yellow-600 dark:text-yellow-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow-md dark:shadow-lg transition-transform transform hover:rotate-[360deg] duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
