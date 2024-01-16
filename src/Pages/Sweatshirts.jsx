import FilterSortButton from "./FilterSortButton.jsx";
import ImageTitle from "../Firstpagefolder/ImageTitle.jsx";
import { useEffect, useState } from "react";
import Product from "./Product.jsx";

function Sweatshirts() {
  const SWEAT_URL = 'src/data.json'; 

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {

        const response = await fetch(SWEAT_URL);
        const jsonResponse = await response.json();

        const sweatshirtProducts = jsonResponse.products.filter(product => product.category === 'sweatshirts');
       
        setProducts(sweatshirtProducts);
        setIsLoading(false)
    }
    fetchData();

  }, []);


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
          <section className="md:w-9/12 mx-auto flex flex-wrap">
            {products.map((product) => (
              <Product       
                key={product.id}
                id={product.id}
                imageUrl={product.image}
                title={product.title}
                price={product.price}
                sale={product.sale}
                description={product.description}
              />
              
            )
            )}
            <p className="transition-opacity duration-1000" style={{opacity: isLoading ? 1 : 0}}>Loading...</p>
          </section>
        </main>
        </>
      );

}

export default Sweatshirts;
