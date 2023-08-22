import React from 'react'

function Recepie(props) {
  return (
    <div className='recipe-card'>
        <h1>{props.name}</h1>
        <p>{props.calories}</p>
        <ol className='ingredients'>
          {props.ingredients.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ol>
        <img src={props.imgSrc} alt="recepie"></img>
    </div>
  )
}

export default Recepie