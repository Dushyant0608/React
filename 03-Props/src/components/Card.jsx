import React from 'react'

const Card = (props) => {
  return (
    <div className='parent'>
      <div className="Card">
        
        <img src={props.img}></img>
        <h1>{props.user}</h1>
        <p>{props.desc}</p>
        
      </div>
    </div>
  )
}

export default Card
