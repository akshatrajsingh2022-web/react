import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const btnref = useRef()

  useEffect(() => {
    // a.current = a.current+1
    console.log(`first rendering`)
    btnref.current.style.backgroundColor= "red"
  });
   

  return (
    <>
    <div>
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
    </div>
    </>
  )
}

export default App
