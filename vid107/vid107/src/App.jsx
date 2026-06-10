import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>count is {count} </div>
      <button onClick={()=>{setCount(count+1)}}>Click me for updating the value of count</button>
    </>
  )
}

export default App
