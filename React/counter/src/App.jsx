import { useState } from "react";
import "./App.css";

function App() {
 let [counter, setCounter] = useState(15);
  //let counter = 5;
  const addValue = () => {
    console.log("addValue CLicked", Math.random());
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);

    //react send the same changes batch wise , so  in this way we can't do this , we haev to do this by liek

    setCounter(prevCounter=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1); /// in this case what is hepping the batch wise update is not there as ther is callbacl so after completing one call back other is called 
  };
  const removeValue = () => {
    console.log("removeValue Clicked", Math.random());
    setCounter(--counter);
  };

  return (
    <>
      <h1>Counter Value : {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
