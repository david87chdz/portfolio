import { FaReact } from "react-icons/fa";

export function Countries() {
  return (
    <div>
        <h3>Countries</h3>
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
            <h4>Skills</h4>
            <ul>
                <li>React <FaReact /></li>
            </ul>
        </div>
    </div>
  )
}