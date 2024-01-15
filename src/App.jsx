import FirstPage from './Firstpagefolder/FirstPage'
import TshirtList from './Tshirts/TshirtList'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
        <BrowserRouter>
          <FirstPage />
          <TshirtList numberOfTshirts={8} /> {/*Ändra siffran för att bestämma hur många produkter vi vill visa */}
        </BrowserRouter>
    </>
  )
}

export default App
