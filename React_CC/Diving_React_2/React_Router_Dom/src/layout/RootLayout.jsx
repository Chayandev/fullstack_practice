import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function RootLayout() {
  return (
    <div className="h-full min-h-screen w-full">
      <Header />
      <div className="flex justify-center items-center min-h-[80%]">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
