import { Link } from "react-router-dom";
import { ProductContext } from "../Components/ProductContext";
import { useContext } from "react";

function Confirmation() {
  const { formData, formSubmitted } = useContext(ProductContext);
  console.log("formData:", formData);
  console.log("formSubmitted:", formSubmitted);

  return (
    <div className="flex items-center justify-center flex-col p-8 bg-gradient-to-b from-purple-200 to-purple-400 w-2/3 h-96 mx-auto my-10 rounded-md shadow-xl relative rounded-tl-lg">
      <div className="shadow-xl rounded-lg p-6 flex items-center justify-center flex-col bg-gradient-to-b from-purple-250 to-purple-700">
        <img
          src="Assets/Ty.png"
          alt="heart"
          className=" w-[14em] absolute top-3 left-0 "
        />
        <h1 className="text-3xl font-bold">THANK YOU!</h1>
        {formSubmitted && (
          <>
            <div className="flex items-center justify-between flex-col h-48 ">
              <p className="text-2xl font-semibold">
                {formData.firstName} {formData.lastName}
              </p>
              <p>
                You'll shortly recieve a confirmation email on
                <i>{formData.email}</i>
              </p>
              <p>1-3 working days delivery time</p>
              <Link to="/" className="">Home</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Confirmation;
