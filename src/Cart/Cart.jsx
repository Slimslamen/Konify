// ProductContext innehåller all nödvändig kod för att hämta all data vi behöver från produkterna
import { ProductContext } from "../Components/ProductContext";
import { useContext } from "react";
import ProductCart from "./productCart";


function Cart() {
// Hämta cart och cartCount från ProductContext med useContext-hook.
  const { cart, cartCount, } = useContext(ProductContext);

  
// Rendera ProductCart-komponenten och skicka med cart och cartCount som props.
  return <>
    <ProductCart cart={cart} cartCount={cartCount} />
    
  </>
}


export default Cart;
