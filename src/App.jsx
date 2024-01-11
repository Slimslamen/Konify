import { useState } from 'react'
import FirstPage from './Firstpagefolder/FirstPage'
import Tshirts from './Tshirts/Tshirts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <FirstPage />
        <Tshirts />
    </>
  )
}

export default App
