import { useState, useEffect } from "react";

export function useTheme() {
  const currentTheme = () => {
    // Intenta obtener el tema desde localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    } else {
      // If no theme is stored, try to get the user's system preference
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
  };

  const [theme, setTheme] = useState(currentTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return [theme, toggleTheme];
}
