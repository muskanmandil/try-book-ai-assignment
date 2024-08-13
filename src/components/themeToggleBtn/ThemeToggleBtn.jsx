import React, {useState, useEffect} from "react";
import "./ThemeToggleBtn.css";

const ThemeToggleBtn = () => {
  const setDefaultTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      return storedTheme;
    } else {
      localStorage.setItem("theme", "dark");
      return "dark";
    }
  };
  
  const [theme, setTheme] = useState(setDefaultTheme());

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <div className="theme-toggle-btn">
      <input
        type="checkbox"
        id="checkbox"
        checked={theme === "dark" ? true : false}
        onChange={toggleTheme}
      />
      <label className="theme-switch" htmlFor="checkbox">
        <i className="fas fa-sun"></i>
        <i className="fas fa-moon"></i>
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default ThemeToggleBtn;
