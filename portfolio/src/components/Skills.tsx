import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaSass } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { FaSymfony } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { DiDoctrine } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMariadb } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiGitlab } from "react-icons/fi";
import { SiVisualstudiocode } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";
import { SiEclipseide } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaNpm } from "react-icons/fa6";
import { DiComposer } from "react-icons/di";
import { TbBrandVite } from "react-icons/tb";

export function Skills() {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 min-h-screen flex flex-col items-center rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:text-4xl">⚙️ Skills</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        
        {/* Tarjeta Lenguajes de programación */}
        <div className="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg p-4 w-full sm:w-80 flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Lenguajes de programación
          </h2>
          <div className="flex flex-wrap justify-around items-center gap-4">
            <IoLogoJavascript className="text-yellow-500 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiTypescript className="text-blue-500 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaJava className="text-red-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaPhp className="text-purple-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
          </div>
        </div>

        {/* Tarjeta Frameworks y bibliotecas Frontend */}
        <div className="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg p-4 w-full sm:w-80 flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Frameworks y bibliotecas Frontend
          </h2>
          <div className="flex flex-wrap justify-around items-center gap-4">
            <FaAngular className="text-red-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaReact className="text-blue-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaBootstrap className="text-purple-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiTailwindcss className="text-blue-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
          </div>
        </div>

        {/* Tarjeta Tecnologías y frameworks Backend */}
        <div className="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg p-4 w-full sm:w-80 flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Tecnologías y frameworks Backend
          </h2>
          <div className="flex flex-wrap justify-around items-center gap-4">
            <SiSpringboot className="text-green-500 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaSymfony className="text-black text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaNode className="text-green-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiExpress className="text-gray-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiHibernate className="text-purple-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <DiDoctrine className="text-blue-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
          </div>
        </div>

        {/* Tarjeta Sistemas de gestión de bases de datos */}
        <div className="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg p-4 w-full sm:w-80 flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Sistemas de gestión de bases de datos
          </h2>
          <div className="flex flex-wrap justify-around items-center gap-4">
            <SiMysql className="text-blue-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiPostgresql className="text-blue-700 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiMariadb className="text-blue-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiOracle className="text-orange-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiMongodb className="text-green-500 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
          </div>
        </div>

        {/* Tarjeta Lenguajes de marcado y estilos */}
        <div className="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg p-4 w-full sm:w-80 flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Lenguajes de marcado y estilos
          </h2>
          <div className="flex flex-wrap justify-around items-center gap-4">
            <FaHtml5 className="text-orange-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaCss3Alt className="text-blue-500 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaSass className="text-pink-500 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
          </div>
        </div>

        {/* Tarjeta Control de versiones */}
        <div className="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg p-4 w-full sm:w-80 flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Control de versiones
          </h2>
          <div className="flex flex-wrap justify-around items-center gap-4">
            <FaGitAlt className="text-orange-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaGithub className="text-gray-900 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <FiGitlab className="text-orange-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
          </div>
        </div>

        {/* Tarjeta Herramientas de desarrollo */}
        <div className="bg-gray-100 dark:bg-gray-900 shadow-lg rounded-lg p-4 w-full sm:w-80 flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Herramientas de desarrollo
          </h2>
          <div className="flex flex-wrap justify-around items-center gap-4">
            <SiVisualstudiocode className="text-blue-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiIntellijidea className="text-gray-900 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiEclipseide className="text-gray-700 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <SiPostman className="text-orange-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaDocker className="text-blue-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaAws className="text-yellow-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaLinux className="text-black text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <FaNpm className="text-red-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <DiComposer className="text-purple-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
            <TbBrandVite className="text-yellow-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-lg p-4 transition-transform transform hover:rotate-[360deg] duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
}