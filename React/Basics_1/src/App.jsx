import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)  //state , w hen ever updated will update the dom

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}    //this is the button similar to the normal 
      </button>
    </div>
  )
}

export default App
