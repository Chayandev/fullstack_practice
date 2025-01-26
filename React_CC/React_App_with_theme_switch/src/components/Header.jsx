import React, { useContext, useEffect } from "react";
import NavItem from "./NavItem";
import { ThemeContext } from "../context/ThemeContext.jsx";

function Header() {
  const { theme, toggleThemeDark, toggleThemeLight } = useContext(ThemeContext);

  const handleThemeToggler = () => {
    if (theme === "dark") toggleThemeLight();
    else toggleThemeDark();
  };

  return (
    <header className="w-full shadow sticky z-50 top-0 bg-purple-700">
      <nav className="h-16 mx-auto w-[80%] flex justify-between items-center">
        <h1 className="text-slate-50 font-bold">react-router-dom</h1>
        <div className="flex gap-8 justify-center items-center">
          <NavItem label="Home" link="/" />
          <NavItem label="About" link="about" />
          <NavItem label="Sevices" link="services" />
          <NavItem label="Contact" link="contact" />
        </div>
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value={""}
              className="sr-only peer"
              onChange={handleThemeToggler}
              checked={theme === "dark"}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-white dark:text-gray-300">
              Dark mode
            </span>
          </label>
        </div>
      </nav>
    </header>
  );
}

export default Header;
