import { Link } from "react-router-dom";
import { ProductContext } from "../Components/ProductContext";
import { useContext } from "react";

function Confirmation() {
  
  // Extracting functions and data from the ProductContext using the useContext hook
  const { formData, formSubmitted } = useContext(ProductContext);

  return (
    <div className="flex items-center justify-center flex-col p-8 bg-purple-300 md:w-1/2 2xl:w-[47em] md:h-96 mx-auto md:my-10 md:rounded-md shadow-xl relative w-full text-center h-auto">
      <div className="shadow-xl rounded-lg p-6 flex items-center justify-center flex-col bg-gradient-to-r from-purple-300 to-purple-500 md:w-2/3 h-auto">
        <img
          src="Assets/Ty.png"
          alt="heart"
          className="w-[9em] absolute md:top-3 2xl:left-0 md:left-0 md:block hidden"
        />
        <img
          src="Assets/ty2.png"
          alt="heart2"
          className="absolute w-[9.1em] md:bottom-16 md:right-0 hidden md:block"
        />
        <h1 className="text-3xl font-bold">THANK YOU!</h1>

        {/* if form is submitted in the previous page, it'll show the confirmation card */}
        {formSubmitted && (
          <>
            <div className="flex items-center justify-between flex-col h-48 ">
              <p className="text-2xl font-semibold py-1">
                {formData.firstName} {formData.lastName}
              </p>
              <p className="text-center py-1">
                You will shortly recieve a confirmation email on <br />{" "}
                <i>{formData.email}</i>
              </p>
              <p className="py-1">1-3 working days delivery time</p>
              <Link
                to="/"
                className="bg-purple-400 hover:shadow-lg ease-in duration-300 px-3 py-1 rounded-lg"
              >
                Home
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Confirmation;
