import { useState} from 'react'
import './App.css'
import Navbar from './component/Navbar'
import { useEffect } from 'react'
import { useEffectEvent } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [color, setcolor] = useState(0)


  //run when we change the count state
  useEffect(() => {
    alert("count was changed")
    setcolor(color +1)
  }, [count])


  return (
    <>
      {/* <Navbar color={"yellow" + color}/> */}
      <div>count is {count} </div>
      <button onClick={()=>{setCount(count+1)}}>Click me for updating the value of count</button>
    </>
  )
}

export default App
