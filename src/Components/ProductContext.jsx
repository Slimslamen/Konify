import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

function ProductProvider({ children }) {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [selectedSize, setSelectedSize] = useState("");
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
  
  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const [searchfield, setSearchfield] = useState("");

// useState-hook används för att skapa en state-variabel 'cart' med initialvärdet en tom array,
// och en uppdateringsfunktion 'setCart'.
// 'cart' används för att hålla reda på produkterna i varukorgen.
  const [cart, setCart] = useState([]);


// useState-hook används för att skapa en state-variabel 'cartCount' med initialvärdet 0
// och en uppdateringsfunktion 'setCartCount'.
// 'cartCount' används för att hålla reda på antalet produkter i varukorgen.
  const [cartCount, setCartCount] = useState(0); 

// Funktionen resetCart återställer varukorgen till en tom array.
// setCart används för att uppdatera varukorgsstatet med en tom array.
  const resetCart = () => {
    setCart([]);
  };

// Funktionen resetCartCount återställer antalet produkter i varukorgen till en tom array.
// setCartCount används för att uppdatera varukorgsantalet med en tom array.
  const resetCartCount = () => {
    setCartCount([]);
  };


// Funktionen addToCart lägger till ett produktobjekt i varukorgen.
// Den tar emot en produkt som parameter och uppdaterar varukorgen och antalet produkter i varukorgen.
// 1. Spread-operator (...) används för att skapa en kopia av den befintliga varukorgen.
// 2. Produktobjektet läggs till den nya kopian av varukorgen.
// 3. setCart används för att uppdatera varukorgsstatet med den nya kopian.
// 4. setCartCount ökar antalet produkter i varukorgen med 1.
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
