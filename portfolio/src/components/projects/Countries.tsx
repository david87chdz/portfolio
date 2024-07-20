import { FaReact } from "react-icons/fa";

export function Countries() {
  return (
    <div>
        <h1>Countries</h1>
        <button>
            <a href="">Ver código</a>
        </button>
        <p>
            Proyecto de países
            Creado con React usando la API de países
            <a href="Https://restcountries.com">API</a>
        </p>
        <img src="https://via.placeholder.com/600/1.jpg" alt="" />
        <div className="skills">
            <h2>Skills</h2>
            <ul>
                <li>React <FaReact /></li>
            </ul>
        </div>
    </div>
  )
}