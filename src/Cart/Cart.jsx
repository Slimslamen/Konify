import { ProductContext } from "../Components/ProductContext";
import Product from "../Pages/PageComponents/Product";

function Cart() {

  const { cart } = useContext(ProductContext);

  return <div className="cart">
    <div>
      <h1>Shopping cart</h1>
    </div>
    <div className="cartItems">
      {cart.map((product) => {
        <Product key={product.id} product={product} />
      })}
    </div>
  </div>
}

export default Cart;
