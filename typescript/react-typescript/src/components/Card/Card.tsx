import React from 'react'

interface CardProps{
    heading:string;
    content:string;
}
const Card = ({heading, content}:CardProps) => {
   
  return (
    <div>
        <h2>{heading}</h2>
        <p>{content}</p>
    </div>
  )
}

export default Card