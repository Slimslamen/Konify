import { Link } from "react-router-dom";
import FavoritesButton from "../Components/FavoritesButton";

function FavoritesCart({ favorites }) {
  return (
    <main className="tshirt-item p-4 w-1/1 md:w-1/2 lg:w-1/4 flex flex-col items-center justify-center">
     
      {favorites.map((product, index) => (
        <div className="min-h-[250px]" key={index}>
          <>
            <Link to={`/Productdetails/${product.id}`}>
              <img
                src={product.image ? `/${product.image}` : product.imageUrl}
                alt={product.title}
                id={product.id}
                className="max-w-full mb-2 h-[300px] w-[225px] shadow-xl"
              />
            </Link>
            {/* Putting the CardBtn component below the image */}
            <div className="flex mt-2 w-[225px] justify-between items-center">
              <Link to={`/Productdetails/${product.id}`}>
                <p className="hover:font-semibold cursor-pointer">View</p>
              </Link>
              <div className="flex items-center">
                <p className="text-sm text-red-500 mr-2">{product.sale}</p>
                <span className="text-sm mr-2">€{product.price}</span>
                <FavoritesButton className="ml-4" />
              </div>
            </div>
          </>
        </div>
      ))}
    </main>
  );
}

export default FavoritesCart;
