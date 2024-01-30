// Importing necessary dependencies from React and external libraries
import { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function CountrySelector() {
  // State to manage the selected value in the country dropdown
  const [value, setValue] = useState("");

  // Memoized options for the country dropdown using useMemo
  const options = useMemo(() => countryList().getData(), []);

  // Update the selected value when the user makes a selection
  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    // Rendering the Select component for the country dropdown
    <Select
      className="w-full mb-2"
      placeholder="Select your country"
      id="Country"
      options={options}
      value={value}
      onChange={changeHandler}
      required
    />
  );
}

export default CountrySelector;
