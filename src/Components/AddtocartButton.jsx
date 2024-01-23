import React from 'react';
import { ProductContext } from './ProductContext';
import { useContext } from 'react';

const AddtocartButton = ({ product }) => {
    const { addToCart, setSelectedSize } = useContext(ProductContext);

    const handleAddToCart = () => {
        addToCart(product);
        setSelectedSize("")
    };

    return (
        <button onClick={handleAddToCart}>
            Add to Cart
        </button>
    );
};

export default AddtocartButton;
