import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../Components/ProductContext.jsx";
import AddtocartButton from "../Components/AddtocartButton.jsx";
import ScrollToTop from "react-scroll-to-top";
import Favorites from "../Components/Favorites.jsx";
import SelectSize from "../Productpage/SelectSize.jsx"

const Productdetails = () => {
  const { productId } = useParams();
  const { products } = useContext(ProductContext);

  const selectedProduct = products.find(
    (product) => product.id === parseInt(productId)
  );

  console.log(selectedProduct.image);

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
      <div className="md:w-1/2 w-full mb-4 flex flex-col md:justify-center">
      <div className="flex justify-around pb-2 border-b-2">
      <h2 className="md:text-3xl">{selectedProduct.title}</h2>
      <p className="md:text-xl">
        Price: €{selectedProduct.price}{" "}
        <span className="text-red-500">{selectedProduct.sale}</span>
      </p>
    </div>
    </div>
    </div>
   
    <ScrollToTop />
    </div>
   
  );
};

export default Productdetails;
