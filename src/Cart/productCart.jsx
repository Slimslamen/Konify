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
        <h1 className="text-3xl flex items-center justify-center my-5">
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
        <div className="flex-grow text-center"></div>
      </div>
      <div className="md:w-100 border-t border-gray-300 md:mt-8 md:mb-0 md:m-20"></div>
      <div className="md:w-100 border border-gray-300 rounded md:p-4 md:mt-4 md:m-20 shadow-md relative">
        {cart.map((product, idx) => (
          <div key={product.id} className="flex flex-row">
            <img
              src={`/${product.image}`}
              alt={product.title}
              className="max-w-full h-[100px] w-[100px] shadow-xl flex flex-col justify-start mb-5 rounded-lg"
            />
            <div className="flex ml-2">
              <div className="flex flex-col">
                <p className="w-40">{product.title}</p>
                <p className="mt-5">{productSizes[product.id]}</p>
              </div>
            </div>
            <div className="ml-16 w-12">
              {/*  If there is a sales price (product.sale), display it in red; otherwise, display the regular price (product.price).*/}
              {product.sale ? (
                <p className="text-red-500">{product.sale}</p>
              ) : (
                <p>{product.price}</p>
              )}
            </div>
            <div className="flex ml-64">
              <button className="m-2" onClick={() => quantityRemove(idx)}>
                -
              </button>
              <p className="mt-12">{scores[idx]}</p>
              <button className="m-2" onClick={() => quantityAdd(idx)}>
                +
              </button>
            </div>
            <button className="absolute right-0 md: mr-96">
              <Icon icon="icomoon-free:bin" className="md:w-8 h-8" />
            </button>
          </div>
        ))}
        <div className="bg-purple-300 w-64 h-64 flex-col absolute top-[-20px] right-0 rounded-sm text-white">
          <h2 className="ml-2 mt-2 mb-5 ">SUMMARY</h2>
          <div className="flex justify-between mx-2">
            <p>Subtotal</p>
            <p>€{totalPrice}</p>
          </div>
          <Link to="/Checkout">
            <button className="bg-purple-300 shadow-lg py-2 px-4 rounded md:ml-20 bg-gradient-to-r hover:from-purple-300 hover:to-purple-400 text-white">
              Go to checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
