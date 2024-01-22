
import { createContext, useEffect, useState, useContext } from "react";


export const ProductContext = createContext()

function ProductProvider({ children }) {
    const PRODUCT_URL = "/Assets/data.json";

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
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
        cart,
        setCart,
        addToCart,
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

