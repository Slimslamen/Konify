import { ProductContext } from "../Components/ProductContext";
import { useParams } from "react-router-dom";

function Cart() {
    const { CartId } = useParams();
      const { products } = useContext(ProductContext);

    const selectedProduct = products.find(
      (product) => product.id === parseInt(CartId)
    );
    return <div className="">
        <div>
            <h1>Shopping cart</h1>
        </div>
        <div className="">
        {selectedProduct.map((product) => (
            <div>
              <img
                id={product.id}
                src={`/${product.image}`}
              />
              <p>
                {product.title} 
                </p>
                 <p>
                 {product.price} 
                 </p>
                  <p>
                  {product.sale} 
                  </p>
                  </div>
            ))}
        </div>
    </div>
}

export default Cart;