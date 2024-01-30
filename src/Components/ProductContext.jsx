import { createContext, useEffect, useState } from "react";

//creating a context that will be a global state to components
export const ProductContext = createContext();

function ProductProvider({ children }) {
  // State to track whether the form has been submitted or not
  const [formSubmitted, setFormSubmitted] = useState(false);

  //sets the selected size, in the size selectsize component
  const [selectedSize, setSelectedSize] = useState("");
  //sets the selected size, in the size selectsize component and shows it in the productcart component
  const [productSizes, setProductSizes] = useState({});

  // State to store the current product ID
  const [currentId, setCurrentId] = useState(null);

   // URL for fetching product data
  const PRODUCT_URL = "/Assets/data.json";

 // State to store the list of products
  const [products, setProducts] = useState([]);

  // State to store form data for customer information
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

  // skapar en state-variabel 'cart' med initialvärdet en tom array,
  // och en uppdateringsfunktion 'setCart'.
  // 'cart' används för att hålla reda på produkterna i varukorgen.
  const [cart, setCart] = useState([]);

  // skapr en state-variabel 'cartCount' med initialvärdet 0
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

  // State to store the list of favorite products
  const [favorites, setFavorites] = useState([]);

 // Function to add a product to the list of favorites
const addToFavorites = (product) => {
  // Using the spread operator to create a new array with the existing favorites and the new product
  setFavorites([...favorites, product]);
};

// Function to remove a product from the list of favorites
const removeFromFavorites = (productId) => {
  // Using the filter method to create a new array excluding the product with the specified id
  const updatedFavorites = favorites.filter(
      (favProduct) => favProduct.id !== productId
  );
  // Updating the state variable 'favorites' with the newly filtered array
  setFavorites(updatedFavorites);
};


// Dynamically update form data based on the provided name and value
  const updateFormData = (fieldName, value) => {
       // createing a new object using spread that preserves existing form data
    // Updating the specified field with the provided value in the new object
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

// useEffect hook to fetch product data when the component mounts
useEffect(() => {
  // Function to asynchronously fetch data
  async function fetchData() {
      try {
          // Sending a request to the URL
          const response = await fetch(PRODUCT_URL);
          // Parsing the response as JSON
          const jsonResponse = await response.json();

          // Updating the state variable 'products' with the fetched product data
          setProducts(jsonResponse.products);
      } catch (error) {
          // Logging an error message if there is an issue fetching the data
          console.error("Error fetching data:", error);
      }
  }

  // Invoking the fetchData function when the component mounts
  fetchData();
}, []);


  const contextValue = {
    products,
    formData,
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

   // Providing the context value to the components rendered as children
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
