import { useState } from 'react'
import Cabecalho from './Cabecalho'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Cabecalho />
      </div>
    </>
  )
}

export default App
