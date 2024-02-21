import { useState } from 'react'
import Cabecalho from './Cabecalho'
import Meio from './Meio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Cabecalho />
        <Meio />
      </div>
    </>
  )
}

export default App
