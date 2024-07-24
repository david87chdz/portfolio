import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

export function Nav() {
  const [toggleTheme] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
      <Link to="/" className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Portfolio
        </Link>
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className={`md:flex ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="md:flex md:items-center">
            <Link to="/" className="mx-2 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Home</Link>
            <Link to="/projects" className="mx-2 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Projects</Link>
            <Link to="/cv" className="mx-2 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">CV</Link>
            <Link to="/blog" className="mx-2 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Blog</Link>
          </div>
          <div className="md:flex md:items-center">
            <button 
              onClick={toggleTheme} 
              className="bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 transition mx-2"
            >
              Cambiar tema
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
