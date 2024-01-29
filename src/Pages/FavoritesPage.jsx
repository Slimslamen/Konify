import { ProductContext } from "../Components/ProductContext";
import { useContext } from "react";
import FavoritesList from "./FavoritesList";

function FavoritesPage() {
    const { favorites } = useContext(ProductContext);
  return (
    <FavoritesList favorites={favorites} />
  )
}

export default FavoritesPage;

