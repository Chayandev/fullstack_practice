import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleThemeLight = () => {
    setTheme("light");
  };
  const toggleThemeDark = () => {
    setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleThemeDark, toggleThemeLight }}>
      {children}
    </ThemeContext.Provider>
  );
};
