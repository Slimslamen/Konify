import Product from "./Product.jsx";
import FilterSortButton from "./FilterSortButton.jsx";
import ImageTitle from "../Firstpagefolder/ImageTitle.jsx";
import { useEffect, useState } from "react";

function Blouses () {
  const SWEAT_URL = 'src/data.json'; // Replace with the correct absolute path

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {

        const response = await fetch(SWEAT_URL);
        const jsonResponse = await response.json();

        const sweatshirtProducts = jsonResponse.products.filter(product => product.category === 'blouses');
       
        setProducts(sweatshirtProducts);
    }
    fetchData();

  }, []);
return (
        <>
        <main>
        <section className="flex md:h-8/12 md:w-9/12 mx-auto bg-cover relative z-[-10] md:flex-row">
                    <img 
                    src="src/images/blouses.jpg" 
                    alt="Girl with grey shirt" 
                    className="h-[300px] md:h-[500px] w-full"
                    />
                    <div className="font-Playfair flex justify-center items-center absolute top-1/3 left-1/2 translate-x-[-50%] z-10">
    <ImageTitle title="BLOUSES" />
                 </div>
                </section>
                <section className="flex flex-row justify-between m-5 text-xl md:mx-48">
                    <div className="flex flex-row justify-between w-1/3">
                   <FilterSortButton name="Filter" op1="price-Range" op2="Size" op3="Colour"/>
                    </div>
                    <FilterSortButton name="Sort" op1="Högsta pris" op2="Lägsta pris" op3="Pupularitet"/>
          </section>
          <section className="md:w-9/12 mx-auto flex flex-wrap">
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                imageUrl={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            ))}
          </section>
        </main>
        </>
      );

}

export default Blouses;
