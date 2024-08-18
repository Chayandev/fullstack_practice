import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPaswword] = useState("");

  //ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "@#$%^&*()!~_+{}[]";

    for (let i = 0; i < length; i++) {
      let charPos = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charPos);
    }

    setPaswword(pass);
  }, [length, numberAllowed, characterAllowed, setPaswword]); //optimization is done here

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    //optional select range
    // passwordRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password);
    // Show the toast notification
    toast.success("Copied to clipboard!");
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]); // this is the dependency where the generator is dependent

  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-2 my-12 bg-slate-700 text-orange-500 flex flex-col justify-center items-center gap-4">
      <h2 className="text-white text-2xl text-center">Password Generator</h2>
      <div className="flex shadow rounded-xl overflow-hidden w-full">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
        <ToastContainer
          position="bottom-center" // Positioning the toast at the bottom center
          autoClose={3000} // Automatically close after 3 seconds
          hideProgressBar={false} // Show progress bar
          closeOnClick={true} // Close on click
          pauseOnHover={true} // Pause when hovered
          draggable={true} // Allow dragging
        />
      </div>
      <div className=" w-full flex justify-evenly text-sm">
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            id="rangeOfLength"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="rangeOfLength">Lenght: {length}</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={(e) => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            id="inputChar"
            defaultChecked={characterAllowed}
            onChange={(e) => {
              setCharacterAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="inputChar">Charaters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
