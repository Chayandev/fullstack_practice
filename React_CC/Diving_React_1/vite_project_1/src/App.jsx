import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const hanldeCLick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={hanldeCLick}>Count {count}</button>
    </>
  );
}

export default App;
