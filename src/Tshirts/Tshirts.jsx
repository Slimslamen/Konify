import NavBar from "../Firstpagefolder/NavBar.jsx";
import Footer from "../Firstpagefolder/Footer.jsx";
import CardBtn from "./CardBtn.jsx";
import { useState, useEffect } from "react";

const Product_URL = 'https://fakestoreapi.com/products/1';

function Tshirts() {
  const [product, setProduct] = useState({ title: "" });

  useEffect(() => {
    async function getTshirt() {
      try {
        const response = await fetch(Product_URL);
        const jsonResponse = await response.json();
        
        // Access the first element of the array
        const tshirt = jsonResponse[0];
        
        // Check if the product is not null before setting the state
        if (tshirt) {
          setProduct(tshirt);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getTshirt();
  }, []);

  return (
    <>
    <NavBar/>
    <main>
      <h1>{product.title}</h1>
      <CardBtn />
    </main>
       <Footer />
       </>
  );
}

export default Tshirts;
