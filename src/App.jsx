import FirstPage from './Firstpagefolder/FirstPage'
import TshirtList from './Tshirts/TshirtList'


function App() {
  return (
    <>
        <FirstPage />
        <TshirtList numberOfTshirts={4} /> {/*Ändra siffran för att bestämma hur många produkter vi vill visa */}
    </>
  )
}

export default App
