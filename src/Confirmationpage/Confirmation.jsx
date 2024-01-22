import { ProductContext } from '../Components/ProductContext';
import { useContext } from 'react';

function Confirmation() {
    const { formData, formSubmitted } = useContext(ProductContext);

  return (
    <div>
      <h1>Your Information</h1>
      {formSubmitted && (
        <>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Email: {formData.email}</p>
    
      </>
      )}
    </div>
  );
}

export default Confirmation;