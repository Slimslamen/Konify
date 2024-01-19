import FirstPage from './Firstpagefolder/FirstPage'
import Blouses from './Pages/Blouses.jsx'
import Tshirts from './Pages/Tshirts'
import Sweatshirts from './Pages/Sweatshirts'
import Jeans from './Pages/Jeans'
import Skirts from './Pages/Skirts'
import Dress from './Pages/Dress'
import Sale from './Pages/Sale'
import News from './Pages/News'
import NavBar from './Firstpagefolder/NavBar'
import Footer from './Firstpagefolder/Footer'
import Productdetails from './Pages/Productdetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductProvider from './Components/ProductContext'




function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <ProductProvider>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/Sweatshirt" element={<Sweatshirts />} />
            <Route path="/Tshirts" element={<Tshirts />} />
            <Route path="/Blouses" element={<Blouses />} />
            <Route path="/Jeans" element={<Jeans />} />
            <Route path="/Skirts" element={<Skirts />} />
            <Route path="/Dress" element={<Dress />} />
            <Route path="/Sales" element={<Sale />} />
            <Route path="/News" element={<News />} />
            <Route
              path="/Productdetails/:productId"
              element={<Productdetails />}
            />
       
          </Routes>
        </ProductProvider>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
