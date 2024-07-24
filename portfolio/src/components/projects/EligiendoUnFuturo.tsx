import { FaAngular } from "react-icons/fa6";
import { FaNode } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { FaDocker, FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import angularVideo from "../../assets/eUFuturo.mp4";
export function EligiendoUnFuturo() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-sm w-full transition-transform transform hover:scale-105">
      <div className="p-4">
      <video
  src={angularVideo}
  className="w-full h-48 object-cover rounded-md"
  controls
  loop
  muted
></video>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Eligiendo un futuro</h2>
        <a
          href="https://github.com/david87chdz/Eligiendo-un-futuro"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors mb-4 text-center"
        >
          Ver código <FaGithub className="inline-block ml-2" />
        </a>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Proyecto final de ciclo
          <br />
          Creado con Angular 16, Node.js, Express, Java 17, Spring Boot, Docker y MySQL
        </p>
        <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">Skills</h4>
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
