import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

function ProductProvider({ children }) {
    const [formSubmitted, setFormSubmitted] = useState(false);

    //sets the selected size, in the size selectsize component
    const [selectedSize, setSelectedSize] = useState("");
    //sets the selected size, in the size selectsize component and shows it in the productcart component
    const [productSizes, setProductSizes] = useState({});

    const [currentId, setCurrentId] = useState(null);


  const PRODUCT_URL = "/Assets/data.json";

  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    postalCode: "",
    adress: "",
    city: "",
    mobile: "",
  });
  
  // onSearchChange is triggered when the value of the search input field changes. It updates the searchfield state with the new value entered by the user.
  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };
  const [searchfield, setSearchfield] = useState("");

  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0); 

  const resetCart = () => {
    setCart([]);
  };
  const resetCartCount = () => {
    setCartCount([]);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartCount(cartCount + 1);
  };
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    setFavorites ([...favorites, product]);
  }

  const removeFromFavorites = (productId) => {
    // Filter out the product with the specified id from favorites
    const updatedFavorites = favorites.filter(
      (favProduct) => favProduct.id !== productId
    );
   setFavorites(updatedFavorites);
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
    setSelectedSize,
    productSizes,
    setProductSizes,
    currentId,
    setCurrentId,
    addToFavorites,
    favorites,
    setFavorites,
    removeFromFavorites,
    onSearchChange,
    searchfield, 
    setSearchfield,
    resetCart,
    resetCartCount,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
