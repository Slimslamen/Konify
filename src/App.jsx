import FirstPage from './Firstpagefolder/FirstPage'
import Blouses from './Pages/blouses'
import Tshirts from './Pages/Tshirts'
import Sweatshirts from './Pages/Sweatshirts'
import Jeans from './Pages/Jeans'
import Skirts from './Pages/Skirts'
import Dress from './Pages/Dress'
import Sale from './Pages/Sale'
import News from './Pages/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SelectSize from './Productpage/SelectSize'


function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
            <Route 
              path="/"
              element={<FirstPage />}
            />
             <Route
            path="/Sweatshirt"
            element={<Sweatshirts />}
            />
            <Route
              path="/Tshirts"
              element={<Tshirts />}
            />
            <Route
            path="/Blouses"
            element={<Blouses />}
            />
             <Route
            path="/Jeans"
            element={<Jeans />}
            />
             <Route
            path="/Skirts"
            element={<Skirts />}
            />
             <Route
            path="/Dress"
            element={<Dress />}
            />
             <Route
            path="/Sales"
            element={<Sale />}
            />
             <Route
            path="/News"
            element={<News />}
            />
        </Routes>
      </BrowserRouter>
      <SelectSize />
    </>
  )
}

export default App
