import NavBar from "../Firstpagefolder/NavBar.jsx";
import Footer from "../Firstpagefolder/Footer.jsx" ;
import CardBtn from "./CardBtn.jsx";
import { useState, useEffect } from "react";
const Product_URL = 'https://fakestoreapi.com/products/1';

function Tshirts() {
    const [product, setProduct] = useState({title: ""})
    useEffect(() => { 
        async function getTshirt () {
        const response = await fetch(Product_URL);
        const jsonResponse = await response.json();
        const tshirt = jsonResponse.product;
        setProduct(tshirt);
    }
    getTshirt ()
    }, [])

    return(
    
                <main>
<h1>{product.title}</h1>
            <NavBar />
                <CardBtn />
            <Footer />
            </main>

    )
}
export default Tshirts;

