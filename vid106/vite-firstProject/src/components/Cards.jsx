import React from 'react'
import "./EachCard.css"
const Cards = (props) => {
  return (
    <div className="EachCard">
        <img src="https://media.istockphoto.com/id/1312850689/vector/matrix-background-binary-code-texture-falling-green-numbers-data-visualization-concept.jpg?s=612x612&w=0&k=20&c=l1xAzPJUjbROnui5McM-_vbDswAg5OoSzwJuFpdj3WE=" alt="" width={339} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      
    </div>
  )
}

export default Cards
