// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect } from "react";

// 1️⃣ Create the context
export const ThemeContext = createContext();

// 2️⃣ Create the provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // default theme

  // Load theme from localStorage when app mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Save theme to localStorage and update <html> class for Tailwind
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
