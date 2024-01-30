import { useState, useContext } from "react";
import Shipping from "./Shipping";
import { Link } from "react-router-dom";
import { ProductContext } from "../Components/ProductContext";

function Payment() {
  // Extracting values from the ProductContext using the useContext hook
  const { resetCartCount, resetCart } = useContext(ProductContext);

  //The state to manage the selected payment option
  const [selected, setSelected] = useState(null);

 /*when the user clicks on a payment option (represented by an index), 
  the function toggles the selection status. 
  The selected state keeps track of the currently selected payment option. */
  const handleCircle = (index) => {
    setSelected((prevSelected) => (prevSelected === index ? null : index));
  };

  // Check if a valid payment option is selected
  const isSelectedValid = () => {
    const isValid = selected !== null;

    return isValid;
  };

  return (
    <main>
      <img src="Assets/Klarna.png" alt="Klarna logo" className="ml-3 mt-3" />
      <div className="flex justify-center items-center flex-col px-5 pb">
        <h1 className="text-5xl mb-2">Payment</h1>

{/*three Shipping components as payment options */}
        {[1, 2, 3].map((index) => (
          <Shipping
            key={index}
            index={index}
            picture={"Assets/KlarnaCircle.png"}
            place={
              index === 1
                ? "Klarna - Pay now"
                : null || index === 2
                ? "Klarna - Invoice"
                : null || index === 3
                ? "Klarna - Installment payment"
                : null
            }
            isSelected={selected === index}
            time={
              index === 1
                ? "Direct payment, card, and Swish"
                : null || index === 2
                ? "30 days and monthly invoice"
                : null || index === 3
                ? "Pay a little each month"
                : null
            }
            price={index === 1 || index === 2 ? "" : ""}
            onClick={handleCircle}
            className="my-5"
          />
        ))}
      </div>
     {/* Continue button with Link to the Confirmation page */}
      <div className="w-4/5 md:w-3/5 mx-auto my-auto flex justify-center md:justify-end items-center">
        <Link to={isSelectedValid() ? "/Confirmation" : "#"}>
         
          <button
                 // Resetting cart count and the cart when continuing to Confirmation
            onClick={() => {
              resetCartCount();
              resetCart();
            }}
            className={`bg-purple-200 rounded-lg p-2 m-2 text-slate-700 hover:bg-purple-300 ${
              isSelectedValid() ? "" : "opacity-50 cursor-not-allowed"
            }`}
            type="submit"
            disabled={!isSelectedValid()}
          >
            Continue
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Payment;
