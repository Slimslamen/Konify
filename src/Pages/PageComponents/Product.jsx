import FavoritesButton from "../../Components/FavoritesButton.jsx";
import { Link } from "react-router-dom";

//Function for an individual product card
const Product = ({ id, imageUrl, title, sale, price }) => {
  // Creating an object to represent the details of the product to use in favorites
  const productDetails = {
    id,
    imageUrl,
    title,
    sale,
    price,
  };

  // Rendering a product card
  return (
    <div className="tshirt-item p-4 w-1/1 md:w-1/2 lg:w-1/4 flex flex-col items-center justify-center">
      <div className="min-h-[250px]">
        {/* Link to navigate to the Productdetails page */}
        <Link to={`/Productdetails/${id}`}>
          {/* Product image with a Link to navigate to the details page */}
          <img
            key={id}
            id={id}
            src={imageUrl}
            alt={title}
            className="max-w-full mb-2 h-[300px] w-[225px] shadow-xl"
          />
        </Link>

        {/* Additional details and buttons below the product image */}
        <div className="flex mt-2 w-[225px] justify-between items-center">
          {/* Link to navigate to the Productdetails page */}
          <Link to={`/Productdetails/${id}`}>
            <p className="hover:font-semibold cursor-pointer">View</p>
          </Link>

          {/* Price, sale information, and the FavoritesButton component */}
          <div className="flex items-center">
            {/* Displaying sale information if available */}
            <p className="text-sm text-red-500 mr-2">{sale}</p>

            {/* Displaying the price */}
            <span className="text-sm mr-2">€{price}</span>

            {/* FavoritesButton component to add/remove from favorites */}
            {<FavoritesButton product={productDetails} className="ml-4" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
