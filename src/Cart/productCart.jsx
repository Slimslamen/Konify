import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../Components/ProductContext";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const ProductCart = ({ cart }) => {
  const [scores, setScores] = useState(cart.map(() => 1));
  const [totalPrice, setTotalPrice] = useState(0);

  const { productSizes } = useContext(ProductContext);

  const quantityAdd = (idx) => {
    setScores((prevScores) => {
      const updatedScores = prevScores.map((score, i) => {
        if (i === idx) return score + 1;
        return score;
      });
      updateTotalPrice(updatedScores);
      return updatedScores;
    });
  };

  const quantityRemove = (idx) => {
    setScores((prevScores) => {
      const updatedScores = prevScores.map((score, i) => {
        if (i === idx && score > 0) return score - 1;
        return score;
      });
      updateTotalPrice(updatedScores);
      return updatedScores;
    });
  };

  const updateTotalPrice = (updatedScores) => {
    const newTotalPrice = updatedScores.reduce((acc, score, idx) => {
      const product = cart[idx];
      return acc + score * product.price;
    }, 0);
    setTotalPrice(newTotalPrice);
  };

  // Update total price when the component mounts or scores change
  useEffect(() => {
    updateTotalPrice(scores);
  }, [scores]);
  return (
    <div className="cart">
      <div>
        <h1 className="text-5xl text-wrap text-center m-5">
          Shopping cart
        </h1>
      </div>
      <div className=" md:w-100 grid grid-cols-4 md:grid-cols-6 justify-between md:mt-8 md:mb-0 md:m-20">
        <div className=" text-left ml-2">
          <p>Items</p>
        </div>
        <div className="text-center">
          <p>Price per item</p>
        </div>
        <div className=" text-center">
          <p>Quantity</p>
        </div>
        <div className="mr-2 text-right">
          <p>Remove Item</p>
        </div>
        <div className="flex-grow text-center"></div>
      </div>

      <div className="md:w-100 border-t border-gray-300 md:mt-8 md:mb-0 md:m-20"></div>
      <div className="md:w-100 border border-gray-300 rounded md:p-4 md:mt-4 md:m-20 relative min-h-[20em]">
      {cart.map((product, idx) => (
  <div key={product.id} className="items-start grid grid-cols-4 md:grid-cols-6 gap-4 justify-between mb-4">
    <div className="flex items-center">
      <img
        src={`/${product.image}`}
        alt={product.title}
        className="max-w-full h-[100px] w-[100px] shadow-xl mb-5 rounded-sm"
      />
      <div className="flex flex-col ml-2">
        <p className="w-40">{product.title}</p>
        <p className="mt-2">Size {productSizes[product.id]}</p>
      </div>
    </div>

    <div className="flex items-center justify-center">
      {product.sale ? (
        <p className="text-red-500">{product.sale}</p>
      ) : (
        <p>{product.price}</p>
      )}
    </div>

    <div className="flex items-center justify-center">
      <button
        className="bg-gray-100 cursor-pointer m-2.5 w-[40px] font-bold border-none rounded-lg"
        onClick={() => quantityRemove(idx)}
      >
        -
      </button>
      <input
        type="text"
        value={scores[idx]}
        className="bg-gray-100 font-bold text-center w-[40px]"
      />
      <button
        className="bg-gray-100 cursor-pointer m-2.5 w-[40px] font-bold border-none rounded-lg"
        onClick={() => quantityAdd(idx)}
      >
        +
      </button>
    </div>

    <div className="flex items-center justify-end">
      <button>
        <Icon icon="icomoon-free:bin" className="md:w-8 h-8" />
      </button>
    </div>
  </div>
))}



        <div className="flex flex-col justify-around it rounded-l-md bg-purple-300 w-64 h-72 md:top-[-18px] md:right-0 md:absolute text-black mx-auto mb-10">
          <img src="Assets/checkoutpic.png" alt="pile of clothes" className="w-[7em] absolute bottom-60 left-14 md:top-[-6.5em] md:left-[-3em] block md:hidden"/>
          <h2 className="mx-3 font-bold text-center">SUMMARY</h2>
          <div className="px-5 flex justify-between">
            <p>Subtotal </p>
            <p>€{totalPrice}</p>
          </div>
          <div className="px-5 flex justify-between">
            <p>Taxes </p>
            <p>-</p>
          </div>
          <div className="px-5 flex justify-between mb-5">
            <p>Happy </p>
            <p>Always.</p>
          </div>
          <Link to="/Checkout">
            <button className="bg-purple-300 shadow-lg py-2 w-40 rounded md:ml-20 bg-gradient-to-r hover:from-purple-300 hover:to-purple-400 text-black absolute right-[6.5em] bottom-6 md:right-10 md:bottom-[-10px]">
              Go to checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
