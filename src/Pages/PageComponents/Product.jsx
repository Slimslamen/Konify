import { useContext } from "react";
import Favorites from "../../Components/Favorites.jsx";
import { Link } from "react-router-dom";

//an individual T-shirt item
const Product = ({ id, imageUrl, title, sale, price }) => {

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
          <Link to={`/SingleProduct/${id}`}>  <p className="hover:font-semibold cursor-pointer" >View</p></Link>
          <div className="flex items-center">
            <p className="text-sm text-red-500 mr-2">{sale}</p>
            <span className="text-sm mr-2">€{price}</span>

             <Favorites className="ml-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
