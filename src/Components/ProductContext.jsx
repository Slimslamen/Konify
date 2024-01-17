import { createContext, useContext, useEffect, useState } from "react";


export const ProductContext = createContext()

function ProductProvider ( {children} ){
    const PRODUCT_URL = "src/data.json";

    const [products, setProducts] = useState([]);
    
          
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      async function fetchData() {
        try{
            const response = await fetch(PRODUCT_URL);
            const jsonResponse = await response.json();
            
            setProducts(jsonResponse);
        }  catch (error) {
            console.error("Error fetching data:", error);
        }
    
          setIsLoading(false)
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

  