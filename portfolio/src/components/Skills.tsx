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
      <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">⚙️ Skills</h1>
        <div className="flex flex-wrap gap-6 justify-center">
          
          {/* Tarjeta Lenguajes de programación */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-full sm:w-80">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Lenguajes de programación
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center">
                <IoLogoJavascript className="text-yellow-500 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <SiTypescript className="text-blue-500 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <FaJava className="text-red-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <FaPhp className="text-purple-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
            </div>
          </div>
  
          {/* Tarjeta Lenguajes de marcado y estilos */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-full sm:w-80">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Lenguajes de marcado y estilos
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center">
                <FaHtml5 className="text-orange-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <FaCss3Alt className="text-blue-500 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <FaSass className="text-pink-500 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
            </div>
          </div>
  
          {/* Tarjeta Frameworks y bibliotecas Frontend */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-full sm:w-80">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Frameworks y bibliotecas Frontend
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center">
                <FaAngular className="text-red-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <FaReact className="text-blue-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <FaBootstrap className="text-purple-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <SiTailwindcss className="text-blue-400 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
            </div>
          </div>
  
          {/* Tarjeta Tecnologías y frameworks Backend */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-full sm:w-80">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Tecnologías y frameworks Backend
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center">
                <SiSpringboot className="text-green-500 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <FaSymfony className="text-black text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <FaNode className="text-green-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <SiExpress className="text-gray-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <SiHibernate className="text-purple-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <DiDoctrine className="text-blue-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
            </div>
          </div>
  
          {/* Tarjeta Sistemas de gestión de bases de datos */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-full sm:w-80">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Sistemas de gestión de bases de datos
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center">
                <SiMysql className="text-blue-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <SiPostgresql className="text-blue-700 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <SiMariadb className="text-blue-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <SiOracle className="text-orange-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <SiMongodb className="text-green-500 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
            </div>
          </div>
  
          {/* Tarjeta Control de versiones */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-full sm:w-80">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Control de versiones
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center justify-center">
                <FaGitAlt className="text-orange-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <FaGithub className="text-gray-900 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <FiGitlab className="text-orange-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
            </div>
          </div>
  
          {/* Tarjeta Herramientas de desarrollo */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-full sm:w-80">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Herramientas de desarrollo
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center justify-center">
                <SiVisualstudiocode className="text-blue-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <SiIntellijidea className="text-gray-900 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <SiEclipseide className="text-gray-700 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <SiPostman className="text-orange-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <FaDocker className="text-blue-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <FaAws className="text-yellow-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <FaLinux className="text-black text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <FaNpm className="text-red-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <DiComposer className="text-purple-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
              <div className="flex items-center justify-center">
                <TbBrandVite className="text-yellow-600 text-6xl border border-gray-300 dark:border-gray-600 rounded-full p-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }