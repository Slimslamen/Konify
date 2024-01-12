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
    <main >
    <section className="flex md:h-8/12 md:w-9/12 mx-auto bg-cover relative z-[-10] md:flex-row">
                <img 
                src="src/images/Tshirtimg.jpg" 
                alt="Girl with grey shirt" 
                className="h-[300px] md:h-[500px] w-full"
                />
                <div className="font-Playfair bg-opacity-50 bg-purple-300 w-68 flex justify-center items-center absolute top-1/3 left-1/2 translate-x-[-50%] z-10">
                    <h1 
                    className="p-4 flex justify-center items-center opacity-100 text-4xl md:text-6xl text-slate-950 z-20">
                        T-SHIRTS
                    </h1>
                </div>
            </section>
            <section className="flex flex-row justify-between m-5 text-xl md:mx-48">
                <div className="flex flex-row justify-between w-1/3">
                    <button className="hidden md:block hover:font-semibold">Price-Range</button>
                    <button className="hidden md:block hover:font-semibold">Size</button>
                    <button className="hidden md:block hover:font-semibold">Colour</button>
                    <button className="md:hidden">Filter</button>
                </div>
                <button className="hover:font-semibold">Sort</button>
      </section>
      <section className="flex flex-wrap">
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
      </section>
    </main>
    <Footer />
    </>
  );
}

export default TshirtList;
