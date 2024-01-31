import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ProductContext } from "../Components/ProductContext.jsx";
import FavoritesButton from "../Components/FavoritesButton.jsx";
import SelectSize from "../Productpage/SelectSize.jsx";
import AddtocartButton from "../Components/AddtocartButton.jsx";
import Scroll from "../Scroll.jsx";

const Productdetails = () => {
  // Extracting the 'selectedId' parameter from the URL
  const { selectedId } = useParams();

  // Extracting functions and data from the ProductContext using the useContext hook
  const { products, addToCart, setCurrentId, addToFavorites } =
    useContext(ProductContext);
  
    // Finding the product in the 'products' array that corresponds to the currently selected product ID ('selectedId')
  const selectedProduct = products.find(
    (product) => product.id === parseInt(selectedId)h
  );

useEffect(() => {
  // Check if a product is selected
  if (selectedProduct) {
    // Set the ID of the selected product as the current product ID in the ProductContext
    setCurrentId(selectedProduct.id);
  }
}, []);

  return (
    <div className="md:flex max-[864px]:justify-center grid grid-col-1 flex-wrap mb-4 ">
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
          <FavoritesButton
            addToFavorites={addToFavorites}
            product={selectedProduct}
          />{" "}
          <AddtocartButton addToCart={addToCart} product={selectedProduct} />
        </div>
      </div>

      <Scroll />
    </div>
  );
};

export default Productdetails;
