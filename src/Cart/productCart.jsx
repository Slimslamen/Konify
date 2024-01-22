import Product from '../Pages/PageComponents/Product';
import { Icon } from '@iconify/react';

const ProductCart = ({ cart, cartCount }) => {
  return (
    <div className="cart">
      <div>
        <h1 className="text-3xl flex items-center justify-center mt-4">
          Shopping cart
        </h1>
      </div>
      <div className="w-100 h-80 flex items-center justify-center border border-gray-300 rounded p-4 mt-4 mb-4 m-20">
        <div>
      <button className="relative -top-20 -right-80"><Icon icon="icomoon-free:bin" className=" md:w-8 h-8" /></button>
      </div>
        {cart.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            imageUrl={`${product.imageUrl}`}
            sale={product.sale}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
