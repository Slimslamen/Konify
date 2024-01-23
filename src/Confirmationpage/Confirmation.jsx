import { Link } from "react-router-dom";
import { ProductContext } from "../Components/ProductContext";
import { useContext } from "react";

function Confirmation() {
  const { formData, formSubmitted } = useContext(ProductContext);
  console.log("formData:", formData);
  console.log("formSubmitted:", formSubmitted);

  return (
    <div className="flex items-center justify-center flex-col p-8 bg-purple-300 w-1/2 h-96 mx-auto my-10 rounded-md shadow-xl relative rounded-tl-lg">
      <div className="shadow-xl rounded-lg p-6 flex items-center justify-center flex-col bg-gradient-to-r from-purple-300 to-purple-500 w-2/3">
        <img
          src="Assets/Ty.png"
          alt="heart"
          className="w-[9em] absolute top-3 left-0 "
        />
        <img src="Assets/ty2.png" alt="heart2" className="absolute w-[9.1em] bottom-16 right-0" />
        <h1 className="text-3xl font-bold">THANK YOU!</h1>
        {formSubmitted && (
          <>
            <div className="flex items-center justify-between flex-col h-48 ">
              <p className="text-2xl font-semibold">
                {formData.firstName} {formData.lastName}
              </p>
              <p className="text-center">
                You'll shortly recieve a confirmation email on <br/>{" "}
                <i>{formData.email}</i>
              </p>
              <p>1-3 working days delivery time</p>
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
