import { createContext, useEffect, useState } from "react";


export const ProductContext = createContext()

function ProductProvider ( {children} ){
    const PRODUCT_URL = "src/Assets/data.json";

    const [products, setProducts] = useState([]);
    
          
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      async function fetchData() {
        try{
            const response = await fetch(PRODUCT_URL);
            const jsonResponse = await response.json();

            setProducts(jsonResponse.products);
        }  catch (error) {
            console.error("Error fetching data:", error);
        }
    
          setIsLoading(false)
      }
      fetchData();
    }, []);
    
    // const contextValue = {
    //     products,
    //     setProducts,
    // };

    const contextValue = {
        products: Array.isArray(products) ? products : [], // Säkerställ att products alltid är en array
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

  