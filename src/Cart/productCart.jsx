
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
          <div key={product.id}>
          <img 
          src={`/${product.image}`}
          alt={product.title}
          className="max-w-full mb-2 h-[100px] w-[100px] shadow-xl"
          />
        <p className="">{product.title}</p>
        <p>{product.price}</p>
        <p>{product.sales}</p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
