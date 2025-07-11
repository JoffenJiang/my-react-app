import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Square from './test'

function App() {
  const [count, setCount] = useState(0)
  const [staicCount, setStaticCount] = useState(10) 

  const setMyCount = () => {
    setStaticCount((staicCount) => staicCount + 13)
    setCount((count) => count + 1)
  }
  
  return (
    <>
      <div>
        <Square />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setMyCount()}>
          count is {count}  staicCount is {staicCount}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
