import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Stopwatch from "./components/Stopwatch.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Stopwatch />
  </StrictMode>
);
