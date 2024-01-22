import { ProductContext } from "../Components/ProductContext";
import { useContext } from "react";
import ProductCart from "./productCart";


function Cart() {
  const { cart, cartCount } = useContext(ProductContext);

  return <>
    <ProductCart cart={cart} cartCount={cartCount} />
    
  </>
}


export default Cart;
