import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App () {
  const [count, setCount] = useState(0)

  function addValue () {
    setCount(count + 1)
  }

  function removeValue () {
    setCount(count - 1)
  }

  return (
    <>
      <h1>React Counter</h1>

      <h3>Counter value: {count}</h3>
      <div>
        <button onClick={addValue}>Add</button>
      </div>
      <div>
        <button onClick={removeValue}>Remove</button>
      </div>
    </>
  )
}

export default App
