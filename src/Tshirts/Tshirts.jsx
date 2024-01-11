import NavBar from "../Firstpagefolder/NavBar.jsx";
import Footer from "../Firstpagefolder/Footer.jsx";
import CardBtn from "./CardBtn.jsx";
import { useState, useEffect } from "react";

const Product_URL = 'https://fakestoreapi.com/products/';

function Tshirts() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getTshirt() {
      try {
        const response = await fetch(Product_URL);
        const jsonResponse = await response.json();
        
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
            <section className="md:h-8/12 md:w-9/12 mx-auto bg-cover relative z-[-10]">
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
            <CardBtn />
        </main>
        <Footer />
    </>
  );
}

export default Tshirts;
