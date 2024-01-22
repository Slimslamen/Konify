import { ProductContext } from "../Components/ProductContext";
import { useContext } from "react";
import CountrySelector from "./CountrySelector";

function CustomerForm() {
  const { formData, updateFormData, setFormSubmitted } =
    useContext(ProductContext);

  function handleChange(evt) {
    const changedField = evt.target.name;
    const newValue = evt.target.value;
    updateFormData(changedField, newValue);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" w-4/5 md:w-3/5 flex-wrap flex flex-col justify-center items-center mx-auto my-auto"
    >
      <h1 className="text-2xl font-bold m-5">Your Information</h1>
      {<CountrySelector />}
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
      <input
        className="w-full border border-solid border-purple-200 border-opacity-50 rounded-lg p-4 mb-2"
        type="text"
        name="postalCode"
        placeholder="Postal Code"
        inputMode="numeric"
        pattern="^\s*\d{5}(-?\s*\d{4})?\s*$"
        id="zip"
        required
      />
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
      <button
        className="bg-purple-200 self-end rounded-lg p-2 m-2 text-slate-700 hover:bg-purple-300"
        type="submit"
      >
        Continue
      </button>
    </form>
  );
}
export default CustomerForm;
