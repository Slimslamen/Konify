import { useState } from "react";
const Product_URL = 'https://fakestoreapi.com/products/1';

function Tshirts () {
    const [product, setProduct] = useState({})
    async function fetchProducts () {
        const response = await fetch(Product_URL);
        const jsonResponse = await response.json();
        const tshirt = jsonResponse.product
        setProduct(tshirt)
    }
    return (
        <main>
<button onClick={fetchProducts}>see title</button>
<h1>{product.image}</h1>
        </main>
    )
}
export default Tshirts;