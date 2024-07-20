import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
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

export function Skills(){
    return(
        <div>
            <h2>Skills</h2>
            <h4>Lenguajes de programación:</h4>
            <ul>
                <li>JavaScript <IoLogoJavascript/></li>
                <li>Typescript <SiTypescript/></li>
                <li>Java <FaJava/></li>
                <li>Php <FaPhp/></li>
            </ul>
            <h4>Lenguajes de marcado y estilos:</h4>
            <ul>
                <li>HTML5 <FaHtml5/></li>
                <li>CSS3 <FaCss3Alt/></li>
                <li>Sass <FaSass/></li>
            </ul>
            <h4>Frameworks y bibliotecas Frontend:</h4>
            <ul>
                <li>Angular <FaAngular/></li>
                <li>React <FaReact/></li>
                <li>Bootstrap <FaBootstrap/></li>
                <li>Taildwind <SiTailwindcss/></li>
            </ul>
            <h4>Tecnologias y frameworks Backend:</h4>
            <ul>
                <li>Spring Boot <SiSpringboot/></li>
                <li>Symfony <FaSymfony/></li>
                <li>NodeJS <FaNode/></li>
                <li>Express <SiExpress/></li>
                <li>Hibernate <SiHibernate /></li>
                <li>Doctrine <DiDoctrine /></li>
            </ul>
            <h4>Sistemas de gestión de basdes de datos:</h4>
            <h5>Relacionales:</h5>
            <ul>
                <li>MySql <SiMysql /></li>
                <li>PostgreSql <SiPostgresql /></li>
                <li>MariaDb <SiMariadb /></li>
                <li>Oracle <SiOracle /></li>
            </ul>
            <h5>No relacionales</h5>
            <ul>
                <li>MongoDb <SiMongodb /></li>
            </ul>
            <h4>Crontrol de versiones</h4>
            <ul>
                <li>Git <FaGitAlt /></li>
                <li>GitHub <FaGithub /></li>
                <li>GitLab <FiGitlab /></li>
            </ul>
            <h4>Herramientas de desarrollo:</h4>
            <ul>
                <li>Visual Studio Code <SiVisualstudiocode /></li>
                <li>IntelliJ IDEA <SiIntellijidea /></li>
                <li>Eclipse <SiEclipseide /></li>
                <li>Postman <SiPostman /></li>
                <li>Docker <FaDocker /></li>
                <li>AWS <FaAws /></li>
                <li>Linux <FaLinux /></li>
                <li>Npm <FaNpm /></li>
                <li>Composer <DiComposer /></li>
                <li>Vite <TbBrandVite /></li>
            </ul>
        </div>
    )
}