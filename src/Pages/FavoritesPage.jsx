import { ProductContext } from "../Components/ProductContext";
import { useContext } from "react";
import FavoritesCart from "./FavoritesCart";

function FavoritesPage() {
    const { favorites } = useContext(ProductContext);
  return (
    <FavoritesCart favorites={favorites} />
  )
}

export default FavoritesPage;

