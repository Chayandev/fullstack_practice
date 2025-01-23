import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen bg-slate-700">
      <h2 className="text-red-400">Hello Tailwind</h2>
    </div>
  );
}

export default App;
