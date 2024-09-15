import { useEffect, useState } from "react";
import "./App.css";
import CardComponent from "./components/CardComponent";
import ToggelButton from "./components/ToggleButton";
import { ThemeProvider } from "./contexts/theme";
function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex items-center justify-center min-h-screen w-screen">
        <div className="flex flex-col justify-center h-70 w-96 p-4 ">
          <ToggelButton />
          <CardComponent />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
