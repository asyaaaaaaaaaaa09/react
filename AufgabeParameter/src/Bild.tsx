import React from 'react'

type Props = {
  title : string;
  text : string;
}

export default function Bild({title,text}: Props) {
  return (
    <div className='bild'>
      <h2>{title}</h2>
           <img src="https://picsum.photos/seed/picsum/200/300" alt="Hero" />
      <p>{text}</p>
    </div>
  )
}