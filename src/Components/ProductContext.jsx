import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

function ProductProvider({ children }) {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [selectedSize, setSelectedSize] = useState([]);

  const PRODUCT_URL = "/Assets/data.json";

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

  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0); 

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartCount(cartCount + 1);
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
    cart,
    setCart,
    updateFormData,
    formSubmitted, 
    setFormSubmitted,
    addToCart,
    cartCount, 
    setCartCount,
    selectedSize, 
    setSelectedSize
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
