import React, { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function RootLayout() {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <>
      <div className="h-full min-h-screen w-full">
        <Header />
        <div className="flex justify-center items-center min-h-[80%] bg-white dark:bg-gray-800">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default RootLayout;
