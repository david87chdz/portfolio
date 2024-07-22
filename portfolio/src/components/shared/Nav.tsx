import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

export function Nav() {
  const [toggleTheme] = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold">
          Portfolio
        </Link>
        <div>
          <Link to="/" className="mx-2 hover:text-blue-500">Home</Link>
          <Link to="/projects" className="mx-2 hover:text-blue-500">Projects</Link>
          <Link to="/cv" className="mx-2 hover:text-blue-500">CV</Link>
          <Link to="/blog" className="mx-2 hover:text-blue-500">Blog</Link>
        </div>
        <button onClick={toggleTheme} className="bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 transition">
          Toggle Theme
        </button>
      </div>
    </nav>
  );
}
