import { Link } from "react-router-dom";

export function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/projects">Proyectos</Link>
                </li>
                <li>
                    <Link to="/cv">CV</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    );
}