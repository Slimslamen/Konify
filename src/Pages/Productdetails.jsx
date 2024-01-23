import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProductContext } from "../Components/ProductContext.jsx";
import ScrollToTop from "react-scroll-to-top";
import Favorites from "../Components/Favorites.jsx";
import SelectSize from "../Productpage/SelectSize.jsx"
import AddtocartButton from "../Components/AddtocartButton.jsx";

const Productdetails = () => {
  const { selectedId } = useParams();
  const { products, addToCart, setCurrentId  } = useContext(ProductContext);


  const selectedProduct = products.find(
    (product) => product.id === parseInt(selectedId)
  );
  useEffect(() => {
    if (selectedProduct) {
      setCurrentId(selectedProduct.id);
    }
  }, []);
  
  return (
    <div className="md:flex grid grid-col-1 flex-wrap mb-4 ">
      <div className="flex items-center justify-center mb-2 w-full md:justify-end md:w-1/2 ">
        <img
          key={selectedProduct.id}
          src={`/${selectedProduct.image}`}
          alt={selectedProduct.title}
          className="max-w-full md:m-4 w-[350px] h-[380px] md:w-[425px] md:h-[500px] shadow-xl"
        />

      </div>
      <div className="md:w-1/2 w-full mb-4 flex flex-col md:justify-center w-[350px] md:w-[425px]">
        <div className="flex justify-around pb-2 border-b-2">
          <h2 className="md:text-3xl">{selectedProduct.title}</h2>
          <p className="md:text-xl">
            Price: €{selectedProduct.price}{" "}
            <span className="text-red-500">{selectedProduct.sale}</span>
          </p>
        </div>
        <p className="mx-4 md:my-6 md:text-lg">{selectedProduct.description}</p>
        <p className="mx-4 mt-2 mt:my-6">Select Size</p>
        <SelectSize />
        <div className="flex justify-around py-2 md:my-4  border-b-2">
          <Favorites />  <AddtocartButton addToCart={addToCart} product={selectedProduct} />

        </div>
      </div>

      <ScrollToTop />
    </div>

  );
};

export default Productdetails;
