import { useState } from 'react'
import './App.css'
import Bild from './Bild'
import Text from './Text'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Text title="schöne Bilder!" text="hergestellt von Asy"/> 
      <Bild title="Asy" text="gemacht von Asy" image="https://picsum.photos/200/300"/>
      <Bild title="Ary" text="gemacht von Ary" image="https://picsum.photos/200/300"/>
      <Bild title="Sev" text="gemacht von Sev" image="https://picsum.photos/200/300" />

    </>
  )
}

export default App
