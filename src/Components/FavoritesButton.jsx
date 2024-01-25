import { Icon } from "@iconify/react";
import { ProductContext } from "./ProductContext";
import { useContext } from "react";

function FavoritesButton({ product }) {
    const { addToFavorites } = useContext(ProductContext);
  
    const handleAddToFavorites = () => {
      addToFavorites(product);
    };
  
    return (
      <Icon
        onClick={handleAddToFavorites}
        icon="mdi:heart-outline"
        className="w-8 h-8 text-gray-900 hover:font-bold cursor-pointer"
      />
    );
  }
  

export default FavoritesButton;
