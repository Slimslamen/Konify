import Product from "./PageComponents/Product.jsx";
import FilterSortButton from "./PageComponents/FilterSortButton.jsx";
import ImageTitle from "../Components/ImageTitle.jsx";
import { useContext } from "react";
import { ProductContext } from "../Components/ProductContext.jsx";
import Scroll from "../Scroll";

function Tshirts() {
  const { products, setProducts } = useContext(ProductContext);
  const filteredProducts = products.filter((product) =>
    product.category.includes("tshirts" || "news")
  );

  return (
    <>
      <main>
        <section className="flex md:h-8/12 md:w-9/12 mx-auto bg-cover relative z-[-10] md:flex-row">
          <img
            src="Assets/Tshirtimg.jpg"
            alt="Girl with grey shirt"
            className="h-[300px] md:h-[500px] w-full"
          />
          <div className="font-Playfair flex justify-center items-center absolute top-1/3 left-1/2 translate-x-[-50%] z-10">
            <ImageTitle title="T-SHIRTS" />
          </div>
        </section>
        <section className="flex flex-row justify-between m-5 text-xl md:mx-48">
          <div className="flex flex-row justify-between w-1/3">
            <FilterSortButton
              name="Filter"
              op1="price-Range"
              op2="Size"
              op3="Colour"
            />
          </div>
          <FilterSortButton
            name="Sort"
            op1="Högsta pris"
            op2="Lägsta pris"
            op3="Pupularitet"
          />
        </section>
        <section className="md:w-9/12 mx-auto flex flex-wrap">
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              imageUrl={product.image}
              title={product.title}
              price={product.price}
              sale={product.sale}
              description={product.description}
            />
          ))}
        </section>
      </main>
      <Scroll />
    </>
  );
}

export default Tshirts;
