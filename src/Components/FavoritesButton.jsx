import { Icon } from "@iconify/react";
import { ProductContext } from "./ProductContext";
import { useContext } from "react";

function FavoritesButton({ product }) {
    const { addToFavorites, favorites } = useContext(ProductContext);
  const isFavorite = product && product.id && favorites.some((favProduct) => favProduct.id === product.id);

  const handleAddToFavorites = () => {
    // Toggle the favorite status
    if (isFavorite) {
      // If already a favorite, remove it
      removeFromFavorites(product.id);
    } else {
      // If not a favorite, add it
      addToFavorites(product);
    }
  };

  const removeFromFavorites = (productId) => {
    // Filter out the product with the specified id from favorites
    const updatedFavorites = favorites.filter((favProduct) => favProduct.id !== productId);
    addToFavorites(updatedFavorites);
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
