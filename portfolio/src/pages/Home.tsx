import { Link } from "react-router-dom";
import { Proyects } from "../components/Proyects";
import { Contact } from "../components/Contact";
import { Social } from "../components/Social";
import { Developer } from "../components/PortfolioCode";
import { Description } from "../components/Description";
import { Image } from "../components/Image";
import { Skills } from "../components/Skills"
export function Home() {
    return (
        <div>
            <h1>David Cerezo</h1>
            <p>Desarrollador web</p>
    <Image />
      <Description />
      <Developer />
      <Social/>
      <Contact />
      <Proyects />
      <Skills />
      <Link to="/projects">Proyectos</Link>
        </div>
    );
}
