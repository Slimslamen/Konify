import Product from "../Pages/PageComponents/Product"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { ProductContext } from "../Components/ProductContext"


function SingleProduct(){
    const { id } = useParams()
    const { products } = useContext(ProductContext)
    
    const selectedProduct = products.find(product => product.id === parseInt(id));

    console.log("here" + selectedProduct);
    return(
        <>
            <h1>SingleProduct - { id }</h1>
            <Product product={selectedProduct}/>
        </>
    )
}

export default SingleProduct
