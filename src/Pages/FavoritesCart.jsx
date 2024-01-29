import { Link } from "react-router-dom";
import FavoritesButton from "../Components/FavoritesButton";

function FavoritesCart({ favorites }) {

  function hej(){
console.log("heej");
  }

  return (
    <main>
      <h1 className="text-5xl mt-2 mb-4 text-center">Favorites</h1>
      <section className="flex flex-wrap md:h-8/12 md:w-9/12 mx-auto bg-cover relative z-[-10] md:flex-row">
       
        {favorites.map((product, index) => (
          <div
            className=" p-4 w-1/1 md:w-1/2 lg:w-1/4 flex flex-col items-center justify-center"
            key={index}
          >
            <div className="min-h-[250px]">
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
                    <button onClick={hej}>hej</button>
                    <FavoritesButton product={product} className="ml-4" />
                  </div>
                </div>
              </>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default FavoritesCart;
