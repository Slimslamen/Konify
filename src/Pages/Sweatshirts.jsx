import ProductList from "./ProductList.jsx";
import FilterSortButton from "./FilterSortButton.jsx";
import ImageTitle from "../Firstpagefolder/ImageTitle.jsx";
import { useEffect, useState } from "react";
import Product from "./Product.jsx";

function Sweatshirts () {

const SWEAT_URL = '../data.json'

const [sweatshirts, setSweatshirts] = useState([])
const [filteredSweatshirts, setFilteredSweatshirts] = useState([]);

useEffect(() => {
  async function getSweatshirts(){

    const response = await fetch(SWEAT_URL)
    const data = await response.json()

    setSweatshirts(data)
  }
  getSweatshirts()
},[])
  // Function to filter sweatshirts based on category
const filterSweatshirtsByCategory = (category) => {
  const filteredData = sweatshirts.filter((sweatshirt) => sweatshirt.category === category);
  setFilteredSweatshirts(filteredData);
};
  //Filter out sweatshirts with category
useEffect(() => {
  filterSweatshirtsByCategory('sweatshirts');
}, [sweatshirts]);
return (
        <>
        <main>
        <section className="flex md:h-8/12 md:w-9/12 mx-auto bg-cover relative z-[-10] md:flex-row">
                    <img 
                    src="src/images/sweatshirt.jpg" 
                    alt="Girl with grey shirt" 
                    className="h-[300px] md:h-[500px] w-full"
                    />
                    <div className="font-Playfair flex justify-center items-center absolute top-1/3 left-1/2 translate-x-[-50%] z-10">
      <ImageTitle title="Sweatshirts" />
                 </div>
                </section>
                <section className="flex flex-row justify-between m-5 text-xl md:mx-48">
                    <div className="flex flex-row justify-between w-1/3">
                   <FilterSortButton name="Filter" op1="price-Range" op2="Size" op3="Colour"/>
                    </div>
                    <FilterSortButton name="Sort" op1="Högsta pris" op2="Lägsta pris" op3="Pupularitet"/>
          </section>
            {sweatshirts}
         {/*  <ProductList numberOfproducts={8} /> {/*Ändra siffran för att bestämma hur många produkter vi vill visa */} */}
        </main>
        </>
      );

}

export default Sweatshirts;
