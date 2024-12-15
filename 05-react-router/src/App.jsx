import { useState } from 'react'
import './App.css'
import Header from './_components/Header/Header'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>hello</div> */}
      <Header />
    </>
  )
}

export default App
