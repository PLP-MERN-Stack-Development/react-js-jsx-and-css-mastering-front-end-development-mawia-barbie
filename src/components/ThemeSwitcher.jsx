import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded"
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeSwitcher;
