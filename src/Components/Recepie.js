import React from 'react'

function Recepie(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <p>{props.calories}</p>
        <img src={props.imgSrc} alt="recepie"></img>
    </div>
  )
}

export default Recepie