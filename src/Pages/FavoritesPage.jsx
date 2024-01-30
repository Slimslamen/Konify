import { ProductContext } from "../Components/ProductContext";
import { useContext } from "react";
import FavoritesList from "./FavoritesList";

function FavoritesPage() {
   // Accessing the favorites data from the ProductContext using useContext hook
    const { favorites } = useContext(ProductContext);
  return (
    //Displaying the favoritesList component with the users favorites
    <FavoritesList favorites={favorites} />
  )
}

export default FavoritesPage;

