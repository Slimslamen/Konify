import { Link } from "react-router-dom";
import FavoritesButton from "../Components/FavoritesButton";

function FavoritesList({ favorites }) {

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center m-10">
        <h1 className="text-5xl mb-4">Favorites</h1>
        <h2 className="text-3xl mb-4 text-gray-600">
          Oops, it&#39;s really quiet in here...
        </h2>
        <p className="text-lg mb-8 text-gray-500 ">
          Explore our products and add them to your favorites to have a look at
          them later.
        </p>
        <Link
          to="/News"
          className="text-purple-500 hover:underline bg-purple-200 py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Browse News
        </Link>
      </div>
    );
  }

  return (
    <main>
      <h1 className="text-5xl mt-2 mb-4 text-center">Favorites</h1>
      <section className="flex flex-wrap md:h-8/12 md:w-9/12 mx-auto bg-cover relative md:flex-row">
        {favorites.map((product) => (
          <div
            className=" p-4 w-1/1 md:w-1/2 lg:w-1/4 flex flex-col items-center justify-center"
            key={product.id}
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
export default FavoritesList;
