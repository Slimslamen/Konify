import { Icon } from '@iconify/react';

const ProductCart = ({ cart }) => {

  return (
    <div className="cart">
      <div>
        <h1 className="text-3xl flex items-center justify-center mt-5">
          Shopping cart
        </h1>
      </div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex-grow text-center">
          <p>Items</p>
        </div>
        <div className="flex-grow text-center">
          <p>Price per item</p>
        </div>
        <div className="flex-grow text-center">
          <p>Quantity</p>
        </div>
        <div className="flex-grow text-center">
          <p>Remove Item</p>
        </div>
      </div>
      <div className="md:w-100 border-t border-gray-300 md:mt-8 md:mb-0 md:m-20"></div>
      <div className="md:w-100 border border-gray-300 rounded md:p-4 md:mt-4 md:m-20">
        {cart.map((product) => (
          <div key={product.id} className="flex flex-row">
            <img
              src={`/${product.image}`}
              alt={product.title}
              className="max-w-full h-[100px] w-[100px] shadow-xl flex flex-col justify-start mb-5"
            />
            <div className="flex ml-2">
              <p>{product.title}</p>
              <div className="ml-20">
                {/*  If there is a sales price (product.sale), display it in red; otherwise, display the regular price (product.price).*/}
                {product.sale ? (
                  <p className="text-red-500">{product.sale}</p>
                ) : (
                  <p>{product.price}</p>
                )}
  
                <button className="absolute right-0 md: mr-36">
                  <Icon icon="icomoon-free:bin" className="md:w-8 h-8" />
                </button>

              </div>
            </div>
          </div>
        ))}
        <div className="flex items-end justify-end">
          <div>
            <p className="md:mb-3">Tax:</p>
            <p>Total price:</p>
          </div>
          <button className="bg-purple-300 text-black py-2 px-4 rounded md:ml-20">
            Go to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;

