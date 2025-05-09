import { ProductContext } from "../Components/ProductContext";
import { useContext } from "react";
import CountrySelector from "./CountrySelector";
import { useNavigate } from "react-router-dom";

function CustomerForm() {
  // Destructuring values from the ProductContext using the useContext hook
  const { formData, updateFormData, setFormSubmitted } =
    useContext(ProductContext);

  // Hook for navigating to different pages since Link doesnt work to navigate and submit the form
  const navigate = useNavigate();

  //Function to handel the input changes
  function handleChange(evt) {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    updateFormData(changedField, newValue);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Setting the form as submitted
    setFormSubmitted(true);
    // Navigating to the next page if the form is valid
    if (isFormValid()) {
      navigate("/payment");
    }
  };

  //Check if the form is valid
  const isFormValid = () => {
    const isValid =
      formData.email &&
      formData.postalCode &&
      formData.firstName &&
      formData.lastName &&
      formData.adress &&
      formData.city &&
      formData.mobile;

    return isValid;
  };
  return (
    // Rendering the form with input fields, labels, and a submit button
    <form
      onSubmit={handleSubmit}
      className="w-4/5 md:w-3/5 flex-wrap flex flex-col justify-center items-center mx-auto my-auto"
    >
      <h1 className="text-5xl text-wrap text-center m-5">Your Information</h1>

      {/* Country selector component */}
      {<CountrySelector />}

      {/* Email input */}
      <input
        className="w-full border border-solid border-purple-200 border-opacity-50 rounded-lg p-4 mb-2"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        id="email"
        required
      />

      {/* Postal Code input */}
      <input
        className="w-full border border-solid border-purple-200 border-opacity-50 rounded-lg p-4 mb-2"
        type="text"
        name="postalCode"
        placeholder="Postal Code"
        inputMode="numeric"
        pattern="^\s*\d{5}(-?\s*\d{4})?\s*$"
        value={formData.postalCode}
        onChange={handleChange}
        id="zip"
        required
      />

      {/* First and Last Name inputs */}
      <div className="w-full flex mb-2">
        <input
          className="w-full border border-solid border-purple-200 border-opacity-50 rounded-l-lg p-4"
          type="text"
          name="firstName"
          placeholder="Firstname"
          value={formData.firstName}
          onChange={handleChange}
          id="firstname"
          required
        />
        <div className="border-l border-purple-200 border-opacity-50"></div>
        <input
          className="w-full border border-solid border-purple-200 border-opacity-50 rounded-r-lg p-4"
          type="text"
          name="lastName"
          placeholder="Lastname"
          value={formData.lastName}
          onChange={handleChange}
          id="lastname"
          required
        />
      </div>

      {/* Address, City, and Mobile Phone inputs */}
      <input
        className="w-full border border-solid border-purple-200 border-opacity-50 rounded-lg p-4 mb-2"
        type="text"
        name="adress"
        placeholder="Adress"
        value={formData.adress}
        onChange={handleChange}
        id="adress"
        required
      />
      <input
        className="w-full border border-solid border-purple-200 border-opacity-50 rounded-lg p-4 mb-2"
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        id="city"
        required
      />
      <input
        className="w-full border border-solid border-purple-200 border-opacity-50 rounded-lg p-4 mb-2"
        type="tel"
        name="mobile"
        placeholder="Mobile Phone"
        value={formData.mobile}
        onChange={handleChange}
        id="mobile"
        required
      />

      {/* Submit button */}
      <div className="w-full flex justify-center items-center">
        <button
          type="submit"
          className={`bg-purple-200 rounded-lg p-2 m-2 text-slate-700 hover:bg-purple-300 ${
            isFormValid() ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!isFormValid()}
        >
          Continue
        </button>
      </div>
    </form>
  );
}
export default CustomerForm;
