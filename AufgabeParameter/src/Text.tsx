import React from 'react'

type Props = {
  title:string;
  text: string;
}

export default function Text({title, text}: Props) {
  return (
    <div className='text'>
    <h1>{title}</h1>
    <div>{text}</div>
    </div>
  )
}