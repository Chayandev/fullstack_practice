import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get("/api/jokes")
      .then((response) => {
        setJokes(response.data)
      })

      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <>
      <h1>Hi from React</h1>
      <p>JOKES: {jokes.length}</p>

      {/* show jokes */}

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.name}</h3>
            <p>{joke.joke}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
