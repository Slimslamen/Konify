import { createContext, useEffect, useState, useContext } from "react";

export const ProductContext = createContext();

function ProductProvider({ children }) {
    const [formSubmitted, setFormSubmitted] = useState(false);
  const PRODUCT_URL = "Assets/data.json";

  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    postalCode: "",
    address: "",
    city: "",
    mobile: "",
  });

  const addToCart = (productId) => {
    setProducts((prev) => ({ ...prev, [productId]: prev[productId] + 1 }));
  };

  const removeFromCart = (productId) => {
    setProducts((prev) => ({ ...prev, [productId]: prev[productId] - 1 }));
  };

  const updateFormData = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(PRODUCT_URL);
        const jsonResponse = await response.json();

        setProducts(jsonResponse.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const contextValue = {
    products,
    setProducts,
    formData,
    setFormData,
    addToCart,
    removeFromCart,
    updateFormData,
    formSubmitted, 
    setFormSubmitted
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
