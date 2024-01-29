import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { Icon } from "@iconify/react";

function FavoritesButton({ product }) {
  const { addToFavorites, favorites, removeFromFavorites } = useContext(ProductContext);

  const isFavorite =
    product &&
    product.id &&
    favorites.some((favProduct) => favProduct.id === product.id);

  const handleAddToFavorites = () => {
    console.log("Clicked on FavoritesButton");

    // Toggle the favorite status
    if (isFavorite) {
      // If already a favorite, remove it
      removeFromFavorites(product.id);
    } else {
      // If not a favorite, add it
      addToFavorites(product);
    }
  };

  return (
    <Icon
      onClick={handleAddToFavorites}
      icon={isFavorite ? "mdi:heart" : "mdi:heart-outline"}
      className="w-8 h-8 text-gray-900 hover:font-bold cursor-pointer"
    />
  );
}

export default FavoritesButton;



