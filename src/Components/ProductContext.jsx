import { createContext, useEffect, useState } from "react";


export const ProductContext = createContext()

function ProductProvider ({ children }){
    const PRODUCT_URL = "src/Assets/data.json";

    const [products, setProducts] = useState([]);

  
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

  