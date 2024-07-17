import { useState, useEffect } from "react";

export function useTheme() {
  const getPreferredTheme = () => {
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    localStorage.setItem("theme", preferredTheme);
    return preferredTheme;
  };

  // Obtener el tema guardado en localStorage o usar el tema preferido del sistema por defecto
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || getPreferredTheme()
  );

  // Cambiar el tema y guardarlo en localStorage
  const toggleTheme = () => {
    const newTheme = !theme;
    console.log(newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Aplicar el tema a la clase del body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return [theme, toggleTheme];
}
