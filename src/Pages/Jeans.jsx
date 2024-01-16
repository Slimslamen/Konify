import ProductList from "./ProductList.jsx";
import FilterSortButton from "./FilterSortButton.jsx";
import ImageTitle from "../Firstpagefolder/ImageTitle.jsx";


function Jeans () {

return (
        <>
        <main>
        <section className="flex md:h-8/12 md:w-9/12 mx-auto bg-cover relative z-[-10] md:flex-row">
                    <img 
                    src="src/images/jeans.jpg" 
                    alt="Girl with grey shirt" 
                    className="h-[300px] md:h-[500px] w-full"
                    />
                    <div className="font-Playfair flex justify-center items-center absolute top-1/3 left-1/2 translate-x-[-50%] z-10">
    <ImageTitle title="JEANS" />
                 </div>
                </section>
                <section className="flex flex-row justify-between m-5 text-xl md:mx-48">
                    <div className="flex flex-row justify-between w-1/3">
                   <FilterSortButton name="Filter" op1="price-Range" op2="Size" op3="Colour"/>
                    </div>
                    <FilterSortButton name="Sort" op1="Högsta pris" op2="Lägsta pris" op3="Pupularitet"/>
          </section>
          <ProductList numberOfproducts={8} /> {/*Ändra siffran för att bestämma hur många produkter vi vill visa */}
        </main>
        </>
      );

}

export default Jeans;
