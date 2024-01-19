import { createContext, useEffect, useState } from "react";


export const ProductContext = createContext()


function ProductProvider ( {children} ){
    const PRODUCT_URL = "Assets/data.json";

    const [products, setProducts] = useState([]);

    const addToCart = (productId) => {
        setProducts((prev) => ({...prev, [productId]: prev[productId] + 1}));
    };
    const removeFromCart = (productId) => {
        setProducts((prev) => ({...prev, [productId]: prev[productId] - 1}));
    };
  
    useEffect(() => {
      async function fetchData() {
        try{
            const response = await fetch(PRODUCT_URL);
            const jsonResponse = await response.json();

            setProducts(jsonResponse.products);
        }  catch (error) {
            console.error("Error fetching data:", error);
        }
    
      }
      fetchData();
    }, []);
    
     const contextValue = {
         products,
         setProducts,
         addToCart,
         removeFromCart,
     };

    return (
        <>
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
        </>
    )
}

  export default ProductProvider;

  