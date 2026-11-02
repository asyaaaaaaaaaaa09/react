import React from 'react'

type Props = {
    title: string,
    text: string,
    image: string
}
 
export default function Bild({ title, text, image 
}: Props) {

        const random = Math.random();
        const worter = ["Apfel","Baum", "Banane", "Maus"];
        const randomWorter = worter[Math.floor(Math.random()*worter.length)];
    return (
        <div>
            <h2>{title}</h2>
            <img src={image + "?" + random} alt="Hero" />
            <p> {text}</p>
            <p>{random}</p>
            <p>{randomWorter}</p>
        </div>
    )
}