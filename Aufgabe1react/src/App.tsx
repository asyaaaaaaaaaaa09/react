import { useState } from 'react'
import './App.css'
import Bild from './bild'
import Text from './Text'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Text /> 
      <Bild />
      <Bild />
      <Bild />

    </>
  )
}

export default App
