import { FaReact } from "react-icons/fa";

export function Countries() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-sm w-full transition-transform transform hover:scale-105">
      <img
        src="https://via.placeholder.com/300/1.jpg"
        alt="Country Image"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">Countries</h3>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors mb-4">
          <a href="#" className="no-underline">Ver código</a>
        </button>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Proyecto de países
          <br />
          Creado con React usando la API de países
          <a
            href="https://restcountries.com"
            className="text-blue-500 underline ml-1"
          >
            API
          </a>
        </p>
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Skills</h4>
          <ul className="list-disc list-inside pl-5">
            <li className="flex items-center text-gray-700 dark:text-gray-300">
              React <FaReact className="ml-2 text-blue-500" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
