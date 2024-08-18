import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
function App() {
  let myObj = {
    username: "Chayan",
    age: 21,
  };

  return (
    <>
      <h1 className="bg-purple-700 text-white p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <div className="flex flex-col ">
        <Card username="Rosse" />
        <Card username="Rosi" />
      </div>
    </>
  );
}

export default App;
