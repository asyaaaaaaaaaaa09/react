import React from 'react'
 
type Props = { name: string, subjects: string[] }
 
export default function School({ name, subjects }: Props) {
    const [likes, setLikes] = React.useState(0)
 
    React.useEffect(() => {
        if (likes % 5 == 0)
            alert(`Liked ${name} ${likes} times`)
    }, [likes])
    return (
        <div>
            <div>Name: {name}</div>
            <div>
                <ul>
                    {subjects.map(subject => <li key={subject}>{subject}</li>)}
                </ul>
            </div>
            <button onClick={() => {
                setLikes(likes + 1)
                console.log(`Liked ${name}`)
            }}>like ({likes}) </button>
        </div>
    )
}