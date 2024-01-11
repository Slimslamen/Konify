import NavBar from "../Firstpagefolder/NavBar.jsx";
import Footer from "../Firstpagefolder/Footer.jsx";
import { useState, useEffect } from "react";
import Tshirts from "./Tshirts";

// API URL for fetching product data
const Product_URL = 'https://api.escuelajs.co/api/v1/products';

//list of T-shirts
function TshirtList({ numberOfTshirts }) {

    // A state to store the fetched products
  const [products, setProducts] = useState([]);

  // The useEffect hook to fetch T-shirts when the the site updates or when numberOfTshirts on App file changes
  useEffect(() => {
    async function getTshirts() {
      try {
          // Fetching the data from the API
        const response = await fetch(Product_URL);
        const jsonResponse = await response.json();

        const firstProducts = jsonResponse.slice(0, numberOfTshirts);
        setProducts(firstProducts);
          // Handling errors during data fetching
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
   // Calling the function
    getTshirts();
  }, [numberOfTshirts]);

  return (
    <>
    <NavBar/>
    <main className="flex flex-wrap">
      {/* Maping over the products array and render Tshirts component and CardBtn for each product */}
      {products.map((product) => (
      <>
            
      <Tshirts
        key={product.id}
        id={product.id}
        imageUrl={product.images}
        title={product.title}
      />
    </>
      ))}
    </main>
    <Footer />
    </>
  );
}

export default TshirtList;
