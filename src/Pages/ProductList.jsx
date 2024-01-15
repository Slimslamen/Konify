import { useState, useEffect } from "react";
import Product from "./Product.jsx";


// API URL for fetching product data
const Product_URL = 'https://api.escuelajs.co/api/v1/products';

//list of Products
function ProductList({numberOfproducts}) {

    // A state to store the fetched products
  const [products, setProducts] = useState([]);

  // The useEffect hook to fetch Products when the the site updates or when numberOfProducts on App file changes
  useEffect(() => {
    async function getProducts() {
      try {
          // Fetching the data from the API
        const response = await fetch(Product_URL);
        const jsonResponse = await response.json();

        const firstProducts = jsonResponse.slice(0, numberOfproducts);
        setProducts(firstProducts);
          // Handling errors during data fetching
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
   // Calling the function
    getProducts();
  }, [numberOfproducts]);

  return (
      <section className="md:w-9/12 mx-auto flex flex-wrap">
      {/* Maping over the products array and render Products component and CardBtn for each product */}
      {products.map((product) => (
            
            <Product
              key={product.id}
              id={product.id}
              imageUrl={product.category.image}
              title={product.title}
            />
           ))}
      </section>

  );
}

export default ProductList;
