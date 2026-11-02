import { useState } from 'react'
import './App.css'
import Bild from './Bild'
import Text from './Text'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Text title="schöne Bilder!" text="hergestellt von Asy"/> 
      <Bild title="Asy" text="gemacht von Asy"/>
      <Bild title="Ary" text="gemacht von Ary"/>
      <Bild title="Sev" text="gemacht von Sev"/>

    </>
  )
}

export default App
