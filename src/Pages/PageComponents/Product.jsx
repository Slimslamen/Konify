import FavoritesButton from "../../Components/FavoritesButton.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../Components/ProductContext.jsx";
import Productdetails from "../Productdetails.jsx";

//an individual T-shirt item
const Product = ({ id, imageUrl, title, sale, price }) => {
  const productDetails = {
    id,
    imageUrl,
    title,
    sale,
    price,
  };
  return (
    <div className="tshirt-item p-4 w-1/1 md:w-1/2 lg:w-1/4 flex flex-col items-center justify-center">
      <div className="min-h-[250px]">
        <Link to={`/Productdetails/${id}`}>
          <img
            key={id}
            id={id}
            src={imageUrl}
            alt={title}
            className="max-w-full mb-2 h-[300px] w-[225px] shadow-xl"
          />
        </Link>
        {/* Putting the CardBtn component below the image */}
        <div className="flex mt-2 w-[225px] justify-between items-center">
          <Link to={`/Productdetails/${id}`}>
            {" "}
            <p className="hover:font-semibold cursor-pointer">View</p>
          </Link>
          <div className="flex items-center">
            <p className="text-sm text-red-500 mr-2">{sale}</p>
            <span className="text-sm mr-2">€{price}</span>

            {<FavoritesButton product={productDetails} className="ml-4" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
