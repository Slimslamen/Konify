import FirstPage from "./Firstpagefolder/FirstPage";
import Blouses from "./Pages/Blouses.jsx";
import Tshirts from "./Pages/Tshirts";
import Sweatshirts from "./Pages/Sweatshirts";
import Jeans from "./Pages/Jeans";
import Skirts from "./Pages/Skirts";
import Dress from "./Pages/Dress";
import Sale from "./Pages/Sale";
import News from "./Pages/News";
import NavBar from "./Firstpagefolder/NavBar";
import Footer from "./Firstpagefolder/Footer";
import Productdetails from "./Pages/Productdetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductProvider from "./Components/ProductContext";
import Cart from "./Cart/Cart.jsx";
import Checkout from "./Confirmationpage/Checkout.jsx";
import Payment from "./Confirmationpage/Payment.jsx";
import Confirmation from "./Confirmationpage/Confirmation.jsx";
import FavoritesPage from "./Pages/FavoritesPage.jsx";
import Aboutus from "./Pages/Aboutus.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/FavoritesPage" element={<FavoritesPage />} />
            <Route path="/Sweatshirt" element={<Sweatshirts />} />
            <Route path="/Tshirts" element={<Tshirts />} />
            <Route path="/Blouses" element={<Blouses />} />
            <Route path="/Jeans" element={<Jeans />} />
            <Route path="/Skirts" element={<Skirts />} />
            <Route path="/Dress" element={<Dress />} />
            <Route path="/Sales" element={<Sale />} />
            <Route path="/News" element={<News />} />
            <Route
              path="/Productdetails/:selectedId"
              element={<Productdetails />}
            />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/Confirmation" element={<Confirmation />} />
            <Route path="/Aboutus" element={<Aboutus />} />
          </Routes>
        </ProductProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
