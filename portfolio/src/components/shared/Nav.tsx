import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../hooks/useTheme";
import { FaFlagUsa, FaFlag, FaSun, FaMoon, FaHome, FaProjectDiagram, FaFileAlt, FaBlog } from "react-icons/fa";

export function Nav({ onClose }: { onClose: () => void }) {
  const [theme, toggleTheme] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleLanguageToggle = () => {
    const newLanguage = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLanguage);
    if (onClose) onClose(); 
    console.log(`Language changed to ${newLanguage}`);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    console.log(`Menu is now ${!menuOpen ? "open" : "closed"}`); 
  };

  const handleLinkClick = () => {
    setMenuOpen(false); 
    if (onClose) onClose(); 
    console.log("Menu closed due to link click");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-md z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4">
        <Link
          to="/"
          className="text-xl font-bold text-gray-800 dark:text-gray-200"
          onClick={handleLinkClick}
        >
          Portfolio
        </Link>

        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
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

        <div className={`md:flex ${menuOpen ? "block" : "hidden"} w-full md:w-auto`}>
          <div className="flex flex-col md:flex-row md:space-x-4">
            {/* Enlaces */}
            <div className="flex flex-wrap md:flex-nowrap mb-4 md:mb-0">
              <Link
                to="/"
                className="flex items-center mx-2 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                onClick={handleLinkClick}
              >
                <FaHome className="mr-1" />
                {t("home")}
              </Link>
              <Link
                to="/projects"
                className="flex items-center mx-2 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                onClick={handleLinkClick}
              >
                <FaProjectDiagram className="mr-1" />
                {t("projects")}
              </Link>
              <Link
                to="/cv"
                className="flex items-center mx-2 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                onClick={handleLinkClick}
              >
                <FaFileAlt className="mr-1" />
                {t("cv")}
              </Link>
              <Link
                to="/blog"
                className="flex items-center mx-2 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                onClick={handleLinkClick}
              >
                <FaBlog className="mr-1" />
                {t("blog")}
              </Link>
            </div>
            
            {/* Botones */}
            <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
              <button
                onClick={() => {
                  typeof toggleTheme === 'function' && toggleTheme();
                  handleLinkClick(); // Close menu after theme toggle
                }}
                className="bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 transition mb-2 md:mb-0 flex items-center"
              >
                {theme === "dark" ? (
                  <FaSun className="text-white mr-2" />
                ) : (
                  <FaMoon className="text-white mr-2" />
                )}
                {theme === "dark" ? t("light_theme") : t("dark_theme")}
              </button>
              <button
                onClick={handleLanguageToggle}
                className="bg-transparent text-white px-4 py-2 rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition flex items-center"
              >
                {i18n.language === "es" ? (
                  <FaFlagUsa className="text-white mr-2" />
                ) : (
                  <FaFlag className="text-white mr-2" />
                )}
                {i18n.language === "es" ? "EN" : "ES"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
