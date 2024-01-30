// ProductContext innehåller all nödvändig kod för att hämta all data vi behöver från produkterna
import { ProductContext } from "../Components/ProductContext";
import { useContext } from "react";
import ProductCart from "./productCart";


function Cart() {
// Hämtar cart och cartCount från ProductContext
  const { cart, cartCount, } = useContext(ProductContext);

  
// kör komponenten och skickar med cart och cartCount som props.
  return <>
    <ProductCart cart={cart} cartCount={cartCount} />
    
  </>
}


export default Cart;
