import React, { useEffect, useState } from 'react'
import Todo from './Todo'
import styles from './Todos.module.css'
 
type Props = {}
 
type TodoType = {
  id: number
  title: string
  body: string
}
 
export default function Todos({ }: Props) {
  const [todos, setTodos] = useState<TodoType[]>([])
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setTodos(json))
  }, [])
 
  console.log(todos)
  return (
    <div className={styles.container}>
      {todos.map(todo => (
        <Todo key={todo.id} title={todo.title} description={todo.body} />
      ))}
    </div>
  )
}