import { Icon } from "@iconify/react";
import { ProductContext } from "./ProductContext";
import { useContext } from "react";
import Product from "../Pages/PageComponents/Product";

function FavoritesButton({ product}) {
  const { addToFavorites, favorites, removeFromFavorites } = useContext(ProductContext);
  /*  tests whether at least one element in the array passes the test implemented by the provided function */
  const isFavorite =
    product &&
    product.id &&
    favorites.some((favProduct) => favProduct.id === product.id);
  


  const handleAddToFavorites = () => {
    // Toggle the favorite status
    if (isFavorite) {
      // If already a favorite, remove it
      removeFromFavorites(product);
    } else {
      // If not a favorite, add it
      addToFavorites(product);
    }
  };

  return (
    <Icon
      onClick={handleAddToFavorites}
      icon={isFavorite ? "mdi:heart" : "mdi:heart-outline"}
      className="w-8 h-8 text-gray-900 hover:font-bold cursor-pointer "
    />
  );
}

export default FavoritesButton;
