import React from 'react'
import { useEffect } from 'react'

const Navbar = ({color}) => {
    
  //case 1 :run on every render
  useEffect(()=> {
    alert("hey i will run on every render")
  })

  //case 2 :run only on first render
  useEffect(()=> {
    alert("hey welcome to my page..  this is first render")
  }, [])

  // case 3 : run only when certain value change
  useEffect(()=> {
    alert("hey i am running bcoz color was changed")
  },[color])

  //example of cleanup function
  useEffect(() => {
    alert("hey welcome to my page. This is the first render of appp.jsx")
    
    return () => {
      alert("component was unmounted")
    }
  }, [])
    
    
  return (
    <div>
      <ul>
        <li>home</li>
        <li>About</li>
        <li>Contact us </li>
        <li>{color}</li>
      </ul>
    </div>
  )
}

export default Navbar
