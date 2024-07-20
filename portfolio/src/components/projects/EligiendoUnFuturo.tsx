import { FaAngular } from "react-icons/fa6";
import { FaNode } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
export function EligiendoUnFuturo() {
  return (
    <div>
     <h2>Eligiendo un futuro</h2>
        <button>
            <a href="https://github.com/david87chdz/Eligiendo-un-futuro" target="_blank">Ver código</a>
        </button>
        <p>
            Proyecto final de ciclo 
            Creado con Angular 16, Node.js, Express, Java17, Spring Boot, Docker y MySQL
        </p>
        <img src="https://via.placeholder.com/600/1.jpg" alt="" />
        <div className="skills">
            <h4>Skills</h4>
            <ul>
                <li>Angular 16 <FaAngular/></li>
                <li>Node.js <FaNode /></li>
                <li>Express <SiExpress /></li>
                <li>Java17 <FaJava /></li>
                <li>Spring Boot <SiSpringboot /></li>
                <li>Docker <FaDocker /></li>
                <li>MySQL <SiMysql /></li>
            </ul>
        </div>
    </div>
  );
}