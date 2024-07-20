import { FaAngular } from "react-icons/fa6";
import { FaNode } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiExpress } from "react-icons/si";

export function Cvitae () {
   return (
    <div>
         <h1>Mi Currículum Vitae</h1>
    <button>
            <a href="https://github.com/david87chdz/cvAngular" target="_blank">Ver código</a>
        </button>
        <p>
            Currículum personal creado con Angular 
            Creado con Angular 17, Node.js, Express, Docker y PostgreSql
        </p>
        <img src="https://via.placeholder.com/600/1.jpg" alt="" />
        <div className="skills">
            <h2>Skills</h2>
            <ul>
                <li>Angular 17 <FaAngular/></li>
                <li>Node.js <FaNode /></li>
                <li>Express <SiExpress /></li>
                <li>Docker <FaDocker /></li>
                <li>PostgreSql <SiPostgresql /></li>
            </ul>
        </div>
    </div>
   );
}